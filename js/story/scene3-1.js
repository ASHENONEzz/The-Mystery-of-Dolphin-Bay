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
        bg: "../../images/bg/商业街.png",
        text:"我和纱夏进入了商业街内...",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/开门.ogg",
        choice: "",
    },
    2: {
        bg: "../../images/bg/商业街.png",
        text:"小夏，我们分头去打听一下悠香小姐的事情吧。",
        //下面是Character position: m,r,l
        cp: "l",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "热闹",
        sound: "",
        choice: "d",
        choiceNumber: "2",
        choiceContent1: "悠香差不多两年前来的岛上吧...当时她一来就四处打听海豚湾诅咒的事情，搞得大家都以为她是个怪人，但之后的日子里她经常来帮街坊里打打杂，也就和我们熟络起来了，没想到那可怕的诅咒竟然会降在她的身上......",
        choiceContent2: "那位客人啊，事发当晚她和平常一样洗漱完后待在房间里，不过当我去收餐盘的时候，她似乎很激动地在讲电话，我也就没多打扰...没想到竟会发生这种事...你们是在调查诅咒吗，我劝你们还是别多掺和了,免得遭受同样的不幸......",
        choiceName1: "向街边常驻的摊贩询问",
        choiceName2: "前往街尾询问民宿老板",
    },
    3: {
        bg: "../../images/bg/商业街.png",
        text:"嗯...悠香小姐遭受了诅咒..（不，那时的伤口，这绝不是什么诅咒！）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    4: {
        bg: "../../images/bg/商业街.png",
        text:"听生鱼铺子的老板说，悠香走的那条小径是一条通往海豚湾的捷径，除了一些经常来往海湾的渔夫，那条路鲜有人知，真是奇怪呢...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主巫女困惑.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    5: {
        bg: "../../images/bg/商业街.png",
        text:"原来如此，但关于悠香小姐，我们知道的信息还是太少了...",
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
        bg: "../../images/bg/商业街.png",
        text:"哟，这不是悠香的小男朋友吗，这才几天就换成了...巫女小姐！？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保死鱼眼.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "",
        choice: "",
    },
    7: {
        bg: "../../images/bg/商业街.png",
        text:"（严肃）高桥桑，你难道还不知道悠香小姐遇害的事吗！我现在正在调查案件的真相，请你务必好好告诉我有关悠香的事！！",
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
        bg: "../../images/bg/商业街.png",
        text:"什...什么（震惊）悠香竟然...好..好的，你有什么想知道的",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保悲哀.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "",
        choice: "",
    },
    9: {
        bg: "../../images/bg/商业街.png",
        text:"高桥，你和悠香小姐是怎么认识的？",
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
        bg: "../../images/bg/商业街.png",
        text:"嗯...我和悠香啊...我们是在半年前的一个晚上认识的，当时她来酒吧向我打听有些事情，好像是有关这儿附近一栋废弃别墅的事",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保思考.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "",
        choice: "",
    },
    11: {
        bg: "../../images/bg/商业街.png",
        text:"废弃别墅？...为什么悠香小姐会想去那里...",
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
        bg: "../../images/bg/商业街.png",
        text:"关于悠香的事我很抱歉，但我现在手头还有工作，你们要是还有什么想知道的，我们之后再聊...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保思考.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "",
        choice: "",
    },
    13: {
        bg: "../../images/bg/商业街.png",
        text:"（若有所思）如果是调查海豚湾诅咒，那为什么会去别墅，那栋废弃别墅一定和案件有所关联。小夏，我觉得我们应该去那里一探究竟。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "轻微诡异",
        sound: "",
        choice: "",
    },
    14: {
        bg: "../../images/bg/废弃别墅外.png",
        text:"于是乎我们来到了商业街深处的废弃别墅",
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
        bg: "../../images/bg/废弃别墅外.png",
        text:"这栋别墅和商业街的氛围可真是格格不入...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    16: {
        bg: "../../images/bg/废弃别墅外.png",
        text:"我们赶紧想办法进去吧，感觉这里阴森森的...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服小害怕.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    17: {//可插入小游戏
        bg: "../../images/bg/废弃别墅外.png",
        text:"（沿着别墅外围走了一圈，我们发现了一扇破损的窗户，几经周折之后，终于进入了别墅）",
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
    window.location.assign("Sc4.html");
}
function saveThisScene() {
    var Player = JSON.parse(localStorage.getItem("temp"));
    Player.Progress[3][0] = 1;
    localStorage.setItem("temp", JSON.stringify(Player));
    localStorage.setItem(Player.name, JSON.stringify(Player));
}
window.onload = function all(){
    saveThisScene();
    story.next();
}