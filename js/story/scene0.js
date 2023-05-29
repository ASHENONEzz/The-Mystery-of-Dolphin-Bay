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
                location.assign("url1");
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
                location.assign("url1");
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
        bg: "../../images/bg/主人公家_白天.png",
        text:"男主房间",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "日常欢快",
        sound: "../../music/sound/开门.ogg",
        choice: "",
    },
    2: {
        bg: "../../images/bg/主人公家_白天.png",
        text:"参加完高中毕业典礼刚刚回到家中，看着自己挑灯夜读的书房我不禁感慨，自己高中的生涯就到此结束了，这便意味着人生即将踏入一段新的进程。。。尽管忙碌但却充实幸福的高中回忆也在脑海中徐徐浮现...",
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
        bg: "../../images/bg/主人公家_白天.png",
        text:"仔细想来，自己在高中里交到了许多朋友，学业也小有成就，可以说是理想的收尾了，但却唯独那件事，我始终无法释怀。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "mute",
        sound: "",
        choice: "",
    },
    4: {
        bg: "../../images/bg/通学路夕阳.png",
        text:"你说什么！？休学...返乡?\n为什么...平白无故地......",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "告别",
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
        bg: "../../images/bg/通学路夕阳.png",
        text:"这是我自己的决定，也是...我的宿命...",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/制服全身闭目微嗔.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    6: {
        bg: "../../images/bg/通学路夕阳.png",
        text:"不过...不用担心，我很快就会回来的......",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/女主制服微笑.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    7: {
        bg: "../../images/bg/夕阳.png",
        text:"就这样，在一年前的今天，她离开了东京，回到了她的故乡——伊汝卡岛......在我下定决心向她告白之前...",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/海浪声.ogg",
        choice: "",
        
    },
    8: {
        bg: "../../images/bg/夕阳.png",
        text:"望着她乘船离去的海面，我的心却久久不能平静...",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    9: {
        bg: "../../images/bg/学校走廊_白天.png",
        text:"犹记得我们的第一次相遇，是在学院的廊道里。\n那时候刚从乡下来到大城市的她总受到班里不良的欺负，那次我正好遇上她被霸凌，便出手帮助了她。",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "校园离别",
        sound: "../../music/sound/拍肩.ogg",
        choice: "",
    },
    10: {
        bg: "../../images/bg/学校走廊_白天.png",
        text:" 而那也正是我们相识的契机...",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    11: {
        bg: "../../images/bg/学校走廊_白天.png",
        text:" 谢谢你帮我...你的名字是？...",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/制服全身睁眼笑容.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    12: {
        bg: "../../images/bg/铁路信号灯.png",
        text:"在如此戏剧性的相遇之后，我们慢慢走近，逐渐了解彼此...",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    13: {
        bg: "../../images/bg/青空.png",
        text:"一同度过半载时光，我们的感情也变得深厚，但谁都不愿戳破爱恋的心意，生怕这份感情如同泡影般意消于形...",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    14: {
        bg: "../../images/bg/阴云.png",
        text:"可就在她无缘的离去之后，未能来得及让她知晓的这份心意却成为了我内心之中久久未能消去的阴霾...",
        //下面是Character position: m,r,l
        cp: "",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    15: {
        bg: "../../images/bg/主人公家_夕阳.png",
        text:"思绪回到眼前，看着透过窗子洒进屋内的那缕夕阳，正同我和她分别时候一样。",
        //下面是Character position: m,r,l
        cp: "",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
       
    },
    16: {
        bg: "../../images/bg/主人公家_夕阳.png",
        text:"一股思绪，  不， 是一种更为强烈的情感涌上心头！！！",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
        
    },
    17: {
        bg: "../../images/bg/主人公家_夕阳.png",
        text:"趁着这股劲头，我拿起外套便冲出了屋外...“我要去找她，至少要知道她离开的理由...”",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/开门.ogg",
        choice: "",
    },
    18: {
        bg: "../../images/bg/夕阳.png",
        text:"我来到了码头，在与和她告别那天同样的夕阳下，    登上了去往伊汝卡岛的渡轮......",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/海浪声.ogg",
        choice: "",
    },
}
function goForward() {
    //建议加上渐出
    window.location.assign("Sc1.html");
}
//自动的进度储存
function saveThisScene() {
    var Player = JSON.parse(localStorage.getItem("temp"));
    Player.Progress[0][0] = 1;
    localStorage.setItem("temp", JSON.stringify(Player));
    localStorage.setItem(Player.name, JSON.stringify(Player));
}
window.onload = function all(){
    saveThisScene();
    story.next();
}