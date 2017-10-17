/**
 * Created by rnaude on 9/10/2017.
 */
(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require
                if (!u && a)return a(o, !0)
                if (i)return i(o, !0)
                var f = new Error("Cannot find module '" + o + "'")
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {exports: {}}
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e]
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }

    var i = typeof require == "function" && require
    for (var o = 0; o < r.length; o++)s(r[o])
    return s
})({
    1: [function (require, module, exports) {
        "use strict"
        require("20")
        require("27")
        require("2")
        require("4")
        require("117")
        require("116")
        require("104")
        require("107")
        require("42")
        require("210")
        require("188")
        require("142")
        require("172")
        require("123")
        require("101")
        require("110")
        require("91")
        require("135")
        require("76")
        require("47")
        require("104")
        require("39")
    }, {
        101: 101,
        104: 104,
        107: 107,
        110: 110,
        116: 116,
        117: 117,
        123: 123,
        135: 135,
        142: 142,
        172: 172,
        188: 188,
        2: 2,
        20: 20,
        210: 210,
        27: 27,
        39: 39,
        4: 4,
        42: 42,
        47: 47,
        76: 76,
        91: 91
    }],
    2: [function (require, module, exports) {
        "use strict"
        angular.module("app-config", []).value("configuration", {}).factory("configurationLoader", require("3")).value("buildVersion", "0")
    }, {3: 3}],
    3: [function (require, module, exports) {
        "use strict"
        function configurationLoader(c, d, a) {
            "use strict"
            var b = {loadConfig: e}

            function e(e) {
                var a = c.defer()
                var b = d.get(e)
                b.success(function (b) {
                    a.resolve(f(b))
                }).error(function (b) {
                    a.reject(b)
                })
                return a.promise
            }

            function f(d) {
                for (var b = 0; b < d.length; b++) {
                    var c = d[b]
                    a[c.keyField] = c.valueField
                }
                return a
            }

            return b
        }

        configurationLoader.$inject = ["$q", "$http", "configuration"]
        module.exports = configurationLoader
    }, {}],
    4: [function (require, module, exports) {
        "use strict"
        require("19")
    }, {19: 19}],
    5: [function (require, module, exports) {
        module.exports = {
            eventInformation: {
                eventId: "1",
                eventCode: "WEG2015",
                eventTitle: "World Maths Day",
                startDate: "13-10-2015",
                endDate: "15-10-2015",
                eventLogoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/World-Education-Games-Round-Png.png/48px-World-Education-Games-Round-Png.png",
                eventBannerUrl: "http://ww1.prweb.com/prfiles/2013/02/22/10460698/gI_116707_WEG_banner.jpg",
                eventIconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/World-Education-Games-Round-Png.png/48px-World-Education-Games-Round-Png.png"
            }
        }
    }, {}],
    6: [function (require, module, exports) {
        module.exports = {
            ProductId: 2,
            UserId: 1825,
            TotalGames: 20,
            CompletedGames: 0,
            TotalScore: 0,
            EventStartInMs: -2317e3,
            EventEndInMs: 84023e3,
            BestTimeInMs: 0,
            TotalUnicefPoints: 10099990900,
            EventLevelResults: [{LevelId: "1", MaxGames: 10, Results: []}, {
                LevelId: "2",
                MaxGames: 5,
                Results: []
            }, {LevelId: "3", MaxGames: 5, Results: []}]
        }
    }, {}],
    7: [function (require, module, exports) {
        "use strict"
        function clickOutside(a) {
            return {
                restrict: "A",
                replace: false,
                transclude: false,
                templateUrl: undefined,
                require: undefined,
                link: b
            }
            function b(e, g, b, l) {
                var d, c, f
                var j
                if (g.length === 1) {
                    c = b.outsideIfNot !== undefined ? b.outsideIfNot.replace(", ", ",").split(",") : []
                    f = b.outsideIfInclude !== undefined ? b.outsideIfInclude.replace(", ", ",").split(",") : []
                    d = g[0]
                    j = d.getAttribute("register-outside") || true
                    var i = d.getAttribute("click-outside")
                    if (b.id !== undefined) {
                        c.push(b.id)
                    }
                    e.$watch(j, k, true)
                }
                function k(b, c) {
                    b = b === undefined ? true : b
                    b = b === "true" || b === true
                    if (b === true) {
                        a.on("click", h)
                    } else {
                        a.off("click", h)
                    }
                }

                function h(j) {
                    var a = 0, b
                    if (!j.target) {
                        return
                    }
                    for (b = j.target; b; b = b.parentNode) {
                        var d = b.id
                        var g = b.className
                        var h = false
                        if (d !== undefined) {
                            for (a = 0; a < c.length; a++) {
                                if (d.indexOf(f[a]) > -1 || g.indexOf(f[a]) > -1) {
                                    h = true
                                    break
                                }
                                if (d.indexOf(c[a]) > -1 || g.indexOf(c[a]) > -1) {
                                    return
                                }
                            }
                        }
                        if (h === true) {
                            break
                        }
                    }
                    e.$eval(i)
                    e.$apply()
                }
            }
        }

        clickOutside.$inject = ["$document"]
        module.exports = clickOutside
    }, {}],
    8: [function (require, module, exports) {
        "use strict"
        function eventPanel() {
            return {
                scope: {
                    productId: "@",
                    eventInfo: "=",
                    eventDisplayChange: "=",
                    eventTiming: "=",
                    showResetPopup: "=",
                    badgeTitle: "@",
                    badgeBasePath: "@",
                    badgeList: "=?",
                    eventLevelClicked: "=?",
                    eventInProgress: "="
                },
                restrict: "E",
                replace: true,
                transclude: false,
                template: require("13"),
                require: undefined,
                link: link
            }
        }

        eventPanel.$inject = []
        function link(a) {
            var c
            a.onWheelClicked = f
            a.resetEventResult = b
            a.onOutsideWheelClicked = h
            a.onLevelBtnClicked = i
            a.getBackgroundLogoStyle = j
            a.getBackgroundIconStyle = k
            a.getBannerImage = l
            a.evtSymbolNsme = "maths"
            a.myEventResultTitle = "Played games results"
            a.myTotalScore = 0
            a.onOff = false
            a.showBadges = false
            a.getMyBadgeCssCode = g
            a.totalScoreLabel = "Total Score:"
            a.mybadgesTitle = "My badges!"
            a.myEventGameTotal = 0
            a.myEventGameCompleted = 0
            a.gameResultDisplayList = []
            a.roundProgressData = {progressLabel: 2, percentage: .2, marknumLabel: 20, marknum: 20}
            d()
            function d() {
                var b = a.productId === undefined ? 1 : Number(a.productId)
                switch (b) {
                    case 1:
                        a.evtSymbolNsme = "maths"
                        break
                    case 2:
                        a.evtSymbolName = "spell"
                        break
                    default:
                        a.evtSymbolNsme = "maths"
                        break
                }
                if (a.badgeTitle && a.badgeTitle !== "" && (a.badgeBasePath && a.badgeBasePath !== "")) {
                    a.mybadgesTitle = a.badgeTitle
                    a.myBadgeList = a.badgeList
                    a.myBadgeBasePath = a.badgeBasePath
                    a.showBadges = true
                }
                c = a.$watch("eventInfo", e, true)
            }

            function e(b) {
                a.resultsStyle = "result-text"
                if (!b || !b.eventGameList) {
                    return
                }
                if (a.eventInfo.isEvent && !a.eventInfo.eventInProgress) {
                    a.resultsStyle = "warm-up-text"
                }
                a.roundProgressData.marknum = a.eventInfo.TotalGames
                a.roundProgressData.marknumLabel = a.eventInfo.TotalGames + ""
                a.roundProgressData.percentage = a.eventInfo.CompletedGames / a.eventInfo.TotalGames
                a.roundProgressData.progressLabel = a.roundProgressData.percentage * 100 + ""
            }

            function f() {
                a.onOff = !a.onOff
                a.eventDisplayChange(a.onOff)
            }

            function b() {
                if (typeof a.showResetPopup === "function") {
                    a.showResetPopup()
                }
            }

            function h() {
                if (a.onOff === true) {
                    a.onOff = !a.onOff
                    a.eventDisplayChange(a.onOff)
                }
            }

            function i() {
                if (typeof a.eventLevelClicked === "function") {
                    a.eventLevelClicked()
                }
            }

            function j() {
                return {"background-image": "url(" + a.eventInfo.eventLogoUrl + ")"}
            }

            function k() {
                return {"background-image": "url(" + a.eventInfo.eventIconUrl + ")"}
            }

            function l() {
                return {"background-image": "url(" + a.eventInfo.eventBannerUrl + ")"}
            }

            function g(b) {
                if (b) {
                    return 'content: url("' + a.myBadgeBasePath + b + '.png");'
                } else {
                    return
                }
            }
        }

        module.exports = eventPanel
    }, {13: 13}],
    9: [function (require, module, exports) {
        "use strict"
        function eventResetPopup(a) {
            return {scope: {isShow: "=", resetEvent: "="}, restrict: "E", template: require("14"), link: b}
            function b(b, e, f) {
                b.clickResetButton = d
                b.close = c
                function d() {
                    a.info("Retry Button Clicked: Yes")
                    if (typeof b.resetEvent === "function") {
                        b.resetEvent()
                    }
                    c()
                }

                function c() {
                    a.info("Retry Button Clicked: No")
                    b.isShow = false
                }
            }
        }

        eventResetPopup.$inject = ["$log"]
        module.exports = eventResetPopup
    }, {14: 14}],
    10: [function (require, module, exports) {
        "use strict"
        function eventRoundProgress() {
            var a = {
                replace: true,
                template: "<div>event-round-progress</div>",
                compile: b,
                link: undefined,
                controller: undefined
            }
            return a
            function b(s, x, w) {
                var a, e, f, j, b, c
                var g, d, p, t
                var n, o, u, q, r
                var l, m, i, h, k
                if (s.length === 1) {
                    a = s[0]
                    e = a.getAttribute("width") || "400"
                    f = a.getAttribute("height") || "400"
                    j = a.getAttribute("data-model") || {
                            progressLabel: 10,
                            percentage: .1,
                            marknumLabel: 20,
                            marknum: 20
                        }
                    b = document.createElement("canvas")
                    b.setAttribute("width", e)
                    b.setAttribute("height", f)
                    b.setAttribute("data-model", j)
                    a.parentNode.replaceChild(b, a)
                    c = a.getAttribute("anti-clock-wise") || true
                    g = a.getAttribute("outer-circle-width") || "20"
                    n = a.getAttribute("inner-circle-width") || "5"
                    p = a.getAttribute("outer-circle-background-color") || "#505769"
                    t = a.getAttribute("outer-circle-foreground-color") || "#12eeb9"
                    u = a.getAttribute("inner-circle-color") || "#505769"
                    q = a.getAttribute("label-color") || "#12eeb9"
                    d = a.getAttribute("outer-circle-radius") || "100"
                    o = a.getAttribute("inner-circle-radius") || "70"
                    r = a.getAttribute("label-font") || "50pt Calibri"
                    l = a.getAttribute("scale-mark-width") || "5"
                    m = a.getAttribute("scale-mark-color") || "#202729"
                    i = 20
                    h = 2 * Math.PI / 20
                    k = Math.PI * 1.5
                    return {
                        pre: function a(d, e, f, g) {
                            var c = b.getAttribute("data-model")
                            d.$watch(c, v, true)
                        }, post: function a(b, c, d, e) {
                        }
                    }
                }
                function v(s, D) {
                    s = s === null || s === undefined ? j : s
                    i = s.marknum > 0 ? s.marknum : 1
                    h = 2 * Math.PI / i
                    var a = b.getContext("2d")
                    a.clearRect(0, 0, e, f)
                    var v = e / 2
                    var w = f / 2
                    a.beginPath()
                    a.arc(v, w, parseInt(d), 0, Math.PI * 2, true)
                    a.lineWidth = parseInt(g)
                    a.strokeStyle = p
                    a.stroke()
                    var y = Math.PI * 1.5
                    var A = y + Math.PI * 2 * s.percentage
                    c = c === "true" || c === true
                    if (c === true) {
                        A = y - Math.PI * 2 * s.percentage
                        c = true
                    }
                    a.beginPath()
                    a.arc(v, w, parseInt(d), y, A, c)
                    a.lineWidth = parseInt(g)
                    a.strokeStyle = t
                    a.stroke()
                    var z = parseInt(d) + parseInt(g) / 2
                    for (var x = 0; x < i; x++) {
                        var B = v + z * Math.cos(x * h + k)
                        var C = w + z * Math.sin(x * h + k)
                        a.beginPath()
                        a.moveTo(v, w)
                        a.lineWidth = l
                        a.lineTo(B, C)
                        a.strokeStyle = m
                        a.stroke()
                    }
                    a.beginPath()
                    a.arc(v, w, z, 0, Math.PI * 2, true)
                    a.lineWidth = l
                    a.strokeStyle = m
                    a.stroke()
                    a.beginPath()
                    a.arc(v, w, parseInt(o), 0, Math.PI * 2, true)
                    a.lineWidth = parseInt(n)
                    a.strokeStyle = u
                    a.stroke()
                    a.font = r
                    a.textAlign = "center"
                    a.textBaseline = "middle"
                    a.fillStyle = q
                    a.fillText(s.progressLabel, v, w)
                }
            }
        }

        eventRoundProgress.$inject = []
        module.exports = eventRoundProgress
    }, {}],
    11: [function (require, module, exports) {
        "use strict"
        angular.module("ppp.eventPanel", []).service("eventService", require("17")).service("eventResultsService", require("15")).service("eventScoreService", require("16")).service("evtSrvConfig", require("18")).directive("eventRoundProgress", require("10")).directive("eventPanel", require("8")).directive("clickOutside", require("7")).directive("eventResetPopup", require("9")).factory("eventFactory", require("12")).value("timeEnum", {
            DAY_IN_MILLI_SEC: 864e5,
            HOUR_IN_MILLI_SEC: 36e5,
            MINUTE_IN_MILLI_SEC: 6e4
        }).value("eventModeEnum", {PRE_MODE: "pre", LIVE_MODE: "live", POST_MODE: "post"})
    }, {10: 10, 12: 12, 15: 15, 16: 16, 17: 17, 18: 18, 7: 7, 8: 8, 9: 9}],
    12: [function (require, module, exports) {
        "use strict"
        function eventFactory(q, o, j, v, l, e, E, I, H) {
            var b = {receiveEventInfo: null, updateEventCountDown: null, resetEventInfo: null}
            var k = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            var r = 5
            var d
            var f, c
            var p, y, h
            var a
            var g = {
                init: G,
                getEventData: A,
                getCurrentMode: w,
                deleteEventResult: z,
                dataPool: b,
                stopTimer: m,
                cleanUp: B
            }
            g.setEventResultMockData = o.setMockData
            g.setWEGData = q.setMockData
            g.parseEventInfo = t
            g.parseAndUpdateEventResults = u
            return g
            function G(b, d, c, e, f) {
                if (c) {
                    p = b
                    j.addConfig("ProductId", b)
                    j.addConfig("UserToken", d)
                    j.addConfig("WegMathsEventCdnPath", c)
                    j.addConfig("EventServiceGetGamesAndScores", e)
                    j.addConfig("EventServiceScores", f)
                    if (a && a.hasOwnProperty("eventId") && a.eventId && a.eventId !== "") {
                        s()
                    } else {
                        x()
                    }
                }
            }

            function w() {
                return d
            }

            function x() {
                q.getEventData().then(t)
            }

            function s() {
                o.get().then(u)
            }

            function z() {
                E["delete"]().then(C)
            }

            function A() {
                return a
            }

            function t(b) {
                if (!b) {
                    return
                } else if (typeof b === "string") {
                    try {
                        b = $.parseJSON("{" + b + "}")
                    } catch (a) {
                    }
                }
                if (b.hasOwnProperty("eventInformation")) {
                    a = b.eventInformation
                }
                if (!a) {
                    return
                }
                s()
            }

            function C() {
                if (!a) {
                    return
                }
                if (b && b.resetEventInfo) {
                    b.resetEventInfo()
                }
            }

            function u(c) {
                if (!a || !c || c.hasOwnProperty("EventLevelResults") === false || !c.EventLevelResults) {
                    a = undefined
                    return
                }
                d = n(c.EventStartInMs, c.EventEndInMs)
                var u = 0
                var t = 0
                var s = 0
                var k = ""
                var q = []
                var p = []
                var f, l, h, i, j, o, g
                var m
                for (i = 0; i < c.EventLevelResults.length; i++) {
                    f = c.EventLevelResults[i]
                    if (f && f.MaxGames) {
                        t += f.MaxGames
                        g = f.Results
                        if (g) {
                            u += g.length
                        }
                        l = {level: f.LevelId}
                        m = {level: f.LevelId}
                        for (j = 1, h = 0; h < f.MaxGames; h++, j++) {
                            o = "result" + j
                            l[o] = ""
                            m[o] = ""
                            if (g && h < g.length) {
                                s += g[h]
                                l[o] = g[h]
                            }
                            if (j >= r || h === f.MaxGames - 1) {
                                q.push(l)
                                p.push(m)
                                j = 0
                                l = {level: f.LevelId}
                                m = {level: f.LevelId}
                            }
                        }
                        if (i === 0) {
                            k += f.LevelId
                        } else if (i === c.EventLevelResults.length - 1) {
                            k += " and " + f.LevelId
                        } else {
                            k += ", " + f.LevelId
                        }
                    }
                }
                a.TotalScore = c.TotalScore >= 0 ? c.TotalScore : s
                a.TotalGames = c.TotalGames >= 0 ? c.TotalGames : t
                a.CompletedGames = c.CompletedGames >= 0 ? c.CompletedGames : u
                a.EventResultTitle = "Play a total of " + c.TotalGames + " games across Levels " + k
                a.TotalUnicefPoints = c.TotalUnicefPoints
                a.eventGameList = q
                a.eventResetList = p
                a.eventLevels = c.EventLevelResults
                if (d === e.LIVE_MODE || d === e.PRE_MODE) {
                    a.eventTiming = D(c.EventStartInMs, c.EventEndInMs)
                }
                a.eventInProgress = d === e.LIVE_MODE
                a.isEvent = d === e.LIVE_MODE || d === e.PRE_MODE
                a.eventDates = F(a.startDate, a.endDate)
                if (b && b.receiveEventInfo) {
                    b.receiveEventInfo(a)
                }
            }

            function n(a, b) {
                if (a > 0) {
                    return e.PRE_MODE
                } else if (b > 0) {
                    return e.LIVE_MODE
                } else {
                    return e.POST_MODE
                }
            }

            function F(e, f) {
                var d = /(\d{1,2})-(\d{1,2})-(\d{2,4})/
                var a = e.match(d)
                var b = f.match(d)
                var c = ""
                if (a[2] === b[2]) {
                    c = a[1] + " - " + b[1] + " " + k[Number(a[2]) - 1] + " " + a[3]
                } else {
                    c = a[1] + " " + k[Number(a[2]) - 1] + " - " + b[1] + " " + k[Number(b[2]) - 1] + " " + a[3]
                }
                var g = a[1] + "/" + a[2] + "/" + a[3]
                return c
            }

            function i(e, g) {
                var d, b, a, c
                c = Math.floor(e / 1e3)
                a = Math.floor(c / 60)
                c = c % 60
                b = Math.floor(a / 60)
                a = a % 60
                d = Math.floor(b / 24)
                b = b % 24
                var h, i, j, f
                if (d > 0) {
                    h = d === 1 ? " DAY" : " DAYS"
                }
                if (b >= 0) {
                    i = b === 1 ? " HOUR" : " HOURS"
                }
                if (a >= 0) {
                    f = a === 1 ? " MIN" : " MINS"
                }
                if (e < l.DAY_IN_MILLI_SEC && c >= 0) {
                    j = c === 1 ? " SEC" : " SECS"
                }
                return {
                    label: g === "start" ? "TIME TO START" : "GAME ENDS IN",
                    show: g === "start" ? true : e < l.HOUR_IN_MILLI_SEC ? true : false,
                    leftTime: e,
                    leftDays: d,
                    leftHours: b,
                    leftMinutes: a,
                    leftSeconds: c,
                    leftDaysTxt: h,
                    leftHoursTxt: i,
                    leftMinutesTxt: f,
                    leftSecondsTxt: j
                }
            }

            function D(k, o) {
                f = k
                c = o
                var g = 1e3
                var a
                if (h) {
                    m()
                }
                if (c > 0) {
                    var j = 0
                    h = v(function () {
                        f -= g
                        c -= g
                        j++
                        a = undefined
                        if (f > 0) {
                            if (f <= e.HOUR_IN_MILLI_SEC) {
                                a = i(f, "start")
                            } else {
                                if (j % 60) {
                                    j = 0
                                    a = i(f, "start")
                                }
                            }
                        } else if (c > 0) {
                            if (c <= l.HOUR_IN_MILLI_SEC) {
                                a = i(c)
                            }
                        }
                        if (f + g > 0 && f <= 0) {
                            d = n(f, c)
                            if (c <= l.HOUR_IN_MILLI_SEC) {
                                a = i(c)
                            } else {
                                a = {show: false}
                            }
                            if (b && b.updateEventCountDown) {
                                b.updateEventCountDown(a, d === e.LIVE_MODE)
                            }
                            return
                        } else if (c + g > 0 && c <= 0) {
                            d = n(f, c)
                            a = {show: false}
                            m()
                            if (b && b.updateEventCountDown) {
                                b.updateEventCountDown(a, false, false)
                            }
                            return
                        }
                        if (a && b && b.updateEventCountDown) {
                            b.updateEventCountDown(a)
                        }
                    }, g)
                    if (d === e.LIVE_MODE) {
                        a = i(o)
                    } else if (d === e.PRE_MODE) {
                        a = i(k, "start")
                    }
                    return a
                }
                return a
            }

            function m() {
                if (h) {
                    v.cancel(h)
                    h = null
                }
            }

            function B() {
                a = undefined
                p = undefined
                y = undefined
                h = undefined
                d = undefined
                c = undefined
                f = undefined
                b.updateEventCountDown = undefined
                b.resetEventInfo = undefined
                b.receiveEventInfo = undefined
            }
        }

        eventFactory.$inject = ["eventService", "eventResultsService", "evtSrvConfig", "$interval", "timeEnum", "eventModeEnum", "eventScoreService", "$log", "$q"]
        module.exports = eventFactory
    }, {}],
    13: [function (require, module, exports) {
        module.exports = '<div class="event-panel-base" ng-class="{on:onOff}" id="event-panel-clicking-area"\r\n     click-outside="onOutsideWheelClicked()" outside-if-include="event-panel-as-outside-01" register-outside="onOff">\r\n    <div class="event-panel-bg" ng-class="{on:onOff}" />\r\n    <div class="event-panel-left" id="event-panel-as-outside-01"/>\r\n\r\n    <div class="warmup-box" ng-show="eventTiming.label===\'TIME TO START\'">\r\n        <div class="warmup-mode"></div>\r\n    </div>\r\n    <div class="weg-log-display">\r\n        <!--uncomment and use the below code when the actual image is returned from the server>-->\r\n        <!--<div class="weg-logo"  ng-style="getBackgroundLogoStyle()"/>-->\r\n        <div class="weg-logo"/>\r\n        <span class="weg-date-label" ng-class="{on:onOff}">{{eventInfo.eventDates}}</span>\r\n    </div>\r\n\r\n    <!--Game Gadget Panel-->\r\n    <div class="game-gadget-display" ng-click="onWheelClicked()">\r\n        <div class="game-to-go-bg"/>\r\n        <!--WEG progress radial-->\r\n        <div class="round-progress-holder">\r\n            <div event-round-progress data-model="roundProgressData"\r\n                 width="174" height="180" anti-clock-wise=\'false\'\r\n                 scale-mark-width=\'3\' outer-circle-radius="40" outer-circle-width="89"\r\n                 outer-circle-background-color="#aa0033" outer-circle-foreground-color="#505769"\r\n                 inner-circle-radius="33" inner-circle-width="66" inner-circle-color="yellow"\r\n                 scale-mark-color=\'#36393e\' label-font="2pt Arial" label-color="#0ff"></div>\r\n        </div>\r\n        <div class="game-gadget-center"/>\r\n        <span class="to-go-label">games <br/>to go</span>\r\n        <span class="game-number">{{eventInfo.TotalGames - eventInfo.CompletedGames}}</span>\r\n    </div>\r\n\r\n    <!--<div class="weg-count-display" ng-class="{on:onOff}" ng-show="eventTiming && eventTiming.show">-->\r\n    <!--<span class="day-label" ng-if="eventTiming.leftDaysTxt" >{{eventTiming.leftDaysTxt}}</span>-->\r\n    <!--<span class="hour-label">{{eventTiming.leftHoursTxt}}</span>-->\r\n    <!--<span class="mins-label">{{eventTiming.leftMinutesTxt}}</span>-->\r\n    <!--<span class="day-label" ng-if="eventTiming.leftSecondsTxt">{{eventTiming.leftSecondsTxt}}</span>-->\r\n    <!--</div>-->\r\n\r\n    <div class="weg-count-display" ng-class="{on:onOff}" ng-show="eventTiming && eventTiming.show">\r\n        <span class="time-left-label">{{eventTiming.label}}</span>\r\n\r\n        <span class="timer-label1"  ng-if="eventTiming.leftDaysTxt">{{eventTiming.leftDaysTxt}}</span>\r\n        <span class="{{eventTiming.leftDaysTxt?\'timer-label2\':\'timer-label1\'}}">{{eventTiming.leftHoursTxt}}</span>\r\n        <span class="{{eventTiming.leftDaysTxt?\'timer-label3\':\'timer-label2\'}}">{{eventTiming.leftMinutesTxt}}</span>\r\n        <span class="timer-label3" ng-if="eventTiming.leftSecondsTxt">{{eventTiming.leftSecondsTxt}}</span>\r\n\r\n        <span class="timer-text1" ng-if="eventTiming.leftDaysTxt">{{eventTiming.leftDays}}</span>\r\n        <span class="{{eventTiming.leftDaysTxt?\'timer-text2\':\'timer-text1\'}}">{{eventTiming.leftHours}}</span>\r\n        <span class="{{eventTiming.leftDaysTxt?\'timer-text3\':\'timer-text2\'}}" >{{eventTiming.leftMinutes}}</span>\r\n        <span class="timer-text3" ng-if="eventTiming.leftSecondsTxt">{{eventTiming.leftSeconds}}</span>\r\n    </div>\r\n\r\n\r\n    <!--The extension parts at right side after open the event-->\r\n    <div class="wmd-result-div"  ng-class="{on:onOff}">\r\n\r\n\r\n        <!--uncomment and use the below code when the actual image is returned from the server>-->\r\n        <!--<div class="mid-world-day-icon-maths" ng-style="getBackgroundIconStyle()"/>-->\r\n        <!--<div class="mid-world-day-logo-maths" ng-style="getBannerImage()"/>-->\r\n\r\n        <span class="{{eventTiming.label===\'TIME TO START\'?\'wmd-date-label-warmup\':\'wmd-date-label\'}}">{{eventInfo.eventDates}}</span>\r\n        <div class="{{eventTiming.label===\'TIME TO START\'?\'mid-world-day-icon-maths-warmup\':\'mid-world-day-icon-maths\'}}"/>\r\n        <div class="{{eventTiming.label===\'TIME TO START\'?\'mid-world-day-logo-maths-warmup\':\'mid-world-day-logo-maths\'}}"/>\r\n\r\n        <img class="weg-logo-word"/>\r\n        <button class="btn btn-default reset-button" ng-click="resetEventResult()"\r\n			ng-disabled="eventInfo.CompletedGames < eventInfo.TotalGames"\r\n			ng-show="eventTiming.label===\'TIME TO START\'">RETRY</button>\r\n        <hr class="result-hr"/>\r\n\r\n        <span class="event-game-result-title">{{eventInfo.EventResultTitle}}</span>\r\n\r\n        <!--Total Score-->\r\n        <span class="total-score-label">{{totalScoreLabel}}</span>\r\n        <span class="total-score-text">{{eventInfo.TotalScore}}</span>\r\n\r\n        <!--Game Result Div-->\r\n        <div class="game-result-div">\r\n            <div class="game-result-column" ng-repeat="gameResult in eventInfo.eventGameList">\r\n                <button disabled class="event-game-levels" ng-click="onLevelBtnClicked()">{{gameResult.level}}</button>\r\n                <span ng-class="resultsStyle">{{gameResult.result1}}</span>\r\n                <span ng-class="resultsStyle" ng-show="gameResult.result2!=null">{{gameResult.result2}}</span>\r\n                <span ng-class="resultsStyle" ng-show="gameResult.result3!=null">{{gameResult.result3}}</span>\r\n                <span ng-class="resultsStyle" ng-show="gameResult.result4!=null">{{gameResult.result4}}</span>\r\n                <span ng-class="resultsStyle" ng-show="gameResult.result5!=null">{{gameResult.result5}}</span>\r\n            </div>\r\n        </div>\r\n\r\n        <!--My Badges Div-->\r\n        <div class="my-badges-div" ng-show="showBadges">\r\n            <!--My Badges List-->\r\n            <div class="my-badges-list-bg ">\r\n            </div>\r\n            <div class="my-badges-list ">\r\n                <img class="my-badge-item" title="{{myBadge.badgeDescription}}" ng-repeat="myBadge in myBadgeList"  style="{{getMyBadgeCssCode(myBadge.badgeName)}}"/>\r\n            </div>\r\n\r\n            <div class="my-badges-header">\r\n                <span class="text-field-26">{{mybadgesTitle}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n'
    }, {}],
    14: [function (require, module, exports) {
        module.exports = '<div class="retry-popup-box" ng-if="isShow">\r\n    <div class="content font-16">\r\n        <h4><b>Click yes to retry your 20 warm-up games</b></h4>\r\n        <span> Will you beat your score? </span>\r\n        <br/>\r\n        <span class="font-12">* Remember, after warm-up mode you won\'t be able to reset your scores.  </span>\r\n    </div>\r\n\r\n    <div class="dialog_bar">\r\n        <button class="btn-default warm-up-button dialog-button" ng-click="clickResetButton()" aria-hidden="true">YES</button>\r\n        <button class="btn-default warm-up-button dialog-button" ng-click="close()" aria-hidden="true">NO</button>\r\n    </div>\r\n</div>\r\n'
    }, {}],
    15: [function (require, module, exports) {
        "use strict"
        function eventResultsService(e, b, c) {
            var a
            var d = {setMockData: h, get: f}
            return d
            function f() {
                if (a) {
                    return b.when(a)
                }
                var c = b.defer()
                g(c)
                return c.promise
            }

            function g(a) {
                var b = c.getConfigValue("UserToken")
                if (b === "" || b === null) {
                    a.reject("token is empty")
                }
                var d = c.getConfigValue("EventServiceGetGamesAndScores")
                if (d !== null && d !== "") {
                    var f = e.get(d, {headers: {AuthToken: b}})
                    f.success(function (b) {
                        a.resolve(b)
                    }).error(function (c, b) {
                        a.reject(b)
                    })
                } else {
                    a.reject("EventServiceGetGamesAndScores EndPoint is empty")
                }
            }

            function h(b) {
                a = b
            }
        }

        eventResultsService.$inject = ["$http", "$q", "evtSrvConfig"]
        module.exports = eventResultsService
    }, {}],
    16: [function (require, module, exports) {
        "use strict"
        function eventResultsService(e, b, c) {
            var a
            var d = {setMockData: h, "delete": f}
            return d
            function f() {
                if (a) {
                    return b.when(a)
                }
                var c = b.defer()
                g(c)
                return c.promise
            }

            function g(a, g) {
                var b = c.getConfigValue("UserToken")
                if (b === "" || b === null) {
                    a.reject("token is empty")
                }
                var d = c.getConfigValue("EventServiceScores")
                if (d !== null && d !== "") {
                    var f = e["delete"](d, {headers: {AuthToken: b}})
                    f.success(function (b) {
                        a.resolve(b)
                    }).error(function (c, b) {
                        a.reject(b)
                    })
                } else {
                    a.reject("EventServiceGetGamesAndScores EndPoint is empty")
                }
            }

            function h(b) {
                a = b
            }
        }

        eventResultsService.$inject = ["$http", "$q", "evtSrvConfig"]
        module.exports = eventResultsService
    }, {}],
    17: [function (require, module, exports) {
        "use strict"
        function eventService(a, d, e) {
            var b
            var c = {setMockData: g, getEventData: f}
            return c
            function f() {
                if (b) {
                    return a.when(b)
                }
                var c = e.getConfigValue("WegMathsEventCdnPath")
                var f = a.defer()
                if (c !== null && c !== "") {
                    d.get(c).success(function (a) {
                        f.resolve(a)
                    }).error(function () {
                        f.reject("Failed to load event data")
                    })
                } else {
                    return a.reject("WegMathsEventCdnPath EndPoint is empty")
                }
                return f.promise
            }

            function g(a) {
                b = a
            }
        }

        eventService.$inject = ["$q", "$http", "evtSrvConfig"]
        module.exports = eventService
    }, {}],
    18: [function (require, module, exports) {
        "use strict"
        function evtSrvConfig() {
            this.addConfig = b
            this.getConfigValue = c
            this.cleanUp = d
            var a = null

            function b(f, b) {
                if (a === null || a === undefined) {
                    a = {}
                }
                var d = null, e = null
                if ($.isArray(f) === true) {
                    var g = $.isArray(b) === true ? b.length : 0
                    if (g === 0) {
                        b = [b]
                        g = 1
                    }
                    for (var c = 0, h = f.length; c < h; c++) {
                        if (c < g) {
                            d = f[c]
                            e = b[c]
                            a[d] = e
                        } else {
                            break
                        }
                    }
                } else {
                    d = f
                    e = $.isArray(b) === false ? b : b[0]
                    a[d] = e
                }
                return a
            }

            function c(b) {
                if (a && a.hasOwnProperty(b) && a[b] !== undefined && a[b] !== "") {
                    return a[b]
                }
                return null
            }

            function d() {
                a = null
            }
        }

        module.exports = evtSrvConfig
    }, {}],
    19: [function (require, module, exports) {
        "use strict"
        require("11")
        angular.module("ppp.eventPanel").value("eventMock", require("5")).value("eventResultMock", require("6"))
    }, {11: 11, 5: 5, 6: 6}],
    20: [function (require, module, exports) {
        "use strict"
        angular.module("face-container", ["ui.router"]).directive("avatar", require("21")).directive("scale", require("23")).directive("errSrc", require("22")).factory("faceSettingParser", require("26")).factory("colorHexToIntConverter", require("25"))
    }, {21: 21, 22: 22, 23: 23, 25: 25, 26: 26}],
    21: [function (require, module, exports) {
        "use strict"
        function avatar(a, b) {
            var c = {
                restrict: "E",
                scope: {baseUrl: "@", faceSetting: "@", scale: "@", hideBackground: "@"},
                replace: true,
                template: require("24"),
                link: d
            }
            return c
            function d(c) {
                var d, e
                c.showFace = false
                c.showBackground = true
                c.$watch("faceSetting", function (e) {
                    if (!!e) {
                        c.showFace = true
                        d = a.parse(e)
                        f()
                    } else {
                        c.showFace = false
                        b.warn("face setting is not set for avatar")
                    }
                })
                c.$watch("hideBackground", function (a) {
                    c.showBackground = true
                    if (a) {
                        if (a.toLowerCase() === "true") {
                            c.showBackground = false
                        }
                    }
                })
                c.$watch("scale", function (a) {
                    if (a === "" || a === undefined || a === 0) {
                        c.scale = 1
                    }
                })
                c.$watch("baseUrl", function (a) {
                    if (!!a) {
                        e = a
                        f()
                    } else {
                        b.warn("base Url is not defined for avatar")
                    }
                })
                function f() {
                    if (e && d) {
                        c.avatarSettings = a.generateUrls(e, d)
                    }
                }
            }
        }

        avatar.$inject = ["faceSettingParser", "$log"]
        module.exports = avatar
    }, {24: 24}],
    22: [function (require, module, exports) {
        "use strict"
        function errSrc() {
            "use strict"
            return {
                restrict: "A", link: function a(d, b, c) {
                    d.$watch(function () {
                        return c.ngSrc
                    }, function (a) {
                        if (!a) {
                            b.attr("src", c.errSrc)
                        }
                    })
                    b.bind("error", function () {
                        b.attr("src", c.errSrc)
                    })
                }
            }
        }

        errSrc.$inject = []
        module.exports = errSrc
    }, {}],
    23: [function (require, module, exports) {
        "use strict"
        function scaleElem(a) {
            "use strict"
            return {
                restrict: "A", link: function a(g, c, d) {
                    var b = $(c)

                    function e(a) {
                        b.css({
                            "transform-origin": "0 0",
                            "-ms-transform-origin": "0 0",
                            "-webkit-transform-origin": "0 0",
                            "-moz-transform-origin": "0 0",
                            "-o-transform-origin": "0 0"
                        })
                        var c = b.width()
                        var d = b.height()
                        f(a, c * a, d * a)
                    }

                    function f(a, c, d) {
                        b.css({
                            transform: "scale(" + a + ")",
                            "-o-transform": "scale(" + a + ")",
                            "-ms-transform": "scale(" + a + ")",
                            "-webkit-transform": "scale(" + a + ")",
                            "-moz-transform": "scale(" + a + ")"
                        })
                        b.css("width", c + "px")
                        b.css("height", d + "px")
                    }

                    d.$observe("scale", function (a) {
                        if (a) {
                            e(a)
                        }
                    })
                }
            }
        }

        scaleElem.$inject = ["$log"]
        module.exports = scaleElem
    }, {}],
    24: [function (require, module, exports) {
        module.exports = '<div style="position: relative; height: 200px; width:200px">\r\n  <img ng-src="{{avatarSettings.backGroundUrl}}" style="position: absolute" ng-show="showBackground" alt=""/>\r\n  <img ng-src="{{avatarSettings.hatBackUrl}}" style="position: absolute" alt="" />\r\n  <img ng-src="{{avatarSettings.faceUrl}}" style="position: absolute" alt=""/>\r\n  <img ng-src="{{avatarSettings.eyeBrowsUrl}}" style="position: absolute" alt="" />\r\n  <img ng-src="{{avatarSettings.eyesUrl}}" style="position: absolute" alt=""/>\r\n  <img ng-src="{{avatarSettings.noseUrl}}" style="position: absolute" alt=""/>\r\n  <img ng-src="{{avatarSettings.mouthUrl}}" style="position: absolute" alt=""/>\r\n  <img ng-src="{{avatarSettings.clothesUrl}}" style="position: absolute" alt=""/>\r\n  <img ng-src="{{avatarSettings.glassesUrl}}" style="position: absolute" alt="" />\r\n  <img ng-src="{{avatarSettings.hairUrl}}" style="position: absolute" alt=""/>\r\n  <img ng-src="{{avatarSettings.hatUrl}}" style="position: absolute" alt=""/>\r\n  <div  class="no-face-lrg" style="height: 200px; width: 200px; position: absolute" ng-hide="showFace" />\r\n</div>\r\n\r\n\r\n'
    }, {}],
    25: [function (require, module, exports) {
        "use strict"
        function colorHexToIntConverter(a) {
            "use strict"
            return {convert: b}
            function b(b, c) {
                if (b.indexOf("0x") >= 0) {
                    a.debug(c + ": " + b)
                    return 1
                }
                return b
            }
        }

        colorHexToIntConverter.$inject = ["$log"]
        module.exports = colorHexToIntConverter
    }, {}],
    26: [function (require, module, exports) {
        "use strict"
        function faceSettingParser(c, b) {
            "use strict"
            return {parse: d, generateUrls: g}
            function d(a) {
                a = a.toUpperCase()
                var b = a.split("|")
                return e(b)
            }

            function e(a) {
                var c = {
                    background: a[15],
                    backgroundColor: a[14],
                    gender: a[0],
                    hatColor: b.convert(a[14], "hat"),
                    faceColor: b.convert(a[8], "face"),
                    face: 1,
                    eyebrows: a[5],
                    eyebrowsColor: b.convert(a[2], "eyebrows"),
                    eyes: a[3],
                    eyeColor: b.convert(a[4], "eyes"),
                    nose: a[6],
                    noseColor: b.convert(a[8], "nose"),
                    mouth: a[7],
                    mouthColor: b.convert(a[8], "mouth"),
                    clothes: a[9],
                    clothesColor: b.convert(a[10], "clothes"),
                    glasses: a[11],
                    glassesColor: b.convert(a[12], "glasses"),
                    hair: a[1],
                    hairColor: b.convert(a[2], "hair"),
                    hat: a[13]
                }
                f(c)
                return c
            }

            function f(b) {
                for (var a in b) {
                    if (!b[a]) {
                        c.error("Missing value for " + a + " in avatar setting")
                    }
                }
            }

            function g(d, b) {
                var e = b.gender
                if (!d) {
                    c.error("No base url defined")
                    return
                }
                return {
                    backGroundUrl: d + "bg-" + b.background + ".png",
                    hatBackUrl: a(d, e, "hatback", b.hat, b.hatColor),
                    faceUrl: a(d, e, "face", b.face, b.faceColor),
                    eyeBrowsUrl: a(d, e, "eyebrows", b.eyebrows, b.eyebrowsColor),
                    eyesUrl: a(d, e, "eyes", b.eyes, b.eyeColor),
                    noseUrl: a(d, e, "nose", b.nose, b.noseColor),
                    mouthUrl: a(d, e, "mouth", b.mouth, b.mouthColor),
                    clothesUrl: a(d, e, "cloth", b.clothes, b.clothesColor),
                    glassesUrl: a(d, e, "glasses", b.glasses, b.glassesColor),
                    hairUrl: a(d, e, "hair", b.hair, b.hairColor),
                    hatUrl: a(d, e, "hat", b.hat, b.hatColor)
                }
            }

            function a(d, e, a, b, f) {
                if (b === "0" || !b) {
                    return ""
                }
                var c = d + e + "-" + a + "-" + b + "-" + f + ".png"
                if (a === "face") {
                    c = d + e + "-" + a + "-" + f + ".png"
                }
                return c
            }
        }

        faceSettingParser.$inject = ["$log", "colorHexToIntConverter"]
        module.exports = faceSettingParser
    }, {}],
    27: [function (require, module, exports) {
        "use strict"
        require("37")
    }, {37: 37}],
    28: [function (require, module, exports) {
        "use strict"
        function ExpressionEvaluator(a, b, c) {
            "use strict"
            function d(a, j) {
                if (!a) {
                    return 0
                }
                var d
                var k = {Math: c.Math}
                for (d in j) {
                    if (j.hasOwnProperty(d)) {
                        var l = d.slice(2, d.length - 1)
                        k[l] = j[d]
                    }
                }
                var h = a.match(/\{\@[^\{\}]+\}/g)
                if (h !== null && h.length > 0) {
                    for (var i = 0; i < h.length; ++i) {
                        d = h[i].slice(2, h[i].length - 1)
                        if (typeof k[d] === "undefined") {
                            throw new Error("Parameter not found: " + d)
                        }
                        a = a.replace(h[i], d)
                    }
                }
                try {
                    b.debug("expression: " + a + ":: parsedParams: " + j)
                    var m = a.indexOf(".") >= 0 ? f(a) : 2
                    return g(e(a, k), m)
                } catch (b) {
                    throw new TypeError("Unable to evaluate `" + a + "` Error: " + b)
                }
            }

            function e(b, c) {
                return a(b)(c || {})
            }

            function f(e) {
                var a = e.match(/\d*\.\d+/g)
                var b = 0
                if (a && a.length > 0) {
                    for (var c = 0; c < a.length; ++c) {
                        var d = a[c].split(".")
                        b = Math.max(b, d[1].length)
                    }
                }
                return b
            }

            function g(d, a) {
                a = a || 0
                var b = Math.pow(10, a)
                var c = Math.round(d * b) / b
                return c
            }

            return {evaluate: d}
        }

        ExpressionEvaluator.$inject = ["$parse", "$log", "$window"]
        module.exports = ExpressionEvaluator
    }, {}],
    29: [function (require, module, exports) {
        "use strict"
        function RandomNumberGeneratorFn(b) {
            "use strict"
            function a() {
            }

            a.A = 25214903917
            a.C = 11
            a.RANGE = 1 << 49
            a.r = 1
            a.setSeed = function (c) {
                if (isNaN(c)) {
                    throw new Error("seed [" + c + "] not valid")
                }
                var d = parseInt(c)
                a.r = d
                b.debug("seed: " + c)
                return true
            }
            a.random = function () {
                a.r = (a.A * a.r + a.C) % a.RANGE
                return a.r >> 3
            }
            a.integer = function (b, d) {
                var c = parseInt(b) + parseInt(a.random() % (d - b + 1))
                return c
            }
            a.float = function (f, g, d) {
                if (!d) {
                    d = 2
                }
                var c = 10 * d
                var h = a.integer(f * c, g * c)
                var e = h / c
                b.debug("min: " + f + ":: max: " + g + ":: return: " + e)
                return e
            }
            a.randomNumber = function () {
                return a.random() / (a.RANGE >> 3)
            }
            return a
        }

        RandomNumberGeneratorFn.$inject = ["$log"]
        module.exports = RandomNumberGeneratorFn
    }, {}],
    30: [function (require, module, exports) {
        "use strict"
        function questionViewer(a) {
            "use strict"
            return {
                scope: {question: "@"}, link: link, controller: function b(c) {
                    c.raw = new a
                }, restrict: "EA", template: require("36")
            }
        }

        questionViewer.$inject = ["RawQuestion"]
        function link(a, d, b) {
            a.questionText = ""
            a.answerText = ""
            a.equationText = ""
            b.$observe("question", function (b) {
                a.raw.parse(b.rawValue)
                if (b) {
                    c()
                }
            })
            function c() {
                a.question = a.raw.generateQuestion()
                a.questionText = a.question.questionText
                a.answerText = a.question.answerText
                a.equationText = a.question.rawQuestionString
            }
        }

        module.exports = questionViewer
    }, {36: 36}],
    31: [function (require, module, exports) {
        "use strict"
        function ChoiceFn(d, b, c) {
            "use strict"
            function a() {
            }

            a.prototype.getChoices = function () {
                return this.choices
            }
            a.prototype.parse = function (d) {
                this.rawValue = d
                var a = d.split(":")
                if (a.length !== 2) {
                    throw new TypeError("Invalid Choice expression: " + d + "; Missing ':'")
                }
                this.keyString = a[0].trim()
                var b = a[1]
                b = b.trim()
                b = b.substring(1, b.length - 1)
                a = b.split(",")
                if (a.length > 1) {
                    throw new TypeError("Invalid Choice expression: " + d + "; parsing a Range Expression")
                }
                a = b.split("|")
                this.choices = []
                var e = this.rawValue.match(/[^{][a-z]+[^}]/gi)
                if (e !== null && e.length > 0) {
                    this.type = "TEXT"
                } else {
                    this.type = "EXPRESSION"
                }
                for (var c = 0; c < a.length; c++) {
                    if (this.type === "TEXT") {
                        this.choices.push(a[c])
                    } else {
                        this.choices.push(a[c])
                    }
                }
            }
            a.prototype.getValue = function (e) {
                var a
                var d
                if (this.type === "TEXT") {
                    a = this.choices[b.integer(0, this.choices.length - 1)]
                } else {
                    d = this.choices[b.integer(0, this.choices.length - 1)]
                    a = c.evaluate(d, e)
                }
                return a
            }
            return a
        }

        ChoiceFn.$inject = ["$log", "RandomNumberGenerator", "ExpressionEvaluator"]
        module.exports = ChoiceFn
    }, {}],
    32: [function (require, module, exports) {
        "use strict"
        function RangeFn(d, b, c) {
            "use strict"
            function a() {
            }

            a.prototype.getMin = function () {
                return this.min
            }
            a.prototype.getMax = function () {
                return this.max
            }
            a.prototype.getAll = function () {
                var f = []
                var c = 1
                var d = this.min.indexOf(".")
                var e = this.max.indexOf(".")
                var a = 0
                if (d >= 0 || e >= 0) {
                    a = d > e ? d : e
                    a++
                    c = c / (10 * a)
                }
                for (var b = this.min; b <= this.max; b = Number(b) + Number(c)) {
                    f.push(Number(b).toFixed(a))
                }
                return f
            }
            a.prototype.parse = function (c) {
                this.rawValue = c
                var a = c.split(":")
                if (a.length !== 2) {
                    return false
                }
                this.keyString = a[0].trim()
                var b = a[1]
                b = b.trim()
                b = b.substring(1, b.length - 1)
                a = b.split(",")
                this.choices = []
                this.min = a[0].toString().trim()
                this.max = a[1].toString().trim()
            }
            a.prototype.getValue = function (i) {
                var e = c.evaluate(this.min, i)
                var f = c.evaluate(this.max, i)
                if (this.min.indexOf(".") >= 0 || this.max.indexOf(".") >= 0) {
                    var g, h
                    var a = this.min.length
                    var d = this.min.indexOf(".")
                    g = a - d - 1
                    a = this.max.length
                    d = this.max.indexOf(".")
                    h = a - d - 1
                    return b.float(e, f, g > h ? g : h)
                } else {
                    return b.integer(e, f)
                }
            }
            return a
        }

        RangeFn.$inject = ["$log", "RandomNumberGenerator", "ExpressionEvaluator"]
        module.exports = RangeFn
    }, {}],
    33: [function (require, module, exports) {
        "use strict"
        function RawQuestionFn(b, g, c, d, e) {
            "use strict"
            function a() {
                this.questionText = ""
                this.parameters = {}
                this.variableArr = []
                this.answerFormula = ""
                this.rawQuestionString = ""
                this.rawRange = ""
                this.rawAnswer = ""
                this.rawValue = ""
            }

            a.prototype.parse = function (d) {
                this.rawValue = d
                var b = this.rawValue.toString().split("||")
                if (b.length !== 3) {
                    return false
                }
                this.rawQuestionString = b[0]
                this.rawRange = b[1]
                this.rawAnswer = b[2]
                this.questionText = a.setUpQuestionText(this.rawQuestionString)
                var c = a.setUpParameters(this.rawRange)
                this.parameters = c.parameters
                this.variableArr = c.variableArr
                this.answerFormula = a.setUpAnswerFormula(this.rawAnswer)
            }
            a.setUpParameters = function (i) {
                var c = {}
                var h = i.toString().split(";")
                var b = ""
                var f = []
                var a
                for (var g = 0; g < h.length; g++) {
                    b = h[g]
                    if (b.indexOf(",") >= 0) {
                        a = new e
                        a.parse(b)
                        c[a.keyString] = a
                        f.push(a)
                    } else {
                        a = new d
                        a.parse(b)
                        c[a.keyString] = a
                        f.push(a)
                    }
                }
                return {parameters: c, variableArr: f}
            }
            a.setUpAnswerFormula = function (b) {
                var a = b
                a = a.trim()
                a = a.replace(/(\t|\n|\r)+/, "")
                return a
            }
            a.setUpQuestionText = function (c) {
                var a = c
                if (a === null) {
                    b.error("Error: " + c)
                }
                a = a.trim()
                a = a.replace(/(\t|\n|\r)+/, "")
                return a
            }
            a.prototype.generateQuestion = function a() {
                var h = {}
                var j
                var n
                var e
                var g = {}
                var q = this.questionText
                var i
                try {
                    i = this.questionText.match(/{@\d*}|{@\w*}/gi) || []
                } catch (a) {
                    b.error("error : " + this.questionText)
                }
                var k = ""
                var d = ""
                var p = ""
                var m
                var l = ""
                j = this.questionText
                for (e = 0; e < this.variableArr.length; e++) {
                    m = this.variableArr[e]
                    g[m.keyString] = m.getValue(g)
                    l += m.keyString + "=" + g[m.keyString] + " "
                }
                for (e = 0; e < i.length; e++) {
                    k = i[e]
                    d = k.replace(/}/gi, "}")
                    n = new RegExp(d, "ig")
                    j = j.replace(n, g[k])
                }
                i = j.match(/\[.*?\]/gi) || []
                var o = ""
                if (i !== null) {
                    for (e = 0; e < i.length; e++) {
                        k = i[e]
                        d = k.replace(/\)/gi, "\\)")
                        d = d.replace(/\(/gi, "\\(")
                        d = d.replace(/\+/gi, "\\+")
                        d = d.replace(/\-/gi, "\\-")
                        d = d.replace(/\//gi, "\\/")
                        d = d.replace(/\*/gi, "\\*")
                        d = d.replace(/\^/gi, "\\^")
                        d = d.replace(/\./gi, "\\.")
                        d = d.replace(/\[/gi, "\\[")
                        d = d.replace(/\]/gi, "\\]")
                        n = new RegExp(d, "ig")
                        try {
                            o = c.evaluate(k, g)
                        } catch (a) {
                            b.error("Error evaluating Question\n Question: " + this.rawQuestionString + " \n Answer: " + this.rawAnswer)
                        }
                        j = j.replace(n, o)
                    }
                }
                try {
                    h.questionText = j
                    b.debug(g)
                    h.answer = c.evaluate(this.answerFormula, g)
                    l += h.answer + " *****"
                    l += h.questionText + " %%  "
                    l += q
                    p = null
                } catch (a) {
                    b.error("Error evaluating answer\n Question: " + this.rawQuestionString + " \n Answer: " + this.rawAnswer)
                }
                h.questionText = f(h.questionText)
                return h
            }
            function f(b) {
                var a = b.replace(/\+\s*\-/g, "- ")
                a = a.replace(/\-\s*\-/g, "+ ")
                a = a.replace(/\b1([a-zA-Z])/gi, "$1")
                return a
            }

            return a
        }

        RawQuestionFn.$inject = ["$log", "RandomNumberGenerator", "ExpressionEvaluator", "Choice", "Range"]
        module.exports = RawQuestionFn
    }, {}],
    34: [function (require, module, exports) {
        "use strict"
        function QuestionLevelFn(b) {
            "use strict"
            this.levelId = 1
            function a() {
                this.levelItems = []
            }

            a.prototype.addQuestionLevelItem = function (a) {
                this.levelItems.push(a)
            }
            a.prototype.getLevelItems = function () {
                return this.levelItems
            }
            a.prototype.getRandomQuestion = function () {
                var a = this.levelItems.length - 1
                return this.levelItems[b.integer(0, a)].getRandomQuestion()
            }
            a.prototype.getLevelItem = function () {
                var a = this.levelItems.length - 1
                return this.levelItems[b.integer(0, a)]
            }
            return a
        }

        QuestionLevelFn.$inject = ["RandomNumberGenerator"]
        module.exports = QuestionLevelFn
    }, {}],
    35: [function (require, module, exports) {
        "use strict"
        function QuestionLevelItemFn(d, b, c) {
            "use strict"
            function a() {
                this.questions = []
            }

            this.questions = []
            this.contentName = ""
            a.prototype.addRawQuestion = function (a) {
                this.questions.push(a)
            }
            a.prototype.addQuestion = function (c) {
                var a = new b
                a.parse(c)
                this.questions.push(a)
            }
            a.prototype.getRandomQuestion = function () {
                var a = this.questions.length - 1
                return this.questions[c.integer(0, a)]
            }
            return a
        }

        QuestionLevelItemFn.$inject = ["$log", "RawQuestion", "RandomNumberGenerator"]
        module.exports = QuestionLevelItemFn
    }, {}],
    36: [function (require, module, exports) {
        module.exports = "<div>\r\n    {{equationText}}\r\n</div>\r\n<div>\r\n    {{questionText}} with the Answer of {{answerText}}\r\n</div>\r\n\r\n"
    }, {}],
    37: [function (require, module, exports) {
        "use strict"
        angular.module("question.generator", []).factory("RandomNumberGenerator", require("29")).factory("ExpressionEvaluator", require("28")).factory("Range", require("32")).factory("QuestionLevel", require("34")).factory("questionLoaderService", require("38")).factory("QuestionLevelItem", require("35")).factory("RawQuestion", require("33")).factory("Choice", require("31")).directive("questionViewer", require("30"))
    }, {28: 28, 29: 29, 30: 30, 31: 31, 32: 32, 33: 33, 34: 34, 35: 35, 38: 38}],
    38: [function (require, module, exports) {
        "use strict"
        function questionLoader(k, g, a, i, j, h) {
            "use strict"
            var b = {}
            var c = []
            var f = function a(q) {
                var k = q.levels
                var l
                var d
                var e
                for (var b = 0; b < k.length; b++) {
                    l = k[b]
                    d = new i
                    d.levelId = l.levelId
                    var m = l.levelItems
                    for (var g = 0; g < m.length; g++) {
                        var o = m[g]
                        e = new j
                        e.contentName = o.contentName
                        var p = o.questions
                        for (var f = 0; f < p.length; f++) {
                            var n = new h
                            n.parse(p[f])
                            e.addRawQuestion(n)
                        }
                        d.addQuestionLevelItem(e)
                    }
                    c.push(d)
                }
                return c
            }
            var d = function c(d) {
                if (b[d]) {
                    return a.when(b[d])
                }
                var e = a.defer()
                d = d || ""
                if (d !== "") {
                    g.get(d).success(function (a) {
                        b[d] = f(a)
                        e.resolve(b[d])
                    }).error(function () {
                        e.reject("Failed to load level descriptor")
                    })
                } else {
                    return a.reject("Level Descriptor not defined")
                }
                return e.promise
            }
            var e = function b(g, e) {
                var f = a.defer()
                e = e || ""
                if (e !== "") {
                    d(e).then(function (a) {
                        c = a
                        f.resolve(c[g - 1])
                    })["catch"](function a(b) {
                        f.reject("Failed to load level descriptor", b)
                    })
                } else {
                    return a.reject("Level Descriptor not defined")
                }
                return f.promise
            }
            return {loadLevelDescriptor: d, levelDescription: e}
        }

        questionLoader.$inject = ["$log", "$http", "$q", "QuestionLevel", "QuestionLevelItem", "RawQuestion"]
        module.exports = questionLoader
    }, {}],
    39: [function (require, module, exports) {
        "use strict"
        angular.module("livemathletics", ["ui.router", "ngAnimate", "ngTouch", "ngAudio", "angularMoment", "face-container", "livemathletics.main", "livemathletics.authentication", "livemathletics.common", "livemathletics.splashscreen", "question.generator", "livemathletics.whosonline", "livemathletics.gameroom", "livemathletics.results", "livemathletics.report", "livemathletics.waitingRoom", "livemathletics.searchroom", "livemathletics.leveldescriptor", "livemaths.log", "ppp.eventPanel", "livemathletics.navigation"]).config(require("40")).run(require("41"))
    }, {40: 40, 41: 41}],
    40: [function (require, module, exports) {
        "use strict"
        function liveMathsConfig(h, k, j, i) {
            "use strict"
            j.interceptors.push("sessionInterceptor")
            i.decorator("$log", c)
            k.otherwise("/login")
            h.state("splashscreen", {
                url: "/splashscreen",
                resolve: {audio: b, headerData: g},
                views: {
                    "": {template: require("164"), controller: "SplashScreenController"},
                    "mainPanel@splashscreen": {template: require("160")}
                }
            }).state("splashscreen.waitingroom", {
                url: "/waitingroom",
                params: {students: {}, levelId: {}, isToInvite: {}},
                views: {"mainPanel@splashscreen": {template: require("182"), controller: "waitingRoomController"}}
            }).state("splashscreen.leveldescriptor", {
                url: "/leveldescriptor/:level",
                params: {level: {}},
                views: {"mainPanel@splashscreen": {controller: "levelDescriptorController", template: require("102")}},
                resolve: {questionLevelList: a}
            }).state("splashscreen.report", {
                url: "/report",
                resolve: {reportData: e},
                views: {"mainPanel@splashscreen": {controller: "LiveMathReportController", template: require("122")}}
            }).state("searchroom", {
                url: "/searchroom",
                params: {matchType: {}, level: {}, rank: {}, classId: {}},
                controller: "SearchRoomController",
                resolve: {mapData: f},
                template: require("141")
            }).state("gameroom", {
                url: "/gameroom",
                params: {level: {}, isComputerPlay: {}, matchType: {}, matchResponse: {}},
                controller: "GameRoomController",
                resolve: {gameUserInfo: d, questionLevelList: a},
                template: require("92")
            }).state("gameresult", {
                url: "/gameresult",
                params: {players: {}, results: {}, resultData: {}, level: {}, playType: {}, onlineUsers: {}},
                controller: "GameResultController",
                controllerAs: "vm",
                resolve: {questionLevelList: a},
                template: require("130")
            }).state("login", {
                params: {endPoint: {}},
                url: "/login?username&password&env&userToken&isMobile&classId&lang&debug",
                template: require("45"),
                controller: "LoginController"
            }).state("autologin", {
                params: {endPoint: {}},
                url: "/autologin?username&password&env&userToken&isMobile&classId&lang&debug",
                template: require("44"),
                controller: "LoginController"
            })
            function f(a) {
                return a.init()["catch"](function (a) {
                    throw a
                })
            }

            f.$inject = ["mapDataFactory"]
            function b(b, c) {
                var a = b.getAudioFiles()
                return c.init(a)
            }

            b.$inject = ["configDataFactory", "audioManager"]
            function g(a) {
                return a.init()["catch"](function (a) {
                    throw a
                })
            }

            g.$inject = ["liveMathsProfileFactory"]
            function e(a) {
                return a.getReportData()["catch"](function (a) {
                    throw a
                })
            }

            e.$inject = ["liveMathsProfileFactory"]
            function d(a) {
                return a.getGameRoomUserData()["catch"](function (a) {
                    throw a
                })
            }

            d.$inject = ["liveMathsProfileFactory"]
            function a(b, c, d) {
                var a = c.getConfigValue("LevelDescriptorJsonPath")
                d.debug(a)
                return b.loadLevelDescriptor(a)["catch"](function (a) {
                    throw a
                })
            }

            a.$inject = ["questionLoaderService", "configDataFactory", "$log"]
            function c(b, a) {
                var c = {
                    error: function c() {
                        if (a["switch"].error) {
                            b.error.apply(null, arguments)
                        }
                        a.error.apply(null, arguments)
                    }, log: function c() {
                        if (a["switch"].log) {
                            b.log.apply(null, arguments)
                        }
                        a.log.apply(null, arguments)
                    }, info: function c() {
                        if (a["switch"].info) {
                            b.info.apply(null, arguments)
                        }
                        a.info.apply(null, arguments)
                    }, warn: function c() {
                        if (a["switch"].warn) {
                            b.warn.apply(null, arguments)
                        }
                        a.warn.apply(null, arguments)
                    }, debug: function c() {
                        if (a["switch"].debug) {
                            b.debug.apply(null, arguments)
                        }
                        a.debug.apply(null, arguments)
                    }
                }
                return c
            }

            c.$inject = ["$delegate", "Log"]
        }

        liveMathsConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$httpProvider", "$provide"]
        module.exports = liveMathsConfig
    }, {102: 102, 122: 122, 130: 130, 141: 141, 160: 160, 164: 164, 182: 182, 44: 44, 45: 45, 92: 92}],
    41: [function (require, module, exports) {
        "use strict"
        function liveMathsRun(b, a, g, h, c, d, e) {
            b.$on("$stateChangeError", f)
            function f(h, f, i, g, j, b) {
                if (b !== "Your Session has been taken. Please sign in again.") {
                    switch (f.name) {
                        case"splashscreen":
                            if (b === "config not ready") {
                                a.go("login")
                            } else {
                                d.exit()
                            }
                            break
                        default:
                            e.allowSwitch = true
                            a.go("splashscreen")
                            break
                    }
                    c.error(b, f, g)
                }
            }
        }

        liveMathsRun.$inject = ["$rootScope", "$state", "$window", "$stateParams", "$log", "navigationService", "stateHandler"]
        module.exports = liveMathsRun
    }, {}],
    42: [function (require, module, exports) {
        "use strict"
        angular.module("livemathletics.authentication", ["livemathletics.common", "livemathletics.navigation"]).controller("LoginController", require("43")).factory("loginParameter", require("46"))
    }, {43: 43, 46: 46}],
    43: [function (require, module, exports) {
        "use strict"
        function LoginController(a, h, t, b, d, j, c, e) {
            "use strict"
            a.manualLogin = false
            a.onLoginSuccess = s
            a.onConfigSuccess = g
            a.onLoginFailed = l
            a.loginControl = {}
            a.environmentList = ["local", "demo", "qa", "live"]
            a.autoLogin = {}
            function u() {
                c.call("exit", null, "from login")
            }

            function k() {
                i()
                j.init().then(function (c) {
                    if (c.lang) {
                        b.setConfigValue("lang", c.lang)
                    }
                    b.setCurrentClass(c.classId)
                    a.debug = c.debug
                    a.isMobile = c.isMobile
                    if (c.nextState) {
                        h.go(c.nextState)
                    } else {
                        if (c.userToken) {
                            b.setConfigValue("userToken", c.userToken)
                            e.setup(c.env || "live", c.debug).then(g)
                        } else if (c.username && c.password && c.env) {
                            a.selectedEnvironment = c.env
                            a.loginControl.autoLogin(c.username, c.password, c.env)
                        }
                    }
                })
            }

            function i() {
                c.addListener("userToken", q)
                c.addListener("lang", p)
                c.addListener("classId", r)
                c.addListener("prepare", o)
                c.addListener("back", m)
                c.addListener("setupMobileConfiguration", n)
            }

            function m() {
                t.history.back()
            }

            function n(c) {
                e.setup(c, a.debug).then(function (d) {
                    for (var a = 0; a < d.Configurations.length; a++) {
                        var c = d.Configurations[a]
                        switch (c.Key) {
                            case"Shared.LiveMathsResultsServicePathUrl":
                                b.setConfigValue("liveEngineResultUri", c.Value)
                                break
                        }
                    }
                    f()
                })
            }

            function o(a) {
                b.initConfig(a)
            }

            function p(a) {
                b.setConfigValue("lang", a)
            }

            function q(a) {
                b.setConfigValue("userToken", a)
                f()
            }

            function r(a) {
            }

            function s(d) {
                var c = b.initConfig(d)
                if (c === false) {
                    a.errorMessage = "missing data"
                } else {
                    e.setup(a.selectedEnvironment || "live", a.debug).then(g)
                }
            }

            function g(c) {
                if (!c) {
                    a.errorMessage = "unable to build service"
                }
                var d = b.initConfig(c)
                if (d === false) {
                    a.errorMessage = "missing data center"
                } else {
                    b.prepareService()
                    f()
                }
            }

            function f() {
                d.setDevice(a.isMobile)
                b.setConfigValue("isMobileApp", d.isMobileApp() || false)
                if (d.showDeviceBackButtonStyle() === true) {
                    b.setConfigValue("mobileHeaderBackStyle", "mobileBackBtnStyle")
                }
                if (d.useGameRoomKeypad() === true) {
                    b.setConfigValue("isKeypadOn", true)
                }
                if (d.skipBackButtonDelay() !== true) {
                    b.setConfigValue("renderingWaitPeriod", 2e3)
                }
                if (b.getConfigValue("liveEngineResultUri") && b.getConfigValue("userToken")) {
                    h.go("splashscreen")
                }
            }

            function l(b) {
                a.errorMessage = b
            }

            k()
        }

        LoginController.$inject = ["$scope", "$state", "$window", "configDataFactory", "mobileDetector", "loginParameter", "bridge", "configService"]
        module.exports = LoginController
    }, {}],
    44: [function (require, module, exports) {
        module.exports = '<div class="login-container">\n\n\n\n</div>\n\n'
    }, {}],
    45: [function (require, module, exports) {
        module.exports = '<div class="login-container" >\n\n    <div class="loginWindow" ng-show="manualLogin">\n        <select class="EnvironmentSelector" ng-model="selectedEnvironment"\n                ng-options="env for env in environmentList">\n        </select>\n\n        <input type="checkbox" aria-label="isMobileDevice" ng-model="isMobile" ng-true-value="true" ng-false-value="false">\n        Login as Mobile {{isMobile}}?\n        <div>\n            <div class="">\n                <student-login-box environment="{{selectedEnvironment}}" on-login-success="onLoginSuccess"\n                                   on-login-failed="onLoginFailed" login-control="loginControl"></student-login-box>\n\n            </div>\n        </div>\n        <span>\n            <input ng-model="serviceFaultOpNames" style="width: 190px;" class="font-14">\n            <select class="EnvironmentSelector" ng-model="faultOption"\n                    ng-options="item for item in faultOptionList">\n            </select>\n        </span>\n    </div>\n\n\n</div>\n\n'
    }, {}],
    46: [function (require, module, exports) {
        "use strict"
        function loginParameter(a, d, e, f, g, b) {
            "use strict"
            var c = {init: h}
            return c
            function h() {
                var h = a.userToken
                var c = Number(a.classId) || 1
                var k = a.lang || null
                var n = a.endPoint
                var l = a.username
                var m = a.password
                var j = a.env
                var o = a.isMobile || "false"
                var i = a.debug || "false"
                i = i.toLowerCase()
                if (h) {
                    b.set("liveMaths.userToken", h)
                    b.set("liveMaths.env", j)
                    b.set("liveMaths.classId", c)
                    b.set("liveMaths.lang", k)
                } else {
                    h = b.get("liveMaths.userToken")
                    c = b.get("liveMaths.classId") || 1
                    j = b.get("liveMaths.env")
                }
                if (i === "true") {
                    g.setupSwitch("wiled")
                }
                var p
                d.debug("classId: ", c)
                if (f.isReady()) {
                    p = "splashscreen"
                }
                return e.when({
                    userToken: h,
                    classId: c,
                    lang: k,
                    liveMathEndPoint: n,
                    username: l,
                    password: m,
                    nextState: p,
                    isMobile: o === "true",
                    env: j,
                    debug: i === "true"
                })
            }
        }

        loginParameter.$inject = ["$stateParams", "$log", "$q", "configDataFactory", "Log", "liveMathsCache"]
        module.exports = loginParameter
    }, {}],
    47: [function (require, module, exports) {
        "use strict"
        angular.module("livemathletics.common", ["config"]).directive("animateSwitcher", require("49")).directive("toggle", require("62")).directive("scalableStage", require("59")).directive("stopBounce", require("61")).directive("imageSizeReader", require("55")).directive("getElement", require("54")).directive("dragEnable", require("51")).directive("autoFocus", require("50")).directive("quickTouch", require("57")).directive("numberOnly", require("56")).directive("rotate", require("58")).directive("sessionMessage", require("60")).factory("mockServiceError", require("71")).factory("audioManager", require("67")).factory("sessionInterceptor", require("72")).factory("sessionManager", require("73")).factory("delayFactory", require("69")).factory("faceGenerator", require("70")).factory("observerPatternFactory", require("66")).factory("configDataFactory", require("68")).factory("rankEnum", require("63")).factory("userGameStatusEnum", require("64")).factory("cloneFactory", require("65")).factory("stateHandler", require("74")).directive("egg", require("52")).directive("eggShaker", require("53"))
    }, {
        49: 49,
        50: 50,
        51: 51,
        52: 52,
        53: 53,
        54: 54,
        55: 55,
        56: 56,
        57: 57,
        58: 58,
        59: 59,
        60: 60,
        61: 61,
        62: 62,
        63: 63,
        64: 64,
        65: 65,
        66: 66,
        67: 67,
        68: 68,
        69: 69,
        70: 70,
        71: 71,
        72: 72,
        73: 73,
        74: 74
    }],
    48: [function (require, module, exports) {
        module.exports = {
            audioFileList: [{name: "click", file: "click.mp3"}, {
                name: "wrong",
                file: "wrong.mp3"
            }, {name: "strikeOut", file: "strikeOut.mp3"}, {name: "woosh", file: "woosh.mp3"}]
        }
    }, {}],
    49: [function (require, module, exports) {
        "use strict"
        function animateSwitcher(a) {
            "use strict"
            return {scope: {animateState: "=", defaultClass: "=", sizeLoaded: "="}, restrict: "A", link: b}
            function b(d, b, k) {
                a.debug("animateSwitcherLink")
                var c = null
                d.$watch("animateState", h)
                j()
                function j() {
                    i()
                    d.sizeLoaded($(b).width(), $(b).height())
                    a.debug("initialize: ", d.defaultClass, d.initialClass, $(b).width(), $(b).height())
                }

                function h(a) {
                    g(d.animateState)
                }

                function i() {
                    var a = e(d.defaultClass)
                    if (a !== null) {
                        b.addClass(a)
                    }
                }

                function f(a) {
                    return b.hasClass(a)
                }

                function g(g) {
                    var d = e(g)
                    if (d !== c) {
                        a.debug("switchState", g, d, c)
                        if (f(c)) {
                            b.removeClass(c)
                        }
                        if (d !== null) {
                            if (!f(d)) {
                                b.addClass(d)
                            }
                        }
                        c = d
                    }
                }

                function e(a) {
                    if (a === undefined || typeof a !== "string" || a === null) {
                        return null
                    }
                    a = a.trim()
                    if (a === "") {
                        return null
                    }
                    return a
                }
            }
        }

        animateSwitcher.$inject = ["$log"]
        module.exports = animateSwitcher
    }, {}],
    50: [function (require, module, exports) {
        "use strict"
        function autoFocus(a) {
            return {
                link: function b(e, c, d) {
                    d.$observe("autoFocus", function (b) {
                        if (Boolean(b)) {
                            a(function () {
                                c[0].focus()
                            })
                        }
                    })
                }
            }
        }

        autoFocus.$inject = ["$timeout"]
        module.exports = autoFocus
    }, {}],
    51: [function (require, module, exports) {
        "use strict"
        function dragEnable(e, c, a, b) {
            "use strict"
            return {restrict: "A", link: d}
            function d(g, d, f) {
                g.value = f.dragEnable
                var e
                f.$observe("dragBoundary", F)
                var r, p = false, i, h, j, k, o, s
                var H = "ontouchstart" in b || b.DocumentTouch && a instanceof b.DocumentTouch
                var B = "touchstart mousedown"
                var t = "touchmove mousemove"
                var q = "touchend mouseup"
                var w
                var x = g.$id
                var m = null
                var l = null
                var n = false
                var E = null
                var y = c(f.dragSuccess) || null
                var u = angular.isDefined(f.allowTransform) ? g.$eval(f.allowTransform) : true
                var G = c(f.ngDragData)
                var A = angular.noop
                R()
                function R() {
                    d.attr("draggable", "false")
                    var a = d.find("[ng-drag-handle]")
                    if (a.length) {
                        w = a
                    }
                    I(true)
                }

                function v(a) {
                    return angular.isDefined(a.touches) ? a.touches[0] : a
                }

                var C
                var D

                function I(a) {
                    if (!a) {
                        return
                    }
                    g.$on("$destroy", Q)
                    C = g.$watch(f.dragEnable, O)
                    D = g.$watch(f.ngCenterAnchor, N)
                    if (w) {
                        w.on(B, L)
                    } else {
                        d.on(B, L)
                    }
                    if (!H && d[0].nodeName.toLowerCase() === "img") {
                        d.on("mousedown", function () {
                            return false
                        })
                    }
                }

                function Q(a) {
                    I(false)
                    if (C) {
                        C()
                    }
                    if (D) {
                        D()
                    }
                }

                function O(a, b) {
                    n = a
                }

                function N(a, b) {
                    if (angular.isDefined(a)) {
                        p = a || "true"
                    }
                }

                function M(a) {
                    return angular.isDefined(angular.element(a.target).attr("ng-cancel-drag"))
                }

                function L(a) {
                    if (!n) {
                        return
                    }
                    if (M(a)) {
                        return
                    }
                    if (a.type === "mousedown" && a.button !== 0) {
                        return
                    }
                    F()
                    P(a)
                }

                function K() {
                    clearTimeout(E)
                    a.off(t, K)
                    a.off(q, K)
                }

                function P(c) {
                    if (!n) {
                        return
                    }
                    c.preventDefault()
                    r = d[0].getBoundingClientRect()
                    if (u) {
                        l = r
                    } else {
                        l = {left: document.body.scrollLeft, top: document.body.scrollTop}
                    }
                    d.centerX = d[0].offsetWidth / 2
                    d.centerY = d[0].offsetHeight / 2
                    i = v(c).pageX
                    h = v(c).pageY
                    o = i - r.left
                    s = h - r.top
                    if (p) {
                        j = i - d.centerX - b.pageXOffset
                        k = h - d.centerY - b.pageYOffset
                    } else {
                        j = i - o - b.pageXOffset
                        k = h - s - b.pageYOffset
                    }
                    a.on(t, z)
                    a.on(q, J)
                    A = g.$on("draggable:_triggerHandlerMove", function (b, a) {
                        z(a)
                    })
                }

                function z(a) {
                    if (!n) {
                        return
                    }
                    a.preventDefault()
                    if (!d.hasClass("dragging")) {
                        m = G(g)
                        d.addClass("dragging")
                        g.$emit("draggable:start", {
                            x: i,
                            y: h,
                            tx: j,
                            ty: k,
                            ox: o,
                            oy: s,
                            event: a,
                            element: d,
                            data: m
                        })
                    }
                    i = v(a).pageX
                    h = v(a).pageY
                    if (p) {
                        j = i - d.centerX - l.left
                        k = h - d.centerY - l.top
                    } else {
                        j = i - o - l.left
                        k = h - s - l.top
                    }
                    U(j, k)
                    g.$emit("draggable:move", {x: i, y: h, tx: j, ty: k, event: a, element: d, data: m, uid: x})
                }

                function J(b) {
                    if (!n) {
                        return
                    }
                    b.preventDefault()
                    g.$emit("draggable:end", {
                        x: i,
                        y: h,
                        tx: j,
                        ty: k,
                        event: b,
                        element: d,
                        data: m,
                        callback: S,
                        uid: x
                    })
                    d.removeClass("dragging")
                    d.parent().find(".drag-enter").removeClass("drag-enter")
                    T()
                    a.off(t, z)
                    a.off(q, J)
                    A()
                }

                function S(a) {
                    if (!y) {
                        return
                    }
                    g.$apply(function () {
                        y(g, {$data: m, $event: a})
                    })
                }

                function T() {
                    if (u) {
                        d.css({transform: "", "z-index": "", "-webkit-transform": "", "-ms-transform": ""})
                    } else {
                        d.css({position: "", top: "", left: ""})
                    }
                }

                function U(a, b) {
                    if (e === "vertical") {
                        b = 0
                    } else if (e === "horizontal") {
                        a = 0
                    } else {
                        if (a >= Number(e.right)) {
                            a = Number(e.right)
                        } else if (a <= Number(e.left)) {
                            a = Number(e.left)
                        }
                        if (b >= Number(e.bottom)) {
                            b = Number(e.bottom)
                        } else if (b <= Number(e.top)) {
                            b = Number(e.top)
                        }
                    }
                    if (u) {
                        d.css({
                            transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " + a + ", " + b + ", 0, 1)",
                            "-webkit-transform": "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " + a + ", " + b + ", 0, 1)",
                            "-ms-transform": "matrix(1, 0, 0, 1, " + a + ", " + b + ")"
                        })
                    } else {
                        d.css({left: a + "px", top: b + "px", position: "absolute"})
                    }
                }

                function F(d) {
                    if (f.dragBoundary === undefined || f.dragBoundary === null) {
                        e = undefined
                    } else if (typeof f.dragBoundary === "string") {
                        var b = f.dragBoundary.split(" ")
                        if (b.length === 1) {
                            e = f.dragBoundary
                        } else {
                            e = {}
                            var c = ["top", "right", "bottom", "left"]
                            for (var a = 0; a < b.length; a++) {
                                e[c[a]] = Number(b[a])
                            }
                        }
                    } else {
                        e = f.dragBoundary
                    }
                }
            }
        }

        dragEnable.$inject = ["$log", "$parse", "$document", "$window"]
        module.exports = dragEnable
    }, {}],
    52: [function (require, module, exports) {
        "use strict"
        function egg(a, b) {
            "use strict"
            return {
                restrict: "A", link: function b(f, c, g) {
                    c.on("click", function (b) {
                        if (b.altKey && b.shiftKey) {
                            a.debug(c.length)
                            a.info("easter egg found")
                            d(c)
                        }
                    })
                    function d(c) {
                        var b = c.find("img")
                        for (var a = 0; a < b.length; a++) {
                            e(b[a], 360)
                        }
                    }

                    function e(a, b) {
                        $(a).css({"-webkit-animation": "nudge 1s infinite", animation: "nudge 1s infinite"})
                    }
                }
            }
        }

        egg.$inject = ["$log", "$interval"]
        module.exports = egg
    }, {}],
    53: [function (require, module, exports) {
        "use strict"
        function eggShaker(a) {
            "use strict"
            return {
                restrict: "A", link: function b(e, c, f) {
                    c.on("click", function (b) {
                        if (b.altKey) {
                            a.debug(c.length)
                            a.info("easter egg found")
                            d(c)
                        }
                    })
                    function d(a) {
                        if (a.hasClass("shake")) {
                            a.removeClass("shake")
                            a.removeClass("shake-constant")
                        } else {
                            a.addClass("shake")
                            a.addClass("shake-constant")
                        }
                    }
                }
            }
        }

        eggShaker.$inject = ["$log"]
        module.exports = eggShaker
    }, {}],
    54: [function (require, module, exports) {
        "use strict"
        function getElement() {
            "use strict"
            return {scope: {getElement: "="}, link: a}
            function a(a, b, c) {
                a.getElement = b[0]
            }
        }

        getElement.$inject = []
        module.exports = getElement
    }, {}],
    55: [function (require, module, exports) {
        "use strict"
        function imageSizeReader() {
            "use strict"
            return {scope: {imageLoaded: "="}, link: a}
            function a(a, b, c) {
                b.on("load", function (b) {
                    a.imageLoaded(this.naturalWidth, this.naturalHeight)
                })
            }
        }

        imageSizeReader.$inject = []
        module.exports = imageSizeReader
    }, {}],
    56: [function (require, module, exports) {
        "use strict"
        function numberOnly() {
            return {
                require: "ngModel", link: function a(c, d, e, b) {
                    b.$parsers.push(function (c) {
                        var a = c ? c.replace(/[^\d.-]/g, "") : null
                        if (a != c) {
                            b.$setViewValue(a)
                            b.$render()
                        }
                        return a
                    })
                }
            }
        }

        numberOnly.$inject = []
        module.exports = numberOnly
    }, {}],
    57: [function (require, module, exports) {
        "use strict"
        function quickTouch(c, a) {
            return {link: b}
            function b(d, b, h) {
                var e = a.navigator.userAgent.toLowerCase()
                var f = e.indexOf("android") >= 0
                var g = !a.navigator.msPointerEnabled

                function c(a) {
                    a.stopImmediatePropagation()
                    a.stopPropagation()
                    a.preventDefault()
                    d.$apply(function () {
                        d.$eval(h.quickTouch)
                    })
                }

                if (g === false) {
                    b.on("MSPointerDown", c)
                    b.on("touchstart", c)
                    b.on("mousedown", c)
                } else {
                    b.on("touchstart", c)
                    if (f === false) {
                        b.on("mousedown", c)
                    }
                }
            }
        }

        quickTouch.$inject = ["$log", "$window"]
        module.exports = quickTouch
    }, {}],
    58: [function (require, module, exports) {
        "use strict"
        function rotateElem() {
            "use strict"
            return {
                restrict: "A", link: function a(e, b, c) {
                    function d(a) {
                        b.css({
                            transform: "rotate(" + a + "deg)",
                            "-o-transform": "rotate(" + a + "deg)",
                            "-ms-transform": "rotate(" + a + "deg)",
                            "-webkit-transform": "rotate(" + a + "deg)",
                            "-moz-transform": "rotate(" + a + "deg)"
                        })
                    }

                    c.$observe("rotate", function (a) {
                        if (a) {
                            d(a)
                        }
                    })
                }
            }
        }

        rotateElem.$inject = []
        module.exports = rotateElem
    }, {}],
    59: [function (require, module, exports) {
        "use strict"
        function scalableStage(a) {
            "use strict"
            return {
                restrict: "A", link: function a(f, e, g) {
                    var b = $(e)

                    function c() {
                        var g = b.height()
                        var c = b.width()
                        var h = $(window).height()
                        var e = $(window).width()
                        var a = e / c
                        var f = h / g
                        b.css({
                            "transform-origin": "0 0",
                            "-ms-transform-origin": "0 0",
                            "-webkit-transform-origin": "0 0",
                            "-moz-transform-origin": "0 0",
                            "-o-transform-origin": "0 0"
                        })
                        if (a > 0 && a <= f) {
                            d(a, e, c)
                        } else if (a > f) {
                            d(f, e, c)
                        }
                    }

                    function d(a, d, e) {
                        b.css({
                            transform: "scale(" + a + ")",
                            "-o-transform": "scale(" + a + ")",
                            "-ms-transform": "scale(" + a + ")",
                            "-webkit-transform": "scale(" + a + ")",
                            "-moz-transform": "scale(" + a + ")"
                        })
                        var c = d / 2 - a * e / 2
                        b.css("left", c)
                    }

                    $(window).bind("resize", function () {
                        c()
                    })
                    c()
                }
            }
        }

        scalableStage.$inject = ["$log"]
        module.exports = scalableStage
    }, {}],
    60: [function (require, module, exports) {
        "use strict"
        function sessionMessage(a) {
            "use strict"
            return {restrict: "A", template: c, link: b}
            function b(b, f, c) {
                c.$observe("sessionMessage", d)
                b.call = e
                function d(c) {
                    a.debug("loaded: ", c)
                    b.info = b.$eval(c)
                    a.debug("loaded: ", b.info)
                }

                function e(d) {
                    var c = b[d.callback]
                    a.debug("call back function ", c)
                    if (c) {
                        c()
                    }
                    b.info = undefined
                }
            }

            function c(a, b) {
                return require("75")
            }
        }

        sessionMessage.$inject = ["$log"]
        module.exports = sessionMessage
    }, {75: 75}],
    61: [function (require, module, exports) {
        "use strict"
        function stopBounce(b, a) {
            "use strict"
            return {restrict: "A", link: c}
            function c(k, m, l) {
                var d = false
                a.debug("stopBounce enable")
                $(window).bind("touchend", g)
                $(window).bind("touchstart", j)
                $(window).bind("touchmove", i)
                var e

                function g() {
                    e = undefined
                    d = false
                }

                function j(a) {
                    d = true
                    e = a.originalEvent.targetTouches[0].pageY
                }

                function i(a) {
                    if (d === false) {
                        return
                    }
                    if ($(a.target).hasClass("enable_touchmove") || f(a.target, "enable_touchmove") === true) {
                        if (f(a.target, "scrolling-container") === true) {
                            h(a)
                            return
                        }
                    } else {
                        c(a)
                    }
                }

                function h(b) {
                    var f = $(b.target).parents()
                    var a
                    for (var d = 0; d < f.length; d++) {
                        a = f[d]
                        if ($(a).hasClass("scrolling-container")) {
                            break
                        }
                    }
                    if (a.scrollHeight <= a.clientHeight) {
                        c(b)
                        return
                    }
                    var h = b.originalEvent.targetTouches[0]
                    var g = h.pageY - e
                    if (g > 0) {
                        if (a.scrollTop === 0) {
                            c(b)
                            return
                        }
                    } else if (g < 0) {
                        if (Math.round(a.scrollTop) + a.clientHeight >= a.scrollHeight) {
                            c(b)
                            return
                        }
                    }
                }

                function c(c) {
                    a.debug("disable IOS bouncing")
                    c.preventDefault()
                    c.stopImmediatePropagation()
                    c.stopPropagation()
                    b.scroll(0, 0)
                }

                function f(a, b) {
                    return $(a).parents().hasClass(b)
                }
            }
        }

        stopBounce.$inject = ["$window", "$log"]
        module.exports = stopBounce
    }, {}],
    62: [function (require, module, exports) {
        "use strict"
        function toggle() {
            "use strict"
            return {
                restrict: "A", link: function a(e, d, c) {
                    var b = $(d)
                    if (c.toggle === "tooltip") {
                        b.tooltip()
                    }
                    if (c.toggle === "popover") {
                        b.popover()
                    }
                }
            }
        }

        toggle.$inject = []
        module.exports = toggle
    }, {}],
    63: [function (require, module, exports) {
        "use strict"
        function rankEnum() {
            "use strict"
            var a = [{label: "Human Calculator", value: 4}, {label: "Almost Einstein", value: 3}, {
                label: "Speed Demon",
                value: 2
            }, {label: "Junior Giant", value: 1}, {label: "Raging Rookie", value: 0}]
            return {
                getRank: b,
                ALMOST_EINSTERN: 3,
                HUMAN_CALCULATOR: 4,
                JUNIOR_GIANT: 1,
                SPEED_DEMON: 2,
                RAGING_ROOKIE: 0
            }
            function b(c, d) {
                for (var b = 0; b < a.length; b++) {
                    if (a[b][c] === d) {
                        return a[b]
                    }
                }
            }
        }

        rankEnum.$inject = []
        module.exports = rankEnum
    }, {}],
    64: [function (require, module, exports) {
        "use strict"
        function userGameStatusEnum() {
            "use strict"
            var a = [{label: "Playing", value: 0}, {label: "Strike1", value: 1}, {
                label: "Strike2",
                value: 2
            }, {label: "Strike Out", value: 3}, {label: "Left Early", value: 4}, {
                label: "Finish",
                value: 5
            }, {label: "Unknown", value: 6}]
            return {
                getStatusValue: d,
                getStatusLabel: c,
                UNKNOW: 6,
                LEFT_FINISH: 5,
                LEFT_EARLY: 4,
                STRIKE_OUT: 3,
                STRIKE_2: 2,
                STRIKE_1: 1,
                PLAYING: 0
            }
            function b(c, d) {
                for (var b = 0; b < a.length; b++) {
                    if (a[b][c] === d) {
                        return a[b]
                    }
                }
            }

            function c(d) {
                var a = ""
                var c = b("value", d)
                a = c.label
                return a
            }

            function d(d) {
                var a = 6
                var c = b("label", d)
                a = c.value
                return a
            }
        }

        userGameStatusEnum.$inject = []
        module.exports = userGameStatusEnum
    }, {}],
    65: [function (require, module, exports) {
        "use strict"
        function cloneFactory() {
            var a = {}
            a.clone = b
            return a
            function b(a) {
                var c
                if (a === null || typeof a !== "object") {
                    return a
                }
                if (a instanceof Date) {
                    c = new Date
                    c.setTime(a.getTime())
                    return c
                }
                if (a instanceof Array) {
                    c = []
                    for (var d = 0, f = a.length; d < f; d++) {
                        c[d] = b(a[d])
                    }
                    return c
                }
                if (a instanceof Object) {
                    c = {}
                    for (var e in a) {
                        if (a.hasOwnProperty(e)) {
                            c[e] = b(a[e])
                        }
                    }
                    return c
                }
                throw new Error("Unable to copy obj! Its type isn't supported.")
            }
        }

        cloneFactory.$inject = []
        module.exports = cloneFactory
    }, {}],
    66: [function (require, module, exports) {
        "use strict"
        function observerPatternFactory() {
            var a = {}
            var b = {}
            var c = {}
            e()
            a.notifyObservers = a.notifyObservers || function () {
                    var c = this, a, d
                    a = [].slice.call(arguments)
                    d = a.splice(0, 1)[0] || ""
                    var e = b[d] || []
                    angular.forEach(e, function (b) {
                        b.handler.apply(c, a)
                    })
                    return
                }
            a.initEventScope = a.initEventScope || function (a, d) {
                    var b = c[a] = c[a] || []
                    b.push(d)
                }
            a.subscribe = a.subscribe || function (a, f) {
                    var i = this, e = b[a] = b[a] || new d
                    var g = e.contains(f)
                    if (g === -1) {
                        e.push({handler: f})
                    }
                    var h = c[a] = c[a] || []
                    angular.forEach(h, function (d) {
                        d.$on("$destroy", function (e) {
                            if (e.currentScope === d || e.currentScope === e.targetScope) {
                                delete b[a]
                                delete c[a]
                            }
                        })
                    })
                    return
                }
            a.unsubscribe = a.unsubscribe || function (a, f) {
                    var g = this
                    if (f === undefined) {
                        delete b[a]
                        return
                    }
                    var c = b[a] = b[a] || new d
                    var e = c.contains(f)
                    if (e > -1) {
                        c.splice(e, 1)
                    }
                    if (c.length === 0) {
                        delete b[a]
                    }
                    return
                }
            function e() {
                d.prototype = f(Array.prototype)
                d.prototype.contains = function (c) {
                    var a = this.length
                    var b = 0
                    while (a--) {
                        if (this[a].handler === c) {
                            b = a
                            return b
                        }
                    }
                    return -1
                }
            }

            function d() {
                this.push.apply(this, arguments)
            }

            function f(b) {
                function a() {
                }

                a.prototype = b
                return new a
            }

            return a
        }

        observerPatternFactory.$inject = []
        module.exports = observerPatternFactory
    }, {}],
    67: [function (require, module, exports) {
        "use strict"
        function audioManager(i, c, d) {
            "use strict"
            var a
            return {init: e, getAudioByName: b, play: f, stop: g, cleanUp: h}
            function e(e) {
                var f = c.defer()
                if (!e || a) {
                } else {
                    var g, h
                    for (var b = 0; b < e.length; b++) {
                        g = e[b].name
                        h = e[b].url
                        if (!a) {
                            a = {}
                        }
                        a[g] = d.load(h)
                    }
                }
                f.resolve("ready")
                return f.promise
            }

            function f(c) {
                var a = b(c)
                if (a) {
                    a.setCurrentTime(0)
                    a.play()
                }
            }

            function g(c) {
                var a = b(c)
                if (a) {
                    a.restart()
                }
            }

            function b(b) {
                if (!b || b === "" || !a || a.hasOwnProperty(b) === false) {
                    return undefined
                }
                return a[b]
            }

            function h() {
                if (!a) {
                    return
                }
                for (var b in a) {
                    if (a[b]) {
                        if (a[b].destroy) {
                            a[b].destroy()
                        }
                        a[b] = undefined
                    }
                }
                a = undefined
            }
        }

        audioManager.$inject = ["$log", "$q", "ngAudio"]
        module.exports = audioManager
    }, {}],
    68: [function (require, module, exports) {
        "use strict"
        function configDataFactory(w) {
            "use strict"
            var f = -1
            var x
            var h = 0
            var a
            var i
            var e
            var c = require("48")
            return {
                initConfig: k,
                setConfigValue: b,
                prepareService: j,
                updateEndpoint: n,
                getConfigValue: g,
                isConfigKeyValid: d,
                isReady: r,
                isHomeStudent: p,
                currentClass: o,
                setCurrentClass: s,
                setEventID: t,
                getEventID: u,
                setEventPostStatus: v,
                getEventPostStatus: m,
                getAudioFiles: l,
                cleanUp: q
            }
            function q() {
                b("userToken", "")
                b("lang", null)
            }

            function k(a) {
                if (!a) {
                    return false
                }
                for (var c in a) {
                    b(c, a[c])
                }
                return true
            }

            function l() {
                var b = g("audioBasePath")
                if (!b || !c || !c.audioFileList) {
                    return null
                }
                var d = []
                var e
                for (var a = 0; a < c.audioFileList.length; a++) {
                    e = b + c.audioFileList[a].file
                    d.push({name: c.audioFileList[a].name, url: e})
                }
                return d
            }

            function j() {
                b("EventStatusNextIntervalTime", 6e4)
                if (d("liveEngineResultUri")) {
                    b("liveMathsUserProfileService", a.liveEngineResultUri + "/UserProfileService.asmx")
                    b("FinaliseService", a.liveEngineResultUri + "/FinaliseService.asmx")
                }
            }

            function n(e, d, a) {
                var c = d
                if (a) {
                    if (a.remove) {
                        c = d.replace(a.remove, "")
                    }
                    if (a.add) {
                        c = c + a.add
                    }
                }
                b(e, c)
            }

            function b(b, c) {
                if (a === undefined) {
                    a = {}
                }
                a[b] = c
                return a[b]
            }

            function g(b) {
                if (d(b) === true) {
                    return a[b]
                }
                return null
            }

            function d(b) {
                return a && a.hasOwnProperty(b) && a[b] !== undefined && a[b] !== null && a[b] !== ""
            }

            function r() {
                return d("liveMathsUserProfileService") && d("userToken")
            }

            function s(a) {
                f = a
            }

            function t(a) {
                i = a
            }

            function u() {
                return i
            }

            function v(a) {
                e = a
            }

            function m() {
                if (e === undefined) {
                    e = false
                }
                return e
            }

            function o() {
                return f
            }

            function p() {
                return Number(g("SchoolId")) === h
            }
        }

        configDataFactory.$inject = ["$log"]
        module.exports = configDataFactory
    }, {48: 48}],
    69: [function (require, module, exports) {
        "use strict"
        function delayFactory(a) {
            "use strict"
            return {cancelDelayCallBack: c, setDelayCallBack: b}
            function b(e, c, b, d) {
                if (c === undefined || c === null) {
                    c = a(function () {
                        if (b !== undefined && b !== null && typeof b === "function") {
                            if (d !== undefined) {
                                if (d.constructor === Array) {
                                    b.apply(undefined, d)
                                } else {
                                    b(d)
                                }
                            } else {
                                b()
                            }
                        }
                    }, e)
                }
                return c
            }

            function c(b) {
                if (b !== undefined && b !== null) {
                    a.cancel(b)
                    b = undefined
                }
                return b
            }
        }

        delayFactory.$inject = ["$timeout"]
        module.exports = delayFactory
    }, {}],
    70: [function (require, module, exports) {
        "use strict"
        function faceGenerator(c) {
            "use strict"
            var a = function a(b, e) {
                var c = e - b
                var d = Math.round(Math.random() * c) + b
                return d
            }
            var b = function b(d) {
                var c = ""
                if (d === null || d !== "M" && d !== "F") {
                    c = a(0, 1) !== 0 ? "M" : "F"
                } else {
                    c = d
                }
                c += "|" + a(1, 20)
                c += "|" + a(1, 14)
                c += "|" + a(1, 12)
                c += "|" + a(1, 3)
                c += "|" + a(1, 7)
                c += "|" + a(1, 14)
                c += "|" + a(1, 10)
                c += "|" + a(1, 6)
                c += "|" + a(1, 12)
                c += "|" + a(1, 7)
                c += "|" + a(1, 10)
                c += "|" + a(1, 2)
                c += "|" + a(1, 20)
                c += "|" + a(1, 7)
                c += "|" + a(1, 22)
                return c
            }
            return {generateRandomFace: b}
        }

        faceGenerator.$inject = ["$log"]
        module.exports = faceGenerator
    }, {}],
    71: [function (require, module, exports) {
        "use strict"
        function mockServiceError(a, n) {
            var c = "iserror"
            var d = "sessiontoken"
            var e = "invalidtoken"
            var f = "null"
            var b = "undefined"
            var g = "exception"
            var h, i
            return {
                getErrorResponse: l,
                IS_ERROR: c,
                SESSION_TOKEN: d,
                INVALID_TOKEN: e,
                SERVICE_NULL: f,
                SERVICE_UNDEF: b,
                EXCEPTION: g,
                errorOptions: [c, d, e, f, b, g],
                setFaultOperations: k,
                setErrorType: m
            }
            function l(k, h, l) {
                if (j(k) === false) {
                    return h
                }
                if (l === undefined && i) {
                    l = i
                }
                if (l === undefined || l === null) {
                    return h
                }
                switch (l.toLowerCase()) {
                    case c:
                        a.debug("mock IS_ERROR", k, " response: ", h)
                        h.data.d.IsError = true
                        break
                    case d:
                        a.debug("mock SESSION_TOKEN", k, " response: ", h)
                        h.data.d.ResponseMessage = "Your session is time out fdfdfdd"
                        break
                    case e:
                        a.debug("mock INVALID_TOKEN", k, " response: ", h)
                        h.data = {Message: "There was an error processing the request.", ExceptionType: ""}
                        h.status = 500
                        break
                    case f:
                        a.debug("mock SERVICE_NULL", k, " response: ", h)
                        h.data = null
                        h.status = 500
                        break
                    case b:
                        a.debug("mock SERVICE_UNDEF", k, " response: ", h)
                        h.data = undefined
                        h.status = 500
                        break
                    case g:
                        a.debug("mock EXCEPTION", k, " response: ", h)
                        h.data = {Message: "testsetset", ExceptionType: ""}
                        h.status = 500
                        break
                }
                return h
            }

            function m(a) {
                i = a
            }

            function k(a) {
                h = a
            }

            function j(a) {
                if (a === null) {
                    return false
                }
                return h && h.indexOf(a) >= 0
            }
        }

        mockServiceError.$inject = ["$log", "configDataFactory"]
        module.exports = mockServiceError
    }, {}],
    72: [function (require, module, exports) {
        "use strict"
        function sessionInterceptor(h, g, c, s, j, o) {
            var e = ["GetLiveMathsProfile", "RefreshData"]
            var f = ["FindMatch"]
            var a
            return {request: m, response: q, responseError: n}
            function m(a) {
                if (o.https) {
                    a.url = a.url.replace("http://", "https://")
                }
                d(a.url, true)
                return a
            }

            function q(a) {
                d(a.config.url, false)
                var c = b(a.config.url).toLowerCase()
                var e = i(c)
                if (e && a.hasOwnProperty("data") && l(a.data) === true) {
                    return k(a)
                }
                return a
            }

            function i(b) {
                if (!a) {
                    a = g.getConfigValue("ExclusionOperationList")
                }
                return !a || !b || b === "" || a.length === 0 || a.indexOf(b) < 0
            }

            function n(a) {
                if (a.hasOwnProperty("config") && a.config && a.config.hasOwnProperty("url") && a.config.url && a.config.url !== "") {
                    d(a.config.url, false)
                    var c = b(a.config.url).toLowerCase()
                    var e = i(c)
                    if (e && a.hasOwnProperty("data") && l(a.data) === true) {
                        return k(a)
                    }
                }
                return h.reject(a)
            }

            function d(e, d) {
                var a = b(e)
                if (r(a) === true) {
                    c.showBusyIndicator(d)
                } else if (p(a) === true) {
                    c.showBlocker(d)
                }
            }

            function k(a) {
                j.remove("liveMaths.userToken")
                j.remove("liveMaths.classId")
                g.cleanUp()
                var b = "Your session timed out."
                var d = "invalidtoken"
                a.status = 407
                c.showMessage(true, b, d)
                return h.reject(a)
            }

            function l(a) {
                return a && (a.hasOwnProperty("Message") && a.Message && a.Message === "There was an error processing the request." && a.hasOwnProperty("ExceptionType") === true || a.hasOwnProperty("d") && a.d && a.d.hasOwnProperty("ResponseMessage") && a.d.ResponseMessage !== undefined && a.d.ResponseMessage !== null && a.d.ResponseMessage !== "")
            }

            function r(a) {
                if (a === null) {
                    return false
                }
                return e.indexOf(a) >= 0
            }

            function p(a) {
                if (a === null) {
                    return false
                }
                return f.indexOf(a) >= 0
            }

            function b(b) {
                if (!b || b === "") {
                    return null
                }
                var a = b.split("/")
                if (a.length === 0) {
                    return null
                }
                return a[a.length - 1]
            }
        }

        sessionInterceptor.$inject = ["$q", "configDataFactory", "sessionManager", "mockServiceError", "liveMathsCache", "projectSettings"]
        module.exports = sessionInterceptor
    }, {}],
    73: [function (require, module, exports) {
        "use strict"
        function sessionManager(j, f) {
            "use strict"
            var a
            return {promise: e, showMessage: g, showBusyIndicator: i, showBlocker: h, close: c, cleanUp: d}
            function e() {
                return b().promise
            }

            function b() {
                if (a === undefined) {
                    a = f.defer()
                }
                return a
            }

            function g(a, d, e) {
                if (a === true) {
                    b().notify({message: d, type: "message", messageType: e})
                } else {
                    c()
                }
            }

            function h(a, d, e) {
                if (a === true) {
                    b().notify({message: d, type: "blocker", blockerStyle: e})
                } else {
                    c()
                }
            }

            function i(a, d) {
                if (a === true) {
                    b().notify({message: d, type: "busyIndicator"})
                } else {
                    c()
                }
            }

            function c() {
                b().notify(undefined)
            }

            function d() {
                if (a !== undefined) {
                    c()
                    a.resolve(null)
                    a = undefined
                }
            }
        }

        sessionManager.$inject = ["$log", "$q"]
        module.exports = sessionManager
    }, {}],
    74: [function (require, module, exports) {
        "use strict"
        function stateHandler(b, a, h) {
            var d = 0
            var g = {}
            var c = {
                allowSwitch: false,
                replacePreviousState: l,
                changeStateHandler: k,
                backToSplash: f,
                addHistoryStep: j,
                exit: i
            }
            return c
            function i() {
            }

            function j(c) {
                d++
                b.debug("addHistoryStep: ", d, c.current.name, a.history.length)
            }

            function k(g, i, j, d, h) {
                b.debug(d.name + "changeStateHandler: ", d.name, "->", i.name, a.history.length)
                if (d.name.indexOf("splashscreen") >= 0 && d.name !== "splashscreen.waitingroom" && i.name.indexOf("splashscreen") >= 0 && i.name !== "splashscreen.waitingroom") {
                    c.allowSwitch = true
                } else if (d.name === "gameresult") {
                    c.allowSwitch = true
                }
                switch (i.name) {
                    case"splashscreen.waitingroom":
                        b.debug("splashscreen.waitingroom")
                        if (!(j.students instanceof Array || j.students.InvitationParty instanceof Array)) {
                            e(g, d, h)
                        }
                        break
                    case"gameroom":
                        b.debug("gameroom")
                        if (d.name === "gameresult") {
                            if (Object.keys(j.matchResponse).length === 0) {
                                e(g, d, h)
                                f()
                            }
                        } else if (c.allowSwitch === false) {
                            e(g, d, h)
                        }
                        break
                    case"login":
                        b.debug("login")
                        if (d.name === "splashscreen") {
                            e(g, d, h)
                            if (c.exit) {
                                c.exit.apply()
                            }
                        }
                        break
                    default:
                        b.debug("default", c.allowSwitch)
                        if (c.allowSwitch === false) {
                            e(g, d, h)
                            return
                        }
                }
                c.allowSwitch = false
            }

            function l() {
                a.history.popState()
            }

            function f() {
                b.debug("backToSplash: ", d)
                c.allowSwitch = true
                if (d > 0) {
                    b.debug("history back")
                    var e = -1 * d
                    d = 0
                    a.history.go(e)
                } else {
                    b.debug("lost track switch state but treat as history back")
                    h.go("splashscreen")
                    d = 0
                }
            }

            function e(c, e, f) {
                if (c.stopImmediatePropagation) {
                    c.stopImmediatePropagation()
                }
                if (c.preventDefault) {
                    c.preventDefault()
                }
                if (a.history && a.history.pushState) {
                    b.debug("re-pushState: ", e.name)
                    var d = a.history.length
                    a.history.pushState(f, "", "#/" + e.name)
                    b.debug("block step record: ", d, a.history.length)
                    if (e.name === "searchroom" && d > a.history.length) {
                        a.history.replaceState("", "", "#/splashscreen")
                        a.history.pushState(f, "", "#/searchroom")
                        b.debug("after update: ", d, a.history.length)
                    }
                }
            }
        }

        stateHandler.$inject = ["$log", "$window", "$state"]
        module.exports = stateHandler
    }, {}],
    75: [function (require, module, exports) {
        module.exports = '<div class="stage session-blocker-layer"\n     ng-class="info.blockerStyle? info.blockerStyle: \'livemath-blocker\'"\n     ng-show="info.type!==\'\' && info.type!==undefined && info.type!==null"></div>\n\n<div ng-switch on="info.type" class="session-message-layer">\n    <div ng-switch-when="message" class="msg-window center-pos">\n        <h1><b>Oops!</b></h1>\n        <h3>{{info.message}}</h3>\n        <div>\n            <button ng-repeat="btnData in info.buttonList" class="btn btn-block btn-primary"\n                    quick-touch="call(btnData)">{{btnData.label}}</button>\n        </div>\n    </div>\n\n    <div ng-switch-when="busyIndicator">\n        <div class="busyIndicator center-pos">\n            <i class="fa fa-spinner fa-pulse fa-4x busyFont"></i>\n        </div>\n        <div>{{info.message}}</div>\n    </div>\n\n    <div ng-switch-when="blocker">\n        <div>{{info.message}}</div>\n    </div>\n</div>\n'
    }, {}],
    76: [function (require, module, exports) {
        "use strict"
        require("2")
        angular.module("config", ["livemaths.log", "app-config", "platform"]).service("mockData", require("81")).factory("userProfileTypeEnum", require("77")).factory("configService", require("78")).factory("featureConfigService", require("80")).value("configSettings", require("79"))
    }, {2: 2, 77: 77, 78: 78, 79: 79, 80: 80, 81: 81}],
    77: [function (require, module, exports) {
        "use strict"
        function userProfileTypeEnum() {
            "use strict"
            var a = {}
            a.STUDENT = 1
            a.TEACHER = 2
            a.SCHOOLADMIN = 3
            a.PARENT = 4
            a.HOMESTUDENT = 5
            a.DISTRICTADMIN = 6
            a.INTERNALUSER = 7
            return a
        }

        userProfileTypeEnum.$inject = []
        module.exports = userProfileTypeEnum
    }, {}],
    78: [function (require, module, exports) {
        "use strict"
        function configService(f, m, d, i, e, k, a, h) {
            "use strict"
            var c = i
            var g = {setup: j}

            function l(a) {
                return Object.keys(a).length === 0
            }

            function j(h, d) {
                var a = f.defer()
                var g = h.toLowerCase()
                if (l(e)) {
                    k.loadConfig(c[g] || c.live).then(function (c) {
                        a.resolve(b(c, d))
                    }, function (c) {
                        a.reject(b(c, d))
                    })
                    return a.promise
                } else {
                    return f.when(b(e, d))
                }
            }

            function b(e, i) {
                var b = {}
                for (var c in e) {
                    if (e.hasOwnProperty(c)) {
                        switch (c) {
                            case"EventStatsServiceUrlJson":
                                b.EventStatsServicePathUrl = e[c]
                                break
                            case"FaceMakerAssetsUrlJson":
                                b.faceAssetBasePathPngs = e[c]
                                if (a.https) {
                                    b.faceAssetBasePathPngs = b.faceAssetBasePathPngs.replace("http://", "https://")
                                }
                                break
                            case"FlagAssetsUrlJson":
                                b.flagBaseAddress = e[c]
                                if (a.https) {
                                    b.flagBaseAddress = b.flagBaseAddress.replace("http://", "https://")
                                }
                                break
                            case"AudioBasePath":
                                b.audioBasePath = e[c]
                                if (a.https) {
                                    b.audioBasePath = b.audioBasePath.replace("http://", "https://")
                                }
                                break
                            case"LiveMathsResultsServiceUrlJson":
                                b.liveEngineResultUri = e[c]
                                break
                            case"WegMathsEventCdnPath":
                                b.WegMathsEventCdnPath = e[c]
                                break
                            case"EventServiceGetGamesAndScores":
                                b.EventServiceGetGamesAndScores = e[c]
                                break
                            case"StudentCentreUrl":
                                b.studentCentreUrl = e[c]
                                break
                            case"LogSettings":
                                b.logSettings = e[c]
                                d.setupSwitch(b.logSettings)
                                break
                            case"EventServiceScores":
                                b.EventServiceScores = e[c]
                                break
                            case"ExclusionOperationList":
                                var f = e[c]
                                if (f && f !== "") {
                                    f = f.toLowerCase()
                                    b.ExclusionOperationList = f.split(",")
                                }
                                break
                            case"FeaturePopUpFlags":
                                var g = e[c]
                                b = h.setUpFeatureConfig(g, b)
                                break
                        }
                    }
                }
                if (i) {
                    d.setupSwitch("wiled")
                }
                return b
            }

            return g
        }

        configService.$inject = ["$q", "$http", "Log", "configSettings", "configuration", "configurationLoader", "projectSettings", "featureConfigService"]
        function settingMockProperty(a) {
            if (!a.hasOwnProperty("EventsUrlJson")) {
                var b = {EventsUrlJson: "../assets/data/event.json"}
                a.push(b)
            }
            return a
        }

        module.exports = configService
    }, {}],
    79: [function (require, module, exports) {
        module.exports = {
            demo: "http://demo.mathletics.com/ConfigurationGateway/applications/LiveMathletics/configurations",
            qa: "http://qa.config.mathletics.com/ConfigurationGateway/applications/LiveMathletics/configurations",
            live: "http://mzaue2.config.mathletics.com/ConfigurationGateway/applications/LiveMathletics/configurations",
            preLive: "http://config.3plearning.com/ConfigurationGateway/preLive/applications/LiveMathletics/configurations",
            local: "http://localhost:8080/ConfigurationGateway/applications/Livemathletics/configurations"
        }
    }, {}],
    80: [function (require, module, exports) {
        "use strict"
        function featureConfigService(e) {
            "use strict"
            var a = {setUpFeatureConfig: b}

            function b(f, b) {
                if (f && f !== "") {
                    var g = []
                    var h = f.split(",")
                    for (var e = 0; e < h.length; e++) {
                        var a
                        var i = h[e]
                        switch (e) {
                            case 0:
                                a = d(i)
                                b.usingShadowPopup = a.flag
                                b.usingShadowPopupSec = a.value
                                break
                            case 1:
                                a = c(i)
                                b.ghostModePopUp = a
                                break
                        }
                        g.push(a)
                    }
                    b.featureArrayFlag = g
                }
                return b
            }

            function c(a) {
                return a === "1"
            }

            function d(c) {
                var a = {flag: false, value: {}}
                if (c) {
                    var b = c.split("|")
                    if (b[0] === "1") {
                        a.flag = true
                        if (b[1]) {
                            a.value = parseInt(b[1])
                        } else {
                            a.value = undefined
                        }
                    }
                } else {
                }
                return a
            }

            return a
        }

        featureConfigService.$inject = ["$log"]
        module.exports = featureConfigService
    }, {}],
    81: [function (require, module, exports) {
        "use strict"
        function MockData(b, c, a) {
            "use strict"
            this.get = function (e) {
                var d = a.defer()
                if (!e || e === "") {
                    return a.reject("Please specify the full file path")
                }
                var f = b.get(e)
                f.success(function (a) {
                    d.resolve(a)
                    c.debug("success! data = " + a)
                }).error(function (a) {
                    d.reject(status)
                })
                return d.promise
            }
        }

        MockData.$inject = ["$http", "$log", "$q"]
        module.exports = MockData
    }, {}],
    82: [function (require, module, exports) {
        "use strict"

        function GameRoomController(a, s, f, d, i, B, m, b, e) {
            "use strict"
            a.submitAnswer = z
            a.gameTimeout = F
            a.resetFocus = A
            a.hideKeypad = D
            var g = false
            var h = false
            var t
            var c
            a.$on("draggable:start", j)
            a.$on("draggable:move", j)
            a.$on("draggable:end", j)
            a.$on("$stateChangeStart", e.changeStateHandler)
            e.allowSwitch = false
            a.$on("$destroy", u)
            function u() {
                d.debug("gameroom destroy")
                b.reset()
            }

            y()
            function y() {
                a.currentLevel = f.level
                a.onlineUserNum = m.onlineUserCount
                var d = f.matchResponse
                if (d.hasOwnProperty("IsChallenge")) {
                    h = d.IsChallenge
                }
                t = f.matchType
                c = b.loadKeypadView()
                k(c)
                g = false
                a.timerStatus = "reset"
                a.countDownMessage = ""
                a.finalizeMsg = ""
                a.showFinalizeMsg = false
                b.reset()
                b.updatePlayersPromise().then(p, null, v)
                a.playerList = b.init(d, f.isComputerPlay, a.currentLevel, B, m)
                a.sortedPlayerList = b.getSortedPlayerList()
                a.scoreBoardScaling = b.getScoreBoardScaling()
                C()
            }

            function C() {
                q()
                a.gameStart = 0
                d.debug("loadingGame-gameCurrentTime: ", a.gameCurrentTime)
                b.countDownMsgPromise().then(E, null, n)
                a.countDownMessage = b.startCountDownMsg(b.COUNT_DOWN_TYPES.GAME_START)
            }

            function n(b) {
                if (b !== undefined && b !== null && b.hasOwnProperty("message") && b.message !== undefined && b.message !== null) {
                    d.debug(b.message)
                    a.countDownMessage = b.message
                }
            }

            function E() {
                a.gameStart = 1
                a.timerStatus = "start"
                b.gameStart()
                r()
            }

            function F() {
                o(b.GAME_OVER_TIME)
            }

            function o(c) {
                a.gameStart = 2
                if (a.timerStatus === "pause") {
                    return
                }
                a.timerStatus = "pause"
                b.stop(c)
                b.countDownMsgPromise().then(x, null, n)
                a.finalizeMsg = b.startCountDownMsg(b.COUNT_DOWN_TYPES.GAME_OVER, b.GAME_OVER_ANIMATE_TIME)
                a.showFinalizeMsg = true
            }

            function v(b) {
                if (b === undefined || b === null) {
                    return
                }
                switch (b.status) {
                    case"update":
                        w()
                        break
                    case"gameover":
                        o(a.gameCurrentTime)
                        break
                }
            }

            function w() {
                b.updateScores(a.gameCurrentTime)
                b.sortPlayers()
                b.markStruckOutPlayerScores()
            }

            function x() {
                g = true
                p()
            }

            function p() {
                if (g === true && b.getFinalizeResultResponse() !== undefined && b.getFinalizeResultResponse() !== null) {
                    e.allowSwitch = true
                    e.addHistoryStep(s)
                    s.go("gameresult", {
                        players: a.playerList,
                        results: b.getGameResults(),
                        resultData: b.getFinalizeResultResponse(),
                        level: a.currentLevel,
                        playType: {isChallenge: h, matchType: t},
                        onlineUsers: a.onlineUserNum
                    })
                }
            }

            function z(g) {
                if (g === undefined || g === null) {
                    return
                }
                var c = g.trim()
                if (c === "") {
                    return
                }
                d.debug("submitAnswer", c)
                var e = {input: c, isCorrect: false, question: a.question}
                e.isCorrect = parseFloat(c) === parseFloat(a.question.answer)
                b.updateGameResultList(e)
                if (e.isCorrect === false) {
                    d.debug("my correct: ", b.getMyIncorrect())
                    if (b.getMyIncorrect() < 2) {
                        i.play("wrong")
                    } else {
                        i.stop("wrong")
                        i.play("strikeOut")
                    }
                }
                var f = b.updateScores(a.gameCurrentTime, e.isCorrect, true)
                if (f !== undefined && f !== null && f.hasOwnProperty("status") && f.status === "gameover") {
                } else {
                    b.sortPlayers()
                    b.markStruckOutPlayerScores()
                    r()
                }
            }

            function A() {
                if (a.focusInput !== undefined) {
                    a.focusInput.focus()
                }
            }

            function q() {
                a.questionStringL = ""
                a.questionStringR = ""
                a.questionString = ""
                a.answerInput = ""
            }

            function r() {
                q()
                a.question = b.getNewQuestion()
                a.questionString = a.question.questionText
                var c = a.questionString.split("_____")
                a.questionStringL = c[0]
                a.questionStringR = c[1] === null ? "" : c[1]
            }

            function D() {
                c = 0
                k(c)
            }

            function k(c) {
                switch (c) {
                    case 1:
                        a.isMobile = true
                        a.scordboardStyle = "mobile-score mobile-score-left"
                        a.keypadStyle = "mobile-keypad mobile-keypad-right"
                        a.dragBoundary = "0 0 0 " + b.MAX_KEYPAD_X * -1
                        break
                    case 2:
                        a.isMobile = true
                        a.scordboardStyle = "mobile-score mobile-score-right"
                        a.keypadStyle = "mobile-keypad mobile-keypad-left"
                        a.dragBoundary = "0 " + b.MAX_KEYPAD_X + " 0 0"
                        break
                    default:
                        a.isMobile = false
                        a.scordboardStyle = undefined
                        a.keypadStyle = undefined
                        break
                }
                if (!a.$$phase) {
                    a.$apply()
                }
            }

            function j(f, a) {
                switch (f.name) {
                    case"draggable:start":
                        d.debug("start: ", a.x, a.tx, a.ox)
                        break
                    case"draggable:move":
                        var e = b.moveToNewDragPosition(a.tx, c)
                        l(e)
                        break
                    case"draggable:end":
                        c = b.getKeypadNewPosition(a.tx, c)
                        k(c)
                        l()
                        d.debug("end: ", a.x, a.tx)
                        break
                }
            }

            function l(a) {
                if (a === undefined || a === null) {
                    $(".mobile-score").css("left", "")
                } else {
                    $(".mobile-score").css("left", a + "px")
                }
            }
        }

        GameRoomController.$inject = ["$scope", "$state", "$stateParams", "$log", "audioManager", "questionLevelList", "gameUserInfo", "gameRoomFactory", "stateHandler"]
        module.exports = GameRoomController
    }, {}],
    83: [function (require, module, exports) {
        "use strict"
        function alignedQuestion(c, a) {
            return {
                restrict: "E",
                replace: false,
                require: "?ngModel",
                scope: {
                    submitAnswer: "=",
                    answerInput: "=",
                    levelId: "=",
                    isMobile: "=",
                    textLeft: "=",
                    textRight: "="
                },
                template: require("95"),
                link: b
            }
            function b(b, n, k, m) {
                var c
                var g
                var f, h
                var i = 1
                var e = 2
                var d = 4
                b.gameStart = 0
                b.innerAnswerInput = ""
                k.$observe("start", function (c) {
                    a.debug(c)
                    b.gameStart = +c
                })
                b.innerSubmitAnswer = function (c) {
                    if (b.gameStart === 1) {
                        var a = c
                        b.submitAnswer(a)
                        b.innerAnswerInput = ""
                    }
                }
                b.$watch(function (a) {
                    return a.textLeft + a.textRight
                }, function () {
                    j()
                    l()
                }, true)
                b.$watch("answerInput", function () {
                    var a = b.answerInput
                    b.innerAnswerInput = a
                }, true)
                function j() {
                    c = ""
                    g = ""
                    c = typeof b.textLeft === "string" ? b.textLeft : ""
                    g = typeof b.textRight === "string" ? b.textRight : ""
                    var d = /\\n/g
                    var j = " "
                    f = c.length + g.length
                    var e = c.match(d)
                    var i = g.match(d)
                    h = (e === null || e === undefined ? 0 : e.length) + (i === null || i === undefined ? 0 : i.length)
                    h = h === null || h === undefined || h <= 0 ? 1 : h + 1
                    c = c.replace(d, j)
                    g = g.replace(d, j)
                    a.debug("lines num: " + h + " texts length:" + f)
                    b.leftTextFormatted = c
                    b.rightTextFormatted = g
                }

                function l() {
                    if (b.levelId > 1) {
                        i = b.levelId
                    }
                    a.debug("texts length:" + f)
                    switch (i) {
                        case 1:
                        case 2:
                        case 3:
                            c = c + " "
                            e = 3
                            d = 4
                            break
                        case 4:
                        case 5:
                            c = c + " "
                            e = 2
                            d = 2
                            if (f < 16) {
                                e = 3
                                d = 4
                            } else if (f > 70) {
                                e = 1
                                d = 1
                            }
                            break
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                            e = 1
                            d = 1
                            if (f < 18) {
                                e = 3
                                d = 4
                            } else if (f > 17 && f < 42) {
                                e = 3
                                d = 3
                            } else if (f > 41 && f < 70) {
                                e = 2
                                d = 2
                            }
                            break
                        default:
                            c = c + " "
                            e = 3
                            d = 4
                            break
                    }
                    b.textSizeNo = d
                    b.inputWidthNo = e
                }
            }
        }

        alignedQuestion.$inject = ["$compile", "$log"]
        module.exports = alignedQuestion
    }, {95: 95}],
    84: [function (require, module, exports) {
        "use strict"
        function gameTimer(b, a) {
            "use strict"
            return {
                scope: {
                    maxTimes: "@",
                    interval: "@",
                    unit: "@",
                    currentTime: "=",
                    updateTimer: "=",
                    completeTimer: "=",
                    "switch": "="
                }, restrict: "AE", template: require("93"), link: c
            }
            function c(c, q, p) {
                var d, e, f
                c.$watch("switch", function (a) {
                    if (a !== undefined) {
                        n(a)
                    }
                })
                c.$on("$destroy", o)
                function k(b, g) {
                    if (g > 0 && d === undefined) {
                        i(b * g)
                        d = a(function () {
                            e -= b
                            c.currentTime += b
                            f--
                            j(e)
                            if (e > 0 && c.updateTimer !== undefined && c.updateTimer !== null && typeof c.updateTimer === "function") {
                                c.updateTimer(e)
                            }
                        }, b, g)
                        d.then(l)
                    }
                    return d
                }

                function l() {
                    g()
                    if (c.completeTimer !== undefined && c.completeTimer !== null && typeof c.completeTimer === "function") {
                        c.completeTimer(e)
                    }
                    c["switch"] = "complete"
                }

                function n(b) {
                    var a = Number(c.interval)
                    switch (b) {
                        case"start":
                            f = Number(c.maxTimes)
                            d = k(a, f)
                            break
                        case"reset":
                            g()
                            f = Number(c.maxTimes)
                            i(a * f)
                            break
                        case"resume":
                            d = k(a, f)
                            break
                        case"pause":
                            g()
                            break
                        case"stop":
                            g()
                            i(0)
                            break
                    }
                }

                function i(a) {
                    c.currentTime = 0
                    e = a
                    j(e)
                }

                function g() {
                    if (d === undefined) {
                        return
                    }
                    a.cancel(d)
                    d = undefined
                }

                function o() {
                    g()
                }

                function j(a) {
                    b.debug("clock tick:", a)
                    c.displayTime = m(a, c.unit)
                    c.secAngle = a * .001 * 6
                }

                function h(a) {
                    if (a < 10 && a >= 0) {
                        return "0" + a
                    } else {
                        return a
                    }
                }

                function m(a, d) {
                    switch (d) {
                        case"sec":
                        case"second":
                            return Math.floor(a * .001)
                        case"min":
                        case"minutes":
                            var b = Math.floor(a * .001)
                            return h(Math.floor(b / 60)) + ":" + h(b % 60)
                        case"hr":
                        case"hours":
                            var c = Math.floor(a * .001 / 60)
                            return h(Math.floor(c / 60)) + ":" + h(c % 60)
                        default:
                            return a
                    }
                }
            }
        }

        gameTimer.$inject = ["$log", "$interval"]
        module.exports = gameTimer
    }, {93: 93}],
    85: [function (require, module, exports) {
        "use strict"
        function numKeypad(a) {
            "use strict"
            return {
                restrict: "EA",
                scope: {linkedTextStr: "=", submitEvent: "=", locked: "=?"},
                template: require("94"),
                link: b
            }
            function b(b, f, g) {
                b.pressKey = c
                b.keyList = [{value: "7", label: "7"}, {value: "8", label: "8"}, {value: "9", label: "9"}, {
                    value: "4",
                    label: "4"
                }, {value: "5", label: "5"}, {value: "6", label: "6"}, {value: "1", label: "1"}, {
                    value: "2",
                    label: "2"
                }, {value: "3", label: "3"}, {value: "0", label: "0"}, {value: "[-]", label: "+/-"}, {
                    value: "[.]",
                    label: "."
                }, {value: "[DELETE]", label: "", iconStyle: "mobile-backspace-icon"}, {
                    value: "[SUBMIT]",
                    label: "OK",
                    style: "button-large"
                }]
                function c(a) {
                    if (a.indexOf("[") === -1 && a.indexOf("]") === -1) {
                        d(a)
                    } else {
                        e(a.substring(1, a.length - 1))
                    }
                }

                function d(c) {
                    if (b.linkedTextStr === undefined || b.linkedTextStr === null) {
                        b.linkedTextStr = ""
                    }
                    b.linkedTextStr += c
                    a.debug("originalKeypadAction: ", b.linkedTextStr)
                }

                function e(c) {
                    if (b.linkedTextStr === undefined || b.linkedTextStr === null) {
                        b.linkedTextStr = ""
                    }
                    a.debug("keypress", {msg: b.linkedTextStr, key: c})
                    switch (c) {
                        case"DELETE":
                            if (b.linkedTextStr.length > 1) {
                                b.linkedTextStr = b.linkedTextStr.slice(0, b.linkedTextStr.length - 1)
                            } else {
                                b.linkedTextStr = ""
                            }
                            break
                        case"-":
                            if (b.linkedTextStr.indexOf("-") < 0) {
                                b.linkedTextStr = "-" + b.linkedTextStr
                            } else {
                                b.linkedTextStr = b.linkedTextStr.slice(1)
                            }
                            break
                        case".":
                            if (b.linkedTextStr.indexOf(".") < 0) {
                                b.linkedTextStr = b.linkedTextStr + "."
                            }
                            break
                        case"SUBMIT":
                            b.submitEvent(b.linkedTextStr.slice())
                            b.linkedTextStr = ""
                            break
                    }
                }
            }
        }

        numKeypad.$inject = ["$log"]
        module.exports = numKeypad
    }, {94: 94}],
    86: [function (require, module, exports) {
        "use strict"
        function scoreBar(b) {
            "use strict"
            return {
                scope: {maxScale: "=", user: "="},
                restrict: "AE",
                transclude: true,
                template: require("96"),
                link: a
            }
            function a(a, e, f) {
                a.myScoreProperty = b
                a.displayHighScore = d
                function b() {
                    return {width: c()}
                }

                function c() {
                    var b = a.user.score / a.maxScale * 100
                    return b + "%"
                }

                function d() {
                    if (!a.user.hasOwnProperty("highScore") || !a.user.highScore || a.user.highScore <= 0) {
                        return "0%"
                    } else {
                        return a.user.highScore / a.maxScale * 100 + "%"
                    }
                }
            }
        }

        scoreBar.$inject = ["$log"]
        module.exports = scoreBar
    }, {96: 96}],
    87: [function (require, module, exports) {
        "use strict"
        function countDownMsgFactory(l, g) {
            "use strict"
            var h = {GAME_START: 0, GAME_OVER: 1}
            var i = [{type: 0, messages: ["Get Ready", "3", "2", "1", "Go"]}, {type: 1, messages: ["Game Over"]}]
            var c, d
            var a
            var b
            var e
            return {TYPES: h, start: n, promise: k, cleanUp: j}
            function k() {
                return f().promise
            }

            function f() {
                if (a === undefined) {
                    a = l.defer()
                }
                return a
            }

            function m() {
                if (a !== undefined) {
                    a.reject(null)
                    a = undefined
                }
            }

            function n(e, a) {
                o(e)
                if (a === undefined) {
                    a = 1e3
                }
                if (d === undefined) {
                    c = 0
                    d = g(p, a, b.length)
                    return b[c]
                }
                return ""
            }

            function o(a) {
                e = a
                b = i[e].messages
            }

            function p() {
                c++
                if (c < b.length) {
                    f().notify({type: e, message: b[c]})
                } else {
                    f().resolve({type: e})
                    a = undefined
                    j()
                }
            }

            function j() {
                m()
                if (d !== undefined) {
                    g.cancel(d)
                    d = undefined
                }
            }
        }

        countDownMsgFactory.$inject = ["$q", "$interval"]
        module.exports = countDownMsgFactory
    }, {}],
    88: [function (require, module, exports) {
        "use strict"
        function gameRoomFactory(u, d, a, e, m, i, v) {
            "use strict"
            var h
            var c, f
            var g = 296, b = 676, j = "keypadPosition"
            return {
                GAME_OVER_ANIMATE_TIME: 3e3,
                GAME_OVER_TIME: a.GAME_OVER_TIME,
                COUNT_DOWN_TYPES: d.TYPES,
                init: o,
                getSortedPlayerList: a.getSortedPlayerList,
                gameStart: a.start,
                reset: p,
                stop: a.stop,
                loadKeypadView: n,
                moveToNewDragPosition: t,
                getKeypadNewPosition: k,
                getKeypadCurrentDraggingPos: l,
                MAX_KEYPAD_X: b,
                getGameResults: s,
                getNewQuestion: q,
                updateGameResultList: r,
                startCountDownMsg: d.start,
                countDownMsgPromise: d.promise,
                getScoreBoardScaling: a.getScoreBoardScaling,
                getMyIncorrect: a.getMyIncorrect,
                updateScores: a.updateScores,
                sortPlayers: a.sortPlayers,
                markStruckOutPlayerScores: a.markStruckOutPlayerScores,
                getFinalizeResultResponse: a.getFinalizeResultResponse,
                updatePlayersPromise: a.promise
            }
            function o(f, j, c, k, b) {
                m.setSeed(f.Seed)
                h = k[c - 1]
                var d, g
                if (b.userCurrentResults && b.userCurrentResults.length > 0 && c > 0) {
                    g = b.userCurrentResults[c - 1]
                }
                if (j === true) {
                    var i = b.rankLevelInfo[c.toString()]
                    d = e.createPlayerList(b.userDetail, null, g, i)
                } else {
                    d = e.createPlayerList(b.userDetail, f.UserMatchList, g)
                }
                a.init(d, f.MatchID, c, e.computerPlayerDetails(), e.createGhostPlayers(d), g, null, f.Seed)
                return d
            }

            function p() {
                c = undefined
                f = undefined
                h = undefined
                a.cleanUp()
                d.cleanUp()
            }

            function q() {
                return h.getRandomQuestion().generateQuestion()
            }

            function r(a) {
                if (!c) {
                    c = []
                    f = 0
                }
                if (f < 4) {
                    if (a.isCorrect === false) {
                        f++
                    }
                    c.push(a)
                    return true
                } else {
                    return false
                }
            }

            function s() {
                return c
            }

            function t(a, e) {
                if (a === 0 || a < 0 && e === 2 || a > 0 && e === 1) {
                    return
                }
                a = a * -1
                var c = 1
                if (a < 0) {
                    c = -1
                }
                if (Math.abs(a) > b) {
                    a = b * c
                }
                var d = Math.round(g * a / b)
                if (a < 0) {
                    d += g
                }
                return d
            }

            function l(a) {
                if (a >= b) {
                    return 1
                } else if (a <= b * -1) {
                    return 2
                } else {
                    return undefined
                }
            }

            function k(c, d) {
                var a = d
                if (c < b * -.4) {
                    a = 2
                } else if (c > b * .4) {
                    a = 1
                }
                return a
            }

            function n() {
                var a = 0
                var b = i.getConfigValue("isKeypadOn")
                if (b === true) {
                    if (i.getConfigValue(j) === "left") {
                        a = 2
                    } else {
                        a = 1
                    }
                }
                return a
            }
        }

        gameRoomFactory.$inject = ["$log", "countDownMsgFactory", "scoreBoardFactory", "playerGenerator", "RandomNumberGenerator", "configDataFactory", "$window"]
        module.exports = gameRoomFactory
    }, {}],
    89: [function (require, module, exports) {
        "use strict"
        function playerGenerator(O, P, A, J, c) {
            "use strict"
            var l = 3
            var y = ["blue", "yellow", "green", "purple"]
            var p = "Computer Player "
            var o = "comp "
            var u = 5
            var v = 5, q = 10, m = 20
            var w = 0, x = 1, B = 2, r = 3, s = 4
            var t = [{
                DisplayName: "Pea Brain",
                type: 0,
                offsetUpper: .16,
                offsetLower: -.16
            }, {DisplayName: "Mega Brain", type: 1, offsetUpper: .16, offsetLower: -.16}, {
                DisplayName: "Mr. Average",
                type: 2,
                offsetUpper: .16,
                offsetLower: -.16
            }, {DisplayName: "Ghost", type: 3, offsetUpper: .16, offsetLower: -.16}, {
                DisplayName: "Brainiac",
                type: 4,
                offsetUpper: -.05,
                offsetLower: -.16
            }]
            var i, d
            var h, f, e
            return {
                createPlayerList: E,
                isComputerOnly: G,
                computerPlayerDetails: D,
                createGhostPlayers: F,
                createComputerPlayers: z
            }
            function G() {
                return d
            }

            function E(m, c, g, n) {
                h = undefined
                f = undefined
                e = undefined
                i = J.getConfigValue("flagBaseAddress")
                d = c === undefined || c === null || c.length <= 0
                var b = []
                var j
                var a
                if (g && g.hasOwnProperty("HighScore")) {
                    O.debug("pre high score = ", g.HighScore)
                    b.push(k(0, m, g.HighScore))
                } else {
                    b.push(k(0, m))
                }
                if (d) {
                    h = N(z(g, n), l)
                    for (a = 0; a < h.length; a++) {
                        j = k(a + 1, h[a])
                        b.push(j)
                    }
                } else {
                    for (a = 0; a < c.length && a < l; a++) {
                        j = k(a + 1, c[a])
                        b.push(j)
                    }
                }
                return b
            }

            function k(c, a, e) {
                var b = {index: c, flagUrl: "", score: 0, incorrect: 0}
                b.color = y[c]
                if (a === undefined) {
                    if (d === true) {
                        b.schoolName = p
                        b.face = A.generateRandomFace()
                        b.name = o + c
                    } else {
                        b.name = "Player " + c
                    }
                    return b
                }
                if (a.hasOwnProperty("DisplayName") && a.DisplayName !== undefined && a.DisplayName !== null) {
                    b.name = a.DisplayName
                } else if (d === true) {
                    b.name = o + c
                }
                if (a.hasOwnProperty("SchoolName") && a.SchoolName !== undefined && a.SchoolName !== null) {
                    b.schoolName = a.SchoolName
                } else if (d === true) {
                    b.schoolName = p
                }
                if (e && e > 0) {
                    b.highScore = e
                }
                if (a.hasOwnProperty("score") && a.score !== undefined && a.score !== null) {
                    b.score = a.score
                }
                if (a.hasOwnProperty("PersonalBestScore") && a.PersonalBestScore !== undefined && a.PersonalBestScore !== null) {
                    b.bestScore = a.PersonalBestScore
                }
                if (a.hasOwnProperty("ThisIsGhost") && a.ThisIsGhost !== undefined && a.ThisIsGhost !== null) {
                    b.IsGhost = a.ThisIsGhost
                }
                if (a.hasOwnProperty("Avatar") && a.Avatar !== undefined && a.Avatar !== null) {
                    b.face = a.Avatar
                } else {
                    b.face = A.generateRandomFace()
                }
                if (a.hasOwnProperty("CountryCode") && a.CountryCode !== undefined && a.CountryCode !== null) {
                    b.country = a.CountryCode
                    if (i !== undefined && i !== null && i !== "" && a.CountryCode !== "") {
                        b.flagUrl = i + a.CountryCode + ".png"
                    }
                }
                return b
            }

            function D() {
                return h
            }

            function a(a) {
                if (e !== undefined && e !== null && e.hasOwnProperty(a)) {
                    return e[a]
                }
                return null
            }

            function b(a) {
                if (f !== undefined && f !== null && f.hasOwnProperty(a)) {
                    return f[a]
                }
                return null
            }

            function F(b) {
                var a = []
                a = H(b)
                return a
            }

            function z(g, h) {
                f = h
                e = g
                var c = []
                var d = 0
                if (a("TotalGamesPlayed") !== null) {
                    d = Math.min(u, a("TotalGamesPlayed"))
                }
                var b = L(d)
                if (b !== null) {
                    c.push(b)
                }
                b = M(d)
                if (b !== null) {
                    c.push(b)
                }
                b = I()
                if (b !== undefined) {
                    c.push(b)
                }
                b = C()
                if (b !== undefined) {
                    c.push(b)
                }
                b = K()
                if (b !== undefined) {
                    c.push(b)
                }
                return c
            }

            function H(b) {
                var c = []
                for (var a = 0; a < b.length; a++) {
                    if (b[a].IsGhost === true) {
                        c.push(b[a])
                    }
                }
                return c
            }

            function I() {
                var f = true
                var e = a("LastScore")
                if (e > 0 !== true) {
                    e = q
                    var d = b(c.JUNIOR_GIANT)
                    if (d !== null) {
                        var h = (d.min + d.max) * .5
                        d = b(c.SPEED_DEMON)
                        if (d !== null) {
                            var i = (d.min + d.max) * .5
                            e = n(h, i)
                            f = false
                        }
                    }
                }
                return g(e, r, f)
            }

            function C() {
                var e = m
                var f = true
                var h = c.JUNIOR_GIANT
                if (a("RankingEnum") > c.SPEED_DEMON) {
                    h = a("RankingEnum") - 1
                }
                var d = b(h)
                if (d !== null) {
                    e = n(d.min, d.max)
                    f = false
                }
                return g(e, x, f)
            }

            function K() {
                var d = true
                var e = v
                var a = b(c.RAGING_ROOKIE)
                if (a !== null) {
                    e = n(a.min, a.max)
                    d = false
                }
                return g(e, w, d)
            }

            function L(h) {
                var d
                var f
                var e
                d = a("HighScore")
                f = true
                if (h > 1 && d !== null) {
                    if (d > 0 !== true) {
                        d = m
                        e = b(c.ALMOST_EINSTERN)
                        if (e !== null) {
                            d = j(e.min, e.max)
                            f = false
                        }
                    }
                    return g(d, s, f)
                }
                return null
            }

            function M(f) {
                var d = q
                var j = true
                var h = b(c.HUMAN_CALCULATOR)
                if (h !== null) {
                    d = h.max * .5
                }
                if (f === 1) {
                    var i = a("RankingEnum")
                    if (i !== null) {
                        h = b(i)
                        if (h !== null) {
                            d = h.max * .5
                        }
                    }
                } else if (f >= 2) {
                    var e = 0
                    d = a("LastScore")
                    if (d !== null && d > 0) {
                        e += d
                    }
                    d = a("SecondMostRecentScore")
                    if (d !== null && d > 0) {
                        e += d
                    }
                    if (f > 2) {
                        d = a("ThirdMostRecentScore")
                        if (d !== null && d > 0) {
                            e += d
                        }
                    }
                    if (f > 3) {
                        d = a("ForthMostRecentScore")
                        if (d !== null && d > 0) {
                            e += d
                        }
                    }
                    if (f > 4) {
                        d = a("FifthMostRecentScore")
                        if (d !== null && d > 0) {
                            e += d
                        }
                    }
                    d = e / f
                }
                return g(d, B, j)
            }

            function N(a, b) {
                if (b === undefined) {
                    return a
                }
                return P("orderBy")(a, "displayIndex").slice(0, b)
            }

            function n(a, b) {
                if (a <= 0) {
                    a = Math.round((b + a) * .5)
                }
                if (b <= 0) {
                    return a
                }
                return j(a, b)
            }

            function g(b, d, g) {
                var a = t[d]
                var c
                if (g) {
                    var e = Math.round(b * (1 + a.offsetUpper))
                    var f = Math.round(b * (1 + a.offsetLower))
                    c = j(f, e)
                } else {
                    c = Math.round(b)
                }
                return {maxScore: c, type: d, displayIndex: j(1, 100), DisplayName: a.DisplayName}
            }

            function j(a, c) {
                var b = Math.round(Math.random() * (c - a) + a)
                return b
            }
        }

        playerGenerator.$inject = ["$log", "$filter", "faceGenerator", "configDataFactory", "rankEnum"]
        module.exports = playerGenerator
    }, {}],
    90: [function (require, module, exports) {
        "use strict"
        function scoreBoardFactory(o, a8, s, ah, Z, a0) {
            "use strict"
            var l = 6e4
            var V = 59e3
            var C = 3
            var U = 1e3
            var T = 5e3
            var S = 2e3
            var q
            var m, y
            var h
            var f, g
            var a, d, k, n
            var x, H, A, e, c
            var u = false
            var G = [5, 8, 10, 4]
            var b, v, w, i, P
            return {
                GAME_OVER_TIME: l,
                init: $,
                getPlayerList: a1,
                getSortedPlayerList: a4,
                getMyIncorrect: Y,
                start: t,
                stop: a7,
                promise: X,
                updateScores: R,
                getScoreBoardScaling: af,
                getFinalizeResultResponse: ae,
                cleanUp: ad,
                markStruckOutPlayerScores: F,
                sortPlayers: O
            }
            function X() {
                return r().promise
            }

            function r() {
                if (h === undefined) {
                    h = a8.defer()
                }
                return h
            }

            function _() {
                if (h !== undefined) {
                    h.reject(null)
                    h = undefined
                }
            }

            function $(e, h, j, l, m, b, c, n) {
                P = n
                i = 0
                u = false
                if (b && b.HighScore) {
                    i = Number(b.HighScore)
                    if (isNaN(i)) {
                        i = 0
                    }
                }
                o.debug("scoreBoard init highScore:", i)
                N()
                a = e.slice()
                g = m
                x = h
                H = j
                f = l
                d = f !== undefined && f !== null && f.length > 0
                k = g !== undefined && g !== null && g.length > 0
                if (d === false) {
                    q = S
                }
                if (c !== undefined && c !== null) {
                    A = c
                }
                a2()
            }

            function N() {
                c = undefined
                e = undefined
                v = false
                w = 0
                a = undefined
                x = undefined
                H = undefined
                d = false
                k = false
                f = undefined
                g = undefined
                A = 0
                b = {
                    maxScale: 10,
                    repeatLen: null,
                    divDimension: 0,
                    highScorePosition: {width: "0%"},
                    showHighScore: false
                }
                p()
                j(0)
            }

            function a1() {
                return a
            }

            function a2() {
                n = {indices: []}
                for (var b = 0; b < a.length; b++) {
                    n.indices.push(b)
                }
            }

            function a4() {
                return n
            }

            function a7(a) {
                o.debug("forceStop: ", a)
                R(a, undefined, undefined, true)
                F()
            }

            function p() {
                m = s.cancelDelayCallBack(m)
            }

            function ab() {
                y = s.cancelDelayCallBack(y)
            }

            function ad() {
                N()
                _()
            }

            function t() {
                if (I()) {
                    return
                }
                p()
                if (d === true) {
                    m = s.setDelayCallBack(U, m, J)
                } else if (d === false) {
                    if (q > 0) {
                        m = s.setDelayCallBack(q, m, J)
                    } else if (q === 0) {
                        J()
                    }
                }
            }

            function I() {
                if (e === "gameover") {
                    p()
                }
                return e === "gameover"
            }

            function J() {
                if (e === "gameover") {
                    return
                }
                r().notify({status: "update"})
            }

            function Y() {
                if (a && a.length > 0 && a[0].incorrect) {
                    return a[0].incorrect
                }
                return 0
            }

            function R(b, c, f, g) {
                if (I()) {
                    return {status: e}
                }
                o.debug("updateScores: ", b)
                if (c === true) {
                    a[0].score++
                    j(a[0].score)
                } else if (c === false) {
                    a[0].incorrect++
                }
                if (a[0].incorrect >= C) {
                    E(b)
                } else if (b >= l || g === true) {
                    if (d === true) {
                        E(b)
                    } else {
                        o.debug("updateScores: vs liveuser game over")
                        e = "gameover"
                        D(b)
                        y = s.setDelayCallBack(T, y, ac)
                    }
                } else {
                    if (d === true) {
                        L(b)
                    } else if (M()) {
                        B(b)
                    } else if (!M()) {
                        B(b)
                        D(b)
                    } else if (!k && f !== true) {
                        D(b)
                    }
                }
                return aa()
            }

            function M() {
                var b = a.length - 1
                if (k && g.length <= 3) {
                    if (b === g.length) {
                        return true
                    } else {
                        return false
                    }
                }
            }

            function K(a) {
                return C <= a && a < 6
            }

            function F() {
                for (var b = 0; b < a.length; b++) {
                    if (K(a[b].incorrect)) {
                        var d = "scoreBar" + b
                        var c = document.getElementById(d)
                        if (c !== null) {
                            c.className = c.className.replace("whiteTextWithShadow", "redTextWithShadow")
                        }
                    }
                }
            }

            function O() {
                n.indices = n.indices.sort(b)
                c(n.indices)
                function b(d, e) {
                    if (d === 0) {
                        return -1
                    }
                    if (e === 0) {
                        return 1
                    }
                    var f = a[d]
                    var g = a[e]
                    var b = f.score
                    var c = g.score
                    var h = K(f.incorrect)
                    var i = K(g.incorrect)
                    if (h && i) {
                        return b == c ? d - e : c - b
                    }
                    if (h) {
                        return 1
                    }
                    if (i) {
                        return -1
                    }
                    return b === c ? d - e : c - b
                }

                function c(c) {
                    for (var a = 1; a < c.length; a++) {
                        var b = document.getElementById("playerSpan" + c[a])
                        if (b) {
                            TweenLite.to(b, .5, {className: "playerPosition" + a})
                        }
                    }
                }
            }

            function D(d) {
                var a = z().score
                var b = z().incorrect
                var c = Math.round((l - d) * .001)
                ah.update(x, a, b, c).then(a3)
            }

            function a3(a) {
                if (I()) {
                    if (a && a.Results) {
                        Q(a.Results)
                    }
                    return
                }
                if (a === undefined || a === null) {
                    t()
                    return
                } else {
                    if (a.hasOwnProperty("PollingFrequencyInMilliseconds")) {
                        var b = Number(a.PollingFrequencyInMilliseconds)
                        if (b >= 0) {
                            q = b
                        }
                    }
                    t()
                    if (a.hasOwnProperty("Results") === false) {
                        return
                    }
                }
                Q(a.Results)
                O()
                F()
            }

            function Q(a) {
                if (a === undefined || a === null) {
                    return
                }
                if (k === false) {
                    a5(a)
                } else {
                    a6(a)
                }
            }

            function a5(d) {
                var c, e
                for (var b = 0; b < d.length; b++) {
                    c = parseInt(d[b].Score)
                    e = d[b].Status
                    if (c !== a[b + 1].score || e !== a[b + 1].incorrect) {
                        a[b + 1].score = c
                        j(c)
                        a[b + 1].incorrect = e
                    }
                }
            }

            function a6(e) {
                var c, f
                var d = 0
                for (var b = 1; b < a.length; b++) {
                    if (a[b].IsGhost === false) {
                        c = parseInt(e[d].Score)
                        f = e[d].Status
                        if (c !== a[b].score || f !== a[b].incorrect) {
                            a[b].score = c
                            j(c)
                            a[b].incorrect = f
                        }
                        if (e.length === 1) {
                            break
                        } else {
                            d = 1
                        }
                    }
                }
            }

            function L(g) {
                t()
                var e = g / l
                var c
                var d
                for (var b = 1; b < a.length; b++) {
                    d = f[b - 1]
                    c = Math.round(e * d.maxScore)
                    if (c !== a[b].score) {
                        a[b].score = c
                        d.currentScore = c
                        j(c)
                    }
                }
            }

            function B(e) {
                t()
                var d = e / V
                var c
                for (var b = 1; b < a.length; b++) {
                    if (a[b].IsGhost !== undefined || a[b].IsGhost !== null) {
                        if (a[b].IsGhost === true) {
                            c = a9(g, a[b], d)
                            if (c !== a[b].score) {
                                a[b].score = c
                                j(c)
                            }
                        }
                    }
                }
            }

            function a9(b, d, e) {
                var c
                for (var a = 0; a < b.length; a++) {
                    if (b[a] == d) {
                        c = Math.round(e * b[a].bestScore)
                        if (c > b[a].bestScore) {
                            c = b[a].bestScore
                        }
                        break
                    }
                }
                return c
            }

            function aa(b) {
                var a
                if (b === undefined) {
                    if (e === "gameover") {
                        if (a === undefined) {
                            a = {}
                        }
                        a.status = e
                    }
                }
                if (a !== undefined) {
                    r().notify(a)
                }
                return a
            }

            function z() {
                return a[0]
            }

            function ac() {
                p()
                E(l)
            }

            function E(f) {
                if (u === true) {
                    return
                }
                u = true
                e = "gameover"
                p()
                ab()
                if (d === true) {
                    L(f)
                } else if (k === true) {
                    B(f)
                }
                var a = z().score
                var b = z().incorrect
                var g = a + b
                var i = Math.round(f * .001)
                o.debug("finalizeGame: ", {Score: a, Status: b})
                Z.get(H, d, i, g, A, x, a, b, P).then(function (a) {
                    c = a
                    r().resolve({status: "finalizegame"})
                    h = undefined
                }, function (a) {
                    c = null
                    r().resolve({status: "finalizegame"})
                    h = undefined
                    if (a !== 407) {
                        a0.showMessage(true, "We have come across an error. Please try again.", "back")
                    }
                })
            }

            function ae() {
                if (c !== null && d === true) {
                    var b = []
                    for (var a = 0; a < f.length; a++) {
                        b.push({Score: f[a].currentScore || 0, Status: 0})
                    }
                    if (c === undefined || c === null || typeof c !== "object") {
                        c = {}
                    }
                    c.UserPointLevelCollection = b
                }
                return c
            }

            function j(a) {
                if (a > b.maxScale) {
                    v = true
                    b.maxScale = ag(a)
                    W()
                } else if (b.repeatLen === null) {
                    v = true
                    W()
                }
            }

            function ag(d) {
                var a = true
                a:while (a) {
                    b = undefined
                    a = false
                    var c = d
                    w++
                    var b = 10 * Math.pow(2, w)
                    if (c > b) {
                        d = c
                        a = true
                        continue a
                    } else {
                        return b
                    }
                }
            }

            function W() {
                var c = w % G.length
                var a = G[c]
                b.repeatLen = new Array(a - 1)
                b.divDimension = {width: Math.round(1 / a * 1e3) * .1 + "%"}
                if (i > 0 && i <= b.maxScale) {
                    b.highScorePosition = {width: Math.round(i / b.maxScale * 1e3) * .1 + "%"}
                    b.showHighScore = true
                } else {
                    b.highScorePosition = {width: "0%"}
                    b.showHighScore = false
                }
            }

            function af() {
                v = false
                return b
            }
        }

        scoreBoardFactory.$inject = ["$log", "$q", "delayFactory", "scoreBoard", "finaliseResult", "sessionManager"]
        module.exports = scoreBoardFactory
    }, {}],
    91: [function (require, module, exports) {
        "use strict"
        angular.module("livemathletics.gameroom", ["livemathletics.common", "face-container", "ui.bootstrap", "angular-md5"]).controller("GameRoomController", require("82")).directive("scoreBar", require("86")).directive("gameTimer", require("84")).directive("numKeypad", require("85")).directive("alignedQuestion", require("83")).factory("playerGenerator", require("89")).factory("gameRoomFactory", require("88")).factory("countDownMsgFactory", require("87")).factory("scoreBoardFactory", require("90")).service("finaliseResult", require("97")).service("scoreBoard", require("98"))
    }, {82: 82, 83: 83, 84: 84, 85: 85, 86: 86, 87: 87, 88: 88, 89: 89, 90: 90, 97: 97, 98: 98}],
    92: [function (require, module, exports) {
        module.exports = '<div class="stage gameRoom">\n<!-- Game Room Top Division -->\n    <!--<div style="position: absolute">-->\n        <!--<button ng-click="startGame()">Start</button>-->\n        <!--<button ng-click="stopGame()">Stop</button>-->\n        <!--<button ng-click="showMobile()" >isMobile</button>-->\n    <!--</div>-->\n\n    <div class="gameQuestionSection">\n        <div class="livemathLightBlueBG gameOnlineUserBlock">\n            <!-- Online User Status Bar -->\n            <p class="onlineStatusInfoBarStyle">\n                <span>Level: </span><span class="blueText" ng-bind="currentLevel"></span>\n                <span class="tabspace"></span>\n                <span>Online: </span><span class="blueText" ng-bind="onlineUserNum"></span>\n            </p>\n        </div>\n\n        <!-- Question Bar -->\n        <div class="livemathLightBlueBG gameQuestionBlock">\n            <div class="questionInput" ng-show="gameStart===0">\n                <!-- Ready Count Down -->\n                <p class="whiteTextWithShadow font-60 readyMsgStyle" ng-bind="countDownMessage"></p>\n            </div>\n\n            <!-- Question Text and input  -->\n            <div class="question-input-div" ng-if="gameStart === 1">\n                <aligned-question class="aligned-question-dim" level-id="currentLevel" answer-input="answerInput"\n                                  submit-answer="submitAnswer" start="{{gameStart}}"\n                                  text-left="questionStringL" text-right="questionStringR">\n                </aligned-question>\n            </div>\n        </div>\n\n        <!-- Game Clock -->\n        <div class="gameClock">\n            <game-timer max-times="60" interval="1000" unit="second"\n                        current-time="gameCurrentTime"\n                        complete-timer="gameTimeout"\n                        switch="timerStatus"></game-timer>\n        </div>\n    </div>\n\n    <div class="gameScoreSection">\n        <div ng-class="scordboardStyle">\n            <div class="livemathLightBlueBG scoreBoardBG">\n                <div class="scoreBoardGirdLine"\n                     ng-repeat="i in scoreBoardScaling.repeatLen track by $index"\n                     ng-style="scoreBoardScaling.divDimension"> &nbsp;</div>\n                <div class="highScoreLine" ng-style="scoreBoardScaling.highScorePosition" ng-show="scoreBoardScaling.showHighScore"></div>\n            </div>\n\n            <!-- Game Player List vs scoreboard bars-->\n            <div class="gameScoreboard">\n                <!-- Player List (Including Me) always stays on top -->\n                <div ng-repeat="player in playerList" id="playerSpan{{$index}}" class="playerPosition{{$index}}">\n                      <span>\n                        <div class="scoreBoardUserBox">\n                            <opponent-box user="player" hide-rank="true"/>\n                        </div>\n                        <div class="scoreBoardBarBox">\n                            <score-bar user="player" max-scale="scoreBoardScaling.maxScale"/>\n                        </div>\n                      </span>\n                </div>\n            </div>\n        </div>\n\n        <div class="numpad enable_touchmove" ng-class="keypadStyle"\n             ng-show="isMobile" ng-disabled="gameStart!==1"\n             drag-enable="true" drag-boundary="{{dragBoundary}}">\n            <div class="numpad close" ng-click="hideKeypad()">\n            </div>\n            <div class="drag-indicator-top">\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n            <num-keypad linked-text-str="answerInput" submit-event="submitAnswer" ng-cancel-drag="true"\n                                                                        locked="gameStart!==1"/>\n\n            <!--<num-keypad linked-text-str="answerInput" submit-event="submitAnswer"-->\n                        <!--locked="gameStart!==1"/>-->\n\n        </div>\n    </div>\n\n    <div class="finalizeMsg" ng-show="showFinalizeMsg">\n        <div class="livemathLightBlueBG finalizeMsgBlock">\n            <p class="whiteTextWithShadow font-50 readyMsgStyle" ng-bind="finalizeMsg"></p>\n        </div>\n\n        <div class="finalizeGameClock">\n            <game-timer></game-timer>\n        </div>\n    </div>\n\n</div>\n'
    }, {}],
    93: [function (require, module, exports) {
        module.exports = '\n<div class="clock">\n    <span class="clockHand" rotate="{{secAngle}}"></span>\n    <p class="timerLabel whiteTextWithShadow font-60" ng-bind="displayTime"></p>\n</div>\n'
    }, {}],
    94: [function (require, module, exports) {
        module.exports = '<div class="button-wrapper font-28">\n    <button ng-repeat="item in keyList"\n            quick-touch="pressKey(item.value)"\n            ng-class="item.style"> {{item.label}}\n        <div ng-show="item.iconStyle" ng-class="item.iconStyle"></div>\n    </button>\n    <!--ng-cancel-drag/>-->\n</div>\n'
    }, {}],
    95: [function (require, module, exports) {
        module.exports = '<div style="width: 100%; height: 100%; position: absolute">\n    <form ng-submit="innerSubmitAnswer(innerAnswerInput)" class="question-input-form">\n        <div class="questions-text-alignment whiteTextWithShadow question-size-v{{textSizeNo}}">\n            {{leftTextFormatted}}\n            <input ng-model="innerAnswerInput" type="text" auto-focus="{{gameStart === 1 && isMobile !== \'true\'}}"\n                   number-only autocomplete="off"\n                   class="questions-input-adjustment questions-input-width-v{{inputWidthNo}}"/>\n            {{rightTextFormatted}}\n        </div>\n    </form>\n</div>\n'
    }, {}],
    96: [function (require, module, exports) {
        module.exports = '<div class="scoreBarContainer scoreBarAnimation" ng-style="myScoreProperty()" ng-show="user.score>0">\n    <div class="cssScoreBar" ng-class="user.color"></div> <!-- display for IE 9-->\n    <div class="scoreBar" ng-class="user.color"></div>\n    <div class="scoreBarLabelBox">\n        <span id="scoreBar{{user.index}}" class="whiteTextWithShadow font-40 scoreBarLabel" ng-bind="user.score"/>\n    </div>\n</div>\n'
    }, {}],
    97: [function (require, module, exports) {
        "use strict"
        function FinaliseResult(c, a, b, d) {
            "use strict"
            this.get = function (u, t, p, q, r, k, l, s, o) {
                var g = a.defer()
                var m = "FinaliseResult"
                var h = b.getConfigValue("userToken")
                if (h === "" || h === null) {
                    return a.reject("token is empty")
                }
                var i = b.getConfigValue("FinaliseService")
                if (i === "" || i === null) {
                    return a.reject("FinaliseService is empty")
                }
                var n = e(o)
                var f = {}
                f.UserAuthToken = h
                f.LevelID = u
                f.TotalTime = p
                f.Attempts = q
                f.IsComputerPlayerOnly = t
                f.OperationEnum = r
                f.MatchId = k
                f.UserScore = {Score: l, Status: s}
                f.SessionID = null
                f.bonusLevelIncremented = false
                f.EventID = b.getEventID()
                f.Hash = d.createHash(k + "-" + l + "-" + f.UserScore.Status + "-" + n)
                var j = c.post(i + "/" + m, {request: f})
                j.success(function (a, b, c, d, e) {
                    if (a !== undefined && a !== null && a.hasOwnProperty("d")) {
                        g.resolve(a.d)
                    } else {
                        g.reject("empty data")
                    }
                }).error(function (b, a, c, d) {
                    g.reject(a)
                })
                return g.promise
            }
            function e(b) {
                var a = b || "333"
                a = a.substr(a.length - 3)
                if (a === "000") {
                    a = "333"
                }
                return b % a
            }
        }

        FinaliseResult.$inject = ["$http", "$q", "configDataFactory", "md5"]
        module.exports = FinaliseResult
    }, {}],
    98: [function (require, module, exports) {
        "use strict"
        function ScoreBoard(c, a, b) {
            "use strict"
            this.update = function (j, m, l, k) {
                var e = a.defer()
                var i = "UpdateScoreBoard"
                var g = b.getConfigValue("userToken")
                if (g === "" || g === null) {
                    return a.reject("token is empty")
                }
                var f = b.getConfigValue("ScoreBoardService")
                if (f === "" || f === null) {
                    return a.reject("ScoreBoardService is empty")
                }
                var d = {}
                d.UserAuthToken = g
                d.MatchId = j
                d.UserScore = {Score: m, Status: l}
                d.SequenceCounter = k
                var h = c.post(f + "/" + i, {request: d})
                h.success(function (a, b, c, d) {
                    if (a !== undefined && a !== null && a.hasOwnProperty("d")) {
                        e.resolve(a.d)
                    } else {
                        e.resolve(null)
                    }
                }).error(function (b, a, c, d) {
                    e.resolve(a)
                })
                return e.promise
            }
        }

        ScoreBoard.$inject = ["$http", "$q", "configDataFactory"]
        module.exports = ScoreBoard
    }, {}],
    99: [function (require, module, exports) {
        "use strict"
        function levelDescriptorController(a, c, d, b, e) {
            "use strict"
            function f() {
                var d = c.level
                if (b && b.length && b.length >= d) {
                    a.headingText = "What's in level " + d + "?"
                    var f
                    f = b[d - 1]
                    g(f)
                } else {
                    e.history.back()
                }
            }

            f()
            function g(b) {
                if (b && b.levelItems && b.levelItems.length > 0) {
                    if (b.levelItems.length > 12) {
                        a.displayCategoryList = b.levelItems.slice(0, 12)
                    } else {
                        a.displayCategoryList = b.levelItems
                    }
                } else {
                    a.displayCategoryList = []
                    d.error("level data is undefined on level descriptor")
                }
            }
        }

        levelDescriptorController.$inject = ["$scope", "$stateParams", "$log", "questionLevelList", "$window"]
        module.exports = levelDescriptorController
    }, {}],
    100: [function (require, module, exports) {
        "use strict"
        function levelDescriptorDirective(d) {
            "use strict"
            var a = {link: c, template: require("103"), scope: {levelItem: "="}, restrict: "EA"}
            return a
            function c(a) {
                a.imageModel = ""
                a.label = "Check"
                a.buttonClicked = false
                a.altText = ""
                a.$watch("levelItem", function () {
                    b(a)
                })
                a.check = function () {
                    if (a.label === "try") {
                        a.label = "Check"
                        a.imageModel = "imageModel-empty"
                        a.buttonClicked = false
                        if (a.inputValue !== "") {
                            a.inputValue = ""
                        }
                        b(a)
                    } else {
                        if (a.inputValue === a.answer.toString()) {
                            a.imageModel = "imageModel-correct"
                        } else {
                            a.imageModel = "imageModel-wrong"
                        }
                        a.label = "try"
                        a.buttonClicked = true
                    }
                }
            }

            function b(a) {
                a.question = a.levelItem.getRandomQuestion().generateQuestion()
                a.questionText = a.question.questionText || ""
                a.questionText = a.questionText.replace(/\\n/g, " ").replace(/_____/g, " ? ")
                a.answer = a.question.answer
            }
        }

        levelDescriptorDirective.$inject = ["$log"]
        module.exports = levelDescriptorDirective
    }, {103: 103}],
    101: [function (require, module, exports) {
        "use strict"
        angular.module("livemathletics.leveldescriptor", []).controller("levelDescriptorController", require("99")).directive("levelDescriptorDirective", require("100"))
    }, {100: 100, 99: 99}],
    102: [function (require, module, exports) {
        module.exports = '<div class="levelDescriptorExpandingPanel scrolling-container">\n    <h4 class="bold">{{headingText}}</h4>\n    <div class="question-block enable_touchmove" data-ng-repeat="questionSet in displayCategoryList">\n        <level-descriptor-directive level-item="questionSet"></level-descriptor-directive>\n    </div>\n</div>\n'
    }, {}],
    103: [function (require, module, exports) {
        module.exports = '<div class=" levelDescriptorDirectiveItem">\n    <h6 class="titleText">{{levelItem.contentName}}</h6>\n\n    <div class="questionContainer">\n        <div>\n            <h5>{{questionText}}</h5>\n            <input class="answerInputTextBox" type="text" ng-disabled="buttonClicked" ng-model="inputValue">\n            <button type="button" class="btn btn-primary btn-xs" quick-touch="check()">{{label}}</button>\n        </div>\n        <div id="answerImg" class="{{imageModel}}"/>\n    </div>\n</div>\n\n\n\n'
    }, {}],
    104: [function (require, module, exports) {
        "use strict"
        angular.module("livemaths.log", ["angulartics", "angulartics.flurry"]).service("Log", require("105"))
    }, {105: 105}],
    105: [function (require, module, exports) {
        "use strict"
        function logFn(d) {
            "use strict"
            var g, a
            var b = {error: false, info: false, log: false, warn: false, debug: false}
            var e = {
                error: function b() {
                    a = [].slice.call(arguments)
                    c("error", a)
                }, warn: function b() {
                    a = [].slice.call(arguments)
                    c("warn", a)
                }, info: function b() {
                    a = [].slice.call(arguments)
                    c("info", a)
                }, log: function (a) {
                    function b() {
                        return a.apply(this, arguments)
                    }

                    b.toString = function () {
                        return a.toString()
                    }
                    return b
                }(function () {
                    a = [].slice.call(arguments)
                    c("log", a)
                }), debug: function b() {
                    a = [].slice.call(arguments)
                    c("debug", a)
                }, enabled: false, "switch": b, setupSwitch: f
            }

            function f(a) {
                a = a.toLowerCase()
                if (a.indexOf("e") >= 0) {
                    b.error = true
                }
                if (a.indexOf("l") >= 0) {
                    b.log = true
                }
                if (a.indexOf("i") >= 0) {
                    b.info = true
                }
                if (a.indexOf("d") >= 0) {
                    b.debug = true
                }
                if (a.indexOf("w") >= 0) {
                    b.warn = true
                }
            }

            function c(e, j) {
                var a = []
                var b = new Date
                var f = b.getHours()
                var g = b.getMinutes()
                var h = b.getSeconds()
                var i = b.getMilliseconds()
                angular.forEach(j, function (b) {
                    if (typeof b === "object") {
                        b = JSON.stringify(b)
                    }
                    a.push(b)
                })
                var c = {type: e, time: f + ":" + g + ":" + h + ":" + i, message: a.join("\n")}
                if (typeof a[0] === "object") {
                    a[0] = e
                }
                try {
                    switch (e) {
                        case"error":
                            d.eventTrack("ERROR: " + a[0], c)
                            break
                        case"warn":
                            d.eventTrack("WARN: " + a[0], c)
                            break
                        case"info":
                        case"log":
                            d.eventTrack(a[0], c)
                            break
                    }
                } catch (a) {
                }
            }

            return e
        }

        logFn.$inject = ["$analytics"]
        module.exports = logFn
    }, {}],
    106: [function (require, module, exports) {
        "use strict"
        function mainController(a, b, g, h, e, m, d) {
            "use strict"
            a.$on("$destroy", function () {
                g.cleanUp()
            })
            a.exit = j
            a.backToStudent = i
            a.backToParentState = f
            a.closeMessage = c
            function k(a) {
                switch (a) {
                    case"invalidtoken":
                        return [{label: "Relogin", callback: "exit"}]
                    case"exit":
                        return [{label: "Exit", callback: "backToStudent"}]
                    case"back":
                        return [{label: "Back", callback: "backToParentState"}]
                    default:
                        return [{label: "Close", callback: "closeMessage"}]
                }
                return null
            }

            function n() {
                g.promise().then(null, null, o)
            }

            n()
            function o(c) {
                if (c && c.hasOwnProperty("messageType")) {
                    if (m.getConfigValue("isDebugMode") === true) {
                        var d = k(c.messageType)
                        if (d !== null) {
                            c.buttonList = d
                        }
                    } else {
                        b.debug("messageHandler: ", c.messageType)
                        switch (c.messageType) {
                            case"invalidtoken":
                                j()
                                break
                            case"exit":
                                i()
                                break
                            case"back":
                                f()
                                break
                        }
                        return
                    }
                }
                a.messageData = c
            }

            function c() {
                a.messageData = undefined
            }

            function i() {
                b.debug("maincontroller:  back")
                c()
                d.allowSwitch = true
                e.exit()
            }

            function j() {
                b.debug("maincontroller: logout")
                c()
                d.allowSwitch = true
                e.exit()
            }

            function f() {
                b.debug("maincontroller: back to parent")
                c()
                d.allowSwitch = true
                var a = l()
                h.go(a)
            }

            function l() {
                switch (h.current.name) {
                    case"splashscreen":
                        return "login"
                    default:
                        return "splashscreen"
                }
            }
        }

        mainController.$inject = ["$scope", "$log", "sessionManager", "$state", "navigationService", "configDataFactory", "stateHandler"]
        module.exports = mainController
    }, {}],
    107: [function (require, module, exports) {
        "use strict"
        angular.module("livemathletics.main", ["livemathletics.common"]).controller("MainController", require("106"))
    }, {106: 106}],
    108: [function (require, module, exports) {
        "use strict"
        function matchTypeEnum() {
            "use strict"
            var a = 0
            var b = 1
            var c = 2
            var d = 3
            var e = {WORLD: a, COMPUTER: b, CLASS: c, SCHOOL: d, getMatchTypeByName: f, isValid: g}
            return e
            function f(e) {
                switch (e) {
                    case"World":
                        return a
                    case"Computer":
                        return b
                    case"School":
                        return d
                    case"Class":
                        return c
                }
            }

            function g(a) {
                if (a === undefined || a === null || a < 0 || a > 3) {
                    return false
                }
                return true
            }
        }

        matchTypeEnum.$inject = []
        module.exports = matchTypeEnum
    }, {}],
    109: [function (require, module, exports) {
        "use strict"
        function matchEngineFactory(x, l, h, z, a, m, p, n) {
            "use strict"
            var B = 3
            var q = 2e3
            var b
            var e
            var d = false
            var i, k, v, g
            return {findMatchByType: w, promise: A, getMatchResponse: E, isComputerPlay: F, cleanUp: o, switchToGame: y}
            function o() {
                d = false
                b = h.cancelDelayCallBack(b)
                C()
            }

            function A() {
                return f().promise
            }

            function f() {
                if (e === undefined) {
                    e = x.defer()
                }
                return e
            }

            function C() {
                if (e !== undefined) {
                    e.reject(null)
                    e = undefined
                }
            }

            function w(h, b, e, f) {
                if (d === true) {
                    return
                }
                d = true
                l.debug("findMatchByType", h, b, e, f)
                g = undefined
                i = h
                k = b
                v = f
                switch (i) {
                    case a.WORLD:
                        m.find(b, e).then(j, c)
                        break
                    case a.COMPUTER:
                        m.find(b, e, true).then(j, c)
                        break
                    case a.SCHOOL:
                        n.find(b, e).then(j, c)
                        break
                    case a.CLASS:
                        p.find(b, e, f).then(j, c)
                        break
                }
                return
            }

            function j(b) {
                if (b === undefined || b === null) {
                    c()
                    return
                }
                l.debug("findMatchSuccess ")
                switch (i) {
                    case a.SCHOOL:
                    case a.CLASS:
                        r()
                        break
                    default:
                        t(b)
                        break
                }
                return
            }

            function r() {
                switch (i) {
                    case a.SCHOOL:
                        n.get(k).then(s, c)
                        break
                    case a.CLASS:
                        p.get(k, v).then(s, c)
                        break
                }
                return
            }

            function s(a) {
                l.debug("getMatchSuccess ")
                b = h.cancelDelayCallBack(b)
                if (a.HasGameCreated && a.HasGameCreated === true) {
                    t(a)
                } else {
                    b = h.setDelayCallBack(q, b, r)
                }
                return
            }

            function t(c) {
                g = c
                D(c.ScoreBoardServiceUri)
                var a = 0
                if (c.hasOwnProperty("StartOffset")) {
                    a = Number(c.StartOffset)
                    if (isNaN(a)) {
                        a = 0
                    }
                }
                if (a > 0) {
                    b = h.setDelayCallBack(a, b, u)
                } else {
                    u()
                }
                return
            }

            function u() {
                d = false
                f().resolve(g)
                return
            }

            function c(a) {
                d = false
                if (a !== 407) {
                    f().reject("Unable to retrieve a match. Please try again later")
                } else {
                    f().resolve(null)
                }
                return
            }

            function D(a) {
                if (a !== null && a !== "") {
                    z.updateEndpoint("ScoreBoardService", a, {remove: /Gateway.aspx/gi, add: "ScoreBoardService.asmx"})
                }
                return
            }

            function E() {
                return g
            }

            function F(b) {
                return b === a.COMPUTER
            }

            function y(e, f, b, c) {
                o()
                if (!b) {
                    return
                }
                var a = "gameroom"
                if (c.current.name != a) {
                    var d = {level: e, matchResponse: b, matchType: f}
                    c.go(a, d)
                }
            }
        }

        matchEngineFactory.$inject = ["$q", "$log", "delayFactory", "configDataFactory", "matchTypeEnum", "match", "classroomMatch", "schoolMatch"]
        module.exports = matchEngineFactory
    }, {}],
    110: [function (require, module, exports) {
        "use strict"
        angular.module("livemathletics.matchEngine", ["livemathletics.common"]).factory("matchTypeEnum", require("108")).factory("matchEngineFactory", require("109")).service("classroomMatch", require("111")).service("match", require("112")).service("schoolMatch", require("113"))
    }, {108: 108, 109: 109, 111: 111, 112: 112, 113: 113}],
    111: [function (require, module, exports) {
        "use strict"
        function ClassroomMatch(c, a, b) {
            "use strict"
            this.find = function (l, m, k, h) {
                var e = a.defer()
                var j = "ClassroomFindMatch"
                if (k < 0) {
                    return a.reject("invalid classID")
                }
                var g = b.getConfigValue("userToken")
                if (g === "" || g === null) {
                    return a.reject("token is empty")
                }
                var f = b.getConfigValue("ClassroomMatchService")
                if (f === "" || f === null) {
                    return a.reject("ClassroomMatchService is empty")
                }
                var d = {IsComputerPlayerOnly: false, CultureCode: null}
                d.UserAuthToken = g
                d.GameLevel = l
                d.Speed = m
                d.ClassroomID = k
                if (h === true) {
                    d.IsComputerPlayerOnly = h
                }
                var i = c.post(f + "/" + j, {request: d})
                i.success(function (a, b, c, d) {
                    if (a && a.d) {
                        if (a.d.IsError === false) {
                            e.resolve(a.d)
                        } else {
                            e.reject("match failed")
                        }
                    } else {
                        e.reject("invalid response object")
                    }
                }).error(function (b, a, c, d) {
                    e.reject(a)
                })
                return e.promise
            }
            this.get = function (j, k) {
                var f = b.getConfigValue("userToken")
                if (f === "" || f === null) {
                    return a.reject("token is empty")
                }
                var g = b.getConfigValue("ClassroomMatchService")
                if (g === "" || g === null) {
                    return a.reject("ClassroomMatchService is empty")
                }
                var d = a.defer()
                var h = "ClassroomGetMatch"
                var e = {}
                e.UserAuthToken = f
                e.GameLevel = j
                e.ClassroomID = k
                var i = c.post(g + "/" + h, {request: e})
                i.success(function (a, b, c, e) {
                    if (a && a.d) {
                        if (a.d.IsError === false) {
                            d.resolve(a.d)
                        } else {
                            d.reject("match failed")
                        }
                    } else {
                        d.reject("invalid response object")
                    }
                }).error(function (b, a, c, e) {
                    d.reject(a)
                })
                return d.promise
            }
        }

        ClassroomMatch.$inject = ["$http", "$q", "configDataFactory"]
        module.exports = ClassroomMatch
    }, {}],
    112: [function (require, module, exports) {
        "use strict"
        function Match(c, a, b) {
            "use strict"
            this.find = function (k, l, h) {
                var f = b.getConfigValue("userToken")
                if (f === "" || f === null) {
                    return a.reject("token is empty")
                }
                var g = b.getConfigValue("MatchService")
                if (g === "" || g === null) {
                    return a.reject("MatchService is empty")
                }
                var d = a.defer()
                var i = "FindMatch"
                var e = {IsComputerPlayerOnly: false, CultureCode: null}
                e.UserAuthToken = f
                e.GameLevel = k
                e.Speed = l
                if (h === true) {
                    e.IsComputerPlayerOnly = h
                }
                var j = c.post(g + "/" + i, {request: e})
                j.success(function (a, b, c, e) {
                    if (a && a.d) {
                        if (a.d.IsError === false) {
                            d.resolve(a.d)
                        } else {
                            d.reject("match failed")
                        }
                    } else {
                        d.reject("invalid response object")
                    }
                }).error(function (b, a, c, e) {
                    d.reject(a)
                })
                return d.promise
            }
        }

        Match.$inject = ["$http", "$q", "configDataFactory"]
        module.exports = Match
    }, {}],
    113: [function (require, module, exports) {
        "use strict"
        function SchoolMatch(c, a, b) {
            "use strict"
            this.find = function (k, l, h) {
                var d = a.defer()
                var i = "SchoolFindMatch"
                var f = b.getConfigValue("userToken")
                if (f === "" || f === null) {
                    return a.reject("token is empty")
                }
                var g = b.getConfigValue("SchoolMatchService")
                if (g === "" || g === null) {
                    return a.reject("SchoolMatchService is empty")
                }
                var e = {IsComputerPlayerOnly: false, CultureCode: null}
                e.UserAuthToken = f
                e.GameLevel = k
                e.Speed = l
                if (h === true) {
                    e.IsComputerPlayerOnly = h
                }
                var j = c.post(g + "/" + i, {request: e})
                j.success(function (a, b, c, e) {
                    if (a && a.d) {
                        if (a.d.IsError === false) {
                            d.resolve(a.d)
                        } else {
                            d.reject("match failed")
                        }
                    } else {
                        d.reject("invalid response object")
                    }
                }).error(function (b, a, c, e) {
                    d.reject(a)
                })
                return d.promise
            }
            this.get = function (j) {
                var e = b.getConfigValue("userToken")
                if (e === "" || e === null) {
                    return a.reject("token is empty")
                }
                var f = b.getConfigValue("SchoolMatchService")
                if (f === "" || f === null) {
                    return a.reject("SchoolMatchService is empty")
                }
                var d = a.defer()
                var h = "SchoolGetMatch"
                var g = {}
                g.UserAuthToken = e
                g.GameLevel = j
                var i = c.post(f + "/" + h, {request: g})
                i.success(function (a, b, c, e) {
                    if (a && a.d) {
                        if (a.d.IsError === false) {
                            d.resolve(a.d)
                        } else {
                            d.reject("match failed")
                        }
                    } else {
                        d.reject("invalid response object")
                    }
                }).error(function (b, a, c, e) {
                    d.reject(a)
                })
                return d.promise
            }
        }

        SchoolMatch.$inject = ["$http", "$q", "configDataFactory"]
        module.exports = SchoolMatch
    }, {}],
    114: [function (require, module, exports) {
        "use strict"
        function mockBridge(b) {
            var a = []

            function c(c, d) {
                a.push(c)
                b[c] = d
            }

            return {
                call: function a() {
                }, addListener: function a() {
                }, listener: {}
            }
        }

        mockBridge.$inject = ["$window"]
        module.exports = mockBridge
    }, {}],
    115: [function (require, module, exports) {
        "use strict"
        function navigationService(b, c, a) {
            return {exit: d}
            function d(e) {
                e = {message: e || "back from splash"}
                b.debug("exit live math")
                var d = a.getConfigValue("studentCentreUrl")
                if (d) {
                    d += "?userToken=" + a.getConfigValue("userToken")
                    if (a.getConfigValue("lang")) {
                        d += "&lang=" + a.getConfigValue("lang")
                    }
                    c.open(d, "_self")
                }
            }
        }

        navigationService.$inject = ["$log", "$window", "configDataFactory"]
        module.exports = navigationService
    }, {}],
    116: [function (require, module, exports) {
        "use strict"
        angular.module("livemathletics.navigation", []).factory("bridge", require("114")).factory("navigationService", require("115"))
    }, {114: 114, 115: 115}],
    117: [function (require, module, exports) {
        "use strict"
        angular.module("platform", ["ngStorage"]).factory("liveMathsCache", require("118")).factory("mobileDetector", require("119")).constant("projectSettings", require("120"))
    }, {118: 118, 119: 119, 120: 120}],
    118: [function (require, module, exports) {
        "use strict"
        function liveMathsCache(c, a) {
            "use strict"
            var b = function b(d) {
                for (var c in d) {
                    a[c] = d[c]
                }
            }
            return {
                get: function b(c) {
                    return a[c] || ""
                }, set: function b(c, d) {
                    a[c] = d
                }, remove: function b(c) {
                    delete a[c]
                }, addConfigSet: b
            }
        }

        liveMathsCache.$inject = ["$window", "$sessionStorage"]
        module.exports = liveMathsCache
    }, {}],
    119: [function (require, module, exports) {
        "use strict"
        function mobileDetector(d, b) {
            "use strict"
            var c
            return {
                setDevice: i,
                skipBackButtonDelay: f,
                useGameRoomKeypad: g,
                showDeviceBackButtonStyle: h,
                isMobileApp: j
            }
            function i(a) {
                c = a === true || a === "true"
            }

            function j() {
                return false
            }

            function f() {
                return false
            }

            function g() {
                if (e() === true || c === true) {
                    return true
                }
                return false
            }

            function h() {
                if (e() === true || c === true) {
                    return true
                }
                return false
            }

            function e() {
                if ("ontouchstart" in b || b.navigator.maxTouchPoints > 0 || b.navigator.msMaxTouchPoints > 0) {
                    d.debug("has Touch")
                    return true
                } else {
                    d.debug("has no Touch")
                    return false
                }
            }

            function a() {
                return b.navigator.userAgent
            }

            function k() {
                return a().match(/Android/i)
            }

            function l() {
                return a().match(/BlackBerry/i)
            }

            function m() {
                return a().match(/iPhone|iPad|iPod/i)
            }

            function n() {
                return a().match(/Opera Mini/i)
            }

            function o() {
                return a().match(/IEMobile/i)
            }

            function p() {
                return k() || l() || m() || n() || o()
            }
        }

        mobileDetector.$inject = ["$log", "$window"]
        module.exports = mobileDetector
    }, {}],
    120: [function (require, module, exports) {
        "use strict"
        var projectSettings = {https: false}
        module.exports = projectSettings
    }, {}],
    121: [function (require, module, exports) {
        "use strict"
        function LiveMathReportController(a, c, b) {
            "use strict"
            a.resultList = b
        }

        LiveMathReportController.$inject = ["$scope", "$log", "reportData"]
        module.exports = LiveMathReportController
    }, {}],
    122: [function (require, module, exports) {
        module.exports = '<div class="myResultBox">\n    <table class="myResultTable">\n        <thead>\n        <tr>\n            <th>Level</th>\n            <th>Correct</th>\n            <th>Games Played</th>\n            <th>Accuracy</th>\n            <th>High Score</th>\n            <th>Rank</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat="resultItem in resultList">\n            <td><span ng-bind="resultItem.LevelID"></span></td>\n            <td><span ng-bind="resultItem.Correct"></span></td>\n            <td><span ng-bind="resultItem.GamesPlayed"></span></td>\n            <td><span ng-bind="resultItem.Accuracy"></span></td>\n            <td><span ng-bind="resultItem.HighScore"></span></td>\n            <td><span ng-bind="resultItem.Rank"></span></td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n\n'
    }, {}],
    123: [function (require, module, exports) {
        "use strict"
        angular.module("livemathletics.report", []).controller("LiveMathReportController", require("121"))
    }, {121: 121}],
    124: [function (require, module, exports) {
        "use strict"
        function GameResultController(b, h, d, e, c, f, g) {
            "use strict"
            b.$on("$stateChangeStart", c.changeStateHandler)
            c.allowSwitch = false
            b.playAgainClicked = k
            b.exitClicked = n
            j()
            var a

            function j() {
                i()
                b.level = d.level
                b.usersOnline = d.onlineUsers
                b.gameResults = d.results
                f.init(d.level, d.playType, d.players, d.resultData)
                b.scoreSummary = f.getScoreSummary()
                b.shopCredits = f.getCreditSummary()
                b.userList = f.getUserRankList()
            }

            function k() {
                h.info("gameresult.playAgainClicked")
                a = f.getPlayAgainMatchInfo()
                var d = g.isComputerPlay(a.matchType)
                if (d === true) {
                    g.promise().then(m, l)
                    g.findMatchByType(a.matchType, a.level, a.rank, a.classId)
                } else {
                    var b = "searchroom"
                    if (e.current.name != b) {
                        c.allowSwitch = true
                        c.addHistoryStep(e)
                        e.go(b, a)
                    }
                }
            }

            function l(a) {
                h.error(a)
                c.backToSplash()
            }

            function m(b) {
                c.allowSwitch = true
                c.addHistoryStep(e)
                g.switchToGame(a.level, a.matchType, b, e)
            }

            function n() {
                h.info("gameresult.exitClicked")
                c.backToSplash()
            }

            function i() {
                a = undefined
            }
        }

        GameResultController.$inject = ["$scope", "$log", "$stateParams", "$state", "stateHandler", "gameResultFactory", "matchEngineFactory"]
        module.exports = GameResultController
    }, {}],
    125: [function (require, module, exports) {
        "use strict"
        function opponentBox(a, b) {
            "use strict"
            return {
                scope: {press: "=", user: "=", hideRank: "="},
                restrict: "AE",
                template: require("131"),
                link: function c(d, f, g) {
                    d.faceAssetBasePath = b.getConfigValue("faceAssetBasePathPngs") || ""
                    a.debug("User Rank  -------------  " + d.user.rank)
                    d.withRankStyle = e(d.hideRank)
                    function e(a) {
                        if (a === false) {
                            return "gameresult-opp"
                        }
                        return "gameroom-opp"
                    }

                    d.rankString = function (a) {
                        if (a.incorrect === 3) {
                            return "out"
                        } else {
                            switch (a.rank) {
                                case 1:
                                    return "1st"
                                case 2:
                                    return "2nd"
                                case 3:
                                    return "3rd"
                                case 4:
                                    return "4th"
                            }
                        }
                    }
                }
            }
        }

        opponentBox.$inject = ["$log", "configDataFactory"]
        module.exports = opponentBox
    }, {131: 131}],
    126: [function (require, module, exports) {
        "use strict"
        function playAgainBox(a) {
            "use strict"
            return {
                scope: {gameResult: "=", playAgain: "=", exit: "="},
                restrict: "AE",
                template: require("132"),
                link: function b(c, d, e) {
                    c.$watch("gameResult", function (b) {
                        a.debug(b)
                    })
                }
            }
        }

        playAgainBox.$inject = ["$log"]
        module.exports = playAgainBox
    }, {132: 132}],
    127: [function (require, module, exports) {
        "use strict"
        function results(a) {
            "use strict"
            return {
                scope: {press: "=", gameResults: "="},
                restrict: "AE",
                template: require("133"),
                link: function a(b, c, d) {
                    b.$watch("gameResults", function (b) {
                        for (var a = 0; a < b.length; a++) {
                            var c = b[a].question.questionText.split("_____")
                            b[a].question.questionLeft = c[0]
                            b[a].question.RightLeft = c[1]
                        }
                    })
                    b.cleanString = function (a) {
                        if (a) {
                            var b = a.replace(/\\n/gi, " ")
                            return b
                        }
                        return ""
                    }
                }
            }
        }

        results.$inject = ["$log"]
        module.exports = results
    }, {133: 133}],
    128: [function (require, module, exports) {
        "use strict"
        function shopCreditsBox(a) {
            return {
                scope: {faceAssetBasePath: "@faceBasePath", avatar: "@avatarStr", shopCredits: "="},
                restrict: "ACE",
                replace: true,
                transclude: false,
                template: require("134"),
                link: b
            }
            function b(b, f, g) {
                b.showCreditsDialogue = false
                b.closeShopCreditsDialogue = d
                b.certificateVisible = false
                b.highScoreVisible = false
                b.gameWonVisible = false
                b.certificateClass = null
                b.isGoldCertificate = false
                b.isSilverCertificate = false
                b.isBronzeCertificate = false
                b.totalCredits = {msg: "Total Credits", point: null}
                e(b.shopCredits)
                a.debug("shopCreditsBox-directive::scope.avatar: " + b.avatar)
                a.debug("shopCreditsBox-directive::scope.faceAssetBasePath: " + b.faceAssetBasePath)
                function d() {
                    b.showCreditsDialogue = false
                }

                function e(a) {
                    b.totalCredits.point = "= " + a
                    if (a > 0) {
                        b.showCreditsDialogue = true
                    }
                    if (a >= 100 && a < 150) {
                        c(b, "certificateBronze", "= 100")
                        if (a == 110) {
                            c(b, "highscore", "= 10")
                        } else if (a == 115) {
                            c(b, "highscore", "= 10")
                            c(b, "gamepoints", "= 5")
                        }
                    } else if (a >= 150 && a < 250) {
                        c(b, "certificateSilver", "= 150")
                        if (a == 160) {
                            c(b, "highscore", "= 10")
                        } else if (a == 165) {
                            c(b, "highscore", "= 10")
                            c(b, "gamepoints", "= 5")
                        }
                    } else if (a >= 250) {
                        c(b, "certificateGold", "= 250")
                        if (a == 260) {
                            c(b, "highscore", "= 10")
                        } else if (a == 265) {
                            c(b, "highscore", "= 10")
                            c(b, "gamepoints", "= 5")
                        }
                    } else if (a == 15) {
                        c(b, "highscore", "= 10")
                        c(b, "gamepoints", "= 5")
                    } else if (a == 10) {
                        c(b, "highscore", "= 10")
                    } else if (a == 5) {
                        c(b, "gamepoints", "= 5")
                    }
                }

                function c(a, i, d) {
                    var b = ""
                    var c = 0
                    var e = ""
                    var f = 0
                    var g = ""
                    var h = ""
                    switch (i) {
                        case"certificateBronze":
                            a.certificateVisible = true
                            b = "You have earned a Bronze certificate"
                            c = d
                            a.isBronzeCertificate = true
                            a.certificate = {msg: b, point: c}
                            a.certificateClass = "shopCreditsCertBronze"
                            break
                        case"certificateSilver":
                            a.certificateVisible = true
                            b = "You have earned a Silver certificate"
                            c = d
                            a.isSilverCertificate = true
                            a.certificate = {msg: b, point: c}
                            a.certificateClass = "shopCreditsCertSilver"
                            break
                        case"certificateGold":
                            a.certificateVisible = true
                            b = "You have earned a Gold certificate"
                            c = d
                            a.isGoldCertificate = true
                            a.certificate = {msg: b, point: c}
                            a.certificateClass = "shopCreditsCertGold"
                            break
                        case"highscore":
                            a.highScoreVisible = true
                            e = "You have achieved a High Score"
                            f = d
                            a.highscore = {msg: e, point: f}
                            break
                        case"gamepoints":
                            a.gameWonVisible = true
                            g = "You won a game"
                            h = d
                            a.gamePoints = {msg: g, point: h}
                            break
                        default:
                            break
                    }
                }
            }
        }

        shopCreditsBox.$inject = ["$log"]
        module.exports = shopCreditsBox
    }, {134: 134}],
    129: [function (require, module, exports) {
        "use strict"
        function gameResultFactory(m, k, e, n, o) {
            var j = ["1st", "2nd", "3rd", "4th", "out"]
            var f = 3
            var a, b, g, h, d, i, c
            return {init: p, getPlayAgainMatchInfo: w, getScoreSummary: u, getCreditSummary: t, getUserRankList: v}
            function p(m, n, f, j) {
                l()
                a = m
                b = n
                i = e.getUserProfile()
                if (!m) {
                    return
                }
                c = e.getLevelInfoById(a)
                if (!j || !f || f.length < 1 || !f[0]) {
                    return
                }
                var k = f[0]
                g = q(k, j, b)
                h = r(k, j)
                d = s(f, j.UserPointLevelCollection)
            }

            function q(d, f, g) {
                var b = {points: 0, correct: 0, isWhosOnline: true, highScore: c.HighScore}
                if (f && f.hasOwnProperty("PointsEarned") && f.PointsEarned > 0) {
                    b.points = f.PointsEarned
                    if (b.points > 0) {
                        o.call("appendWeeklyPoints", null, b.points)
                    }
                }
                if (d && d.hasOwnProperty("score") && d.score > 0) {
                    b.correct = d.score
                    if (b.correct > b.highScore) {
                        e.updateHighScore(a, b.correct)
                        b.highScore = b.correct
                    }
                }
                if (a && g && g.hasOwnProperty("matchType")) {
                    b.isWhosOnline = false
                    if (g.hasOwnProperty("isChallenge")) {
                        b.isWhosOnline = g.isChallenge === true
                    }
                }
                return b
            }

            function r(b, c) {
                var a = {credits: 0, avatar: "", faceAssetBasePath: ""}
                if (b && b.hasOwnProperty("face") && b.face) {
                    a.avatar = b.face
                }
                a.faceAssetBasePath = n.getConfigValue("faceAssetBasePathPngs") || ""
                if (c.hasOwnProperty("ShopCredits") && c.ShopCredits > 0) {
                    a.credits = c.ShopCredits
                }
                return a
            }

            function s(b, d) {
                var c, a
                for (a = 0; a < b.length; a++) {
                    if (a > 0 && d && d.length > 0) {
                        if (a <= d.length) {
                            c = d[a - 1]
                            if (c) {
                                if (c.hasOwnProperty("Score")) {
                                    b[a].score = c.Score
                                }
                                if (c.hasOwnProperty("Status") && c.Status < k.LEFT_EARLY) {
                                    b[a].incorrect = c.Status
                                }
                            }
                        }
                    }
                    if (b[a].incorrect >= f) {
                        b[a].incorrect = f
                        b[a].rankLabelIndex = 4
                    } else {
                        b[a].rankLabelIndex = 0
                    }
                }
                b = m("orderBy")(b, ["rankLabelIndex", "-score", "incorrect"])
                for (a = 0; a < b.length; a++) {
                    if (b[a].rankLabelIndex === 0) {
                        b[a].rankLabelIndex = a
                    }
                    if (b[a].rankLabelIndex !== 4 && a > 0) {
                        if (b[a].score === b[a - 1].score) {
                            b[a].rankLabelIndex = b[a - 1].rankLabelIndex
                        } else {
                            b[a].rankLabelIndex = b[a - 1].rankLabelIndex + 1
                        }
                    }
                    b[a].rank = j[b[a].rankLabelIndex]
                }
                return b
            }

            function t() {
                return h
            }

            function u() {
                return g
            }

            function v() {
                return d
            }

            function w() {
                if (!a || !b || b.hasOwnProperty("matchType") === false || b.matchType < 0) {
                    return
                }
                return {matchType: b.matchType, level: a, rank: c ? c.RankingEnum : 0, classId: i.currentClassID}
            }

            function l() {
                a = undefined
                b = undefined
                g = undefined
                h = undefined
                d = undefined
                i = undefined
                c = undefined
            }
        }

        gameResultFactory.$inject = ["$filter", "userGameStatusEnum", "liveMathsProfileFactory", "configDataFactory", "bridge"]
        module.exports = gameResultFactory
    }, {}],
    130: [function (require, module, exports) {
        module.exports = '<div class="stage gameResult">\n\n    <div class="livemathLightBlueBG gameOnlineUserBlock">\n        <!-- Online User Status Bar -->\n        <p class="onlineStatusInfoBarStyle">\n            <span>Level: </span><span class="blueText" ng-bind="level"></span>\n            <span class="tabspace"></span>\n            <span>Online: </span><span class="blueText" ng-bind="usersOnline"></span>\n        </p>\n    </div>\n\n    <div class="result-content">\n        <div class="result-left-panel">\n\n            <div class="result-opponents-block">\n                <div ng-repeat="user in userList" class="player-box">\n                    <opponent-box user="user" hide-rank="false"/>\n                </div>\n            </div>\n\n            <div class="game-summary-panel-pos">\n                <play-again-box class="game-scorepanel-background" game-result="scoreSummary"\n                                play-again="playAgainClicked"\n                                exit="exitClicked"></play-again-box>\n            </div>\n        </div>\n\n        <div class="results-data-panel" >\n            <results game-results="gameResults"></results>\n        </div>\n    </div>\n\n    <shop-credits-box shop-credits="shopCredits.credits"\n                      avatar-str="{{shopCredits.avatar}}"\n                      face-base-path="{{shopCredits.faceAssetBasePath}}"></shop-credits-box>\n\n</div>\n'
    }, {}],
    131: [function (require, module, exports) {
        module.exports = '<div class="livemathLightBlueBG opp-border" ng-class="withRankStyle">\n    <div class="opponent-rank" ng-show="!hideRank">\n        <div class="opp-rank-text font-20">{{user.rank}}</div>\n    </div>\n\n    <div class="opponentBox">\n        <div class="topBox">\n            <div class="avatarSize avatarPos">\n                <div class="avatarSize avatarBG"></div>\n                <avatar base-url="{{faceAssetBasePath}}"\n                        face-setting="{{user.face}}" scale=".3"/>\n            </div>\n\n            <div class="infoBox">\n                <span class="color-yellow font-14 opponentTextShadow" ng-bind="user.name"></span>\n                <span class="player-shadow" ng-show="(user.IsGhost)"></span><br/>\n                <span class="color-white font-12 opponentTextShadow" ng-bind="user.schoolName"></span><br/>\n                <span class="color-white font-12 opponentTextShadow">Score:{{user.score}}</span><br/>\n            </div>\n        </div>\n\n        <div class="bottomBox">\n            <div class="incorrectAnsBar">\n                <span ng-show="(user.incorrect > 0 && user.incorrect < 6)" class="incorrectAnsStyle">x</span>\n                <span ng-show="(user.incorrect > 1 && user.incorrect < 6)" class="incorrectAnsStyle">x</span>\n                <span ng-show="(user.incorrect > 2 && user.incorrect < 6)" class="incorrectAnsStyle">x</span>\n            </div>\n\n            <div ng-hide="user.flagUrl === \'\'" class="flagBox">\n                <img ng-src="{{user.flagUrl}}" />\n            </div>\n        </div>\n    </div>\n</div>\n'
    }, {}],
    132: [function (require, module, exports) {
        module.exports = '<div>\n    <table class="gameScoreTable font-14">\n        <tr class="row">\n            <td class="col-1 ms-old-shadow-style" >Game Score:</td>\n            <td class="col-2 ms-old-shadow-style">{{gameResult.correct}}</td>\n        </tr>\n        <tr class="row">\n            <td class="col-1 ms-old-shadow-style">Game Points:</td>\n            <td class="col-2 ms-old-shadow-style">{{gameResult.points}}</td>\n        </tr>\n        <tr class="row">\n            <td class="col-1 ms-old-shadow-style">High Score:</td>\n            <td class="col-2 ms-old-shadow-style">{{gameResult.highScore}}</td>\n        </tr>\n        <tr class="row buttonRow">\n            <td class="col-1">\n                <button ng-show="!gameResult.isWhosOnline" class="btn-default Button_Green buttonSize"\n                        quick-touch="playAgain()" analytics-on="click"\n                        analytics-event="Play Again From Results" analytics-category="Commands">Play Again</button>\n            </td>\n            <td class="col-2">\n                <button quick-touch="exit()" analytics-on="click" class="btn-default Button_Green buttonSize"\n                        analytics-event="Exit From Results" analytics-category="Commands">Exit</button>\n            </td>\n        </tr>\n    </table>\n\n</div>\n'
    }, {}],
    133: [function (require, module, exports) {
        module.exports = '<div class="result-page" >\n    <table class="table table-striped">\n        <thead class="header-bg">\n        <tr>\n            <th class="col-1 text-align-center"><b>Your Answers</b></th>\n            <th class="col-2 text-align-center">Results</th>\n            <th class="col-3 text-align-center">Corrections</th>\n        </tr>\n        </thead>\n\n        <tbody class="scrolling-container">\n        <tr class="enable_touchmove" ng-repeat="result in gameResults">\n            <td class="col-1 textModel-question">\n                {{cleanString(result.question.questionLeft)}}\n                <kbd>{{result.input}}</kbd>\n                {{cleanString(result.question.RightLeft)}}\n            </td>\n            <td class="col-2 text-align-center" >\n                <div class="question-result-pos {{result.isCorrect===true?\'imageModel-correct\':\'imageModel-wrong\'}}"/>\n            </td>\n            <td class="col-3 text-align-center {{result.isCorrect===true?\'textModel-correct\':\'textModel-wrong\'}}">\n                {{result.isCorrect===true?\'\':result.question.answer}}\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n\n'
    }, {}],
    134: [function (require, module, exports) {
        module.exports = '<div class="shopCreditsOverlay" ng-show="showCreditsDialogue">\n    <div class="row-shopCredits-custom1 shopCreditsDialogue ">\n\n\n        <div class="row-shopCredits-custom2">\n            <span class="shopCreditTitle">Congratulations</span>\n            <button class="btn-primary btn remove-btn btn-sm shopCreditsClose" quick-touch="closeShopCreditsDialogue()" name="remove-btn">\n                <span style="color:#FFFFFF; font-size:14px; " class="glyphicon glyphicon-remove"></span>\n            </button>\n        </div>\n\n        <!-- Left side include Face-container -->\n        <div class="shopCreditsFaceHolder">\n            <avatar ng-class="{\'face-item-custom\':true}"\n                    base-url="{{faceAssetBasePath}}" face-setting="{{avatar}}" scale=".357"/>\n        </div>\n\n        <div class="shopCreditsVSpace {{certificateClass}}" ng-show="certificateVisible"></div>\n\n        <div class="shopCreditsMessage">\n            <div class="MessageTopOffset" ng-show="certificateVisible">\n                <span class="messageTextWidth">{{certificate.msg}}</span>\n                <span>{{certificate.point}}</span>\n            </div>\n            <div class="MessageTopOffset" ng-show="highScoreVisible">\n                <span class="messageTextWidth">{{highscore.msg}}</span>\n                <span>{{highscore.point}}</span>\n            </div>\n            <div class="MessageTopOffset" ng-show="gameWonVisible">\n                <span class="messageTextWidth">{{gamePoints.msg}}</span>\n                <span>{{gamePoints.point}}</span>\n            </div>\n            <div class="MessageTopOffset">\n                <span class="messageTextWidth">{{totalCredits.msg}}</span>\n                <span>{{totalCredits.point}}</span>\n            </div>\n        </div>\n    </div>\n</div>\n'
    }, {}],
    135: [function (require, module, exports) {
        "use strict"
        angular.module("livemathletics.results", ["livemathletics.common"]).controller("GameResultController", require("124")).factory("gameResultFactory", require("129")).directive("results", require("127")).directive("playAgainBox", require("126")).directive("opponentBox", require("125")).directive("shopCreditsBox", require("128"))
    }, {124: 124, 125: 125, 126: 126, 127: 127, 128: 128, 129: 129}],
    136: [function (require, module, exports) {
        "use strict"
        function SearchRoomController(a, j, f, n, d, c, e) {
            "use strict"
            var g = "on"
            var h = "off"
            a.startGame = t
            a.$on("$stateChangeStart", e.changeStateHandler)
            e.allowSwitch = false
            var b, i, u, k
            o()
            function o() {
                p()
                a.levelID = f.level
                b = f.matchType
                i = f.rank
                k = f.classId
                c.promise().then(s, r)
                c.findMatchByType(b, a.levelID, i, k)
                if (!c.isComputerPlay(b)) {
                    q()
                }
            }

            function l(b) {
                a.searchOn = b
            }

            function q() {
                a.targetClass = d.getTargetClass(b)
                a.mapClass = d.getMapClass(b)
                a.moveClass = d.getMoveClass(b)
                a.coordinateList = d.getMapDataByType(b)
                l(g)
            }

            function r(a) {
                e.backToSplash()
                n.error(a)
            }

            function s(e) {
                var c = null
                if (e) {
                    c = d.getOpponentList(e.UserMatchList, b)
                }
                if (c === null) {
                    m(a.levelID, b, e)
                } else {
                    a.showOpponentList = c
                }
            }

            function t() {
                m(a.levelID, b, c.getMatchResponse())
            }

            function m(a, b, d) {
                l(h)
                e.allowSwitch = true
                e.addHistoryStep(j)
                c.switchToGame(a, b, d, j)
            }

            function p() {
                u = undefined
                b = undefined
                c.cleanUp()
            }
        }

        SearchRoomController.$inject = ["$scope", "$state", "$stateParams", "$log", "mapData", "matchEngineFactory", "stateHandler"]
        module.exports = SearchRoomController
    }, {}],
    137: [function (require, module, exports) {
        "use strict"
        function coordinateFinderDirective(c, a) {
            "use strict"
            var b
            return {
                restrict: "AE",
                scope: {
                    mapClass: "=",
                    defaultClass: "=",
                    moveClass: "=",
                    animateStateName: "@",
                    coordinateList: "=",
                    switchValue: "=",
                    opponentList: "=",
                    searchComplete: "="
                },
                compile: d,
                template: require("140")
            }
            function d() {
                return {pre: e, post: f}
            }

            function e(c) {
                a.debug("coordinateFinderDirectivePre")
                c.imageSizeLoaded = d
                function d(c, d) {
                    b = {x: c * -.5, y: d * -.5}
                    a.debug("move origin offset: (w=" + c + ", h=" + d + ")")
                }
            }

            function f(d) {
                a.debug("coordinateFinderDirectiveLink")
                d.clickChangePosition = F
                var v = d.$watch("coordinateList", G)
                d.$watch("switchValue", K)
                d.$watch("opponentList", J)
                d.$on("$destroy", N)
                d.showOppAnimated = false
                var g, e

                function s() {
                    if (d.moveClass !== undefined && d.moveClass !== null) {
                        d.animateState = d.moveClass
                    } else {
                        d.animateState = null
                    }
                }

                var f = -1
                var w = 2
                var o = 1.5
                var z = 1
                var A = 1
                var n = E("#moveItem")

                function F(a) {
                    if (!m()) {
                        var c = l({x: a.offsetX, y: a.offsetY}, b)
                        s()
                        r(c, {transitionTime: o})
                    }
                }

                function G(b) {
                    if (d.coordinateList !== undefined) {
                        e = d.coordinateList
                        a.debug("coordinateListChanged: ", e.length)
                        if (m()) {
                            t()
                        }
                        v()
                    }
                }

                function K(b) {
                    a.debug("switch = ", d.switchValue)
                    if (m()) {
                        t()
                    } else {
                        i()
                    }
                }

                function N() {
                    i()
                    TweenLite.killTweensOf(n)
                }

                function C(d) {
                    var b = true
                    a:while (b) {
                        a = undefined
                        b = false
                        var c = d
                        var a = Math.floor(Math.random() * c)
                        if (a !== f) {
                            f = a
                            return a
                        }
                        d = c
                        b = true
                        continue a
                    }
                }

                function m() {
                    return d.switchValue === "on"
                }

                function E(a) {
                    return angular.element($(a))[0]
                }

                var k

                function l(d, e) {
                    if (!d) {
                        return
                    }
                    var b = 0, c = 0
                    if (d.x) {
                        b = Number(d.x)
                    }
                    if (d.y) {
                        c = Number(d.y)
                    }
                    if (e) {
                        if (e.x) {
                            b += e.x
                        }
                        if (e.y) {
                            c += e.y
                        }
                    }
                    var f = {left: b + "px", top: c + "px"}
                    if (k === undefined || k.x === undefined) {
                        f.animateDir = b
                    } else {
                        f.animateDir = b - k.x
                    }
                    k = {x: b, y: c}
                    a.debug("move to: {x: '", b, "' y:'", c, "'},")
                    return f
                }

                function I() {
                    var a = e.length
                    if (a > 1) {
                        f = C(e.length)
                        d.currentCountryInfo = e[f]
                        return l(d.currentCountryInfo, b)
                    } else if (a > 0) {
                        f = 0
                        d.currentCountryInfo = e[f]
                        return l(d.currentCountryInfo, b)
                    }
                }

                function r(b, c) {
                    i()
                    if (b && c) {
                        var d = 0
                        for (var a in c) {
                            if (a === "transitionTime") {
                                d = c[a]
                            } else if (!b.hasOwnProperty(a)) {
                                b[a] = c[a]
                            }
                        }
                        g = TweenLite.to(n, d, b)
                    }
                }

                var y

                function B(a) {
                    if (a) {
                        y = a
                        x()
                    }
                }

                function x() {
                    var a = I()
                    s()
                    r(a, y)
                }

                var j, u

                function i() {
                    if (g) {
                        g.pause()
                        TweenLite.killTweensOf(g)
                        g = undefined
                    }
                    if (j) {
                        c.cancel(j)
                        j = undefined
                    }
                    if (u) {
                        if (c.cancel(j)) {
                            p()
                        }
                        u = undefined
                    }
                }

                function t() {
                    if (e && e.length) {
                        B({transitionTime: o, onComplete: x})
                    }
                }

                function O() {
                    i()
                    TweenLite.killTweensOf(n)
                    if (m()) {
                        t()
                    }
                }

                var h

                function J(a) {
                    if (d.opponentList && d.opponentList.length && d.opponentList.length > 0) {
                        h = 0
                        q()
                    }
                }

                function q() {
                    p()
                    if (h < d.opponentList.length) {
                        L(d.opponentList[h])
                        h++
                    } else {
                        d.searchComplete()
                    }
                }

                function L(c) {
                    a.debug("setUpOpponentDisplay ", h)
                    var e = l(c, b)
                    var d = {transitionTime: z, onComplete: M, onCompleteParams: [c]}
                    if (c.oppMove) {
                        d.transitionTime = c.oppMove
                    }
                    f = c.prevIndex
                    D(c)
                    r(e, d)
                }

                function M(b) {
                    i()
                    var a = w
                    if (b.oppDelay) {
                        a = b.oppDelay
                    }
                    if (a <= 0) {
                        q()
                    } else {
                        u = c(H, a * 1e3, 1)
                    }
                }

                function p() {
                    if (d.showOppAnimated === true) {
                        d.showOppAnimated = false
                        s()
                    }
                }

                function H() {
                    p()
                    j = c(q, A * 1e3, 1)
                }

                function D(b) {
                    d.displayInfo = b.DisplayInfo
                    d.showOppAnimated = true
                    d.animateState = d.animateStateName
                    a.debug("showOpponentAnimation: ", d.showOppAnimated, b.DisplayInfo)
                }
            }
        }

        coordinateFinderDirective.$inject = ["$interval", "$log"]
        module.exports = coordinateFinderDirective
    }, {140: 140}],
    138: [function (require, module, exports) {
        "use strict"
        module.exports = {
            countries: [{
                name: "Afghanistan",
                code: "AFG",
                nationalday: "19 Aug",
                language: "Dari, Pashto",
                population: "27,145,000",
                capital: "Kabul",
                currency: "Afghanis",
                active: "yes",
                x: "677.2",
                y: "243.32"
            }, {
                name: "Aland Islands (Finland)",
                code: "ALA",
                nationalday: "-",
                language: "Swedish",
                population: "28,007",
                capital: "Mariehamn",
                currency: "Euro",
                active: "no",
                x: "546.2",
                y: "145.12"
            }, {
                name: "Albania",
                code: "ALB",
                nationalday: "28 Nov",
                language: "Albanian",
                population: "3,190,000",
                capital: "Tirana",
                currency: "Leke",
                active: "yes",
                x: "545.56",
                y: "213.16"
            }, {
                name: "Algeria",
                code: "DZA",
                nationalday: "1 Nov",
                language: "Arabic, Tamazight, French",
                population: "33,858,000",
                capital: "Algiers",
                currency: "Algerian dinar",
                active: "yes",
                x: "493.8",
                y: "258"
            }, {
                name: "American Samoa (US)",
                code: "ASM",
                nationalday: "17 Apr",
                language: "English, Samoan",
                population: "67,000",
                capital: "Pago Pago",
                currency: "US Dollar",
                active: "yes",
                x: "22.72",
                y: "409.12"
            }, {
                name: "Andorra",
                code: "AND",
                nationalday: "8 Sep",
                language: "Catalan",
                population: "81,200",
                capital: "Andorra la Vella",
                currency: "Euro",
                active: "yes",
                x: "491.96",
                y: "211.4"
            }, {
                name: "Angola",
                code: "AGO",
                nationalday: "11 Nov",
                language: "Portuguese",
                population: "17,024,000",
                capital: "Luanda",
                currency: "New Kwanza",
                active: "yes",
                x: "497.76",
                y: "263.56"
            }, {
                name: "Anguilla",
                code: "AIA",
                nationalday: "30 May",
                language: "English",
                population: "13,477",
                capital: "The Valley",
                currency: "East Carribean Dollar",
                active: "yes",
                x: "336.32",
                y: "311.6"
            }, {
                name: "Antartica",
                code: "ATA",
                nationalday: "-",
                language: "-",
                population: "1,000",
                capital: "-",
                currency: "-",
                active: "yes",
                x: "532.6",
                y: "605.64"
            }, {
                name: "Antigua and Barbuda",
                code: "ATG",
                nationalday: "1 November",
                language: "English",
                population: "85,632",
                capital: "Saint John's",
                currency: "East Carribean Dollar",
                active: "yes",
                x: "338.84",
                y: "314.04"
            }, {
                name: "Argentina",
                code: "ARG",
                nationalday: "25 May and 9 Jul",
                language: "Spanish",
                population: "41,000,000",
                capital: "Buenos Aires",
                currency: "Pesos",
                active: "yes",
                x: "311.4",
                y: "480.08"
            }, {
                name: "Armenia",
                code: "ARM",
                nationalday: "28 May",
                language: "Armenian",
                population: "3,002,000",
                capital: "Yerevan",
                currency: "Drams",
                active: "yes",
                x: "619.16",
                y: "219.8"
            }, {
                name: "Aruba (Netherlands)",
                code: "ABW",
                nationalday: "18 Mar",
                language: "Dutch",
                population: "104,000",
                capital: "Oranjestad",
                currency: "Guilders",
                active: "yes",
                x: "318.6",
                y: "341.96"
            }, {
                name: "Australia",
                code: "AUS",
                nationalday: "26 Jan",
                language: "English",
                population: "21,179,211",
                capital: "Canberra",
                currency: "Australian Dollar",
                active: "yes",
                x: "876.6",
                y: "416.28"
            }, {
                name: "Austria",
                code: "AUT",
                nationalday: "26 Oct",
                language: "German",
                population: "8,327,709",
                capital: "Vienna",
                currency: "Euro",
                active: "yes",
                x: "526.80",
                y: "195.56"
            }, {
                name: "Azerbaijan",
                code: "AZE",
                nationalday: "28 May",
                language: "Azerbaijani",
                population: "8,467,000",
                capital: "Baku",
                currency: "New Manats",
                active: "yes",
                x: "628.6",
                y: "220.56"
            }, {
                name: "Bahamas",
                code: "BHS",
                nationalday: "10 Jul",
                language: "English",
                population: "331,000",
                capital: "Nassau",
                currency: "Bahamian Dollar",
                active: "yes",
                x: "292.48",
                y: "292.32"
            }, {
                name: "Bahrain",
                code: "BHR",
                nationalday: "16 Dec",
                language: "Arabic",
                population: "753,000",
                capital: "Manama",
                currency: "Bahraini Dinar",
                active: "yes",
                x: "638.08",
                y: "266.8"
            }, {
                name: "Bangladesh",
                code: "BGD",
                nationalday: "26 Mar",
                language: "Bengali",
                population: "158,665,000",
                capital: "Dhaka",
                currency: "Taka",
                active: "yes",
                x: "746.2",
                y: "270.48"
            }, {
                name: "Barbados",
                code: "BRB",
                nationalday: "30 Nov",
                language: "English",
                population: "279,000",
                capital: "Bridgetown",
                currency: "Barbadian Dollar",
                active: "yes",
                x: "332.52",
                y: "337.08"
            }, {
                name: "Belarus",
                code: "BLR",
                nationalday: "3 Jul",
                language: "Belarusian, Russian",
                population: "9,714,000",
                capital: "Minsk",
                currency: "Rubles",
                active: "yes",
                x: "569.68",
                y: "169.08"
            }, {
                name: "Belgium",
                code: "BEL",
                nationalday: "21 Jul",
                language: "Flemish, French, German",
                population: "10,584,534",
                capital: "Brussels",
                currency: "Euro",
                active: "yes",
                x: "505.08",
                y: "183.44"
            }, {
                name: "Belize",
                code: "BLZ",
                nationalday: "10 Sep and 21 Sep",
                language: "English",
                population: "288,000",
                capital: "Belize Dollar",
                currency: "Belize Dollar",
                active: "yes",
                x: "261",
                y: "312.56"
            }, {
                name: "Benin",
                code: "BEN",
                nationalday: "1 Aug",
                language: "French",
                population: "9,033,000",
                capital: "Porto Novo",
                currency: "West African CFA Franc",
                active: "yes",
                x: "496.84",
                y: "314.56"
            }, {
                name: "Bermuda",
                code: "BMU",
                nationalday: "24 May",
                language: "English",
                population: "65,000",
                capital: "Hamilton",
                currency: "Bermudian Dollar",
                active: "yes",
                x: "313.12",
                y: "285.88"
            }, {
                name: "Bhutan",
                code: "BTN",
                nationalday: "17 Dec",
                language: "Dzongkha",
                population: "658,000",
                capital: "Thimphu",
                currency: "Ngultrum",
                active: "yes",
                x: "748.72",
                y: "261.2"
            }, {
                name: "Bolivia",
                code: "BOL",
                nationalday: "6 Aug",
                language: "Spanish, Quechua, Aymara",
                population: "9,525,000",
                capital: "La Paz",
                currency: "Bolivianos",
                active: "yes",
                x: "312.20",
                y: "424.96"
            }, {
                name: "Bonaire, Sint Eustatius and Saba",
                code: "BES",
                nationalday: "6 Aug",
                language: "Dutch, English, Papiamentu",
                population: "18,000",
                capital: "Kralendijk, Oranjestad, The Bottom",
                currency: "US Dollar",
                active: "yes",
                x: "311.44",
                y: "341.96"
            }, {
                name: "Bosnia and Herzegovina",
                code: "BIH",
                nationalday: "1 Mar",
                language: "Bosnian, Croatian, Serbian",
                population: "3,935,000",
                capital: "Sarajevo",
                currency: "Convertible Marka",
                active: "yes",
                x: "542.24",
                y: "207.32"
            }, {
                name: "Botswana",
                code: "BWA",
                nationalday: "30 Sep",
                language: "English, Tswana",
                population: "1,882,000",
                capital: "Gaborone",
                currency: "Pula",
                active: "yes",
                x: "557.84",
                y: "407.20"
            }, {
                name: "Bouvet Island (Norway)",
                code: "BVT",
                nationalday: "-",
                language: "-",
                population: "-",
                capital: "-",
                currency: "Norway Kroner",
                active: "no",
                x: "502.8",
                y: "502"
            }, {
                name: "Brazil",
                code: "BRA",
                nationalday: "7 Sep",
                language: "Portuguese",
                population: "186,186,773",
                capital: "Brasilia",
                currency: "Brazilian Real",
                active: "yes",
                x: "352.68",
                y: "418.36"
            }, {
                name: "British Indian Ocean Territory",
                code: "IOT",
                nationalday: "-",
                language: "English",
                population: "3,500",
                capital: "Diego Garcia",
                currency: "Pounds",
                active: "no",
                x: "698.76",
                y: "365.24"
            }, {
                name: "Brunei Darussalam",
                code: "BRN",
                nationalday: "23 Feb",
                language: "Malay",
                population: "390,000",
                capital: "Bandar Seri Begawan",
                currency: "Brunei Dollar",
                active: "yes",
                x: "818.96",
                y: "328.92"
            }, {
                name: "Bulgaria",
                code: "BGR",
                nationalday: "3 Mar",
                language: "Bulgarian",
                population: "7,639,000",
                capital: "Sofia",
                currency: "Bulgarian Leva",
                active: "yes",
                x: "563.52",
                y: "212.28"
            }, {
                name: "Burkina Faso",
                code: "BFA",
                nationalday: "4 Aug",
                language: "French, Fula, Jula, More",
                population: "14,784,000",
                capital: "Ouagadougou",
                currency: "West African CFA Franc",
                active: "yes",
                x: "483.8",
                y: "306.36"
            }, {
                name: "Burundi",
                code: "BDI",
                nationalday: "1 Jul",
                language: "Kirundi, French",
                population: "8,508,000",
                capital: "Bujumbura",
                currency: "Burundi Franc",
                active: "yes",
                x: "576.16",
                y: "352.44"
            }, {
                name: "Cambodia",
                code: "KHM",
                nationalday: "9 Nov",
                language: "Khmer",
                population: "14,444,000",
                capital: "Phnom Penh",
                currency: "Riel",
                active: "yes",
                x: "790.28",
                y: "305.92"
            }, {
                name: "Cameroon",
                code: "CMR",
                nationalday: "20 May",
                language: "English, French",
                population: "18,549,000",
                capital: "Yaounde",
                currency: "Central African CFA Franc",
                active: "yes",
                x: "524.68",
                y: "329.6"
            }, {
                name: "Canada",
                code: "CAN",
                nationalday: "1 Jul",
                language: "English, French",
                population: "33,181,500",
                capital: "Ottawa",
                currency: "Canadian Dollar",
                active: "yes",
                x: "195.320",
                y: "169.36"
            }, {
                name: "Cape Verde",
                code: "CPV",
                nationalday: "12 Sep",
                language: "Portuguese, Creole",
                population: "530,000",
                capital: "Praia",
                currency: "Escudo",
                active: "yes",
                x: "424.4",
                y: "299.6"
            }, {
                name: "Cayman Islands",
                code: "CYM",
                nationalday: "1st Monday in July",
                language: "English",
                population: "47,000",
                capital: "George Town",
                currency: "Cayman Islands Dollar",
                active: "yes",
                x: "292.48",
                y: "312.24"
            }, {
                name: "Central African Republic",
                code: "CAF",
                nationalday: "1 Dec",
                language: "French, Sango",
                population: "4,343,000",
                capital: "Bangui",
                currency: "Central African CFA Franc",
                active: "yes",
                x: "548.76",
                y: "320.16"
            }, {
                name: "Chad",
                code: "TCD",
                nationalday: "11 Aug",
                language: "French, Arabic",
                population: "10,781,000",
                capital: "N'Djamena",
                currency: "Central African CFA Franc",
                active: "yes",
                x: "543.72",
                y: "297.28"
            }, {
                name: "Chile",
                code: "CHL",
                nationalday: "18 Sep",
                language: "Spanish",
                population: "16,598,074",
                capital: "Santiago",
                currency: "Chilean Peso",
                active: "yes",
                x: "291.64",
                y: "487.92"
            }, {
                name: "China",
                code: "CHN",
                nationalday: "1 Oct",
                language: "Mandarin",
                population: "1,322,410,000",
                capital: "Beijing",
                currency: "Yuan Renminbi",
                active: "yes",
                x: "789.08",
                y: "240.12"
            }, {
                name: "Christmas Island (Australia)",
                code: "CXR",
                nationalday: "-",
                language: "English",
                population: "1,402",
                capital: "Flying Fish Cove",
                currency: "Australian Dollar",
                active: "no",
                x: "783.48",
                y: "369.88"
            }, {
                name: "Cocos (Keeling) Islands",
                code: "CCK",
                nationalday: "-",
                language: "English",
                population: "596",
                capital: "West Island",
                currency: "Australian Dollar",
                active: "no",
                x: "770.84",
                y: "377.88"
            }, {
                name: "Colombia",
                code: "COL",
                nationalday: "20 Jul",
                language: "Spanish",
                population: "44,072,000",
                capital: "Bogota",
                currency: "Colombian Peso",
                active: "yes",
                x: "287.12",
                y: "359.04"
            }, {
                name: "Comoros",
                code: "COM",
                nationalday: "6 Jul",
                language: "Arabic, Comorian, French",
                population: "682,000",
                capital: "Moroni",
                currency: "Comorian Franc",
                active: "yes",
                x: "616.6",
                y: "378.76"
            }, {
                name: "Congo",
                code: "COG",
                nationalday: "15 Aug",
                language: "French",
                population: "3,800,610",
                capital: "Brazzaville",
                currency: "Central African CFA Franc",
                active: "yes",
                x: "532.6",
                y: "349.36"
            }, {
                name: "Democratic Rep. of Congo",
                code: "COD",
                nationalday: "30 Jun",
                language: "French",
                population: "62,636,000",
                capital: "Kinshasa",
                currency: "Congolese Franc",
                active: "yes",
                x: "552.28",
                y: "347.08"
            }, {
                name: "Cook Islands",
                code: "COK",
                nationalday: "4 Aug",
                language: "English",
                population: "21,750",
                capital: "Avarua",
                currency: "New Zealand Dollar",
                active: "yes",
                x: "1004.32",
                y: "396.28"
            }, {
                name: "Costa Rica",
                code: "CRI",
                nationalday: "15 Sep",
                language: "Spanish",
                population: "4,468,000",
                capital: "San Jose",
                currency: "Costa Rican Colon",
                active: "yes",
                x: "276.28",
                y: "336.36"
            }, {
                name: "Cote d'Ivoire",
                code: "CIV",
                nationalday: "7 Aug",
                language: "French",
                population: "19,262,000",
                capital: "Yamoussoukro",
                currency: "West African CFA Franc",
                active: "yes",
                x: "472.52",
                y: "320.52"
            }, {
                name: "Croatia",
                code: "HRV",
                nationalday: "25 Jun",
                language: "Croatian",
                population: "4,555,000",
                capital: "Zagreb",
                currency: "Croatian Kuna",
                active: "yes",
                x: "538.04",
                y: "201.52"
            }, {
                name: "Cuba",
                code: "CUB",
                nationalday: "1 Jan",
                language: "Spanish",
                population: "11,268,000",
                capital: "Havana",
                currency: "Cuban Peso",
                active: "yes",
                x: "292.28",
                y: "302.32"
            }, {
                name: "Curacao",
                code: "CUW",
                nationalday: "-",
                language: "Papiamentu",
                population: "142,180",
                capital: "Willemstad",
                currency: "Netherlands Antillean Guilder",
                active: "yes",
                x: "305.96",
                y: "340.4"
            }, {
                name: "Cyprus",
                code: "CYP",
                nationalday: "1 Oct",
                language: "Greek, Turkish",
                population: "855,000",
                capital: "Nicosia",
                currency: "Euro",
                active: "yes",
                x: "586.36",
                y: "238.76"
            }, {
                name: "Czech Republic",
                code: "CZE",
                nationalday: "28 Oct",
                language: "Czech",
                population: "10,349,372",
                capital: "Prague",
                currency: "Koruny",
                active: "yes",
                x: "532.24",
                y: "185.24"
            }, {
                name: "Denmark",
                code: "DNK",
                nationalday: "5 Jun",
                language: "Danish",
                population: "5,457,415",
                capital: "Copenhagen",
                currency: "Kroner",
                active: "yes",
                x: "518.4",
                y: "157.36"
            }, {
                name: "Djibouti",
                code: "DJI",
                nationalday: "27 Jun",
                language: "French, Arabic",
                population: "833,000",
                capital: "Djibouti",
                currency: "Djiboutian Franc",
                active: "yes",
                x: "612.2",
                y: "308.92"
            }, {
                name: "Dominica",
                code: "DMA",
                nationalday: "3 Nov",
                language: "English",
                population: "67,000",
                capital: "Roseau",
                currency: "East Caribbean Dollar",
                active: "yes",
                x: "326.6",
                y: "337.08"
            }, {
                name: "Dominican Republic",
                code: "DOM",
                nationalday: "27 Feb and 16 Aug",
                language: "Spanish",
                population: "9,760,000",
                capital: "Santo Domingo",
                currency: "Dominican Peso",
                active: "yes",
                x: "311.76",
                y: "307.88"
            }, {
                name: "Ecuador",
                code: "ECU",
                nationalday: "10 Aug",
                language: "Spanish",
                population: "13,341,000",
                capital: "Quito",
                currency: "US Dollar",
                active: "yes",
                x: "276.36",
                y: "379.08"
            }, {
                name: "Egypt",
                code: "EGY",
                nationalday: "23 Jul, 6 Oct",
                language: "Arabic",
                population: "75,498,000",
                capital: "Cairo",
                currency: "Egyptian Pound",
                active: "yes",
                x: "569.92",
                y: "265.16"
            }, {
                name: "El Salvador",
                code: "SLV",
                nationalday: "15 Sep",
                language: "Spanish",
                population: "6,857,000",
                capital: "San Salvador",
                currency: "Colon",
                active: "yes",
                x: "274.68",
                y: "336.36"
            }, {
                name: "Equatorial Guinea",
                code: "GNQ",
                nationalday: "12 Oct",
                language: "Spanish, French",
                population: "507,000",
                capital: "Malabo",
                currency: "CFA Franc",
                active: "yes",
                x: "521.16",
                y: "338.48"
            }, {
                name: "Eritrea",
                code: "ERI",
                nationalday: "24 May",
                language: "Arabic, Tigrinya",
                population: "4,851,000",
                capital: "Asmara",
                currency: "Nakfa",
                active: "yes",
                x: "599.08",
                y: "297.44"
            }, {
                name: "Estonia",
                code: "EST",
                nationalday: "24 Feb",
                language: "Estonian",
                population: "1,342,409",
                capital: "Tallinn",
                currency: "Kroon",
                active: "yes",
                x: "564.52",
                y: "151.76"
            }, {
                name: "Ethiopia",
                code: "ETH",
                nationalday: "28 May",
                language: "Amharic",
                population: "77,127,000",
                capital: "Addis Ababa",
                currency: "Birr",
                active: "yes",
                x: "602.04",
                y: "313.64"
            }, {
                name: "Falkland Islands (Malvinas)",
                code: "FLK",
                nationalday: "14 Jun",
                language: "English",
                population: "2,379",
                capital: "Stanley",
                currency: "Pound",
                active: "yes",
                x: "320.28",
                y: "544.36"
            }, {
                name: "Faroe Islands (Denmark)",
                code: "FRO",
                nationalday: "29 Jul",
                language: "Faroese, Danish",
                population: "48,320",
                capital: "Tórshavn",
                currency: "Denmark Kroner",
                active: "no",
                x: "539.92",
                y: "56.960"
            }, {
                name: "Fiji",
                code: "FJI",
                nationalday: "10 Oct",
                language: "English",
                population: "839,000",
                capital: "Suva",
                currency: "Fijian Dollar",
                active: "yes",
                x: "1001.40",
                y: "392.28"
            }, {
                name: "Finland",
                code: "FIN",
                nationalday: "6 Dec",
                language: "Finnish",
                population: "5,305,000",
                capital: "Helsinki",
                currency: "Euro",
                active: "yes",
                x: "566.4",
                y: "132.28"
            }, {
                name: "France",
                code: "FRA",
                nationalday: "14 Jul",
                language: "French",
                population: "64,473,140",
                capital: "Paris",
                currency: "Euro",
                active: "yes",
                x: "496.76",
                y: "200.16"
            }, {
                name: "French Guiana",
                code: "GUF",
                nationalday: "-",
                language: "French",
                population: "217,000",
                capital: "Cayenne",
                currency: "Euro",
                active: "yes",
                x: "348.84",
                y: "364.64"
            }, {
                name: "French Polynesia",
                code: "PYF",
                nationalday: "14 Jul",
                language: "French, Tahitian",
                population: "259,596",
                capital: "Papeete",
                currency: "CFP Franc",
                active: "yes",
                x: "37.92",
                y: "407.56"
            }, {
                name: "French Southern Territories",
                code: "ATF",
                nationalday: "-",
                language: "French",
                population: "-",
                capital: "Port-Aux-Francais",
                currency: "Euro",
                active: "yes",
                x: "692.44",
                y: "489.16"
            }, {
                name: "Gabon",
                code: "GAB",
                nationalday: "17 Aug",
                language: "French",
                population: "1,331,000",
                capital: "Libreville",
                currency: "CFA Franc",
                active: "yes",
                x: "523.44",
                y: "343.4"
            }, {
                name: "Gambia",
                code: "GMB",
                nationalday: "18 Feb",
                language: "English",
                population: "1,709,000",
                capital: "Banjul",
                currency: "Dalasi",
                active: "yes",
                x: "446.68",
                y: "303.28"
            }, {
                name: "Georgia",
                code: "GEO",
                nationalday: "26 May",
                language: "Georgian, Abkhaz, Ossetic",
                population: "4,395,000",
                capital: "Tbilisi",
                currency: "Lari",
                active: "yes",
                x: "615.32",
                y: "213.880"
            }, {
                name: "Germany",
                code: "DEU",
                nationalday: "3 Oct",
                language: "German",
                population: "82,210,000",
                capital: "Berlin",
                currency: "Euro",
                active: "yes",
                x: "516.72",
                y: "180.76"
            }, {
                name: "Ghana",
                code: "GHA",
                nationalday: "6 Mar",
                language: "English",
                population: "23,478,000",
                capital: "Accra",
                currency: "Cedis",
                active: "yes",
                x: "485.64",
                y: "319.32"
            }, {
                name: "Gibraltar",
                code: "GIB",
                nationalday: "10 Sep",
                language: "English",
                population: "29,000",
                capital: "Gibraltar",
                currency: "Pound",
                active: "yes",
                x: "473.28",
                y: "234.68"
            }, {
                name: "Greece",
                code: "GRC",
                nationalday: "25 Mar, 28 Oct",
                language: "Greek",
                population: "11,147,000",
                capital: "Athens",
                currency: "Euro",
                active: "yes",
                x: "553.88",
                y: "223.12"
            }, {
                name: "Greenland",
                code: "GRL",
                nationalday: "21 Jun",
                language: "Greenlandic, Danish",
                population: "58,000",
                capital: "Nuuk",
                currency: "Denmark Kroner",
                active: "yes",
                x: "380.56",
                y: "101.88"
            }, {
                name: "Grenada",
                code: "GRD",
                nationalday: "7 Feb",
                language: "English",
                population: "106,000",
                capital: "Saint George's",
                currency: "East Caribbean Dollar",
                active: "yes",
                x: "322.84",
                y: "341.96"
            }, {
                name: "Guadeloupe (France)",
                code: "GLP",
                nationalday: "14 Jul",
                language: "French, Creole",
                population: "408,000",
                capital: "Basse-Terre",
                currency: "Euro",
                active: "yes",
                x: "327.44",
                y: "333.96"
            }, {
                name: "Guam (US)",
                code: "GUM",
                nationalday: "21 Jul",
                language: "English, Chamorro",
                population: "173,000",
                capital: "Hagatna",
                currency: "US Dollar",
                active: "yes",
                x: "912.44",
                y: "292.32"
            }, {
                name: "Guatemala",
                code: "GTM",
                nationalday: "15 Sep",
                language: "Spanish",
                population: "13,354,000",
                capital: "Guatemala City",
                currency: "Quetzal",
                active: "yes",
                x: "255.32",
                y: "320.08"
            }, {
                name: "Guernsey",
                code: "GGY",
                nationalday: "9 May",
                language: "English, French",
                population: "65,573",
                capital: "St Peter Port",
                currency: "Pound",
                active: "yes",
                x: "482.96",
                y: "188.320"
            }, {
                name: "Guinea",
                code: "GIN",
                nationalday: "3 Apr",
                language: "French",
                population: "9,370,000",
                capital: "Conakry",
                currency: "Guinean Franc",
                active: "yes",
                x: "458.4",
                y: "311.28"
            }, {
                name: "Guinea-Bissau",
                code: "GNB",
                nationalday: "24 Sep",
                language: "Portuguese",
                population: "1,695,000",
                capital: "Bissau",
                currency: "West African CFA franc",
                active: "yes",
                x: "449.64",
                y: "307.92"
            }, {
                name: "Guyana",
                code: "GUY",
                nationalday: "23 Feb",
                language: "English",
                population: "738,000",
                capital: "Georgetown",
                currency: "Guyanese Dollar",
                active: "yes",
                x: "328.48",
                y: "360.92"
            }, {
                name: "Haiti",
                code: "HTI",
                nationalday: "1 Jan",
                language: "Haitian Creole, French",
                population: "9,598,000",
                capital: "Port-au-Prince",
                currency: "Haitian Gourde",
                active: "yes",
                x: "307.24",
                y: "308.28"
            }, {
                name: "Heard Island and McDonald Islands",
                code: "HMD",
                nationalday: "-",
                language: "English",
                population: "0",
                capital: "-",
                active: "no",
                x: "703.40",
                y: "498.68"
            }, {
                name: "Holy See (Vatican City State)",
                code: "VAT",
                nationalday: "22 Oct",
                language: "Italian",
                population: "829",
                capital: "Vatican City",
                currency: "Euro",
                active: "yes",
                x: "527.52",
                y: "215.44"
            }, {
                name: "Honduras",
                code: "HND",
                nationalday: "15 Sep",
                language: "Spanish",
                population: "7,106,000",
                capital: "Tegucigalpa",
                currency: "Lempira",
                active: "yes",
                x: "265.92",
                y: "320.52"
            }, {
                name: "Hong Kong (China)",
                code: "HKG",
                nationalday: "1 Jul",
                language: "Chinese",
                population: "7,206,000",
                capital: "Hong Kong",
                currency: "Hong Kong dollar",
                active: "yes",
                x: "824.28",
                y: "275.32"
            }, {
                name: "Hungary",
                code: "HUN",
                nationalday: "15 Mar, 20 Aug, 23 Oct",
                language: "Hungarian",
                population: "10,053,000",
                capital: "Budapest",
                currency: "Forint",
                active: "yes",
                x: "544.64",
                y: "197.36"
            }, {
                name: "Iceland",
                code: "ISL",
                nationalday: "17 Jun",
                language: "Icelandic",
                population: "313,376",
                capital: "Reykjavik",
                currency: "Kronur",
                active: "yes",
                x: "438.52",
                y: "126.76"
            }, {
                name: "India",
                code: "IND",
                nationalday: "26 Jan, 15 Aug",
                language: "English, Hindi",
                population: "1,128,971,014",
                capital: "New Delhi",
                currency: "Rupee",
                active: "yes",
                x: "715.56",
                y: "283.08"
            }, {
                name: "Indonesia",
                code: "IDN",
                nationalday: "17 Aug",
                language: "Indonesian",
                population: "231,627,000",
                capital: "Jakarta",
                currency: "Rupiah",
                active: "yes",
                x: "838.64",
                y: "351.92"
            }, {
                name: "Iran",
                code: "IRN",
                nationalday: "1 Apr",
                language: "Persian",
                population: "71,208,000",
                capital: "Tehran",
                currency: "Iranian Rial",
                active: "yes",
                x: "635.04",
                y: "246"
            }, {
                name: "Iraq",
                code: "IRQ",
                nationalday: "3 Oct",
                language: "Arabic",
                population: "28,993,000",
                capital: "Baghdad",
                currency: "Iraqi Dinar",
                active: "yes",
                x: "614.44",
                y: "240.8"
            }, {
                name: "Ireland",
                code: "IRL",
                nationalday: "17 Mar",
                language: "English, Irish",
                population: "4,339,000",
                capital: "Dublin",
                currency: "Euro",
                active: "yes",
                x: "468.8",
                y: "174.16"
            }, {
                name: "Isle of Man",
                code: "IMN",
                nationalday: "5 Jul",
                language: "Manx, English",
                population: "79,000",
                capital: "Douglas",
                currency: "Pound",
                active: "yes",
                x: "477.08",
                y: "171.480"
            }, {
                name: "Israel",
                code: "ISR",
                nationalday: "14 May",
                language: "Hebrew",
                population: "7,222,222",
                capital: "Jerusalem",
                currency: "New Shekel",
                active: "yes",
                x: "590.92",
                y: "246.200"
            }, {
                name: "Italy",
                code: "ITA",
                nationalday: "2 Jun",
                language: "Italian",
                population: "58,147,733",
                capital: "Rome",
                currency: "Euro",
                active: "yes",
                x: "526.76",
                y: "212.24"
            }, {
                name: "Jamaica",
                code: "JAM",
                nationalday: "1st Monday in August",
                language: "English,",
                population: "2,714,000",
                capital: "Kingston",
                currency: "Jamaican Dollar",
                active: "yes",
                x: "292.76",
                y: "312.16"
            }, {
                name: "Japan",
                code: "JPN",
                nationalday: "11 Feb",
                language: "Japanese",
                population: "127,790,000",
                capital: "Tokyo",
                currency: "Yen",
                active: "yes",
                x: "881.76",
                y: "235.96"
            }, {
                name: "Jersey",
                code: "JEY",
                nationalday: "9 May",
                language: "French, English",
                population: "88,200",
                capital: "Saint Helier",
                currency: "Pound",
                active: "yes",
                x: "484.24",
                y: "189.24"
            }, {
                name: "Jordan",
                code: "JOR",
                nationalday: "25 May",
                language: "Arabic",
                population: "5,924,000",
                capital: "Amman",
                currency: "Jordanian Dinar",
                active: "yes",
                x: "594.72",
                y: "250.640"
            }, {
                name: "Kazakhstan",
                code: "KAZ",
                nationalday: "25 Oct",
                language: "Kazakh, Russian",
                population: "15,422,000",
                capital: "Astana",
                currency: "Kazakhstani Tenge",
                active: "yes",
                x: "685.16",
                y: "193.920"
            }, {
                name: "Kenya",
                code: "KEN",
                nationalday: "12 Dec",
                language: "English, Swahili",
                population: "37,538,000",
                capital: "Nairobi",
                currency: "Kenyan Shilling",
                active: "yes",
                x: "600.72",
                y: "340.68"
            }, {
                name: "Kiribati",
                code: "KIR",
                nationalday: "12 Jul",
                language: "English, Kiribati",
                population: "95,000",
                capital: "Tarawa Atoll",
                currency: "Australian Dollar",
                active: "yes",
                x: "1006.04",
                y: "394.04"
            }, {
                name: "North Korea",
                code: "PRK",
                nationalday: "8 Sep",
                language: "Korean",
                population: "23,790,000",
                capital: "Pyongyang",
                currency: "Won",
                active: "yes",
                x: "852.76",
                y: "223.4"
            }, {
                name: "South Korea",
                code: "KOR",
                nationalday: "15 Aug",
                language: "Korean",
                population: "48,224,000",
                capital: "Seoul",
                currency: "Won",
                active: "yes",
                x: "854.04",
                y: "234.72"
            }, {
                name: "Kuwait",
                code: "KWT",
                nationalday: "25 Feb",
                language: "Arabic",
                population: "2,851,000",
                capital: "Kuwait city",
                currency: "Kuwaiti Dinar",
                active: "yes",
                x: "627.68",
                y: "257.64"
            }, {
                name: "Kyrgyzstan",
                code: "KGZ",
                nationalday: "31 Aug",
                language: "Kirghiz, Russian",
                population: "5,317,000",
                capital: "Bishkek",
                currency: "Kyrgyzstani Som",
                active: "yes",
                x: "707.6",
                y: "215.12"
            }, {
                name: "Laos",
                code: "LAO",
                nationalday: "2 Dec",
                language: "Lao",
                population: "5,859,000",
                capital: "Vientiane",
                currency: "Kip",
                active: "yes",
                x: "783",
                y: "283.32"
            }, {
                name: "Latvia",
                code: "LVA",
                nationalday: "18 Nov",
                language: "Latvian",
                population: "2,277,000",
                capital: "Riga",
                currency: "Lati",
                active: "yes",
                x: "564.32",
                y: "159.16"
            }, {
                name: "Lebanon",
                code: "LBN",
                nationalday: "22 Nov",
                language: "Arabic",
                population: "4,099,000",
                capital: "Beirut",
                currency: "Lebanese Pound",
                active: "yes",
                x: "593.24",
                y: "241.92"
            }, {
                name: "Lesotho",
                code: "LSO",
                nationalday: "4 Oct",
                language: "English",
                population: "2,008,000",
                capital: "Maseru",
                currency: "Maloti",
                active: "yes",
                x: "570.96",
                y: "430.56"
            }, {
                name: "Liberia",
                code: "LBR",
                nationalday: "26 Jul",
                language: "English",
                population: "3,750,000",
                capital: "Monrovia",
                currency: "Liberian Dollar",
                active: "yes",
                x: "462",
                y: "322.92"
            }, {
                name: "Libya",
                code: "LBY",
                nationalday: "1 Sep",
                language: "Arabic",
                population: "6,160,000",
                capital: "Tripoli",
                currency: "Libyan Dinar",
                active: "yes",
                x: "536.96",
                y: "261.44"
            }, {
                name: "Liechtenstein",
                code: "LIE",
                nationalday: "15 Aug",
                language: "German",
                population: "35,000",
                capital: "Vaduz",
                currency: "Swiss Franc",
                active: "yes",
                x: "518.76",
                y: "195.56"
            }, {
                name: "Lithuania",
                code: "LTU",
                nationalday: "16 Feb",
                language: "Lithuanian",
                population: "3,369,600",
                capital: "Vilnius",
                currency: "Litai",
                active: "yes",
                x: "558.4",
                y: "166.24"
            }, {
                name: "Luxembourg",
                code: "LUX",
                nationalday: "23 Jun",
                language: "Luxermbourgish, French, German",
                population: "467,000",
                capital: "Luxembourg",
                currency: "Euro",
                active: "yes",
                x: "508.24",
                y: "186.200"
            }, {
                name: "Macao (China)",
                code: "MAC",
                nationalday: "-",
                language: "Chinese (Cantonese), Portugues",
                population: "481,000",
                capital: "-",
                currency: "Pataca",
                active: "yes",
                x: "824.28",
                y: "274.48"
            }, {
                name: "Macedonia",
                code: "MKD",
                nationalday: "8 Sep",
                language: "Macedonian",
                population: "2,038,000",
                capital: "Skopje",
                currency: "Denar",
                active: "yes",
                x: "552.28",
                y: "217.12"
            }, {
                name: "Madagascar",
                code: "MDG",
                nationalday: "26 Jun",
                language: "Malagasy, English, French",
                population: "19,683,000",
                capital: "Antananarivo",
                currency: "Ariary",
                active: "yes",
                x: "625",
                y: "396.28"
            }, {
                name: "Malawi",
                code: "MWI",
                nationalday: "6 Jul",
                language: "English, Chichewa",
                population: "13,925,000",
                capital: "Lilongwe",
                currency: "Kwacha",
                active: "yes",
                x: "587.44",
                y: "381.32"
            }, {
                name: "Malaysia",
                code: "MYS",
                nationalday: "31 Aug",
                language: "Malay",
                population: "27,484,000",
                capital: "Kuala Lumpur",
                currency: "Ringgit",
                active: "yes",
                x: "781.32",
                y: "329.32"
            }, {
                name: "Maldives",
                code: "MDV",
                nationalday: "26 Jul",
                language: "Dhivehi",
                population: "306,000",
                capital: "Male",
                currency: "Rufiyaa",
                active: "yes",
                x: "702.16",
                y: "333.96"
            }, {
                name: "Mali",
                code: "MLI",
                nationalday: "22 Sep",
                language: "French",
                population: "12,337,000",
                capital: "Bamako",
                currency: "CFA Franc",
                active: "yes",
                x: "480.76",
                y: "290.08"
            }, {
                name: "Malta",
                code: "MLT",
                nationalday: "21 Sep",
                language: "Maltese",
                population: "407,000",
                capital: "Valletta",
                currency: "Euro",
                active: "yes",
                x: "532.28",
                y: "234.68"
            }, {
                name: "Marshall Islands",
                code: "MHL",
                nationalday: "1 May",
                language: "Marshallese, English",
                population: "59,000",
                capital: "Majuro",
                currency: "US Dollar",
                active: "yes",
                x: "991.68",
                y: "341.08"
            }, {
                name: "Martinique (France)",
                code: "MTQ",
                nationalday: "14 Jul",
                language: "French",
                population: "401,000",
                capital: "Fort-de-France",
                currency: "Euro",
                active: "yes",
                x: "326.6",
                y: "336.4"
            }, {
                name: "Mauritania",
                code: "MRT",
                nationalday: "28 Nov",
                language: "Arabic",
                population: "3,124,000",
                capital: "Nouakchott",
                currency: "Ouguiya",
                active: "yes",
                x: "457.68",
                y: "285.48"
            }, {
                name: "Mauritius",
                code: "MUS",
                nationalday: "12 Mar",
                language: "English, French",
                population: "1,262,000",
                capital: "Port Louis",
                currency: "Mauritian Rupee",
                active: "yes",
                x: "653.24",
                y: "398.04"
            }, {
                name: "Mayotte (France)",
                code: "MYT",
                nationalday: "14 Jul",
                language: "French",
                population: "186,452",
                capital: "Mamoudzou",
                currency: "Euro",
                active: "yes",
                x: "619.52",
                y: "381.20"
            }, {
                name: "Mexico",
                code: "MEX",
                nationalday: "16 Sep",
                language: "Spanish",
                population: "106,535,000",
                capital: "Mexico city",
                currency: "Mexican Peso",
                active: "yes",
                x: "220.600",
                y: "301.16"
            }, {
                name: "Micronesia",
                code: "FSM",
                nationalday: "3 Nov",
                language: "English",
                population: "111,000",
                capital: "Palikir",
                currency: "US Dollar",
                active: "yes",
                x: "999.72",
                y: "350.84"
            }, {
                name: "Moldova",
                code: "MDA",
                nationalday: "27 Aug",
                language: "Moldovan",
                population: "4,320,490",
                capital: "Chisinau",
                currency: "Lei",
                active: "yes",
                x: "572.08",
                y: "196.36"
            }, {
                name: "Monaco",
                code: "MCO",
                nationalday: "19 Nov",
                language: "French",
                population: "33,000",
                capital: "Monte Carlo",
                currency: "Euro",
                active: "yes",
                x: "507.12",
                y: "210.56"
            }, {
                name: "Mongolia",
                code: "MNG",
                nationalday: "11 Jul",
                language: "Mongolian",
                population: "2,629,000",
                capital: "Ulaan Baatar",
                currency: "Tugrik",
                active: "yes",
                x: "786.44",
                y: "198.96"
            }, {
                name: "Montenegro",
                code: "MNE",
                nationalday: "13 Jul",
                language: "Serbian/Montenegrin",
                population: "598,000",
                capital: "Cetinje",
                currency: "Euro",
                active: "yes",
                x: "544.72",
                y: "212.32"
            }, {
                name: "Montserrat",
                code: "MSR",
                nationalday: "2nd Saturday in June",
                language: "English",
                population: "8,400",
                capital: "Plymouth",
                currency: "East Caribbean Dollar",
                active: "yes",
                x: "338",
                y: "314.68"
            }, {
                name: "Morocco",
                code: "MAR",
                nationalday: "2 Mar",
                language: "Arabic",
                population: "31,224,000",
                capital: "Rabat",
                currency: "Dirham",
                active: "yes",
                x: "468.44",
                y: "249.72"
            }, {
                name: "Mozambique",
                code: "MOZ",
                nationalday: "25 Jun",
                language: "Portuguese",
                population: "21,397,000",
                capital: "Maputo",
                currency: "Meticais",
                active: "yes",
                x: "587.96",
                y: "395.64"
            }, {
                name: "Myanmar",
                code: "MMR",
                nationalday: "4 Jan",
                language: "Burmese",
                population: "48,798,000",
                capital: "Rangoon ",
                currency: "Kyat",
                active: "yes",
                x: "763.04",
                y: "280.72"
            }, {
                name: "Namibia",
                code: "NAM",
                nationalday: "21 Mar",
                language: "English",
                population: "2,074,000",
                capital: "Windhoek",
                currency: "Namibian Dollar",
                active: "yes",
                x: "538.68",
                y: "408.32"
            }, {
                name: "Nauru",
                code: "NRU",
                nationalday: "31 Jan",
                language: "Nauruan, English",
                population: "10,000",
                capital: "Yaren",
                currency: "Australian Dollar",
                active: "yes",
                x: "970.64",
                y: "344.4"
            }, {
                name: "Nepal",
                code: "NPL",
                nationalday: "18 Feb and 28 Dec",
                language: "Nepali",
                population: "28,196,000",
                capital: "Kathmandu",
                currency: "Nepalese Rupee",
                active: "yes",
                x: "730",
                y: "258.04"
            }, {
                name: "Netherlands",
                code: "NLD",
                nationalday: "30 Apr",
                language: "Dutch",
                population: "16,404,207",
                capital: "Amsterdam",
                currency: "Euro",
                active: "yes",
                x: "508.84",
                y: "174.920"
            }, {
                name: "New Caledonia (France)",
                code: "NCL",
                nationalday: "14 Jul",
                language: "French",
                population: "240,390",
                capital: "Nouméa",
                currency: "CFP Franc",
                active: "yes",
                x: "973.16",
                y: "405.12"
            }, {
                name: "New Zealand",
                code: "NZL",
                nationalday: "6 Feb",
                language: "English, Maori",
                population: "4,256,000",
                capital: "Wellington",
                currency: "New Zealand Dollar",
                active: "yes",
                x: "984.40",
                y: "470.04"
            }, {
                name: "Nicaragua",
                code: "NIC",
                nationalday: "15 Sep",
                language: "Spanish",
                population: "5,603,000",
                capital: "Managua",
                currency: "Cordoba",
                active: "yes",
                x: "270.16",
                y: "329.36"
            }, {
                name: "Niger",
                code: "NER",
                nationalday: "18 Dec",
                language: "French",
                population: "14,226,000",
                capital: "Niamey",
                currency: "CFA Franc",
                active: "yes",
                x: "513.04",
                y: "290.08"
            }, {
                name: "Nigeria",
                code: "NGA",
                nationalday: "1 Oct",
                language: "English",
                population: "148,093,000",
                capital: "Abuja",
                currency: "Naira",
                active: "yes",
                x: "513.28",
                y: "315.96"
            }, {
                name: "Niue",
                code: "NIU",
                nationalday: "6 Feb",
                language: "Niuean, English",
                population: "1,600",
                capital: "Alofi",
                currency: "New Zealand Dollar",
                active: "yes",
                x: "1007.72",
                y: "398.04"
            }, {
                name: "Norfolk Island (Australia)",
                code: "NFK",
                nationalday: "8 Jun",
                language: "English",
                population: "2,114",
                capital: "Kingston",
                currency: "Australian Dollar",
                active: "no",
                x: "949.12",
                y: "433.96"
            }, {
                name: "Northern Mariana Islands",
                code: "MNP",
                nationalday: "8 Jan",
                language: "English, Chamorro, Carolinian",
                population: "84,000",
                capital: "Saipan",
                currency: "US Dollar",
                active: "yes",
                x: "974",
                y: "344.4"
            }, {
                name: "Norway",
                code: "NOR",
                nationalday: "17 May",
                language: "Norwegian",
                population: "4,742,000",
                capital: "Oslo",
                currency: "Norwegian Krone",
                active: "yes",
                x: "515.16",
                y: "139.4"
            }, {
                name: "Oman",
                code: "OMN",
                nationalday: "18 Nov",
                language: "Arabic",
                population: "2,595,000",
                capital: "Muscat",
                currency: "Omani rial",
                active: "yes",
                x: "651.48",
                y: "285.44"
            }, {
                name: "Pakistan",
                code: "PAK",
                nationalday: "23 Mar and 14 Aug",
                language: "Urdu, English",
                population: "162,499,500",
                capital: "Islamabad",
                currency: "Pakistan Rupee",
                active: "yes",
                x: "689.88",
                y: "250.880"
            }, {
                name: "Palau",
                code: "PLW",
                nationalday: "9 Jul",
                language: "Palauan, English",
                population: "20,000",
                capital: "Melekeok",
                currency: "US Dollar",
                active: "yes",
                x: "873.28",
                y: "327.56"
            }, {
                name: "Palestinian Territory",
                code: "PSE",
                nationalday: "-",
                language: "Arabic",
                population: "4,017,000",
                capital: "-",
                currency: "New Israeli Sheqel",
                active: "no",
                x: "590.08",
                y: "247.8"
            }, {
                name: "Panama",
                code: "PAN",
                nationalday: "3 Nov",
                language: "Spanish",
                population: "3,343,000",
                capital: "Panama city",
                currency: "Balboa, US Dollar",
                active: "yes",
                x: "283.2",
                y: "339.04"
            }, {
                name: "Papua New Guinea",
                code: "PNG",
                nationalday: "16 Sep",
                language: "Tok Pisin, Hiri Motu, English",
                population: "6,331,000",
                capital: "Port Moresby",
                currency: "Kina",
                active: "yes",
                x: "903.24",
                y: "360.52"
            }, {
                name: "Paraguay",
                code: "PRY",
                nationalday: "14 May",
                language: "Spanish, Guarani",
                population: "6,127,000",
                capital: "Asunción",
                currency: "Guarani",
                active: "yes",
                x: "330.72",
                y: "439.92"
            }, {
                name: "Peru",
                code: "PER",
                nationalday: "28 Jul",
                language: "Spanish",
                population: "27,903,000",
                capital: "Lima",
                currency: "Nuevo Sol",
                active: "yes",
                x: "282.56",
                y: "401.24"
            }, {
                name: "Philippines",
                code: "PHL",
                nationalday: "12 Jun",
                language: "Filipino, English",
                population: "88,706,300",
                capital: "Manila",
                currency: "Peso",
                active: "yes",
                x: "836.24",
                y: "296.64"
            }, {
                name: "Pitcairn",
                code: "PCN",
                nationalday: "2nd Sat in June",
                language: "English, Pitkern",
                population: "50",
                capital: "Adamstown",
                currency: "New Zealand Dollar",
                active: "yes",
                x: "22.72",
                y: "409.12"
            }, {
                name: "Poland",
                code: "POL",
                nationalday: "3 May, and 11 Nov",
                language: "Polish",
                population: "38,115,967",
                capital: "Warsaw",
                currency: "Zloty",
                active: "yes",
                x: "543.92",
                y: "177.96"
            }, {
                name: "Portugal",
                code: "PRT",
                nationalday: "10 Jun",
                language: "Portuguese",
                population: "10,623,000",
                capital: "Lisbon",
                currency: "Euro",
                active: "yes",
                x: "466.08",
                y: "219.8"
            }, {
                name: "Puerto Rico (US)",
                code: "PRI",
                nationalday: "25 Jul",
                language: "Spanish, English",
                population: "3,991,000",
                capital: "San Juan",
                currency: "US Dollar",
                active: "yes",
                x: "322.92",
                y: "311.16"
            }, {
                name: "Qatar",
                code: "QAT",
                nationalday: "3 Sept and 18 Dec",
                language: "Arabic",
                population: "841,000",
                capital: "Doha",
                currency: "Qatari Rial",
                active: "yes",
                x: "637.64",
                y: "268.84"
            }, {
                name: "Réunion (France)",
                code: "REU",
                nationalday: "14 Jul",
                language: "French",
                population: "793,000",
                capital: "Saint-Denis",
                currency: "Euro",
                active: "yes",
                x: "651.56",
                y: "408.24"
            }, {
                name: "Romania",
                code: "ROU",
                nationalday: "1 Dec",
                language: "Romanian",
                population: "21,438,000",
                capital: "Bucharest",
                currency: "Lei",
                active: "yes",
                x: "482.96",
                y: "305.52"
            }, {
                name: "Russian Federation",
                code: "RUS",
                nationalday: "12 Jun",
                language: "Russian",
                population: "141,947,000",
                capital: "Moscow",
                currency: "Russian Ruble",
                active: "yes",
                x: "726.72",
                y: "142.320"
            }, {
                name: "Rwanda",
                code: "RWA",
                nationalday: "1 Jul",
                language: "Kinyarwanda, French, English",
                population: "9,725,000",
                capital: "Kigali",
                currency: "Rwanda Franc",
                active: "yes",
                x: "575.52",
                y: "348.52"
            }, {
                name: "Saint Barthelemy",
                code: "BLM",
                nationalday: "-",
                language: "French",
                population: "8,823",
                capital: "Gustavia",
                currency: "Euro",
                active: "yes",
                x: "327.44",
                y: "335.52"
            }, {
                name: "Saint Helena, Ascension and Tristan da Cunha",
                code: "SHN",
                nationalday: "2nd Saturday in June",
                language: "English",
                population: "6,600",
                capital: "Jamestown",
                currency: "Saint Helena Pound",
                active: "yes",
                x: "324.52",
                y: "337.96"
            }, {
                name: "Saint Kitts and Nevis",
                code: "KNA",
                nationalday: "19 Sep",
                language: "English",
                population: "50,000",
                capital: "Basseterre",
                currency: "East Caribbean Dollar",
                active: "yes",
                x: "326.20",
                y: "331.56"
            }, {
                name: "Saint Lucia",
                code: "LCA",
                nationalday: "13 Dec",
                language: "English",
                population: "165,000",
                capital: "Castries",
                currency: "East Caribbean Dollar",
                active: "yes",
                x: "326.6",
                y: "333.08"
            }, {
                name: "Saint Martin (French)",
                code: "MAF",
                nationalday: "-",
                language: "French",
                population: "36,661",
                capital: "Marigot",
                currency: "Euro",
                active: "yes",
                x: "328.28",
                y: "332.44"
            }, {
                name: "Saint Pierre and Miquelon (France)",
                code: "SPM",
                nationalday: "14 Jul",
                language: "French",
                population: "6,125",
                capital: "Saint-Pierre",
                currency: "Euro",
                active: "yes",
                x: "326.6",
                y: "335.52"
            }, {
                name: "Saint Vincent and the Grenadines",
                code: "VCT",
                nationalday: "27 Oct",
                language: "English",
                population: "120,000",
                capital: "Kingstown",
                currency: "East Caribbean Dollar",
                active: "yes",
                x: "326.6",
                y: "335.52"
            }, {
                name: "Samoa",
                code: "WSM",
                nationalday: "1 Jun",
                language: "Samoan, English",
                population: "187,000",
                capital: "Apia",
                currency: "Tala",
                active: "yes",
                x: "1019.2",
                y: "370.4"
            }, {
                name: "San Marino",
                code: "SMR",
                nationalday: "3 Sep",
                language: "Italian",
                population: "31,000",
                capital: "San Marino",
                currency: "Euro",
                active: "yes",
                x: "527.52",
                y: "210.640"
            }, {
                name: "Sao Tome and Principe",
                code: "STP",
                nationalday: "12 Jul",
                language: "Portuguese",
                population: "158,000",
                capital: "São Tomé",
                currency: "Dobra",
                active: "yes",
                x: "328.28",
                y: "334.64"
            }, {
                name: "Saudi Arabia",
                code: "SAU",
                nationalday: "23 Sep",
                language: "Arabic",
                population: "24,735,000",
                capital: "Riyadh",
                currency: "Riyal",
                active: "yes",
                x: "618.48",
                y: "271.8"
            }, {
                name: "Senegal",
                code: "SEN",
                nationalday: "4 Apr",
                language: "French",
                population: "12,379,000",
                capital: "Dakar",
                currency: "CFA Franc",
                active: "yes",
                x: "449.4",
                y: "297.56"
            }, {
                name: "Serbia",
                code: "SRB",
                nationalday: "15 Feb",
                language: "Serbian",
                population: "9,858,000",
                capital: "Belgrade",
                currency: "Dinar",
                active: "yes",
                x: "552.24",
                y: "208.72"
            }, {
                name: "Seychelles",
                code: "SYC",
                nationalday: "18 Jun",
                language: "English, French, Seychellois Creole",
                population: "87,000",
                capital: "Victoria",
                currency: "Seychelles Rupee",
                active: "yes",
                x: "652.40",
                y: "361.24"
            }, {
                name: "Sierra Leone",
                code: "SLE",
                nationalday: "27 Apr",
                language: "English",
                population: "5,866,000",
                capital: "Freetown",
                currency: "Leone",
                active: "yes",
                x: "456.96",
                y: "317.24"
            }, {
                name: "Singapore",
                code: "SGP",
                nationalday: "9 Aug",
                language: "English, Malay, Mandarin",
                population: "4,681,000",
                capital: "Singapore",
                currency: "Singapore Dollar",
                active: "yes",
                x: "787.72",
                y: "338.16"
            }, {
                name: "Sint Maarten (Dutch)",
                code: "SXM",
                nationalday: "-",
                language: "Dutch,English",
                population: "37,429",
                capital: "Philipsburg",
                currency: "Netherlands Antillean Guilder",
                active: "yes",
                x: "340.52",
                y: "316.24"
            }, {
                name: "Slovakia",
                code: "SVK",
                nationalday: "29 Aug and 1 Sep",
                language: "Slovak",
                population: "5,396,629",
                capital: "Bratislava",
                currency: "Euro",
                active: "yes",
                x: "545.76",
                y: "189.08"
            }, {
                name: "Slovenia",
                code: "SVN",
                nationalday: "25 Jun",
                language: "Slovenian",
                population: "2,023,223",
                capital: "Ljubljana",
                currency: "Euro",
                active: "yes",
                x: "532.04",
                y: "200.84"
            }, {
                name: "Solomon Islands",
                code: "SLB",
                nationalday: "7 Jul",
                language: " Melanesian Pidgin, English",
                population: "496,000",
                capital: "Honiara",
                currency: "Solomon Islands Dollar",
                active: "yes",
                x: "948.28",
                y: "368.36"
            }, {
                name: "Somalia",
                code: "SOM",
                nationalday: "21 Oct",
                language: "Somali, Italian",
                population: "8,699,000",
                capital: "Mogadishu",
                currency: "Somali Shilling",
                active: "yes",
                x: "624.56",
                y: "326.84"
            }, {
                name: "South Africa",
                code: "ZAF",
                nationalday: "27 Apr",
                language: "Afrikaans, English",
                population: "47,850,700",
                capital: "Pretoria",
                currency: "Rand",
                active: "yes",
                x: "560.36",
                y: "427.28"
            }, {
                name: "South Georgia and the South Sandwich Islands",
                code: "SGS",
                nationalday: "14 Jun",
                language: "English",
                population: "20",
                capital: "King Edward Point",
                currency: "UK Pound",
                active: "yes",
                x: "637.24",
                y: "477.84"
            }, {
                name: "South Sudan",
                code: "SSD",
                nationalday: "-",
                language: "English",
                population: "8,260,490",
                capital: "Juba",
                currency: "South Sudanese Pound",
                active: "yes",
                x: "575.72",
                y: "320.4"
            }, {
                name: "Spain",
                code: "ESP",
                nationalday: "12 Oct",
                language: "Spanish",
                population: "45,200,737",
                capital: "Madrid",
                currency: "Euro",
                active: "yes",
                x: "478.08",
                y: "220.16"
            }, {
                name: "Sri Lanka",
                code: "LKA",
                nationalday: "4 Feb",
                language: "Sinhala, Tamil",
                population: "19,299,000",
                capital: "Colombo",
                currency: "Sri Lanka Rupee",
                active: "yes",
                x: "721.32",
                y: "321.68"
            }, {
                name: "Sudan",
                code: "SDN",
                nationalday: "1 Jan",
                language: "Arabic, English",
                population: "38,560,000",
                capital: "Khartoum",
                currency: "Pound",
                active: "yes",
                x: "577.32",
                y: "290.04"
            }, {
                name: "Suriname",
                code: "SUR",
                nationalday: "25 Nov",
                language: "Dutch",
                population: "458,000",
                capital: "Paramaribo",
                currency: "Surinamese Dollar",
                active: "yes",
                x: "339.6",
                y: "365.4"
            }, {
                name: "Svalbard and Jan Mayen",
                code: "SJM",
                nationalday: "-",
                language: "-",
                population: "-",
                capital: "-",
                currency: "Norwegian Kroner",
                active: "no",
                x: "555.16",
                y: "53.760"
            }, {
                name: "Swaziland",
                code: "SWZ",
                nationalday: "6 Sep",
                language: "English, Swazi",
                population: "1,141,000",
                capital: "Mbabane",
                currency: "Lilangeni",
                active: "yes",
                x: "580.96",
                y: "420.92"
            }, {
                name: "Sweden",
                code: "SWE",
                nationalday: "6 Jun",
                language: "Swedish",
                population: "9,179,731",
                capital: "Stockholm",
                currency: "Krona",
                active: "yes",
                x: "535.96",
                y: "127.08"
            }, {
                name: "Switzerland",
                code: "CHE",
                nationalday: "1 Aug",
                language: "German, French, Italian",
                population: "7,508,700",
                capital: "Bern",
                currency: "Swiss Franc",
                active: "yes",
                x: "512.76",
                y: "196.08"
            }, {
                name: "Syrian Arab Republic",
                code: "SYR",
                nationalday: "17 Apr",
                language: "Arabic",
                population: "19,929,000",
                capital: "Damascus",
                currency: "Syrian Pound",
                active: "yes",
                x: "600.2",
                y: "237.4"
            }, {
                name: "Taiwan",
                code: "TWN",
                nationalday: "10 Oct",
                language: "Mandarin",
                population: "22,958,000",
                capital: "Taipei",
                currency: "Taiwan Dollar",
                active: "yes",
                x: "836.12",
                y: "273.16"
            }, {
                name: "Tajikistan",
                code: "TJK",
                nationalday: "9 Sep",
                language: "Tajik",
                population: "6,736,000",
                capital: "Dushanbe",
                currency: "Somoni",
                active: "yes",
                x: "698.88",
                y: "226.92"
            }, {
                name: "Tanzania",
                code: "TZA",
                nationalday: "26 Apr",
                language: "Swahili",
                population: "40,454,000",
                capital: "Dodoma",
                currency: "Tanzanian Shilling",
                active: "yes",
                x: "593.88",
                y: "361.4"
            }, {
                name: "Thailand",
                code: "THA",
                nationalday: "5 Dec",
                language: "Thai",
                population: "62,828,706",
                capital: "Bangkok",
                currency: "Baht",
                active: "yes",
                x: "779.6",
                y: "297.8"
            }, {
                name: "Timor-Leste",
                code: "TLS",
                nationalday: "20 May",
                language: "Tetum and Portuguese",
                population: "1,155,000",
                capital: "Dili",
                currency: "US Dollar",
                active: "yes",
                x: "850.72",
                y: "367.72"
            }, {
                name: "Togo",
                code: "TGO",
                nationalday: "27 Apr",
                language: "French",
                population: "6,585,000",
                capital: "Lomé",
                currency: "CFA Franc",
                active: "yes",
                x: "492.4",
                y: "316.64"
            }, {
                name: "Tokelau (New Zealand)",
                code: "TKL",
                nationalday: "-",
                language: "Tokelauan, English",
                population: "1,400",
                capital: "-",
                currency: "New Zealand Dollar",
                active: "no",
                x: "1018.40",
                y: "379.20"
            }, {
                name: "Tonga",
                code: "TON",
                nationalday: "4 Jun",
                language: "Tongan, English",
                population: "100,000",
                capital: "Nuku'alofa",
                currency: "Pa'anga",
                active: "yes",
                x: "1005.2",
                y: "396.28"
            }, {
                name: "Trinidad and Tobago",
                code: "TTO",
                nationalday: "31 Aug",
                language: "English",
                population: "1,333,000",
                capital: "Port-of-Spain",
                currency: "Trinidad and Tobago Dollar",
                active: "yes",
                x: "325.08",
                y: "346.28"
            }, {
                name: "Tunisia",
                code: "TUN",
                nationalday: "20 Mar",
                language: "Arabic",
                population: "10,327,000",
                capital: "Tunis",
                currency: "Tunisian Dinar",
                active: "yes",
                x: "515.44",
                y: "240"
            }, {
                name: "Turkey",
                code: "TUR",
                nationalday: "29 Oct",
                language: "Turkish",
                population: "70,586,256",
                capital: "Ankara",
                currency: "Turkish Lira",
                active: "yes",
                x: "587.56",
                y: "217.96"
            }, {
                name: "Turkmenistan",
                code: "TKM",
                nationalday: "27 Oct",
                language: "Turkmen",
                population: "4,965,000",
                capital: "Ashgabat",
                currency: "Manat",
                active: "yes",
                x: "657.64",
                y: "223.24"
            }, {
                name: "Turks and Caicos Islands",
                code: "TCA",
                nationalday: "30 Aug",
                language: "English",
                population: "26,000",
                capital: "Cockburn Town",
                currency: "US Dollar",
                active: "yes",
                x: "305.12",
                y: "297.2"
            }, {
                name: "Tuvalu",
                code: "TUV",
                nationalday: "1 Oct",
                language: "Tuvaluan, English",
                population: "11,000",
                capital: "Funafuti",
                currency: "Australian Dollar",
                active: "yes",
                x: "1006.88",
                y: "384.32"
            }, {
                name: "Uganda",
                code: "UGA",
                nationalday: "9 Oct",
                language: "English, Swahili",
                population: "30,884,000",
                capital: "Kampala",
                currency: "Ugandan New Shilling",
                active: "yes",
                x: "584.12",
                y: "339.32"
            }, {
                name: "Ukraine",
                code: "UKR",
                nationalday: "24 Aug",
                language: "Ukrainian",
                population: "46,398,114",
                capital: "Kyiv",
                currency: "Hryvna",
                active: "yes",
                x: "581.4",
                y: "189.12"
            }, {
                name: "United Arab Emirates",
                code: "ARE",
                nationalday: "2 Dec",
                language: "Arabic",
                population: "4,380,000",
                capital: "Abu Dhabi",
                currency: "UAE Dirham",
                active: "yes",
                x: "647.24",
                y: "274.92"
            }, {
                name: "United Kingdom",
                code: "GBR",
                nationalday: "-",
                language: "English",
                population: "60,587,300",
                capital: "London",
                currency: "Pound",
                active: "yes",
                x: "484.72",
                y: "173.28"
            }, {
                name: "United States",
                code: "USA",
                nationalday: "4 Jul",
                language: "English",
                population: "303,430,511",
                capital: "Washington",
                currency: "US Dollar",
                active: "yes",
                x: "219.600",
                y: "246.44"
            }, {
                name: "United States Minor Outlying Islands",
                code: "UMI",
                nationalday: "-",
                language: "Spanish, Portunol",
                population: "0",
                capital: "-",
                currency: "US Dollar",
                active: "no",
                x: "67",
                y: "409.12"
            }, {
                name: "Uruguay",
                code: "URY",
                nationalday: "25 Aug",
                language: "Spanish",
                population: "3,340,000",
                capital: "Montevideo",
                currency: "Uruguay Peso",
                active: "yes",
                x: "338.84",
                y: "473"
            }, {
                name: "Uzbekistan",
                code: "UZB",
                nationalday: "1 Sep",
                language: "Uzbek",
                population: "27,372,000",
                capital: "Tashkent",
                currency: "Sum",
                active: "yes",
                x: "672.76",
                y: "217.72"
            }, {
                name: "Vanuatu",
                code: "VUT",
                nationalday: "30 Jul",
                language: "Bislama",
                population: "226,000",
                capital: "Port-Vila",
                currency: "Vatu",
                active: "yes",
                x: "977.36",
                y: "394.72"
            }, {
                name: "Venezuela",
                code: "VEN",
                nationalday: "5 Jul",
                language: "Spanish",
                population: "28,200,000",
                capital: "Caracas",
                currency: "Bolivares Fuertes",
                active: "yes",
                x: "308.44",
                y: "351.4"
            }, {
                name: "Viet Nam",
                code: "VNM",
                nationalday: "2 Sep",
                language: "Vietnamese",
                population: "87,375,000",
                capital: "Hanoi",
                currency: "Dong",
                active: "yes",
                x: "799.72",
                y: "304.44"
            }, {
                name: "Virgin Islands (British)",
                code: "VGB",
                nationalday: "-",
                language: "English",
                population: "27,000",
                capital: "Road Town",
                currency: "US Dollar",
                active: "no",
                x: "323.76",
                y: "311.16"
            }, {
                name: "Virgin Islands (U.S.)",
                code: "VIR",
                nationalday: "-",
                language: "English",
                population: "109,750",
                capital: "Charlotte Amalie",
                currency: "US Dollar",
                active: "no",
                x: "330.84",
                y: "311.6"
            }, {
                name: "Wallis and Futuna",
                code: "WLF",
                nationalday: "14 Jul",
                language: "French",
                population: "15,000",
                capital: "Mata-Utu",
                currency: "CFP Franc",
                active: "no",
                x: "1004.32",
                y: "392.28"
            }, {
                name: "Western Sahara",
                code: "ESH",
                nationalday: "-",
                language: "Arabic",
                population: "480,000",
                capital: "El Aaiun",
                currency: "Moroccan Dirham",
                active: "no",
                x: "449.52",
                y: "270.28"
            }, {
                name: "Yemen",
                code: "YEM",
                nationalday: "22 May",
                language: "Arabic",
                population: "22,389,000",
                capital: "Sana'a",
                currency: "Rial",
                active: "yes",
                x: "627.04",
                y: "295.6"
            }, {
                name: "Zambia",
                code: "ZMB",
                nationalday: "24 Oct",
                language: "English",
                population: "11,922,000",
                capital: "Lusaka",
                currency: "Kwacha",
                active: "yes",
                x: "577.64",
                y: "379.08"
            }, {
                name: "Zimbabwe",
                code: "ZWE",
                nationalday: "18 Apr",
                language: "English",
                population: "13,349,000",
                capital: "Harare",
                currency: "Zimbabwean Dollar",
                active: "yes",
                x: "577.52",
                y: "400.44"
            }],
            school: [{code: "E-A", name: "Main Entry", x: "225", y: "109"}, {
                code: "E-B",
                name: "Play Area",
                x: "585",
                y: "461"
            }, {code: "E-C", name: "WetLand", x: "563", y: "119"}, {
                code: "E-D",
                name: "Baseball ground",
                x: "856",
                y: "475"
            }, {code: "P-B", name: "Visitor Parking", x: "234", y: "201"}, {
                code: "P-A",
                name: "Staff Parking",
                x: "385",
                y: "384"
            }, {code: "B-A", name: "Building A", x: "753", y: "370"}, {
                code: "B-B",
                name: "Building B",
                x: "454",
                y: "521"
            }, {code: "B-C", name: "Building C", x: "311", y: "490"}, {
                code: "B-D",
                name: "Building D",
                x: "318",
                y: "563"
            }, {code: "B-E", name: "Building E", x: "174", y: "562"}, {
                code: "B-E",
                name: "Building G",
                x: "144",
                y: "494"
            }, {code: "B-L", name: "Library", x: "409", y: "221"}, {
                code: "B-O",
                name: "Campus Office",
                x: "138",
                y: "335"
            }, {code: "B-F", name: "Canteen", x: "221", y: "348"}, {
                code: "B-H",
                name: "Health Clinic",
                x: "516",
                y: "360"
            }, {code: "B-M", name: "Auditorium", x: "825", y: "170"}],
            classroom: [{code: "R-1-1", name: "Seat A", x: "612", y: "382"}, {
                code: "R-1-2",
                name: "Seat B",
                x: "530",
                y: "367"
            }, {code: "R-1-3", name: "Seat C", x: "449", y: "337"}, {
                code: "R-2-1",
                name: "Seat D",
                x: "705",
                y: "322"
            }, {code: "R-2-2", name: "Seat E", x: "617", y: "289"}, {
                code: "R-2-3",
                name: "Seat F",
                x: "529",
                y: "280"
            }, {code: "R-2-4", name: "Seat G", x: "441", y: "283"}, {
                code: "R-2-5",
                name: "Seat H",
                x: "356",
                y: "312"
            }, {code: "R-3-1", name: "Seat I", x: "720", y: "219"}, {
                code: "R-3-2",
                name: "Seat J",
                x: "630",
                y: "194"
            }, {code: "R-3-3", name: "Seat K", x: "532", y: "182"}, {
                code: "R-3-4",
                name: "Seat L",
                x: "435",
                y: "190"
            }, {code: "R-3-5", name: "Seat L", x: "345", y: "212"}, {
                code: "C-0-1",
                name: "Computer 1",
                x: "267",
                y: "311"
            }, {code: "C-0-2", name: "Computer 2", x: "263", y: "207"}, {
                code: "T-0-0",
                name: "Teacher",
                x: "693",
                y: "447"
            }]
        }
    }, {}],
    139: [function (require, module, exports) {
        "use strict"
        function mapDataFactory(l, n, a, k) {
            "use strict"
            var e = 3
            var f = [{x: 512, y: 320, name: "center"}, {x: 900, y: 20, name: "topright"}, {
                x: 100,
                y: 600,
                name: "bottomleft"
            }, {x: 100, y: 20, name: "topleft"}, {x: 900, y: 600, name: "bottomright"}]
            var d
            var b
            var g = f
            var h = f
            var c = {
                init: m,
                getMapDataByType: i,
                getMapClass: q,
                getTargetClass: o,
                getMoveClass: p,
                getOpponentList: r
            }
            return c
            function m() {
                var f = n.defer()
                if (b !== undefined && b !== null) {
                    f.resolve(c)
                } else {
                    var a = require("138")
                    if (a.hasOwnProperty("countries")) {
                        b = a.countries
                        d = {}
                        var i
                        for (var e = 0; e < b.length; e++) {
                            i = b[e]
                            i.indexNo = e
                            d[i.code] = i
                        }
                    }
                    if (a.hasOwnProperty("school")) {
                        g = a.school
                    }
                    if (a.hasOwnProperty("classroom")) {
                        h = a.classroom
                    }
                    f.resolve(c)
                }
                return f.promise
            }

            function i(c) {
                l.debug("getMapDataByType")
                switch (c) {
                    case a.WORLD:
                        return b
                    case a.CLASS:
                        return h
                    case a.SCHOOL:
                        return g
                    default:
                        return undefined
                }
            }

            function o(b) {
                switch (b) {
                    case a.WORLD:
                        return "magnify"
                    case a.SCHOOL:
                        return "magnify"
                    case a.CLASS:
                        return "magnify"
                }
            }

            function p(a) {
                switch (a) {
                    default:
                        return null
                }
            }

            function q(b) {
                switch (b) {
                    case a.WORLD:
                        return "worldMap"
                    case a.SCHOOL:
                        return "schoolMap"
                    case a.CLASS:
                        return "classMap"
                    default:
                        return ""
                }
            }

            function r(c, g) {
                if (c !== undefined && c !== null && c.hasOwnProperty("length")) {
                    var d = null
                    var b
                    for (var f = 0; f < c.length; f++) {
                        b = c[f]
                        if (g === a.WORLD) {
                            b = s(b, e)
                        } else {
                            b = t(b, i(g), e)
                        }
                        if (b !== null) {
                            if (d === null) {
                                d = []
                            }
                            d.push(b)
                        }
                    }
                    return d
                } else {
                    return null
                }
            }

            function s(a, c) {
                if (d.hasOwnProperty(a.CountryCode)) {
                    var b = d[a.CountryCode]
                    if (b) {
                        a.x = b.x
                        a.y = b.y
                        a.prevIndex = b.indexNo
                        a.DisplayInfo = {label: b.name, imageUrl: k.getConfigValue("flagBaseAddress") + b.code + ".png"}
                    }
                }
                if (!a.DisplayInfo) {
                    a.DisplayInfo = {label: a.CountryCode}
                    a.x = 0
                    a.y = 0
                    a.prevIndex = -1
                }
                a.oppDelay = c
                return a
            }

            function t(a, d, f) {
                var e = d.length
                var c = u(e)
                var b = d[c]
                a.x = b.x
                a.y = b.y
                a.prevIndex = c
                a.oppDelay = f
                a.DisplayInfo = {label: b.name}
                return a
            }

            var j

            function u(d) {
                var b = true
                a:while (b) {
                    a = undefined
                    b = false
                    var c = d
                    var a = Math.floor(Math.random() * c)
                    if (a !== j) {
                        j = a
                        return a
                    }
                    d = c
                    b = true
                    continue a
                }
            }
        }

        mapDataFactory.$inject = ["$log", "$q", "matchTypeEnum", "configDataFactory"]
        module.exports = mapDataFactory
    }, {138: 138}],
    140: [function (require, module, exports) {
        module.exports = '<!-- Map background : world, classroom and school -->\n<div class="mapSize" ng-class="mapClass" quick-touch="clickChangePosition($event)">\n    <div id="moveItem" style="position: absolute;">\n        <!-- Search Object : Magnify, bird and wave character ... -->\n        <div default-class="defaultClass" animate-switcher="" animate-state="animateState"\n             size-loaded="imageSizeLoaded"></div>\n\n        <!-- Opponent detail : Flag & Country Name -->\n        <div ng-show="showOppAnimated" class="oppInfo-animate">\n            <img ng-src="{{displayInfo.imageUrl}}" ng-show="displayInfo.imageUrl !== null && displayInfo.imageUrl !== undefined">\n            <span ng-bind="displayInfo.label"></span>\n        </div>\n    </div>\n</div>\n'
    }, {}],
    141: [function (require, module, exports) {
        module.exports = '<div class="mapPos searchRoom">\n    <coordinate-finder-directive map-class="mapClass"\n                                 default-class="targetClass"\n                                 move-class="moveClass"\n                                 animate-state-name="animate"\n                                 switch-value="searchOn"\n                                 coordinate-list="coordinateList"\n                                 opponent-list="showOpponentList"\n                                 search-complete="startGame"></coordinate-finder-directive>\n</div>\n\n<!--<button ng-click="startSearchClick()" ng-bind="startSearchLabel"></button>-->\n<!--<button ng-click="showOpponentClick()">Show Opponent List</button>-->\n'
    }, {}],
    142: [function (require, module, exports) {
        "use strict"
        angular.module("livemathletics.searchroom", ["livemathletics.matchEngine"]).controller("SearchRoomController", require("136")).directive("coordinateFinderDirective", require("137")).factory("mapDataFactory", require("139"))
    }, {136: 136, 137: 137, 139: 139}],
    143: [function (require, module, exports) {
        "use strict"
        function SplashScreenController(a, b, c, s, r, $, ad, g, e, _, u, k, B, h, Z, i, X, y, n, d, ah, aj, ak, al) {
            "use strict"
            a.$on("$destroy", ai)
            a.$on("$stateChangeStart", d.changeStateHandler)
            d.exit = ah.exit
            a.showLiveMathReport = aA
            a.changeSelectedLevel = L
            a.showLevelDescriptor = aC
            a.findMatchByMatchType = a3
            a.selectGameMenu = Q
            a.getvsWorldEventStyle = ab
            a.getvsClassEventStyle = ac
            a.showWaitingRoom = O
            a.tryInviteOpponents = a6
            a.notifyChallengeCollection = R
            a.challengeCollection = {notify: null}
            a.notifyCancelChallenges = S
            a.cancelChallenges = {notify: null}
            a.notifyInvitationAcception = ag
            a.updateDisplay = {notify: null}
            a.performGhost = C
            d.allowSwitch = false
            a.defaultNavigation = a0
            a.changeTopPosition = at
            a.panelPosition = au
            a.eventPanelClick = aq
            a.showResetEventPopup = an
            a.resetPracticeEventResults = ap
            J(i.getEventData())
            var l = {}
            var o = []
            var v = []
            var f = {}
            var x
            var U
            var z
            var P = e.getConfigValue("freezingWhosTimeInterval") || 15e3
            var j = null
            var m = false
            var D = e.getConfigValue("usingShadowPopup") || false
            var K = e.getConfigValue("ghostModePopUp") || false
            a.buildVersion = ak
            a7()
            var az = 0

            function aB(b) {
                a.unicefPoints = b
            }

            function a7() {
                al.get().then(aB)
                a9()
                a.splashSetting = g.getDisplaySetting()
                a.splashData = g.getSplashData()
                a.userData = g.getUserProfile()
                a.matchType = g.getCurrentMatchType()
                L(a.splashSetting.level)
                b.debug("splashSetting: ", a.splashSetting)
                b.debug("splashData: ", a.splashData)
                b.debug("userData: ", a.userData)
                a.itemMeData = null
                a.itemInvitationList = null
                a.itemOnAndOffLineList = null
                a.faceAssetBasePathPngs = e.getConfigValue("faceAssetBasePathPngs")
                a8()
                if (a.userData.isHomeStudent !== true) {
                    k.initGetUsers()
                }
                if (K && !a.userData.isHomeStudent) {
                    a.featureHtml = require("156")
                    e.setConfigValue("ghostModePopUp", false)
                }
                E()
            }

            function a8() {
                if (a.userData.isHomeStudent === true) {
                    B.promise().then(null, null, am)
                } else {
                    k.registerDataReceiver(av, aw, ax)
                    h.subscribe("onlineUser.pollUsersAllStatus", q)
                    h.subscribe("waitingRoom.cancelGame", V)
                    h.subscribe("waitingRoom.playVsComputer", a2)
                    h.subscribe("waitingRoomFactory.inviteOpponentSuccess", N)
                    h.subscribe("waitingRoomFactory.joinGameSuccess", H)
                }
                u.promise().then(null, null, ar)
            }

            function a9() {
                var a = 1
                var b = e.getConfigValue("userToken")
                var c = e.getConfigValue("WegMathsEventCdnPath")
                var d = e.getConfigValue("EventServiceGetGamesAndScores")
                var f = e.getConfigValue("EventServiceScores")
                i.dataPool.receiveEventInfo = aa
                i.dataPool.resetEventInfo = T
                i.init(a, b, c, d, f)
            }

            function aa() {
                J(i.getEventData())
                I()
            }

            function J(b) {
                if (b) {
                    a.eventInfo = b
                    a.isEvent = b.isEvent
                    a.eventInProgress = b.eventInProgress
                    a.eventTiming = b.eventTiming
                    if (a.isEvent === true) {
                        i.dataPool.updateEventCountDown = af
                    }
                } else {
                    a.isEvent = false
                    a.eventInProgress = false
                }
            }

            function T() {
                b.debug("eventInfo: ", a.eventInfo)
                if (!a.eventInfo) {
                    return
                }
                a.eventInfo.CompletedGames = 0
                a.eventInfo.TotalScore = 0
                a.eventInfo.eventGameList = a.eventInfo.eventResetList
            }

            function af(e, b, d) {
                if (b !== undefined && b !== null) {
                    if (a.eventInProgress === false && b === true) {
                        T()
                        if (c.current.name === "splashscreen.leveldescriptor") {
                            a0()
                        }
                    }
                    a.eventInProgress = b
                    I()
                }
                if (d !== undefined && d !== null) {
                    a.isEvent = d
                }
                if (e && a.eventTiming) {
                    a.eventTiming = e
                }
            }

            function I() {
                if (a.eventInfo) {
                    if (a.eventInfo.isEvent === true) {
                        e.setEventID(a.eventInfo.eventId)
                    } else {
                        e.setEventID(0)
                    }
                    as()
                } else {
                    e.setEventID(0)
                }
            }

            function ai(b, c) {
                ae()
                if (a.userData.isHomeStudent !== true) {
                    if (b.currentScope === a || b.currentScope === b.targetScope) {
                        h.unsubscribe("onlineUser.pollUsersAllStatus", q)
                        h.unsubscribe("waitingRoom.cancelGame", V)
                        h.unsubscribe("waitingRoom.playVsComputer", a2)
                        h.unsubscribe("waitingRoomFactory.inviteOpponentSuccess", N)
                        h.unsubscribe("waitingRoomFactory.joinGameSuccess", H)
                    }
                }
            }

            function G() {
                q(false)
                u.stop()
                B.stop()
            }

            function ae() {
                d.exit = undefined
                n.cleanUp()
                G()
            }

            function E() {
                a.disableGo = false
                if (a.userData.isHomeStudent === true) {
                    var b = e.getConfigValue("EventStatusNextIntervalTime")
                    B.start(b)
                } else {
                    q(true)
                }
                u.start()
            }

            function am(b) {
                a.eventStatsData = b
            }

            function ar(b) {
                a.onlineData = b
                if (a.userData.isHomeStudent) {
                    _.setOnlineUserCount(b.GlobalOnlineUser)
                } else {
                    _.setOnlineUserCount(b.SchoolOnlineUser)
                }
            }

            function L(d) {
                a.selectedLevelItem = g.getLevelInfoById(d)
                g.setCurrentLevel(d)
                b.debug("LevelItem: ", a.selectedLevelItem)
                ay()
                if (c.current.name === "splashscreen.leveldescriptor") {
                    M(a.selectedLevelItem.LevelID)
                }
            }

            function aA() {
                var a = "splashscreen.report"
                if (c.current.name !== a) {
                    w()
                    b.info("show splash screen report")
                    d.allowSwitch = true
                    c.go(a)
                } else {
                    b.info("hide live maths student report")
                    A()
                }
            }

            function M(a) {
                d.allowSwitch = true
                b.info("show level descriptor", {level: a})
                c.go("splashscreen.leveldescriptor", {level: a})
            }

            function aC() {
                var d = "splashscreen.leveldescriptor"
                if (c.current.name !== d) {
                    w()
                    b.info("show level descriptor", {level: a.selectedLevelItem.LevelID})
                    M(a.selectedLevelItem.LevelID)
                } else {
                    A()
                    b.info("hide level descriptor")
                }
            }

            function a3() {
                b.debug("show searchroom: ", a.matchType, a.selectedLevel)
                b.info("play game", {matchType: a.matchType, level: a.selectedLevel})
                var e = a.selectedLevelItem.LevelID
                if (g.isVSClass(a.matchType) && a.userData.currentClassID <= 0 || g.isValidMatch(a.matchType) === false) {
                    b.error("Cannot create match. Invalid match selection", a.matchType, a.userData.currentClassID)
                } else {
                    G()
                    if (g.isVSComputer(a.matchType)) {
                        a.disableGo = true
                        n.cleanUp()
                        n.promise().then(a5, a4)
                        n.findMatchByType(a.matchType, e, a.selectedLevelItem.RankingEnum, a.userData.currentClassID)
                    } else {
                        var f = "searchroom"
                        if (c.current.name !== f) {
                            var h = {
                                matchType: a.matchType,
                                level: e,
                                rank: a.selectedLevelItem.RankingEnum,
                                classId: a.userData.currentClassID
                            }
                            b.debug("searchRoomData: ", h)
                            d.allowSwitch = true
                            d.addHistoryStep(c)
                            c.go(f, h)
                        }
                    }
                }
            }

            function a4(a) {
                b.error(a)
                E()
            }

            function a5(b) {
                d.allowSwitch = true
                d.addHistoryStep(c)
                n.switchToGame(a.selectedLevelItem.LevelID, a.matchType, b, c)
            }

            function a6(d) {
                var c = a.selectedLevelItem.LevelID
                y.doInviteOpponents(c, d)
                b.info("invite opponents")
            }

            function N(a) {
                m = true
                C(false)
                O(a, true)
            }

            function O(h, i) {
                b.debug("show waiting room ", a.matchType, a.selectedLevel)
                var e = a.selectedLevelItem.LevelID
                if (g.isValidMatch(a.matchType) && e > 0 && e <= 10) {
                    var f = "splashscreen.waitingroom"
                    if (c.current.name !== f) {
                        G()
                        d.allowSwitch = true
                        d.addHistoryStep(c)
                        c.go(f, {students: h, levelId: e, isToInvite: i})
                    }
                } else {
                    b.error("Missing Match Type or Game Level.")
                }
            }

            function A() {
                var a = "splashscreen"
                if (c.current.name !== a) {
                    d.allowSwitch = true
                    c.go(a)
                }
            }

            function Q(b) {
                g.setMatchTypeByName(b)
                a.matchType = g.getCurrentMatchType()
            }

            function ab() {
                if (a.isEvent && a.eventInProgress) {
                    return "weg_button"
                }
                return "button_vsTheworld"
            }

            function ac() {
                if (a.isEvent && a.eventInProgress) {
                    return "button_weg_vsMyClass"
                }
                return "button_vsMyClass"
            }

            function R(d) {
                var b = Z.clone(d)
                var c = b.length - 1
                if (c > 0) {
                    k.resetPollUsersAllStatus(false)
                    aD(a1, P)
                } else {
                    if (m === true) {
                        k.resetPollUsersAllStatus(false)
                    } else {
                        k.resetPollUsersAllStatus(true)
                    }
                    F()
                }
                if (a.challengeCollection.notify !== undefined && typeof a.challengeCollection.notify === "function") {
                    a.challengeCollection.notify(b)
                }
            }

            function S() {
                if (a.cancelChallenges.notify !== undefined && typeof a.cancelChallenges.notify === "function") {
                    a.cancelChallenges.notify()
                }
            }

            function H(c, b) {
                m = true
                if (b > 0) {
                    f.CountDownStart = 1
                    if (!f.hasOwnProperty("CountDownSeconds") || f.CountDownSeconds === 0 || f.CountDownSeconds > b) {
                        f.CountDownSeconds = b
                    }
                }
                f.InvitationParty = c
                a.showWaitingRoom(f, false)
            }

            function ag(a, d) {
                if (d === true) {
                    return
                }
                var b = Z.clone(a)
                f = null
                if (typeof a === "object") {
                    if (a.length > 0) {
                        f = b[1]
                    } else {
                        f = b
                    }
                }
                var c = f.MatchID
                y.setInitGamePlayers(f.InvitationParty)
                y.doJoinGame(c)
            }

            function q(b) {
                if ((b === true || b === false) && a.enableWhosonline === b) {
                    return
                }
                a.enableWhosonline = b
                if (b === true) {
                    m = false
                }
                k.resetPollUsersAllStatus(b)
            }

            function V() {
                E()
                b.info("cancel Whos Online Challenge")
                d.backToSplash()
            }

            function W(b, e) {
                var c = true
                if (b.hasOwnProperty("UserStatusEnum")) {
                    t(b)
                    if (b.UserStatusEnum === ad.USER_STATUS.INITIATED_GAME) {
                        c = false
                    }
                }
                var d = a.selectedLevelItem.LevelID || 0
                if (d > 0 && b.hasOwnProperty("MinRestrictedLevelLiveMathletics")) {
                    if (b.MinRestrictedLevelLiveMathletics > d) {
                        c = false
                    }
                }
                return c
            }

            function t(b) {
                var g = b.TotalPoints === undefined ? 0 : b.TotalPoints
                var f = b.LevelList === undefined ? [] : b.LevelList
                var c = {LevelID: 1, LivePoints: 0, PersonalBestScore: 1, RankEnum: 1}
                for (var e = 0; e < f.length; e++) {
                    if (f[e].LevelID === a.selectedLevelItem.LevelID) {
                        c = f[e]
                        break
                    }
                }
                var d = ""
                if (c.RankEnum !== undefined) {
                    d = X.getRank("value", c.RankEnum).label
                } else {
                    d = c.Rank
                    if (!isNaN(d)) {
                        d = X.getRank("value", parseInt(c.Rank)).label
                    }
                }
                var h = g
                b.DisplayRank = d
                b.DisplayWeeklyPoints = h
            }

            function Y(a, c) {
                t(a)
                var b = true
                if (a.hasOwnProperty("IsInviter") && a.IsInviter === false) {
                    b = false
                }
                return b
            }

            var p

            function an() {
                b.info("Retry Button Clicked")
                if (a.showResetPopup !== true) {
                    a.showResetPopup = true
                    p = a.$watch("showResetPopup", ao)
                    $.showBlocker(true, null, "retry-popup-blocker")
                }
            }

            function ao() {
                if (a.showResetPopup === false) {
                    $.showBlocker(false)
                    if (p) {
                        p()
                        p = undefined
                    }
                }
            }

            function ap() {
                b.info("event panel reset")
                i.deleteEventResult()
            }

            function aq() {
                b.info("event panel clicked")
                aj.play("woosh")
            }

            function aG() {
                if (a.eventInProgress === true) {
                    return "weg_button"
                }
                return "button_vsTheworld"
            }

            function as() {
                if (a.isEvent === true) {
                    a.HOFName = a.eventInfo.eventTitle
                    a.eventLevels = a.eventInfo.eventLevels
                } else {
                    a.HOFName = ""
                }
            }

            function at() {
                var b
                if (a.eventInProgress === true) {
                    b = "resultsTopPosition"
                }
                return b
            }

            function au() {
                var b
                if (a.isEvent === true) {
                    b = "eventPanelPosition"
                }
                return b
            }

            function av(b) {
                l = b
                t(l)
                a.itemMeData = l
            }

            function aw(c) {
                o = c
                var b = r("filter")(o, Y)
                a.itemInvitationList = b
                return
            }

            function ax(b) {
                v = b
                var c = r("filter")(b, W)
                a.itemOnAndOffLineList = c
            }

            function ay() {
                if (j !== null) {
                    a1()
                }
                t(l)
                a.itemMeData = l
                var b = r("filter")(o, Y)
                a.itemInvitationList = b
                var c = r("filter")(v, W)
                a.itemOnAndOffLineList = c
            }

            function C(c, d) {
                if (D === false) {
                    return
                }
                if (!x && c === true) {
                    a.displayGhostPerforming = true
                    x = true
                    z = d
                } else if (c === false) {
                    if (a.displayGhostPerforming === false) {
                        return
                    }
                    if (typeof a.updateDisplay.notify === "function") {
                        a.updateDisplay.notify(true, null, null)
                    }
                    var b = s(function () {
                        a.displayGhostPerforming = false
                        z = undefined
                        s.cancel(b)
                        b = null
                    }, 1e3)
                }
            }

            function a0(b) {
                A()
                if (D === false) {
                    return
                }
                if (b !== undefined && a.displayGhostPerforming !== false) {
                    if (typeof a.updateDisplay.notify === "function") {
                        var c = b.target, d = b.currentTarget
                        if (x !== undefined) {
                            if (!U) {
                                U = true
                                a.updateDisplay.notify(true, c, d, z)
                            } else {
                                C(false)
                            }
                        }
                    }
                }
            }

            function aF(a, e) {
                var c = -1
                if (a === undefined || a === null) {
                    return c
                }
                for (var b = 0, d = a.length; b < d; b++) {
                    if (e.UserProfileID === a[b].UserProfileID) {
                        c = a[b]
                        break
                    }
                }
                return c
            }

            function aE(b) {
                var c = Object.prototype.hasOwnProperty
                var a = 0
                for (var d in b) {
                    if (c.call(b, d)) {
                        ++a
                    }
                }
                return a
            }

            function aD(a, b) {
                if (j !== null) {
                    F()
                }
                if (j === null) {
                    j = s(a, b)
                }
            }

            function w() {
                if (a.userData.isHomeStudent === true) {
                    return
                }
                S()
                R([{}])
                F()
            }

            function a1() {
                w()
                if (m === true) {
                    return
                }
                k.resetPollUsersAllStatus(true)
            }

            function F() {
                s.cancel(j)
                j = null
            }

            function a2() {
                Q("Computer")
                b.info("play vs computer in waiting room")
                a.findMatchByMatchType()
            }
        }

        SplashScreenController.$inject = ["$scope", "$log", "$state", "$interval", "$filter", "sessionManager", "userStatusEnum", "headerData", "configDataFactory", "liveMathsProfileFactory", "onlineUserCountFactory", "onlineUserFactory", "eventStatsFactory", "observerPatternFactory", "cloneFactory", "eventFactory", "rankEnum", "waitingRoomFactory", "matchEngineFactory", "stateHandler", "navigationService", "audioManager", "buildVersion", "unicefPoints"]
        module.exports = SplashScreenController
    }, {156: 156}],
    144: [function (require, module, exports) {
        "use strict"
        function featureGreyOut(b, a) {
            "use strict"
            return {
                restrict: "A", link: function b(c, f, d) {
                    d.$observe("featureGreyOut", function (e) {
                        var b = e || ""
                        if (b !== "") {
                            var c = angular.element(b)
                            var d = a.find("body").eq(0)
                            d.append(c)
                            $("#featurePopUp").modal("show")
                        }
                    })
                    function e() {
                        $("#featurePopUp").modal("hide")
                    }

                    c.close = e
                }
            }
        }

        featureGreyOut.$inject = ["$log", "$document"]
        module.exports = featureGreyOut
    }, {}],
    145: [function (require, module, exports) {
        "use strict"
        function goButtonDirective(b) {
            "use strict"
            var c = {
                restrict: "EA",
                scope: {
                    findMatch: "=",
                    disableGo: "=",
                    showWaitingRoom: "=",
                    collectChallenges: "=",
                    cancelChallenge: "="
                },
                template: require("157"),
                link: e
            }
            var a = []

            function e(c, h, j, k) {
                c.isChallengeSelected = false
                c.goBtnClick = i
                c.cancelBtnClick = f
                var e = angular.element(h.children().children()[0])
                c.numChallenges = a.length - 1
                d(c, e)
                c.internalCollectChallenges = c.collectChallenges || {notify: null}
                c.internalCollectChallenges.notify = g
                function i() {
                    if (c.isChallengeSelected === false) {
                        b.info("Click Go")
                        c.findMatch()
                    } else {
                        b.info("Challenge Opponent")
                        c.showWaitingRoom(a, true)
                    }
                    f()
                }

                function f() {
                    a = []
                    g(a)
                    if (typeof c.cancelChallenge === "function") {
                        c.cancelChallenge()
                    }
                }

                function g(b) {
                    a = b
                    c.numChallenges = a.length - 1
                    c.isChallengeSelected = c.numChallenges !== 0
                    d(c, e)
                    return
                }
            }

            function d(a, b) {
                if (a.numChallenges > 0) {
                    b.removeClass("font-60")
                    b.addClass("font-16")
                    b.addClass("challenge-text-position")
                    if (a.numChallenges > 1) {
                        a.goStatus = "Challenges" + "<br/>" + "&nbsp" + a.numChallenges + "&nbsp" + "Players" + "<br/><br/>"
                    } else {
                        a.goStatus = "Challenges" + "<br/>" + "&nbsp" + a.numChallenges + "&nbsp" + "Player" + "<br/><br/>"
                    }
                    a.isChallengeSelected = true
                } else {
                    b.removeClass("font-16")
                    b.removeClass("challenge-text-position")
                    b.addClass("font-60")
                    a.goStatus = "GO"
                    a.isChallengeSelected = false
                }
                b.html(a.goStatus)
            }

            function f(b) {
                var c = Object.prototype.hasOwnProperty
                var a = 0
                for (var d in b) {
                    if (c.call(b, d)) {
                        ++a
                    }
                }
                return a
            }

            return c
        }

        goButtonDirective.$inject = ["$log"]
        module.exports = goButtonDirective
    }, {157: 157}],
    146: [function (require, module, exports) {
        "use strict"
        function levelSelectorDirective(a, b) {
            "use strict"
            return {
                restrict: "AE",
                scope: {
                    changeSelectedLevel: "=",
                    bonusLevel: "=",
                    minLevel: "=",
                    displaySetting: "=",
                    showPanelClick: "=",
                    isEvent: "=",
                    eventInProgress: "=",
                    eventLevels: "="
                },
                link: c,
                template: require("158")
            }
            function c(c, n, m) {
                c.selectBtn = j
                g()
                function g() {
                    if (c.displaySetting && c.displaySetting.length > 0) {
                        h()
                        c.selectedLevel = d.level
                    }
                    c.bonusIcon = e()
                    c.$watch("isEvent", f)
                    c.$watch("eventLevels", f)
                }

                function f(a) {
                    c.bonusIcon = e()
                    i()
                }

                var d

                function h() {
                    d = undefined
                    var a
                    var b
                    for (a = 0; a < c.displaySetting.length; a++) {
                        b = c.displaySetting[a]
                        if (b.hasOwnProperty("selected") && b.selected === true) {
                            d = b
                            break
                        }
                    }
                    if (!d) {
                        d = c.displaySetting[0]
                        d.selected = true
                    }
                }

                function i() {
                    for (var a = 0; a < c.displaySetting.length; a++) {
                        c.displaySetting[a].buttonDisabled = k(c.displaySetting[a])
                        c.displaySetting[a].buttonStyle = l(c.displaySetting[a])
                    }
                }

                function j(e) {
                    a.play("click")
                    b.info("click on level", e)
                    if (d.level === e.level) {
                        if (e.selected !== true) {
                            e.selected = true
                        }
                        return
                    }
                    d.selected = false
                    e.selected = true
                    d = e
                    c.selectedLevel = d.level
                    c.changeSelectedLevel(d.level)
                }

                function k(b) {
                    if (c.isEvent && c.eventLevels) {
                        for (var a = 0; a < c.eventLevels.length; a++) {
                            if (c.eventLevels[a].LevelId === b.level.toString()) {
                                return false
                            }
                        }
                    }
                    if (parseInt(b.level) < parseInt(c.minLevel)) {
                        return true
                    }
                    return false
                }

                function l(e) {
                    var b
                    var d = "btn-blue"
                    if (c.isEvent && c.eventLevels && c.eventLevels.length > 0) {
                        for (var a = 0; a < c.eventLevels.length; a++) {
                            if (c.eventLevels[a].LevelId === e.level.toString() && (c.eventLevels[a].MaxGames !== undefined && c.eventLevels[a].MaxGames !== 0)) {
                                b = "weg-levels"
                                break
                            } else {
                                if (parseInt(e.level) < parseInt(c.minLevel)) {
                                    d = "btn-blue-outlevel"
                                }
                                b = "btn btn-mini " + d + " levelbtnwidth"
                            }
                        }
                    } else {
                        b = "btn btn-mini " + d + " levelbtnwidth"
                    }
                    return b
                }

                function e() {
                    var a = "level-" + c.bonusLevel + "-pos"
                    if (!c.isEvent) {
                        a += " bonus-level-icon"
                    }
                    return a
                }
            }
        }

        levelSelectorDirective.$inject = ["audioManager", "$log"]
        module.exports = levelSelectorDirective
    }, {158: 158}],
    147: [function (require, module, exports) {
        "use strict"
        function liveMathleticsHeader(b, a, c, d, e) {
            "use strict"
            return {
                restrict: "AE",
                scope: {isEvent: "=", eventInProgress: "=", faceBasePath: "=", userData: "=", unicefPoints: "="},
                template: require("159"),
                link: f
            }
            function f(f, l, m) {
                f.back = b.exit
                f.showBack = false
                f.faceClicked = j
                f.isMobileApp = a.getConfigValue("isMobileApp")
                f.buildVersion = ""
                if (f.isMobileApp) {
                    var g = a.getConfigValue("renderingWaitPeriod")
                    if (g > 0) {
                        c(h, g)
                    } else {
                        h()
                    }
                } else {
                    f.showBack = true
                }
                f.mobileBackBtnStyle = a.getConfigValue("mobileHeaderBackStyle")
                f.headerLogo = i
                function h() {
                    f.showBack = true
                }

                function i() {
                    if (f.isEvent && f.eventInProgress) {
                        return "wmd-logo"
                    }
                    if (!f.isEvent || !f.eventInProgress) {
                        return "liveMathleticsHeaderLogo"
                    }
                }

                function j() {
                    d.info("splashscreen: face clicked")
                    k()
                }

                function k() {
                    if (f.buildVersion === "") {
                        f.buildVersion = e
                    } else {
                        f.buildVersion = ""
                    }
                }
            }
        }

        liveMathleticsHeader.$inject = ["navigationService", "configDataFactory", "$timeout", "$log", "buildVersion"]
        module.exports = liveMathleticsHeader
    }, {159: 159}],
    148: [function (require, module, exports) {
        "use strict"
        function pointPanelDirective() {
            "use strict"
            return {
                restrict: "AE",
                scope: {contentTxt: "=", titleTxt: "@", showPanelClick: "=", footerTxt: "@"},
                link: a,
                template: require("161")
            }
            function a(a, b) {
                a.test = function () {
                    b.debug("click point panel directive")
                }
            }
        }

        pointPanelDirective.$inject = []
        module.exports = pointPanelDirective
    }, {161: 161}],
    149: [function (require, module, exports) {
        "use strict"
        function rankBoxDirective(a) {
            "use strict"
            return {
                restrict: "AE",
                scope: {rank: "=", displayLevel: "=", tooltipData: "="},
                link: b,
                template: require("162")
            }
            function b(b, f, g) {
                b.$watch("displayLevel", d)
                var c = b.$watch("tooltipData", e)

                function d(d) {
                    if (!b.tooltipData) {
                        return
                    }
                    var c = b.displayLevel.toString()
                    b.displayRankList = b.tooltipData[c]
                    a.debug("level " + c, b.displayRankList)
                }

                function e(a) {
                    if (b.displayLevel !== undefined && b.displayLevel !== null && b.displayLevel > 0) {
                        d(b.displayLevel)
                    }
                    c()
                }
            }
        }

        rankBoxDirective.$inject = ["$log"]
        module.exports = rankBoxDirective
    }, {162: 162}],
    150: [function (require, module, exports) {
        "use strict"
        function scoreBoxDirective() {
            "use strict"
            return {
                restrict: "AE",
                scope: {displayData: "=", displaySetting: "=", matchType: "="},
                link: a,
                template: require("163")
            }
            function a(a, h, i) {
                a.selectTab = f
                a.stripWording = g
                a.$watch("matchType", d)
                c()
                var b

                function c() {
                    if (a.displaySetting && a.displaySetting.length > 0) {
                        e()
                    }
                }

                function d(d) {
                    var c
                    c = a.displaySetting[1]
                    if (a.matchType === 0 || a.matchType === 1) {
                        a.isHideTopScore = true
                        c.hidden = true
                        if (b.selected) {
                            b.selected = false
                        }
                        b = a.displaySetting[0]
                        b.selected = true
                        a.selectedTabItem = b
                    } else {
                        a.isHideTopScore = false
                        c.hidden = false
                    }
                }

                function e() {
                    var c
                    var d
                    for (c = 0; c < a.displaySetting.length; c++) {
                        d = a.displaySetting[c]
                        if (d.hasOwnProperty("selected") && d.selected === true) {
                            b = d
                            break
                        }
                    }
                    if (!b) {
                        b = a.displaySetting[0]
                        b.selected = true
                    }
                    a.selectedTabItem = b
                }

                function f(c) {
                    if (b.id === c.id) {
                        if (c.selected !== true) {
                            c.selected = true
                            a.selectedTabItem = b
                        }
                        return
                    }
                    b.selected = false
                    c.selected = true
                    a.selectedTabItem = b = c
                }

                function g(a) {
                    var b = ""
                    var c = 14
                    if (typeof a == "string") {
                        if (a.length > c) {
                            b = a.substring(0, c) + ".."
                        } else {
                            b = a
                        }
                    } else {
                        b = a
                    }
                    return b
                }
            }
        }

        scoreBoxDirective.$inject = []
        module.exports = scoreBoxDirective
    }, {163: 163}],
    151: [function (require, module, exports) {
        "use strict"
        function unicefDirective(a) {
            "use strict"
            return {restrict: "AE", template: require("165"), link: b}
            function b(b) {
                b.learnMoreClicked = c
                function c() {
                    a.open("http://mathletics.com/unicef/", "_blank")
                }
            }
        }

        unicefDirective.$inject = ["$window"]
        module.exports = unicefDirective
    }, {165: 165}],
    152: [function (require, module, exports) {
        "use strict"
        function userInfoDirective() {
            "use strict"
            return {
                restrict: "AE",
                scope: {inputData: "=", displayLevel: "=", headerSetting: "=", displaySetting: "="},
                link: a,
                template: require("166")
            }
            function a(a) {
                a.$watch("displayLevel", d)
                a.$watch("inputData", e)
                var b = -1

                function d(e) {
                    var d = a.displayLevel - 1
                    if (d !== b) {
                        b = d
                        c(b)
                    }
                }

                function e(a) {
                    if (b >= 0) {
                        c(b)
                    }
                }

                function c(b) {
                    if (b < 0) {
                        return
                    }
                    if (a.inputData && a.inputData.length && a.inputData.length > b) {
                        a.selectedItem = a.inputData[b]
                    }
                }
            }
        }

        userInfoDirective.$inject = []
        module.exports = userInfoDirective
    }, {166: 166}],
    153: [function (require, module, exports) {
        "use strict"
        function eventStatsFactory(r, i, e, l) {
            "use strict"
            var c, f
            var d
            var a = i.defer()
            var b = {}
            var g = "on"
            var h = "off"
            return {promise: m, start: p, stop: q}
            function m() {
                return n().promise
            }

            function n() {
                if (a === undefined) {
                    a = i.defer()
                }
                return a
            }

            function o() {
                if (a !== undefined) {
                    a.reject(null)
                    a = undefined
                }
            }

            function p(a) {
                f = a
                if (d === g) {
                    return
                }
                d = g
                b.Mathometer = 0
                b.Spellometer = 0
                b.OnlineUserCount = 0
                j()
            }

            function q() {
                c = e.cancelDelayCallBack(c)
                d = h
                o()
            }

            function j() {
                if (d === h) {
                    return
                }
                c = e.cancelDelayCallBack(c)
                l.get().then(function (d) {
                    if (d && d.hasOwnProperty("IsError")) {
                        if (d.IsError === true) {
                            a.reject("eventsStats IsError = true")
                        } else {
                            r.debug("EventStats: ", d)
                            k(d.EventStatsList)
                            a.notify(b)
                        }
                        if (f > 0) {
                            c = e.setDelayCallBack(f, c, j)
                        }
                    } else {
                        a.notify(b)
                    }
                }, function (c) {
                    a.notify(b)
                }, function (a) {
                })
            }

            function k(d) {
                var a
                for (var c = 0; c < d.length; c++) {
                    a = d[c]
                    switch (a.MeterTypeID) {
                        case 1:
                            b.Mathometer = a.CurrentValue
                            break
                        case 2:
                            b.Spellometer = a.CurrentValue
                            break
                        case 3:
                            b.OnlineUserCount = a.CurrentValue
                            break
                        default:
                            break
                    }
                }
            }
        }

        eventStatsFactory.$inject = ["$log", "$q", "delayFactory", "eventStats"]
        module.exports = eventStatsFactory
    }, {}],
    154: [function (require, module, exports) {
        "use strict"
        function liveMathsProfileFactory(m, G, k, b, N, W, d, g) {
            "use strict"
            var c
            var a
            var o = 0
            var i = false
            var t = 10
            var v = ""
            var f, j, p
            var w = [{LevelID: 1, DisplayName: "--", HighScore: "--"}, {
                LevelID: 2,
                DisplayName: "--",
                HighScore: "--"
            }, {LevelID: 3, DisplayName: "--", HighScore: "--"}, {
                LevelID: 4,
                DisplayName: "--",
                HighScore: "--"
            }, {LevelID: 5, DisplayName: "--", HighScore: "--"}, {
                LevelID: 6,
                DisplayName: "--",
                HighScore: "--"
            }, {LevelID: 7, DisplayName: "--", HighScore: "--"}, {
                LevelID: 8,
                DisplayName: "--",
                HighScore: "--"
            }, {LevelID: 9, DisplayName: "--", HighScore: "--"}, {LevelID: 10, DisplayName: "--", HighScore: "--"}]
            var y = [{label: "Correct Answer", datafield: "CorrectAnswer"}, {
                label: "Games Played",
                datafield: "GamesPlayed"
            }, {label: "Accuracy", datafield: "Accuracy"}, {
                label: "High Score",
                datafield: "HighScore"
            }, {label: "Recent Average", datafield: "Average"}]
            var q = {label: "Level", datafield: "LevelID"}
            var h = {
                init: V,
                cleanUp: D,
                getLevelInfoById: H,
                updateHighScore: I,
                getUserProfile: u,
                getSplashData: K,
                getUserPointsForLevels: Q,
                getReportData: C,
                getDisplaySetting: S,
                getGameRoomUserData: U,
                setOnlineUserCount: T,
                updateResultsList: n,
                updateHighScoreList: F,
                setCurrentMatchType: l,
                getCurrentMatchType: Y,
                setMatchTypeByName: X,
                setCurrentLevel: x,
                isVSComputer: B,
                isVSClass: Z,
                isValidMatch: d.isValid,
                getDefaultHOFHeading: L,
                getMatchTypeByName: d.getMatchTypeByName,
                setMockData: O
            }
            return h
            function O(a) {
                s(a)
            }

            function V() {
                var c = m.defer()
                if (!b.isReady()) {
                    c.reject("config not ready")
                } else {
                    if (!i) {
                        if (a !== null && a !== undefined) {
                            c.resolve(h)
                            return c.promise
                        }
                        N.get().then(function (a) {
                            if (a && a.hasOwnProperty("IsError")) {
                                if (a.IsError === true) {
                                    c.reject("liveMathsProfile IsError = true")
                                } else {
                                    i = true
                                    s(a)
                                    c.resolve(h)
                                }
                            } else {
                                c.reject("liveMathsProfile = null")
                            }
                        }, function (a) {
                            c.reject("liveMathsProfile invalid service call", a)
                        })
                    } else {
                        W.get().then(function (a) {
                            if (a && a.hasOwnProperty("IsError")) {
                                if (a.IsError === true) {
                                    c.reject("refreshData IsError = true")
                                } else {
                                    A(a)
                                    c.resolve(h)
                                }
                            } else {
                                c.reject("refreshData = null")
                            }
                        }, function (a) {
                            c.reject("refreshData invalid service call", a)
                        })
                    }
                }
                return c.promise
            }

            function s(b) {
                a = b
                z(b.SchoolId)
                E(b)
                P()
                R()
                n(b.UserPointLevelCollection)
            }

            function _(a) {
                if (a.hasOwnProperty("eventsUri") && a.eventsUri) {
                    b.setConfigValue("eventResultService", a.eventsUri, "/eventResultService.asmx")
                }
            }

            function A(c) {
                for (var b in c) {
                    if (a.hasOwnProperty(b)) {
                        a[b] = c[b]
                    }
                }
                n(c.UserPointLevelCollection)
            }

            function z(a) {
                b.setConfigValue("SchoolId", a)
            }

            function C() {
                var a = m.defer()
                if (c !== undefined && c !== null) {
                    a.resolve(c)
                } else {
                    a.reject("report data is empty")
                }
                return a.promise
            }

            function D() {
                a = undefined
                i = false
            }

            function E(a) {
                G.debug("updateServiceEndPoints", a)
                if (a.hasOwnProperty("LevelDescriptorAmfPath") && a.LevelDescriptorAmfPath) {
                    b.updateEndpoint("LevelDescriptorAmfPath", a.LevelDescriptorAmfPath)
                }
                if (a.hasOwnProperty("LevelDescriptorBasePathIndex") && a.LevelDescriptorBasePathIndex) {
                    b.updateEndpoint("LevelDescriptorBasePathIndex", a.LevelDescriptorBasePathIndex)
                    var d = a.LevelDescriptorBasePathIndex + "LevelDescriptors-" + a.UserDefaultCultureCode + ".txt"
                    b.updateEndpoint("LevelDescriptorJsonPath", d)
                }
                var c = {remove: /Gateway.aspx/gi, add: "MatchService.asmx"}
                if (a.hasOwnProperty("MatchEngineUrl") && a.MatchEngineUrl) {
                    b.updateEndpoint("MatchService", a.MatchEngineUrl, c)
                }
                if (a.hasOwnProperty("SchoolMatchEngineUrl") && a.SchoolMatchEngineUrl) {
                    b.updateEndpoint("SchoolMatchService", a.SchoolMatchEngineUrl, c)
                }
                if (a.hasOwnProperty("ClassroomMatchEngineUrl") && a.ClassroomMatchEngineUrl) {
                    b.updateEndpoint("ClassroomMatchService", a.ClassroomMatchEngineUrl, c)
                }
                if (a.hasOwnProperty("UserStatsServiceEndpoint") && a.UserStatsServiceEndpoint) {
                    b.updateEndpoint("onlineUserStatsService", a.UserStatsServiceEndpoint, {add: "UserStatsService.asmx"})
                }
                if (a.hasOwnProperty("InventoryMatchEngineUrl") && a.InventoryMatchEngineUrl) {
                    b.updateEndpoint("liveMathleticsInventoryMatchService", a.InventoryMatchEngineUrl, {
                        remove: /Gateway.aspx/gi,
                        add: "GameService.asmx"
                    })
                }
                if (a.hasOwnProperty("UserStatsServiceEndpoint") && a.UserStatsServiceEndpoint) {
                    b.updateEndpoint("onlineUserStudentService", a.UserStatsServiceEndpoint, {add: "StudentService.asmx"})
                }
            }

            function F(b) {
                if (b !== null && b !== undefined) {
                    a.HighScoreList = b
                }
            }

            function u() {
                if (!a) {
                    return {isHomeStudent: b.isHomeStudent(), currentClassID: b.currentClass()}
                }
                return {
                    DisplayName: a.DisplayName,
                    Avatar: a.Avatar,
                    SchoolID: a.SchoolId,
                    SchoolName: a.SchoolName,
                    CountryCode: a.CountryCodeFlag,
                    isHomeStudent: b.isHomeStudent(),
                    currentClassID: b.currentClass(),
                    CultureCode: a.UserDefaultCultureCode
                }
            }

            function H(a) {
                if (a > 0) {
                    return c[a - 1]
                }
                return null
            }

            function I(b, e) {
                if (b > 0 && a && a.hasOwnProperty("UserPointLevelCollection") && a.UserPointLevelCollection) {
                    for (var d = 0; d < a.UserPointLevelCollection.length; d++) {
                        if (a.UserPointLevelCollection[d] && a.UserPointLevelCollection[d].LevelID === b) {
                            a.UserPointLevelCollection[d].HighScore = e
                            break
                        }
                    }
                    if (c && c.length && c.length < b - 1 && b > 0 && c[b - 1]) {
                        c[b - 1].HighScore = e
                    }
                }
            }

            function J(a, c) {
                var b = "--"
                if (a === 0 && Number(c) > 0) {
                    b = "today"
                } else if (a > 1) {
                    b = a + " days ago"
                } else if (Number(a) === 1) {
                    b = a + " day ago"
                }
                return b
            }

            function K() {
                var d = w
                var e
                if (a.hasOwnProperty("HighScoreList") && a.HighScoreList !== undefined && a.HighScoreList !== null) {
                    for (var b = 0; b < a.HighScoreList.length; b++) {
                        e = a.HighScoreList[b]
                        d[Number(e.LevelID) - 1] = e
                    }
                }
                return {connectorPoint: a.ConnectorPoint, scoreData: {topScore: d, myBest: c}, results: c}
            }

            function L() {
                return v
            }

            function M() {
                var b = []
                var a, c
                for (a = 0; a < t; a++) {
                    c = g.getRank("value", 0).label
                    b.push({
                        LevelID: a + 1,
                        Correct: 0 + "/" + 0,
                        CorrectAnswer: 0,
                        GamesPlayed: 0,
                        Accuracy: 0 + "%",
                        HighScore: 0,
                        HighScoreDaysAgo: "--",
                        RankingEnum: 0,
                        Rank: c,
                        Average: k("number")(0, 2)
                    })
                }
                return b
            }

            function n(d) {
                c = M()
                if (d === undefined || d === null) {
                    return
                }
                var a, h, b, f, i
                for (var e = 0; e < d.length; e++) {
                    a = d[e]
                    h = J(Number(a.HighScoreNumberDaysAgo), a.TotalGamesPlayed)
                    i = g.getRank("value", a.RankingEnum).label
                    b = Number(a.TotalGamesPlayed)
                    if (b > 3) {
                        b = 3
                    }
                    if (b > 0) {
                        f = (Number(a.LastScore) + Number(a.SecondMostRecentScore) + Number(a.ThirdMostRecentScore)) / b
                    } else {
                        f = 0
                    }
                    c[Number(a.LevelID) - 1] = {
                        LevelID: a.LevelID,
                        Correct: a.TotalCorrectAnswers + "/" + a.TotalQuestions,
                        CorrectAnswer: a.TotalCorrectAnswers,
                        GamesPlayed: a.TotalGamesPlayed,
                        Accuracy: k("number")(a.Accuracy, 2) + "%",
                        HighScore: a.HighScore,
                        HighScoreDaysAgo: h,
                        RankingEnum: a.RankingEnum,
                        Rank: i,
                        Average: k("number")(f, 2)
                    }
                }
                return
            }

            var e

            function P() {
                if (a && a.hasOwnProperty("RankByLevelCollection") && a.RankByLevelCollection !== undefined && a.RankByLevelCollection !== null) {
                    e = {}
                    var b, c, i, h, d, j
                    for (var f = 0; f < a.RankByLevelCollection.length; f++) {
                        b = a.RankByLevelCollection[f]
                        c = b.GameLevelEnum.toString()
                        i = b.RankEnum
                        h = g.getRank("value", b.RankEnum)
                        d = "To be a " + h.label + " at Level " + c + " you need a recent average score"
                        switch (b.RankEnum) {
                            case g.HUMAN_CALCULATOR:
                                d += " greater than " + b.NumericalLowerBoundary
                                break
                            case g.RAGING_ROOKIE:
                                d += " less than " + b.NumericalUpperBoundary
                                break
                            default:
                                d += " of " + b.NumericalLowerBoundary + " to " + b.NumericalUpperBoundary
                        }
                        if (!e[c]) {
                            e[c] = []
                        }
                        e[c][b.RankEnum] = {
                            tooltip: d,
                            value: b.RankEnum,
                            label: h.label,
                            min: b.NumericalLowerBoundary,
                            max: b.NumericalUpperBoundary
                        }
                    }
                }
            }

            function Q() {
                return a.UserPointLevelCollection
            }

            function R() {
                f = [{level: 1}, {level: 2}, {level: 3}, {level: 4}, {level: 5}, {level: 6}, {level: 7}, {level: 8}, {level: 9}, {level: 10}]
                var c = a.CurrentLevel
                if (c <= a.RestrictedMinLevel) {
                    c = a.RestrictedMinLevel
                }
                if (r() === null) {
                    x(c)
                }
                l(d.WORLD)
                j = "My Top Scores"
                if (b.isHomeStudent() !== true) {
                    j = "My Best"
                }
                p = [{
                    label: j,
                    id: "myBest",
                    datafields: ["LevelID", "HighScore", "HighScoreDaysAgo"],
                    selected: true,
                    orderBy: "LevelID"
                }, {
                    label: "Top Scores",
                    id: "topScore",
                    datafields: ["LevelID", "DisplayName", "HighScore"],
                    orderBy: "LevelID",
                    matchTypes: [d.SCHOOL, d.CLASS]
                }]
            }

            function S() {
                return {
                    level: r(),
                    levelsForDisplay: f,
                    scorePanel: p,
                    userInfoData: y,
                    userInfoHeader: q,
                    minLevel: a.RestrictedMinLevel,
                    rankPanel: e,
                    challengeTimeout: a.InventoryMatchSelectingUsersTimeout,
                    bonusLevel: a.CurrentBonusLevel
                }
            }

            function T(a) {
                if (a > 0) {
                    o = a
                }
            }

            function U(d) {
                var b = m.defer()
                if (a) {
                    var c = {
                        userDetail: u(),
                        rankLevelInfo: e,
                        userCurrentResults: a.UserPointLevelCollection,
                        onlineUserCount: o
                    }
                    b.resolve(c)
                } else {
                    b.reject("profile response is empty")
                }
                return b.promise
            }

            function x(c) {
                b.setConfigValue("currentLevel", c)
                for (var a = 0; a < f.length; a++) {
                    if (f[a].level === c) {
                        f[a].selected = true
                        break
                    }
                }
            }

            function l(a) {
                b.setConfigValue("currentMatchType", a)
            }

            function X(b) {
                var a = d.getMatchTypeByName(b)
                l(a)
            }

            function Y() {
                return b.getConfigValue("currentMatchType")
            }

            function r() {
                return b.getConfigValue("currentLevel")
            }

            function Z(a) {
                return a === d.CLASS
            }

            function B(a) {
                return a === d.COMPUTER
            }
        }

        liveMathsProfileFactory.$inject = ["$q", "$log", "$filter", "configDataFactory", "liveMathsProfile", "refreshData", "matchTypeEnum", "rankEnum"]
        module.exports = liveMathsProfileFactory
    }, {}],
    155: [function (require, module, exports) {
        "use strict"
        function onlineUserCountFactory(p, l, e, j) {
            "use strict"
            var a, c
            var b
            var h = {GlobalOnlineUser: 0, SchoolOnlineUser: 0, ClassroomOnlineUser: 0}
            var g = "on"
            var f = "off"
            return {promise: k, start: n, stop: o}
            function k() {
                return d().promise
            }

            function d() {
                if (b === undefined) {
                    b = l.defer()
                }
                return b
            }

            function m() {
                if (b !== undefined) {
                    b.reject(null)
                    b = undefined
                }
            }

            function n() {
                if (c === g) {
                    return
                }
                c = g
                i()
            }

            function o() {
                m()
                c = f
                a = e.cancelDelayCallBack(a)
                return
            }

            function i() {
                if (c === f) {
                    return
                }
                a = e.cancelDelayCallBack(a)
                j.get().then(function (b) {
                    var c = {GlobalOnlineUser: 0, SchoolOnlineUser: 0, ClassroomOnlineUser: 0}
                    if (b.hasOwnProperty("GlobalOnlineUser")) {
                        c.GlobalOnlineUser = b.GlobalOnlineUser
                    }
                    if (b.hasOwnProperty("SchoolOnlineUser")) {
                        c.SchoolOnlineUser = b.SchoolOnlineUser
                    }
                    if (b.hasOwnProperty("ClassroomOnlineUser")) {
                        c.ClassroomOnlineUser = b.ClassroomOnlineUser
                    }
                    d().notify(c)
                    if (b.hasOwnProperty("NextIntervalTime")) {
                        var f = Number(b.NextIntervalTime)
                        if (f > 0) {
                            a = e.setDelayCallBack(f, a, i)
                        }
                    }
                }, function (a) {
                    d().notify(h)
                })
                return
            }
        }

        onlineUserCountFactory.$inject = ["$log", "$q", "delayFactory", "onlineUsersItems"]
        module.exports = onlineUserCountFactory
    }, {}],
    156: [function (require, module, exports) {
        module.exports = '<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"\n\n     id="featurePopUp" title="Shadow Mode">\n    <div class="modal-dialog " ng-click="close()">\n        <div class="modal-content feature-container">\n\n\n            <section>\n                <h3>Mathletics Update</h3>\n                <p><b>You can now challenge your friends even if they are offline.</b></p>\n                <p>You can play <i><b>Shadow Mode</b></i> and challenge their top score without them being online.</p>\n                <p>If you see this symbol, </p>\n                <div class="image-container">\n                    <div class="whos-online-sample" scale=".5"></div>\n                    <div class="round-highlight"></div>\n                    <div class="arrow"></div>\n                    <div class="shadow-icon animated rubberBand" ></div>\n                </div>\n\n                <p>click on their name and then click <span style="color: #5BA033">GO</span> to play them, in <i><b>Shadow Mode</b></i>. </p>\n            </section>\n                <div class="vertical-line"></div>\n            <nav>\n\n                <div class="nav-item">\n                    <div class="online"></div>\n                    <div class="status-label">Online</div>\n\n                </div>\n                <div class="nav-item">\n                    <div class="in-game"></div>\n                    <div class="status-label">In Game</div>\n                </div>\n                <div class="nav-item">\n                    <div class="offline"></div>\n                    <div class="status-label">Shadow</div>\n                </div>\n\n                <div class="nav-item">\n                    <div class="invite circle-blink"></div>\n                    <div class="status-label">Invitation</div>\n                </div>\n\n            </nav>\n            <div class="close-button" onclick="$(\'#featurePopUp\').modal(\'hide\');"></div>\n        </div>\n    </div>\n\n</div>\n'
    }, {}],
    157: [function (require, module, exports) {
        module.exports = '<div>\n  <button class="button_Go font-60" quick-touch="goBtnClick()" ng-disabled="disableGo">Go</button>\n  <button class="button_Go_Cancel font-20" ng-show="isChallengeSelected" quick-touch="cancelBtnClick()">Cancel<br><br></button>\n</div>\n\n'
    }, {}],
    158: [function (require, module, exports) {
        module.exports = '<div class="levelSelectorPanel">\n    <div ng-repeat="levelItem in displaySetting" class="level-button-div" >\n        <button ng-class="levelItem.buttonStyle"  quick-touch="selectBtn(levelItem)"\n                ng-disabled="levelItem.buttonDisabled||levelItem.level == selectedLevel">\n            {{levelItem.level}}\n       </button>\n    </div>\n    <div ng-class="bonusIcon"></div>\n    <button class="btn btn-mini btn-blue levelSelectedbtn {{isEvent?\'levelSelectedbtn-pre\':\'levelbtnwidth levelSelectedbtn-livemath\'}}"\n            ng-class="\'level-\'+selectedLevel+\'-pos\'" quick-touch="showPanelClick()"\n            ng-if="!eventInProgress"></button>\n    <!--selected: {{selectedLevel}} min: {{minLevel}} bonus: {{bonusLevel}}-->\n</div>\n'
    }, {}],
    159: [function (require, module, exports) {
        module.exports = '<span class="liveMathleticsHeaderPanel">\n  <span class="headerBackground"></span>\n  <!--Header - User Face-->\n  <div class="face-bg" ng-click="faceClicked()">\n      <avatar base-url="{{faceBasePath}}" face-setting="{{userData.Avatar}}" scale="0.5"></avatar>\n\n  </div>\n  <span ng-class="headerLogo()"></span>\n\n\n  <button class="btn-default blue-btn backBtnPos" ng-class="mobileBackBtnStyle" ng-show="showBack" quick-touch="back()">\n      <span class="glyphicon glyphicon-arrow-left"></span>\n  </button>\n\n   <!--Unicef Panel-->\n	<div class="unicef-div">\n        <div class="unicef-logo"/>\n        <span class="unicef-number">{{unicefPoints|number}}</span>\n        <div class="unicefInfoContainer" unicef-directive></div>\n    </div>\n    <span class="build-version">\n        {{buildVersion}}\n    </span>\n</span>\n'
    }, {}],
    160: [function (require, module, exports) {
        module.exports = '<div class="gameMenu font-15">\n    <div class="boxSize {{userData.isHomeStudent?\'leftPos\':\'topPos\'}}">\n        <button class="btn-default btnSize" ng-disabled="matchType === 0"\n                ng-class="getvsWorldEventStyle()"\n                quick-touch="selectGameMenu(\'World\')" ></button>\n        <p class="gameTypeLabel font-16" >World Challenge</p>\n        <span class="gameTypeLabel gameInfoStatus" >\n            <span>Online</span>\n            <span class="blueText" ng-bind="onlineData.GlobalOnlineUser"></span>\n        </span>\n    </div>\n\n    <div class="boxSize rightPos">\n        <button class="btn-default btnSize button_vsComputer" ng-disabled="matchType === 1"\n                quick-touch="selectGameMenu(\'Computer\')">\n            <avatar class="avatarPos" base-url="{{faceAssetBasePathPngs}}"\n                    face-setting="{{userData.Avatar}}" scale=".3"\n                    hide-background="true"/>\n        </button>\n        <p class="gameTypeLabel font-16" >Computer Challenge</p>\n      <span class="gameTypeLabel gameInfoStatus">\n          <span>High Score</span>\n          <span class="blueText" ng-bind="selectedLevelItem.HighScore"></span>\n      </span>\n    </div>\n\n    <div class="boxSize bottomPos" ng-hide="userData.isHomeStudent">\n        <button class="btn-default btnSize" ng-disabled="matchType === 2"\n                ng-class="getvsClassEventStyle()"\n                quick-touch="selectGameMenu(\'Class\')"></button>\n        <p class="gameTypeLabel font-16" >Class Challenge</p>\n\n      <span class="gameTypeLabel gameInfoStatus">\n          <span>Online</span>\n          <span class="blueText" ng-bind="onlineData.ClassroomOnlineUser"></span>\n      </span>\n    </div>\n\n    <div class="boxSize leftPos" ng-hide="userData.isHomeStudent">\n        <button class="btn-default btnSize button_vsMySchool"  ng-disabled="matchType === 3"\n                quick-touch="selectGameMenu(\'School\')"></button>\n        <p class="gameTypeLabel font-16" >School Challenge</p>\n\n      <span class="gameTypeLabel gameInfoStatus">\n          <span>Online</span>\n          <span class="blueText" ng-bind="onlineData.SchoolOnlineUser"></span>\n      </span>\n    </div>\n\n    <go-button class="button-go-frame" find-match="findMatchByMatchType" disable-go="disableGo" show-waiting-room="tryInviteOpponents"\n               collect-challenges="challengeCollection" cancel-challenge="notifyCancelChallenges"></go-button>\n</div>\n\n'
    }, {}],
    161: [function (require, module, exports) {
        module.exports = ' <div class="bluePanelBG"/>\n  <div class="blueTiTlePanel font-15">\n      <span ng-bind="titleTxt"> </span>\n      <!--<span class="glyphicon glyphicon-chevron-right font-12" ng-show="activeButton"></span>-->\n  </div>\n  <p class="{{titleTxt}}-label" >{{contentTxt|number}}</p>\n  <!--<p class="bluePanelFooterText font-12" ng-bind="footerTxt"></p>-->\n'
    }, {}],
    162: [function (require, module, exports) {
        module.exports = '<div class="livemathLightBlueBG rankBG font-11" >\n    <div class="rankContentTopAlign rankStatusBarPosition">\n        <span class="rankStatusBar" ng-class="\'base\'"></span>\n        <span class="rankStatusBar" ng-class="\'fill_\'+rank"></span>\n    </div>\n\n    <div class="rankContentTopAlign" style="position: absolute;">\n    <div class="rankList"  ng-repeat="rankItem in displayRankList | orderBy: \'value\' :true">\n        <div class="rankItem">\n            <p class="rankLabel sameLine" data-toggle="popover" data-placement="top"\n               data-content="{{rankItem.tooltip}}"\n               data-trigger="hover" ng-bind="rankItem.label">\n            </p>\n            <span class="sameLine rankIcon" ng-class="(rank==rankItem.value)?\'on\':\'off\'"></span>\n        </div>\n    </div>\n    </div>\n</div>\n'
    }, {}],
    163: [function (require, module, exports) {
        module.exports = '<div class="myBestPanel">\n    <div class="myBestPanelControl">\n        <button class=" btn-group  " ng-repeat="item in displaySetting" ng-hide="item.hidden"\n                ng-bind="item.label" ng-class="{\'scoreButton\':!item.selected ,\'myBestSelected\':item.selected,\'myBestFullWidth\':isHideTopScore}"\n                quick-touch="selectTab(item)">\n        </button>\n    </div>\n    <div class="scoreItem" ng-repeat="resultItem in displayData[selectedTabItem.id] | orderBy: selectedTabItem.orderBy :true ">\n        <span class="rankCircle" ng-bind="resultItem[selectedTabItem.datafields[0]]"></span>\n        <span class="rankLevel" ng-bind="stripWording(resultItem[selectedTabItem.datafields[1]])"></span>\n        <span class="rankDays" ng-bind="resultItem[selectedTabItem.datafields[2]]"></span>\n    </div>\n</div>\n'
    }, {}],
    164: [function (require, module, exports) {
        module.exports = '<!--LiveMathleticsHeader-->\n<live-mathletics-header is-event="isEvent" event-in-progress ="eventInProgress" unicef-points="unicefPoints"\n                        face-base-path="faceAssetBasePathPngs" user-data="userData" unicef-info-view="unicefInfoView"></live-mathletics-header>\n\n<!--LiveMathletics Content Body-->\n<div class="liveMathleticsBody" feature-grey-out="{{featureHtml}}">\n    <!--Hall of Fame Header Panel-->\n    <div class="hof-header-panel">\n        <div class="hallof-fame-bg">\n            <span class="hof-label">{{userData.isHomeStudent?\'\':\'My Class\'}}</span>\n            <span class="hof-name">{{HOFName}}</span>\n            <div class="hof-trophy"/>\n         </div>\n        <div class="divider-hof"/>\n    </div>\n\n    <!-- Main Panel for match selector, level selector build school windows ...--->\n    <div ui-view="mainPanel" class="mainPanel"></div>\n\n    <!--LEFT panel SCHOOL STUDENT-->\n    <div ng-hide="userData.isHomeStudent" ng-mousedown="defaultNavigation($event)" >\n        <!--User List Box-->\n        <div shadow-bubble update-display="updateDisplay" ng-show="(displayGhostPerforming)"></div>\n        <user-list-box item-me-data="itemMeData"\n                       item-invitation-list="itemInvitationList"\n                       item-on-and-off-line-list="itemOnAndOffLineList"\n                       face-base-path="{{faceAssetBasePathPngs}}"\n                       challenge-collection="notifyChallengeCollection"\n                       invitation-acception="notifyInvitationAcception"\n                       cancel-challenges="cancelChallenges"\n                       enable-model="enableWhosonline"\n                       perform-ghost="performGhost">\n        </user-list-box>\n    </div>\n\n\n    <!--LEFT panel HOME STUDENT -->\n    <div ng-show="userData.isHomeStudent">\n         <user-info-directive display-setting="splashSetting.userInfoData"\n                              header-setting="splashSetting.userInfoHeader"\n                              display-level="selectedLevelItem.LevelID"\n                              input-data="splashData.results"></user-info-directive>\n\n         <point-panel-directive class="mathometerPanel" id="mathometerPanel"\n                                content-txt="eventStatsData.Mathometer"\n                                title-txt="Mathometer"></point-panel-directive>\n\n         <point-panel-directive class="userOnlinePanel" id="userOnlinePanel"\n                                content-txt="onlineData.GlobalOnlineUser"\n                                title-txt="Users Online"></point-panel-directive>\n    </div>\n\n\n    <!-- Disable from now on -->\n    <!--<score-box-directive ng-hide="isEvent" display-data="splashData.scoreData"-->\n                         <!--display-setting="splashSetting.scorePanel"-->\n                         <!--match-type="matchType"></score-box-directive>-->\n\n\n    <!--&lt;!&ndash;Rank Enum Value&ndash;&gt;-->\n    <!--<div class="rankPanelPosition" ng-hide="isEvent">-->\n         <!--<rank-box-directive rank="selectedLevelItem.RankingEnum"-->\n                             <!--display-level="selectedLevelItem.LevelID"-->\n                             <!--tooltip-data="splashSetting.rankPanel" ></rank-box-directive>-->\n    <!--</div>-->\n\n    <div ng-class="panelPosition()" ng-show="isEvent">\n        <event-panel product-id="1" event-in-progress ="eventInProgress"\n                     show-reset-popup="showResetEventPopup"\n                     event-info="eventInfo" event-timing="eventTiming"\n                     event-display-change="eventPanelClick" ></event-panel>\n    </div>\n\n    <!-- Level Selector List-->\n    <span class="level-label">Level</span>\n    <level-selector-directive display-setting="splashSetting.levelsForDisplay"\n                              show-panel-click="showLevelDescriptor"\n                              bonus-level="splashSetting.bonusLevel"\n                              change-selected-level="changeSelectedLevel"\n                              get-weg-level-button-style="getWegLevelButtonStyle"\n                              is-event="isEvent"\n                              event-in-progress ="eventInProgress"\n                              event-levels="eventLevels"\n                              min-Level="splashSetting.minLevel"></level-selector-directive>\n\n    <button class="btn btn-mini btn-blue {{eventInProgress?\'eventMyResultButton\':\'myResultButton\'}}"\n            ng-mousedown="showLiveMathReport()" ng-class="changeTopPosition()">Results</button>\n\n\n</div>\n\n'
    }, {}],
    165: [function (require, module, exports) {
        module.exports = '<div class="unicefContainer">\n\n    <div class="unicefPopUp">\n        <h3>Turning schoolwork into schools...</h3>\n        <div class="unicefItem">\n            <p>Every year Mathletics funds a series of targeted projects with UNICEF. We\n                aim to increase school attendance by removing obstacles such as poverty, poor sanitation and access to water that prevent children from accessing an education.\n                Every 250,000 points earned by students in the live game and Mathletics activities equals $1 donated to our UNICEF fund, to a maximum of $100,000 per year.</p>\n            <div class="learnMore" ng-click="learnMoreClicked()">Learn More</div>\n        </div>\n        <div class="unicefItem">\n            <div class="unicefImage"></div>\n            <div class="unicefLogoImage"></div>\n        </div>\n    </div>\n    <!--\n        <a href="http://www.3plearning.com/worldeducationgames/unicef/" target="_blank" class="unicefLink"\n           ng-hide="isMobileApp">Learn more</a>-->\n\n</div>\n\n\n\n\n\n\n\n\n\n'
    }, {}],
    166: [function (require, module, exports) {
        module.exports = '<div class="userInfoPanelBG lightblueBG text-center">\n\n  <div class="panel-header">\n    <span ng-bind="headerSetting.label"></span>\n    <span ng-bind="selectedItem[headerSetting.datafield]"></span>\n  </div>\n\n  <div class="user-info-group" ng-repeat="item in displaySetting">\n     <strong>\n         <span ng-bind="item.label"></span>\n     </strong>\n      <br>\n      <span class="user-info-datafield" ng-bind="selectedItem[item.datafield]"></span>\n  </div>\n\n</div>\n'
    }, {}],
    167: [function (require, module, exports) {
        "use strict"
        function EventStats(c, a, d, b) {
            "use strict"
            this.get = function () {
                var d = a.defer()
                var h = "GetEventStats"
                var e = b.getConfigValue("userToken")
                if (e === "" || e === null) {
                    return a.reject("token is empty")
                }
                var f = b.getConfigValue("EventStatsServicePathUrl")
                if (f === "" || f === null) {
                    return a.reject("EventStatsServicePathUrl is empty")
                }
                var g = {}
                g.UserAuthToken = e
                var i = c.post(f + "EventStatsService.asmx/" + h, {request: g})
                i.success(function (a, b, c, e) {
                    if (a && a.hasOwnProperty("d")) {
                        d.resolve(a.d)
                    } else {
                        d.reject("eventStats has invalid response object")
                    }
                }).error(function (b, a, c, e) {
                    d.reject(a)
                })
                return d.promise
            }
        }

        EventStats.$inject = ["$http", "$q", "$log", "configDataFactory"]
        module.exports = EventStats
    }, {}],
    168: [function (require, module, exports) {
        "use strict"
        function LiveMathsProfile(c, a, d, b) {
            "use strict"
            this.get = function () {
                var d = a.defer()
                var h = "GetLiveMathsProfile"
                var e = b.getConfigValue("userToken")
                if (e === "" || e === null) {
                    return a.reject("token is empty")
                }
                var f = b.getConfigValue("liveMathsUserProfileService")
                if (f === "" || f === null) {
                    return a.reject("liveMathsUserProfileService is empty")
                }
                var g = {}
                g.UserAuthToken = e
                var i = c.post(f + "/" + h, {request: g})
                i.success(function (a, b, c, e) {
                    if (a && a.hasOwnProperty("d")) {
                        d.resolve(a.d)
                    } else {
                        d.reject("liveMathsProfile invalid response object")
                    }
                }).error(function (b, a, c, e) {
                    d.reject(a)
                })
                return d.promise
            }
        }

        LiveMathsProfile.$inject = ["$http", "$q", "$log", "configDataFactory"]
        module.exports = LiveMathsProfile
    }, {}],
    169: [function (require, module, exports) {
        "use strict"
        function OnlineUsersItems(c, a, d, b) {
            "use strict"
            this.get = function () {
                var d = a.defer()
                var h = "GetOnlineUsersItems"
                var e = b.getConfigValue("userToken")
                if (e === "" || e === null) {
                    return a.reject("token is empty")
                }
                var f = b.getConfigValue("onlineUserStatsService")
                if (f === "" || f === null) {
                    return a.reject("onlineUserStatsService is empty")
                }
                var g = {}
                g.UserAuthToken = e
                g.ProductID = 1
                var i = c.post(f + "/" + h, {request: g})
                i.success(function (a, b, c, e) {
                    if (a && a.hasOwnProperty("d")) {
                        d.resolve(a.d)
                    } else {
                        d.reject("null response returned")
                    }
                }).error(function (b, a, c, e) {
                    d.reject(a)
                })
                return d.promise
            }
        }

        OnlineUsersItems.$inject = ["$http", "$q", "$log", "configDataFactory"]
        module.exports = OnlineUsersItems
    }, {}],
    170: [function (require, module, exports) {
        "use strict"
        function RefreshData(c, a, d, b) {
            "use strict"
            this.get = function () {
                var d = a.defer()
                var h = "RefreshData"
                var e = b.getConfigValue("userToken")
                if (e === "" || e === null) {
                    return a.reject("token is empty")
                }
                var f = b.getConfigValue("liveMathsUserProfileService")
                if (f === "" || f === null) {
                    return a.reject("liveMathsUserProfileService is empty")
                }
                var g = {}
                g.UserAuthToken = e
                var i = c.post(f + "/" + h, {request: g})
                i.success(function (a, b, c, e) {
                    if (a && a.hasOwnProperty("d")) {
                        d.resolve(a.d)
                    } else {
                        d.reject("empty data")
                    }
                }).error(function (b, a, c, e) {
                    d.reject(a)
                })
                return d.promise
            }
        }

        RefreshData.$inject = ["$http", "$q", "$log", "configDataFactory"]
        module.exports = RefreshData
    }, {}],
    171: [function (require, module, exports) {
        "use strict"
        function UnicefPoints(b, a, d, c) {
            "use strict"
            this.get = function () {
                var d = a.defer()
                var e = c.getConfigValue("UnicefPointsService")
                if (e === "" || e === null) {
                    return a.reject("unicef points service is empty")
                }
                var f = b.get(e)
                f.success(function (a, b, c, e) {
                    d.resolve(a)
                }).error(function (b, a, c, e) {
                    d.reject(a)
                })
                return d.promise
            }
        }

        UnicefPoints.$inject = ["$http", "$q", "$log", "configDataFactory"]
        module.exports = UnicefPoints
    }, {}],
    172: [function (require, module, exports) {
        "use strict"
        angular.module("livemathletics.splashscreen", ["livemathletics.common", "livemathletics.matchEngine", "app-config"]).controller("SplashScreenController", require("143")).directive("levelSelectorDirective", require("146")).directive("scoreBoxDirective", require("150")).directive("rankBoxDirective", require("149")).directive("userInfoDirective", require("152")).directive("pointPanelDirective", require("148")).directive("liveMathleticsHeader", require("147")).directive("unicefDirective", require("151")).directive("goButton", require("145")).factory("eventStatsFactory", require("153")).factory("liveMathsProfileFactory", require("154")).factory("onlineUserCountFactory", require("155")).service("eventStats", require("167")).service("liveMathsProfile", require("168")).service("onlineUsersItems", require("169")).service("refreshData", require("170")).service("unicefPoints", require("171")).directive("featureGreyOut", require("144"))
    }, {
        143: 143,
        144: 144,
        145: 145,
        146: 146,
        147: 147,
        148: 148,
        149: 149,
        150: 150,
        151: 151,
        152: 152,
        153: 153,
        154: 154,
        155: 155,
        167: 167,
        168: 168,
        169: 169,
        170: 170,
        171: 171
    }],
    173: [function (require, module, exports) {
        "use strict"
        function waitingRoomController(a, i, h, l, m, n, b, A, g) {
            var d = h.students
            var e = false
            var c = 15
            var f = h.levelId
            var k = h.isToInvite
            var j
            g.allowSwitch = false
            a.clockCountDown = c
            a.levelId = f
            a.faceAssetBasePathPngs = n.getConfigValue("faceAssetBasePathPngs")
            a.gamePlayersList = []
            a.matchedGameData = {}
            a.informGameHasStarted = {notify: null}
            a.informCountDownStarted = {notify: null}
            a.informGameHasExpired = {notify: null}
            a.cancelGame = x
            a.playVsComputer = y
            a.playVsLiveMatch = z
            a.showGameRoom = o
            q()
            function q() {
                b.setRequirePollGame(true)
                b.registerDataReceiver(t, u, v, w)
                if (k === true) {
                    r()
                } else {
                    s()
                }
            }

            a.$on("$destroy", function () {
                b.setRequirePollGame(false)
                b.cleanUp()
                B()
            })
            function r() {
                a.gamePlayersList = d
                b.setInitGamePlayers(null)
            }

            function s() {
                if (d.CountDownStart === 0) {
                    c = 15
                } else {
                    c = d.CountDownSeconds
                }
                a.clockCountDown = c
                f = d.LevelID
                a.levelId = f
                if (d.hasOwnProperty("InvitationParty")) {
                    a.gamePlayersList = d.InvitationParty
                    b.setInitGamePlayers(a.gamePlayersList)
                }
            }

            function t(b) {
                a.gamePlayersList = A.clone(b)
            }

            function u(b, d) {
                c = d
                a.clockCountDown = c
                if (typeof a.informCountDownStarted.notify === "function") {
                    a.informCountDownStarted.notify(b, c)
                }
            }

            function v(d, b) {
                if (e === true) {
                    return
                }
                e = d
                a.matchedGameData = b
                var c = b.StartOffset
                if (typeof a.informGameHasStarted.notify === "function") {
                    a.informGameHasStarted.notify(e, c)
                }
            }

            function w(b) {
                if (b !== true) {
                    if (typeof a.informGameHasExpired.notify === "function") {
                        a.informGameHasExpired.notify()
                    }
                }
                if (b === undefined || b === true) {
                    m.notifyObservers("waitingRoom.cancelGame")
                }
            }

            function x() {
                b.doRevokeInvitation()
            }

            function y() {
                b.doRevokeInvitation()
                m.notifyObservers("waitingRoom.playVsComputer")
            }

            function z() {
                j = b.getCurrentMatchedGameData()
                p(j.ScoreBoardServiceUri)
                o(false, j)
            }

            function o(h, j) {
                var d = f
                var e = h
                var a = j
                var b = "gameroom"
                if (i.current.name != b) {
                    g.allowSwitch = true
                    g.addHistoryStep(i)
                    l.debug("matchRes: ", a)
                    var c = {level: d, isComputerPlay: e, matchResponse: a}
                    l.debug("game room data: ", c)
                    i.go(b, c)
                }
            }

            function B() {
                e = false
            }

            function p(a) {
                if (a !== null && a !== "") {
                    n.updateEndpoint("ScoreBoardService", a, {remove: /Gateway.aspx/gi, add: "ScoreBoardService.asmx"})
                }
                return
            }
        }

        waitingRoomController.$inject = ["$scope", "$state", "$stateParams", "$log", "observerPatternFactory", "configDataFactory", "waitingRoomFactory", "cloneFactory", "stateHandler"]
        module.exports = waitingRoomController
    }, {}],
    174: [function (require, module, exports) {
        "use strict"
        function digitalClockDirective(g) {
            "use strict"
            var f = {
                restrict: "EA",
                replace: true,
                require: "^?waitingRoom",
                scope: {clockCountDown: "@", sharingHandler: "="},
                template: '<div id="templateClock" class="digitalClock dark clock-dimension" ng-show="needShow">' + '<div class="display">' + '<div class="digits"></div>' + "</div>" + "</div>",
                controller: ["$scope", "$interval", "$filter", h],
                link: i
            }
            var e = "zero one two three four five six seven eight nine"
            var b = []
            var a = {}
            var c = {digitialTimerStart: null, initialTimeRemained: null}
            var d = {}
            if (!d.keys) {
                d.keys = function (c) {
                    var a = [], b
                    for (b in c) {
                        if (d.hasOwnProperty.call(c, b)) {
                            a.push(b)
                        }
                    }
                    return a
                }
            }
            return f
            function h(f, j, k) {
                var h = null
                c.digitialTimerStart = o
                var g = 15e3
                if (f.sharingHandler.clockCountDown !== 0) {
                    g = f.sharingHandler.clockCountDown * 1e3
                }
                c.initialTimeRemained = g
                var i = 1
                if (b.length !== 10) {
                    b = e.split(" ")
                }
                function m(b) {
                    var a = null
                    if (h === null) {
                        a = j(b, 1e3)
                    }
                    return a
                }

                function l() {
                    j.cancel(h)
                    h = null
                    c.initialTimeRemained = null
                    f.sharingHandler.showDigitalClock = false
                    f.needShow = f.sharingHandler.showDigitalClock
                    f.sharingHandler.notifyTripleLights()
                }

                function o() {
                    f.needShow = f.sharingHandler.showDigitalClock
                    if (h !== null) {
                        return
                    }
                    q()
                    if (f.needShow === true) {
                        h = m(p)
                    }
                }

                f.$on("$destroy", function () {
                    if (h) {
                        l()
                    }
                })
                function p() {
                    if (f !== undefined && d.keys(a).length === 4) {
                        var e = k("amDateFormat")
                        var c = e(n(), "hhmmssdA")
                        a.m1.attr("class", b[c[2]])
                        a.m2.attr("class", b[c[3]])
                        a.s1.attr("class", b[c[4]])
                        a.s2.attr("class", b[c[5]])
                    } else {
                    }
                }

                function q() {
                    if (f !== undefined && d.keys(a).length === 4 && c.initialTimeRemained !== null) {
                        var g = k("amDateFormat")
                        var e = g(c.initialTimeRemained, "hhmmssdA")
                        a.m1.attr("class", b[e[2]])
                        a.m2.attr("class", b[e[3]])
                        a.s1.attr("class", b[e[4]])
                        a.s2.attr("class", b[e[5]])
                    }
                }

                function n() {
                    i--
                    if (i > 0) {
                        return
                    }
                    g = g - 1e3
                    if (g < 5) {
                        g = 0
                        l()
                    }
                    return g
                }
            }

            function i(d, l, m, n) {
                d.needshow = false
                var h = l
                if (b.length !== 10) {
                    b = e.split(" ")
                }
                d.digits = {}
                var i = ["m1", "m2", ":", "s1", "s2"]
                var f = angular.element(h.children().children()[0])
                angular.forEach(i, function (d, e) {
                    g.debug("digital Clock directiv: thisItem vs thisIdx: " + d + " vs " + e)
                    if (d === ":") {
                        angular.element(f).append('<div class="dots"></div>')
                    } else {
                        var b = angular.element("<div>")
                        for (var c = 1; c < 8; c++) {
                            b.append('<span class="d' + c + '">')
                        }
                        a[d] = b
                        f.append(b)
                    }
                })
                a.m1.attr("class", "dash")
                a.m2.attr("class", "dash")
                a.s1.attr("class", "dash")
                a.s2.attr("class", "dash")
                function j() {
                    d.needShow = d.sharingHandler.showDigitalClock
                    if (d.needShow === true) {
                        d.sharingHandler.notifyDigitalClock = c.digitialTimerStart
                    }
                }

                var k = d.$watch("sharingHandler", function (a, b) {
                    if (typeof d.sharingHandler === "object") {
                        d.sharingHandler.notifyDigitalClock = j
                        k()
                        j()
                    }
                }, true)
            }
        }

        digitalClockDirective.$inject = ["$log"]
        module.exports = digitalClockDirective
    }, {}],
    175: [function (require, module, exports) {
        "use strict"
        function ieSizeTrigger(a) {
            "use strict"
            return {
                restrict: "A", link: function b(h, i, k) {
                    var c = null
                    var d = 0
                    var e = 92

                    function j() {
                        d += 2
                        if (d > 8) {
                            d = 8
                            g()
                        }
                        var a = e + d
                        i.css({height: a + "%"})
                        var b = true
                    }

                    h.$on("$destroy", function () {
                        g()
                    })
                    if (f(10) || f(11)) {
                        c = a(j, 300)
                    }
                    function f(a) {
                        var b = new RegExp("msie" + (!isNaN(a) ? "\\s" + a : ""), "i")
                        var c = b.test(navigator.userAgent)
                        return c
                    }

                    function g() {
                        if (c !== null) {
                            a.cancel(c)
                            c = null
                        }
                    }
                }
            }
        }

        ieSizeTrigger.$inject = ["$interval"]
        module.exports = ieSizeTrigger
    }, {}],
    176: [function (require, module, exports) {
        "use strict"
        function tripleLightsDirective(i) {
            "use strict"
            var l = {
                restrict: "AE",
                replace: true,
                scope: {clockCountDown: "@", sharingHandler: "="},
                template: require("180"),
                controller: ["$scope", "$interval", "$filter", n],
                controllerAs: "selfCtrl",
                bindToController: true,
                link: m
            }
            var e = null
            var d = 5 + 1
            var h = 1e3
            var k = 1e3 * 3
            var c = {lightsTimerStart: null, numTimeInterval: null}
            var f = ["red", "yellow", "green", "red-flash", "yellow-flash", "green-flash", "green-expansion"]
            var j = false
            var g = [[0, 1, 2], [3, 1, 2], [0, 4, 2], [0, 1, 5], [6, 6, 6], [5, 5, 5], [6, 6, 6], [6, 6, 6]]
            var b = []
            var a = []
            return l
            function n(k, m, r) {
                var i = 0
                var l = 0
                b = []
                a = []
                j = false
                c.lightsTimerStart = p
                k.$on("$destroy", function () {
                    if (e) {
                        n()
                    }
                    if (a.length == 3) {
                        b[0].removeClass(a[0])
                        b[1].removeClass(a[1])
                        b[2].removeClass(a[2])
                    }
                    b = []
                    a = []
                })
                function o(b) {
                    var a = null
                    if (e === null) {
                        a = m(b, c.numTimeInterval)
                    }
                    return a
                }

                function n() {
                    m.cancel(e)
                    e = null
                    c.numTimeInterval = null
                    if (typeof k.sharingHandler.playLiveGame === "function") {
                        k.sharingHandler.playLiveGame()
                    }
                }

                function p() {
                    if (c.numTimeInterval === null) {
                        c.numTimeInterval = h / d
                    }
                    e = o(q)
                }

                function q() {
                    j = true
                    if (k !== undefined && b.length === 3) {
                        if (a.length == 3) {
                            b[0].removeClass(a[0])
                            b[1].removeClass(a[1])
                            b[2].removeClass(a[2])
                        }
                        a[0] = f[g[i][0]]
                        a[1] = f[g[i][1]]
                        a[2] = f[g[i][2]]
                        b[0].addClass(a[0])
                        b[1].addClass(a[1])
                        b[2].addClass(a[2])
                        i++
                        l++
                        if (i > d) {
                            i = d
                        }
                        if (l > d) {
                            i = d
                            n()
                        }
                    } else {
                    }
                }
            }

            function m(l, r, s) {
                l.needshow = false
                var n = r
                var m = n.children().children().children()
                p()
                var o = l.$watch("sharingHandler", function (a, b) {
                    if (a !== undefined && a.hasOwnProperty("showDigitalClock")) {
                        l.sharingHandler.notifyTripleLights = q
                        o()
                        q()
                    }
                }, true)

                function p() {
                    if (j === true) {
                        return
                    }
                    i.debug("*tripleLights* in func initialLightsDisplay : numTimeInterval: " + c.numTimeInterval)
                    angular.forEach(m, function (d, c) {
                        if (b.length < 3) {
                            b[c] = angular.element(m[c])
                        }
                        if (a.length == 3) {
                            b[c].removeClass(a[c])
                        }
                        b[c].addClass(f[g[0][c]])
                        a[c] = f[g[0][c]]
                    })
                }

                function q(b) {
                    l.needShow = !l.sharingHandler.showDigitalClock
                    i.debug("*tripleLights* in func conditionallyOpenLights before it-state : startOffset: " + b)
                    var a
                    if (b === undefined) {
                        p()
                        return
                    } else if (Number(b) === b) {
                        a = k + b
                        a = a < h ? h : a
                    } else {
                        a = h
                        i.debug("*tripleLights* should never get here!")
                    }
                    if (c.numTimeInterval === null) {
                        c.numTimeInterval = Math.floor(a / d)
                    }
                    i.debug("*tripleLights* in func conditionallyOpenLights after if-statement : gameStartOffset:/:maxCountNum: " + a + ":/:" + d)
                    i.debug("*tripleLights* in func conditionallyOpenLights after if-statement : functionHandler.numTimeInterval: " + c.numTimeInterval)
                    if (e !== null) {
                        return
                    }
                    if (l.needShow === true) {
                        c.lightsTimerStart()
                    }
                }
            }
        }

        tripleLightsDirective.$inject = ["$log"]
        module.exports = tripleLightsDirective
    }, {180: 180}],
    177: [function (require, module, exports) {
        "use strict"
        function waitingItemDirective() {
            "use strict"
            var a = {
                restrict: "AE",
                replace: true,
                require: "^?waitingRoomFrame",
                scope: {
                    visualIdentity: "@visualIdentity",
                    faceAssetBasePath: "@faceBasePath",
                    itemData: "=",
                    sharingHandler: "=",
                    cancelGame: "=",
                    playVsComputer: "="
                },
                template: require("181"),
                link: b
            }
            return a
            function b(a, e, f, b) {
                a.isMeBox = a.visualIdentity === "me"
                a.notify = function () {
                    d(a)
                }
                a.runDigitalClock = false
                a.cancelMyGame = a.cancelGame
                a.playMeVsComputer = a.playVsComputer
                a.unavailableTxt = "Unavailable To play"
                a.$watch("itemData", function (d, e) {
                    var b = {
                        displayName: "",
                        avatar: "",
                        thisIsMe: false,
                        hasJoined: false,
                        isInviter: false,
                        hasGameStarted: false,
                        notAvailable: false,
                        isGhost: false,
                        isDimmed: true
                    }
                    if (typeof a.itemData === "object") {
                        c(a.itemData, b)
                        a.isDimmed = b.isDimmed
                        a.displayName = b.displayName
                        a.isMeBox = b.thisIsMe
                        a.avatar = b.avatar
                        a.hasJoined = b.hasJoined
                        a.isInviter = b.isInviter
                        a.notAvailable = b.notAvailable
                        a.isGhost = b.isGhost
                        a.hasGameStarted = b.hasGameStarted
                        a.runDigitalClock = a.sharingHandler.runDigitalClock
                    }
                }, true)
                if (b) {
                    b.addWaitingItem(a)
                }
                a.$on("$destroy", function () {
                    if (b) {
                        b.removeWaitingItem(a)
                    }
                })
            }

            function c(a, b) {
                var c = "", e = "", f = false, g = false, h = false, i = false, d = true
                if (a.hasOwnProperty("IsDimmed")) {
                    d = a.IsDimmed
                } else {
                    d = false
                }
                if (d === true) {
                    return b
                }
                if (a.hasOwnProperty("HasGameStarted")) {
                    i = a.HasGameStarted
                }
                if (a.hasOwnProperty("DisplayName")) {
                    c = a.DisplayName
                }
                if (a.hasOwnProperty("Avatar")) {
                    e = a.Avatar
                }
                if (a.hasOwnProperty("ThisIsMe")) {
                    f = a.ThisIsMe
                }
                if (a.hasOwnProperty("IsInviter")) {
                    h = a.IsInviter
                }
                if (a.hasOwnProperty("HasJoined")) {
                    g = a.HasJoined
                }
                if (c.hasOwnProperty("length") && c.length > 10) {
                    c = c.substring(0, 10) + "..."
                }
                b.displayName = c
                b.avatar = e
                b.thisIsMe = f
                b.isInviter = h
                b.hasJoined = g
                b.hasGameStarted = i || false
                b.isDimmed = d
                b.notAvailable = a.NotAvailable || false
                b.isGhost = a.ThisIsGhost || false
                return b
            }

            function d(a) {
                var b = a.sharingHandler.showDigitalClock
                if (b === true) {
                    a.runDigitalClock = a.sharingHandler.runDigitalClock
                } else {
                    a.hasGameStarted = true
                }
            }
        }

        waitingItemDirective.$inject = []
        module.exports = waitingItemDirective
    }, {181: 181}],
    178: [function (require, module, exports) {
        "use strict"
        function waitingRoomFrameDirective() {
            "use strict"
            var a = {
                restrict: "AE",
                replace: true,
                scope: {
                    clockCountDown: "@",
                    levelId: "@",
                    faceBasePath: "@",
                    gamePlayersList: "=",
                    informGameStarted: "=",
                    informClockStarted: "=",
                    informGameExpired: "=",
                    cancelGame: "=",
                    playVsComputer: "=",
                    playLiveGame: "="
                },
                template: require("183"),
                controller: ["$scope", "$filter", c],
                link: d,
                controllerAs: "selfCtrl",
                bindToController: true
            }
            var b = {hasStartedGame: null}
            return a
            function c(a, g) {
                a.sortedGamePlayersList = []
                a.currentLevelId = a.levelId
                a.hasGameStarted = false
                a.cancelMyGame = a.cancelGame
                a.playMeVsComputer = a.playVsComputer
                a.sharingHandler = {
                    clockCountDown: 0,
                    showDigitalClock: true,
                    notifyDigitalClock: null,
                    notifyTripleLights: null,
                    notifyAllWaitingItems: null,
                    runDigitalClock: false,
                    playLiveGame: null
                }
                this.finishClockStartGame = f
                this.finishIdleStartClock = d
                this.cancelExpiredGame = h
                this.addWaitingItem = k
                this.removeWaitingItem = j
                var c = false
                a.$watch("gamePlayersList", function (b, c) {
                    a.sortedGamePlayersList = e(a, g, b)
                }, true)
                a.sharingHandler.notifyAllWaitingItems = i
                a.sharingHandler.playLiveGame = a.playLiveGame
                a.sharingHandler.clockCountDown = a.clockCountDown
                function f(b, d) {
                    if (b === true) {
                        if (c === true) {
                            return
                        }
                        c = true
                        a.sharingHandler.showDigitalClock = false
                        a.hasGameStarted = true
                        a.sharingHandler.notifyDigitalClock()
                        a.sharingHandler.notifyTripleLights(d)
                        a.sharingHandler.notifyAllWaitingItems()
                    }
                }

                function d(b, c) {
                    a.sharingHandler.clockCountDown = c
                    if (b === true) {
                        a.sharingHandler.showDigitalClock = true
                        a.hasGameStarted = false
                        a.sharingHandler.notifyDigitalClock()
                        a.sharingHandler.notifyAllWaitingItems()
                    }
                }

                function h() {
                    a.cancelMyGame()
                }

                function i() {
                    for (var a = 0, c = b.length; a < c; a++) {
                        if (typeof b[a].notify === "function") {
                            b[a].notify()
                        }
                    }
                }

                var b = []

                function k(a) {
                    b.push(a)
                }

                function j(c) {
                    for (var a = b.length; a >= 0; a--) {
                        if (b[a] === c) {
                            b.splice(a, 1)
                            break
                        }
                    }
                }
            }

            function d(a, c, d) {
                a.internalInformGameStarted = a.informGameStarted || {notify: null}
                a.internalInformGameStarted.notify = a.selfCtrl.finishClockStartGame
                a.internalInformClockStarted = a.informClockStarted || {notify: null}
                a.internalInformClockStarted.notify = a.selfCtrl.finishIdleStartClock
                a.internalInformGameExpired = a.informGameExpired || {notify: null}
                a.internalInformGameExpired.notify = a.selfCtrl.cancelExpiredGame
                var b = a.$watch("sharingHandler", function (c, d) {
                    if (a.sharingHandler.notifyDigitalClock !== null && a.sharingHandler.notifyWaitingItems !== null && typeof a.sharingHandler.notifyDigitalClock === "function" && a.sharingHandler.runDigitalClock === true) {
                        b()
                        a.sharingHandler.notifyDigitalClock()
                    }
                }, true)
            }

            function e(b, l, j) {
                var a = []
                var c
                var f = 4
                var g = j
                var d = 0
                angular.forEach(g, function (c) {
                    if (d > 3) {
                    } else {
                        if (c.hasOwnProperty("DisplayName") || c.hasOwnProperty("UserProfileD") || c.hasOwnProperty("Avatar") || c.hasOwnProperty("ThisIsMe") || c.hasOwnProperty("IsInviter") || c.hasOwnProperty("HasJoined")) {
                            a.push({
                                DisplayName: c.DisplayName,
                                UserProfileD: c.UserProfileD,
                                Avatar: c.Avatar,
                                ThisIsMe: c.ThisIsMe,
                                IsInviter: c.IsInviter,
                                HasJoined: c.HasJoined,
                                NotAvailable: c.NotAvailable,
                                PersonalBestScore: c.PersonalBestScore,
                                ThisIsGhost: c.ThisIsGhost,
                                HasGameStarted: b.HasGameStarted
                            })
                            if (c.ThisIsMe === false && c.HasJoined === true) {
                                b.sharingHandler.runDigitalClock = true
                                if (typeof b.sharingHandler.notifyDigitalClock === "function") {
                                    b.sharingHandler.notifyDigitalClock()
                                }
                            }
                        } else {
                            a.push({IsDimmed: true})
                        }
                    }
                    d++
                })
                if (a.length < 4) {
                    for (var e = 0, h = f - a.length; e < h; e++) {
                        a.push({IsDimmed: true})
                    }
                }
                c = a
                var i = l("orderBy")
                c = i(a, k, true)
                return c
                function k(a) {
                    if (a.hasOwnProperty("IsInviter") && a.IsInviter === true) {
                        return 5
                    } else if (a.hasOwnProperty("ThisIsMe") && a.ThisIsMe === true) {
                        return 4
                    } else if (a.hasOwnProperty("HasJoined")) {
                        return 3
                    } else if (a.hasOwnProperty("IsDimmed") && a.IsDimmed === true) {
                        return 0
                    } else {
                        return 2
                    }
                }
            }
        }

        waitingRoomFrameDirective.$inject = []
        module.exports = waitingRoomFrameDirective
    }, {183: 183}],
    179: [function (require, module, exports) {
        "use strict"
        function waitingRoomFactory(M, y, E, G, J, p, x, q, z, D) {
            var b = {}
            b.setRequirePollGame = v
            b.setInitGamePlayers = r
            b.doInviteOpponents = A
            b.doJoinGame = C
            b.doPollGame = u
            b.doRevokeInvitation = s
            b.registerDataReceiver = I
            b.getCurrentMatchId = K
            b.getCurrentMatchedGameData = L
            b.cleanUp = o
            b.updateAvailablePlayers = B
            b.refreshGame = t
            var g
            var l
            var k = false
            var e
            var h = 0
            var f = 0
            var d = []
            var j = []
            var m = false
            var n = false
            var i = []
            var c = null
            var a = {
                receiveUpdatedGamePlayers: null,
                receiveCountDownStart: null,
                receiveGameHasStarted: null,
                receiveCancelGame: null
            }
            return b
            function r(a) {
                d = a
            }

            function A(c, d, f, g) {
                h = c
                var a = []
                angular.forEach(d, function (b, d) {
                    if (b.hasOwnProperty("ThisIsMe") && b.ThisIsMe === true) {
                    } else {
                        var c = {DisplayName: b.DisplayName, Avatar: b.Avatar, UserProfileID: b.UserProfileID}
                        a.push(c)
                    }
                })
                y.get(c, a, f, g).then(function (a) {
                    if (!a || !a.hasOwnProperty("IsError") || a.IsError === true) {
                    } else {
                        if (a) {
                            j = a.AvailablePlayers
                            e = a.MatchID
                            m = a.IsSuccessful
                            var c = a.IsServiceEnabled
                            if (m === true) {
                                q.notifyObservers("waitingRoomFactory.inviteOpponentSuccess", d)
                                b.setRequirePollGame(true)
                                b.updateAvailablePlayers()
                                b.refreshGame()
                            } else {
                                s(e)
                            }
                        }
                    }
                }, function (a) {
                })
            }

            function B() {
                if (d === undefined || d === null || d.length === undefined || d.length === 0) {
                    return
                }
                angular.forEach(d, function (b, e) {
                    var c = false
                    for (var a = 0, d = j.length; a < d; a++) {
                        if (b.UserProfileID === j[a]) {
                            c = true
                            break
                        }
                    }
                    if (c === true) {
                        b.NotAvailable = false
                    } else {
                        b.NotAvailable = true
                    }
                })
                if (typeof a.receiveUpdatedGamePlayers === "function") {
                    a.receiveUpdatedGamePlayers(d)
                }
            }

            function C(c) {
                E.get(c).then(function (g) {
                    if (!g || !g.hasOwnProperty("IsError") || g.IsError === true) {
                    } else {
                        if (g) {
                            var c = g.Invitation
                            n = g.IsSuccessful
                            if (n === true) {
                                if (c === undefined || c === null) {
                                    return
                                }
                                r(c.GamePlayers)
                                q.notifyObservers("waitingRoomFactory.joinGameSuccess", c.GamePlayers, c.CountDownSeconds)
                                b.setRequirePollGame(true)
                                e = c.MatchID
                                h = c.LevelID
                                var i = false
                                if (f === 0 && c.CountDownSeconds > 0) {
                                    f = c.CountDownSeconds
                                    i = true
                                }
                                if (i === true && typeof a.receiveCountDownStart === "function") {
                                    a.receiveCountDownStart(true, f)
                                } else {
                                    f = 0
                                }
                                if (typeof a.receiveUpdatedGamePlayers === "function") {
                                    a.receiveUpdatedGamePlayers(d)
                                }
                                t()
                            }
                        }
                    }
                }, function (a) {
                })
            }

            function s(c) {
                var b = c
                if (!c || typeof c !== "string") {
                    b = e
                }
                if (g === b) {
                    return
                } else {
                    g = b
                }
                if (g === "") {
                    return
                }
                D.debug("cancelMatchID = ", g, " myMatchID = ", b)
                J.get(g).then(function (b) {
                    if (!b || !b.hasOwnProperty("IsError") || b.IsError === true) {
                    } else {
                        if (b) {
                            var c = b.IsSuccessful
                            if (c) {
                                v(false)
                                o()
                                a.receiveCancelGame(true)
                            } else {
                                g = undefined
                            }
                        }
                    }
                })
            }

            function t() {
                if (e === "" || e === undefined) {
                } else {
                    b.doPollGame(e)
                }
            }

            function F() {
                e = undefined
            }

            function u(b) {
                l = p.cancelDelayCallBack(l)
                if (k === false) {
                    return
                }
                G.get(b).then(function (d) {
                    if (!d || !d.hasOwnProperty("IsError") || d.IsError === true) {
                        a.receiveCancelGame()
                    } else {
                        if (d) {
                            w(d)
                            var f = d.HasStarted
                            var e = d.IsExpired
                            if (f === true) {
                                if (c === null) {
                                    c = {}
                                }
                                c.IsChallenge = true
                                c.StartOffset = d.StartOffset
                                c.Seed = d.Seed
                                c.ScoreBoardServiceUri = d.ScoreBoardServiceUri
                                c.MatchID = null
                                c.StartUTC = null
                                c.UserMatchList = []
                            }
                            if (e === true && typeof a.receiveCancelGame === "function") {
                                a.receiveCancelGame()
                            }
                            if (d.hasOwnProperty("Invitation") && e !== true) {
                                H(d.Invitation, f)
                            }
                            if (d.hasOwnProperty("NextInvocationTime") && e !== true) {
                                l = p.setDelayCallBack(Number(d.NextInvocationTime), l, u, b)
                            }
                        }
                    }
                }, function (b) {
                    if (b !== 407) {
                        a.receiveCancelGame()
                    }
                })
            }

            function H(b, g) {
                h = b.LevelID
                e = b.MatchID
                var j = false
                if (f === 0 && b.CountDownSeconds > 0) {
                    f = b.CountDownSeconds
                    j = true
                }
                i = b.GamePlayers
                if (d === undefined || d === null || d.length === undefined || d.length === 0) {
                    d = i
                }
                var k = []
                angular.forEach(d, function (a, o) {
                    var e = false
                    for (var d = 0, f = i.length; d < f; d++) {
                        var b = i[d]
                        if (a.UserProfileID === b.UserProfileID) {
                            a.DisplayName = b.DisplayName
                            a.Avatar = b.Avatar
                            a.ThisIsMe = b.ThisIsMe
                            a.IsInviter = b.IsInviter
                            a.HasJoined = b.HasJoined
                            a.ThisIsGhost = b.IsGhost
                            a.PersonalBestScore = b.PersonalBest
                            a.HasGameStarted = g
                            e = true
                            break
                        }
                    }
                    if (e === true) {
                        if (a.NotAvailable !== true) {
                            a.NotAvailable = false
                        }
                        if ((a.HasJoined === true || a.ThisIsGhost) && g === true && a.ThisIsMe !== true) {
                            var c = x.getUserProfile()
                            var l = c.SchoolName
                            var m = c.CountryCode
                            var n = c.CultureCode
                            var j = c.StateCode || ""
                            var h = {
                                DisplayName: a.DisplayName,
                                SchoolName: l,
                                CountryCode: m,
                                StateCode: j,
                                Avatar: a.Avatar,
                                CultureCode: n,
                                ThisIsGhost: a.ThisIsGhost,
                                PersonalBestScore: a.PersonalBestScore
                            }
                            k.push(h)
                        } else if (a.HasJoined !== true && a.ThisIsGhost !== true && g === true && a.ThisIsMe !== true) {
                            a.NotAvailable = true
                        }
                    } else {
                        a.NotAvailable = true
                    }
                })
                if (g === true) {
                    c.IsChallenge = true
                    c.MatchID = e
                    c.StartUTC = new Date
                    c.UserMatchList = k
                    if (typeof a.receiveGameHasStarted === "function") {
                        a.receiveGameHasStarted(g, c)
                    }
                }
                if (j === true && typeof a.receiveCountDownStart === "function") {
                    a.receiveCountDownStart(true, f)
                } else {
                    f = 0
                }
                if (typeof a.receiveUpdatedGamePlayers === "function") {
                    a.receiveUpdatedGamePlayers(d)
                }
            }

            function I(b, c, d, e) {
                a.receiveUpdatedGamePlayers = b
                a.receiveCountDownStart = c
                a.receiveGameHasStarted = d
                a.receiveCancelGame = e
            }

            function v(a) {
                k = a
                if (k === true) {
                } else {
                    F()
                }
            }

            function K() {
                return e
            }

            function L() {
                return c
            }

            function o() {
                a.receiveUpdatedGamePlayers = null
                a.receiveCountDownStart = null
                a.receiveGameHasStarted = null
                e = undefined
                g = undefined
                h = 0
                f = 0
                d = []
                j = []
                i = []
                c = null
            }

            function w(c) {
                var g = false
                var d = true
                var k = false
                var l = c.Invitation
                var b = l.GamePlayers
                for (var e = 0, j = b.length; e < j; e++) {
                    var a = b[e]
                    if (a.IsGhost === undefined || a.IsGhost === null) {
                        z.resembleGhostPlayerInfo(a, h)
                    }
                    a.PersonalBest = a.PersonalBest === undefined || a.PersonalBest === null ? 0 : a.PersonalBest
                    if (a.IsGhost === true) {
                        k = true
                    } else {
                        if (a.IsInviter !== true || a.ThisIsMe !== true) {
                            d = false
                        }
                    }
                }
                if (k === true && l.CountDownSeconds === 0 && d === false) {
                    g = true
                }
                if (d === true) {
                    c.HasStarted = true
                    for (var f = 0, m = b.length; f < j; f++) {
                        var i = b[f]
                        if (i.IsGhost === true) {
                            i.HasJoined = true
                        }
                    }
                }
                if (g === true) {
                }
                if (c.HasStarted === true) {
                    c.Seed = c.Seed || Math.floor(Math.random() * 1e5 + 1) + ""
                }
            }
        }

        waitingRoomFactory.$inject = ["$q", "inviteOpponents", "joinGame", "pollGame", "revokeInvitation", "delayFactory", "liveMathsProfileFactory", "observerPatternFactory", "onlineUserFactory", "$log"]
        module.exports = waitingRoomFactory
    }, {}],
    180: [function (require, module, exports) {
        module.exports = '<div id="tempTripleLights" class="tripleLights dark hold-dimension" ng-show="needShow">\n    <div class="display">\n        <div class="trafficLight col-general-custom ">\n            <div class="circle"></div>\n        </div>\n        <div class="trafficLight col-general-custom ">\n            <div class="circle"></div>\n        </div>\n        <div class="trafficLight col-general-custom ">\n            <div class="circle"></div>\n        </div>\n    </div>\n</div>\n'
    }, {}],
    181: [function (require, module, exports) {
        module.exports = '<div>\n    <div class="user-item-container">\n        <div class="avatar-size">\n            <avatar class="avatar-pos" ng-class="{\'face-item-grayed\':(!hasJoined || notAvailable || isGhost)}"\n                    base-url="{{faceAssetBasePath}}" face-setting="{{avatar}}" scale=".436"/>\n        </div>\n\n        <div class="text-center">\n            <p text-center ng-hide="isDimmed">{{displayName}}</p>\n\n            <span class="font-28" ng-hide="isDimmed"\n                  ng-class="{glyphicon:true, \'glyphicon-ok\':((hasJoined && !notAvailable) || isGhost),\n                            \'glyphicon-question-custom\':(!hasJoined && !notAvailable && !isGhost),\n                            \'glyphicon-remove\':notAvailable,\n                            \'glyphicon-custome\':!notAvailable, \'glyphicon-custome-red\':notAvailable}">\n            </span>\n\n            <div ng-show="(isMeBox && isInviter) && (!isDimmed || !hasGameStarted) &&(!runDigitalClock) && !notAvailable">\n                <button class="btn btn-danger  btn-wr-custom1" name="cancel" quick-touch="cancelMyGame()">Cancel</button>\n                <p>or</p>\n                <button class="btn btn-primary btn-wr-custom2" name="play" quick-touch="playMeVsComputer()">Play<br>Computer</button>\n            </div>\n            <div class="word-wr" ng-show=\'notAvailable\'>{{unavailableTxt}}</div>\n        </div>\n    </div>\n</div>\n'
    }, {}],
    182: [function (require, module, exports) {
        module.exports = '<div class="modal-overlay-partial">\n  <div class="modal-overlay-screen">\n  </div>\n  <div class="room-frame" ie-size-trigger>\n      <waiting-room-frame game-players-list="gamePlayersList"\n                          clock-count-down="{{clockCountDown}}" level-id="{{levelId}}"\n                          face-base-path="{{faceAssetBasePathPngs}}"\n                          inform-game-started="informGameHasStarted"\n                          inform-clock-started="informCountDownStarted"\n                          inform-game-expired="informGameHasExpired"\n                          play-live-game="playVsLiveMatch"\n                          cancel-game="cancelGame" play-vs-computer="playVsComputer"></waiting-room-frame>\n  </div>\n</div>\n'
    }, {}],
    183: [function (require, module, exports) {
        module.exports = '<div class="waiting-room">\n    <div class="top-section">\n        <div class="clock-box">\n            <div ng-show="sharingHandler.showDigitalClock">\n                Challenge On Level {{currentLevelId}}\n            </div>\n            <triple-lights sharing-handler="sharingHandler"></triple-lights>\n            <digital-clock sharing-handler="sharingHandler"></digital-clock>\n        </div>\n    </div>\n\n    <div class="bottom-section">\n        <div class="user-list-box">\n            <waiting-item class="user-item" face-base-path="{{faceBasePath}}"\n                          ng-repeat="item in sortedGamePlayersList" item-data="item"\n                          sharing-handler="sharingHandler" play-vs-computer="playMeVsComputer" cancel-game="cancelMyGame"/>\n        </div>\n    </div>\n</div>\n'
    }, {}],
    184: [function (require, module, exports) {
        "use strict"
        function InviteOpponents(c, a, b) {
            "use strict"
            this.get = function (j, m, l, k) {
                var e = a.defer()
                var i = "InviteOpponents"
                var g = b.getConfigValue("userToken")
                if (g === "" || g === null) {
                    return a.reject({})
                }
                var f = b.getConfigValue("liveMathleticsInventoryMatchService")
                if (f === "" || f === null) {
                    return a.reject({})
                }
                var d = {}
                d.UserAuthToken = g
                d.LevelID = j
                d.Invitees = m
                d.ProductID = l
                d.ClassroomIDs = k
                var h = c.post(f + "/" + i, {request: d})
                h.success(function (a, b, c, d) {
                    if (a && a.hasOwnProperty("d") && a.d) {
                        e.resolve(a.d)
                    } else {
                        e.reject({})
                    }
                }).error(function (b, a, c, d) {
                    e.reject(a)
                })
                return e.promise
            }
        }

        InviteOpponents.$inject = ["$http", "$q", "configDataFactory"]
        module.exports = InviteOpponents
    }, {}],
    185: [function (require, module, exports) {
        "use strict"
        function joinGame(c, a, b) {
            this.get = function (j) {
                var d = a.defer()
                var h = "JoinGame"
                var e = b.getConfigValue("userToken")
                if (e === "" || e === null) {
                    return a.reject({})
                }
                var f = b.getConfigValue("liveMathleticsInventoryMatchService")
                if (f === "" || f === null) {
                    return a.reject({})
                }
                var g = {}
                g.UserAuthToken = e
                g.MatchID = j
                var i = c.post(f + "/" + h, {request: g})
                i.success(function (a, b, c, e) {
                    if (a && a.hasOwnProperty("d") && a.d) {
                        d.resolve(a.d)
                    } else {
                        d.reject({})
                    }
                }).error(function (b, a, c, e) {
                    d.reject(a)
                })
                return d.promise
            }
        }

        joinGame.$inject = ["$http", "$q", "configDataFactory"]
        module.exports = joinGame
    }, {}],
    186: [function (require, module, exports) {
        "use strict"
        function RevokeInvitation(c, a, b) {
            this.get = function (j) {
                var d = a.defer()
                var h = "RevokeInvitation"
                var e = b.getConfigValue("userToken")
                if (e === "" || e === null) {
                    return a.reject({})
                }
                var f = b.getConfigValue("liveMathleticsInventoryMatchService")
                if (f === "" || f === null) {
                    return a.reject({})
                }
                var g = {}
                g.UserAuthToken = e
                g.MatchID = j
                var i = c.post(f + "/" + h, {request: g})
                i.success(function (a, b, c, e) {
                    if (a && a.hasOwnProperty("d") && a.d) {
                        d.resolve(a.d)
                    } else {
                        d.reject({})
                    }
                }).error(function (b, a, c, e) {
                    d.reject(a)
                })
                return d.promise
            }
        }

        RevokeInvitation.$inject = ["$http", "$q", "configDataFactory"]
        module.exports = RevokeInvitation
    }, {}],
    187: [function (require, module, exports) {
        "use strict"
        function pollGame(c, a, b) {
            this.get = function (j) {
                var d = a.defer()
                var h = "PollGame"
                var e = b.getConfigValue("userToken")
                if (e === "" || e === null) {
                    return a.reject({})
                }
                var f = b.getConfigValue("liveMathleticsInventoryMatchService")
                if (f === "" || f === null) {
                    return a.reject({})
                }
                var g = {}
                g.UserAuthToken = e
                g.MatchID = j
                var i = c.post(f + "/" + h, {request: g})
                i.success(function (a, b, c, e) {
                    if (a && a.hasOwnProperty("d") && a.d) {
                        d.resolve(a.d)
                    } else {
                        d.reject({})
                    }
                }).error(function (b, a, c, e) {
                    d.reject(a)
                })
                return d.promise
            }
        }

        pollGame.$inject = ["$http", "$q", "configDataFactory"]
        module.exports = pollGame
    }, {}],
    188: [function (require, module, exports) {
        "use strict"
        angular.module("livemathletics.waitingRoom", []).directive("tripleLights", require("176")).directive("waitingRoomFrame", require("178")).directive("ieSizeTrigger", require("175")).factory("waitingRoomFactory", require("179")).controller("waitingRoomController", require("173")).service("inviteOpponents", require("184")).service("revokeInvitation", require("186")).service("joinGame", require("185")).service("pollGame", require("187")).directive("waitingItem", require("177")).directive("digitalClock", require("174"))
    }, {173: 173, 174: 174, 175: 175, 176: 176, 177: 177, 178: 178, 179: 179, 184: 184, 185: 185, 186: 186, 187: 187}],
    189: [function (require, module, exports) {
        "use strict"
        function onlineItemDirective(g, a, e) {
            var c = {
                restrict: "EA",
                replace: true,
                transclude: true,
                require: ["^?onlineSublist", "^?userListBox"],
                scope: {
                    visualIdentity: "@visualIdentity",
                    status: "@studentStatus",
                    name: "@studentName",
                    index: "@itemIndex",
                    faceAssetBasePath: "@faceBasePath",
                    visualModelData: "=",
                    enableModel: "="
                },
                template: require("199"),
                link: f,
                controller: d,
                controllerAs: "ctrl",
                bindToController: true
            }
            var b = {timerInterval: null}
            d.$inject = ["$scope", "$interval"]
            return c
            function d(c, a) {
                b.timerInterval = a
            }

            function f(c, x, w, d) {
                var g = ""
                c.isMeBox = c.visualIdentity === "me"
                c.isInvitationBox = c.visualIdentity === "invitation"
                c.isInvited = false
                c.isMeSelected = false
                c.isOffline = false
                c.displayDesc = {name: "", status: "", hasLongWarning: false, others: "others"}
                c.clickMe = l
                c.mouseOverMe = r
                c.mouseLeaveMe = s
                c.sharedParam = {name: "", status: "", userProfileID: "", countDownSeconds: 0, countDownStart: 0}
                c.cancelChallenge = o
                c.$watch("visualModelData", n, true)
                if (d[0]) {
                    d[0].addLeafItem(c)
                } else if (d[0] === undefined && d[1]) {
                    d[1].addLeafItem(c)
                }
                var h = b.timerInterval
                var f = null

                function l() {
                    if (c.enableModel !== true) {
                        return
                    }
                    if (c.isMeBox || c.isOffline || c.isInGame) {
                        return
                    }
                    if (g !== "") {
                        return
                    }
                    t()
                }

                function m(b) {
                    var a = null
                    if (f === null) {
                        a = h(b, 1e3)
                    }
                    return a
                }

                function i() {
                    h.cancel(f)
                    f = null
                }

                function k(a) {
                    j(a)
                    f = m(p)
                }

                c.$on("$destroy", function () {
                    if (f) {
                        i()
                    }
                    if (d[0]) {
                        d[0].removeLeafItem(c)
                    } else if (d[0] === undefined && d[1]) {
                        d[1].removeLeafItem(c)
                    }
                })
                function p() {
                    j()
                    i()
                }

                function j(a) {
                    if (a === undefined || a === null || a === "") {
                        a = g
                        g = ""
                        c.displayDesc.hasLongWarning = false
                    } else {
                        g = c.displayDesc.status
                        if (a !== undefined && a !== null && a.hasOwnProperty("length") && a.length > 8) {
                            c.displayDesc.hasLongWarning = true
                        }
                    }
                    c.displayDesc.status = a
                }

                function r() {
                    if (c.enableModel !== true) {
                        return
                    }
                    c.isMeMouseover = true
                    return
                }

                function s() {
                    if (c.enableModel !== true) {
                        return
                    }
                    if (c.isMeSelected === true) {
                        return
                    }
                    c.isMeMouseover = false
                    return
                }

                function t() {
                    c.isMeSelected = !c.isMeSelected
                    if (!c.isInvitationBox) {
                        var a = u()
                        if (a !== true) {
                            if (c.isMeSelected === true) {
                                k(a)
                            }
                            c.isMeSelected = false
                        }
                    }
                    v()
                }

                function u() {
                    if (d[0]) {
                        return d[0].getSelectionAllowed()
                    } else {
                        return true
                    }
                }

                function v() {
                    if (d[0]) {
                        if (c.isMeSelected) {
                            d[0].addSelectedItem(c)
                        } else {
                            d[0].removeSelectedItem(c)
                        }
                        c.$on("$destroy", function () {
                            d[0].removeSelectedItem(c)
                        })
                    }
                    return
                }

                function o() {
                    c.isMeSelected = false
                    c.isMeMouseover = false
                    return
                }

                function n(k, l) {
                    if (typeof c.visualModelData === "object") {
                        var b = c.visualModelData
                        if (b === null || b === undefined) {
                            e.debug("No snap student info to render this online Item")
                            return
                        }
                        c.isOffline = false
                        c.isInvited = false
                        c.isInGame = false
                        var f
                        if (b.hasOwnProperty("DisplayName")) {
                            f = b.DisplayName
                            c.sharedParam.name = f
                            c.displayDesc.name = f
                        }
                        if (b.hasOwnProperty("UserProfileID")) {
                            c.sharedParam.userProfileID = b.UserProfileID
                        }
                        if (b.hasOwnProperty("UserStatusEnum")) {
                            if (c.isMeBox === true) {
                                c.sharedParam.status = "isMe"
                                c.displayDesc.status = "This is Me"
                                return
                            }
                            var i = b.UserStatusEnum
                            var d = "Ready"
                            switch (i) {
                                case a.USER_STATUS.OFFLINE:
                                    d = "Offline"
                                    c.isOffline = true
                                    break
                                case a.USER_STATUS.READY:
                                    d = "Ready"
                                    break
                                case a.USER_STATUS.PLAYING:
                                    d = "In Game"
                                    c.isInGame = true
                                    break
                                case a.USER_STATUS.ACCEPTED_INVITATION:
                                    d = "Accepted Invitation"
                                    break
                                case a.USER_STATUS.INITIATED_GAME:
                                    var j = b.LevelID || ""
                                    d = "Challenge on level " + j
                                    c.isInvited = true
                                    break
                                default:
                                    d = "Unknown"
                                    c.isOffline = true
                                    break
                            }
                            c.status = d
                            c.sharedParam.status = d
                            c.displayDesc.status = d
                        }
                        var g = 0
                        if (b.hasOwnProperty("CountDownSeconds")) {
                            g = b.CountDownSeconds
                        }
                        if (g > 0) {
                            c.sharedParam.countDownSeconds = g
                        }
                        c.sharedParam.countDownStart = b.CountDownStart || 0
                        if (c.isInvited === true) {
                            var h = 8
                            if (f.length > h) {
                                f = f.substring(0, h) + ".."
                            }
                            c.name = f
                            c.sharedParam.name = f
                            c.displayDesc.name = f
                        }
                    }
                }

                c.itmeId = c.index
                c.showMe = c.itmeId === 0
                var q = false
                c.toggle = function a() {
                    var b = c.itmeId
                    c.showMe = !c.showMe
                    if (d[0]) {
                        d[0].testSelectedItem(c)
                    }
                }
            }
        }

        onlineItemDirective.$inject = ["$state", "userStatusEnum", "$log"]
        module.exports = onlineItemDirective
    }, {199: 199}],
    190: [function (require, module, exports) {
        "use strict"
        function onlineItemSubListDirective(g) {
            var d = {
                restrict: "EA",
                replace: true,
                transclude: true,
                require: ["^?userListBox"],
                scope: {subTopic: "@", groupType: "@", challengeInvitation: "=", cancelChallenges: "="},
                template: "<div ng-transclude></div>",
                link: f,
                controller: e,
                controllerAs: "selfCtrl",
                bindToController: true
            }
            var b = []
            var a = []
            var c = ""
            e.$inject = ["$scope"]
            return d
            function f(a, c, d, b) {
                a.internalCancelChallenges = a.cancelChallenges || {notify: null}
                a.internalCancelChallenges.notify = a.selfCtrl.cancelChallenge
                if (b[0]) {
                    a.outerCtrl = b[0]
                }
            }

            function e(d) {
                this.addSelectedItem = g
                this.removeSelectedItem = h
                this.getNumSelectedItem = j
                this.cancelChallenge = e
                this.getSelectionAllowed = i
                function g(b) {
                    if (d.groupType === "invitation") {
                        e()
                        c = "invitation"
                        if (a.length < 1) {
                            a.push(b)
                        }
                    } else if (d.groupType === "online") {
                        if (c === "invitation") {
                            e()
                        }
                        c = "online"
                        if (a.length < 3) {
                            a.push(b)
                        }
                    }
                    if (typeof d.challengeInvitation === "function") {
                        var g = f()
                        d.challengeInvitation(g)
                    }
                }

                function h(e) {
                    for (var b = a.length - 1; b >= 0; b--) {
                        if (a[b] === e) {
                            a.splice(b, 1)
                            break
                        }
                    }
                    if (typeof d.challengeInvitation === "function") {
                        var c = f()
                        d.challengeInvitation(c, true)
                    }
                }

                function f() {
                    var b = []
                    var c = d.outerCtrl.getMeData()
                    c.IsInviter = true
                    c.HasJoined = true
                    b.push(c)
                    angular.forEach(a, function (a) {
                        b.push(a.visualModelData)
                    })
                    return b
                }

                function i() {
                    var b = true
                    if (d.groupType === "online") {
                        if (a.length >= 3) {
                            b = "No more user can be selected"
                        }
                    }
                    return b
                }

                function j() {
                    return a.length
                }

                function e() {
                    for (var b = a.length - 1; b >= 0; b--) {
                        a[b].cancelChallenge()
                        a.splice(b, 1)
                    }
                }

                this.testSelectedItem = function (a) {
                    angular.forEach(b, function (b) {
                        if (a != b) {
                            b.showMe = false
                        }
                    })
                }
                this.addLeafItem = function (a) {
                    b.push(a)
                }
                this.removeLeafItem = function (c) {
                    for (var a = b.length; a >= 0; a--) {
                        if (b[a] === c) {
                            b.splice(a, 1)
                            break
                        }
                    }
                }
            }
        }

        onlineItemSubListDirective.$inject = ["$log"]
        module.exports = onlineItemSubListDirective
    }, {}],
    191: [function (require, module, exports) {
        "use strict"
        function onlineListDirective() {
            a.$inject = []
            return {
                restrict: "EA",
                transclude: true,
                template: '<div class="onlineContainer" ng-transclude="true"></div>',
                controller: a,
                controllerAs: "olCtrl",
                bindToController: true
            }
            function a() {
                var a = []
                var b = []
                this.testSelectedLeafItem = function (b) {
                    angular.forEach(a, function (a) {
                        if (b != a) {
                            a.showMe = false
                        }
                    })
                }
                this.addSubSet = function (a) {
                    b.push(a)
                }
                this.removeSubCollections = function (c) {
                    for (var a = b.length; a >= 0; a--) {
                        if (b[a] === c) {
                            b.splice(a, 1)
                            break
                        }
                    }
                }
                this.addLeafItem = function (b) {
                    a.push(b)
                }
                this.removeLeafItem = function (c) {
                    for (var b = a.length; b >= 0; b--) {
                        if (a[b] === c) {
                            a.splice(b, 1)
                            break
                        }
                    }
                }
            }
        }

        onlineListDirective.$inject = []
        module.exports = onlineListDirective
    }, {}],
    192: [function (require, module, exports) {
        "use strict"
        function playerTabDirective(i, a, g, c, d) {
            var e = {
                restrict: "EA",
                replace: true,
                transclude: true,
                require: ["^?onlineSublist", "^?userListBox"],
                scope: {
                    visualIdentity: "@visualIdentity",
                    status: "@studentStatus",
                    name: "@studentName",
                    index: "@itemIndex",
                    faceAssetBasePath: "@faceBasePath",
                    visualModelData: "=",
                    enableModel: "=",
                    performGhost: "="
                },
                template: require("200"),
                link: h,
                controller: f,
                controllerAs: "ctrl",
                bindToController: true
            }
            var b = {timerInterval: null}
            f.$inject = ["$scope", "$interval"]
            return e
            function f(c, a) {
                b.timerInterval = a
            }

            function h(e, D, C, f) {
                var i = ""
                var k = d.getConfigValue("usingShadowPopup") || false
                var l = d.getConfigValue("usingShadowPopupSec") || 5
                e.isMeBox = e.visualIdentity === "me"
                e.isInvitationBox = e.visualIdentity === "invitation"
                e.isInvited = false
                e.isMeSelected = false
                e.isOffline = false
                e.highlightGhost = false
                e.displayDesc = {
                    name: "",
                    rank: "",
                    weekly: "",
                    status: "",
                    statusIcon: "online",
                    hasLongWarning: false,
                    fullName: "",
                    others: "others"
                }
                e.clickMe = p
                e.mouseOverMe = v
                e.mouseLeaveMe = w
                e.sharedParam = {name: "", status: "", userProfileID: "", countDownSeconds: 0, countDownStart: 0}
                e.cancelChallenge = u
                e.$watch("visualModelData", s, true)
                if (f[0]) {
                    f[0].addLeafItem(e)
                } else if (f[0] === undefined && f[1]) {
                    f[1].addLeafItem(e)
                }
                var j = b.timerInterval
                var h = null

                function p() {
                    if (e.enableModel !== true) {
                        return
                    }
                    if (e.isMeBox || e.isInGame) {
                        return
                    }
                    if (i !== "") {
                        return
                    }
                    z()
                }

                function q(b) {
                    var a = null
                    if (h === null) {
                        a = j(b, 1e3)
                    }
                    return a
                }

                function m() {
                    j.cancel(h)
                    h = null
                }

                function o(a) {
                    n(a)
                    h = q(t)
                }

                e.$on("$destroy", function () {
                    if (h) {
                        m()
                    }
                    if (f[0]) {
                        f[0].removeLeafItem(e)
                    } else if (f[0] === undefined && f[1]) {
                        f[1].removeLeafItem(e)
                    }
                })
                function t() {
                    n()
                    m()
                }

                function n(a) {
                    if (a === undefined || a === null || a === "") {
                        a = i
                        i = ""
                        e.displayDesc.hasLongWarning = false
                    } else {
                        i = e.displayDesc.status
                        if (a !== undefined && a !== null && a.hasOwnProperty("length") && a.length > 8) {
                            e.displayDesc.hasLongWarning = true
                        }
                    }
                    e.displayDesc.status = a
                }

                function v() {
                    if (e.enableModel !== true) {
                        return
                    }
                    e.isMeMouseover = true
                    return
                }

                function w() {
                    if (e.enableModel !== true) {
                        return
                    }
                    if (e.isMeSelected === true) {
                        return
                    }
                    e.isMeMouseover = false
                    return
                }

                function x() {
                    if (!e.isMeSelected && e.isOffline && k) {
                        if (!c.offlineFirstClick) {
                            c.offlineFirstClick = true
                            y()
                        }
                    }
                }

                function y() {
                    var a
                    var b = l * 1e3
                    a = j(c, b)
                    e.highlightGhost = true
                    if (typeof e.performGhost === "function") {
                        e.performGhost(true, e.displayDesc.fullName)
                    }
                    function c() {
                        e.highlightGhost = false
                        j.cancel(a)
                        if (typeof e.performGhost === "function") {
                            e.performGhost(false)
                        }
                    }
                }

                function z() {
                    x(e.isMeSelected)
                    e.isMeSelected = !e.isMeSelected
                    if (!e.isInvitationBox) {
                        var a = A()
                        if (a !== true) {
                            if (e.isMeSelected === true) {
                                o(a)
                            }
                            e.isMeSelected = false
                        }
                    }
                    B()
                }

                function A() {
                    if (f[0]) {
                        return f[0].getSelectionAllowed()
                    } else {
                        return true
                    }
                }

                function B() {
                    if (f[0]) {
                        if (e.isMeSelected) {
                            f[0].addSelectedItem(e)
                        } else {
                            f[0].removeSelectedItem(e)
                        }
                        e.$on("$destroy", function () {
                            f[0].removeSelectedItem(e)
                        })
                    }
                    return
                }

                function u() {
                    e.isMeSelected = false
                    e.isMeMouseover = false
                    return
                }

                function s(l, m) {
                    if (typeof e.visualModelData === "object") {
                        var b = e.visualModelData
                        if (b === null || b === undefined) {
                            g.debug("No snap student info to render this online Item")
                            return
                        }
                        e.displayDesc.rank = b.DisplayRank
                        e.displayDesc.weekly = b.DisplayWeeklyPoints
                        e.isOffline = false
                        e.isInvited = false
                        e.isInGame = false
                        var c = ""
                        if (b.hasOwnProperty("DisplayName")) {
                            c = b.DisplayName === undefined ? "" : b.DisplayName
                            e.sharedParam.name = c
                            e.displayDesc.name = c
                            e.displayDesc.fullName = c
                        }
                        if (b.hasOwnProperty("UserProfileID")) {
                            e.sharedParam.userProfileID = b.UserProfileID
                        }
                        if (b.hasOwnProperty("UserStatusEnum")) {
                            if (e.isMeBox === true) {
                                e.sharedParam.status = "isMe"
                                e.displayDesc.status = "This is Me"
                                e.displayDesc.statusIcon = "mine"
                                return
                            }
                            var j = b.UserStatusEnum
                            var d = "Ready"
                            var f = "online"
                            switch (j) {
                                case a.USER_STATUS.OFFLINE:
                                    d = "Offline"
                                    f = "offline"
                                    e.isOffline = true
                                    break
                                case a.USER_STATUS.READY:
                                    d = "Ready"
                                    f = "online"
                                    break
                                case a.USER_STATUS.PLAYING:
                                    d = "In Game"
                                    f = "ingame"
                                    e.isInGame = true
                                    break
                                case a.USER_STATUS.ACCEPTED_INVITATION:
                                    d = "Accepted Invitation"
                                    f = "ingame"
                                    break
                                case a.USER_STATUS.INITIATED_GAME:
                                    var k = b.LevelID || ""
                                    d = "Challenge on level " + k
                                    f = "inviting"
                                    e.isInvited = true
                                    break
                                default:
                                    d = "Unknown"
                                    f = "offline"
                                    e.isOffline = true
                                    break
                            }
                            e.status = d
                            e.sharedParam.status = d
                            e.displayDesc.status = d
                            e.displayDesc.statusIcon = f
                        }
                        var h = 0
                        if (b.hasOwnProperty("CountDownSeconds")) {
                            h = b.CountDownSeconds
                        }
                        if (h > 0) {
                            e.sharedParam.countDownSeconds = h
                        }
                        e.sharedParam.countDownStart = b.CountDownStart || 0
                        var i = 15
                        if (c.length > i) {
                            c = c.substring(0, i) + ".."
                        }
                        e.name = c
                        e.sharedParam.name = c
                        e.displayDesc.name = c
                    }
                }

                e.itmeId = e.index
                e.showMe = e.itmeId === 0
                var r = false
                e.toggle = function a() {
                    var b = e.itmeId
                    e.showMe = !e.showMe
                    if (f[0]) {
                        f[0].testSelectedItem(e)
                    }
                }
            }
        }

        playerTabDirective.$inject = ["$state", "userStatusEnum", "$log", "onlineUserFactory", "configDataFactory"]
        module.exports = playerTabDirective
    }, {200: 200}],
    193: [function (require, module, exports) {
        "use strict"
        function shadowBubble(a) {
            "use strict"
            return {
                restrict: "AE",
                scope: {displayInfo: "=", updateDisplay: "="},
                template: require("201"),
                link: function b(d, m, o) {
                    var c = angular.element(m)[0].firstChild
                    var h = c.dir
                    var e = "It"
                    var f = " is offline"
                    var i = "but "
                    var j = "you can still play "
                    var k = "against their top score in Shadow Mode."
                    var l = "Just select your friends and click "
                    var g = "GO"
                    d.internalUpdateDisplay = d.updateDisplay || {notify: null}
                    d.internalUpdateDisplay.notify = n
                    d.toShow = true
                    d.shadowBubbleStyle = {top: "100px"}
                    function n(v, m, n, p) {
                        if (m !== null && angular.element(m)[0].id === c.id) {
                            d.toShow = false
                            return
                        }
                        d.toShow = v
                        e = p === null || p === undefined ? "It" : p
                        if (m !== null && n !== null && v === true) {
                            var q = ""
                            if (h !== "rtl") {
                                q = "<p class='shadow-bubble-text'><span style='color:#31B82E; font-weight: bold'>" + e + "</span>" + f + "</p>" + "<p class='shadow-bubble-text'>" + i + "<span style='color:#31B82E; font-weight: bold'>" + j + "</span>" + k + "</p>" + "<p class='shadow-bubble-text'>" + l + "<span style='color:#31B82E; font-weight: bold'>" + g + "</span>.</p>"
                            } else {
                            }
                            c.innerHTML = q
                            var t = m.getBoundingClientRect()
                            var r = n.getBoundingClientRect()
                            var b = t.top - r.top
                            var u = angular.element(n).prop("offsetHeight")
                            var o = angular.element(n).prop("offsetWidth")
                            var w = u / r.height
                            b = b * w
                            var x = b + 25 + "px"
                            var y = b - 20 + "px"
                            var z = o * 3 / 4 + "px"
                            var A = o - 10 + "px"
                            var B = {left: z, top: x, width: "10px", height: "10px", transition: ""}
                            var C = {left: A, top: y, width: "248px", height: "90px", transition: "all 1s ease-in-out"}
                            angular.element(c).css(B)
                            var s = a(function () {
                                angular.element(c).css(C)
                                a.cancel(s)
                                s = null
                            }, 0)
                        } else {
                            var D = {
                                width: "0",
                                height: "0",
                                transform: "translate(-50px,50px) rotate(720deg)",
                                "transition-property": "width, height, transform",
                                "transition-duration": "1s, 0.8s, 0.7s",
                                "transition-delay": "0s, 0.2s, 0.3s",
                                "transition-timing-function": "ease-in-out, ease-in-out, ease-in-out"
                            }
                            angular.element(c).css(D)
                        }
                    }
                }
            }
        }

        shadowBubble.$inject = ["$interval"]
        module.exports = shadowBubble
    }, {201: 201}],
    194: [function (require, module, exports) {
        "use strict"
        function timerProgressCircle(c, b, d) {
            a.$inject = ["$scope", "$timeout", "$interval", "$element"]
            return {
                require: "^onlineItem",
                restrict: "E",
                replace: false,
                scope: {parentParam: "="},
                template: require("202"),
                controller: a
            }
            function a(a, l, e, k) {
                var d = null
                a.MAX_TIME_LIMIT = 15
                a.TIMER_RUNNING = false
                d = a.MAX_TIME_LIMIT * 100
                var c = null

                function i(b) {
                    var a = null
                    if (c === null) {
                        a = e(b, 1200)
                    }
                    return a
                }

                function f() {
                    e.cancel(c)
                    c = null
                }

                function j() {
                    if (a.timer < 2) {
                        e.cancel(c)
                    }
                    a.timer = a.timer - d
                    a.progressStyle = {width: a.timer / d * 10 + "%"}
                    b.debug(d, "$scope.timer" + a.timer)
                }

                a.$on("$destroy", function () {
                    if (c) {
                        f()
                    }
                })
                function g() {
                    c = i(j)
                }

                function h() {
                    f()
                }

                a.$watch("parentParam", function (b, i) {
                    if (b !== undefined && b.hasOwnProperty("countDownSeconds")) {
                        var c = b.status
                        var e = b.countDownSeconds
                        if (b.countDownStart === 1) {
                            a.timer = e * 1e3
                        } else {
                            a.timer = a.MAX_TIME_LIMIT * 1e3
                        }
                        if (c) {
                            var f = c.split(" ")
                            a.challengeLevel = f[f.length - 1]
                        }
                        a.progressStyle = {width: a.timer / d * 10 + "%"}
                        a.MAX_TIME_LIMIT = e
                        if (a.MAX_TIME_LIMIT > 0) {
                            g()
                        } else {
                            h()
                        }
                    }
                })
            }
        }

        timerProgressCircle.$inject = ["$timeout", "$log", "$compile"]
        module.exports = timerProgressCircle
    }, {202: 202}],
    195: [function (require, module, exports) {
        "use strict"
        function timerProgressbar(c, b, d) {
            a.$inject = ["$scope", "$timeout", "$interval", "$element"]
            return {
                require: "^onlineItem",
                restrict: "E",
                replace: false,
                scope: {parentParam: "="},
                template: require("203"),
                controller: a
            }
            function a(a, l, e, k) {
                var d = null
                a.MAX_TIME_LIMIT = 15
                a.TIMER_RUNNING = false
                d = a.MAX_TIME_LIMIT * 100
                var c = null

                function i(b) {
                    var a = null
                    if (c === null) {
                        a = e(b, 1200)
                    }
                    return a
                }

                function f() {
                    e.cancel(c)
                    c = null
                }

                function j() {
                    if (a.timer < 2) {
                        e.cancel(c)
                    }
                    a.timer = a.timer - d
                    a.progressStyle = {width: a.timer / d * 10 + "%"}
                    b.debug(d, "$scope.timer" + a.timer)
                }

                a.$on("$destroy", function () {
                    if (c) {
                        f()
                    }
                })
                function g() {
                    c = i(j)
                }

                function h() {
                    f()
                }

                a.$watch("parentParam", function (b, e) {
                    if (b !== undefined && b.hasOwnProperty("countDownSeconds")) {
                        var c = b.countDownSeconds
                        if (b.countDownStart === 1) {
                            a.timer = c * 1e3
                        } else {
                            a.timer = a.MAX_TIME_LIMIT * 1e3
                        }
                        a.progressStyle = {width: a.timer / d * 10 + "%"}
                        a.MAX_TIME_LIMIT = c
                        if (a.MAX_TIME_LIMIT > 0) {
                            g()
                        } else {
                            h()
                        }
                    }
                })
            }
        }

        timerProgressbar.$inject = ["$timeout", "$log", "$compile"]
        module.exports = timerProgressbar
    }, {203: 203}],
    196: [function (require, module, exports) {
        "use strict"
        function userListBoxDirective(a) {
            var b = {
                restrict: "AE",
                scope: {
                    faceBasePath: "@",
                    itemMeData: "=",
                    itemInvitationList: "=",
                    itemOnAndOffLineList: "=",
                    challengeCollection: "=",
                    invitationAcception: "=",
                    cancelChallenges: "=",
                    enableModel: "=",
                    performGhost: "="
                },
                template: require("204"),
                controller: c,
                controllerAs: "ulbCtrl",
                bindToController: true
            }
            c.$inject = ["$scope"]
            return b
            function c(g) {
                var a = []
                var b = []
                var c = null
                this.getMeData = h
                this.addLeafItem = k
                this.removeLeafItem = l
                this.addSublist = i
                this.removeSublist = j
                g.orderByOnAndOffline = f
                g.orderByInvitation = e
                g.adjustHeight = d
                function h() {
                    if (c === null) {
                        for (var b = 0, e = a.length; b < e; b++) {
                            var d = a[b]
                            if (d.hasOwnProperty("visualIdentity") && d.visualIdentity === "me") {
                                c = d.visualModelData
                                break
                            }
                        }
                    }
                    return c
                }

                this.testSelectedLeafItem = function (b) {
                    angular.forEach(a, function (a) {
                        if (b != a) {
                            a.showMe = false
                        }
                    })
                }
                function i(a) {
                    b.push(a)
                }

                function j(c) {
                    for (var a = b.length; a >= 0; a--) {
                        if (b[a] === c) {
                            b.splice(a, 1)
                            break
                        }
                    }
                }

                function k(b) {
                    a.push(b)
                }

                function l(c) {
                    for (var b = a.length; b >= 0; b--) {
                        if (a[b] === c) {
                            a.splice(b, 1)
                            break
                        }
                    }
                }
            }

            function d() {
                angular.element(document).ready(function () {
                    var c
                    var d = 440
                    var e = angular.element(document.querySelector("#onlineOfflineList"))
                    var f = angular.element(document.querySelector("#userListMainContainer"))
                    var a = e.prop("offsetHeight")
                    var b = f.prop("offsetHeight")
                    if (b !== a && a < b) {
                        c = d - (b - a) + "px"
                    } else {
                        c = d + "px"
                    }
                    e.css("max-height", c)
                })
            }

            function e(a) {
                var b = a.DisplayWeeklyPoints === undefined ? 0 : a.DisplayWeeklyPoints
                return b
            }

            function f(d) {
                var b = d.DisplayWeeklyPoints === undefined ? 0 : d.DisplayWeeklyPoints
                var c = a.OFFLINE
                if (d.hasOwnProperty("UserStatusEnum")) {
                    c = d.UserStatusEnum
                }
                if (c === a.USER_STATUS.READY) {
                    b += .5
                } else if (c === a.USER_STATUS.ACCEPTED_INVITATION) {
                    b += .4
                } else if (c === a.USER_STATUS.INITIATED_GAME) {
                    b += .3
                } else if (c === a.USER_STATUS.PLAYING) {
                    b += .2
                } else if (c === a.USER_STATUS.OFFLINE) {
                    b += .1
                } else {
                    b += 0
                }
                return b
            }
        }

        userListBoxDirective.$inject = ["userStatusEnum"]
        module.exports = userListBoxDirective
    }, {204: 204}],
    197: [function (require, module, exports) {
        "use strict"
        function userStatusEnum() {
            var a = {}
            a.USER_STATUS = {OFFLINE: 0, READY: 1, PLAYING: 2, ACCEPTED_INVITATION: 4, INITIATED_GAME: 5}
            a.SORTING_INDEX = {OFFLINE: 3, READY: 1, PLAYING: 2, ACCEPTED_INVITATION: 0, INITIATED_GAME: -1}
            a.getStatusByValue = function (b) {
                switch (b) {
                    case a.USER_STATUS.OFFLINE:
                        return "OFFLINE"
                    case a.USER_STATUS.READY:
                        return "READY"
                    case a.USER_STATUS.PLAYING:
                        return "PLAYING"
                    case a.USER_STATUS.ACCEPTED_INVITATION:
                        return "ACCEPTED INVITATION"
                    case a.USER_STATUS.INITIATED_GAME:
                        return "INITIATED GAME"
                }
            }
            return a
        }

        userStatusEnum.$inject = []
        module.exports = userStatusEnum
    }, {}],
    198: [function (require, module, exports) {
        "use strict"
        function onlineUserFactory(s, g, B, G, H, u, w, d) {
            var b = {}
            var e, a
            var j, i, m
            var k = true
            var c = {
                receiveMeData: null,
                receiveInvitationData: null,
                receiveOnAndOffLineData: null,
                productId: 1,
                isSchoolChallenge: false,
                meData: null,
                currentInvitationList: null
            }
            b.offlineFirstClick = false
            b.getSchoolUsers = E
            b.getUserStatus = n
            b.getUsersPoints = p
            b.getUserInvitation = o
            b.setSchoolChallenge = y
            b.setProductId = x
            b.registerDataReceiver = function (a, b, d) {
                c.receiveMeData = a
                c.receiveInvitationData = b
                c.receiveOnAndOffLineData = d
            }
            b.setMeData = F
            b.resetPollUsersAllStatus = function (a) {
                if ((a === true || a === false) && b.requirePollUsersAllStatus === a) {
                    return
                }
                b.requirePollUsersAllStatus = a
                if (a === true) {
                    b.refreshStatus()
                } else {
                    b.stopRefreshStatus()
                }
            }
            function p(a, c) {
                m = g.cancelDelayCallBack(m)
                if (b.requirePollUsersAllStatus !== true) {
                    return
                }
                w.get(a, c).then(r)
            }

            function r(d) {
                if (!d || !d.hasOwnProperty("IsError") || d.IsError === true || b.requirePollUsersAllStatus !== true) {
                    return
                }
                if (d.usingMockData === true) {
                    d = z(c.meData, a)
                }
                if (d.hasOwnProperty("ThisIsMe")) {
                    q(d.ThisIsMe)
                }
                if (d.hasOwnProperty("UserPointsList")) {
                    t(d.UserPointsList)
                }
                if (d.hasOwnProperty("NextInvocationTime")) {
                    var e = Number(d.NextInvocationTime)
                    if (e > 0) {
                        m = g.setDelayCallBack(e, m, p, [c.productId, c.isSchoolChallenge])
                    }
                }
            }

            function t(f) {
                if (!f) {
                    return
                }
                var e, c, b, g
                for (e = 0; e < f.length; e++) {
                    c = f[e]
                    b = c.UserProfileID
                    if (a === undefined) {
                        a = {}
                    }
                    if (!a.hasOwnProperty(b)) {
                        a[b] = {}
                        a[b].UserProfileID = b
                        a[b].UserStatusEnum = d.USER_STATUS.OFFLINE
                    }
                    a[b].TotalCoursePoints = c.TotalCoursePoints
                    a[b].TotalLivePoints = c.TotalLivePoints
                    a[b].TotalPoints = c.TotalPoints
                    a[b].YearGroup = c.YearGroup
                    a[b].LevelList = c.LevelList
                }
                l()
            }

            function n(a) {
                j = g.cancelDelayCallBack(j)
                if (b.requirePollUsersAllStatus !== true) {
                    return
                }
                H.get(a).then(v)
            }

            function v(a) {
                if (!a || !a.hasOwnProperty("IsError") || a.IsError === true || b.requirePollUsersAllStatus !== true) {
                    return
                }
                if (a.hasOwnProperty("ThisIsMe")) {
                    q(a.ThisIsMe)
                }
                if (a.hasOwnProperty("OnlineUserStatusList")) {
                    b.updateUserStatus(a.OnlineUserStatusList)
                }
                if (a.hasOwnProperty("NextInvocationTime")) {
                    var c = Number(a.NextInvocationTime)
                    if (c > 0) {
                        j = g.setDelayCallBack(c, j, n)
                    }
                }
            }

            var h
            b.updateUserStatus = function (m) {
                if (!m) {
                    return
                }
                var g
                var e, i, c, k
                var j
                for (e = 0; e < m.length; e++) {
                    i = m[e]
                    c = i.UserProfileID
                    if (a === undefined) {
                        a = {}
                    }
                    if (!j) {
                        j = [c]
                    } else if (j.indexOf(c) < 0) {
                        j.push(c)
                    }
                    if (a.hasOwnProperty(c)) {
                        if (h) {
                            k = h.indexOf(c)
                        } else {
                            k = -1
                        }
                        if (a[c].UserStatusEnum == d.USER_STATUS.INITIATED_GAME) {
                            if (!f || f.indexOf(c) < 0) {
                                a[c].UserStatusEnum = i.UserStatusEnum
                            }
                        } else if (a[c].UserStatusEnum !== i.UserStatusEnum) {
                            a[c].UserStatusEnum = i.UserStatusEnum
                        }
                        if (k >= 0) {
                            h.splice(k, 1)
                        }
                    } else {
                        a[c] = {}
                        a[c].UserStatusEnum = i.UserStatusEnum
                        a[c].UserProfileID = i.UserProfileID
                        if (!g) {
                            g = [c]
                        } else if (g.indexOf(c) < 0) {
                            g.push(c)
                        }
                    }
                }
                if (h) {
                    for (e = 0; e < h.length; e++) {
                        c = h[e]
                        if (a.hasOwnProperty(c) && a[c]) {
                            if (a[c].UserStatusEnum !== d.USER_STATUS.INITIATED_GAME) {
                                a[c].UserStatusEnum = d.USER_STATUS.OFFLINE
                            }
                        }
                    }
                }
                h = j
                if (g && g.length > 0) {
                    b.getSchoolUsersByProfile(g)
                }
                l()
            }
            function x(a) {
                c.productId = a
            }

            function y(a) {
                c.isSchoolChallenge = a
            }

            function o() {
                i = g.cancelDelayCallBack(i)
                if (b.requirePollUsersAllStatus !== true) {
                    return
                }
                u.get().then(A)
            }

            function A(a) {
                if (!a || !a.hasOwnProperty("IsError") || a.IsError === true || b.requirePollUsersAllStatus !== true) {
                    return
                }
                if (a.hasOwnProperty("Invitations")) {
                    b.updateUserInvitation(a.Invitations)
                }
                if (a.hasOwnProperty("NextInvocationTime")) {
                    var c = Number(a.NextInvocationTime)
                    if (c > 0) {
                        i = g.setDelayCallBack(c, i, o)
                    }
                }
            }

            var f
            b.updateUserInvitation = function (p) {
                if (e === undefined || e.length <= 0) {
                    return
                }
                var i, o, h, k
                var m, n, c
                var j
                var g
                for (i = 0; i < p.length; i++) {
                    h = p[i]
                    for (o = 0; o < h.GamePlayers.length; o++) {
                        k = h.GamePlayers[o]
                        if (k.IsInviter) {
                            c = k.UserProfileID
                            if (!m) {
                                m = [c]
                            } else if (m.indexOf(c) < 0) {
                                m.push(c)
                            }
                            if (a.hasOwnProperty(c)) {
                                if (f) {
                                    n = f.indexOf(c)
                                } else {
                                    n = -1
                                }
                                a[c].MatchID = h.MatchID
                                a[c].LevelID = h.LevelID
                                a[c].CountDownSeconds = h.CountDownSeconds
                                h.TotalCoursePoints = a[c].TotalCoursePoints
                                h.TotalLivePoints = a[c].TotalLivePoints
                                h.TotalPoints = a[c].TotalPoints
                                h.YearGroup = a[c].YearGroup
                                h.LevelList = a[c].LevelList
                                if (n < 0) {
                                    a[c].UserStatusEnum = d.USER_STATUS.INITIATED_GAME
                                } else {
                                    f.splice(n, 1)
                                }
                            } else {
                                g = {}
                                g.UserStatusEnum = d.USER_STATUS.INITIATED_GAME
                                g.UserProfileID = k.UserProfileID
                                g.DisplayName = k.DisplayName
                                g.Avatar = k.Avatar
                                g.MatchID = h.MatchID
                                g.LevelID = h.LevelID
                                g.CountDownSeconds = h.CountDownSeconds
                                g.TotalCoursePoints = 0
                                g.TotalLivePoints = 0
                                g.TotalPoints = 0
                                g.YearGroup = 0
                                g.LevelList = []
                                a[c] = g
                                e.push(a[c])
                                if (!j) {
                                    j = [c]
                                } else if (j.indexOf(c) < 0) {
                                    j.push(c)
                                }
                            }
                        }
                    }
                }
                if (f) {
                    for (i = 0; i < f.length; i++) {
                        c = f[i]
                        if (a.hasOwnProperty(c) && a[c]) {
                            if (a[c].UserStatusEnum == d.USER_STATUS.INITIATED_GAME) {
                                if (a[c].hasOwnProperty("UserProfileTypeEnum")) {
                                    a[c].UserStatusEnum = d.USER_STATUS.READY
                                    a[c].MatchID = null
                                    a[c].LevelID = 0
                                    a[c].CountDownSeconds = 0
                                } else {
                                    a[c] = undefined
                                    delete a[c]
                                }
                            }
                        }
                    }
                }
                f = m
                if (j && j.length > 0) {
                    b.getSchoolUsersByProfile(j)
                }
                C(p)
                l()
            }
            function C(l) {
                var i = []
                for (var j = 0; j < l.length; j++) {
                    var f = l[j]
                    var e = {CountDownStart: 0, InvitationParty: []}
                    for (var k = 0; k < f.GamePlayers.length; k++) {
                        var g = f.GamePlayers[k]
                        var b = {}
                        b.UserStatusEnum = d.USER_STATUS.INITIATED_GAME
                        b.UserProfileID = g.UserProfileID
                        b.DisplayName = g.DisplayName
                        b.Avatar = g.Avatar
                        b.ThisIsMe = g.ThisIsMe
                        b.IsInviter = g.IsInviter
                        b.HasJoined = g.HasJoined
                        b.MatchID = f.MatchID
                        b.LevelID = f.LevelID
                        b.CountDownSeconds = f.CountDownSeconds
                        var h = g.UserProfileID
                        if (a.hasOwnProperty(h) && a[h]) {
                            b.TotalCoursePoints = a[h].TotalCoursePoints
                            b.TotalLivePoints = a[h].TotalLivePoints
                            b.TotalPoints = a[h].TotalPoints
                            b.LevelList = a[h].LevelList
                        }
                        if (b.IsInviter === true) {
                            e.UserStatusEnum = d.USER_STATUS.INITIATED_GAME
                            e.UserProfileID = g.UserProfileID
                            e.DisplayName = g.DisplayName
                            e.Avatar = g.Avatar
                            e.ThisIsMe = g.ThisIsMe
                            e.IsInviter = g.IsInviter
                            e.HasJoined = g.HasJoined
                            e.MatchID = f.MatchID
                            e.LevelID = f.LevelID
                            e.CountDownSeconds = f.CountDownSeconds
                            e.TotalCoursePoints = f.TotalCoursePoints
                            e.TotalLivePoints = f.TotalLivePoints
                            e.TotalPoints = f.TotalPoints
                            e.LevelList = f.LevelList
                        }
                        e.InvitationParty.push(b)
                        if (f.CountDownSeconds > 0) {
                            s.debug("UserNam: " + b.DisplayName + " CountDownSeconds: " + b.CountDownSeconds)
                        }
                    }
                    i.push(e)
                }
                if (i !== undefined && i !== null && c.currentInvitationList !== undefined && c.currentInvitationList !== null) {
                    angular.forEach(i, function (a, d) {
                        var b = D(c.currentInvitationList, a)
                        if (b !== -1) {
                            if (b.CountDownSeconds < a.CountDownSeconds || b.CountDownStart === 1) {
                                a.CountDownStart = 1
                            }
                            if (b.CountDownStart === 1) {
                                a.CountDownStart = 1
                            }
                        } else {
                            if (a.CountDownSeconds > 0) {
                                a.CountDownStart = 1
                            }
                        }
                    })
                }
                c.currentInvitationList = i
            }

            function D(a, e) {
                var c = -1
                if (a === undefined || a === null) {
                    return c
                }
                for (var b = 0, d = a.length; b < d; b++) {
                    if (e.UserProfileID === a[b].UserProfileID) {
                        c = a[b]
                        break
                    }
                }
                return c
            }

            function E() {
                B.get().then(function (a) {
                    if (!a || !a.hasOwnProperty("IsError") || a.IsError === true) {
                    } else {
                        if (a.hasOwnProperty("StudentList")) {
                            b.setMeData(a.ThisIsMe)
                            b.setOnlineUsers(a.StudentList)
                        }
                    }
                }, function (a) {
                })
            }

            function F(a) {
                if (a !== undefined && a !== null && a.hasOwnProperty("UserProfileID") && a.hasOwnProperty("DisplayName") && a.hasOwnProperty("Avatar")) {
                    c.meData = {
                        UserProfileID: a.UserProfileID,
                        DisplayName: a.DisplayName,
                        Avatar: a.Avatar,
                        UserProfileTypeEnum: a.UserProfileTypeEnum,
                        UserStatusEnum: d.USER_STATUS.READY,
                        MinRestrictedLevelLiveMathletics: a.MinRestrictedLevelLiveMathletics,
                        ThisIsMe: true,
                        IsInviter: false,
                        HasJoined: false,
                        TotalCoursePoints: 0,
                        TotalLivePoints: 0,
                        TotalPoints: 0,
                        YearGroup: 0,
                        LevelList: []
                    }
                }
            }

            function q(a) {
                if (a === null || a === undefined) {
                    return
                }
                c.meData.TotalCoursePoints = a.TotalCoursePoints === undefined ? c.meData.TotalCoursePoints : a.TotalCoursePoints
                c.meData.TotalLivePoints = a.TotalLivePoints === undefined ? c.meData.TotalLivePoints : a.TotalLivePoints
                c.meData.TotalPoints = a.TotalPoints === undefined ? c.meData.TotalPoints : a.TotalPoints
                c.meData.YearGroup = a.YearGroup === undefined ? c.meData.YearGroup : a.YearGroup
                c.meData.LevelList = a.LevelList === undefined ? c.meData.LevelList : a.LevelList
            }

            b.getSchoolUsersByProfile = function (a) {
                b.stopRefreshStatus()
                G.get(a).then(function (a) {
                    var c = true
                    if (!a || !a.hasOwnProperty("IsError") || a.IsError === true) {
                    } else {
                        if (a.hasOwnProperty("StudentList")) {
                            b.setOnlineUsers(a.StudentList)
                            c = false
                        }
                    }
                    if (c) {
                        b.refreshStatus()
                    }
                }, function (a) {
                    b.refreshStatus()
                })
            }
            b.setOnlineUsers = function (i) {
                if (i) {
                    var g, h, c, f
                    for (g = 0; g < i.length; g++) {
                        c = i[g]
                        c.TotalCoursePoints = c.TotalCoursePoints === undefined ? 0 : c.TotalCoursePoints
                        c.TotalLivePoints = c.TotalLivePoints === undefined ? 0 : c.TotalLivePoints
                        c.TotalPoints = c.TotalPoints === undefined ? 0 : c.TotalPoints
                        c.YearGroup = c.YearGroup === undefined ? 0 : c.YearGroup
                        c.LevelList = c.LevelList === undefined ? [] : c.LevelList
                        f = c.UserProfileID
                        if (e === undefined) {
                            e = []
                            a = {}
                        }
                        if (!a.hasOwnProperty(f)) {
                            a[f] = c
                            a[f].UserStatusEnum = d.USER_STATUS.OFFLINE
                            e.push(a[f])
                        } else if (!a[f].hasOwnProperty("UserProfileTypeEnum")) {
                            if (!a[f].hasOwnProperty("DisplayName")) {
                                e.push(a[f])
                            }
                            for (h in c) {
                                if (h !== "UserStatusEnum") {
                                    a[f][h] = c[h]
                                }
                            }
                        } else {
                            a[f].Avatar = c.Avatar
                            a[f].DisplayName = c.DisplayName
                            a[f].MinRestrictedLevelLiveMathletics = c.MinRestrictedLevelLiveMathletics
                            a[f].UserProfileTypeEnum = c.UserProfileTypeEnum
                        }
                    }
                }
                b.refreshStatus()
                l()
            }
            b.initGetUsers = function () {
                b.requirePollUsersAllStatus = true
                k = true
                if (e !== undefined) {
                    b.refreshStatus()
                } else {
                    b.getSchoolUsers()
                }
            }
            b.refreshStatus = function () {
                b.getUserStatus(k)
                b.getUsersPoints(c.productId, c.isSchoolChallenge)
                b.getUserInvitation()
                k = false
            }
            function l() {
                if (b.requirePollUsersAllStatus !== true) {
                    return
                }
                if (c.receiveMeData !== undefined && c.receiveMeData !== null) {
                    c.receiveMeData(c.meData)
                }
                if (c.receiveInvitationData !== undefined && c.receiveInvitationData !== null) {
                    c.receiveInvitationData(c.currentInvitationList)
                }
                if (c.receiveOnAndOffLineData !== undefined && c.receiveOnAndOffLineData !== null) {
                    c.receiveOnAndOffLineData(e)
                }
            }

            function J() {
            }

            b.stopRefreshStatus = function () {
                k = true
                i = g.cancelDelayCallBack(i)
                j = g.cancelDelayCallBack(j)
            }
            b.onlineUsers = function () {
                return e
            }
            b.resembleGhostPlayerInfo = I
            function I(b, i) {
                for (var c = 0, l = e.length; c < l; c++) {
                    var a = e[c]
                    if (b.UserProfileID == a.UserProfileID) {
                        var h = false
                        var m = b.HasJoined
                        if (a.UserStatusEnum === d.USER_STATUS.OFFLINE) {
                            h = true
                            m = true
                        }
                        b.IsGhost = h
                        var f = a.LevelList
                        var j = a.LevelList[i] === undefined ? {} : a.LevelList[i]
                        for (var g = 0, k = f.length; g < k; g++) {
                            if (f.LevelID === i) {
                                j = f[g]
                                break
                            }
                        }
                        b.PersonalBest = j.PersonalBestScore
                        break
                    } else {
                        b.IsGhost = false
                    }
                }
            }

            function z(h, f) {
                var a = {
                    TotalCoursePoints: 222,
                    TotalLivePoints: 111,
                    TotalPoints: 333,
                    YearGroup: 3,
                    LevelList: [{
                        LevelID: 1,
                        LivePoints: 133,
                        PersonalBestScore: 155,
                        Rank: "Raging Rookie"
                    }, {LevelID: 2, LivePoints: 233, PersonalBestScore: 255, Rank: "Almost Einstein"}, {
                        LevelID: 3,
                        LivePoints: 333,
                        PersonalBestScore: 355,
                        Rank: "Speed Demon"
                    }, {LevelID: 4, LivePoints: 433, PersonalBestScore: 455, Rank: "Raging Rookie"}, {
                        LevelID: 5,
                        LivePoints: 533,
                        PersonalBestScore: 555,
                        Rank: "Speed Demon"
                    }, {LevelID: 6, LivePoints: 633, PersonalBestScore: 655, Rank: "Almost Einstein"}, {
                        LevelID: 7,
                        LivePoints: 733,
                        PersonalBestScore: 755,
                        Rank: "Speed Demon"
                    }, {LevelID: 8, LivePoints: 833, PersonalBestScore: 855, Rank: "Junior Giant"}, {
                        LevelID: 9,
                        LivePoints: 933,
                        PersonalBestScore: 955,
                        Rank: "Junior Giant"
                    }, {LevelID: 10, LivePoints: 1033, PersonalBestScore: 1055, Rank: "Raging Rookie"}]
                }
                var b = {}
                b.UserProfileID = h.UserProfileID
                b.TotalCoursePoints = a.TotalCoursePoints
                b.TotalLivePoints = a.TotalLivePoints
                b.TotalPoints = a.TotalPoints + Math.floor(Math.random() * 100)
                b.YearGroup = a.YearGroup
                b.LevelList = a.LevelList
                var g = []
                for (var d in f) {
                    if (f.hasOwnProperty(d)) {
                        var c = f[d]
                        c.UserProfileID = d
                        c.TotalCoursePoints = a.TotalCoursePoints
                        c.TotalLivePoints = a.TotalLivePoints
                        c.TotalPoints = a.TotalPoints + Math.floor(Math.random() * 100)
                        c.YearGroup = a.YearGroup
                        c.LevelList = a.LevelList
                        g.push(c)
                    }
                }
                var e = {}
                e.ThisIsMe = b
                e.UserPointsList = g
                return e
            }

            return b
        }

        onlineUserFactory.$inject = ["$log", "delayFactory", "schoolUsers", "schoolUsersByProfile", "schoolUsersStatus", "pollInvitation", "schoolUsersPoints", "userStatusEnum"]
        module.exports = onlineUserFactory
    }, {}],
    199: [function (require, module, exports) {
        module.exports = '<div ng-class="{onlineItemBox:true, onlineItemBoxSelected:(isMeSelected || isMeMouseover),\n                onlineItemSeletable:((isInvited || !(isOffline || isInGame)) && !isMeBox)}"\n     ng-mousedown="clickMe()" ng-mouseover="mouseOverMe()" ng-mouseleave="mouseLeaveMe()"\n     ng-hide="(isInvitationBox && !isInvited)">\n  <div class="onlineItemTopBox">\n    <div class="onlineItemLeft">\n      <avatar base-url="{{faceAssetBasePath}}" face-setting="{{visualModelData.Avatar}}" scale=".2"/>\n    </div>\n    <div ng-class=\'{onlineItemRightBase:true,\n                    onlineItemRightNormal:(!isInvited && !isOffline),\n                    onlineItemRightOff:(!isInvited && isOffline),\n                    onlineItemRightInvitation:isInvited,\n                    onlineItemRightInGame:isInGame,\n                    onlineItemRightSelected:(!isInvited && isMeSelected && !isMeBox),\n                    onlineItemRightMe:isMeBox,\n                    onlineNormalSize:!displayDesc.hasLongWarning,\n                    onlineSmallSize:displayDesc.hasLongWarning}\'>{{displayDesc.status}}</div>\n  </div>\n  <div class="onlineItemBottomBox">\n    <p class="font-11" ng-class="{onlineItemBottomTextBase:true,\n                  onlineItemBottomTextFull:!isInvited, onlineItemBottomTextHalf:isInvited}">{{displayDesc.name}}</p>\n    <div ng-class="{onlineItemBottomProgressBarHolderHide:!isInvited, onlineItemBottomProgressBarHolder:isInvited}">\n      <timer-progressbar parent-param="sharedParam"></timer-progressbar>\n    </div>\n  </div>\n\n</div>\n'
    }, {}],
    200: [function (require, module, exports) {
        module.exports = '<div ng-class="{\'player-tab-box\':true, \'player-tab-selected\':((isMeSelected || isMeMouseover) && !isMeBox),\n                \'me-tab-spec\':isMeBox, \'player-tab-seletable\':((isInvited || !isInGame) && !isMeBox)}"\n     ng-mousedown="clickMe()" ng-mouseover="mouseOverMe()" ng-mouseleave="mouseLeaveMe()"\n     ng-hide="(isInvitationBox && !isInvited)">\n  <div class="player-tab-content">\n    <div ng-class="{\'player-tab-content-left\':true, \'player-tab-face-bg-img\':(visualModelData.Avatar===\'\')}">\n      <avatar base-url="{{faceAssetBasePath}}" face-setting="{{visualModelData.Avatar}}" scale=".2"/>\n    </div>\n    <div ng-class="{\'player-tab-content-right\':true,\n                    \'player-tab-content-normal-Size\':!displayDesc.hasLongWarning}">\n        <div ng-class="{\'player-tab-content-selected\':isMeSelected}"></div>\n        <span class="user-name">{{displayDesc.name}}</span>\n        <span class="user-rank">{{displayDesc.rank}}</span>\n        <span class="user-point">{{displayDesc.weekly}}</span>\n        <span class="user-status-{{displayDesc.statusIcon}}" egg-shaker="true"\n              ng-class="{\'animated infinite rubberBand\': highlightGhost}"\n              ng-hide="(isInvitationBox)"></span>\n        <div class="user-action-warning" ng-hide="!displayDesc.hasLongWarning">{{displayDesc.status}}</div>\n        <span class="user-status-invitation circle-blink" ng-show="(isInvitationBox)">\n            <time-progress-circle class="timer-dim" parent-param="sharedParam"></time-progress-circle>\n        </span>\n    </div>\n  </div>\n  <span class="hr"></span>\n</div>\n'
    }, {}],
    201: [function (require, module, exports) {
        module.exports = '<div class="shadow-bubble" id="shadow-bubble-xyz" ng-style="shadowBubbleStyle" ng-show="(toShow)">\n    <!--<div class="shadow-bubble-image"></div>-->\n    <!--<p class="shadow-bubble-text">...</p>-->  \n</div>\n\n\n\n\n\n\n\n\n'
    }, {}],
    202: [function (require, module, exports) {
        module.exports = "<div class='timer-progress-circle'>\n  <div class='progress-bar progress-bar-{{type}} progress-bar-custom circle-blink' role='progressbar' ng-style='progressStyle'><span class=\"sr-only\">{{timer}}%</span></div>\n  <div class=\"challenge-label\" style=\"margin-left: {{challengeLevel==='10'?2:5}}px\">{{challengeLevel}}</div>\n</div>\n\n\n\n\n\n\n\n\n\n"
    }, {}],
    203: [function (require, module, exports) {
        module.exports = "<div class='onlineItemBottomProgressBar'>\n  <div class='progress-bar progress-bar-{{type}}' role='progressbar' ng-style='progressStyle'><span class=\"sr-only\">{{timer}}%</span></div>\n</div>\n\n\n\n\n\n\n\n\n\n"
    }, {}],
    204: [function (require, module, exports) {
        module.exports = '<div class="user-list-container">\n  <!-- Me item -->\n  <img class="left-hof-board">\n\n  <player-tab face-base-path="{{faceBasePath}}" id="onlineItemContainer"\n                 ng-repeat="itemMe in (itemMeData===undefined || itemMeData===null)?[]:[itemMeData]"\n                 visual-model-data="itemMeData" student-status="This is Me"\n                 enable-model="enableModel" visual-identity="me">Me</player-tab>\n\n  <div class="onlineMainContainer" id="userListMainContainer">\n\n    <div class="onlineInvitationContainer scrolling-container" id="invitedList" ng-class="adjustHeight()">\n        <div class="invitedListContainer">\n      <!-- Invitation List -->\n            <online-sublist sub-topic="Invitation Parts" class="enable_touchmove"\n                             group-type="invitation" challenge-invitation="invitationAcception">\n                <player-tab ng-repeat="itemInv in itemInvitationList | orderBy:orderByInvitation:true" class="enable_touchmove"\n                             face-base-path="{{faceBasePath}}"\n                             enable-model="enableModel" visual-model-data="itemInv"\n                             student-status="Invited" show-waiting-room="showWaitingRoom"\n                             visual-identity="invitation">Invitation</player-tab>\n            </online-sublist>\n        </div>\n    </div>\n\n    <div class="onlineOfflineContainer scrolling-container" id="onlineOfflineList" ng-class="adjustHeight()">\n      <!-- Online and Offline List: online-ready, online-unavailable, offline -->\n        <online-sublist sub-topic="Others On and Off" class="enable_touchmove"\n                        group-type="online" challenge-invitation="challengeCollection" cancel-challenges="cancelChallenges">\n          <player-tab ng-repeat="item in itemOnAndOffLineList | orderBy:orderByOnAndOffline:true" class="enable_touchmove"\n                       face-base-path="{{faceBasePath}}" perform-ghost="performGhost"\n                       enable-model="enableModel" visual-model-data="item">Rest</player-tab>\n            <!--data-tag-name=\'{{(item === null || item === undefined)?"":item.DisplayName}}\'-->\n        </online-sublist>\n      </div>\n    </div>\n</div>\n'
    }, {}],
    205: [function (require, module, exports) {
        "use strict"
        function PollInvitation(c, a, b) {
            this.get = function () {
                var d = a.defer()
                var h = "PollInvitation"
                var e = b.getConfigValue("userToken")
                if (e === "" || e === null) {
                    return a.reject("token is empty")
                }
                var f = b.getConfigValue("liveMathleticsInventoryMatchService")
                if (f === "" || f === null) {
                    return a.reject("liveMathleticsInventoryMatchService is empty")
                }
                var g = {}
                g.UserAuthToken = e
                var i = c.post(f + "/" + h, {request: g})
                i.success(function (a, b, c, e) {
                    d.resolve(a.d)
                }).error(function (b, a, c, e) {
                    d.reject(a)
                })
                return d.promise
            }
        }

        PollInvitation.$inject = ["$http", "$q", "configDataFactory"]
        module.exports = PollInvitation
    }, {}],
    206: [function (require, module, exports) {
        "use strict"
        function SchoolUsers(c, a, b) {
            this.get = function (j) {
                var d = a.defer()
                var h = "GetSchoolUsers"
                var f = b.getConfigValue("userToken")
                if (f === "" || f === null) {
                    return a.reject("token is empty")
                }
                var g = b.getConfigValue("onlineUserStudentService")
                if (g === "" || g === null) {
                    return a.reject("onlineUserStudentService is empty")
                }
                var e = {}
                e.UserAuthToken = f
                e.ProductID = 1
                e.ClassroomIDs = j
                var i = c.post(g + "/" + h, {request: e})
                i.success(function (a, b, c, e) {
                    if (a && a.hasOwnProperty("d") && a.d) {
                        d.resolve(a.d)
                    } else {
                        d.reject(null)
                    }
                }).error(function (b, a, c, e) {
                    d.reject(a)
                })
                return d.promise
            }
        }

        SchoolUsers.$inject = ["$http", "$q", "configDataFactory"]
        module.exports = SchoolUsers
    }, {}],
    207: [function (require, module, exports) {
        "use strict"
        function schoolUsersByProfile(c, a, b) {
            this.get = function (j) {
                var e = a.defer()
                var h = "GetSchoolUsersByProfile"
                var f = b.getConfigValue("userToken")
                if (f === "" || f === null) {
                    return a.reject("token is empty")
                }
                var g = b.getConfigValue("onlineUserStudentService")
                if (g === "" || g === null) {
                    return a.reject("onlineUserStudentService is empty")
                }
                var d = {}
                d.UserAuthToken = f
                d.UserProfileList = j
                if (!d.UserProfileList || d.UserProfileList.length === 0) {
                    e.reject("user profile list is empty")
                }
                var i = c.post(g + "/" + h, {request: d})
                i.success(function (a, b, c, d) {
                    e.resolve(a.d)
                }).error(function (b, a, c, d) {
                    e.reject(a)
                })
                return e.promise
            }
        }

        schoolUsersByProfile.$inject = ["$http", "$q", "configDataFactory"]
        module.exports = schoolUsersByProfile
    }, {}],
    208: [function (require, module, exports) {
        "use strict"
        function schoolUsersPoints(d, a, c) {
            var b = false
            this.get = function (i, j) {
                if (b) {
                    return a.when({usingMockData: b, IsError: false})
                }
                var f = a.defer()
                var k = "GetSchoolUsersPoints"
                var g = c.getConfigValue("userToken")
                if (g === "" || g === null) {
                    return a.reject("token is empty")
                }
                var h = c.getConfigValue("onlineUserStatsService")
                if (h === "" || h === null) {
                    return a.reject("onlineUserStatsService is empty")
                }
                var l = typeof j !== "boolean" ? false : j
                var e = {}
                e.UserAuthToken = g
                e.ProductID = i === undefined ? 1 : i
                e.IsSchoolChallenge = l
                var m = d.post(h + "/" + k, {request: e})
                m.success(function (a, b, c, d) {
                    f.resolve(a.d)
                }).error(function (b, a, c, d) {
                    f.reject(a)
                })
                return f.promise
            }
        }

        schoolUsersPoints.$inject = ["$http", "$q", "configDataFactory"]
        module.exports = schoolUsersPoints
    }, {}],
    209: [function (require, module, exports) {
        "use strict"
        function schoolUsersStatus(c, a, b) {
            this.get = function (h, l) {
                var e = a.defer()
                var i = "GetSchoolUsersStatus"
                var f = b.getConfigValue("userToken")
                if (f === "" || f === null) {
                    return a.reject("token is empty")
                }
                var g = b.getConfigValue("onlineUserStatsService")
                if (g === "" || g === null) {
                    return a.reject("onlineUserStatsService is empty")
                }
                var j = typeof h !== "boolean" ? false : h
                var d = {}
                d.UserAuthToken = f
                d.ProductID = 1
                d.IncludeOfflineUsers = j
                d.ClassroomIDs = l
                var k = c.post(g + "/" + i, {request: d})
                k.success(function (a, b, c, d) {
                    e.resolve(a.d)
                }).error(function (b, a, c, d) {
                    e.reject(a)
                })
                return e.promise
            }
        }

        schoolUsersStatus.$inject = ["$http", "$q", "configDataFactory"]
        module.exports = schoolUsersStatus
    }, {}],
    210: [function (require, module, exports) {
        "use strict"
        angular.module("livemathletics.whosonline", ["livemathletics.common"]).directive("playerTab", require("192")).directive("onlineItem", require("189")).directive("onlineSublist", require("190")).directive("onlineList", require("191")).directive("timeProgressCircle", require("194")).directive("timerProgressbar", require("195")).directive("userListBox", require("196")).directive("shadowBubble", require("193")).factory("userStatusEnum", require("197")).factory("onlineUserFactory", require("198")).service("schoolUsers", require("206")).service("schoolUsersByProfile", require("207")).service("schoolUsersStatus", require("209")).service("pollInvitation", require("205")).service("schoolUsersPoints", require("208"))
    }, {
        189: 189,
        190: 190,
        191: 191,
        192: 192,
        193: 193,
        194: 194,
        195: 195,
        196: 196,
        197: 197,
        198: 198,
        205: 205,
        206: 206,
        207: 207,
        208: 208,
        209: 209
    }]
}, {}, [1])
angular.element(window.document).ready(doAngularBootstrap)
function doAngularBootstrap() {
    setTimeout(function () {
        angular.bootstrap(window.document.getElementById("livemathletics"), ["livemathletics"])
    }, 0)
};