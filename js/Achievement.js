var AchievementName = ["中道崩殂","雷区蹦迪","成就3","成就4","成就5","成就6","成就7","成就8"];

//返回键绑定的函数
function historyBack() {
    window.history.back();
}
//传入成就编号，此函数会将为当前登录的用户记录成就获取情况
function AddNewAchieve(AchieveNumber) {
    let Player = JSON.parse(localStorage.getItem("temp"));
    Player.Achievement[AchieveNumber] = 1;
    localStorage.removeItem("temp");
    localStorage.setItem("temp", JSON.stringify(Player));
    localStorage.setItem(Player.name, JSON.stringify(Player));
}

