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
                location.assign("Sc3-1.html");
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
                location.assign("Sc3-2.html");
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
        text:"警局白天",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "stop!!",
        sound: "../../music/sound/开门.ogg",
        choice: "",
    },
    2: {
        bg: "../../images/bg/警局.png",
        text:"（醒来的时候，我坐在警局的问询室内，窗外的阳光令我睁不开眼）",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    3: {
        bg: "../../images/bg/警局.png",
        text:"今天凌晨，有几个渔民经过海湾时发现沙滩上有一具尸体，经过验证，我们确定死者是结城悠香，死因初步认定为利器穿刺伤。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官白衣闭眼无奈.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "轻微诡异",
        sound: "",
        choice: "",
    },
    4: {
        bg: "../../images/bg/警局.png",
        text:"据目击者描述，你在凌晨时跟着悠香进入树林。而我们在搜索现场时发现你倒在附近的树林里，是本案的第一嫌疑人。请你告诉我，你为什么跟着她，当时又发生了什么？",
        //下面是Character position: m,r,l
        cp: "r",
        character: "../../images/character/警官白衣困惑.png",
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
        text:"（我将昨天的情况尽可能详细地告诉了藤堂警长，但因为摔倒时头部受伤，记忆有些混乱...）",
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
        text:"只凭这些话...很难证明你是无辜的（沉思）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官白衣不屑.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    7: {
        bg: "../../images/bg/警局.png",
        text:"警长，我想，这个异乡人应该是无辜的...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "？？",
        bgm: "",
        sound: "../../music/sound/侧开门.ogg",
        choice: "",
    },
    8: {
        bg: "../../images/bg/警局.png",
        text:"正当警长对我的审问陷入僵局时，我的身后传来了一个熟悉的声音...",
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
        bg: "../../images/bg/警局.png",
        text:"你是...大岛祭司的女儿，上山神社的巫女......哦..我明白你想为熟人辩护，但他的嫌疑还未排除，我们不能放他回去",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官白衣不屑.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    10: {
        bg: "../../images/bg/警局.png",
        text:"小夏！！？",
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
        bg: "../../images/bg/警局.png",
        text:"根据警方的通报，悠香小姐的死法和之前岛上的海豚湾诅咒杀人事件十分相似。这些案件的细节就连岛民也不能完全知悉，更不用说他这个外乡人了。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女微笑陈述.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "../../music/sound/拍桌.ogg",
        choice: "",
    },
    12: {
        bg: "../../images/bg/警局.png",
        text:"况且，在来岛的第一天便在陌生的环境中犯下杀人罪行似乎也并不符合常理。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女闭目自信.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    13: {
        bg: "../../images/bg/警局.png",
        text:"（巫女小姐说的没错...但是如此一来这件案件又会被归为海豚湾的诅咒吗？明明小悠香并不是岛上的人，为何会被诅咒盯上...）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官白衣困惑.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    14: {
        bg: "../../images/bg/警局.png",
        text:"（看着警长若有所思的情状，他的眼里似乎透出了一丝恐惧与犹疑）警长，我确实没有理由杀害悠香小姐啊...",
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
        text:"（似乎并没有听到你的辩解，看向纱夏）你说的有道理....但是..他的陈述是我们对于此案唯一的线索了..",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官白衣困惑.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    16: {
        bg: "../../images/bg/警局.png",
        text:"就算你能说服我他不是凶手，可没有可靠的证据来证明他的清白，单靠我的说辞也无法给民众一个交代...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官白衣通常.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    17: {
        bg: "../../images/bg/警局.png",
        text:"那就让我和他一起去调查吧，现在他的记忆混乱，审问也不会有什么进展，但或许他的经历可以成为破解这些谜案的关键。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女微笑陈述.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    18: {
        bg: "../../images/bg/警局.png",
        text:"（偷听到二人的讲话）警长先生，那我现在应该怎么办？",
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
        bg: "../../images/bg/警局.png",
        text:"唉...看在巫女大人的份上...那就由你们去调查吧...(叹)",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官白衣不屑.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    20: {
        bg: "../../images/bg/警局.png",
        text:"（这些案子这么多年没结案，不仅仅是因为目击信息少之又少，更是因为岛上的大人物似乎有意无意地干预了警方调查的进程，只靠我们来查出真相或许真的有些困难....）(低头自语)",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官白衣不屑.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    21: {
        bg: "../../images/bg/警局.png",
        text:"（转向你和纱夏）希望你们的调查能成为案件的突破口吧，有什么需要就跟我说。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官白衣通常.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    22: {
        bg: "../../images/bg/警局.png",
        text:"（松了口气）那就拜托你了，藤堂警长",
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
        bg: "../../images/bg/警局.png",
        text:"（轻松态开玩笑道）你小子可得给我好好查，要是没抓到杀死小悠香的凶手，我可不得落上个包庇嫌犯的罪名，到时候我可饶不了你哦！",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官白衣闭眼笑.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    24: {
        bg: "../../images/bg/神社-白天.png",
        text:"当天下午，纱夏就在神社举行了祭祀活动，安抚了恐慌的民众。为了洗脱自己的嫌疑，找出杀人事件的真凶，我和纱夏也在藤堂警长的许可下正式开展了调查",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "平静",
        sound: "",
        choice: "",
    },
    25: {
        bg: "../../images/bg/商业街.png",
        text:"小夏，我...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    26: {
        bg: "../../images/bg/商业街.png",
        text:"我知道你有很多话想说，但叙旧就先免了吧...当务之急是洗脱你的嫌疑，接下来你打算怎么展开调查呢",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服自信陈述.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    27: {
        bg: "../../images/bg/商业街.png",
        text:"嗯(沉思)...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "n",
        choiceNumber: "2",
        choiceContent1: "前往商业街内，询问民众关于悠香小姐的信息",
        choiceContent2: "前往警局，询问藤堂警长关于案件的情况",
        choiceName1: "前往商业街深处",
        choiceName2: "前往警局",
    },

}

function saveThisScene() {
    var Player = JSON.parse(localStorage.getItem("temp"));
    Player.Progress[2][0] = 1;
    localStorage.setItem("temp", JSON.stringify(Player));
    localStorage.setItem(Player.name, JSON.stringify(Player));
}
window.onload = function all(){
    saveThisScene();
    story.next();
}