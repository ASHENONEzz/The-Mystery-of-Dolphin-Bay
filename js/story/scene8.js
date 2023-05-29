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
                location.assign("Sc8-1.html");
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
                location.assign("Sc8-2.html");
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
        bg: "../../images/bg/夜晚神社.png",
        text:"趁着夜色还没完全笼罩上头，我赶到了上山神社",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "神社",
        sound: "../../music/sound/跑步.ogg",
        choice: "",
    },
    2: {
        bg: "../../images/bg/神社内.png",
        text:"你好，请问有什么事吗？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/母亲微笑.png",
        avatar: "../../images/avatar/母亲h.png",
        name: "陌生巫女",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    3: {
        bg: "../../images/bg/神社内.png",
        text:"那个...我来找小夏，啊不，大岛纱夏巫女...我是她的朋友",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    4: {
        bg: "../../images/bg/神社内.png",
        text:"哦，我听她提起过你。我叫大岛美奈子，是小夏的母亲，同时也是这座神社的祭司。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/母亲微笑.png",
        avatar: "../../images/avatar/母亲h.png",
        name: "美奈子",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    5: {
        bg: "../../images/bg/神社内.png",
        text:"小夏现在应该在海湾准备海神祭典，天已经晚了，你先进来等她吧。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/母亲疑惑.png",
        avatar: "../../images/avatar/母亲h.png",
        name: "美奈子",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    6: {
        bg: "../../images/bg/神社内部.png",
        text:"（我是第一次见到纱夏的母亲，面对美奈子小姐我难免有些拘谨，坐在客室里同她面面相觑）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/母亲尴尬.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "尴尬",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    7: {
        bg: "../../images/bg/神社内部.png",
        text:"…………",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/母亲尴尬.png",
        avatar: "../../images/avatar/母亲h.png",
        name: "美奈子",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    8: {
        bg: "../../images/bg/神社内部.png",
        text:"哦，不是，我其实想问小夏关于她的一些事...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    9: {
        bg: "../../images/bg/神社内部.png",
        text:"是说她休学返岛的事吧，这孩子，一声不吭地就回来了，说是要帮我一起主持神社的事务。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/母亲无奈.png",
        avatar: "../../images/avatar/母亲h.png",
        name: "美奈子",
        bgm: "平静",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    10: {
        bg: "../../images/bg/神社内部.png",
        text:"原来是这样吗...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    11: {
        bg: "../../images/bg/神社内部.png",
        text:"你一定是她很好的朋友吧，真是不好意思让你为她担心了，这孩子自从她父亲因为意外离世之后就总是这么自作主张了...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/母亲无奈.png",
        avatar: "../../images/avatar/母亲h.png",
        name: "美奈子",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    12: {
        bg: "../../images/bg/神社内部.png",
        text:"小夏的父亲...我还从来没听她说过...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    13: {
        bg: "../../images/bg/神社内部.png",
        text:"他父亲叫大岛阳介，是一个小型海洋科考团的团战，在七年前一场海难中遇难了...这件事对她打击还是很大的，她不和你说应该也只是不想让你担心吧",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/母亲无奈.png",
        avatar: "../../images/avatar/母亲h.png",
        name: "美奈子",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    14: {
        bg: "../../images/bg/神社内部.png",
        text:"不好意思，让你回忆起那些往事...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    15: {
        bg: "../../images/bg/神社内部.png",
        text:"没关系，这么多年来我们母女也靠着自己支持起了整个家，不过小夏对于他父亲的死还是很在意，总跟我说是有人谋害了阳介...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/母亲微笑.png",
        avatar: "../../images/avatar/母亲h.png",
        name: "美奈子",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    16: {
        bg: "../../images/bg/神社内部.png",
        text:"（眼看着话题好像越来越沉重，我赶紧聊起别的事情）那个...海神祭典都有哪些活动啊？小夏一直准备到那么晚...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    17: {
        bg: "../../images/bg/神社内部.png",
        text:"海神祭典是岛上的传统活动，我们在海滨举行篝火盛典，几乎每个岛民都会来参加，除了隼人那个小子。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/母亲微笑.png",
        avatar: "../../images/avatar/母亲h.png",
        name: "美奈子",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    18: {
        bg: "../../images/bg/神社内部.png",
        text:"请问隼人是？...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    19: {
        bg: "../../images/bg/神社内部.png",
        text:"O(∩_∩)O哈哈~，他是镇上酒吧的老板，叫高桥隼人，街坊里都叫他高桥桑。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/母亲微笑.png",
        avatar: "../../images/avatar/母亲h.png",
        name: "美奈子",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    20: {
        bg: "../../images/bg/神社内部.png",
        text:"美奈子小姐和高桥桑很熟吗？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    21: {
        bg: "../../images/bg/神社内部.png",
        text:"他啊，小夏算是青梅竹马吧，只不过年纪上要比小夏大一轮O(∩_∩)O，七年前小夏父亲去世以后，他经常来帮我们干些杂活呢！",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/母亲微笑.png",
        avatar: "../../images/avatar/母亲h.png",
        name: "美奈子",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    22: {
        bg: "../../images/bg/神社内部.png",
        text:"嗯嗯，原来如此",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    23: {
        bg: "../../images/bg/神社内部.png",
        text:"（沉思疑虑）（既然高桥和大岛家那么熟悉，为什么我和小夏去询问他时，他俩表现得那么陌生...）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    24: {
        bg: "../../images/bg/神社内部.png",
        text:"不好意思，今天耽误你那么长时间了，那我先走了，小夏的事我明天再问吧...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    25: {
        bg: "../../images/bg/商业街夕.png",
        text:"辞谢了美奈子小姐的好意后，我匆匆忙忙地赶回镇上，来到了警局",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "mute",
        sound: "../../music/sound/跑步.ogg",
        choice: "",
    },
    26: {
        bg: "../../images/bg/警局傍晚.png",
        text:"（我把手头一些从废弃别墅带出来的文件递交给了藤堂警长，但出于戒备心理，我没有告诉她我手机中的照片备份...）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "警局交流",
        sound: "../../music/sound/纸张.ogg",
        choice: "",
    },
    27: {
        bg: "../../images/bg/警局傍晚.png",
        text:"藤堂警长，你知道七年前一起科考团的海难吗？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    28: {
        bg: "../../images/bg/警局傍晚.png",
        text:"你是说那个意外事故吗，具体的内容你去翻翻那边的档案吧，我得先好好处理你给我的这些“重量级”文件呢",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官通常.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    29: {
        bg: "../../images/bg/警局傍晚.png",
        text:"（在根据时间排放的档案里找到七年前那起海难的记录并不困难，但令我疑惑的是关于这起“意外事件”的记录只有寥寥几行）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/翻书.ogg",
        choice: "",
    },
    30: {
        bg: "../../images/bg/警局傍晚.png",
        text:"遇难者：大岛阳介、高桥南、吉村幸二...果然这就是小夏父亲的案件。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/翻书.ogg",
        choice: "",
    },
    31: {
        bg: "../../images/bg/警局傍晚.png",
        text:"等等，高桥！？是那个高桥吗？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/心脏跳动.ogg",
        choice: "",
    },
    32: {
        bg: "../../images/bg/警局傍晚.png",
        text:"高桥南，难道是高桥隼人的妻子？",
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
        bg: "../../images/bg/警局傍晚.png",
        text:"如果是为了复仇而杀人，那么高桥就有了杀人动机，可同样的。小夏也有了动机...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    34: {
        bg: "../../images/bg/警局傍晚.png",
        text:"可恶，各种细节交织在一起令我毫无头绪，如果有更加清晰的线索...对了，藤堂警长，警方在悠香小姐房间里有搜到什么线索吗？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    35: {
        bg: "../../images/bg/警局傍晚.png",
        text:"目前来说，还没有什么有价值的物证，不过鉴于你发现了别墅里的隐藏保险箱，说不定你在那里也能找到些有用的东西。明天你和小夏一起去看看吧。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官闭眼.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    36: {
        bg: "../../images/bg/民宿外部.png",
        text: "第二天一早，我便和小夏一起前往悠香小姐的房间调查。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "mute",
        sound: "../../music/sound/鸟鸣2.ogg",
        choice: "",
    },
    37: {
        bg: "../../images/bg/民宿走廊.png",
        text: "向值守的警员出示了藤堂警长给的许可后，我们便进入了悠香小姐的房间。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "现场搜证",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    38: {
        bg: "../../images/bg/民宿内部.png",
        text: "（在房间里翻找了一番，但没有什么发现）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    39: {
        bg: "../../images/bg/民宿内部.png",
        text: "快看，这边的地板好像有些不同",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服震惊.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    40: {
        bg: "../../images/bg/地板.png",
        text: "什么！（我急忙趴在小夏所指的地方，仔细对照那块地板和周边的区别）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    41: {
        bg: "../../images/bg/地板.png",
        text: "地板的接缝处有一些磨损，看起来还很新，那就说明...是被撬起过",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    42: {
        bg: "../../images/bg/地板.png",
        text: "（我试着掰开那一处的地板，果然底下有一个暗格）太厉害了小夏，这你都能发现！！",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    43: {
        bg: "../../images/bg/民宿内部.png",
        text: "（小夏有些得意地笑了）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    44: {
        bg: "../../images/bg/民宿内部.png",
        text: "暗格里放着悠香小姐的调查记录...（但似乎是因为连续的雨天，纸张受潮，有些字迹看不太清了）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    45: {
        bg: "../../images/bg/民宿内部.png",
        text: "",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "d",
        choiceNumber: "1",
        choiceContent1: "“... 7年前的意外事件中，幸存船员们的证词是船只受到极端天气影响几乎颠覆，在甲板上调试测量装置的科考团成员也因此落入海中遇难，但可疑的是他们的证词仿佛是提前串通好的统一，对于细节的描述也相当细致，但在那种情况下，真的有人能如此的冷静，记住那么多细节吗？”",
        choiceName1: "阅读调查记录",
    },
    46: {
        bg: "../../images/bg/民宿内部.png",
        text: "“... 当时幸存的四名船员都在事后获得了前镇长副官以事故抚恤金为名义的巨额资金。...”",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "推理",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    47: {
        bg: "../../images/bg/民宿内部.png",
        text: "“...遇难者名单：‘...阳介、高桥南、吉村...’（字迹模糊）事件发生后不久，警方就将该事件定性为意外事故，镇长似乎有意地干预了警方调查，就连案件报告也只有寥寥几字......”",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    48: {
        bg: "../../images/bg/民宿内部.png",
        text: "“这场意外实在有太多疑点了，这背后一定有什么蹊跷，我认为镇长等政府官员很可能参与策划了这起所谓的意外。如果能找到其中的利益往来，那么说不定就能找到事件的真相......”",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    49: {
        bg: "../../images/bg/民宿内部.png",
        text: "悠香小姐的调查记录就到这里为止，也就是说，七年前那起意外事件实际上是伪造的杀人事件！可是，为什么...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    50: {
        bg: "../../images/bg/民宿内部.png",
        text: "可能是因为...科考团发现了岛上的罪恶交易...（略带哽咽）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服不情愿.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    51: {
        bg: "../../images/bg/民宿内部.png",
        text: "这样就说得通了！（一想到所有线索都串联了起来，我兴奋地站起身来，并没有在意纱夏的神情）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    52: {
        bg: "../../images/bg/民宿内部.png",
        text: "（我的脑海中已经大致呈现了海豚湾案件的来龙去脉，但我的推理也将我引向了我不愿意相信的答案）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    53: {
        bg: "../../images/bg/民宿内部.png",
        text: "回头看向纱夏，她的脸上流露出伤感的神情，我想要安慰她，但最终还是没有说什么...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    54: {
        bg: "../../images/bg/民宿内部.png",
        text: "如果我的猜想没错，那么高桥隼人很有可能就是海豚湾杀人事件的真凶，我们快去通知藤堂警长吧",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    55: {
        bg: "../../images/bg/警局.png",
        text:"（给警长看了悠香小姐的调查）如果我的猜想没错，镇上的高桥酒保有很大的嫌疑。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "警局交流",
        sound: "../../music/sound/纸张.ogg",
        choice:"",
    },
    56: {
        bg: "../../images/bg/警局.png",
        text:"什么，你是说酒保高桥隼人吗？可是我印象里高桥并没有结过婚，不过，还是得留个心眼。我去调查一下他的家庭背景，还得麻烦你暂时暗中监视隼人了。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官惊讶.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    57: {
        bg: "../../images/bg/警局.png",
        text:"好的",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    58: {
        bg: "../../images/bg/商业街夕.png",
        text:"（刚刚来到商业街，没想到迎面就碰上了高桥隼人，为了不暴露目的我只能强装镇定）呦，高桥桑，这么晚准备去哪里啊？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "商业街对峙",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    59: {
        bg: "../../images/bg/商业街夕.png",
        text:"哦，是你啊，晚上好。我正准备去参加海神祭典呢，要一起去吗？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保笑.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    60: {
        bg: "../../images/bg/商业街夕.png",
        text:"好啊，我正好也没什么事。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    61: {
        bg: "../../images/bg/海湾.png",
        text:"（我和高桥一起到了海豚湾）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "mute",
        sound: "../../music/sound/土上走.ogg",
        choice:"",
    },
    62: {
        bg: "../../images/bg/海湾.png",
        text:"你应该都知道了吧",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保诡异.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "紧张",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    63: {
        bg: "../../images/bg/海湾.png",
        text:"...所以，你真的是为了复仇而犯下如此的罪行吗？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    64: {
        bg: "../../images/bg/海湾.png",
        text:"是又怎样，你们又能拿我怎样？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保诡异2.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    65: {
        bg: "../../images/bg/海湾.png",
        text:"可是你看过这片海被鲜血染成红色的样子吗？...海豚被驱赶近岸、搁浅、发出无声的哀嚎，等待着他们的是那群唯利是图的渔人的屠杀...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保狰狞.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    66: {
        bg: "../../images/bg/海湾.png",
        text:"南和阳介叔为了曝光他们的行径，被他们合伙杀死，光是这样就够他们死一千次了！！",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保彻底疯狂.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    67: {
        bg: "../../images/bg/海湾.png",
        text:"没错，那些人是我杀的，反正我的目的已经达到了，那群该死的畜生也得到了惩罚...我唯独不能原谅能够可恶的镇长...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保诡异.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    68: {
        bg: "../../images/bg/海湾.png",
        text:"悠香小姐果然是被他们杀死的吗，甚至不惜嫁祸于你...我已经找到他们罪恶勾当的证据了，藤堂警长一定会让他们接受法律的制裁的。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    69: {
        bg: "../../images/bg/海湾.png",
        text:"...所以，纱夏也参与了诅咒杀人事件吧...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "推理",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    70: {
        bg: "../../images/bg/海湾.png",
        text:"什么！？（高桥原本平静的脸上泛起一丝波澜，但很快又恢复了平静）原来，你都知道了吗",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保诡异.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    71: {
        bg: "../../images/bg/海湾.png",
        text:"大岛家与高桥家相交甚好，但在我们来询问你的时候，你们却装作互不相识，想必是不希望我发现你们的联系吧。小夏在一年前突然返岛并不是为了主持神社事务，而是为了借诅咒之名为你掩护...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    72: {
        bg: "../../images/bg/海湾.png",
        text:"你的杀害目标从参与捕杀活动的船员到岛上的政府高层，起初官员们为了不暴露非法捕杀活动而主动压下消息，将其视为捕捞意外和诅咒事件，你也借此如鱼得水的杀死了底层的目标。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    73: {
        bg: "../../images/bg/海湾.png",
        text:"但当你将目标转向高层时，他们可坐不住，所以你需要岛上神社的名头来向民众强化诅咒的概念，利用迷信来创造杀人的理想环境，而这正是悠香回到神社的真正理由！...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    74: {
        bg: "../../images/bg/海湾.png",
        text:"高桥许久的沉默印证了我不愿相信的推理结果，或是说案件的真相...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    75: {
        bg: "../../images/bg/海湾.png",
        text:"（沉默良久，高桥终于开了口）真没想到你能推理到这个地步...小夏她，并没有参与杀人，她只是太想为她父亲报仇了...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保诡异.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "悲伤",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    76: {
        bg: "../../images/bg/海湾.png",
        text:"我和南最初的相遇便是在那片海湾，年少的我们因为对海洋生物的热爱而走到一起，七年前，当南遇难的消息传来时，我唯一的心灵支柱也消失了...我痛恨那群为了利益践踏生命的畜生，那些船员手上沾满了鲜血...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保诡异.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    77: {
        bg: "../../images/bg/海湾.png",
        text:"那是的我脑海里只想着复仇，让他们付出代价...回过神来，我已经手持着鱼叉，成为了我所痛恨的，践踏生命的人。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保诡异.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    78: {
        bg: "../../images/bg/海湾.png",
        text:"纱夏她...她只是为我的行动掩护，并没有直接参与杀人，她只是太想为自己的父亲报仇了...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保诡异.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    79: {
        bg: "../../images/bg/海湾.png",
        text:"...所以，我愿意自首，只求你不要告发纱夏，她的人生才刚刚开始......",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保悲哀.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    80: {
        bg: "../../images/bg/海湾.png",
        text:"看着高桥恳求的模样，我没有多言，只是通知了藤堂警长...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    81: {
        bg: "../../images/bg/海湾.png",
        text:"高桥被警方带走了，但我还面临着一个艰难的选择...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    82: {
        bg: "../../images/bg/神社-白天.png",
        text:"我来到神社，看到了刚刚结束祭典的纱夏...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    83: {
        bg: "../../images/bg/神社-白天.png",
        text:"我来到神社，看到了刚刚结束祭典的纱夏...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"n",
        choiceNumber: "2",
        choiceContent1: "",
        choiceContent2: "",
        choiceName1: "与纱夏当面对质，劝她自首，结束罪恶的复仇",
        choiceName2: "决定保守秘密，同纱夏重新开始平静的生活",
    },
}
function goForward() {
}
function saveThisScene() {
    var Player = JSON.parse(localStorage.getItem("temp"));
    Player.Progress[8][0] = 1;
    localStorage.setItem("temp", JSON.stringify(Player));
    localStorage.setItem(Player.name, JSON.stringify(Player));
}
window.onload = function all(){
    saveThisScene();
    story.next();
}