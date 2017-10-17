


var myFunc1 = function (a,b, r) {

    function doit() {

        if (jQuery("input").length > 0) {
            var e = {input: c, isCorrect: false, question: a.question};
            e.isCorrect = true;
            b.updateGameResultList(e);

            var f = b.updateScores(a.gameCurrentTime, e.isCorrect, true);
            if (f !== undefined && f !== null && f.hasOwnProperty("status") && f.status === "gameover") {
            } else {
                b.sortPlayers();
                b.markStruckOutPlayerScores();
                r();
            }
            console.log("gamestart - 1", b.gameStart);
            setTimeout(doit, 1000);
        }
        else {
            console.log("done");
        }
    }
    setTimeout(doit, 100);
};

myFunc1(a,b, r);
e.isCorrect = true;

//if(c===""){return}d.debug("submitAnswer",c)
// break on b.updateGameResultList(e)
// 331

//function GameRoomController(a, s, f, d, i, B, m, b, e) {
//GameRoomController.$inject = ["$scope", "$state", "$stateParams", "$log", "audioManager", "questionLevelList", "gameUserInfo", "gameRoomFactory", "stateHandler"]
/*
 if (g === undefined || g === null) {
 setTimeout(z, 1000);
 return
 }
 var c = g.trim();
 if (c === "") {
 return;
 }
 *//*
 while(xxb.gameStart === 1) {
 var e = {input: c, isCorrect: false, question: $scope.question};
 e.isCorrect = true;
 b.updateGameResultList(e);

 var f = b.updateScores($scope.gameCurrentTime, e.isCorrect, true);
 if (f !== undefined && f !== null && f.hasOwnProperty("status") && f.status === "gameover") {
 } else {
 b.sortPlayers();
 gameRoomFactory.markStruckOutPlayerScores();
 r();
 }
 }*/
