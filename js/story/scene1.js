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
        bg: "../../images/bg/夜空.png",
        text:"...（即将抵达伊汝卡岛，内心还是有些忐忑） ...",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/海浪声.ogg",
        choice: "",
    },
    2: {
        bg: "../../images/bg/港口.png",
        text:"这座美丽的小岛叫做‘伊汝卡岛’，因为其周边海域经常可以看到成群的海豚，所以得名I Ru Ka（海豚）。欢迎来到这里！",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/船夫正常.png",
        avatar: "../../images/avatar/船夫h.png",
        name: "船夫",
        bgm: "海岛日常",
        sound: "../../music/sound/土上走.ogg",
        choice: "",
    },
    3: {
        bg: "../../images/bg/港口.png",
        text:"请问岛上有没有提供住宿的地方？",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    4: {
        bg: "../../images/bg/港口.png",
        text:"你可以去居民街道看看那里的民宿，外地来的游客大多住到那里。",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/船夫笑.png",
        avatar: "../../images/avatar/船夫h.png",
        name: "船夫",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    5: {
        bg: "../../images/bg/港口.png",
        text:"好的，谢谢...对了，你认识一个叫大岛纱夏的女孩吗，和我一样大，留着薄荷色的短发...",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    6: {
        bg: "../../images/bg/港口.png",
        text:"嗯...没什么印象啊，你可以去镇子里打听打听。",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/船夫无奈.png",
        avatar: "../../images/avatar/船夫h.png",
        name: "船夫",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    7: {
        bg: "../../images/bg/商业街.png",
        text:"请问，这附近有没有接待游客的民宿？",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    8: {
        bg: "../../images/bg/商业街.png",
        text:"有哦，就在街道的尽头，有一家叫做【淘气鬼】的民宿，很多来的游客都会去那里。",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/摊贩正常.png",
        avatar: "../../images/avatar/摊贩h.png",
        name: "路人",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    9: {
        bg: "../../images/bg/商业街.png",
        text:"淘..淘气鬼...",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "../",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    10: {
        bg: "../../images/bg/商业街.png",
        text:"唉，因为那个诅咒，岛上已经好久没有游客来了......不过多亏了巫女小姐，这两年来诅咒似乎减弱了不少呢",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/摊贩苦笑.png",
        avatar: "../../images/avatar/摊贩h.png",
        name: "路人",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    11: {
        bg: "../../images/bg/商业街.png",
        text:"诅咒！？ 巫女？",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    12: {
        bg: "../../images/bg/商业街.png",
        text:"啊，没什么，我只是自言自语罢了，那我先走了哈，祝你在岛上玩得开心！",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/摊贩微笑.png",
        avatar: "../../images/avatar/摊贩h.png",
        name: "路人",
        bgm: "",
        sound: "../../music/sound/土上走.ogg",
        choice: "",
    },
    13: {
        bg: "../../images/bg/民宿外部.png",
        text:"您好，欢迎光临淘气鬼民宿，我们有岛上最舒适的房间哦！",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/民宿老板平常.png",
        avatar: "../../images/avatar/民宿老板h.png",
        name: "民宿老板",
        bgm: "安静民宿",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    14: {
        bg: "../../images/bg/民宿外部.png",
        text:"好的，请给我一间单人间",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    15: {
        bg: "../../images/bg/民宿外部.png",
        text:"你好呀！我好像没见过你，你是刚来岛上玩吗？",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/记者惊讶.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "",
        choice: "",
    },
    16: {
        bg: "../../images/bg/民宿外部.png",
        text:"额..嗯...我刚来这里，准备住几天...",
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
        bg: "../../images/bg/民宿外部.png",
        text:"哦哦，我叫结城悠香，你叫我悠香就好。我也是外地来的，不过我是来工作的，我是个自由记者哦！",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者闭眼.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "",
        choice: "",
    },
    18: {
        bg: "../../images/bg/民宿外部.png",
        text:"额，我是来找一个朋友的，想和她...叙叙旧...",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    19: {
        bg: "../../images/bg/民宿外部.png",
        text:"哦？找人，那他叫什么名字呢？虽说我只在岛上待了两年，但可别小看自由记者的情报网哦！我说不定能帮到你",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者反光镜片.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    20: {
        bg: "../../images/bg/民宿外部.png",
        text:"那你知道一个叫做纱夏的女孩吗",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    21: {
        bg: "../../images/bg/民宿外部.png",
        text:"纱夏...好像没听过呢...不行，我的情报网居然有了漏洞...我帮你一起去找吧，顺便带你去逛逛岛上最热闹的商业街！",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者惊讶.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    22: {
        bg: "../../images/bg/民宿外部.png",
        text:"可别忘了回来吃晚饭哦",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/民宿老板跨脸.png",
        avatar: "../../images/avatar/民宿老板h.png",
        name: "民宿老板",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    23: {
        bg: "../../images/bg/民宿外部.png",
        text:"知道啦，老板！",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/记者白眼.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/关门.ogg",
        choice: "",
    },
    24: {
        bg: "../../images/bg/商业街.png",
        text:"这里就是商业街啦！",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/记者反光镜片.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "热闹",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    25: {
        bg: "../../images/bg/商业街.png",
        text:"人可真多啊！感觉全岛的人都在这里",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    26: {
        bg: "../../images/bg/商业街.png",
        text:"可不是吗，这里是岛上最大的贸易区，几乎所有的买卖都在这里。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者惊讶.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    27: {
        bg: "../../images/bg/商业街.png",
        text:"哦，是悠香啊! 今天又要去跟着警长调查吗？",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/摊贩微笑.png",
        avatar: "../../images/avatar/摊贩h.png",
        name: "摊贩",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    28: {
        bg: "../../images/bg/商业街.png",
        text:"早啊，中村叔！今天我只是来帮我身旁的弟弟找找他朋友",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/记者白眼.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    29: {
        bg: "../../images/bg/商业街.png",
        text:"哦，是吗？哈哈，我还以为你有什么重大发现了呢。",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/摊贩正常.png",
        avatar: "../../images/avatar/摊贩h.png",
        name: "摊贩",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    30: {
        bg: "../../images/bg/商业街.png",
        text:"O(∩_∩)O哈哈~是有些新头绪，不过还差一口气就能搞明白了",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/记者困惑.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    31: {
        bg: "../../images/bg/商业街.png",
        text:"你们说的事是？...",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    32: {
        bg: "../../images/bg/商业街.png",
        text:"就是岛上的海豚湾诅咒啊！你来到岛上以前没听说过吗？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者笑2.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "轻微诡异",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    33: {
        bg: "../../images/bg/商业街.png",
        text:"（一脸疑惑）",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    34: {
        bg: "../../images/bg/商业街.png",
        text:"其实就是岛上曾经每隔几个月就会发生一起杀人事件，被岛上的人传为海豚湾诅咒，我就是为了报道这一系列事件而来岛上收集素材的。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者反光镜片.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    35: {
        bg: "../../images/bg/商业街.png",
        text:"但在从两年前开始，就很少发生类似案件了，人们传言是新来的巫女化解了诅咒。镇上的官员为了不引起恐慌，似乎故意也封锁了消息，使得我的调查进展十分缓慢。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者反光镜片.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    36: {
        bg: "../../images/bg/商业街.png",
        text:"...（两年前）...",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    37: {
        bg: "../../images/bg/商业街.png",
        text:"先不说这个了，当务之急还是快去警局问问你朋友的下落吧，不然一会天黑了可不好找。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者闭眼.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/拍肩.ogg",
        choice: "",
    },
    38: {
        bg: "../../images/bg/商业街.png",
        text:"呦，悠香小姐，今晚要不要与我小酌一杯？（坏笑）",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/酒保笑.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "海岛日常",
        sound: "",
        choice: "",
    },
    39: {
        bg: "../../images/bg/商业街.png",
        text:"高桥，别这么叫我，话先说在前头，我可是对你一点兴趣也没有！",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/记者生气.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    40: {
        bg: "../../images/bg/商业街.png",
        text:"呜呜，悠香小姐...难道你身旁的是你的新男友？没想到你的口味竟然如此......",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/酒保悲哀.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    41: {
        bg: "../../images/bg/商业街.png",
        text:"打住打住！他和我一样是岛外来的，我只是帮他找个人啦。再说，比起恋爱，我只会在意新闻！",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/记者白眼.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    42: {
        bg: "../../images/bg/商业街.png",
        text:"好啦好啦，真是败给你了..（尬笑）",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/酒保死鱼眼.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    43: {
        bg: "../../images/bg/商业街.png",
        text:"那先不说了，我们还有别的事...",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/记者惊讶.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    44: {
        bg: "../../images/bg/商业街.png",
        text:"（转向你）我们走吧..",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者自信闭眼.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    45: {
        bg: "../../images/bg/商业街.png",
        text:"嗯好...高桥，再见了。",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    46: {
        bg: "../../images/bg/警局.png",
        text:"藤堂警长，你好呀",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/记者笑.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "平静",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    47: {
        bg: "../../images/bg/警局.png",
        text:"嗯，什么风又把我们的大记者吹来了？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官白衣不屑.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    48: {
        bg: "../../images/bg/警局.png",
        text:"今天不是来看卷宗的，是帮这个小弟弟找个人",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/记者笑2.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    49: {
        bg: "../../images/bg/警局.png",
        text:"你好，藤堂警官，我想问问你认不认识一个叫纱夏的女孩，和我一般年纪，留着薄荷色短发？",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    50: {
        bg: "../../images/bg/警局.png",
        text:"纱夏...大岛...是大岛祭司的女儿，大岛纱夏吗？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官白衣困惑.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    51: {
        bg: "../../images/bg/警局.png",
        text:"嗯？大岛祭司，是山上神社的大祭司吗？",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/记者惊讶.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    52: {
        bg: "../../images/bg/警局.png",
        text:"哦，我还以为你不会关注这些迷信，没想到你还知道神社的事。不错嘛，看来我们的大记者已经非常了解岛上的事了，哈哈哈",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官白衣自信发言.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    53: {
        bg: "../../images/bg/警局.png",
        text:"当然，要想调查海豚诅咒，肯定离不开神社举行的驱邪仪式和海豚祭典。（转向你）没想到你找的竟是大祭司的女儿，我开始好奇你们的事情了",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/记者白眼.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    54: {
        bg: "../../images/bg/警局.png",
        text:"我和小夏是同学，她一年前突然不辞而别，回到了岛上，再也没了音讯。我此行就是想要来拜访她，顺便问问当年她离开的原因。",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    55: {
        bg: "../../images/bg/警局.png",
        text:"哦，那么帮你找回女友的事就包在我身上了！",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/记者自信.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    56: {
        bg: "../../images/bg/警局.png",
        text:"（红着脸，低下头）不...不是这样的...",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    57: {
        bg: "../../images/bg/警局.png",
        text:"今天已经很晚了，上山不安全，我们明天再去神社吧，我记得神社早上有参拜仪式，我们正好去找你女友。",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/记者困惑.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    58: {
        bg: "../../images/bg/警局.png",
        text:"好的，麻烦你了",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    59: {
        bg: "../../images/bg/警局.png",
        text:"不麻烦，不麻烦，我们快回民宿休息吧，老板做的饭可好吃了，千万不能错过。（认真脸）",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/记者笑.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    60: {
        bg: "../../images/bg/民宿走廊.png",
        text:"嗨，你刚洗漱好吗",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者浴衣.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "安静民宿",
        sound: "../../music/sound/侧开门.ogg",
        choice: "",
    },
    61: {
        bg: "../../images/bg/民宿走廊.png",
        text:"嗯，这里环境真不错",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    62: {
        bg: "../../images/bg/民宿走廊.png",
        text:"是的呢！对了，我下午跟你说的事，你可别外传啊，那可是独家报道！",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者浴衣.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    63: {
        bg: "../../images/bg/民宿走廊.png",
        text:"哦哦，就是海豚湾诅咒的事吗？",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    64: {
        bg: "../../images/bg/民宿走廊.png",
        text:"嘘，这里的人虽然很友好，但是可迷信着呢，可别让他们听到“诅咒”什么的字眼...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者浴衣.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    65: {
        bg: "../../images/bg/民宿走廊.png",
        text:"我记得我只说了一半吧，想继续听下去吗？（坏笑）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者浴衣.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    66: {
        bg: "../../images/bg/民宿走廊.png",
        text:"据我调查，海豚湾的诅咒并不是空穴来风，过去渔民们将海豚驱赶到海湾内，趁着退潮使他们搁浅。接着渔民们到岸上用鱼叉......",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者浴衣.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "轻微诡异",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    67: {
        bg: "../../images/bg/民宿走廊.png",
        text:"用鱼叉...然后呢",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    68: {
        bg: "../../images/bg/民宿走廊.png",
        text:"然后就对于你这个18岁的少年来说太过沉重了，晚安喽（坏笑）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者浴衣.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "尴尬",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    69: {
        bg: "../../images/bg/民宿内部.png",
        text:"啊，那晚安了，悠香小姐...",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    70: {
        bg: "../../images/bg/民宿内部-夜晚.png",
        text:"（一想到白天的各种经历，和即将见到纱夏，我就难以入眠，呆呆望着房间的天花板，就这样一直到了凌晨）哎，根本睡不着，还是出去散散步好了",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "平静",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    71: {
        bg: "../../images/bg/林间小径.png",
        text:"那不是悠香小姐吗，这种时候她往树林去干吗呢（这样想着，我便跟了上去）",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    72: {
        bg: "../../images/bg/林间小径.png",
        text:"（蝙蝠飞出）哇！！！（险些摔倒）",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "紧张",
        sound: "../../music/sound/倒下.ogg",
        choice: "",
    },
    73: {
        bg: "../../images/bg/林间小径.png",
        text:"这条小路到底要通向哪里？得赶紧跟上悠香小姐，这里太危险了...",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    74: {
        bg: "../../images/bg/海湾.png",
        text:"走了这么久，终于看到林子的尽头了，竟然通向一个海湾？！",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    75: {
        bg: "../../images/bg/海湾.png",
        text:"该不会这里就是悠香小姐说的海豚湾吧！？",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    76: {
        bg: "../../images/bg/海湾.png",
        text:"（远远望去海边横着几艘搁浅的破旧渔船）看样子之前这里还有过捕捞活动。",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    77: {
        bg: "../../images/bg/海湾.png",
        text:"等等，那边躺着的...是悠香小姐！！！",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    78: {
        bg: "../../images/bg/海湾.png",
        text:"（冲到倒下的悠香身边）悠香小姐，悠香小姐，你还好吗？！",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/跑.ogg",
        choice: "",
    },
    79: {
        bg: "../../images/bg/海湾.png",
        text:"（我俯下身去，检查悠香小姐的伤势）",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/土上走.ogg",
        choice: "d",
        choiceNumber: "3",
        choiceContent1: "已经没有了呼吸和脉搏",
        choiceContent2: "这两处伤口是...利器刺伤的，究竟是谁干的",
        choiceContent3: "这...这么多血，悠香小姐，一定要坚持住啊！",
        choiceName1: "检查呼吸",
        choiceName2: "查看伤口",
        choiceName3: "查看血迹",
    },
    80: {
        bg: "../../images/bg/海湾.png",
        text:"得马上去报警，说不定悠香小姐还有救！",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    81: {
        bg: "../../images/bg/海湾.png",
        text:"（随即返回林中前往镇中警局）悠香小姐等我，我一定得救......",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    82: {
        bg: "../../images/bg/林间小径.png",
        text:"（返回的路上，由于雨天和对地形不熟悉，我摔入了一个坑洞，晕了过去）",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/摔倒.ogg",
        choice: "",
    },
    
}
function saveThisScene() {
    var Player = JSON.parse(localStorage.getItem("temp"));
    Player.Progress[1][0] = 1;
    localStorage.setItem("temp", JSON.stringify(Player));
    localStorage.setItem(Player.name, JSON.stringify(Player));
}
window.onload = function all(){
    saveThisScene();
    story.next();
}
function goForward() {
    window.location.assign("../minigame/minigame1.html");
}
window.onload = story.next();