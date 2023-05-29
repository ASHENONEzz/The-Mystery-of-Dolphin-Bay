var nodeID = 0;
var textLen = 0;
var hasPrintNumber = 0;
var textDOM = document.getElementById("idText");
var printingText = "";
var printInterval = null;
var delay = 100;//时间间隔越长越慢
var choiceArray = [];//选择过和未选择过的选项储存的数组
var Choice;
var ChoiceNumber = 0;
var fakeChoice = 0;//0表示不是假选项,1表示是
let story = {
    choiceClick1 : function() {
        switch(Choice) {
            case 'd':
                if (choiceArray[0]) {
                    textDOM.innerHTML="";
                    textDOM.innerHTML=story[nodeID+1].choiceContent1;
                    choiceArray[0] = 0;
                    document.getElementById("Choice1").style.display="none";
                    ChoiceNumber --;
                    if (fakeChoice == 1) {
                        ChoiceNumber = 0;
                        fakeChoice = 0;
                        document.getElementById("Choice1").style.display="none";
                        document.getElementById("Choice2").style.display="none";
                        document.getElementById("Choice3").style.display="none";
                        document.getElementById("Choice4").style.display="none";
                        document.getElementById("Choice5").style.display="none";
                    }
                    if (ChoiceNumber == 0) {
                        story[nodeID+1].choice = "";
                    }
                    break;
                }
            case 'n':
                location.assign("Sc7-1.html");
        }
    },
    choiceClick2 : function() {
        switch(Choice) {
            case 'd':
                if (choiceArray[1]) {
                    textDOM.innerHTML="";
                    textDOM.innerHTML=story[nodeID+1].choiceContent2;
                    choiceArray[1] = 0;
                    document.getElementById("Choice2").style.display="none";
                    ChoiceNumber --;
                    if (fakeChoice == 1) {
                        ChoiceNumber = 0;
                        fakeChoice = 0;
                        document.getElementById("Choice1").style.display="none";
                        document.getElementById("Choice2").style.display="none";
                        document.getElementById("Choice3").style.display="none";
                        document.getElementById("Choice4").style.display="none";
                        document.getElementById("Choice5").style.display="none";
                    }
                    if (ChoiceNumber == 0) {
                        story[nodeID+1].choice = "";
                    }
                    break;
                }
            case 'n':
                location.assign("Sc8.html");
        }
    },
    choiceClick3 : function() {
        switch(Choice) {
            case 'd':
                if (choiceArray[2]) {
                    textDOM.innerHTML="";
                    textDOM.innerHTML=story[nodeID+1].choiceContent3;
                    choiceArray[2] = 0;
                    document.getElementById("Choice3").style.display="none";
                    ChoiceNumber --;
                    if (fakeChoice == 1) {
                        ChoiceNumber = 0;
                        fakeChoice = 0;
                        document.getElementById("Choice1").style.display="none";
                        document.getElementById("Choice2").style.display="none";
                        document.getElementById("Choice3").style.display="none";
                        document.getElementById("Choice4").style.display="none";
                        document.getElementById("Choice5").style.display="none";
                    }
                    if (ChoiceNumber == 0) {
                        story[nodeID+1].choice = "";
                    }
                    break;
                }
            case 'n':
                location.assign("url1");
        }
    },
    choiceClick4 : function() {
        switch(Choice) {
            case 'd':
                if (choiceArray[3]) {
                    textDOM.innerHTML="";
                    textDOM.innerHTML=story[nodeID+1].choiceContent4;
                    choiceArray[3] = 0;
                    document.getElementById("Choice4").style.display="none";
                    ChoiceNumber --;
                    if (fakeChoice == 1) {
                        ChoiceNumber = 0;
                        fakeChoice = 0;
                        document.getElementById("Choice1").style.display="none";
                        document.getElementById("Choice2").style.display="none";
                        document.getElementById("Choice3").style.display="none";
                        document.getElementById("Choice4").style.display="none";
                        document.getElementById("Choice5").style.display="none";
                    }
                    if (ChoiceNumber == 0) {
                        story[nodeID+1].choice = "";
                    }
                    break;
                }
            case 'n':
                location.assign("url1");
        }
    },
    choiceClick5 : function() {
        switch(Choice) {
            case 'd':
                if (choiceArray[4]) {
                    textDOM.innerHTML="";
                    textDOM.innerHTML=story[nodeID+1].choiceContent5;
                    choiceArray[4] = 0;
                    document.getElementById("Choice5").style.display="none";
                    ChoiceNumber --;
                    if (fakeChoice == 1) {
                        ChoiceNumber = 0;
                        fakeChoice = 0;
                        document.getElementById("Choice1").style.display="none";
                        document.getElementById("Choice2").style.display="none";
                        document.getElementById("Choice3").style.display="none";
                        document.getElementById("Choice4").style.display="none";
                        document.getElementById("Choice5").style.display="none";
                    }
                    if (ChoiceNumber == 0) {
                        story[nodeID+1].choice = "";
                    }
                    break;
                }
            case 'n':
                location.assign("url1");
        }
    },
    next : function(){
        if (!(nodeID+1 in this)) {
            goForward();
        } 
        if (textLen <= hasPrintNumber && story[nodeID+1].choice == "") {
            textDOM.innerHTML="";
            nodeID ++;
            printInterval = null;
            //切换背景
            if (story[nodeID].bg != "") {
                var Background = story[nodeID].bg;
                document.getElementsByTagName("body")[0].background=Background;
            }
            
            document.getElementById("speaker").innerText=story[nodeID].name;
            if (story[nodeID].cp != "") {
                switch(story[nodeID].cp){
                    case'l':
                        document.getElementsByClassName("lCharacter")[0].style.display="";
                        var characterPicture = story[nodeID].character;
                        document.getElementById("lc").src=characterPicture;
                        document.getElementsByClassName("rCharacter")[0].style.display="none";
                        document.getElementsByClassName("mCharacter")[0].style.display="none";
                        break;
                    case'm':
                        document.getElementsByClassName("mCharacter")[0].style.display="";
                        var characterPicture = story[nodeID].character;
                        document.getElementById("mc").src=characterPicture;
                        document.getElementsByClassName("lCharacter")[0].style.display="none";
                        document.getElementsByClassName("rCharacter")[0].style.display="none";
                        break;
                    case'r':
                        document.getElementsByClassName("rCharacter")[0].style.display="";
                        var characterPicture = story[nodeID].character;
                        document.getElementById("rc").src=characterPicture;
                        document.getElementsByClassName("lCharacter")[0].style.display="none";
                        document.getElementsByClassName("mCharacter")[0].style.display="none";
                        break;
                }
            }
            if (story[nodeID].avatar != "") {
                var avatarPicture = story[nodeID].avatar;
                document.getElementById("smallAvatar").src=avatarPicture;
            }
            //bgm切换在此处
            var bgm = story[nodeID].bgm;
            if (bgm != "") {
                window.localStorage.nowBgm = bgm;
            }
            if (story[nodeID].sound != "") {
                var sound = story[nodeID].sound;
                document.getElementById("sound").src=sound;
            }
            textLen = story[nodeID].text.length;
            hasPrintNumber = 0;
            printingText = "";
            printInterval = setInterval(function () {
                if (hasPrintNumber == textLen) {
                    printingText = "";
                    clearInterval(printInterval);
                } 
                textDOM.innerHTML += story[nodeID].text.charAt(hasPrintNumber++);
            }, delay);
        } else 
        if (story[nodeID+1].choice == ""){
            textLen = story[nodeID].text.length;
            clearInterval(printInterval);
            hasPrintNumber = 0;
            while(textLen > hasPrintNumber){
                printingText += story[nodeID].text.charAt(hasPrintNumber++);
                textDOM.innerHTML = printingText;
            }
            printingText = "";
            }else {
                // Choice是选项的类别
                Choice = story[nodeID+1].choice;
                ChoiceNumber = story[nodeID+1].choiceNumber;
                for(i = 0; i < story[nodeID+1].choiceNumber; i ++) {
                    choiceArray.push(1);
                }
                let t = 0;
                if (t < ChoiceNumber) {
                    document.getElementsByClassName("choiceBox")[0].style.display="";
                    document.getElementsByClassName("choiceBox")[0].innerHTML=story[nodeID+1].choiceName1;
                    t ++;
                }
                if (t < ChoiceNumber) {
                    document.getElementsByClassName("choiceBox")[1].style.display="";
                    document.getElementsByClassName("choiceBox")[1].innerHTML=story[nodeID+1].choiceName2;
                    t ++;
                }
                if (t < ChoiceNumber) {
                    document.getElementsByClassName("choiceBox")[2].style.display="block";
                    document.getElementsByClassName("choiceBox")[2].innerHTML=story[nodeID+1].choiceName3;
                    t ++;
                }
                if (t < ChoiceNumber) {
                    document.getElementsByClassName("choiceBox")[3].style.display="";
                    document.getElementsByClassName("choiceBox")[3].innerHTML=story[nodeID+1].choiceName4;
                    t ++;
                }
                if (t < ChoiceNumber) {
                    document.getElementsByClassName("choiceBox")[4].style.display="";
                    document.getElementsByClassName("choiceBox")[4].innerHTML=story[nodeID+1].choiceName5;
                    t ++;
                }
                }
    },
    1: {
        bg: "../../images/bg/别墅内1.png",
        text:"打开了，这是...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/保险柜改B.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "轻微诡异",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    2: {
        bg: "../../images/bg/别墅内1.png",
        text:"保险箱里的是一大叠文件，我和纱夏开始着手翻阅这些资料...",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
        choiceNumber: "4",
        choiceContent1: "客厅很气派，前主人应该经常在这里招待客人，但除了华丽的装潢以外，似乎并没有什么值得注意的地方。",
        choiceContent2: "这里貌似是卧室，床前挂着一幅很大的全身画像...",
        choiceContent3: "一间很普通的客房，陈设和主卧比起来简单了不少，好像并没有什么线索...",
        choiceContent4: "这间房间里放着一张木质办公桌和一立摆满了书的书架，看样子是书房了...",
        choiceName1: "客厅",
        choiceName2: "房间1",
        choiceName3: "房间2",
        choiceName4: "房间3",
    },
    3: {
        bg: "../../images/bg/别墅内1.png",
        text:"（箱中存放着大量有关岛上捕豚活动的记录，其中还包括了一份项目人员名单和资金流转报告。）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/保险柜改B.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    4: {
        bg: "../../images/bg/别墅内1.png",
        text:"（这些就是悠香小姐想要调查的资料吗，涉及到了政府的腐败和岛上的利益往来......）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/纸张.ogg",
        choice: "d",
        choiceNumber: "2",
        choiceContent1: "记录上显示捕豚活动在诅咒杀人事件开始后的第三年因相关人士顾忌而暂时中止，但在两年前事件稍许平复后，岛上似乎又开始了捕杀活动。（这些记录是证明岛上大量非法捕杀贩卖海洋保护动物的有利佐证）",
        choiceContent2: "报告上显示，早年小岛的主要资金来源就是通过捕杀海豚这般非法行径来赚取暴利，而这些钱款有相当一部分进了镇长和一些腐败官员的口袋，由于诅咒事件捕杀活动中止，近年来岛上的经济状况并不乐观，所以他们才顶着风险又开始了捕杀活动。（看样子岛上官员对于捕杀活动是知情的，甚至可以说就是他们放任了这种行径。）",
        choiceName1: "查阅捕豚活动记录",
        choiceName2: "查阅资金流转报告",
    },
    5: {
        bg: "../../images/bg/别墅内1.png",
        text:"（一种阴谋的气息开始在我的思绪中环绕...）悠香小姐，已经调查到了这些就意味着...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/心脏跳动.ogg",
        choice:"",
    },
    6: {
        bg: "../../images/bg/别墅内1.png",
        text:"（仔细翻阅着人员名单）这样看来，海豚湾诅咒案件的死者并不是随机的，受害者大多是这份名单上的捕猎活动参与者和既得利益者。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服震惊.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "../../music/sound/翻书.ogg",
        choice:"",
    },
    7: {
        bg: "../../images/bg/别墅内1.png",
        text:"也就是说，凶手其实是在用这种极端的方式阻止，或者是说...报复捕杀海豚的行径吗？为什么要用如此残忍极端的手段!...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/心脏跳动.ogg",
        choice:"",
    },
    8: {
        bg: "../../images/bg/别墅内1.png",
        text:"（轻声低语）或许...也没有更好的解决办法了吧...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服不情愿.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    9: {
        bg: "../../images/bg/别墅内1.png",
        text:"可是，悠香小姐并不在名单中，这很明显有悖凶手的基本杀人动机，还是说...这并不是海豚湾诅咒凶手所为...而是模仿作案！？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    10: {
        bg: "../../images/bg/别墅内1.png",
        text:"（看着手上记录着岛上肮脏交易的档案，我越发感觉所谓的海豚湾诅咒并不是那么简单的连环杀人案件）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    11: {
        bg: "../../images/bg/别墅内1.png",
        text:"咚...咚（正当我和纱夏陷入对整个事件的思考时，别墅里的挂钟传来了声响...）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/敲钟.wav",
        choice:"",
    },
    12: {
        bg: "../../images/bg/别墅内1.png",
        text:"时间已经不早了，我们还是先回去吧，这些报告的事，我们要不先交给藤堂警长处理？之后我还要去准备明天的海神祭典",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服不情愿.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    13: {
        bg: "../../images/bg/别墅内1.png",
        text:"（匆匆拍下几张文件的照片）好吧，但是，小夏，我还有好多事情想问......",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/拍照.ogg",
        choice:"",
    },
    14: {
        bg: "../../images/bg/废弃别墅外夕.png",
        text:"(刚走到别墅门口，纱夏便匆匆道别了...)明...天见......",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "../../music/bg/告别.ogg",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    15: {
        bg: "../../images/bg/废弃别墅外夕.png",
        text:"（看着纱夏远去，我的心里有种说不出的难受...她似乎变了很多...也不知这一年里究竟发生了什么）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    16: {
        bg: "../../images/bg/商业街夕.png",
        text:"站在商业街的街角，我的心中有两个念头开始斗争",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    17: {
        bg: "../../images/bg/商业街夕.png",
        text:"站在商业街的街角，我的心中有两个念头开始斗争",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"n",
        choiceNumber: "2",
        choiceName1: "前往警局将资料交给藤堂警长",
        choiceName2: "前往神社当面询问小夏",
    },
}
function goForward() {
    window.location.assign("Sc7.html");
}
function saveThisScene() {
    var Player = JSON.parse(localStorage.getItem("temp"));
    Player.Progress[6][0] = 1;
    localStorage.setItem("temp", JSON.stringify(Player));
    localStorage.setItem(Player.name, JSON.stringify(Player));
}
window.onload = function all(){
    saveThisScene();
    story.next();
}