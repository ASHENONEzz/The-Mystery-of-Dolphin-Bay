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
                location.assign("Sc8-3.html");
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
                location.assign("badEnd3.html");
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
        bg: "../../images/bg/黑幕.png",
        text:"四年前...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "",
        bgm: "",
        sound: "",
        choice: "",
    },
    2: {
        bg: "../../images/bg/黑幕.png",
        text:"果然爸爸的死没有那么简单...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服小可怜.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "警局交流",
        sound: "",
        choice: "",
    },
    3: {
        bg: "../../images/bg/黑幕.png",
        text:"当时近海的气象报告并没有记录到异常的极端天气，事发后船员们却一致声称遇到了风暴...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服小可怜.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    4: {
        bg: "../../images/bg/黑幕.png",
        text:"那次出海父亲既是为了完成研究，也是为了向媒体披露岛上的罪行...难道是因为这个...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服红了眼.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    5: {
        bg: "../../images/bg/东京日常.png",
        text:"为了查明真相，我来到东京，前往当时与父亲联系的报社调查详情...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服红了眼.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    6: {
        bg: "../../images/bg/东京日常.png",
        text:"大岛先生，当时联系我们说是有关伊汝卡岛违法捕杀交易的情况，但发生了那种事，我们最后也没能收到相关的证据和记录...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "报社编辑",
        bgm: "",
        sound: "",
        choice: "",
    },
    7: {
        bg: "../../images/bg/东京日常.png",
        text:"（这么说来，果然是因为父亲触及了岛上高层的利益了吗）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服平静陈述.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    8: {
        bg: "../../images/bg/阴云.png",
        text:"海豚湾的诅咒...（沉思）是在科考团出事后开始传播的，难道说...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服不情愿.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    9: {
        bg: "../../images/bg/阴云.png",
        text:"抱着那样的怀疑，我打电话给了许久不见的高桥哥哥...'高桥哥哥，难道说诅咒杀人的真相是......'",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服小害怕.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    10: {
        bg: "../../images/bg/阴云.png",
        text:"那样温柔的高桥哥竟然会是诅咒事件的真凶，我不免得有些惊异...但此时此刻，让那些唯利是图的家伙血债血偿的念头充斥着我的心...于是，我向高桥哥抛出了一个提案...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服小害怕.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    11: {
        bg: "../../images/bg/阴云.png",
        text:"我可以协助你...我们一起让那些小人付出代价！！...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服恐怖.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "mute",
        sound: "",
        choice: "",
    },
    12: {
        bg: "../../images/bg/黑幕.png",
        text:"一年以前...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "",
        bgm: "",
        sound: "",
        choice: "",
    },
    13: {
        bg: "../../images/bg/黑幕.png",
        text:"高桥哥，接下来就是这一切的罪魁了，只要杀死那些可恶的政客...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服恐怖.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "轻微诡异",
        sound: "",
        choice: "",
    },
    14: {
        bg: "../../images/bg/黑幕.png",
        text:"纱夏...你真的要做到这个地步吗...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保思考.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "高桥",
        bgm: "",
        sound: "",
        choice: "",
    },
    15: {
        bg: "../../images/bg/黑幕.png",
        text:"你说什么...明明我们的目标近在咫尺...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服想当然.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    16: {
        bg: "../../images/bg/黑幕.png",
        text:"不，纱夏，你已经被复仇冲昏了头脑...海豚湾的诅咒已经在岛上根深蒂固了，他们不敢再继续违法的勾当了，已经...没必要再杀人了...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character酒保悲哀.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "高桥",
        bgm: "",
        sound: "",
        choice: "",
    },
    17: {
        bg: "../../images/bg/黑幕.png",
        text:"...我会回去用巫女的身份为你掩护的...必须让他们付出代价...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服平静陈述.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    18: {
        bg: "../../images/bg/黑幕.png",
        text:"纱夏...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/酒保悲哀.png",
        avatar: "../../images/avatar/酒保h.png",
        name: "酒保",
        bgm: "",
        sound: "",
        choice: "",
    },
    19: {
        bg: "../../images/bg/黑幕.png",
        text:"...（挂断了电话）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/制服全身闭目微嗔.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    20: {
        bg: "../../images/bg/黑幕.png",
        text:"...高桥哥，是害怕了吗...不行，在达成目的之前，还不能停止...已经...无法回头了...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服小害怕.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    21: {
        bg: "../../images/bg/港口.png",
        text:"（纱夏回到了岛上）",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "",
        bgm: "",
        sound: "",
        choice: "",
    },
    22: {
        bg: "../../images/bg/商业街.png",
        text:"高桥哥，和那个叫悠香的记者来往很多啊...悠香...那样的神态...是让他回想起了南姐姐吗...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服平静陈述.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    23: {
        bg: "../../images/bg/商业街.png",
        text:"既然如此...那就必须刺激高桥了...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服平静陈述.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    24: {
        bg: "../../images/bg/商业街夕.png",
        text:"（之后，纱夏经常会留意悠香的行动）...这个记者，似乎是在调查海豚湾诅咒，说不定能利用她来......",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服恐怖.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    25: {
        bg: "../../images/bg/民宿内部.png",
        text:"‘喂，请问是悠香小姐吗？...’",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服呆萌.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    26: {
        bg: "../../images/bg/民宿内部.png",
        text:"是的，你是？...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者浴衣.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "",
        choice: "",
    },
    27: {
        bg: "../../images/bg/民宿内部.png",
        text:"你不必知道我是谁，我只是来提供一些帮助...，你在调查海豚湾事件的真相是吧？...我知道一些案子的线索...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服平静陈述.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    28: {
        bg: "../../images/bg/民宿内部.png",
        text:"什么，你是说杀人事件的线索吗？",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/记者浴衣.png",
        avatar: "../../images/avatar/记者h.png",
        name: "悠香",
        bgm: "",
        sound: "",
        choice: "",
    },
    29: {
        bg: "../../images/bg/民宿内部.png",
        text:"不止这些，我还有岛上官员参与违法交易的直接证据...明天凌晨，我们在海豚湾碰头...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服平静陈述.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    30: {
        bg: "../../images/bg/黑幕.png",
        text:"就这样，为了刺激高桥，同时也是为了排除可能使我们暴露的因素，我将悠香引到了海豚湾并将她杀害，同时让高桥以为是岛上官员借诅咒之名谋害了悠香...这样一来，我的计划就能继续实施了......",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服平静陈述.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    31: {
        bg: "../../images/bg/警局.png",
        text:"他为什么会出现在这里！？...可恶...明明很快就能结束这一切了,为什么偏偏这个时候...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服不情愿.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    32: {
        bg: "../../images/bg/警局.png",
        text:"不，或许这正是让我全身而退的好机会，让他来揭发高桥，让这一切结束...这样我们就能回到最初的日常......",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服想当然.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    33: {
        bg: "../../images/bg/黑幕.png",
        text:"...\n...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/pure.png",
        avatar: "../../images/avatar/pureh.png",
        name: "纱夏",
        bgm: "mute",
        sound: "",
        choice: "",
    },
    34: {
        bg: "../../images/bg/东京日常.png",
        text:"就这样...高桥伏法...我也完成了复仇...我和他回到东京，继续一年前那般美好的日常...仿佛一切都回到了原样",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服红了眼.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "日常欢快",
        sound: "",
        choice: "",
    },
    35: {
        bg: "../../images/bg/黑幕.png",
        text:"...本该是那样...可是...为什么心里空落落的...明明我已经为父亲报了仇，为什么...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服红了眼.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "情绪变化",
        sound: "",
        choice: "",
    },
    36: {
        bg: "../../images/bg/黑幕.png",
        text:"我尽可能的享受着日常，但那股负罪感却时刻将我拉回那天，当我的双手沾满悠香小姐的鲜血...我才终于明白...夺去他人的生命是多么的沉重...",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服治愈.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
    37: {
        bg: "../../images/bg/黑幕.png",
        text:"可是...已经无法回到过去了......",
        //下面是Character position: m,r,l
        cp: "m",
        character: "../../images/character/女主制服小可怜.png",
        avatar: "../../images/avatar/女主h.png",
        name: "纱夏",
        bgm: "",
        sound: "",
        choice: "",
    },
}
function goForward() {
    AddNewAchieve(6);
    window.location.assign("trueEnd0.html");
}
function saveThisScene() {
    var Player = JSON.parse(localStorage.getItem("temp"));
    Player.Progress[9][0] = 1;
    localStorage.setItem("temp", JSON.stringify(Player));
    localStorage.setItem(Player.name, JSON.stringify(Player));
}
window.onload = function all(){
    saveThisScene();
    story.next();
}