window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/*!jQuery v3.7.0 | (c) OpenJS Foundation and other contributors | jquery.org/license*/
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(ie, e) {
    "use strict";
    var oe = []
      , r = Object.getPrototypeOf
      , ae = oe.slice
      , g = oe.flat ? function(e) {
        return oe.flat.call(e)
    }
    : function(e) {
        return oe.concat.apply([], e)
    }
      , s = oe.push
      , se = oe.indexOf
      , n = {}
      , i = n.toString
      , ue = n.hasOwnProperty
      , o = ue.toString
      , a = o.call(Object)
      , le = {}
      , v = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , y = function(e) {
        return null != e && e === e.window
    }
      , C = ie.document
      , u = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e,
        t)
            for (r in u)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
    }
    var t = "3.7.0"
      , l = /HTML$/i
      , ce = function(e, t) {
        return new ce.fn.init(e,t)
    };
    function c(e) {
        var t = !!e && "length"in e && e.length
          , n = x(e);
        return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    function fe(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    ce.fn = ce.prototype = {
        jquery: t,
        constructor: ce,
        length: 0,
        toArray: function() {
            return ae.call(this)
        },
        get: function(e) {
            return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = ce.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return ce.each(this, e)
        },
        map: function(n) {
            return this.pushStack(ce.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(ae.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(ce.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(ce.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: oe.sort,
        splice: oe.splice
    },
    ce.extend = ce.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || v(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    ce.extend({
        expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (c(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        text: function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i)
                    return e.textContent;
                if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += ce.text(t);
            return n
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        isXMLDoc: function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !l.test(t || n && n.nodeName || "HTML")
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (c(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: le
    }),
    "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var pe = oe.pop
      , de = oe.sort
      , he = oe.splice
      , ge = "[\\x20\\t\\r\\n\\f]"
      , ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$","g");
    ce.contains = function(e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
    }
    ;
    var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function p(e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    ce.escapeSelector = function(e) {
        return (e + "").replace(f, p)
    }
    ;
    var ye = C
      , me = s;
    !function() {
        var e, b, w, o, a, T, r, C, d, i, k = me, S = ce.expando, E = 0, n = 0, s = W(), c = W(), u = W(), h = W(), l = function(e, t) {
            return e === t && (a = !0),
            0
        }, f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]", g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)", v = new RegExp(ge + "+","g"), y = new RegExp("^" + ge + "*," + ge + "*"), m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), x = new RegExp(ge + "|>"), j = new RegExp(g), A = new RegExp("^" + t + "$"), D = {
            ID: new RegExp("^#(" + t + ")"),
            CLASS: new RegExp("^\\.(" + t + ")"),
            TAG: new RegExp("^(" + t + "|[*])"),
            ATTR: new RegExp("^" + p),
            PSEUDO: new RegExp("^" + g),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)","i"),
            bool: new RegExp("^(?:" + f + ")$","i"),
            needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)","i")
        }, N = /^(?:input|select|textarea|button)$/i, q = /^h\d$/i, L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H = /[+~]/, O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])","g"), P = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, R = function() {
            V()
        }, M = J(function(e) {
            return !0 === e.disabled && fe(e, "fieldset")
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            k.apply(oe = ae.call(ye.childNodes), ye.childNodes),
            oe[ye.childNodes.length].nodeType
        } catch (e) {
            k = {
                apply: function(e, t) {
                    me.apply(e, ae.call(t))
                },
                call: function(e) {
                    me.apply(e, ae.call(arguments, 1))
                }
            }
        }
        function I(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (V(e),
            e = e || T,
            C)) {
                if (11 !== p && (u = L.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return k.call(n, a),
                                n
                        } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i)
                            return k.call(n, a),
                            n
                    } else {
                        if (u[2])
                            return k.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && e.getElementsByClassName)
                            return k.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (!(h[t + " "] || d && d.test(t))) {
                    if (c = t,
                    f = e,
                    1 === p && (x.test(t) || m.test(t))) {
                        (f = H.test(t) && z(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)),
                        o = (l = Y(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return k.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        h(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return re(t.replace(ve, "$1"), e, n, r)
        }
        function W() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function F(e) {
            return e[S] = !0,
            e
        }
        function $(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function B(t) {
            return function(e) {
                return fe(e, "input") && e.type === t
            }
        }
        function _(t) {
            return function(e) {
                return (fe(e, "input") || fe(e, "button")) && e.type === t
            }
        }
        function X(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && M(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function U(a) {
            return F(function(o) {
                return o = +o,
                F(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function z(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function V(e) {
            var t, n = e ? e.ownerDocument || e : ye;
            return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement,
            C = !ce.isXMLDoc(T),
            i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector,
            ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", R),
            le.getById = $(function(e) {
                return r.appendChild(e).id = ce.expando,
                !T.getElementsByName || !T.getElementsByName(ce.expando).length
            }),
            le.disconnectedMatch = $(function(e) {
                return i.call(e, "*")
            }),
            le.scope = $(function() {
                return T.querySelectorAll(":scope")
            }),
            le.cssHas = $(function() {
                try {
                    return T.querySelector(":has(*,:jqfake)"),
                    !1
                } catch (e) {
                    return !0
                }
            }),
            le.getById ? (b.filter.ID = function(e) {
                var t = e.replace(O, P);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(O, P);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
            }
            ,
            b.find.CLASS = function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && C)
                    return t.getElementsByClassName(e)
            }
            ,
            d = [],
            $(function(e) {
                var t;
                r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="),
                e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"),
                e.querySelectorAll(":checked").length || d.push(":checked"),
                (t = T.createElement("input")).setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                r.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"),
                (t = T.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")")
            }),
            le.cssHas || d.push(":has"),
            d = d.length && new RegExp(d.join("|")),
            l = function(e, t) {
                if (e === t)
                    return a = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1)
            }
            ),
            T
        }
        for (e in I.matches = function(e, t) {
            return I(e, null, null, t)
        }
        ,
        I.matchesSelector = function(e, t) {
            if (V(e),
            C && !h[t + " "] && (!d || !d.test(t)))
                try {
                    var n = i.call(e, t);
                    if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    h(t, !0)
                }
            return 0 < I(t, T, null, [e]).length
        }
        ,
        I.contains = function(e, t) {
            return (e.ownerDocument || e) != T && V(e),
            ce.contains(e, t)
        }
        ,
        I.attr = function(e, t) {
            (e.ownerDocument || e) != T && V(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
            return void 0 !== r ? r : e.getAttribute(t)
        }
        ,
        I.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        ce.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (a = !le.sortStable,
            o = !le.sortStable && ae.call(e, 0),
            de.call(e, l),
            a) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    he.call(e, n[r], 1)
            }
            return o = null,
            e
        }
        ,
        ce.fn.uniqueSort = function() {
            return this.pushStack(ce.uniqueSort(ae.apply(this)))
        }
        ,
        (b = ce.expr = {
            cacheLength: 50,
            createPseudo: F,
            match: D,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(O, P),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(O, P),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(O, P).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return fe(e, t)
                    }
                },
                CLASS: function(e) {
                    var t = s[e + " "];
                    return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = I.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(d, e, t, h, g) {
                    var v = "nth" !== d.slice(0, 3)
                      , y = "last" !== d.slice(-4)
                      , m = "of-type" === e;
                    return 1 === h && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling", l = e.parentNode, c = m && e.nodeName.toLowerCase(), f = !n && !m, p = !1;
                        if (l) {
                            if (v) {
                                while (u) {
                                    o = e;
                                    while (o = o[u])
                                        if (m ? fe(o, c) : 1 === o.nodeType)
                                            return !1;
                                    s = u = "only" === d && !s && "nextSibling"
                                }
                                return !0
                            }
                            if (s = [y ? l.firstChild : l.lastChild],
                            y && f) {
                                p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2],
                                o = a && l.childNodes[a];
                                while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                    if (1 === o.nodeType && ++p && o === e) {
                                        i[d] = [E, a, p];
                                        break
                                    }
                            } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]),
                            !1 === p)
                                while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                    if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]),
                                    o === e))
                                        break;
                            return (p -= g) === h || p % h == 0 && 0 <= p / h
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = se.call(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: F(function(e) {
                    var r = []
                      , i = []
                      , s = ne(e.replace(ve, "$1"));
                    return s[S] ? F(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: F(function(t) {
                    return function(e) {
                        return 0 < I(t, e).length
                    }
                }),
                contains: F(function(t) {
                    return t = t.replace(O, P),
                    function(e) {
                        return -1 < (e.textContent || ce.text(e)).indexOf(t)
                    }
                }),
                lang: F(function(n) {
                    return A.test(n || "") || I.error("unsupported lang: " + n),
                    n = n.replace(O, P).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = ie.location && ie.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === r
                },
                focus: function(e) {
                    return e === function() {
                        try {
                            return T.activeElement
                        } catch (e) {}
                    }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: X(!1),
                disabled: X(!0),
                checked: function(e) {
                    return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return q.test(e.nodeName)
                },
                input: function(e) {
                    return N.test(e.nodeName)
                },
                button: function(e) {
                    return fe(e, "input") && "button" === e.type || fe(e, "button")
                },
                text: function(e) {
                    var t;
                    return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: U(function() {
                    return [0]
                }),
                last: U(function(e, t) {
                    return [t - 1]
                }),
                eq: U(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: U(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: U(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: U(function(e, t, n) {
                    var r;
                    for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: U(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = B(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = _(e);
        function G() {}
        function Y(e, t) {
            var n, r, i, o, a, s, u, l = c[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = m.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(ve, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? I.error(e) : c(e, s).slice(0)
        }
        function Q(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function J(a, e, t) {
            var s = e.dir
              , u = e.next
              , l = u || s
              , c = t && "parentNode" === l
              , f = n++;
            return e.first ? function(e, t, n) {
                while (e = e[s])
                    if (1 === e.nodeType || c)
                        return a(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o = [E, f];
                if (n) {
                    while (e = e[s])
                        if ((1 === e.nodeType || c) && a(e, t, n))
                            return !0
                } else
                    while (e = e[s])
                        if (1 === e.nodeType || c)
                            if (i = e[S] || (e[S] = {}),
                            u && fe(e, u))
                                e = e[s] || e;
                            else {
                                if ((r = i[l]) && r[0] === E && r[1] === f)
                                    return o[2] = r[2];
                                if ((i[l] = o)[2] = a(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function K(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Z(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function ee(d, h, g, v, y, e) {
            return v && !v[S] && (v = ee(v)),
            y && !y[S] && (y = ee(y, e)),
            F(function(e, t, n, r) {
                var i, o, a, s, u = [], l = [], c = t.length, f = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        I(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), p = !d || !e && h ? f : Z(f, u, d, n, r);
                if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p,
                v) {
                    i = Z(s, l),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (s[l[o]] = !(p[l[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = s.length;
                            while (o--)
                                (a = s[o]) && i.push(p[o] = a);
                            y(null, s = [], i, r)
                        }
                        o = s.length;
                        while (o--)
                            (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    s = Z(s === t ? s.splice(c, s.length) : s),
                    y ? y(null, t, s, r) : k.apply(t, s)
            })
        }
        function te(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function(e) {
                return e === i
            }, a, !0), l = J(function(e) {
                return -1 < se.call(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [J(K(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e))
                    }
                    c.push(t)
                }
            return K(c)
        }
        function ne(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = u[e + " "];
            if (!a) {
                t || (t = Y(e)),
                n = t.length;
                while (n--)
                    (a = te(t[n]))[S] ? i.push(a) : o.push(a);
                (a = u(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = E += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == T || (V(o),
                            n = !C);
                            while (s = v[a++])
                                if (s(o, t || T, n)) {
                                    k.call(r, o);
                                    break
                                }
                            i && (E = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = pe.call(r));
                            f = Z(f)
                        }
                        k.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r)
                    }
                    return i && (E = h,
                    w = p),
                    c
                }
                ,
                m ? F(r) : r))).selector = e
            }
            return a
        }
        function re(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && Y(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = D.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && z(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && Q(o)))
                            return k.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && z(t.parentNode) || t),
            n
        }
        G.prototype = b.filters = b.pseudos,
        b.setFilters = new G,
        le.sortStable = S.split("").sort(l).join("") === S,
        V(),
        le.sortDetached = $(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }),
        ce.find = I,
        ce.expr[":"] = ce.expr.pseudos,
        ce.unique = ce.uniqueSort,
        I.compile = ne,
        I.select = re,
        I.setDocument = V,
        I.escape = ce.escapeSelector,
        I.getText = ce.text,
        I.isXML = ce.isXMLDoc,
        I.selectors = ce.expr,
        I.support = ce.support,
        I.uniqueSort = ce.uniqueSort
    }();
    var d = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && ce(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , h = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , b = ce.expr.match.needsContext
      , w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function T(e, n, r) {
        return v(n) ? ce.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? ce.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? ce.grep(e, function(e) {
            return -1 < se.call(n, e) !== r
        }) : ce.filter(n, e, r)
    }
    ce.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    ce.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(ce(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (ce.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                ce.find(e, i[t], n);
            return 1 < r ? ce.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function(e) {
            return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length
        }
    });
    var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ce.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || k,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ce ? t[0] : t,
                ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)),
                w.test(r[1]) && ce.isPlainObject(t))
                    for (r in t)
                        v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = C.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this)
    }
    ).prototype = ce.fn,
    k = ce(C);
    var E = /^(?:parents|prev(?:Until|All))/
      , j = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function A(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    ce.fn.extend({
        has: function(e) {
            var t = ce(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ce.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && ce(e);
            if (!b.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    ce.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return d(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return d(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return d(e, "nextSibling")
        },
        prevAll: function(e) {
            return d(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return d(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return d(e, "previousSibling", n)
        },
        siblings: function(e) {
            return h((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return h(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e),
            ce.merge([], e.childNodes))
        }
    }, function(r, i) {
        ce.fn[r] = function(e, t) {
            var n = ce.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ce.filter(t, n)),
            1 < this.length && (j[r] || ce.uniqueSort(n),
            E.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var D = /[^\x20\t\r\n\f]+/g;
    function N(e) {
        return e
    }
    function q(e) {
        throw e
    }
    function L(e, t, n, r) {
        var i;
        try {
            e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    ce.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        ce.each(e.match(D) || [], function(e, t) {
            n[t] = !0
        }),
        n) : ce.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    ce.each(e, function(e, t) {
                        v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return ce.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = ce.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < ce.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    ce.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return ce.Deferred(function(r) {
                        ce.each(o, function(e, t) {
                            var n = v(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++,
                                    t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error),
                                    u <= i + 1 && (a !== q && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()),
                            ie.setTimeout(t))
                        }
                    }
                    return ce.Deferred(function(e) {
                        o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
                        o[1][3].add(l(0, e, v(t) ? t : N)),
                        o[2][3].add(l(0, e, v(n) ? n : q))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ce.extend(e, a) : a
                }
            }
              , s = {};
            return ce.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = ae.call(arguments)
              , o = ce.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? ae.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || v(i[t] && i[t].then)))
                return o.then();
            while (t--)
                L(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ce.Deferred.exceptionHook = function(e, t) {
        ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    ce.readyException = function(e) {
        ie.setTimeout(function() {
            throw e
        })
    }
    ;
    var O = ce.Deferred();
    function P() {
        C.removeEventListener("DOMContentLoaded", P),
        ie.removeEventListener("load", P),
        ce.ready()
    }
    ce.fn.ready = function(e) {
        return O.then(e)["catch"](function(e) {
            ce.readyException(e)
        }),
        this
    }
    ,
    ce.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce])
        }
    }),
    ce.ready.then = O.then,
    "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P),
    ie.addEventListener("load", P));
    var R = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === x(n))
            for (s in i = !0,
            n)
                R(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        v(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(ce(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , M = /^-ms-/
      , I = /-([a-z])/g;
    function W(e, t) {
        return t.toUpperCase()
    }
    function F(e) {
        return e.replace(M, "ms-").replace(I, W)
    }
    var $ = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function B() {
        this.expando = ce.expando + B.uid++
    }
    B.uid = 1,
    B.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[F(t)] = n;
            else
                for (r in t)
                    i[F(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(F) : (t = F(t))in r ? [t] : t.match(D) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ce.isEmptyObject(t)
        }
    };
    var _ = new B
      , X = new B
      , U = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , z = /[A-Z]/g;
    function V(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : U.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                X.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    ce.extend({
        hasData: function(e) {
            return X.hasData(e) || _.hasData(e)
        },
        data: function(e, t, n) {
            return X.access(e, t, n)
        },
        removeData: function(e, t) {
            X.remove(e, t)
        },
        _data: function(e, t, n) {
            return _.access(e, t, n)
        },
        _removeData: function(e, t) {
            _.remove(e, t)
        }
    }),
    ce.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = X.get(o),
                1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)),
                        V(o, r, i[r]));
                    _.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                X.set(this, n)
            }) : R(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = X.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
                this.each(function() {
                    X.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                X.remove(this, e)
            })
        }
    }),
    ce.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = _.get(e, t),
                n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ce.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = ce._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                ce.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return _.get(e, n) || _.access(e, n, {
                empty: ce.Callbacks("once memory").add(function() {
                    _.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    ce.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ce.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = ce.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$","i")
      , Q = ["Top", "Right", "Bottom", "Left"]
      , J = C.documentElement
      , K = function(e) {
        return ce.contains(e.ownerDocument, e)
    }
      , Z = {
        composed: !0
    };
    J.getRootNode && (K = function(e) {
        return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
    }
    );
    var ee = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display")
    };
    function te(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return ce.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (ce.cssNumber[t] ? "" : "px"), c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                ce.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            ce.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ne = {};
    function re(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = _.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = ce.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ne[s] = u)))) : "none" !== n && (l[c] = "none",
            _.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    ce.fn.extend({
        show: function() {
            return re(this, !0)
        },
        hide: function() {
            return re(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ee(this) ? ce(this).show() : ce(this).hide()
            })
        }
    });
    var xe, be, we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i;
    xe = C.createDocumentFragment().appendChild(C.createElement("div")),
    (be = C.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    xe.appendChild(be),
    le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked,
    xe.innerHTML = "<textarea>x</textarea>",
    le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue,
    xe.innerHTML = "<option></option>",
    le.option = !!xe.lastChild;
    var ke = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function Se(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n
    }
    function Ee(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"))
    }
    ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead,
    ke.th = ke.td,
    le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
    var je = /<|&#?\w+;/;
    function Ae(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o))
                    ce.merge(p, o.nodeType ? [o] : o);
                else if (je.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (Te.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ke[s] || ke._default,
                    a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    ce.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < ce.inArray(o, r))
                i && i.push(o);
            else if (l = K(o),
            a = Se(f.appendChild(o), "script"),
            l && Ee(a),
            n) {
                c = 0;
                while (o = a[c++])
                    Ce.test(o.type || "") && n.push(o)
            }
        return f
    }
    var De = /^([^.]*)(?:\.(.+)|)/;
    function Ne() {
        return !0
    }
    function qe() {
        return !1
    }
    function Le(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Le(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = qe;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return ce().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = ce.guid++)),
        e.each(function() {
            ce.event.add(this, t, i, r, n)
        })
    }
    function He(e, r, t) {
        t ? (_.set(e, r, !1),
        ce.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n = _.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (n)
                        (ce.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (n = ae.call(arguments),
                    _.set(this, r, n),
                    this[r](),
                    t = _.get(this, r),
                    _.set(this, r, !1),
                    n !== t)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        t
                } else
                    n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
                    e.stopPropagation(),
                    e.isImmediatePropagationStopped = Ne)
            }
        })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne)
    }
    ce.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.get(t);
            if ($(t)) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && ce.find.matchesSelector(J, i),
                n.guid || (n.guid = ce.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(D) || [""]).length;
                while (l--)
                    d = g = (s = De.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = ce.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = ce.event.special[d] || {},
                    c = ce.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ce.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    ce.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.hasData(e) && _.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(D) || [""]).length;
                while (l--)
                    if (d = g = (s = De.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = ce.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            ce.event.remove(e, d + t[l], n, r, !0);
                ce.isEmptyObject(u) && _.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = ce.event.fix(e), l = (_.get(this, "events") || Object.create(null))[u.type] || [], c = ce.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = ce.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(ce.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[ce.expando] ? e : new ce.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    ce.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    ce.Event = function(e, t) {
        if (!(this instanceof ce.Event))
            return new ce.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && ce.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[ce.expando] = !0
    }
    ,
    ce.Event.prototype = {
        constructor: ce.Event,
        isDefaultPrevented: qe,
        isPropagationStopped: qe,
        isImmediatePropagationStopped: qe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ne,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ne,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ne,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ce.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, ce.event.addProp),
    ce.each({
        focus: "focusin",
        blur: "focusout"
    }, function(r, i) {
        function o(e) {
            if (C.documentMode) {
                var t = _.get(this, "handle")
                  , n = ce.event.fix(e);
                n.type = "focusin" === e.type ? "focus" : "blur",
                n.isSimulated = !0,
                t(e),
                n.target === n.currentTarget && t(n)
            } else
                ce.event.simulate(i, e.target, ce.event.fix(e))
        }
        ce.event.special[r] = {
            setup: function() {
                var e;
                if (He(this, r, !0),
                !C.documentMode)
                    return !1;
                (e = _.get(this, i)) || this.addEventListener(i, o),
                _.set(this, i, (e || 0) + 1)
            },
            trigger: function() {
                return He(this, r),
                !0
            },
            teardown: function() {
                var e;
                if (!C.documentMode)
                    return !1;
                (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o),
                _.remove(this, i))
            },
            _default: function(e) {
                return _.get(e.target, r)
            },
            delegateType: i
        },
        ce.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = C.documentMode ? this : e
                  , n = _.get(t, i);
                n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)),
                _.set(t, i, (n || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = C.documentMode ? this : e
                  , n = _.get(t, i) - 1;
                n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0),
                _.remove(t, i))
            }
        }
    }),
    ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        ce.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || ce.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    ce.fn.extend({
        on: function(e, t, n, r) {
            return Le(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Le(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = qe),
            this.each(function() {
                ce.event.remove(this, e, n, t)
            })
        }
    });
    var Oe = /<script|<style|<link/i
      , Pe = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Re = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Me(e, t) {
        return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e
    }
    function Ie(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function We(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Fe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (_.hasData(e) && (s = _.get(e).events))
                for (i in _.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        ce.event.add(t, i, s[i][n]);
            X.hasData(e) && (o = X.access(e),
            a = ce.extend({}, o),
            X.set(t, a))
        }
    }
    function $e(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = v(d);
        if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                $e(t, r, i, o)
            });
        if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++)
                u = e,
                c !== p && (u = ce.clone(u, !0, !0),
                s && ce.merge(a, Se(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                ce.map(a, We),
                c = 0; c < s; c++)
                    u = a[c],
                    Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : m(u.textContent.replace(Re, ""), u, l))
        }
        return n
    }
    function Be(e, t, n) {
        for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || ce.cleanData(Se(r)),
            r.parentNode && (n && K(r) && Ee(Se(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    ce.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = K(e);
            if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
                for (a = Se(c),
                r = 0,
                i = (o = Se(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || Se(e),
                    a = a || Se(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Fe(o[r], a[r]);
                else
                    Fe(e, c);
            return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if ($(n)) {
                    if (t = n[_.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
                        n[_.expando] = void 0
                    }
                    n[X.expando] && (n[X.expando] = void 0)
                }
        }
    }),
    ce.fn.extend({
        detach: function(e) {
            return Be(this, e, !0)
        },
        remove: function(e) {
            return Be(this, e)
        },
        text: function(e) {
            return R(this, function(e) {
                return void 0 === e ? ce.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return $e(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return $e(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Me(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (ce.cleanData(Se(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return ce.clone(this, e, t)
            })
        },
        html: function(e) {
            return R(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ce.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return $e(this, arguments, function(e) {
                var t = this.parentNode;
                ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        ce.fn[e] = function(e) {
            for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                ce(r[o])[a](t),
                s.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$","i")
      , Xe = /^--/
      , Ue = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = ie),
        t.getComputedStyle(e)
    }
      , ze = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Ve = new RegExp(Q.join("|"),"i");
    function Ge(e, t, n) {
        var r, i, o, a, s = Xe.test(t), u = e.style;
        return (n = n || Ue(e)) && (a = n.getPropertyValue(t) || n[t],
        s && a && (a = a.replace(ve, "$1") || void 0),
        "" !== a || K(e) || (a = ce.style(e, t)),
        !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width,
        i = u.minWidth,
        o = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = a,
        a = n.width,
        u.width = r,
        u.minWidth = i,
        u.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function Ye(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                J.appendChild(u).appendChild(l);
                var e = ie.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                J.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = C.createElement("div"), l = C.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        le.clearCloneStyle = "content-box" === l.style.backgroundClip,
        ce.extend(le, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = C.createElement("table"),
                t = C.createElement("tr"),
                n = C.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                t.style.cssText = "border:1px solid",
                t.style.height = "1px",
                n.style.height = "9px",
                n.style.display = "block",
                J.appendChild(e).appendChild(t).appendChild(n),
                r = ie.getComputedStyle(t),
                a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight,
                J.removeChild(e)),
                a
            }
        }))
    }();
    var Qe = ["Webkit", "Moz", "ms"]
      , Je = C.createElement("div").style
      , Ke = {};
    function Ze(e) {
        var t = ce.cssProps[e] || Ke[e];
        return t || (e in Je ? e : Ke[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = Qe.length;
            while (n--)
                if ((e = Qe[n] + t)in Je)
                    return e
        }(e) || e)
    }
    var et = /^(none|table(?!-c[ea]).+)/
      , tt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , nt = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function rt(e, t, n) {
        var r = Y.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function it(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0
          , l = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += ce.css(e, n + Q[a], !0, i)),
            r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)),
            "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i),
            "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u + l
    }
    function ot(e, t, n) {
        var r = Ue(e)
          , i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r)
          , o = i
          , a = Ge(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (_e.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function at(e, t, n, r, i) {
        return new at.prototype.init(e,t,n,r,i)
    }
    ce.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ge(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = F(t), u = Xe.test(t), l = e.style;
                if (u || (t = Ze(s)),
                a = ce.cssHooks[t] || ce.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")),
                le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = F(t);
            return Xe.test(t) || (t = Ze(s)),
            (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Ge(e, t, r)),
            "normal" === i && t in nt && (i = nt[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    ce.each(["height", "width"], function(e, u) {
        ce.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : ze(e, tt, function() {
                        return ot(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Ue(e), o = !le.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i), s = n ? it(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)),
                s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = ce.css(e, u)),
                rt(0, t, s)
            }
        }
    }),
    ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    ce.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        ce.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (ce.cssHooks[i + o].set = rt)
    }),
    ce.fn.extend({
        css: function(e, t) {
            return R(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ue(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = ce.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((ce.Tween = at).prototype = {
        constructor: at,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || ce.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (ce.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = at.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : at.propHooks._default.set(this),
            this
        }
    }).init.prototype = at.prototype,
    (at.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = at.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ce.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    ce.fx = at.prototype.init,
    ce.fx.step = {};
    var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
    function dt() {
        ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval),
        ce.fx.tick())
    }
    function ht() {
        return ie.setTimeout(function() {
            st = void 0
        }),
        st = Date.now()
    }
    function gt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = Q[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function vt(e, t, n) {
        for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function yt(o, e, t) {
        var n, a, r = 0, i = yt.prefilters.length, s = ce.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: ce.extend({}, e),
            opts: ce.extend(!0, {
                specialEasing: {},
                easing: ce.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: st || ht(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = F(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = ce.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = yt.prefilters[r].call(l, o, c, l.opts))
                return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return ce.map(c, vt, l),
        v(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        ce.fx.timer(ce.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    ce.Animation = ce.extend(yt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return te(n.elem, e, Y.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            v(e) ? (t = e,
            e = ["*"]) : e = e.match(D);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                yt.tweeners[n] = yt.tweeners[n] || [],
                yt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ee(e), v = _.get(e, "fxshow");
            for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    ce.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                ft.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || ce.style(e, r)
                }
            if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = _.get(e, "display")),
                "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0),
                l = e.style.display || l,
                c = ce.css(e, "display"),
                re([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = _.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && re([e], !0),
                    p.done(function() {
                        for (r in g || re([e]),
                        _.remove(e, "fxshow"),
                        d)
                            ce.style(e, r, d[r])
                    })),
                    u = vt(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
        }
    }),
    ce.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ce.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            v(r.old) && r.old.call(this),
            r.queue && ce.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    ce.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = ce.isEmptyObject(t)
              , o = ce.speed(e, n, r)
              , a = function() {
                var e = yt(this, ce.extend({}, t), o);
                (i || _.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = ce.timers
                  , r = _.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && pt.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || ce.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = _.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = ce.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                ce.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    ce.each(["toggle", "show", "hide"], function(e, r) {
        var i = ce.fn[r];
        ce.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
        }
    }),
    ce.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        ce.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    ce.timers = [],
    ce.fx.tick = function() {
        var e, t = 0, n = ce.timers;
        for (st = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ce.fx.stop(),
        st = void 0
    }
    ,
    ce.fx.timer = function(e) {
        ce.timers.push(e),
        ce.fx.start()
    }
    ,
    ce.fx.interval = 13,
    ce.fx.start = function() {
        ut || (ut = !0,
        dt())
    }
    ,
    ce.fx.stop = function() {
        ut = null
    }
    ,
    ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ce.fn.delay = function(r, e) {
        return r = ce.fx && ce.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = ie.setTimeout(e, r);
            t.stop = function() {
                ie.clearTimeout(n)
            }
        })
    }
    ,
    lt = C.createElement("input"),
    ct = C.createElement("select").appendChild(C.createElement("option")),
    lt.type = "checkbox",
    le.checkOn = "" !== lt.value,
    le.optSelected = ct.selected,
    (lt = C.createElement("input")).value = "t",
    lt.type = "radio",
    le.radioValue = "t" === lt.value;
    var mt, xt = ce.expr.attrHandle;
    ce.fn.extend({
        attr: function(e, t) {
            return R(this, ce.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ce.removeAttr(this, e)
            })
        }
    }),
    ce.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)),
                void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!le.radioValue && "radio" === t && fe(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(D);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    mt = {
        set: function(e, t, n) {
            return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = xt[t] || ce.find.attr;
        xt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = xt[o],
            xt[o] = r,
            r = null != a(e, t, n) ? o : null,
            xt[o] = i),
            r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i
      , wt = /^(?:a|area)$/i;
    function Tt(e) {
        return (e.match(D) || []).join(" ")
    }
    function Ct(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function kt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || []
    }
    ce.fn.extend({
        prop: function(e, t) {
            return R(this, ce.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ce.propFix[e] || e]
            })
        }
    }),
    ce.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t,
                i = ce.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ce.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    le.optSelected || (ce.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ce.propFix[this.toLowerCase()] = this
    }),
    ce.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function(e) {
                ce(this).addClass(t.call(this, e, Ct(this)))
            }) : (e = kt(t)).length ? this.each(function() {
                if (r = Ct(this),
                n = 1 === this.nodeType && " " + Tt(r) + " ") {
                    for (o = 0; o < e.length; o++)
                        i = e[o],
                        n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = Tt(n),
                    r !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function(e) {
                ce(this).removeClass(t.call(this, e, Ct(this)))
            }) : arguments.length ? (e = kt(t)).length ? this.each(function() {
                if (r = Ct(this),
                n = 1 === this.nodeType && " " + Tt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " "))
                            n = n.replace(" " + i + " ", " ")
                    }
                    a = Tt(n),
                    r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, a = typeof t, s = "string" === a || Array.isArray(t);
            return v(t) ? this.each(function(e) {
                ce(this).toggleClass(t.call(this, e, Ct(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t),
            this.each(function() {
                if (s)
                    for (o = ce(this),
                    i = 0; i < e.length; i++)
                        r = e[i],
                        o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else
                    void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r),
                    this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var St = /\r/g;
    ce.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = v(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0
        }
    }),
    ce.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ce.find.attr(e, "value");
                    return null != t ? t : Tt(ce.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
                            if (t = ce(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = ce.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    ce.each(["radio", "checkbox"], function() {
        ce.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < ce.inArray(ce(e).val(), t)
            }
        },
        le.checkOn || (ce.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Et = ie.location
      , jt = {
        guid: Date.now()
    }
      , At = /\?/;
    ce.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new ie.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ;
    var Dt = /^(?:focusinfocus|focusoutblur)$/
      , Nt = function(e) {
        e.stopPropagation()
    };
    ce.extend(ce.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || C], d = ue.call(e, "type") ? e.type : e, h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || C,
            3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[ce.expando] ? e : new ce.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : ce.makeArray(t, [e]),
            c = ce.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !y(n)) {
                    for (s = c.delegateType || d,
                    Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null),
                ce.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, Nt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, Nt),
                ce.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = ce.extend(new ce.Event, n, {
                type: e,
                isSimulated: !0
            });
            ce.event.trigger(r, null, t)
        }
    }),
    ce.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ce.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return ce.event.trigger(e, t, n, !0)
        }
    });
    var qt = /\[\]$/
      , Lt = /\r?\n/g
      , Ht = /^(?:submit|button|image|reset|file)$/i
      , Ot = /^(?:input|select|textarea|keygen)/i;
    function Pt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            ce.each(e, function(e, t) {
                r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== x(e))
            i(n, e);
        else
            for (t in e)
                Pt(n + "[" + t + "]", e[t], r, i)
    }
    ce.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = v(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e))
            ce.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Pt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    ce.fn.extend({
        serialize: function() {
            return ce.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ce.prop(this, "elements");
                return e ? ce.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e))
            }).map(function(e, t) {
                var n = ce(this).val();
                return null == n ? null : Array.isArray(n) ? ce.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    });
    var Rt = /%20/g
      , Mt = /#.*$/
      , It = /([?&])_=[^&]*/
      , Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ft = /^(?:GET|HEAD)$/
      , $t = /^\/\//
      , Bt = {}
      , _t = {}
      , Xt = "*/".concat("*")
      , Ut = C.createElement("a");
    function zt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(D) || [];
            if (v(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Vt(t, i, o, a) {
        var s = {}
          , u = t === _t;
        function l(e) {
            var r;
            return s[e] = !0,
            ce.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Gt(e, t) {
        var n, r, i = ce.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ce.extend(!0, e, r),
        e
    }
    Ut.href = Et.href,
    ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ce.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e)
        },
        ajaxPrefilter: zt(Bt),
        ajaxTransport: zt(_t),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = ce.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event, x = ce.Deferred(), b = ce.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Wt.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""],
            null == v.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Ut.protocol + "//" + Ut.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)),
            Vt(Bt, v, t, T),
            h)
                return T;
            for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Ft.test(v.type),
            f = v.url.replace(Mt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Rt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(It, "$1"),
            o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o),
            v.url = f + o),
            v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]),
            ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = Vt(_t, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = ie.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && ie.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --ce.active || ce.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return ce.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ce.get(e, void 0, t, "script")
        }
    }),
    ce.each(["get", "post"], function(e, i) {
        ce[i] = function(e, t, n, r) {
            return v(t) && (r = r || n,
            n = t,
            t = void 0),
            ce.ajax(ce.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, ce.isPlainObject(e) && e))
        }
    }),
    ce.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    ce._evalUrl = function(e, t, n) {
        return ce.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                ce.globalEval(e, t, n)
            }
        })
    }
    ,
    ce.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (v(e) && (e = e.call(this[0])),
            t = ce(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return v(n) ? this.each(function(e) {
                ce(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = ce(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = v(t);
            return this.each(function(e) {
                ce(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ce(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    ce.expr.pseudos.hidden = function(e) {
        return !ce.expr.pseudos.visible(e)
    }
    ,
    ce.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    ce.ajaxSettings.xhr = function() {
        try {
            return new ie.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Yt = {
        0: 200,
        1223: 204
    }
      , Qt = ce.ajaxSettings.xhr();
    le.cors = !!Qt && "withCredentials"in Qt,
    le.ajax = Qt = !!Qt,
    ce.ajaxTransport(function(i) {
        var o, a;
        if (le.cors || Qt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && ie.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    ce.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    ce.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ce.globalEval(e),
                e
            }
        }
    }),
    ce.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    ce.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = ce("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    C.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Kt.pop() || ce.expando + "_" + jt.guid++;
            return this[e] = !0,
            e
        }
    }),
    ce.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || ce.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = ie[r],
            ie[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? ce(ie).removeProp(r) : ie[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Kt.push(r)),
                o && v(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Jt.childNodes.length),
    ce.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href,
        t.head.appendChild(r)) : t = C),
        o = !n && [],
        (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o),
        o && o.length && ce(o).remove(),
        ce.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    ce.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = Tt(e.slice(s)),
        e = e.slice(0, s)),
        v(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && ce.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    ce.expr.pseudos.animated = function(t) {
        return ce.grep(ce.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    ce.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = ce.css(e, "position"), c = ce(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = ce.css(e, "top"),
            u = ce.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            v(t) && (t = t.call(e, n, ce.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    ce.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    ce.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === ce.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0),
                    i.left += ce.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - ce.css(r, "marginTop", !0),
                    left: t.left - i.left - ce.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === ce.css(e, "position"))
                    e = e.offsetParent;
                return e || J
            })
        }
    }),
    ce.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function(e) {
            return R(this, function(e, t, n) {
                var r;
                if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    ce.each(["top", "left"], function(e, n) {
        ce.cssHooks[n] = Ye(le.pixelPosition, function(e, t) {
            if (t)
                return t = Ge(e, n),
                _e.test(t) ? ce(e).position()[n] + "px" : t
        })
    }),
    ce.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        ce.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            ce.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return R(this, function(e, t, n) {
                    var r;
                    return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ce.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ce.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        ce.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    ce.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        v(e))
            return r = ae.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(ae.call(arguments)))
            }
            ).guid = e.guid = e.guid || ce.guid++,
            i
    }
    ,
    ce.holdReady = function(e) {
        e ? ce.readyWait++ : ce.ready(!0)
    }
    ,
    ce.isArray = Array.isArray,
    ce.parseJSON = JSON.parse,
    ce.nodeName = fe,
    ce.isFunction = v,
    ce.isWindow = y,
    ce.camelCase = F,
    ce.type = x,
    ce.now = Date.now,
    ce.isNumeric = function(e) {
        var t = ce.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    ce.trim = function(e) {
        return null == e ? "" : (e + "").replace(en, "$1")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ce
    });
    var tn = ie.jQuery
      , nn = ie.$;
    return ce.noConflict = function(e) {
        return ie.$ === ce && (ie.$ = nn),
        e && ie.jQuery === ce && (ie.jQuery = tn),
        ce
    }
    ,
    "undefined" == typeof e && (ie.jQuery = ie.$ = ce),
    ce
});
;(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
}
)(this, function() {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var o = e.ownerDocument.defaultView
          , n = o.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }
    function n(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
            return e.ownerDocument.body;
        case '#document':
            return e.body;
        }
        var i = t(e)
          , r = i.overflow
          , p = i.overflowX
          , s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }
    function i(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    function r(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe
    }
    function p(e) {
        if (!e)
            return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function s(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
    }
    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode)
    }
    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , n = o ? e : t
          , i = o ? t : e
          , r = document.createRange();
        r.setStart(n, 0),
        r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i))
            return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host)
    }
    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top'
          , o = 'top' === t ? 'scrollTop' : 'scrollLeft'
          , n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement
              , r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , n = l(t, 'top')
          , i = l(t, 'left')
          , r = o ? -1 : 1;
        return e.top += n * r,
        e.bottom += n * r,
        e.left += i * r,
        e.right += i * r,
        e
    }
    function m(e, t) {
        var o = 'x' === t ? 'Left' : 'Top'
          , n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width']) + parseFloat(e['border' + n + 'Width'])
    }
    function h(e, t, o, n) {
        return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
    }
    function c(e) {
        var t = e.body
          , o = e.documentElement
          , n = r(10) && getComputedStyle(o);
        return {
            height: h('Height', t, o, n),
            width: h('Width', t, o, n)
        }
    }
    function g(e) {
        return le({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, 'top')
                  , i = l(e, 'left');
                o.top += n,
                o.left += i,
                o.bottom += n,
                o.right += i
            } else
                o = e.getBoundingClientRect()
        } catch (t) {}
        var p = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }
          , s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {}
          , d = s.width || e.clientWidth || p.width
          , a = s.height || e.clientHeight || p.height
          , f = e.offsetWidth - d
          , h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, 'x'),
            h -= m(u, 'y'),
            p.width -= f,
            p.height -= h
        }
        return g(p)
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , p = r(10)
          , s = 'HTML' === o.nodeName
          , d = u(e)
          , a = u(o)
          , l = n(e)
          , m = t(o)
          , h = parseFloat(m.borderTopWidth)
          , c = parseFloat(m.borderLeftWidth);
        i && s && (a.top = ee(a.top, 0),
        a.left = ee(a.left, 0));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height
        });
        if (b.marginTop = 0,
        b.marginLeft = 0,
        !p && s) {
            var w = parseFloat(m.marginTop)
              , y = parseFloat(m.marginLeft);
            b.top -= h - w,
            b.bottom -= h - w,
            b.left -= c - y,
            b.right -= c - y,
            b.marginTop = w,
            b.marginLeft = y
        }
        return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)),
        b
    }
    function w(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = e.ownerDocument.documentElement
          , n = b(e, o)
          , i = ee(o.clientWidth, window.innerWidth || 0)
          , r = ee(o.clientHeight, window.innerHeight || 0)
          , p = t ? 0 : l(o)
          , s = t ? 0 : l(o, 'left')
          , d = {
            top: p - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r
        };
        return g(d)
    }
    function y(e) {
        var n = e.nodeName;
        if ('BODY' === n || 'HTML' === n)
            return !1;
        if ('fixed' === t(e, 'position'))
            return !0;
        var i = o(e);
        return !!i && y(i)
    }
    function E(e) {
        if (!e || !e.parentElement || r())
            return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform'); )
            o = o.parentElement;
        return o || document.documentElement
    }
    function v(e, t, r, p) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , d = {
            top: 0,
            left: 0
        }
          , l = s ? E(e) : a(e, i(t));
        if ('viewport' === p)
            d = w(l, s);
        else {
            var f;
            'scrollParent' === p ? (f = n(o(t)),
            'BODY' === f.nodeName && (f = e.ownerDocument.documentElement)) : 'window' === p ? f = e.ownerDocument.documentElement : f = p;
            var m = b(f, l, s);
            if ('HTML' === f.nodeName && !y(l)) {
                var h = c(e.ownerDocument)
                  , g = h.height
                  , u = h.width;
                d.top += m.top - m.marginTop,
                d.bottom = g + m.top,
                d.left += m.left - m.marginLeft,
                d.right = u + m.left
            } else
                d = m
        }
        r = r || 0;
        var v = 'number' == typeof r;
        return d.left += v ? r : r.left || 0,
        d.top += v ? r : r.top || 0,
        d.right -= v ? r : r.right || 0,
        d.bottom -= v ? r : r.bottom || 0,
        d
    }
    function x(e) {
        var t = e.width
          , o = e.height;
        return t * o
    }
    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto'))
            return e;
        var p = v(o, n, r, i)
          , s = {
            top: {
                width: p.width,
                height: t.top - p.top
            },
            right: {
                width: p.right - t.right,
                height: p.height
            },
            bottom: {
                width: p.width,
                height: p.bottom - t.bottom
            },
            left: {
                width: t.left - p.left,
                height: p.height
            }
        }
          , d = Object.keys(s).map(function(e) {
            return le({
                key: e
            }, s[e], {
                area: x(s[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , a = d.filter(function(e) {
            var t = e.width
              , n = e.height;
            return t >= o.clientWidth && n >= o.clientHeight
        })
          , l = 0 < a.length ? a[0].key : d[0].key
          , f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }
    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
          , r = n ? E(t) : a(t, i(o));
        return b(o, r, n)
    }
    function S(e) {
        var t = e.ownerDocument.defaultView
          , o = t.getComputedStyle(e)
          , n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0)
          , i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0)
          , r = {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        };
        return r
    }
    function T(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function C(e, t, o) {
        o = o.split('-')[0];
        var n = S(e)
          , i = {
            width: n.width,
            height: n.height
        }
          , r = -1 !== ['right', 'left'].indexOf(o)
          , p = r ? 'top' : 'left'
          , s = r ? 'left' : 'top'
          , d = r ? 'height' : 'width'
          , a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2,
        i[s] = o === s ? t[s] - n[a] : t[T(s)],
        i
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function(e) {
                return e[t] === o
            });
        var n = D(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }
    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
        return i.forEach(function(t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper),
            o.offsets.reference = g(o.offsets.reference),
            o = n(o, t))
        }),
        o
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed),
            e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.positionFixed = this.options.positionFixed,
            e.offsets.popper = C(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute',
            e = P(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
            this.options.onCreate(e))
        }
    }
    function W(e, t) {
        return e.some(function(e) {
            var o = e.name
              , n = e.enabled;
            return n && o === t
        })
    }
    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n]
              , r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r])
                return r
        }
        return null
    }
    function H() {
        return this.state.isDestroyed = !0,
        W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'),
        this.popper.style.position = '',
        this.popper.style.top = '',
        this.popper.style.left = '',
        this.popper.style.right = '',
        this.popper.style.bottom = '',
        this.popper.style.willChange = '',
        this.popper.style[B('transform')] = ''),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName
          , p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }),
        r || M(n(p.parentNode), t, o, i),
        i.push(p)
    }
    function F(e, t, o, i) {
        o.updateBound = i,
        A(e).addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents),
        o.scrollElement = r,
        o.eventsEnabled = !0,
        o
    }
    function I() {
        this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function R(e, t) {
        return A(e).removeEventListener('resize', t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t
    }
    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = R(this.reference, this.state))
    }
    function Y(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function V(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'),
            e.style[o] = t[o] + n
        })
    }
    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }
    function q(e, t) {
        var o = e.offsets
          , n = o.popper
          , i = o.reference
          , r = $
          , p = function(e) {
            return e
        }
          , s = r(i.width)
          , d = r(n.width)
          , a = -1 !== ['left', 'right'].indexOf(e.placement)
          , l = -1 !== e.placement.indexOf('-')
          , f = t ? a || l || s % 2 == d % 2 ? r : Z : p
          , m = t ? r : p;
        return {
            left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
            top: m(n.top),
            bottom: m(n.bottom),
            right: f(n.right)
        }
    }
    function K(e, t, o) {
        var n = D(e, function(e) {
            var o = e.name;
            return o === t
        })
          , i = !!n && e.some(function(e) {
            return e.name === o && e.enabled && e.order < n.order
        });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }
    function z(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }
    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = he.indexOf(e)
          , n = he.slice(o + 1).concat(he.slice(0, o));
        return t ? n.reverse() : n
    }
    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
          , r = +i[1]
          , p = i[2];
        if (!r)
            return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
            case '%p':
                s = o;
                break;
            case '%':
            case '%r':
            default:
                s = n;
            }
            var d = g(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0),
            a / 100 * r
        }
        return r
    }
    function X(e, t, o, n) {
        var i = [0, 0]
          , r = -1 !== ['right', 'left'].indexOf(n)
          , p = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , s = p.indexOf(D(p, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/
          , a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width'
              , p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t,
                p = !0,
                e) : p ? (e[e.length - 1] += t,
                p = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return _(e, i, t, o)
            })
        }),
        a.forEach(function(e, t) {
            e.forEach(function(o, n) {
                Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }),
        i
    }
    function J(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0];
        return o = Y(+n) ? [+n, 0] : X(n, p, s, d),
        'left' === d ? (p.top += o[0],
        p.left -= o[1]) : 'right' === d ? (p.top += o[0],
        p.left += o[1]) : 'top' === d ? (p.left += o[0],
        p.top -= o[1]) : 'bottom' === d && (p.left += o[0],
        p.top += o[1]),
        e.popper = p,
        e
    }
    var Q = Math.min
      , Z = Math.floor
      , $ = Math.round
      , ee = Math.max
      , te = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator
      , oe = function() {
        for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1)
            if (te && 0 <= navigator.userAgent.indexOf(e[t]))
                return 1;
        return 0
    }()
      , ne = te && window.Promise
      , ie = ne ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, oe))
        }
    }
      , re = te && !!(window.MSInputMethodContext && document.documentMode)
      , pe = te && /MSIE 10/.test(navigator.userAgent)
      , se = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
      , de = function() {
        function e(e, t) {
            for (var o, n = 0; n < t.length; n++)
                o = t[n],
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                'value'in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
        }
        return function(t, o, n) {
            return o && e(t.prototype, o),
            n && e(t, n),
            t
        }
    }()
      , ae = function(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o,
        e
    }
      , le = Object.assign || function(e) {
        for (var t, o = 1; o < arguments.length; o++)
            for (var n in t = arguments[o],
            t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    }
      , fe = te && /Firefox/i.test(navigator.userAgent)
      , me = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']
      , he = me.slice(3)
      , ce = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
    }
      , ge = function() {
        function t(o, n) {
            var i = this
              , r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            se(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update)
            }
            ,
            this.update = ie(this.update.bind(this)),
            this.options = le({}, t.Defaults, r),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = o && o.jquery ? o[0] : o,
            this.popper = n && n.jquery ? n[0] : n,
            this.options.modifiers = {},
            Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return le({
                    name: e
                }, i.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
            }),
            this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(),
            this.state.eventsEnabled = p
        }
        return de(t, [{
            key: 'update',
            value: function() {
                return k.call(this)
            }
        }, {
            key: 'destroy',
            value: function() {
                return H.call(this)
            }
        }, {
            key: 'enableEventListeners',
            value: function() {
                return I.call(this)
            }
        }, {
            key: 'disableEventListeners',
            value: function() {
                return U.call(this)
            }
        }]),
        t
    }();
    return ge.Utils = ('undefined' == typeof window ? global : window).PopperUtils,
    ge.placements = me,
    ge.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets
                          , r = i.reference
                          , p = i.popper
                          , s = -1 !== ['bottom', 'top'].indexOf(o)
                          , d = s ? 'left' : 'top'
                          , a = s ? 'width' : 'height'
                          , l = {
                            start: ae({}, d, r[d]),
                            end: ae({}, d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = le({}, p, l[n])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: J,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = B('transform')
                      , i = e.instance.popper.style
                      , r = i.top
                      , s = i.left
                      , d = i[n];
                    i.top = '',
                    i.left = '',
                    i[n] = '';
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r,
                    i.left = s,
                    i[n] = d,
                    t.boundaries = a;
                    var l = t.priority
                      , f = e.offsets.popper
                      , m = {
                        primary: function(e) {
                            var o = f[e];
                            return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])),
                            ae({}, e, o)
                        },
                        secondary: function(e) {
                            var o = 'right' === e ? 'left' : 'top'
                              , n = f[o];
                            return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))),
                            ae({}, o, n)
                        }
                    };
                    return l.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        f = le({}, f, m[t](e))
                    }),
                    e.offsets.popper = f,
                    e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , o = t.popper
                      , n = t.reference
                      , i = e.placement.split('-')[0]
                      , r = Z
                      , p = -1 !== ['top', 'bottom'].indexOf(i)
                      , s = p ? 'right' : 'bottom'
                      , d = p ? 'left' : 'top'
                      , a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
                    o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var n;
                    if (!K(e.instance.modifiers, 'arrow', 'keepTogether'))
                        return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i),
                        !i)
                            return e;
                    } else if (!e.instance.popper.contains(i))
                        return console.warn('WARNING: `arrow.element` must be child of its popper element!'),
                        e;
                    var r = e.placement.split('-')[0]
                      , p = e.offsets
                      , s = p.popper
                      , d = p.reference
                      , a = -1 !== ['left', 'right'].indexOf(r)
                      , l = a ? 'height' : 'width'
                      , f = a ? 'Top' : 'Left'
                      , m = f.toLowerCase()
                      , h = a ? 'left' : 'top'
                      , c = a ? 'bottom' : 'right'
                      , u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
                    d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]),
                    e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2
                      , w = t(e.instance.popper)
                      , y = parseFloat(w['margin' + f])
                      , E = parseFloat(w['border' + f + 'Width'])
                      , v = b - e.offsets.popper[m] - y - E;
                    return v = ee(Q(s[l] - u, v), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = (n = {},
                    ae(n, m, $(v)),
                    ae(n, h, ''),
                    n),
                    e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner'))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                      , n = e.placement.split('-')[0]
                      , i = T(n)
                      , r = e.placement.split('-')[1] || ''
                      , p = [];
                    switch (t.behavior) {
                    case ce.FLIP:
                        p = [n, i];
                        break;
                    case ce.CLOCKWISE:
                        p = G(n);
                        break;
                    case ce.COUNTERCLOCKWISE:
                        p = G(n, !0);
                        break;
                    default:
                        p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (n !== s || p.length === d + 1)
                            return e;
                        n = e.placement.split('-')[0],
                        i = T(n);
                        var a = e.offsets.popper
                          , l = e.offsets.reference
                          , f = Z
                          , m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom)
                          , h = f(a.left) < f(o.left)
                          , c = f(a.right) > f(o.right)
                          , g = f(a.top) < f(o.top)
                          , u = f(a.bottom) > f(o.bottom)
                          , b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u
                          , w = -1 !== ['top', 'bottom'].indexOf(n)
                          , y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u)
                          , E = !!t.flipVariationsByContent && (w && 'start' === r && c || w && 'end' === r && h || !w && 'start' === r && u || !w && 'end' === r && g)
                          , v = y || E;
                        (m || b || v) && (e.flipped = !0,
                        (m || b) && (n = p[d + 1]),
                        v && (r = z(r)),
                        e.placement = n + (r ? '-' + r : ''),
                        e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)),
                        e = P(e.instance.modifiers, e, 'flip'))
                    }),
                    e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport',
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , n = e.offsets
                      , i = n.popper
                      , r = n.reference
                      , p = -1 !== ['left', 'right'].indexOf(o)
                      , s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0),
                    e.placement = T(t),
                    e.offsets.popper = g(i),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!K(e.instance.modifiers, 'hide', 'preventOverflow'))
                        return e;
                    var t = e.offsets.reference
                      , o = D(e.instance.modifiers, function(e) {
                        return 'preventOverflow' === e.name
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x
                      , n = t.y
                      , i = e.offsets.popper
                      , r = D(e.instance.modifiers, function(e) {
                        return 'applyStyle' === e.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = {
                        position: i.position
                    }, h = q(e, 2 > window.devicePixelRatio || !fe), c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = B('transform');
                    if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top,
                    s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left,
                    a && b)
                        m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)',
                        m[c] = 0,
                        m[g] = 0,
                        m.willChange = 'transform';
                    else {
                        var w = 'bottom' == c ? -1 : 1
                          , y = 'right' == g ? -1 : 1;
                        m[c] = d * w,
                        m[g] = s * y,
                        m.willChange = c + ', ' + g
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = le({}, E, e.attributes),
                    e.styles = le({}, m, e.styles),
                    e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return V(e.instance.popper, e.styles),
                    j(e.instance.popper, e.attributes),
                    e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed)
                      , p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p),
                    V(t, {
                        position: o.positionFixed ? 'fixed' : 'absolute'
                    }),
                    o
                },
                gpuAcceleration: void 0
            }
        }
    },
    ge
});
;/*!
* Bootstrap v5.3.0-alpha3 (https://getbootstrap.com/)
* Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper)
}(this, (function(t) {
    "use strict";
    function e(t) {
        const e = Object.create(null, {
            [Symbol.toStringTag]: {
                value: "Module"
            }
        });
        if (t)
            for (const s in t)
                if ("default" !== s) {
                    const i = Object.getOwnPropertyDescriptor(t, s);
                    Object.defineProperty(e, s, i.get ? i : {
                        enumerable: !0,
                        get: ()=>t[s]
                    })
                }
        return e.default = t,
        Object.freeze(e)
    }
    const s = e(t)
      , i = new Map
      , n = {
        set(t, e, s) {
            i.has(t) || i.set(t, new Map);
            const n = i.get(t);
            n.has(e) || 0 === n.size ? n.set(e, s) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
        },
        get: (t,e)=>i.has(t) && i.get(t).get(e) || null,
        remove(t, e) {
            if (!i.has(t))
                return;
            const s = i.get(t);
            s.delete(e),
            0 === s.size && i.delete(t)
        }
    }
      , o = "transitionend"
      , r = t=>(t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, ((t,e)=>`#${CSS.escape(e)}`))),
    t)
      , a = t=>{
        t.dispatchEvent(new Event(o))
    }
      , l = t=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
    void 0 !== t.nodeType)
      , c = t=>l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(r(t)) : null
      , h = t=>{
        if (!l(t) || 0 === t.getClientRects().length)
            return !1;
        const e = "visible" === getComputedStyle(t).getPropertyValue("visibility")
          , s = t.closest("details:not([open])");
        if (!s)
            return e;
        if (s !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== s)
                return !1;
            if (null === e)
                return !1
        }
        return e
    }
      , d = t=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
      , u = t=>{
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? u(t.parentNode) : null
    }
      , _ = ()=>{}
      , g = t=>{
        t.offsetHeight
    }
      , f = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
      , m = []
      , p = ()=>"rtl" === document.documentElement.dir
      , b = t=>{
        var e;
        e = ()=>{
            const e = f();
            if (e) {
                const s = t.NAME
                  , i = e.fn[s];
                e.fn[s] = t.jQueryInterface,
                e.fn[s].Constructor = t,
                e.fn[s].noConflict = ()=>(e.fn[s] = i,
                t.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", (()=>{
            for (const t of m)
                t()
        }
        )),
        m.push(e)) : e()
    }
      , v = (t,e=[],s=t)=>"function" == typeof t ? t(...e) : s
      , y = (t,e,s=!0)=>{
        if (!s)
            return void v(t);
        const i = (t=>{
            if (!t)
                return 0;
            let {transitionDuration: e, transitionDelay: s} = window.getComputedStyle(t);
            const i = Number.parseFloat(e)
              , n = Number.parseFloat(s);
            return i || n ? (e = e.split(",")[0],
            s = s.split(",")[0],
            1e3 * (Number.parseFloat(e) + Number.parseFloat(s))) : 0
        }
        )(e) + 5;
        let n = !1;
        const r = ({target: s})=>{
            s === e && (n = !0,
            e.removeEventListener(o, r),
            v(t))
        }
        ;
        e.addEventListener(o, r),
        setTimeout((()=>{
            n || a(e)
        }
        ), i)
    }
      , w = (t,e,s,i)=>{
        const n = t.length;
        let o = t.indexOf(e);
        return -1 === o ? !s && i ? t[n - 1] : t[0] : (o += s ? 1 : -1,
        i && (o = (o + n) % n),
        t[Math.max(0, Math.min(o, n - 1))])
    }
      , A = /[^.]*(?=\..*)\.|.*/
      , E = /\..*/
      , C = /::\d+$/
      , T = {};
    let k = 1;
    const S = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , L = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function O(t, e) {
        return e && `${e}::${k++}` || t.uidEvent || k++
    }
    function I(t) {
        const e = O(t);
        return t.uidEvent = e,
        T[e] = T[e] || {},
        T[e]
    }
    function D(t, e, s=null) {
        return Object.values(t).find((t=>t.callable === e && t.delegationSelector === s))
    }
    function N(t, e, s) {
        const i = "string" == typeof e
          , n = i ? s : e || s;
        let o = j(t);
        return L.has(o) || (o = t),
        [i, n, o]
    }
    function P(t, e, s, i, n) {
        if ("string" != typeof e || !t)
            return;
        let[o,r,a] = N(e, s, i);
        if (e in S) {
            const t = t=>function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                    return t.call(this, e)
            }
            ;
            r = t(r)
        }
        const l = I(t)
          , c = l[a] || (l[a] = {})
          , h = D(c, r, o ? s : null);
        if (h)
            return void (h.oneOff = h.oneOff && n);
        const d = O(r, e.replace(A, ""))
          , u = o ? function(t, e, s) {
            return function i(n) {
                const o = t.querySelectorAll(e);
                for (let {target: r} = n; r && r !== this; r = r.parentNode)
                    for (const a of o)
                        if (a === r)
                            return $(n, {
                                delegateTarget: r
                            }),
                            i.oneOff && F.off(t, n.type, e, s),
                            s.apply(r, [n])
            }
        }(t, s, r) : function(t, e) {
            return function s(i) {
                return $(i, {
                    delegateTarget: t
                }),
                s.oneOff && F.off(t, i.type, e),
                e.apply(t, [i])
            }
        }(t, r);
        u.delegationSelector = o ? s : null,
        u.callable = r,
        u.oneOff = n,
        u.uidEvent = d,
        c[d] = u,
        t.addEventListener(a, u, o)
    }
    function x(t, e, s, i, n) {
        const o = D(e[s], i, n);
        o && (t.removeEventListener(s, o, Boolean(n)),
        delete e[s][o.uidEvent])
    }
    function M(t, e, s, i) {
        const n = e[s] || {};
        for (const [o,r] of Object.entries(n))
            o.includes(i) && x(t, e, s, r.callable, r.delegationSelector)
    }
    function j(t) {
        return t = t.replace(E, ""),
        S[t] || t
    }
    const F = {
        on(t, e, s, i) {
            P(t, e, s, i, !1)
        },
        one(t, e, s, i) {
            P(t, e, s, i, !0)
        },
        off(t, e, s, i) {
            if ("string" != typeof e || !t)
                return;
            const [n,o,r] = N(e, s, i)
              , a = r !== e
              , l = I(t)
              , c = l[r] || {}
              , h = e.startsWith(".");
            if (void 0 === o) {
                if (h)
                    for (const s of Object.keys(l))
                        M(t, l, s, e.slice(1));
                for (const [s,i] of Object.entries(c)) {
                    const n = s.replace(C, "");
                    a && !e.includes(n) || x(t, l, r, i.callable, i.delegationSelector)
                }
            } else {
                if (!Object.keys(c).length)
                    return;
                x(t, l, r, o, n ? s : null)
            }
        },
        trigger(t, e, s) {
            if ("string" != typeof e || !t)
                return null;
            const i = f();
            let n = null
              , o = !0
              , r = !0
              , a = !1;
            e !== j(e) && i && (n = i.Event(e, s),
            i(t).trigger(n),
            o = !n.isPropagationStopped(),
            r = !n.isImmediatePropagationStopped(),
            a = n.isDefaultPrevented());
            const l = $(new Event(e,{
                bubbles: o,
                cancelable: !0
            }), s);
            return a && l.preventDefault(),
            r && t.dispatchEvent(l),
            l.defaultPrevented && n && n.preventDefault(),
            l
        }
    };
    function $(t, e={}) {
        for (const [s,i] of Object.entries(e))
            try {
                t[s] = i
            } catch (e) {
                Object.defineProperty(t, s, {
                    configurable: !0,
                    get: ()=>i
                })
            }
        return t
    }
    function z(t) {
        if ("true" === t)
            return !0;
        if ("false" === t)
            return !1;
        if (t === Number(t).toString())
            return Number(t);
        if ("" === t || "null" === t)
            return null;
        if ("string" != typeof t)
            return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }
    function H(t) {
        return t.replace(/[A-Z]/g, (t=>`-${t.toLowerCase()}`))
    }
    const B = {
        setDataAttribute(t, e, s) {
            t.setAttribute(`data-bs-${H(e)}`, s)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${H(e)}`)
        },
        getDataAttributes(t) {
            if (!t)
                return {};
            const e = {}
              , s = Object.keys(t.dataset).filter((t=>t.startsWith("bs") && !t.startsWith("bsConfig")));
            for (const i of s) {
                let s = i.replace(/^bs/, "");
                s = s.charAt(0).toLowerCase() + s.slice(1, s.length),
                e[s] = z(t.dataset[i])
            }
            return e
        },
        getDataAttribute: (t,e)=>z(t.getAttribute(`data-bs-${H(e)}`))
    };
    class q {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        _configAfterMerge(t) {
            return t
        }
        _mergeConfigObj(t, e) {
            const s = l(e) ? B.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof s ? s : {},
                ...l(e) ? B.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            }
        }
        _typeCheckConfig(t, e=this.constructor.DefaultType) {
            for (const [i,n] of Object.entries(e)) {
                const e = t[i]
                  , o = l(e) ? "element" : null == (s = e) ? `${s}` : Object.prototype.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(n).test(o))
                    throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${n}".`)
            }
            var s
        }
    }
    class W extends q {
        constructor(t, e) {
            super(),
            (t = c(t)) && (this._element = t,
            this._config = this._getConfig(e),
            n.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            n.remove(this._element, this.constructor.DATA_KEY),
            F.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this))
                this[t] = null
        }
        _queueCallback(t, e, s=!0) {
            y(t, e, s)
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        static getInstance(t) {
            return n.get(c(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e={}) {
            return this.getInstance(t) || new this(t,"object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.3.0-alpha2"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }
    const R = t=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let s = t.getAttribute("href");
            if (!s || !s.includes("#") && !s.startsWith("."))
                return null;
            s.includes("#") && !s.startsWith("#") && (s = `#${s.split("#")[1]}`),
            e = s && "#" !== s ? s.trim() : null
        }
        return r(e)
    }
      , V = {
        find: (t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t,e=document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),
        parents(t, e) {
            const s = [];
            let i = t.parentNode.closest(e);
            for (; i; )
                s.push(i),
                i = i.parentNode.closest(e);
            return s
        },
        prev(t, e) {
            let s = t.previousElementSibling;
            for (; s; ) {
                if (s.matches(e))
                    return [s];
                s = s.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let s = t.nextElementSibling;
            for (; s; ) {
                if (s.matches(e))
                    return [s];
                s = s.nextElementSibling
            }
            return []
        },
        focusableChildren(t) {
            const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");
            return this.find(e, t).filter((t=>!d(t) && h(t)))
        },
        getSelectorFromElement(t) {
            const e = R(t);
            return e && V.findOne(e) ? e : null
        },
        getElementFromSelector(t) {
            const e = R(t);
            return e ? V.findOne(e) : null
        },
        getMultipleElementsFromSelector(t) {
            const e = R(t);
            return e ? V.find(e) : []
        }
    }
      , K = (t,e="hide")=>{
        const s = `click.dismiss ${t.EVENT_KEY}`
          , i = t.NAME;
        F.on(document, s, `[data-bs-dismiss="${i}"]`, (function(s) {
            if (["A", "AREA"].includes(this.tagName) && s.preventDefault(),
            d(this))
                return;
            const n = V.getElementFromSelector(this) || this.closest(`.${i}`);
            t.getOrCreateInstance(n)[e]()
        }
        ))
    }
    ;
    class Q extends W {
        static get NAME() {
            return "alert"
        }
        close() {
            if (F.trigger(this._element, "close.bs.alert").defaultPrevented)
                return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((()=>this._destroyElement()), this._element, t)
        }
        _destroyElement() {
            this._element.remove(),
            F.trigger(this._element, "closed.bs.alert"),
            this.dispose()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    K(Q, "close"),
    b(Q);
    const X = '[data-bs-toggle="button"]';
    class Y extends W {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Y.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }
            ))
        }
    }
    F.on(document, "click.bs.button.data-api", X, (t=>{
        t.preventDefault();
        const e = t.target.closest(X);
        Y.getOrCreateInstance(e).toggle()
    }
    )),
    b(Y);
    const U = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }
      , G = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class J extends q {
        constructor(t, e) {
            super(),
            this._element = t,
            t && J.isSupported() && (this._config = this._getConfig(e),
            this._deltaX = 0,
            this._supportPointerEvents = Boolean(window.PointerEvent),
            this._initEvents())
        }
        static get Default() {
            return U
        }
        static get DefaultType() {
            return G
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            F.off(this._element, ".bs.swipe")
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX),
            this._handleSwipe(),
            v(this._config.endCallback)
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40)
                return;
            const e = t / this._deltaX;
            this._deltaX = 0,
            e && v(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? (F.on(this._element, "pointerdown.bs.swipe", (t=>this._start(t))),
            F.on(this._element, "pointerup.bs.swipe", (t=>this._end(t))),
            this._element.classList.add("pointer-event")) : (F.on(this._element, "touchstart.bs.swipe", (t=>this._start(t))),
            F.on(this._element, "touchmove.bs.swipe", (t=>this._move(t))),
            F.on(this._element, "touchend.bs.swipe", (t=>this._end(t))))
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }
        static isSupported() {
            return "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    const Z = "next"
      , tt = "prev"
      , et = "left"
      , st = "right"
      , it = "slid.bs.carousel"
      , nt = "carousel"
      , ot = "active"
      , rt = {
        ArrowLeft: st,
        ArrowRight: et
    }
      , at = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }
      , lt = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class ct extends W {
        constructor(t, e) {
            super(t, e),
            this._interval = null,
            this._activeElement = null,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._swipeHelper = null,
            this._indicatorsElement = V.findOne(".carousel-indicators", this._element),
            this._addEventListeners(),
            this._config.ride === nt && this.cycle()
        }
        static get Default() {
            return at
        }
        static get DefaultType() {
            return lt
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(Z)
        }
        nextWhenVisible() {
            !document.hidden && h(this._element) && this.next()
        }
        prev() {
            this._slide(tt)
        }
        pause() {
            this._isSliding && a(this._element),
            this._clearInterval()
        }
        cycle() {
            this._clearInterval(),
            this._updateInterval(),
            this._interval = setInterval((()=>this.nextWhenVisible()), this._config.interval)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? F.one(this._element, it, (()=>this.cycle())) : this.cycle())
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void F.one(this._element, it, (()=>this.to(t)));
            const s = this._getItemIndex(this._getActive());
            if (s === t)
                return;
            const i = t > s ? Z : tt;
            this._slide(i, e[t])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(),
            super.dispose()
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval,
            t
        }
        _addEventListeners() {
            this._config.keyboard && F.on(this._element, "keydown.bs.carousel", (t=>this._keydown(t))),
            "hover" === this._config.pause && (F.on(this._element, "mouseenter.bs.carousel", (()=>this.pause())),
            F.on(this._element, "mouseleave.bs.carousel", (()=>this._maybeEnableCycle()))),
            this._config.touch && J.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const t of V.find(".carousel-item img", this._element))
                F.on(t, "dragstart.bs.carousel", (t=>t.preventDefault()));
            const t = {
                leftCallback: ()=>this._slide(this._directionToOrder(et)),
                rightCallback: ()=>this._slide(this._directionToOrder(st)),
                endCallback: ()=>{
                    "hover" === this._config.pause && (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    this.touchTimeout = setTimeout((()=>this._maybeEnableCycle()), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new J(this._element,t)
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName))
                return;
            const e = rt[t.key];
            e && (t.preventDefault(),
            this._slide(this._directionToOrder(e)))
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement)
                return;
            const e = V.findOne(".active", this._indicatorsElement);
            e.classList.remove(ot),
            e.removeAttribute("aria-current");
            const s = V.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            s && (s.classList.add(ot),
            s.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t)
                return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval
        }
        _slide(t, e=null) {
            if (this._isSliding)
                return;
            const s = this._getActive()
              , i = t === Z
              , n = e || w(this._getItems(), s, i, this._config.wrap);
            if (n === s)
                return;
            const o = this._getItemIndex(n)
              , r = e=>F.trigger(this._element, e, {
                relatedTarget: n,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(s),
                to: o
            });
            if (r("slide.bs.carousel").defaultPrevented)
                return;
            if (!s || !n)
                return;
            const a = Boolean(this._interval);
            this.pause(),
            this._isSliding = !0,
            this._setActiveIndicatorElement(o),
            this._activeElement = n;
            const l = i ? "carousel-item-start" : "carousel-item-end"
              , c = i ? "carousel-item-next" : "carousel-item-prev";
            n.classList.add(c),
            g(n),
            s.classList.add(l),
            n.classList.add(l),
            this._queueCallback((()=>{
                n.classList.remove(l, c),
                n.classList.add(ot),
                s.classList.remove(ot, c, l),
                this._isSliding = !1,
                r(it)
            }
            ), s, this._isAnimated()),
            a && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return V.findOne(".active.carousel-item", this._element)
        }
        _getItems() {
            return V.find(".carousel-item", this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval),
            this._interval = null)
        }
        _directionToOrder(t) {
            return p() ? t === et ? tt : Z : t === et ? Z : tt
        }
        _orderToDirection(t) {
            return p() ? t === tt ? et : st : t === tt ? st : et
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = ct.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                            throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else
                    e.to(t)
            }
            ))
        }
    }
    F.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", (function(t) {
        const e = V.getElementFromSelector(this);
        if (!e || !e.classList.contains(nt))
            return;
        t.preventDefault();
        const s = ct.getOrCreateInstance(e)
          , i = this.getAttribute("data-bs-slide-to");
        return i ? (s.to(i),
        void s._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (s.next(),
        void s._maybeEnableCycle()) : (s.prev(),
        void s._maybeEnableCycle())
    }
    )),
    F.on(window, "load.bs.carousel.data-api", (()=>{
        const t = V.find('[data-bs-ride="carousel"]');
        for (const e of t)
            ct.getOrCreateInstance(e)
    }
    )),
    b(ct);
    const ht = "show"
      , dt = "collapse"
      , ut = "collapsing"
      , _t = '[data-bs-toggle="collapse"]'
      , gt = {
        parent: null,
        toggle: !0
    }
      , ft = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class mt extends W {
        constructor(t, e) {
            super(t, e),
            this._isTransitioning = !1,
            this._triggerArray = [];
            const s = V.find(_t);
            for (const t of s) {
                const e = V.getSelectorFromElement(t)
                  , s = V.find(e).filter((t=>t === this._element));
                null !== e && s.length && this._triggerArray.push(t)
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return gt
        }
        static get DefaultType() {
            return ft
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown())
                return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t !== this._element)).map((t=>mt.getOrCreateInstance(t, {
                toggle: !1
            })))),
            t.length && t[0]._isTransitioning)
                return;
            if (F.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            for (const e of t)
                e.hide();
            const e = this._getDimension();
            this._element.classList.remove(dt),
            this._element.classList.add(ut),
            this._element.style[e] = 0,
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            this._isTransitioning = !0;
            const s = `scroll ${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback((()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(ut),
                this._element.classList.add(dt, ht),
                this._element.style[e] = "",
                F.trigger(this._element, "shown.bs.collapse")
            }
            ), this._element, !0),
            this._element.style[e] = `${this._element[s]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown())
                return;
            if (F.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
            g(this._element),
            this._element.classList.add(ut),
            this._element.classList.remove(dt, ht);
            for (const t of this._triggerArray) {
                const e = V.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0,
            this._element.style[t] = "",
            this._queueCallback((()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(ut),
                this._element.classList.add(dt),
                F.trigger(this._element, "hidden.bs.collapse")
            }
            ), this._element, !0)
        }
        _isShown(t=this._element) {
            return t.classList.contains(ht)
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle),
            t.parent = c(t.parent),
            t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent)
                return;
            const t = this._getFirstLevelChildren(_t);
            for (const e of t) {
                const t = V.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
            }
        }
        _getFirstLevelChildren(t) {
            const e = V.find(":scope .collapse .collapse", this._config.parent);
            return V.find(t, this._config.parent).filter((t=>!e.includes(t)))
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const s of t)
                    s.classList.toggle("collapsed", !e),
                    s.setAttribute("aria-expanded", e)
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
            this.each((function() {
                const s = mt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === s[t])
                        throw new TypeError(`No method named "${t}"`);
                    s[t]()
                }
            }
            ))
        }
    }
    F.on(document, "click.bs.collapse.data-api", _t, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        for (const t of V.getMultipleElementsFromSelector(this))
            mt.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
    }
    )),
    b(mt);
    const pt = "dropdown"
      , bt = "ArrowUp"
      , vt = "ArrowDown"
      , yt = "click.bs.dropdown.data-api"
      , wt = "keydown.bs.dropdown.data-api"
      , At = "show"
      , Et = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
      , Ct = `${Et}.show`
      , Tt = ".dropdown-menu"
      , kt = p() ? "top-end" : "top-start"
      , St = p() ? "top-start" : "top-end"
      , Lt = p() ? "bottom-end" : "bottom-start"
      , Ot = p() ? "bottom-start" : "bottom-end"
      , It = p() ? "left-start" : "right-start"
      , Dt = p() ? "right-start" : "left-start"
      , Nt = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
    }
      , Pt = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class xt extends W {
        constructor(t, e) {
            super(t, e),
            this._popper = null,
            this._parent = this._element.parentNode,
            this._menu = V.next(this._element, Tt)[0] || V.prev(this._element, Tt)[0] || V.findOne(Tt, this._parent),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return Nt
        }
        static get DefaultType() {
            return Pt
        }
        static get NAME() {
            return pt
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (d(this._element) || this._isShown())
                return;
            const t = {
                relatedTarget: this._element
            };
            if (!F.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                if (this._createPopper(),
                "ontouchstart"in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (const t of [].concat(...document.body.children))
                        F.on(t, "mouseover", _);
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(At),
                this._element.classList.add(At),
                F.trigger(this._element, "shown.bs.dropdown", t)
            }
        }
        hide() {
            if (d(this._element) || !this._isShown())
                return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(t) {
            if (!F.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
                if ("ontouchstart"in document.documentElement)
                    for (const t of [].concat(...document.body.children))
                        F.off(t, "mouseover", _);
                this._popper && this._popper.destroy(),
                this._menu.classList.remove(At),
                this._element.classList.remove(At),
                this._element.setAttribute("aria-expanded", "false"),
                B.removeDataAttribute(this._menu, "popper"),
                F.trigger(this._element, "hidden.bs.dropdown", t)
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${pt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper() {
            if (void 0 === s)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : l(this._config.reference) ? t = c(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = s.createPopper(t, this._menu, e)
        }
        _isShown() {
            return this._menu.classList.contains(At)
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend"))
                return It;
            if (t.classList.contains("dropstart"))
                return Dt;
            if (t.classList.contains("dropup-center"))
                return "top";
            if (t.classList.contains("dropdown-center"))
                return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? St : kt : e ? Ot : Lt
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"),
            t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ...v(this._config.popperConfig, [t])
            }
        }
        _selectMenuItem({key: t, target: e}) {
            const s = V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t=>h(t)));
            s.length && w(s, e, t === vt, !s.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = xt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key)
                return;
            const e = V.find(Ct);
            for (const s of e) {
                const e = xt.getInstance(s);
                if (!e || !1 === e._config.autoClose)
                    continue;
                const i = t.composedPath()
                  , n = i.includes(e._menu);
                if (i.includes(e._element) || "inside" === e._config.autoClose && !n || "outside" === e._config.autoClose && n)
                    continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
                    continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t),
                e._completeHide(o)
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName)
              , s = "Escape" === t.key
              , i = [bt, vt].includes(t.key);
            if (!i && !s)
                return;
            if (e && !s)
                return;
            t.preventDefault();
            const n = this.matches(Et) ? this : V.prev(this, Et)[0] || V.next(this, Et)[0] || V.findOne(Et, t.delegateTarget.parentNode)
              , o = xt.getOrCreateInstance(n);
            if (i)
                return t.stopPropagation(),
                o.show(),
                void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(),
            o.hide(),
            n.focus())
        }
    }
    F.on(document, wt, Et, xt.dataApiKeydownHandler),
    F.on(document, wt, Tt, xt.dataApiKeydownHandler),
    F.on(document, yt, xt.clearMenus),
    F.on(document, "keyup.bs.dropdown.data-api", xt.clearMenus),
    F.on(document, yt, Et, (function(t) {
        t.preventDefault(),
        xt.getOrCreateInstance(this).toggle()
    }
    )),
    b(xt);
    const Mt = "show"
      , jt = "mousedown.bs.backdrop"
      , Ft = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }
      , $t = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class zt extends q {
        constructor(t) {
            super(),
            this._config = this._getConfig(t),
            this._isAppended = !1,
            this._element = null
        }
        static get Default() {
            return Ft
        }
        static get DefaultType() {
            return $t
        }
        static get NAME() {
            return "backdrop"
        }
        show(t) {
            if (!this._config.isVisible)
                return void v(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && g(e),
            e.classList.add(Mt),
            this._emulateAnimation((()=>{
                v(t)
            }
            ))
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Mt),
            this._emulateAnimation((()=>{
                this.dispose(),
                v(t)
            }
            ))) : v(t)
        }
        dispose() {
            this._isAppended && (F.off(this._element, jt),
            this._element.remove(),
            this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className,
                this._config.isAnimated && t.classList.add("fade"),
                this._element = t
            }
            return this._element
        }
        _configAfterMerge(t) {
            return t.rootElement = c(t.rootElement),
            t
        }
        _append() {
            if (this._isAppended)
                return;
            const t = this._getElement();
            this._config.rootElement.append(t),
            F.on(t, jt, (()=>{
                v(this._config.clickCallback)
            }
            )),
            this._isAppended = !0
        }
        _emulateAnimation(t) {
            y(t, this._getElement(), this._config.isAnimated)
        }
    }
    const Ht = ".bs.focustrap"
      , Bt = "backward"
      , qt = {
        autofocus: !0,
        trapElement: null
    }
      , Wt = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class Rt extends q {
        constructor(t) {
            super(),
            this._config = this._getConfig(t),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        static get Default() {
            return qt
        }
        static get DefaultType() {
            return Wt
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
            F.off(document, Ht),
            F.on(document, "focusin.bs.focustrap", (t=>this._handleFocusin(t))),
            F.on(document, "keydown.tab.bs.focustrap", (t=>this._handleKeydown(t))),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            F.off(document, Ht))
        }
        _handleFocusin(t) {
            const {trapElement: e} = this._config;
            if (t.target === document || t.target === e || e.contains(t.target))
                return;
            const s = V.focusableChildren(e);
            0 === s.length ? e.focus() : this._lastTabNavDirection === Bt ? s[s.length - 1].focus() : s[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Bt : "forward")
        }
    }
    const Vt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , Kt = ".sticky-top"
      , Qt = "padding-right"
      , Xt = "margin-right";
    class Yt {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, Qt, (e=>e + t)),
            this._setElementAttributes(Vt, Qt, (e=>e + t)),
            this._setElementAttributes(Kt, Xt, (e=>e - t))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, Qt),
            this._resetElementAttributes(Vt, Qt),
            this._resetElementAttributes(Kt, Xt)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, s) {
            const i = this.getWidth();
            this._applyManipulationCallback(t, (t=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + i)
                    return;
                this._saveInitialAttribute(t, e);
                const n = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${s(Number.parseFloat(n))}px`)
            }
            ))
        }
        _saveInitialAttribute(t, e) {
            const s = t.style.getPropertyValue(e);
            s && B.setDataAttribute(t, e, s)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t=>{
                const s = B.getDataAttribute(t, e);
                null !== s ? (B.removeDataAttribute(t, e),
                t.style.setProperty(e, s)) : t.style.removeProperty(e)
            }
            ))
        }
        _applyManipulationCallback(t, e) {
            if (l(t))
                e(t);
            else
                for (const s of V.find(t, this._element))
                    e(s)
        }
    }
    const Ut = ".bs.modal"
      , Gt = "hidden.bs.modal"
      , Jt = "show.bs.modal"
      , Zt = "modal-open"
      , te = "show"
      , ee = "modal-static"
      , se = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }
      , ie = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class ne extends W {
        constructor(t, e) {
            super(t, e),
            this._dialog = V.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._isTransitioning = !1,
            this._scrollBar = new Yt,
            this._addEventListeners()
        }
        static get Default() {
            return se
        }
        static get DefaultType() {
            return ie
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || F.trigger(this._element, Jt, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._isTransitioning = !0,
            this._scrollBar.hide(),
            document.body.classList.add(Zt),
            this._adjustDialog(),
            this._backdrop.show((()=>this._showElement(t))))
        }
        hide() {
            this._isShown && !this._isTransitioning && (F.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1,
            this._isTransitioning = !0,
            this._focustrap.deactivate(),
            this._element.classList.remove(te),
            this._queueCallback((()=>this._hideModal()), this._element, this._isAnimated())))
        }
        dispose() {
            F.off(window, Ut),
            F.off(this._dialog, Ut),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new zt({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Rt({
                trapElement: this._element
            })
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0;
            const e = V.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0),
            g(this._element),
            this._element.classList.add(te),
            this._queueCallback((()=>{
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                F.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }
            ), this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            F.on(this._element, "keydown.dismiss.bs.modal", (t=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
            }
            )),
            F.on(window, "resize.bs.modal", (()=>{
                this._isShown && !this._isTransitioning && this._adjustDialog()
            }
            )),
            F.on(this._element, "mousedown.dismiss.bs.modal", (t=>{
                F.one(this._element, "click.dismiss.bs.modal", (e=>{
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }
                ))
            }
            ))
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide((()=>{
                document.body.classList.remove(Zt),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                F.trigger(this._element, Gt)
            }
            ))
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (F.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
                return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(ee) || (t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(ee),
            this._queueCallback((()=>{
                this._element.classList.remove(ee),
                this._queueCallback((()=>{
                    this._element.style.overflowY = e
                }
                ), this._dialog)
            }
            ), this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._scrollBar.getWidth()
              , s = e > 0;
            if (s && !t) {
                const t = p() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`
            }
            if (!s && t) {
                const t = p() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const s = ne.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === s[t])
                        throw new TypeError(`No method named "${t}"`);
                    s[t](e)
                }
            }
            ))
        }
    }
    F.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = V.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        F.one(e, Jt, (t=>{
            t.defaultPrevented || F.one(e, Gt, (()=>{
                h(this) && this.focus()
            }
            ))
        }
        ));
        const s = V.findOne(".modal.show");
        s && ne.getInstance(s).hide(),
        ne.getOrCreateInstance(e).toggle(this)
    }
    )),
    K(ne),
    b(ne);
    const oe = "show"
      , re = "showing"
      , ae = "hiding"
      , le = ".offcanvas.show"
      , ce = "hidePrevented.bs.offcanvas"
      , he = "hidden.bs.offcanvas"
      , de = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , ue = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class _e extends W {
        constructor(t, e) {
            super(t, e),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get Default() {
            return de
        }
        static get DefaultType() {
            return ue
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || F.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._backdrop.show(),
            this._config.scroll || (new Yt).hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(re),
            this._queueCallback((()=>{
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(),
                this._element.classList.add(oe),
                this._element.classList.remove(re),
                F.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }
            ), this._element, !0))
        }
        hide() {
            this._isShown && (F.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.add(ae),
            this._backdrop.hide(),
            this._queueCallback((()=>{
                this._element.classList.remove(oe, ae),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || (new Yt).reset(),
                F.trigger(this._element, he)
            }
            ), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new zt({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? ()=>{
                    "static" !== this._config.backdrop ? this.hide() : F.trigger(this._element, ce)
                }
                : null
            })
        }
        _initializeFocusTrap() {
            return new Rt({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            F.on(this._element, "keydown.dismiss.bs.offcanvas", (t=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : F.trigger(this._element, ce))
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = _e.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    F.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = V.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        d(this))
            return;
        F.one(e, he, (()=>{
            h(this) && this.focus()
        }
        ));
        const s = V.findOne(le);
        s && s !== e && _e.getInstance(s).hide(),
        _e.getOrCreateInstance(e).toggle(this)
    }
    )),
    F.on(window, "load.bs.offcanvas.data-api", (()=>{
        for (const t of V.find(le))
            _e.getOrCreateInstance(t).show()
    }
    )),
    F.on(window, "resize.bs.offcanvas", (()=>{
        for (const t of V.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(t).position && _e.getOrCreateInstance(t).hide()
    }
    )),
    K(_e),
    b(_e);
    const ge = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , fe = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , me = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , pe = (t,e)=>{
        const s = t.nodeName.toLowerCase();
        return e.includes(s) ? !ge.has(s) || Boolean(fe.test(t.nodeValue) || me.test(t.nodeValue)) : e.filter((t=>t instanceof RegExp)).some((t=>t.test(s)))
    }
      , be = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , ve = {
        allowList: be,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }
      , ye = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }
      , we = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class Ae extends q {
        constructor(t) {
            super(),
            this._config = this._getConfig(t)
        }
        static get Default() {
            return ve
        }
        static get DefaultType() {
            return ye
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(t) {
            return this._checkContent(t),
            this._config.content = {
                ...this._config.content,
                ...t
            },
            this
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e,s] of Object.entries(this._config.content))
                this._setContent(t, s, e);
            const e = t.children[0]
              , s = this._resolvePossibleFunction(this._config.extraClass);
            return s && e.classList.add(...s.split(" ")),
            e
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t),
            this._checkContent(t.content)
        }
        _checkContent(t) {
            for (const [e,s] of Object.entries(t))
                super._typeCheckConfig({
                    selector: e,
                    entry: s
                }, we)
        }
        _setContent(t, e, s) {
            const i = V.findOne(s, t);
            i && ((e = this._resolvePossibleFunction(e)) ? l(e) ? this._putElementInTemplate(c(e), i) : this._config.html ? i.innerHTML = this._maybeSanitize(e) : i.textContent = e : i.remove())
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, s) {
                if (!t.length)
                    return t;
                if (s && "function" == typeof s)
                    return s(t);
                const i = (new window.DOMParser).parseFromString(t, "text/html")
                  , n = [].concat(...i.body.querySelectorAll("*"));
                for (const t of n) {
                    const s = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(s)) {
                        t.remove();
                        continue
                    }
                    const i = [].concat(...t.attributes)
                      , n = [].concat(e["*"] || [], e[s] || []);
                    for (const e of i)
                        pe(e, n) || t.removeAttribute(e.nodeName)
                }
                return i.body.innerHTML
            }(t, this._config.allowList, this._config.sanitizeFn) : t
        }
        _resolvePossibleFunction(t) {
            return v(t, [this])
        }
        _putElementInTemplate(t, e) {
            if (this._config.html)
                return e.innerHTML = "",
                void e.append(t);
            e.textContent = t.textContent
        }
    }
    const Ee = new Set(["sanitize", "allowList", "sanitizeFn"])
      , Ce = "fade"
      , Te = "show"
      , ke = ".modal"
      , Se = "hide.bs.modal"
      , Le = "hover"
      , Oe = "focus"
      , Ie = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: p() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: p() ? "right" : "left"
    }
      , De = {
        allowList: be,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }
      , Ne = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class Pe extends W {
        constructor(t, e) {
            if (void 0 === s)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e),
            this._isEnabled = !0,
            this._timeout = 0,
            this._isHovered = null,
            this._activeTrigger = {},
            this._popper = null,
            this._templateFactory = null,
            this._newContent = null,
            this.tip = null,
            this._setListeners(),
            this._config.selector || this._fixTitle()
        }
        static get Default() {
            return De
        }
        static get DefaultType() {
            return Ne
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click,
            this._isShown() ? this._leave() : this._enter())
        }
        dispose() {
            clearTimeout(this._timeout),
            F.off(this._element.closest(ke), Se, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled)
                return;
            const t = F.trigger(this._element, this.constructor.eventName("show"))
              , e = (u(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e)
                return;
            this._disposePopper();
            const s = this._getTipElement();
            this._element.setAttribute("aria-describedby", s.getAttribute("id"));
            const {container: i} = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(s),
            F.trigger(this._element, this.constructor.eventName("inserted"))),
            this._popper = this._createPopper(s),
            s.classList.add(Te),
            "ontouchstart"in document.documentElement)
                for (const t of [].concat(...document.body.children))
                    F.on(t, "mouseover", _);
            this._queueCallback((()=>{
                F.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                this._isHovered = !1
            }
            ), this.tip, this._isAnimated())
        }
        hide() {
            if (this._isShown() && !F.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(Te),
                "ontouchstart"in document.documentElement)
                    for (const t of [].concat(...document.body.children))
                        F.off(t, "mouseover", _);
                this._activeTrigger.click = !1,
                this._activeTrigger.focus = !1,
                this._activeTrigger.hover = !1,
                this._isHovered = null,
                this._queueCallback((()=>{
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(),
                    this._element.removeAttribute("aria-describedby"),
                    F.trigger(this._element, this.constructor.eventName("hidden")))
                }
                ), this.tip, this._isAnimated())
            }
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
            this.tip
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e)
                return null;
            e.classList.remove(Ce, Te),
            e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const s = (t=>{
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }
            )(this.constructor.NAME).toString();
            return e.setAttribute("id", s),
            this._isAnimated() && e.classList.add(Ce),
            e
        }
        setContent(t) {
            this._newContent = t,
            this._isShown() && (this._disposePopper(),
            this.show())
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Ae({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }),
            this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(Ce)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(Te)
        }
        _createPopper(t) {
            const e = v(this._config.placement, [this, t, this._element])
              , i = Ie[e.toUpperCase()];
            return s.createPopper(this._element, t, this._getPopperConfig(i))
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return v(t, [this._element])
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: t=>{
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return {
                ...e,
                ...v(this._config.popperConfig, [e])
            }
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e)
                    F.on(this._element, this.constructor.eventName("click"), this._config.selector, (t=>{
                        this._initializeOnDelegatedTarget(t).toggle()
                    }
                    ));
                else if ("manual" !== e) {
                    const t = e === Le ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin")
                      , s = e === Le ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    F.on(this._element, t, this._config.selector, (t=>{
                        const e = this._initializeOnDelegatedTarget(t);
                        e._activeTrigger["focusin" === t.type ? Oe : Le] = !0,
                        e._enter()
                    }
                    )),
                    F.on(this._element, s, this._config.selector, (t=>{
                        const e = this._initializeOnDelegatedTarget(t);
                        e._activeTrigger["focusout" === t.type ? Oe : Le] = e._element.contains(t.relatedTarget),
                        e._leave()
                    }
                    ))
                }
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            F.on(this._element.closest(ke), Se, this._hideModalHandler)
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("data-bs-original-title", t),
            this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0,
            this._setTimeout((()=>{
                this._isHovered && this.show()
            }
            ), this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1,
            this._setTimeout((()=>{
                this._isHovered || this.hide()
            }
            ), this._config.delay.hide))
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout),
            this._timeout = setTimeout(t, e)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(t) {
            const e = B.getDataAttributes(this._element);
            for (const t of Object.keys(e))
                Ee.has(t) && delete e[t];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            },
            t = this._mergeConfigObj(t),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : c(t.container),
            "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            t
        }
        _getDelegateConfig() {
            const t = {};
            for (const [e,s] of Object.entries(this._config))
                this.constructor.Default[e] !== s && (t[e] = s);
            return t.selector = !1,
            t.trigger = "manual",
            t
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null),
            this.tip && (this.tip.remove(),
            this.tip = null)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Pe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    b(Pe);
    const xe = {
        ...Pe.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }
      , Me = {
        ...Pe.DefaultType,
        content: "(null|string|element|function)"
    };
    class je extends Pe {
        static get Default() {
            return xe
        }
        static get DefaultType() {
            return Me
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = je.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    b(je);
    const Fe = "click.bs.scrollspy"
      , $e = "active"
      , ze = "[href]"
      , He = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [.1, .5, 1]
    }
      , Be = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class qe extends W {
        constructor(t, e) {
            super(t, e),
            this._targetLinks = new Map,
            this._observableSections = new Map,
            this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element,
            this._activeTarget = null,
            this._observer = null,
            this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            },
            this.refresh()
        }
        static get Default() {
            return He
        }
        static get DefaultType() {
            return Be
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values())
                this._observer.observe(t)
        }
        dispose() {
            this._observer.disconnect(),
            super.dispose()
        }
        _configAfterMerge(t) {
            return t.target = c(t.target) || document.body,
            t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin,
            "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t=>Number.parseFloat(t)))),
            t
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (F.off(this._config.target, Fe),
            F.on(this._config.target, Fe, ze, (t=>{
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const s = this._rootElement || window
                      , i = e.offsetTop - this._element.offsetTop;
                    if (s.scrollTo)
                        return void s.scrollTo({
                            top: i,
                            behavior: "smooth"
                        });
                    s.scrollTop = i
                }
            }
            )))
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t=>this._observerCallback(t)),t)
        }
        _observerCallback(t) {
            const e = t=>this._targetLinks.get(`#${t.target.id}`)
              , s = t=>{
                this._previousScrollData.visibleEntryTop = t.target.offsetTop,
                this._process(e(t))
            }
              , i = (this._rootElement || document.documentElement).scrollTop
              , n = i >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = i;
            for (const o of t) {
                if (!o.isIntersecting) {
                    this._activeTarget = null,
                    this._clearActiveClass(e(o));
                    continue
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (n && t) {
                    if (s(o),
                    !i)
                        return
                } else
                    n || t || s(o)
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map,
            this._observableSections = new Map;
            const t = V.find(ze, this._config.target);
            for (const e of t) {
                if (!e.hash || d(e))
                    continue;
                const t = V.findOne(e.hash, this._element);
                h(t) && (this._targetLinks.set(e.hash, e),
                this._observableSections.set(e.hash, t))
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target),
            this._activeTarget = t,
            t.classList.add($e),
            this._activateParents(t),
            F.trigger(this._element, "activate.bs.scrollspy", {
                relatedTarget: t
            }))
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item"))
                V.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add($e);
            else
                for (const e of V.parents(t, ".nav, .list-group"))
                    for (const t of V.prev(e, ".nav-link, .navigation-con > .nav-link, .list-group-item"))
                        t.classList.add($e)
        }
        _clearActiveClass(t) {
            t.classList.remove($e);
            const e = V.find("[href].active", t);
            for (const t of e)
                t.classList.remove($e)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = qe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    F.on(window, "load.bs.scrollspy.data-api", (()=>{
        for (const t of V.find('[data-bs-spy="scroll"]'))
            qe.getOrCreateInstance(t)
    }
    )),
    b(qe);
    const We = "ArrowLeft"
      , Re = "ArrowRight"
      , Ve = "ArrowUp"
      , Ke = "ArrowDown"
      , Qe = "active"
      , Xe = "fade"
      , Ye = "show"
      , Ue = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
      , Ge = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Ue}`;
    class Je extends W {
        constructor(t) {
            super(t),
            this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'),
            this._parent && (this._setInitialAttributes(this._parent, this._getChildren()),
            F.on(this._element, "keydown.bs.tab", (t=>this._keydown(t))))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t))
                return;
            const e = this._getActiveElem()
              , s = e ? F.trigger(e, "hide.bs.tab", {
                relatedTarget: t
            }) : null;
            F.trigger(t, "show.bs.tab", {
                relatedTarget: e
            }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(e, t),
            this._activate(t, e))
        }
        _activate(t, e) {
            t && (t.classList.add(Qe),
            this._activate(V.getElementFromSelector(t)),
            this._queueCallback((()=>{
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"),
                t.setAttribute("aria-selected", !0),
                this._toggleDropDown(t, !0),
                F.trigger(t, "shown.bs.tab", {
                    relatedTarget: e
                })) : t.classList.add(Ye)
            }
            ), t, t.classList.contains(Xe)))
        }
        _deactivate(t, e) {
            t && (t.classList.remove(Qe),
            t.blur(),
            this._deactivate(V.getElementFromSelector(t)),
            this._queueCallback((()=>{
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1),
                t.setAttribute("tabindex", "-1"),
                this._toggleDropDown(t, !1),
                F.trigger(t, "hidden.bs.tab", {
                    relatedTarget: e
                })) : t.classList.remove(Ye)
            }
            ), t, t.classList.contains(Xe)))
        }
        _keydown(t) {
            if (![We, Re, Ve, Ke].includes(t.key))
                return;
            t.stopPropagation(),
            t.preventDefault();
            const e = [Re, Ke].includes(t.key)
              , s = w(this._getChildren().filter((t=>!d(t))), t.target, e, !0);
            s && (s.focus({
                preventScroll: !0
            }),
            Je.getOrCreateInstance(s).show())
        }
        _getChildren() {
            return V.find(Ge, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find((t=>this._elemIsActive(t))) || null
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e)
                this._setInitialAttributesOnChild(t)
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t)
              , s = this._getOuterElement(t);
            t.setAttribute("aria-selected", e),
            s !== t && this._setAttributeIfNotExists(s, "role", "presentation"),
            e || t.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(t, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(t)
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = V.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"),
            t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`))
        }
        _toggleDropDown(t, e) {
            const s = this._getOuterElement(t);
            if (!s.classList.contains("dropdown"))
                return;
            const i = (t,i)=>{
                const n = V.findOne(t, s);
                n && n.classList.toggle(i, e)
            }
            ;
            i(".dropdown-toggle", Qe),
            i(".dropdown-menu", Ye),
            s.setAttribute("aria-expanded", e)
        }
        _setAttributeIfNotExists(t, e, s) {
            t.hasAttribute(e) || t.setAttribute(e, s)
        }
        _elemIsActive(t) {
            return t.classList.contains(Qe)
        }
        _getInnerElement(t) {
            return t.matches(Ge) ? t : V.findOne(Ge, t)
        }
        _getOuterElement(t) {
            return t.closest(".navigation-con, .list-group-item") || t
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Je.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    F.on(document, "click.bs.tab", Ue, (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        d(this) || Je.getOrCreateInstance(this).show()
    }
    )),
    F.on(window, "load.bs.tab", (()=>{
        for (const t of V.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))
            Je.getOrCreateInstance(t)
    }
    )),
    b(Je);
    const Ze = "hide"
      , ts = "show"
      , es = "showing"
      , ss = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , is = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class ns extends W {
        constructor(t, e) {
            super(t, e),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get Default() {
            return is
        }
        static get DefaultType() {
            return ss
        }
        static get NAME() {
            return "toast"
        }
        show() {
            F.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove(Ze),
            g(this._element),
            this._element.classList.add(ts, es),
            this._queueCallback((()=>{
                this._element.classList.remove(es),
                F.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide()
            }
            ), this._element, this._config.animation))
        }
        hide() {
            this.isShown() && (F.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(es),
            this._queueCallback((()=>{
                this._element.classList.add(Ze),
                this._element.classList.remove(es, ts),
                F.trigger(this._element, "hidden.bs.toast")
            }
            ), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(),
            this.isShown() && this._element.classList.remove(ts),
            super.dispose()
        }
        isShown() {
            return this._element.classList.contains(ts)
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((()=>{
                this.hide()
            }
            ), this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = e;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = e
            }
            if (e)
                return void this._clearTimeout();
            const s = t.relatedTarget;
            this._element === s || this._element.contains(s) || this._maybeScheduleHide()
        }
        _setListeners() {
            F.on(this._element, "mouseover.bs.toast", (t=>this._onInteraction(t, !0))),
            F.on(this._element, "mouseout.bs.toast", (t=>this._onInteraction(t, !1))),
            F.on(this._element, "focusin.bs.toast", (t=>this._onInteraction(t, !0))),
            F.on(this._element, "focusout.bs.toast", (t=>this._onInteraction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = ns.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    return K(ns),
    b(ns),
    {
        Alert: Q,
        Button: Y,
        Carousel: ct,
        Collapse: mt,
        Dropdown: xt,
        Modal: ne,
        Offcanvas: _e,
        Popover: je,
        ScrollSpy: qe,
        Tab: Je,
        Toast: ns,
        Tooltip: Pe
    }
}
));
;!function(a, b, c, d) {
    function e(b, c) {
        this.settings = null,
        this.options = a.extend({}, e.Defaults, c),
        this.$element = a(b),
        this._handlers = {},
        this._plugins = {},
        this._supress = {},
        this._current = null,
        this._speed = null,
        this._coordinates = [],
        this._breakpoint = null,
        this._width = null,
        this._items = [],
        this._clones = [],
        this._mergers = [],
        this._widths = [],
        this._invalidated = {},
        this._pipe = [],
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        },
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        },
        a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)),
        a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)),
        a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)),
        this.setup(),
        this.initialize()
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    },
    e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    },
    e.Type = {
        Event: "event",
        State: "state"
    },
    e.Plugins = {},
    e.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || ""
              , c = !this.settings.autoWidth
              , d = this.settings.rtl
              , e = {
                width: "auto",
                "margin-left": d ? b : "",
                "margin-right": d ? "" : b
            };
            !c && this.$stage.children().css(e),
            a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
              , c = null
              , d = this._items.length
              , e = !this.settings.autoWidth
              , f = [];
            for (a.items = {
                merge: !1,
                width: b
            }; d--; )
                c = this._mergers[d],
                c = this.settings.mergeFit && Math.min(c, this.settings.items) || c,
                a.items.merge = c > 1 || a.items.merge,
                f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = []
              , c = this._items
              , d = this.settings
              , e = Math.max(2 * d.items, 4)
              , f = 2 * Math.ceil(c.length / 2)
              , g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0
              , h = ""
              , i = "";
            for (g /= 2; g > 0; )
                b.push(this.normalize(b.length / 2, !0)),
                h += c[b[b.length - 1]][0].outerHTML,
                b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
                i = c[b[b.length - 1]][0].outerHTML + i,
                g -= 1;
            this._clones = b,
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                d = f[c - 1] || 0,
                e = this._widths[this.relative(c)] + this.settings.margin,
                f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding
              , b = this._coordinates
              , c = {
                width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                "padding-left": a || "",
                "padding-right": a || ""
            };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length
              , c = !this.settings.autoWidth
              , d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--; )
                    a.css.width = this._widths[this.relative(b)],
                    d.eq(b).css(a.css);
            else
                c && (a.css.width = a.items.width,
                d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0,
            a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)),
            this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0,
            d = this._coordinates.length; c < d; c++)
                a = this._coordinates[c - 1] || 0,
                b = Math.abs(this._coordinates[c]) + f * e,
                (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"),
            this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }],
    e.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass),
        this.$stage.length || (this.$element.addClass(this.options.loadingClass),
        this.$stage = a("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(a("<div/>", {
            class: this.settings.stageOuterClass
        })),
        this.$element.append(this.$stage.parent()))
    }
    ,
    e.prototype.initializeItems = function() {
        var b = this.$element.find(".owl-item");
        if (b.length)
            return this._items = b.get().map(function(b) {
                return a(b)
            }),
            this._mergers = this._items.map(function() {
                return 1
            }),
            void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }
    ,
    e.prototype.initialize = function() {
        if (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) {
            var a, b, c;
            a = this.$element.find("img"),
            b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d,
            c = this.$element.children(b).width(),
            a.length && c <= 0 && this.preloadAutoWidthImages(a)
        }
        this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized")
    }
    ,
    e.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }
    ,
    e.prototype.setup = function() {
        var b = this.viewport()
          , c = this.options.responsive
          , d = -1
          , e = null;
        c ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a))
        }),
        e = a.extend({}, this.options, c[d]),
        "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
        delete e.responsive,
        e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + d))) : e = a.extend({}, this.options),
        this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }),
        this._breakpoint = d,
        this.settings = e,
        this.invalidate("settings"),
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }
    ,
    e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ,
    e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)),
        this.trigger("prepared", {
            content: c.data
        }),
        c.data
    }
    ,
    e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
            return this[a]
        }, this._invalidated), e = {}; b < c; )
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
            b++;
        this._invalidated = {},
        !this.is("valid") && this.enter("valid")
    }
    ,
    e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
        case e.Width.Inner:
        case e.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ,
    e.prototype.refresh = function() {
        this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed")
    }
    ,
    e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer),
        this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }
    ,
    e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
        !1) : (this.invalidate("width"),
        this.refresh(),
        this.leave("resizing"),
        void this.trigger("resized")))))
    }
    ,
    e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
        !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
        this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })),
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)),
        this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }
    ,
    e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","),
        d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(),
        d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }),
        this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
        this.invalidate("position")),
        this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
        this.speed(0),
        this._drag.time = (new Date).getTime(),
        this._drag.target = a(b.target),
        this._drag.stage.start = d,
        this._drag.stage.current = d,
        this._drag.pointer = this.pointer(b),
        a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
        a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)),
            Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(),
            this.enter("dragging"),
            this.trigger("drag"))
        }, this)))
    }
    ,
    e.prototype.onDragMove = function(a) {
        var b = null
          , c = null
          , d = null
          , e = this.difference(this._drag.pointer, this.pointer(a))
          , f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(),
        this.settings.loop ? (b = this.coordinates(this.minimum()),
        c = this.coordinates(this.maximum() + 1) - b,
        f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
        c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
        d = this.settings.pullDrag ? -1 * e.x / 5 : 0,
        f.x = Math.max(Math.min(f.x, b + d), c + d)),
        this._drag.stage.current = f,
        this.animate(f.x))
    }
    ,
    e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b))
          , e = this._drag.stage.current
          , f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
        this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
        this.invalidate("position"),
        this.update(),
        this._drag.direction = f,
        (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })),
        this.is("dragging") && (this.leave("dragging"),
        this.trigger("dragged"))
    }
    ,
    e.prototype.closest = function(b, c) {
        var e = -1
          , f = 30
          , g = this.width()
          , h = this.coordinates();
        return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
            return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a),
            -1 === e
        }, this)),
        this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
        e
    }
    ,
    e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"),
        this.trigger("translate")),
        a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    }
    ,
    e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0
    }
    ,
    e.prototype.current = function(a) {
        if (a === d)
            return this._current;
        if (0 === this._items.length)
            return d;
        if (a = this.normalize(a),
        this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)),
            this._current = a,
            this.invalidate("position"),
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }
    ,
    e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0,
        this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function(a, b) {
            return b
        })
    }
    ,
    e.prototype.reset = function(a) {
        (a = this.normalize(a)) !== d && (this._speed = 0,
        this._current = a,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]))
    }
    ,
    e.prototype.normalize = function(a, b) {
        var c = this._items.length
          , e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2),
        a
    }
    ,
    e.prototype.relative = function(a) {
        return a -= this._clones.length / 2,
        this.normalize(a, !0)
    }
    ,
    e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings, f = this._coordinates.length;
        if (e.loop)
            f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            if (b = this._items.length)
                for (c = this._items[--b].width(),
                d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d); )
                    ;
            f = b + 1
        } else
            f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2),
        Math.max(f, 0)
    }
    ,
    e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }
    ,
    e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0),
        this._items[a])
    }
    ,
    e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0),
        this._mergers[a])
    }
    ,
    e.prototype.clones = function(b) {
        var c = this._clones.length / 2
          , e = c + this._items.length
          , f = function(a) {
            return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }
    ,
    e.prototype.speed = function(a) {
        return a !== d && (this._speed = a),
        this._speed
    }
    ,
    e.prototype.coordinates = function(b) {
        var c, e = 1, f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1,
        f = b + 1),
        c = this._coordinates[b],
        c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0,
        c = Math.ceil(c))
    }
    ,
    e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }
    ,
    e.prototype.to = function(a, b) {
        var c = this.current()
          , d = null
          , e = a - this.relative(c)
          , f = (e > 0) - (e < 0)
          , g = this._items.length
          , h = this.minimum()
          , i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
        a = c + e,
        (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e,
        a = d,
        this.reset(c))) : this.settings.rewind ? (i += 1,
        a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update()
    }
    ,
    e.prototype.next = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) + 1, a)
    }
    ,
    e.prototype.prev = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) - 1, a)
    }
    ,
    e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)))
            return !1;
        this.leave("animating"),
        this.trigger("translated")
    }
    ,
    e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."),
        d
    }
    ,
    e.prototype.replace = function(b) {
        this.$stage.empty(),
        this._items = [],
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
        b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b),
            this.$stage.append(b),
            this._items.push(b),
            this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)),
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate("items")
    }
    ,
    e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0),
        b = b instanceof jQuery ? b : a(b),
        this.trigger("add", {
            content: b,
            position: c
        }),
        b = this.prepare(b),
        0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b),
        0 !== this._items.length && this._items[c - 1].after(b),
        this._items.push(b),
        this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b),
        this._items.splice(c, 0, b),
        this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", {
            content: b,
            position: c
        })
    }
    ,
    e.prototype.remove = function(a) {
        (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: a
        }))
    }
    ,
    e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"),
            c = a(c),
            a(new Image).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src),
                c.css("opacity", 1),
                this.leave("pre-loading"),
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }
    ,
    e.prototype.destroy = function() {
        this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer),
        this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins)
            this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
    }
    ,
    e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
        case "<":
            return d ? a > c : a < c;
        case ">":
            return d ? a < c : a > c;
        case ">=":
            return d ? a <= c : a >= c;
        case "<=":
            return d ? a >= c : a <= c
        }
    }
    ,
    e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    ,
    e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }
    ,
    e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , i = a.camelCase(a.grep(["on", b, d], function(a) {
            return a
        }).join("-").toLowerCase())
          , j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
            relatedTarget: this
        }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j)
        }),
        this.register({
            type: e.Type.Event,
            name: b
        }),
        this.$element.trigger(j),
        this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
        j
    }
    ,
    e.prototype.enter = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++
        }, this))
    }
    ,
    e.prototype.leave = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--
        }, this))
    }
    ,
    e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}),
            !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }
                ,
                a.event.special[b.name].owl = !0
            }
        } else
            b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags,
            this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                return a.inArray(c, this._states.tags[b.name]) === d
            }, this)))
    }
    ,
    e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }
    ,
    e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }
    ,
    e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event,
        a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a,
        a.pageX ? (c.x = a.pageX,
        c.y = a.pageY) : (c.x = a.clientX,
        c.y = a.clientY),
        c
    }
    ,
    e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a))
    }
    ,
    e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    }
    ,
    a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this)
              , f = d.data("owl.carousel");
            f || (f = new e(this,"object" == typeof b && b),
            d.data("owl.carousel", f),
            a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }),
                f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]),
                    f[c].apply(this, [].slice.call(arguments, 1)),
                    this.release([c]))
                }, f))
            })),
            "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }
    ,
    a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._interval = null,
        this._visible = null,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    },
    e.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(),
        this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }
    ,
    e.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible,
        this._core.$element.toggleClass("owl-hidden", !this._visible),
        this._visible && this._core.invalidate("width") && this._core.refresh())
    }
    ,
    e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._loaded = [],
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
                    var c = this._core.settings
                      , e = c.center && Math.ceil(c.items / 2) || c.items
                      , f = c.center && -1 * e || 0
                      , g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f
                      , h = this._core.clones().length
                      , i = a.proxy(function(a, b) {
                        this.load(b)
                    }, this);
                    for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager,
                    c.loop && (g -= c.lazyLoadEager,
                    e++)); f++ < e; )
                        this.load(h / 2 + this._core.relative(g)),
                        h && a.each(this._core.clones(this._core.relative(g)), i),
                        g++
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    },
    e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c)
          , e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"),
            f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("srcset", g) : (e = new Image,
            e.onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this),
            e.src = g)
        }, this)),
        this._loaded.push(d.get(0)))
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(c) {
        this._core = c,
        this._previousHeight = null,
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._intervalId = null;
        var d = this;
        a(b).on("load", function() {
            d._core.settings.autoHeight && d.update()
        }),
        a(b).resize(function() {
            d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId),
            d._intervalId = setTimeout(function() {
                d.update()
            }, 250))
        })
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    },
    e.prototype.update = function() {
        var b = this._core._current
          , c = b + this._core.settings.items
          , d = this._core.settings.lazyLoad
          , e = this._core.$stage.children().toArray().slice(b, c)
          , f = []
          , g = 0;
        a.each(e, function(b, c) {
            f.push(a(c).height())
        }),
        g = Math.max.apply(null, f),
        g <= 1 && d && this._previousHeight && (g = this._previousHeight),
        this._previousHeight = g,
        this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._videos = {},
        this._playing = null,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"),
                    this.fetch(c, a(b.content)))
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    },
    e.prototype.fetch = function(a, b) {
        var c = function() {
            return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
        }()
          , d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id")
          , e = a.attr("data-width") || this._core.settings.videoWidth
          , f = a.attr("data-height") || this._core.settings.videoHeight
          , g = a.attr("href");
        if (!g)
            throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
        d[3].indexOf("youtu") > -1)
            c = "youtube";
        else if (d[3].indexOf("vimeo") > -1)
            c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1))
                throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6],
        this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        },
        b.attr("data-video", g),
        this.thumbnail(a, this._videos[g])
    }
    ,
    e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(c) {
            e = '<div class="owl-video-play-icon"></div>',
            d = k.lazyLoad ? a("<div/>", {
                class: "owl-video-tn " + j,
                srcType: c
            }) : a("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + c + ")"
            }),
            b.after(d),
            b.after(e)
        };
        if (b.wrap(a("<div/>", {
            class: "owl-video-wrapper",
            style: g
        })),
        this._core.settings.lazyLoad && (i = "data-src",
        j = "owl-lazy"),
        h.length)
            return l(h.attr(i)),
            h.remove(),
            !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg",
        l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large,
                l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url,
                l(f)
            }
        })
    }
    ,
    e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
        this._playing.find(".owl-video-frame").remove(),
        this._playing.removeClass("owl-video-playing"),
        this._playing = null,
        this._core.leave("playing"),
        this._core.trigger("stopped", null, "video")
    }
    ,
    e.prototype.play = function(b) {
        var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"),
        this._core.trigger("play", null, "video"),
        e = this._core.items(this._core.relative(e.index())),
        this._core.reset(e.index()),
        c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),
        c.attr("height", h),
        c.attr("width", g),
        "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"),
        a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
        this._playing = e.addClass("owl-video-playing"))
    }
    ,
    e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b,
        this.core.options = a.extend({}, e.Defaults, this.core.options),
        this.swapping = !0,
        this.previous = d,
        this.next = d,
        this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(),
                this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        },
        this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    },
    e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
            d.one(a.support.animation.end, c).css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g)),
            f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }
    ,
    e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
        this.core.onTransitionEnd()
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._call = null,
        this._time = 0,
        this._timeout = 0,
        this._paused = !0,
        this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        },
        this._core.$element.on(this._handlers),
        this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    },
    e.prototype._next = function(d) {
        this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()),
        this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
    }
    ,
    e.prototype.read = function() {
        return (new Date).getTime() - this._time
    }
    ,
    e.prototype.play = function(c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"),
        c = c || this._core.settings.autoplayTimeout,
        e = Math.min(this._time % (this._timeout || c), c),
        this._paused ? (this._time = this.read(),
        this._paused = !1) : b.clearTimeout(this._call),
        this._time += this.read() % c - e,
        this._timeout = c,
        this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
    }
    ,
    e.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0,
        this._paused = !0,
        b.clearTimeout(this._call),
        this._core.leave("rotating"))
    }
    ,
    e.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(),
        this._paused = !0,
        b.clearTimeout(this._call))
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b,
        this._initialized = !1,
        this._pages = [],
        this._controls = {},
        this._templates = [],
        this.$element = this._core.$element,
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        },
        this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                this.initialize(),
                this.update(),
                this.draw(),
                this._initialized = !0,
                this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation"))
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    },
    e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed)
        }, this)),
        this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed)
        }, this)),
        c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
        this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$absolute.on("click", "button", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(),
            this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides)
            this._core[b] = a.proxy(this[b], this)
    }
    ,
    e.prototype.destroy = function() {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers)
            this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
            "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
        for (d in this.overides)
            this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
        g.dots || "page" == g.slideBy)
            for (this._pages = [],
            a = d,
            b = 0,
            c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({
                        start: Math.min(f, a - d),
                        end: a - d + h - 1
                    }),
                    Math.min(f, a - d) === f)
                        break;
                    b = 0,
                    ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }
    ,
    e.prototype.draw = function() {
        var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
        c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)),
        this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
        this._controls.$absolute.toggleClass("disabled", !c.dots || d),
        c.dots && (b = this._pages.length - this._controls.$absolute.children().length,
        c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(),
        this._controls.$absolute.find(".active").removeClass("active"),
        this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }
    ,
    e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }
    ,
    e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }
    ,
    e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages),
        d = this._pages.length,
        b ? ++c : --c,
        c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()),
        d = this._core.items().length,
        b ? c += e.slideBy : c -= e.slideBy),
        c
    }
    ,
    e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }
    ,
    e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }
    ,
    e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length,
        a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c,
        this._hashes = {},
        this.$element = this._core.$element,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c)
                        return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current()))
                      , e = a.map(this._hashes, function(a, b) {
                        return a === d ? b : null
                    }).join();
                    if (!e || b.location.hash.slice(1) === e)
                        return;
                    b.location.hash = e
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers),
        a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1)
              , e = this._core.$stage.children()
              , f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    },
    e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers)
            this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
            "function" != typeof this[d] && (this[d] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1
          , f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            if (g[b] !== d)
                return e = !c || b,
                !1
        }),
        e
    }
    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style
      , h = "Webkit Moz O ms".split(" ")
      , i = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }
      , j = {
        csstransforms: function() {
            return !!e("transform")
        },
        csstransforms3d: function() {
            return !!e("perspective")
        },
        csstransitions: function() {
            return !!e("transition")
        },
        cssanimations: function() {
            return !!e("animation")
        }
    };
    j.csstransitions() && (a.support.transition = new String(f("transition")),
    a.support.transition.end = i.transition.end[a.support.transition]),
    j.cssanimations() && (a.support.animation = new String(f("animation")),
    a.support.animation.end = i.animation.end[a.support.animation]),
    j.csstransforms() && (a.support.transform = new String(f("transform")),
    a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
;/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function() {}, u = !!window.jQuery, v = a(window), w = function(a, c) {
        b.ev.on(o + a + p, c)
    }, x = function(b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b,
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : (f = a(f),
        c && f.appendTo(c)),
        f
    }, y = function(c, d) {
        b.ev.triggerHandler(o + c, d),
        b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1),
        b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    }, z = function(c) {
        return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)),
        g = c),
        b.currTemplate.closeBtn
    }, A = function() {
        a.magnificPopup.instance || (b = new t,
        b.init(),
        a.magnificPopup.instance = b)
    }, B = function() {
        var a = document.createElement("p").style
          , b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition)
            return !0;
        for (; b.length; )
            if (b.pop() + "Transition"in a)
                return !0;
        return !1
    };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener,
            b.isAndroid = /android/gi.test(c),
            b.isIOS = /iphone|ipad|ipod/gi.test(c),
            b.supportsTransition = B(),
            b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            d = a(document),
            b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(),
                b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e],
                    g.parsed && (g = g.el[0]),
                    g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else
                b.items = a.isArray(c.items) ? c.items : [c.items],
                b.index = c.index || 0;
            if (b.isOpen)
                return void b.updateItemHTML();
            b.types = [],
            f = "",
            c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d,
            c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {},
            b.st = a.extend(!0, {}, a.magnificPopup.defaults, c),
            b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos,
            b.st.modal && (b.st.closeOnContentClick = !1,
            b.st.closeOnBgClick = !1,
            b.st.showCloseBtn = !1,
            b.st.enableEscapeKey = !1),
            b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }),
            b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }),
            b.container = x("container", b.wrap)),
            b.contentContainer = x("content"),
            b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1),
                b["init" + j].call(b)
            }
            y("BeforeOpen"),
            b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }),
            f += " mfp-close-btn-in") : b.wrap.append(z())),
            b.st.alignTop && (f += " mfp-align-top"),
            b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }),
            (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }),
            b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }),
            v.on("resize" + p, function() {
                b.updateSize()
            }),
            b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
            f && b.wrap.addClass(f);
            var k = b.wH = v.height()
              , n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"),
            r && b._addClassToMFP(r),
            b.updateItemHTML(),
            y("BuildControls"),
            a("html").css(n),
            b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
            b._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                b.content ? (b._addClassToMFP(q),
                b._setFocus()) : b.bgOverlay.addClass(q),
                d.on("focusin" + p, b._onFocusIn)
            }, 16),
            b.isOpen = !0,
            b.updateSize(k),
            y(m),
            c
        },
        close: function() {
            b.isOpen && (y(i),
            b.isOpen = !1,
            b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r),
            setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(),
            b.wrap.detach(),
            b.container.empty(),
            b.st.mainClass && (c += b.st.mainClass + " "),
            b._removeClassFromMFP(c),
            b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "",
                a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p),
            b.ev.off(p),
            b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            b.bgOverlay.attr("class", "mfp-bg"),
            b.container.attr("class", "mfp-container"),
            !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(),
            b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
            b.currItem = null,
            b.content = null,
            b.currTemplate = null,
            b.prevHeight = 0,
            y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth
                  , d = window.innerHeight * c;
                b.wrap.css("height", d),
                b.wH = d
            } else
                b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH),
            y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(),
            b.content && b.content.detach(),
            c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
            b.currItem = c,
            !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f),
                f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d),
            c.preloaded = !0,
            y(n, c),
            e = c.type,
            b.container.prepend(b.contentContainer),
            y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a,
            a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "",
            y(k),
            b.container.addClass("mfp-" + c + "-holder"),
            b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                el: a(e)
            } : (d = e.type,
            e = {
                data: e,
                src: e.src
            }),
            e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"),
                e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline",
            e.index = c,
            e.parsed = !0,
            b.items[c] = e,
            y("ElementParse", e),
            b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this,
                b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a,
            c.items ? (c.isObj = !0,
            a.off(e).on(e, d)) : (c.isObj = !1,
            c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a,
            a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b))
                            return !0
                    } else if (v.width() < g)
                        return !0;
                c.type && (c.preventDefault(),
                b.isOpen && c.stopPropagation()),
                e.el = a(c.mfpEl),
                e.delegate && (e.items = d.find(e.delegate)),
                b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c),
                d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e),
                a = e.status,
                d = e.text,
                b.preloader.html(d),
                b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }),
                b.container.addClass("mfp-s-" + a),
                c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick
                  , e = b.st.closeOnBgClick;
                if (d && e)
                    return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])
                    return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d)
                        return !0
                } else if (e && a.contains(document, c))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a),
            b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a),
            b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(),
            !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
            y(l, [b, c, d]),
            a.each(c, function(c, d) {
                if (void 0 === d || d === !1)
                    return !0;
                if (e = c.split("_"),
                e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else
                    b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(a),
                b.scrollbarSize = a.offsetWidth - a.clientWidth,
                document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    },
    a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(),
            b = b ? a.extend(!0, {}, b) : {},
            b.isObj = !0,
            b.index = c || 0,
            this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options),
            a.extend(this.proto, c.proto),
            this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d,
                f.delegate && (e = e.find(f.delegate)),
                e = e.eq(g)),
                b._openClick({
                    mfpEl: e
                }, d, f)
            } else
                b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else
            c = a.extend(!0, {}, c),
            u ? d.data("magnificPopup", c) : d[0].magnificPopup = c,
            b.addGroup(d, c);
        return d
    }
    ;
    var C, D, E, F = "inline", G = function() {
        E && (D.after(E.addClass(C)).detach(),
        E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F),
                w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(),
                c.src) {
                    var e = b.st.inline
                      , f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass,
                        D = x(C),
                        C = "mfp-" + C),
                        E = f.after(D).detach().removeClass(C)),
                        b.updateStatus("ready")
                    } else
                        b.updateStatus("error", e.tNotFound),
                        f = a("<div>");
                    return c.inlineElement = f,
                    f
                }
                return b.updateStatus("ready"),
                b._parseMarkup(d, {}, c),
                d
            }
        }
    });
    var H, I = "ajax", J = function() {
        H && a(document.body).removeClass(H)
    }, K = function() {
        J(),
        b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I),
                H = b.st.ajax.cursor,
                w(h + "." + I, K),
                w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H),
                b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g),
                        b.appendContent(a(g.data), I),
                        c.finished = !0,
                        J(),
                        b._setFocus(),
                        setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16),
                        b.updateStatus("ready"),
                        y("AjaxContentAdded")
                    },
                    error: function() {
                        J(),
                        c.finished = c.loadError = !0,
                        b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d),
                ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title)
            return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d))
                return d.call(b, c);
            if (c.el)
                return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image
                  , d = ".image";
                b.types.push("image"),
                w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }),
                w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor),
                    v.off("resize" + p)
                }),
                w("Resize" + d, b.resizeImage),
                b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)),
                    a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0,
                L && clearInterval(L),
                a.isCheckingImgSize = !1,
                y("ImageHasSize", a),
                a.imgHidden && (b.content && b.content.removeClass("mfp-loading"),
                a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0
                  , d = a.img[0]
                  , e = function(f) {
                    L && clearInterval(L),
                    L = setInterval(function() {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L),
                        c++,
                        void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0
                  , f = function() {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("ready")),
                    c.hasSize = !0,
                    c.loaded = !0,
                    y("ImageLoadComplete")) : (e++,
                    200 > e ? setTimeout(f, 100) : g()))
                }
                  , g = function() {
                    c && (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("error", h.tError.replace("%url%", c.src))),
                    c.hasSize = !0,
                    c.loaded = !0,
                    c.loadError = !0)
                }
                  , h = b.st.image
                  , i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img",
                    c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                    c.img = a(j).on("load.mfploader", f).on("error.mfploader", g),
                    j.src = c.src,
                    i.is("img") && (c.img = c.img.clone()),
                    j = c.img[0],
                    j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c),
                b.resizeImage(),
                c.hasSize ? (L && clearInterval(L),
                c.loadError ? (d.addClass("mfp-loading"),
                b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"),
                b.updateStatus("ready")),
                d) : (b.updateStatus("loading"),
                c.loading = !0,
                c.hasSize || (c.imgHidden = !0,
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
                d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform),
        N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function(a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , d = "all " + c.duration / 1e3 + "s " + c.easing
                          , e = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d,
                        b.css(e),
                        b
                    }, k = function() {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                            b.content.css("visibility", "hidden"),
                            a = b._getItemToZoom(),
                            !a)
                                return void k();
                            f = j(a),
                            f.css(b._getOffset()),
                            b.wrap.append(f),
                            e = setTimeout(function() {
                                f.css(b._getOffset(!0)),
                                e = setTimeout(function() {
                                    k(),
                                    setTimeout(function() {
                                        f.remove(),
                                        a = f = null,
                                        y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }),
                    w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                            b.st.removalDelay = g,
                            !a) {
                                if (a = b._getItemToZoom(),
                                !a)
                                    return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)),
                            b.wrap.append(f),
                            b.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }),
                    w(h + d, function() {
                        b._allowZoom() && (k(),
                        f && f.remove(),
                        a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset()
                  , f = parseInt(d.css("padding-top"), 10)
                  , g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left,
                h.top = e.top),
                h
            }
        }
    });
    var P = "iframe"
      , Q = "//about:blank"
      , R = function(a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q),
            b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P),
                w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }),
                w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src
                  , f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)),
                    e = this.src.replace("%id%", e),
                    !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e),
                b._parseMarkup(d, g, c),
                b.updateStatus("ready"),
                d
            }
        }
    });
    var S = function(a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }
      , T = function(a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery
                  , e = ".mfp-gallery";
                return b.direction = !0,
                c && c.enabled ? (f += " mfp-gallery",
                w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(),
                        !1) : void 0
                    }),
                    d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }),
                w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }),
                w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }),
                w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup
                          , e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)
                          , f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }),
                        f.click(function() {
                            b.next()
                        }),
                        b.container.append(e.add(f))
                    }
                }),
                w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout),
                    b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(),
                        b._preloadTimeout = null
                    }, 16)
                }),
                void w(h + e, function() {
                    d.off(e),
                    b.wrap.off("click" + e),
                    b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0,
                b.index = S(b.index + 1),
                b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1,
                b.index = S(b.index - 1),
                b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index,
                b.index = a,
                b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)
                    b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c),
                !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                    y("LazyLoad", d),
                    "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0,
                        d.loadError = !0,
                        y("LazyLoadError", d)
                    }).attr("src", d.src)),
                    d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina
                      , c = a.ratio;
                    c = isNaN(c) ? c() : c,
                    c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }),
                    w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }),
    A()
});
;!function(t) {
    "use strict";
    var e = null
      , n = null;
    !function() {
        var e = ["webkit", "moz", "o", "ms"]
          , n = t.document.createElement("div")
          , a = -1;
        for (a = 0; a < e.length && !t.requestAnimationFrame; a++)
            t.requestAnimationFrame = t[e[a] + "RequestAnimationFrame"];
        "undefined" == typeof n.nextElementSibling && Object.defineProperty(t.Element.prototype, "nextElementSibling", {
            get: function() {
                for (var t = this.nextSibling; t; ) {
                    if (1 === t.nodeType)
                        return t;
                    t = t.nextSibling
                }
                return null
            }
        }),
        function(t) {
            t.matches = t.matches || t.machesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector || function(t) {
                return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(t), this) > -1
            }
        }(t.Element.prototype),
        Object.keys || (Object.keys = function() {
            var t = Object.prototype.hasOwnProperty
              , e = !1
              , n = []
              , a = -1;
            return e = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            a = n.length,
            function(i) {
                var o = []
                  , r = ""
                  , s = -1;
                if ("object" != typeof i && ("function" != typeof i || null === i))
                    throw new TypeError("Object.keys called on non-object");
                for (r in i)
                    t.call(i, r) && o.push(r);
                if (e)
                    for (s = 0; s < a; s++)
                        t.call(i, n[s]) && o.push(n[s]);
                return o
            }
        }()),
        Array.isArray || (Array.isArray = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
        ),
        "function" != typeof Object.create && (Object.create = function(t) {
            var e = function() {};
            return function(n, a) {
                if (n !== Object(n) && null !== n)
                    throw TypeError("Argument must be an object, or null");
                e.prototype = n || {};
                var i = new e;
                return e.prototype = null,
                a !== t && Object.defineProperties(i, a),
                null === n && (i.__proto__ = null),
                i
            }
        }()),
        String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
        ),
        Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
            var e, n, a, i;
            if (null === this)
                throw new TypeError;
            if (a = Object(this),
            i = a.length >>> 0,
            0 === i)
                return -1;
            if (e = 0,
            arguments.length > 1 && (e = Number(arguments[1]),
            e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e)))),
            e >= i)
                return -1;
            for (n = e >= 0 ? e : Math.max(i - Math.abs(e), 0); n < i; n++)
                if (n in a && a[n] === t)
                    return n;
            return -1
        }
        ),
        Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e, n, a, i;
            if ("function" != typeof this)
                throw new TypeError;
            return e = Array.prototype.slice.call(arguments, 1),
            n = this,
            a = function() {}
            ,
            i = function() {
                return n.apply(this instanceof a ? this : t, e.concat(Array.prototype.slice.call(arguments)))
            }
            ,
            this.prototype && (a.prototype = this.prototype),
            i.prototype = new a,
            i
        }
        ),
        t.Element.prototype.dispatchEvent || (t.Element.prototype.dispatchEvent = function(t) {
            try {
                return this.fireEvent("on" + t.type, t)
            } catch (e) {}
        }
        )
    }(),
    e = function(a, i, o) {
        var r = null
          , s = !1
          , l = null
          , c = null
          , u = null
          , f = null
          , h = []
          , d = ""
          , m = []
          , g = -1;
        if (u = o || t.document,
        (s = arguments[3]) && (s = "boolean" == typeof s),
        "string" == typeof a)
            m = u.querySelectorAll(a);
        else if (a && "object" == typeof a && n.isElement(a, u))
            m = [a];
        else {
            if (!a || "object" != typeof a || !a.length)
                throw new Error(e.messages.errorFactoryInvalidContainer());
            m = a
        }
        if (m.length < 1)
            throw new Error(e.messages.errorFactoryContainerNotFound());
        for (g = 0; (r = m[g]) && (!(g > 0) || s); g++)
            r.id ? d = r.id : (d = "MixItUp" + n.randomHex(),
            r.id = d),
            e.instances[d]instanceof e.Mixer ? (l = e.instances[d],
            (!i || i && i.debug && i.debug.showWarnings !== !1) && console.warn(e.messages.warningFactoryPreexistingInstance())) : (l = new e.Mixer,
            l.attach(r, u, d, i),
            e.instances[d] = l),
            c = new e.Facade(l),
            i && i.debug && i.debug.enable ? h.push(l) : h.push(c);
        return f = s ? new e.Collection(h) : h[0]
    }
    ,
    e.use = function(t) {
        e.Base.prototype.callActions.call(e, "beforeUse", arguments),
        "function" == typeof t && "mixitup-extension" === t.TYPE ? "undefined" == typeof e.extensions[t.NAME] && (t(e),
        e.extensions[t.NAME] = t) : t.fn && t.fn.jquery && (e.libraries.$ = t),
        e.Base.prototype.callActions.call(e, "afterUse", arguments)
    }
    ,
    e.instances = {},
    e.extensions = {},
    e.libraries = {},
    n = {
        hasClass: function(t, e) {
            return !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
        },
        addClass: function(t, e) {
            this.hasClass(t, e) || (t.className += t.className ? " " + e : e)
        },
        removeClass: function(t, e) {
            if (this.hasClass(t, e)) {
                var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
                t.className = t.className.replace(n, " ").trim()
            }
        },
        extend: function(t, e, n, a) {
            var i = []
              , o = ""
              , r = -1;
            n = n || !1,
            a = a || !1;
            try {
                if (Array.isArray(e))
                    for (r = 0; r < e.length; r++)
                        i.push(r);
                else
                    e && (i = Object.keys(e));
                for (r = 0; r < i.length; r++)
                    o = i[r],
                    !n || "object" != typeof e[o] || this.isElement(e[o]) ? t[o] = e[o] : Array.isArray(e[o]) ? (t[o] || (t[o] = []),
                    this.extend(t[o], e[o], n, a)) : (t[o] || (t[o] = {}),
                    this.extend(t[o], e[o], n, a))
            } catch (s) {
                if (!a)
                    throw s;
                this.handleExtendError(s, t)
            }
            return t
        },
        handleExtendError: function(t, n) {
            var a = /property "?(\w*)"?[,:] object/i
              , i = null
              , o = ""
              , r = ""
              , s = ""
              , l = ""
              , c = ""
              , u = -1
              , f = -1;
            if (t instanceof TypeError && (i = a.exec(t.message))) {
                o = i[1];
                for (c in n) {
                    for (f = 0; f < o.length && o.charAt(f) === c.charAt(f); )
                        f++;
                    f > u && (u = f,
                    l = c)
                }
                throw u > 1 && (s = e.messages.errorConfigInvalidPropertySuggestion({
                    probableMatch: l
                })),
                r = e.messages.errorConfigInvalidProperty({
                    erroneous: o,
                    suggestion: s
                }),
                new TypeError(r)
            }
            throw t
        },
        template: function(t) {
            for (var e = /\${([\w]*)}/g, n = {}, a = null; a = e.exec(t); )
                n[a[1]] = new RegExp("\\${" + a[1] + "}","g");
            return function(e) {
                var a = ""
                  , i = t;
                e = e || {};
                for (a in n)
                    i = i.replace(n[a], "undefined" != typeof e[a] ? e[a] : "");
                return i
            }
        },
        on: function(e, n, a, i) {
            e && (e.addEventListener ? e.addEventListener(n, a, i) : e.attachEvent && (e["e" + n + a] = a,
            e[n + a] = function() {
                e["e" + n + a](t.event)
            }
            ,
            e.attachEvent("on" + n, e[n + a])))
        },
        off: function(t, e, n) {
            t && (t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent && (t.detachEvent("on" + e, t[e + n]),
            t[e + n] = null))
        },
        getCustomEvent: function(e, n, a) {
            var i = null;
            return a = a || t.document,
            "function" == typeof t.CustomEvent ? i = new t.CustomEvent(e,{
                detail: n,
                bubbles: !0,
                cancelable: !0
            }) : "function" == typeof a.createEvent ? (i = a.createEvent("CustomEvent"),
            i.initCustomEvent(e, !0, !0, n)) : (i = a.createEventObject(),
            i.type = e,
            i.returnValue = !1,
            i.cancelBubble = !1,
            i.detail = n),
            i
        },
        getOriginalEvent: function(t) {
            return t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t
        },
        index: function(t, e) {
            for (var n = 0; null !== (t = t.previousElementSibling); )
                e && !t.matches(e) || ++n;
            return n
        },
        camelCase: function(t) {
            return t.toLowerCase().replace(/([_-][a-z])/g, function(t) {
                return t.toUpperCase().replace(/[_-]/, "")
            })
        },
        pascalCase: function(t) {
            return (t = this.camelCase(t)).charAt(0).toUpperCase() + t.slice(1)
        },
        dashCase: function(t) {
            return t.replace(/([A-Z])/g, "-$1").replace(/^-/, "").toLowerCase()
        },
        isElement: function(e, n) {
            return n = n || t.document,
            !!(t.HTMLElement && e instanceof t.HTMLElement) || (!!(n.defaultView && n.defaultView.HTMLElement && e instanceof n.defaultView.HTMLElement) || null !== e && 1 === e.nodeType && "string" == typeof e.nodeName)
        },
        createElement: function(e, n) {
            var a = null
              , i = null;
            for (n = n || t.document,
            a = n.createDocumentFragment(),
            i = n.createElement("div"),
            i.innerHTML = e.trim(); i.firstChild; )
                a.appendChild(i.firstChild);
            return a
        },
        removeWhitespace: function(t) {
            for (var e; t && "#text" === t.nodeName; )
                e = t,
                t = t.previousSibling,
                e.parentElement && e.parentElement.removeChild(e)
        },
        isEqualArray: function(t, e) {
            var n = t.length;
            if (n !== e.length)
                return !1;
            for (; n--; )
                if (t[n] !== e[n])
                    return !1;
            return !0
        },
        deepEquals: function(t, e) {
            var n;
            if ("object" == typeof t && t && "object" == typeof e && e) {
                if (Object.keys(t).length !== Object.keys(e).length)
                    return !1;
                for (n in t)
                    if (!e.hasOwnProperty(n) || !this.deepEquals(t[n], e[n]))
                        return !1
            } else if (t !== e)
                return !1;
            return !0
        },
        arrayShuffle: function(t) {
            for (var e = t.slice(), n = e.length, a = n, i = -1, o = []; a--; )
                i = ~~(Math.random() * n),
                o = e[a],
                e[a] = e[i],
                e[i] = o;
            return e
        },
        arrayFromList: function(t) {
            var e, n;
            try {
                return Array.prototype.slice.call(t)
            } catch (a) {
                for (e = [],
                n = 0; n < t.length; n++)
                    e.push(t[n]);
                return e
            }
        },
        debounce: function(t, e, n) {
            var a;
            return function() {
                var i = this
                  , o = arguments
                  , r = n && !a
                  , s = null;
                s = function() {
                    a = null,
                    n || t.apply(i, o)
                }
                ,
                clearTimeout(a),
                a = setTimeout(s, e),
                r && t.apply(i, o)
            }
        },
        position: function(t) {
            for (var e = 0, n = 0, a = t; t; )
                e -= t.scrollLeft,
                n -= t.scrollTop,
                t === a && (e += t.offsetLeft,
                n += t.offsetTop,
                a = t.offsetParent),
                t = t.parentElement;
            return {
                x: e,
                y: n
            }
        },
        getHypotenuse: function(t, e) {
            var n = t.x - e.x
              , a = t.y - e.y;
            return n = n < 0 ? n * -1 : n,
            a = a < 0 ? a * -1 : a,
            Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2))
        },
        getIntersectionRatio: function(t, e) {
            var n = t.width * t.height
              , a = -1
              , i = -1
              , o = -1
              , r = -1;
            return a = Math.max(0, Math.min(t.left + t.width, e.left + e.width) - Math.max(t.left, e.left)),
            i = Math.max(0, Math.min(t.top + t.height, e.top + e.height) - Math.max(t.top, e.top)),
            o = i * a,
            r = o / n
        },
        closestParent: function(e, n, a, i) {
            var o = e.parentNode;
            if (i = i || t.document,
            a && e.matches(n))
                return e;
            for (; o && o != i.body; ) {
                if (o.matches && o.matches(n))
                    return o;
                if (!o.parentNode)
                    return null;
                o = o.parentNode
            }
            return null
        },
        children: function(e, n, a) {
            var i = []
              , o = "";
            return a = a || t.doc,
            e && (e.id || (o = "Temp" + this.randomHexKey(),
            e.id = o),
            i = a.querySelectorAll("#" + e.id + " > " + n),
            o && e.removeAttribute("id")),
            i
        },
        clean: function(t) {
            var e = []
              , n = -1;
            for (n = 0; n < t.length; n++)
                "" !== t[n] && e.push(t[n]);
            return e
        },
        defer: function(n) {
            var a = null
              , i = null
              , o = null;
            return i = new this.Deferred,
            e.features.has.promises ? i.promise = new Promise(function(t, e) {
                i.resolve = t,
                i.reject = e
            }
            ) : (o = t.jQuery || n.$) && "function" == typeof o.Deferred ? (a = o.Deferred(),
            i.promise = a.promise(),
            i.resolve = a.resolve,
            i.reject = a.reject) : t.console && console.warn(e.messages.warningNoPromiseImplementation()),
            i
        },
        all: function(n, a) {
            var i = null;
            return e.features.has.promises ? Promise.all(n) : (i = t.jQuery || a.$) && "function" == typeof i.when ? i.when.apply(i, n).done(function() {
                return arguments
            }) : (t.console && console.warn(e.messages.warningNoPromiseImplementation()),
            [])
        },
        getPrefix: function(t, e, a) {
            var i = -1
              , o = "";
            if (n.dashCase(e)in t.style)
                return "";
            for (i = 0; o = a[i]; i++)
                if (o + e in t.style)
                    return o.toLowerCase();
            return "unsupported"
        },
        randomHex: function() {
            return ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase()
        },
        getDocumentState: function(e) {
            return e = "object" == typeof e.body ? e : t.document,
            {
                scrollTop: t.pageYOffset,
                scrollLeft: t.pageXOffset,
                docHeight: e.documentElement.scrollHeight,
                docWidth: e.documentElement.scrollWidth,
                viewportHeight: e.documentElement.clientHeight,
                viewportWidth: e.documentElement.clientWidth
            }
        },
        bind: function(t, e) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        isVisible: function(e) {
            var n = null;
            return !!e.offsetParent || (n = t.getComputedStyle(e),
            "fixed" === n.position && "hidden" !== n.visibility && "0" !== n.opacity)
        },
        seal: function(t) {
            "function" == typeof Object.seal && Object.seal(t)
        },
        freeze: function(t) {
            "function" == typeof Object.freeze && Object.freeze(t)
        },
        compareVersions: function(t, e) {
            var n = t.split(".")
              , a = e.split(".")
              , i = -1
              , o = -1
              , r = -1;
            for (r = 0; r < n.length; r++) {
                if (i = parseInt(n[r].replace(/[^\d.]/g, "")),
                o = parseInt(a[r].replace(/[^\d.]/g, "") || 0),
                o < i)
                    return !1;
                if (o > i)
                    return !0
            }
            return !0
        },
        Deferred: function() {
            this.promise = null,
            this.resolve = null,
            this.reject = null,
            this.id = n.randomHex()
        },
        isEmptyObject: function(t) {
            var e = "";
            if ("function" == typeof Object.keys)
                return 0 === Object.keys(t).length;
            for (e in t)
                if (t.hasOwnProperty(e))
                    return !1;
            return !0
        },
        getClassname: function(t, e, n) {
            var a = "";
            return a += t.block,
            a.length && (a += t.delineatorElement),
            a += t["element" + this.pascalCase(e)],
            n ? (a.length && (a += t.delineatorModifier),
            a += n) : a
        },
        getProperty: function(t, e) {
            var n = e.split(".")
              , a = null
              , i = ""
              , o = 0;
            if (!e)
                return t;
            for (a = function(t) {
                return t ? t[i] : null
            }
            ; o < n.length; )
                i = n[o],
                t = a(t),
                o++;
            return "undefined" != typeof t ? t : null
        }
    },
    e.h = n,
    e.Base = function() {}
    ,
    e.Base.prototype = {
        constructor: e.Base,
        callActions: function(t, e) {
            var a = this
              , i = a.constructor.actions[t]
              , o = "";
            if (i && !n.isEmptyObject(i))
                for (o in i)
                    i[o].apply(a, e)
        },
        callFilters: function(t, e, a) {
            var i = this
              , o = i.constructor.filters[t]
              , r = e
              , s = "";
            if (!o || n.isEmptyObject(o))
                return r;
            a = a || [];
            for (s in o)
                a = n.arrayFromList(a),
                a.unshift(r),
                r = o[s].apply(i, a);
            return r
        }
    },
    e.BaseStatic = function() {
        this.actions = {},
        this.filters = {},
        this.extend = function(t) {
            n.extend(this.prototype, t)
        }
        ,
        this.registerAction = function(t, e, n) {
            (this.actions[t] = this.actions[t] || {})[e] = n
        }
        ,
        this.registerFilter = function(t, e, n) {
            (this.filters[t] = this.filters[t] || {})[e] = n
        }
    }
    ,
    e.Features = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.boxSizingPrefix = "",
        this.transformPrefix = "",
        this.transitionPrefix = "",
        this.boxSizingPrefix = "",
        this.transformProp = "",
        this.transformRule = "",
        this.transitionProp = "",
        this.perspectiveProp = "",
        this.perspectiveOriginProp = "",
        this.has = new e.Has,
        this.canary = null,
        this.BOX_SIZING_PROP = "boxSizing",
        this.TRANSITION_PROP = "transition",
        this.TRANSFORM_PROP = "transform",
        this.PERSPECTIVE_PROP = "perspective",
        this.PERSPECTIVE_ORIGIN_PROP = "perspectiveOrigin",
        this.VENDORS = ["Webkit", "moz", "O", "ms"],
        this.TWEENABLE = ["opacity", "width", "height", "marginRight", "marginBottom", "x", "y", "scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ"],
        this.callActions("afterConstruct")
    }
    ,
    e.BaseStatic.call(e.Features),
    e.Features.prototype = Object.create(e.Base.prototype),
    n.extend(e.Features.prototype, {
        constructor: e.Features,
        init: function() {
            var t = this;
            t.callActions("beforeInit", arguments),
            t.canary = document.createElement("div"),
            t.setPrefixes(),
            t.runTests(),
            t.callActions("beforeInit", arguments)
        },
        runTests: function() {
            var e = this;
            e.callActions("beforeRunTests", arguments),
            e.has.promises = "function" == typeof t.Promise,
            e.has.transitions = "unsupported" !== e.transitionPrefix,
            e.callActions("afterRunTests", arguments),
            n.freeze(e.has)
        },
        setPrefixes: function() {
            var t = this;
            t.callActions("beforeSetPrefixes", arguments),
            t.transitionPrefix = n.getPrefix(t.canary, "Transition", t.VENDORS),
            t.transformPrefix = n.getPrefix(t.canary, "Transform", t.VENDORS),
            t.boxSizingPrefix = n.getPrefix(t.canary, "BoxSizing", t.VENDORS),
            t.boxSizingProp = t.boxSizingPrefix ? t.boxSizingPrefix + n.pascalCase(t.BOX_SIZING_PROP) : t.BOX_SIZING_PROP,
            t.transitionProp = t.transitionPrefix ? t.transitionPrefix + n.pascalCase(t.TRANSITION_PROP) : t.TRANSITION_PROP,
            t.transformProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.TRANSFORM_PROP) : t.TRANSFORM_PROP,
            t.transformRule = t.transformPrefix ? "-" + t.transformPrefix + "-" + t.TRANSFORM_PROP : t.TRANSFORM_PROP,
            t.perspectiveProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.PERSPECTIVE_PROP) : t.PERSPECTIVE_PROP,
            t.perspectiveOriginProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.PERSPECTIVE_ORIGIN_PROP) : t.PERSPECTIVE_ORIGIN_PROP,
            t.callActions("afterSetPrefixes", arguments)
        }
    }),
    e.Has = function() {
        this.transitions = !1,
        this.promises = !1,
        n.seal(this)
    }
    ,
    e.features = new e.Features,
    e.features.init(),
    e.ConfigAnimation = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.enable = !0,
        this.effects = "fade scale",
        this.effectsIn = "",
        this.effectsOut = "",
        this.duration = 600,
        this.easing = "ease",
        this.applyPerspective = !0,
        this.perspectiveDistance = "3000px",
        this.perspectiveOrigin = "50% 50%",
        this.queue = !0,
        this.queueLimit = 3,
        this.animateResizeContainer = !0,
        this.animateResizeTargets = !1,
        this.staggerSequence = null,
        this.reverseOut = !1,
        this.nudge = !0,
        this.clampHeight = !0,
        this.clampWidth = !0,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.ConfigAnimation),
    e.ConfigAnimation.prototype = Object.create(e.Base.prototype),
    e.ConfigAnimation.prototype.constructor = e.ConfigAnimation,
    e.ConfigBehavior = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.liveSort = !1,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.ConfigBehavior),
    e.ConfigBehavior.prototype = Object.create(e.Base.prototype),
    e.ConfigBehavior.prototype.constructor = e.ConfigBehavior,
    e.ConfigCallbacks = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.onMixStart = null,
        this.onMixBusy = null,
        this.onMixEnd = null,
        this.onMixFail = null,
        this.onMixClick = null,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.ConfigCallbacks),
    e.ConfigCallbacks.prototype = Object.create(e.Base.prototype),
    e.ConfigCallbacks.prototype.constructor = e.ConfigCallbacks,
    e.ConfigControls = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.enable = !0,
        this.live = !1,
        this.scope = "global",
        this.toggleLogic = "or",
        this.toggleDefault = "all",
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.ConfigControls),
    e.ConfigControls.prototype = Object.create(e.Base.prototype),
    e.ConfigControls.prototype.constructor = e.ConfigControls,
    e.ConfigClassNames = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.block = "mixitup",
        this.elementContainer = "container",
        this.elementFilter = "control",
        this.elementSort = "control",
        this.elementMultimix = "control",
        this.elementToggle = "control",
        this.modifierActive = "active",
        this.modifierDisabled = "disabled",
        this.modifierFailed = "failed",
        this.delineatorElement = "-",
        this.delineatorModifier = "-",
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.ConfigClassNames),
    e.ConfigClassNames.prototype = Object.create(e.Base.prototype),
    e.ConfigClassNames.prototype.constructor = e.ConfigClassNames,
    e.ConfigData = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.uidKey = "",
        this.dirtyCheck = !1,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.ConfigData),
    e.ConfigData.prototype = Object.create(e.Base.prototype),
    e.ConfigData.prototype.constructor = e.ConfigData,
    e.ConfigDebug = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.enable = !1,
        this.showWarnings = !0,
        this.fauxAsync = !1,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.ConfigDebug),
    e.ConfigDebug.prototype = Object.create(e.Base.prototype),
    e.ConfigDebug.prototype.constructor = e.ConfigDebug,
    e.ConfigLayout = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.allowNestedTargets = !0,
        this.containerClassName = "",
        this.siblingBefore = null,
        this.siblingAfter = null,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.ConfigLayout),
    e.ConfigLayout.prototype = Object.create(e.Base.prototype),
    e.ConfigLayout.prototype.constructor = e.ConfigLayout,
    e.ConfigLoad = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.filter = "all",
        this.sort = "default:asc",
        this.dataset = null,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.ConfigLoad),
    e.ConfigLoad.prototype = Object.create(e.Base.prototype),
    e.ConfigLoad.prototype.constructor = e.ConfigLoad,
    e.ConfigSelectors = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.target = ".mix",
        this.control = "",
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.ConfigSelectors),
    e.ConfigSelectors.prototype = Object.create(e.Base.prototype),
    e.ConfigSelectors.prototype.constructor = e.ConfigSelectors,
    e.ConfigRender = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.target = null,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.ConfigRender),
    e.ConfigRender.prototype = Object.create(e.Base.prototype),
    e.ConfigRender.prototype.constructor = e.ConfigRender,
    e.ConfigTemplates = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.ConfigTemplates),
    e.ConfigTemplates.prototype = Object.create(e.Base.prototype),
    e.ConfigTemplates.prototype.constructor = e.ConfigTemplates,
    e.Config = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.animation = new e.ConfigAnimation,
        this.behavior = new e.ConfigBehavior,
        this.callbacks = new e.ConfigCallbacks,
        this.controls = new e.ConfigControls,
        this.classNames = new e.ConfigClassNames,
        this.data = new e.ConfigData,
        this.debug = new e.ConfigDebug,
        this.layout = new e.ConfigLayout,
        this.load = new e.ConfigLoad,
        this.selectors = new e.ConfigSelectors,
        this.render = new e.ConfigRender,
        this.templates = new e.ConfigTemplates,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.Config),
    e.Config.prototype = Object.create(e.Base.prototype),
    e.Config.prototype.constructor = e.Config,
    e.MixerDom = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.document = null,
        this.body = null,
        this.container = null,
        this.parent = null,
        this.targets = [],
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.MixerDom),
    e.MixerDom.prototype = Object.create(e.Base.prototype),
    e.MixerDom.prototype.constructor = e.MixerDom,
    e.UiClassNames = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.base = "",
        this.active = "",
        this.disabled = "",
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.UiClassNames),
    e.UiClassNames.prototype = Object.create(e.Base.prototype),
    e.UiClassNames.prototype.constructor = e.UiClassNames,
    e.CommandDataset = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.dataset = null,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.CommandDataset),
    e.CommandDataset.prototype = Object.create(e.Base.prototype),
    e.CommandDataset.prototype.constructor = e.CommandDataset,
    e.CommandMultimix = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.filter = null,
        this.sort = null,
        this.insert = null,
        this.remove = null,
        this.changeLayout = null,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.CommandMultimix),
    e.CommandMultimix.prototype = Object.create(e.Base.prototype),
    e.CommandMultimix.prototype.constructor = e.CommandMultimix,
    e.CommandFilter = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.selector = "",
        this.collection = null,
        this.action = "show",
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.CommandFilter),
    e.CommandFilter.prototype = Object.create(e.Base.prototype),
    e.CommandFilter.prototype.constructor = e.CommandFilter,
    e.CommandSort = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.sortString = "",
        this.attribute = "",
        this.order = "asc",
        this.collection = null,
        this.next = null,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.CommandSort),
    e.CommandSort.prototype = Object.create(e.Base.prototype),
    e.CommandSort.prototype.constructor = e.CommandSort,
    e.CommandInsert = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.index = 0,
        this.collection = [],
        this.position = "before",
        this.sibling = null,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.CommandInsert),
    e.CommandInsert.prototype = Object.create(e.Base.prototype),
    e.CommandInsert.prototype.constructor = e.CommandInsert,
    e.CommandRemove = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.targets = [],
        this.collection = [],
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.CommandRemove),
    e.CommandRemove.prototype = Object.create(e.Base.prototype),
    e.CommandRemove.prototype.constructor = e.CommandRemove,
    e.CommandChangeLayout = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.containerClassName = "",
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.CommandChangeLayout),
    e.CommandChangeLayout.prototype = Object.create(e.Base.prototype),
    e.CommandChangeLayout.prototype.constructor = e.CommandChangeLayout,
    e.ControlDefinition = function(t, a, i, o) {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.type = t,
        this.selector = a,
        this.live = i || !1,
        this.parent = o || "",
        this.callActions("afterConstruct"),
        n.freeze(this),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.ControlDefinition),
    e.ControlDefinition.prototype = Object.create(e.Base.prototype),
    e.ControlDefinition.prototype.constructor = e.ControlDefinition,
    e.controlDefinitions = [],
    e.controlDefinitions.push(new e.ControlDefinition("multimix","[data-filter][data-sort]")),
    e.controlDefinitions.push(new e.ControlDefinition("filter","[data-filter]")),
    e.controlDefinitions.push(new e.ControlDefinition("sort","[data-sort]")),
    e.controlDefinitions.push(new e.ControlDefinition("toggle","[data-toggle]")),
    e.Control = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.el = null,
        this.selector = "",
        this.bound = [],
        this.pending = -1,
        this.type = "",
        this.status = "inactive",
        this.filter = "",
        this.sort = "",
        this.canDisable = !1,
        this.handler = null,
        this.classNames = new e.UiClassNames,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.Control),
    e.Control.prototype = Object.create(e.Base.prototype),
    n.extend(e.Control.prototype, {
        constructor: e.Control,
        init: function(t, n, a) {
            var i = this;
            if (this.callActions("beforeInit", arguments),
            i.el = t,
            i.type = n,
            i.selector = a,
            i.selector)
                i.status = "live";
            else
                switch (i.canDisable = "boolean" == typeof i.el.disable,
                i.type) {
                case "filter":
                    i.filter = i.el.getAttribute("data-filter");
                    break;
                case "toggle":
                    i.filter = i.el.getAttribute("data-toggle");
                    break;
                case "sort":
                    i.sort = i.el.getAttribute("data-sort");
                    break;
                case "multimix":
                    i.filter = i.el.getAttribute("data-filter"),
                    i.sort = i.el.getAttribute("data-sort")
                }
            i.bindClick(),
            e.controls.push(i),
            this.callActions("afterInit", arguments)
        },
        isBound: function(t) {
            var e = this
              , n = !1;
            return this.callActions("beforeIsBound", arguments),
            n = e.bound.indexOf(t) > -1,
            e.callFilters("afterIsBound", n, arguments)
        },
        addBinding: function(t) {
            var e = this;
            this.callActions("beforeAddBinding", arguments),
            e.isBound() || e.bound.push(t),
            this.callActions("afterAddBinding", arguments)
        },
        removeBinding: function(t) {
            var n = this
              , a = -1;
            this.callActions("beforeRemoveBinding", arguments),
            (a = n.bound.indexOf(t)) > -1 && n.bound.splice(a, 1),
            n.bound.length < 1 && (n.unbindClick(),
            a = e.controls.indexOf(n),
            e.controls.splice(a, 1),
            "active" === n.status && n.renderStatus(n.el, "inactive")),
            this.callActions("afterRemoveBinding", arguments)
        },
        bindClick: function() {
            var t = this;
            this.callActions("beforeBindClick", arguments),
            t.handler = function(e) {
                t.handleClick(e)
            }
            ,
            n.on(t.el, "click", t.handler),
            this.callActions("afterBindClick", arguments)
        },
        unbindClick: function() {
            var t = this;
            this.callActions("beforeUnbindClick", arguments),
            n.off(t.el, "click", t.handler),
            t.handler = null,
            this.callActions("afterUnbindClick", arguments)
        },
        handleClick: function(t) {
            var a = this
              , i = null
              , o = null
              , r = !1
              , s = void 0
              , l = {}
              , c = null
              , u = []
              , f = -1;
            if (this.callActions("beforeHandleClick", arguments),
            this.pending = 0,
            o = a.bound[0],
            i = a.selector ? n.closestParent(t.target, o.config.selectors.control + a.selector, !0, o.dom.document) : a.el,
            !i)
                return void a.callActions("afterHandleClick", arguments);
            switch (a.type) {
            case "filter":
                l.filter = a.filter || i.getAttribute("data-filter");
                break;
            case "sort":
                l.sort = a.sort || i.getAttribute("data-sort");
                break;
            case "multimix":
                l.filter = a.filter || i.getAttribute("data-filter"),
                l.sort = a.sort || i.getAttribute("data-sort");
                break;
            case "toggle":
                l.filter = a.filter || i.getAttribute("data-toggle"),
                r = "live" === a.status ? n.hasClass(i, a.classNames.active) : "active" === a.status
            }
            for (f = 0; f < a.bound.length; f++)
                c = new e.CommandMultimix,
                n.extend(c, l),
                u.push(c);
            for (u = a.callFilters("commandsHandleClick", u, arguments),
            a.pending = a.bound.length,
            f = 0; o = a.bound[f]; f++)
                l = u[f],
                l && (o.lastClicked || (o.lastClicked = i),
                e.events.fire("mixClick", o.dom.container, {
                    state: o.state,
                    instance: o,
                    originalEvent: t,
                    control: o.lastClicked
                }, o.dom.document),
                "function" == typeof o.config.callbacks.onMixClick && (s = o.config.callbacks.onMixClick.call(o.lastClicked, o.state, t, o),
                s === !1) || ("toggle" === a.type ? r ? o.toggleOff(l.filter) : o.toggleOn(l.filter) : o.multimix(l)));
            this.callActions("afterHandleClick", arguments)
        },
        update: function(t, n) {
            var a = this
              , i = new e.CommandMultimix;
            a.callActions("beforeUpdate", arguments),
            a.pending--,
            a.pending = Math.max(0, a.pending),
            a.pending > 0 || ("live" === a.status ? a.updateLive(t, n) : (i.sort = a.sort,
            i.filter = a.filter,
            a.callFilters("actionsUpdate", i, arguments),
            a.parseStatusChange(a.el, t, i, n)),
            a.callActions("afterUpdate", arguments))
        },
        updateLive: function(t, n) {
            var a = this
              , i = null
              , o = null
              , r = null
              , s = -1;
            if (a.callActions("beforeUpdateLive", arguments),
            a.el) {
                for (i = a.el.querySelectorAll(a.selector),
                s = 0; r = i[s]; s++) {
                    switch (o = new e.CommandMultimix,
                    a.type) {
                    case "filter":
                        o.filter = r.getAttribute("data-filter");
                        break;
                    case "sort":
                        o.sort = r.getAttribute("data-sort");
                        break;
                    case "multimix":
                        o.filter = r.getAttribute("data-filter"),
                        o.sort = r.getAttribute("data-sort");
                        break;
                    case "toggle":
                        o.filter = r.getAttribute("data-toggle")
                    }
                    o = a.callFilters("actionsUpdateLive", o, arguments),
                    a.parseStatusChange(r, t, o, n)
                }
                a.callActions("afterUpdateLive", arguments)
            }
        },
        parseStatusChange: function(t, e, n, a) {
            var i = this
              , o = ""
              , r = ""
              , s = -1;
            switch (i.callActions("beforeParseStatusChange", arguments),
            i.type) {
            case "filter":
                e.filter === n.filter ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
                break;
            case "multimix":
                e.sort === n.sort && e.filter === n.filter ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
                break;
            case "sort":
                e.sort.match(/:asc/g) && (o = e.sort.replace(/:asc/g, "")),
                e.sort === n.sort || o === n.sort ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
                break;
            case "toggle":
                for (a.length < 1 && i.renderStatus(t, "inactive"),
                e.filter === n.filter && i.renderStatus(t, "active"),
                s = 0; s < a.length; s++) {
                    if (r = a[s],
                    r === n.filter) {
                        i.renderStatus(t, "active");
                        break
                    }
                    i.renderStatus(t, "inactive")
                }
            }
            i.callActions("afterParseStatusChange", arguments)
        },
        renderStatus: function(t, e) {
            var a = this;
            switch (a.callActions("beforeRenderStatus", arguments),
            e) {
            case "active":
                n.addClass(t, a.classNames.active),
                n.removeClass(t, a.classNames.disabled),
                a.canDisable && (a.el.disabled = !1);
                break;
            case "inactive":
                n.removeClass(t, a.classNames.active),
                n.removeClass(t, a.classNames.disabled),
                a.canDisable && (a.el.disabled = !1);
                break;
            case "disabled":
                a.canDisable && (a.el.disabled = !0),
                n.addClass(t, a.classNames.disabled),
                n.removeClass(t, a.classNames.active)
            }
            "live" !== a.status && (a.status = e),
            a.callActions("afterRenderStatus", arguments)
        }
    }),
    e.controls = [],
    e.StyleData = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.x = 0,
        this.y = 0,
        this.top = 0,
        this.right = 0,
        this.bottom = 0,
        this.left = 0,
        this.width = 0,
        this.height = 0,
        this.marginRight = 0,
        this.marginBottom = 0,
        this.opacity = 0,
        this.scale = new e.TransformData,
        this.translateX = new e.TransformData,
        this.translateY = new e.TransformData,
        this.translateZ = new e.TransformData,
        this.rotateX = new e.TransformData,
        this.rotateY = new e.TransformData,
        this.rotateZ = new e.TransformData,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.StyleData),
    e.StyleData.prototype = Object.create(e.Base.prototype),
    e.StyleData.prototype.constructor = e.StyleData,
    e.TransformData = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.value = 0,
        this.unit = "",
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.TransformData),
    e.TransformData.prototype = Object.create(e.Base.prototype),
    e.TransformData.prototype.constructor = e.TransformData,
    e.TransformDefaults = function() {
        e.StyleData.apply(this),
        this.callActions("beforeConstruct"),
        this.scale.value = .01,
        this.scale.unit = "",
        this.translateX.value = 20,
        this.translateX.unit = "px",
        this.translateY.value = 20,
        this.translateY.unit = "px",
        this.translateZ.value = 20,
        this.translateZ.unit = "px",
        this.rotateX.value = 90,
        this.rotateX.unit = "deg",
        this.rotateY.value = 90,
        this.rotateY.unit = "deg",
        this.rotateX.value = 90,
        this.rotateX.unit = "deg",
        this.rotateZ.value = 180,
        this.rotateZ.unit = "deg",
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.TransformDefaults),
    e.TransformDefaults.prototype = Object.create(e.StyleData.prototype),
    e.TransformDefaults.prototype.constructor = e.TransformDefaults,
    e.transformDefaults = new e.TransformDefaults,
    e.EventDetail = function() {
        this.state = null,
        this.futureState = null,
        this.instance = null,
        this.originalEvent = null
    }
    ,
    e.Events = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.mixStart = null,
        this.mixBusy = null,
        this.mixEnd = null,
        this.mixFail = null,
        this.mixClick = null,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.Events),
    e.Events.prototype = Object.create(e.Base.prototype),
    e.Events.prototype.constructor = e.Events,
    e.Events.prototype.fire = function(t, a, i, o) {
        var r = this
          , s = null
          , l = new e.EventDetail;
        if (r.callActions("beforeFire", arguments),
        "undefined" == typeof r[t])
            throw new Error('Event type "' + t + '" not found.');
        l.state = new e.State,
        n.extend(l.state, i.state),
        i.futureState && (l.futureState = new e.State,
        n.extend(l.futureState, i.futureState)),
        l.instance = i.instance,
        i.originalEvent && (l.originalEvent = i.originalEvent),
        s = n.getCustomEvent(t, l, o),
        r.callFilters("eventFire", s, arguments),
        a.dispatchEvent(s)
    }
    ,
    e.events = new e.Events,
    e.QueueItem = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.args = [],
        this.instruction = null,
        this.triggerElement = null,
        this.deferred = null,
        this.isToggling = !1,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.QueueItem),
    e.QueueItem.prototype = Object.create(e.Base.prototype),
    e.QueueItem.prototype.constructor = e.QueueItem,
    e.Mixer = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.config = new e.Config,
        this.id = "",
        this.isBusy = !1,
        this.isToggling = !1,
        this.incPadding = !0,
        this.controls = [],
        this.targets = [],
        this.origOrder = [],
        this.cache = {},
        this.toggleArray = [],
        this.targetsMoved = 0,
        this.targetsImmovable = 0,
        this.targetsBound = 0,
        this.targetsDone = 0,
        this.staggerDuration = 0,
        this.effectsIn = null,
        this.effectsOut = null,
        this.transformIn = [],
        this.transformOut = [],
        this.queue = [],
        this.state = null,
        this.lastOperation = null,
        this.lastClicked = null,
        this.userCallback = null,
        this.userDeferred = null,
        this.dom = new e.MixerDom,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.Mixer),
    e.Mixer.prototype = Object.create(e.Base.prototype),
    n.extend(e.Mixer.prototype, {
        constructor: e.Mixer,
        attach: function(a, i, o, r) {
            var s = this
              , l = null
              , c = -1;
            for (s.callActions("beforeAttach", arguments),
            s.id = o,
            r && n.extend(s.config, r, !0, !0),
            s.sanitizeConfig(),
            s.cacheDom(a, i),
            s.config.layout.containerClassName && n.addClass(s.dom.container, s.config.layout.containerClassName),
            e.features.has.transitions || (s.config.animation.enable = !1),
            "undefined" == typeof t.console && (s.config.debug.showWarnings = !1),
            s.config.data.uidKey && (s.config.controls.enable = !1),
            s.indexTargets(),
            s.state = s.getInitialState(),
            c = 0; l = s.lastOperation.toHide[c]; c++)
                l.hide();
            s.config.controls.enable && (s.initControls(),
            s.buildToggleArray(null, s.state),
            s.updateControls({
                filter: s.state.activeFilter,
                sort: s.state.activeSort
            })),
            s.parseEffects(),
            s.callActions("afterAttach", arguments)
        },
        sanitizeConfig: function() {
            var t = this;
            t.callActions("beforeSanitizeConfig", arguments),
            t.config.controls.scope = t.config.controls.scope.toLowerCase().trim(),
            t.config.controls.toggleLogic = t.config.controls.toggleLogic.toLowerCase().trim(),
            t.config.controls.toggleDefault = t.config.controls.toggleDefault.toLowerCase().trim(),
            t.config.animation.effects = t.config.animation.effects.trim(),
            t.callActions("afterSanitizeConfig", arguments)
        },
        getInitialState: function() {
            var t = this
              , n = new e.State
              , a = new e.Operation;
            if (t.callActions("beforeGetInitialState", arguments),
            n.activeContainerClassName = t.config.layout.containerClassName,
            t.config.load.dataset) {
                if (!t.config.data.uidKey || "string" != typeof t.config.data.uidKey)
                    throw new TypeError(e.messages.errorConfigDataUidKeyNotSet());
                a.startDataset = a.newDataset = n.activeDataset = t.config.load.dataset.slice(),
                a.startContainerClassName = a.newContainerClassName = n.activeContainerClassName,
                a.show = t.targets.slice(),
                n = t.callFilters("stateGetInitialState", n, arguments)
            } else
                n.activeFilter = t.parseFilterArgs([t.config.load.filter]).command,
                n.activeSort = t.parseSortArgs([t.config.load.sort]).command,
                n.totalTargets = t.targets.length,
                n = t.callFilters("stateGetInitialState", n, arguments),
                n.activeSort.collection || n.activeSort.attribute || "random" === n.activeSort.order || "desc" === n.activeSort.order ? (a.newSort = n.activeSort,
                t.sortOperation(a),
                t.printSort(!1, a),
                t.targets = a.newOrder) : a.startOrder = a.newOrder = t.targets,
                a.startFilter = a.newFilter = n.activeFilter,
                a.startSort = a.newSort = n.activeSort,
                a.startContainerClassName = a.newContainerClassName = n.activeContainerClassName,
                "all" === a.newFilter.selector ? a.newFilter.selector = t.config.selectors.target : "none" === a.newFilter.selector && (a.newFilter.selector = "");
            return a = t.callFilters("operationGetInitialState", a, [n]),
            t.lastOperation = a,
            a.newFilter && t.filterOperation(a),
            n = t.buildState(a)
        },
        cacheDom: function(t, e) {
            var n = this;
            n.callActions("beforeCacheDom", arguments),
            n.dom.document = e,
            n.dom.body = n.dom.document.querySelector("body"),
            n.dom.container = t,
            n.dom.parent = t,
            n.callActions("afterCacheDom", arguments)
        },
        indexTargets: function() {
            var t = this
              , a = null
              , i = null
              , o = null
              , r = -1;
            if (t.callActions("beforeIndexTargets", arguments),
            t.dom.targets = t.config.layout.allowNestedTargets ? t.dom.container.querySelectorAll(t.config.selectors.target) : n.children(t.dom.container, t.config.selectors.target, t.dom.document),
            t.dom.targets = n.arrayFromList(t.dom.targets),
            t.targets = [],
            (o = t.config.load.dataset) && o.length !== t.dom.targets.length)
                throw new Error(e.messages.errorDatasetPrerenderedMismatch());
            if (t.dom.targets.length) {
                for (r = 0; i = t.dom.targets[r]; r++)
                    a = new e.Target,
                    a.init(i, t, o ? o[r] : void 0),
                    a.isInDom = !0,
                    t.targets.push(a);
                t.dom.parent = t.dom.targets[0].parentElement === t.dom.container ? t.dom.container : t.dom.targets[0].parentElement
            }
            t.origOrder = t.targets,
            t.callActions("afterIndexTargets", arguments)
        },
        initControls: function() {
            var t = this
              , n = ""
              , a = null
              , i = null
              , o = null
              , r = null
              , s = null
              , l = -1
              , c = -1;
            switch (t.callActions("beforeInitControls", arguments),
            t.config.controls.scope) {
            case "local":
                o = t.dom.container;
                break;
            case "global":
                o = t.dom.document;
                break;
            default:
                throw new Error(e.messages.errorConfigInvalidControlsScope())
            }
            for (l = 0; n = e.controlDefinitions[l]; l++)
                if (t.config.controls.live || n.live) {
                    if (n.parent) {
                        if (r = t.dom[n.parent],
                        !r || r.length < 0)
                            continue;
                        "number" != typeof r.length && (r = [r])
                    } else
                        r = [o];
                    for (c = 0; i = r[c]; c++)
                        s = t.getControl(i, n.type, n.selector),
                        t.controls.push(s)
                } else
                    for (a = o.querySelectorAll(t.config.selectors.control + n.selector),
                    c = 0; i = a[c]; c++)
                        s = t.getControl(i, n.type, ""),
                        s && t.controls.push(s);
            t.callActions("afterInitControls", arguments)
        },
        getControl: function(t, a, i) {
            var o = this
              , r = null
              , s = -1;
            if (o.callActions("beforeGetControl", arguments),
            !i)
                for (s = 0; r = e.controls[s]; s++) {
                    if (r.el === t && r.isBound(o))
                        return o.callFilters("controlGetControl", null, arguments);
                    if (r.el === t && r.type === a && r.selector === i)
                        return r.addBinding(o),
                        o.callFilters("controlGetControl", r, arguments)
                }
            return r = new e.Control,
            r.init(t, a, i),
            r.classNames.base = n.getClassname(o.config.classNames, a),
            r.classNames.active = n.getClassname(o.config.classNames, a, o.config.classNames.modifierActive),
            r.classNames.disabled = n.getClassname(o.config.classNames, a, o.config.classNames.modifierDisabled),
            r.addBinding(o),
            o.callFilters("controlGetControl", r, arguments)
        },
        getToggleSelector: function() {
            var t = this
              , e = "or" === t.config.controls.toggleLogic ? ", " : ""
              , a = "";
            return t.callActions("beforeGetToggleSelector", arguments),
            t.toggleArray = n.clean(t.toggleArray),
            a = t.toggleArray.join(e),
            "" === a && (a = t.config.controls.toggleDefault),
            t.callFilters("selectorGetToggleSelector", a, arguments)
        },
        buildToggleArray: function(t, e) {
            var a = this
              , i = "";
            if (a.callActions("beforeBuildToggleArray", arguments),
            t && t.filter)
                i = t.filter.selector.replace(/\s/g, "");
            else {
                if (!e)
                    return;
                i = e.activeFilter.selector.replace(/\s/g, "")
            }
            i !== a.config.selectors.target && "all" !== i || (i = ""),
            "or" === a.config.controls.toggleLogic ? a.toggleArray = i.split(",") : a.toggleArray = a.splitCompoundSelector(i),
            a.toggleArray = n.clean(a.toggleArray),
            a.callActions("afterBuildToggleArray", arguments)
        },
        splitCompoundSelector: function(t) {
            var e = t.split(/([\.\[])/g)
              , n = []
              , a = ""
              , i = -1;
            for ("" === e[0] && e.shift(),
            i = 0; i < e.length; i++)
                i % 2 === 0 && (a = ""),
                a += e[i],
                i % 2 !== 0 && n.push(a);
            return n
        },
        updateControls: function(t) {
            var a = this
              , i = null
              , o = new e.CommandMultimix
              , r = -1;
            for (a.callActions("beforeUpdateControls", arguments),
            t.filter ? o.filter = t.filter.selector : o.filter = a.state.activeFilter.selector,
            t.sort ? o.sort = a.buildSortString(t.sort) : o.sort = a.buildSortString(a.state.activeSort),
            o.filter === a.config.selectors.target && (o.filter = "all"),
            "" === o.filter && (o.filter = "none"),
            n.freeze(o),
            r = 0; i = a.controls[r]; r++)
                i.update(o, a.toggleArray);
            a.callActions("afterUpdateControls", arguments)
        },
        buildSortString: function(t) {
            var e = this
              , n = "";
            return n += t.sortString,
            t.next && (n += " " + e.buildSortString(t.next)),
            n
        },
        insertTargets: function(t, a) {
            var i = this
              , o = null
              , r = -1
              , s = null
              , l = null
              , c = null
              , u = -1;
            if (i.callActions("beforeInsertTargets", arguments),
            "undefined" == typeof t.index && (t.index = 0),
            o = i.getNextSibling(t.index, t.sibling, t.position),
            s = i.dom.document.createDocumentFragment(),
            r = o ? n.index(o, i.config.selectors.target) : i.targets.length,
            t.collection) {
                for (u = 0; c = t.collection[u]; u++) {
                    if (i.dom.targets.indexOf(c) > -1)
                        throw new Error(e.messages.errorInsertPreexistingElement());
                    c.style.display = "none",
                    s.appendChild(c),
                    s.appendChild(i.dom.document.createTextNode(" ")),
                    n.isElement(c, i.dom.document) && c.matches(i.config.selectors.target) && (l = new e.Target,
                    l.init(c, i),
                    l.isInDom = !0,
                    i.targets.splice(r, 0, l),
                    r++)
                }
                i.dom.parent.insertBefore(s, o)
            }
            a.startOrder = i.origOrder = i.targets,
            i.callActions("afterInsertTargets", arguments)
        },
        getNextSibling: function(t, e, n) {
            var a = this
              , i = null;
            return t = Math.max(t, 0),
            e && "before" === n ? i = e : e && "after" === n ? i = e.nextElementSibling || null : a.targets.length > 0 && "undefined" != typeof t ? i = t < a.targets.length || !a.targets.length ? a.targets[t].dom.el : a.targets[a.targets.length - 1].dom.el.nextElementSibling : 0 === a.targets.length && a.dom.parent.children.length > 0 && (a.config.layout.siblingAfter ? i = a.config.layout.siblingAfter : a.config.layout.siblingBefore ? i = a.config.layout.siblingBefore.nextElementSibling : a.dom.parent.children[0]),
            a.callFilters("elementGetNextSibling", i, arguments)
        },
        filterOperation: function(t) {
            var e = this
              , n = !1
              , a = -1
              , i = ""
              , o = null
              , r = -1;
            for (e.callActions("beforeFilterOperation", arguments),
            i = t.newFilter.action,
            r = 0; o = t.newOrder[r]; r++)
                n = t.newFilter.collection ? t.newFilter.collection.indexOf(o.dom.el) > -1 : "" !== t.newFilter.selector && o.dom.el.matches(t.newFilter.selector),
                e.evaluateHideShow(n, o, i, t);
            if (t.toRemove.length)
                for (r = 0; o = t.show[r]; r++)
                    t.toRemove.indexOf(o) > -1 && (t.show.splice(r, 1),
                    (a = t.toShow.indexOf(o)) > -1 && t.toShow.splice(a, 1),
                    t.toHide.push(o),
                    t.hide.push(o),
                    r--);
            t.matching = t.show.slice(),
            0 === t.show.length && "" !== t.newFilter.selector && 0 !== e.targets.length && (t.hasFailed = !0),
            e.callActions("afterFilterOperation", arguments)
        },
        evaluateHideShow: function(t, e, n, a) {
            var i = this
              , o = !1
              , r = Array.prototype.slice.call(arguments, 1);
            o = i.callFilters("testResultEvaluateHideShow", t, r),
            i.callActions("beforeEvaluateHideShow", arguments),
            o === !0 && "show" === n || o === !1 && "hide" === n ? (a.show.push(e),
            !e.isShown && a.toShow.push(e)) : (a.hide.push(e),
            e.isShown && a.toHide.push(e)),
            i.callActions("afterEvaluateHideShow", arguments)
        },
        sortOperation: function(t) {
            var a = this
              , i = []
              , o = null
              , r = null
              , s = -1;
            if (a.callActions("beforeSortOperation", arguments),
            t.startOrder = a.targets,
            t.newSort.collection) {
                for (i = [],
                s = 0; r = t.newSort.collection[s]; s++) {
                    if (a.dom.targets.indexOf(r) < 0)
                        throw new Error(e.messages.errorSortNonExistentElement());
                    o = new e.Target,
                    o.init(r, a),
                    o.isInDom = !0,
                    i.push(o)
                }
                t.newOrder = i
            } else
                "random" === t.newSort.order ? t.newOrder = n.arrayShuffle(t.startOrder) : "" === t.newSort.attribute ? (t.newOrder = a.origOrder.slice(),
                "desc" === t.newSort.order && t.newOrder.reverse()) : (t.newOrder = t.startOrder.slice(),
                t.newOrder.sort(function(e, n) {
                    return a.compare(e, n, t.newSort)
                }));
            n.isEqualArray(t.newOrder, t.startOrder) && (t.willSort = !1),
            a.callActions("afterSortOperation", arguments)
        },
        compare: function(t, e, n) {
            var a = this
              , i = n.order
              , o = a.getAttributeValue(t, n.attribute)
              , r = a.getAttributeValue(e, n.attribute);
            return isNaN(1 * o) || isNaN(1 * r) ? (o = o.toLowerCase(),
            r = r.toLowerCase()) : (o = 1 * o,
            r = 1 * r),
            o < r ? "asc" === i ? -1 : 1 : o > r ? "asc" === i ? 1 : -1 : o === r && n.next ? a.compare(t, e, n.next) : 0
        },
        getAttributeValue: function(t, n) {
            var a = this
              , i = "";
            return i = t.dom.el.getAttribute("data-" + n),
            null === i && a.config.debug.showWarnings && console.warn(e.messages.warningInconsistentSortingAttributes({
                attribute: "data-" + n
            })),
            a.callFilters("valueGetAttributeValue", i || 0, arguments)
        },
        printSort: function(e, a) {
            var i = this
              , o = e ? a.newOrder : a.startOrder
              , r = e ? a.startOrder : a.newOrder
              , s = o.length ? o[o.length - 1].dom.el.nextElementSibling : null
              , l = t.document.createDocumentFragment()
              , c = null
              , u = null
              , f = null
              , h = -1;
            for (i.callActions("beforePrintSort", arguments),
            h = 0; u = o[h]; h++)
                f = u.dom.el,
                "absolute" !== f.style.position && (n.removeWhitespace(f.previousSibling),
                f.parentElement.removeChild(f));
            for (c = s ? s.previousSibling : i.dom.parent.lastChild,
            c && "#text" === c.nodeName && n.removeWhitespace(c),
            h = 0; u = r[h]; h++)
                f = u.dom.el,
                n.isElement(l.lastChild) && l.appendChild(t.document.createTextNode(" ")),
                l.appendChild(f);
            i.dom.parent.firstChild && i.dom.parent.firstChild !== s && l.insertBefore(t.document.createTextNode(" "), l.childNodes[0]),
            s ? (l.appendChild(t.document.createTextNode(" ")),
            i.dom.parent.insertBefore(l, s)) : i.dom.parent.appendChild(l),
            i.callActions("afterPrintSort", arguments)
        },
        parseSortString: function(t, a) {
            var i = this
              , o = t.split(" ")
              , r = a
              , s = []
              , l = -1;
            for (l = 0; l < o.length; l++) {
                switch (s = o[l].split(":"),
                r.sortString = o[l],
                r.attribute = n.dashCase(s[0]),
                r.order = s[1] || "asc",
                r.attribute) {
                case "default":
                    r.attribute = "";
                    break;
                case "random":
                    r.attribute = "",
                    r.order = "random"
                }
                if (!r.attribute || "random" === r.order)
                    break;
                l < o.length - 1 && (r.next = new e.CommandSort,
                n.freeze(r),
                r = r.next)
            }
            return i.callFilters("commandsParseSort", a, arguments)
        },
        parseEffects: function() {
            var t = this
              , n = ""
              , a = t.config.animation.effectsIn || t.config.animation.effects
              , i = t.config.animation.effectsOut || t.config.animation.effects;
            t.callActions("beforeParseEffects", arguments),
            t.effectsIn = new e.StyleData,
            t.effectsOut = new e.StyleData,
            t.transformIn = [],
            t.transformOut = [],
            t.effectsIn.opacity = t.effectsOut.opacity = 1,
            t.parseEffect("fade", a, t.effectsIn, t.transformIn),
            t.parseEffect("fade", i, t.effectsOut, t.transformOut, !0);
            for (n in e.transformDefaults)
                e.transformDefaults[n]instanceof e.TransformData && (t.parseEffect(n, a, t.effectsIn, t.transformIn),
                t.parseEffect(n, i, t.effectsOut, t.transformOut, !0));
            t.parseEffect("stagger", a, t.effectsIn, t.transformIn),
            t.parseEffect("stagger", i, t.effectsOut, t.transformOut, !0),
            t.callActions("afterParseEffects", arguments)
        },
        parseEffect: function(t, n, a, i, o) {
            var r = this
              , s = /\(([^)]+)\)/
              , l = -1
              , c = ""
              , u = []
              , f = ""
              , h = ["%", "px", "em", "rem", "vh", "vw", "deg"]
              , d = ""
              , m = -1;
            if (r.callActions("beforeParseEffect", arguments),
            "string" != typeof n)
                throw new TypeError(e.messages.errorConfigInvalidAnimationEffects());
            if (n.indexOf(t) < 0)
                return void ("stagger" === t && (r.staggerDuration = 0));
            switch (l = n.indexOf(t + "("),
            l > -1 && (c = n.substring(l),
            u = s.exec(c),
            f = u[1]),
            t) {
            case "fade":
                a.opacity = f ? parseFloat(f) : 0;
                break;
            case "stagger":
                r.staggerDuration = f ? parseFloat(f) : 100;
                break;
            default:
                if (o && r.config.animation.reverseOut && "scale" !== t ? a[t].value = (f ? parseFloat(f) : e.transformDefaults[t].value) * -1 : a[t].value = f ? parseFloat(f) : e.transformDefaults[t].value,
                f) {
                    for (m = 0; d = h[m]; m++)
                        if (f.indexOf(d) > -1) {
                            a[t].unit = d;
                            break
                        }
                } else
                    a[t].unit = e.transformDefaults[t].unit;
                i.push(t + "(" + a[t].value + a[t].unit + ")")
            }
            r.callActions("afterParseEffect", arguments)
        },
        buildState: function(t) {
            var n = this
              , a = new e.State
              , i = null
              , o = -1;
            for (n.callActions("beforeBuildState", arguments),
            o = 0; i = n.targets[o]; o++)
                (!t.toRemove.length || t.toRemove.indexOf(i) < 0) && a.targets.push(i.dom.el);
            for (o = 0; i = t.matching[o]; o++)
                a.matching.push(i.dom.el);
            for (o = 0; i = t.show[o]; o++)
                a.show.push(i.dom.el);
            for (o = 0; i = t.hide[o]; o++)
                (!t.toRemove.length || t.toRemove.indexOf(i) < 0) && a.hide.push(i.dom.el);
            return a.id = n.id,
            a.container = n.dom.container,
            a.activeFilter = t.newFilter,
            a.activeSort = t.newSort,
            a.activeDataset = t.newDataset,
            a.activeContainerClassName = t.newContainerClassName,
            a.hasFailed = t.hasFailed,
            a.totalTargets = n.targets.length,
            a.totalShow = t.show.length,
            a.totalHide = t.hide.length,
            a.totalMatching = t.matching.length,
            a.triggerElement = t.triggerElement,
            n.callFilters("stateBuildState", a, arguments)
        },
        goMix: function(a, i) {
            var o = this
              , r = null;
            return o.callActions("beforeGoMix", arguments),
            o.config.animation.duration && o.config.animation.effects && n.isVisible(o.dom.container) || (a = !1),
            i.toShow.length || i.toHide.length || i.willSort || i.willChangeLayout || (a = !1),
            i.startState.show.length || i.show.length || (a = !1),
            e.events.fire("mixStart", o.dom.container, {
                state: i.startState,
                futureState: i.newState,
                instance: o
            }, o.dom.document),
            "function" == typeof o.config.callbacks.onMixStart && o.config.callbacks.onMixStart.call(o.dom.container, i.startState, i.newState, o),
            n.removeClass(o.dom.container, n.getClassname(o.config.classNames, "container", o.config.classNames.modifierFailed)),
            r = o.userDeferred ? o.userDeferred : o.userDeferred = n.defer(e.libraries),
            o.isBusy = !0,
            a && e.features.has.transitions ? (t.pageYOffset !== i.docState.scrollTop && t.scrollTo(i.docState.scrollLeft, i.docState.scrollTop),
            o.config.animation.applyPerspective && (o.dom.parent.style[e.features.perspectiveProp] = o.config.animation.perspectiveDistance,
            o.dom.parent.style[e.features.perspectiveOriginProp] = o.config.animation.perspectiveOrigin),
            o.config.animation.animateResizeContainer && i.startHeight !== i.newHeight && i.viewportDeltaY !== i.startHeight - i.newHeight && (o.dom.parent.style.height = i.startHeight + "px"),
            o.config.animation.animateResizeContainer && i.startWidth !== i.newWidth && i.viewportDeltaX !== i.startWidth - i.newWidth && (o.dom.parent.style.width = i.startWidth + "px"),
            i.startHeight === i.newHeight && (o.dom.parent.style.height = i.startHeight + "px"),
            i.startWidth === i.newWidth && (o.dom.parent.style.width = i.startWidth + "px"),
            i.startHeight === i.newHeight && i.startWidth === i.newWidth && (o.dom.parent.style.overflow = "hidden"),
            requestAnimationFrame(function() {
                o.moveTargets(i)
            }),
            o.callFilters("promiseGoMix", r.promise, arguments)) : (o.config.debug.fauxAsync ? setTimeout(function() {
                o.cleanUp(i)
            }, o.config.animation.duration) : o.cleanUp(i),
            o.callFilters("promiseGoMix", r.promise, arguments))
        },
        getStartMixData: function(n) {
            var a = this
              , i = t.getComputedStyle(a.dom.parent)
              , o = a.dom.parent.getBoundingClientRect()
              , r = null
              , s = {}
              , l = -1
              , c = i[e.features.boxSizingProp];
            for (a.incPadding = "border-box" === c,
            a.callActions("beforeGetStartMixData", arguments),
            l = 0; r = n.show[l]; l++)
                s = r.getPosData(),
                n.showPosData[l] = {
                    startPosData: s
                };
            for (l = 0; r = n.toHide[l]; l++)
                s = r.getPosData(),
                n.toHidePosData[l] = {
                    startPosData: s
                };
            n.startX = o.left,
            n.startY = o.top,
            n.startHeight = a.incPadding ? o.height : o.height - parseFloat(i.paddingTop) - parseFloat(i.paddingBottom) - parseFloat(i.borderTop) - parseFloat(i.borderBottom),
            n.startWidth = a.incPadding ? o.width : o.width - parseFloat(i.paddingLeft) - parseFloat(i.paddingRight) - parseFloat(i.borderLeft) - parseFloat(i.borderRight),
            a.callActions("afterGetStartMixData", arguments)
        },
        setInter: function(t) {
            var e = this
              , a = null
              , i = -1;
            for (e.callActions("beforeSetInter", arguments),
            e.config.animation.clampHeight && (e.dom.parent.style.height = t.startHeight + "px",
            e.dom.parent.style.overflow = "hidden"),
            e.config.animation.clampWidth && (e.dom.parent.style.width = t.startWidth + "px",
            e.dom.parent.style.overflow = "hidden"),
            i = 0; a = t.toShow[i]; i++)
                a.show();
            t.willChangeLayout && (n.removeClass(e.dom.container, t.startContainerClassName),
            n.addClass(e.dom.container, t.newContainerClassName)),
            e.callActions("afterSetInter", arguments)
        },
        getInterMixData: function(t) {
            var e = this
              , n = null
              , a = -1;
            for (e.callActions("beforeGetInterMixData", arguments),
            a = 0; n = t.show[a]; a++)
                t.showPosData[a].interPosData = n.getPosData();
            for (a = 0; n = t.toHide[a]; a++)
                t.toHidePosData[a].interPosData = n.getPosData();
            e.callActions("afterGetInterMixData", arguments)
        },
        setFinal: function(t) {
            var e = this
              , n = null
              , a = -1;
            for (e.callActions("beforeSetFinal", arguments),
            t.willSort && e.printSort(!1, t),
            a = 0; n = t.toHide[a]; a++)
                n.hide();
            e.callActions("afterSetFinal", arguments)
        },
        getFinalMixData: function(e) {
            var a = this
              , i = null
              , o = null
              , r = null
              , s = -1;
            for (a.callActions("beforeGetFinalMixData", arguments),
            s = 0; r = e.show[s]; s++)
                e.showPosData[s].finalPosData = r.getPosData();
            for (s = 0; r = e.toHide[s]; s++)
                e.toHidePosData[s].finalPosData = r.getPosData();
            for ((a.config.animation.clampHeight || a.config.animation.clampWidth) && (a.dom.parent.style.height = a.dom.parent.style.width = a.dom.parent.style.overflow = ""),
            a.incPadding || (i = t.getComputedStyle(a.dom.parent)),
            o = a.dom.parent.getBoundingClientRect(),
            e.newX = o.left,
            e.newY = o.top,
            e.newHeight = a.incPadding ? o.height : o.height - parseFloat(i.paddingTop) - parseFloat(i.paddingBottom) - parseFloat(i.borderTop) - parseFloat(i.borderBottom),
            e.newWidth = a.incPadding ? o.width : o.width - parseFloat(i.paddingLeft) - parseFloat(i.paddingRight) - parseFloat(i.borderLeft) - parseFloat(i.borderRight),
            e.viewportDeltaX = e.docState.viewportWidth - this.dom.document.documentElement.clientWidth,
            e.viewportDeltaY = e.docState.viewportHeight - this.dom.document.documentElement.clientHeight,
            e.willSort && a.printSort(!0, e),
            s = 0; r = e.toShow[s]; s++)
                r.hide();
            for (s = 0; r = e.toHide[s]; s++)
                r.show();
            e.willChangeLayout && (n.removeClass(a.dom.container, e.newContainerClassName),
            n.addClass(a.dom.container, a.config.layout.containerClassName)),
            a.callActions("afterGetFinalMixData", arguments)
        },
        getTweenData: function(t) {
            var n = this
              , a = null
              , i = null
              , o = Object.getOwnPropertyNames(n.effectsIn)
              , r = ""
              , s = null
              , l = -1
              , c = -1
              , u = -1
              , f = -1;
            for (n.callActions("beforeGetTweenData", arguments),
            u = 0; a = t.show[u]; u++)
                for (i = t.showPosData[u],
                i.posIn = new e.StyleData,
                i.posOut = new e.StyleData,
                i.tweenData = new e.StyleData,
                a.isShown ? (i.posIn.x = i.startPosData.x - i.interPosData.x,
                i.posIn.y = i.startPosData.y - i.interPosData.y) : i.posIn.x = i.posIn.y = 0,
                i.posOut.x = i.finalPosData.x - i.interPosData.x,
                i.posOut.y = i.finalPosData.y - i.interPosData.y,
                i.posIn.opacity = a.isShown ? 1 : n.effectsIn.opacity,
                i.posOut.opacity = 1,
                i.tweenData.opacity = i.posOut.opacity - i.posIn.opacity,
                a.isShown || n.config.animation.nudge || (i.posIn.x = i.posOut.x,
                i.posIn.y = i.posOut.y),
                i.tweenData.x = i.posOut.x - i.posIn.x,
                i.tweenData.y = i.posOut.y - i.posIn.y,
                n.config.animation.animateResizeTargets && (i.posIn.width = i.startPosData.width,
                i.posIn.height = i.startPosData.height,
                l = (i.startPosData.width || i.finalPosData.width) - i.interPosData.width,
                i.posIn.marginRight = i.startPosData.marginRight - l,
                c = (i.startPosData.height || i.finalPosData.height) - i.interPosData.height,
                i.posIn.marginBottom = i.startPosData.marginBottom - c,
                i.posOut.width = i.finalPosData.width,
                i.posOut.height = i.finalPosData.height,
                l = (i.finalPosData.width || i.startPosData.width) - i.interPosData.width,
                i.posOut.marginRight = i.finalPosData.marginRight - l,
                c = (i.finalPosData.height || i.startPosData.height) - i.interPosData.height,
                i.posOut.marginBottom = i.finalPosData.marginBottom - c,
                i.tweenData.width = i.posOut.width - i.posIn.width,
                i.tweenData.height = i.posOut.height - i.posIn.height,
                i.tweenData.marginRight = i.posOut.marginRight - i.posIn.marginRight,
                i.tweenData.marginBottom = i.posOut.marginBottom - i.posIn.marginBottom),
                f = 0; r = o[f]; f++)
                    s = n.effectsIn[r],
                    s instanceof e.TransformData && s.value && (i.posIn[r].value = s.value,
                    i.posOut[r].value = 0,
                    i.tweenData[r].value = i.posOut[r].value - i.posIn[r].value,
                    i.posIn[r].unit = i.posOut[r].unit = i.tweenData[r].unit = s.unit);
            for (u = 0; a = t.toHide[u]; u++)
                for (i = t.toHidePosData[u],
                i.posIn = new e.StyleData,
                i.posOut = new e.StyleData,
                i.tweenData = new e.StyleData,
                i.posIn.x = a.isShown ? i.startPosData.x - i.interPosData.x : 0,
                i.posIn.y = a.isShown ? i.startPosData.y - i.interPosData.y : 0,
                i.posOut.x = n.config.animation.nudge ? 0 : i.posIn.x,
                i.posOut.y = n.config.animation.nudge ? 0 : i.posIn.y,
                i.tweenData.x = i.posOut.x - i.posIn.x,
                i.tweenData.y = i.posOut.y - i.posIn.y,
                n.config.animation.animateResizeTargets && (i.posIn.width = i.startPosData.width,
                i.posIn.height = i.startPosData.height,
                l = i.startPosData.width - i.interPosData.width,
                i.posIn.marginRight = i.startPosData.marginRight - l,
                c = i.startPosData.height - i.interPosData.height,
                i.posIn.marginBottom = i.startPosData.marginBottom - c),
                i.posIn.opacity = 1,
                i.posOut.opacity = n.effectsOut.opacity,
                i.tweenData.opacity = i.posOut.opacity - i.posIn.opacity,
                f = 0; r = o[f]; f++)
                    s = n.effectsOut[r],
                    s instanceof e.TransformData && s.value && (i.posIn[r].value = 0,
                    i.posOut[r].value = s.value,
                    i.tweenData[r].value = i.posOut[r].value - i.posIn[r].value,
                    i.posIn[r].unit = i.posOut[r].unit = i.tweenData[r].unit = s.unit);
            n.callActions("afterGetTweenData", arguments)
        },
        moveTargets: function(t) {
            var a = this
              , i = null
              , o = null
              , r = null
              , s = ""
              , l = !1
              , c = -1
              , u = -1
              , f = a.checkProgress.bind(a);
            for (a.callActions("beforeMoveTargets", arguments),
            u = 0; i = t.show[u]; u++)
                o = new e.IMoveData,
                r = t.showPosData[u],
                s = i.isShown ? "none" : "show",
                l = a.willTransition(s, t.hasEffect, r.posIn, r.posOut),
                l && c++,
                i.show(),
                o.posIn = r.posIn,
                o.posOut = r.posOut,
                o.statusChange = s,
                o.staggerIndex = c,
                o.operation = t,
                o.callback = l ? f : null,
                i.move(o);
            for (u = 0; i = t.toHide[u]; u++)
                r = t.toHidePosData[u],
                o = new e.IMoveData,
                s = "hide",
                l = a.willTransition(s, r.posIn, r.posOut),
                o.posIn = r.posIn,
                o.posOut = r.posOut,
                o.statusChange = s,
                o.staggerIndex = u,
                o.operation = t,
                o.callback = l ? f : null,
                i.move(o);
            a.config.animation.animateResizeContainer && (a.dom.parent.style[e.features.transitionProp] = "height " + a.config.animation.duration + "ms ease, width " + a.config.animation.duration + "ms ease ",
            requestAnimationFrame(function() {
                t.startHeight !== t.newHeight && t.viewportDeltaY !== t.startHeight - t.newHeight && (a.dom.parent.style.height = t.newHeight + "px"),
                t.startWidth !== t.newWidth && t.viewportDeltaX !== t.startWidth - t.newWidth && (a.dom.parent.style.width = t.newWidth + "px")
            })),
            t.willChangeLayout && (n.removeClass(a.dom.container, a.config.layout.ContainerClassName),
            n.addClass(a.dom.container, t.newContainerClassName)),
            a.callActions("afterMoveTargets", arguments)
        },
        hasEffect: function() {
            var t = this
              , e = ["scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ"]
              , n = ""
              , a = null
              , i = !1
              , o = -1
              , r = -1;
            if (1 !== t.effectsIn.opacity)
                return t.callFilters("resultHasEffect", !0, arguments);
            for (r = 0; n = e[r]; r++)
                if (a = t.effectsIn[n],
                o = "undefined" !== a.value ? a.value : a,
                0 !== o) {
                    i = !0;
                    break
                }
            return t.callFilters("resultHasEffect", i, arguments)
        },
        willTransition: function(t, e, a, i) {
            var o = this
              , r = !1;
            return r = !!n.isVisible(o.dom.container) && (!!("none" !== t && e || a.x !== i.x || a.y !== i.y) || !!o.config.animation.animateResizeTargets && (a.width !== i.width || a.height !== i.height || a.marginRight !== i.marginRight || a.marginTop !== i.marginTop)),
            o.callFilters("resultWillTransition", r, arguments)
        },
        checkProgress: function(t) {
            var e = this;
            e.targetsDone++,
            e.targetsBound === e.targetsDone && e.cleanUp(t)
        },
        cleanUp: function(t) {
            var a = this
              , i = null
              , o = null
              , r = null
              , s = null
              , l = -1;
            for (a.callActions("beforeCleanUp", arguments),
            a.targetsMoved = a.targetsImmovable = a.targetsBound = a.targetsDone = 0,
            l = 0; i = t.show[l]; l++)
                i.cleanUp(),
                i.show();
            for (l = 0; i = t.toHide[l]; l++)
                i.cleanUp(),
                i.hide();
            if (t.willSort && a.printSort(!1, t),
            a.dom.parent.style[e.features.transitionProp] = a.dom.parent.style.height = a.dom.parent.style.width = a.dom.parent.style.overflow = a.dom.parent.style[e.features.perspectiveProp] = a.dom.parent.style[e.features.perspectiveOriginProp] = "",
            t.willChangeLayout && (n.removeClass(a.dom.container, t.startContainerClassName),
            n.addClass(a.dom.container, t.newContainerClassName)),
            t.toRemove.length) {
                for (l = 0; i = a.targets[l]; l++)
                    t.toRemove.indexOf(i) > -1 && ((o = i.dom.el.previousSibling) && "#text" === o.nodeName && (r = i.dom.el.nextSibling) && "#text" === r.nodeName && n.removeWhitespace(o),
                    t.willSort || a.dom.parent.removeChild(i.dom.el),
                    a.targets.splice(l, 1),
                    i.isInDom = !1,
                    l--);
                a.origOrder = a.targets
            }
            t.willSort && (a.targets = t.newOrder),
            a.state = t.newState,
            a.lastOperation = t,
            a.dom.targets = a.state.targets,
            e.events.fire("mixEnd", a.dom.container, {
                state: a.state,
                instance: a
            }, a.dom.document),
            "function" == typeof a.config.callbacks.onMixEnd && a.config.callbacks.onMixEnd.call(a.dom.container, a.state, a),
            t.hasFailed && (e.events.fire("mixFail", a.dom.container, {
                state: a.state,
                instance: a
            }, a.dom.document),
            "function" == typeof a.config.callbacks.onMixFail && a.config.callbacks.onMixFail.call(a.dom.container, a.state, a),
            n.addClass(a.dom.container, n.getClassname(a.config.classNames, "container", a.config.classNames.modifierFailed))),
            "function" == typeof a.userCallback && a.userCallback.call(a.dom.container, a.state, a),
            "function" == typeof a.userDeferred.resolve && a.userDeferred.resolve(a.state),
            a.userCallback = null,
            a.userDeferred = null,
            a.lastClicked = null,
            a.isToggling = !1,
            a.isBusy = !1,
            a.queue.length && (a.callActions("beforeReadQueueCleanUp", arguments),
            s = a.queue.shift(),
            a.userDeferred = s.deferred,
            a.isToggling = s.isToggling,
            a.lastClicked = s.triggerElement,
            s.instruction.command instanceof e.CommandMultimix ? a.multimix.apply(a, s.args) : a.dataset.apply(a, s.args)),
            a.callActions("afterCleanUp", arguments)
        },
        parseMultimixArgs: function(t) {
            var a = this
              , i = new e.UserInstruction
              , o = null
              , r = -1;
            for (i.animate = a.config.animation.enable,
            i.command = new e.CommandMultimix,
            r = 0; r < t.length; r++)
                o = t[r],
                null !== o && ("object" == typeof o ? n.extend(i.command, o) : "boolean" == typeof o ? i.animate = o : "function" == typeof o && (i.callback = o));
            return !i.command.insert || i.command.insert instanceof e.CommandInsert || (i.command.insert = a.parseInsertArgs([i.command.insert]).command),
            !i.command.remove || i.command.remove instanceof e.CommandRemove || (i.command.remove = a.parseRemoveArgs([i.command.remove]).command),
            !i.command.filter || i.command.filter instanceof e.CommandFilter || (i.command.filter = a.parseFilterArgs([i.command.filter]).command),
            !i.command.sort || i.command.sort instanceof e.CommandSort || (i.command.sort = a.parseSortArgs([i.command.sort]).command),
            !i.command.changeLayout || i.command.changeLayout instanceof e.CommandChangeLayout || (i.command.changeLayout = a.parseChangeLayoutArgs([i.command.changeLayout]).command),
            i = a.callFilters("instructionParseMultimixArgs", i, arguments),
            n.freeze(i),
            i
        },
        parseFilterArgs: function(t) {
            var a = this
              , i = new e.UserInstruction
              , o = null
              , r = -1;
            for (i.animate = a.config.animation.enable,
            i.command = new e.CommandFilter,
            r = 0; r < t.length; r++)
                o = t[r],
                "string" == typeof o ? i.command.selector = o : null === o ? i.command.collection = [] : "object" == typeof o && n.isElement(o, a.dom.document) ? i.command.collection = [o] : "object" == typeof o && "undefined" != typeof o.length ? i.command.collection = n.arrayFromList(o) : "object" == typeof o ? n.extend(i.command, o) : "boolean" == typeof o ? i.animate = o : "function" == typeof o && (i.callback = o);
            if (i.command.selector && i.command.collection)
                throw new Error(e.messages.errorFilterInvalidArguments());
            return i = a.callFilters("instructionParseFilterArgs", i, arguments),
            n.freeze(i),
            i
        },
        parseSortArgs: function(t) {
            var a = this
              , i = new e.UserInstruction
              , o = null
              , r = ""
              , s = -1;
            for (i.animate = a.config.animation.enable,
            i.command = new e.CommandSort,
            s = 0; s < t.length; s++)
                if (o = t[s],
                null !== o)
                    switch (typeof o) {
                    case "string":
                        r = o;
                        break;
                    case "object":
                        o.length && (i.command.collection = n.arrayFromList(o));
                        break;
                    case "boolean":
                        i.animate = o;
                        break;
                    case "function":
                        i.callback = o
                    }
            return r && (i.command = a.parseSortString(r, i.command)),
            i = a.callFilters("instructionParseSortArgs", i, arguments),
            n.freeze(i),
            i
        },
        parseInsertArgs: function(t) {
            var a = this
              , i = new e.UserInstruction
              , o = null
              , r = -1;
            for (i.animate = a.config.animation.enable,
            i.command = new e.CommandInsert,
            r = 0; r < t.length; r++)
                o = t[r],
                null !== o && ("number" == typeof o ? i.command.index = o : "string" == typeof o && ["before", "after"].indexOf(o) > -1 ? i.command.position = o : "string" == typeof o ? i.command.collection = n.arrayFromList(n.createElement(o).childNodes) : "object" == typeof o && n.isElement(o, a.dom.document) ? i.command.collection.length ? i.command.sibling = o : i.command.collection = [o] : "object" == typeof o && o.length ? i.command.collection.length ? i.command.sibling = o[0] : i.command.collection = o : "object" == typeof o && o.childNodes && o.childNodes.length ? i.command.collection.length ? i.command.sibling = o.childNodes[0] : i.command.collection = n.arrayFromList(o.childNodes) : "object" == typeof o ? n.extend(i.command, o) : "boolean" == typeof o ? i.animate = o : "function" == typeof o && (i.callback = o));
            if (i.command.index && i.command.sibling)
                throw new Error(e.messages.errorInsertInvalidArguments());
            return !i.command.collection.length && a.config.debug.showWarnings && console.warn(e.messages.warningInsertNoElements()),
            i = a.callFilters("instructionParseInsertArgs", i, arguments),
            n.freeze(i),
            i
        },
        parseRemoveArgs: function(t) {
            var a = this
              , i = new e.UserInstruction
              , o = null
              , r = null
              , s = -1;
            for (i.animate = a.config.animation.enable,
            i.command = new e.CommandRemove,
            s = 0; s < t.length; s++)
                if (r = t[s],
                null !== r)
                    switch (typeof r) {
                    case "number":
                        a.targets[r] && (i.command.targets[0] = a.targets[r]);
                        break;
                    case "string":
                        i.command.collection = n.arrayFromList(a.dom.parent.querySelectorAll(r));
                        break;
                    case "object":
                        r && r.length ? i.command.collection = r : n.isElement(r, a.dom.document) ? i.command.collection = [r] : n.extend(i.command, r);
                        break;
                    case "boolean":
                        i.animate = r;
                        break;
                    case "function":
                        i.callback = r
                    }
            if (i.command.collection.length)
                for (s = 0; o = a.targets[s]; s++)
                    i.command.collection.indexOf(o.dom.el) > -1 && i.command.targets.push(o);
            return !i.command.targets.length && a.config.debug.showWarnings && console.warn(e.messages.warningRemoveNoElements()),
            n.freeze(i),
            i
        },
        parseDatasetArgs: function(t) {
            var a = this
              , i = new e.UserInstruction
              , o = null
              , r = -1;
            for (i.animate = a.config.animation.enable,
            i.command = new e.CommandDataset,
            r = 0; r < t.length; r++)
                if (o = t[r],
                null !== o)
                    switch (typeof o) {
                    case "object":
                        Array.isArray(o) || "number" == typeof o.length ? i.command.dataset = o : n.extend(i.command, o);
                        break;
                    case "boolean":
                        i.animate = o;
                        break;
                    case "function":
                        i.callback = o
                    }
            return n.freeze(i),
            i
        },
        parseChangeLayoutArgs: function(t) {
            var a = this
              , i = new e.UserInstruction
              , o = null
              , r = -1;
            for (i.animate = a.config.animation.enable,
            i.command = new e.CommandChangeLayout,
            r = 0; r < t.length; r++)
                if (o = t[r],
                null !== o)
                    switch (typeof o) {
                    case "string":
                        i.command.containerClassName = o;
                        break;
                    case "object":
                        n.extend(i.command, o);
                        break;
                    case "boolean":
                        i.animate = o;
                        break;
                    case "function":
                        i.callback = o
                    }
            return n.freeze(i),
            i
        },
        queueMix: function(t) {
            var a = this
              , i = null
              , o = "";
            return a.callActions("beforeQueueMix", arguments),
            i = n.defer(e.libraries),
            a.config.animation.queue && a.queue.length < a.config.animation.queueLimit ? (t.deferred = i,
            a.queue.push(t),
            a.config.controls.enable && (a.isToggling ? (a.buildToggleArray(t.instruction.command),
            o = a.getToggleSelector(),
            a.updateControls({
                filter: {
                    selector: o
                }
            })) : a.updateControls(t.instruction.command))) : (a.config.debug.showWarnings && console.warn(e.messages.warningMultimixInstanceQueueFull()),
            i.resolve(a.state),
            e.events.fire("mixBusy", a.dom.container, {
                state: a.state,
                instance: a
            }, a.dom.document),
            "function" == typeof a.config.callbacks.onMixBusy && a.config.callbacks.onMixBusy.call(a.dom.container, a.state, a)),
            a.callFilters("promiseQueueMix", i.promise, arguments)
        },
        getDataOperation: function(t) {
            var a = this
              , i = new e.Operation
              , o = [];
            if (i = a.callFilters("operationUnmappedGetDataOperation", i, arguments),
            a.dom.targets.length && !(o = a.state.activeDataset || []).length)
                throw new Error(e.messages.errorDatasetNotSet());
            return i.id = n.randomHex(),
            i.startState = a.state,
            i.startDataset = o,
            i.newDataset = t.slice(),
            a.diffDatasets(i),
            i.startOrder = a.targets,
            i.newOrder = i.show,
            a.config.animation.enable && (a.getStartMixData(i),
            a.setInter(i),
            i.docState = n.getDocumentState(a.dom.document),
            a.getInterMixData(i),
            a.setFinal(i),
            a.getFinalMixData(i),
            a.parseEffects(),
            i.hasEffect = a.hasEffect(),
            a.getTweenData(i)),
            a.targets = i.show.slice(),
            i.newState = a.buildState(i),
            Array.prototype.push.apply(a.targets, i.toRemove),
            i = a.callFilters("operationMappedGetDataOperation", i, arguments)
        },
        diffDatasets: function(t) {
            var a = this
              , i = []
              , o = []
              , r = []
              , s = null
              , l = null
              , c = null
              , u = null
              , f = null
              , h = {}
              , d = ""
              , m = -1;
            for (a.callActions("beforeDiffDatasets", arguments),
            m = 0; s = t.newDataset[m]; m++) {
                if ("undefined" == typeof (d = s[a.config.data.uidKey]) || d.toString().length < 1)
                    throw new TypeError(e.messages.errorDatasetInvalidUidKey({
                        uidKey: a.config.data.uidKey
                    }));
                if (h[d])
                    throw new Error(e.messages.errorDatasetDuplicateUid({
                        uid: d
                    }));
                h[d] = !0,
                (l = a.cache[d])instanceof e.Target ? (a.config.data.dirtyCheck && !n.deepEquals(s, l.data) && (c = l.render(s),
                l.data = s,
                c !== l.dom.el && (l.isInDom && (l.unbindEvents(),
                a.dom.parent.replaceChild(c, l.dom.el)),
                l.isShown || (c.style.display = "none"),
                l.dom.el = c,
                l.isInDom && l.bindEvents())),
                c = l.dom.el) : (l = new e.Target,
                l.init(null, a, s),
                l.hide()),
                l.isInDom ? (f = l.dom.el.nextElementSibling,
                o.push(d),
                u && (u.lastElementChild && u.appendChild(a.dom.document.createTextNode(" ")),
                a.insertDatasetFrag(u, l.dom.el, r),
                u = null)) : (u || (u = a.dom.document.createDocumentFragment()),
                u.lastElementChild && u.appendChild(a.dom.document.createTextNode(" ")),
                u.appendChild(l.dom.el),
                l.isInDom = !0,
                l.unbindEvents(),
                l.bindEvents(),
                l.hide(),
                t.toShow.push(l),
                r.push(l)),
                t.show.push(l)
            }
            for (u && (f = f || a.config.layout.siblingAfter,
            f && u.appendChild(a.dom.document.createTextNode(" ")),
            a.insertDatasetFrag(u, f, r)),
            m = 0; s = t.startDataset[m]; m++)
                d = s[a.config.data.uidKey],
                l = a.cache[d],
                t.show.indexOf(l) < 0 ? (t.hide.push(l),
                t.toHide.push(l),
                t.toRemove.push(l)) : i.push(d);
            n.isEqualArray(i, o) || (t.willSort = !0),
            a.callActions("afterDiffDatasets", arguments)
        },
        insertDatasetFrag: function(t, e, a) {
            var i = this
              , o = e ? n.arrayFromList(i.dom.parent.children).indexOf(e) : i.targets.length;
            for (i.dom.parent.insertBefore(t, e); a.length; )
                i.targets.splice(o, 0, a.shift()),
                o++
        },
        willSort: function(t, e) {
            var n = this
              , a = !1;
            return a = !!(n.config.behavior.liveSort || "random" === t.order || t.attribute !== e.attribute || t.order !== e.order || t.collection !== e.collection || null === t.next && e.next || t.next && null === e.next) || !(!t.next || !e.next) && n.willSort(t.next, e.next),
            n.callFilters("resultWillSort", a, arguments)
        },
        show: function() {
            var t = this;
            return t.filter("all")
        },
        hide: function() {
            var t = this;
            return t.filter("none")
        },
        isMixing: function() {
            var t = this;
            return t.isBusy
        },
        filter: function() {
            var t = this
              , e = t.parseFilterArgs(arguments);
            return t.multimix({
                filter: e.command
            }, e.animate, e.callback)
        },
        toggleOn: function() {
            var t = this
              , e = t.parseFilterArgs(arguments)
              , n = e.command.selector
              , a = "";
            return t.isToggling = !0,
            t.toggleArray.indexOf(n) < 0 && t.toggleArray.push(n),
            a = t.getToggleSelector(),
            t.multimix({
                filter: a
            }, e.animate, e.callback)
        },
        toggleOff: function() {
            var t = this
              , e = t.parseFilterArgs(arguments)
              , n = e.command.selector
              , a = t.toggleArray.indexOf(n)
              , i = "";
            return t.isToggling = !0,
            a > -1 && t.toggleArray.splice(a, 1),
            i = t.getToggleSelector(),
            t.multimix({
                filter: i
            }, e.animate, e.callback)
        },
        sort: function() {
            var t = this
              , e = t.parseSortArgs(arguments);
            return t.multimix({
                sort: e.command
            }, e.animate, e.callback)
        },
        changeLayout: function() {
            var t = this
              , e = t.parseChangeLayoutArgs(arguments);
            return t.multimix({
                changeLayout: e.command
            }, e.animate, e.callback)
        },
        dataset: function() {
            var t = this
              , n = t.parseDatasetArgs(arguments)
              , a = null
              , i = null
              , o = !1;
            return t.callActions("beforeDataset", arguments),
            t.isBusy ? (i = new e.QueueItem,
            i.args = arguments,
            i.instruction = n,
            t.queueMix(i)) : (n.callback && (t.userCallback = n.callback),
            o = n.animate ^ t.config.animation.enable ? n.animate : t.config.animation.enable,
            a = t.getDataOperation(n.command.dataset),
            t.goMix(o, a))
        },
        multimix: function() {
            var t = this
              , n = null
              , a = !1
              , i = null
              , o = t.parseMultimixArgs(arguments);
            return t.callActions("beforeMultimix", arguments),
            t.isBusy ? (i = new e.QueueItem,
            i.args = arguments,
            i.instruction = o,
            i.triggerElement = t.lastClicked,
            i.isToggling = t.isToggling,
            t.queueMix(i)) : (n = t.getOperation(o.command),
            t.config.controls.enable && (o.command.filter && !t.isToggling && (t.toggleArray.length = 0,
            t.buildToggleArray(n.command)),
            t.queue.length < 1 && t.updateControls(n.command)),
            o.callback && (t.userCallback = o.callback),
            a = o.animate ^ t.config.animation.enable ? o.animate : t.config.animation.enable,
            t.callFilters("operationMultimix", n, arguments),
            t.goMix(a, n))
        },
        getOperation: function(t) {
            var a = this
              , i = t.sort
              , o = t.filter
              , r = t.changeLayout
              , s = t.remove
              , l = t.insert
              , c = new e.Operation;
            return c = a.callFilters("operationUnmappedGetOperation", c, arguments),
            c.id = n.randomHex(),
            c.command = t,
            c.startState = a.state,
            c.triggerElement = a.lastClicked,
            a.isBusy ? (a.config.debug.showWarnings && console.warn(e.messages.warningGetOperationInstanceBusy()),
            null) : (l && a.insertTargets(l, c),
            s && (c.toRemove = s.targets),
            c.startSort = c.newSort = c.startState.activeSort,
            c.startOrder = c.newOrder = a.targets,
            i && (c.startSort = c.startState.activeSort,
            c.newSort = i,
            c.willSort = a.willSort(i, c.startState.activeSort),
            c.willSort && a.sortOperation(c)),
            c.startFilter = c.startState.activeFilter,
            o ? c.newFilter = o : c.newFilter = n.extend(new e.CommandFilter, c.startFilter),
            "all" === c.newFilter.selector ? c.newFilter.selector = a.config.selectors.target : "none" === c.newFilter.selector && (c.newFilter.selector = ""),
            a.filterOperation(c),
            c.startContainerClassName = c.startState.activeContainerClassName,
            r ? (c.newContainerClassName = r.containerClassName,
            c.newContainerClassName !== c.startContainerClassName && (c.willChangeLayout = !0)) : c.newContainerClassName = c.startContainerClassName,
            a.config.animation.enable && (a.getStartMixData(c),
            a.setInter(c),
            c.docState = n.getDocumentState(a.dom.document),
            a.getInterMixData(c),
            a.setFinal(c),
            a.getFinalMixData(c),
            a.parseEffects(),
            c.hasEffect = a.hasEffect(),
            a.getTweenData(c)),
            c.willSort && (a.targets = c.newOrder),
            c.newState = a.buildState(c),
            a.callFilters("operationMappedGetOperation", c, arguments))
        },
        tween: function(t, e) {
            var n = null
              , a = null
              , i = -1
              , o = -1;
            for (e = Math.min(e, 1),
            e = Math.max(e, 0),
            o = 0; n = t.show[o]; o++)
                a = t.showPosData[o],
                n.applyTween(a, e);
            for (o = 0; n = t.hide[o]; o++)
                n.isShown && n.hide(),
                (i = t.toHide.indexOf(n)) > -1 && (a = t.toHidePosData[i],
                n.isShown || n.show(),
                n.applyTween(a, e))
        },
        insert: function() {
            var t = this
              , e = t.parseInsertArgs(arguments);
            return t.multimix({
                insert: e.command
            }, e.animate, e.callback)
        },
        insertBefore: function() {
            var t = this
              , e = t.parseInsertArgs(arguments);
            return t.insert(e.command.collection, "before", e.command.sibling, e.animate, e.callback)
        },
        insertAfter: function() {
            var t = this
              , e = t.parseInsertArgs(arguments);
            return t.insert(e.command.collection, "after", e.command.sibling, e.animate, e.callback)
        },
        prepend: function() {
            var t = this
              , e = t.parseInsertArgs(arguments);
            return t.insert(0, e.command.collection, e.animate, e.callback)
        },
        append: function() {
            var t = this
              , e = t.parseInsertArgs(arguments);
            return t.insert(t.state.totalTargets, e.command.collection, e.animate, e.callback)
        },
        remove: function() {
            var t = this
              , e = t.parseRemoveArgs(arguments);
            return t.multimix({
                remove: e.command
            }, e.animate, e.callback)
        },
        getConfig: function(t) {
            var e = this
              , a = null;
            return a = t ? n.getProperty(e.config, t) : e.config,
            e.callFilters("valueGetConfig", a, arguments)
        },
        configure: function(t) {
            var e = this;
            e.callActions("beforeConfigure", arguments),
            n.extend(e.config, t, !0, !0),
            e.callActions("afterConfigure", arguments)
        },
        getState: function() {
            var t = this
              , a = null;
            return a = new e.State,
            n.extend(a, t.state),
            n.freeze(a),
            t.callFilters("stateGetState", a, arguments)
        },
        forceRefresh: function() {
            var t = this;
            t.indexTargets()
        },
        forceRender: function() {
            var t = this
              , e = null
              , n = null
              , a = "";
            for (a in t.cache)
                e = t.cache[a],
                n = e.render(e.data),
                n !== e.dom.el && (e.isInDom && (e.unbindEvents(),
                t.dom.parent.replaceChild(n, e.dom.el)),
                e.isShown || (n.style.display = "none"),
                e.dom.el = n,
                e.isInDom && e.bindEvents());
            t.state = t.buildState(t.lastOperation)
        },
        destroy: function(t) {
            var n = this
              , a = null
              , i = null
              , o = 0;
            for (n.callActions("beforeDestroy", arguments),
            o = 0; a = n.controls[o]; o++)
                a.removeBinding(n);
            for (o = 0; i = n.targets[o]; o++)
                t && i.show(),
                i.unbindEvents();
            n.dom.container.id.match(/^MixItUp/) && n.dom.container.removeAttribute("id"),
            delete e.instances[n.id],
            n.callActions("afterDestroy", arguments)
        }
    }),
    e.IMoveData = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.posIn = null,
        this.posOut = null,
        this.operation = null,
        this.callback = null,
        this.statusChange = "",
        this.duration = -1,
        this.staggerIndex = -1,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.IMoveData),
    e.IMoveData.prototype = Object.create(e.Base.prototype),
    e.IMoveData.prototype.constructor = e.IMoveData,
    e.TargetDom = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.el = null,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.TargetDom),
    e.TargetDom.prototype = Object.create(e.Base.prototype),
    e.TargetDom.prototype.constructor = e.TargetDom,
    e.Target = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.id = "",
        this.sortString = "",
        this.mixer = null,
        this.callback = null,
        this.isShown = !1,
        this.isBound = !1,
        this.isExcluded = !1,
        this.isInDom = !1,
        this.handler = null,
        this.operation = null,
        this.data = null,
        this.dom = new e.TargetDom,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.Target),
    e.Target.prototype = Object.create(e.Base.prototype),
    n.extend(e.Target.prototype, {
        constructor: e.Target,
        init: function(t, n, a) {
            var i = this
              , o = "";
            if (i.callActions("beforeInit", arguments),
            i.mixer = n,
            t || (t = i.render(a)),
            i.cacheDom(t),
            i.bindEvents(),
            "none" !== i.dom.el.style.display && (i.isShown = !0),
            a && n.config.data.uidKey) {
                if ("undefined" == typeof (o = a[n.config.data.uidKey]) || o.toString().length < 1)
                    throw new TypeError(e.messages.errorDatasetInvalidUidKey({
                        uidKey: n.config.data.uidKey
                    }));
                i.id = o,
                i.data = a,
                n.cache[o] = i
            }
            i.callActions("afterInit", arguments)
        },
        render: function(t) {
            var a = this
              , i = null
              , o = null
              , r = null
              , s = "";
            if (a.callActions("beforeRender", arguments),
            i = a.callFilters("renderRender", a.mixer.config.render.target, arguments),
            "function" != typeof i)
                throw new TypeError(e.messages.errorDatasetRendererNotSet());
            return s = i(t),
            s && "object" == typeof s && n.isElement(s) ? o = s : "string" == typeof s && (r = document.createElement("div"),
            r.innerHTML = s,
            o = r.firstElementChild),
            a.callFilters("elRender", o, arguments)
        },
        cacheDom: function(t) {
            var e = this;
            e.callActions("beforeCacheDom", arguments),
            e.dom.el = t,
            e.callActions("afterCacheDom", arguments)
        },
        getSortString: function(t) {
            var e = this
              , n = e.dom.el.getAttribute("data-" + t) || "";
            e.callActions("beforeGetSortString", arguments),
            n = isNaN(1 * n) ? n.toLowerCase() : 1 * n,
            e.sortString = n,
            e.callActions("afterGetSortString", arguments)
        },
        show: function() {
            var t = this;
            t.callActions("beforeShow", arguments),
            t.isShown || (t.dom.el.style.display = "",
            t.isShown = !0),
            t.callActions("afterShow", arguments)
        },
        hide: function() {
            var t = this;
            t.callActions("beforeHide", arguments),
            t.isShown && (t.dom.el.style.display = "none",
            t.isShown = !1),
            t.callActions("afterHide", arguments)
        },
        move: function(t) {
            var e = this;
            e.callActions("beforeMove", arguments),
            e.isExcluded || e.mixer.targetsMoved++,
            e.applyStylesIn(t),
            requestAnimationFrame(function() {
                e.applyStylesOut(t)
            }),
            e.callActions("afterMove", arguments)
        },
        applyTween: function(t, n) {
            var a = this
              , i = ""
              , o = null
              , r = t.posIn
              , s = []
              , l = new e.StyleData
              , c = -1;
            for (a.callActions("beforeApplyTween", arguments),
            l.x = r.x,
            l.y = r.y,
            0 === n ? a.hide() : a.isShown || a.show(),
            c = 0; i = e.features.TWEENABLE[c]; c++)
                if (o = t.tweenData[i],
                "x" === i) {
                    if (!o)
                        continue;
                    l.x = r.x + o * n
                } else if ("y" === i) {
                    if (!o)
                        continue;
                    l.y = r.y + o * n
                } else if (o instanceof e.TransformData) {
                    if (!o.value)
                        continue;
                    l[i].value = r[i].value + o.value * n,
                    l[i].unit = o.unit,
                    s.push(i + "(" + l[i].value + o.unit + ")")
                } else {
                    if (!o)
                        continue;
                    l[i] = r[i] + o * n,
                    a.dom.el.style[i] = l[i]
                }
            (l.x || l.y) && s.unshift("translate(" + l.x + "px, " + l.y + "px)"),
            s.length && (a.dom.el.style[e.features.transformProp] = s.join(" ")),
            a.callActions("afterApplyTween", arguments)
        },
        applyStylesIn: function(t) {
            var n = this
              , a = t.posIn
              , i = 1 !== n.mixer.effectsIn.opacity
              , o = [];
            n.callActions("beforeApplyStylesIn", arguments),
            o.push("translate(" + a.x + "px, " + a.y + "px)"),
            n.mixer.config.animation.animateResizeTargets && ("show" !== t.statusChange && (n.dom.el.style.width = a.width + "px",
            n.dom.el.style.height = a.height + "px"),
            n.dom.el.style.marginRight = a.marginRight + "px",
            n.dom.el.style.marginBottom = a.marginBottom + "px"),
            i && (n.dom.el.style.opacity = a.opacity),
            "show" === t.statusChange && (o = o.concat(n.mixer.transformIn)),
            n.dom.el.style[e.features.transformProp] = o.join(" "),
            n.callActions("afterApplyStylesIn", arguments)
        },
        applyStylesOut: function(t) {
            var n = this
              , a = []
              , i = []
              , o = n.mixer.config.animation.animateResizeTargets
              , r = "undefined" != typeof n.mixer.effectsIn.opacity;
            if (n.callActions("beforeApplyStylesOut", arguments),
            a.push(n.writeTransitionRule(e.features.transformRule, t.staggerIndex)),
            "none" !== t.statusChange && a.push(n.writeTransitionRule("opacity", t.staggerIndex, t.duration)),
            o && (a.push(n.writeTransitionRule("width", t.staggerIndex, t.duration)),
            a.push(n.writeTransitionRule("height", t.staggerIndex, t.duration)),
            a.push(n.writeTransitionRule("margin", t.staggerIndex, t.duration))),
            !t.callback)
                return n.mixer.targetsImmovable++,
                void (n.mixer.targetsMoved === n.mixer.targetsImmovable && n.mixer.cleanUp(t.operation));
            switch (n.operation = t.operation,
            n.callback = t.callback,
            !n.isExcluded && n.mixer.targetsBound++,
            n.isBound = !0,
            n.applyTransition(a),
            o && t.posOut.width > 0 && t.posOut.height > 0 && (n.dom.el.style.width = t.posOut.width + "px",
            n.dom.el.style.height = t.posOut.height + "px",
            n.dom.el.style.marginRight = t.posOut.marginRight + "px",
            n.dom.el.style.marginBottom = t.posOut.marginBottom + "px"),
            n.mixer.config.animation.nudge || "hide" !== t.statusChange || i.push("translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"),
            t.statusChange) {
            case "hide":
                r && (n.dom.el.style.opacity = n.mixer.effectsOut.opacity),
                i = i.concat(n.mixer.transformOut);
                break;
            case "show":
                r && (n.dom.el.style.opacity = 1)
            }
            (n.mixer.config.animation.nudge || !n.mixer.config.animation.nudge && "hide" !== t.statusChange) && i.push("translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"),
            n.dom.el.style[e.features.transformProp] = i.join(" "),
            n.callActions("afterApplyStylesOut", arguments)
        },
        writeTransitionRule: function(t, e, n) {
            var a = this
              , i = a.getDelay(e)
              , o = "";
            return o = t + " " + (n > 0 ? n : a.mixer.config.animation.duration) + "ms " + i + "ms " + ("opacity" === t ? "linear" : a.mixer.config.animation.easing),
            a.callFilters("ruleWriteTransitionRule", o, arguments)
        },
        getDelay: function(t) {
            var e = this
              , n = -1;
            return "function" == typeof e.mixer.config.animation.staggerSequence && (t = e.mixer.config.animation.staggerSequence.call(e, t, e.state)),
            n = e.mixer.staggerDuration ? t * e.mixer.staggerDuration : 0,
            e.callFilters("delayGetDelay", n, arguments)
        },
        applyTransition: function(t) {
            var n = this
              , a = t.join(", ");
            n.callActions("beforeApplyTransition", arguments),
            n.dom.el.style[e.features.transitionProp] = a,
            n.callActions("afterApplyTransition", arguments)
        },
        handleTransitionEnd: function(t) {
            var e = this
              , n = t.propertyName
              , a = e.mixer.config.animation.animateResizeTargets;
            e.callActions("beforeHandleTransitionEnd", arguments),
            e.isBound && t.target.matches(e.mixer.config.selectors.target) && (n.indexOf("transform") > -1 || n.indexOf("opacity") > -1 || a && n.indexOf("height") > -1 || a && n.indexOf("width") > -1 || a && n.indexOf("margin") > -1) && (e.callback.call(e, e.operation),
            e.isBound = !1,
            e.callback = null,
            e.operation = null),
            e.callActions("afterHandleTransitionEnd", arguments)
        },
        eventBus: function(t) {
            var e = this;
            switch (e.callActions("beforeEventBus", arguments),
            t.type) {
            case "webkitTransitionEnd":
            case "transitionend":
                e.handleTransitionEnd(t)
            }
            e.callActions("afterEventBus", arguments)
        },
        unbindEvents: function() {
            var t = this;
            t.callActions("beforeUnbindEvents", arguments),
            n.off(t.dom.el, "webkitTransitionEnd", t.handler),
            n.off(t.dom.el, "transitionend", t.handler),
            t.callActions("afterUnbindEvents", arguments)
        },
        bindEvents: function() {
            var t = this
              , a = "";
            t.callActions("beforeBindEvents", arguments),
            a = "webkit" === e.features.transitionPrefix ? "webkitTransitionEnd" : "transitionend",
            t.handler = function(e) {
                return t.eventBus(e)
            }
            ,
            n.on(t.dom.el, a, t.handler),
            t.callActions("afterBindEvents", arguments)
        },
        getPosData: function(n) {
            var a = this
              , i = {}
              , o = null
              , r = new e.StyleData;
            return a.callActions("beforeGetPosData", arguments),
            r.x = a.dom.el.offsetLeft,
            r.y = a.dom.el.offsetTop,
            (a.mixer.config.animation.animateResizeTargets || n) && (o = a.dom.el.getBoundingClientRect(),
            r.top = o.top,
            r.right = o.right,
            r.bottom = o.bottom,
            r.left = o.left,
            r.width = o.width,
            r.height = o.height),
            a.mixer.config.animation.animateResizeTargets && (i = t.getComputedStyle(a.dom.el),
            r.marginBottom = parseFloat(i.marginBottom),
            r.marginRight = parseFloat(i.marginRight)),
            a.callFilters("posDataGetPosData", r, arguments)
        },
        cleanUp: function() {
            var t = this;
            t.callActions("beforeCleanUp", arguments),
            t.dom.el.style[e.features.transformProp] = "",
            t.dom.el.style[e.features.transitionProp] = "",
            t.dom.el.style.opacity = "",
            t.mixer.config.animation.animateResizeTargets && (t.dom.el.style.width = "",
            t.dom.el.style.height = "",
            t.dom.el.style.marginRight = "",
            t.dom.el.style.marginBottom = ""),
            t.callActions("afterCleanUp", arguments)
        }
    }),
    e.Collection = function(t) {
        var e = null
          , a = -1;
        for (this.callActions("beforeConstruct"),
        a = 0; e = t[a]; a++)
            this[a] = e;
        this.length = t.length,
        this.callActions("afterConstruct"),
        n.freeze(this)
    }
    ,
    e.BaseStatic.call(e.Collection),
    e.Collection.prototype = Object.create(e.Base.prototype),
    n.extend(e.Collection.prototype, {
        constructor: e.Collection,
        mixitup: function(t) {
            var a = this
              , i = null
              , o = Array.prototype.slice.call(arguments)
              , r = []
              , s = -1;
            for (this.callActions("beforeMixitup"),
            o.shift(),
            s = 0; i = a[s]; s++)
                r.push(i[t].apply(i, o));
            return a.callFilters("promiseMixitup", n.all(r, e.libraries), arguments)
        }
    }),
    e.Operation = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.id = "",
        this.args = [],
        this.command = null,
        this.showPosData = [],
        this.toHidePosData = [],
        this.startState = null,
        this.newState = null,
        this.docState = null,
        this.willSort = !1,
        this.willChangeLayout = !1,
        this.hasEffect = !1,
        this.hasFailed = !1,
        this.triggerElement = null,
        this.show = [],
        this.hide = [],
        this.matching = [],
        this.toShow = [],
        this.toHide = [],
        this.toMove = [],
        this.toRemove = [],
        this.startOrder = [],
        this.newOrder = [],
        this.startSort = null,
        this.newSort = null,
        this.startFilter = null,
        this.newFilter = null,
        this.startDataset = null,
        this.newDataset = null,
        this.viewportDeltaX = 0,
        this.viewportDeltaY = 0,
        this.startX = 0,
        this.startY = 0,
        this.startHeight = 0,
        this.startWidth = 0,
        this.newX = 0,
        this.newY = 0,
        this.newHeight = 0,
        this.newWidth = 0,
        this.startContainerClassName = "",
        this.startDisplay = "",
        this.newContainerClassName = "",
        this.newDisplay = "",
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.Operation),
    e.Operation.prototype = Object.create(e.Base.prototype),
    e.Operation.prototype.constructor = e.Operation,
    e.State = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.id = "",
        this.activeFilter = null,
        this.activeSort = null,
        this.activeContainerClassName = "",
        this.container = null,
        this.targets = [],
        this.hide = [],
        this.show = [],
        this.matching = [],
        this.totalTargets = -1,
        this.totalShow = -1,
        this.totalHide = -1,
        this.totalMatching = -1,
        this.hasFailed = !1,
        this.triggerElement = null,
        this.activeDataset = null,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.State),
    e.State.prototype = Object.create(e.Base.prototype),
    e.State.prototype.constructor = e.State,
    e.UserInstruction = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.command = {},
        this.animate = !1,
        this.callback = null,
        this.callActions("afterConstruct"),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.UserInstruction),
    e.UserInstruction.prototype = Object.create(e.Base.prototype),
    e.UserInstruction.prototype.constructor = e.UserInstruction,
    e.Messages = function() {
        e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.ERROR_FACTORY_INVALID_CONTAINER = "[MixItUp] An invalid selector or element reference was passed to the mixitup factory function",
        this.ERROR_FACTORY_CONTAINER_NOT_FOUND = "[MixItUp] The provided selector yielded no container element",
        this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS = "[MixItUp] Invalid value for `animation.effects`",
        this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE = "[MixItUp] Invalid value for `controls.scope`",
        this.ERROR_CONFIG_INVALID_PROPERTY = '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}',
        this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION = '. Did you mean "${probableMatch}"?',
        this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET = "[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`",
        this.ERROR_DATASET_INVALID_UID_KEY = '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items',
        this.ERROR_DATASET_DUPLICATE_UID = '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.',
        this.ERROR_INSERT_INVALID_ARGUMENTS = "[MixItUp] Please provider either an index or a sibling and position to insert, not both",
        this.ERROR_INSERT_PREEXISTING_ELEMENT = "[MixItUp] An element to be inserted already exists in the container",
        this.ERROR_FILTER_INVALID_ARGUMENTS = "[MixItUp] Please provide either a selector or collection `.filter()`, not both",
        this.ERROR_DATASET_NOT_SET = "[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`",
        this.ERROR_DATASET_PRERENDERED_MISMATCH = "[MixItUp] `load.dataset` does not match pre-rendered targets",
        this.ERROR_DATASET_RENDERER_NOT_SET = "[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`",
        this.ERROR_SORT_NON_EXISTENT_ELEMENT = "[MixItUp] An element to be sorted does not already exist in the container",
        this.WARNING_FACTORY_PREEXISTING_INSTANCE = "[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference.",
        this.WARNING_INSERT_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.insert()`",
        this.WARNING_REMOVE_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.remove()`",
        this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL = "[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled.",
        this.WARNING_GET_OPERATION_INSTANCE_BUSY = "[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.",
        this.WARNING_NO_PROMISE_IMPLEMENTATION = "[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill.",
        this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES = '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output',
        this.callActions("afterConstruct"),
        this.compileTemplates(),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.Messages),
    e.Messages.prototype = Object.create(e.Base.prototype),
    e.Messages.prototype.constructor = e.Messages,
    e.Messages.prototype.compileTemplates = function() {
        var t = ""
          , e = "";
        for (t in this)
            "string" == typeof (e = this[t]) && (this[n.camelCase(t)] = n.template(e))
    }
    ,
    e.messages = new e.Messages,
    e.Facade = function(t) {
        e.Base.call(this),
        this.callActions("beforeConstruct", arguments),
        this.configure = t.configure.bind(t),
        this.show = t.show.bind(t),
        this.hide = t.hide.bind(t),
        this.filter = t.filter.bind(t),
        this.toggleOn = t.toggleOn.bind(t),
        this.toggleOff = t.toggleOff.bind(t),
        this.sort = t.sort.bind(t),
        this.changeLayout = t.changeLayout.bind(t),
        this.multimix = t.multimix.bind(t),
        this.dataset = t.dataset.bind(t),
        this.tween = t.tween.bind(t),
        this.insert = t.insert.bind(t),
        this.insertBefore = t.insertBefore.bind(t),
        this.insertAfter = t.insertAfter.bind(t),
        this.prepend = t.prepend.bind(t),
        this.append = t.append.bind(t),
        this.remove = t.remove.bind(t),
        this.destroy = t.destroy.bind(t),
        this.forceRefresh = t.forceRefresh.bind(t),
        this.forceRender = t.forceRender.bind(t),
        this.isMixing = t.isMixing.bind(t),
        this.getOperation = t.getOperation.bind(t),
        this.getConfig = t.getConfig.bind(t),
        this.getState = t.getState.bind(t),
        this.callActions("afterConstruct", arguments),
        n.freeze(this),
        n.seal(this)
    }
    ,
    e.BaseStatic.call(e.Facade),
    e.Facade.prototype = Object.create(e.Base.prototype),
    e.Facade.prototype.constructor = e.Facade,
    "object" == typeof exports && "object" == typeof module ? module.exports = e : "function" == typeof define && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof t.mixitup && "function" == typeof t.mixitup || (t.mixitup = e),
    e.BaseStatic.call(e.constructor),
    e.NAME = "mixitup",
    e.CORE_VERSION = "3.3.1"
}(window);
;!function(e) {
    e.fn.niceSelect = function(t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next()
              , n = t.find("option")
              , i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()),
            n.each(function(t) {
                var n = e(this)
                  , i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }
        if ("string" == typeof t)
            return "update" == t ? this.each(function() {
                var t = e(this)
                  , n = e(this).next(".nice-select")
                  , i = n.hasClass("open");
                n.length && (n.remove(),
                s(t),
                i && t.next().trigger("click"))
            }) : "destroy" == t ? (this.each(function() {
                var t = e(this)
                  , s = e(this).next(".nice-select");
                s.length && (s.remove(),
                t.css("display", ""))
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'),
            this;
        this.hide(),
        this.each(function() {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }),
        e(document).off(".nice_select"),
        e(document).on("click.nice_select", ".nice-select", function(t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"),
            s.toggleClass("open"),
            s.hasClass("open") ? (s.find(".option"),
            s.find(".focus").removeClass("focus"),
            s.find(".selected").addClass("focus")) : s.focus()
        }),
        e(document).on("click.nice_select", function(t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }),
        e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
            var s = e(this)
              , n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"),
            s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i),
            n.prev("select").val(s.data("value")).trigger("change")
        }),
        e(document).on("keydown.nice_select", ".nice-select", function(t) {
            var s = e(this)
              , n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode)
                return s.hasClass("open") ? n.trigger("click") : s.trigger("click"),
                !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"),
                    i.addClass("focus"))
                } else
                    s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"),
                    l.addClass("focus"))
                } else
                    s.trigger("click");
                return !1
            }
            if (27 == t.keyCode)
                s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open"))
                return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto",
        "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
        this
    }
}(jQuery);
;(function($) {
    $.fn.loading = function() {
        var DEFAULTS = {
            backgroundColor: '#323232',
            progressColor: '#ff5d24',
            percent: 0,
            duration: 5000,
        };
        $(this).each(function() {
            var $target = $(this);
            var opts = {
                backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
                progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
                percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
                duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
            };
            $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>');
            $target.find('.background').css('background-color', opts.backgroundColor);
            $target.find('.left').css('background-color', opts.backgroundColor);
            $target.find('.rotate').css('background-color', opts.progressColor);
            $target.find('.right').css('background-color', opts.progressColor);
            var $rotate = $target.find('.rotate');
            setTimeout(function() {
                $rotate.css({
                    'transition': 'transform ' + opts.duration + 'ms linear',
                    'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
                })
            }, 1);
            if (opts.percent > 50) {
                var animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
                var animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';
                $target.find('.right').css({
                    animation: animationRight,
                    opacity: 1
                });
                $target.find('.left').css({
                    animation: animationLeft,
                    opacity: 0
                })
            }
        })
    }
}
)(jQuery);
jQuery(function($) {
    'use strict';
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar-light').addClass('menu-shrink');
        } else {
            $('.navbar-light').removeClass('menu-shrink');
        }
    });
    $('.navbar-nav .navigation-con .nav-link').on('click', function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1500);
        e.preventDefault();
    });
    $(document).on('click', '.navbar-collapse.show', function(e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });
    try {
        var mixer = mixitup('#Container', {
            controls: {
                toggleDefault: 'none'
            }
        });
    } catch (err) {}
    $('.banner-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        singleItem: true,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
    });
    $('.among-slider').owlCarousel({
        items: 3,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        center: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('select').niceSelect();
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');
        $(this).closest('.accordion').find('p').not(dropDown).slideUp();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
    $('.two-banner-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        singleItem: true,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
    });
    $('.three-review-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        singleItem: true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
    });
    $('.four-step-slider').owlCarousel({
        center: true,
        items: 4,
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });
    $('.four-step-slider-two').owlCarousel({
        center: true,
        items: 4,
        loop: true,
        margin: 50,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });
    $('.five-loan-slider').owlCarousel({
        items: 4,
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });
    $('.six-lover-slider').owlCarousel({
        center: true,
        items: 4,
        loop: true,
        margin: 25,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });
    $('body').append('<div id="toTop" class="back-to-top-btn"><i class="bx bxs-up-arrow-alt"></i></div>');
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 900);
        return false;
    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 120) {
            $('.navbar').addClass("is-sticky");
        } else {
            $('.navbar').removeClass("is-sticky");
        }
    });
    $('.why-choose-us-slider').owlCarousel({
        loop: true,
        margin: 25,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });
    $('.team-slide').owlCarousel({
        loop: true,
        margin: 25,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });
    $('.testimonials-style-slider').owlCarousel({
        loop: true,
        margin: 25,
        nav: false,
        dots: true,
        items: 1,
    });
    $('.offer-style-slider').owlCarousel({
        loop: true,
        margin: 25,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });
    $('.find-own-loan-slider').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        dots: false,
        navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });
    $('.blog-style-slider').owlCarousel({
        loop: true,
        margin: 25,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });
}(jQuery));
;