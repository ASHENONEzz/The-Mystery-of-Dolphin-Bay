function toHome()
{
    location.assign("../mainpage.html");
}
function Back()
{
    nodeID --;
    story.next();
}
function saveGame(sceneNumber) {
    let Player = JSON.parse(localStorage.getItem("temp"));
    Player.save = sceneNumber;
    localStorage.setItem(Player.name, JSON.stringify(Player));
    localStorage.setItem("temp", JSON.stringify(Player));
    alert("您已成功保存该节点！\n退出后点击继续游戏即可继续该存档");
}
function flowPicture() {
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