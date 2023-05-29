var sceneContent = [
    ["0"],
    ["1"],
    ["2"],
    ["3-1","3-2"],
    ["4"],
    ["5-1", "5-2"],
    ["6"],
    ["7-1", "7-2", "7-3", "7-4", "7-4", "7-5"],
    ["8", "8-1", "8-2"],
    ["9"],
    ["10"]
]
function printFlow() {
    Player = JSON.parse(localStorage.getItem("temp"));
    for (i = 0; i < Player.Progress.length; i++) {
        for (j = 0; j < Player.Progress[i].length; j++) {
            if (Player.Progress[i][j] == 1) {
                var DOM = document.getElementById("id" + i + "_" + j);
                DOM.style.display="";
            }
        }
    }
    for (i = 1; i < Player.Progress.length; i ++) {
        if (i != 4 && i != 5) {
            for (j = 0; j < Player.Progress[i].length; j ++) {
                if (Player.Progress[i][j] == 1){
                    document.getElementById("aw" + i + "_" + j).style.display="";
                }
            }
        }
    }
    if (Player.Progress[4][0] == 1) {
        if (Player.Progress[3][0] == 1) {
            document.getElementById("aw4_0").style.display="";
        }
        if (Player.Progress[3][1] == 1) {
            document.getElementById("aw4_1").style.display="";
        }
    }
    if (Player.Progress[5][0] == 1) {
        if (Player.Progress[6][0] == 1) {
            document.getElementById("aw6_0").style.display="";
        }
        if (Player.Progress[6][1] == 1) {
            document.getElementById("aw6_1").style.display="";
        }
    }
    for (i = 0; i < Player.badEnd.length; i ++) {
        if (Player.badEnd[i] == 1) {
            var DOM = document.getElementById("bd" + (i+1));
            DOM.style.display="";
            document.getElementById("awBd" + (i+1)).style.display="";
        }
    }
    if (Player.fakeEnd == true) {
        document.getElementById("awFd0").style.display="";
        document.getElementById("fd0").style.display="";
    }
    for (i = 0; i < Player.trueEnd.length; i ++) {
        if (Player.trueEnd[i] == 1) {
            document.getElementById("td" + i).style.display="";
            document.getElementById("awTd" + i).style.display="";
        }
    }
}