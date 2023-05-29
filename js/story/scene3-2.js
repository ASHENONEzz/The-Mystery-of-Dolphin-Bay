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
                location.assign("../page/Sc3-1.html");
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
                location.assign("../page/Sc3-2.html");
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
        bg: "../../images/bg/警局.png",
        text:"我和纱夏来到警局找到了藤堂警长...",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "平静",
        sound: "../../music/sound/开门.ogg",
        choice: "",
    },
    2: {
        bg: "../../images/bg/警局.png",
        text:"你们来啦，有什么需要帮忙的吗？",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/开门.ogg",
        choice: "",
    },
    3: {
        bg: "../../images/bg/警局.png",
        text:"藤堂警长，我们想了解一下悠香小姐的案件细节。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女微笑陈述.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    4: {
        bg: "../../images/bg/警局.png",
        text:"由于当晚的大雨冲刷，现场并没有留下任何足迹和犯罪痕迹，我们目前搜索了悠香的房间，但里面只有一些文字素材和报道的草稿。",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/警官白衣通常.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
        choiceNumber: "2",
        choiceContent1: "信息1",
        choiceContent2: "信息2",
        choiceContent3: "信息3",
        choiceContent4: "",
        choiceContent5: "",
        choiceName1: "选择1",
        choiceName2: "选择2",
        choiceName3: "选择3",
        choiceName4: "选择4",
        choiceName5: "选择5",
    },
    5: {
        bg: "../../images/bg/警局.png",
        text:"那警长，你方便和我们讲讲有关海豚湾诅咒的案件吗？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    6: {
        bg: "../../images/bg/警局.png",
        text:"海豚湾诅咒案件在悠香遇害案之前已有12起。第一起案件发生在7年前，而最后一起则是在两年前，这两年以来从未在发生杀人事件，直到悠香的死......",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/警官白衣通常.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "轻微诡异",
        sound: "",
        choice: "",
    },
    7: {
        bg: "../../images/bg/警局.png",
        text:"暂时将悠香小姐的死归为其中之一的话，如此的连环杀人案竟然持续了7年之久，这实在是太诡异了。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    8: {
        bg: "../../images/bg/警局.png",
        text:"确实，而且案件过去的时间周期都是在5-6个月左右，但在三年以前，也就是第11-第12起案件之间就相隔了近一年时间，之后持续两年没有发生新案件...",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/警官白衣闭眼无奈.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    9: {
        bg: "../../images/bg/警局.png",
        text:"那可以讲讲第12起案件的详情吗",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    10: {
        bg: "../../images/bg/警局.png",
        text:"根据我们的报告，第12起案件的死者是镇长的前副官，之前因为人事调动离开了这座岛，但不知道为何两年前他又突然回来，说是来变卖岛上他名下的别墅。就在他返岛后不久便遭到杀害。",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/警官白衣无可奈何.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    11: {
        bg: "../../images/bg/警局.png",
        text:"别墅？...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    12: {
        bg: "../../images/bg/警局.png",
        text:"那栋别墅位于商业街的内部，当初我们搜查了整栋房子，但并没有发现什么有用的信息。",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    13: {
        bg: "../../images/bg/警局.png",
        text:"要不，我们也去那栋别墅看看，说不定能有什么意外的发现？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女困惑.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    14: {
        bg: "../../images/bg/警局.png",
        text:"好的，（转向藤堂警长）那我们先告辞了...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    15: {
        bg: "../../images/bg/警局.png",
        text:"行，这是别墅的钥匙，可别在里面大闹天宫啊。。我还要很多事要处理，就先不和你们一起去了，你们注意安全。",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/警官白衣无可奈何.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    16: {
        bg: "../../images/bg/商业街.png",
        text:"（怀着一丝丝紧张，我们走向了商业街的深处）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    17: {
        bg: "../../images/bg/废弃别墅外.png",
        text:"这里就是那栋别墅吗？和商业街的氛围格格不入呢...（略感害怕地看向我）我们快点进去吧",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服小害怕.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
}
function goForward() {
    window.location.assign("Sc4.html");
}
function saveThisScene() {
    var Player = JSON.parse(localStorage.getItem("temp"));
    Player.Progress[3][1] = 1;
    localStorage.setItem("temp", JSON.stringify(Player));
    localStorage.setItem(Player.name, JSON.stringify(Player));
}
window.onload = function all(){
    saveThisScene();
    story.next();
}