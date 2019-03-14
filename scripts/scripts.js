var Intro = function() {
    "use strict";
    var e, t, a, n, i, s;
    return t = {
        settings: {
            width: 0,
            height: 0,
            palette: [],
            paletteShift: 0,
            plasma: []
        },
        generate: function(t, a) {
            e = this.settings, e.width = t, e.height = a;
            var n, i, s, c, o, r, l, m = [];
            for (n = 0; 256 > n; n += 1) i = Math.floor(128 + 128 * Math.sin(Math.PI * n / 32)), s = Math.floor(128 + 128 * Math.sin(Math.PI * n / 64)), c = Math.floor(128 + 128 * Math.sin(Math.PI * n / 128)), e.palette.push([i, s, c]);
            for (o = 0; o < e.width; o += 1) {
                for (m = [], r = 0; r < e.height; r += 1) l = Math.floor(Math.floor(128 + 128 * Math.sin(o / 16) + 128 + 128 * Math.sin(r / 8) + 128 + 128 * Math.sin((o + r) / 16) + 128 + 128 * Math.sin(Math.sqrt(Math.floor(o * o + r * r)) / 8)) / 4), m.push(l);
                e.plasma.push(m)
            }
        },
        start: function(t) {
            var a = t.getContext("2d"),
                n = a.createImageData(e.width, e.height);
            ! function i() {
                e.paletteShift += 1;
                var s, c, o, t = n.data;
                for (s = 0; s < e.width; s += 1)
                    for (c = 0; c < e.height; c += 1) o = 4 * (s + c * e.width), t[o] = e.palette[(e.plasma[s][c] + e.paletteShift) % 256][0], t[o + 1] = e.palette[(e.plasma[s][c] + e.paletteShift) % 256][1], t[o + 2] = e.palette[(e.plasma[s][c] + e.paletteShift) % 256][2], t[o + 3] = 255;
                n.data.set(t), a.putImageData(n, 0, 0), setTimeout(i, 15)
            }()
        }
    }, n = {
        settings: {
            cube: null,
            initialEffect: "animateScaleGrow"
        },
        generate: function() {
            function l() {
                e.innerHTML = "", n.innerHTML = "", i.innerHTML = "", s.innerHTML = "", c.innerHTML = "", o.innerHTML = ""
            }

            function m() {
                var t = document.createElement("img"),
                    a = document.createElement("img"),
                    r = document.createElement("img"),
                    l = document.createElement("img"),
                    m = document.createElement("img"),
                    h = document.createElement("img");
                t.src = "media/sizewellb.png", a.src = "media/sizewellb.png", r.src = "media/sizewellb.png", l.src = "media/sizewellb.png", m.src = "media/sizewellb.png", h.src = "media/sizewellb.png", e.appendChild(t), n.appendChild(a), i.appendChild(r), s.appendChild(l), c.appendChild(m), o.appendChild(h)
            }

            function h() {
                var t = document.createElement("img"),
                    a = document.createElement("img"),
                    r = document.createElement("img"),
                    l = document.createElement("img"),
                    m = document.createElement("img"),
                    h = document.createElement("img");
                t.src = "media/trefoil.png", a.src = "media/trefoil.png", r.src = "media/trefoil.png", l.src = "media/trefoil.png", m.src = "media/trefoil.png", h.src = "media/trefoil.png", e.appendChild(t), n.appendChild(a), i.appendChild(r), s.appendChild(l), c.appendChild(m), o.appendChild(h)
            }

            function d() {
                var e = document.createElement("canvas"),
                    a = document.createElement("canvas"),
                    n = document.createElement("canvas"),
                    i = document.createElement("canvas"),
                    s = document.createElement("canvas"),
                    c = document.createElement("canvas");
                e.id = "canvas", e.width = e.height = "200", document.getElementsByTagName("figure")[0].appendChild(e), t.start(e), a.id = "canvas2", a.width = a.height = "200", document.getElementsByTagName("figure")[1].appendChild(a), t.start(a), n.id = "canvas3", n.width = n.height = "200", document.getElementsByTagName("figure")[2].appendChild(n), t.start(n), i.id = "canvas4", i.width = i.height = "200", document.getElementsByTagName("figure")[3].appendChild(i), t.start(i), s.id = "canvas5", s.width = s.height = "200", document.getElementsByTagName("figure")[4].appendChild(s), t.start(s), c.id = "canvas6", c.width = c.height = "200", document.getElementsByTagName("figure")[5].appendChild(c), t.start(c)
            }

            function u() {
                switch (r) {
                    case 0:
                        a.cube.className = "animateRotate2s";
                        break;
                    case 1:
                        a.cube.className = "animateScaleShrink";
                        break;
                    case 2:
                        a.cube.className = "animateScaleGrow", d();
                        break;
                    case 3:
                        a.cube.className = "animateRotate2s";
                        break;
                    case 4:
                        a.cube.className = "animateScaleShrink";
                        break;
                    case 5:
                        a.cube.className = "animateScaleGrow", l(), h();
                        break;
                    case 6:
                        a.cube.className = "animateRotate2s";
                        break;
                    case 7:
                        a.cube.className = "animateScaleShrink";
                        break;
                    case 8:
                        a.cube.className = "animateScaleGrow", l(), d();
                        break;
                    case 9:
                        a.cube.className = "animateRotate2s";
                        break;
                    case 10:
                        a.cube.className = "animateScaleShrink";
                        break;
                    case 11:
                        a.cube.className = "animateScaleGrow", l(), m();
                        break;
                    case 12:
                        a.cube.className = "animateRotate2s";
                        break;
                    case 13:
                        a.cube.className = "animateScaleShrink";
                        break;
                    case 14:
                        a.cube.className = a.initialEffect, l(), r = -1
                }
                a.cube.className = "cube " + a.cube.className, r += 1
            }
            a = this.settings, a.cube = document.getElementsByClassName("cube")[0];
            var e = document.getElementsByClassName("front")[0],
                n = document.getElementsByClassName("back")[0],
                i = document.getElementsByClassName("right")[0],
                s = document.getElementsByClassName("left")[0],
                c = document.getElementsByClassName("topFoo")[0],
                o = document.getElementsByClassName("bottom")[0],
                r = 0;
            document.getElementsByClassName("wrapper_cubetext")[0].style.display = "block", a.cube.addEventListener("webkitAnimationEnd", u, !1)
        },
        start: function() {
            a.cube.className = "cube " + a.initialEffect
        }
    }, i = {
        start: function() {
            var i, a = -1,
                n = document.getElementsByClassName("tickerinner")[0].getElementsByTagName("li").length;
            ! function s() {
                var c, e = document.getElementsByClassName("tickerinner")[0],
                    t = e.getElementsByTagName("li");
                for (i = 0; n > i; i += 1) t[i].className = "";
                t[(a += 1) % n].className = "active", c = e.cloneNode(!0), e.parentNode.replaceChild(c, e), setTimeout(s, 4e3)
            }()
        }
    }, s = {
        init: function() {
            var e = document.getElementById("linecanvas"),
                t = document.getElementsByClassName("container")[0];
            e.width = t.clientWidth, e.height = t.clientHeight
        },
        start: function() {
            function C() {
                for (d = [Math.floor(3 * Math.random()), Math.floor(3 * Math.random() + 4), Math.floor(3 * Math.random()), Math.floor(3 * Math.random() + 4)], h = 0; 2560 > h; h += 1) o[h] = c[d[0]](h), l[h] = c[d[1]](h), r[h] = c[d[2]](h), m[h] = c[d[3]](h);
                setTimeout(function() {
                    e.className = "fadeOut"
                }, 2e3)
            }

            function v(t) {
                "fadeOut" === t.animationName && (C(), e.className = "fadeIn")
            }
            var h, g, f, p, e = document.getElementById("linecanvas"),
                t = e.getContext("2d"),
                a = e.width,
                n = e.height,
                i = e.width / 2,
                s = e.width / 2,
                c = [],
                o = [],
                r = [],
                l = [],
                m = [],
                d = [],
                u = [],
                M = 255,
                b = 0,
                E = 0;
            for (c = [function(e) {
                    return Math.floor(i + i * Math.sin(e * Math.PI / 64))
                }, function(e) {
                    return Math.floor(s + s * Math.sin(e * Math.PI / 128))
                }, function(e) {
                    return Math.floor(i + i * Math.cos(e * Math.PI / 64))
                }, function(e) {
                    return Math.floor(s + s * Math.cos(e * Math.PI / 128))
                }, function(e) {
                    return Math.floor(i + i * Math.sin(e * Math.PI / 192))
                }, function(e) {
                    return Math.floor(s + s * Math.sin(e * Math.PI / 128))
                }, function(e) {
                    return Math.floor(i + i * Math.cos(e * Math.PI / 192))
                }, function(e) {
                    return Math.floor(s + s * Math.cos(e * Math.PI / 128))
                }], e.addEventListener("webkitAnimationEnd", v, !1), h = 0; 256 > h; h += 1) g = Math.floor(128 + 128 * Math.sin(Math.PI * h / 32)).toString(16), f = Math.floor(128 + 128 * Math.sin(Math.PI * h / 64)).toString(16), p = Math.floor(128 + 128 * Math.sin(Math.PI * h / 128)).toString(16), g = 1 === g.length ? "0" + g : g, f = 1 === f.length ? "0" + f : f, p = 1 === p.length ? "0" + p : p, u.push("#" + g + f + p);
            ! function() {
                C()
            }(),
            function k() {
                for (t.clearRect(0, 0, a, n), h = 0; M > h; h += 1) t.beginPath(), t.strokeStyle = u[h], t.moveTo(o[h - b & M], l[h - b & M]), t.lineTo(r[h - E & M], m[h - E & M]), t.stroke();
                b += 1, E -= 1, setTimeout(k, 20)
            }()
        }
    }, {
        init: function() {
            t.generate(200, 200), n.generate(), n.start(), i.start(), s.init(), s.start()
        }
    }
}().init();