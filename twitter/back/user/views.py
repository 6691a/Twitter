from rest_framework.permissions import IsAuthenticated
import random
from django.shortcuts import render
from .models import User
from .serializers import UserSerializer, CreateUserSerializer

# rest_ful
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from rest_framework.permissions import AllowAny
from rest_framework import status

# token
from rest_framework.authtoken.models import Token

# email
from django.core.mail import EmailMessage
from django.template.loader import render_to_string, get_template


def getUser_list(request):
    if request.method == 'GET':
        query_set = User.objects.all()
        serializer = UserSerializer(query_set, many=True)
        return JsonResponse(serializer.data, safe=False)


def findUser(request, email):
    if request.method == 'GET':
        if User.objects.filter(email=email).exists() == True:
            return JsonResponse({'message': "이미 등록된 이메일입니다.",
                                 'email': email}, status=201)
        else:
            return JsonResponse({'message': "가입이 가능한 이메일입니다."}, status=200)


@csrf_exempt
def createUser(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)

        if password_validation(data['password']):
            return JsonResponse({"message": "비밀번호가 양식에 맞지 않습니다. status = 400"}, status=400)

        if User.objects.filter(email=data['email']).exists() == False:
            key = sendMail(data['email'])
            data['key'] = key

            user = CreateUserSerializer(data=data)

            if not user.is_valid(raise_exception=True):
                return JsonResponse({"message": "유저 인증 실패 status = 400"}, status=400)

            user.save()

            return JsonResponse({"message": "유저 생성 성공 status = 201"}, status=201)
        else:
            return JsonResponse({"message": "유저 생성 실패 email 중복 status = 400"}, status=400)

        return JsonResponse({"message": "유저 생성 실패 status = 400"}, status=400)
    else:
        return JsonResponse({"message": "잘못된 접근 입니다. status = 400"}, status=400)


def password_validation(password):
    vali_data = [
        # must have at least one lowercase
        lambda s: any(x.islower() for x in s),
        lambda s: any(x.isdigit() for x in s),  # must have at least one digit
        lambda s: len(s) == len(s.replace(" ", "")),
        lambda s: len(s) >= 8                   # must be at least 7 characters
    ]
    for data in vali_data:
        if not data(password):
            return True


def sendMail(to_email):
    key = random.randrange(100000, 1000000)
    mail_title = f'{key}가 내 트위터 인증 코드 입니다'
    mail_body = get_template('signup_mail.html').render({"key": key})
    email = EmailMessage(mail_title, mail_body, to=[to_email])
    email.content_subtype = "html"
    status = email.send()
    if(status != 1):
        return JsonResponse({"message": "이메일 송신 실패 status = 400"}, status=400)
    return key


@csrf_exempt
def active_user(request):
    if request.method == 'PUT':
        data = JSONParser().parse(request)

        user = User.objects.get(key=data['key'], email=data['email'])

        if user:
            user.is_active = True
            user.key = "null"
            user.save()

            return JsonResponse({"message": "이메일 인증 성공 status = 200"}, status=200)
        else:
            return JsonResponse({"message": "User를 찾지 못함 status = 400"}, status=400)
    else:
        return JsonResponse({"message": "잘못된 접근 입니다. status = 400"}, status=400)


def reMail(request, email):
    if request.method == 'GET':
        user = User.objects.get(email=email)
        key = sendMail(email)
        user.key = key
        user.save()
        return JsonResponse({"message": "이메일 재 발송 성공 status = 200"}, status=200)
    return JsonResponse({"message": "잘못된 접근 입니다. status = 400"}, status=400)


@csrf_exempt
def profile_Upload(request):
    if request.method == 'POST':
        if request.FILES.getlist('img'):
            user = User.objects.get(email=request.POST['email'])
            user.image = request.FILES.getlist('img')[0]
            user.save()
            return JsonResponse({"message": "저장 성공"}, status=200)
        else:
            return JsonResponse({"message": "저장 실패"}, status=400)
    return JsonResponse({"message": "잘못된 접근 입니다. status = 400"}, status=400)


@csrf_exempt
def login(request):
    if request.method == 'POST':
        pass


class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        print(request.user)
        return JsonResponse(content)


class UserCreateView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):

        data = request.data
        data['key'] = sendMail(data['email'])
        serializer = CreateUserSerializer(data=data)

        if serializer.is_valid():
            user = serializer.save()
            content = {'email': user.email}
            return JsonResponse(content, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
