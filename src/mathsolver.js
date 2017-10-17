var RegSolver = function (regexp, calc) {
    this.reg_ = regexp;
    this.calc_ = calc;
};

RegSolver.prototype.match = function (str) {
    var clean = str.replace(/ /g,"");
    return clean.match(this.reg_);

};

RegSolver.prototype.solve = function (str) {
    var clean = str.replace(/ /g,"");
    var args = [];
    var parts = clean.match(this.reg_);
    for (var i = 1; i < parts.length; i++) {
        args.push(parts[i]);
    }
    return this.calc_.apply(this, args);
};

var getMultiplier = function (str) {
    return str === "" ? 1 : parseInt(str)
};

var getSign = function (str) {
    return str === '+' ? 1 : -1;
};

var solvers = [
    new RegSolver(
        /^(\d*)_(\+|-)(\d+)=(\d+)$/,
        function (a, sign, y,  z) {
            // var sign = getSign(sign);
            a = getMultiplier(a);
            return (parseInt(z) - getSign(sign) * parseInt(y)) / a;
        }
    ),
    new RegSolver(
        /^(\d+)\+_=(\d+)$/,
        function (y, z) {
            return parseInt(z) - parseInt(y);
        }
    ),
    new RegSolver(
        /^(\d+)\^(\d+)$/,
        function (y, z) {
            return Math.pow(y, z);
        }
    )
];

function solve (equation) {
    for (var i = 0; i < solvers.length; i++) {
        var solver = solvers[i];
        if (solver.match(equation)) {
            return solver.solve(equation);
        }
    }
}

function assertEq(expect, actual) {
    if (expect !== actual) {
        throw new Error("expected " + expect + " got " + actual);
    }
}

function doSolve() {
    assertEq(12, solve("_+5=17"));
    assertEq(11, solve("2_-5=17"));
    assertEq(2, solve("_+5=7"));
    assertEq(10, solve("10+_=20"));
    assertEq(100, solve("10^2"));

    var items = document.getElementsByTagName("*");
    for (var i = items.length; i--;) {
        if (items[i].onkeypress)
            console.log(items[i]);
        //do stuff
    }
//ng-dirty
    //e.isCorrect=true;
    // b.innerSubmitAnswer in bundle-
    // forEach(eventHandlersCopy,function(fn){fn.call(element,event)})
    //this.$eval(expr)}catch(e){$exceptionHandler(e)}finally{clearPhase()
    // try{$rootScope.$digest()}catch(e){$exceptionHandler(e)
}