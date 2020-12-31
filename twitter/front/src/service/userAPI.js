class UserAPI {
    constructor(path, method = 'GET') {
        // this.path  = path;
        this.getRequestOptions = {
            method: `${method}`,
            redirect: 'follow'
        };
        this.main_path =  ''
    }

    async getUsers() {
        const response = await fetch("http://localhost:8000/user/", this.getRequestOptions);
        const result = await response.json();
        return result.items;
    }
}