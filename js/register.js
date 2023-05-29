function register() {
    var username, password, password2;
    username = document.getElementById("user_name").value;
    password = document.getElementById("password").value;
    password2 = document.getElementById("password_check").value;
    if (!username) {
        document.getElementById("info").innerHTML = "请输入账号";
    }
    else if (!password) {
        document.getElementById("info").innerHTML = "请输入密码";
    }
    else if (password != password2) {
        document.getElementById("info").innerHTML = "请检查两次密码输入是否一致";
    }
    else if (password.length < 6) {
        document.getElementById("info").innerHTML = "建议您的密码长度不要少于6位";
    }
    else {
        if (JSON.parse(localStorage.getItem(username)) != null) {
            document.getElementById("info").innerHTML = "该用户已存在";
        }
        else {
            var newPlayer = {
                "name": username,
                "password": password,
                "Achievement": [0, 0, 0, 0, 0, 0, 0, 0],
                "Progress": [
                    [0],
                    [0],
                    [0],
                    [0, 0],
                    [0],
                    [0, 0],
                    [0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0],
                    [0],
                    [0]
                ],
                "badEnd":[0, 0, 0],
                "fakeEnd": false,
                "trueEnd":[0, 0],
                "save": undefined
            }
            newPlayer.name = username;
            newPlayer.password = password;
            var strNewPlayer = JSON.stringify(newPlayer);
            localStorage.setItem(username, strNewPlayer);
            location.assign("login.html");
        }
    }
}