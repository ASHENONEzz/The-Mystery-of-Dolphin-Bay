function newGame()
{
    window.localStorage.nowBgm = "mute";
    document.write("<video id='video' src='../video/op.mp4' autoplay width='100%' onended=window.location.href='./main/Sc0.html'></video>");
    //以下是对按钮样式改变的尝试
}
function loadGame()
{
    let Player = JSON.parse(localStorage.getItem("temp"));
    let sceneNumber = Player.save;
    if (sceneNumber == undefined) {
        alert("您还没有保存过进度, 现在为您自动跳转至新的游戏页面");
        this.newGame();
    } else {
        let path = "./main/" + sceneNumber + ".html";
        location.assign(path);
    }
}
function ToAchievement()
{
    if (localStorage.getItem("temp")){
        location.assign("./Achievement.html");
    } else {
    alert("您已掉线，请重新登录！");
    }
}
function quitLogin()
{
    localStorage.removeItem("temp");
    location.assign("./login.html");
}
function aboutUs()
{
    window.location.assign("../about/index.html");
}
function flow() {
    window.document.getElementById("flow").style.width="100%";
    window.document.getElementById("flow").style.height="100%";
    document.getElementById("content").style.display="none";
    document.getElementById("flowBackButton").style.display="";
}
function flowBack() {
    document.getElementById("content").style.display="";
    document.getElementById("flow").style.width=0;
    document.getElementById("flow").style.height=0;
    document.getElementById("flowBackButton").style.display="none";
}