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
                location.assign("Sc7-3.html");
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
                location.assign("badEnd2.html");
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
        bg: "../../images/bg/神社-白天.png",
        text:"纱夏！你果然有参与海豚湾杀人事件吗？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "轻度悲伤",
        sound: "",
        choice: "",
    },
    2: {
        bg: "../../images/bg/神社-白天.png",
        text:"你已经知道了吗...这件事和你没关系！...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女震惊.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    3: {
        bg: "../../images/bg/神社-白天.png",
        text:"所以到底是为什么？！",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice:"",
    },
    4: {
        bg: "../../images/bg/神社-白天.png",
        text:"为什么...为什么...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女沉默.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    5: {
        bg: "../../images/bg/神社-白天.png",
        text:"为什么......",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女沉默.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    6: {
        bg: "../../images/bg/神社-白天.png",
        text:"为什么那群肮脏的大人不能得到制裁！为什么不能让那群践踏生命的人得到同等的惩罚！为什么...爸爸和南姐姐要为他们的贪婪付诸生命......",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女怒.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    7: {
        bg: "../../images/bg/神社-白天.png",
        text:"（看着纱夏歇斯底里的模样，我不免得有些同情）",
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
        bg: "../../images/bg/神社-白天.png",
        text:"纱夏，我们已经找到了官员腐败的证据，一定能让他们得到制裁的...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    9: {
        bg: "../../images/bg/神社-白天.png",
        text:"不！他们必须血债血偿、千倍奉还...我不能原谅...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女怒.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    10: {
        bg: "../../images/bg/神社-白天.png",
        text:"不，纱夏...你只是被复仇冲昏了头脑...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    11: {
        bg: "../../images/bg/神社-白天.png",
        text:"你觉得你能够利用高桥先生帮你完成最终的复仇，可是你错了...",
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
        bg: "../../images/bg/神社-白天.png",
        text:"七年前科考团的惨案，高桥先生痛失了爱人，悲痛欲绝的他转而被复仇的念头所支配，因此犯下了最初的海豚湾诅咒杀人案...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    13: {
        bg: "../../images/bg/神社-白天.png",
        text:"那时的他就像现在的你一样，被内心的愤恨冲昏了头脑，当他回过神来，却已经上手沾满鲜血，无法回头了。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    14: {
        bg: "../../images/bg/神社-白天.png",
        text:"他变成了，他最厌恶的、践踏生命的人...",
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
        bg: "../../images/bg/神社-白天.png",
        text:"高桥...他...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女沉默.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    16: {
        bg: "../../images/bg/神社-白天.png",
        text:"高桥他自首了，在恳求我不要将你告发之后...",
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
        bg: "../../images/bg/神社-白天.png",
        text:"为什么...要为了我...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女感动.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    18: {
        bg: "../../images/bg/神社-白天.png",
        text:"高桥告诉我，南小姐是他的精神支柱，而你也是他在乎的、重要的人...他希望你能有个美好快乐的人生",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    19: {
        bg: "../../images/bg/神社-白天.png",
        text:"我想，他只是不希望你像曾经的他那样被复仇冲昏头脑，堕入无法回头的深渊...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    20: {
        bg: "../../images/bg/神社-白天.png",
        text:"不，为了爸爸，我必须...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女沉默.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    21: {
        bg: "../../images/bg/神社-白天.png",
        text:"纱夏...复仇不过是一种安慰的形式，它能给人快感，当那之后是无穷的寂寞与黑暗...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "墨小菊天下第一",
        sound: "",
        choice: "",
    },
    22: {
        bg: "../../images/bg/神社-白天.png",
        text:"用残忍的血腥，是无法抹去仇恨的，那只能让你原本光鲜的双手，再也洗不脱斑斑血迹...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    23: {
        bg: "../../images/bg/哭哭.png",
        text:"（纱夏没有作声，默默地抽泣）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    24: {
        bg: "../../images/bg/哭哭.png",
        text:"所以，纱夏，趁着一切还不算太晚，收手吧...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    25: {
        bg: "../../images/bg/哭哭.png",
        text:"... ...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    26: {
        bg: "../../images/bg/哭哭.png",
        text:"（纱夏沉默了许久，终于开了口...）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    27: {
        bg: "../../images/bg/神社-白天.png",
        text:"我...已经错了太多了...已经无法回头了（掩面哭泣）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女感动.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    28: {
        bg: "../../images/bg/神社-白天.png",
        text:"纱夏...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    29: {
        bg: "../../images/bg/神社-白天.png",
        text:"...我会去自首的...谢谢你能够点醒我...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女感动.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    30: {
        bg: "../../images/bg/神社-白天.png",
        text:"忘掉仇恨之后，再回望自己的所作所为...才会知道自己犯下了多么可怕的错误...原来高桥先生一直以来是以这种心情在帮我复仇...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女感动.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    31: {
        bg: "../../images/bg/神社-白天.png",
        text:"他为了我去杀人，但我却始终没有领悟，沉浸在复仇的泥潭中难以自拔...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女感动.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    32: {
        bg: "../../images/bg/神社-白天.png",
        text:"那么，纱夏，让这场复仇就此结束吧...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    33: {
        bg: "../../images/bg/笑笑.png",
        text:"嗯...我会...用我的余生去赎罪的......",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    34: {
        bg: "../../images/bg/笑笑.png",
        text:"在那之前，我想和你去一个地方...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    35: {
        bg: "../../images/bg/海湾唯美.png",
        text:"（纱夏带着我来到了那片海湾）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "mute",
        sound: "../../music/sound/土上走.ogg",
        choice: "",
    },
    36: {
        bg: "../../images/bg/夕阳.png",
        text:"（我们望向远处蔚蓝的大海，不时会有海豚掠出水面的身影...）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/海浪声.ogg",
        choice: "",
    },
    37: {
        bg: "../../images/bg/海湾唯美.png",
        text:"爸爸过去常常带我来这片海湾，这里时常会有海豚在浅滩活动，他的工作既是研究这些海洋生物，也是保护他们...有时遇到海豚搁浅，他总是第一时间冲到岸边把他们推回海里...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服治愈.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    38: {
        bg: "../../images/bg/海湾唯美.png",
        text:"他曾说过，他的愿望是任何生命都能得到尊重，纵使世界是残酷的，拥有智慧的人类也应当抱有对生命的仁爱与敬畏...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服治愈.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    39: {
        bg: "../../images/bg/海湾唯美.png",
        text:"而我，为了复仇...却忘记了他最根本的教诲...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服平静陈述.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    40: {
        bg: "../../images/bg/海湾唯美.png",
        text:"真的很抱歉，将你卷入了这场闹剧...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服治愈.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    41: {
        bg: "../../images/bg/海湾唯美.png",
        text:"不，纱夏，我很庆幸能够与你相遇",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "浪漫",
        sound: "",
        choice: "",
    },
    42: {
        bg: "../../images/bg/海湾唯美.png",
        text:"什么，为什么突然说这种话...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服震惊.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    43: {
        bg: "../../images/bg/海湾唯美.png",
        text:"是你让我在最迷茫的时候看到了希望，你与我共度的时光是我人生中最快乐的会议...所以，我才会竭尽全力让你醒悟，希望能够在一切还不算太晚时让你回头...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    44: {
        bg: "../../images/bg/海湾唯美.png",
        text:"为什么...要为了我...做到这种地步...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服小可怜.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    45: {
        bg: "../../images/bg/海湾唯美.png",
        text:"因为...我喜欢你...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    46: {
        bg: "../../images/bg/海湾唯美.png",
        text:"谢谢你...（掩面）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服红了眼.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    47: {
        bg: "../../images/bg/海湾唯美.png",
        text:"谢谢你当时能够挺身而出...谢谢你当我独身异乡时能帮助我...谢谢你同我度过的美好时光...谢谢你让我醒悟...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服感动.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    48: {
        bg: "../../images/bg/海湾唯美.png",
        text:"谢谢你，谢谢你为我做的一切...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服感动.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    49: {
        bg: "../../images/bg/海湾唯美.png",
        text:"多么希望我能早点明白...（望向远处的海面）不论是复仇的虚妄还是自己真正的心意......",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服感动.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    50: {
        bg: "../../images/bg/海湾唯美.png",
        text:"我会尽我所能去赎罪的...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服感动.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    51: {
        bg: "../../images/bg/海湾唯美.png",
        text:"小夏，我会等你的！！",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    52: {
        bg: "../../images/bg/夕阳.png",
        text:"（纱夏没有说话，沉默着看着夕阳下波光粼粼的海面）...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    53: {
        bg: "../../images/bg/黑幕.png",
        text:"......",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "  ",
        bgm: "mute",
        sound: "",
        choice: "",
    },
    54: {
        bg: "../../images/bg/民宿内部.png",
        text:"纱夏同我约定第二天去警局自首，但当我醒来，却发现纱夏已经不在，而桌上留下了一封信...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "校园离别",
        sound: "../../music/sound/纸张.ogg",
        choice: "",
    },
    55: {
        bg: "../../images/bg/民宿内部.png",
        text:"",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/信件.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/翻书.ogg",
        choice: "d",
        choiceNumber: "1",
        choiceContent1:"“我已经向藤堂警长交代了自己的罪行，很抱歉将你卷入了这起事件。”",
        choiceName1: "阅读纱夏留下的信",
    },
    55: {
        bg: "../../images/bg/民宿内部.png",
        text:"“我会为自己犯下的过错负责，用一生去赎罪，也请你不用再挂念我。忘掉我吧，让我们的回忆停留在过往，去拥抱你自己的未来。感谢你一直以来的陪伴”",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/信件.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    54: {
        bg: "../../images/bg/警局.png",
        text:"就这样纱夏留下一封信便离开了...当我去询问藤堂警长纱夏会怎样时，她却闭口不谈，说是纱夏不希望我知道这些...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    55: {
        bg: "../../images/bg/青空.png",
        text:"纱夏又一次在我的生活中消失了，但这一次，我稍许安心了些，因为我知道，我所认识的那个善良的纱夏并没有改变......",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    56: {
        bg: "../../images/bg/黑幕.png",
        text:"",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "mute",
        sound: "",
        choice: "",
    },
    57: {
        bg: "../../images/bg/东京日常.png",
        text:"海豚湾事件已经过去了十年...我也已经步入社会许多年，回想起当初被誉为‘少年侦探’刊登在报道中，内心还是有些美滋滋...毕竟成为了社畜可就没有任何惊险刺激可言喽!...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "热闹",
        sound: "",
        choice: "",
    },
    58: {
        bg: "../../images/bg/东京日常.png",
        text:"没错，尽管过去了十年，我也始终无法忘却那段记忆...不论是还岛上发生的事件,还是同纱夏一起的回忆...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
}
function goForward() {
    window.location.assign("Sc10.html");
}
function saveThisScene() {
    var Player = JSON.parse(localStorage.getItem("temp"));
    Player.Progress[8][1] = 1;
    localStorage.setItem("temp", JSON.stringify(Player));
    localStorage.setItem(Player.name, JSON.stringify(Player));
}
window.onload = function all(){
    saveThisScene();
    story.next();
}