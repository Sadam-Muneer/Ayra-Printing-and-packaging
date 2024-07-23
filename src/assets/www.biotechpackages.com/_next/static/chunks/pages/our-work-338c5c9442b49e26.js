(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1423], {
        5863: function(e, i, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/our-work", function() {
                return n(4685)
            }])
        },
        4685: function(e, i, n) {
            "use strict";
            n.r(i), n.d(i, {
                __N_SSP: function() {
                    return h
                },
                default: function() {
                    return j
                }
            });
            var t = n(5893),
                o = n(7356),
                a = n(5675),
                l = n.n(a),
                s = n(7294),
                r = n(9473),
                c = function() {
                    var e, i, n, o, a, s;
                    let {
                        works: c
                    } = (0, r.v9)(e => e.ourwork);
                    return (0, t.jsxs)("div", {
                        className: "main_ourWork",
                        children: [(0, t.jsx)("div", {
                            className: "ourWork_banner",
                            children: (0, t.jsx)(l(), {
                                className: "ourWork_banner_image",
                                src: c && (null == c ? void 0 : null === (e = c.ourwork) || void 0 === e ? void 0 : null === (i = e[0]) || void 0 === i ? void 0 : i.bg_image),
                                alt: "",
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "center"
                            })
                        }), (0, t.jsx)("div", {
                            className: "ourWork_banner_data",
                            children: (0, t.jsxs)("div", {
                                className: "ourWork_content",
                                children: [(0, t.jsx)("h4", {
                                    children: c && (null == c ? void 0 : null === (n = c.ourwork) || void 0 === n ? void 0 : null === (o = n[0]) || void 0 === o ? void 0 : o.heading)
                                }), (0, t.jsxs)("p", {
                                    children: [c && (null == c ? void 0 : null === (a = c.ourwork) || void 0 === a ? void 0 : null === (s = a[0]) || void 0 === s ? void 0 : s.paragraph), "    "]
                                })]
                            })
                        })]
                    })
                };
            n(4250), n(7174);
            var d = n(6524),
                u = function() {
                    var e, i;
                    let {
                        works: n
                    } = (0, r.v9)(e => e.ourwork), [o, a] = (0, s.useState)(!0), [l, c] = (0, s.useState)([]), [u, v] = (0, s.useState)(-1), [m, p] = (0, s.useState)("all"), [h, j] = (0, s.useState)(1), [g, x] = (0, s.useState)(!1);
                    (0, r.I0)();
                    let _ = (e, i) => {
                        let n = [];
                        for (let i = 0; i < (null == e ? void 0 : e.length); i++) e[i] && n.push({
                            src: e[i]
                        });
                        v(i), c(n), setTimeout(() => {
                            x(!g)
                        }, 100)
                    };
                    return (0, t.jsxs)("div", {
                        className: "ourworkcard_head",
                        children: [(0, t.jsx)("div", {
                            className: "main-filter",
                            children: o && (0, t.jsxs)("div", {
                                className: "all-filter",
                                children: [(0, t.jsx)("div", {
                                    className: " ".concat("all" === m ? "inner-parablack" : "main_all"),
                                    onClick: () => p("all"),
                                    children: (0, t.jsx)("p", {
                                        children: "All"
                                    })
                                }), null == n ? void 0 : null === (e = n.header) || void 0 === e ? void 0 : e.map((e, i) => (0, t.jsx)("div", {
                                    className: "inner-para ".concat(m === e.type ? "selected" : ""),
                                    onClick: () => p(e.type),
                                    children: (0, t.jsx)("p", {
                                        children: null == e ? void 0 : e.type
                                    })
                                }, i))]
                            })
                        }), (0, t.jsx)("div", {
                            className: "main_products_ourworkcard",
                            children: null == n ? void 0 : null === (i = n.header) || void 0 === i ? void 0 : i.filter((e, i) => (null == e ? void 0 : e.type) === m || "all" === m).map((e, i) => e.images.map((n, o) => (0, t.jsx)("div", {
                                style: {
                                    cursor: "pointer"
                                },
                                className: "bottom",
                                children: (0, t.jsx)("div", {
                                    className: "head_ourworkcard_image",
                                    children: (0, t.jsx)("div", {
                                        className: "image_ourworkcard",
                                        onClick: () => _(e.images, o),
                                        children: (0, t.jsx)("img", {
                                            src: n,
                                            width: 529,
                                            height: "auto"
                                        })
                                    })
                                })
                            }, i + o)))
                        }), "all" === m && (0, t.jsx)("div", {
                            className: "",
                            style: {
                                marginTop: "100px",
                                display: "flex",
                                justifyContent: "center",
                                width: "100%"
                            }
                        }), (0, t.jsx)(d.ZP, {
                            open: g,
                            close: () => x(!g),
                            enableImageSelection: !1,
                            slides: l,
                            index: u
                        })]
                    })
                },
                v = n(5955),
                m = n(9008),
                p = n.n(m),
                h = !0,
                j = function(e) {
                    var i, n, a, l;
                    let {
                        maetaData: s
                    } = e;
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsxs)(p(), {
                            children: [(0, t.jsx)("meta", {
                                property: "og:site_name",
                                content: "Biotech Packages"
                            }), (0, t.jsx)("link", {
                                rel: "canonical",
                                href: "https://www.biotechpackages.com/our-work"
                            }), (0, t.jsx)("meta", {
                                property: "og:url",
                                content: "/https://www.biotechpackages.com/our-work"
                            }), (0, t.jsx)("title", {
                                children: null == s ? void 0 : null === (i = s.tags_desc) || void 0 === i ? void 0 : i.meta_title
                            }), (0, t.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1"
                            }), (0, t.jsx)("meta", {
                                property: "og:locale",
                                content: "en_US"
                            }), (0, t.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, t.jsx)("meta", {
                                property: "og:title",
                                content: null == s ? void 0 : null === (n = s.tags_desc) || void 0 === n ? void 0 : n.meta_title
                            }), (0, t.jsx)("meta", {
                                property: "og:description",
                                content: null == s ? void 0 : null === (a = s.tags_desc) || void 0 === a ? void 0 : a.meta_description
                            }), (0, t.jsx)("meta", {
                                name: "description",
                                content: null == s ? void 0 : null === (l = s.tags_desc) || void 0 === l ? void 0 : l.meta_description
                            }), (0, t.jsx)("link", {
                                rel: "icon",
                                href: "/images/bioblacklogo.png"
                            }), (0, t.jsx)("script", {
                                async: !0,
                                src: "https://www.googletagmanager.com/gtag/js?id=G-94FWCDD0CW"
                            }), (0, t.jsx)("script", {
                                children: "\n    window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'G-94FWCDD0CW');\n  "
                            })]
                        }), (0, t.jsxs)("main", {
                            children: [(0, t.jsx)(v.Z, {}), (0, t.jsx)(c, {}), (0, t.jsx)(u, {}), (0, t.jsx)(o.Z, {})]
                        })]
                    })
                }
        }
    },
    function(e) {
        e.O(0, [776, 3081, 395, 106, 7356, 5955, 9774, 2888, 179], function() {
            return e(e.s = 5863)
        }), _N_E = e.O()
    }
]);