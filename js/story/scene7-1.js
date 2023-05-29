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
    choiceClick1: function () {
        switch (Choice) {
            case 'd':
                if (choiceArray[0]) {
                    textDOM.innerHTML = "";
                    textDOM.innerHTML = story[nodeID + 1].choiceContent1;
                    choiceArray[0] = 0;
                    document.getElementById("Choice1").style.display = "none";
                    ChoiceNumber--;
                    if (fakeChoice == 1) {
                        ChoiceNumber = 0;
                        fakeChoice = 0;
                        document.getElementById("Choice1").style.display = "none";
                        document.getElementById("Choice2").style.display = "none";
                        document.getElementById("Choice3").style.display = "none";
                        document.getElementById("Choice4").style.display = "none";
                        document.getElementById("Choice5").style.display = "none";
                    }
                    if (ChoiceNumber == 0) {
                        story[nodeID + 1].choice = "";
                    }
                    break;
                }
            case 'n':
                location.assign("Sc7-2.html");
        }
    },
    choiceClick2: function () {
        switch (Choice) {
            case 'd':
                if (choiceArray[1]) {
                    textDOM.innerHTML = "";
                    textDOM.innerHTML = story[nodeID + 1].choiceContent2;
                    choiceArray[1] = 0;
                    document.getElementById("Choice2").style.display = "none";
                    ChoiceNumber--;
                    if (fakeChoice == 1) {
                        ChoiceNumber = 0;
                        fakeChoice = 0;
                        document.getElementById("Choice1").style.display = "none";
                        document.getElementById("Choice2").style.display = "none";
                        document.getElementById("Choice3").style.display = "none";
                        document.getElementById("Choice4").style.display = "none";
                        document.getElementById("Choice5").style.display = "none";
                    }
                    if (ChoiceNumber == 0) {
                        story[nodeID + 1].choice = "";
                    }
                    break;
                }
            case 'n':
                location.assign("badEnd1.html");
        }
    },
    choiceClick3: function () {
        switch (Choice) {
            case 'd':
                if (choiceArray[2]) {
                    textDOM.innerHTML = "";
                    textDOM.innerHTML = story[nodeID + 1].choiceContent3;
                    choiceArray[2] = 0;
                    document.getElementById("Choice3").style.display = "none";
                    ChoiceNumber--;
                    if (fakeChoice == 1) {
                        ChoiceNumber = 0;
                        fakeChoice = 0;
                        document.getElementById("Choice1").style.display = "none";
                        document.getElementById("Choice2").style.display = "none";
                        document.getElementById("Choice3").style.display = "none";
                        document.getElementById("Choice4").style.display = "none";
                        document.getElementById("Choice5").style.display = "none";
                    }
                    if (ChoiceNumber == 0) {
                        story[nodeID + 1].choice = "";
                    }
                    break;
                }
            case 'n':
                location.assign("url1");
        }
    },
    choiceClick4: function () {
        switch (Choice) {
            case 'd':
                if (choiceArray[3]) {
                    textDOM.innerHTML = "";
                    textDOM.innerHTML = story[nodeID + 1].choiceContent4;
                    choiceArray[3] = 0;
                    document.getElementById("Choice4").style.display = "none";
                    ChoiceNumber--;
                    if (fakeChoice == 1) {
                        ChoiceNumber = 0;
                        fakeChoice = 0;
                        document.getElementById("Choice1").style.display = "none";
                        document.getElementById("Choice2").style.display = "none";
                        document.getElementById("Choice3").style.display = "none";
                        document.getElementById("Choice4").style.display = "none";
                        document.getElementById("Choice5").style.display = "none";
                    }
                    if (ChoiceNumber == 0) {
                        story[nodeID + 1].choice = "";
                    }
                    break;
                }
            case 'n':
                location.assign("url1");
        }
    },
    choiceClick5: function () {
        switch (Choice) {
            case 'd':
                if (choiceArray[4]) {
                    textDOM.innerHTML = "";
                    textDOM.innerHTML = story[nodeID + 1].choiceContent5;
                    choiceArray[4] = 0;
                    document.getElementById("Choice5").style.display = "none";
                    ChoiceNumber--;
                    if (fakeChoice == 1) {
                        ChoiceNumber = 0;
                        fakeChoice = 0;
                        document.getElementById("Choice1").style.display = "none";
                        document.getElementById("Choice2").style.display = "none";
                        document.getElementById("Choice3").style.display = "none";
                        document.getElementById("Choice4").style.display = "none";
                        document.getElementById("Choice5").style.display = "none";
                    }
                    if (ChoiceNumber == 0) {
                        story[nodeID + 1].choice = "";
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
            if (story[nodeID + 1].choice == "") {
                textLen = story[nodeID].text.length;
                clearInterval(printInterval);
                hasPrintNumber = 0;
                while (textLen > hasPrintNumber) {
                    printingText += story[nodeID].text.charAt(hasPrintNumber++);
                    textDOM.innerHTML = printingText;
                }
                printingText = "";
            } else {
                // Choice是选项的类别
                Choice = story[nodeID + 1].choice;
                ChoiceNumber = story[nodeID + 1].choiceNumber;
                for (i = 0; i < story[nodeID + 1].choiceNumber; i++) {
                    choiceArray.push(1);
                }
                let t = 0;
                if (t < ChoiceNumber) {
                    document.getElementsByClassName("choiceBox")[0].style.display = "";
                    document.getElementsByClassName("choiceBox")[0].innerHTML = story[nodeID + 1].choiceName1;
                    t++;
                }
                if (t < ChoiceNumber) {
                    document.getElementsByClassName("choiceBox")[1].style.display = "";
                    document.getElementsByClassName("choiceBox")[1].innerHTML = story[nodeID + 1].choiceName2;
                    t++;
                }
                if (t < ChoiceNumber) {
                    document.getElementsByClassName("choiceBox")[2].style.display = "block";
                    document.getElementsByClassName("choiceBox")[2].innerHTML = story[nodeID + 1].choiceName3;
                    t++;
                }
                if (t < ChoiceNumber) {
                    document.getElementsByClassName("choiceBox")[3].style.display = "";
                    document.getElementsByClassName("choiceBox")[3].innerHTML = story[nodeID + 1].choiceName4;
                    t++;
                }
                if (t < ChoiceNumber) {
                    document.getElementsByClassName("choiceBox")[4].style.display = "";
                    document.getElementsByClassName("choiceBox")[4].innerHTML = story[nodeID + 1].choiceName5;
                    t++;
                }
            }
    },
    1: {
        bg: "../../images/bg/警局傍晚.png",
        text: "来到了警局",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "mute",
        sound: "../../music/sound/开门.ogg",
        choice: "",
    },
    2: {
        bg: "../../images/bg/警局傍晚.png",
        text: "哦，侦探小弟，在别墅那里找到什么线索没？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官自信.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "警局交流",
        sound: "",
        choice: "",
    },
    3: {
        bg: "../../images/bg/警局傍晚.png",
        text: "这些是我们在一个隐藏保险箱里发现的（我将从别墅里带出来的一小部分资料给了警长，但出于戒备之心，我并没有告诉她手机里有备份）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "../../music/sound/纸张.ogg",
        choice: "",
    },
    4: {
        bg: "../../images/bg/警局傍晚.png",
        text: "什么，居然还有隐藏保险箱...前镇长副官到底在隐瞒什么...（翻阅着文件沉思状）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官惊讶.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "../../music/sound/翻书.ogg",
        choice: "",
    },
    5: {
        bg: "../../images/bg/警局傍晚.png",
        text: "海豚湾诅咒事件是七年前才开始的，但是资料上显示，捕杀海豚的活动早在十几年前就开始了...警长，七年前有什么值得注意的事件吗？",
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
        bg: "../../images/bg/警局傍晚.png",
        text: "（思考）嗯...七年前，那时候我还是个小警员。我记得当年有个小型海洋科考团在海湾附近发生了意外，除此之外好像并没有什么大事了...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官思考.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    7: {
        bg: "../../images/bg/警局傍晚.png",
        text: "什么意外，警长，能详细说说吗？",
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
        bg: "../../images/bg/警局傍晚.png",
        text: "具体细节我记不太清了，当时因为被定性为意外事故，所以卷宗上也没有太多记录。大致就是科考团临时借乘的渔船遇上风浪，团队的几个成员遇难，似乎和诅咒事件没什么关联。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官闭眼.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    9: {
        bg: "../../images/bg/警局傍晚.png",
        text: "这样吗...（略有失望）",
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
        bg: "../../images/bg/警局傍晚.png",
        text: "对了，那时船上的4个船员似乎也参加了海豚捕杀活动，在之后的几年里成为了海豚湾诅咒的受害者...",
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
        bg: "../../images/bg/警局傍晚.png",
        text: "也就是说案件细节无从问询是吗...（除了这些文件，案件似乎并没有什么突破口，我也陷入了沉思）",
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
        bg: "../../images/bg/警局傍晚.png",
        text: "对了，如果能找到悠香小姐的调查细节，说不定能对案件有所帮助，藤堂警长，我可以去看看民宿的现场吗？",
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
        bg: "../../images/bg/警局傍晚.png",
        text: "可以是可以，但是记得别破坏了现场..",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/警官通常.png",
        avatar: "../../images/avatar/警官h.png",
        name: "警长",
        bgm: "",
        sound: "",
        choice: "",
    },
    14: {
        bg: "../../images/bg/民宿外部.png",
        text: "第二天一早，我便和小夏一起前往悠香小姐的房间调查。",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "推理",
        sound: "",
        choice: "",
    },
    15: {
        bg: "../../images/bg/民宿走廊.png",
        text: "向值守的警员出示了藤堂警长给的许可后，我们便进入了悠香小姐的房间。",
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
        bg: "../../images/bg/民宿内部.png",
        text: "（在房间里翻找了一番，但没有什么发现）",
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
        bg: "../../images/bg/民宿内部.png",
        text: "快看，这边的地板好像有些不同",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    18: {
        bg: "../../images/bg/地板.png",
        text: "什么！（我急忙趴在小夏所指的地方，仔细对照那块地板和周边的区别）",
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
        bg: "../../images/bg/地板.png",
        text: "地板的接缝处有一些磨损，看起来还很新，那就说明...是被撬起过",
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
    21: {
        bg: "../../images/bg/民宿内部.png",
        text: "（小夏有些得意地笑了）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    22: {
        bg: "../../images/bg/地板.png",
        text: "暗格里放着悠香小姐的调查记录...（但似乎因为连续的雨天，纸张受潮，有些字迹看不太清了）",
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
        bg: "../../images/bg/民宿内部.png",
        text: "",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "d",
        choiceNumber: "1",
        choiceContent1: "“... 7年前的意外事件中，幸存船员们的证词是船只受到极端天气影响几乎颠覆，在甲板上调试测量装置的科考团成员也因此落入海中遇难，但可疑的是他们的证词仿佛是提前串通好的统一，对于细节的描述也相当细致，但在那种情况下，真的有人能如此的冷静，记住那么多细节吗？”",
        choiceName1: "阅读调查记录",
    },
    24: {
        bg: "../../images/bg/民宿内部.png",
        text: "“... 当时幸存的四名船员都在事后获得了前镇长副官以事故抚恤金为名义的巨额资金。...”",
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
        bg: "../../images/bg/民宿内部.png",
        text: "“...遇难者名单：‘...阳介、高桥南、吉村...’（字迹模糊）事件发生后不久，警方就将该事件定性为意外事故，镇长似乎有意地干预了警方调查，就连案件报告也只有寥寥几字......”",
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
        bg: "../../images/bg/民宿内部.png",
        text: "“这场意外实在有太多一点了这背后一定有什么蹊跷，我认为镇长等政府官员很可能参与策划了这起所谓的意外。如果能找到其中的利益往来，那么说不定就能找到事件的真相......”",
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
        bg: "../../images/bg/民宿内部.png",
        text: "悠香小姐的调查记录就到这里为止，也就是说，七年前那起意外事件实际上是伪造的杀人事件！可是，为什么...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    28: {
        bg: "../../images/bg/民宿内部.png",
        text: "可能是因为...科考团发现了岛上的罪恶交易...（略带哽咽）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    29: {
        bg: "../../images/bg/民宿内部.png",
        text: "这样就说得通了！（一想到所有线索都串联了起来，我兴奋地站起身来，并没有在意纱夏的神情）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "",
    },
    30: {
        bg: "../../images/bg/民宿内部.png",
        text: "幸存者名单这里，“高桥南”...难道和镇上的酒保高桥有什么联系吗？难道高桥南...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "你",
        bgm: "",
        sound: "",
        choice: "n",
        choiceNumber: "2",
        choiceContent1: "",
        choiceContent2: "",
        choiceName1: "是高桥桑的妻子...",
        choiceName2: "和高桥桑只是碰巧重姓了...",
    },
}
function goForward() {
        window.location.assign("Sc7-2.html");
}
function saveThisScene() {
        var Player = JSON.parse(localStorage.getItem("temp"));
    Player.Progress[7][0] = 1;
        localStorage.setItem("temp", JSON.stringify(Player));
        localStorage.setItem(Player.name, JSON.stringify(Player));
}
window.onload = function all(){
    saveThisScene();
    story.next();
}