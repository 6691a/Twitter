import random
from django.shortcuts import render
from .models import User
from .serializers import UserSerializer, CreateUserSerializer

# rest_ful
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

# email
from django.core.mail import EmailMessage


def getUser_list(request):
    if request.method == 'GET':
        query_set = User.objects.all()
        serializer = UserSerializer(query_set, many=True)
        return JsonResponse(serializer.data, safe=False)


def findUser(request, email):
    if request.method == 'GET':
        if User.objects.filter(email=email).exists() == True:
            return JsonResponse({'message': "이미 등록된 이메일입니다."}, status=401)
        else:
            return JsonResponse({'message': "가입이 가능한 이메일입니다."}, status=200)


@csrf_exempt
def createUser(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)

        if password_validation(data['password']):
            return JsonResponse({"message": "비밀번호가 양식에 맞지 않습니다. status = 400"}, status=400)

        user = CreateUserSerializer(data=data)

        if not user.is_valid(raise_exception=True):
            return JsonResponse({"message": "유저 인증 실패 status = 400"}, status=400)

        if User.objects.filter(email=data['email']).exists() == False:
            key = sendMail(data['email'])
            # user.save()
            return JsonResponse({"message": "유저 생성 성공 status = 201",
                                 "key": key}, status=201)
        else:
            return JsonResponse({"message": "유저 생성 실패 email 중복 status = 400"}, status=400)

        return JsonResponse({"message": "유저 생성 실패 status = 400"}, status=400)
    else:
        return JsonResponse({"message": "잘못된 접근 입니다. status = 400"}, status=400)


def activeUser(request):
    if request.method == 'PUT':
        data = JSONParser().parse(request)
        query = User.objects.get(email=data['email'])
        query.is_active = True
        return JsonResponse({"message": "이메일 인증 성공 status = 201", }, status=201)

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
    mail_body = f'''이메일 주소 확인하기
    {key}'''
    email = EmailMessage(mail_title, mail_body, to=[to_email])

    email.send()

    return key
