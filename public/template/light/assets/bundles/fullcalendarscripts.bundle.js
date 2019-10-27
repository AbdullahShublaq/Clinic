!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function () {
    "use strict";

    function m() {
        return Kt.apply(null, arguments)
    }

    function a(t) {
        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }

    function l(t) {
        return null != t && "[object Object]" === Object.prototype.toString.call(t)
    }

    function h(t) {
        return void 0 === t
    }

    function u(t) {
        return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
    }

    function c(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function d(t, e) {
        var i, n = [];
        for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
        return n
    }

    function v(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function p(t, e) {
        for (var i in e) v(e, i) && (t[i] = e[i]);
        return v(e, "toString") && (t.toString = e.toString), v(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function f(t, e, i, n) {
        return gt(t, e, i, n, !0).utc()
    }

    function y(t) {
        return null == t._pf && (t._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), t._pf
    }

    function g(t) {
        if (null == t._isValid) {
            var e = y(t), i = $t.call(e.parsedDateParts, function (t) {
                    return null != t
                }),
                n = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
            if (t._strict && (n = n && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return n;
            t._isValid = n
        }
        return t._isValid
    }

    function _(t) {
        var e = f(NaN);
        return null != t ? p(y(e), t) : y(e).userInvalidated = !0, e
    }

    function b(t, e) {
        var i, n, s;
        if (h(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), h(e._i) || (t._i = e._i), h(e._f) || (t._f = e._f), h(e._l) || (t._l = e._l), h(e._strict) || (t._strict = e._strict), h(e._tzm) || (t._tzm = e._tzm), h(e._isUTC) || (t._isUTC = e._isUTC), h(e._offset) || (t._offset = e._offset), h(e._pf) || (t._pf = y(e)), h(e._locale) || (t._locale = e._locale), 0 < Xt.length) for (i = 0; i < Xt.length; i++) h(s = e[n = Xt[i]]) || (t[n] = s);
        return t
    }

    function w(t) {
        b(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Qt && (Qt = !0, m.updateOffset(this), Qt = !1)
    }

    function D(t) {
        return t instanceof w || null != t && null != t._isAMomentObject
    }

    function C(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
    }

    function S(t) {
        var e = +t, i = 0;
        return 0 !== e && isFinite(e) && (i = C(e)), i
    }

    function r(t, e, i) {
        var n, s = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), r = 0;
        for (n = 0; n < s; n++) (i && t[n] !== e[n] || !i && S(t[n]) !== S(e[n])) && r++;
        return r + o
    }

    function x(t) {
        !1 === m.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
    }

    function t(s, o) {
        var r = !0;
        return p(function () {
            if (null != m.deprecationHandler && m.deprecationHandler(null, s), r) {
                for (var t, e = [], i = 0; i < arguments.length; i++) {
                    if (t = "", "object" == typeof arguments[i]) {
                        for (var n in t += "\n[" + i + "] ", arguments[0]) t += n + ": " + arguments[0][n] + ", ";
                        t = t.slice(0, -2)
                    } else t = arguments[i];
                    e.push(t)
                }
                x(s + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + (new Error).stack), r = !1
            }
            return o.apply(this, arguments)
        }, o)
    }

    function o(t, e) {
        null != m.deprecationHandler && m.deprecationHandler(t, e), Jt[t] || (x(e), Jt[t] = !0)
    }

    function k(t) {
        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }

    function M(t, e) {
        var i, n = p({}, t);
        for (i in e) v(e, i) && (l(t[i]) && l(e[i]) ? (n[i] = {}, p(n[i], t[i]), p(n[i], e[i])) : null != e[i] ? n[i] = e[i] : delete n[i]);
        for (i in t) v(t, i) && !v(e, i) && l(t[i]) && (n[i] = p({}, n[i]));
        return n
    }

    function T(t) {
        null != t && this.set(t)
    }

    function e(t, e) {
        var i = t.toLowerCase();
        te[i] = te[i + "s"] = te[e] = t
    }

    function E(t) {
        return "string" == typeof t ? te[t] || te[t.toLowerCase()] : void 0
    }

    function I(t) {
        var e, i, n = {};
        for (i in t) v(t, i) && (e = E(i)) && (n[e] = t[i]);
        return n
    }

    function i(t, e) {
        ee[t] = e
    }

    function P(t, e, i) {
        var n = "" + Math.abs(t), s = e - n.length;
        return (0 <= t ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n
    }

    function n(t, e, i, n) {
        var s = n;
        "string" == typeof n && (s = function () {
            return this[n]()
        }), t && (oe[t] = s), e && (oe[e[0]] = function () {
            return P(s.apply(this, arguments), e[1], e[2])
        }), i && (oe[i] = function () {
            return this.localeData().ordinal(s.apply(this, arguments), t)
        })
    }

    function s(t, e) {
        return t.isValid() ? (e = R(e, t.localeData()), se[e] = se[e] || function (n) {
            var t, s, e, o = n.match(ie);
            for (t = 0, s = o.length; t < s; t++) oe[o[t]] ? o[t] = oe[o[t]] : o[t] = (e = o[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
            return function (t) {
                var e, i = "";
                for (e = 0; e < s; e++) i += k(o[e]) ? o[e].call(t, n) : o[e];
                return i
            }
        }(e), se[e](t)) : t.localeData().invalidDate()
    }

    function R(t, e) {
        var i = 5;
        for (ne.lastIndex = 0; 0 <= i && ne.test(t);) t = t.replace(ne, function (t) {
            return e.longDateFormat(t) || t
        }), ne.lastIndex = 0, i -= 1;
        return t
    }

    function H(t, i, n) {
        De[t] = k(i) ? i : function (t, e) {
            return t && n ? n : i
        }
    }

    function O(t, e) {
        return v(De, t) ? De[t](e._strict, e._locale) : new RegExp(z(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, i, n, s) {
            return e || i || n || s
        })))
    }

    function z(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function F(t, i) {
        var e, n = i;
        for ("string" == typeof t && (t = [t]), u(i) && (n = function (t, e) {
            e[i] = S(t)
        }), e = 0; e < t.length; e++) Ce[t[e]] = n
    }

    function A(t, s) {
        F(t, function (t, e, i, n) {
            i._w = i._w || {}, s(t, i._w, i, n)
        })
    }

    function N(t) {
        return W(t) ? 366 : 365
    }

    function W(t) {
        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
    }

    function L(e, i) {
        return function (t) {
            return null != t ? (B(this, e, t), m.updateOffset(this, i), this) : Y(this, e)
        }
    }

    function Y(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function B(t, e, i) {
        t.isValid() && !isNaN(i) && ("FullYear" === e && W(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), j(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i))
    }

    function j(t, e) {
        if (isNaN(t) || isNaN(e)) return NaN;
        var i, n = (e % (i = 12) + i) % i;
        return t += (e - n) / 12, 1 === n ? W(t) ? 29 : 28 : 31 - n % 7 % 2
    }

    function V(t, e) {
        var i;
        if (!t.isValid()) return t;
        if ("string" == typeof e) if (/^\d+$/.test(e)) e = S(e); else if (!u(e = t.localeData().monthsParse(e))) return t;
        return i = Math.min(t.date(), j(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
    }

    function U(t) {
        return null != t ? (V(this, t), m.updateOffset(this, !0), this) : Y(this, "Month")
    }

    function G() {
        function t(t, e) {
            return e.length - t.length
        }

        var e, i, n = [], s = [], o = [];
        for (e = 0; e < 12; e++) i = f([2e3, e]), n.push(this.monthsShort(i, "")), s.push(this.months(i, "")), o.push(this.months(i, "")), o.push(this.monthsShort(i, ""));
        for (n.sort(t), s.sort(t), o.sort(t), e = 0; e < 12; e++) n[e] = z(n[e]), s[e] = z(s[e]);
        for (e = 0; e < 24; e++) o[e] = z(o[e]);
        this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
    }

    function q(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return t < 100 && 0 <= t && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
    }

    function K(t, e, i) {
        var n = 7 + e - i;
        return -(7 + q(t, 0, n).getUTCDay() - e) % 7 + n - 1
    }

    function $(t, e, i, n, s) {
        var o, r, a = 1 + 7 * (e - 1) + (7 + i - n) % 7 + K(t, n, s);
        return r = a <= 0 ? N(o = t - 1) + a : a > N(t) ? (o = t + 1, a - N(t)) : (o = t, a), {year: o, dayOfYear: r}
    }

    function Z(t, e, i) {
        var n, s, o = K(t.year(), e, i), r = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
        return r < 1 ? n = r + X(s = t.year() - 1, e, i) : r > X(t.year(), e, i) ? (n = r - X(t.year(), e, i), s = t.year() + 1) : (s = t.year(), n = r), {
            week: n,
            year: s
        }
    }

    function X(t, e, i) {
        var n = K(t, e, i), s = K(t + 1, e, i);
        return (N(t) - n + s) / 7
    }

    function Q() {
        function t(t, e) {
            return e.length - t.length
        }

        var e, i, n, s, o, r = [], a = [], l = [], h = [];
        for (e = 0; e < 7; e++) i = f([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), s = this.weekdaysShort(i, ""), o = this.weekdays(i, ""), r.push(n), a.push(s), l.push(o), h.push(n), h.push(s), h.push(o);
        for (r.sort(t), a.sort(t), l.sort(t), h.sort(t), e = 0; e < 7; e++) a[e] = z(a[e]), l[e] = z(l[e]), h[e] = z(h[e]);
        this._weekdaysRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }

    function J() {
        return this.hours() % 12 || 12
    }

    function tt(t, e) {
        n(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }

    function et(t, e) {
        return e._meridiemParse
    }

    function it(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function nt(t) {
        var e = null;
        if (!$e[t] && "undefined" != typeof module && module && module.exports) try {
            e = Ge._abbr, require("./locale/" + t), st(e)
        } catch (t) {
        }
        return $e[t]
    }

    function st(t, e) {
        var i;
        return t && (i = h(e) ? rt(t) : ot(t, e)) && (Ge = i), Ge._abbr
    }

    function ot(t, e) {
        if (null === e) return delete $e[t], null;
        var i = Ke;
        if (e.abbr = t, null != $e[t]) o("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = $e[t]._config; else if (null != e.parentLocale) {
            if (null == $e[e.parentLocale]) return Ze[e.parentLocale] || (Ze[e.parentLocale] = []), Ze[e.parentLocale].push({
                name: t,
                config: e
            }), null;
            i = $e[e.parentLocale]._config
        }
        return $e[t] = new T(M(i, e)), Ze[t] && Ze[t].forEach(function (t) {
            ot(t.name, t.config)
        }), st(t), $e[t]
    }

    function rt(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Ge;
        if (!a(t)) {
            if (e = nt(t)) return e;
            t = [t]
        }
        return function (t) {
            for (var e, i, n, s, o = 0; o < t.length;) {
                for (e = (s = it(t[o]).split("-")).length, i = (i = it(t[o + 1])) ? i.split("-") : null; 0 < e;) {
                    if (n = nt(s.slice(0, e).join("-"))) return n;
                    if (i && i.length >= e && r(s, i, !0) >= e - 1) break;
                    e--
                }
                o++
            }
            return null
        }(t)
    }

    function at(t) {
        var e, i = t._a;
        return i && -2 === y(t).overflow && (e = i[xe] < 0 || 11 < i[xe] ? xe : i[ke] < 1 || i[ke] > j(i[Se], i[xe]) ? ke : i[Me] < 0 || 24 < i[Me] || 24 === i[Me] && (0 !== i[Te] || 0 !== i[Ee] || 0 !== i[Ie]) ? Me : i[Te] < 0 || 59 < i[Te] ? Te : i[Ee] < 0 || 59 < i[Ee] ? Ee : i[Ie] < 0 || 999 < i[Ie] ? Ie : -1, y(t)._overflowDayOfYear && (e < Se || ke < e) && (e = ke), y(t)._overflowWeeks && -1 === e && (e = Pe), y(t)._overflowWeekday && -1 === e && (e = Re), y(t).overflow = e), t
    }

    function lt(t, e, i) {
        return null != t ? t : null != e ? e : i
    }

    function ht(t) {
        var e, i, n, s, o, r, a = [];
        if (!t._d) {
            for (o = t, r = void 0, r = new Date(m.now()), n = o._useUTC ? [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()] : [r.getFullYear(), r.getMonth(), r.getDate()], t._w && null == t._a[ke] && null == t._a[xe] && function (t) {
                var e, i, n, s, o, r, a, l;
                if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, r = 4, i = lt(e.GG, t._a[Se], Z(mt(), 1, 4).year), n = lt(e.W, 1), ((s = lt(e.E, 1)) < 1 || 7 < s) && (l = !0); else {
                    o = t._locale._week.dow, r = t._locale._week.doy;
                    var h = Z(mt(), o, r);
                    i = lt(e.gg, t._a[Se], h.year), n = lt(e.w, h.week), null != e.d ? ((s = e.d) < 0 || 6 < s) && (l = !0) : null != e.e ? (s = e.e + o, (e.e < 0 || 6 < e.e) && (l = !0)) : s = o
                }
                n < 1 || n > X(i, o, r) ? y(t)._overflowWeeks = !0 : null != l ? y(t)._overflowWeekday = !0 : (a = $(i, n, s, o, r), t._a[Se] = a.year, t._dayOfYear = a.dayOfYear)
            }(t), null != t._dayOfYear && (s = lt(t._a[Se], n[Se]), (t._dayOfYear > N(s) || 0 === t._dayOfYear) && (y(t)._overflowDayOfYear = !0), i = q(s, 0, t._dayOfYear), t._a[xe] = i.getUTCMonth(), t._a[ke] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = n[e];
            for (; e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[Me] && 0 === t._a[Te] && 0 === t._a[Ee] && 0 === t._a[Ie] && (t._nextDay = !0, t._a[Me] = 0), t._d = (t._useUTC ? q : function (t, e, i, n, s, o, r) {
                var a = new Date(t, e, i, n, s, o, r);
                return t < 100 && 0 <= t && isFinite(a.getFullYear()) && a.setFullYear(t), a
            }).apply(null, a), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[Me] = 24), t._w && void 0 !== t._w.d && t._w.d !== t._d.getDay() && (y(t).weekdayMismatch = !0)
        }
    }

    function ut(t) {
        var e, i, n, s, o, r, a = t._i, l = Xe.exec(a) || Qe.exec(a);
        if (l) {
            for (y(t).iso = !0, e = 0, i = ti.length; e < i; e++) if (ti[e][1].exec(l[1])) {
                s = ti[e][0], n = !1 !== ti[e][2];
                break
            }
            if (null == s) return void (t._isValid = !1);
            if (l[3]) {
                for (e = 0, i = ei.length; e < i; e++) if (ei[e][1].exec(l[3])) {
                    o = (l[2] || " ") + ei[e][0];
                    break
                }
                if (null == o) return void (t._isValid = !1)
            }
            if (!n && null != o) return void (t._isValid = !1);
            if (l[4]) {
                if (!Je.exec(l[4])) return void (t._isValid = !1);
                r = "Z"
            }
            t._f = s + (o || "") + (r || ""), pt(t)
        } else t._isValid = !1
    }

    function ct(t, e, i, n, s, o) {
        var r, a,
            l = [(r = t, a = parseInt(r, 10), a <= 49 ? 2e3 + a : a <= 999 ? 1900 + a : a), Ae.indexOf(e), parseInt(i, 10), parseInt(n, 10), parseInt(s, 10)];
        return o && l.push(parseInt(o, 10)), l
    }

    function dt(t) {
        var e, i, n, s = ni.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());
        if (s) {
            var o = ct(s[4], s[3], s[2], s[5], s[6], s[7]);
            if (e = s[1], i = o, n = t, e && Ye.indexOf(e) !== new Date(i[0], i[1], i[2]).getDay() && (y(n).weekdayMismatch = !0, !(n._isValid = !1))) return;
            t._a = o, t._tzm = function (t, e, i) {
                if (t) return si[t];
                if (e) return 0;
                var n = parseInt(i, 10), s = n % 100;
                return (n - s) / 100 * 60 + s
            }(s[8], s[9], s[10]), t._d = q.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), y(t).rfc2822 = !0
        } else t._isValid = !1
    }

    function pt(t) {
        if (t._f !== m.ISO_8601) if (t._f !== m.RFC_2822) {
            t._a = [], y(t).empty = !0;
            var e, i, n, s, o, r = "" + t._i, a = r.length, l = 0;
            for (n = R(t._f, t._locale).match(ie) || [], e = 0; e < n.length; e++) s = n[e], (i = (r.match(O(s, t)) || [])[0]) && (0 < (o = r.substr(0, r.indexOf(i))).length && y(t).unusedInput.push(o), r = r.slice(r.indexOf(i) + i.length), l += i.length), oe[s] ? (i ? y(t).empty = !1 : y(t).unusedTokens.push(s), p = s, g = t, null != (f = i) && v(Ce, p) && Ce[p](f, g._a, g, p)) : t._strict && !i && y(t).unusedTokens.push(s);
            y(t).charsLeftOver = a - l, 0 < r.length && y(t).unusedInput.push(r), t._a[Me] <= 12 && !0 === y(t).bigHour && 0 < t._a[Me] && (y(t).bigHour = void 0), y(t).parsedDateParts = t._a.slice(0), y(t).meridiem = t._meridiem, t._a[Me] = (h = t._locale, u = t._a[Me], null == (c = t._meridiem) ? u : null != h.meridiemHour ? h.meridiemHour(u, c) : (null != h.isPM && ((d = h.isPM(c)) && u < 12 && (u += 12), d || 12 !== u || (u = 0)), u)), ht(t), at(t)
        } else dt(t); else ut(t);
        var h, u, c, d, p, f, g
    }

    function ft(t) {
        var e, i, n, s, o = t._i, r = t._f;
        return t._locale = t._locale || rt(t._l), null === o || void 0 === r && "" === o ? _({nullInput: !0}) : ("string" == typeof o && (t._i = o = t._locale.preparse(o)), D(o) ? new w(at(o)) : (c(o) ? t._d = o : a(r) ? function (t) {
            var e, i, n, s, o;
            if (0 === t._f.length) return y(t).invalidFormat = !0, t._d = new Date(NaN);
            for (s = 0; s < t._f.length; s++) o = 0, e = b({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], pt(e), g(e) && (o += y(e).charsLeftOver, o += 10 * y(e).unusedTokens.length, y(e).score = o, (null == n || o < n) && (n = o, i = e));
            p(t, i || e)
        }(t) : r ? pt(t) : h(i = (e = t)._i) ? e._d = new Date(m.now()) : c(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? (n = e, null === (s = ii.exec(n._i)) ? (ut(n), !1 === n._isValid && (delete n._isValid, dt(n), !1 === n._isValid && (delete n._isValid, m.createFromInputFallback(n)))) : n._d = new Date(+s[1])) : a(i) ? (e._a = d(i.slice(0), function (t) {
            return parseInt(t, 10)
        }), ht(e)) : l(i) ? function (t) {
            if (!t._d) {
                var e = I(t._i);
                t._a = d([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                    return t && parseInt(t, 10)
                }), ht(t)
            }
        }(e) : u(i) ? e._d = new Date(i) : m.createFromInputFallback(e), g(t) || (t._d = null), t))
    }

    function gt(t, e, i, n, s) {
        var o, r = {};
        return !0 !== i && !1 !== i || (n = i, i = void 0), (l(t) && function (t) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
            var e;
            for (e in t) if (t.hasOwnProperty(e)) return !1;
            return !0
        }(t) || a(t) && 0 === t.length) && (t = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = s, r._l = i, r._i = t, r._f = e, r._strict = n, (o = new w(at(ft(r))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
    }

    function mt(t, e, i, n) {
        return gt(t, e, i, n, !1)
    }

    function vt(t, e) {
        var i, n;
        if (1 === e.length && a(e[0]) && (e = e[0]), !e.length) return mt();
        for (i = e[0], n = 1; n < e.length; ++n) e[n].isValid() && !e[n][t](i) || (i = e[n]);
        return i
    }

    function yt(t) {
        var e = I(t), i = e.year || 0, n = e.quarter || 0, s = e.month || 0, o = e.week || 0, r = e.day || 0,
            a = e.hour || 0, l = e.minute || 0, h = e.second || 0, u = e.millisecond || 0;
        this._isValid = function (t) {
            for (var e in t) if (-1 === He.call(ai, e) || null != t[e] && isNaN(t[e])) return !1;
            for (var i = !1, n = 0; n < ai.length; ++n) if (t[ai[n]]) {
                if (i) return !1;
                parseFloat(t[ai[n]]) !== S(t[ai[n]]) && (i = !0)
            }
            return !0
        }(e), this._milliseconds = +u + 1e3 * h + 6e4 * l + 1e3 * a * 60 * 60, this._days = +r + 7 * o, this._months = +s + 3 * n + 12 * i, this._data = {}, this._locale = rt(), this._bubble()
    }

    function _t(t) {
        return t instanceof yt
    }

    function bt(t) {
        return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
    }

    function wt(t, i) {
        n(t, 0, 0, function () {
            var t = this.utcOffset(), e = "+";
            return t < 0 && (t = -t, e = "-"), e + P(~~(t / 60), 2) + i + P(~~t % 60, 2)
        })
    }

    function Dt(t, e) {
        var i = (e || "").match(t);
        if (null === i) return null;
        var n = ((i[i.length - 1] || []) + "").match(li) || ["-", 0, 0], s = 60 * n[1] + S(n[2]);
        return 0 === s ? 0 : "+" === n[0] ? s : -s
    }

    function Ct(t, e) {
        var i, n;
        return e._isUTC ? (i = e.clone(), n = (D(t) || c(t) ? t.valueOf() : mt(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + n), m.updateOffset(i, !1), i) : mt(t).local()
    }

    function St(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }

    function xt() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }

    function kt(t, e) {
        var i, n, s, o, r, a, l = t, h = null;
        return _t(t) ? l = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : u(t) ? (l = {}, e ? l[e] = t : l.milliseconds = t) : (h = hi.exec(t)) ? (i = "-" === h[1] ? -1 : 1, l = {
            y: 0,
            d: S(h[ke]) * i,
            h: S(h[Me]) * i,
            m: S(h[Te]) * i,
            s: S(h[Ee]) * i,
            ms: S(bt(1e3 * h[Ie])) * i
        }) : (h = ui.exec(t)) ? (i = "-" === h[1] ? -1 : (h[1], 1), l = {
            y: Mt(h[2], i),
            M: Mt(h[3], i),
            w: Mt(h[4], i),
            d: Mt(h[5], i),
            h: Mt(h[6], i),
            m: Mt(h[7], i),
            s: Mt(h[8], i)
        }) : null == l ? l = {} : "object" == typeof l && ("from" in l || "to" in l) && (o = mt(l.from), r = mt(l.to), s = o.isValid() && r.isValid() ? (r = Ct(r, o), o.isBefore(r) ? a = Tt(o, r) : ((a = Tt(r, o)).milliseconds = -a.milliseconds, a.months = -a.months), a) : {
            milliseconds: 0,
            months: 0
        }, (l = {}).ms = s.milliseconds, l.M = s.months), n = new yt(l), _t(t) && v(t, "_locale") && (n._locale = t._locale), n
    }

    function Mt(t, e) {
        var i = t && parseFloat(t.replace(",", "."));
        return (isNaN(i) ? 0 : i) * e
    }

    function Tt(t, e) {
        var i = {milliseconds: 0, months: 0};
        return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
    }

    function Et(n, s) {
        return function (t, e) {
            var i;
            return null === e || isNaN(+e) || (o(s, "moment()." + s + "(period, number) is deprecated. Please use moment()." + s + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = t, t = e, e = i), It(this, kt(t = "string" == typeof t ? +t : t, e), n), this
        }
    }

    function It(t, e, i, n) {
        var s = e._milliseconds, o = bt(e._days), r = bt(e._months);
        t.isValid() && (n = null == n || n, r && V(t, Y(t, "Month") + r * i), o && B(t, "Date", Y(t, "Date") + o * i), s && t._d.setTime(t._d.valueOf() + s * i), n && m.updateOffset(t, o || r))
    }

    function Pt(t, e) {
        var i = 12 * (e.year() - t.year()) + (e.month() - t.month()), n = t.clone().add(i, "months");
        return -(i + (e - n < 0 ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(i + 1, "months") - n))) || 0
    }

    function Rt(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (null != (e = rt(t)) && (this._locale = e), this)
    }

    function Ht() {
        return this._locale
    }

    function Ot(t, e) {
        n(0, [t, t.length], 0, e)
    }

    function zt(t, e, i, n, s) {
        var o;
        return null == t ? Z(this, n, s).year : ((o = X(t, n, s)) < e && (e = o), function (t, e, i, n, s) {
            var o = $(t, e, i, n, s), r = q(o.year, 0, o.dayOfYear);
            return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
        }.call(this, t, e, i, n, s))
    }

    function Ft(t) {
        return t
    }

    function At(t, e, i, n) {
        var s = rt(), o = f().set(n, e);
        return s[i](o, t)
    }

    function Nt(t, e, i) {
        if (u(t) && (e = t, t = void 0), t = t || "", null != e) return At(t, e, i, "month");
        var n, s = [];
        for (n = 0; n < 12; n++) s[n] = At(t, n, i, "month");
        return s
    }

    function Wt(t, e, i, n) {
        e = ("boolean" == typeof t || (i = e = t, t = !1), u(e) && (i = e, e = void 0), e || "");
        var s = rt(), o = t ? s._week.dow : 0;
        if (null != i) return At(e, (i + o) % 7, n, "day");
        var r, a = [];
        for (r = 0; r < 7; r++) a[r] = At(e, (r + o) % 7, n, "day");
        return a
    }

    function Lt(t, e, i, n) {
        var s = kt(e, i);
        return t._milliseconds += n * s._milliseconds, t._days += n * s._days, t._months += n * s._months, t._bubble()
    }

    function Yt(t) {
        return t < 0 ? Math.floor(t) : Math.ceil(t)
    }

    function Bt(t) {
        return 4800 * t / 146097
    }

    function jt(t) {
        return 146097 * t / 4800
    }

    function Vt(t) {
        return function () {
            return this.as(t)
        }
    }

    function Ut(t) {
        return function () {
            return this.isValid() ? this._data[t] : NaN
        }
    }

    function Gt(t) {
        return (0 < t) - (t < 0) || +t
    }

    function qt() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t, e, i = Wi(this._milliseconds) / 1e3, n = Wi(this._days), s = Wi(this._months);
        e = C((t = C(i / 60)) / 60), i %= 60, t %= 60;
        var o = C(s / 12), r = s %= 12, a = n, l = e, h = t, u = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
            c = this.asSeconds();
        if (!c) return "P0D";
        var d = c < 0 ? "-" : "", p = Gt(this._months) !== Gt(c) ? "-" : "", f = Gt(this._days) !== Gt(c) ? "-" : "",
            g = Gt(this._milliseconds) !== Gt(c) ? "-" : "";
        return d + "P" + (o ? p + o + "Y" : "") + (r ? p + r + "M" : "") + (a ? f + a + "D" : "") + (l || h || u ? "T" : "") + (l ? g + l + "H" : "") + (h ? g + h + "M" : "") + (u ? g + u + "S" : "")
    }

    var Kt, $t;
    $t = Array.prototype.some ? Array.prototype.some : function (t) {
        for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++) if (n in e && t.call(this, e[n], n, e)) return !0;
        return !1
    };
    var Zt, Xt = m.momentProperties = [], Qt = !1, Jt = {};
    m.suppressDeprecationWarnings = !1, m.deprecationHandler = null, Zt = Object.keys ? Object.keys : function (t) {
        var e, i = [];
        for (e in t) v(t, e) && i.push(e);
        return i
    };
    var te = {}, ee = {},
        ie = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        ne = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, se = {}, oe = {}, re = /\d/, ae = /\d\d/, le = /\d{3}/,
        he = /\d{4}/, ue = /[+-]?\d{6}/, ce = /\d\d?/, de = /\d\d\d\d?/, pe = /\d\d\d\d\d\d?/, fe = /\d{1,3}/,
        ge = /\d{1,4}/, me = /[+-]?\d{1,6}/, ve = /\d+/, ye = /[+-]?\d+/, _e = /Z|[+-]\d\d:?\d\d/gi,
        be = /Z|[+-]\d\d(?::?\d\d)?/gi,
        we = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        De = {}, Ce = {}, Se = 0, xe = 1, ke = 2, Me = 3, Te = 4, Ee = 5, Ie = 6, Pe = 7, Re = 8;
    n("Y", 0, 0, function () {
        var t = this.year();
        return t <= 9999 ? "" + t : "+" + t
    }), n(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), n(0, ["YYYY", 4], 0, "year"), n(0, ["YYYYY", 5], 0, "year"), n(0, ["YYYYYY", 6, !0], 0, "year"), e("year", "y"), i("year", 1), H("Y", ye), H("YY", ce, ae), H("YYYY", ge, he), H("YYYYY", me, ue), H("YYYYYY", me, ue), F(["YYYYY", "YYYYYY"], Se), F("YYYY", function (t, e) {
        e[Se] = 2 === t.length ? m.parseTwoDigitYear(t) : S(t)
    }), F("YY", function (t, e) {
        e[Se] = m.parseTwoDigitYear(t)
    }), F("Y", function (t, e) {
        e[Se] = parseInt(t, 10)
    }), m.parseTwoDigitYear = function (t) {
        return S(t) + (68 < S(t) ? 1900 : 2e3)
    };
    var He, Oe = L("FullYear", !0);
    He = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
        var e;
        for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
        return -1
    }, n("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), n("MMM", 0, 0, function (t) {
        return this.localeData().monthsShort(this, t)
    }), n("MMMM", 0, 0, function (t) {
        return this.localeData().months(this, t)
    }), e("month", "M"), i("month", 8), H("M", ce), H("MM", ce, ae), H("MMM", function (t, e) {
        return e.monthsShortRegex(t)
    }), H("MMMM", function (t, e) {
        return e.monthsRegex(t)
    }), F(["M", "MM"], function (t, e) {
        e[xe] = S(t) - 1
    }), F(["MMM", "MMMM"], function (t, e, i, n) {
        var s = i._locale.monthsParse(t, n, i._strict);
        null != s ? e[xe] = s : y(i).invalidMonth = t
    });
    var ze = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Fe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Ae = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Ne = we, We = we;
    n("w", ["ww", 2], "wo", "week"), n("W", ["WW", 2], "Wo", "isoWeek"), e("week", "w"), e("isoWeek", "W"), i("week", 5), i("isoWeek", 5), H("w", ce), H("ww", ce, ae), H("W", ce), H("WW", ce, ae), A(["w", "ww", "W", "WW"], function (t, e, i, n) {
        e[n.substr(0, 1)] = S(t)
    });
    n("d", 0, "do", "day"), n("dd", 0, 0, function (t) {
        return this.localeData().weekdaysMin(this, t)
    }), n("ddd", 0, 0, function (t) {
        return this.localeData().weekdaysShort(this, t)
    }), n("dddd", 0, 0, function (t) {
        return this.localeData().weekdays(this, t)
    }), n("e", 0, 0, "weekday"), n("E", 0, 0, "isoWeekday"), e("day", "d"), e("weekday", "e"), e("isoWeekday", "E"), i("day", 11), i("weekday", 11), i("isoWeekday", 11), H("d", ce), H("e", ce), H("E", ce), H("dd", function (t, e) {
        return e.weekdaysMinRegex(t)
    }), H("ddd", function (t, e) {
        return e.weekdaysShortRegex(t)
    }), H("dddd", function (t, e) {
        return e.weekdaysRegex(t)
    }), A(["dd", "ddd", "dddd"], function (t, e, i, n) {
        var s = i._locale.weekdaysParse(t, n, i._strict);
        null != s ? e.d = s : y(i).invalidWeekday = t
    }), A(["d", "e", "E"], function (t, e, i, n) {
        e[n] = S(t)
    });
    var Le = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Ye = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Be = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), je = we, Ve = we,
        Ue = we;
    n("H", ["HH", 2], 0, "hour"), n("h", ["hh", 2], 0, J), n("k", ["kk", 2], 0, function () {
        return this.hours() || 24
    }), n("hmm", 0, 0, function () {
        return "" + J.apply(this) + P(this.minutes(), 2)
    }), n("hmmss", 0, 0, function () {
        return "" + J.apply(this) + P(this.minutes(), 2) + P(this.seconds(), 2)
    }), n("Hmm", 0, 0, function () {
        return "" + this.hours() + P(this.minutes(), 2)
    }), n("Hmmss", 0, 0, function () {
        return "" + this.hours() + P(this.minutes(), 2) + P(this.seconds(), 2)
    }), tt("a", !0), tt("A", !1), e("hour", "h"), i("hour", 13), H("a", et), H("A", et), H("H", ce), H("h", ce), H("k", ce), H("HH", ce, ae), H("hh", ce, ae), H("kk", ce, ae), H("hmm", de), H("hmmss", pe), H("Hmm", de), H("Hmmss", pe), F(["H", "HH"], Me), F(["k", "kk"], function (t, e, i) {
        var n = S(t);
        e[Me] = 24 === n ? 0 : n
    }), F(["a", "A"], function (t, e, i) {
        i._isPm = i._locale.isPM(t), i._meridiem = t
    }), F(["h", "hh"], function (t, e, i) {
        e[Me] = S(t), y(i).bigHour = !0
    }), F("hmm", function (t, e, i) {
        var n = t.length - 2;
        e[Me] = S(t.substr(0, n)), e[Te] = S(t.substr(n)), y(i).bigHour = !0
    }), F("hmmss", function (t, e, i) {
        var n = t.length - 4, s = t.length - 2;
        e[Me] = S(t.substr(0, n)), e[Te] = S(t.substr(n, 2)), e[Ee] = S(t.substr(s)), y(i).bigHour = !0
    }), F("Hmm", function (t, e, i) {
        var n = t.length - 2;
        e[Me] = S(t.substr(0, n)), e[Te] = S(t.substr(n))
    }), F("Hmmss", function (t, e, i) {
        var n = t.length - 4, s = t.length - 2;
        e[Me] = S(t.substr(0, n)), e[Te] = S(t.substr(n, 2)), e[Ee] = S(t.substr(s))
    });
    var Ge, qe = L("Hours", !0), Ke = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            months: Fe,
            monthsShort: Ae,
            week: {dow: 0, doy: 6},
            weekdays: Le,
            weekdaysMin: Be,
            weekdaysShort: Ye,
            meridiemParse: /[ap]\.?m?\.?/i
        }, $e = {}, Ze = {},
        Xe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Qe = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Je = /Z|[+-]\d\d(?::?\d\d)?/,
        ti = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
        ei = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
        ii = /^\/?Date\((\-?\d+)/i,
        ni = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        si = {UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480};
    m.createFromInputFallback = t("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), m.ISO_8601 = function () {
    }, m.RFC_2822 = function () {
    };
    var oi = t("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var t = mt.apply(null, arguments);
            return this.isValid() && t.isValid() ? t < this ? this : t : _()
        }),
        ri = t("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var t = mt.apply(null, arguments);
            return this.isValid() && t.isValid() ? this < t ? this : t : _()
        }), ai = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    wt("Z", ":"), wt("ZZ", ""), H("Z", be), H("ZZ", be), F(["Z", "ZZ"], function (t, e, i) {
        i._useUTC = !0, i._tzm = Dt(be, t)
    });
    var li = /([\+\-]|\d\d)/gi;
    m.updateOffset = function () {
    };
    var hi = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        ui = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    kt.fn = yt.prototype, kt.invalid = function () {
        return kt(NaN)
    };
    var ci = Et(1, "add"), di = Et(-1, "subtract");
    m.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", m.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var pi = t("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });
    n(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), n(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), Ot("gggg", "weekYear"), Ot("ggggg", "weekYear"), Ot("GGGG", "isoWeekYear"), Ot("GGGGG", "isoWeekYear"), e("weekYear", "gg"), e("isoWeekYear", "GG"), i("weekYear", 1), i("isoWeekYear", 1), H("G", ye), H("g", ye), H("GG", ce, ae), H("gg", ce, ae), H("GGGG", ge, he), H("gggg", ge, he), H("GGGGG", me, ue), H("ggggg", me, ue), A(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, n) {
        e[n.substr(0, 2)] = S(t)
    }), A(["gg", "GG"], function (t, e, i, n) {
        e[n] = m.parseTwoDigitYear(t)
    }), n("Q", 0, "Qo", "quarter"), e("quarter", "Q"), i("quarter", 7), H("Q", re), F("Q", function (t, e) {
        e[xe] = 3 * (S(t) - 1)
    }), n("D", ["DD", 2], "Do", "date"), e("date", "D"), i("date", 9), H("D", ce), H("DD", ce, ae), H("Do", function (t, e) {
        return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
    }), F(["D", "DD"], ke), F("Do", function (t, e) {
        e[ke] = S(t.match(ce)[0])
    });
    var fi = L("Date", !0);
    n("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), e("dayOfYear", "DDD"), i("dayOfYear", 4), H("DDD", fe), H("DDDD", le), F(["DDD", "DDDD"], function (t, e, i) {
        i._dayOfYear = S(t)
    }), n("m", ["mm", 2], 0, "minute"), e("minute", "m"), i("minute", 14), H("m", ce), H("mm", ce, ae), F(["m", "mm"], Te);
    var gi = L("Minutes", !1);
    n("s", ["ss", 2], 0, "second"), e("second", "s"), i("second", 15), H("s", ce), H("ss", ce, ae), F(["s", "ss"], Ee);
    var mi, vi = L("Seconds", !1);
    for (n("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), n(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), n(0, ["SSS", 3], 0, "millisecond"), n(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), n(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), n(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), n(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), n(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), n(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), e("millisecond", "ms"), i("millisecond", 16), H("S", fe, re), H("SS", fe, ae), H("SSS", fe, le), mi = "SSSS"; mi.length <= 9; mi += "S") H(mi, ve);
    for (mi = "S"; mi.length <= 9; mi += "S") F(mi, function (t, e) {
        e[Ie] = S(1e3 * ("0." + t))
    });
    var yi = L("Milliseconds", !1);
    n("z", 0, 0, "zoneAbbr"), n("zz", 0, 0, "zoneName");
    var _i = w.prototype;
    _i.add = ci, _i.calendar = function (t, e) {
        var i = t || mt(), n = Ct(i, this).startOf("day"), s = m.calendarFormat(this, n) || "sameElse",
            o = e && (k(e[s]) ? e[s].call(this, i) : e[s]);
        return this.format(o || this.localeData().calendar(s, this, mt(i)))
    }, _i.clone = function () {
        return new w(this)
    }, _i.diff = function (t, e, i) {
        var n, s, o;
        if (!this.isValid()) return NaN;
        if (!(n = Ct(t, this)).isValid()) return NaN;
        switch (s = 6e4 * (n.utcOffset() - this.utcOffset()), e = E(e)) {
            case"year":
                o = Pt(this, n) / 12;
                break;
            case"month":
                o = Pt(this, n);
                break;
            case"quarter":
                o = Pt(this, n) / 3;
                break;
            case"second":
                o = (this - n) / 1e3;
                break;
            case"minute":
                o = (this - n) / 6e4;
                break;
            case"hour":
                o = (this - n) / 36e5;
                break;
            case"day":
                o = (this - n - s) / 864e5;
                break;
            case"week":
                o = (this - n - s) / 6048e5;
                break;
            default:
                o = this - n
        }
        return i ? o : C(o)
    }, _i.endOf = function (t) {
        return void 0 === (t = E(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
    }, _i.format = function (t) {
        t || (t = this.isUtc() ? m.defaultFormatUtc : m.defaultFormat);
        var e = s(this, t);
        return this.localeData().postformat(e)
    }, _i.from = function (t, e) {
        return this.isValid() && (D(t) && t.isValid() || mt(t).isValid()) ? kt({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }, _i.fromNow = function (t) {
        return this.from(mt(), t)
    }, _i.to = function (t, e) {
        return this.isValid() && (D(t) && t.isValid() || mt(t).isValid()) ? kt({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }, _i.toNow = function (t) {
        return this.to(mt(), t)
    }, _i.get = function (t) {
        return k(this[t = E(t)]) ? this[t]() : this
    }, _i.invalidAt = function () {
        return y(this).overflow
    }, _i.isAfter = function (t, e) {
        var i = D(t) ? t : mt(t);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = E(h(e) ? "millisecond" : e)) ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
    }, _i.isBefore = function (t, e) {
        var i = D(t) ? t : mt(t);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = E(h(e) ? "millisecond" : e)) ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
    }, _i.isBetween = function (t, e, i, n) {
        return ("(" === (n = n || "()")[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === n[1] ? this.isBefore(e, i) : !this.isAfter(e, i))
    }, _i.isSame = function (t, e) {
        var i, n = D(t) ? t : mt(t);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = E(e || "millisecond")) ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
    }, _i.isSameOrAfter = function (t, e) {
        return this.isSame(t, e) || this.isAfter(t, e)
    }, _i.isSameOrBefore = function (t, e) {
        return this.isSame(t, e) || this.isBefore(t, e)
    }, _i.isValid = function () {
        return g(this)
    }, _i.lang = pi, _i.locale = Rt, _i.localeData = Ht, _i.max = ri, _i.min = oi, _i.parsingFlags = function () {
        return p({}, y(this))
    }, _i.set = function (t, e) {
        if ("object" == typeof t) for (var i = function (t) {
            var e = [];
            for (var i in t) e.push({unit: i, priority: ee[i]});
            return e.sort(function (t, e) {
                return t.priority - e.priority
            }), e
        }(t = I(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]); else if (k(this[t = E(t)])) return this[t](e);
        return this
    }, _i.startOf = function (t) {
        switch (t = E(t)) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
            case"date":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    }, _i.subtract = di, _i.toArray = function () {
        var t = this;
        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }, _i.toObject = function () {
        var t = this;
        return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
        }
    }, _i.toDate = function () {
        return new Date(this.valueOf())
    }, _i.toISOString = function () {
        if (!this.isValid()) return null;
        var t = this.clone().utc();
        return t.year() < 0 || 9999 < t.year() ? s(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : k(Date.prototype.toISOString) ? this.toDate().toISOString() : s(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }, _i.inspect = function () {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var t = "moment", e = "";
        this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
        var i = "[" + t + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = e + '[")]';
        return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + s)
    }, _i.toJSON = function () {
        return this.isValid() ? this.toISOString() : null
    }, _i.toString = function () {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, _i.unix = function () {
        return Math.floor(this.valueOf() / 1e3)
    }, _i.valueOf = function () {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, _i.creationData = function () {
        return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
    }, _i.year = Oe, _i.isLeapYear = function () {
        return W(this.year())
    }, _i.weekYear = function (t) {
        return zt.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, _i.isoWeekYear = function (t) {
        return zt.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, _i.quarter = _i.quarters = function (t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }, _i.month = U, _i.daysInMonth = function () {
        return j(this.year(), this.month())
    }, _i.week = _i.weeks = function (t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }, _i.isoWeek = _i.isoWeeks = function (t) {
        var e = Z(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }, _i.weeksInYear = function () {
        var t = this.localeData()._week;
        return X(this.year(), t.dow, t.doy)
    }, _i.isoWeeksInYear = function () {
        return X(this.year(), 1, 4)
    }, _i.date = fi, _i.day = _i.days = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e, i, n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (e = t, i = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = i.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - n, "d")) : n
    }, _i.weekday = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }, _i.isoWeekday = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        if (null == t) return this.day() || 7;
        var e, i,
            n = (e = t, i = this.localeData(), "string" == typeof e ? i.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
        return this.day(this.day() % 7 ? n : n - 7)
    }, _i.dayOfYear = function (t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }, _i.hour = _i.hours = qe, _i.minute = _i.minutes = gi, _i.second = _i.seconds = vi, _i.millisecond = _i.milliseconds = yi, _i.utcOffset = function (t, e, i) {
        var n, s = this._offset || 0;
        if (!this.isValid()) return null != t ? this : NaN;
        if (null == t) return this._isUTC ? s : St(this);
        if ("string" == typeof t) {
            if (null === (t = Dt(be, t))) return this
        } else Math.abs(t) < 16 && !i && (t *= 60);
        return !this._isUTC && e && (n = St(this)), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), s !== t && (!e || this._changeInProgress ? It(this, kt(t - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, m.updateOffset(this, !0), this._changeInProgress = null)), this
    }, _i.utc = function (t) {
        return this.utcOffset(0, t)
    }, _i.local = function (t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(St(this), "m")), this
    }, _i.parseZone = function () {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
            var t = Dt(_e, this._i);
            null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
        }
        return this
    }, _i.hasAlignedHourOffset = function (t) {
        return !!this.isValid() && (t = t ? mt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
    }, _i.isDST = function () {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, _i.isLocal = function () {
        return !!this.isValid() && !this._isUTC
    }, _i.isUtcOffset = function () {
        return !!this.isValid() && this._isUTC
    }, _i.isUtc = xt, _i.isUTC = xt, _i.zoneAbbr = function () {
        return this._isUTC ? "UTC" : ""
    }, _i.zoneName = function () {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, _i.dates = t("dates accessor is deprecated. Use date instead.", fi), _i.months = t("months accessor is deprecated. Use month instead", U), _i.years = t("years accessor is deprecated. Use year instead", Oe), _i.zone = t("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }), _i.isDSTShifted = t("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
        if (!h(this._isDSTShifted)) return this._isDSTShifted;
        var t = {};
        if (b(t, this), (t = ft(t))._a) {
            var e = t._isUTC ? f(t._a) : mt(t._a);
            this._isDSTShifted = this.isValid() && 0 < r(t._a, e.toArray())
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    });
    var bi = T.prototype;
    bi.calendar = function (t, e, i) {
        var n = this._calendar[t] || this._calendar.sameElse;
        return k(n) ? n.call(e, i) : n
    }, bi.longDateFormat = function (t) {
        var e = this._longDateFormat[t], i = this._longDateFormat[t.toUpperCase()];
        return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function (t) {
            return t.slice(1)
        }), this._longDateFormat[t])
    }, bi.invalidDate = function () {
        return this._invalidDate
    }, bi.ordinal = function (t) {
        return this._ordinal.replace("%d", t)
    }, bi.preparse = Ft, bi.postformat = Ft, bi.relativeTime = function (t, e, i, n) {
        var s = this._relativeTime[i];
        return k(s) ? s(t, e, i, n) : s.replace(/%d/i, t)
    }, bi.pastFuture = function (t, e) {
        var i = this._relativeTime[0 < t ? "future" : "past"];
        return k(i) ? i(e) : i.replace(/%s/i, e)
    }, bi.set = function (t) {
        var e, i;
        for (i in t) k(e = t[i]) ? this[i] = e : this["_" + i] = e;
        this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, bi.months = function (t, e) {
        return t ? a(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || ze).test(e) ? "format" : "standalone"][t.month()] : a(this._months) ? this._months : this._months.standalone
    }, bi.monthsShort = function (t, e) {
        return t ? a(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[ze.test(e) ? "format" : "standalone"][t.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, bi.monthsParse = function (t, e, i) {
        var n, s, o;
        if (this._monthsParseExact) return function (t, e, i) {
            var n, s, o, r = t.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) o = f([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase();
            return i ? "MMM" === e ? -1 !== (s = He.call(this._shortMonthsParse, r)) ? s : null : -1 !== (s = He.call(this._longMonthsParse, r)) ? s : null : "MMM" === e ? -1 !== (s = He.call(this._shortMonthsParse, r)) ? s : -1 !== (s = He.call(this._longMonthsParse, r)) ? s : null : -1 !== (s = He.call(this._longMonthsParse, r)) ? s : -1 !== (s = He.call(this._shortMonthsParse, r)) ? s : null
        }.call(this, t, e, i);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
            if (s = f([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (o = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(o.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
            if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
            if (!i && this._monthsParse[n].test(t)) return n
        }
    }, bi.monthsRegex = function (t) {
        return this._monthsParseExact ? (v(this, "_monthsRegex") || G.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (v(this, "_monthsRegex") || (this._monthsRegex = We), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
    }, bi.monthsShortRegex = function (t) {
        return this._monthsParseExact ? (v(this, "_monthsRegex") || G.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (v(this, "_monthsShortRegex") || (this._monthsShortRegex = Ne), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, bi.week = function (t) {
        return Z(t, this._week.dow, this._week.doy).week
    }, bi.firstDayOfYear = function () {
        return this._week.doy
    }, bi.firstDayOfWeek = function () {
        return this._week.dow
    }, bi.weekdays = function (t, e) {
        return t ? a(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }, bi.weekdaysMin = function (t) {
        return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
    }, bi.weekdaysShort = function (t) {
        return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
    }, bi.weekdaysParse = function (t, e, i) {
        var n, s, o;
        if (this._weekdaysParseExact) return function (t, e, i) {
            var n, s, o, r = t.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) o = f([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(o, "").toLocaleLowerCase();
            return i ? "dddd" === e ? -1 !== (s = He.call(this._weekdaysParse, r)) ? s : null : "ddd" === e ? -1 !== (s = He.call(this._shortWeekdaysParse, r)) ? s : null : -1 !== (s = He.call(this._minWeekdaysParse, r)) ? s : null : "dddd" === e ? -1 !== (s = He.call(this._weekdaysParse, r)) ? s : -1 !== (s = He.call(this._shortWeekdaysParse, r)) ? s : -1 !== (s = He.call(this._minWeekdaysParse, r)) ? s : null : "ddd" === e ? -1 !== (s = He.call(this._shortWeekdaysParse, r)) ? s : -1 !== (s = He.call(this._weekdaysParse, r)) ? s : -1 !== (s = He.call(this._minWeekdaysParse, r)) ? s : null : -1 !== (s = He.call(this._minWeekdaysParse, r)) ? s : -1 !== (s = He.call(this._weekdaysParse, r)) ? s : -1 !== (s = He.call(this._shortWeekdaysParse, r)) ? s : null
        }.call(this, t, e, i);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
            if (s = f([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (o = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
            if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
            if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
            if (!i && this._weekdaysParse[n].test(t)) return n
        }
    }, bi.weekdaysRegex = function (t) {
        return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || Q.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (v(this, "_weekdaysRegex") || (this._weekdaysRegex = je), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, bi.weekdaysShortRegex = function (t) {
        return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || Q.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (v(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ve), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, bi.weekdaysMinRegex = function (t) {
        return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || Q.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (v(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ue), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, bi.isPM = function (t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }, bi.meridiem = function (t, e, i) {
        return 11 < t ? i ? "pm" : "PM" : i ? "am" : "AM"
    }, st("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (t) {
            var e = t % 10;
            return t + (1 === S(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        }
    }), m.lang = t("moment.lang is deprecated. Use moment.locale instead.", st), m.langData = t("moment.langData is deprecated. Use moment.localeData instead.", rt);
    var wi = Math.abs, Di = Vt("ms"), Ci = Vt("s"), Si = Vt("m"), xi = Vt("h"), ki = Vt("d"), Mi = Vt("w"),
        Ti = Vt("M"), Ei = Vt("y"), Ii = Ut("milliseconds"), Pi = Ut("seconds"), Ri = Ut("minutes"), Hi = Ut("hours"),
        Oi = Ut("days"), zi = Ut("months"), Fi = Ut("years"), Ai = Math.round,
        Ni = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11}, Wi = Math.abs, Li = yt.prototype;
    return Li.isValid = function () {
        return this._isValid
    }, Li.abs = function () {
        var t = this._data;
        return this._milliseconds = wi(this._milliseconds), this._days = wi(this._days), this._months = wi(this._months), t.milliseconds = wi(t.milliseconds), t.seconds = wi(t.seconds), t.minutes = wi(t.minutes), t.hours = wi(t.hours), t.months = wi(t.months), t.years = wi(t.years), this
    }, Li.add = function (t, e) {
        return Lt(this, t, e, 1)
    }, Li.subtract = function (t, e) {
        return Lt(this, t, e, -1)
    }, Li.as = function (t) {
        if (!this.isValid()) return NaN;
        var e, i, n = this._milliseconds;
        if ("month" === (t = E(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + Bt(e), "month" === t ? i : i / 12;
        switch (e = this._days + Math.round(jt(this._months)), t) {
            case"week":
                return e / 7 + n / 6048e5;
            case"day":
                return e + n / 864e5;
            case"hour":
                return 24 * e + n / 36e5;
            case"minute":
                return 1440 * e + n / 6e4;
            case"second":
                return 86400 * e + n / 1e3;
            case"millisecond":
                return Math.floor(864e5 * e) + n;
            default:
                throw new Error("Unknown unit " + t)
        }
    }, Li.asMilliseconds = Di, Li.asSeconds = Ci, Li.asMinutes = Si, Li.asHours = xi, Li.asDays = ki, Li.asWeeks = Mi, Li.asMonths = Ti, Li.asYears = Ei, Li.valueOf = function () {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * S(this._months / 12) : NaN
    }, Li._bubble = function () {
        var t, e, i, n, s, o = this._milliseconds, r = this._days, a = this._months, l = this._data;
        return 0 <= o && 0 <= r && 0 <= a || o <= 0 && r <= 0 && a <= 0 || (o += 864e5 * Yt(jt(a) + r), a = r = 0), l.milliseconds = o % 1e3, t = C(o / 1e3), l.seconds = t % 60, e = C(t / 60), l.minutes = e % 60, i = C(e / 60), l.hours = i % 24, a += s = C(Bt(r += C(i / 24))), r -= Yt(jt(s)), n = C(a / 12), a %= 12, l.days = r, l.months = a, l.years = n, this
    }, Li.clone = function () {
        return kt(this)
    }, Li.get = function (t) {
        return t = E(t), this.isValid() ? this[t + "s"]() : NaN
    }, Li.milliseconds = Ii, Li.seconds = Pi, Li.minutes = Ri, Li.hours = Hi, Li.days = Oi, Li.weeks = function () {
        return C(this.days() / 7)
    }, Li.months = zi, Li.years = Fi, Li.humanize = function (t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, i, n, s, o, r, a, l, h, u, c, d = this.localeData(),
            p = (i = !t, n = d, s = kt(e = this).abs(), o = Ai(s.as("s")), r = Ai(s.as("m")), a = Ai(s.as("h")), l = Ai(s.as("d")), h = Ai(s.as("M")), u = Ai(s.as("y")), (c = o <= Ni.ss && ["s", o] || o < Ni.s && ["ss", o] || r <= 1 && ["m"] || r < Ni.m && ["mm", r] || a <= 1 && ["h"] || a < Ni.h && ["hh", a] || l <= 1 && ["d"] || l < Ni.d && ["dd", l] || h <= 1 && ["M"] || h < Ni.M && ["MM", h] || u <= 1 && ["y"] || ["yy", u])[2] = i, c[3] = 0 < +e, c[4] = n, function (t, e, i, n, s) {
                return s.relativeTime(e || 1, !!i, t, n)
            }.apply(null, c));
        return t && (p = d.pastFuture(+this, p)), d.postformat(p)
    }, Li.toISOString = qt, Li.toString = qt, Li.toJSON = qt, Li.locale = Rt, Li.localeData = Ht, Li.toIsoString = t("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", qt), Li.lang = pi, n("X", 0, 0, "unix"), n("x", 0, 0, "valueOf"), H("x", ye), H("X", /[+-]?\d+(\.\d{1,3})?/), F("X", function (t, e, i) {
        i._d = new Date(1e3 * parseFloat(t, 10))
    }), F("x", function (t, e, i) {
        i._d = new Date(S(t))
    }), m.version = "2.19.2", Kt = mt, m.fn = _i, m.min = function () {
        return vt("isBefore", [].slice.call(arguments, 0))
    }, m.max = function () {
        return vt("isAfter", [].slice.call(arguments, 0))
    }, m.now = function () {
        return Date.now ? Date.now() : +new Date
    }, m.utc = f, m.unix = function (t) {
        return mt(1e3 * t)
    }, m.months = function (t, e) {
        return Nt(t, e, "months")
    }, m.isDate = c, m.locale = st, m.invalid = _, m.duration = kt, m.isMoment = D, m.weekdays = function (t, e, i) {
        return Wt(t, e, i, "weekdays")
    }, m.parseZone = function () {
        return mt.apply(null, arguments).parseZone()
    }, m.localeData = rt, m.isDuration = _t, m.monthsShort = function (t, e) {
        return Nt(t, e, "monthsShort")
    }, m.weekdaysMin = function (t, e, i) {
        return Wt(t, e, i, "weekdaysMin")
    }, m.defineLocale = ot, m.updateLocale = function (t, e) {
        if (null != e) {
            var i, n, s = Ke;
            null != (n = nt(t)) && (s = n._config), (i = new T(e = M(s, e))).parentLocale = $e[t], $e[t] = i, st(t)
        } else null != $e[t] && (null != $e[t].parentLocale ? $e[t] = $e[t].parentLocale : null != $e[t] && delete $e[t]);
        return $e[t]
    }, m.locales = function () {
        return Zt($e)
    }, m.weekdaysShort = function (t, e, i) {
        return Wt(t, e, i, "weekdaysShort")
    }, m.normalizeUnits = E, m.relativeTimeRounding = function (t) {
        return void 0 === t ? Ai : "function" == typeof t && (Ai = t, !0)
    }, m.relativeTimeThreshold = function (t, e) {
        return void 0 !== Ni[t] && (void 0 === e ? Ni[t] : (Ni[t] = e, "s" === t && (Ni.ss = e - 1), !0))
    }, m.calendarFormat = function (t, e) {
        var i = t.diff(e, "days", !0);
        return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
    }, m.prototype = _i, m
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (k) {
    function t() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, k.extend(this._defaults, this.regional[""]), this.regional.en = k.extend(!0, {}, this.regional[""]), this.regional["en-US"] = k.extend(!0, {}, this.regional.en), this.dpDiv = i(k("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function i(t) {
        var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.on("mouseout", e, function () {
            k(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && k(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && k(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", e, o)
    }

    function o() {
        k.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (k(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), k(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && k(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && k(this).addClass("ui-datepicker-next-hover"))
    }

    function c(t, e) {
        for (var i in k.extend(t, e), e) null == e[i] && (t[i] = e[i]);
        return t
    }

    function e(e) {
        return function () {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }

    k.ui = k.ui || {}, k.ui.version = "1.12.1";
    var n, s, r = 0, a = Array.prototype.slice;
    k.cleanData = (s = k.cleanData, function (t) {
        var e, i, n;
        for (n = 0; null != (i = t[n]); n++) try {
            (e = k._data(i, "events")) && e.remove && k(i).triggerHandler("remove")
        } catch (t) {
        }
        s(t)
    }), k.widget = function (t, i, e) {
        var n, s, o, r = {}, a = t.split(".")[0], l = a + "-" + (t = t.split(".")[1]);
        return e || (e = i, i = k.Widget), k.isArray(e) && (e = k.extend.apply(null, [{}].concat(e))), k.expr[":"][l.toLowerCase()] = function (t) {
            return !!k.data(t, l)
        }, k[a] = k[a] || {}, n = k[a][t], s = k[a][t] = function (t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new s(t, e)
        }, k.extend(s, n, {
            version: e.version,
            _proto: k.extend({}, e),
            _childConstructors: []
        }), (o = new i).options = k.widget.extend({}, o.options), k.each(e, function (e, o) {
            return k.isFunction(o) ? void (r[e] = function () {
                function n() {
                    return i.prototype[e].apply(this, arguments)
                }

                function s(t) {
                    return i.prototype[e].apply(this, t)
                }

                return function () {
                    var t, e = this._super, i = this._superApply;
                    return this._super = n, this._superApply = s, t = o.apply(this, arguments), this._super = e, this._superApply = i, t
                }
            }()) : void (r[e] = o)
        }), s.prototype = k.widget.extend(o, {widgetEventPrefix: n && o.widgetEventPrefix || t}, r, {
            constructor: s,
            namespace: a,
            widgetName: t,
            widgetFullName: l
        }), n ? (k.each(n._childConstructors, function (t, e) {
            var i = e.prototype;
            k.widget(i.namespace + "." + i.widgetName, s, e._proto)
        }), delete n._childConstructors) : i._childConstructors.push(s), k.widget.bridge(t, s), s
    }, k.widget.extend = function (t) {
        for (var e, i, n = a.call(arguments, 1), s = 0, o = n.length; s < o; s++) for (e in n[s]) i = n[s][e], n[s].hasOwnProperty(e) && void 0 !== i && (t[e] = k.isPlainObject(i) ? k.isPlainObject(t[e]) ? k.widget.extend({}, t[e], i) : k.widget.extend({}, i) : i);
        return t
    }, k.widget.bridge = function (o, e) {
        var r = e.prototype.widgetFullName || o;
        k.fn[o] = function (i) {
            var t = "string" == typeof i, n = a.call(arguments, 1), s = this;
            return t ? this.length || "instance" !== i ? this.each(function () {
                var t, e = k.data(this, r);
                return "instance" === i ? (s = e, !1) : e ? k.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, n)) !== e && void 0 !== t ? (s = t && t.jquery ? s.pushStack(t.get()) : t, !1) : void 0 : k.error("no such method '" + i + "' for " + o + " widget instance") : k.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'")
            }) : s = void 0 : (n.length && (i = k.widget.extend.apply(null, [i].concat(n))), this.each(function () {
                var t = k.data(this, r);
                t ? (t.option(i || {}), t._init && t._init()) : k.data(this, r, new e(i, this))
            })), s
        }
    }, k.Widget = function () {
    }, k.Widget._childConstructors = [], k.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {classes: {}, disabled: !1, create: null},
        _createWidget: function (t, e) {
            e = k(e || this.defaultElement || this)[0], this.element = k(e), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = k(), this.hoverable = k(), this.focusable = k(), this.classesElementLookup = {}, e !== this && (k.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === e && this.destroy()
                }
            }), this.document = k(e.style ? e.ownerDocument : e.document || e), this.window = k(this.document[0].defaultView || this.document[0].parentWindow)), this.options = k.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function () {
            return {}
        },
        _getCreateEventData: k.noop,
        _create: k.noop,
        _init: k.noop,
        destroy: function () {
            var i = this;
            this._destroy(), k.each(this.classesElementLookup, function (t, e) {
                i._removeClass(e, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: k.noop,
        widget: function () {
            return this.element
        },
        option: function (t, e) {
            var i, n, s, o = t;
            if (0 === arguments.length) return k.widget.extend({}, this.options);
            if ("string" == typeof t) if (o = {}, t = (i = t.split(".")).shift(), i.length) {
                for (n = o[t] = k.widget.extend({}, this.options[t]), s = 0; i.length - 1 > s; s++) n[i[s]] = n[i[s]] || {}, n = n[i[s]];
                if (t = i.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                n[t] = e
            } else {
                if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                o[t] = e
            }
            return this._setOptions(o), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function (t) {
            var e, i, n;
            for (e in t) n = this.classesElementLookup[e], t[e] !== this.options.classes[e] && n && n.length && (i = k(n.get()), this._removeClass(n, e), i.addClass(this._classes({
                element: i,
                keys: e,
                classes: t,
                add: !0
            })))
        },
        _setOptionDisabled: function (t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _classes: function (s) {
            function t(t, e) {
                var i, n;
                for (n = 0; t.length > n; n++) i = r.classesElementLookup[t[n]] || k(), i = s.add ? k(k.unique(i.get().concat(s.element.get()))) : k(i.not(s.element).get()), r.classesElementLookup[t[n]] = i, o.push(t[n]), e && s.classes[t[n]] && o.push(s.classes[t[n]])
            }

            var o = [], r = this;
            return s = k.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, s), this._on(s.element, {remove: "_untrackClassesElement"}), s.keys && t(s.keys.match(/\S+/g) || [], !0), s.extra && t(s.extra.match(/\S+/g) || []), o.join(" ")
        },
        _untrackClassesElement: function (i) {
            var n = this;
            k.each(n.classesElementLookup, function (t, e) {
                -1 !== k.inArray(i.target, e) && (n.classesElementLookup[t] = k(e.not(i.target).get()))
            })
        },
        _removeClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function (t, e, i, n) {
            n = "boolean" == typeof n ? n : i;
            var s = "string" == typeof t || null === t,
                o = {extra: s ? e : i, keys: s ? t : e, element: s ? this.element : t, add: n};
            return o.element.toggleClass(this._classes(o), n), this
        },
        _on: function (r, a, t) {
            var l, h = this;
            "boolean" != typeof r && (t = a, a = r, r = !1), t ? (a = l = k(a), this.bindings = this.bindings.add(a)) : (t = a, a = this.element, l = this.widget()), k.each(t, function (t, e) {
                function i() {
                    return r || !0 !== h.options.disabled && !k(this).hasClass("ui-state-disabled") ? ("string" == typeof e ? h[e] : e).apply(h, arguments) : void 0
                }

                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || k.guid++);
                var n = t.match(/^([\w:-]*)\s*(.*)$/), s = n[1] + h.eventNamespace, o = n[2];
                o ? l.on(s, o, i) : a.on(s, i)
            })
        },
        _off: function (t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e).off(e), this.bindings = k(this.bindings.not(t).get()), this.focusable = k(this.focusable.not(t).get()), this.hoverable = k(this.hoverable.not(t).get())
        },
        _delay: function (t, e) {
            var i = this;
            return setTimeout(function () {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    this._addClass(k(t.currentTarget), null, "ui-state-hover")
                }, mouseleave: function (t) {
                    this._removeClass(k(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    this._addClass(k(t.currentTarget), null, "ui-state-focus")
                }, focusout: function (t) {
                    this._removeClass(k(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function (t, e, i) {
            var n, s, o = this.options[t];
            if (i = i || {}, (e = k.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], s = e.originalEvent) for (n in s) n in e || (e[n] = s[n]);
            return this.element.trigger(e, i), !(k.isFunction(o) && !1 === o.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    }, k.each({show: "fadeIn", hide: "fadeOut"}, function (o, r) {
        k.Widget.prototype["_" + o] = function (e, t, i) {
            "string" == typeof t && (t = {effect: t});
            var n, s = t ? !0 === t || "number" == typeof t ? r : t.effect || r : o;
            "number" == typeof (t = t || {}) && (t = {duration: t}), n = !k.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), n && k.effects && k.effects.effect[s] ? e[o](t) : s !== o && e[s] ? e[s](t.duration, t.easing, i) : e.queue(function (t) {
                k(this)[o](), i && i.call(e[0]), t()
            })
        }
    }), k.widget, function () {
        function D(t, e, i) {
            return [parseFloat(t[0]) * (l.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (l.test(t[1]) ? i / 100 : 1)]
        }

        function C(t, e) {
            return parseInt(k.css(t, e), 10) || 0
        }

        var s, S = Math.max, x = Math.abs, n = /left|center|right/, o = /top|center|bottom/,
            r = /[\+\-]\d+(\.[\d]+)?%?/, a = /^\w+/, l = /%$/, h = k.fn.position;
        k.position = {
            scrollbarWidth: function () {
                if (void 0 !== s) return s;
                var t, e,
                    i = k("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    n = i.children()[0];
                return k("body").append(i), t = n.offsetWidth, i.css("overflow", "scroll"), t === (e = n.offsetWidth) && (e = i[0].clientWidth), i.remove(), s = t - e
            }, getScrollInfo: function (t) {
                var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                    i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                    n = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                return {
                    width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? k.position.scrollbarWidth() : 0,
                    height: n ? k.position.scrollbarWidth() : 0
                }
            }, getWithinInfo: function (t) {
                var e = k(t || window), i = k.isWindow(e[0]), n = !!e[0] && 9 === e[0].nodeType;
                return {
                    element: e,
                    isWindow: i,
                    isDocument: n,
                    offset: !i && !n ? k(t).offset() : {left: 0, top: 0},
                    scrollLeft: e.scrollLeft(),
                    scrollTop: e.scrollTop(),
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }
            }
        }, k.fn.position = function (c) {
            if (!c || !c.of) return h.apply(this, arguments);
            c = k.extend({}, c);
            var d, p, f, g, m, t, e, i, v = k(c.of), y = k.position.getWithinInfo(c.within),
                _ = k.position.getScrollInfo(y), b = (c.collision || "flip").split(" "), w = {};
            return t = 9 === (i = (e = v)[0]).nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {top: 0, left: 0}
            } : k.isWindow(i) ? {
                width: e.width(),
                height: e.height(),
                offset: {top: e.scrollTop(), left: e.scrollLeft()}
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {top: i.pageY, left: i.pageX}
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            }, v[0].preventDefault && (c.at = "left top"), p = t.width, f = t.height, g = t.offset, m = k.extend({}, g), k.each(["my", "at"], function () {
                var t, e, i = (c[this] || "").split(" ");
                1 === i.length && (i = n.test(i[0]) ? i.concat(["center"]) : o.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = n.test(i[0]) ? i[0] : "center", i[1] = o.test(i[1]) ? i[1] : "center", t = r.exec(i[0]), e = r.exec(i[1]), w[this] = [t ? t[0] : 0, e ? e[0] : 0], c[this] = [a.exec(i[0])[0], a.exec(i[1])[0]]
            }), 1 === b.length && (b[1] = b[0]), "right" === c.at[0] ? m.left += p : "center" === c.at[0] && (m.left += p / 2), "bottom" === c.at[1] ? m.top += f : "center" === c.at[1] && (m.top += f / 2), d = D(w.at, p, f), m.left += d[0], m.top += d[1], this.each(function () {
                var i, t, r = k(this), a = r.outerWidth(), l = r.outerHeight(), e = C(this, "marginLeft"),
                    n = C(this, "marginTop"), s = a + e + C(this, "marginRight") + _.width,
                    o = l + n + C(this, "marginBottom") + _.height, h = k.extend({}, m),
                    u = D(w.my, r.outerWidth(), r.outerHeight());
                "right" === c.my[0] ? h.left -= a : "center" === c.my[0] && (h.left -= a / 2), "bottom" === c.my[1] ? h.top -= l : "center" === c.my[1] && (h.top -= l / 2), h.left += u[0], h.top += u[1], i = {
                    marginLeft: e,
                    marginTop: n
                }, k.each(["left", "top"], function (t, e) {
                    k.ui.position[b[t]] && k.ui.position[b[t]][e](h, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: a,
                        elemHeight: l,
                        collisionPosition: i,
                        collisionWidth: s,
                        collisionHeight: o,
                        offset: [d[0] + u[0], d[1] + u[1]],
                        my: c.my,
                        at: c.at,
                        within: y,
                        elem: r
                    })
                }), c.using && (t = function (t) {
                    var e = g.left - h.left, i = e + p - a, n = g.top - h.top, s = n + f - l, o = {
                        target: {element: v, left: g.left, top: g.top, width: p, height: f},
                        element: {element: r, left: h.left, top: h.top, width: a, height: l},
                        horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                        vertical: s < 0 ? "top" : 0 < n ? "bottom" : "middle"
                    };
                    p < a && p > x(e + i) && (o.horizontal = "center"), f < l && f > x(n + s) && (o.vertical = "middle"), o.important = S(x(e), x(i)) > S(x(n), x(s)) ? "horizontal" : "vertical", c.using.call(this, t, o)
                }), r.offset(k.extend(h, {using: t}))
            })
        }, k.ui.position = {
            fit: {
                left: function (t, e) {
                    var i, n = e.within, s = n.isWindow ? n.scrollLeft : n.offset.left, o = n.width,
                        r = t.left - e.collisionPosition.marginLeft, a = s - r, l = r + e.collisionWidth - o - s;
                    e.collisionWidth > o ? 0 < a && l <= 0 ? (i = t.left + a + e.collisionWidth - o - s, t.left += a - i) : t.left = 0 < l && a <= 0 ? s : l < a ? s + o - e.collisionWidth : s : 0 < a ? t.left += a : 0 < l ? t.left -= l : t.left = S(t.left - r, t.left)
                }, top: function (t, e) {
                    var i, n = e.within, s = n.isWindow ? n.scrollTop : n.offset.top, o = e.within.height,
                        r = t.top - e.collisionPosition.marginTop, a = s - r, l = r + e.collisionHeight - o - s;
                    e.collisionHeight > o ? 0 < a && l <= 0 ? (i = t.top + a + e.collisionHeight - o - s, t.top += a - i) : t.top = 0 < l && a <= 0 ? s : l < a ? s + o - e.collisionHeight : s : 0 < a ? t.top += a : 0 < l ? t.top -= l : t.top = S(t.top - r, t.top)
                }
            }, flip: {
                left: function (t, e) {
                    var i, n, s = e.within, o = s.offset.left + s.scrollLeft, r = s.width,
                        a = s.isWindow ? s.scrollLeft : s.offset.left, l = t.left - e.collisionPosition.marginLeft,
                        h = l - a, u = l + e.collisionWidth - r - a,
                        c = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        d = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        p = -2 * e.offset[0];
                    h < 0 ? ((i = t.left + c + d + p + e.collisionWidth - r - o) < 0 || x(h) > i) && (t.left += c + d + p) : 0 < u && ((0 < (n = t.left - e.collisionPosition.marginLeft + c + d + p - a) || u > x(n)) && (t.left += c + d + p))
                }, top: function (t, e) {
                    var i, n, s = e.within, o = s.offset.top + s.scrollTop, r = s.height,
                        a = s.isWindow ? s.scrollTop : s.offset.top, l = t.top - e.collisionPosition.marginTop,
                        h = l - a, u = l + e.collisionHeight - r - a,
                        c = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        d = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        p = -2 * e.offset[1];
                    h < 0 ? ((n = t.top + c + d + p + e.collisionHeight - r - o) < 0 || x(h) > n) && (t.top += c + d + p) : 0 < u && ((0 < (i = t.top - e.collisionPosition.marginTop + c + d + p - a) || u > x(i)) && (t.top += c + d + p))
                }
            }, flipfit: {
                left: function () {
                    k.ui.position.flip.left.apply(this, arguments), k.ui.position.fit.left.apply(this, arguments)
                }, top: function () {
                    k.ui.position.flip.top.apply(this, arguments), k.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }(), k.ui.position, k.extend(k.expr[":"], {
        data: k.expr.createPseudo ? k.expr.createPseudo(function (e) {
            return function (t) {
                return !!k.data(t, e)
            }
        }) : function (t, e, i) {
            return !!k.data(t, i[3])
        }
    }), k.fn.extend({
        disableSelection: (n = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function () {
            return this.on(n + ".ui-disableSelection", function (t) {
                t.preventDefault()
            })
        }), enableSelection: function () {
            return this.off(".ui-disableSelection")
        }
    });
    var l, h = "ui-effects-", d = "ui-effects-style", p = "ui-effects-animated", u = k;
    k.effects = {effect: {}}, function (u, c) {
        function d(t, e, i) {
            var n = m[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : t < 0 ? 0 : t > n.max ? n.max : t)
        }

        function a(r) {
            var a = f(), l = a._rgba = [];
            return r = r.toLowerCase(), v(t, function (t, e) {
                var i, n = e.re.exec(r), s = n && e.parse(n), o = e.space || "rgba";
                return s ? (i = a[o](s), a[g[o].cache] = i[g[o].cache], l = a._rgba = i._rgba, !1) : c
            }), l.length ? ("0,0,0,0" === l.join() && u.extend(l, h.transparent), a) : h[r]
        }

        function l(t, e, i) {
            return 6 * (i = (i + 1) % 1) < 1 ? t + 6 * (e - t) * i : 2 * i < 1 ? e : 3 * i < 2 ? t + 6 * (e - t) * (2 / 3 - i) : t
        }

        var h, p = /^([\-+])=\s*(\d+\.?\d*)/, t = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }
            }], f = u.Color = function (t, e, i, n) {
                return new u.Color.fn.parse(t, e, i, n)
            }, g = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, m = {byte: {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, r = f.support = {},
            e = u("<p>")[0], v = u.each;
        e.style.cssText = "background-color:rgba(1,1,1,.5)", r.rgba = -1 < e.style.backgroundColor.indexOf("rgba"), v(g, function (t, e) {
            e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
        }), f.fn = u.extend(f.prototype, {
            parse: function (s, t, e, i) {
                if (s === c) return this._rgba = [null, null, null, null], this;
                (s.jquery || s.nodeType) && (s = u(s).css(t), t = c);
                var o = this, n = u.type(s), r = this._rgba = [];
                return t !== c && (s = [s, t, e, i], n = "array"), "string" === n ? this.parse(a(s) || h._default) : "array" === n ? (v(g.rgba.props, function (t, e) {
                    r[e.idx] = d(s[e.idx], e)
                }), this) : "object" === n ? (v(g, s instanceof f ? function (t, e) {
                    s[e.cache] && (o[e.cache] = s[e.cache].slice())
                } : function (t, i) {
                    var n = i.cache;
                    v(i.props, function (t, e) {
                        if (!o[n] && i.to) {
                            if ("alpha" === t || null == s[t]) return;
                            o[n] = i.to(o._rgba)
                        }
                        o[n][e.idx] = d(s[t], e, !0)
                    }), o[n] && u.inArray(null, o[n].slice(0, 3)) < 0 && (o[n][3] = 1, i.from && (o._rgba = i.from(o[n])))
                }), this) : c
            }, is: function (t) {
                var s = f(t), o = !0, r = this;
                return v(g, function (t, e) {
                    var i, n = s[e.cache];
                    return n && (i = r[e.cache] || e.to && e.to(r._rgba) || [], v(e.props, function (t, e) {
                        return null != n[e.idx] ? o = n[e.idx] === i[e.idx] : c
                    })), o
                }), o
            }, _space: function () {
                var i = [], n = this;
                return v(g, function (t, e) {
                    n[e.cache] && i.push(t)
                }), i.pop()
            }, transition: function (t, r) {
                var a = f(t), e = a._space(), i = g[e], n = 0 === this.alpha() ? f("transparent") : this,
                    l = n[i.cache] || i.to(n._rgba), h = l.slice();
                return a = a[i.cache], v(i.props, function (t, e) {
                    var i = e.idx, n = l[i], s = a[i], o = m[e.type] || {};
                    null !== s && (null === n ? h[i] = s : (o.mod && (s - n > o.mod / 2 ? n += o.mod : n - s > o.mod / 2 && (n -= o.mod)), h[i] = d((s - n) * r + n, e)))
                }), this[e](h)
            }, blend: function (t) {
                if (1 === this._rgba[3]) return this;
                var e = this._rgba.slice(), i = e.pop(), n = f(t)._rgba;
                return f(u.map(e, function (t, e) {
                    return (1 - i) * n[e] + i * t
                }))
            }, toRgbaString: function () {
                var t = "rgba(", e = u.map(this._rgba, function (t, e) {
                    return null == t ? 2 < e ? 1 : 0 : t
                });
                return 1 === e[3] && (e.pop(), t = "rgb("), t + e.join() + ")"
            }, toHslaString: function () {
                var t = "hsla(", e = u.map(this.hsla(), function (t, e) {
                    return null == t && (t = 2 < e ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
                });
                return 1 === e[3] && (e.pop(), t = "hsl("), t + e.join() + ")"
            }, toHexString: function (t) {
                var e = this._rgba.slice(), i = e.pop();
                return t && e.push(~~(255 * i)), "#" + u.map(e, function (t) {
                    return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), f.fn.parse.prototype = f.fn, g.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e, i, n = t[0] / 255, s = t[1] / 255, o = t[2] / 255, r = t[3], a = Math.max(n, s, o),
                l = Math.min(n, s, o), h = a - l, u = a + l, c = .5 * u;
            return e = l === a ? 0 : n === a ? 60 * (s - o) / h + 360 : s === a ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : c <= .5 ? h / u : h / (2 - u), [Math.round(e) % 360, i, c, null == r ? 1 : r]
        }, g.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e = t[0] / 360, i = t[1], n = t[2], s = t[3], o = n <= .5 ? n * (1 + i) : n + i - n * i, r = 2 * n - o;
            return [Math.round(255 * l(r, o, e + 1 / 3)), Math.round(255 * l(r, o, e)), Math.round(255 * l(r, o, e - 1 / 3)), s]
        }, v(g, function (l, t) {
            var i = t.props, r = t.cache, a = t.to, h = t.from;
            f.fn[l] = function (t) {
                if (a && !this[r] && (this[r] = a(this._rgba)), t === c) return this[r].slice();
                var e, n = u.type(t), s = "array" === n || "object" === n ? t : arguments, o = this[r].slice();
                return v(i, function (t, e) {
                    var i = s["object" === n ? t : e.idx];
                    null == i && (i = o[e.idx]), o[e.idx] = d(i, e)
                }), h ? ((e = f(h(o)))[r] = o, e) : f(o)
            }, v(i, function (r, a) {
                f.fn[r] || (f.fn[r] = function (t) {
                    var e, i = u.type(t), n = "alpha" === r ? this._hsla ? "hsla" : "rgba" : l, s = this[n](),
                        o = s[a.idx];
                    return "undefined" === i ? o : ("function" === i && (t = t.call(this, o), i = u.type(t)), null == t && a.empty ? this : ("string" === i && ((e = p.exec(t)) && (t = o + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1))), s[a.idx] = t, this[n](s)))
                })
            })
        }), f.hook = function (t) {
            var e = t.split(" ");
            v(e, function (t, o) {
                u.cssHooks[o] = {
                    set: function (t, e) {
                        var i, n, s = "";
                        if ("transparent" !== e && ("string" !== u.type(e) || (i = a(e)))) {
                            if (e = f(i || e), !r.rgba && 1 !== e._rgba[3]) {
                                for (n = "backgroundColor" === o ? t.parentNode : t; ("" === s || "transparent" === s) && n && n.style;) try {
                                    s = u.css(n, "backgroundColor"), n = n.parentNode
                                } catch (t) {
                                }
                                e = e.blend(s && "transparent" !== s ? s : "_default")
                            }
                            e = e.toRgbaString()
                        }
                        try {
                            t.style[o] = e
                        } catch (t) {
                        }
                    }
                }, u.fx.step[o] = function (t) {
                    t.colorInit || (t.start = f(t.elem, o), t.end = f(t.end), t.colorInit = !0), u.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }, f.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), u.cssHooks.borderColor = {
            expand: function (i) {
                var n = {};
                return v(["Top", "Right", "Bottom", "Left"], function (t, e) {
                    n["border" + e + "Color"] = i
                }), n
            }
        }, h = u.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(u), function () {
        function r(t) {
            var e, i,
                n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                s = {};
            if (n && n.length && n[0] && n[n[0]]) for (i = n.length; i--;) "string" == typeof n[e = n[i]] && (s[k.camelCase(e)] = n[e]); else for (e in n) "string" == typeof n[e] && (s[e] = n[e]);
            return s
        }

        var o, s, a, l = ["add", "remove", "toggle"], h = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        k.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, e) {
            k.fx.step[e] = function (t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (u.style(t.elem, e, t.end), t.setAttr = !0)
            }
        }), k.fn.addBack || (k.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), k.effects.animateClass = function (s, t, e, i) {
            var o = k.speed(t, e, i);
            return this.queue(function () {
                var t, i = k(this), e = i.attr("class") || "", n = o.children ? i.find("*").addBack() : i;
                n = n.map(function () {
                    return {el: k(this), start: r(this)}
                }), (t = function () {
                    k.each(l, function (t, e) {
                        s[e] && i[e + "Class"](s[e])
                    })
                })(), n = n.map(function () {
                    return this.end = r(this.el[0]), this.diff = function (t, e) {
                        var i, n, s = {};
                        for (i in e) n = e[i], t[i] !== n && (h[i] || (k.fx.step[i] || !isNaN(parseFloat(n))) && (s[i] = n));
                        return s
                    }(this.start, this.end), this
                }), i.attr("class", e), n = n.map(function () {
                    var t = this, e = k.Deferred(), i = k.extend({}, o, {
                        queue: !1, complete: function () {
                            e.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, i), e.promise()
                }), k.when.apply(k, n.get()).done(function () {
                    t(), k.each(arguments, function () {
                        var e = this.el;
                        k.each(this.diff, function (t) {
                            e.css(t, "")
                        })
                    }), o.complete.call(i[0])
                })
            })
        }, k.fn.extend({
            addClass: (a = k.fn.addClass, function (t, e, i, n) {
                return e ? k.effects.animateClass.call(this, {add: t}, e, i, n) : a.apply(this, arguments)
            }), removeClass: (s = k.fn.removeClass, function (t, e, i, n) {
                return 1 < arguments.length ? k.effects.animateClass.call(this, {remove: t}, e, i, n) : s.apply(this, arguments)
            }), toggleClass: (o = k.fn.toggleClass, function (t, e, i, n, s) {
                return "boolean" == typeof e || void 0 === e ? i ? k.effects.animateClass.call(this, e ? {add: t} : {remove: t}, i, n, s) : o.apply(this, arguments) : k.effects.animateClass.call(this, {toggle: t}, e, i, n)
            }), switchClass: function (t, e, i, n, s) {
                return k.effects.animateClass.call(this, {add: e, remove: t}, i, n, s)
            }
        })
    }(), function () {
        function u(t, e, i, n) {
            return k.isPlainObject(t) && (t = (e = t).effect), t = {effect: t}, null == e && (e = {}), k.isFunction(e) && (n = e, i = null, e = {}), ("number" == typeof e || k.fx.speeds[e]) && (n = i, i = e, e = {}), k.isFunction(i) && (n = i, i = null), e && k.extend(t, e), i = i || e.duration, t.duration = k.fx.off ? 0 : "number" == typeof i ? i : i in k.fx.speeds ? k.fx.speeds[i] : k.fx.speeds._default, t.complete = n || e.complete, t
        }

        function i(t) {
            return !(t && "number" != typeof t && !k.fx.speeds[t]) || ("string" == typeof t && !k.effects.effect[t] || (!!k.isFunction(t) || "object" == typeof t && !t.effect))
        }

        function e(t, e) {
            var i = e.outerWidth(), n = e.outerHeight(),
                s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, n, 0];
            return {
                top: parseFloat(s[1]) || 0,
                right: "auto" === s[2] ? i : parseFloat(s[2]),
                bottom: "auto" === s[3] ? n : parseFloat(s[3]),
                left: parseFloat(s[4]) || 0
            }
        }

        var n, s, o, r;
        k.expr && k.expr.filters && k.expr.filters.animated && (k.expr.filters.animated = (r = k.expr.filters.animated, function (t) {
            return !!k(t).data(p) || r(t)
        })), !1 !== k.uiBackCompat && k.extend(k.effects, {
            save: function (t, e) {
                for (var i = 0, n = e.length; i < n; i++) null !== e[i] && t.data(h + e[i], t[0].style[e[i]])
            }, restore: function (t, e) {
                for (var i, n = 0, s = e.length; n < s; n++) null !== e[n] && (i = t.data(h + e[n]), t.css(e[n], i))
            }, setMode: function (t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
            }, createWrapper: function (i) {
                if (i.parent().is(".ui-effects-wrapper")) return i.parent();
                var n = {width: i.outerWidth(!0), height: i.outerHeight(!0), float: i.css("float")},
                    t = k("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), e = {width: i.width(), height: i.height()}, s = document.activeElement;
                try {
                    s.id
                } catch (t) {
                    s = document.body
                }
                return i.wrap(t), (i[0] === s || k.contains(i[0], s)) && k(s).trigger("focus"), t = i.parent(), "static" === i.css("position") ? (t.css({position: "relative"}), i.css({position: "relative"})) : (k.extend(n, {
                    position: i.css("position"),
                    zIndex: i.css("z-index")
                }), k.each(["top", "left", "bottom", "right"], function (t, e) {
                    n[e] = i.css(e), isNaN(parseInt(n[e], 10)) && (n[e] = "auto")
                }), i.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), i.css(e), t.css(n).show()
            }, removeWrapper: function (t) {
                var e = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === e || k.contains(t[0], e)) && k(e).trigger("focus")), t
            }
        }), k.extend(k.effects, {
            version: "1.12.1", define: function (t, e, i) {
                return i || (i = e, e = "effect"), k.effects.effect[t] = i, k.effects.effect[t].mode = e, i
            }, scaledDimensions: function (t, e, i) {
                if (0 === e) return {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
                var n = "horizontal" !== i ? (e || 100) / 100 : 1, s = "vertical" !== i ? (e || 100) / 100 : 1;
                return {
                    height: t.height() * s,
                    width: t.width() * n,
                    outerHeight: t.outerHeight() * s,
                    outerWidth: t.outerWidth() * n
                }
            }, clipToBox: function (t) {
                return {
                    width: t.clip.right - t.clip.left,
                    height: t.clip.bottom - t.clip.top,
                    left: t.clip.left,
                    top: t.clip.top
                }
            }, unshift: function (t, e, i) {
                var n = t.queue();
                1 < e && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue()
            }, saveStyle: function (t) {
                t.data(d, t[0].style.cssText)
            }, restoreStyle: function (t) {
                t[0].style.cssText = t.data(d) || "", t.removeData(d)
            }, mode: function (t, e) {
                var i = t.is(":hidden");
                return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
            }, getBaseline: function (t, e) {
                var i, n;
                switch (t[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                }
                switch (t[1]) {
                    case"left":
                        n = 0;
                        break;
                    case"center":
                        n = .5;
                        break;
                    case"right":
                        n = 1;
                        break;
                    default:
                        n = t[1] / e.width
                }
                return {x: n, y: i}
            }, createPlaceholder: function (t) {
                var e, i = t.css("position"), n = t.position();
                return t.css({
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(i) && (i = "absolute", e = k("<" + t[0].nodeName + ">").insertAfter(t).css({
                    display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight"),
                    float: t.css("float")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(h + "placeholder", e)), t.css({
                    position: i,
                    left: n.left,
                    top: n.top
                }), e
            }, removePlaceholder: function (t) {
                var e = h + "placeholder", i = t.data(e);
                i && (i.remove(), t.removeData(e))
            }, cleanUp: function (t) {
                k.effects.restoreStyle(t), k.effects.removePlaceholder(t)
            }, setTransition: function (n, t, s, o) {
                return o = o || {}, k.each(t, function (t, e) {
                    var i = n.cssUnit(e);
                    0 < i[0] && (o[e] = i[0] * s + i[1])
                }), o
            }
        }), k.fn.extend({
            effect: function () {
                function t(t) {
                    function e() {
                        k.isFunction(r) && r.call(i[0]), k.isFunction(t) && t()
                    }

                    var i = k(this);
                    n.mode = l.shift(), !1 === k.uiBackCompat || o ? "none" === n.mode ? (i[a](), e()) : s.call(i[0], n, function () {
                        i.removeData(p), k.effects.cleanUp(i), "hide" === n.mode && i.hide(), e()
                    }) : (i.is(":hidden") ? "hide" === a : "show" === a) ? (i[a](), e()) : s.call(i[0], n, e)
                }

                var n = u.apply(this, arguments), s = k.effects.effect[n.effect], o = s.mode, e = n.queue,
                    i = e || "fx", r = n.complete, a = n.mode, l = [], h = function (t) {
                        var e = k(this), i = k.effects.mode(e, a) || o;
                        e.data(p, !0), l.push(i), o && ("show" === i || i === o && "hide" === i) && e.show(), o && "none" === i || k.effects.saveStyle(e), k.isFunction(t) && t()
                    };
                return k.fx.off || !s ? a ? this[a](n.duration, r) : this.each(function () {
                    r && r.call(this)
                }) : !1 === e ? this.each(h).each(t) : this.queue(i, h).queue(i, t)
            }, show: (o = k.fn.show, function (t) {
                if (i(t)) return o.apply(this, arguments);
                var e = u.apply(this, arguments);
                return e.mode = "show", this.effect.call(this, e)
            }), hide: (s = k.fn.hide, function (t) {
                if (i(t)) return s.apply(this, arguments);
                var e = u.apply(this, arguments);
                return e.mode = "hide", this.effect.call(this, e)
            }), toggle: (n = k.fn.toggle, function (t) {
                if (i(t) || "boolean" == typeof t) return n.apply(this, arguments);
                var e = u.apply(this, arguments);
                return e.mode = "toggle", this.effect.call(this, e)
            }), cssUnit: function (t) {
                var i = this.css(t), n = [];
                return k.each(["em", "px", "%", "pt"], function (t, e) {
                    0 < i.indexOf(e) && (n = [parseFloat(i), e])
                }), n
            }, cssClip: function (t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : e(this.css("clip"), this)
            }, transfer: function (t, e) {
                var i = k(this), n = k(t.to), s = "fixed" === n.css("position"), o = k("body"),
                    r = s ? o.scrollTop() : 0, a = s ? o.scrollLeft() : 0, l = n.offset(),
                    h = {top: l.top - r, left: l.left - a, height: n.innerHeight(), width: n.innerWidth()},
                    u = i.offset(),
                    c = k("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
                        top: u.top - r,
                        left: u.left - a,
                        height: i.innerHeight(),
                        width: i.innerWidth(),
                        position: s ? "fixed" : "absolute"
                    }).animate(h, t.duration, t.easing, function () {
                        c.remove(), k.isFunction(e) && e()
                    })
            }
        }), k.fx.step.clip = function (t) {
            t.clipInit || (t.start = k(t.elem).cssClip(), "string" == typeof t.end && (t.end = e(t.end, t.elem)), t.clipInit = !0), k(t.elem).cssClip({
                top: t.pos * (t.end.top - t.start.top) + t.start.top,
                right: t.pos * (t.end.right - t.start.right) + t.start.right,
                bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                left: t.pos * (t.end.left - t.start.left) + t.start.left
            })
        }
    }(), l = {}, k.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t) {
        l[t] = function (t) {
            return Math.pow(t, e + 2)
        }
    }), k.extend(l, {
        Sine: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, Circ: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        }, Elastic: function (t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
        }, Back: function (t) {
            return t * t * (3 * t - 2)
        }, Bounce: function (t) {
            for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;) ;
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }
    }), k.each(l, function (t, e) {
        k.easing["easeIn" + t] = e, k.easing["easeOut" + t] = function (t) {
            return 1 - e(1 - t)
        }, k.easing["easeInOut" + t] = function (t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
        }
    });
    var f, g;
    k.effects;
    k.effects.define("blind", "hide", function (t, e) {
        var i = {
                up: ["bottom", "top"],
                vertical: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                horizontal: ["right", "left"],
                right: ["left", "right"]
            }, n = k(this), s = t.direction || "up", o = n.cssClip(), r = {clip: k.extend({}, o)},
            a = k.effects.createPlaceholder(n);
        r.clip[i[s][0]] = r.clip[i[s][1]], "show" === t.mode && (n.cssClip(r.clip), a && a.css(k.effects.clipToBox(r)), r.clip = o), a && a.animate(k.effects.clipToBox(r), t.duration, t.easing), n.animate(r, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }), k.effects.define("bounce", function (t, e) {
        var i, n, s, o = k(this), r = t.mode, a = "hide" === r, l = "show" === r, h = t.direction || "up",
            u = t.distance, c = t.times || 5, d = 2 * c + (l || a ? 1 : 0), p = t.duration / d, f = t.easing,
            g = "up" === h || "down" === h ? "top" : "left", m = "up" === h || "left" === h, v = 0,
            y = o.queue().length;
        for (k.effects.createPlaceholder(o), s = o.css(g), u || (u = o["top" === g ? "outerHeight" : "outerWidth"]() / 3), l && ((n = {opacity: 1})[g] = s, o.css("opacity", 0).css(g, m ? 2 * -u : 2 * u).animate(n, p, f)), a && (u /= Math.pow(2, c - 1)), (n = {})[g] = s; v < c; v++) (i = {})[g] = (m ? "-=" : "+=") + u, o.animate(i, p, f).animate(n, p, f), u = a ? 2 * u : u / 2;
        a && ((i = {opacity: 0})[g] = (m ? "-=" : "+=") + u, o.animate(i, p, f)), o.queue(e), k.effects.unshift(o, y, d + 1)
    }), k.effects.define("clip", "hide", function (t, e) {
        var i, n = {}, s = k(this), o = t.direction || "vertical", r = "both" === o, a = r || "horizontal" === o,
            l = r || "vertical" === o;
        i = s.cssClip(), n.clip = {
            top: l ? (i.bottom - i.top) / 2 : i.top,
            right: a ? (i.right - i.left) / 2 : i.right,
            bottom: l ? (i.bottom - i.top) / 2 : i.bottom,
            left: a ? (i.right - i.left) / 2 : i.left
        }, k.effects.createPlaceholder(s), "show" === t.mode && (s.cssClip(n.clip), n.clip = i), s.animate(n, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }), k.effects.define("drop", "hide", function (t, e) {
        var i, n = k(this), s = "show" === t.mode, o = t.direction || "left",
            r = "up" === o || "down" === o ? "top" : "left", a = "up" === o || "left" === o ? "-=" : "+=",
            l = "+=" === a ? "-=" : "+=", h = {opacity: 0};
        k.effects.createPlaceholder(n), i = t.distance || n["top" === r ? "outerHeight" : "outerWidth"](!0) / 2, h[r] = a + i, s && (n.css(h), h[r] = l + i, h.opacity = 1), n.animate(h, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }), k.effects.define("explode", "hide", function (t, e) {
        function i() {
            m.push(this), m.length === h * u && (c.css({visibility: "visible"}), k(m).remove(), e())
        }

        var n, s, o, r, a, l, h = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, u = h, c = k(this),
            d = "show" === t.mode, p = c.show().css("visibility", "hidden").offset(), f = Math.ceil(c.outerWidth() / u),
            g = Math.ceil(c.outerHeight() / h), m = [];
        for (n = 0; n < h; n++) for (r = p.top + n * g, l = n - (h - 1) / 2, s = 0; s < u; s++) o = p.left + s * f, a = s - (u - 1) / 2, c.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -s * f,
            top: -n * g
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: f,
            height: g,
            left: o + (d ? a * f : 0),
            top: r + (d ? l * g : 0),
            opacity: d ? 0 : 1
        }).animate({
            left: o + (d ? 0 : a * f),
            top: r + (d ? 0 : l * g),
            opacity: d ? 1 : 0
        }, t.duration || 500, t.easing, i)
    }), k.effects.define("fade", "toggle", function (t, e) {
        var i = "show" === t.mode;
        k(this).css("opacity", i ? 0 : 1).animate({opacity: i ? 1 : 0}, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }), k.effects.define("fold", "hide", function (e, t) {
        var i = k(this), n = e.mode, s = "show" === n, o = "hide" === n, r = e.size || 15, a = /([0-9]+)%/.exec(r),
            l = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"], h = e.duration / 2,
            u = k.effects.createPlaceholder(i), c = i.cssClip(), d = {clip: k.extend({}, c)},
            p = {clip: k.extend({}, c)}, f = [c[l[0]], c[l[1]]], g = i.queue().length;
        a && (r = parseInt(a[1], 10) / 100 * f[o ? 0 : 1]), d.clip[l[0]] = r, p.clip[l[0]] = r, p.clip[l[1]] = 0, s && (i.cssClip(p.clip), u && u.css(k.effects.clipToBox(p)), p.clip = c), i.queue(function (t) {
            u && u.animate(k.effects.clipToBox(d), h, e.easing).animate(k.effects.clipToBox(p), h, e.easing), t()
        }).animate(d, h, e.easing).animate(p, h, e.easing).queue(t), k.effects.unshift(i, g, 4)
    }), k.effects.define("highlight", "show", function (t, e) {
        var i = k(this), n = {backgroundColor: i.css("backgroundColor")};
        "hide" === t.mode && (n.opacity = 0), k.effects.saveStyle(i), i.css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(n, {queue: !1, duration: t.duration, easing: t.easing, complete: e})
    }), k.effects.define("size", function (s, e) {
        var t, o, i, n = k(this), r = ["fontSize"],
            a = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], h = s.mode, u = "effect" !== h,
            c = s.scale || "both", d = s.origin || ["middle", "center"], p = n.css("position"), f = n.position(),
            g = k.effects.scaledDimensions(n), m = s.from || g, v = s.to || k.effects.scaledDimensions(n, 0);
        k.effects.createPlaceholder(n), "show" === h && (i = m, m = v, v = i), o = {
            from: {
                y: m.height / g.height,
                x: m.width / g.width
            }, to: {y: v.height / g.height, x: v.width / g.width}
        }, ("box" === c || "both" === c) && (o.from.y !== o.to.y && (m = k.effects.setTransition(n, a, o.from.y, m), v = k.effects.setTransition(n, a, o.to.y, v)), o.from.x !== o.to.x && (m = k.effects.setTransition(n, l, o.from.x, m), v = k.effects.setTransition(n, l, o.to.x, v))), ("content" === c || "both" === c) && o.from.y !== o.to.y && (m = k.effects.setTransition(n, r, o.from.y, m), v = k.effects.setTransition(n, r, o.to.y, v)), d && (t = k.effects.getBaseline(d, g), m.top = (g.outerHeight - m.outerHeight) * t.y + f.top, m.left = (g.outerWidth - m.outerWidth) * t.x + f.left, v.top = (g.outerHeight - v.outerHeight) * t.y + f.top, v.left = (g.outerWidth - v.outerWidth) * t.x + f.left), n.css(m), ("content" === c || "both" === c) && (a = a.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), n.find("*[width]").each(function () {
            var t = k(this), e = k.effects.scaledDimensions(t), i = {
                height: e.height * o.from.y,
                width: e.width * o.from.x,
                outerHeight: e.outerHeight * o.from.y,
                outerWidth: e.outerWidth * o.from.x
            }, n = {
                height: e.height * o.to.y,
                width: e.width * o.to.x,
                outerHeight: e.height * o.to.y,
                outerWidth: e.width * o.to.x
            };
            o.from.y !== o.to.y && (i = k.effects.setTransition(t, a, o.from.y, i), n = k.effects.setTransition(t, a, o.to.y, n)), o.from.x !== o.to.x && (i = k.effects.setTransition(t, l, o.from.x, i), n = k.effects.setTransition(t, l, o.to.x, n)), u && k.effects.saveStyle(t), t.css(i), t.animate(n, s.duration, s.easing, function () {
                u && k.effects.restoreStyle(t)
            })
        })), n.animate(v, {
            queue: !1, duration: s.duration, easing: s.easing, complete: function () {
                var t = n.offset();
                0 === v.opacity && n.css("opacity", m.opacity), u || (n.css("position", "static" === p ? "relative" : p).offset(t), k.effects.saveStyle(n)), e()
            }
        })
    }), k.effects.define("scale", function (t, e) {
        var i = k(this), n = t.mode,
            s = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
            o = k.extend(!0, {
                from: k.effects.scaledDimensions(i),
                to: k.effects.scaledDimensions(i, s, t.direction || "both"),
                origin: t.origin || ["middle", "center"]
            }, t);
        t.fade && (o.from.opacity = 1, o.to.opacity = 0), k.effects.effect.size.call(this, o, e)
    }), k.effects.define("puff", "hide", function (t, e) {
        var i = k.extend(!0, {}, t, {fade: !0, percent: parseInt(t.percent, 10) || 150});
        k.effects.effect.scale.call(this, i, e)
    }), k.effects.define("pulsate", "show", function (t, e) {
        var i = k(this), n = t.mode, s = "show" === n, o = s || "hide" === n, r = 2 * (t.times || 5) + (o ? 1 : 0),
            a = t.duration / r, l = 0, h = 1, u = i.queue().length;
        for ((s || !i.is(":visible")) && (i.css("opacity", 0).show(), l = 1); h < r; h++) i.animate({opacity: l}, a, t.easing), l = 1 - l;
        i.animate({opacity: l}, a, t.easing), i.queue(e), k.effects.unshift(i, u, r + 1)
    }), k.effects.define("shake", function (t, e) {
        var i = 1, n = k(this), s = t.direction || "left", o = t.distance || 20, r = t.times || 3, a = 2 * r + 1,
            l = Math.round(t.duration / a), h = "up" === s || "down" === s ? "top" : "left",
            u = "up" === s || "left" === s, c = {}, d = {}, p = {}, f = n.queue().length;
        for (k.effects.createPlaceholder(n), c[h] = (u ? "-=" : "+=") + o, d[h] = (u ? "+=" : "-=") + 2 * o, p[h] = (u ? "-=" : "+=") + 2 * o, n.animate(c, l, t.easing); i < r; i++) n.animate(d, l, t.easing).animate(p, l, t.easing);
        n.animate(d, l, t.easing).animate(c, l / 2, t.easing).queue(e), k.effects.unshift(n, f, a + 1)
    }), k.effects.define("slide", "show", function (t, e) {
        var i, n, s = k(this),
            o = {up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"]},
            r = t.mode, a = t.direction || "left", l = "up" === a || "down" === a ? "top" : "left",
            h = "up" === a || "left" === a, u = t.distance || s["top" === l ? "outerHeight" : "outerWidth"](!0), c = {};
        k.effects.createPlaceholder(s), i = s.cssClip(), n = s.position()[l], c[l] = (h ? -1 : 1) * u + n, c.clip = s.cssClip(), c.clip[o[a][1]] = c.clip[o[a][0]], "show" === r && (s.cssClip(c.clip), s.css(l, c[l]), c.clip = i, c[l] = n), s.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }), !1 !== k.uiBackCompat && k.effects.define("transfer", function (t, e) {
        k(this).transfer(t, e)
    }), k.ui.focusable = function (t, e) {
        var i, n, s, o, r, a = t.nodeName.toLowerCase();
        return "area" === a ? (n = (i = t.parentNode).name, !(!t.href || !n || "map" !== i.nodeName.toLowerCase()) && (0 < (s = k("img[usemap='#" + n + "']")).length && s.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(a) ? (o = !t.disabled) && ((r = k(t).closest("fieldset")[0]) && (o = !r.disabled)) : o = "a" === a && t.href || e, o && k(t).is(":visible") && function (t) {
            for (var e = t.css("visibility"); "inherit" === e;) e = (t = t.parent()).css("visibility");
            return "hidden" !== e
        }(k(t)))
    }, k.extend(k.expr[":"], {
        focusable: function (t) {
            return k.ui.focusable(t, null != k.attr(t, "tabindex"))
        }
    }), k.ui.focusable, k.fn.form = function () {
        return "string" == typeof this[0].form ? this.closest("form") : k(this[0].form)
    }, k.ui.formResetMixin = {
        _formResetHandler: function () {
            var e = k(this);
            setTimeout(function () {
                var t = e.data("ui-form-reset-instances");
                k.each(t, function () {
                    this.refresh()
                })
            })
        }, _bindFormResetHandler: function () {
            if (this.form = this.element.form(), this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
            }
        }, _unbindFormResetHandler: function () {
            if (this.form.length) {
                var t = this.form.data("ui-form-reset-instances");
                t.splice(k.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    }, "1.7" === k.fn.jquery.substring(0, 3) && (k.each(["Width", "Height"], function (t, i) {
        function n(t, e, i, n) {
            return k.each(s, function () {
                e -= parseFloat(k.css(t, "padding" + this)) || 0, i && (e -= parseFloat(k.css(t, "border" + this + "Width")) || 0), n && (e -= parseFloat(k.css(t, "margin" + this)) || 0)
            }), e
        }

        var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], o = i.toLowerCase(), r = {
            innerWidth: k.fn.innerWidth,
            innerHeight: k.fn.innerHeight,
            outerWidth: k.fn.outerWidth,
            outerHeight: k.fn.outerHeight
        };
        k.fn["inner" + i] = function (t) {
            return void 0 === t ? r["inner" + i].call(this) : this.each(function () {
                k(this).css(o, n(this, t) + "px")
            })
        }, k.fn["outer" + i] = function (t, e) {
            return "number" != typeof t ? r["outer" + i].call(this, t) : this.each(function () {
                k(this).css(o, n(this, t, !0, e) + "px")
            })
        }
    }), k.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), k.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, k.ui.escapeSelector = (g = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g, function (t) {
        return t.replace(g, "\\$1")
    }), k.fn.labels = function () {
        var t, e, i, n, s;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), (i = this.attr("id")) && (s = (t = this.eq(0).parents().last()).add(t.length ? t.siblings() : this.siblings()), e = "label[for='" + k.ui.escapeSelector(i) + "']", n = n.add(s.find(e).addBack(e))), this.pushStack(n))
    }, k.fn.scrollParent = function (t) {
        var e = this.css("position"), i = "absolute" === e, n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            s = this.parents().filter(function () {
                var t = k(this);
                return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
            }).eq(0);
        return "fixed" !== e && s.length ? s : k(this[0].ownerDocument || document)
    }, k.extend(k.expr[":"], {
        tabbable: function (t) {
            var e = k.attr(t, "tabindex"), i = null != e;
            return (!i || 0 <= e) && k.ui.focusable(t, i)
        }
    }), k.fn.extend({
        uniqueId: (f = 0, function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++f)
            })
        }), removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && k(this).removeAttr("id")
            })
        }
    }), k.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function () {
            var t = this.options;
            this.prevShow = this.prevHide = k(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), t.collapsible || !1 !== t.active && null != t.active || (t.active = 0), this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function () {
            return {header: this.active, panel: this.active.length ? this.active.next() : k()}
        },
        _createIcons: function () {
            var t, e, i = this.options.icons;
            i && (t = k("<span>"), this._addClass(t, "ui-accordion-header-icon", "ui-icon " + i.header), t.prependTo(this.headers), e = this.active.children(".ui-accordion-header-icon"), this._removeClass(e, i.header)._addClass(e, null, i.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function (t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void ("icons" === t && (this._destroyIcons(), e && this._createIcons())))
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
        },
        _keydown: function (t) {
            if (!t.altKey && !t.ctrlKey) {
                var e = k.ui.keyCode, i = this.headers.length, n = this.headers.index(t.target), s = !1;
                switch (t.keyCode) {
                    case e.RIGHT:
                    case e.DOWN:
                        s = this.headers[(n + 1) % i];
                        break;
                    case e.LEFT:
                    case e.UP:
                        s = this.headers[(n - 1 + i) % i];
                        break;
                    case e.SPACE:
                    case e.ENTER:
                        this._eventHandler(t);
                        break;
                    case e.HOME:
                        s = this.headers[0];
                        break;
                    case e.END:
                        s = this.headers[i - 1]
                }
                s && (k(t.target).attr("tabIndex", -1), k(s).attr("tabIndex", 0), k(s).trigger("focus"), t.preventDefault())
            }
        },
        _panelKeyDown: function (t) {
            t.keyCode === k.ui.keyCode.UP && t.ctrlKey && k(t.currentTarget).prev().trigger("focus")
        },
        refresh: function () {
            var t = this.options;
            this._processPanels(), !1 === t.active && !0 === t.collapsible || !this.headers.length ? (t.active = !1, this.active = k()) : !1 === t.active ? this._activate(0) : this.active.length && !k.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = k()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function () {
            var t = this.headers, e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
        },
        _refresh: function () {
            var i, t = this.options, e = t.heightStyle, n = this.element.parent();
            this.active = this._findActive(t.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
                var t = k(this), e = t.uniqueId().attr("id"), i = t.next(), n = i.uniqueId().attr("id");
                t.attr("aria-controls", n), i.attr("aria-labelledby", e)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({"aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(t.event), "fill" === e ? (i = n.height(), this.element.siblings(":visible").each(function () {
                var t = k(this), e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
            }), this.headers.each(function () {
                i -= k(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                k(this).height(Math.max(0, i - k(this).innerHeight() + k(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.headers.next().each(function () {
                var t = k(this).is(":visible");
                t || k(this).show(), i = Math.max(i, k(this).css("height", "").height()), t || k(this).hide()
            }).height(i))
        },
        _activate: function (t) {
            var e = this._findActive(t)[0];
            e !== this.active[0] && (e = e || this.active[0], this._eventHandler({
                target: e,
                currentTarget: e,
                preventDefault: k.noop
            }))
        },
        _findActive: function (t) {
            return "number" == typeof t ? this.headers.eq(t) : k()
        },
        _setupEvents: function (t) {
            var i = {keydown: "_keydown"};
            t && k.each(t.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function (t) {
            var e, i, n = this.options, s = this.active, o = k(t.currentTarget), r = o[0] === s[0],
                a = r && n.collapsible, l = a ? k() : o.next(), h = s.next(),
                u = {oldHeader: s, oldPanel: h, newHeader: a ? k() : o, newPanel: l};
            t.preventDefault(), r && !n.collapsible || !1 === this._trigger("beforeActivate", t, u) || (n.active = !a && this.headers.index(o), this.active = r ? k() : o, this._toggle(u), this._removeClass(s, "ui-accordion-header-active", "ui-state-active"), n.icons && (e = s.children(".ui-accordion-header-icon"), this._removeClass(e, null, n.icons.activeHeader)._addClass(e, null, n.icons.header)), r || (this._removeClass(o, "ui-accordion-header-collapsed")._addClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.header)._addClass(i, null, n.icons.activeHeader)), this._addClass(o.next(), "ui-accordion-content-active")))
        },
        _toggle: function (t) {
            var e = t.newPanel, i = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = e, this.prevHide = i, this.options.animate ? this._animate(e, i, t) : (i.hide(), e.show(), this._toggleComplete(t)), i.attr({"aria-hidden": "true"}), i.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), e.length && i.length ? i.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : e.length && this.headers.filter(function () {
                return 0 === parseInt(k(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1), e.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function (t, i, e) {
            var n, s, o, r = this, a = 0, l = t.css("box-sizing"), h = t.length && (!i.length || t.index() < i.index()),
                u = this.options.animate || {}, c = h && u.down || u, d = function () {
                    r._toggleComplete(e)
                };
            return "number" == typeof c && (o = c), "string" == typeof c && (s = c), s = s || c.easing || u.easing, o = o || c.duration || u.duration, i.length ? t.length ? (n = t.show().outerHeight(), i.animate(this.hideProps, {
                duration: o,
                easing: s,
                step: function (t, e) {
                    e.now = Math.round(t)
                }
            }), void t.hide().animate(this.showProps, {
                duration: o, easing: s, complete: d, step: function (t, e) {
                    e.now = Math.round(t), "height" !== e.prop ? "content-box" === l && (a += e.now) : "content" !== r.options.heightStyle && (e.now = Math.round(n - i.outerHeight() - a), a = 0)
                }
            })) : i.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d)
        },
        _toggleComplete: function (t) {
            var e = t.oldPanel, i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    }), k.ui.safeActiveElement = function (e) {
        var i;
        try {
            i = e.activeElement
        } catch (t) {
            i = e.body
        }
        return i || (i = e.body), i.nodeName || (i = e.body), i
    }, k.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {submenu: "ui-icon-caret-1-e"},
            items: "> *",
            menus: "ul",
            position: {my: "left top", at: "right top"},
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function (t) {
                    t.preventDefault()
                }, "click .ui-menu-item": function (t) {
                    var e = k(t.target), i = k(k.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (t) {
                    if (!this.previousFilter) {
                        var e = k(t.target).closest(".ui-menu-item"), i = k(t.currentTarget);
                        e[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, i))
                    }
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                }, blur: function (t) {
                    this._delay(function () {
                        !k.contains(this.element[0], k.ui.safeActiveElement(this.document[0])) && this.collapseAll(t)
                    })
                }, keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), t.children().each(function () {
                var t = k(this);
                t.data("ui-menu-submenu-caret") && t.remove()
            })
        },
        _keydown: function (t) {
            var e, i, n, s, o = !0;
            switch (t.keyCode) {
                case k.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case k.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case k.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case k.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case k.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case k.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case k.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case k.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case k.ui.keyCode.ENTER:
                case k.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case k.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    o = !1, i = this.previousFilter || "", s = !1, n = 96 <= t.keyCode && t.keyCode <= 105 ? "" + (t.keyCode - 96) : String.fromCharCode(t.keyCode), clearTimeout(this.filterTimer), n === i ? s = !0 : n = i + n, e = this._filterMenuItems(n), (e = s && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e).length || (n = String.fromCharCode(t.keyCode), e = this._filterMenuItems(n)), e.length ? (this.focus(t, e), this.previousFilter = n, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            o && t.preventDefault()
        },
        _activate: function (t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function () {
            var t, e, i, n, s = this, o = this.options.icons.submenu, r = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), e = r.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var t = k(this), e = t.prev(), i = k("<span>").data("ui-menu-submenu-caret", !0);
                s._addClass(i, "ui-menu-icon", "ui-icon " + o), e.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", e.attr("id"))
            }), this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"), (t = r.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function () {
                var t = k(this);
                s._isDivider(t) && s._addClass(t, "ui-menu-divider", "ui-widget-content")
            }), n = (i = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(i, "ui-menu-item")._addClass(n, "ui-menu-item-wrapper"), t.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !k.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {menu: "menuitem", listbox: "option"}[this.options.role]
        },
        _setOption: function (t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        focus: function (t, e) {
            var i, n, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
        },
        _scrollIntoView: function (t) {
            var e, i, n, s, o, r;
            this._hasScroll() && (e = parseFloat(k.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(k.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - e - i, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), n < 0 ? this.activeMenu.scrollTop(s + n) : o < n + r && this.activeMenu.scrollTop(s + n - o + r))
        },
        blur: function (t, e) {
            e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {item: this.active}), this.active = null)
        },
        _startOpening: function (t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function (t) {
            var e = k.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
        },
        collapseAll: function (e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var t = i ? this.element : k(e && e.target).closest(this.element.find(".ui-menu"));
                t.length || (t = this.element), this._close(t), this.blur(e), this._removeClass(t.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = t
            }, this.delay)
        },
        _close: function (t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function (t) {
            return !k(t.target).closest(".ui-menu").length
        },
        _isDivider: function (t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function (t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function (t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function () {
                this.focus(t, e)
            }))
        },
        next: function (t) {
            this._move("next", "first", t)
        },
        previous: function (t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
        },
        nextPage: function (t) {
            var e, i, n;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return (e = k(this)).offset().top - i - n < 0
            }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(t)
        },
        previousPage: function (t) {
            var e, i, n;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return 0 < (e = k(this)).offset().top - i + n
            }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items).first()))) : void this.next(t)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (t) {
            this.active = this.active || k(t.target).closest(".ui-menu-item");
            var e = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e)
        },
        _filterMenuItems: function (t) {
            var e = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), i = RegExp("^" + e, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                return i.test(k.trim(k(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    }), k.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {my: "left top", at: "left bottom", collision: "none"},
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
            var i, n, s, t = this.element[0].nodeName.toLowerCase(), e = "textarea" === t, o = "input" === t;
            this.isMultiLine = e || !o && this._isContentEditable(this.element), this.valueMethod = this.element[e || o ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (t) {
                    if (this.element.prop("readOnly")) n = s = i = !0; else {
                        n = s = i = !1;
                        var e = k.ui.keyCode;
                        switch (t.keyCode) {
                            case e.PAGE_UP:
                                i = !0, this._move("previousPage", t);
                                break;
                            case e.PAGE_DOWN:
                                i = !0, this._move("nextPage", t);
                                break;
                            case e.UP:
                                i = !0, this._keyEvent("previous", t);
                                break;
                            case e.DOWN:
                                i = !0, this._keyEvent("next", t);
                                break;
                            case e.ENTER:
                                this.menu.active && (i = !0, t.preventDefault(), this.menu.select(t));
                                break;
                            case e.TAB:
                                this.menu.active && this.menu.select(t);
                                break;
                            case e.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(t), t.preventDefault());
                                break;
                            default:
                                n = !0, this._searchTimeout(t)
                        }
                    }
                }, keypress: function (t) {
                    if (i) return i = !1, void ((!this.isMultiLine || this.menu.element.is(":visible")) && t.preventDefault());
                    if (!n) {
                        var e = k.ui.keyCode;
                        switch (t.keyCode) {
                            case e.PAGE_UP:
                                this._move("previousPage", t);
                                break;
                            case e.PAGE_DOWN:
                                this._move("nextPage", t);
                                break;
                            case e.UP:
                                this._keyEvent("previous", t);
                                break;
                            case e.DOWN:
                                this._keyEvent("next", t)
                        }
                    }
                }, input: function (t) {
                    return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t)
                }, focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                }, blur: function (t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                }
            }), this._initSource(), this.menu = k("<ul>").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function (t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur, this.element[0] !== k.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                }, menufocus: function (t, e) {
                    var i, n;
                    return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function () {
                        k(t.target).trigger(t.originalEvent)
                    })) : (n = e.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {item: n}) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), void ((i = e.item.attr("aria-label") || n.value) && k.trim(i).length && (this.liveRegion.children().hide(), k("<div>").text(i).appendTo(this.liveRegion))))
                }, menuselect: function (t, e) {
                    var i = e.item.data("ui-autocomplete-item"), n = this.previous;
                    this.element[0] !== k.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function () {
                        this.previous = n, this.selectedItem = i
                    })), !1 !== this._trigger("select", t, {item: i}) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                }
            }), this.liveRegion = k("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function (t) {
            var e = this.menu.element[0];
            return t.target === this.element[0] || t.target === e || k.contains(e, t.target)
        },
        _closeOnClickOutside: function (t) {
            this._isEventTargetInWidget(t) || this.close()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? k(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
        },
        _initSource: function () {
            var i, n, s = this;
            k.isArray(this.options.source) ? (i = this.options.source, this.source = function (t, e) {
                e(k.ui.autocomplete.filter(i, t.term))
            }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function (t, e) {
                s.xhr && s.xhr.abort(), s.xhr = k.ajax({
                    url: n, data: t, dataType: "json", success: function (t) {
                        e(t)
                    }, error: function () {
                        e([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (n) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                var t = this.term === this._value(), e = this.menu.element.is(":visible"),
                    i = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
                (!t || t && !e && !i) && (this.selectedItem = null, this.search(null, n))
            }, this.options.delay)
        },
        search: function (t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
        },
        _search: function (t) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: t}, this._response())
        },
        _response: function () {
            var e = ++this.requestIndex;
            return k.proxy(function (t) {
                e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function (t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function (t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function (t) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function (t) {
            this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem})
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : k.map(t, function (t) {
                return "string" == typeof t ? {label: t, value: t} : k.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function (t) {
            var e = this.menu.element.empty();
            this._renderMenu(e, t), this.isNewMenu = !0, this.menu.refresh(), e.show(), this._resizeMenu(), e.position(k.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {mousedown: "_closeOnClickOutside"})
        },
        _resizeMenu: function () {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (i, t) {
            var n = this;
            k.each(t, function (t, e) {
                n._renderItemData(i, e)
            })
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function (t, e) {
            return k("<li>").append(k("<div>").text(e.label)).appendTo(t)
        },
        _move: function (t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        },
        _isContentEditable: function (t) {
            if (!t.length) return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
        }
    }), k.extend(k.ui.autocomplete, {
        escapeRegex: function (t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (t, e) {
            var i = RegExp(k.ui.autocomplete.escapeRegex(e), "i");
            return k.grep(t, function (t) {
                return i.test(t.label || t.value || t)
            })
        }
    }), k.widget("ui.autocomplete", k.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (t) {
                    return t + (1 < t ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), k("<div>").text(e).appendTo(this.liveRegion))
        }
    }), k.ui.autocomplete;
    var m, v, y = /ui-corner-([a-z]){2,6}/g;
    k.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function () {
            this._enhance()
        },
        _enhance: function () {
            this.element.attr("role", "toolbar"), this.refresh()
        },
        _destroy: function () {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function () {
            var r = this, a = [];
            k.each(this.options.items, function (s, t) {
                var e, o = {};
                return t ? "controlgroupLabel" === s ? ((e = r.element.find(t)).each(function () {
                    var t = k(this);
                    t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), r._addClass(e, null, "ui-widget ui-widget-content ui-state-default"), void (a = a.concat(e.get()))) : void (k.fn[s] && (o = r["_" + s + "Options"] ? r["_" + s + "Options"]("middle") : {classes: {}}, r.element.find(t).each(function () {
                    var t = k(this), e = t[s]("instance"), i = k.widget.extend({}, o);
                    if ("button" !== s || !t.parent(".ui-spinner").length) {
                        e || (e = t[s]()[s]("instance")), e && (i.classes = r._resolveClassesValues(i.classes, e)), t[s](i);
                        var n = t[s]("widget");
                        k.data(n[0], "ui-controlgroup-data", e || t[s]("instance")), a.push(n[0])
                    }
                }))) : void 0
            }), this.childWidgets = k(k.unique(a)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function (e) {
            this.childWidgets.each(function () {
                var t = k(this).data("ui-controlgroup-data");
                t && t[e] && t[e]()
            })
        },
        _updateCornerClass: function (t, e) {
            var i = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
        },
        _buildSimpleOptions: function (t, e) {
            var i = "vertical" === this.options.direction, n = {classes: {}};
            return n.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[t], n
        },
        _spinnerOptions: function (t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
        },
        _buttonOptions: function (t) {
            return this._buildSimpleOptions(t, "ui-button")
        },
        _checkboxradioOptions: function (t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function (t) {
            var e = "vertical" === this.options.direction;
            return {
                width: !!e && "auto",
                classes: {
                    middle: {"ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": ""},
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"}
                }[t]
            }
        },
        _resolveClassesValues: function (i, n) {
            var s = {};
            return k.each(i, function (t) {
                var e = n.options.classes[t] || "";
                e = k.trim(e.replace(y, "")), s[t] = (e + " " + i[t]).replace(/\s+/g, " ")
            }), s
        },
        _setOption: function (t, e) {
            return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
        },
        refresh: function () {
            var s, o = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), s = this.childWidgets, this.options.onlyVisible && (s = s.filter(":visible")), s.length && (k.each(["first", "last"], function (t, e) {
                var i = s[e]().data("ui-controlgroup-data");
                if (i && o["_" + i.widgetName + "Options"]) {
                    var n = o["_" + i.widgetName + "Options"](1 === s.length ? "only" : e);
                    n.classes = o._resolveClassesValues(n.classes, i), i.element[i.widgetName](n)
                } else o._updateCornerClass(s[e](), e)
            }), this._callChildMethod("refresh"))
        }
    }), k.widget("ui.checkboxradio", [k.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {"ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all"}
        },
        _getCreateOptions: function () {
            var t, e, i = this, n = this._super() || {};
            return this._readType(), e = this.element.labels(), this.label = k(e[e.length - 1]), this.label.length || k.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
                i.originalLabel += 3 === this.nodeType ? k(this).text() : this.outerHTML
            }), this.originalLabel && (n.label = this.originalLabel), null != (t = this.element[0].disabled) && (n.disabled = t), n
        },
        _create: function () {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function () {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function () {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function () {
            var t = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === t && /radio|checkbox/.test(this.type) || k.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
        },
        _enhance: function () {
            this._updateIcon(this.element[0].checked)
        },
        widget: function () {
            return this.label
        },
        _getRadioGroup: function () {
            var t = this.element[0].name, e = "input[name='" + k.ui.escapeSelector(t) + "']";
            return t ? (this.form.length ? k(this.form[0].elements).filter(e) : k(e).filter(function () {
                return 0 === k(this).form().length
            })).not(this.element) : k([])
        },
        _toggleClasses: function () {
            var t = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t), "radio" === this.type && this._getRadioGroup().each(function () {
                var t = k(this).checkboxradio("instance");
                t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function () {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
        },
        _setOption: function (t, e) {
            return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void (this.element[0].disabled = e)) : void this.refresh()) : void 0
        },
        _updateIcon: function (t) {
            var e = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = k("<span>"), this.iconSpace = k("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : e += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", e), t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function () {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
        },
        refresh: function () {
            var t = this.element[0].checked, e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({disabled: e})
        }
    }]), k.ui.checkboxradio, k.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {"ui-button": "ui-corner-all"},
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function () {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
        },
        _create: function () {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                keyup: function (t) {
                    t.keyCode === k.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function () {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
        },
        _updateTooltip: function () {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function (t, e) {
            var i = "iconPosition" !== t, n = i ? this.options.iconPosition : e, s = "top" === n || "bottom" === n;
            this.icon ? i && this._removeClass(this.icon, null, this.options.icon) : (this.icon = k("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), i && this._addClass(this.icon, null, e), this._attachIcon(n), s ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = k("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
        },
        _destroy: function () {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function (t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function (t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function (t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t)
        },
        _setOption: function (t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), (this.element[0].disabled = e) && this.element.blur())
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({disabled: t}), this._updateTooltip()
        }
    }), !1 !== k.uiBackCompat && (k.widget("ui.button", k.ui.button, {
        options: {
            text: !0,
            icons: {primary: null, secondary: null}
        }, _create: function () {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
        }, _setOption: function (t, e) {
            return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
        }
    }), k.fn.button = (m = k.fn.button, function () {
        return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? m.apply(this, arguments) : (k.ui.checkboxradio || k.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({icon: !1}) : this.checkboxradio.apply(this, arguments))
    }), k.fn.buttonset = function () {
        return k.ui.controlgroup || k.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {button: arguments[0].items}), this.controlgroup.apply(this, arguments))
    }), k.ui.button, k.extend(k.ui, {datepicker: {version: "1.12.1"}}), k.extend(t.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (t) {
            return c(this._defaults, t || {}), this
        },
        _attachDatepicker: function (t, e) {
            var i, n, s;
            n = "div" === (i = t.nodeName.toLowerCase()) || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), (s = this._newInst(k(t), n)).settings = k.extend({}, e || {}), "input" === i ? this._connectDatepicker(t, s) : n && this._inlineDatepicker(t, s)
        },
        _newInst: function (t, e) {
            return {
                id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: e,
                dpDiv: e ? i(k("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (t, e) {
            var i = k(t);
            e.append = k([]), e.trigger = k([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(e), k.data(t, "datepicker", e), e.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function (t, e) {
            var i, n, s, o = this._get(e, "appendText"), r = this._get(e, "isRTL");
            e.append && e.append.remove(), o && (e.append = k("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](e.append)), t.off("focus", this._showDatepicker), e.trigger && e.trigger.remove(), ("focus" === (i = this._get(e, "showOn")) || "both" === i) && t.on("focus", this._showDatepicker), ("button" === i || "both" === i) && (n = this._get(e, "buttonText"), s = this._get(e, "buttonImage"), e.trigger = k(this._get(e, "buttonImageOnly") ? k("<img/>").addClass(this._triggerClass).attr({
                src: s,
                alt: n,
                title: n
            }) : k("<button type='button'></button>").addClass(this._triggerClass).html(s ? k("<img/>").attr({
                src: s,
                alt: n,
                title: n
            }) : n)), t[r ? "before" : "after"](e.trigger), e.trigger.on("click", function () {
                return k.datepicker._datepickerShowing && k.datepicker._lastInput === t[0] ? k.datepicker._hideDatepicker() : (k.datepicker._datepickerShowing && k.datepicker._lastInput !== t[0] && k.datepicker._hideDatepicker(), k.datepicker._showDatepicker(t[0])), !1
            }))
        },
        _autoSize: function (t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, n, s, o = new Date(2009, 11, 20), r = this._get(t, "dateFormat");
                r.match(/[DM]/) && (e = function (t) {
                    for (s = n = i = 0; t.length > s; s++) t[s].length > i && (i = t[s].length, n = s);
                    return n
                }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function (t, e) {
            var i = k(t);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv), k.data(t, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (t, e, i, n, s) {
            var o, r, a, l, h, u = this._dialogInst;
            return u || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = k("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), k("body").append(this._dialogInput), (u = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, k.data(this._dialogInput[0], "datepicker", u)), c(u.settings, n || {}), e = e && e.constructor === Date ? this._formatDate(u, e) : e, this._dialogInput.val(e), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (r = document.documentElement.clientWidth, a = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [r / 2 - 100 + l, a / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), u.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), k.blockUI && k.blockUI(this.dpDiv), k.data(this._dialogInput[0], "datepicker", u), this
        },
        _destroyDatepicker: function (t) {
            var e, i = k(t), n = k.data(t, "datepicker");
            i.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), k.removeData(t, "datepicker"), "input" === e ? (n.append.remove(), n.trigger.remove(), i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === e || "span" === e) && i.removeClass(this.markerClassName).empty(), v === n && (v = null))
        },
        _enableDatepicker: function (e) {
            var t, i, n = k(e), s = k.data(e, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !1, s.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === t || "span" === t) && ((i = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = k.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function (e) {
            var t, i, n = k(e), s = k.data(e, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !0, s.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === t || "span" === t) && ((i = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = k.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function (t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return k.data(t, "datepicker")
            } catch (t) {
                throw"Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (t, e, i) {
            var n, s, o, r, a = this._getInst(t);
            return 2 === arguments.length && "string" == typeof e ? "defaults" === e ? k.extend({}, k.datepicker._defaults) : a ? "all" === e ? k.extend({}, a.settings) : this._get(a, e) : null : (n = e || {}, "string" == typeof e && ((n = {})[e] = i), void (a && (this._curInst === a && this._hideDatepicker(), s = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(a, "min"), r = this._getMinMaxDate(a, "max"), c(a.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (a.settings.minDate = this._formatDate(a, o)), null !== r && void 0 !== n.dateFormat && void 0 === n.maxDate && (a.settings.maxDate = this._formatDate(a, r)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(k(t), a), this._autoSize(a), this._setDate(a, s), this._updateAlternate(a), this._updateDatepicker(a))))
        },
        _changeDatepicker: function (t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function (t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function (t) {
            var e, i, n, s = k.datepicker._getInst(t.target), o = !0, r = s.dpDiv.is(".ui-datepicker-rtl");
            if (s._keyEvent = !0, k.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    k.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return (n = k("td." + k.datepicker._dayOverClass + ":not(." + k.datepicker._currentClass + ")", s.dpDiv))[0] && k.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, n[0]), (e = k.datepicker._get(s, "onSelect")) ? (i = k.datepicker._formatDate(s), e.apply(s.input ? s.input[0] : null, [i, s])) : k.datepicker._hideDatepicker(), !1;
                case 27:
                    k.datepicker._hideDatepicker();
                    break;
                case 33:
                    k.datepicker._adjustDate(t.target, t.ctrlKey ? -k.datepicker._get(s, "stepBigMonths") : -k.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 34:
                    k.datepicker._adjustDate(t.target, t.ctrlKey ? +k.datepicker._get(s, "stepBigMonths") : +k.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && k.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && k.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && k.datepicker._adjustDate(t.target, t.ctrlKey ? -k.datepicker._get(s, "stepBigMonths") : -k.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && k.datepicker._adjustDate(t.target, t.ctrlKey ? +k.datepicker._get(s, "stepBigMonths") : +k.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
            } else 36 === t.keyCode && t.ctrlKey ? k.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function (t) {
            var e, i, n = k.datepicker._getInst(t.target);
            return k.datepicker._get(n, "constrainInput") ? (e = k.datepicker._possibleChars(k.datepicker._get(n, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || i < " " || !e || -1 < e.indexOf(i)) : void 0
        },
        _doKeyUp: function (t) {
            var e = k.datepicker._getInst(t.target);
            if (e.input.val() !== e.lastVal) try {
                k.datepicker.parseDate(k.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, k.datepicker._getFormatConfig(e)) && (k.datepicker._setDateFromField(e), k.datepicker._updateAlternate(e), k.datepicker._updateDatepicker(e))
            } catch (t) {
            }
            return !0
        },
        _showDatepicker: function (t) {
            var e, i, n, s, o, r, a;
            ("input" !== (t = t.target || t).nodeName.toLowerCase() && (t = k("input", t.parentNode)[0]), k.datepicker._isDisabledDatepicker(t) || k.datepicker._lastInput === t) || (e = k.datepicker._getInst(t), k.datepicker._curInst && k.datepicker._curInst !== e && (k.datepicker._curInst.dpDiv.stop(!0, !0), e && k.datepicker._datepickerShowing && k.datepicker._hideDatepicker(k.datepicker._curInst.input[0])), !1 !== (n = (i = k.datepicker._get(e, "beforeShow")) ? i.apply(t, [t, e]) : {}) && (c(e.settings, n), e.lastVal = null, k.datepicker._lastInput = t, k.datepicker._setDateFromField(e), k.datepicker._inDialog && (t.value = ""), k.datepicker._pos || (k.datepicker._pos = k.datepicker._findPos(t), k.datepicker._pos[1] += t.offsetHeight), s = !1, k(t).parents().each(function () {
                return !(s |= "fixed" === k(this).css("position"))
            }), o = {
                left: k.datepicker._pos[0],
                top: k.datepicker._pos[1]
            }, k.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), k.datepicker._updateDatepicker(e), o = k.datepicker._checkOffset(e, o, s), e.dpDiv.css({
                position: k.datepicker._inDialog && k.blockUI ? "static" : s ? "fixed" : "absolute",
                display: "none",
                left: o.left + "px",
                top: o.top + "px"
            }), e.inline || (r = k.datepicker._get(e, "showAnim"), a = k.datepicker._get(e, "duration"), e.dpDiv.css("z-index", function (t) {
                for (var e, i; t.length && t[0] !== document;) {
                    if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    t = t.parent()
                }
                return 0
            }(k(t)) + 1), k.datepicker._datepickerShowing = !0, k.effects && k.effects.effect[r] ? e.dpDiv.show(r, k.datepicker._get(e, "showOptions"), a) : e.dpDiv[r || "show"](r ? a : null), k.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), k.datepicker._curInst = e)))
        },
        _updateDatepicker: function (t) {
            this.maxRows = 4, (v = t).dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var e, i = this._getNumberOfMonths(t), n = i[1], s = t.dpDiv.find("." + this._dayOverClass + " a");
            0 < s.length && o.apply(s.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < n && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === k.datepicker._curInst && k.datepicker._datepickerShowing && k.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (e = t.yearshtml, setTimeout(function () {
                e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), e = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function (t, e, i) {
            var n = t.dpDiv.outerWidth(), s = t.dpDiv.outerHeight(), o = t.input ? t.input.outerWidth() : 0,
                r = t.input ? t.input.outerHeight() : 0,
                a = document.documentElement.clientWidth + (i ? 0 : k(document).scrollLeft()),
                l = document.documentElement.clientHeight + (i ? 0 : k(document).scrollTop());
            return e.left -= this._get(t, "isRTL") ? n - o : 0, e.left -= i && e.left === t.input.offset().left ? k(document).scrollLeft() : 0, e.top -= i && e.top === t.input.offset().top + r ? k(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + n > a && n < a ? Math.abs(e.left + n - a) : 0), e.top -= Math.min(e.top, e.top + s > l && s < l ? Math.abs(s + r) : 0), e
        },
        _findPos: function (t) {
            for (var e, i = this._getInst(t), n = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || k.expr.filters.hidden(t));) t = t[n ? "previousSibling" : "nextSibling"];
            return [(e = k(t).offset()).left, e.top]
        },
        _hideDatepicker: function (t) {
            var e, i, n, s, o = this._curInst;
            !o || t && o !== k.data(t, "datepicker") || this._datepickerShowing && (e = this._get(o, "showAnim"), i = this._get(o, "duration"), n = function () {
                k.datepicker._tidyDialog(o)
            }, k.effects && (k.effects.effect[e] || k.effects[e]) ? o.dpDiv.hide(e, k.datepicker._get(o, "showOptions"), i, n) : o.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, n), e || n(), this._datepickerShowing = !1, (s = this._get(o, "onClose")) && s.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), k.blockUI && (k.unblockUI(), k("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (t) {
            if (k.datepicker._curInst) {
                var e = k(t.target), i = k.datepicker._getInst(e[0]);
                (e[0].id !== k.datepicker._mainDivId && 0 === e.parents("#" + k.datepicker._mainDivId).length && !e.hasClass(k.datepicker.markerClassName) && !e.closest("." + k.datepicker._triggerClass).length && k.datepicker._datepickerShowing && (!k.datepicker._inDialog || !k.blockUI) || e.hasClass(k.datepicker.markerClassName) && k.datepicker._curInst !== i) && k.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (t, e, i) {
            var n = k(t), s = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(s, e + ("M" === i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
        },
        _gotoToday: function (t) {
            var e, i = k(t), n = this._getInst(i[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (e = new Date, n.selectedDay = e.getDate(), n.drawMonth = n.selectedMonth = e.getMonth(), n.drawYear = n.selectedYear = e.getFullYear()), this._notifyChange(n), this._adjustDate(i)
        },
        _selectMonthYear: function (t, e, i) {
            var n = k(t), s = this._getInst(n[0]);
            s["selected" + ("M" === i ? "Month" : "Year")] = s["draw" + ("M" === i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(n)
        },
        _selectDay: function (t, e, i, n) {
            var s, o = k(t);
            k(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || ((s = this._getInst(o[0])).selectedDay = s.currentDay = k("a", n).html(), s.selectedMonth = s.currentMonth = e, s.selectedYear = s.currentYear = i, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
        },
        _clearDate: function (t) {
            var e = k(t);
            this._selectDate(e, "")
        },
        _selectDate: function (t, e) {
            var i, n = k(t), s = this._getInst(n[0]);
            e = null != e ? e : this._formatDate(s), s.input && s.input.val(e), this._updateAlternate(s), (i = this._get(s, "onSelect")) ? i.apply(s.input ? s.input[0] : null, [e, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function (t) {
            var e, i, n, s = this._get(t, "altField");
            s && (e = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), n = this.formatDate(e, i, this._getFormatConfig(t)), k(s).val(n))
        },
        noWeekends: function (t) {
            var e = t.getDay();
            return [0 < e && e < 6, ""]
        },
        iso8601Week: function (t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function (i, o, t) {
            if (null == i || null == o) throw"Invalid arguments";
            if ("" === (o = "object" == typeof o ? "" + o : o + "")) return null;
            var n, e, s, r, a = 0, l = (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                h = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                u = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (t ? t.dayNames : null) || this._defaults.dayNames,
                d = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
                p = (t ? t.monthNames : null) || this._defaults.monthNames, f = -1, g = -1, m = -1, v = -1, y = !1,
                _ = function (t) {
                    var e = i.length > n + 1 && i.charAt(n + 1) === t;
                    return e && n++, e
                }, b = function (t) {
                    var e = _(t), i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        n = RegExp("^\\d{" + ("y" === t ? i : 1) + "," + i + "}"), s = o.substring(a).match(n);
                    if (!s) throw"Missing number at position " + a;
                    return a += s[0].length, parseInt(s[0], 10)
                }, w = function (t, e, i) {
                    var n = -1, s = k.map(_(t) ? i : e, function (t, e) {
                        return [[e, t]]
                    }).sort(function (t, e) {
                        return -(t[1].length - e[1].length)
                    });
                    if (k.each(s, function (t, e) {
                        var i = e[1];
                        return o.substr(a, i.length).toLowerCase() === i.toLowerCase() ? (n = e[0], a += i.length, !1) : void 0
                    }), -1 !== n) return n + 1;
                    throw"Unknown name at position " + a
                }, D = function () {
                    if (o.charAt(a) !== i.charAt(n)) throw"Unexpected literal at position " + a;
                    a++
                };
            for (n = 0; i.length > n; n++) if (y) "'" !== i.charAt(n) || _("'") ? D() : y = !1; else switch (i.charAt(n)) {
                case"d":
                    m = b("d");
                    break;
                case"D":
                    w("D", u, c);
                    break;
                case"o":
                    v = b("o");
                    break;
                case"m":
                    g = b("m");
                    break;
                case"M":
                    g = w("M", d, p);
                    break;
                case"y":
                    f = b("y");
                    break;
                case"@":
                    f = (r = new Date(b("@"))).getFullYear(), g = r.getMonth() + 1, m = r.getDate();
                    break;
                case"!":
                    f = (r = new Date((b("!") - this._ticksTo1970) / 1e4)).getFullYear(), g = r.getMonth() + 1, m = r.getDate();
                    break;
                case"'":
                    _("'") ? D() : y = !0;
                    break;
                default:
                    D()
            }
            if (o.length > a && (s = o.substr(a), !/^\s+/.test(s))) throw"Extra/unparsed characters found in date: " + s;
            if (-1 === f ? f = (new Date).getFullYear() : f < 100 && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (f <= h ? 0 : -100)), -1 < v) for (g = 1, m = v; !(m <= (e = this._getDaysInMonth(f, g - 1)));) g++, m -= e;
            if ((r = this._daylightSavingAdjust(new Date(f, g - 1, m))).getFullYear() !== f || r.getMonth() + 1 !== g || r.getDate() !== m) throw"Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (i, t, e) {
            if (!t) return "";
            var n, s = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (e ? e.dayNames : null) || this._defaults.dayNames,
                r = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (e ? e.monthNames : null) || this._defaults.monthNames, l = function (t) {
                    var e = i.length > n + 1 && i.charAt(n + 1) === t;
                    return e && n++, e
                }, h = function (t, e, i) {
                    var n = "" + e;
                    if (l(t)) for (; i > n.length;) n = "0" + n;
                    return n
                }, u = function (t, e, i, n) {
                    return l(t) ? n[e] : i[e]
                }, c = "", d = !1;
            if (t) for (n = 0; i.length > n; n++) if (d) "'" !== i.charAt(n) || l("'") ? c += i.charAt(n) : d = !1; else switch (i.charAt(n)) {
                case"d":
                    c += h("d", t.getDate(), 2);
                    break;
                case"D":
                    c += u("D", t.getDay(), s, o);
                    break;
                case"o":
                    c += h("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case"m":
                    c += h("m", t.getMonth() + 1, 2);
                    break;
                case"M":
                    c += u("M", t.getMonth(), r, a);
                    break;
                case"y":
                    c += l("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                    break;
                case"@":
                    c += t.getTime();
                    break;
                case"!":
                    c += 1e4 * t.getTime() + this._ticksTo1970;
                    break;
                case"'":
                    l("'") ? c += "'" : d = !0;
                    break;
                default:
                    c += i.charAt(n)
            }
            return c
        },
        _possibleChars: function (i) {
            var n, t = "", e = !1, s = function (t) {
                var e = i.length > n + 1 && i.charAt(n + 1) === t;
                return e && n++, e
            };
            for (n = 0; i.length > n; n++) if (e) "'" !== i.charAt(n) || s("'") ? t += i.charAt(n) : e = !1; else switch (i.charAt(n)) {
                case"d":
                case"m":
                case"y":
                case"@":
                    t += "0123456789";
                    break;
                case"D":
                case"M":
                    return null;
                case"'":
                    s("'") ? t += "'" : e = !0;
                    break;
                default:
                    t += i.charAt(n)
            }
            return t
        },
        _get: function (t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function (t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"), n = t.lastVal = t.input ? t.input.val() : null,
                    s = this._getDefaultDate(t), o = s, r = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, n, r) || s
                } catch (t) {
                    n = e ? "" : n
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function (t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function (a, t, e) {
            var i, n, s = null == t || "" === t ? e : "string" == typeof t ? function (t) {
                try {
                    return k.datepicker.parseDate(k.datepicker._get(a, "dateFormat"), t, k.datepicker._getFormatConfig(a))
                } catch (t) {
                }
                for (var e = (t.toLowerCase().match(/^c/) ? k.datepicker._getDate(a) : null) || new Date, i = e.getFullYear(), n = e.getMonth(), s = e.getDate(), o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, r = o.exec(t); r;) {
                    switch (r[2] || "d") {
                        case"d":
                        case"D":
                            s += parseInt(r[1], 10);
                            break;
                        case"w":
                        case"W":
                            s += 7 * parseInt(r[1], 10);
                            break;
                        case"m":
                        case"M":
                            n += parseInt(r[1], 10), s = Math.min(s, k.datepicker._getDaysInMonth(i, n));
                            break;
                        case"y":
                        case"Y":
                            i += parseInt(r[1], 10), s = Math.min(s, k.datepicker._getDaysInMonth(i, n))
                    }
                    r = o.exec(t)
                }
                return new Date(i, n, s)
            }(t) : "number" == typeof t ? isNaN(t) ? e : (i = t, (n = new Date).setDate(n.getDate() + i), n) : new Date(t.getTime());
            return (s = s && "Invalid Date" == "" + s ? e : s) && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
        },
        _daylightSavingAdjust: function (t) {
            return t ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function (t, e, i) {
            var n = !e, s = t.selectedMonth, o = t.selectedYear,
                r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
        },
        _getDate: function (t) {
            return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
        },
        _attachHandlers: function (t) {
            var e = this._get(t, "stepMonths"), i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function () {
                var t = {
                    prev: function () {
                        k.datepicker._adjustDate(i, -e, "M")
                    }, next: function () {
                        k.datepicker._adjustDate(i, +e, "M")
                    }, hide: function () {
                        k.datepicker._hideDatepicker()
                    }, today: function () {
                        k.datepicker._gotoToday(i)
                    }, selectDay: function () {
                        return k.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    }, selectMonth: function () {
                        return k.datepicker._selectMonthYear(i, this, "M"), !1
                    }, selectYear: function () {
                        return k.datepicker._selectMonthYear(i, this, "Y"), !1
                    }
                };
                k(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (t) {
            var e, i, n, s, o, r, a, l, h, u, c, d, p, f, g, m, v, y, _, b, w, D, C, S, x, k, M, T, E, I, P, R, H, O, z,
                F, A, N, W, L = new Date,
                Y = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                B = this._get(t, "isRTL"), j = this._get(t, "showButtonPanel"), V = this._get(t, "hideIfNoPrevNext"),
                U = this._get(t, "navigationAsDateFormat"), G = this._getNumberOfMonths(t),
                q = this._get(t, "showCurrentAtPos"), K = this._get(t, "stepMonths"), $ = 1 !== G[0] || 1 !== G[1],
                Z = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                X = this._getMinMaxDate(t, "min"), Q = this._getMinMaxDate(t, "max"), J = t.drawMonth - q,
                tt = t.drawYear;
            if (J < 0 && (J += 12, tt--), Q) for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - G[0] * G[1] + 1, Q.getDate())), e = X && e < X ? X : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;) --J < 0 && (J = 11, tt--);
            for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = U ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - K, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : V ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = U ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, J + K, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>" : V ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? Z : Y, r = U ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (B ? "" : l) + "</div>" : "", u = parseInt(this._get(t, "firstDay"), 10), u = isNaN(u) ? 0 : u, c = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), _ = this._getDefaultDate(t), b = "", D = 0; G[0] > D; D++) {
                for (C = "", this.maxRows = 4, S = 0; G[1] > S; S++) {
                    if (x = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), k = " ui-corner-all", M = "", $) {
                        if (M += "<div class='ui-datepicker-group", 1 < G[1]) switch (S) {
                            case 0:
                                M += " ui-datepicker-group-first", k = " ui-corner-" + (B ? "right" : "left");
                                break;
                            case G[1] - 1:
                                M += " ui-datepicker-group-last", k = " ui-corner-" + (B ? "left" : "right");
                                break;
                            default:
                                M += " ui-datepicker-group-middle", k = ""
                        }
                        M += "'>"
                    }
                    for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + k + "'>" + (/all|left/.test(k) && 0 === D ? B ? o : n : "") + (/all|right/.test(k) && 0 === D ? B ? n : o : "") + this._generateMonthYearHeader(t, J, tt, X, Q, 0 < D || 0 < S, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", T = c ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) T += "<th scope='col'" + (5 <= (w + u + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[E = (w + u) % 7] + "'>" + p[E] + "</span></th>";
                    for (M += T + "</tr></thead><tbody>", I = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)), P = (this._getFirstDayOfMonth(tt, J) - u + 7) % 7, R = Math.ceil((P + I) / 7), H = $ && this.maxRows > R ? this.maxRows : R, this.maxRows = H, O = this._daylightSavingAdjust(new Date(tt, J, 1 - P)), z = 0; z < H; z++) {
                        for (M += "<tr>", F = c ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(O) + "</td>" : "", w = 0; w < 7; w++) A = m ? m.apply(t.input ? t.input[0] : null, [O]) : [!0, ""], W = (N = O.getMonth() !== J) && !y || !A[0] || X && O < X || Q && Q < O, F += "<td class='" + (5 <= (w + u + 6) % 7 ? " ui-datepicker-week-end" : "") + (N ? " ui-datepicker-other-month" : "") + (O.getTime() === x.getTime() && J === t.selectedMonth && t._keyEvent || _.getTime() === O.getTime() && _.getTime() === x.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (N && !v ? "" : " " + A[1] + (O.getTime() === Z.getTime() ? " " + this._currentClass : "") + (O.getTime() === Y.getTime() ? " ui-datepicker-today" : "")) + "'" + (N && !v || !A[2] ? "" : " title='" + A[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + O.getMonth() + "' data-year='" + O.getFullYear() + "'") + ">" + (N && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + O.getDate() + "</span>" : "<a class='ui-state-default" + (O.getTime() === Y.getTime() ? " ui-state-highlight" : "") + (O.getTime() === Z.getTime() ? " ui-state-active" : "") + (N ? " ui-priority-secondary" : "") + "' href='#'>" + O.getDate() + "</a>") + "</td>", O.setDate(O.getDate() + 1), O = this._daylightSavingAdjust(O);
                        M += F + "</tr>"
                    }
                    11 < ++J && (J = 0, tt++), C += M += "</tbody></table>" + ($ ? "</div>" + (0 < G[0] && S === G[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                b += C
            }
            return b += h, t._keyEvent = !1, b
        },
        _generateMonthYearHeader: function (t, e, i, n, s, o, r, a) {
            var l, h, u, c, d, p, f, g, m = this._get(t, "changeMonth"), v = this._get(t, "changeYear"),
                y = this._get(t, "showMonthAfterYear"), _ = "<div class='ui-datepicker-title'>", b = "";
            if (o || !m) b += "<span class='ui-datepicker-month'>" + r[e] + "</span>"; else {
                for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, b += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; u < 12; u++) (!l || u >= n.getMonth()) && (!h || s.getMonth() >= u) && (b += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + a[u] + "</option>");
                b += "</select>"
            }
            if (y || (_ += b + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !v) _ += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                for (c = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = (p = function (t) {
                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                    return isNaN(e) ? d : e
                })(c[0]), g = Math.max(f, p(c[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                t.yearshtml += "</select>", _ += t.yearshtml, t.yearshtml = null
            }
            return _ += this._get(t, "yearSuffix"), y && (_ += (!o && m && v ? "" : "&#xa0;") + b), _ + "</div>"
        },
        _adjustInstDate: function (t, e, i) {
            var n = t.selectedYear + ("Y" === i ? e : 0), s = t.selectedMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
            t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function (t, e) {
            var i = this._getMinMaxDate(t, "min"), n = this._getMinMaxDate(t, "max"), s = i && e < i ? i : e;
            return n && n < s ? n : s
        },
        _notifyChange: function (t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function (t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function (t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function (t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function (t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function (t, e, i, n) {
            var s = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, n + (e < 0 ? e : s[0] * s[1]), 1));
            return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function (t, e) {
            var i, n, s = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), r = null, a = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (a += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || a >= e.getFullYear())
        },
        _getFormatConfig: function (t) {
            var e = this._get(t, "shortYearCutoff");
            return {
                shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function (t, e, i, n) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
        }
    }), k.fn.datepicker = function (t) {
        if (!this.length) return this;
        k.datepicker.initialized || (k(document).on("mousedown", k.datepicker._checkExternalClick), k.datepicker.initialized = !0), 0 === k("#" + k.datepicker._mainDivId).length && k("body").append(k.datepicker.dpDiv);
        var e = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? k.datepicker["_" + t + "Datepicker"].apply(k.datepicker, [this[0]].concat(e)) : this.each(function () {
            "string" == typeof t ? k.datepicker["_" + t + "Datepicker"].apply(k.datepicker, [this].concat(e)) : k.datepicker._attachDatepicker(this, t)
        }) : k.datepicker["_" + t + "Datepicker"].apply(k.datepicker, [this[0]].concat(e))
    }, k.datepicker = new t, k.datepicker.initialized = !1, k.datepicker.uuid = (new Date).getTime(), k.datepicker.version = "1.12.1", k.datepicker, k.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var _ = !1;
    k(document).on("mouseup", function () {
        _ = !1
    }), k.widget("ui.mouse", {
        version: "1.12.1",
        options: {cancel: "input, textarea, button, select, option", distance: 1, delay: 0},
        _mouseInit: function () {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function (t) {
                return !0 === k.data(t.target, e.widgetName + ".preventClickEvent") ? (k.removeData(t.target, e.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (t) {
            if (!_) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var e = this, i = 1 === t.which,
                    n = !("string" != typeof this.options.cancel || !t.target.nodeName) && k(t.target).closest(this.options.cancel).length;
                return i && !n && this._mouseCapture(t) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    e.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? t.preventDefault() : (!0 === k.data(t.target, this.widgetName + ".preventClickEvent") && k.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return e._mouseMove(t)
                }, this._mouseUpDelegate = function (t) {
                    return e._mouseUp(t)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), _ = !0)), !0
            }
        },
        _mouseMove: function (t) {
            if (this._mouseMoved) {
                if (k.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                if (!t.which) if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function (t) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && k.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, _ = !1, t.preventDefault()
        },
        _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    }), k.ui.plugin = {
        add: function (t, e, i) {
            var n, s = k.ui[t].prototype;
            for (n in i) s.plugins[n] = s.plugins[n] || [], s.plugins[n].push([e, i[n]])
        }, call: function (t, e, i, n) {
            var s, o = t.plugins[e];
            if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (s = 0; o.length > s; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
        }
    }, k.ui.safeBlur = function (t) {
        t && "body" !== t.nodeName.toLowerCase() && k(t).trigger("blur")
    }, k.widget("ui.draggable", k.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function () {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
        },
        _mouseCapture: function (t) {
            var e = this.options;
            return !(this.helper || e.disabled || 0 < k(t.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(t), !!this.handle && (this._blurActiveElement(t), this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix), !0))
        },
        _blockFrames: function (t) {
            this.iframeBlocks = this.document.find(t).map(function () {
                var t = k(this);
                return k("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function (t) {
            var e = k.ui.safeActiveElement(this.document[0]);
            k(t.target).closest(e).length || k.ui.safeBlur(e)
        },
        _mouseStart: function (t) {
            var e = this.options;
            return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), k.ui.ddmanager && (k.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function () {
                return "fixed" === k(this).css("position")
            }).length, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), k.ui.ddmanager && !e.dropBehaviour && k.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), k.ui.ddmanager && k.ui.ddmanager.dragStart(this, t), !0)
        },
        _refreshOffsets: function (t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top}
        },
        _mouseDrag: function (t, e) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !e) {
                var i = this._uiHash();
                if (!1 === this._trigger("drag", t, i)) return this._mouseUp(new k.Event("mouseup", t)), !1;
                this.position = i.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", k.ui.ddmanager && k.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var e = this, i = !1;
            return k.ui.ddmanager && !this.options.dropBehaviour && (i = k.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || k.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? k(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                !1 !== e._trigger("stop", t) && e._clear()
            }) : !1 !== this._trigger("stop", t) && this._clear(), !1
        },
        _mouseUp: function (t) {
            return this._unblockFrames(), k.ui.ddmanager && k.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), k.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new k.Event("mouseup", {target: this.element[0]})) : this._clear(), this
        },
        _getHandle: function (t) {
            return !this.options.handle || !!k(t.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function () {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function () {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function (t) {
            var e = this.options, i = k.isFunction(e.helper),
                n = i ? k(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo), i && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
        },
        _setPositionRelative: function () {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), k.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function (t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function () {
            var t = this.offsetParent.offset(), e = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== e && k.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return {top: 0, left: 0};
            var t = this.element.position(), e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var t, e, i, n = this.options, s = this.document[0];
            return this.relativeContainer = null, n.containment ? "window" === n.containment ? void (this.containment = [k(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, k(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, k(window).scrollLeft() + k(window).width() - this.helperProportions.width - this.margins.left, k(window).scrollTop() + (k(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void (this.containment = [0, 0, k(s).width() - this.helperProportions.width - this.margins.left, (k(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void (this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), void ((i = (e = k(n.containment))[0]) && (t = /(scroll|auto)/.test(e.css("overflow")), this.containment = [(parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e.css("borderRightWidth"), 10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = e))) : void (this.containment = null)
        },
        _convertPositionTo: function (t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1, n = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function (t, e) {
            var i, n, s, o, r = this.options, a = this._isRootNode(this.scrollParent[0]), l = t.pageX, h = t.pageY;
            return a && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (i = this.relativeContainer ? (n = this.relativeContainer.offset(), [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (h = this.originalPageY)), {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _trigger: function (t, e, i) {
            return i = i || this._uiHash(), k.ui.plugin.call(this, t, [e, i, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), k.Widget.prototype._trigger.call(this, t, e, i)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
        k.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, t, i) {
            var n = k.extend({}, t, {item: i.element});
            i.sortables = [], k(i.options.connectToSortable).each(function () {
                var t = k(this).sortable("instance");
                t && !t.options.disabled && (i.sortables.push(t), t.refreshPositions(), t._trigger("activate", e, n))
            })
        }, stop: function (e, t, i) {
            var n = k.extend({}, t, {item: i.element});
            i.cancelHelperRemoval = !1, k.each(i.sortables, function () {
                var t = this;
                t.isOver ? (t.isOver = 0, i.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
            })
        }, drag: function (i, n, s) {
            k.each(s.sortables, function () {
                var t = !1, e = this;
                e.positionAbs = s.positionAbs, e.helperProportions = s.helperProportions, e.offset.click = s.offset.click, e._intersectsWith(e.containerCache) && (t = !0, k.each(s.sortables, function () {
                    return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== e && this._intersectsWith(this.containerCache) && k.contains(e.element[0], this.element[0]) && (t = !1), t
                })), t ? (e.isOver || (e.isOver = 1, s._parent = n.helper.parent(), e.currentItem = n.helper.appendTo(e.element).data("ui-sortable-item", !0), e.options._helper = e.options.helper, e.options.helper = function () {
                    return n.helper[0]
                }, i.target = e.currentItem[0], e._mouseCapture(i, !0), e._mouseStart(i, !0, !0), e.offset.click.top = s.offset.click.top, e.offset.click.left = s.offset.click.left, e.offset.parent.left -= s.offset.parent.left - e.offset.parent.left, e.offset.parent.top -= s.offset.parent.top - e.offset.parent.top, s._trigger("toSortable", i), s.dropped = e.element, k.each(s.sortables, function () {
                    this.refreshPositions()
                }), s.currentItem = s.element, e.fromOutside = s), e.currentItem && (e._mouseDrag(i), n.position = e.position)) : e.isOver && (e.isOver = 0, e.cancelHelperRemoval = !0, e.options._revert = e.options.revert, e.options.revert = !1, e._trigger("out", i, e._uiHash(e)), e._mouseStop(i, !0), e.options.revert = e.options._revert, e.options.helper = e.options._helper, e.placeholder && e.placeholder.remove(), n.helper.appendTo(s._parent), s._refreshOffsets(i), n.position = s._generatePosition(i, !0), s._trigger("fromSortable", i), s.dropped = !1, k.each(s.sortables, function () {
                    this.refreshPositions()
                }))
            })
        }
    }), k.ui.plugin.add("draggable", "cursor", {
        start: function (t, e, i) {
            var n = k("body"), s = i.options;
            n.css("cursor") && (s._cursor = n.css("cursor")), n.css("cursor", s.cursor)
        }, stop: function (t, e, i) {
            var n = i.options;
            n._cursor && k("body").css("cursor", n._cursor)
        }
    }), k.ui.plugin.add("draggable", "opacity", {
        start: function (t, e, i) {
            var n = k(e.helper), s = i.options;
            n.css("opacity") && (s._opacity = n.css("opacity")), n.css("opacity", s.opacity)
        }, stop: function (t, e, i) {
            var n = i.options;
            n._opacity && k(e.helper).css("opacity", n._opacity)
        }
    }), k.ui.plugin.add("draggable", "scroll", {
        start: function (t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        }, drag: function (t, e, i) {
            var n = i.options, s = !1, o = i.scrollParentNotHidden[0], r = i.document[0];
            o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = s = o.scrollTop + n.scrollSpeed : t.pageY - i.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = s = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (i.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = s = o.scrollLeft + n.scrollSpeed : t.pageX - i.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = s = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - k(r).scrollTop() < n.scrollSensitivity ? s = k(r).scrollTop(k(r).scrollTop() - n.scrollSpeed) : k(window).height() - (t.pageY - k(r).scrollTop()) < n.scrollSensitivity && (s = k(r).scrollTop(k(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - k(r).scrollLeft() < n.scrollSensitivity ? s = k(r).scrollLeft(k(r).scrollLeft() - n.scrollSpeed) : k(window).width() - (t.pageX - k(r).scrollLeft()) < n.scrollSensitivity && (s = k(r).scrollLeft(k(r).scrollLeft() + n.scrollSpeed)))), !1 !== s && k.ui.ddmanager && !n.dropBehaviour && k.ui.ddmanager.prepareOffsets(i, t)
        }
    }), k.ui.plugin.add("draggable", "snap", {
        start: function (t, e, i) {
            var n = i.options;
            i.snapElements = [], k(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
                var t = k(this), e = t.offset();
                this !== i.element[0] && i.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: e.top,
                    left: e.left
                })
            })
        }, drag: function (t, e, i) {
            var n, s, o, r, a, l, h, u, c, d, p = i.options, f = p.snapTolerance, g = e.offset.left,
                m = g + i.helperProportions.width, v = e.offset.top, y = v + i.helperProportions.height;
            for (c = i.snapElements.length - 1; 0 <= c; c--) l = (a = i.snapElements[c].left - i.margins.left) + i.snapElements[c].width, u = (h = i.snapElements[c].top - i.margins.top) + i.snapElements[c].height, m < a - f || l + f < g || y < h - f || u + f < v || !k.contains(i.snapElements[c].item.ownerDocument, i.snapElements[c].item) ? (i.snapElements[c].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, k.extend(i._uiHash(), {snapItem: i.snapElements[c].item})), i.snapElements[c].snapping = !1) : ("inner" !== p.snapMode && (n = f >= Math.abs(h - y), s = f >= Math.abs(u - v), o = f >= Math.abs(a - m), r = f >= Math.abs(l - g), n && (e.position.top = i._convertPositionTo("relative", {
                top: h - i.helperProportions.height,
                left: 0
            }).top), s && (e.position.top = i._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top), o && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: a - i.helperProportions.width
            }).left), r && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left)), d = n || s || o || r, "outer" !== p.snapMode && (n = f >= Math.abs(h - v), s = f >= Math.abs(u - y), o = f >= Math.abs(a - g), r = f >= Math.abs(l - m), n && (e.position.top = i._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top), s && (e.position.top = i._convertPositionTo("relative", {
                top: u - i.helperProportions.height,
                left: 0
            }).top), o && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: a
            }).left), r && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: l - i.helperProportions.width
            }).left)), !i.snapElements[c].snapping && (n || s || o || r || d) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, k.extend(i._uiHash(), {snapItem: i.snapElements[c].item})), i.snapElements[c].snapping = n || s || o || r || d)
        }
    }), k.ui.plugin.add("draggable", "stack", {
        start: function (t, e, i) {
            var n, s = i.options, o = k.makeArray(k(s.stack)).sort(function (t, e) {
                return (parseInt(k(t).css("zIndex"), 10) || 0) - (parseInt(k(e).css("zIndex"), 10) || 0)
            });
            o.length && (n = parseInt(k(o[0]).css("zIndex"), 10) || 0, k(o).each(function (t) {
                k(this).css("zIndex", n + t)
            }), this.css("zIndex", n + o.length))
        }
    }), k.ui.plugin.add("draggable", "zIndex", {
        start: function (t, e, i) {
            var n = k(e.helper), s = i.options;
            n.css("zIndex") && (s._zIndex = n.css("zIndex")), n.css("zIndex", s.zIndex)
        }, stop: function (t, e, i) {
            var n = i.options;
            n._zIndex && k(e.helper).css("zIndex", n._zIndex)
        }
    }), k.ui.draggable, k.widget("ui.resizable", k.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"},
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function (t) {
            return parseFloat(t) || 0
        },
        _isNumber: function (t) {
            return !isNaN(parseFloat(t))
        },
        _hasScroll: function (t, e) {
            if ("hidden" === k(t).css("overflow")) return !1;
            var i = e && "left" === e ? "scrollLeft" : "scrollTop", n = !1;
            return 0 < t[i] || (t[i] = 1, n = 0 < t[i], t[i] = 0, n)
        },
        _create: function () {
            var t, e = this.options, i = this;
            this._addClass("ui-resizable"), k.extend(this, {
                _aspectRatio: !!e.aspectRatio,
                aspectRatio: e.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(k("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, t = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(t), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(t), this._proportionallyResize()), this._setupHandles(), e.autoHide && k(this.element).on("mouseenter", function () {
                e.disabled || (i._removeClass("ui-resizable-autohide"), i._handles.show())
            }).on("mouseleave", function () {
                e.disabled || i.resizing || (i._addClass("ui-resizable-autohide"), i._handles.hide())
            }), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var t, e = function (t) {
                k(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (e(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
        },
        _setOption: function (t, e) {
            switch (this._super(t, e), t) {
                case"handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function () {
            var t, e, i, n, s, o = this.options, r = this;
            if (this.handles = o.handles || (k(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this._handles = k(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), i = this.handles.split(","), this.handles = {}, e = 0; i.length > e; e++) n = "ui-resizable-" + (t = k.trim(i[e])), s = k("<div>"), this._addClass(s, "ui-resizable-handle " + n), s.css({zIndex: o.zIndex}), this.handles[t] = ".ui-resizable-" + t, this.element.append(s);
            this._renderAxis = function (t) {
                var e, i, n, s;
                for (e in t = t || this.element, this.handles) this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = k(this.handles[e]), this._on(this.handles[e], {mousedown: r._mouseDown})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = k(this.handles[e], this.element), s = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(), n = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""), t.css(n, s), this._proportionallyResize()), this._handles = this._handles.add(this.handles[e])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
                r.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = s && s[1] ? s[1] : "se")
            }), o.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function () {
            this._handles.remove()
        },
        _mouseCapture: function (t) {
            var e, i, n = !1;
            for (e in this.handles) ((i = k(this.handles[e])[0]) === t.target || k.contains(i, t.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function (t) {
            var e, i, n, s = this.options, o = this.element;
            return this.resizing = !0, this._renderProxy(), e = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), s.containment && (e += k(s.containment).scrollLeft() || 0, i += k(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: e,
                top: i
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {width: o.width(), height: o.height()}, this.originalSize = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {width: o.width(), height: o.height()}, this.sizeDiff = {
                width: o.outerWidth() - o.width(),
                height: o.outerHeight() - o.height()
            }, this.originalPosition = {left: e, top: i}, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = k(".ui-resizable-" + this.axis).css("cursor"), k("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function (t) {
            var e, i, n = this.originalMousePosition, s = this.axis, o = t.pageX - n.left || 0,
                r = t.pageY - n.top || 0, a = this._change[s];
            return this._updatePrevProperties(), a && (e = a.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)), e = this._respectSize(e, t), this._updateCache(e), this._propagate("resize", t), i = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), k.isEmptyObject(i) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges())), !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var e, i, n, s, o, r, a, l = this.options, h = this;
            return this._helper && (n = (i = (e = this._proportionallyResizeElements).length && /textarea/i.test(e[0].nodeName)) && this._hasScroll(e[0], "left") ? 0 : h.sizeDiff.height, s = i ? 0 : h.sizeDiff.width, o = {
                width: h.helper.width() - s,
                height: h.helper.height() - n
            }, r = parseFloat(h.element.css("left")) + (h.position.left - h.originalPosition.left) || null, a = parseFloat(h.element.css("top")) + (h.position.top - h.originalPosition.top) || null, l.animate || this.element.css(k.extend(o, {
                top: a,
                left: r
            })), h.helper.height(h.size.height), h.helper.width(h.size.width), this._helper && !l.animate && this._proportionallyResize()), k("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function () {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {width: this.size.width, height: this.size.height}
        },
        _applyChanges: function () {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
        },
        _updateVirtualBoundaries: function (t) {
            var e, i, n, s, o, r = this.options;
            o = {
                minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > s && (o.maxHeight = s)), this._vBoundaries = o
        },
        _updateCache: function (t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function (t) {
            var e = this.position, i = this.size, n = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function (t) {
            var e = this._vBoundaries, i = this.axis, n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                a = this.originalPosition.left + this.originalSize.width,
                l = this.originalPosition.top + this.originalSize.height, h = /sw|nw|w/.test(i), u = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && h && (t.left = a - e.minWidth), n && h && (t.left = a - e.maxWidth), r && u && (t.top = l - e.minHeight), s && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function (t) {
            for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0;
            return {height: i[0] + i[2], width: i[1] + i[3]}
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0
            })
        },
        _renderProxy: function () {
            var t = this.element, e = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || k("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++e.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (t, e) {
                return {width: this.originalSize.width + e}
            }, w: function (t, e) {
                var i = this.originalSize;
                return {left: this.originalPosition.left + e, width: i.width - e}
            }, n: function (t, e, i) {
                var n = this.originalSize;
                return {top: this.originalPosition.top + i, height: n.height - i}
            }, s: function (t, e, i) {
                return {height: this.originalSize.height + i}
            }, se: function (t, e, i) {
                return k.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            }, sw: function (t, e, i) {
                return k.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            }, ne: function (t, e, i) {
                return k.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            }, nw: function (t, e, i) {
                return k.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            }
        },
        _propagate: function (t, e) {
            k.ui.plugin.call(this, t, [e, this.ui()]), "resize" !== t && this._trigger(t, e, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), k.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
            var i = k(this).resizable("instance"), t = i.options, n = i._proportionallyResizeElements,
                s = n.length && /textarea/i.test(n[0].nodeName),
                o = s && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = s ? 0 : i.sizeDiff.width,
                a = {width: i.size.width - r, height: i.size.height - o},
                l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                h = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(k.extend(a, h && l ? {top: h, left: l} : {}), {
                duration: t.animateDuration,
                easing: t.animateEasing,
                step: function () {
                    var t = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    n && n.length && k(n[0]).css({
                        width: t.width,
                        height: t.height
                    }), i._updateCache(t), i._propagate("resize", e)
                }
            })
        }
    }), k.ui.plugin.add("resizable", "containment", {
        start: function () {
            var i, n, t, e, s, o, r, a = k(this).resizable("instance"), l = a.options, h = a.element, u = l.containment,
                c = u instanceof k ? u.get(0) : /parent/.test(u) ? h.parent().get(0) : u;
            c && (a.containerElement = k(c), /document/.test(u) || u === document ? (a.containerOffset = {
                left: 0,
                top: 0
            }, a.containerPosition = {left: 0, top: 0}, a.parentData = {
                element: k(document),
                left: 0,
                top: 0,
                width: k(document).width(),
                height: k(document).height() || document.body.parentNode.scrollHeight
            }) : (i = k(c), n = [], k(["Top", "Right", "Left", "Bottom"]).each(function (t, e) {
                n[t] = a._num(i.css("padding" + e))
            }), a.containerOffset = i.offset(), a.containerPosition = i.position(), a.containerSize = {
                height: i.innerHeight() - n[3],
                width: i.innerWidth() - n[1]
            }, t = a.containerOffset, e = a.containerSize.height, s = a.containerSize.width, o = a._hasScroll(c, "left") ? c.scrollWidth : s, r = a._hasScroll(c) ? c.scrollHeight : e, a.parentData = {
                element: c,
                left: t.left,
                top: t.top,
                width: o,
                height: r
            }))
        }, resize: function (t) {
            var e, i, n, s, o = k(this).resizable("instance"), r = o.options, a = o.containerOffset, l = o.position,
                h = o._aspectRatio || t.shiftKey, u = {top: 0, left: 0}, c = o.containerElement, d = !0;
            c[0] !== document && /static/.test(c.css("position")) && (u = a), l.left < (o._helper ? a.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - u.left), h && (o.size.height = o.size.width / o.aspectRatio, d = !1), o.position.left = r.helper ? a.left : 0), l.top < (o._helper ? a.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top), h && (o.size.width = o.size.height * o.aspectRatio, d = !1), o.position.top = o._helper ? a.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), s = /relative|absolute/.test(o.containerElement.css("position")), n && s ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), e = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - u.left : o.offset.left - a.left)), i = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - u.top : o.offset.top - a.top)), e + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - e, h && (o.size.height = o.size.width / o.aspectRatio, d = !1)), i + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - i, h && (o.size.width = o.size.height * o.aspectRatio, d = !1)), d || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
        }, stop: function () {
            var t = k(this).resizable("instance"), e = t.options, i = t.containerOffset, n = t.containerPosition,
                s = t.containerElement, o = k(t.helper), r = o.offset(), a = o.outerWidth() - t.sizeDiff.width,
                l = o.outerHeight() - t.sizeDiff.height;
            t._helper && !e.animate && /relative/.test(s.css("position")) && k(this).css({
                left: r.left - n.left - i.left,
                width: a,
                height: l
            }), t._helper && !e.animate && /static/.test(s.css("position")) && k(this).css({
                left: r.left - n.left - i.left,
                width: a,
                height: l
            })
        }
    }), k.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var t = k(this).resizable("instance").options;
            k(t.alsoResize).each(function () {
                var t = k(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseFloat(t.width()),
                    height: parseFloat(t.height()),
                    left: parseFloat(t.css("left")),
                    top: parseFloat(t.css("top"))
                })
            })
        }, resize: function (t, i) {
            var e = k(this).resizable("instance"), n = e.options, s = e.originalSize, o = e.originalPosition, r = {
                height: e.size.height - s.height || 0,
                width: e.size.width - s.width || 0,
                top: e.position.top - o.top || 0,
                left: e.position.left - o.left || 0
            };
            k(n.alsoResize).each(function () {
                var t = k(this), n = k(this).data("ui-resizable-alsoresize"), s = {},
                    e = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                k.each(e, function (t, e) {
                    var i = (n[e] || 0) + (r[e] || 0);
                    i && 0 <= i && (s[e] = i || null)
                }), t.css(s)
            })
        }, stop: function () {
            k(this).removeData("ui-resizable-alsoresize")
        }
    }), k.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var t = k(this).resizable("instance"), e = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: e.height,
                width: e.width,
                margin: 0,
                left: 0,
                top: 0
            }), t._addClass(t.ghost, "ui-resizable-ghost"), !1 !== k.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost), t.ghost.appendTo(t.helper)
        }, resize: function () {
            var t = k(this).resizable("instance");
            t.ghost && t.ghost.css({position: "relative", height: t.size.height, width: t.size.width})
        }, stop: function () {
            var t = k(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), k.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var t, e = k(this).resizable("instance"), i = e.options, n = e.size, s = e.originalSize,
                o = e.originalPosition, r = e.axis, a = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                l = a[0] || 1, h = a[1] || 1, u = Math.round((n.width - s.width) / l) * l,
                c = Math.round((n.height - s.height) / h) * h, d = s.width + u, p = s.height + c,
                f = i.maxWidth && d > i.maxWidth, g = i.maxHeight && p > i.maxHeight, m = i.minWidth && i.minWidth > d,
                v = i.minHeight && i.minHeight > p;
            i.grid = a, m && (d += l), v && (p += h), f && (d -= l), g && (p -= h), /^(se|s|e)$/.test(r) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(r) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - c) : /^(sw)$/.test(r) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - u) : ((p - h <= 0 || d - l <= 0) && (t = e._getPaddingPlusBorderDimensions(this)), 0 < p - h ? (e.size.height = p, e.position.top = o.top - c) : (p = h - t.height, e.size.height = p, e.position.top = o.top + s.height - p), 0 < d - l ? (e.size.width = d, e.position.left = o.left - u) : (d = l - t.width, e.size.width = d, e.position.left = o.left + s.width - d))
        }
    }), k.ui.resizable, k.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {"ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all"},
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center", at: "center", of: window, collision: "fit", using: function (t) {
                    var e = k(this).css(t).offset().top;
                    e < 0 && k(this).css("top", t.top - e)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0},
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && k.fn.draggable && this._makeDraggable(), this.options.resizable && k.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? k(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function () {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: k.noop,
        enable: k.noop,
        close: function (t) {
            var e = this;
            this._isOpen && !1 !== this._trigger("beforeClose", t) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || k.ui.safeBlur(k.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
                e._trigger("close", t)
            }))
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (t, e) {
            var i = !1, n = this.uiDialog.siblings(".ui-front:visible").map(function () {
                return +k(this).css("z-index")
            }).get(), s = Math.max.apply(null, n);
            return s >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s + 1), i = !0), i && !e && this._trigger("focus", t), i
        },
        open: function () {
            var t = this;
            return this._isOpen ? void (this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = k(k.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                t._focusTabbable(), t._trigger("focus")
            }), this._makeFocusTarget(), void this._trigger("open"))
        },
        _focusTabbable: function () {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
        },
        _keepFocus: function (t) {
            function e() {
                var t = k.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === t || k.contains(this.uiDialog[0], t) || this._focusTabbable()
            }

            t.preventDefault(), e.call(this), this._delay(e)
        },
        _createWrapper: function () {
            this.uiDialog = k("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function (t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === k.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
                    if (t.keyCode === k.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var e = this.uiDialog.find(":tabbable"), i = e.filter(":first"), n = e.filter(":last");
                        t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () {
                            n.trigger("focus")
                        }), t.preventDefault()) : (this._delay(function () {
                            i.trigger("focus")
                        }), t.preventDefault())
                    }
                }, mousedown: function (t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
        },
        _createTitlebar: function () {
            var t;
            this.uiDialogTitlebar = k("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                mousedown: function (t) {
                    k(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }), this.uiDialogTitlebarClose = k("<button type='button'></button>").button({
                label: k("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                click: function (t) {
                    t.preventDefault(), this.close(t)
                }
            }), t = k("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(t, "ui-dialog-title"), this._title(t), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({"aria-labelledby": t.attr("id")})
        },
        _title: function (t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;")
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = k("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = k("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
        },
        _createButtons: function () {
            var s = this, t = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), k.isEmptyObject(t) || k.isArray(t) && !t.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (k.each(t, function (t, e) {
                var i, n;
                e = k.isFunction(e) ? {
                    click: e,
                    text: t
                } : e, e = k.extend({type: "button"}, e), i = e.click, n = {
                    icon: e.icon,
                    iconPosition: e.iconPosition,
                    showLabel: e.showLabel,
                    icons: e.icons,
                    text: e.text
                }, delete e.click, delete e.icon, delete e.iconPosition, delete e.showLabel, delete e.icons, "boolean" == typeof e.text && delete e.text, k("<button></button>", e).button(n).appendTo(s.uiButtonSet).on("click", function () {
                    i.apply(s.element[0], arguments)
                })
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function () {
            function s(t) {
                return {position: t.position, offset: t.offset}
            }

            var o = this, r = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (t, e) {
                    o._addClass(k(this), "ui-dialog-dragging"), o._blockFrames(), o._trigger("dragStart", t, s(e))
                },
                drag: function (t, e) {
                    o._trigger("drag", t, s(e))
                },
                stop: function (t, e) {
                    var i = e.offset.left - o.document.scrollLeft(), n = e.offset.top - o.document.scrollTop();
                    r.position = {
                        my: "left top",
                        at: "left" + (0 <= i ? "+" : "") + i + " top" + (0 <= n ? "+" : "") + n,
                        of: o.window
                    }, o._removeClass(k(this), "ui-dialog-dragging"), o._unblockFrames(), o._trigger("dragStop", t, s(e))
                }
            })
        },
        _makeResizable: function () {
            function o(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }

            var r = this, a = this.options, t = a.resizable, e = this.uiDialog.css("position"),
                i = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: a.maxWidth,
                maxHeight: a.maxHeight,
                minWidth: a.minWidth,
                minHeight: this._minHeight(),
                handles: i,
                start: function (t, e) {
                    r._addClass(k(this), "ui-dialog-resizing"), r._blockFrames(), r._trigger("resizeStart", t, o(e))
                },
                resize: function (t, e) {
                    r._trigger("resize", t, o(e))
                },
                stop: function (t, e) {
                    var i = r.uiDialog.offset(), n = i.left - r.document.scrollLeft(),
                        s = i.top - r.document.scrollTop();
                    a.height = r.uiDialog.height(), a.width = r.uiDialog.width(), a.position = {
                        my: "left top",
                        at: "left" + (0 <= n ? "+" : "") + n + " top" + (0 <= s ? "+" : "") + s,
                        of: r.window
                    }, r._removeClass(k(this), "ui-dialog-resizing"), r._unblockFrames(), r._trigger("resizeStop", t, o(e))
                }
            }).css("position", e)
        },
        _trackFocus: function () {
            this._on(this.widget(), {
                focusin: function (t) {
                    this._makeFocusTarget(), this._focusedElement = k(t.target)
                }
            })
        },
        _makeFocusTarget: function () {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function () {
            var t = this._trackingInstances(), e = k.inArray(this, t);
            -1 !== e && t.splice(e, 1)
        },
        _trackingInstances: function () {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [], this.document.data("ui-dialog-instances", t)), t
        },
        _minHeight: function () {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function () {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function (t) {
            var i = this, n = !1, s = {};
            k.each(t, function (t, e) {
                i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e)
            }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function (t, e) {
            var i, n, s = this.uiDialog;
            "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({label: k("<a>").text("" + this.options.closeText).html()}), "draggable" === t && ((i = s.is(":data(ui-draggable)")) && !e && s.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && ((n = s.is(":data(ui-resizable)")) && !e && s.resizable("destroy"), n && "string" == typeof e && s.resizable("option", "handles", e), n || !1 === e || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var t, e, i, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var t = k(this);
                return k("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (t) {
            return !!k(t.target).closest(".ui-dialog").length || !!k(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var e = !0;
                this._delay(function () {
                    e = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function (t) {
                        e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = k("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {mousedown: "_keepFocus"}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function () {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
            }
        }
    }), !1 !== k.uiBackCompat && k.widget("ui.dialog", k.ui.dialog, {
        options: {dialogClass: ""},
        _createWrapper: function () {
            this._super(), this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function (t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
        }
    }), k.ui.dialog, k.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {
            var t, e = this.options, i = e.accept;
            this.isover = !1, this.isout = !0, this.accept = k.isFunction(i) ? i : function (t) {
                return t.is(i)
            }, this.proportions = function () {
                return arguments.length ? void (t = arguments[0]) : t || (t = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                })
            }, this._addToManager(e.scope), e.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function (t) {
            k.ui.ddmanager.droppables[t] = k.ui.ddmanager.droppables[t] || [], k.ui.ddmanager.droppables[t].push(this)
        },
        _splice: function (t) {
            for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
        },
        _destroy: function () {
            var t = k.ui.ddmanager.droppables[this.options.scope];
            this._splice(t)
        },
        _setOption: function (t, e) {
            if ("accept" === t) this.accept = k.isFunction(e) ? e : function (t) {
                return t.is(e)
            }; else if ("scope" === t) {
                var i = k.ui.ddmanager.droppables[this.options.scope];
                this._splice(i), this._addToManager(e)
            }
            this._super(t, e)
        },
        _activate: function (t) {
            var e = k.ui.ddmanager.current;
            this._addActiveClass(), e && this._trigger("activate", t, this.ui(e))
        },
        _deactivate: function (t) {
            var e = k.ui.ddmanager.current;
            this._removeActiveClass(), e && this._trigger("deactivate", t, this.ui(e))
        },
        _over: function (t) {
            var e = k.ui.ddmanager.current;
            e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._addHoverClass(), this._trigger("over", t, this.ui(e)))
        },
        _out: function (t) {
            var e = k.ui.ddmanager.current;
            e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._removeHoverClass(), this._trigger("out", t, this.ui(e)))
        },
        _drop: function (e, t) {
            var i = t || k.ui.ddmanager.current, n = !1;
            return !(!i || (i.currentItem || i.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var t = k(this).droppable("instance");
                return t.options.greedy && !t.options.disabled && t.options.scope === i.options.scope && t.accept.call(t.element[0], i.currentItem || i.element) && w(i, k.extend(t, {offset: t.element.offset()}), t.options.tolerance, e) ? !(n = !0) : void 0
            }), !n && (!!this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(i)), this.element)))
        },
        ui: function (t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        },
        _addHoverClass: function () {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function () {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function () {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function () {
            this._removeClass("ui-droppable-active")
        }
    });
    var b, w = k.ui.intersect = function () {
        function d(t, e, i) {
            return e <= t && t < e + i
        }

        return function (t, e, i, n) {
            if (!e.offset) return !1;
            var s = (t.positionAbs || t.position.absolute).left + t.margins.left,
                o = (t.positionAbs || t.position.absolute).top + t.margins.top, r = s + t.helperProportions.width,
                a = o + t.helperProportions.height, l = e.offset.left, h = e.offset.top, u = l + e.proportions().width,
                c = h + e.proportions().height;
            switch (i) {
                case"fit":
                    return l <= s && r <= u && h <= o && a <= c;
                case"intersect":
                    return s + t.helperProportions.width / 2 > l && u > r - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > h && c > a - t.helperProportions.height / 2;
                case"pointer":
                    return d(n.pageY, h, e.proportions().height) && d(n.pageX, l, e.proportions().width);
                case"touch":
                    return (h <= o && o <= c || h <= a && a <= c || o < h && c < a) && (l <= s && s <= u || l <= r && r <= u || s < l && u < r);
                default:
                    return !1
            }
        }
    }();
    !(k.ui.ddmanager = {
        current: null, droppables: {default: []}, prepareOffsets: function (t, e) {
            var i, n, s = k.ui.ddmanager.droppables[t.options.scope] || [], o = e ? e.type : null,
                r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            t:for (i = 0; s.length > i; i++) if (!(s[i].options.disabled || t && !s[i].accept.call(s[i].element[0], t.currentItem || t.element))) {
                for (n = 0; r.length > n; n++) if (r[n] === s[i].element[0]) {
                    s[i].proportions().height = 0;
                    continue t
                }
                s[i].visible = "none" !== s[i].element.css("display"), s[i].visible && ("mousedown" === o && s[i]._activate.call(s[i], e), s[i].offset = s[i].element.offset(), s[i].proportions({
                    width: s[i].element[0].offsetWidth,
                    height: s[i].element[0].offsetHeight
                }))
            }
        }, drop: function (t, e) {
            var i = !1;
            return k.each((k.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && w(t, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, e)))
            }), i
        }, dragStart: function (t, e) {
            t.element.parentsUntil("body").on("scroll.droppable", function () {
                t.options.refreshPositions || k.ui.ddmanager.prepareOffsets(t, e)
            })
        }, drag: function (o, r) {
            o.options.refreshPositions && k.ui.ddmanager.prepareOffsets(o, r), k.each(k.ui.ddmanager.droppables[o.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var t, e, i, n = w(o, this, this.options.tolerance, r),
                        s = !n && this.isover ? "isout" : n && !this.isover ? "isover" : null;
                    s && (this.options.greedy && (e = this.options.scope, (i = this.element.parents(":data(ui-droppable)").filter(function () {
                        return k(this).droppable("instance").options.scope === e
                    })).length && ((t = k(i[0]).droppable("instance")).greedyChild = "isover" === s)), t && "isover" === s && (t.isover = !1, t.isout = !0, t._out.call(t, r)), this[s] = !0, this["isout" === s ? "isover" : "isout"] = !1, this["isover" === s ? "_over" : "_out"].call(this, r), t && "isout" === s && (t.isout = !1, t.isover = !0, t._over.call(t, r)))
                }
            })
        }, dragStop: function (t, e) {
            t.element.parentsUntil("body").off("scroll.droppable"), t.options.refreshPositions || k.ui.ddmanager.prepareOffsets(t, e)
        }
    }) !== k.uiBackCompat && k.widget("ui.droppable", k.ui.droppable, {
        options: {hoverClass: !1, activeClass: !1},
        _addActiveClass: function () {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function () {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function () {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function () {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    }), k.ui.droppable, k.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            }, max: 100, value: 0, change: null, complete: null
        },
        min: 0,
        _create: function () {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = k("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
        },
        _destroy: function () {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
        },
        value: function (t) {
            return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
        },
        _constrainedValue: function (t) {
            return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function (t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function (t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function () {
            var t = this.options.value, e = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).width(e.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = k("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
        }
    }), k.widget("ui.selectable", k.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function () {
            var n = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                n.elementPos = k(n.element[0]).offset(), n.selectees = k(n.options.filter, n.element[0]), n._addClass(n.selectees, "ui-selectee"), n.selectees.each(function () {
                    var t = k(this), e = t.offset(),
                        i = {left: e.left - n.elementPos.left, top: e.top - n.elementPos.top};
                    k.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this._mouseInit(), this.helper = k("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function () {
            this.selectees.removeData("selectable-item"), this._mouseDestroy()
        },
        _mouseStart: function (i) {
            var n = this, t = this.options;
            this.opos = [i.pageX, i.pageY], this.elementPos = k(this.element[0]).offset(), this.options.disabled || (this.selectees = k(t.filter, this.element[0]), this._trigger("start", i), k(t.appendTo).append(this.helper), this.helper.css({
                left: i.pageX,
                top: i.pageY,
                width: 0,
                height: 0
            }), t.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var t = k.data(this, "selectable-item");
                t.startselected = !0, i.metaKey || i.ctrlKey || (n._removeClass(t.$element, "ui-selected"), t.selected = !1, n._addClass(t.$element, "ui-unselecting"), t.unselecting = !0, n._trigger("unselecting", i, {unselecting: t.element}))
            }), k(i.target).parents().addBack().each(function () {
                var t, e = k.data(this, "selectable-item");
                return e ? (t = !i.metaKey && !i.ctrlKey || !e.$element.hasClass("ui-selected"), n._removeClass(e.$element, t ? "ui-unselecting" : "ui-selected")._addClass(e.$element, t ? "ui-selecting" : "ui-unselecting"), e.unselecting = !t, e.selecting = t, (e.selected = t) ? n._trigger("selecting", i, {selecting: e.element}) : n._trigger("unselecting", i, {unselecting: e.element}), !1) : void 0
            }))
        },
        _mouseDrag: function (n) {
            if (this.dragged = !0, !this.options.disabled) {
                var t, s = this, o = this.options, r = this.opos[0], a = this.opos[1], l = n.pageX, h = n.pageY;
                return l < r && (t = l, l = r, r = t), h < a && (t = h, h = a, a = t), this.helper.css({
                    left: r,
                    top: a,
                    width: l - r,
                    height: h - a
                }), this.selectees.each(function () {
                    var t = k.data(this, "selectable-item"), e = !1, i = {};
                    t && t.element !== s.element[0] && (i.left = t.left + s.elementPos.left, i.right = t.right + s.elementPos.left, i.top = t.top + s.elementPos.top, i.bottom = t.bottom + s.elementPos.top, "touch" === o.tolerance ? e = !(i.left > l || r > i.right || i.top > h || a > i.bottom) : "fit" === o.tolerance && (e = i.left > r && l > i.right && i.top > a && h > i.bottom), e ? (t.selected && (s._removeClass(t.$element, "ui-selected"), t.selected = !1), t.unselecting && (s._removeClass(t.$element, "ui-unselecting"), t.unselecting = !1), t.selecting || (s._addClass(t.$element, "ui-selecting"), t.selecting = !0, s._trigger("selecting", n, {selecting: t.element}))) : (t.selecting && ((n.metaKey || n.ctrlKey) && t.startselected ? (s._removeClass(t.$element, "ui-selecting"), t.selecting = !1, s._addClass(t.$element, "ui-selected"), t.selected = !0) : (s._removeClass(t.$element, "ui-selecting"), t.selecting = !1, t.startselected && (s._addClass(t.$element, "ui-unselecting"), t.unselecting = !0), s._trigger("unselecting", n, {unselecting: t.element}))), t.selected && (n.metaKey || n.ctrlKey || t.startselected || (s._removeClass(t.$element, "ui-selected"), t.selected = !1, s._addClass(t.$element, "ui-unselecting"), t.unselecting = !0, s._trigger("unselecting", n, {unselecting: t.element})))))
                }), !1
            }
        },
        _mouseStop: function (e) {
            var i = this;
            return this.dragged = !1, k(".ui-unselecting", this.element[0]).each(function () {
                var t = k.data(this, "selectable-item");
                i._removeClass(t.$element, "ui-unselecting"), t.unselecting = !1, t.startselected = !1, i._trigger("unselected", e, {unselected: t.element})
            }), k(".ui-selecting", this.element[0]).each(function () {
                var t = k.data(this, "selectable-item");
                i._removeClass(t.$element, "ui-selecting")._addClass(t.$element, "ui-selected"), t.selecting = !1, t.selected = !0, t.startselected = !0, i._trigger("selected", e, {selected: t.element})
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), k.widget("ui.selectmenu", [k.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"},
            disabled: null,
            icons: {button: "ui-icon-triangle-1-s"},
            position: {my: "left top", at: "left bottom", collision: "none"},
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function () {
            var t = this.element.uniqueId().attr("id");
            this.ids = {
                element: t,
                button: t + "-button",
                menu: t + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = k()
        },
        _drawButton: function () {
            var t, e = this, i = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function (t) {
                    this.button.focus(), t.preventDefault()
                }
            }), this.element.hide(), this.button = k("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), t = k("<span>").appendTo(this.button), this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(i).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
                e._rendered || e._refreshMenu()
            })
        },
        _drawMenu: function () {
            var n = this;
            this.menu = k("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = k("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {"ui-menu": "ui-corner-bottom"},
                role: "listbox",
                select: function (t, e) {
                    t.preventDefault(), n._setSelection(), n._select(e.item.data("ui-selectmenu-item"), t)
                },
                focus: function (t, e) {
                    var i = e.item.data("ui-selectmenu-item");
                    null != n.focusIndex && i.index !== n.focusIndex && (n._trigger("focus", t, {item: i}), n.isOpen || n._select(i, t)), n.focusIndex = i.index, n.button.attr("aria-activedescendant", n.menuItems.eq(i.index).attr("id"))
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                return !1
            }, this.menuInstance._isDivider = function () {
                return !1
            }
        },
        refresh: function () {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function () {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function (t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
        },
        _position: function () {
            this.menuWrap.position(k.extend({of: this.button}, this.options.position))
        },
        close: function (t) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
        },
        widget: function () {
            return this.button
        },
        menuWidget: function () {
            return this.menu
        },
        _renderButtonItem: function (t) {
            var e = k("<span>");
            return this._setText(e, t.label), this._addClass(e, "ui-selectmenu-text"), e
        },
        _renderMenu: function (n, t) {
            var s = this, o = "";
            k.each(t, function (t, e) {
                var i;
                e.optgroup !== o && (i = k("<li>", {text: e.optgroup}), s._addClass(i, "ui-selectmenu-optgroup", "ui-menu-divider" + (e.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), i.appendTo(n), o = e.optgroup), s._renderItemData(n, e)
            })
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e)
        },
        _renderItem: function (t, e) {
            var i = k("<li>"), n = k("<div>", {title: e.element.attr("title")});
            return e.disabled && this._addClass(i, null, "ui-state-disabled"), this._setText(n, e.label), i.append(n).appendTo(t)
        },
        _setText: function (t, e) {
            e ? t.text(e) : t.html("&#160;")
        },
        _move: function (t, e) {
            var i, n, s = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), (n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0)).length && this.menuInstance.focus(e, n)
        },
        _getSelectedItem: function () {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function (t) {
            this[this.isOpen ? "close" : "open"](t)
        },
        _setSelection: function () {
            var t;
            this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: {
            mousedown: function (t) {
                this.isOpen && (k(t.target).closest(".ui-selectmenu-menu, #" + k.ui.escapeSelector(this.ids.button)).length || this.close(t))
            }
        },
        _buttonEvents: {
            mousedown: function () {
                var t;
                window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
            }, click: function (t) {
                this._setSelection(), this._toggle(t)
            }, keydown: function (t) {
                var e = !0;
                switch (t.keyCode) {
                    case k.ui.keyCode.TAB:
                    case k.ui.keyCode.ESCAPE:
                        this.close(t), e = !1;
                        break;
                    case k.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(t);
                        break;
                    case k.ui.keyCode.UP:
                        t.altKey ? this._toggle(t) : this._move("prev", t);
                        break;
                    case k.ui.keyCode.DOWN:
                        t.altKey ? this._toggle(t) : this._move("next", t);
                        break;
                    case k.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                        break;
                    case k.ui.keyCode.LEFT:
                        this._move("prev", t);
                        break;
                    case k.ui.keyCode.RIGHT:
                        this._move("next", t);
                        break;
                    case k.ui.keyCode.HOME:
                    case k.ui.keyCode.PAGE_UP:
                        this._move("first", t);
                        break;
                    case k.ui.keyCode.END:
                    case k.ui.keyCode.PAGE_DOWN:
                        this._move("last", t);
                        break;
                    default:
                        this.menu.trigger(t), e = !1
                }
                e && t.preventDefault()
            }
        },
        _selectFocusedItem: function (t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function (t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {item: t}), t.index !== i && this._trigger("change", e, {item: t}), this.close(e)
        },
        _setAria: function (t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": e,
                "aria-activedescendant": e
            }), this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function (t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? k(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
        },
        _toggleAttr: function () {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function () {
            var t = this.options.width;
            return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t))
        },
        _resizeMenu: function () {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function () {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"), t
        },
        _parseOptions: function (t) {
            var i = this, n = [];
            t.each(function (t, e) {
                n.push(i._parseOption(k(e), t))
            }), this.items = n
        },
        _parseOption: function (t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            }
        },
        _destroy: function () {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
        }
    }]), k.widget("ui.slider", k.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var t, e, i = this.options, n = this.element.find(".ui-slider-handle"), s = [];
            for (e = i.values && i.values.length || 1, n.length > e && (n.slice(e).remove(), n = n.slice(0, e)), t = n.length; t < e; t++) s.push("<span tabindex='0'></span>");
            this.handles = n.add(k(s.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (t) {
                k(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
            })
        },
        _createRange: function () {
            var t = this.options;
            t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : k.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = k("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === t.range || "max" === t.range) && this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function () {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var e, i, n, s, o, r, a, l = this, h = this.options;
            return !h.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), e = {
                x: t.pageX,
                y: t.pageY
            }, i = this._normValueFromMouse(e), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                var e = Math.abs(i - l.values(t));
                (e < n || n === e && (t === l._lastChangedValue || l.values(t) === h.min)) && (n = e, s = k(this), o = t)
            }), !1 !== this._start(t, o) && (this._mouseSliding = !0, this._handleIndex = o, this._addClass(s, null, "ui-state-active"), s.trigger("focus"), r = s.offset(), a = !k(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = a ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - r.left - s.width() / 2,
                top: t.pageY - r.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, i), this._animateOff = !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (t) {
            var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function (t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (t) {
            var e, i, n, s;
            return 1 < (i = ("horizontal" === this.orientation ? (e = this.elementSize.width, t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))) / e) && (i = 1), i < 0 && (i = 0), "vertical" === this.orientation && (i = 1 - i), n = this._valueMax() - this._valueMin(), s = this._valueMin() + i * n, this._trimAlignValue(s)
        },
        _uiHash: function (t, e, i) {
            var n = {handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value()};
            return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n
        },
        _hasMultipleValues: function () {
            return this.options.values && this.options.values.length
        },
        _start: function (t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function (t, e, i) {
            var n, s = this.value(), o = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), s = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), o[e] = i), i !== s && (!1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
        },
        _stop: function (t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function (t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
        },
        value: function (t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function (t, e) {
            var i, n, s;
            if (1 < arguments.length) return this.options.values[t] = this._trimAlignValue(e), this._refreshValue(), void this._change(null, t);
            if (!arguments.length) return this._values();
            if (!k.isArray(t)) return this._hasMultipleValues() ? this._values(t) : this.value();
            for (i = this.options.values, n = t, s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(n[s]), this._change(null, s);
            this._refreshValue()
        },
        _setOption: function (t, e) {
            var i, n = 0;
            switch ("range" === t && !0 === this.options.range && ("min" === e ? (this.options.value = this._values(0), this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), k.isArray(this.options.values) && (n = this.options.values.length), this._super(t, e), t) {
                case"orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(e), this.handles.css("horizontal" === e ? "bottom" : "left", "");
                    break;
                case"value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case"values":
                    for (this._animateOff = !0, this._refreshValue(), i = n - 1; 0 <= i; i--) this._change(null, i);
                    this._animateOff = !1;
                    break;
                case"step":
                case"min":
                case"max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case"range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function (t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function () {
            var t = this.options.value;
            return this._trimAlignValue(t)
        },
        _values: function (t) {
            var e, i, n;
            if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]);
                return i
            }
            return []
        },
        _trimAlignValue: function (t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = 0 < this.options.step ? this.options.step : 1, i = (t - this._valueMin()) % e, n = t - i;
            return 2 * Math.abs(i) >= e && (n += 0 < i ? e : -e), parseFloat(n.toFixed(5))
        },
        _calculateNewMax: function () {
            var t = this.options.max, e = this._valueMin(), i = this.options.step;
            (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.max
        },
        _refreshRange: function (t) {
            "vertical" === t && this.range.css({width: "", left: ""}), "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function () {
            var e, i, t, n, s, o = this.options.range, r = this.options, a = this, l = !this._animateOff && r.animate,
                h = {};
            this._hasMultipleValues() ? this.handles.each(function (t) {
                i = (a.values(t) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, h["horizontal" === a.orientation ? "left" : "bottom"] = i + "%", k(this).stop(1, 1)[l ? "animate" : "css"](h, r.animate), !0 === a.options.range && ("horizontal" === a.orientation ? (0 === t && a.range.stop(1, 1)[l ? "animate" : "css"]({left: i + "%"}, r.animate), 1 === t && a.range[l ? "animate" : "css"]({width: i - e + "%"}, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === t && a.range.stop(1, 1)[l ? "animate" : "css"]({bottom: i + "%"}, r.animate), 1 === t && a.range[l ? "animate" : "css"]({height: i - e + "%"}, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (t = this.value(), n = this._valueMin(), s = this._valueMax(), i = s !== n ? (t - n) / (s - n) * 100 : 0, h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](h, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({width: i + "%"}, r.animate), "max" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({width: 100 - i + "%"}, r.animate), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({height: i + "%"}, r.animate), "max" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({height: 100 - i + "%"}, r.animate))
        },
        _handleEvents: {
            keydown: function (t) {
                var e, i, n, s = k(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case k.ui.keyCode.HOME:
                    case k.ui.keyCode.END:
                    case k.ui.keyCode.PAGE_UP:
                    case k.ui.keyCode.PAGE_DOWN:
                    case k.ui.keyCode.UP:
                    case k.ui.keyCode.RIGHT:
                    case k.ui.keyCode.DOWN:
                    case k.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(k(t.target), null, "ui-state-active"), !1 === this._start(t, s))) return
                }
                switch (n = this.options.step, e = i = this._hasMultipleValues() ? this.values(s) : this.value(), t.keyCode) {
                    case k.ui.keyCode.HOME:
                        i = this._valueMin();
                        break;
                    case k.ui.keyCode.END:
                        i = this._valueMax();
                        break;
                    case k.ui.keyCode.PAGE_UP:
                        i = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case k.ui.keyCode.PAGE_DOWN:
                        i = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case k.ui.keyCode.UP:
                    case k.ui.keyCode.RIGHT:
                        if (e === this._valueMax()) return;
                        i = this._trimAlignValue(e + n);
                        break;
                    case k.ui.keyCode.DOWN:
                    case k.ui.keyCode.LEFT:
                        if (e === this._valueMin()) return;
                        i = this._trimAlignValue(e - n)
                }
                this._slide(t, s, i)
            }, keyup: function (t) {
                var e = k(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, e), this._change(t, e), this._removeClass(k(t.target), null, "ui-state-active"))
            }
        }
    }), k.widget("ui.sortable", k.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function (t, e, i) {
            return e <= t && t < e + i
        },
        _isFloating: function (t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function () {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function () {
            var t = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), k.each(this.items, function () {
                t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function () {
            this._mouseDestroy();
            for (var t = this.items.length - 1; 0 <= t; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function (t, e) {
            var i = null, n = !1, s = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t), k(t.target).parents().each(function () {
                return k.data(this, s.widgetName + "-item") === s ? (i = k(this), !1) : void 0
            }), k.data(t.target, s.widgetName + "-item") === s && (i = k(t.target)), !!i && (!(this.options.handle && !e && (k(this.options.handle, i).find("*").addBack().each(function () {
                this === t.target && (n = !0)
            }), !n)) && (this.currentItem = i, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function (t, e, i) {
            var n, s, o = this.options;
            if ((this.currentContainer = this).refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, k.extend(this.offset, {
                click: {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top},
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (s = this.document.find("body"), this.storedCursor = s.css("cursor"), s.css("cursor", o.cursor), this.storedStylesheet = k("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(s)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i) for (n = this.containers.length - 1; 0 <= n; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
            return k.ui.ddmanager && (k.ui.ddmanager.current = this), k.ui.ddmanager && !o.dropBehaviour && k.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function (t) {
            var e, i, n, s, o = this.options, r = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), !1 !== r && k.ui.ddmanager && !o.dropBehaviour && k.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; 0 <= e; e--) if (n = (i = this.items[e]).item[0], (s = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === s ? "next" : "prev"]()[0] !== n && !k.contains(this.placeholder[0], n) && ("semi-dynamic" !== this.options.type || !k.contains(this.element[0], n))) {
                if (this.direction = 1 === s ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                this._rearrange(t, i), this._trigger("change", t, this._uiHash());
                break
            }
            return this._contactContainers(t), k.ui.ddmanager && k.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (t, e) {
            if (t) {
                if (k.ui.ddmanager && !this.options.dropBehaviour && k.ui.ddmanager.drop(this, t), this.options.revert) {
                    var i = this, n = this.placeholder.offset(), s = this.options.axis, o = {};
                    s && "x" !== s || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), s && "y" !== s || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, k(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
                        i._clear(t)
                    })
                } else this._clear(t, e);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp(new k.Event("mouseup", {target: null})), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var t = this.containers.length - 1; 0 <= t; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), k.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? k(this.domPosition.prev).after(this.currentItem) : k(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (e) {
            var t = this._getItemsAsjQuery(e && e.connected), i = [];
            return e = e || {}, k(t).each(function () {
                var t = (k(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                t && i.push((e.key || t[1] + "[]") + "=" + (e.key && e.expression ? t[1] : t[2]))
            }), !i.length && e.key && i.push(e.key + "="), i.join("&")
        },
        toArray: function (t) {
            var e = this._getItemsAsjQuery(t && t.connected), i = [];
            return t = t || {}, e.each(function () {
                i.push(k(t.item || this).attr(t.attribute || "id") || "")
            }), i
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, n = this.positionAbs.top,
                s = n + this.helperProportions.height, o = t.left, r = o + t.width, a = t.top, l = a + t.height,
                h = this.offset.click.top, u = this.offset.click.left,
                c = "x" === this.options.axis || a < n + h && n + h < l,
                d = "y" === this.options.axis || o < e + u && e + u < r, p = c && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && r > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > a && l > s - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (t) {
            var e, i,
                n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !!(n && s) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function (t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                n = this._getDragVerticalDirection(), s = this._getDragHorizontalDirection();
            return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (0 < t ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (0 < t ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (t) {
            function e() {
                r.push(this)
            }

            var i, n, s, o, r = [], a = [], l = this._connectWith();
            if (l && t) for (i = l.length - 1; 0 <= i; i--) for (n = (s = k(l[i], this.document[0])).length - 1; 0 <= n; n--) (o = k.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && a.push([k.isFunction(o.options.items) ? o.options.items.call(o.element) : k(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
            for (a.push([k.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : k(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = a.length - 1; 0 <= i; i--) a[i][0].each(e);
            return k(r)
        },
        _removeCurrentsFromItems: function () {
            var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = k.grep(this.items, function (t) {
                for (var e = 0; i.length > e; e++) if (i[e] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (t) {
            this.items = [], this.containers = [this];
            var e, i, n, s, o, r, a, l, h = this.items,
                u = [[k.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {item: this.currentItem}) : k(this.options.items, this.element), this]],
                c = this._connectWith();
            if (c && this.ready) for (e = c.length - 1; 0 <= e; e--) for (i = (n = k(c[e], this.document[0])).length - 1; 0 <= i; i--) (s = k.data(n[i], this.widgetFullName)) && s !== this && !s.options.disabled && (u.push([k.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, {item: this.currentItem}) : k(s.options.items, s.element), s]), this.containers.push(s));
            for (e = u.length - 1; 0 <= e; e--) for (o = u[e][1], i = 0, l = (r = u[e][0]).length; i < l; i++) (a = k(r[i])).data(this.widgetName + "-item", o), h.push({
                item: a,
                instance: o,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function (t) {
            var e, i, n, s;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), e = this.items.length - 1; 0 <= e; e--) (i = this.items[e]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? k(this.options.toleranceElement, i.item) : i.item, t || (i.width = n.outerWidth(), i.height = n.outerHeight()), s = n.offset(), i.left = s.left, i.top = s.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (e = this.containers.length - 1; 0 <= e; e--) s = this.containers[e].element.offset(), this.containers[e].containerCache.left = s.left, this.containers[e].containerCache.top = s.top, this.containers[e].containerCache.width = this.containers[e].element.outerWidth(), this.containers[e].containerCache.height = this.containers[e].element.outerHeight();
            return this
        },
        _createPlaceholder: function (i) {
            var n, s = (i = i || this).options;
            s.placeholder && s.placeholder.constructor !== String || (n = s.placeholder, s.placeholder = {
                element: function () {
                    var t = i.currentItem[0].nodeName.toLowerCase(), e = k("<" + t + ">", i.document[0]);
                    return i._addClass(e, "ui-sortable-placeholder", n || i.currentItem[0].className)._removeClass(e, "ui-sortable-helper"), "tbody" === t ? i._createTrPlaceholder(i.currentItem.find("tr").eq(0), k("<tr>", i.document[0]).appendTo(e)) : "tr" === t ? i._createTrPlaceholder(i.currentItem, e) : "img" === t && e.attr("src", i.currentItem.attr("src")), n || e.css("visibility", "hidden"), e
                }, update: function (t, e) {
                    (!n || s.forcePlaceholderSize) && (e.height() || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                }
            }), i.placeholder = k(s.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), s.placeholder.update(i, i.placeholder)
        },
        _createTrPlaceholder: function (t, e) {
            var i = this;
            t.children().each(function () {
                k("<td>&#160;</td>", i.document[0]).attr("colspan", k(this).attr("colspan") || 1).appendTo(e)
            })
        },
        _contactContainers: function (t) {
            var e, i, n, s, o, r, a, l, h, u, c = null, d = null;
            for (e = this.containers.length - 1; 0 <= e; e--) if (!k.contains(this.currentItem[0], this.containers[e].element[0])) if (this._intersectsWith(this.containers[e].containerCache)) {
                if (c && k.contains(this.containers[e].element[0], c.element[0])) continue;
                c = this.containers[e], d = e
            } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", t, this._uiHash(this)), this.containers[e].containerCache.over = 0);
            if (c) if (1 === this.containers.length) this.containers[d].containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1); else {
                for (n = 1e4, s = null, o = (h = c.floating || this._isFloating(this.currentItem)) ? "left" : "top", r = h ? "width" : "height", u = h ? "pageX" : "pageY", i = this.items.length - 1; 0 <= i; i--) k.contains(this.containers[d].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (a = this.items[i].item.offset()[o], l = !1, t[u] - a > this.items[i][r] / 2 && (l = !0), n > Math.abs(t[u] - a) && (n = Math.abs(t[u] - a), s = this.items[i], this.direction = l ? "up" : "down"));
                if (!s && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[d]) return void (this.currentContainer.containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1));
                s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[d].element, !0), this._trigger("change", t, this._uiHash()), this.containers[d]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[d], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1
            }
        },
        _createHelper: function (t) {
            var e = this.options,
                i = k.isFunction(e.helper) ? k(e.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || k("parent" !== e.appendTo ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!i[0].style.width || e.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || e.forceHelperSize) && i.height(this.currentItem.height()), i
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), k.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && k.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && k.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return {top: 0, left: 0};
            var t = this.currentItem.position();
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var t, e, i, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = k(n.containment)[0], e = k(n.containment).offset(), i = "hidden" !== k(t).css("overflow"), this.containment = [e.left + (parseInt(k(t).css("borderLeftWidth"), 10) || 0) + (parseInt(k(t).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(k(t).css("borderTopWidth"), 10) || 0) + (parseInt(k(t).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(k(t).css("borderLeftWidth"), 10) || 0) - (parseInt(k(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(k(t).css("borderTopWidth"), 10) || 0) - (parseInt(k(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && k.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                s = /(html|body)/i.test(n[0].tagName);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft()) * i
            }
        },
        _generatePosition: function (t) {
            var e, i, n = this.options, s = t.pageX, o = t.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && k.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (e = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? e - this.offset.click.top >= this.containment[1] && e - this.offset.click.top <= this.containment[3] ? e : e - this.offset.click.top >= this.containment[1] ? e - n.grid[1] : e + n.grid[1] : e, i = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0], s = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - n.grid[0] : i + n.grid[0] : i)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function (t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function () {
                s === this.counter && this.refreshPositions(!n)
            })
        },
        _clear: function (t, e) {
            function i(e, i, n) {
                return function (t) {
                    n._trigger(e, t, i._uiHash(i))
                }
            }

            this.reverting = !1;
            var n, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (n in this._storedCSS) ("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && s.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function (t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (e || (s.push(function (t) {
                this._trigger("remove", t, this._uiHash())
            }), s.push(function (e) {
                return function (t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), s.push(function (e) {
                return function (t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), n = this.containers.length - 1; 0 <= n; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (n = 0; s.length > n; n++) s[n].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function () {
            !1 === k.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function (t) {
            var e = t || this;
            return {
                helper: e.helper,
                placeholder: e.placeholder || k([]),
                position: e.position,
                originalPosition: e.originalPosition,
                offset: e.positionAbs,
                item: e.currentItem,
                sender: t ? t.element : null
            }
        }
    }), k.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var n = this._super(), s = this.element;
            return k.each(["min", "max", "step"], function (t, e) {
                var i = s.attr(e);
                null != i && i.length && (n[e] = i)
            }), n
        },
        _events: {
            keydown: function (t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            }, keyup: "_stop", focus: function () {
                this.previous = this.element.val()
            }, blur: function (t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void (this.previous !== this.element.val() && this._trigger("change", t)))
            }, mousewheel: function (t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((0 < e ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            }, "mousedown .ui-spinner-button": function (t) {
                function e() {
                    this.element[0] === k.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = i, this._delay(function () {
                        this.previous = i
                    }))
                }

                var i;
                i = this.element[0] === k.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), t.preventDefault(), e.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur, e.call(this)
                }), !1 !== this._start(t) && this._repeat(null, k(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (t) {
                return k(t.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(t) && void this._repeat(null, k(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) : void 0
            }, "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function () {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function () {
            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({classes: {"ui-button": ""}}), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }), this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function (t) {
            var e = this.options, i = k.ui.keyCode;
            switch (t.keyCode) {
                case i.UP:
                    return this._repeat(null, 1, t), !0;
                case i.DOWN:
                    return this._repeat(null, -1, t), !0;
                case i.PAGE_UP:
                    return this._repeat(null, e.page, t), !0;
                case i.PAGE_DOWN:
                    return this._repeat(null, -e.page, t), !0
            }
            return !1
        },
        _start: function (t) {
            return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0)
        },
        _repeat: function (t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },
        _spin: function (t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {value: i}) || (this._value(i), this.counter++)
        },
        _increment: function (t) {
            var e = this.options.incremental;
            return e ? k.isFunction(e) ? e(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function (t) {
            var e, i, n = this.options;
            return i = t - (e = null !== n.min ? n.min : 0), t = e + (i = Math.round(i / n.step) * n.step), t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && n.min > t ? n.min : t
        },
        _stop: function (t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function (t, e) {
            var i, n, s;
            return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, e.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, e.down)), void this._super(t, e))
        },
        _setOptionDisabled: function (t) {
            this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
        },
        _setOptions: e(function (t) {
            this._super(t)
        }),
        _parse: function (t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function (t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function () {
            var t = this.value();
            return null !== t && t === this._adjustValue(t)
        },
        _value: function (t, e) {
            var i;
            "" !== t && (null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        },
        _destroy: function () {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function (t) {
            this._stepUp(t)
        }),
        _stepUp: function (t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },
        stepDown: e(function (t) {
            this._stepDown(t)
        }),
        _stepDown: function (t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },
        pageUp: e(function (t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function (t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function (t) {
            return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val())
        },
        widget: function () {
            return this.uiSpinner
        }
    }), !1 !== k.uiBackCompat && k.widget("ui.spinner", k.ui.spinner, {
        _enhance: function () {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        }, _uiSpinnerHtml: function () {
            return "<span>"
        }, _buttonHtml: function () {
            return "<a></a><a></a>"
        }
    }), k.ui.spinner, k.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: (b = /#.*$/, function (t) {
            var e, i;
            e = t.href.replace(b, ""), i = location.href.replace(b, "");
            try {
                e = decodeURIComponent(e)
            } catch (t) {
            }
            try {
                i = decodeURIComponent(i)
            } catch (t) {
            }
            return 1 < t.hash.length && e === i
        }),
        _create: function () {
            var e = this, t = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, t.collapsible), this._processTabs(), t.active = this._initialActive(), k.isArray(t.disabled) && (t.disabled = k.unique(t.disabled.concat(k.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t)
            }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(t.active) : k(), this._refresh(), this.active.length && this.load(t.active)
        },
        _initialActive: function () {
            var i = this.options.active, t = this.options.collapsible, n = location.hash.substring(1);
            return null === i && (n && this.tabs.each(function (t, e) {
                return k(e).attr("aria-controls") === n ? (i = t, !1) : void 0
            }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = !!this.tabs.length && 0)), !1 !== i && (-1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0)), !t && !1 === i && this.anchors.length && (i = 0), i
        },
        _getCreateEventData: function () {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : k()}
        },
        _tabKeydown: function (t) {
            var e = k(k.ui.safeActiveElement(this.document[0])).closest("li"), i = this.tabs.index(e), n = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case k.ui.keyCode.RIGHT:
                    case k.ui.keyCode.DOWN:
                        i++;
                        break;
                    case k.ui.keyCode.UP:
                    case k.ui.keyCode.LEFT:
                        n = !1, i--;
                        break;
                    case k.ui.keyCode.END:
                        i = this.anchors.length - 1;
                        break;
                    case k.ui.keyCode.HOME:
                        i = 0;
                        break;
                    case k.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);
                    case k.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);
                    default:
                        return
                }
                t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, n), t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function (t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === k.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function (t) {
            return t.altKey && t.keyCode === k.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === k.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function (t, e) {
            for (var i = this.tabs.length - 1; -1 !== k.inArray((i < t && (t = 0), t < 0 && (t = i), t), this.options.disabled);) t = e ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function (t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
        },
        _setOption: function (t, e) {
            return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void ("heightStyle" === t && this._setupHeightStyle(e)))
        },
        _sanitizeSelector: function (t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var t = this.options, e = this.tablist.children(":has(a[href])");
            t.disabled = k.map(e.filter(".ui-state-disabled"), function (t) {
                return e.index(t)
            }), this._processTabs(), !1 !== t.active && this.anchors.length ? this.active.length && !k.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = k()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = k()), this._refresh()
        },
        _refresh: function () {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"}), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var l = this, t = this.tabs, e = this.anchors, i = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (t) {
                k(this).is(".ui-state-disabled") && t.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                k(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
                return k("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = k(), this.anchors.each(function (t, e) {
                var i, n, s, o = k(e).uniqueId().attr("id"), r = k(e).closest("li"), a = r.attr("aria-controls");
                l._isLocal(e) ? (s = (i = e.hash).substring(1), n = l.element.find(l._sanitizeSelector(i))) : (i = "#" + (s = r.attr("aria-controls") || k({}).uniqueId()[0].id), (n = l.element.find(i)).length || (n = l._createPanel(s)).insertAfter(l.panels[t - 1] || l.tablist), n.attr("aria-live", "polite")), n.length && (l.panels = l.panels.add(n)), a && r.data("ui-tabs-aria-controls", a), r.attr({
                    "aria-controls": s,
                    "aria-labelledby": o
                }), n.attr("aria-labelledby", o)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), t && (this._off(t.not(this.tabs)), this._off(e.not(this.anchors)), this._off(i.not(this.panels)))
        },
        _getList: function () {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function (t) {
            return k("<div>").attr("id", t).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function (t) {
            var e, i, n;
            for (k.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), n = 0; i = this.tabs[n]; n++) e = k(i), !0 === t || -1 !== k.inArray(n, t) ? (e.attr("aria-disabled", "true"), this._addClass(e, null, "ui-state-disabled")) : (e.removeAttr("aria-disabled"), this._removeClass(e, null, "ui-state-disabled"));
            this.options.disabled = t, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t)
        },
        _setupEvents: function (t) {
            var i = {};
            t && k.each(t.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function (t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (t) {
            var i, e = this.element.parent();
            "fill" === t ? (i = e.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var t = k(this), e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= k(this).outerHeight(!0)
            }), this.panels.each(function () {
                k(this).height(Math.max(0, i - k(this).innerHeight() + k(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
                i = Math.max(i, k(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (t) {
            var e = this.options, i = this.active, n = k(t.currentTarget).closest("li"), s = n[0] === i[0],
                o = s && e.collapsible, r = o ? k() : this._getPanelForTab(n),
                a = i.length ? this._getPanelForTab(i) : k(),
                l = {oldTab: i, oldPanel: a, newTab: o ? k() : n, newPanel: r};
            t.preventDefault(), n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || s && !e.collapsible || !1 === this._trigger("beforeActivate", t, l) || (e.active = !o && this.tabs.index(n), this.active = s ? k() : n, this.xhr && this.xhr.abort(), a.length || r.length || k.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(n), t), this._toggle(t, l))
        },
        _toggle: function (t, e) {
            function i() {
                s.running = !1, s._trigger("activate", t, e)
            }

            function n() {
                s._addClass(e.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), o.length && s.options.show ? s._show(o, s.options.show, i) : (o.show(), i())
            }

            var s = this, o = e.newPanel, r = e.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
                s._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n()
            }) : (this._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), e.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), o.length && r.length ? e.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
                return 0 === k(this).attr("tabIndex")
            }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), e.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function (t) {
            var e, i = this._findActive(t);
            i[0] !== this.active[0] && (i.length || (i = this.active), e = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: e,
                currentTarget: e,
                preventDefault: k.noop
            }))
        },
        _findActive: function (t) {
            return !1 === t ? k() : this.tabs.eq(t)
        },
        _getIndex: function (t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + k.ui.escapeSelector(t) + "']"))), t
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                k.data(this, "ui-tabs-destroy") ? k(this).remove() : k(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }), this.tabs.each(function () {
                var t = k(this), e = t.data("ui-tabs-aria-controls");
                e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (i) {
            var t = this.options.disabled;
            !1 !== t && (t = void 0 !== i && (i = this._getIndex(i), k.isArray(t) ? k.map(t, function (t) {
                return t !== i ? t : null
            }) : k.map(this.tabs, function (t, e) {
                return e !== i ? e : null
            })), this._setOptionDisabled(t))
        },
        disable: function (t) {
            var e = this.options.disabled;
            if (!0 !== e) {
                if (void 0 === t) e = !0; else {
                    if (t = this._getIndex(t), -1 !== k.inArray(t, e)) return;
                    e = k.isArray(e) ? k.merge([t], e).sort() : [t]
                }
                this._setOptionDisabled(e)
            }
        },
        load: function (t, n) {
            t = this._getIndex(t);
            var s = this, i = this.tabs.eq(t), e = i.find(".ui-tabs-anchor"), o = this._getPanelForTab(i),
                r = {tab: i, panel: o}, a = function (t, e) {
                    "abort" === e && s.panels.stop(!1, !0), s._removeClass(i, "ui-tabs-loading"), o.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                };
            this._isLocal(e[0]) || (this.xhr = k.ajax(this._ajaxSettings(e, n, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(i, "ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function (t, e, i) {
                setTimeout(function () {
                    o.html(t), s._trigger("load", n, r), a(i, e)
                }, 1)
            }).fail(function (t, e) {
                setTimeout(function () {
                    a(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function (t, i, n) {
            var s = this;
            return {
                url: t.attr("href").replace(/#.*$/, ""), beforeSend: function (t, e) {
                    return s._trigger("beforeLoad", i, k.extend({jqXHR: t, ajaxSettings: e}, n))
                }
            }
        },
        _getPanelForTab: function (t) {
            var e = k(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + e))
        }
    }), !1 !== k.uiBackCompat && k.widget("ui.tabs", k.ui.tabs, {
        _processTabs: function () {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
        }
    }), k.ui.tabs, k.widget("ui.tooltip", {
        version: "1.12.1", options: {
            classes: {"ui-tooltip": "ui-corner-all ui-widget-shadow"},
            content: function () {
                var t = k(this).attr("title") || "";
                return k("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
            show: !0,
            track: !1,
            close: null,
            open: null
        }, _addDescribedBy: function (t, e) {
            var i = (t.attr("aria-describedby") || "").split(/\s+/);
            i.push(e), t.data("ui-tooltip-id", e).attr("aria-describedby", k.trim(i.join(" ")))
        }, _removeDescribedBy: function (t) {
            var e = t.data("ui-tooltip-id"), i = (t.attr("aria-describedby") || "").split(/\s+/), n = k.inArray(e, i);
            -1 !== n && i.splice(n, 1), t.removeData("ui-tooltip-id"), (i = k.trim(i.join(" "))) ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
        }, _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.liveRegion = k("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = k([])
        }, _setOption: function (t, e) {
            var i = this;
            this._super(t, e), "content" === t && k.each(this.tooltips, function (t, e) {
                i._updateContent(e.element)
            })
        }, _setOptionDisabled: function (t) {
            this[t ? "_disable" : "_enable"]()
        }, _disable: function () {
            var n = this;
            k.each(this.tooltips, function (t, e) {
                var i = k.Event("blur");
                i.target = i.currentTarget = e.element[0], n.close(i, !0)
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
                var t = k(this);
                return t.is("[title]") ? t.data("ui-tooltip-title", t.attr("title")).removeAttr("title") : void 0
            }))
        }, _enable: function () {
            this.disabledTitles.each(function () {
                var t = k(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            }), this.disabledTitles = k([])
        }, open: function (t) {
            var i = this, e = k(t ? t.target : this.element).closest(this.options.items);
            e.length && !e.data("ui-tooltip-id") && (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")), e.data("ui-tooltip-open", !0), t && "mouseover" === t.type && e.parents().each(function () {
                var t, e = k(this);
                e.data("ui-tooltip-open") && ((t = k.Event("blur")).target = t.currentTarget = this, i.close(t, !0)), e.attr("title") && (e.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: e.attr("title")
                }, e.attr("title", ""))
            }), this._registerCloseHandlers(t, e), this._updateContent(e, t))
        }, _updateContent: function (e, i) {
            var t, n = this.options.content, s = this, o = i ? i.type : null;
            return "string" == typeof n || n.nodeType || n.jquery ? this._open(i, e, n) : void ((t = n.call(e[0], function (t) {
                s._delay(function () {
                    e.data("ui-tooltip-open") && (i && (i.type = o), this._open(i, e, t))
                })
            })) && this._open(i, e, t))
        }, _open: function (t, e, i) {
            function n(t) {
                l.of = t, o.is(":hidden") || o.position(l)
            }

            var s, o, r, a, l = k.extend({}, this.options.position);
            if (i) {
                if (s = this._find(e)) return void s.tooltip.find(".ui-tooltip-content").html(i);
                e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")), s = this._tooltip(e), o = s.tooltip, this._addDescribedBy(e, o.attr("id")), o.find(".ui-tooltip-content").html(i), this.liveRegion.children().hide(), (a = k("<div>").html(o.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), a.removeAttr("id").find("[id]").removeAttr("id"), a.appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {mousemove: n}), n(t)) : o.position(k.extend({of: e}, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
                    o.is(":visible") && (n(l.of), clearInterval(r))
                }, k.fx.interval)), this._trigger("open", t, {tooltip: o})
            }
        }, _registerCloseHandlers: function (t, i) {
            var e = {
                keyup: function (t) {
                    if (t.keyCode === k.ui.keyCode.ESCAPE) {
                        var e = k.Event(t);
                        e.currentTarget = i[0], this.close(e, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (e.remove = function () {
                this._removeTooltip(this._find(i).tooltip)
            }), t && "mouseover" !== t.type || (e.mouseleave = "close"), t && "focusin" !== t.type || (e.focusout = "close"), this._on(!0, i, e)
        }, close: function (t) {
            var e, i = this, n = k(t ? t.currentTarget : this.element), s = this._find(n);
            return s ? (e = s.tooltip, void (s.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), s.hiding = !0, e.stop(!0), this._hide(e, this.options.hide, function () {
                i._removeTooltip(k(this))
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && k.each(this.parents, function (t, e) {
                k(e.element).attr("title", e.title), delete i.parents[t]
            }), s.closing = !0, this._trigger("close", t, {tooltip: e}), s.hiding || (s.closing = !1)))) : void n.removeData("ui-tooltip-open")
        }, _tooltip: function (t) {
            var e = k("<div>").attr("role", "tooltip"), i = k("<div>").appendTo(e), n = e.uniqueId().attr("id");
            return this._addClass(i, "ui-tooltip-content"), this._addClass(e, "ui-tooltip", "ui-widget ui-widget-content"), e.appendTo(this._appendTo(t)), this.tooltips[n] = {
                element: t,
                tooltip: e
            }
        }, _find: function (t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null
        }, _removeTooltip: function (t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        }, _appendTo: function (t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body), e
        }, _destroy: function () {
            var s = this;
            k.each(this.tooltips, function (t, e) {
                var i = k.Event("blur"), n = e.element;
                i.target = i.currentTarget = n[0], s.close(i, !0), k("#" + t).remove(), n.data("ui-tooltip-title") && (n.attr("title") || n.attr("title", n.data("ui-tooltip-title")), n.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    }), !1 !== k.uiBackCompat && k.widget("ui.tooltip", k.ui.tooltip, {
        options: {tooltipClass: null},
        _tooltip: function () {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
        }
    }), k.ui.tooltip
}), function (t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e(require("jquery"), require("moment")); else if ("function" == typeof define && define.amd) define(["jquery", "moment"], e); else {
        var i = "object" == typeof exports ? e(require("jquery"), require("moment")) : e(t.jQuery, t.moment);
        for (var n in i) ("object" == typeof exports ? exports : t)[n] = i[n]
    }
}(this, function (i, n) {
    return function (i) {
        function n(t) {
            if (s[t]) return s[t].exports;
            var e = s[t] = {i: t, l: !1, exports: {}};
            return i[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports
        }

        var s = {};
        return n.m = i, n.c = s, n.d = function (t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: i})
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 72)
    }([function (t, e) {
        e.__extends = function (t, e) {
            function i() {
                this.constructor = t
            }

            (function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }
    }, function (t, e) {
        t.exports = i
    }, function (t, l, e) {
        function i(t) {
            t.height("")
        }

        function r(t) {
            var e, i, n, s = t[0].offsetWidth - t[0].clientWidth, o = t[0].offsetHeight - t[0].clientHeight;
            return s = a(s), e = {
                left: 0,
                right: 0,
                top: 0,
                bottom: o = a(o)
            }, null === y && (i = v("<div><div/></div>").css({
                position: "absolute",
                top: -1e3,
                left: 0,
                border: 0,
                padding: 0,
                overflow: "scroll",
                direction: "rtl"
            }).appendTo("body"), n = i.children().offset().left > i.offset().left, i.remove(), y = n), y && "rtl" == t.css("direction") ? e.left = s : e.right = s, e
        }

        function a(t) {
            return t = Math.max(0, t), Math.round(t)
        }

        function h(t, e) {
            return parseFloat(t.css(e)) || 0
        }

        function n(t) {
            t.preventDefault()
        }

        function o(t, e, i) {
            return i.func ? i.func(t, e) : s(t[i.field], e[i.field]) * (i.order || 1)
        }

        function s(t, e) {
            return t || e ? null == e ? -1 : null == t ? 1 : "string" === v.type(t) || "string" === v.type(e) ? String(t).localeCompare(String(e)) : t - e : 0
        }

        function u(t, e) {
            var i, n, s, o, r, a;
            for (i = 0; i < l.unitsDesc.length && (n = l.unitsDesc[i], o = n, r = t, !(1 <= (s = null != (a = e) ? a.diff(r, o, !0) : m.isDuration(r) ? r.as(o) : r.end.diff(r.start, o, !0)) && g(s))); i++) ;
            return n
        }

        function c(t) {
            return Boolean(t.hours() || t.minutes() || t.seconds() || t.milliseconds())
        }

        function d() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var i = window.console;
            if (i && i.log) return i.log.apply(i, t)
        }

        function p(t, e) {
            return _.call(t, e)
        }

        function f(t) {
            return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
        }

        function g(t) {
            return t % 1 == 0
        }

        Object.defineProperty(l, "__esModule", {value: !0});
        var m = e(3), v = e(1);
        l.compensateScroll = function (t, e) {
            e.left && t.css({
                "border-left-width": 1,
                "margin-left": e.left - 1
            }), e.right && t.css({"border-right-width": 1, "margin-right": e.right - 1})
        }, l.uncompensateScroll = function (t) {
            t.css({"margin-left": "", "margin-right": "", "border-left-width": "", "border-right-width": ""})
        }, l.disableCursor = function () {
            v("body").addClass("fc-not-allowed")
        }, l.enableCursor = function () {
            v("body").removeClass("fc-not-allowed")
        }, l.distributeHeight = function (s, t, e) {
            var o = Math.floor(t / s.length), r = Math.floor(t - o * (s.length - 1)), a = [], l = [], h = [], u = 0;
            i(s), s.each(function (t, e) {
                var i = t === s.length - 1 ? r : o, n = v(e).outerHeight(!0);
                n < i ? (a.push(e), l.push(n), h.push(v(e).height())) : u += n
            }), e && (t -= u, o = Math.floor(t / a.length), r = Math.floor(t - o * (a.length - 1))), v(a).each(function (t, e) {
                var i = t === a.length - 1 ? r : o, n = l[t], s = i - (n - h[t]);
                n < i && v(e).height(s)
            })
        }, l.undistributeHeight = i, l.matchCellWidths = function (t) {
            var n = 0;
            return t.find("> *").each(function (t, e) {
                var i = v(e).outerWidth();
                n < i && (n = i)
            }), n++, t.width(n), n
        }, l.subtractInnerElHeight = function (t, e) {
            var i, n = t.add(e);
            return n.css({position: "relative", left: -1}), i = t.outerHeight() - e.outerHeight(), n.css({
                position: "",
                left: ""
            }), i
        }, l.getScrollParent = function (t) {
            var e = t.css("position"), i = t.parents().filter(function () {
                var t = v(this);
                return /(auto|scroll)/.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
            }).eq(0);
            return "fixed" !== e && i.length ? i : v(t[0].ownerDocument || document)
        }, l.getOuterRect = function (t, e) {
            var i = t.offset(), n = i.left - (e ? e.left : 0), s = i.top - (e ? e.top : 0);
            return {left: n, right: n + t.outerWidth(), top: s, bottom: s + t.outerHeight()}
        }, l.getClientRect = function (t, e) {
            var i = t.offset(), n = r(t), s = i.left + h(t, "border-left-width") + n.left - (e ? e.left : 0),
                o = i.top + h(t, "border-top-width") + n.top - (e ? e.top : 0);
            return {left: s, right: s + t[0].clientWidth, top: o, bottom: o + t[0].clientHeight}
        }, l.getContentRect = function (t, e) {
            var i = t.offset(), n = i.left + h(t, "border-left-width") + h(t, "padding-left") - (e ? e.left : 0),
                s = i.top + h(t, "border-top-width") + h(t, "padding-top") - (e ? e.top : 0);
            return {left: n, right: n + t.width(), top: s, bottom: s + t.height()}
        }, l.getScrollbarWidths = r;
        var y = null;
        l.isPrimaryMouseButton = function (t) {
            return 1 == t.which && !t.ctrlKey
        }, l.getEvX = function (t) {
            var e = t.originalEvent.touches;
            return e && e.length ? e[0].pageX : t.pageX
        }, l.getEvY = function (t) {
            var e = t.originalEvent.touches;
            return e && e.length ? e[0].pageY : t.pageY
        }, l.getEvIsTouch = function (t) {
            return /^touch/.test(t.type)
        }, l.preventSelection = function (t) {
            t.addClass("fc-unselectable").on("selectstart", n)
        }, l.allowSelection = function (t) {
            t.removeClass("fc-unselectable").off("selectstart", n)
        }, l.preventDefault = n, l.intersectRects = function (t, e) {
            var i = {
                left: Math.max(t.left, e.left),
                right: Math.min(t.right, e.right),
                top: Math.max(t.top, e.top),
                bottom: Math.min(t.bottom, e.bottom)
            };
            return i.left < i.right && i.top < i.bottom && i
        }, l.constrainPoint = function (t, e) {
            return {left: Math.min(Math.max(t.left, e.left), e.right), top: Math.min(Math.max(t.top, e.top), e.bottom)}
        }, l.getRectCenter = function (t) {
            return {left: (t.left + t.right) / 2, top: (t.top + t.bottom) / 2}
        }, l.diffPoints = function (t, e) {
            return {left: t.left - e.left, top: t.top - e.top}
        }, l.parseFieldSpecs = function (t) {
            var e, i, n = [], s = [];
            for ("string" == typeof t ? s = t.split(/\s*,\s*/) : "function" == typeof t ? s = [t] : v.isArray(t) && (s = t), e = 0; e < s.length; e++) "string" == typeof (i = s[e]) ? n.push("-" == i.charAt(0) ? {
                field: i.substring(1),
                order: -1
            } : {field: i, order: 1}) : "function" == typeof i && n.push({func: i});
            return n
        }, l.compareByFieldSpecs = function (t, e, i) {
            var n, s;
            for (n = 0; n < i.length; n++) if (s = o(t, e, i[n])) return s;
            return 0
        }, l.compareByFieldSpec = o, l.flexibleCompare = s, l.dayIDs = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], l.unitsDesc = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"], l.diffDayTime = function (t, e) {
            return m.duration({
                days: t.clone().stripTime().diff(e.clone().stripTime(), "days"),
                ms: t.time() - e.time()
            })
        }, l.diffDay = function (t, e) {
            return m.duration({days: t.clone().stripTime().diff(e.clone().stripTime(), "days")})
        }, l.diffByUnit = function (t, e, i) {
            return m.duration(Math.round(t.diff(e, i, !0)), i)
        }, l.computeGreatestUnit = u, l.computeDurationGreatestUnit = function (t, e) {
            var i = u(t);
            return "week" === i && "object" == typeof e && e.days && (i = "day"), i
        }, l.divideRangeByDuration = function (t, e, i) {
            var n;
            return c(i) ? (e - t) / i : (n = i.asMonths(), 1 <= Math.abs(n) && g(n) ? e.diff(t, "months", !0) / n : e.diff(t, "days", !0) / i.asDays())
        }, l.divideDurationByDuration = function (t, e) {
            var i, n;
            return c(t) || c(e) ? t / e : (i = t.asMonths(), n = e.asMonths(), 1 <= Math.abs(i) && g(i) && 1 <= Math.abs(n) && g(n) ? i / n : t.asDays() / e.asDays())
        }, l.multiplyDuration = function (t, e) {
            var i;
            return c(t) ? m.duration(t * e) : (i = t.asMonths(), 1 <= Math.abs(i) && g(i) ? m.duration({months: i * e}) : m.duration({days: t.asDays() * e}))
        }, l.durationHasTime = c, l.isNativeDate = function (t) {
            return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
        }, l.isTimeString = function (t) {
            return "string" == typeof t && /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)
        }, l.log = d, l.warn = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var i = window.console;
            return i && i.warn ? i.warn.apply(i, t) : d.apply(null, t)
        };
        var _ = {}.hasOwnProperty;
        l.mergeProps = function t(e, i) {
            var n, s, o, r, a, l, h = {};
            if (i) for (n = 0; n < i.length; n++) {
                for (s = i[n], o = [], r = e.length - 1; 0 <= r; r--) if ("object" == typeof (a = e[r][s])) o.unshift(a); else if (void 0 !== a) {
                    h[s] = a;
                    break
                }
                o.length && (h[s] = t(o))
            }
            for (n = e.length - 1; 0 <= n; n--) for (s in l = e[n]) s in h || (h[s] = l[s]);
            return h
        }, l.copyOwnProps = function (t, e) {
            for (var i in t) p(t, i) && (e[i] = t[i])
        }, l.hasOwnProp = p, l.applyAll = function (t, e, i) {
            if (v.isFunction(t) && (t = [t]), t) {
                var n, s;
                for (n = 0; n < t.length; n++) s = t[n].apply(e, i) || s;
                return s
            }
        }, l.removeMatching = function (t, e) {
            for (var i = 0, n = 0; n < t.length;) e(t[n]) ? (t.splice(n, 1), i++) : n++;
            return i
        }, l.removeExact = function (t, e) {
            for (var i = 0, n = 0; n < t.length;) t[n] === e ? (t.splice(n, 1), i++) : n++;
            return i
        }, l.isArraysEqual = function (t, e) {
            var i, n = t.length;
            if (null == n || n !== e.length) return !1;
            for (i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
            return !0
        }, l.firstDefined = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            for (var i = 0; i < t.length; i++) if (void 0 !== t[i]) return t[i]
        }, l.htmlEscape = f, l.stripHtmlEntities = function (t) {
            return t.replace(/&.*?;/g, "")
        }, l.cssToStr = function (t) {
            var i = [];
            return v.each(t, function (t, e) {
                null != e && i.push(t + ":" + e)
            }), i.join(";")
        }, l.attrsToStr = function (t) {
            var i = [];
            return v.each(t, function (t, e) {
                null != e && i.push(t + '="' + f(e) + '"')
            }), i.join(" ")
        }, l.capitaliseFirstLetter = function (t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }, l.compareNumbers = function (t, e) {
            return t - e
        }, l.isInt = g, l.proxy = function (t, e) {
            var i = t[e];
            return function () {
                return i.apply(t, arguments)
            }
        }, l.debounce = function (e, i, n) {
            void 0 === n && (n = !1);
            var s, o, r, a, l, h = function () {
                var t = +new Date - a;
                t < i ? s = setTimeout(h, i - t) : (s = null, n || (l = e.apply(r, o), r = o = null))
            };
            return function () {
                r = this, o = arguments, a = +new Date;
                var t = n && !s;
                return s || (s = setTimeout(h, i)), t && (l = e.apply(r, o), r = o = null), l
            }
        }
    }, function (t, e) {
        t.exports = n
    }, function (t, e, i) {
        function a(t, e) {
            return t.startMs - e.startMs
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(3), s = i(9), o = function () {
            function r(t, e) {
                this.isStart = !0, this.isEnd = !0, n.isMoment(t) && (t = t.clone().stripZone()), n.isMoment(e) && (e = e.clone().stripZone()), t && (this.startMs = t.valueOf()), e && (this.endMs = e.valueOf())
            }

            return r.prototype.intersect = function (t) {
                var e = this.startMs, i = this.endMs, n = null;
                return null != t.startMs && (e = null == e ? t.startMs : Math.max(e, t.startMs)), null != t.endMs && (i = null == i ? t.endMs : Math.min(i, t.endMs)), (null == e || null == i || e < i) && ((n = new r(e, i)).isStart = this.isStart && e === this.startMs, n.isEnd = this.isEnd && i === this.endMs), n
            }, r.prototype.intersectsWith = function (t) {
                return (null == this.endMs || null == t.startMs || this.endMs > t.startMs) && (null == this.startMs || null == t.endMs || this.startMs < t.endMs)
            }, r.prototype.containsRange = function (t) {
                return (null == this.startMs || null != t.startMs && t.startMs >= this.startMs) && (null == this.endMs || null != t.endMs && t.endMs <= this.endMs)
            }, r.prototype.containsDate = function (t) {
                var e = t.valueOf();
                return (null == this.startMs || e >= this.startMs) && (null == this.endMs || e < this.endMs)
            }, r.prototype.constrainDate = function (t) {
                var e = t.valueOf();
                return null != this.startMs && e < this.startMs && (e = this.startMs), null != this.endMs && e >= this.endMs && (e = this.endMs - 1), e
            }, r.prototype.equals = function (t) {
                return this.startMs === t.startMs && this.endMs === t.endMs
            }, r.prototype.clone = function () {
                var t = new r(this.startMs, this.endMs);
                return t.isStart = this.isStart, t.isEnd = this.isEnd, t
            }, r.prototype.getStart = function () {
                return null != this.startMs ? s.default.utc(this.startMs).stripZone() : null
            }, r.prototype.getEnd = function () {
                return null != this.endMs ? s.default.utc(this.endMs).stripZone() : null
            }, r.prototype.as = function (t) {
                return n.utc(this.endMs).diff(n.utc(this.startMs), t, !0)
            }, r.invertRanges = function (t, e) {
                var i, n, s = [], o = e.startMs;
                for (t.sort(a), i = 0; i < t.length; i++) (n = t[i]).startMs > o && s.push(new r(o, n.startMs)), n.endMs > o && (o = n.endMs);
                return o < e.endMs && s.push(new r(o, e.endMs)), s
            }, r
        }();
        e.default = o
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(0), o = i(1), r = i(50), n = i(21), a = i(33), l = function (i) {
            function n(t) {
                var e = i.call(this) || this;
                return e.calendar = t, e.className = [], e.uid = String(n.uuid++), e
            }

            return s.__extends(n, i), n.prototype.fetch = function (t, e, i) {
            }, n.prototype.removeEventDefsById = function (t) {
            }, n.prototype.removeAllEventDefs = function () {
            }, n.prototype.getPrimitive = function (t) {
            }, n.prototype.parseEventDefs = function (t) {
                var e, i, n = [];
                for (e = 0; e < t.length; e++) (i = this.parseEventDef(t[e])) && n.push(i);
                return n
            }, n.prototype.parseEventDef = function (t) {
                var e = this.calendar.opt("eventDataTransform"), i = this.eventDataTransform;
                return e && (t = e(t)), i && (t = i(t)), a.default.parse(t, this)
            }, n.prototype.applyManualStandardProps = function (t) {
                return null != t.id && (this.id = n.normalizeId(t.id)), o.isArray(t.className) ? this.className = t.className : "string" == typeof t.className && (this.className = t.className.split(/\s+/)), !0
            }, n.parse = function (t, e) {
                var i = new this(e);
                return !("object" != typeof t || !i.applyProps(t)) && i
            }, n.normalizeId = function (t) {
                return t ? String(t) : null
            }, n.defineStandardProps = r.default.defineStandardProps, n.copyVerbatimStandardProps = r.default.copyVerbatimStandardProps, n.uuid = 0, n
        }(n.default);
        e.default = l, r.default.mixInto(l), l.defineStandardProps({
            id: !1,
            className: !1,
            color: !0,
            backgroundColor: !0,
            borderColor: !0,
            textColor: !0,
            editable: !0,
            startEditable: !0,
            durationEditable: !0,
            rendering: !0,
            overlap: !0,
            constraint: !0,
            allDayDefault: !0,
            eventDataTransform: !0
        })
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = i(1), o = i(12), r = 0, a = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.listenerId = null, t
            }

            return n.__extends(t, e), t.prototype.listenTo = function (t, e, i) {
                if ("object" == typeof e) for (var n in e) e.hasOwnProperty(n) && this.listenTo(t, n, e[n]); else "string" == typeof e && t.on(e + "." + this.getListenerNamespace(), s.proxy(i, this))
            }, t.prototype.stopListeningTo = function (t, e) {
                t.off((e || "") + "." + this.getListenerNamespace())
            }, t.prototype.getListenerNamespace = function () {
                return null == this.listenerId && (this.listenerId = r++), "_listener" + this.listenerId
            }, t
        }(o.default);
        e.default = a
    }, function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            version: "<%= version %>",
            internalApiVersion: 12,
            touchMouseIgnoreWait: 500,
            dataAttrPrefix: "",
            views: {},
            locales: {}
        }
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = i(1), o = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n.__extends(e, t), e.prototype.on = function (t, e) {
                return s(this).on(t, this._prepareIntercept(e)), this
            }, e.prototype.one = function (t, e) {
                return s(this).one(t, this._prepareIntercept(e)), this
            }, e.prototype._prepareIntercept = function (i) {
                var t = function (t, e) {
                    return i.apply(e.context || this, e.args || [])
                };
                return i.guid || (i.guid = s.guid++), t.guid = i.guid, t
            }, e.prototype.off = function (t, e) {
                return s(this).off(t, e), this
            }, e.prototype.trigger = function (t) {
                for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                return s(this).triggerHandler(t, {args: e}), this
            }, e.prototype.triggerWith = function (t, e, i) {
                return s(this).triggerHandler(t, {context: e, args: i}), this
            }, e.prototype.hasHandlers = function (t) {
                var e = s._data(this, "events");
                return e && e[t] && 0 < e[t].length
            }, e
        }(i(12).default);
        e.default = o
    }, function (t, e, i) {
        function n(t, e, i) {
            void 0 === e && (e = !1), void 0 === i && (i = !1);
            var n, s, o, r, a = t[0], l = 1 == t.length && "string" == typeof a;
            return h.isMoment(a) || c.isNativeDate(a) || void 0 === a ? r = h.apply(null, t) : (s = n = !1, l ? d.test(a) ? (t = [a += "-01"], s = n = !0) : (o = p.exec(a)) && (n = !o[5], s = !0) : u.isArray(a) && (s = !0), r = e || n ? h.utc.apply(h, t) : h.apply(null, t), n ? (r._ambigTime = !0, r._ambigZone = !0) : i && (s ? r._ambigZone = !0 : l && r.utcOffset(a))), r._fullCalendar = !0, r
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var h = i(3), u = i(1), c = i(2), d = /^\s*\d{4}-\d\d$/,
            p = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,
            s = h.fn;
        e.newMomentProto = s;
        var o = u.extend({}, s);
        e.oldMomentProto = o;
        var r = h.momentProperties;
        r.push("_fullCalendar"), r.push("_ambigTime"), r.push("_ambigZone"), e.oldMomentFormat = function (t, e) {
            return o.format.call(t, e)
        };
        var a = function () {
            return n(arguments)
        };
        (e.default = a).utc = function () {
            var t = n(arguments, !0);
            return t.hasTime() && t.utc(), t
        }, a.parseZone = function () {
            return n(arguments, !0, !0)
        }, s.week = s.weeks = function (t) {
            var e = this._locale._fullCalendar_weekCalc;
            return null == t && "function" == typeof e ? e(this) : "ISO" === e ? o.isoWeek.apply(this, arguments) : o.week.apply(this, arguments)
        }, s.time = function (t) {
            if (!this._fullCalendar) return o.time.apply(this, arguments);
            if (null == t) return h.duration({
                hours: this.hours(),
                minutes: this.minutes(),
                seconds: this.seconds(),
                milliseconds: this.milliseconds()
            });
            this._ambigTime = !1, h.isDuration(t) || h.isMoment(t) || (t = h.duration(t));
            var e = 0;
            return h.isDuration(t) && (e = 24 * Math.floor(t.asDays())), this.hours(e + t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())
        }, s.stripTime = function () {
            return this._ambigTime || (this.utc(!0), this.set({
                hours: 0,
                minutes: 0,
                seconds: 0,
                ms: 0
            }), this._ambigTime = !0, this._ambigZone = !0), this
        }, s.hasTime = function () {
            return !this._ambigTime
        }, s.stripZone = function () {
            var t;
            return this._ambigZone || (t = this._ambigTime, this.utc(!0), this._ambigTime = t || !1, this._ambigZone = !0), this
        }, s.hasZone = function () {
            return !this._ambigZone
        }, s.local = function (t) {
            return o.local.call(this, this._ambigZone || t), this._ambigTime = !1, this._ambigZone = !1, this
        }, s.utc = function (t) {
            return o.utc.call(this, t), this._ambigTime = !1, this._ambigZone = !1, this
        }, s.utcOffset = function (t) {
            return null != t && (this._ambigTime = !1, this._ambigZone = !1), o.utcOffset.apply(this, arguments)
        }
    }, function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t, e) {
                this.isAllDay = !1, this.unzonedRange = t, this.isAllDay = e
            }

            return t.prototype.toLegacy = function (t) {
                return {
                    start: t.msToMoment(this.unzonedRange.startMs, this.isAllDay),
                    end: t.msToMoment(this.unzonedRange.endMs, this.isAllDay)
                }
            }, t
        }();
        e.default = i
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(0), n = i(22), o = i(51), r = i(15), a = function (n) {
            function t() {
                return null !== n && n.apply(this, arguments) || this
            }

            return s.__extends(t, n), t.prototype.buildInstances = function () {
                return [this.buildInstance()]
            }, t.prototype.buildInstance = function () {
                return new o.default(this, this.dateProfile)
            }, t.prototype.isAllDay = function () {
                return this.dateProfile.isAllDay()
            }, t.prototype.clone = function () {
                var t = n.prototype.clone.call(this);
                return t.dateProfile = this.dateProfile, t
            }, t.prototype.rezone = function () {
                var t = this.source.calendar, e = this.dateProfile;
                this.dateProfile = new r.default(t.moment(e.start), e.end ? t.moment(e.end) : null, t)
            }, t.prototype.applyManualStandardProps = function (t) {
                var e = n.prototype.applyManualStandardProps.call(this, t), i = r.default.parse(t, this.source);
                return !!i && (this.dateProfile = i, null != t.date && (this.miscProps.date = t.date), e)
            }, t
        }(n.default);
        (e.default = a).defineStandardProps({start: !1, date: !1, end: !1, allDay: !1})
    }, function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t() {
            }

            return t.mixInto = function (e) {
                var i = this;
                Object.getOwnPropertyNames(this.prototype).forEach(function (t) {
                    e.prototype[t] || (e.prototype[t] = i.prototype[t])
                })
            }, t.mixOver = function (e) {
                var i = this;
                Object.getOwnPropertyNames(this.prototype).forEach(function (t) {
                    e.prototype[t] = i.prototype[t]
                })
            }, t
        }();
        e.default = i
    }, function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t) {
                this.view = t._getView(), this.component = t
            }

            return t.prototype.opt = function (t) {
                return this.view.opt(t)
            }, t.prototype.end = function () {
            }, t
        }();
        e.default = i
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(1), s = i(7), o = i(8), r = i(6), a = null, l = 0, h = function () {
            function t() {
                this.isTouching = !1, this.mouseIgnoreDepth = 0
            }

            return t.prototype.bind = function () {
                var e = this;
                this.listenTo(n(document), {
                    touchstart: this.handleTouchStart,
                    touchcancel: this.handleTouchCancel,
                    touchend: this.handleTouchEnd,
                    mousedown: this.handleMouseDown,
                    mousemove: this.handleMouseMove,
                    mouseup: this.handleMouseUp,
                    click: this.handleClick,
                    selectstart: this.handleSelectStart,
                    contextmenu: this.handleContextMenu
                }), window.addEventListener("touchmove", this.handleTouchMoveProxy = function (t) {
                    e.handleTouchMove(n.Event(t))
                }, {passive: !1}), window.addEventListener("scroll", this.handleScrollProxy = function (t) {
                    e.handleScroll(n.Event(t))
                }, !0)
            }, t.prototype.unbind = function () {
                this.stopListeningTo(n(document)), window.removeEventListener("touchmove", this.handleTouchMoveProxy), window.removeEventListener("scroll", this.handleScrollProxy, !0)
            }, t.prototype.handleTouchStart = function (t) {
                this.stopTouch(t, !0), this.isTouching = !0, this.trigger("touchstart", t)
            }, t.prototype.handleTouchMove = function (t) {
                this.isTouching && this.trigger("touchmove", t)
            }, t.prototype.handleTouchCancel = function (t) {
                this.isTouching && (this.trigger("touchcancel", t), this.stopTouch(t))
            }, t.prototype.handleTouchEnd = function (t) {
                this.stopTouch(t)
            }, t.prototype.handleMouseDown = function (t) {
                this.shouldIgnoreMouse() || this.trigger("mousedown", t)
            }, t.prototype.handleMouseMove = function (t) {
                this.shouldIgnoreMouse() || this.trigger("mousemove", t)
            }, t.prototype.handleMouseUp = function (t) {
                this.shouldIgnoreMouse() || this.trigger("mouseup", t)
            }, t.prototype.handleClick = function (t) {
                this.shouldIgnoreMouse() || this.trigger("click", t)
            }, t.prototype.handleSelectStart = function (t) {
                this.trigger("selectstart", t)
            }, t.prototype.handleContextMenu = function (t) {
                this.trigger("contextmenu", t)
            }, t.prototype.handleScroll = function (t) {
                this.trigger("scroll", t)
            }, t.prototype.stopTouch = function (t, e) {
                void 0 === e && (e = !1), this.isTouching && (this.isTouching = !1, this.trigger("touchend", t), e || this.startTouchMouseIgnore())
            }, t.prototype.startTouchMouseIgnore = function () {
                var t = this, e = s.default.touchMouseIgnoreWait;
                e && (this.mouseIgnoreDepth++, setTimeout(function () {
                    t.mouseIgnoreDepth--
                }, e))
            }, t.prototype.shouldIgnoreMouse = function () {
                return this.isTouching || Boolean(this.mouseIgnoreDepth)
            }, t.get = function () {
                return a || (a = new t).bind(), a
            }, t.needed = function () {
                t.get(), l++
            }, t.unneeded = function () {
                --l || (a.unbind(), a = null)
            }, t
        }();
        e.default = h, r.default.mixInto(h), o.default.mixInto(h)
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(4), s = function () {
            function h(t, e, i) {
                this.start = t, this.end = e || null, this.unzonedRange = this.buildUnzonedRange(i)
            }

            return h.prototype.isAllDay = function () {
                return !(this.start.hasTime() || this.end && this.end.hasTime())
            }, h.prototype.buildUnzonedRange = function (t) {
                var e = this.start.clone().stripZone().valueOf(), i = this.getEnd(t).stripZone().valueOf();
                return new n.default(e, i)
            }, h.prototype.getEnd = function (t) {
                return this.end ? this.end.clone() : t.getDefaultEventEnd(this.isAllDay(), this.start)
            }, h.isStandardProp = function (t) {
                return "start" === t || "date" === t || "end" === t || "allDay" === t
            }, h.parse = function (t, e) {
                var i = t.start || t.date, n = t.end;
                if (!i) return !1;
                var s = e.calendar, o = s.moment(i), r = n ? s.moment(n) : null, a = t.allDay,
                    l = s.opt("forceEventDuration");
                return !!o.isValid() && (!r || r.isValid() && r.isAfter(o) || (r = null), null == a && null == (a = e.allDayDefault) && (a = s.opt("allDayDefault")), !0 === a ? (o.stripTime(), r && r.stripTime()) : !1 === a && (o.hasTime() || o.time(0), r && !r.hasTime() && r.time(0)), !r && l && (r = s.getDefaultEventEnd(!o.hasTime(), o)), new h(o, r, s))
            }, h
        }();
        e.default = s
    }, function (t, e, i) {
        function n(e, i) {
            e.then = function (t) {
                return "function" == typeof t ? r.resolve(t(i)) : e
            }
        }

        function s(i) {
            i.then = function (t, e) {
                return "function" == typeof e && e(), i
            }
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = i(1), r = {
            construct: function (t) {
                var e = o.Deferred(), i = e.promise();
                return "function" == typeof t && t(function (t) {
                    e.resolve(t), n(i, t)
                }, function () {
                    e.reject(), s(i)
                }), i
            }, resolve: function (t) {
                var e = o.Deferred().resolve(t).promise();
                return n(e, t), e
            }, reject: function () {
                var t = o.Deferred().reject().promise();
                return s(t), t
            }
        };
        e.default = r
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(4), s = i(23), r = i(53), o = function () {
            function t(t) {
                this.eventInstances = t || []
            }

            return t.prototype.getAllEventRanges = function (t) {
                return t ? this.sliceNormalRenderRanges(t) : this.eventInstances.map(s.eventInstanceToEventRange)
            }, t.prototype.sliceRenderRanges = function (t) {
                return this.isInverse() ? this.sliceInverseRenderRanges(t) : this.sliceNormalRenderRanges(t)
            }, t.prototype.sliceNormalRenderRanges = function (t) {
                var e, i, n, s = this.eventInstances, o = [];
                for (e = 0; e < s.length; e++) (n = (i = s[e]).dateProfile.unzonedRange.intersect(t)) && o.push(new r.default(n, i.def, i));
                return o
            }, t.prototype.sliceInverseRenderRanges = function (t) {
                var e = this.eventInstances.map(s.eventInstanceToUnzonedRange), i = this.getEventDef();
                return (e = n.default.invertRanges(e, t)).map(function (t) {
                    return new r.default(t, i)
                })
            }, t.prototype.isInverse = function () {
                return this.getEventDef().hasInverseRendering()
            }, t.prototype.getEventDef = function () {
                return this.explicitEventDef || this.eventInstances[0].def
            }, t
        }();
        e.default = o
    }, function (t, e, i) {
        function s(t, e) {
            return !t && !e || !(!t || !e) && t.component === e.component && n(t, e) && n(e, t)
        }

        function n(t, e) {
            for (var i in t) if (!/^(component|left|right|top|bottom)$/.test(i) && t[i] !== e[i]) return !1;
            return !0
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(0), a = i(2), o = function (o) {
            function t(t, e) {
                var i = o.call(this, e) || this;
                return i.component = t, i
            }

            return r.__extends(t, o), t.prototype.handleInteractionStart = function (t) {
                var e, i, n, s = this.subjectEl;
                this.component.hitsNeeded(), this.computeScrollBounds(), t ? (n = i = {
                    left: a.getEvX(t),
                    top: a.getEvY(t)
                }, s && (e = a.getOuterRect(s), n = a.constrainPoint(n, e)), this.origHit = this.queryHit(n.left, n.top), s && this.options.subjectCenter && (this.origHit && (e = a.intersectRects(this.origHit, e) || e), n = a.getRectCenter(e)), this.coordAdjust = a.diffPoints(n, i)) : (this.origHit = null, this.coordAdjust = null), o.prototype.handleInteractionStart.call(this, t)
            }, t.prototype.handleDragStart = function (t) {
                var e;
                o.prototype.handleDragStart.call(this, t), (e = this.queryHit(a.getEvX(t), a.getEvY(t))) && this.handleHitOver(e)
            }, t.prototype.handleDrag = function (t, e, i) {
                var n;
                o.prototype.handleDrag.call(this, t, e, i), s(n = this.queryHit(a.getEvX(i), a.getEvY(i)), this.hit) || (this.hit && this.handleHitOut(), n && this.handleHitOver(n))
            }, t.prototype.handleDragEnd = function (t) {
                this.handleHitDone(), o.prototype.handleDragEnd.call(this, t)
            }, t.prototype.handleHitOver = function (t) {
                var e = s(t, this.origHit);
                this.hit = t, this.trigger("hitOver", this.hit, e, this.origHit)
            }, t.prototype.handleHitOut = function () {
                this.hit && (this.trigger("hitOut", this.hit), this.handleHitDone(), this.hit = null)
            }, t.prototype.handleHitDone = function () {
                this.hit && this.trigger("hitDone", this.hit)
            }, t.prototype.handleInteractionEnd = function (t, e) {
                o.prototype.handleInteractionEnd.call(this, t, e), this.origHit = null, this.hit = null, this.component.hitsNotNeeded()
            }, t.prototype.handleScrollEnd = function () {
                o.prototype.handleScrollEnd.call(this), this.isDragging && (this.component.releaseHits(), this.component.prepareHits())
            }, t.prototype.queryHit = function (t, e) {
                return this.coordAdjust && (t += this.coordAdjust.left, e += this.coordAdjust.top), this.component.queryHit(t, e)
            }, t
        }(i(39).default);
        e.default = o
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(2);
        e.globalDefaults = {
            titleRangeSeparator: " – ",
            monthYearFormat: "MMMM YYYY",
            defaultTimedEventDuration: "02:00:00",
            defaultAllDayEventDuration: {days: 1},
            forceEventDuration: !1,
            nextDayThreshold: "09:00:00",
            columnHeader: !0,
            defaultView: "month",
            aspectRatio: 1.35,
            header: {left: "title", center: "", right: "today prev,next"},
            weekends: !0,
            weekNumbers: !1,
            weekNumberTitle: "W",
            weekNumberCalculation: "local",
            scrollTime: "06:00:00",
            minTime: "00:00:00",
            maxTime: "24:00:00",
            showNonCurrentDates: !0,
            lazyFetching: !0,
            startParam: "start",
            endParam: "end",
            timezoneParam: "timezone",
            timezone: !1,
            locale: null,
            isRTL: !1,
            buttonText: {
                prev: "prev",
                next: "next",
                prevYear: "prev year",
                nextYear: "next year",
                year: "year",
                today: "today",
                month: "month",
                week: "week",
                day: "day"
            },
            allDayText: "all-day",
            agendaEventMinHeight: 0,
            theme: !1,
            dragOpacity: .75,
            dragRevertDuration: 500,
            dragScroll: !0,
            unselectAuto: !0,
            dropAccept: "*",
            eventOrder: "title",
            eventLimit: !1,
            eventLimitText: "more",
            eventLimitClick: "popover",
            dayPopoverFormat: "LL",
            handleWindowResize: !0,
            windowResizeDelay: 100,
            longPressDelay: 1e3
        }, e.englishDefaults = {dayPopoverFormat: "dddd, MMMM D"}, e.rtlDefaults = {
            header: {
                left: "next,prev today",
                center: "",
                right: "title"
            },
            buttonIcons: {
                prev: "right-single-arrow",
                next: "left-single-arrow",
                prevYear: "right-double-arrow",
                nextYear: "left-double-arrow"
            },
            themeButtonIcons: {
                prev: "circle-triangle-e",
                next: "circle-triangle-w",
                nextYear: "seek-prev",
                prevYear: "seek-next"
            }
        };
        var s = ["header", "footer", "buttonText", "buttonIcons", "themeButtonIcons"];
        e.mergeOptions = function (t) {
            return n.mergeProps(t, s)
        }
    }, function (t, e, i) {
        function n(t, e) {
            var i, n;
            i = u[t] || (u[t] = {}), e && (i = u[t] = l.mergeOptions([i, e])), n = s(t), o.each(d, function (t, e) {
                null == i[t] && (i[t] = e(n, i))
            }), l.globalDefaults.locale = t
        }

        function s(t) {
            return r.localeData(t) || r.localeData("en")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = i(1), r = i(3), a = i(7), l = i(19), h = i(2), u = a.default.locales;
        e.localeOptionHash = u, e.datepickerLocale = function (t, e, i) {
            var n = u[t] || (u[t] = {});
            n.isRTL = i.isRTL, n.weekNumberTitle = i.weekHeader, o.each(c, function (t, e) {
                n[t] = e(i)
            });
            var s = o.datepicker;
            s && (s.regional[e] = s.regional[t] = i, s.regional.en = s.regional[""], s.setDefaults(i))
        }, e.locale = n;
        var c = {
            buttonText: function (t) {
                return {
                    prev: h.stripHtmlEntities(t.prevText),
                    next: h.stripHtmlEntities(t.nextText),
                    today: h.stripHtmlEntities(t.currentText)
                }
            }, monthYearFormat: function (t) {
                return t.showMonthAfterYear ? "YYYY[" + t.yearSuffix + "] MMMM" : "MMMM YYYY[" + t.yearSuffix + "]"
            }
        }, d = {
            dayOfMonthFormat: function (t, e) {
                var i = t.longDateFormat("l");
                return i = i.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), e.isRTL ? i += " ddd" : i = "ddd " + i, i
            }, mediumTimeFormat: function (t) {
                return t.longDateFormat("LT").replace(/\s*a$/i, "a")
            }, smallTimeFormat: function (t) {
                return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
            }, extraSmallTimeFormat: function (t) {
                return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
            }, hourFormat: function (t) {
                return t.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a")
            }, noMeridiemTimeFormat: function (t) {
                return t.longDateFormat("LT").replace(/\s*a$/i, "")
            }
        }, p = {
            smallDayDateFormat: function (t) {
                return t.isRTL ? "D dd" : "dd D"
            }, weekFormat: function (t) {
                return t.isRTL ? "w[ " + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + " ]w"
            }, smallWeekFormat: function (t) {
                return t.isRTL ? "w[" + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + "]w"
            }
        };
        e.populateInstanceComputableOptions = function (i) {
            o.each(p, function (t, e) {
                null == i[t] && (i[t] = e(i))
            })
        }, e.getMomentLocaleData = s, n("en", l.englishDefaults)
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = i(2), o = function () {
            function t() {
            }

            return t.extend = function (t) {
                var e = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }

                    return n.__extends(e, t), e
                }(this);
                return s.copyOwnProps(t, e.prototype), e
            }, t.mixin = function (t) {
                s.copyOwnProps(t, this.prototype)
            }, t
        }();
        e.default = o
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(1), s = i(50), o = function () {
            function e(t) {
                this.source = t, this.className = [], this.miscProps = {}
            }

            return e.prototype.clone = function () {
                var t = new this.constructor(this.source);
                return t.id = this.id, t.rawId = this.rawId, t.uid = this.uid, e.copyVerbatimStandardProps(this, t), t.className = this.className.slice(), t.miscProps = n.extend({}, this.miscProps), t
            }, e.prototype.hasInverseRendering = function () {
                return "inverse-background" === this.getRendering()
            }, e.prototype.hasBgRendering = function () {
                var t = this.getRendering();
                return "inverse-background" === t || "background" === t
            }, e.prototype.getRendering = function () {
                return null != this.rendering ? this.rendering : this.source.rendering
            }, e.prototype.getConstraint = function () {
                return null != this.constraint ? this.constraint : null != this.source.constraint ? this.source.constraint : this.source.calendar.opt("eventConstraint")
            }, e.prototype.getOverlap = function () {
                return null != this.overlap ? this.overlap : null != this.source.overlap ? this.source.overlap : this.source.calendar.opt("eventOverlap")
            }, e.prototype.isStartExplicitlyEditable = function () {
                return null != this.startEditable ? this.startEditable : this.source.startEditable
            }, e.prototype.isDurationExplicitlyEditable = function () {
                return null != this.durationEditable ? this.durationEditable : this.source.durationEditable
            }, e.prototype.isExplicitlyEditable = function () {
                return null != this.editable ? this.editable : this.source.editable
            }, e.prototype.toLegacy = function () {
                var t = n.extend({}, this.miscProps);
                return t._id = this.uid, t.source = this.source, t.className = this.className.slice(), t.allDay = this.isAllDay(), null != this.rawId && (t.id = this.rawId), e.copyVerbatimStandardProps(this, t), t
            }, e.prototype.applyManualStandardProps = function (t) {
                return null != t.id ? this.id = e.normalizeId(this.rawId = t.id) : this.id = e.generateId(), null != t._id ? this.uid = String(t._id) : this.uid = e.generateId(), n.isArray(t.className) && (this.className = t.className), "string" == typeof t.className && (this.className = t.className.split(/\s+/)), !0
            }, e.prototype.applyMiscProps = function (t) {
                n.extend(this.miscProps, t)
            }, e.parse = function (t, e) {
                var i = new this(e);
                return !!i.applyProps(t) && i
            }, e.normalizeId = function (t) {
                return String(t)
            }, e.generateId = function () {
                return "_fc" + e.uuid++
            }, e.defineStandardProps = s.default.defineStandardProps, e.copyVerbatimStandardProps = s.default.copyVerbatimStandardProps, e.uuid = 0, e
        }();
        e.default = o, s.default.mixInto(o), o.defineStandardProps({
            _id: !1,
            id: !1,
            className: !1,
            source: !1,
            title: !0,
            url: !0,
            rendering: !0,
            constraint: !0,
            overlap: !0,
            editable: !0,
            startEditable: !0,
            durationEditable: !0,
            color: !0,
            backgroundColor: !0,
            borderColor: !0,
            textColor: !0
        })
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(53), s = i(24), o = i(10);
        e.eventDefsToEventInstances = function (t, e) {
            var i, n = [];
            for (i = 0; i < t.length; i++) n.push.apply(n, t[i].buildInstances(e));
            return n
        }, e.eventInstanceToEventRange = function (t) {
            return new n.default(t.dateProfile.unzonedRange, t.def, t)
        }, e.eventRangeToEventFootprint = function (t) {
            return new s.default(new o.default(t.unzonedRange, t.eventDef.isAllDay()), t.eventDef, t.eventInstance)
        }, e.eventInstanceToUnzonedRange = function (t) {
            return t.dateProfile.unzonedRange
        }, e.eventFootprintToComponentFootprint = function (t) {
            return t.componentFootprint
        }
    }, function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t, e, i) {
                this.componentFootprint = t, this.eventDef = e, i && (this.eventInstance = i)
            }

            return t.prototype.getEventLegacy = function () {
                return (this.eventInstance || this.eventDef).toLegacy()
            }, t
        }();
        e.default = i
    }, function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            sourceClasses: [],
            registerClass: function (t) {
                this.sourceClasses.unshift(t)
            },
            parse: function (t, e) {
                var i, n, s = this.sourceClasses;
                for (i = 0; i < s.length; i++) if (n = s[i].parse(t, e)) return n
            }
        }
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var g = i(2), m = i(15), v = i(22), y = i(35), n = i(11), s = function () {
            function f() {
            }

            return f.prototype.mutateSingle = function (t) {
                var e;
                return this.dateMutation && (e = t.dateProfile, t.dateProfile = this.dateMutation.buildNewDateProfile(e, t.source.calendar)), null != this.eventDefId && (t.id = v.default.normalizeId(t.rawId = this.eventDefId)), this.className && (t.className = this.className), this.verbatimStandardProps && n.default.copyVerbatimStandardProps(this.verbatimStandardProps, t), this.miscProps && t.applyMiscProps(this.miscProps), e ? function () {
                    t.dateProfile = e
                } : function () {
                }
            }, f.prototype.setDateMutation = function (t) {
                t && !t.isEmpty() ? this.dateMutation = t : this.dateMutation = null
            }, f.prototype.isEmpty = function () {
                return !this.dateMutation
            }, f.createFromRawProps = function (t, e, i) {
                var n, s, o, r, a = t.def, l = {}, h = {}, u = {}, c = {}, d = null, p = null;
                for (n in e) m.default.isStandardProp(n) ? l[n] = e[n] : a.isStandardProp(n) ? h[n] = e[n] : a.miscProps[n] !== e[n] && (u[n] = e[n]);
                return (s = m.default.parse(l, a.source)) && (o = y.default.createFromDiff(t.dateProfile, s, i)), h.id !== a.id && (d = h.id), g.isArraysEqual(h.className, a.className) || (p = h.className), v.default.copyVerbatimStandardProps(h, c), (r = new f).eventDefId = d, r.className = p, r.verbatimStandardProps = c, r.miscProps = u, o && (r.dateMutation = o), r
            }, f
        }();
        e.default = s
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(1), s = function () {
            function t(t) {
                this.optionsManager = t, this.processIconOverride()
            }

            return t.prototype.processIconOverride = function () {
                this.iconOverrideOption && this.setIconOverride(this.optionsManager.get(this.iconOverrideOption))
            }, t.prototype.setIconOverride = function (t) {
                var e, i;
                if (n.isPlainObject(t)) {
                    for (i in e = n.extend({}, this.iconClasses), t) e[i] = this.applyIconOverridePrefix(t[i]);
                    this.iconClasses = e
                } else !1 === t && (this.iconClasses = {})
            }, t.prototype.applyIconOverridePrefix = function (t) {
                var e = this.iconOverridePrefix;
                return e && 0 !== t.indexOf(e) && (t = e + t), t
            }, t.prototype.getClass = function (t) {
                return this.classes[t] || ""
            }, t.prototype.getIconClass = function (t) {
                var e = this.iconClasses[t];
                return e ? this.baseIconClass + " " + e : ""
            }, t.prototype.getCustomButtonIconClass = function (t) {
                var e;
                return this.iconOverrideCustomButtonOption && (e = t[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(e) : ""
            }, t
        }();
        (e.default = s).prototype.classes = {}, s.prototype.iconClasses = {}, s.prototype.baseIconClass = "", s.prototype.iconOverridePrefix = ""
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = i(1), o = i(2), r = function (i) {
            function t(t) {
                var e = i.call(this) || this;
                return t = t || {}, e.overflowX = t.overflowX || t.overflow || "auto", e.overflowY = t.overflowY || t.overflow || "auto", e
            }

            return n.__extends(t, i), t.prototype.render = function () {
                this.el = this.renderEl(), this.applyOverflow()
            }, t.prototype.renderEl = function () {
                return this.scrollEl = s('<div class="fc-scroller"></div>')
            }, t.prototype.clear = function () {
                this.setHeight("auto"), this.applyOverflow()
            }, t.prototype.destroy = function () {
                this.el.remove()
            }, t.prototype.applyOverflow = function () {
                this.scrollEl.css({"overflow-x": this.overflowX, "overflow-y": this.overflowY})
            }, t.prototype.lockOverflow = function (t) {
                var e = this.overflowX, i = this.overflowY;
                t = t || this.getScrollbarWidths(), "auto" === e && (e = t.top || t.bottom || this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth ? "scroll" : "hidden"), "auto" === i && (i = t.left || t.right || this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight ? "scroll" : "hidden"), this.scrollEl.css({
                    "overflow-x": e,
                    "overflow-y": i
                })
            }, t.prototype.setHeight = function (t) {
                this.scrollEl.height(t)
            }, t.prototype.getScrollTop = function () {
                return this.scrollEl.scrollTop()
            }, t.prototype.setScrollTop = function (t) {
                this.scrollEl.scrollTop(t)
            }, t.prototype.getClientWidth = function () {
                return this.scrollEl[0].clientWidth
            }, t.prototype.getClientHeight = function () {
                return this.scrollEl[0].clientHeight
            }, t.prototype.getScrollbarWidths = function () {
                return o.getScrollbarWidths(this.scrollEl)
            }, t
        }(i(21).default);
        e.default = r
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(0), o = i(1), r = i(2), n = i(61), a = i(14), l = function (n) {
            function t(t, e) {
                var i = n.call(this, t, e) || this;
                return i.segSelector = ".fc-event-container > *", i.dateSelectingClass && (i.dateClicking = new i.dateClickingClass(i)), i.dateSelectingClass && (i.dateSelecting = new i.dateSelectingClass(i)), i.eventPointingClass && (i.eventPointing = new i.eventPointingClass(i)), i.eventDraggingClass && i.eventPointing && (i.eventDragging = new i.eventDraggingClass(i, i.eventPointing)), i.eventResizingClass && i.eventPointing && (i.eventResizing = new i.eventResizingClass(i, i.eventPointing)), i.externalDroppingClass && (i.externalDropping = new i.externalDroppingClass(i)), i
            }

            return s.__extends(t, n), t.prototype.setElement = function (t) {
                n.prototype.setElement.call(this, t), this.dateClicking && this.dateClicking.bindToEl(t), this.dateSelecting && this.dateSelecting.bindToEl(t), this.bindAllSegHandlersToEl(t)
            }, t.prototype.removeElement = function () {
                this.endInteractions(), n.prototype.removeElement.call(this)
            }, t.prototype.executeEventUnrender = function () {
                this.endInteractions(), n.prototype.executeEventUnrender.call(this)
            }, t.prototype.bindGlobalHandlers = function () {
                n.prototype.bindGlobalHandlers.call(this), this.externalDropping && this.externalDropping.bindToDocument()
            }, t.prototype.unbindGlobalHandlers = function () {
                n.prototype.unbindGlobalHandlers.call(this), this.externalDropping && this.externalDropping.unbindFromDocument()
            }, t.prototype.bindDateHandlerToEl = function (t, e, i) {
                var n = this;
                this.el.on(e, function (t) {
                    if (!o(t.target).is(n.segSelector + "," + n.segSelector + " *,.fc-more,a[data-goto]")) return i.call(n, t)
                })
            }, t.prototype.bindAllSegHandlersToEl = function (e) {
                [this.eventPointing, this.eventDragging, this.eventResizing].forEach(function (t) {
                    t && t.bindToEl(e)
                })
            }, t.prototype.bindSegHandlerToEl = function (t, e, i) {
                var n = this;
                t.on(e, this.segSelector, function (t) {
                    var e = o(t.currentTarget).data("fc-seg");
                    if (e && !n.shouldIgnoreEventPointing()) return i.call(n, e, t)
                })
            }, t.prototype.shouldIgnoreMouse = function () {
                return a.default.get().shouldIgnoreMouse()
            }, t.prototype.shouldIgnoreTouch = function () {
                var t = this._getView();
                return t.isSelected || t.selectedEvent
            }, t.prototype.shouldIgnoreEventPointing = function () {
                return this.eventDragging && this.eventDragging.isDragging || this.eventResizing && this.eventResizing.isResizing
            }, t.prototype.canStartSelection = function (t, e) {
                return r.getEvIsTouch(e) && !this.canStartResize(t, e) && (this.isEventDefDraggable(t.footprint.eventDef) || this.isEventDefResizable(t.footprint.eventDef))
            }, t.prototype.canStartDrag = function (t, e) {
                return !this.canStartResize(t, e) && this.isEventDefDraggable(t.footprint.eventDef)
            }, t.prototype.canStartResize = function (t, e) {
                var i = this._getView(), n = t.footprint.eventDef;
                return (!r.getEvIsTouch(e) || i.isEventDefSelected(n)) && this.isEventDefResizable(n) && o(e.target).is(".fc-resizer")
            }, t.prototype.endInteractions = function () {
                [this.dateClicking, this.dateSelecting, this.eventPointing, this.eventDragging, this.eventResizing].forEach(function (t) {
                    t && t.end()
                })
            }, t.prototype.isEventDefDraggable = function (t) {
                return this.isEventDefStartEditable(t)
            }, t.prototype.isEventDefStartEditable = function (t) {
                var e = t.isStartExplicitlyEditable();
                return null == e && null == (e = this.opt("eventStartEditable")) && (e = this.isEventDefGenerallyEditable(t)), e
            }, t.prototype.isEventDefGenerallyEditable = function (t) {
                var e = t.isExplicitlyEditable();
                return null == e && (e = this.opt("editable")), e
            }, t.prototype.isEventDefResizableFromStart = function (t) {
                return this.opt("eventResizableFromStart") && this.isEventDefResizable(t)
            }, t.prototype.isEventDefResizableFromEnd = function (t) {
                return this.isEventDefResizable(t)
            }, t.prototype.isEventDefResizable = function (t) {
                var e = t.isDurationExplicitlyEditable();
                return null == e && null == (e = this.opt("eventDurationEditable")) && (e = this.isEventDefGenerallyEditable(t)), e
            }, t.prototype.diffDates = function (t, e) {
                return this.largeUnit ? r.diffByUnit(t, e, this.largeUnit) : r.diffDayTime(t, e)
            }, t.prototype.isEventInstanceGroupAllowed = function (t) {
                var e, i = this._getView(), n = this.dateProfile,
                    s = this.eventRangesToEventFootprints(t.getAllEventRanges());
                for (e = 0; e < s.length; e++) if (!n.validUnzonedRange.containsRange(s[e].componentFootprint.unzonedRange)) return !1;
                return i.calendar.constraints.isEventInstanceGroupAllowed(t)
            }, t.prototype.isExternalInstanceGroupAllowed = function (t) {
                var e, i = this._getView(), n = this.dateProfile,
                    s = this.eventRangesToEventFootprints(t.getAllEventRanges());
                for (e = 0; e < s.length; e++) if (!n.validUnzonedRange.containsRange(s[e].componentFootprint.unzonedRange)) return !1;
                for (e = 0; e < s.length; e++) if (!i.calendar.constraints.isSelectionFootprintAllowed(s[e].componentFootprint)) return !1;
                return !0
            }, t
        }(n.default);
        e.default = l
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(0), o = i(1), r = i(3), a = i(2), l = i(60), n = i(62), h = i(29), u = i(14), c = i(4),
            d = function (n) {
                function t(t, e) {
                    var i = n.call(this, null, e.options) || this;
                    return i.batchRenderDepth = 0, i.isSelected = !1, i.calendar = t, i.viewSpec = e, i.type = e.type, i.name = i.type, i.initRenderQueue(), i.initHiddenDays(), i.dateProfileGenerator = new i.dateProfileGeneratorClass(i), i.bindBaseRenderHandlers(), i.eventOrderSpecs = a.parseFieldSpecs(i.opt("eventOrder")), i.initialize && i.initialize(), i
                }

                return s.__extends(t, n), t.prototype._getView = function () {
                    return this
                }, t.prototype.opt = function (t) {
                    return this.options[t]
                }, t.prototype.initRenderQueue = function () {
                    this.renderQueue = new l.default({event: this.opt("eventRenderWait")}), this.renderQueue.on("start", this.onRenderQueueStart.bind(this)), this.renderQueue.on("stop", this.onRenderQueueStop.bind(this)), this.on("before:change", this.startBatchRender), this.on("change", this.stopBatchRender)
                }, t.prototype.onRenderQueueStart = function () {
                    this.calendar.freezeContentHeight(), this.addScroll(this.queryScroll())
                }, t.prototype.onRenderQueueStop = function () {
                    this.calendar.updateViewSize() && this.popScroll(), this.calendar.thawContentHeight()
                }, t.prototype.startBatchRender = function () {
                    this.batchRenderDepth++ || this.renderQueue.pause()
                }, t.prototype.stopBatchRender = function () {
                    --this.batchRenderDepth || this.renderQueue.resume()
                }, t.prototype.requestRender = function (t, e, i) {
                    this.renderQueue.queue(t, e, i)
                }, t.prototype.whenSizeUpdated = function (t) {
                    this.renderQueue.isRunning ? this.renderQueue.one("stop", t.bind(this)) : t.call(this)
                }, t.prototype.computeTitle = function (t) {
                    var e;
                    return e = /^(year|month)$/.test(t.currentRangeUnit) ? t.currentUnzonedRange : t.activeUnzonedRange, this.formatRange({
                        start: this.calendar.msToMoment(e.startMs, t.isRangeAllDay),
                        end: this.calendar.msToMoment(e.endMs, t.isRangeAllDay)
                    }, t.isRangeAllDay, this.opt("titleFormat") || this.computeTitleFormat(t), this.opt("titleRangeSeparator"))
                }, t.prototype.computeTitleFormat = function (t) {
                    var e = t.currentRangeUnit;
                    return "year" == e ? "YYYY" : "month" == e ? this.opt("monthYearFormat") : 1 < t.currentUnzonedRange.as("days") ? "ll" : "LL"
                }, t.prototype.setDate = function (t) {
                    var e = this.get("dateProfile"), i = this.dateProfileGenerator.build(t, void 0, !0);
                    e && e.activeUnzonedRange.equals(i.activeUnzonedRange) || this.set("dateProfile", i)
                }, t.prototype.unsetDate = function () {
                    this.unset("dateProfile")
                }, t.prototype.fetchInitialEvents = function (t) {
                    var e = this.calendar, i = t.isRangeAllDay && !this.usesMinMaxTime;
                    return e.requestEvents(e.msToMoment(t.activeUnzonedRange.startMs, i), e.msToMoment(t.activeUnzonedRange.endMs, i))
                }, t.prototype.bindEventChanges = function () {
                    this.listenTo(this.calendar, "eventsReset", this.resetEvents)
                }, t.prototype.unbindEventChanges = function () {
                    this.stopListeningTo(this.calendar, "eventsReset")
                }, t.prototype.setEvents = function (t) {
                    this.set("currentEvents", t), this.set("hasEvents", !0)
                }, t.prototype.unsetEvents = function () {
                    this.unset("currentEvents"), this.unset("hasEvents")
                }, t.prototype.resetEvents = function (t) {
                    this.startBatchRender(), this.unsetEvents(), this.setEvents(t), this.stopBatchRender()
                }, t.prototype.requestDateRender = function (t) {
                    var e = this;
                    this.requestRender(function () {
                        e.executeDateRender(t)
                    }, "date", "init")
                }, t.prototype.requestDateUnrender = function () {
                    var t = this;
                    this.requestRender(function () {
                        t.executeDateUnrender()
                    }, "date", "destroy")
                }, t.prototype.executeDateRender = function (t) {
                    n.prototype.executeDateRender.call(this, t), this.render && this.render(), this.trigger("datesRendered"), this.addScroll({isDateInit: !0}), this.startNowIndicator()
                }, t.prototype.executeDateUnrender = function () {
                    this.unselect(), this.stopNowIndicator(), this.trigger("before:datesUnrendered"), this.destroy && this.destroy(), n.prototype.executeDateUnrender.call(this)
                }, t.prototype.bindBaseRenderHandlers = function () {
                    var t = this;
                    this.on("datesRendered", function () {
                        t.whenSizeUpdated(t.triggerViewRender)
                    }), this.on("before:datesUnrendered", function () {
                        t.triggerViewDestroy()
                    })
                }, t.prototype.triggerViewRender = function () {
                    this.publiclyTrigger("viewRender", {context: this, args: [this, this.el]})
                }, t.prototype.triggerViewDestroy = function () {
                    this.publiclyTrigger("viewDestroy", {context: this, args: [this, this.el]})
                }, t.prototype.requestEventsRender = function (t) {
                    var e = this;
                    this.requestRender(function () {
                        e.executeEventRender(t), e.whenSizeUpdated(e.triggerAfterEventsRendered)
                    }, "event", "init")
                }, t.prototype.requestEventsUnrender = function () {
                    var t = this;
                    this.requestRender(function () {
                        t.triggerBeforeEventsDestroyed(), t.executeEventUnrender()
                    }, "event", "destroy")
                }, t.prototype.requestBusinessHoursRender = function (t) {
                    var e = this;
                    this.requestRender(function () {
                        e.renderBusinessHours(t)
                    }, "businessHours", "init")
                }, t.prototype.requestBusinessHoursUnrender = function () {
                    var t = this;
                    this.requestRender(function () {
                        t.unrenderBusinessHours()
                    }, "businessHours", "destroy")
                }, t.prototype.bindGlobalHandlers = function () {
                    n.prototype.bindGlobalHandlers.call(this), this.listenTo(u.default.get(), {
                        touchstart: this.processUnselect,
                        mousedown: this.handleDocumentMousedown
                    })
                }, t.prototype.unbindGlobalHandlers = function () {
                    n.prototype.unbindGlobalHandlers.call(this), this.stopListeningTo(u.default.get())
                }, t.prototype.startNowIndicator = function () {
                    var t, e, i, n = this;
                    this.opt("nowIndicator") && (t = this.getNowIndicatorUnit()) && (e = a.proxy(this, "updateNowIndicator"), this.initialNowDate = this.calendar.getNow(), this.initialNowQueriedMs = +new Date, i = this.initialNowDate.clone().startOf(t).add(1, t) - this.initialNowDate, this.nowIndicatorTimeoutID = setTimeout(function () {
                        n.nowIndicatorTimeoutID = null, e(), i = +r.duration(1, t), i = Math.max(100, i), n.nowIndicatorIntervalID = setInterval(e, i)
                    }, i))
                }, t.prototype.updateNowIndicator = function () {
                    this.isDatesRendered && this.initialNowDate && (this.unrenderNowIndicator(), this.renderNowIndicator(this.initialNowDate.clone().add((new Date).valueOf() - this.initialNowQueriedMs)), this.isNowIndicatorRendered = !0)
                }, t.prototype.stopNowIndicator = function () {
                    this.isNowIndicatorRendered && (this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID), this.nowIndicatorTimeoutID = null), this.nowIndicatorIntervalID && (clearInterval(this.nowIndicatorIntervalID), this.nowIndicatorIntervalID = null), this.unrenderNowIndicator(), this.isNowIndicatorRendered = !1)
                }, t.prototype.updateSize = function (t, e, i) {
                    this.setHeight ? this.setHeight(t, e) : n.prototype.updateSize.call(this, t, e, i), this.updateNowIndicator()
                }, t.prototype.addScroll = function (t) {
                    var e = this.queuedScroll || (this.queuedScroll = {});
                    o.extend(e, t)
                }, t.prototype.popScroll = function () {
                    this.applyQueuedScroll(), this.queuedScroll = null
                }, t.prototype.applyQueuedScroll = function () {
                    this.queuedScroll && this.applyScroll(this.queuedScroll)
                }, t.prototype.queryScroll = function () {
                    var t = {};
                    return this.isDatesRendered && o.extend(t, this.queryDateScroll()), t
                }, t.prototype.applyScroll = function (t) {
                    t.isDateInit && this.isDatesRendered && o.extend(t, this.computeInitialDateScroll()), this.isDatesRendered && this.applyDateScroll(t)
                }, t.prototype.computeInitialDateScroll = function () {
                    return {}
                }, t.prototype.queryDateScroll = function () {
                    return {}
                }, t.prototype.applyDateScroll = function (t) {
                }, t.prototype.reportEventDrop = function (t, e, i, n) {
                    var s = this.calendar.eventManager.mutateEventsWithId(t.def.id, e, this.calendar),
                        o = e.dateMutation;
                    o && (t.dateProfile = o.buildNewDateProfile(t.dateProfile, this.calendar)), this.triggerEventDrop(t, o && o.dateDelta || r.duration(), s, i, n)
                }, t.prototype.triggerEventDrop = function (t, e, i, n, s) {
                    this.publiclyTrigger("eventDrop", {context: n[0], args: [t.toLegacy(), e, i, s, {}, this]})
                }, t.prototype.reportExternalDrop = function (t, e, i, n, s, o) {
                    e && this.calendar.eventManager.addEventDef(t, i), this.triggerExternalDrop(t, e, n, s, o)
                }, t.prototype.triggerExternalDrop = function (t, e, i, n, s) {
                    this.publiclyTrigger("drop", {
                        context: i[0],
                        args: [t.dateProfile.start.clone(), n, s, this]
                    }), e && this.publiclyTrigger("eventReceive", {
                        context: this,
                        args: [t.buildInstance().toLegacy(), this]
                    })
                }, t.prototype.reportEventResize = function (t, e, i, n) {
                    var s = this.calendar.eventManager.mutateEventsWithId(t.def.id, e, this.calendar);
                    t.dateProfile = e.dateMutation.buildNewDateProfile(t.dateProfile, this.calendar), this.triggerEventResize(t, e.dateMutation.endDelta, s, i, n)
                }, t.prototype.triggerEventResize = function (t, e, i, n, s) {
                    this.publiclyTrigger("eventResize", {context: n[0], args: [t.toLegacy(), e, i, s, {}, this]})
                }, t.prototype.select = function (t, e) {
                    this.unselect(e), this.renderSelectionFootprint(t), this.reportSelection(t, e)
                }, t.prototype.renderSelectionFootprint = function (t) {
                    this.renderSelection ? this.renderSelection(t.toLegacy(this.calendar)) : n.prototype.renderSelectionFootprint.call(this, t)
                }, t.prototype.reportSelection = function (t, e) {
                    this.isSelected = !0, this.triggerSelect(t, e)
                }, t.prototype.triggerSelect = function (t, e) {
                    var i = this.calendar.footprintToDateProfile(t);
                    this.publiclyTrigger("select", {context: this, args: [i.start, i.end, e, this]})
                }, t.prototype.unselect = function (t) {
                    void 0 === t && (t = null), this.isSelected && (this.isSelected = !1, this.destroySelection && this.destroySelection(), this.unrenderSelection(), this.publiclyTrigger("unselect", {
                        context: this,
                        args: [t, this]
                    }))
                }, t.prototype.selectEventInstance = function (e) {
                    this.selectedEventInstance && this.selectedEventInstance === e || (this.unselectEventInstance(), this.getEventSegs().forEach(function (t) {
                        t.footprint.eventInstance === e && t.el && t.el.addClass("fc-selected")
                    }), this.selectedEventInstance = e)
                }, t.prototype.unselectEventInstance = function () {
                    this.selectedEventInstance && (this.getEventSegs().forEach(function (t) {
                        t.el && t.el.removeClass("fc-selected")
                    }), this.selectedEventInstance = null)
                }, t.prototype.isEventDefSelected = function (t) {
                    return this.selectedEventInstance && this.selectedEventInstance.def.id === t.id
                }, t.prototype.handleDocumentMousedown = function (t) {
                    a.isPrimaryMouseButton(t) && this.processUnselect(t)
                }, t.prototype.processUnselect = function (t) {
                    this.processRangeUnselect(t), this.processEventUnselect(t)
                }, t.prototype.processRangeUnselect = function (t) {
                    var e;
                    this.isSelected && this.opt("unselectAuto") && ((e = this.opt("unselectCancel")) && o(t.target).closest(e).length || this.unselect(t))
                }, t.prototype.processEventUnselect = function (t) {
                    this.selectedEventInstance && (o(t.target).closest(".fc-selected").length || this.unselectEventInstance())
                }, t.prototype.triggerBaseRendered = function () {
                    this.publiclyTrigger("viewRender", {context: this, args: [this, this.el]})
                }, t.prototype.triggerBaseUnrendered = function () {
                    this.publiclyTrigger("viewDestroy", {context: this, args: [this, this.el]})
                }, t.prototype.triggerDayClick = function (t, e, i) {
                    var n = this.calendar.footprintToDateProfile(t);
                    this.publiclyTrigger("dayClick", {context: e, args: [n.start, i, this]})
                }, t.prototype.isDateInOtherMonth = function (t, e) {
                    return !1
                }, t.prototype.getUnzonedRangeOption = function (t) {
                    var e = this.opt(t);
                    if ("function" == typeof e && (e = e.apply(null, Array.prototype.slice.call(arguments, 1))), e) return this.calendar.parseUnzonedRange(e)
                }, t.prototype.initHiddenDays = function () {
                    var t, e = this.opt("hiddenDays") || [], i = [], n = 0;
                    for (!1 === this.opt("weekends") && e.push(0, 6), t = 0; t < 7; t++) (i[t] = -1 !== o.inArray(t, e)) || n++;
                    if (!n) throw"invalid hiddenDays";
                    this.isHiddenDayHash = i
                }, t.prototype.trimHiddenDays = function (t) {
                    var e = t.getStart(), i = t.getEnd();
                    return e && (e = this.skipHiddenDays(e)), i && (i = this.skipHiddenDays(i, -1, !0)), null === e || null === i || e < i ? new c.default(e, i) : null
                }, t.prototype.isHiddenDay = function (t) {
                    return r.isMoment(t) && (t = t.day()), this.isHiddenDayHash[t]
                }, t.prototype.skipHiddenDays = function (t, e, i) {
                    void 0 === e && (e = 1), void 0 === i && (i = !1);
                    for (var n = t.clone(); this.isHiddenDayHash[(n.day() + (i ? e : 0) + 7) % 7];) n.add(e, "days");
                    return n
                }, t
            }(h.default);
        (e.default = d).prototype.usesMinMaxTime = !1, d.prototype.dateProfileGeneratorClass = n.default, d.watch("displayingDates", ["isInDom", "dateProfile"], function (t) {
            this.requestDateRender(t.dateProfile)
        }, function () {
            this.requestDateUnrender()
        }), d.watch("displayingBusinessHours", ["displayingDates", "businessHourGenerator"], function (t) {
            this.requestBusinessHoursRender(t.businessHourGenerator)
        }, function () {
            this.requestBusinessHoursUnrender()
        }), d.watch("initialEvents", ["dateProfile"], function (t) {
            return this.fetchInitialEvents(t.dateProfile)
        }), d.watch("bindingEvents", ["initialEvents"], function (t) {
            this.setEvents(t.initialEvents), this.bindEventChanges()
        }, function () {
            this.unbindEventChanges(), this.unsetEvents()
        }), d.watch("displayingEvents", ["displayingDates", "hasEvents"], function () {
            this.requestEventsRender(this.get("currentEvents"))
        }, function () {
            this.requestEventsUnrender()
        }), d.watch("title", ["dateProfile"], function (t) {
            return this.title = this.computeTitle(t.dateProfile)
        }), d.watch("legacyDateProps", ["dateProfile"], function (t) {
            var e = this.calendar, i = t.dateProfile;
            this.start = e.msToMoment(i.activeUnzonedRange.startMs, i.isRangeAllDay), this.end = e.msToMoment(i.activeUnzonedRange.endMs, i.isRangeAllDay), this.intervalStart = e.msToMoment(i.currentUnzonedRange.startMs, i.isRangeAllDay), this.intervalEnd = e.msToMoment(i.currentUnzonedRange.endMs, i.isRangeAllDay)
        })
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var l = i(1), r = i(2), n = function () {
            function t(t, e) {
                this.view = t._getView(), this.component = t, this.fillRenderer = e
            }

            return t.prototype.opt = function (t) {
                return this.view.opt(t)
            }, t.prototype.rangeUpdated = function () {
                var t, e;
                this.eventTimeFormat = this.opt("eventTimeFormat") || this.opt("timeFormat") || this.computeEventTimeFormat(), null == (t = this.opt("displayEventTime")) && (t = this.computeDisplayEventTime()), null == (e = this.opt("displayEventEnd")) && (e = this.computeDisplayEventEnd()), this.displayEventTime = t, this.displayEventEnd = e
            }, t.prototype.render = function (t) {
                var e, i, n, s = this.component._getDateProfile(), o = [], r = [];
                for (e in t) n = (i = t[e]).sliceRenderRanges(s.activeUnzonedRange), i.getEventDef().hasBgRendering() ? o.push.apply(o, n) : r.push.apply(r, n);
                this.renderBgRanges(o), this.renderFgRanges(r)
            }, t.prototype.unrender = function () {
                this.unrenderBgRanges(), this.unrenderFgRanges()
            }, t.prototype.renderFgRanges = function (t) {
                var e = this.component.eventRangesToEventFootprints(t), i = this.component.eventFootprintsToSegs(e);
                i = this.renderFgSegEls(i), !1 !== this.renderFgSegs(i) && (this.fgSegs = i)
            }, t.prototype.unrenderFgRanges = function () {
                this.unrenderFgSegs(this.fgSegs || []), this.fgSegs = null
            }, t.prototype.renderBgRanges = function (t) {
                var e = this.component.eventRangesToEventFootprints(t), i = this.component.eventFootprintsToSegs(e);
                !1 !== this.renderBgSegs(i) && (this.bgSegs = i)
            }, t.prototype.unrenderBgRanges = function () {
                this.unrenderBgSegs(), this.bgSegs = null
            }, t.prototype.getSegs = function () {
                return (this.bgSegs || []).concat(this.fgSegs || [])
            }, t.prototype.renderFgSegs = function (t) {
                return !1
            }, t.prototype.unrenderFgSegs = function (t) {
            }, t.prototype.renderBgSegs = function (t) {
                var i = this;
                if (!this.fillRenderer) return !1;
                this.fillRenderer.renderSegs("bgEvent", t, {
                    getClasses: function (t) {
                        return i.getBgClasses(t.footprint.eventDef)
                    }, getCss: function (t) {
                        return {"background-color": i.getBgColor(t.footprint.eventDef)}
                    }, filterEl: function (t, e) {
                        return i.filterEventRenderEl(t.footprint, e)
                    }
                })
            }, t.prototype.unrenderBgSegs = function () {
                this.fillRenderer && this.fillRenderer.unrender("bgEvent")
            }, t.prototype.renderFgSegEls = function (s, t) {
                var o = this;
                void 0 === t && (t = !1);
                var e, r = this.view.hasPublicHandlers("eventRender"), i = "", a = [];
                if (s.length) {
                    for (e = 0; e < s.length; e++) this.beforeFgSegHtml(s[e]), i += this.fgSegHtml(s[e], t);
                    l(i).each(function (t, e) {
                        var i = s[t], n = l(e);
                        r && (n = o.filterEventRenderEl(i.footprint, n)), n && (n.data("fc-seg", i), i.el = n, a.push(i))
                    })
                }
                return a
            }, t.prototype.beforeFgSegHtml = function (t) {
            }, t.prototype.fgSegHtml = function (t, e) {
            }, t.prototype.getSegClasses = function (t, e, i) {
                var n = ["fc-event", t.isStart ? "fc-start" : "fc-not-start", t.isEnd ? "fc-end" : "fc-not-end"].concat(this.getClasses(t.footprint.eventDef));
                return e && n.push("fc-draggable"), i && n.push("fc-resizable"), this.view.isEventDefSelected(t.footprint.eventDef) && n.push("fc-selected"), n
            }, t.prototype.filterEventRenderEl = function (t, e) {
                var i = t.getEventLegacy(),
                    n = this.view.publiclyTrigger("eventRender", {context: i, args: [i, e, this.view]});
                return !1 === n ? e = null : n && !0 !== n && (e = l(n)), e
            }, t.prototype.getTimeText = function (t, e, i) {
                return this._getTimeText(t.eventInstance.dateProfile.start, t.eventInstance.dateProfile.end, t.componentFootprint.isAllDay, e, i)
            }, t.prototype._getTimeText = function (t, e, i, n, s) {
                return null == n && (n = this.eventTimeFormat), null == s && (s = this.displayEventEnd), this.displayEventTime && !i ? s && e ? this.view.formatRange({
                    start: t,
                    end: e
                }, !1, n) : t.format(n) : ""
            }, t.prototype.computeEventTimeFormat = function () {
                return this.opt("smallTimeFormat")
            }, t.prototype.computeDisplayEventTime = function () {
                return !0
            }, t.prototype.computeDisplayEventEnd = function () {
                return !0
            }, t.prototype.getBgClasses = function (t) {
                var e = this.getClasses(t);
                return e.push("fc-bgevent"), e
            }, t.prototype.getClasses = function (t) {
                var e, i = this.getStylingObjs(t), n = [];
                for (e = 0; e < i.length; e++) n.push.apply(n, i[e].eventClassName || i[e].className || []);
                return n
            }, t.prototype.getSkinCss = function (t) {
                return {
                    "background-color": this.getBgColor(t),
                    "border-color": this.getBorderColor(t),
                    color: this.getTextColor(t)
                }
            }, t.prototype.getBgColor = function (t) {
                var e, i, n = this.getStylingObjs(t);
                for (e = 0; e < n.length && !i; e++) i = n[e].eventBackgroundColor || n[e].eventColor || n[e].backgroundColor || n[e].color;
                return i || (i = this.opt("eventBackgroundColor") || this.opt("eventColor")), i
            }, t.prototype.getBorderColor = function (t) {
                var e, i, n = this.getStylingObjs(t);
                for (e = 0; e < n.length && !i; e++) i = n[e].eventBorderColor || n[e].eventColor || n[e].borderColor || n[e].color;
                return i || (i = this.opt("eventBorderColor") || this.opt("eventColor")), i
            }, t.prototype.getTextColor = function (t) {
                var e, i, n = this.getStylingObjs(t);
                for (e = 0; e < n.length && !i; e++) i = n[e].eventTextColor || n[e].textColor;
                return i || (i = this.opt("eventTextColor")), i
            }, t.prototype.getStylingObjs = function (t) {
                var e = this.getFallbackStylingObjs(t);
                return e.unshift(t), e
            }, t.prototype.getFallbackStylingObjs = function (t) {
                return [t.source]
            }, t.prototype.sortEventSegs = function (t) {
                t.sort(r.proxy(this, "compareEventSegs"))
            }, t.prototype.compareEventSegs = function (t, e) {
                var i = t.footprint.componentFootprint, n = i.unzonedRange, s = e.footprint.componentFootprint,
                    o = s.unzonedRange;
                return n.startMs - o.startMs || o.endMs - o.startMs - (n.endMs - n.startMs) || s.isAllDay - i.isAllDay || r.compareByFieldSpecs(t.footprint.eventDef, e.footprint.eventDef, this.view.eventOrderSpecs)
            }, t
        }();
        e.default = n
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = i(21), o = i(8), r = i(6), a = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t._watchers = {}, t._props = {}, t.applyGlobalWatchers(), t.constructed(), t
            }

            return n.__extends(t, e), t.prototype.constructed = function () {
            }, t.prototype.applyGlobalWatchers = function () {
                var t, e = this._globalWatchArgs;
                for (t in e) this.watch.apply(this, [t].concat(e[t]))
            }, t.prototype.has = function (t) {
                return t in this._props
            }, t.prototype.get = function (t) {
                return void 0 === t ? this._props : this._props[t]
            }, t.prototype.set = function (t, e) {
                var i;
                "string" == typeof t ? (i = {})[t] = void 0 === e ? null : e : i = t, this.setProps(i)
            }, t.prototype.reset = function (t) {
                var e, i = this._props, n = {};
                for (e in i) n[e] = void 0;
                for (e in t) n[e] = t[e];
                this.setProps(n)
            }, t.prototype.unset = function (t) {
                var e, i, n = {};
                for (e = "string" == typeof t ? [t] : t, i = 0; i < e.length; i++) n[e[i]] = void 0;
                this.setProps(n)
            }, t.prototype.setProps = function (t) {
                var e, i, n = {}, s = 0;
                for (e in t) "object" != typeof (i = t[e]) && i === this._props[e] || (n[e] = i, s++);
                if (s) {
                    for (e in this.trigger("before:batchChange", n), n) i = n[e], this.trigger("before:change", e, i), this.trigger("before:change:" + e, i);
                    for (e in n) void 0 === (i = n[e]) ? delete this._props[e] : this._props[e] = i, this.trigger("change:" + e, i), this.trigger("change", e, i);
                    this.trigger("batchChange", n)
                }
            }, t.prototype.watch = function (i, t, n, e) {
                var s = this;
                this.unwatch(i), this._watchers[i] = this._watchDeps(t, function (t) {
                    var e = n.call(s, t);
                    e && e.then ? (s.unset(i), e.then(function (t) {
                        s.set(i, t)
                    })) : s.set(i, e)
                }, function (t) {
                    s.unset(i), e && e.call(s, t)
                })
            }, t.prototype.unwatch = function (t) {
                var e = this._watchers[t];
                e && (delete this._watchers[t], e.teardown())
            }, t.prototype._watchDeps = function (t, r, e) {
                var i = this, a = 0, l = t.length, h = 0, u = {}, n = [], c = !1, d = function (t, e) {
                    i.on(t, e), n.push([t, e])
                };
                return t.forEach(function (s) {
                    var o = !1;
                    "?" === s.charAt(0) && (s = s.substring(1), o = !0), d("before:change:" + s, function (t) {
                        1 == ++a && h === l && (c = !0, e(u), c = !1)
                    }), d("change:" + s, function (t) {
                        var e, i, n;
                        e = s, n = o, void 0 === (i = t) ? (n || void 0 === u[e] || h--, delete u[e]) : (n || void 0 !== u[e] || h++, u[e] = i), --a || h === l && (c || r(u))
                    })
                }), t.forEach(function (t) {
                    var e = !1;
                    "?" === t.charAt(0) && (t = t.substring(1), e = !0), i.has(t) ? (u[t] = i.get(t), h++) : e && h++
                }), h === l && r(u), {
                    teardown: function () {
                        for (var t = 0; t < n.length; t++) i.off(n[t][0], n[t][1]);
                        n = null, h === l && e()
                    }, flash: function () {
                        h === l && (e(), r(u))
                    }
                }
            }, t.prototype.flash = function (t) {
                var e = this._watchers[t];
                e && e.flash()
            }, t.watch = function (t) {
                for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                this.prototype.hasOwnProperty("_globalWatchArgs") || (this.prototype._globalWatchArgs = Object.create(this.prototype._globalWatchArgs)), this.prototype._globalWatchArgs[t] = e
            }, t
        }(s.default);
        (e.default = a).prototype._globalWatchArgs = {}, o.default.mixInto(a), r.default.mixInto(a)
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(3), s = i(2), o = i(11), r = i(52);
        e.default = {
            parse: function (t, e) {
                return s.isTimeString(t.start) || n.isDuration(t.start) || s.isTimeString(t.end) || n.isDuration(t.end) ? r.default.parse(t, e) : o.default.parse(t, e)
            }
        }
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = i(1), o = i(2), r = i(16), a = i(5), l = i(11), h = function (i) {
            function t(t) {
                var e = i.call(this, t) || this;
                return e.eventDefs = [], e
            }

            return n.__extends(t, i), t.prototype.setRawEventDefs = function (t) {
                this.rawEventDefs = t, this.eventDefs = this.parseEventDefs(t)
            }, t.prototype.fetch = function (t, e, i) {
                var n, s = this.eventDefs;
                if (null != this.currentTimezone && this.currentTimezone !== i) for (n = 0; n < s.length; n++) s[n] instanceof l.default && s[n].rezone();
                return this.currentTimezone = i, r.default.resolve(s)
            }, t.prototype.addEventDef = function (t) {
                this.eventDefs.push(t)
            }, t.prototype.removeEventDefsById = function (e) {
                return o.removeMatching(this.eventDefs, function (t) {
                    return t.id === e
                })
            }, t.prototype.removeAllEventDefs = function () {
                this.eventDefs = []
            }, t.prototype.getPrimitive = function () {
                return this.rawEventDefs
            }, t.prototype.applyManualStandardProps = function (t) {
                var e = i.prototype.applyManualStandardProps.call(this, t);
                return this.setRawEventDefs(t.events), e
            }, t.parse = function (t, e) {
                var i;
                return s.isArray(t.events) ? i = t : s.isArray(t) && (i = {events: t}), !!i && a.default.parse.call(this, i, e)
            }, t
        }(a.default);
        (e.default = h).defineStandardProps({events: !1})
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var c = i(2), o = i(15), n = function () {
            function u() {
                this.clearEnd = !1, this.forceTimed = !1, this.forceAllDay = !1
            }

            return u.prototype.buildNewDateProfile = function (t, e) {
                var i = t.start.clone(), n = null, s = !1;
                return t.end && !this.clearEnd ? n = t.end.clone() : this.endDelta && !n && (n = e.getDefaultEventEnd(t.isAllDay(), i)), this.forceTimed ? (s = !0, i.hasTime() || i.time(0), n && !n.hasTime() && n.time(0)) : this.forceAllDay && (i.hasTime() && i.stripTime(), n && n.hasTime() && n.stripTime()), this.dateDelta && (s = !0, i.add(this.dateDelta), n && n.add(this.dateDelta)), this.endDelta && (s = !0, n.add(this.endDelta)), this.startDelta && (s = !0, i.add(this.startDelta)), s && (i = e.applyTimezone(i), n && (n = e.applyTimezone(n))), !n && e.opt("forceEventDuration") && (n = e.getDefaultEventEnd(t.isAllDay(), i)), new o.default(i, n, e)
            }, u.prototype.setDateDelta = function (t) {
                t && t.valueOf() ? this.dateDelta = t : this.dateDelta = null
            }, u.prototype.setStartDelta = function (t) {
                t && t.valueOf() ? this.startDelta = t : this.startDelta = null
            }, u.prototype.setEndDelta = function (t) {
                t && t.valueOf() ? this.endDelta = t : this.endDelta = null
            }, u.prototype.isEmpty = function () {
                return !(this.clearEnd || this.forceTimed || this.forceAllDay || this.dateDelta || this.startDelta || this.endDelta)
            }, u.createFromDiff = function (t, i, n) {
                function e(t, e) {
                    return n ? c.diffByUnit(t, e, n) : i.isAllDay() ? c.diffDay(t, e) : c.diffDayTime(t, e)
                }

                var s, o, r, a = t.end && !i.end, l = t.isAllDay() && !i.isAllDay(), h = !t.isAllDay() && i.isAllDay();
                return s = e(i.start, t.start), i.end && (o = e(i.unzonedRange.getEnd(), t.unzonedRange.getEnd()).subtract(s)), (r = new u).clearEnd = a, r.forceTimed = l, r.forceAllDay = h, r.setDateDelta(s), r.setEndDelta(o), r
            }, u
        }();
        e.default = n
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(55), s = i(56);
        e.default = {
            themeClassHash: {}, register: function (t, e) {
                this.themeClassHash[t] = e
            }, getThemeClass: function (t) {
                return t ? !0 === t ? s.default : this.themeClassHash[t] : n.default
            }
        }
    }, function (t, e, i) {
        function n(t) {
            return "en" !== t.locale() ? t.clone().locale("en") : t
        }

        function s(t, e) {
            return _(y(o(e).fakeFormatString, t).join(""))
        }

        function o(t) {
            return g[t] || (g[t] = {
                fakeFormatString: function t(e) {
                    var i, n, s = [];
                    for (i = 0; i < e.length; i++) "string" == typeof (n = e[i]) ? s.push("[" + n + "]") : n.token ? n.token in p ? s.push(u + "[" + n.token + "]") : s.push(n.token) : n.maybe && s.push(c + t(n.maybe) + c);
                    return s.join(h)
                }(e = r(t)), sameUnits: function t(e) {
                    var i, n, s, o = [];
                    for (i = 0; i < e.length; i++) (n = e[i]).token ? (s = f[n.token.charAt(0)], o.push(s ? s.unit : "second")) : n.maybe ? o.push.apply(o, t(n.maybe)) : o.push(null);
                    return o
                }(e)
            });
            var e
        }

        function r(t) {
            for (var e, i = [], n = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g; e = n.exec(t);) e[1] ? i.push.apply(i, a(e[1])) : e[2] ? i.push({maybe: r(e[2])}) : e[3] ? i.push({token: e[3]}) : e[5] && i.push.apply(i, a(e[5]));
            return i
        }

        function a(t) {
            return ". " === t ? [".", " "] : [t]
        }

        function y(t, e) {
            var i, n, s = [], o = l.oldMomentFormat(e, t).split(h);
            for (i = 0; i < o.length; i++) (n = o[i]).charAt(0) === u ? s.push(p[n.substring(1)](e)) : s.push(n);
            return s
        }

        function _(t) {
            return t.replace(d, function (t, e) {
                return e.match(/[1-9]/) ? e : ""
            })
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var l = i(9);
        l.newMomentProto.format = function () {
            return this._fullCalendar && arguments[0] ? s(this, arguments[0]) : this._ambigTime ? l.oldMomentFormat(n(this), "YYYY-MM-DD") : this._ambigZone ? l.oldMomentFormat(n(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? l.oldMomentFormat(n(this)) : l.oldMomentProto.format.apply(this, arguments)
        }, l.newMomentProto.toISOString = function () {
            return this._ambigTime ? l.oldMomentFormat(n(this), "YYYY-MM-DD") : this._ambigZone ? l.oldMomentFormat(n(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? l.oldMomentProto.toISOString.apply(n(this), arguments) : l.oldMomentProto.toISOString.apply(this, arguments)
        };
        var h = "\v", u = "", c = "", d = new RegExp(c + "([^" + c + "]*)" + c, "g"), p = {
            t: function (t) {
                return l.oldMomentFormat(t, "a").charAt(0)
            }, T: function (t) {
                return l.oldMomentFormat(t, "A").charAt(0)
            }
        }, f = {
            Y: {value: 1, unit: "year"},
            M: {value: 2, unit: "month"},
            W: {value: 3, unit: "week"},
            w: {value: 3, unit: "week"},
            D: {value: 4, unit: "day"},
            d: {value: 4, unit: "day"}
        };
        e.formatDate = s, e.formatRange = function (t, e, i, n, s) {
            return t = l.default.parseZone(t), e = l.default.parseZone(e), function (t, e, i, n, s) {
                var o, r, a, l = t.sameUnits, h = e.clone().stripZone(), u = i.clone().stripZone(),
                    c = y(t.fakeFormatString, e), d = y(t.fakeFormatString, i), p = "", f = "", g = "", m = "", v = "";
                for (o = 0; o < l.length && (!l[o] || h.isSame(u, l[o])); o++) p += c[o];
                for (r = l.length - 1; o < r && (!l[r] || h.isSame(u, l[r])) && (r - 1 !== o || "." !== c[r]); r--) f = c[r] + f;
                for (a = o; a <= r; a++) g += c[a], m += d[a];
                return (g || m) && (v = s ? m + n + g : g + n + m), _(p + v + f)
            }(o(i = t.localeData().longDateFormat(i) || i), t, e, n || " - ", s)
        };
        var g = {};
        e.queryMostGranularFormatUnit = function (t) {
            var e, i, n, s, o = r(t);
            for (e = 0; e < o.length; e++) (i = o[e]).token && (n = f[i.token.charAt(0)]) && (!s || n.value > s.value) && (s = n);
            return s ? s.unit : null
        }
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var a = i(1), n = i(2), s = function () {
            function t(t) {
                this.isHorizontal = !1, this.isVertical = !1, this.els = a(t.els), this.isHorizontal = t.isHorizontal, this.isVertical = t.isVertical, this.forcedOffsetParentEl = t.offsetParent ? a(t.offsetParent) : null
            }

            return t.prototype.build = function () {
                var t = this.forcedOffsetParentEl;
                !t && 0 < this.els.length && (t = this.els.eq(0).offsetParent()), this.origin = t ? t.offset() : null, this.boundingRect = this.queryBoundingRect(), this.isHorizontal && this.buildElHorizontals(), this.isVertical && this.buildElVerticals()
            }, t.prototype.clear = function () {
                this.origin = null, this.boundingRect = null, this.lefts = null, this.rights = null, this.tops = null, this.bottoms = null
            }, t.prototype.ensureBuilt = function () {
                this.origin || this.build()
            }, t.prototype.buildElHorizontals = function () {
                var o = [], r = [];
                this.els.each(function (t, e) {
                    var i = a(e), n = i.offset().left, s = i.outerWidth();
                    o.push(n), r.push(n + s)
                }), this.lefts = o, this.rights = r
            }, t.prototype.buildElVerticals = function () {
                var o = [], r = [];
                this.els.each(function (t, e) {
                    var i = a(e), n = i.offset().top, s = i.outerHeight();
                    o.push(n), r.push(n + s)
                }), this.tops = o, this.bottoms = r
            }, t.prototype.getHorizontalIndex = function (t) {
                this.ensureBuilt();
                var e, i = this.lefts, n = this.rights, s = i.length;
                for (e = 0; e < s; e++) if (t >= i[e] && t < n[e]) return e
            }, t.prototype.getVerticalIndex = function (t) {
                this.ensureBuilt();
                var e, i = this.tops, n = this.bottoms, s = i.length;
                for (e = 0; e < s; e++) if (t >= i[e] && t < n[e]) return e
            }, t.prototype.getLeftOffset = function (t) {
                return this.ensureBuilt(), this.lefts[t]
            }, t.prototype.getLeftPosition = function (t) {
                return this.ensureBuilt(), this.lefts[t] - this.origin.left
            }, t.prototype.getRightOffset = function (t) {
                return this.ensureBuilt(), this.rights[t]
            }, t.prototype.getRightPosition = function (t) {
                return this.ensureBuilt(), this.rights[t] - this.origin.left
            }, t.prototype.getWidth = function (t) {
                return this.ensureBuilt(), this.rights[t] - this.lefts[t]
            }, t.prototype.getTopOffset = function (t) {
                return this.ensureBuilt(), this.tops[t]
            }, t.prototype.getTopPosition = function (t) {
                return this.ensureBuilt(), this.tops[t] - this.origin.top
            }, t.prototype.getBottomOffset = function (t) {
                return this.ensureBuilt(), this.bottoms[t]
            }, t.prototype.getBottomPosition = function (t) {
                return this.ensureBuilt(), this.bottoms[t] - this.origin.top
            }, t.prototype.getHeight = function (t) {
                return this.ensureBuilt(), this.bottoms[t] - this.tops[t]
            }, t.prototype.queryBoundingRect = function () {
                var t;
                return 0 < this.els.length && !(t = n.getScrollParent(this.els.eq(0))).is(document) ? n.getClientRect(t) : null
            }, t.prototype.isPointInBounds = function (t, e) {
                return this.isLeftInBounds(t) && this.isTopInBounds(e)
            }, t.prototype.isLeftInBounds = function (t) {
                return !this.boundingRect || t >= this.boundingRect.left && t < this.boundingRect.right
            }, t.prototype.isTopInBounds = function (t) {
                return !this.boundingRect || t >= this.boundingRect.top && t < this.boundingRect.bottom
            }, t
        }();
        e.default = s
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(1), h = i(2), s = i(6), o = i(14), r = function () {
            function t(t) {
                this.isInteracting = !1, this.isDistanceSurpassed = !1, this.isDelayEnded = !1, this.isDragging = !1, this.isTouch = !1, this.isGeneric = !1, this.shouldCancelTouchScroll = !0, this.scrollAlwaysKills = !1, this.isAutoScroll = !1, this.scrollSensitivity = 30, this.scrollSpeed = 200, this.scrollIntervalMs = 50, this.options = t || {}
            }

            return t.prototype.startInteraction = function (t, e) {
                if (void 0 === e && (e = {}), "mousedown" === t.type) {
                    if (o.default.get().shouldIgnoreMouse()) return;
                    if (!h.isPrimaryMouseButton(t)) return;
                    t.preventDefault()
                }
                this.isInteracting || (this.delay = h.firstDefined(e.delay, this.options.delay, 0), this.minDistance = h.firstDefined(e.distance, this.options.distance, 0), this.subjectEl = this.options.subjectEl, h.preventSelection(n("body")), this.isInteracting = !0, this.isTouch = h.getEvIsTouch(t), this.isGeneric = "dragstart" === t.type, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.originX = h.getEvX(t), this.originY = h.getEvY(t), this.scrollEl = h.getScrollParent(n(t.target)), this.bindHandlers(), this.initAutoScroll(), this.handleInteractionStart(t), this.startDelay(t), this.minDistance || this.handleDistanceSurpassed(t))
            }, t.prototype.handleInteractionStart = function (t) {
                this.trigger("interactionStart", t)
            }, t.prototype.endInteraction = function (t, e) {
                this.isInteracting && (this.endDrag(t), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null), this.destroyAutoScroll(), this.unbindHandlers(), this.isInteracting = !1, this.handleInteractionEnd(t, e), h.allowSelection(n("body")))
            }, t.prototype.handleInteractionEnd = function (t, e) {
                this.trigger("interactionEnd", t, e || !1)
            }, t.prototype.bindHandlers = function () {
                var t = o.default.get();
                this.isGeneric ? this.listenTo(n(document), {
                    drag: this.handleMove,
                    dragstop: this.endInteraction
                }) : this.isTouch ? this.listenTo(t, {
                    touchmove: this.handleTouchMove,
                    touchend: this.endInteraction,
                    scroll: this.handleTouchScroll
                }) : this.listenTo(t, {
                    mousemove: this.handleMouseMove,
                    mouseup: this.endInteraction
                }), this.listenTo(t, {selectstart: h.preventDefault, contextmenu: h.preventDefault})
            }, t.prototype.unbindHandlers = function () {
                this.stopListeningTo(o.default.get()), this.stopListeningTo(n(document))
            }, t.prototype.startDrag = function (t, e) {
                this.startInteraction(t, e), this.isDragging || (this.isDragging = !0, this.handleDragStart(t))
            }, t.prototype.handleDragStart = function (t) {
                this.trigger("dragStart", t)
            }, t.prototype.handleMove = function (t) {
                var e = h.getEvX(t) - this.originX, i = h.getEvY(t) - this.originY, n = this.minDistance;
                this.isDistanceSurpassed || n * n <= e * e + i * i && this.handleDistanceSurpassed(t), this.isDragging && this.handleDrag(e, i, t)
            }, t.prototype.handleDrag = function (t, e, i) {
                this.trigger("drag", t, e, i), this.updateAutoScroll(i)
            }, t.prototype.endDrag = function (t) {
                this.isDragging && (this.isDragging = !1, this.handleDragEnd(t))
            }, t.prototype.handleDragEnd = function (t) {
                this.trigger("dragEnd", t)
            }, t.prototype.startDelay = function (t) {
                var e = this;
                this.delay ? this.delayTimeoutId = setTimeout(function () {
                    e.handleDelayEnd(t)
                }, this.delay) : this.handleDelayEnd(t)
            }, t.prototype.handleDelayEnd = function (t) {
                this.isDelayEnded = !0, this.isDistanceSurpassed && this.startDrag(t)
            }, t.prototype.handleDistanceSurpassed = function (t) {
                this.isDistanceSurpassed = !0, this.isDelayEnded && this.startDrag(t)
            }, t.prototype.handleTouchMove = function (t) {
                this.isDragging && this.shouldCancelTouchScroll && t.preventDefault(), this.handleMove(t)
            }, t.prototype.handleMouseMove = function (t) {
                this.handleMove(t)
            }, t.prototype.handleTouchScroll = function (t) {
                this.isDragging && !this.scrollAlwaysKills || this.endInteraction(t, !0)
            }, t.prototype.trigger = function (t) {
                for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                this.options[t] && this.options[t].apply(this, e), this["_" + t] && this["_" + t].apply(this, e)
            }, t.prototype.initAutoScroll = function () {
                var t = this.scrollEl;
                this.isAutoScroll = this.options.scroll && t && !t.is(window) && !t.is(document), this.isAutoScroll && this.listenTo(t, "scroll", h.debounce(this.handleDebouncedScroll, 100))
            }, t.prototype.destroyAutoScroll = function () {
                this.endAutoScroll(), this.isAutoScroll && this.stopListeningTo(this.scrollEl, "scroll")
            }, t.prototype.computeScrollBounds = function () {
                this.isAutoScroll && (this.scrollBounds = h.getOuterRect(this.scrollEl))
            }, t.prototype.updateAutoScroll = function (t) {
                var e, i, n, s, o = this.scrollSensitivity, r = this.scrollBounds, a = 0, l = 0;
                r && (e = (o - (h.getEvY(t) - r.top)) / o, i = (o - (r.bottom - h.getEvY(t))) / o, n = (o - (h.getEvX(t) - r.left)) / o, s = (o - (r.right - h.getEvX(t))) / o, 0 <= e && e <= 1 ? a = e * this.scrollSpeed * -1 : 0 <= i && i <= 1 && (a = i * this.scrollSpeed), 0 <= n && n <= 1 ? l = n * this.scrollSpeed * -1 : 0 <= s && s <= 1 && (l = s * this.scrollSpeed)), this.setScrollVel(a, l)
            }, t.prototype.setScrollVel = function (t, e) {
                this.scrollTopVel = t, this.scrollLeftVel = e, this.constrainScrollVel(), !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(h.proxy(this, "scrollIntervalFunc"), this.scrollIntervalMs))
            }, t.prototype.constrainScrollVel = function () {
                var t = this.scrollEl;
                this.scrollTopVel < 0 ? t.scrollTop() <= 0 && (this.scrollTopVel = 0) : 0 < this.scrollTopVel && t.scrollTop() + t[0].clientHeight >= t[0].scrollHeight && (this.scrollTopVel = 0), this.scrollLeftVel < 0 ? t.scrollLeft() <= 0 && (this.scrollLeftVel = 0) : 0 < this.scrollLeftVel && t.scrollLeft() + t[0].clientWidth >= t[0].scrollWidth && (this.scrollLeftVel = 0)
            }, t.prototype.scrollIntervalFunc = function () {
                var t = this.scrollEl, e = this.scrollIntervalMs / 1e3;
                this.scrollTopVel && t.scrollTop(t.scrollTop() + this.scrollTopVel * e), this.scrollLeftVel && t.scrollLeft(t.scrollLeft() + this.scrollLeftVel * e), this.constrainScrollVel(), this.scrollTopVel || this.scrollLeftVel || this.endAutoScroll()
            }, t.prototype.endAutoScroll = function () {
                this.scrollIntervalId && (clearInterval(this.scrollIntervalId), this.scrollIntervalId = null, this.handleScrollEnd())
            }, t.prototype.handleDebouncedScroll = function () {
                this.scrollIntervalId || this.handleScrollEnd()
            }, t.prototype.handleScrollEnd = function () {
            }, t
        }();
        e.default = r, s.default.mixInto(r)
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), a = i(2), s = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.breakOnWeeks = !1, t
            }

            return n.__extends(t, e), t.prototype.updateDayTable = function () {
                for (var t, e, i, n = this.view, s = n.calendar, o = s.msToUtcMoment(this.dateProfile.renderUnzonedRange.startMs, !0), r = s.msToUtcMoment(this.dateProfile.renderUnzonedRange.endMs, !0), a = -1, l = [], h = []; o.isBefore(r);) n.isHiddenDay(o) ? l.push(a + .5) : (a++, l.push(a), h.push(o.clone())), o.add(1, "days");
                if (this.breakOnWeeks) {
                    for (e = h[0].day(), t = 1; t < h.length && h[t].day() != e; t++) ;
                    i = Math.ceil(h.length / t)
                } else i = 1, t = h.length;
                this.dayDates = h, this.dayIndices = l, this.daysPerRow = t, this.rowCnt = i, this.updateDayTableCols()
            }, t.prototype.updateDayTableCols = function () {
                this.colCnt = this.computeColCnt(), this.colHeadFormat = this.opt("columnFormat") || this.computeColHeadFormat()
            }, t.prototype.computeColCnt = function () {
                return this.daysPerRow
            }, t.prototype.getCellDate = function (t, e) {
                return this.dayDates[this.getCellDayIndex(t, e)].clone()
            }, t.prototype.getCellRange = function (t, e) {
                var i = this.getCellDate(t, e);
                return {start: i, end: i.clone().add(1, "days")}
            }, t.prototype.getCellDayIndex = function (t, e) {
                return t * this.daysPerRow + this.getColDayIndex(e)
            }, t.prototype.getColDayIndex = function (t) {
                return this.isRTL ? this.colCnt - 1 - t : t
            }, t.prototype.getDateDayIndex = function (t) {
                var e = this.dayIndices, i = t.diff(this.dayDates[0], "days");
                return i < 0 ? e[0] - 1 : i >= e.length ? e[e.length - 1] + 1 : e[i]
            }, t.prototype.computeColHeadFormat = function () {
                return 1 < this.rowCnt || 10 < this.colCnt ? "ddd" : 1 < this.colCnt ? this.opt("dayOfMonthFormat") : "dddd"
            }, t.prototype.sliceRangeByRow = function (t) {
                var e, i, n, s, o, r = this.daysPerRow, a = this.view.computeDayRange(t),
                    l = this.getDateDayIndex(a.start), h = this.getDateDayIndex(a.end.clone().subtract(1, "days")),
                    u = [];
                for (e = 0; e < this.rowCnt; e++) n = (i = e * r) + r - 1, s = Math.max(l, i), o = Math.min(h, n), (s = Math.ceil(s)) <= (o = Math.floor(o)) && u.push({
                    row: e,
                    firstRowDayIndex: s - i,
                    lastRowDayIndex: o - i,
                    isStart: s === l,
                    isEnd: o === h
                });
                return u
            }, t.prototype.sliceRangeByDay = function (t) {
                var e, i, n, s, o, r, a = this.daysPerRow, l = this.view.computeDayRange(t),
                    h = this.getDateDayIndex(l.start), u = this.getDateDayIndex(l.end.clone().subtract(1, "days")),
                    c = [];
                for (e = 0; e < this.rowCnt; e++) for (n = (i = e * a) + a - 1, s = i; s <= n; s++) o = Math.max(h, s), r = Math.min(u, s), (o = Math.ceil(o)) <= (r = Math.floor(r)) && c.push({
                    row: e,
                    firstRowDayIndex: o - i,
                    lastRowDayIndex: r - i,
                    isStart: o === h,
                    isEnd: r === u
                });
                return c
            }, t.prototype.renderHeadHtml = function () {
                var t = this.view.calendar.theme;
                return '<div class="fc-row ' + t.getClass("headerRow") + '"><table class="' + t.getClass("tableGrid") + '"><thead>' + this.renderHeadTrHtml() + "</thead></table></div>"
            }, t.prototype.renderHeadIntroHtml = function () {
                return this.renderIntroHtml()
            }, t.prototype.renderHeadTrHtml = function () {
                return "<tr>" + (this.isRTL ? "" : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml() + (this.isRTL ? this.renderHeadIntroHtml() : "") + "</tr>"
            }, t.prototype.renderHeadDateCellsHtml = function () {
                var t, e, i = [];
                for (t = 0; t < this.colCnt; t++) e = this.getCellDate(0, t), i.push(this.renderHeadDateCellHtml(e));
                return i.join("")
            }, t.prototype.renderHeadDateCellHtml = function (t, e, i) {
                var n = this.view, s = this.dateProfile.activeUnzonedRange.containsDate(t),
                    o = ["fc-day-header", n.calendar.theme.getClass("widgetHeader")],
                    r = a.htmlEscape(t.format(this.colHeadFormat));
                return 1 === this.rowCnt ? o = o.concat(this.getDayClasses(t, !0)) : o.push("fc-" + a.dayIDs[t.day()]), '<th class="' + o.join(" ") + '"' + (1 === (s && this.rowCnt) ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (1 < e ? ' colspan="' + e + '"' : "") + (i ? " " + i : "") + ">" + (s ? n.buildGotoAnchorHtml({
                    date: t,
                    forceOff: 1 < this.rowCnt || 1 === this.colCnt
                }, r) : r) + "</th>"
            }, t.prototype.renderBgTrHtml = function (t) {
                return "<tr>" + (this.isRTL ? "" : this.renderBgIntroHtml(t)) + this.renderBgCellsHtml(t) + (this.isRTL ? this.renderBgIntroHtml(t) : "") + "</tr>"
            }, t.prototype.renderBgIntroHtml = function (t) {
                return this.renderIntroHtml()
            }, t.prototype.renderBgCellsHtml = function (t) {
                var e, i, n = [];
                for (e = 0; e < this.colCnt; e++) i = this.getCellDate(t, e), n.push(this.renderBgCellHtml(i));
                return n.join("")
            }, t.prototype.renderBgCellHtml = function (t, e) {
                var i = this.view, n = this.dateProfile.activeUnzonedRange.containsDate(t), s = this.getDayClasses(t);
                return s.unshift("fc-day", i.calendar.theme.getClass("widgetContent")), '<td class="' + s.join(" ") + '"' + (n ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (e ? " " + e : "") + "></td>"
            }, t.prototype.renderIntroHtml = function () {
            }, t.prototype.bookendCells = function (t) {
                var e = this.renderIntroHtml();
                e && (this.isRTL ? t.append(e) : t.prepend(e))
            }, t
        }(i(12).default);
        e.default = s
    }, function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t, e) {
                this.component = t, this.fillRenderer = e
            }

            return t.prototype.render = function (t) {
                var e = this.component, i = e._getDateProfile().activeUnzonedRange,
                    n = t.buildEventInstanceGroup(e.hasAllDayBusinessHours, i),
                    s = n ? e.eventRangesToEventFootprints(n.sliceRenderRanges(i)) : [];
                this.renderEventFootprints(s)
            }, t.prototype.renderEventFootprints = function (t) {
                var e = this.component.eventFootprintsToSegs(t);
                this.renderSegs(e), this.segs = e
            }, t.prototype.renderSegs = function (t) {
                this.fillRenderer && this.fillRenderer.renderSegs("businessHours", t, {
                    getClasses: function (t) {
                        return ["fc-nonbusiness", "fc-bgevent"]
                    }
                })
            }, t.prototype.unrender = function () {
                this.fillRenderer && this.fillRenderer.unrender("businessHours"), this.segs = null
            }, t.prototype.getSegs = function () {
                return this.segs || []
            }, t
        }();
        e.default = i
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var l = i(1), o = i(2), n = function () {
            function t(t) {
                this.fillSegTag = "div", this.component = t, this.elsByFill = {}
            }

            return t.prototype.renderFootprint = function (t, e, i) {
                this.renderSegs(t, this.component.componentFootprintToSegs(e), i)
            }, t.prototype.renderSegs = function (t, e, i) {
                var n;
                return e = this.buildSegEls(t, e, i), (n = this.attachSegEls(t, e)) && this.reportEls(t, n), e
            }, t.prototype.unrender = function (t) {
                var e = this.elsByFill[t];
                e && (e.remove(), delete this.elsByFill[t])
            }, t.prototype.buildSegEls = function (t, s, o) {
                var e, r = this, i = "", a = [];
                if (s.length) {
                    for (e = 0; e < s.length; e++) i += this.buildSegHtml(t, s[e], o);
                    l(i).each(function (t, e) {
                        var i = s[t], n = l(e);
                        o.filterEl && (n = o.filterEl(i, n)), n && ((n = l(n)).is(r.fillSegTag) && (i.el = n, a.push(i)))
                    })
                }
                return a
            }, t.prototype.buildSegHtml = function (t, e, i) {
                var n = i.getClasses ? i.getClasses(e) : [], s = o.cssToStr(i.getCss ? i.getCss(e) : {});
                return "<" + this.fillSegTag + (n.length ? ' class="' + n.join(" ") + '"' : "") + (s ? ' style="' + s + '"' : "") + " />"
            }, t.prototype.attachSegEls = function (t, e) {
            }, t.prototype.reportEls = function (t, e) {
                this.elsByFill[t] ? this.elsByFill[t] = this.elsByFill[t].add(e) : this.elsByFill[t] = l(e)
            }, t
        }();
        e.default = n
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var o = i(11), r = i(24), a = i(5), n = function () {
            function t(t, e) {
                this.view = t._getView(), this.component = t, this.eventRenderer = e
            }

            return t.prototype.renderComponentFootprint = function (t) {
                this.renderEventFootprints([this.fabricateEventFootprint(t)])
            }, t.prototype.renderEventDraggingFootprints = function (t, e, i) {
                this.renderEventFootprints(t, e, "fc-dragging", i ? null : this.view.opt("dragOpacity"))
            }, t.prototype.renderEventResizingFootprints = function (t, e, i) {
                this.renderEventFootprints(t, e, "fc-resizing")
            }, t.prototype.renderEventFootprints = function (t, e, i, n) {
                var s, o = this.component.eventFootprintsToSegs(t), r = "fc-helper " + (i || "");
                for (o = this.eventRenderer.renderFgSegEls(o), s = 0; s < o.length; s++) o[s].el.addClass(r);
                if (null != n) for (s = 0; s < o.length; s++) o[s].el.css("opacity", n);
                this.helperEls = this.renderSegs(o, e)
            }, t.prototype.renderSegs = function (t, e) {
            }, t.prototype.unrender = function () {
                this.helperEls && (this.helperEls.remove(), this.helperEls = null)
            }, t.prototype.fabricateEventFootprint = function (t) {
                var e, i = this.view.calendar, n = i.footprintToDateProfile(t), s = new o.default(new a.default(i));
                return s.dateProfile = n, e = s.buildInstance(), new r.default(t, s, e)
            }, t
        }();
        e.default = n
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = i(14), o = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n.__extends(e, t), e.prototype.bindToEl = function (t) {
                var e = this.component;
                e.bindSegHandlerToEl(t, "click", this.handleClick.bind(this)), e.bindSegHandlerToEl(t, "mouseenter", this.handleMouseover.bind(this)), e.bindSegHandlerToEl(t, "mouseleave", this.handleMouseout.bind(this))
            }, e.prototype.handleClick = function (t, e) {
                !1 === this.component.publiclyTrigger("eventClick", {
                    context: t.el[0],
                    args: [t.footprint.getEventLegacy(), e, this.view]
                }) && e.preventDefault()
            }, e.prototype.handleMouseover = function (t, e) {
                s.default.get().shouldIgnoreMouse() || this.mousedOverSeg || (this.mousedOverSeg = t, this.view.isEventDefResizable(t.footprint.eventDef) && t.el.addClass("fc-allow-mouse-resize"), this.component.publiclyTrigger("eventMouseover", {
                    context: t.el[0],
                    args: [t.footprint.getEventLegacy(), e, this.view]
                }))
            }, e.prototype.handleMouseout = function (t, e) {
                this.mousedOverSeg && (this.mousedOverSeg = null, this.view.isEventDefResizable(t.footprint.eventDef) && t.el.removeClass("fc-allow-mouse-resize"), this.component.publiclyTrigger("eventMouseout", {
                    context: t.el[0],
                    args: [t.footprint.getEventLegacy(), e || {}, this.view]
                }))
            }, e.prototype.end = function () {
                this.mousedOverSeg && this.handleMouseout(this.mousedOverSeg)
            }, e
        }(i(13).default);
        e.default = o
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = i(12), o = i(82), r = i(66), a = i(44), l = i(65), h = i(64), u = i(63), c = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n.__extends(e, t), e
        }(s.default);
        (e.default = c).prototype.dateClickingClass = o.default, c.prototype.dateSelectingClass = r.default, c.prototype.eventPointingClass = a.default, c.prototype.eventDraggingClass = l.default, c.prototype.eventResizingClass = h.default, c.prototype.externalDroppingClass = u.default
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), D = i(1), l = i(2), r = i(38), h = i(86), u = i(4), c = i(10), d = i(24), s = i(41), o = i(45),
            a = i(29), p = i(40), f = i(87), g = i(88), m = i(89), v = function (i) {
                function t(t) {
                    var e = i.call(this, t) || this;
                    return e.cellWeekNumbersVisible = !1, e.bottomCoordPadding = 0, e.isRigid = !1, e.hasAllDayBusinessHours = !0, e
                }

                return n.__extends(t, i), t.prototype.componentFootprintToSegs = function (t) {
                    var e, i, n = this.sliceRangeByRow(t.unzonedRange);
                    for (e = 0; e < n.length; e++) i = n[e], this.isRTL ? (i.leftCol = this.daysPerRow - 1 - i.lastRowDayIndex, i.rightCol = this.daysPerRow - 1 - i.firstRowDayIndex) : (i.leftCol = i.firstRowDayIndex, i.rightCol = i.lastRowDayIndex);
                    return n
                }, t.prototype.renderDates = function (t) {
                    this.dateProfile = t, this.updateDayTable(), this.renderGrid()
                }, t.prototype.unrenderDates = function () {
                    this.removeSegPopover()
                }, t.prototype.renderGrid = function () {
                    var t, e, i = this.view, n = this.rowCnt, s = this.colCnt, o = "";
                    for (this.headContainerEl && this.headContainerEl.html(this.renderHeadHtml()), t = 0; t < n; t++) o += this.renderDayRowHtml(t, this.isRigid);
                    for (this.el.html(o), this.rowEls = this.el.find(".fc-row"), this.cellEls = this.el.find(".fc-day, .fc-disabled-day"), this.rowCoordCache = new r.default({
                        els: this.rowEls,
                        isVertical: !0
                    }), this.colCoordCache = new r.default({
                        els: this.cellEls.slice(0, this.colCnt),
                        isHorizontal: !0
                    }), t = 0; t < n; t++) for (e = 0; e < s; e++) this.publiclyTrigger("dayRender", {
                        context: i,
                        args: [this.getCellDate(t, e), this.getCellEl(t, e), i]
                    })
                }, t.prototype.renderDayRowHtml = function (t, e) {
                    var i = this.view.calendar.theme, n = ["fc-row", "fc-week", i.getClass("dayRow")];
                    return e && n.push("fc-rigid"), '<div class="' + n.join(" ") + '"><div class="fc-bg"><table class="' + i.getClass("tableGrid") + '">' + this.renderBgTrHtml(t) + '</table></div><div class="fc-content-skeleton"><table>' + (this.getIsNumbersVisible() ? "<thead>" + this.renderNumberTrHtml(t) + "</thead>" : "") + "</table></div></div>"
                }, t.prototype.getIsNumbersVisible = function () {
                    return this.getIsDayNumbersVisible() || this.cellWeekNumbersVisible
                }, t.prototype.getIsDayNumbersVisible = function () {
                    return 1 < this.rowCnt
                }, t.prototype.renderNumberTrHtml = function (t) {
                    return "<tr>" + (this.isRTL ? "" : this.renderNumberIntroHtml(t)) + this.renderNumberCellsHtml(t) + (this.isRTL ? this.renderNumberIntroHtml(t) : "") + "</tr>"
                }, t.prototype.renderNumberIntroHtml = function (t) {
                    return this.renderIntroHtml()
                }, t.prototype.renderNumberCellsHtml = function (t) {
                    var e, i, n = [];
                    for (e = 0; e < this.colCnt; e++) i = this.getCellDate(t, e), n.push(this.renderNumberCellHtml(i));
                    return n.join("")
                }, t.prototype.renderNumberCellHtml = function (t) {
                    var e, i, n = this.view, s = "", o = this.dateProfile.activeUnzonedRange.containsDate(t),
                        r = this.getIsDayNumbersVisible() && o;
                    return r || this.cellWeekNumbersVisible ? ((e = this.getDayClasses(t)).unshift("fc-day-top"), this.cellWeekNumbersVisible && (i = "ISO" === t._locale._fullCalendar_weekCalc ? 1 : t._locale.firstDayOfWeek()), s += '<td class="' + e.join(" ") + '"' + (o ? ' data-date="' + t.format() + '"' : "") + ">", this.cellWeekNumbersVisible && t.day() == i && (s += n.buildGotoAnchorHtml({
                        date: t,
                        type: "week"
                    }, {class: "fc-week-number"}, t.format("w"))), r && (s += n.buildGotoAnchorHtml(t, {class: "fc-day-number"}, t.date())), s += "</td>") : "<td/>"
                }, t.prototype.prepareHits = function () {
                    this.colCoordCache.build(), this.rowCoordCache.build(), this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding
                }, t.prototype.releaseHits = function () {
                    this.colCoordCache.clear(), this.rowCoordCache.clear()
                }, t.prototype.queryHit = function (t, e) {
                    if (this.colCoordCache.isLeftInBounds(t) && this.rowCoordCache.isTopInBounds(e)) {
                        var i = this.colCoordCache.getHorizontalIndex(t), n = this.rowCoordCache.getVerticalIndex(e);
                        if (null != n && null != i) return this.getCellHit(n, i)
                    }
                }, t.prototype.getHitFootprint = function (t) {
                    var e = this.getCellRange(t.row, t.col);
                    return new c.default(new u.default(e.start, e.end), !0)
                }, t.prototype.getHitEl = function (t) {
                    return this.getCellEl(t.row, t.col)
                }, t.prototype.getCellHit = function (t, e) {
                    return {
                        row: t,
                        col: e,
                        component: this,
                        left: this.colCoordCache.getLeftOffset(e),
                        right: this.colCoordCache.getRightOffset(e),
                        top: this.rowCoordCache.getTopOffset(t),
                        bottom: this.rowCoordCache.getBottomOffset(t)
                    }
                }, t.prototype.getCellEl = function (t, e) {
                    return this.cellEls.eq(t * this.colCnt + e)
                }, t.prototype.executeEventUnrender = function () {
                    this.removeSegPopover(), i.prototype.executeEventUnrender.call(this)
                }, t.prototype.getOwnEventSegs = function () {
                    return i.prototype.getOwnEventSegs.call(this).concat(this.popoverSegs || [])
                }, t.prototype.renderDrag = function (t, e, i) {
                    var n;
                    for (n = 0; n < t.length; n++) this.renderHighlight(t[n].componentFootprint);
                    if (t.length && e && e.component !== this) return this.helperRenderer.renderEventDraggingFootprints(t, e, i), !0
                }, t.prototype.unrenderDrag = function () {
                    this.unrenderHighlight(), this.helperRenderer.unrender()
                }, t.prototype.renderEventResize = function (t, e, i) {
                    var n;
                    for (n = 0; n < t.length; n++) this.renderHighlight(t[n].componentFootprint);
                    this.helperRenderer.renderEventResizingFootprints(t, e, i)
                }, t.prototype.unrenderEventResize = function () {
                    this.unrenderHighlight(), this.helperRenderer.unrender()
                }, t.prototype.removeSegPopover = function () {
                    this.segPopover && this.segPopover.hide()
                }, t.prototype.limitRows = function (t) {
                    var e, i, n = this.eventRenderer.rowStructs || [];
                    for (e = 0; e < n.length; e++) this.unlimitRow(e), !1 !== (i = !!t && ("number" == typeof t ? t : this.computeRowLevelLimit(e))) && this.limitRow(e, i)
                }, t.prototype.computeRowLevelLimit = function (t) {
                    function e(t, e) {
                        s = Math.max(s, D(e).outerHeight())
                    }

                    var i, n, s, o = this.rowEls.eq(t).height(), r = this.eventRenderer.rowStructs[t].tbodyEl.children();
                    for (i = 0; i < r.length; i++) if (n = r.eq(i).removeClass("fc-limited"), s = 0, n.find("> td > :first-child").each(e), n.position().top + s > o) return i;
                    return !1
                }, t.prototype.limitRow = function (e, i) {
                    var t, n, s, o, r, a, l, h, u, c, d, p, f, g, m, v = this, y = this.eventRenderer.rowStructs[e], _ = [],
                        b = 0, w = function (t) {
                            for (; b < t;) (a = v.getCellSegs(e, b, i)).length && (u = n[i - 1][b], m = v.renderMoreLink(e, b, a), g = D("<div/>").append(m), u.append(g), _.push(g[0])), b++
                        };
                    if (i && i < y.segLevels.length) {
                        for (t = y.segLevels[i - 1], n = y.cellMatrix, s = y.tbodyEl.children().slice(i).addClass("fc-limited").get(), o = 0; o < t.length; o++) {
                            for (w((r = t[o]).leftCol), h = [], l = 0; b <= r.rightCol;) a = this.getCellSegs(e, b, i), h.push(a), l += a.length, b++;
                            if (l) {
                                for (c = (u = n[i - 1][r.leftCol]).attr("rowspan") || 1, d = [], p = 0; p < h.length; p++) f = D('<td class="fc-more-cell"/>').attr("rowspan", c), a = h[p], m = this.renderMoreLink(e, r.leftCol + p, [r].concat(a)), g = D("<div/>").append(m), f.append(g), d.push(f[0]), _.push(f[0]);
                                u.addClass("fc-limited").after(D(d)), s.push(u[0])
                            }
                        }
                        w(this.colCnt), y.moreEls = D(_), y.limitedEls = D(s)
                    }
                }, t.prototype.unlimitRow = function (t) {
                    var e = this.eventRenderer.rowStructs[t];
                    e.moreEls && (e.moreEls.remove(), e.moreEls = null), e.limitedEls && (e.limitedEls.removeClass("fc-limited"), e.limitedEls = null)
                }, t.prototype.renderMoreLink = function (l, h, u) {
                    var c = this, d = this.view;
                    return D('<a class="fc-more"/>').text(this.getMoreLinkText(u.length)).on("click", function (t) {
                        var e = c.opt("eventLimitClick"), i = c.getCellDate(l, h), n = D(t.currentTarget),
                            s = c.getCellEl(l, h), o = c.getCellSegs(l, h), r = c.resliceDaySegs(o, i),
                            a = c.resliceDaySegs(u, i);
                        "function" == typeof e && (e = c.publiclyTrigger("eventLimitClick", {
                            context: d,
                            args: [{date: i.clone(), dayEl: s, moreEl: n, segs: r, hiddenSegs: a}, t, d]
                        })), "popover" === e ? c.showSegPopover(l, h, n, r) : "string" == typeof e && d.calendar.zoomTo(i, e)
                    })
                }, t.prototype.showSegPopover = function (t, e, i, n) {
                    var s, o, r = this, a = this.view, l = i.parent();
                    s = 1 == this.rowCnt ? a.el : this.rowEls.eq(t), o = {
                        className: "fc-more-popover " + a.calendar.theme.getClass("popover"),
                        content: this.renderSegPopoverContent(t, e, n),
                        parentEl: a.el,
                        top: s.offset().top,
                        autoHide: !0,
                        viewportConstrain: this.opt("popoverViewportConstrain"),
                        hide: function () {
                            r.popoverSegs && r.triggerBeforeEventSegsDestroyed(r.popoverSegs), r.segPopover.removeElement(), r.segPopover = null, r.popoverSegs = null
                        }
                    }, this.isRTL ? o.right = l.offset().left + l.outerWidth() + 1 : o.left = l.offset().left - 1, this.segPopover = new h.default(o), this.segPopover.show(), this.bindAllSegHandlersToEl(this.segPopover.el), this.triggerAfterEventSegsRendered(n)
                }, t.prototype.renderSegPopoverContent = function (t, e, i) {
                    var n, s = this.view.calendar.theme, o = this.getCellDate(t, e).format(this.opt("dayPopoverFormat")),
                        r = D('<div class="fc-header ' + s.getClass("popoverHeader") + '"><span class="fc-close ' + s.getIconClass("close") + '"></span><span class="fc-title">' + l.htmlEscape(o) + '</span><div class="fc-clear"/></div><div class="fc-body ' + s.getClass("popoverContent") + '"><div class="fc-event-container"></div></div>'),
                        a = r.find(".fc-event-container");
                    for (i = this.eventRenderer.renderFgSegEls(i, !0), this.popoverSegs = i, n = 0; n < i.length; n++) this.hitsNeeded(), i[n].hit = this.getCellHit(t, e), this.hitsNotNeeded(), a.append(i[n].el);
                    return r
                }, t.prototype.resliceDaySegs = function (t, e) {
                    var i, n, s, o = e.clone(), r = o.clone().add(1, "days"), a = new u.default(o, r), l = [];
                    for (i = 0; i < t.length; i++) (s = (n = t[i]).footprint.componentFootprint.unzonedRange.intersect(a)) && l.push(D.extend({}, n, {
                        footprint: new d.default(new c.default(s, n.footprint.componentFootprint.isAllDay), n.footprint.eventDef, n.footprint.eventInstance),
                        isStart: n.isStart && s.isStart,
                        isEnd: n.isEnd && s.isEnd
                    }));
                    return this.eventRenderer.sortEventSegs(l), l
                }, t.prototype.getMoreLinkText = function (t) {
                    var e = this.opt("eventLimitText");
                    return "function" == typeof e ? e(t) : "+" + t + " " + e
                }, t.prototype.getCellSegs = function (t, e, i) {
                    for (var n, s = this.eventRenderer.rowStructs[t].segMatrix, o = i || 0, r = []; o < s.length;) (n = s[o][e]) && r.push(n), o++;
                    return r
                }, t
            }(a.default);
        (e.default = v).prototype.eventRendererClass = f.default, v.prototype.businessHourRendererClass = s.default, v.prototype.helperRendererClass = g.default, v.prototype.fillRendererClass = m.default, o.default.mixInto(v), p.default.mixInto(v)
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = i(1), l = i(2), o = i(28), r = i(30), a = i(69), h = i(46), u = function (a) {
            function t(t, e) {
                var i = a.call(this, t, e) || this;
                return i.dayGrid = i.instantiateDayGrid(), i.dayGrid.isRigid = i.hasRigidRows(), i.opt("weekNumbers") && (i.opt("weekNumbersWithinDays") ? (i.dayGrid.cellWeekNumbersVisible = !0, i.dayGrid.colWeekNumbersVisible = !1) : (i.dayGrid.cellWeekNumbersVisible = !1, i.dayGrid.colWeekNumbersVisible = !0)), i.addChild(i.dayGrid), i.scroller = new o.default({
                    overflowX: "hidden",
                    overflowY: "auto"
                }), i
            }

            return n.__extends(t, a), t.prototype.instantiateDayGrid = function () {
                return new (function (e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.colWeekNumbersVisible = !1, t
                    }

                    return n.__extends(t, e), t.prototype.renderHeadIntroHtml = function () {
                        var t = this.view;
                        return this.colWeekNumbersVisible ? '<th class="fc-week-number ' + t.calendar.theme.getClass("widgetHeader") + '" ' + t.weekNumberStyleAttr() + "><span>" + l.htmlEscape(this.opt("weekNumberTitle")) + "</span></th>" : ""
                    }, t.prototype.renderNumberIntroHtml = function (t) {
                        var e = this.view, i = this.getCellDate(t, 0);
                        return this.colWeekNumbersVisible ? '<td class="fc-week-number" ' + e.weekNumberStyleAttr() + ">" + e.buildGotoAnchorHtml({
                            date: i,
                            type: "week",
                            forceOff: 1 === this.colCnt
                        }, i.format("w")) + "</td>" : ""
                    }, t.prototype.renderBgIntroHtml = function () {
                        var t = this.view;
                        return this.colWeekNumbersVisible ? '<td class="fc-week-number ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.weekNumberStyleAttr() + "></td>" : ""
                    }, t.prototype.renderIntroHtml = function () {
                        var t = this.view;
                        return this.colWeekNumbersVisible ? '<td class="fc-week-number" ' + t.weekNumberStyleAttr() + "></td>" : ""
                    }, t.prototype.getIsNumbersVisible = function () {
                        return h.default.prototype.getIsNumbersVisible.apply(this, arguments) || this.colWeekNumbersVisible
                    }, t
                }(this.dayGridClass))(this)
            }, t.prototype.executeDateRender = function (t) {
                this.dayGrid.breakOnWeeks = /year|month|week/.test(t.currentRangeUnit), a.prototype.executeDateRender.call(this, t)
            }, t.prototype.renderSkeleton = function () {
                var t, e;
                this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()), this.scroller.render(), t = this.scroller.el.addClass("fc-day-grid-container"), e = s('<div class="fc-day-grid" />').appendTo(t), this.el.find(".fc-body > tr > td").append(t), this.dayGrid.headContainerEl = this.el.find(".fc-head-container"), this.dayGrid.setElement(e)
            }, t.prototype.unrenderSkeleton = function () {
                this.dayGrid.removeElement(), this.scroller.destroy()
            }, t.prototype.renderSkeletonHtml = function () {
                var t = this.calendar.theme;
                return '<table class="' + t.getClass("tableGrid") + '">' + (this.opt("columnHeader") ? '<thead class="fc-head"><tr><td class="fc-head-container ' + t.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + t.getClass("widgetContent") + '"></td></tr></tbody></table>'
            }, t.prototype.weekNumberStyleAttr = function () {
                return null != this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
            }, t.prototype.hasRigidRows = function () {
                var t = this.opt("eventLimit");
                return t && "number" != typeof t
            }, t.prototype.updateSize = function (t, e, i) {
                var n, s, o = this.opt("eventLimit"), r = this.dayGrid.headContainerEl.find(".fc-row");
                this.dayGrid.rowEls ? (a.prototype.updateSize.call(this, t, e, i), this.dayGrid.colWeekNumbersVisible && (this.weekNumberWidth = l.matchCellWidths(this.el.find(".fc-week-number"))), this.scroller.clear(), l.uncompensateScroll(r), this.dayGrid.removeSegPopover(), o && "number" == typeof o && this.dayGrid.limitRows(o), n = this.computeScrollerHeight(t), this.setGridHeight(n, e), o && "number" != typeof o && this.dayGrid.limitRows(o), e || (this.scroller.setHeight(n), ((s = this.scroller.getScrollbarWidths()).left || s.right) && (l.compensateScroll(r, s), n = this.computeScrollerHeight(t), this.scroller.setHeight(n)), this.scroller.lockOverflow(s))) : e || (n = this.computeScrollerHeight(t), this.scroller.setHeight(n))
            }, t.prototype.computeScrollerHeight = function (t) {
                return t - l.subtractInnerElHeight(this.el, this.scroller.el)
            }, t.prototype.setGridHeight = function (t, e) {
                e ? l.undistributeHeight(this.dayGrid.rowEls) : l.distributeHeight(this.dayGrid.rowEls, t, !0)
            }, t.prototype.computeInitialDateScroll = function () {
                return {top: 0}
            }, t.prototype.queryDateScroll = function () {
                return {top: this.scroller.getScrollTop()}
            }, t.prototype.applyDateScroll = function (t) {
                void 0 !== t.top && this.scroller.setScrollTop(t.top)
            }, t
        }(r.default);
        (e.default = u).prototype.dateProfileGeneratorClass = a.default, u.prototype.dayGridClass = h.default
    }, function (t, e, i) {
        function o(t, e) {
            return null == e ? t : r.isFunction(e) ? t.filter(e) : (e += "", t.filter(function (t) {
                return t.id == e || t._id === e
            }))
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(1), n = i(3), a = i(2), s = i(74), l = i(14), h = i(8), u = i(6), c = i(75), d = i(76), p = i(77),
            f = i(49), g = i(20), m = i(9), v = i(4), y = i(10), _ = i(15), b = i(78), w = i(54), D = i(25), C = i(33),
            S = i(11), x = i(26), k = i(5), M = i(36), T = function () {
                function t(t, e) {
                    this.loadingLevel = 0, this.ignoreUpdateViewSize = 0, this.freezeContentHeightDepth = 0, l.default.needed(), this.el = t, this.viewsByType = {}, this.optionsManager = new d.default(this, e), this.viewSpecManager = new p.default(this.optionsManager, this), this.initMomentInternals(), this.initCurrentDate(), this.initEventManager(), this.constraints = new f.default(this.eventManager, this), this.constructed()
                }

                return t.prototype.constructed = function () {
                }, t.prototype.getView = function () {
                    return this.view
                }, t.prototype.publiclyTrigger = function (t, e) {
                    var i, n, s = this.opt(t);
                    if (r.isPlainObject(e) ? (i = e.context, n = e.args) : r.isArray(e) && (n = e), null == i && (i = this.el[0]), n || (n = []), this.triggerWith(t, i, n), s) return s.apply(i, n)
                }, t.prototype.hasPublicHandlers = function (t) {
                    return this.hasHandlers(t) || this.opt(t)
                }, t.prototype.option = function (t, e) {
                    var i;
                    if ("string" == typeof t) {
                        if (void 0 === e) return this.optionsManager.get(t);
                        (i = {})[t] = e, this.optionsManager.add(i)
                    } else "object" == typeof t && this.optionsManager.add(t)
                }, t.prototype.opt = function (t) {
                    return this.optionsManager.get(t)
                }, t.prototype.instantiateView = function (t) {
                    var e = this.viewSpecManager.getViewSpec(t);
                    return new e.class(this, e)
                }, t.prototype.isValidViewType = function (t) {
                    return Boolean(this.viewSpecManager.getViewSpec(t))
                }, t.prototype.changeView = function (t, e) {
                    e && (e.start && e.end ? this.optionsManager.recordOverrides({visibleRange: e}) : this.currentDate = this.moment(e).stripZone()), this.renderView(t)
                }, t.prototype.zoomTo = function (t, e) {
                    var i;
                    e = e || "day", i = this.viewSpecManager.getViewSpec(e) || this.viewSpecManager.getUnitViewSpec(e), this.currentDate = t.clone(), this.renderView(i ? i.type : null)
                }, t.prototype.initCurrentDate = function () {
                    var t = this.opt("defaultDate");
                    this.currentDate = null != t ? this.moment(t).stripZone() : this.getNow()
                }, t.prototype.prev = function () {
                    var t = this.view, e = t.dateProfileGenerator.buildPrev(t.get("dateProfile"));
                    e.isValid && (this.currentDate = e.date, this.renderView())
                }, t.prototype.next = function () {
                    var t = this.view, e = t.dateProfileGenerator.buildNext(t.get("dateProfile"));
                    e.isValid && (this.currentDate = e.date, this.renderView())
                }, t.prototype.prevYear = function () {
                    this.currentDate.add(-1, "years"), this.renderView()
                }, t.prototype.nextYear = function () {
                    this.currentDate.add(1, "years"), this.renderView()
                }, t.prototype.today = function () {
                    this.currentDate = this.getNow(), this.renderView()
                }, t.prototype.gotoDate = function (t) {
                    this.currentDate = this.moment(t).stripZone(), this.renderView()
                }, t.prototype.incrementDate = function (t) {
                    this.currentDate.add(n.duration(t)), this.renderView()
                }, t.prototype.getDate = function () {
                    return this.applyTimezone(this.currentDate)
                }, t.prototype.pushLoading = function () {
                    this.loadingLevel++ || this.publiclyTrigger("loading", [!0, this.view])
                }, t.prototype.popLoading = function () {
                    --this.loadingLevel || this.publiclyTrigger("loading", [!1, this.view])
                }, t.prototype.render = function () {
                    this.contentEl ? this.elementVisible() && (this.calcSize(), this.updateViewSize()) : this.initialRender()
                }, t.prototype.initialRender = function () {
                    var o = this, n = this.el;
                    n.addClass("fc"), n.on("click.fc", "a[data-goto]", function (t) {
                        var e = r(t.currentTarget).data("goto"), i = o.moment(e.date), n = e.type,
                            s = o.view.opt("navLink" + a.capitaliseFirstLetter(n) + "Click");
                        "function" == typeof s ? s(i, t) : ("string" == typeof s && (n = s), o.zoomTo(i, n))
                    }), this.optionsManager.watch("settingTheme", ["?theme", "?themeSystem"], function (t) {
                        var e = new (M.default.getThemeClass(t.themeSystem || t.theme))(o.optionsManager),
                            i = e.getClass("widget");
                        o.theme = e, i && n.addClass(i)
                    }, function () {
                        var t = o.theme.getClass("widget");
                        o.theme = null, t && n.removeClass(t)
                    }), this.optionsManager.watch("settingBusinessHourGenerator", ["?businessHours"], function (t) {
                        o.businessHourGenerator = new w.default(t.businessHours, o), o.view && o.view.set("businessHourGenerator", o.businessHourGenerator)
                    }, function () {
                        o.businessHourGenerator = null
                    }), this.optionsManager.watch("applyingDirClasses", ["?isRTL", "?locale"], function (t) {
                        n.toggleClass("fc-ltr", !t.isRTL), n.toggleClass("fc-rtl", t.isRTL)
                    }), this.contentEl = r("<div class='fc-view-container'/>").prependTo(n), this.initToolbars(), this.renderHeader(), this.renderFooter(), this.renderView(this.opt("defaultView")), this.opt("handleWindowResize") && r(window).resize(this.windowResizeProxy = a.debounce(this.windowResize.bind(this), this.opt("windowResizeDelay")))
                }, t.prototype.destroy = function () {
                    this.view && this.clearView(), this.toolbarsManager.proxyCall("removeElement"), this.contentEl.remove(), this.el.removeClass("fc fc-ltr fc-rtl"), this.optionsManager.unwatch("settingTheme"), this.optionsManager.unwatch("settingBusinessHourGenerator"), this.el.off(".fc"), this.windowResizeProxy && (r(window).unbind("resize", this.windowResizeProxy), this.windowResizeProxy = null), l.default.unneeded()
                }, t.prototype.elementVisible = function () {
                    return this.el.is(":visible")
                }, t.prototype.bindViewHandlers = function (e) {
                    var i = this;
                    e.watch("titleForCalendar", ["title"], function (t) {
                        e === i.view && i.setToolbarsTitle(t.title)
                    }), e.watch("dateProfileForCalendar", ["dateProfile"], function (t) {
                        e === i.view && (i.currentDate = t.dateProfile.date, i.updateToolbarButtons(t.dateProfile))
                    })
                }, t.prototype.unbindViewHandlers = function (t) {
                    t.unwatch("titleForCalendar"), t.unwatch("dateProfileForCalendar")
                }, t.prototype.renderView = function (t) {
                    var e, i = this.view;
                    this.freezeContentHeight(), i && t && i.type !== t && this.clearView(), !this.view && t && (e = this.view = this.viewsByType[t] || (this.viewsByType[t] = this.instantiateView(t)), this.bindViewHandlers(e), e.startBatchRender(), e.setElement(r("<div class='fc-view fc-" + t + "-view' />").appendTo(this.contentEl)), this.toolbarsManager.proxyCall("activateButton", t)), this.view && (this.view.get("businessHourGenerator") !== this.businessHourGenerator && this.view.set("businessHourGenerator", this.businessHourGenerator), this.view.setDate(this.currentDate), e && e.stopBatchRender()), this.thawContentHeight()
                }, t.prototype.clearView = function () {
                    var t = this.view;
                    this.toolbarsManager.proxyCall("deactivateButton", t.type), this.unbindViewHandlers(t), t.removeElement(), t.unsetDate(), this.view = null
                }, t.prototype.reinitView = function () {
                    var t = this.view, e = t.queryScroll();
                    this.freezeContentHeight(), this.clearView(), this.calcSize(), this.renderView(t.type), this.view.applyScroll(e), this.thawContentHeight()
                }, t.prototype.getSuggestedViewHeight = function () {
                    return null == this.suggestedViewHeight && this.calcSize(), this.suggestedViewHeight
                }, t.prototype.isHeightAuto = function () {
                    return "auto" === this.opt("contentHeight") || "auto" === this.opt("height")
                }, t.prototype.updateViewSize = function (t) {
                    void 0 === t && (t = !1);
                    var e, i = this.view;
                    if (!this.ignoreUpdateViewSize && i) return t && (this.calcSize(), e = i.queryScroll()), this.ignoreUpdateViewSize++, i.updateSize(this.getSuggestedViewHeight(), this.isHeightAuto(), t), this.ignoreUpdateViewSize--, t && i.applyScroll(e), !0
                }, t.prototype.calcSize = function () {
                    this.elementVisible() && this._calcSize()
                }, t.prototype._calcSize = function () {
                    var t = this.opt("contentHeight"), e = this.opt("height");
                    this.suggestedViewHeight = "number" == typeof t ? t : "function" == typeof t ? t() : "number" == typeof e ? e - this.queryToolbarsHeight() : "function" == typeof e ? e() - this.queryToolbarsHeight() : "parent" === e ? this.el.parent().height() - this.queryToolbarsHeight() : Math.round(this.contentEl.width() / Math.max(this.opt("aspectRatio"), .5))
                }, t.prototype.windowResize = function (t) {
                    t.target === window && this.view && this.view.isDatesRendered && this.updateViewSize(!0) && this.publiclyTrigger("windowResize", [this.view])
                }, t.prototype.freezeContentHeight = function () {
                    this.freezeContentHeightDepth++ || this.forceFreezeContentHeight()
                }, t.prototype.forceFreezeContentHeight = function () {
                    this.contentEl.css({width: "100%", height: this.contentEl.height(), overflow: "hidden"})
                }, t.prototype.thawContentHeight = function () {
                    this.freezeContentHeightDepth--, this.contentEl.css({
                        width: "",
                        height: "",
                        overflow: ""
                    }), this.freezeContentHeightDepth && this.forceFreezeContentHeight()
                }, t.prototype.initToolbars = function () {
                    this.header = new c.default(this, this.computeHeaderOptions()), this.footer = new c.default(this, this.computeFooterOptions()), this.toolbarsManager = new s.default([this.header, this.footer])
                }, t.prototype.computeHeaderOptions = function () {
                    return {extraClasses: "fc-header-toolbar", layout: this.opt("header")}
                }, t.prototype.computeFooterOptions = function () {
                    return {extraClasses: "fc-footer-toolbar", layout: this.opt("footer")}
                }, t.prototype.renderHeader = function () {
                    var t = this.header;
                    t.setToolbarOptions(this.computeHeaderOptions()), t.render(), t.el && this.el.prepend(t.el)
                }, t.prototype.renderFooter = function () {
                    var t = this.footer;
                    t.setToolbarOptions(this.computeFooterOptions()), t.render(), t.el && this.el.append(t.el)
                }, t.prototype.setToolbarsTitle = function (t) {
                    this.toolbarsManager.proxyCall("updateTitle", t)
                }, t.prototype.updateToolbarButtons = function (t) {
                    var e = this.getNow(), i = this.view, n = i.dateProfileGenerator.build(e),
                        s = i.dateProfileGenerator.buildPrev(i.get("dateProfile")),
                        o = i.dateProfileGenerator.buildNext(i.get("dateProfile"));
                    this.toolbarsManager.proxyCall(n.isValid && !t.currentUnzonedRange.containsDate(e) ? "enableButton" : "disableButton", "today"), this.toolbarsManager.proxyCall(s.isValid ? "enableButton" : "disableButton", "prev"), this.toolbarsManager.proxyCall(o.isValid ? "enableButton" : "disableButton", "next")
                }, t.prototype.queryToolbarsHeight = function () {
                    return this.toolbarsManager.items.reduce(function (t, e) {
                        return t + (e.el ? e.el.outerHeight(!0) : 0)
                    }, 0)
                }, t.prototype.select = function (t, e) {
                    this.view.select(this.buildSelectFootprint.apply(this, arguments))
                }, t.prototype.unselect = function () {
                    this.view && this.view.unselect()
                }, t.prototype.buildSelectFootprint = function (t, e) {
                    var i, n = this.moment(t).stripZone();
                    return i = e ? this.moment(e).stripZone() : n.hasTime() ? n.clone().add(this.defaultTimedEventDuration) : n.clone().add(this.defaultAllDayEventDuration), new y.default(new v.default(n, i), !n.hasTime())
                }, t.prototype.initMomentInternals = function () {
                    var o = this;
                    this.defaultAllDayEventDuration = n.duration(this.opt("defaultAllDayEventDuration")), this.defaultTimedEventDuration = n.duration(this.opt("defaultTimedEventDuration")), this.optionsManager.watch("buildingMomentLocale", ["?locale", "?monthNames", "?monthNamesShort", "?dayNames", "?dayNamesShort", "?firstDay", "?weekNumberCalculation"], function (t) {
                        var e, i = t.weekNumberCalculation, n = t.firstDay;
                        "iso" === i && (i = "ISO");
                        var s = Object.create(g.getMomentLocaleData(t.locale));
                        t.monthNames && (s._months = t.monthNames), t.monthNamesShort && (s._monthsShort = t.monthNamesShort), t.dayNames && (s._weekdays = t.dayNames), t.dayNamesShort && (s._weekdaysShort = t.dayNamesShort), null == n && "ISO" === i && (n = 1), null != n && ((e = Object.create(s._week)).dow = n, s._week = e), "ISO" !== i && "local" !== i && "function" != typeof i || (s._fullCalendar_weekCalc = i), o.localeData = s, o.currentDate && o.localizeMoment(o.currentDate)
                    })
                }, t.prototype.moment = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var i;
                    return "local" === this.opt("timezone") ? (i = m.default.apply(null, t)).hasTime() && i.local() : i = "UTC" === this.opt("timezone") ? m.default.utc.apply(null, t) : m.default.parseZone.apply(null, t), this.localizeMoment(i), i
                }, t.prototype.msToMoment = function (t, e) {
                    var i = m.default.utc(t);
                    return e ? i.stripTime() : i = this.applyTimezone(i), this.localizeMoment(i), i
                }, t.prototype.msToUtcMoment = function (t, e) {
                    var i = m.default.utc(t);
                    return e && i.stripTime(), this.localizeMoment(i), i
                }, t.prototype.localizeMoment = function (t) {
                    t._locale = this.localeData
                }, t.prototype.getIsAmbigTimezone = function () {
                    return "local" !== this.opt("timezone") && "UTC" !== this.opt("timezone")
                }, t.prototype.applyTimezone = function (t) {
                    if (!t.hasTime()) return t.clone();
                    var e, i = this.moment(t.toArray()), n = t.time() - i.time();
                    return n && (e = i.clone().add(n), t.time() - e.time() == 0 && (i = e)), i
                }, t.prototype.footprintToDateProfile = function (t, e) {
                    var i, n = m.default.utc(t.unzonedRange.startMs);
                    return e || (i = m.default.utc(t.unzonedRange.endMs)), t.isAllDay ? (n.stripTime(), i && i.stripTime()) : (n = this.applyTimezone(n), i && (i = this.applyTimezone(i))), new _.default(n, i, this)
                }, t.prototype.getNow = function () {
                    var t = this.opt("now");
                    return "function" == typeof t && (t = t()), this.moment(t).stripZone()
                }, t.prototype.humanizeDuration = function (t) {
                    return t.locale(this.opt("locale")).humanize()
                }, t.prototype.parseUnzonedRange = function (t) {
                    var e = null, i = null;
                    return t.start && (e = this.moment(t.start).stripZone()), t.end && (i = this.moment(t.end).stripZone()), e || i ? e && i && i.isBefore(e) ? null : new v.default(e, i) : null
                }, t.prototype.initEventManager = function () {
                    var i = this, n = new b.default(this), t = this.opt("eventSources") || [], e = this.opt("events");
                    this.eventManager = n, e && t.unshift(e), n.on("release", function (t) {
                        i.trigger("eventsReset", t)
                    }), n.freeze(), t.forEach(function (t) {
                        var e = D.default.parse(t, i);
                        e && n.addSource(e)
                    }), n.thaw()
                }, t.prototype.requestEvents = function (t, e) {
                    return this.eventManager.requestEvents(t, e, this.opt("timezone"), !this.opt("lazyFetching"))
                }, t.prototype.getEventEnd = function (t) {
                    return t.end ? t.end.clone() : this.getDefaultEventEnd(t.allDay, t.start)
                }, t.prototype.getDefaultEventEnd = function (t, e) {
                    var i = e.clone();
                    return t ? i.stripTime().add(this.defaultAllDayEventDuration) : i.add(this.defaultTimedEventDuration), this.getIsAmbigTimezone() && i.stripZone(), i
                }, t.prototype.rerenderEvents = function () {
                    this.view.flash("displayingEvents")
                }, t.prototype.refetchEvents = function () {
                    this.eventManager.refetchAllSources()
                }, t.prototype.renderEvents = function (t, e) {
                    this.eventManager.freeze();
                    for (var i = 0; i < t.length; i++) this.renderEvent(t[i], e);
                    this.eventManager.thaw()
                }, t.prototype.renderEvent = function (t, e) {
                    var i = this.eventManager, n = C.default.parse(t, t.source || i.stickySource);
                    n && i.addEventDef(n, e)
                }, t.prototype.removeEvents = function (t) {
                    var e, i = this.eventManager, n = [], s = {};
                    if (null == t) i.removeAllEventDefs(!0); else {
                        for (i.getEventInstances().forEach(function (t) {
                            n.push(t.toLegacy())
                        }), n = o(n, t), e = 0; e < n.length; e++) s[this.eventManager.getEventDefByUid(n[e]._id).id] = !0;
                        for (e in i.freeze(), s) i.removeEventDefsById(e, !0);
                        i.thaw()
                    }
                }, t.prototype.clientEvents = function (t) {
                    var e = [];
                    return this.eventManager.getEventInstances().forEach(function (t) {
                        e.push(t.toLegacy())
                    }), o(e, t)
                }, t.prototype.updateEvents = function (t) {
                    this.eventManager.freeze();
                    for (var e = 0; e < t.length; e++) this.updateEvent(t[e]);
                    this.eventManager.thaw()
                }, t.prototype.updateEvent = function (t) {
                    var e, i, n = this.eventManager.getEventDefByUid(t._id);
                    n instanceof S.default && (e = n.buildInstance(), i = x.default.createFromRawProps(e, t, null), this.eventManager.mutateEventsWithId(n.id, i))
                }, t.prototype.getEventSources = function () {
                    return this.eventManager.otherSources.slice()
                }, t.prototype.getEventSourceById = function (t) {
                    return this.eventManager.getSourceById(k.default.normalizeId(t))
                }, t.prototype.addEventSource = function (t) {
                    var e = D.default.parse(t, this);
                    e && this.eventManager.addSource(e)
                }, t.prototype.removeEventSources = function (t) {
                    var e, i, n = this.eventManager;
                    if (null == t) this.eventManager.removeAllSources(); else {
                        for (e = n.multiQuerySources(t), n.freeze(), i = 0; i < e.length; i++) n.removeSource(e[i]);
                        n.thaw()
                    }
                }, t.prototype.removeEventSource = function (t) {
                    var e, i = this.eventManager, n = i.querySources(t);
                    for (i.freeze(), e = 0; e < n.length; e++) i.removeSource(n[e]);
                    i.thaw()
                }, t.prototype.refetchEventSources = function (t) {
                    var e, i = this.eventManager, n = i.multiQuerySources(t);
                    for (i.freeze(), e = 0; e < n.length; e++) i.refetchSource(n[e]);
                    i.thaw()
                }, t
            }();
        e.default = T, h.default.mixInto(T), u.default.mixInto(T)
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(4), s = i(10), o = i(33), r = i(5), h = i(23), a = function () {
            function t(t, e) {
                this.eventManager = t, this._calendar = e
            }

            return t.prototype.opt = function (t) {
                return this._calendar.opt(t)
            }, t.prototype.isEventInstanceGroupAllowed = function (t) {
                var e, i = t.getEventDef(), n = this.eventRangesToEventFootprints(t.getAllEventRanges()),
                    s = this.getPeerEventInstances(i).map(h.eventInstanceToEventRange),
                    o = this.eventRangesToEventFootprints(s), r = i.getConstraint(), a = i.getOverlap(),
                    l = this.opt("eventAllow");
                for (e = 0; e < n.length; e++) if (!this.isFootprintAllowed(n[e].componentFootprint, o, r, a, n[e].eventInstance)) return !1;
                if (l) for (e = 0; e < n.length; e++) if (!1 === l(n[e].componentFootprint.toLegacy(this._calendar), n[e].getEventLegacy())) return !1;
                return !0
            }, t.prototype.getPeerEventInstances = function (t) {
                return this.eventManager.getEventInstancesWithoutId(t.id)
            }, t.prototype.isSelectionFootprintAllowed = function (t) {
                var e, i = this.eventManager.getEventInstances().map(h.eventInstanceToEventRange),
                    n = this.eventRangesToEventFootprints(i);
                return !(!this.isFootprintAllowed(t, n, this.opt("selectConstraint"), this.opt("selectOverlap")) || (e = this.opt("selectAllow")) && !1 === e(t.toLegacy(this._calendar)))
            }, t.prototype.isFootprintAllowed = function (t, e, i, n, s) {
                var o, r;
                if (null != i && (o = this.constraintValToFootprints(i, t.isAllDay), !this.isFootprintWithinConstraints(t, o))) return !1;
                if (r = this.collectOverlapEventFootprints(e, t), !1 === n) {
                    if (r.length) return !1
                } else if ("function" == typeof n && !function (t, e, i) {
                    var n;
                    for (n = 0; n < t.length; n++) if (!e(t[n].eventInstance.toLegacy(), i ? i.toLegacy() : null)) return !1;
                    return !0
                }(r, n, s)) return !1;
                return !(s && !function (t, e) {
                    var i, n, s, o = e.toLegacy();
                    for (i = 0; i < t.length; i++) {
                        if (!1 === (s = (n = t[i].eventInstance).def.getOverlap())) return !1;
                        if ("function" == typeof s && !s(n.toLegacy(), o)) return !1
                    }
                    return !0
                }(r, s))
            }, t.prototype.isFootprintWithinConstraints = function (t, e) {
                var i;
                for (i = 0; i < e.length; i++) if (this.footprintContainsFootprint(e[i], t)) return !0;
                return !1
            }, t.prototype.constraintValToFootprints = function (t, e) {
                var i;
                return "businessHours" === t ? this.buildCurrentBusinessFootprints(e) : "object" == typeof t ? (i = this.parseEventDefToInstances(t)) ? this.eventInstancesToFootprints(i) : this.parseFootprints(t) : null != t ? (i = this.eventManager.getEventInstancesWithId(t), this.eventInstancesToFootprints(i)) : void 0
            }, t.prototype.buildCurrentBusinessFootprints = function (t) {
                var e = this._calendar.view, i = e.get("businessHourGenerator"), n = e.dateProfile.activeUnzonedRange,
                    s = i.buildEventInstanceGroup(t, n);
                return s ? this.eventInstancesToFootprints(s.eventInstances) : []
            }, t.prototype.eventInstancesToFootprints = function (t) {
                var e = t.map(h.eventInstanceToEventRange);
                return this.eventRangesToEventFootprints(e).map(h.eventFootprintToComponentFootprint)
            }, t.prototype.collectOverlapEventFootprints = function (t, e) {
                var i, n = [];
                for (i = 0; i < t.length; i++) this.footprintsIntersect(e, t[i].componentFootprint) && n.push(t[i]);
                return n
            }, t.prototype.parseEventDefToInstances = function (t) {
                var e = this.eventManager, i = o.default.parse(t, new r.default(this._calendar));
                return !!i && i.buildInstances(e.currentPeriod.unzonedRange)
            }, t.prototype.eventRangesToEventFootprints = function (t) {
                var e, i = [];
                for (e = 0; e < t.length; e++) i.push.apply(i, this.eventRangeToEventFootprints(t[e]));
                return i
            }, t.prototype.eventRangeToEventFootprints = function (t) {
                return [h.eventRangeToEventFootprint(t)]
            }, t.prototype.parseFootprints = function (t) {
                var e, i;
                return t.start && ((e = this._calendar.moment(t.start)).isValid() || (e = null)), t.end && ((i = this._calendar.moment(t.end)).isValid() || (i = null)), [new s.default(new n.default(e, i), e && !e.hasTime() || i && !i.hasTime())]
            }, t.prototype.footprintContainsFootprint = function (t, e) {
                return t.unzonedRange.containsRange(e.unzonedRange)
            }, t.prototype.footprintsIntersect = function (t, e) {
                return t.unzonedRange.intersectsWith(e.unzonedRange)
            }, t
        }();
        e.default = a
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = i(2), o = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n.__extends(e, t), e.prototype.applyProps = function (t) {
                var e, i = this.standardPropMap, n = {}, s = {};
                for (e in t) !0 === i[e] ? this[e] = t[e] : !1 === i[e] ? n[e] = t[e] : s[e] = t[e];
                return this.applyMiscProps(s), this.applyManualStandardProps(n)
            }, e.prototype.applyManualStandardProps = function (t) {
                return !0
            }, e.prototype.applyMiscProps = function (t) {
            }, e.prototype.isStandardProp = function (t) {
                return t in this.standardPropMap
            }, e.defineStandardProps = function (t) {
                var e = this.prototype;
                e.hasOwnProperty("standardPropMap") || (e.standardPropMap = Object.create(e.standardPropMap)), s.copyOwnProps(t, e.standardPropMap)
            }, e.copyVerbatimStandardProps = function (t, e) {
                var i, n = this.prototype.standardPropMap;
                for (i in n) null != t[i] && !0 === n[i] && (e[i] = t[i])
            }, e
        }(i(12).default);
        (e.default = o).prototype.standardPropMap = {}
    }, function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t, e) {
                this.def = t, this.dateProfile = e
            }

            return t.prototype.toLegacy = function () {
                var t = this.dateProfile, e = this.def.toLegacy();
                return e.start = t.start.clone(), e.end = t.end ? t.end.clone() : null, e
            }, t
        }();
        e.default = i
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = i(1), o = i(3), r = i(22), l = i(51), h = i(15), a = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return n.__extends(t, e), t.prototype.isAllDay = function () {
                return !this.startTime && !this.endTime
            }, t.prototype.buildInstances = function (t) {
                for (var e, i, n, s = this.source.calendar, o = t.getStart(), r = t.getEnd(), a = []; o.isBefore(r);) this.dowHash && !this.dowHash[o.day()] || (i = (e = s.applyTimezone(o)).clone(), n = null, this.startTime ? i.time(this.startTime) : i.stripTime(), this.endTime && (n = e.clone().time(this.endTime)), a.push(new l.default(this, new h.default(i, n, s)))), o.add(1, "days");
                return a
            }, t.prototype.setDow = function (t) {
                this.dowHash || (this.dowHash = {});
                for (var e = 0; e < t.length; e++) this.dowHash[t[e]] = !0
            }, t.prototype.clone = function () {
                var t = e.prototype.clone.call(this);
                return t.startTime && (t.startTime = o.duration(this.startTime)), t.endTime && (t.endTime = o.duration(this.endTime)), this.dowHash && (t.dowHash = s.extend({}, this.dowHash)), t
            }, t
        }(r.default);
        (e.default = a).prototype.applyProps = function (t) {
            var e = r.default.prototype.applyProps.call(this, t);
            return t.start && (this.startTime = o.duration(t.start)), t.end && (this.endTime = o.duration(t.end)), t.dow && this.setDow(t.dow), e
        }, a.defineStandardProps({start: !1, end: !1, dow: !1})
    }, function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function (t, e, i) {
            this.unzonedRange = t, this.eventDef = e, i && (this.eventInstance = i)
        };
        e.default = i
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = i(1), s = i(23), o = i(17), n = i(52), a = i(5),
            l = {start: "09:00", end: "17:00", dow: [1, 2, 3, 4, 5], rendering: "inverse-background"}, h = function () {
                function t(t, e) {
                    this.rawComplexDef = t, this.calendar = e
                }

                return t.prototype.buildEventInstanceGroup = function (t, e) {
                    var i, n = this.buildEventDefs(t);
                    if (n.length) return (i = new o.default(s.eventDefsToEventInstances(n, e))).explicitEventDef = n[0], i
                }, t.prototype.buildEventDefs = function (t) {
                    var e, i = this.rawComplexDef, n = [], s = !1, o = [];
                    for (!0 === i ? n = [{}] : r.isPlainObject(i) ? n = [i] : r.isArray(i) && (n = i, s = !0), e = 0; e < n.length; e++) s && !n[e].dow || o.push(this.buildEventDef(t, n[e]));
                    return o
                }, t.prototype.buildEventDef = function (t, e) {
                    var i = r.extend({}, l, e);
                    return t && (i.start = null, i.end = null), n.default.parse(i, new a.default(this.calendar))
                }, t
            }();
        e.default = h
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n.__extends(e, t), e
        }(i(27).default);
        (e.default = s).prototype.classes = {
            widget: "fc-unthemed",
            widgetHeader: "fc-widget-header",
            widgetContent: "fc-widget-content",
            buttonGroup: "fc-button-group",
            button: "fc-button",
            cornerLeft: "fc-corner-left",
            cornerRight: "fc-corner-right",
            stateDefault: "fc-state-default",
            stateActive: "fc-state-active",
            stateDisabled: "fc-state-disabled",
            stateHover: "fc-state-hover",
            stateDown: "fc-state-down",
            popoverHeader: "fc-widget-header",
            popoverContent: "fc-widget-content",
            headerRow: "fc-widget-header",
            dayRow: "fc-widget-content",
            listView: "fc-widget-content"
        }, s.prototype.baseIconClass = "fc-icon", s.prototype.iconClasses = {
            close: "fc-icon-x",
            prev: "fc-icon-left-single-arrow",
            next: "fc-icon-right-single-arrow",
            prevYear: "fc-icon-left-double-arrow",
            nextYear: "fc-icon-right-double-arrow"
        }, s.prototype.iconOverrideOption = "buttonIcons", s.prototype.iconOverrideCustomButtonOption = "icon", s.prototype.iconOverridePrefix = "fc-icon-"
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n.__extends(e, t), e
        }(i(27).default);
        (e.default = s).prototype.classes = {
            widget: "ui-widget",
            widgetHeader: "ui-widget-header",
            widgetContent: "ui-widget-content",
            buttonGroup: "fc-button-group",
            button: "ui-button",
            cornerLeft: "ui-corner-left",
            cornerRight: "ui-corner-right",
            stateDefault: "ui-state-default",
            stateActive: "ui-state-active",
            stateDisabled: "ui-state-disabled",
            stateHover: "ui-state-hover",
            stateDown: "ui-state-down",
            today: "ui-state-highlight",
            popoverHeader: "ui-widget-header",
            popoverContent: "ui-widget-content",
            headerRow: "ui-widget-header",
            dayRow: "ui-widget-content",
            listView: "ui-widget-content"
        }, s.prototype.baseIconClass = "ui-icon", s.prototype.iconClasses = {
            close: "ui-icon-closethick",
            prev: "ui-icon-circle-triangle-w",
            next: "ui-icon-circle-triangle-e",
            prevYear: "ui-icon-seek-prev",
            nextYear: "ui-icon-seek-next"
        }, s.prototype.iconOverrideOption = "themeButtonIcons", s.prototype.iconOverrideCustomButtonOption = "themeIcon", s.prototype.iconOverridePrefix = "ui-icon-"
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = i(1), o = i(16), r = i(5), a = function (i) {
            function t() {
                return null !== i && i.apply(this, arguments) || this
            }

            return n.__extends(t, i), t.prototype.fetch = function (t, i, n) {
                var s = this;
                return this.calendar.pushLoading(), o.default.construct(function (e) {
                    s.func.call(s.calendar, t.clone(), i.clone(), n, function (t) {
                        s.calendar.popLoading(), e(s.parseEventDefs(t))
                    })
                })
            }, t.prototype.getPrimitive = function () {
                return this.func
            }, t.prototype.applyManualStandardProps = function (t) {
                var e = i.prototype.applyManualStandardProps.call(this, t);
                return this.func = t.events, e
            }, t.parse = function (t, e) {
                var i;
                return s.isFunction(t.events) ? i = t : s.isFunction(t) && (i = {events: t}), !!i && r.default.parse.call(this, i, e)
            }, t
        }(r.default);
        (e.default = a).defineStandardProps({events: !1})
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), c = i(1), d = i(2), s = i(16), o = i(5), r = function (t) {
            function u() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n.__extends(u, t), u.prototype.fetch = function (t, e, i) {
                var r = this, n = this.ajaxSettings, a = n.success, l = n.error, h = this.buildRequestParams(t, e, i);
                return this.calendar.pushLoading(), s.default.construct(function (s, o) {
                    c.ajax(c.extend({}, u.AJAX_DEFAULTS, n, {
                        url: r.url, data: h, success: function (t, e, i) {
                            var n;
                            r.calendar.popLoading(), t ? (n = d.applyAll(a, r, [t, e, i]), c.isArray(n) && (t = n), s(r.parseEventDefs(t))) : o()
                        }, error: function (t, e, i) {
                            r.calendar.popLoading(), d.applyAll(l, r, [t, e, i]), o()
                        }
                    }))
                })
            }, u.prototype.buildRequestParams = function (t, e, i) {
                var n, s, o, r, a = this.calendar, l = this.ajaxSettings, h = {};
                return null == (n = this.startParam) && (n = a.opt("startParam")), null == (s = this.endParam) && (s = a.opt("endParam")), null == (o = this.timezoneParam) && (o = a.opt("timezoneParam")), r = c.isFunction(l.data) ? l.data() : l.data || {}, c.extend(h, r), h[n] = t.format(), h[s] = e.format(), i && "local" !== i && (h[o] = i), h
            }, u.prototype.getPrimitive = function () {
                return this.url
            }, u.prototype.applyMiscProps = function (t) {
                this.ajaxSettings = t
            }, u.parse = function (t, e) {
                var i;
                return "string" == typeof t.url ? i = t : "string" == typeof t && (i = {url: t}), !!i && o.default.parse.call(this, i, e)
            }, u.AJAX_DEFAULTS = {dataType: "json", cache: !1}, u
        }(o.default);
        (e.default = r).defineStandardProps({url: !0, startParam: !0, endParam: !0, timezoneParam: !0})
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(8), s = function () {
            function t() {
                this.q = [], this.isPaused = !1, this.isRunning = !1
            }

            return t.prototype.queue = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.q.push.apply(this.q, t), this.tryStart()
            }, t.prototype.pause = function () {
                this.isPaused = !0
            }, t.prototype.resume = function () {
                this.isPaused = !1, this.tryStart()
            }, t.prototype.getIsIdle = function () {
                return !this.isRunning && !this.isPaused
            }, t.prototype.tryStart = function () {
                !this.isRunning && this.canRunNext() && (this.isRunning = !0, this.trigger("start"), this.runRemaining())
            }, t.prototype.canRunNext = function () {
                return !this.isPaused && this.q.length
            }, t.prototype.runRemaining = function () {
                var t, e, i = this;
                do {
                    if (t = this.q.shift(), (e = this.runTask(t)) && e.then) return void e.then(function () {
                        i.canRunNext() && i.runRemaining()
                    })
                } while (this.canRunNext());
                this.trigger("stop"), this.isRunning = !1, this.tryStart()
            }, t.prototype.runTask = function (t) {
                return t()
            }, t
        }();
        e.default = s, n.default.mixInto(s)
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = function (i) {
            function t(t) {
                var e = i.call(this) || this;
                return e.waitsByNamespace = t || {}, e
            }

            return n.__extends(t, i), t.prototype.queue = function (t, e, i) {
                var n, s = {func: t, namespace: e, type: i};
                e && (n = this.waitsByNamespace[e]), this.waitNamespace && (e === this.waitNamespace && null != n ? this.delayWait(n) : (this.clearWait(), this.tryStart())), this.compoundTask(s) && (this.waitNamespace || null == n ? this.tryStart() : this.startWait(e, n))
            }, t.prototype.startWait = function (t, e) {
                this.waitNamespace = t, this.spawnWait(e)
            }, t.prototype.delayWait = function (t) {
                clearTimeout(this.waitId), this.spawnWait(t)
            }, t.prototype.spawnWait = function (t) {
                var e = this;
                this.waitId = setTimeout(function () {
                    e.waitNamespace = null, e.tryStart()
                }, t)
            }, t.prototype.clearWait = function () {
                this.waitNamespace && (clearTimeout(this.waitId), this.waitId = null, this.waitNamespace = null)
            }, t.prototype.canRunNext = function () {
                if (!i.prototype.canRunNext.call(this)) return !1;
                if (this.waitNamespace) {
                    for (var t = this.q, e = 0; e < t.length; e++) if (t[e].namespace !== this.waitNamespace) return !0;
                    return !1
                }
                return !0
            }, t.prototype.runTask = function (t) {
                t.func()
            }, t.prototype.compoundTask = function (t) {
                var e, i, n = this.q, s = !0;
                if (t.namespace && "destroy" === t.type) for (e = n.length - 1; 0 <= e; e--) switch (i = n[e], i.type) {
                    case"init":
                        s = !1;
                    case"add":
                    case"remove":
                        n.splice(e, 1)
                }
                return s && n.push(t), s
            }, t
        }(i(59).default);
        e.default = s
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var o = i(0), a = i(1), r = i(3), l = i(2), h = i(9), u = i(37), n = i(80), c = i(23), s = function (n) {
            function s(t, e) {
                var i = n.call(this) || this;
                return i.isRTL = !1, i.hitsNeededDepth = 0, i.hasAllDayBusinessHours = !1, i.isDatesRendered = !1, t && (i.view = t), e && (i.options = e), i.uid = String(s.guid++), i.childrenByUid = {}, i.nextDayThreshold = r.duration(i.opt("nextDayThreshold")), i.isRTL = i.opt("isRTL"), i.fillRendererClass && (i.fillRenderer = new i.fillRendererClass(i)), i.eventRendererClass && (i.eventRenderer = new i.eventRendererClass(i, i.fillRenderer)), i.helperRendererClass && i.eventRenderer && (i.helperRenderer = new i.helperRendererClass(i, i.eventRenderer)), i.businessHourRendererClass && i.fillRenderer && (i.businessHourRenderer = new i.businessHourRendererClass(i, i.fillRenderer)), i
            }

            return o.__extends(s, n), s.prototype.addChild = function (t) {
                return !this.childrenByUid[t.uid] && (this.childrenByUid[t.uid] = t, !0)
            }, s.prototype.removeChild = function (t) {
                return !!this.childrenByUid[t.uid] && (delete this.childrenByUid[t.uid], !0)
            }, s.prototype.updateSize = function (t, e, i) {
                this.callChildren("updateSize", arguments)
            }, s.prototype.opt = function (t) {
                return this._getView().opt(t)
            }, s.prototype.publiclyTrigger = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var i = this._getCalendar();
                return i.publiclyTrigger.apply(i, t)
            }, s.prototype.hasPublicHandlers = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var i = this._getCalendar();
                return i.hasPublicHandlers.apply(i, t)
            }, s.prototype.executeDateRender = function (t) {
                this.dateProfile = t, this.renderDates(t), this.isDatesRendered = !0, this.callChildren("executeDateRender", arguments)
            }, s.prototype.executeDateUnrender = function () {
                this.callChildren("executeDateUnrender", arguments), this.dateProfile = null, this.unrenderDates(), this.isDatesRendered = !1
            }, s.prototype.renderDates = function (t) {
            }, s.prototype.unrenderDates = function () {
            }, s.prototype.getNowIndicatorUnit = function () {
            }, s.prototype.renderNowIndicator = function (t) {
                this.callChildren("renderNowIndicator", arguments)
            }, s.prototype.unrenderNowIndicator = function () {
                this.callChildren("unrenderNowIndicator", arguments)
            }, s.prototype.renderBusinessHours = function (t) {
                this.businessHourRenderer && this.businessHourRenderer.render(t), this.callChildren("renderBusinessHours", arguments)
            }, s.prototype.unrenderBusinessHours = function () {
                this.callChildren("unrenderBusinessHours", arguments), this.businessHourRenderer && this.businessHourRenderer.unrender()
            }, s.prototype.executeEventRender = function (t) {
                this.eventRenderer ? (this.eventRenderer.rangeUpdated(), this.eventRenderer.render(t)) : this.renderEvents && this.renderEvents(function (t) {
                    var e, i, n, s = [];
                    for (e in t) for (i = t[e].eventInstances, n = 0; n < i.length; n++) s.push(i[n].toLegacy());
                    return s
                }(t)), this.callChildren("executeEventRender", arguments)
            }, s.prototype.executeEventUnrender = function () {
                this.callChildren("executeEventUnrender", arguments), this.eventRenderer ? this.eventRenderer.unrender() : this.destroyEvents && this.destroyEvents()
            }, s.prototype.getBusinessHourSegs = function () {
                var e = this.getOwnBusinessHourSegs();
                return this.iterChildren(function (t) {
                    e.push.apply(e, t.getBusinessHourSegs())
                }), e
            }, s.prototype.getOwnBusinessHourSegs = function () {
                return this.businessHourRenderer ? this.businessHourRenderer.getSegs() : []
            }, s.prototype.getEventSegs = function () {
                var e = this.getOwnEventSegs();
                return this.iterChildren(function (t) {
                    e.push.apply(e, t.getEventSegs())
                }), e
            }, s.prototype.getOwnEventSegs = function () {
                return this.eventRenderer ? this.eventRenderer.getSegs() : []
            }, s.prototype.triggerAfterEventsRendered = function () {
                this.triggerAfterEventSegsRendered(this.getEventSegs()), this.publiclyTrigger("eventAfterAllRender", {
                    context: this,
                    args: [this]
                })
            }, s.prototype.triggerAfterEventSegsRendered = function (t) {
                var i = this;
                this.hasPublicHandlers("eventAfterRender") && t.forEach(function (t) {
                    var e;
                    t.el && (e = t.footprint.getEventLegacy(), i.publiclyTrigger("eventAfterRender", {
                        context: e,
                        args: [e, t.el, i]
                    }))
                })
            }, s.prototype.triggerBeforeEventsDestroyed = function () {
                this.triggerBeforeEventSegsDestroyed(this.getEventSegs())
            }, s.prototype.triggerBeforeEventSegsDestroyed = function (t) {
                var i = this;
                this.hasPublicHandlers("eventDestroy") && t.forEach(function (t) {
                    var e;
                    t.el && (e = t.footprint.getEventLegacy(), i.publiclyTrigger("eventDestroy", {
                        context: e,
                        args: [e, t.el, i]
                    }))
                })
            }, s.prototype.showEventsWithId = function (e) {
                this.getEventSegs().forEach(function (t) {
                    t.footprint.eventDef.id === e && t.el && t.el.css("visibility", "")
                }), this.callChildren("showEventsWithId", arguments)
            }, s.prototype.hideEventsWithId = function (e) {
                this.getEventSegs().forEach(function (t) {
                    t.footprint.eventDef.id === e && t.el && t.el.css("visibility", "hidden")
                }), this.callChildren("hideEventsWithId", arguments)
            }, s.prototype.renderDrag = function (e, i, n) {
                var s = !1;
                return this.iterChildren(function (t) {
                    t.renderDrag(e, i, n) && (s = !0)
                }), s
            }, s.prototype.unrenderDrag = function () {
                this.callChildren("unrenderDrag", arguments)
            }, s.prototype.renderEventResize = function (t, e, i) {
                this.callChildren("renderEventResize", arguments)
            }, s.prototype.unrenderEventResize = function () {
                this.callChildren("unrenderEventResize", arguments)
            }, s.prototype.renderSelectionFootprint = function (t) {
                this.renderHighlight(t), this.callChildren("renderSelectionFootprint", arguments)
            }, s.prototype.unrenderSelection = function () {
                this.unrenderHighlight(), this.callChildren("unrenderSelection", arguments)
            }, s.prototype.renderHighlight = function (t) {
                this.fillRenderer && this.fillRenderer.renderFootprint("highlight", t, {
                    getClasses: function () {
                        return ["fc-highlight"]
                    }
                }), this.callChildren("renderHighlight", arguments)
            }, s.prototype.unrenderHighlight = function () {
                this.fillRenderer && this.fillRenderer.unrender("highlight"), this.callChildren("unrenderHighlight", arguments)
            }, s.prototype.hitsNeeded = function () {
                this.hitsNeededDepth++ || this.prepareHits(), this.callChildren("hitsNeeded", arguments)
            }, s.prototype.hitsNotNeeded = function () {
                this.hitsNeededDepth && !--this.hitsNeededDepth && this.releaseHits(), this.callChildren("hitsNotNeeded", arguments)
            }, s.prototype.prepareHits = function () {
            }, s.prototype.releaseHits = function () {
            }, s.prototype.queryHit = function (t, e) {
                var i, n, s = this.childrenByUid;
                for (i in s) if (n = s[i].queryHit(t, e)) break;
                return n
            }, s.prototype.getSafeHitFootprint = function (t) {
                var e = this.getHitFootprint(t);
                return this.dateProfile.activeUnzonedRange.containsRange(e.unzonedRange) ? e : null
            }, s.prototype.getHitFootprint = function (t) {
            }, s.prototype.getHitEl = function (t) {
            }, s.prototype.eventRangesToEventFootprints = function (t) {
                var e, i = [];
                for (e = 0; e < t.length; e++) i.push.apply(i, this.eventRangeToEventFootprints(t[e]));
                return i
            }, s.prototype.eventRangeToEventFootprints = function (t) {
                return [c.eventRangeToEventFootprint(t)]
            }, s.prototype.eventFootprintsToSegs = function (t) {
                var e, i = [];
                for (e = 0; e < t.length; e++) i.push.apply(i, this.eventFootprintToSegs(t[e]));
                return i
            }, s.prototype.eventFootprintToSegs = function (t) {
                var e, i, n, s = t.componentFootprint.unzonedRange;
                for (e = this.componentFootprintToSegs(t.componentFootprint), i = 0; i < e.length; i++) n = e[i], s.isStart || (n.isStart = !1), s.isEnd || (n.isEnd = !1), n.footprint = t;
                return e
            }, s.prototype.componentFootprintToSegs = function (t) {
                return []
            }, s.prototype.callChildren = function (e, i) {
                this.iterChildren(function (t) {
                    t[e].apply(t, i)
                })
            }, s.prototype.iterChildren = function (t) {
                var e, i = this.childrenByUid;
                for (e in i) t(i[e])
            }, s.prototype._getCalendar = function () {
                return this.calendar || this.view.calendar
            }, s.prototype._getView = function () {
                return this.view
            }, s.prototype._getDateProfile = function () {
                return this._getView().get("dateProfile")
            }, s.prototype.buildGotoAnchorHtml = function (t, e, i) {
                var n, s, o, r;
                return a.isPlainObject(t) ? (n = t.date, s = t.type, o = t.forceOff) : n = t, r = {
                    date: (n = h.default(n)).format("YYYY-MM-DD"),
                    type: s || "day"
                }, "string" == typeof e && (i = e, e = null), e = e ? " " + l.attrsToStr(e) : "", i = i || "", !o && this.opt("navLinks") ? "<a" + e + ' data-goto="' + l.htmlEscape(JSON.stringify(r)) + '">' + i + "</a>" : "<span" + e + ">" + i + "</span>"
            }, s.prototype.getAllDayHtml = function () {
                return this.opt("allDayHtml") || l.htmlEscape(this.opt("allDayText"))
            }, s.prototype.getDayClasses = function (t, e) {
                var i, n = this._getView(), s = [];
                return this.dateProfile.activeUnzonedRange.containsDate(t) ? (s.push("fc-" + l.dayIDs[t.day()]), n.isDateInOtherMonth(t, this.dateProfile) && s.push("fc-other-month"), i = n.calendar.getNow(), t.isSame(i, "day") ? (s.push("fc-today"), !0 !== e && s.push(n.calendar.theme.getClass("today"))) : t < i ? s.push("fc-past") : s.push("fc-future")) : s.push("fc-disabled-day"), s
            }, s.prototype.formatRange = function (t, e, i, n) {
                var s = t.end;
                return e && (s = s.clone().subtract(1)), u.formatRange(t.start, s, i, n, this.isRTL)
            }, s.prototype.currentRangeAs = function (t) {
                return this._getDateProfile().currentUnzonedRange.as(t)
            }, s.prototype.computeDayRange = function (t) {
                var e = this._getCalendar(), i = e.msToUtcMoment(t.startMs, !0), n = e.msToUtcMoment(t.endMs),
                    s = +n.time(), o = n.clone().stripTime();
                return s && s >= this.nextDayThreshold && o.add(1, "days"), o <= i && (o = i.clone().add(1, "days")), {
                    start: i,
                    end: o
                }
            }, s.prototype.isMultiDayRange = function (t) {
                var e = this.computeDayRange(t);
                return 1 < e.end.diff(e.start, "days")
            }, s.guid = 0, s
        }(n.default);
        e.default = s
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var d = i(3), c = i(2), p = i(4), n = function () {
            function t(t) {
                this._view = t
            }

            return t.prototype.opt = function (t) {
                return this._view.opt(t)
            }, t.prototype.trimHiddenDays = function (t) {
                return this._view.trimHiddenDays(t)
            }, t.prototype.msToUtcMoment = function (t, e) {
                return this._view.calendar.msToUtcMoment(t, e)
            }, t.prototype.buildPrev = function (t) {
                var e = t.date.clone().startOf(t.currentRangeUnit).subtract(t.dateIncrement);
                return this.build(e, -1)
            }, t.prototype.buildNext = function (t) {
                var e = t.date.clone().startOf(t.currentRangeUnit).add(t.dateIncrement);
                return this.build(e, 1)
            }, t.prototype.build = function (t, e, i) {
                void 0 === i && (i = !1);
                var n, s, o, r, a, l, h, u, c = !t.hasTime();
                return n = this.buildValidRange(), n = this.trimHiddenDays(n), i && (t = this.msToUtcMoment(n.constrainDate(t), c)), s = this.buildCurrentRangeInfo(t, e), o = /^(year|month|week|day)$/.test(s.unit), r = this.buildRenderRange(this.trimHiddenDays(s.unzonedRange), s.unit, o), a = (r = this.trimHiddenDays(r)).clone(), this.opt("showNonCurrentDates") || (a = a.intersect(s.unzonedRange)), h = d.duration(this.opt("minTime")), u = d.duration(this.opt("maxTime")), (a = (a = this.adjustActiveRange(a, h, u)).intersect(n)) && (t = this.msToUtcMoment(a.constrainDate(t), c)), l = s.unzonedRange.intersectsWith(n), {
                    validUnzonedRange: n,
                    currentUnzonedRange: s.unzonedRange,
                    currentRangeUnit: s.unit,
                    isRangeAllDay: o,
                    activeUnzonedRange: a,
                    renderUnzonedRange: r,
                    minTime: h,
                    maxTime: u,
                    isValid: l,
                    date: t,
                    dateIncrement: this.buildDateIncrement(s.duration)
                }
            }, t.prototype.buildValidRange = function () {
                return this._view.getUnzonedRangeOption("validRange", this._view.calendar.getNow()) || new p.default
            }, t.prototype.buildCurrentRangeInfo = function (t, e) {
                var i, n = this._view.viewSpec, s = null, o = null, r = null;
                return n.duration ? (s = n.duration, o = n.durationUnit, r = this.buildRangeFromDuration(t, e, s, o)) : (i = this.opt("dayCount")) ? (o = "day", r = this.buildRangeFromDayCount(t, e, i)) : (r = this.buildCustomVisibleRange(t)) ? o = c.computeGreatestUnit(r.getStart(), r.getEnd()) : (s = this.getFallbackDuration(), o = c.computeGreatestUnit(s), r = this.buildRangeFromDuration(t, e, s, o)), {
                    duration: s,
                    unit: o,
                    unzonedRange: r
                }
            }, t.prototype.getFallbackDuration = function () {
                return d.duration({days: 1})
            }, t.prototype.adjustActiveRange = function (t, e, i) {
                var n = t.getStart(), s = t.getEnd();
                return this._view.usesMinMaxTime && (e < 0 && n.time(0).add(e), 864e5 < i && s.time(i - 864e5)), new p.default(n, s)
            }, t.prototype.buildRangeFromDuration = function (t, e, i, n) {
                function s() {
                    a = t.clone().startOf(u), l = a.clone().add(i), h = new p.default(a, l)
                }

                var o, r, a, l, h, u = this.opt("dateAlignment");
                return u || (o = this.opt("dateIncrement"), u = o ? (r = d.duration(o)) < i ? c.computeDurationGreatestUnit(r, o) : n : n), i.as("days") <= 1 && this._view.isHiddenDay(a) && (a = this._view.skipHiddenDays(a, e)).startOf("day"), s(), this.trimHiddenDays(h) || (t = this._view.skipHiddenDays(t, e), s()), h
            }, t.prototype.buildRangeFromDayCount = function (t, e, i) {
                var n, s = this.opt("dateAlignment"), o = 0, r = t.clone();
                for (s && r.startOf(s), r.startOf("day"), n = (r = this._view.skipHiddenDays(r, e)).clone(); n.add(1, "day"), this._view.isHiddenDay(n) || o++, o < i;) ;
                return new p.default(r, n)
            }, t.prototype.buildCustomVisibleRange = function (t) {
                var e = this._view.getUnzonedRangeOption("visibleRange", this._view.calendar.applyTimezone(t));
                return !e || null != e.startMs && null != e.endMs ? e : null
            }, t.prototype.buildRenderRange = function (t, e, i) {
                return t.clone()
            }, t.prototype.buildDateIncrement = function (t) {
                var e, i = this.opt("dateIncrement");
                return i ? d.duration(i) : (e = this.opt("dateAlignment")) ? d.duration(1, e) : t || d.duration({days: 1})
            }, t
        }();
        e.default = n
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), f = i(1), g = i(3), m = i(7), v = i(2), o = i(9), s = i(6), y = i(18), r = i(11), _ = i(17),
            a = i(5), l = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isDragging = !1, t
                }

                return n.__extends(t, e), t.prototype.end = function () {
                    this.dragListener && this.dragListener.endInteraction()
                }, t.prototype.bindToDocument = function () {
                    this.listenTo(f(document), {dragstart: this.handleDragStart, sortstart: this.handleDragStart})
                }, t.prototype.unbindFromDocument = function () {
                    this.stopListeningTo(f(document))
                }, t.prototype.handleDragStart = function (t, e) {
                    var i, n;
                    this.opt("droppable") && (i = f((e ? e.item : null) || t.target), n = this.opt("dropAccept"), (f.isFunction(n) ? n.call(i[0], i) : i.is(n)) && (this.isDragging || this.listenToExternalDrag(i, t, e)))
                }, t.prototype.listenToExternalDrag = function (e, t, i) {
                    var n, s, o, r, a, l, h, u = this, c = this.component, d = this.view,
                        p = (s = e, (h = m.default.dataAttrPrefix) && (h += "-"), (o = s.data(h + "event") || null) && (null == (r = (o = "object" == typeof o ? f.extend({}, o) : {}).start) && (r = o.time), a = o.duration, l = o.stick, delete o.start, delete o.time, delete o.duration, delete o.stick), null == r && (r = s.data(h + "start")), null == r && (r = s.data(h + "time")), null == a && (a = s.data(h + "duration")), null == l && (l = s.data(h + "stick")), {
                            eventProps: o,
                            startTime: r = null != r ? g.duration(r) : null,
                            duration: a = null != a ? g.duration(a) : null,
                            stick: l = Boolean(l)
                        });
                    (this.dragListener = new y.default(c, {
                        interactionStart: function () {
                            u.isDragging = !0
                        }, hitOver: function (t) {
                            var e, i = t.component.getSafeHitFootprint(t);
                            !!i && (!!(n = u.computeExternalDrop(i, p)) && (e = new _.default(n.buildInstances()), p.eventProps ? c.isEventInstanceGroupAllowed(e) : c.isExternalInstanceGroupAllowed(e))) || (n = null, v.disableCursor()), n && c.renderDrag(c.eventRangesToEventFootprints(e.sliceRenderRanges(c.dateProfile.renderUnzonedRange, d.calendar)))
                        }, hitOut: function () {
                            n = null
                        }, hitDone: function () {
                            v.enableCursor(), c.unrenderDrag()
                        }, interactionEnd: function (t) {
                            n && d.reportExternalDrop(n, Boolean(p.eventProps), Boolean(p.stick), e, t, i), u.isDragging = !1, u.dragListener = null
                        }
                    })).startDrag(t)
                }, t.prototype.computeExternalDrop = function (t, e) {
                    var i, n = this.view.calendar, s = o.default.utc(t.unzonedRange.startMs).stripZone();
                    return t.isAllDay && (e.startTime ? s.time(e.startTime) : s.stripTime()), e.duration && (i = s.clone().add(e.duration)), s = n.applyTimezone(s), i && (i = n.applyTimezone(i)), r.default.parse(f.extend({}, e.eventProps, {
                        start: s,
                        end: i
                    }), new a.default(n))
                }, t
            }(i(13).default);
        e.default = l, s.default.mixInto(l)
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(0), o = i(1), g = i(2), a = i(26), l = i(35), m = i(18), n = function (n) {
            function t(t, e) {
                var i = n.call(this, t) || this;
                return i.isResizing = !1, i.eventPointing = e, i
            }

            return s.__extends(t, n), t.prototype.end = function () {
                this.dragListener && this.dragListener.endInteraction()
            }, t.prototype.bindToEl = function (t) {
                var e = this.component;
                e.bindSegHandlerToEl(t, "mousedown", this.handleMouseDown.bind(this)), e.bindSegHandlerToEl(t, "touchstart", this.handleTouchStart.bind(this))
            }, t.prototype.handleMouseDown = function (t, e) {
                this.component.canStartResize(t, e) && this.buildDragListener(t, o(e.target).is(".fc-start-resizer")).startInteraction(e, {distance: 5})
            }, t.prototype.handleTouchStart = function (t, e) {
                this.component.canStartResize(t, e) && this.buildDragListener(t, o(e.target).is(".fc-start-resizer")).startInteraction(e)
            }, t.prototype.buildDragListener = function (r, a) {
                var e, l, h = this, u = this.component, c = this.view, d = c.calendar, p = d.eventManager, i = r.el,
                    f = r.footprint.eventDef, n = r.footprint.eventInstance;
                return this.dragListener = new m.default(u, {
                    scroll: this.opt("dragScroll"),
                    subjectEl: i,
                    interactionStart: function () {
                        e = !1
                    },
                    dragStart: function (t) {
                        e = !0, h.eventPointing.handleMouseout(r, t), h.segResizeStart(r, t)
                    },
                    hitOver: function (t, e, i) {
                        var n, s = u.getSafeHitFootprint(i), o = u.getSafeHitFootprint(t);
                        !(!s || !o) && (!!(l = a ? h.computeEventStartResizeMutation(s, o, r.footprint) : h.computeEventEndResizeMutation(s, o, r.footprint)) && (n = p.buildMutatedEventInstanceGroup(f.id, l), u.isEventInstanceGroupAllowed(n))) ? l.isEmpty() && (l = null) : (l = null, g.disableCursor()), l && (c.hideEventsWithId(r.footprint.eventDef.id), c.renderEventResize(u.eventRangesToEventFootprints(n.sliceRenderRanges(u.dateProfile.renderUnzonedRange, d)), r))
                    },
                    hitOut: function () {
                        l = null
                    },
                    hitDone: function () {
                        c.unrenderEventResize(r), c.showEventsWithId(r.footprint.eventDef.id), g.enableCursor()
                    },
                    interactionEnd: function (t) {
                        e && h.segResizeStop(r, t), l && c.reportEventResize(n, l, i, t), h.dragListener = null
                    }
                })
            }, t.prototype.segResizeStart = function (t, e) {
                this.isResizing = !0, this.component.publiclyTrigger("eventResizeStart", {
                    context: t.el[0],
                    args: [t.footprint.getEventLegacy(), e, {}, this.view]
                })
            }, t.prototype.segResizeStop = function (t, e) {
                this.isResizing = !1, this.component.publiclyTrigger("eventResizeStop", {
                    context: t.el[0],
                    args: [t.footprint.getEventLegacy(), e, {}, this.view]
                })
            }, t.prototype.computeEventStartResizeMutation = function (t, e, i) {
                var n, s, o = i.componentFootprint.unzonedRange,
                    r = this.component.diffDates(e.unzonedRange.getStart(), t.unzonedRange.getStart());
                return o.getStart().add(r) < o.getEnd() && ((n = new l.default).setStartDelta(r), (s = new a.default).setDateMutation(n), s)
            }, t.prototype.computeEventEndResizeMutation = function (t, e, i) {
                var n, s, o = i.componentFootprint.unzonedRange,
                    r = this.component.diffDates(e.unzonedRange.getEnd(), t.unzonedRange.getEnd());
                return o.getEnd().add(r) > o.getStart() && ((n = new l.default).setEndDelta(r), (s = new a.default).setDateMutation(n), s)
            }, t
        }(i(13).default);
        e.default = n
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(0), m = i(2), o = i(26), h = i(35), r = i(39), v = i(18), y = i(81), n = function (n) {
            function t(t, e) {
                var i = n.call(this, t) || this;
                return i.isDragging = !1, i.eventPointing = e, i
            }

            return s.__extends(t, n), t.prototype.end = function () {
                this.dragListener && this.dragListener.endInteraction()
            }, t.prototype.getSelectionDelay = function () {
                var t = this.opt("eventLongPressDelay");
                return null == t && (t = this.opt("longPressDelay")), t
            }, t.prototype.bindToEl = function (t) {
                var e = this.component;
                e.bindSegHandlerToEl(t, "mousedown", this.handleMousedown.bind(this)), e.bindSegHandlerToEl(t, "touchstart", this.handleTouchStart.bind(this))
            }, t.prototype.handleMousedown = function (t, e) {
                this.component.canStartDrag(t, e) && this.buildDragListener(t).startInteraction(e, {distance: 5})
            }, t.prototype.handleTouchStart = function (t, e) {
                var i = this.component,
                    n = {delay: this.view.isEventDefSelected(t.footprint.eventDef) ? 0 : this.getSelectionDelay()};
                i.canStartDrag(t, e) ? this.buildDragListener(t).startInteraction(e, n) : i.canStartSelection(t, e) && this.buildSelectListener(t).startInteraction(e, n)
            }, t.prototype.buildSelectListener = function (t) {
                var e = this, i = this.view, n = t.footprint.eventDef, s = t.footprint.eventInstance;
                if (this.dragListener) return this.dragListener;
                var o = this.dragListener = new r.default({
                    dragStart: function (t) {
                        o.isTouch && !i.isEventDefSelected(n) && s && i.selectEventInstance(s)
                    }, interactionEnd: function (t) {
                        e.dragListener = null
                    }
                });
                return o
            }, t.prototype.buildDragListener = function (r) {
                var e, a, l, h = this, u = this.component, c = this.view, d = c.calendar, p = d.eventManager, i = r.el,
                    f = r.footprint.eventDef, n = r.footprint.eventInstance;
                if (this.dragListener) return this.dragListener;
                var g = this.dragListener = new v.default(c, {
                    scroll: this.opt("dragScroll"), subjectEl: i, subjectCenter: !0, interactionStart: function (t) {
                        r.component = u, e = !1, (a = new y.default(r.el, {
                            additionalClass: "fc-dragging",
                            parentEl: c.el,
                            opacity: g.isTouch ? null : h.opt("dragOpacity"),
                            revertDuration: h.opt("dragRevertDuration"),
                            zIndex: 2
                        })).hide(), a.start(t)
                    }, dragStart: function (t) {
                        g.isTouch && !c.isEventDefSelected(f) && n && c.selectEventInstance(n), e = !0, h.eventPointing.handleMouseout(r, t), h.segDragStart(r, t), c.hideEventsWithId(r.footprint.eventDef.id)
                    }, hitOver: function (t, e, i) {
                        var n, s, o;
                        r.hit && (i = r.hit), n = i.component.getSafeHitFootprint(i), s = t.component.getSafeHitFootprint(t), !(!n || !s) && (!!(l = h.computeEventDropMutation(n, s, f)) && (o = p.buildMutatedEventInstanceGroup(f.id, l), u.isEventInstanceGroupAllowed(o))) || (l = null, m.disableCursor()), l && c.renderDrag(u.eventRangesToEventFootprints(o.sliceRenderRanges(u.dateProfile.renderUnzonedRange, d)), r, g.isTouch) ? a.hide() : a.show(), e && (l = null)
                    }, hitOut: function () {
                        c.unrenderDrag(r), a.show(), l = null
                    }, hitDone: function () {
                        m.enableCursor()
                    }, interactionEnd: function (t) {
                        delete r.component, a.stop(!l, function () {
                            e && (c.unrenderDrag(r), h.segDragStop(r, t)), c.showEventsWithId(r.footprint.eventDef.id), l && c.reportEventDrop(n, l, i, t)
                        }), h.dragListener = null
                    }
                });
                return g
            }, t.prototype.segDragStart = function (t, e) {
                this.isDragging = !0, this.component.publiclyTrigger("eventDragStart", {
                    context: t.el[0],
                    args: [t.footprint.getEventLegacy(), e, {}, this.view]
                })
            }, t.prototype.segDragStop = function (t, e) {
                this.isDragging = !1, this.component.publiclyTrigger("eventDragStop", {
                    context: t.el[0],
                    args: [t.footprint.getEventLegacy(), e, {}, this.view]
                })
            }, t.prototype.computeEventDropMutation = function (t, e, i) {
                var n = new o.default;
                return n.setDateMutation(this.computeEventDateMutation(t, e)), n
            }, t.prototype.computeEventDateMutation = function (t, e) {
                var i, n, s = t.unzonedRange.getStart(), o = e.unzonedRange.getStart(), r = !1, a = !1, l = !1;
                return t.isAllDay !== e.isAllDay && (r = !0, e.isAllDay ? (l = !0, s.stripTime()) : a = !0), i = this.component.diffDates(o, s), (n = new h.default).clearEnd = r, n.forceTimed = a, n.forceAllDay = l, n.setDateDelta(i), n
            }, t
        }(i(13).default);
        e.default = n
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), l = i(2), s = i(18), o = i(10), r = i(4), a = function (i) {
            function t(t) {
                var e = i.call(this, t) || this;
                return e.dragListener = e.buildDragListener(), e
            }

            return n.__extends(t, i), t.prototype.end = function () {
                this.dragListener.endInteraction()
            }, t.prototype.getDelay = function () {
                var t = this.opt("selectLongPressDelay");
                return null == t && (t = this.opt("longPressDelay")), t
            }, t.prototype.bindToEl = function (t) {
                var e = this, i = this.component, n = this.dragListener;
                i.bindDateHandlerToEl(t, "mousedown", function (t) {
                    e.opt("selectable") && !i.shouldIgnoreMouse() && n.startInteraction(t, {distance: e.opt("selectMinDistance")})
                }), i.bindDateHandlerToEl(t, "touchstart", function (t) {
                    e.opt("selectable") && !i.shouldIgnoreTouch() && n.startInteraction(t, {delay: e.getDelay()})
                }), l.preventSelection(t)
            }, t.prototype.buildDragListener = function () {
                var o, r = this, a = this.component;
                return new s.default(a, {
                    scroll: this.opt("dragScroll"), interactionStart: function () {
                        o = null
                    }, dragStart: function (t) {
                        r.view.unselect(t)
                    }, hitOver: function (t, e, i) {
                        var n, s;
                        i && (n = a.getSafeHitFootprint(i), s = a.getSafeHitFootprint(t), (o = n && s ? r.computeSelection(n, s) : null) ? a.renderSelectionFootprint(o) : !1 === o && l.disableCursor())
                    }, hitOut: function () {
                        o = null, a.unrenderSelection()
                    }, hitDone: function () {
                        l.enableCursor()
                    }, interactionEnd: function (t, e) {
                        !e && o && r.view.reportSelection(o, t)
                    }
                })
            }, t.prototype.computeSelection = function (t, e) {
                var i = this.computeSelectionFootprint(t, e);
                return !(i && !this.isSelectionFootprintAllowed(i)) && i
            }, t.prototype.computeSelectionFootprint = function (t, e) {
                var i = [t.unzonedRange.startMs, t.unzonedRange.endMs, e.unzonedRange.startMs, e.unzonedRange.endMs];
                return i.sort(l.compareNumbers), new o.default(new r.default(i[0], i[3]), t.isAllDay)
            }, t.prototype.isSelectionFootprintAllowed = function (t) {
                return this.component.dateProfile.validUnzonedRange.containsRange(t.unzonedRange) && this.view.calendar.constraints.isSelectionFootprintAllowed(t)
            }, t
        }(i(13).default);
        e.default = a
    }, function (t, e, i) {
        function o(t) {
            var e, i = [], n = [];
            for (e = 0; e < t.length; e++) t[e].componentFootprint.isAllDay ? i.push(t[e]) : n.push(t[e]);
            return {allDay: i, timed: n}
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = i(3), r = i(1), l = i(2), h = i(28), a = i(30), u = i(68), c = i(46), d = function (a) {
            function t(t, e) {
                var i = a.call(this, t, e) || this;
                return i.usesMinMaxTime = !0, i.timeGrid = i.instantiateTimeGrid(), i.addChild(i.timeGrid), i.opt("allDaySlot") && (i.dayGrid = i.instantiateDayGrid(), i.addChild(i.dayGrid)), i.scroller = new h.default({
                    overflowX: "hidden",
                    overflowY: "auto"
                }), i
            }

            return n.__extends(t, a), t.prototype.instantiateTimeGrid = function () {
                return new (function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }

                    return n.__extends(e, t), e.prototype.renderHeadIntroHtml = function () {
                        var t, e = this.view, i = e.calendar,
                            n = i.msToUtcMoment(this.dateProfile.renderUnzonedRange.startMs, !0);
                        return this.opt("weekNumbers") ? (t = n.format(this.opt("smallWeekFormat")), '<th class="fc-axis fc-week-number ' + i.theme.getClass("widgetHeader") + '" ' + e.axisStyleAttr() + ">" + e.buildGotoAnchorHtml({
                            date: n,
                            type: "week",
                            forceOff: 1 < this.colCnt
                        }, l.htmlEscape(t)) + "</th>") : '<th class="fc-axis ' + i.theme.getClass("widgetHeader") + '" ' + e.axisStyleAttr() + "></th>"
                    }, e.prototype.renderBgIntroHtml = function () {
                        var t = this.view;
                        return '<td class="fc-axis ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.axisStyleAttr() + "></td>"
                    }, e.prototype.renderIntroHtml = function () {
                        return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>"
                    }, e
                }(this.timeGridClass))(this)
            }, t.prototype.instantiateDayGrid = function () {
                return new (function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }

                    return n.__extends(e, t), e.prototype.renderBgIntroHtml = function () {
                        var t = this.view;
                        return '<td class="fc-axis ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.axisStyleAttr() + "><span>" + t.getAllDayHtml() + "</span></td>"
                    }, e.prototype.renderIntroHtml = function () {
                        return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>"
                    }, e
                }(this.dayGridClass))(this)
            }, t.prototype.renderSkeleton = function () {
                var t, e;
                this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()), this.scroller.render(), t = this.scroller.el.addClass("fc-time-grid-container"), e = r('<div class="fc-time-grid" />').appendTo(t), this.el.find(".fc-body > tr > td").append(t), this.timeGrid.headContainerEl = this.el.find(".fc-head-container"), this.timeGrid.setElement(e), this.dayGrid && (this.dayGrid.setElement(this.el.find(".fc-day-grid")), this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight())
            }, t.prototype.unrenderSkeleton = function () {
                this.timeGrid.removeElement(), this.dayGrid && this.dayGrid.removeElement(), this.scroller.destroy()
            }, t.prototype.renderSkeletonHtml = function () {
                var t = this.calendar.theme;
                return '<table class="' + t.getClass("tableGrid") + '">' + (this.opt("columnHeader") ? '<thead class="fc-head"><tr><td class="fc-head-container ' + t.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + t.getClass("widgetContent") + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="fc-divider ' + t.getClass("widgetHeader") + '"/>' : "") + "</td></tr></tbody></table>"
            }, t.prototype.axisStyleAttr = function () {
                return null != this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
            }, t.prototype.getNowIndicatorUnit = function () {
                return this.timeGrid.getNowIndicatorUnit()
            }, t.prototype.updateSize = function (t, e, i) {
                var n, s, o;
                if (a.prototype.updateSize.call(this, t, e, i), this.axisWidth = l.matchCellWidths(this.el.find(".fc-axis")), this.timeGrid.colEls) {
                    var r = this.el.find(".fc-row:not(.fc-scroller *)");
                    this.timeGrid.bottomRuleEl.hide(), this.scroller.clear(), l.uncompensateScroll(r), this.dayGrid && (this.dayGrid.removeSegPopover(), (n = this.opt("eventLimit")) && "number" != typeof n && (n = 5), n && this.dayGrid.limitRows(n)), e || (s = this.computeScrollerHeight(t), this.scroller.setHeight(s), ((o = this.scroller.getScrollbarWidths()).left || o.right) && (l.compensateScroll(r, o), s = this.computeScrollerHeight(t), this.scroller.setHeight(s)), this.scroller.lockOverflow(o), this.timeGrid.getTotalSlatHeight() < s && this.timeGrid.bottomRuleEl.show())
                } else e || (s = this.computeScrollerHeight(t), this.scroller.setHeight(s))
            }, t.prototype.computeScrollerHeight = function (t) {
                return t - l.subtractInnerElHeight(this.el, this.scroller.el)
            }, t.prototype.computeInitialDateScroll = function () {
                var t = s.duration(this.opt("scrollTime")), e = this.timeGrid.computeTimeTop(t);
                return (e = Math.ceil(e)) && e++, {top: e}
            }, t.prototype.queryDateScroll = function () {
                return {top: this.scroller.getScrollTop()}
            }, t.prototype.applyDateScroll = function (t) {
                void 0 !== t.top && this.scroller.setScrollTop(t.top)
            }, t.prototype.getHitFootprint = function (t) {
                return t.component.getHitFootprint(t)
            }, t.prototype.getHitEl = function (t) {
                return t.component.getHitEl(t)
            }, t.prototype.executeEventRender = function (t) {
                var e, i, n = {}, s = {};
                for (e in t) (i = t[e]).getEventDef().isAllDay() ? n[e] = i : s[e] = i;
                this.timeGrid.executeEventRender(s), this.dayGrid && this.dayGrid.executeEventRender(n)
            }, t.prototype.renderDrag = function (t, e, i) {
                var n = o(t), s = !1;
                return s = this.timeGrid.renderDrag(n.timed, e, i), this.dayGrid && (s = this.dayGrid.renderDrag(n.allDay, e, i) || s), s
            }, t.prototype.renderEventResize = function (t, e, i) {
                var n = o(t);
                this.timeGrid.renderEventResize(n.timed, e, i), this.dayGrid && this.dayGrid.renderEventResize(n.allDay, e, i)
            }, t.prototype.renderSelectionFootprint = function (t) {
                t.isAllDay ? this.dayGrid && this.dayGrid.renderSelectionFootprint(t) : this.timeGrid.renderSelectionFootprint(t)
            }, t
        }(a.default);
        (e.default = d).prototype.timeGridClass = u.default, d.prototype.dayGridClass = c.default
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(0), o = i(1), c = i(3), d = i(2), n = i(29), r = i(41), a = i(45), l = i(40), h = i(38), u = i(4),
            p = i(10), f = i(83), g = i(84), m = i(85),
            v = [{hours: 1}, {minutes: 30}, {minutes: 15}, {seconds: 30}, {seconds: 15}], y = function (n) {
                function t(t) {
                    var e = n.call(this, t) || this;
                    return e.processOptions(), e
                }

                return s.__extends(t, n), t.prototype.componentFootprintToSegs = function (t) {
                    var e, i = this.sliceRangeByTimes(t.unzonedRange);
                    for (e = 0; e < i.length; e++) this.isRTL ? i[e].col = this.daysPerRow - 1 - i[e].dayIndex : i[e].col = i[e].dayIndex;
                    return i
                }, t.prototype.sliceRangeByTimes = function (t) {
                    var e, i, n = [];
                    for (i = 0; i < this.daysPerRow; i++) (e = t.intersect(this.dayRanges[i])) && n.push({
                        startMs: e.startMs,
                        endMs: e.endMs,
                        isStart: e.isStart,
                        isEnd: e.isEnd,
                        dayIndex: i
                    });
                    return n
                }, t.prototype.processOptions = function () {
                    var t, e = this.opt("slotDuration"), i = this.opt("snapDuration");
                    e = c.duration(e), i = i ? c.duration(i) : e, this.slotDuration = e, this.snapDuration = i, this.snapsPerSlot = e / i, t = this.opt("slotLabelFormat"), o.isArray(t) && (t = t[t.length - 1]), this.labelFormat = t || this.opt("smallTimeFormat"), t = this.opt("slotLabelInterval"), this.labelInterval = t ? c.duration(t) : this.computeLabelInterval(e)
                }, t.prototype.computeLabelInterval = function (t) {
                    var e, i, n;
                    for (e = v.length - 1; 0 <= e; e--) if (i = c.duration(v[e]), n = d.divideDurationByDuration(i, t), d.isInt(n) && 1 < n) return i;
                    return c.duration(t)
                }, t.prototype.renderDates = function (t) {
                    this.dateProfile = t, this.updateDayTable(), this.renderSlats(), this.renderColumns()
                }, t.prototype.unrenderDates = function () {
                    this.unrenderColumns()
                }, t.prototype.renderSkeleton = function () {
                    var t = this.view.calendar.theme;
                    this.el.html('<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider ' + t.getClass("widgetHeader") + '" style="display:none" />'), this.bottomRuleEl = this.el.find("hr")
                }, t.prototype.renderSlats = function () {
                    var t = this.view.calendar.theme;
                    this.slatContainerEl = this.el.find("> .fc-slats").html('<table class="' + t.getClass("tableGrid") + '">' + this.renderSlatRowHtml() + "</table>"), this.slatEls = this.slatContainerEl.find("tr"), this.slatCoordCache = new h.default({
                        els: this.slatEls,
                        isVertical: !0
                    })
                }, t.prototype.renderSlatRowHtml = function () {
                    for (var t, e, i, n = this.view, s = n.calendar, o = s.theme, r = this.isRTL, a = this.dateProfile, l = "", h = c.duration(+a.minTime), u = c.duration(0); h < a.maxTime;) t = s.msToUtcMoment(a.renderUnzonedRange.startMs).time(h), e = d.isInt(d.divideDurationByDuration(u, this.labelInterval)), i = '<td class="fc-axis fc-time ' + o.getClass("widgetContent") + '" ' + n.axisStyleAttr() + ">" + (e ? "<span>" + d.htmlEscape(t.format(this.labelFormat)) + "</span>" : "") + "</td>", l += '<tr data-time="' + t.format("HH:mm:ss") + '"' + (e ? "" : ' class="fc-minor"') + ">" + (r ? "" : i) + '<td class="' + o.getClass("widgetContent") + '"/>' + (r ? i : "") + "</tr>", h.add(this.slotDuration), u.add(this.slotDuration);
                    return l
                }, t.prototype.renderColumns = function () {
                    var e = this.dateProfile, t = this.view.calendar.theme;
                    this.dayRanges = this.dayDates.map(function (t) {
                        return new u.default(t.clone().add(e.minTime), t.clone().add(e.maxTime))
                    }), this.headContainerEl && this.headContainerEl.html(this.renderHeadHtml()), this.el.find("> .fc-bg").html('<table class="' + t.getClass("tableGrid") + '">' + this.renderBgTrHtml(0) + "</table>"), this.colEls = this.el.find(".fc-day, .fc-disabled-day"), this.colCoordCache = new h.default({
                        els: this.colEls,
                        isHorizontal: !0
                    }), this.renderContentSkeleton()
                }, t.prototype.unrenderColumns = function () {
                    this.unrenderContentSkeleton()
                }, t.prototype.renderContentSkeleton = function () {
                    var t, e, i = "";
                    for (t = 0; t < this.colCnt; t++) i += '<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';
                    e = this.contentSkeletonEl = o('<div class="fc-content-skeleton"><table><tr>' + i + "</tr></table></div>"), this.colContainerEls = e.find(".fc-content-col"), this.helperContainerEls = e.find(".fc-helper-container"), this.fgContainerEls = e.find(".fc-event-container:not(.fc-helper-container)"), this.bgContainerEls = e.find(".fc-bgevent-container"), this.highlightContainerEls = e.find(".fc-highlight-container"), this.businessContainerEls = e.find(".fc-business-container"), this.bookendCells(e.find("tr")), this.el.append(e)
                }, t.prototype.unrenderContentSkeleton = function () {
                    this.contentSkeletonEl.remove(), this.contentSkeletonEl = null, this.colContainerEls = null, this.helperContainerEls = null, this.fgContainerEls = null, this.bgContainerEls = null, this.highlightContainerEls = null, this.businessContainerEls = null
                }, t.prototype.groupSegsByCol = function (t) {
                    var e, i = [];
                    for (e = 0; e < this.colCnt; e++) i.push([]);
                    for (e = 0; e < t.length; e++) i[t[e].col].push(t[e]);
                    return i
                }, t.prototype.attachSegsByCol = function (t, e) {
                    var i, n, s;
                    for (i = 0; i < this.colCnt; i++) for (n = t[i], s = 0; s < n.length; s++) e.eq(i).append(n[s].el)
                }, t.prototype.getNowIndicatorUnit = function () {
                    return "minute"
                }, t.prototype.renderNowIndicator = function (t) {
                    if (this.colContainerEls) {
                        var e, i = this.componentFootprintToSegs(new p.default(new u.default(t, t.valueOf() + 1), !1)),
                            n = this.computeDateTop(t, t), s = [];
                        for (e = 0; e < i.length; e++) s.push(o('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top", n).appendTo(this.colContainerEls.eq(i[e].col))[0]);
                        0 < i.length && s.push(o('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top", n).appendTo(this.el.find(".fc-content-skeleton"))[0]), this.nowIndicatorEls = o(s)
                    }
                }, t.prototype.unrenderNowIndicator = function () {
                    this.nowIndicatorEls && (this.nowIndicatorEls.remove(), this.nowIndicatorEls = null)
                }, t.prototype.updateSize = function (t, e, i) {
                    n.prototype.updateSize.call(this, t, e, i), this.slatCoordCache.build(), i && this.updateSegVerticals([].concat(this.eventRenderer.getSegs(), this.businessSegs || []))
                }, t.prototype.getTotalSlatHeight = function () {
                    return this.slatContainerEl.outerHeight()
                }, t.prototype.computeDateTop = function (t, e) {
                    return this.computeTimeTop(c.duration(t - e.clone().stripTime()))
                }, t.prototype.computeTimeTop = function (t) {
                    var e, i, n = this.slatEls.length, s = (t - this.dateProfile.minTime) / this.slotDuration;
                    return s = Math.max(0, s), s = Math.min(n, s), e = Math.floor(s), i = s - (e = Math.min(e, n - 1)), this.slatCoordCache.getTopPosition(e) + this.slatCoordCache.getHeight(e) * i
                }, t.prototype.updateSegVerticals = function (t) {
                    this.computeSegVerticals(t), this.assignSegVerticals(t)
                }, t.prototype.computeSegVerticals = function (t) {
                    var e, i, n, s = this.opt("agendaEventMinHeight");
                    for (e = 0; e < t.length; e++) i = t[e], n = this.dayDates[i.dayIndex], i.top = this.computeDateTop(i.startMs, n), i.bottom = Math.max(i.top + s, this.computeDateTop(i.endMs, n))
                }, t.prototype.assignSegVerticals = function (t) {
                    var e, i;
                    for (e = 0; e < t.length; e++) (i = t[e]).el.css(this.generateSegVerticalCss(i))
                }, t.prototype.generateSegVerticalCss = function (t) {
                    return {top: t.top, bottom: -t.bottom}
                }, t.prototype.prepareHits = function () {
                    this.colCoordCache.build(), this.slatCoordCache.build()
                }, t.prototype.releaseHits = function () {
                    this.colCoordCache.clear()
                }, t.prototype.queryHit = function (t, e) {
                    var i = this.snapsPerSlot, n = this.colCoordCache, s = this.slatCoordCache;
                    if (n.isLeftInBounds(t) && s.isTopInBounds(e)) {
                        var o = n.getHorizontalIndex(t), r = s.getVerticalIndex(e);
                        if (null != o && null != r) {
                            var a = s.getTopOffset(r), l = s.getHeight(r), h = (e - a) / l, u = Math.floor(h * i),
                                c = a + u / i * l, d = a + (u + 1) / i * l;
                            return {
                                col: o,
                                snap: r * i + u,
                                component: this,
                                left: n.getLeftOffset(o),
                                right: n.getRightOffset(o),
                                top: c,
                                bottom: d
                            }
                        }
                    }
                }, t.prototype.getHitFootprint = function (t) {
                    var e, i = this.getCellDate(0, t.col), n = this.computeSnapTime(t.snap);
                    return i.time(n), e = i.clone().add(this.snapDuration), new p.default(new u.default(i, e), !1)
                }, t.prototype.computeSnapTime = function (t) {
                    return c.duration(this.dateProfile.minTime + this.snapDuration * t)
                }, t.prototype.getHitEl = function (t) {
                    return this.colEls.eq(t.col)
                }, t.prototype.renderDrag = function (t, e, i) {
                    var n;
                    if (e) {
                        if (t.length) return this.helperRenderer.renderEventDraggingFootprints(t, e, i), !0
                    } else for (n = 0; n < t.length; n++) this.renderHighlight(t[n].componentFootprint)
                }, t.prototype.unrenderDrag = function () {
                    this.unrenderHighlight(), this.helperRenderer.unrender()
                }, t.prototype.renderEventResize = function (t, e, i) {
                    this.helperRenderer.renderEventResizingFootprints(t, e, i)
                }, t.prototype.unrenderEventResize = function () {
                    this.helperRenderer.unrender()
                }, t.prototype.renderSelectionFootprint = function (t) {
                    this.opt("selectHelper") ? this.helperRenderer.renderComponentFootprint(t) : this.renderHighlight(t)
                }, t.prototype.unrenderSelection = function () {
                    this.helperRenderer.unrender(), this.unrenderHighlight()
                }, t
            }(n.default);
        (e.default = y).prototype.eventRendererClass = f.default, y.prototype.businessHourRendererClass = r.default, y.prototype.helperRendererClass = g.default, y.prototype.fillRendererClass = m.default, a.default.mixInto(y), l.default.mixInto(y)
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), a = i(4), s = function (r) {
            function t() {
                return null !== r && r.apply(this, arguments) || this
            }

            return n.__extends(t, r), t.prototype.buildRenderRange = function (t, e, i) {
                var n = r.prototype.buildRenderRange.call(this, t, e, i), s = this.msToUtcMoment(n.startMs, i),
                    o = this.msToUtcMoment(n.endMs, i);
                return /^(year|month)$/.test(e) && (s.startOf("week"), o.weekday() && o.add(1, "week").startOf("week")), new a.default(s, o)
            }, t
        }(i(62).default);
        e.default = s
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = i(3), o = i(2), l = i(4), r = i(47), a = function (a) {
            function t() {
                return null !== a && a.apply(this, arguments) || this
            }

            return n.__extends(t, a), t.prototype.buildRenderRange = function (t, e, i) {
                var n, s = a.prototype.buildRenderRange.call(this, t, e, i), o = this.msToUtcMoment(s.startMs, i),
                    r = this.msToUtcMoment(s.endMs, i);
                return this.opt("fixedWeekCount") && (n = Math.ceil(r.diff(o, "weeks", !0)), r.add(6 - n, "weeks")), new l.default(o, r)
            }, t
        }(i(69).default), h = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n.__extends(e, t), e.prototype.setGridHeight = function (t, e) {
                e && (t *= this.dayGrid.rowCnt / 6), o.distributeHeight(this.dayGrid.rowEls, t, !e)
            }, e.prototype.isDateInOtherMonth = function (t, e) {
                return t.month() !== s.utc(e.currentUnzonedRange.startMs).month()
            }, e
        }(r.default);
        (e.default = h).prototype.dateProfileGeneratorClass = a
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(0), a = i(1), o = i(2), r = i(4), n = i(30), l = i(28), h = i(90), u = i(91), c = function (n) {
            function t(t, e) {
                var i = n.call(this, t, e) || this;
                return i.segSelector = ".fc-list-item", i.scroller = new l.default({
                    overflowX: "hidden",
                    overflowY: "auto"
                }), i
            }

            return s.__extends(t, n), t.prototype.renderSkeleton = function () {
                this.el.addClass("fc-list-view " + this.calendar.theme.getClass("listView")), this.scroller.render(), this.scroller.el.appendTo(this.el), this.contentEl = this.scroller.scrollEl
            }, t.prototype.unrenderSkeleton = function () {
                this.scroller.destroy()
            }, t.prototype.updateSize = function (t, e, i) {
                this.scroller.setHeight(this.computeScrollerHeight(t))
            }, t.prototype.computeScrollerHeight = function (t) {
                return t - o.subtractInnerElHeight(this.el, this.scroller.el)
            }, t.prototype.renderDates = function (t) {
                for (var e = this.calendar, i = e.msToUtcMoment(t.renderUnzonedRange.startMs, !0), n = e.msToUtcMoment(t.renderUnzonedRange.endMs, !0), s = [], o = []; i < n;) s.push(i.clone()), o.push(new r.default(i, i.clone().add(1, "day"))), i.add(1, "day");
                this.dayDates = s, this.dayRanges = o
            }, t.prototype.componentFootprintToSegs = function (t) {
                var e, i, n, s = this.dayRanges, o = [];
                for (e = 0; e < s.length; e++) if ((i = t.unzonedRange.intersect(s[e])) && (n = {
                    startMs: i.startMs,
                    endMs: i.endMs,
                    isStart: i.isStart,
                    isEnd: i.isEnd,
                    dayIndex: e
                }, o.push(n), !n.isEnd && !t.isAllDay && e + 1 < s.length && t.unzonedRange.endMs < s[e + 1].startMs + this.nextDayThreshold)) {
                    n.endMs = t.unzonedRange.endMs, n.isEnd = !0;
                    break
                }
                return o
            }, t.prototype.renderEmptyMessage = function () {
                this.contentEl.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">' + o.htmlEscape(this.opt("noEventsMessage")) + "</div></div></div>")
            }, t.prototype.renderSegList = function (t) {
                var e, i, n, s = this.groupSegsByDay(t),
                    o = a('<table class="fc-list-table ' + this.calendar.theme.getClass("tableList") + '"><tbody/></table>'),
                    r = o.find("tbody");
                for (e = 0; e < s.length; e++) if (i = s[e]) for (r.append(this.dayHeaderHtml(this.dayDates[e])), this.eventRenderer.sortEventSegs(i), n = 0; n < i.length; n++) r.append(i[n].el);
                this.contentEl.empty().append(o)
            }, t.prototype.groupSegsByDay = function (t) {
                var e, i, n = [];
                for (e = 0; e < t.length; e++) (n[(i = t[e]).dayIndex] || (n[i.dayIndex] = [])).push(i);
                return n
            }, t.prototype.dayHeaderHtml = function (t) {
                var e = this.opt("listDayFormat"), i = this.opt("listDayAltFormat");
                return '<tr class="fc-list-heading" data-date="' + t.format("YYYY-MM-DD") + '"><td class="' + this.calendar.theme.getClass("widgetHeader") + '" colspan="3">' + (e ? this.buildGotoAnchorHtml(t, {class: "fc-list-heading-main"}, o.htmlEscape(t.format(e))) : "") + (i ? this.buildGotoAnchorHtml(t, {class: "fc-list-heading-alt"}, o.htmlEscape(t.format(i))) : "") + "</td></tr>"
            }, t
        }(n.default);
        (e.default = c).prototype.eventRendererClass = h.default, c.prototype.eventPointingClass = u.default
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var l = i(1), n = i(7), s = i(73), h = i(2), u = i(48);
        i(9), i(37), i(92), i(93), i(95), i(96), i(97), l.fullCalendar = l.extend(n.default, s), l.fn.fullCalendar = function (o) {
            var r = Array.prototype.slice.call(arguments, 1), a = this;
            return this.each(function (t, e) {
                var i, n = l(e), s = n.data("fullCalendar");
                "string" == typeof o ? "getCalendar" === o ? t || (a = s) : "destroy" === o ? s && (s.destroy(), n.removeData("fullCalendar")) : s ? l.isFunction(s[o]) ? (i = s[o].apply(s, r), t || (a = i), "destroy" === o && n.removeData("fullCalendar")) : h.warn("'" + o + "' is an unknown FullCalendar method.") : h.warn("Attempting to call a FullCalendar method on an element with no calendar.") : s || (s = new u.default(n, o), n.data("fullCalendar", s), s.render())
            }), a
        }
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(48);
        e.Calendar = n.default;
        var s = i(19);
        n.default.defaults = s.globalDefaults, n.default.englishDefaults = s.englishDefaults, n.default.rtlDefaults = s.rtlDefaults;
        var o = i(2);
        e.applyAll = o.applyAll, e.debounce = o.debounce, e.isInt = o.isInt, e.htmlEscape = o.htmlEscape, e.cssToStr = o.cssToStr, e.proxy = o.proxy, e.capitaliseFirstLetter = o.capitaliseFirstLetter, e.getOuterRect = o.getOuterRect, e.getClientRect = o.getClientRect, e.getContentRect = o.getContentRect, e.getScrollbarWidths = o.getScrollbarWidths, e.preventDefault = o.preventDefault, e.parseFieldSpecs = o.parseFieldSpecs, e.compareByFieldSpecs = o.compareByFieldSpecs, e.compareByFieldSpec = o.compareByFieldSpec, e.flexibleCompare = o.flexibleCompare, e.computeGreatestUnit = o.computeGreatestUnit, e.divideRangeByDuration = o.divideRangeByDuration, e.divideDurationByDuration = o.divideDurationByDuration, e.multiplyDuration = o.multiplyDuration, e.durationHasTime = o.durationHasTime, e.log = o.log, e.warn = o.warn, e.removeExact = o.removeExact, e.intersectRects = o.intersectRects;
        var r = i(37);
        e.formatDate = r.formatDate, e.formatRange = r.formatRange, e.queryMostGranularFormatUnit = r.queryMostGranularFormatUnit;
        var a = i(20);
        e.datepickerLocale = a.datepickerLocale, e.locale = a.locale;
        var l = i(9);
        e.moment = l.default;
        var h = i(8);
        e.EmitterMixin = h.default;
        var u = i(6);
        e.ListenerMixin = u.default;
        var c = i(32);
        e.Model = c.default;
        var d = i(49);
        e.Constraints = d.default;
        var p = i(4);
        e.UnzonedRange = p.default;
        var f = i(10);
        e.ComponentFootprint = f.default;
        var g = i(54);
        e.BusinessHourGenerator = g.default;
        var m = i(22);
        e.EventDef = m.default;
        var v = i(26);
        e.EventDefMutation = v.default;
        var y = i(25);
        e.EventSourceParser = y.default;
        var _ = i(5);
        e.EventSource = _.default;
        var b = i(36);
        e.ThemeRegistry = b.default;
        var w = i(17);
        e.EventInstanceGroup = w.default;
        var D = i(34);
        e.ArrayEventSource = D.default;
        var C = i(57);
        e.FuncEventSource = C.default;
        var S = i(58);
        e.JsonFeedEventSource = S.default;
        var x = i(24);
        e.EventFootprint = x.default;
        var k = i(21);
        e.Class = k.default;
        var M = i(12);
        e.Mixin = M.default;
        var T = i(38);
        e.CoordCache = T.default;
        var E = i(39);
        e.DragListener = E.default;
        var I = i(16);
        e.Promise = I.default;
        var P = i(59);
        e.TaskQueue = P.default;
        var R = i(60);
        e.RenderQueue = R.default;
        var H = i(28);
        e.Scroller = H.default;
        var O = i(27);
        e.Theme = O.default;
        var z = i(61);
        e.DateComponent = z.default;
        var F = i(29);
        e.InteractiveDateComponent = F.default;
        var A = i(30);
        e.View = A.default;
        var N = i(40);
        e.DayTableMixin = N.default;
        var W = i(41);
        e.BusinessHourRenderer = W.default;
        var L = i(31);
        e.EventRenderer = L.default;
        var Y = i(42);
        e.FillRenderer = Y.default;
        var B = i(43);
        e.HelperRenderer = B.default;
        var j = i(63);
        e.ExternalDropping = j.default;
        var V = i(64);
        e.EventResizing = V.default;
        var U = i(44);
        e.EventPointing = U.default;
        var G = i(65);
        e.EventDragging = G.default;
        var q = i(66);
        e.DateSelecting = q.default;
        var K = i(45);
        e.StandardInteractionsMixin = K.default;
        var $ = i(67);
        e.AgendaView = $.default;
        var Z = i(68);
        e.TimeGrid = Z.default;
        var X = i(46);
        e.DayGrid = X.default;
        var Q = i(47);
        e.BasicView = Q.default;
        var J = i(70);
        e.MonthView = J.default;
        var tt = i(71);
        e.ListView = tt.default
    }, function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t) {
                this.items = t || []
            }

            return t.prototype.proxyCall = function (e) {
                for (var i = [], t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
                var n = [];
                return this.items.forEach(function (t) {
                    n.push(t[e].apply(t, i))
                }), n
            }, t
        }();
        e.default = i
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var _ = i(1), b = i(2), n = function () {
            function t(t, e) {
                this.el = null, this.viewsWithButtons = [], this.calendar = t, this.toolbarOptions = e
            }

            return t.prototype.setToolbarOptions = function (t) {
                this.toolbarOptions = t
            }, t.prototype.render = function () {
                var t = this.toolbarOptions.layout, e = this.el;
                t ? (e ? e.empty() : e = this.el = _("<div class='fc-toolbar " + this.toolbarOptions.extraClasses + "'/>"), e.append(this.renderSection("left")).append(this.renderSection("right")).append(this.renderSection("center")).append('<div class="fc-clear"/>')) : this.removeElement()
            }, t.prototype.removeElement = function () {
                this.el && (this.el.remove(), this.el = null)
            }, t.prototype.renderSection = function (t) {
                var d = this, p = this.calendar, f = p.theme, e = p.optionsManager, g = p.viewSpecManager,
                    n = _('<div class="fc-' + t + '"/>'), i = this.toolbarOptions.layout[t],
                    m = e.get("customButtons") || {}, v = e.overrides.buttonText || {}, y = e.get("buttonText") || {};
                return i && _.each(i.split(" "), function (t, e) {
                    var i, u = _(), c = !0;
                    _.each(e.split(","), function (t, e) {
                        var i, n, s, o, r, a, l, h;
                        "title" == e ? (u = u.add(_("<h2>&nbsp;</h2>")), c = !1) : ((i = m[e]) ? (s = function (t) {
                            i.click && i.click.call(h[0], t)
                        }, (o = f.getCustomButtonIconClass(i)) || (o = f.getIconClass(e)) || (r = i.text)) : (n = g.getViewSpec(e)) ? (d.viewsWithButtons.push(e), s = function () {
                            p.changeView(e)
                        }, (r = n.buttonTextOverride) || (o = f.getIconClass(e)) || (r = n.buttonTextDefault)) : p[e] && (s = function () {
                            p[e]()
                        }, (r = v[e]) || (o = f.getIconClass(e)) || (r = y[e])), s && (l = ["fc-" + e + "-button", f.getClass("button"), f.getClass("stateDefault")], r ? a = b.htmlEscape(r) : o && (a = "<span class='" + o + "'></span>"), h = _('<button type="button" class="' + l.join(" ") + '">' + a + "</button>").click(function (t) {
                            h.hasClass(f.getClass("stateDisabled")) || (s(t), (h.hasClass(f.getClass("stateActive")) || h.hasClass(f.getClass("stateDisabled"))) && h.removeClass(f.getClass("stateHover")))
                        }).mousedown(function () {
                            h.not("." + f.getClass("stateActive")).not("." + f.getClass("stateDisabled")).addClass(f.getClass("stateDown"))
                        }).mouseup(function () {
                            h.removeClass(f.getClass("stateDown"))
                        }).hover(function () {
                            h.not("." + f.getClass("stateActive")).not("." + f.getClass("stateDisabled")).addClass(f.getClass("stateHover"))
                        }, function () {
                            h.removeClass(f.getClass("stateHover")).removeClass(f.getClass("stateDown"))
                        }), u = u.add(h)))
                    }), c && u.first().addClass(f.getClass("cornerLeft")).end().last().addClass(f.getClass("cornerRight")).end(), 1 < u.length ? (i = _("<div/>"), c && i.addClass(f.getClass("buttonGroup")), i.append(u), n.append(i)) : n.append(u)
                }), n
            }, t.prototype.updateTitle = function (t) {
                this.el && this.el.find("h2").text(t)
            }, t.prototype.activateButton = function (t) {
                this.el && this.el.find(".fc-" + t + "-button").addClass(this.calendar.theme.getClass("stateActive"))
            }, t.prototype.deactivateButton = function (t) {
                this.el && this.el.find(".fc-" + t + "-button").removeClass(this.calendar.theme.getClass("stateActive"))
            }, t.prototype.disableButton = function (t) {
                this.el && this.el.find(".fc-" + t + "-button").prop("disabled", !0).addClass(this.calendar.theme.getClass("stateDisabled"))
            }, t.prototype.enableButton = function (t) {
                this.el && this.el.find(".fc-" + t + "-button").prop("disabled", !1).removeClass(this.calendar.theme.getClass("stateDisabled"))
            }, t.prototype.getViewsWithButtons = function () {
                return this.viewsWithButtons
            }, t
        }();
        e.default = n
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(0), o = i(1), r = i(2), a = i(19), l = i(20), n = function (n) {
            function t(t, e) {
                var i = n.call(this) || this;
                return i._calendar = t, i.overrides = o.extend({}, e), i.dynamicOverrides = {}, i.compute(), i
            }

            return s.__extends(t, n), t.prototype.add = function (t) {
                var e, i = 0;
                for (e in this.recordOverrides(t), t) i++;
                if (1 === i) {
                    if ("height" === e || "contentHeight" === e || "aspectRatio" === e) return void this._calendar.updateViewSize(!0);
                    if ("defaultDate" === e) return;
                    if ("businessHours" === e) return;
                    if ("timezone" === e) return void this._calendar.view.flash("initialEvents")
                }
                this._calendar.renderHeader(), this._calendar.renderFooter(), this._calendar.viewsByType = {}, this._calendar.reinitView()
            }, t.prototype.compute = function () {
                var t, e, i, n;
                t = r.firstDefined(this.dynamicOverrides.locale, this.overrides.locale), (e = l.localeOptionHash[t]) || (t = a.globalDefaults.locale, e = l.localeOptionHash[t] || {}), i = r.firstDefined(this.dynamicOverrides.isRTL, this.overrides.isRTL, e.isRTL, a.globalDefaults.isRTL) ? a.rtlDefaults : {}, this.dirDefaults = i, this.localeDefaults = e, n = a.mergeOptions([a.globalDefaults, i, e, this.overrides, this.dynamicOverrides]), l.populateInstanceComputableOptions(n), this.reset(n)
            }, t.prototype.recordOverrides = function (t) {
                var e;
                for (e in t) this.dynamicOverrides[e] = t[e];
                this._calendar.viewSpecManager.clearCache(), this.compute()
            }, t
        }(i(32).default);
        e.default = n
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var c = i(3), s = i(1), d = i(7), p = i(2), f = i(19), n = i(20), o = function () {
            function t(t, e) {
                this.optionsManager = t, this._calendar = e, this.clearCache()
            }

            return t.prototype.clearCache = function () {
                this.viewSpecCache = {}
            }, t.prototype.getViewSpec = function (t) {
                var e = this.viewSpecCache;
                return e[t] || (e[t] = this.buildViewSpec(t))
            }, t.prototype.getUnitViewSpec = function (t) {
                var e, i, n;
                if (-1 != s.inArray(t, p.unitsDesc)) for (e = this._calendar.header.getViewsWithButtons(), s.each(d.default.views, function (t) {
                    e.push(t)
                }), i = 0; i < e.length; i++) if ((n = this.getViewSpec(e[i])) && n.singleUnit == t) return n
            }, t.prototype.buildViewSpec = function (t) {
                for (var e, i, n, s, o, r = this.optionsManager.overrides.views || {}, a = [], l = [], h = [], u = t; u;) e = d.default.views[u], i = r[u], u = null, "function" == typeof e && (e = {class: e}), e && (a.unshift(e), l.unshift(e.defaults || {}), n = n || e.duration, u = u || e.type), i && (h.unshift(i), n = n || i.duration, u = u || i.type);
                return (e = p.mergeProps(a)).type = t, !!e.class && ((n = n || this.optionsManager.dynamicOverrides.duration || this.optionsManager.overrides.duration) && ((s = c.duration(n)).valueOf() && (o = p.computeDurationGreatestUnit(s, n), e.duration = s, e.durationUnit = o, 1 === s.as(o) && (e.singleUnit = o, h.unshift(r[o] || {})))), e.defaults = f.mergeOptions(l), e.overrides = f.mergeOptions(h), this.buildViewSpecOptions(e), this.buildViewSpecButtonText(e, t), e)
            }, t.prototype.buildViewSpecOptions = function (t) {
                var e = this.optionsManager;
                t.options = f.mergeOptions([f.globalDefaults, t.defaults, e.dirDefaults, e.localeDefaults, e.overrides, t.overrides, e.dynamicOverrides]), n.populateInstanceComputableOptions(t.options)
            }, t.prototype.buildViewSpecButtonText = function (i, n) {
                function t(t) {
                    var e = t.buttonText || {};
                    return e[n] || (i.buttonTextKey ? e[i.buttonTextKey] : null) || (i.singleUnit ? e[i.singleUnit] : null)
                }

                var e = this.optionsManager;
                i.buttonTextOverride = t(e.dynamicOverrides) || t(e.overrides) || i.overrides.buttonText, i.buttonTextDefault = t(e.localeDefaults) || t(e.dirDefaults) || i.defaults.buttonText || t(f.globalDefaults) || (i.duration ? this._calendar.humanizeDuration(i.duration) : null) || n
            }, t
        }();
        e.default = o
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(1), n = i(2), o = i(79), r = i(34), a = i(5), l = i(25), h = i(11), u = i(17), c = i(8), d = i(6),
            p = function () {
                function t(t) {
                    this.calendar = t, this.stickySource = new r.default(t), this.otherSources = []
                }

                return t.prototype.requestEvents = function (t, e, i, n) {
                    return !n && this.currentPeriod && this.currentPeriod.isWithinRange(t, e) && i === this.currentPeriod.timezone || this.setPeriod(new o.default(t, e, i)), this.currentPeriod.whenReleased()
                }, t.prototype.addSource = function (t) {
                    this.otherSources.push(t), this.currentPeriod && this.currentPeriod.requestSource(t)
                }, t.prototype.removeSource = function (t) {
                    n.removeExact(this.otherSources, t), this.currentPeriod && this.currentPeriod.purgeSource(t)
                }, t.prototype.removeAllSources = function () {
                    this.otherSources = [], this.currentPeriod && this.currentPeriod.purgeAllSources()
                }, t.prototype.refetchSource = function (t) {
                    var e = this.currentPeriod;
                    e && (e.freeze(), e.purgeSource(t), e.requestSource(t), e.thaw())
                }, t.prototype.refetchAllSources = function () {
                    var t = this.currentPeriod;
                    t && (t.freeze(), t.purgeAllSources(), t.requestSources(this.getSources()), t.thaw())
                }, t.prototype.getSources = function () {
                    return [this.stickySource].concat(this.otherSources)
                }, t.prototype.multiQuerySources = function (t) {
                    t ? s.isArray(t) || (t = [t]) : t = [];
                    var e, i = [];
                    for (e = 0; e < t.length; e++) i.push.apply(i, this.querySources(t[e]));
                    return i
                }, t.prototype.querySources = function (i) {
                    var t, e, n = this.otherSources;
                    for (t = 0; t < n.length; t++) if ((e = n[t]) === i) return [e];
                    return (e = this.getSourceById(a.default.normalizeId(i))) ? [e] : (i = l.default.parse(i, this.calendar)) ? s.grep(n, function (t) {
                        return e = t, i.getPrimitive() == e.getPrimitive();
                        var e
                    }) : void 0
                }, t.prototype.getSourceById = function (e) {
                    return s.grep(this.otherSources, function (t) {
                        return t.id && t.id === e
                    })[0]
                }, t.prototype.setPeriod = function (t) {
                    this.currentPeriod && (this.unbindPeriod(this.currentPeriod), this.currentPeriod = null), this.currentPeriod = t, this.bindPeriod(t), t.requestSources(this.getSources())
                }, t.prototype.bindPeriod = function (t) {
                    this.listenTo(t, "release", function (t) {
                        this.trigger("release", t)
                    })
                }, t.prototype.unbindPeriod = function (t) {
                    this.stopListeningTo(t)
                }, t.prototype.getEventDefByUid = function (t) {
                    if (this.currentPeriod) return this.currentPeriod.getEventDefByUid(t)
                }, t.prototype.addEventDef = function (t, e) {
                    e && this.stickySource.addEventDef(t), this.currentPeriod && this.currentPeriod.addEventDef(t)
                }, t.prototype.removeEventDefsById = function (e) {
                    this.getSources().forEach(function (t) {
                        t.removeEventDefsById(e)
                    }), this.currentPeriod && this.currentPeriod.removeEventDefsById(e)
                }, t.prototype.removeAllEventDefs = function () {
                    this.getSources().forEach(function (t) {
                        t.removeAllEventDefs()
                    }), this.currentPeriod && this.currentPeriod.removeAllEventDefs()
                }, t.prototype.mutateEventsWithId = function (t, e) {
                    var i, n = this.currentPeriod, s = [];
                    return n ? (n.freeze(), (i = n.getEventDefsById(t)).forEach(function (t) {
                        n.removeEventDef(t), s.push(e.mutateSingle(t)), n.addEventDef(t)
                    }), n.thaw(), function () {
                        n.freeze();
                        for (var t = 0; t < i.length; t++) n.removeEventDef(i[t]), s[t](), n.addEventDef(i[t]);
                        n.thaw()
                    }) : function () {
                    }
                }, t.prototype.buildMutatedEventInstanceGroup = function (t, e) {
                    var i, n, s = this.getEventDefsById(t), o = [];
                    for (i = 0; i < s.length; i++) (n = s[i].clone()) instanceof h.default && (e.mutateSingle(n), o.push.apply(o, n.buildInstances()));
                    return new u.default(o)
                }, t.prototype.freeze = function () {
                    this.currentPeriod && this.currentPeriod.freeze()
                }, t.prototype.thaw = function () {
                    this.currentPeriod && this.currentPeriod.thaw()
                }, t.prototype.getEventDefsById = function (t) {
                    return this.currentPeriod.getEventDefsById(t)
                }, t.prototype.getEventInstances = function () {
                    return this.currentPeriod.getEventInstances()
                }, t.prototype.getEventInstancesWithId = function (t) {
                    return this.currentPeriod.getEventInstancesWithId(t)
                }, t.prototype.getEventInstancesWithoutId = function (t) {
                    return this.currentPeriod.getEventInstancesWithoutId(t)
                }, t
            }();
        e.default = p, c.default.mixInto(p), d.default.mixInto(p)
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(1), s = i(2), o = i(16), r = i(8), a = i(4), l = i(17), h = function () {
            function t(t, e, i) {
                this.pendingCnt = 0, this.freezeDepth = 0, this.stuntedReleaseCnt = 0, this.releaseCnt = 0, this.start = t, this.end = e, this.timezone = i, this.unzonedRange = new a.default(t.clone().stripZone(), e.clone().stripZone()), this.requestsByUid = {}, this.eventDefsByUid = {}, this.eventDefsById = {}, this.eventInstanceGroupsById = {}
            }

            return t.prototype.isWithinRange = function (t, e) {
                return !t.isBefore(this.start) && !e.isAfter(this.end)
            }, t.prototype.requestSources = function (t) {
                this.freeze();
                for (var e = 0; e < t.length; e++) this.requestSource(t[e]);
                this.thaw()
            }, t.prototype.requestSource = function (t) {
                var e = this, i = {source: t, status: "pending", eventDefs: null};
                this.requestsByUid[t.uid] = i, this.pendingCnt += 1, t.fetch(this.start, this.end, this.timezone).then(function (t) {
                    "cancelled" !== i.status && (i.status = "completed", i.eventDefs = t, e.addEventDefs(t), e.pendingCnt--, e.tryRelease())
                }, function () {
                    "cancelled" !== i.status && (i.status = "failed", e.pendingCnt--, e.tryRelease())
                })
            }, t.prototype.purgeSource = function (t) {
                var e = this.requestsByUid[t.uid];
                e && (delete this.requestsByUid[t.uid], "pending" === e.status ? (e.status = "cancelled", this.pendingCnt--, this.tryRelease()) : "completed" === e.status && e.eventDefs.forEach(this.removeEventDef.bind(this)))
            }, t.prototype.purgeAllSources = function () {
                var t, e, i = this.requestsByUid, n = 0;
                for (t in i) "pending" === (e = i[t]).status ? e.status = "cancelled" : "completed" === e.status && n++;
                this.requestsByUid = {}, this.pendingCnt = 0, n && this.removeAllEventDefs()
            }, t.prototype.getEventDefByUid = function (t) {
                return this.eventDefsByUid[t]
            }, t.prototype.getEventDefsById = function (t) {
                var e = this.eventDefsById[t];
                return e ? e.slice() : []
            }, t.prototype.addEventDefs = function (t) {
                for (var e = 0; e < t.length; e++) this.addEventDef(t[e])
            }, t.prototype.addEventDef = function (t) {
                var e, i = this.eventDefsById, n = t.id, s = i[n] || (i[n] = []),
                    o = t.buildInstances(this.unzonedRange);
                for (s.push(t), this.eventDefsByUid[t.uid] = t, e = 0; e < o.length; e++) this.addEventInstance(o[e], n)
            }, t.prototype.removeEventDefsById = function (t) {
                var e = this;
                this.getEventDefsById(t).forEach(function (t) {
                    e.removeEventDef(t)
                })
            }, t.prototype.removeAllEventDefs = function () {
                var t = n.isEmptyObject(this.eventDefsByUid);
                this.eventDefsByUid = {}, this.eventDefsById = {}, this.eventInstanceGroupsById = {}, t || this.tryRelease()
            }, t.prototype.removeEventDef = function (t) {
                var e = this.eventDefsById, i = e[t.id];
                delete this.eventDefsByUid[t.uid], i && (s.removeExact(i, t), i.length || delete e[t.id], this.removeEventInstancesForDef(t))
            }, t.prototype.getEventInstances = function () {
                var t, e = this.eventInstanceGroupsById, i = [];
                for (t in e) i.push.apply(i, e[t].eventInstances);
                return i
            }, t.prototype.getEventInstancesWithId = function (t) {
                var e = this.eventInstanceGroupsById[t];
                return e ? e.eventInstances.slice() : []
            }, t.prototype.getEventInstancesWithoutId = function (t) {
                var e, i = this.eventInstanceGroupsById, n = [];
                for (e in i) e !== t && n.push.apply(n, i[e].eventInstances);
                return n
            }, t.prototype.addEventInstance = function (t, e) {
                var i = this.eventInstanceGroupsById;
                (i[e] || (i[e] = new l.default)).eventInstances.push(t), this.tryRelease()
            }, t.prototype.removeEventInstancesForDef = function (e) {
                var t, i = this.eventInstanceGroupsById, n = i[e.id];
                n && (t = s.removeMatching(n.eventInstances, function (t) {
                    return t.def === e
                }), n.eventInstances.length || delete i[e.id], t && this.tryRelease())
            }, t.prototype.tryRelease = function () {
                this.pendingCnt || (this.freezeDepth ? this.stuntedReleaseCnt++ : this.release())
            }, t.prototype.release = function () {
                this.releaseCnt++, this.trigger("release", this.eventInstanceGroupsById)
            }, t.prototype.whenReleased = function () {
                var e = this;
                return this.releaseCnt ? o.default.resolve(this.eventInstanceGroupsById) : o.default.construct(function (t) {
                    e.one("release", t)
                })
            }, t.prototype.freeze = function () {
                this.freezeDepth++ || (this.stuntedReleaseCnt = 0)
            }, t.prototype.thaw = function () {
                --this.freezeDepth || !this.stuntedReleaseCnt || this.pendingCnt || this.release()
            }, t
        }();
        e.default = h, r.default.mixInto(h)
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n.__extends(e, t), e.prototype.setElement = function (t) {
                this.el = t, this.bindGlobalHandlers(), this.renderSkeleton(), this.set("isInDom", !0)
            }, e.prototype.removeElement = function () {
                this.unset("isInDom"), this.unrenderSkeleton(), this.unbindGlobalHandlers(), this.el.remove()
            }, e.prototype.bindGlobalHandlers = function () {
            }, e.prototype.unbindGlobalHandlers = function () {
            }, e.prototype.renderSkeleton = function () {
            }, e.prototype.unrenderSkeleton = function () {
            }, e
        }(i(32).default);
        e.default = s
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var o = i(1), n = i(2), s = i(6), r = function () {
            function t(t, e) {
                this.isFollowing = !1, this.isHidden = !1, this.isAnimating = !1, this.options = e = e || {}, this.sourceEl = t, this.parentEl = e.parentEl ? o(e.parentEl) : t.parent()
            }

            return t.prototype.start = function (t) {
                this.isFollowing || (this.isFollowing = !0, this.y0 = n.getEvY(t), this.x0 = n.getEvX(t), this.topDelta = 0, this.leftDelta = 0, this.isHidden || this.updatePosition(), n.getEvIsTouch(t) ? this.listenTo(o(document), "touchmove", this.handleMove) : this.listenTo(o(document), "mousemove", this.handleMove))
            }, t.prototype.stop = function (t, e) {
                var i = this, n = this.options.revertDuration, s = function () {
                    i.isAnimating = !1, i.removeElement(), i.top0 = i.left0 = null, e && e()
                };
                this.isFollowing && !this.isAnimating && (this.isFollowing = !1, this.stopListeningTo(o(document)), t && n && !this.isHidden ? (this.isAnimating = !0, this.el.animate({
                    top: this.top0,
                    left: this.left0
                }, {duration: n, complete: s})) : s())
            }, t.prototype.getEl = function () {
                var t = this.el;
                return t || ((t = this.el = this.sourceEl.clone().addClass(this.options.additionalClass || "").css({
                    position: "absolute",
                    visibility: "",
                    display: this.isHidden ? "none" : "",
                    margin: 0,
                    right: "auto",
                    bottom: "auto",
                    width: this.sourceEl.width(),
                    height: this.sourceEl.height(),
                    opacity: this.options.opacity || "",
                    zIndex: this.options.zIndex
                })).addClass("fc-unselectable"), t.appendTo(this.parentEl)), t
            }, t.prototype.removeElement = function () {
                this.el && (this.el.remove(), this.el = null)
            }, t.prototype.updatePosition = function () {
                var t, e;
                this.getEl(), null == this.top0 && (t = this.sourceEl.offset(), e = this.el.offsetParent().offset(), this.top0 = t.top - e.top, this.left0 = t.left - e.left), this.el.css({
                    top: this.top0 + this.topDelta,
                    left: this.left0 + this.leftDelta
                })
            }, t.prototype.handleMove = function (t) {
                this.topDelta = n.getEvY(t) - this.y0, this.leftDelta = n.getEvX(t) - this.x0, this.isHidden || this.updatePosition()
            }, t.prototype.hide = function () {
                this.isHidden || (this.isHidden = !0, this.el && this.el.hide())
            }, t.prototype.show = function () {
                this.isHidden && (this.isHidden = !1, this.updatePosition(), this.getEl().show())
            }, t
        }();
        e.default = r, s.default.mixInto(r)
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), r = i(18), s = function (i) {
            function t(t) {
                var e = i.call(this, t) || this;
                return e.dragListener = e.buildDragListener(), e
            }

            return n.__extends(t, i), t.prototype.end = function () {
                this.dragListener.endInteraction()
            }, t.prototype.bindToEl = function (t) {
                var e = this.component, i = this.dragListener;
                e.bindDateHandlerToEl(t, "mousedown", function (t) {
                    e.shouldIgnoreMouse() || i.startInteraction(t)
                }), e.bindDateHandlerToEl(t, "touchstart", function (t) {
                    e.shouldIgnoreTouch() || i.startInteraction(t)
                })
            }, t.prototype.buildDragListener = function () {
                var n, s = this, o = this.component, t = new r.default(o, {
                    scroll: this.opt("dragScroll"), interactionStart: function () {
                        n = t.origHit
                    }, hitOver: function (t, e, i) {
                        e || (n = null)
                    }, hitOut: function () {
                        n = null
                    }, interactionEnd: function (t, e) {
                        var i;
                        !e && n && (i = o.getSafeHitFootprint(n)) && s.view.triggerDayClick(i, o.getHitEl(n), t)
                    }
                });
                return t.shouldCancelTouchScroll = !1, t.scrollAlwaysKills = !0, t
            }, t
        }(i(13).default);
        e.default = s
    }, function (t, e, i) {
        function o(t) {
            var e, i, n = t.forwardSegs, s = 0;
            if (void 0 === t.forwardPressure) {
                for (e = 0; e < n.length; e++) o(i = n[e]), s = Math.max(s, 1 + i.forwardPressure);
                t.forwardPressure = s
            }
        }

        function r(t, e, i) {
            void 0 === i && (i = []);
            for (var n = 0; n < e.length; n++) s = t, o = e[n], s.bottom > o.top && s.top < o.bottom && i.push(e[n]);
            var s, o;
            return i
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(0), v = i(2), n = function (n) {
            function t(t, e) {
                var i = n.call(this, t, e) || this;
                return i.timeGrid = t, i
            }

            return s.__extends(t, n), t.prototype.renderFgSegs = function (t) {
                this.renderFgSegsIntoContainers(t, this.timeGrid.fgContainerEls)
            }, t.prototype.renderFgSegsIntoContainers = function (t, e) {
                var i, n;
                for (i = this.timeGrid.groupSegsByCol(t), n = 0; n < this.timeGrid.colCnt; n++) this.updateFgSegCoords(i[n]);
                this.timeGrid.attachSegsByCol(i, e)
            }, t.prototype.unrenderFgSegs = function () {
                this.fgSegs && this.fgSegs.forEach(function (t) {
                    t.el.remove()
                })
            }, t.prototype.computeEventTimeFormat = function () {
                return this.opt("noMeridiemTimeFormat")
            }, t.prototype.computeDisplayEventEnd = function () {
                return !0
            }, t.prototype.fgSegHtml = function (t, e) {
                var i, n, s, o = this.view, r = o.calendar, a = t.footprint.componentFootprint, l = a.isAllDay,
                    h = t.footprint.eventDef, u = o.isEventDefDraggable(h),
                    c = !e && t.isStart && o.isEventDefResizableFromStart(h),
                    d = !e && t.isEnd && o.isEventDefResizableFromEnd(h), p = this.getSegClasses(t, u, c || d),
                    f = v.cssToStr(this.getSkinCss(h));
                if (p.unshift("fc-time-grid-event", "fc-v-event"), o.isMultiDayRange(a.unzonedRange)) {
                    if (t.isStart || t.isEnd) {
                        var g = r.msToMoment(t.startMs), m = r.msToMoment(t.endMs);
                        i = this._getTimeText(g, m, l), n = this._getTimeText(g, m, l, "LT"), s = this._getTimeText(g, m, l, null, !1)
                    }
                } else i = this.getTimeText(t.footprint), n = this.getTimeText(t.footprint, "LT"), s = this.getTimeText(t.footprint, null, !1);
                return '<a class="' + p.join(" ") + '"' + (h.url ? ' href="' + v.htmlEscape(h.url) + '"' : "") + (f ? ' style="' + f + '"' : "") + '><div class="fc-content">' + (i ? '<div class="fc-time" data-start="' + v.htmlEscape(s) + '" data-full="' + v.htmlEscape(n) + '"><span>' + v.htmlEscape(i) + "</span></div>" : "") + (h.title ? '<div class="fc-title">' + v.htmlEscape(h.title) + "</div>" : "") + '</div><div class="fc-bg"/>' + (d ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
            }, t.prototype.updateFgSegCoords = function (t) {
                this.timeGrid.computeSegVerticals(t), this.computeFgSegHorizontals(t), this.timeGrid.assignSegVerticals(t), this.assignFgSegHorizontals(t)
            }, t.prototype.computeFgSegHorizontals = function (t) {
                var e, i, n;
                if (this.sortEventSegs(t), function (t) {
                    var e, i, n, s, o;
                    for (e = 0; e < t.length; e++) for (i = t[e], n = 0; n < i.length; n++) for ((s = i[n]).forwardSegs = [], o = e + 1; o < t.length; o++) r(s, t[o], s.forwardSegs)
                }(e = function (t) {
                    var e, i, n, s = [];
                    for (e = 0; e < t.length; e++) {
                        for (i = t[e], n = 0; n < s.length && r(i, s[n]).length; n++) ;
                        (s[i.level = n] || (s[n] = [])).push(i)
                    }
                    return s
                }(t)), i = e[0]) {
                    for (n = 0; n < i.length; n++) o(i[n]);
                    for (n = 0; n < i.length; n++) this.computeFgSegForwardBack(i[n], 0, 0)
                }
            }, t.prototype.computeFgSegForwardBack = function (t, e, i) {
                var n, s = t.forwardSegs;
                if (void 0 === t.forwardCoord) for (s.length ? (this.sortForwardSegs(s), this.computeFgSegForwardBack(s[0], e + 1, i), t.forwardCoord = s[0].backwardCoord) : t.forwardCoord = 1, t.backwardCoord = t.forwardCoord - (t.forwardCoord - i) / (e + 1), n = 0; n < s.length; n++) this.computeFgSegForwardBack(s[n], 0, t.forwardCoord)
            }, t.prototype.sortForwardSegs = function (t) {
                t.sort(v.proxy(this, "compareForwardSegs"))
            }, t.prototype.compareForwardSegs = function (t, e) {
                return e.forwardPressure - t.forwardPressure || (t.backwardCoord || 0) - (e.backwardCoord || 0) || this.compareEventSegs(t, e)
            }, t.prototype.assignFgSegHorizontals = function (t) {
                var e, i;
                for (e = 0; e < t.length; e++) (i = t[e]).el.css(this.generateFgSegHorizontalCss(i)), i.bottom - i.top < 30 && i.el.addClass("fc-short")
            }, t.prototype.generateFgSegHorizontalCss = function (t) {
                var e, i, n = this.opt("slotEventOverlap"), s = t.backwardCoord, o = t.forwardCoord,
                    r = this.timeGrid.generateSegVerticalCss(t), a = this.timeGrid.isRTL;
                return n && (o = Math.min(1, s + 2 * (o - s))), i = a ? (e = 1 - o, s) : (e = s, 1 - o), r.zIndex = t.level + 1, r.left = 100 * e + "%", r.right = 100 * i + "%", n && t.forwardPressure && (r[a ? "marginLeft" : "marginRight"] = 20), r
            }, t
        }(i(31).default);
        e.default = n
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), r = i(1), s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n.__extends(e, t), e.prototype.renderSegs = function (t, e) {
                var i, n, s, o = [];
                for (this.eventRenderer.renderFgSegsIntoContainers(t, this.component.helperContainerEls), i = 0; i < t.length; i++) n = t[i], e && e.col === n.col && (s = e.el, n.el.css({
                    left: s.css("left"),
                    right: s.css("right"),
                    "margin-left": s.css("margin-left"),
                    "margin-right": s.css("margin-right")
                })), o.push(n.el[0]);
                return r(o)
            }, e
        }(i(43).default);
        e.default = s
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n.__extends(e, t), e.prototype.attachSegEls = function (t, e) {
                var i, n = this.component;
                return "bgEvent" === t ? i = n.bgContainerEls : "businessHours" === t ? i = n.businessContainerEls : "highlight" === t && (i = n.highlightContainerEls), n.updateSegVerticals(e), n.attachSegsByCol(n.groupSegsByCol(e), i), e.map(function (t) {
                    return t.el[0]
                })
            }, e
        }(i(42).default);
        e.default = s
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var c = i(1), d = i(2), n = i(6), s = function () {
            function t(t) {
                this.isHidden = !0, this.margin = 10, this.options = t || {}
            }

            return t.prototype.show = function () {
                this.isHidden && (this.el || this.render(), this.el.show(), this.position(), this.isHidden = !1, this.trigger("show"))
            }, t.prototype.hide = function () {
                this.isHidden || (this.el.hide(), this.isHidden = !0, this.trigger("hide"))
            }, t.prototype.render = function () {
                var t = this, e = this.options;
                this.el = c('<div class="fc-popover"/>').addClass(e.className || "").css({
                    top: 0,
                    left: 0
                }).append(e.content).appendTo(e.parentEl), this.el.on("click", ".fc-close", function () {
                    t.hide()
                }), e.autoHide && this.listenTo(c(document), "mousedown", this.documentMousedown)
            }, t.prototype.documentMousedown = function (t) {
                this.el && !c(t.target).closest(this.el).length && this.hide()
            }, t.prototype.removeElement = function () {
                this.hide(), this.el && (this.el.remove(), this.el = null), this.stopListeningTo(c(document), "mousedown")
            }, t.prototype.position = function () {
                var t, e, i, n, s, o = this.options, r = this.el.offsetParent().offset(), a = this.el.outerWidth(),
                    l = this.el.outerHeight(), h = c(window), u = d.getScrollParent(this.el);
                n = o.top || 0, s = void 0 !== o.left ? o.left : void 0 !== o.right ? o.right - a : 0, e = u.is(window) || u.is(document) ? (u = h, t = 0) : (t = (i = u.offset()).top, i.left), t += h.scrollTop(), e += h.scrollLeft(), !1 !== o.viewportConstrain && (n = Math.min(n, t + u.outerHeight() - l - this.margin), n = Math.max(n, t + this.margin), s = Math.min(s, e + u.outerWidth() - a - this.margin), s = Math.max(s, e + this.margin)), this.el.css({
                    top: n - r.top,
                    left: s - r.left
                })
            }, t.prototype.trigger = function (t) {
                this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1))
            }, t
        }();
        e.default = s, n.default.mixInto(s)
    }, function (t, e, i) {
        function o(t, e) {
            var i, n;
            for (i = 0; i < e.length; i++) if ((n = e[i]).leftCol <= t.rightCol && n.rightCol >= t.leftCol) return !0;
            return !1
        }

        function r(t, e) {
            return t.leftCol - e.leftCol
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(0), v = i(1), p = i(2), n = function (n) {
            function t(t, e) {
                var i = n.call(this, t, e) || this;
                return i.dayGrid = t, i
            }

            return s.__extends(t, n), t.prototype.renderBgRanges = function (t) {
                t = v.grep(t, function (t) {
                    return t.eventDef.isAllDay()
                }), n.prototype.renderBgRanges.call(this, t)
            }, t.prototype.renderFgSegs = function (t) {
                var i = this.rowStructs = this.renderSegRows(t);
                this.dayGrid.rowEls.each(function (t, e) {
                    v(e).find(".fc-content-skeleton > table").append(i[t].tbodyEl)
                })
            }, t.prototype.unrenderFgSegs = function () {
                for (var t, e = this.rowStructs || []; t = e.pop();) t.tbodyEl.remove();
                this.rowStructs = null
            }, t.prototype.renderSegRows = function (t) {
                var e, i, n = [];
                for (e = this.groupSegRows(t), i = 0; i < e.length; i++) n.push(this.renderSegRow(i, e[i]));
                return n
            }, t.prototype.renderSegRow = function (t, e) {
                function i(t) {
                    for (; o < t;) (h = (m[n - 1] || [])[o]) ? h.attr("rowspan", parseInt(h.attr("rowspan") || 1, 10) + 1) : (h = v("<td/>"), r.append(h)), g[n][o] = h, m[n][o] = h, o++
                }

                var n, s, o, r, a, l, h, u = this.dayGrid.colCnt, c = this.buildSegLevels(e), d = Math.max(1, c.length),
                    p = v("<tbody/>"), f = [], g = [], m = [];
                for (n = 0; n < d; n++) {
                    if (s = c[n], o = 0, r = v("<tr/>"), f.push([]), g.push([]), m.push([]), s) for (a = 0; a < s.length; a++) {
                        for (i((l = s[a]).leftCol), h = v('<td class="fc-event-container"/>').append(l.el), l.leftCol != l.rightCol ? h.attr("colspan", l.rightCol - l.leftCol + 1) : m[n][o] = h; o <= l.rightCol;) g[n][o] = h, f[n][o] = l, o++;
                        r.append(h)
                    }
                    i(u), this.dayGrid.bookendCells(r), p.append(r)
                }
                return {row: t, tbodyEl: p, cellMatrix: g, segMatrix: f, segLevels: c, segs: e}
            }, t.prototype.buildSegLevels = function (t) {
                var e, i, n, s = [];
                for (this.sortEventSegs(t), e = 0; e < t.length; e++) {
                    for (i = t[e], n = 0; n < s.length && o(i, s[n]); n++) ;
                    (s[i.level = n] || (s[n] = [])).push(i)
                }
                for (n = 0; n < s.length; n++) s[n].sort(r);
                return s
            }, t.prototype.groupSegRows = function (t) {
                var e, i = [];
                for (e = 0; e < this.dayGrid.rowCnt; e++) i.push([]);
                for (e = 0; e < t.length; e++) i[t[e].row].push(t[e]);
                return i
            }, t.prototype.computeEventTimeFormat = function () {
                return this.opt("extraSmallTimeFormat")
            }, t.prototype.computeDisplayEventEnd = function () {
                return 1 === this.dayGrid.colCnt
            }, t.prototype.fgSegHtml = function (t, e) {
                var i, n, s = this.view, o = t.footprint.eventDef, r = t.footprint.componentFootprint.isAllDay,
                    a = s.isEventDefDraggable(o), l = !e && r && t.isStart && s.isEventDefResizableFromStart(o),
                    h = !e && r && t.isEnd && s.isEventDefResizableFromEnd(o), u = this.getSegClasses(t, a, l || h),
                    c = p.cssToStr(this.getSkinCss(o)), d = "";
                return u.unshift("fc-day-grid-event", "fc-h-event"), t.isStart && (i = this.getTimeText(t.footprint)) && (d = '<span class="fc-time">' + p.htmlEscape(i) + "</span>"), n = '<span class="fc-title">' + (p.htmlEscape(o.title || "") || "&nbsp;") + "</span>", '<a class="' + u.join(" ") + '"' + (o.url ? ' href="' + p.htmlEscape(o.url) + '"' : "") + (c ? ' style="' + c + '"' : "") + '><div class="fc-content">' + (this.dayGrid.isRTL ? n + " " + d : d + " " + n) + "</div>" + (l ? '<div class="fc-resizer fc-start-resizer" />' : "") + (h ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
            }, t
        }(i(31).default);
        e.default = n
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), h = i(1), s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n.__extends(e, t), e.prototype.renderSegs = function (t, r) {
                var a, l = [];
                return a = this.eventRenderer.renderSegRows(t), this.component.rowEls.each(function (t, e) {
                    var i, n, s = h(e), o = h('<div class="fc-helper-skeleton"><table/></div>');
                    n = r && r.row === t ? r.el.position().top : ((i = s.find(".fc-content-skeleton tbody")).length || (i = s.find(".fc-content-skeleton table")), i.position().top), o.css("top", n).find("table").append(a[t].tbodyEl), s.append(o), l.push(o[0])
                }), h(l)
            }, e
        }(i(43).default);
        e.default = s
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), l = i(1), s = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.fillSegTag = "td", t
            }

            return n.__extends(t, e), t.prototype.attachSegEls = function (t, e) {
                var i, n, s, o = [];
                for (i = 0; i < e.length; i++) n = e[i], s = this.renderFillRow(t, n), this.component.rowEls.eq(n.row).append(s), o.push(s[0]);
                return o
            }, t.prototype.renderFillRow = function (t, e) {
                var i, n, s, o = this.component.colCnt, r = e.leftCol, a = e.rightCol + 1;
                return i = "businessHours" === t ? "bgevent" : t.toLowerCase(), s = (n = l('<div class="fc-' + i + '-skeleton"><table><tr/></table></div>')).find("tr"), 0 < r && s.append('<td colspan="' + r + '"/>'), s.append(e.el.attr("colspan", a - r)), a < o && s.append('<td colspan="' + (o - a) + '"/>'), this.component.bookendCells(s), n
            }, t
        }(i(42).default);
        e.default = s
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), c = i(2), s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n.__extends(e, t), e.prototype.renderFgSegs = function (t) {
                t.length ? this.component.renderSegList(t) : this.component.renderEmptyMessage()
            }, e.prototype.fgSegHtml = function (t) {
                var e, i = this.view, n = i.calendar, s = n.theme, o = t.footprint, r = o.eventDef,
                    a = o.componentFootprint, l = r.url, h = ["fc-list-item"].concat(this.getClasses(r)),
                    u = this.getBgColor(r);
                return e = a.isAllDay ? i.getAllDayHtml() : i.isMultiDayRange(a.unzonedRange) ? t.isStart || t.isEnd ? c.htmlEscape(this._getTimeText(n.msToMoment(t.startMs), n.msToMoment(t.endMs), a.isAllDay)) : i.getAllDayHtml() : c.htmlEscape(this.getTimeText(o)), l && h.push("fc-has-url"), '<tr class="' + h.join(" ") + '">' + (this.displayEventTime ? '<td class="fc-list-item-time ' + s.getClass("widgetContent") + '">' + (e || "") + "</td>" : "") + '<td class="fc-list-item-marker ' + s.getClass("widgetContent") + '"><span class="fc-event-dot"' + (u ? ' style="background-color:' + u + '"' : "") + '></span></td><td class="fc-list-item-title ' + s.getClass("widgetContent") + '"><a' + (l ? ' href="' + c.htmlEscape(l) + '"' : "") + ">" + c.htmlEscape(r.title || "") + "</a></td></tr>"
            }, e.prototype.computeEventTimeFormat = function () {
                return this.opt("mediumTimeFormat")
            }, e
        }(i(31).default);
        e.default = s
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var s = i(0), o = i(1), n = function (n) {
            function t() {
                return null !== n && n.apply(this, arguments) || this
            }

            return s.__extends(t, n), t.prototype.handleClick = function (t, e) {
                var i;
                n.prototype.handleClick.call(this, t, e), o(e.target).closest("a[href]").length || (i = t.footprint.eventDef.url) && !e.isDefaultPrevented() && (window.location.href = i)
            }, t
        }(i(44).default);
        e.default = n
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(25), s = i(34), o = i(57), r = i(58);
        n.default.registerClass(s.default), n.default.registerClass(o.default), n.default.registerClass(r.default)
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(36), s = i(55), o = i(56), r = i(94);
        n.default.register("standard", s.default), n.default.register("jquery-ui", o.default), n.default.register("bootstrap3", r.default)
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(0), s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n.__extends(e, t), e
        }(i(27).default);
        (e.default = s).prototype.classes = {
            widget: "fc-bootstrap3",
            tableGrid: "table-bordered",
            tableList: "table table-striped",
            buttonGroup: "btn-group",
            button: "btn btn-default",
            stateActive: "active",
            stateDisabled: "disabled",
            today: "alert alert-info",
            popover: "panel panel-default",
            popoverHeader: "panel-heading",
            popoverContent: "panel-body",
            headerRow: "panel-default",
            dayRow: "panel-default",
            listView: "panel panel-default"
        }, s.prototype.baseIconClass = "glyphicon", s.prototype.iconClasses = {
            close: "glyphicon-remove",
            prev: "glyphicon-chevron-left",
            next: "glyphicon-chevron-right",
            prevYear: "glyphicon-backward",
            nextYear: "glyphicon-forward"
        }, s.prototype.iconOverrideOption = "bootstrapGlyphicons", s.prototype.iconOverrideCustomButtonOption = "bootstrapGlyphicon", s.prototype.iconOverridePrefix = "glyphicon-"
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(7), s = i(47), o = i(70), r = n.default.views;
        r.basic = {class: s.default}, r.basicDay = {type: "basic", duration: {days: 1}}, r.basicWeek = {
            type: "basic",
            duration: {weeks: 1}
        }, r.month = {class: o.default, duration: {months: 1}, defaults: {fixedWeekCount: !0}}
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(7), s = i(67), o = n.default.views;
        o.agenda = {
            class: s.default,
            defaults: {allDaySlot: !0, slotDuration: "00:30:00", slotEventOverlap: !0}
        }, o.agendaDay = {type: "agenda", duration: {days: 1}}, o.agendaWeek = {type: "agenda", duration: {weeks: 1}}
    }, function (t, e, i) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(7), s = i(71), o = n.default.views;
        o.list = {
            class: s.default,
            buttonTextKey: "list",
            defaults: {buttonText: "list", listDayFormat: "LL", noEventsMessage: "No events to display"}
        }, o.listDay = {
            type: "list",
            duration: {days: 1},
            defaults: {listDayFormat: "dddd"}
        }, o.listWeek = {
            type: "list",
            duration: {weeks: 1},
            defaults: {listDayFormat: "dddd", listDayAltFormat: "LL"}
        }, o.listMonth = {
            type: "list",
            duration: {month: 1},
            defaults: {listDayAltFormat: "dddd"}
        }, o.listYear = {type: "list", duration: {year: 1}, defaults: {listDayAltFormat: "dddd"}}
    }])
});