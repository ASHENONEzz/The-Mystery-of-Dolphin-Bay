function login(){
    username = document.getElementById("user_name").value;
    password = document.getElementById("password").value;
    if(!username){
        document.getElementById("info").innerHTML="请输入账号";
    }
    else if(!password){
        document.getElementById("info").innerHTML="请输入密码";
    }
    else{
        if(!localStorage.getItem(username)){
            document.getElementById("info").innerHTML="用户不存在";
        }
        else{
            if(JSON.parse(localStorage.getItem(username)).password != password){
                document.getElementById("info").innerHTML="密码错误";
            }
            else{
                localStorage.setItem("temp", localStorage.getItem(username));
                alert(username + "，欢迎你来到海豚湾！");
                location.assign("./mainPage.html");
            }
        }
    }
}