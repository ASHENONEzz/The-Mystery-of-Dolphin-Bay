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
                location.assign("Sc7-4.html");
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
        bg: "../../images/bg/民宿内部.png",
        text:"如果这个假设成立，那么高桥很有可能是为了给妻子报仇而犯下了如此的杀人罪行",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    2: {
        bg: "../../images/bg/民宿内部.png",
        text:"哦，侦探小弟，找到什么线索没？（藤堂警长从门外走来）",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/警官自信.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "警局交流",
        sound: "",
        choice: "",
    },
    3: {
        bg: "../../images/bg/民宿内部.png",
        text:"（给警长看了悠香小姐的调查）如果我的猜想没错，镇上的高桥酒保有很大的嫌疑。",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/纸张.ogg",
        choice:"",
    },
    4: {
        bg: "../../images/bg/民宿内部.png",
        text:"什么，你是说酒保高桥隼人吗？可是我印象里高桥并没有结过婚，不过，还是得留个心眼。我去调查一下他的家庭背景，还得麻烦你暂时暗中监视隼人了。",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/警官惊讶.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
    },
    5: {
        bg: "../../images/bg/民宿内部.png",
        text:"好的",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"d",
        choiceNumber: "1",
        choiceContent1: "前往商业街的酒吧",
        choiceName1: "答应监视高桥隼人",
    },
    6: {
        bg: "../../images/bg/商业街夕.png",
        text:"（刚刚来到商业街，没想到迎面就碰上了高桥隼人，为了不暴露目的我只能强装镇定）呦，高桥桑，这么晚准备去哪里啊？",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "商业街对峙",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    7: {
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
    8: {
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
    9: {
        bg: "../../images/bg/海湾.png",
        text:"（我和高桥一起到了海豚湾）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/土上走.ogg",
        choice:"",
    },
    10: {
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
    11: {
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
    12: {
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
    13: {
        bg: "../../images/bg/海湾.png",
        text:"就此收手吧，我们有足够的证据证明你是凶手！",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    14: {
        bg: "../../images/bg/海湾.png",
        text:"（高桥笑了笑）哦，你可以把你的推理全部说出来了看看...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保诡异.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    15: {
        bg: "../../images/bg/海湾.png",
        text:"你之所以杀人，是为了向合谋杀害你妻子的船员和政府官员报仇，所以借着海豚湾诅咒之名为自己掩护，犯下杀人之行。七年的连续杀人，你已经基本完成了复仇，而悠香小姐的调查接近了海豚湾诅咒的真相，为了不暴露你以爆料诅咒内幕引诱悠香小姐来到海豚湾将其杀害...",
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
        bg: "../../images/bg/海湾.png",
        text:"（大笑起来）哈哈哈...你只说对了一半...那些捕杀海豚、杀害我妻子的畜生确实是我杀的，因为他们手上都沾着血，没有一个人是无辜的。但你搞错了一点，我绝没有杀过无辜的人，更何况是那个悠香...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保大笑.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    17: {
        bg: "../../images/bg/海湾.png",
        text:"什么...难道说悠香小姐的死真的是...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    18: {
        bg: "../../images/bg/海湾.png",
        text:"悠香，那个热情、开朗的悠香...多么像她啊！！...可是，他们却都离我而去了...都是因为那帮...那帮满身铜臭的畜生！！！",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保狰狞.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice:"",
    },
    19: {
        bg: "../../images/bg/海湾.png",
        text:"（看着高桥隼人情绪崩溃的样子与先前判若两人，我有些不知所措）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/心脏跳动.ogg",
        choice:"",
    },
    20: {
        bg: "../../images/bg/海湾.png",
        text:"面对连环杀人案的真凶，我不免得有些紧张，但还是定了定神，走到高桥身边",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/.ogg",
        choice: "",
        choice: "n",
        choiceNumber: "2",
        choiceContent1: "",
        choiceContent2: "",
        choiceName1: "高桥桑，就此收手吧，警察马上就来了，那些腐败的官员也会得到应有的惩罚的。",
        choiceName2: "我明白你的苦衷，就此收手吧，但我还有一个问题",
    },
}
function goForward() {
    window.location.assign("Sc7-3.html");
}
function saveThisScene() {
    var Player = JSON.parse(localStorage.getItem("temp"));
    Player.Progress[7][1] = 1;
    localStorage.setItem("temp", JSON.stringify(Player));
    localStorage.setItem(Player.name, JSON.stringify(Player));
}
window.onload = function all(){
    saveThisScene();
    story.next();
}