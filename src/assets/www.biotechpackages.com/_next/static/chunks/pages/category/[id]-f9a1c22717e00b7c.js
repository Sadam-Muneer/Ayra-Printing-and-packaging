(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7300], {
        881: function(n, i, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/category/[id]", function() {
                return e(2485)
            }])
        },
        2956: function(n, i, e) {
            "use strict";
            var o = e(5893);
            e(7294);
            var l = e(682),
                t = e(9473),
                a = e(1664),
                s = e.n(a);
            i.Z = function() {
                var n, i, e, a, d, c;
                let {
                    categoryProduct: r
                } = (0, t.v9)(n => n.product);
                return console.log("categoryProduct?.categorycategoryProduct?.category", null == r ? void 0 : null === (n = r.category) || void 0 === n ? void 0 : null === (i = n[0]) || void 0 === i ? void 0 : null === (e = i.category_products) || void 0 === e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.length), (0, o.jsx)("div", {
                    children: (0, o.jsx)(l.Z, {
                        children: (0, o.jsx)("div", {
                            className: "main_shop_by_need",
                            children: (0, o.jsxs)("div", {
                                className: "main_need",
                                children: [(0, o.jsx)("h2", {
                                    children: "Shop by Need"
                                }), (0, o.jsx)("div", {
                                    className: "need_section",
                                    children: null === (d = null == r ? void 0 : null === (c = r.category) || void 0 === c ? void 0 : c.slice(0, 1)) || void 0 === d ? void 0 : d.map((n, i) => {
                                        var e, l, t;
                                        return (null == n ? void 0 : null === (e = n.category_products) || void 0 === e ? void 0 : e.data) && (null == n ? void 0 : null === (l = n.category_products) || void 0 === l ? void 0 : null === (t = l.data) || void 0 === t ? void 0 : t.slice(0, 3).map((n, i) => (0, o.jsxs)("div", {
                                            className: "slide_need",
                                            children: [(0, o.jsx)("img", {
                                                className: "one_image_need",
                                                src: n.image
                                            }), (0, o.jsx)(s(), {
                                                style: {
                                                    color: "black"
                                                },
                                                href: "/".concat(null == n ? void 0 : n.slug),
                                                children: (0, o.jsx)("p", {
                                                    children: n.title
                                                })
                                            })]
                                        }, i)))
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        38: function(n, i, e) {
            "use strict";
            var o = e(5893),
                l = e(5675),
                t = e.n(l),
                a = e(1664),
                s = e.n(a);
            e(7294), i.Z = function() {
                return (0, o.jsxs)("div", {
                    className: "main-stickerabout",
                    children: [(0, o.jsxs)("div", {
                        className: "left_section",
                        children: [(0, o.jsx)("h2", {
                            children: "Need Help with Sticker Design?"
                        }), (0, o.jsx)("p", {
                            children: "Work with a professional designer to create a one-of-a-kind design for you"
                        }), (0, o.jsx)("div", {
                            className: "button",
                            children: (0, o.jsx)(s(), {
                                href: "/contacts",
                                children: (0, o.jsx)("button", {
                                    children: "Get in touch"
                                })
                            })
                        })]
                    }), (0, o.jsx)("div", {
                        className: "right_section",
                        children: (0, o.jsx)(t(), {
                            src: "/images/laptop.png",
                            width: 1020,
                            height: 794
                        })
                    })]
                })
            }
        },
        614: function(n, i, e) {
            "use strict";
            e.r(i);
            var o = e(5893);
            e(7294);
            var l = e(1163);
            e(5675);
            var t = e(682);
            let a = () => {
                let n = (0, l.useRouter)();
                return console.log(n, "notfound"), (0, o.jsx)(t.Z, {
                    children: (0, o.jsxs)("div", {
                        children: [(0, o.jsx)("div", {
                            style: {
                                marginTop: "40px"
                            },
                            children: (0, o.jsx)("img", {
                                className: "notfoundimage",
                                src: "/images/notfound.png"
                            })
                        }), (0, o.jsx)("h1", {
                            style: {
                                fontWeight: "semibold",
                                textAlign: "center",
                                marginTop: "50px"
                            },
                            children: "404 - Page Not Found"
                        }), (0, o.jsxs)("p", {
                            style: {
                                textAlign: "center",
                                marginTop: "20px"
                            },
                            children: ["Oops! The page ", "you're", " looking for does not exist."]
                        })]
                    })
                })
            };
            i.default = a
        },
        2485: function(n, i, e) {
            "use strict";
            e.r(i), e.d(i, {
                __N_SSP: function() {
                    return p
                }
            });
            var o = e(5893),
                l = e(7356),
                t = e(2258),
                a = e(5430),
                s = e(8954),
                d = e(5955);
            e(4250);
            var c = e(9008),
                r = e.n(c),
                u = e(1163),
                v = e(7294),
                g = e(2956),
                h = e(38),
                m = e(9473);
            e(614);
            var p = !0;
            i.default = function(n) {
                var i, e, c, p, x, j, y, f, w, _, k, b, N, P, Z, q, F, B, S, A, D, E, C, T, W;
                let {
                    maetaData: G
                } = n, [H, L] = (0, v.useState)(""), [O, z] = (0, v.useState)(!1), {
                    service: R
                } = (0, m.v9)(n => n.home), {
                    categoryProduct: X
                } = (0, m.v9)(n => n.product), U = (0, u.useRouter)();
                (0, v.useEffect)(() => {
                    window.scroll({
                        top: 0,
                        behavior: "instant"
                    })
                }, []);
                let I = null === (i = U.query.id) || void 0 === i ? void 0 : i.split("-")[0],
                    J = U.query.id,
                    K = (null == R ? void 0 : R.length) > 0 ? null == R ? void 0 : R.filter(n => (null == n ? void 0 : n.button_link) === I) : [];
                (0, v.useEffect)(() => {
                    if (R && Array.isArray(R)) {
                        var n, i, e;
                        let o = null == J ? void 0 : J.split("-").slice(1).join("-"),
                            l = null == K ? void 0 : null === (n = K[0]) || void 0 === n ? void 0 : null === (i = n.categories) || void 0 === i ? void 0 : i.filter(n => (null == n ? void 0 : n.main_slug) === o),
                            t = null == X ? void 0 : null === (e = X.category) || void 0 === e ? void 0 : e.filter(n => (null == n ? void 0 : n.main_slug) === o);
                        (null == t ? void 0 : t.length) === 0 && z(!0), l && L(l)
                    }
                }, [R]);
                let M = (null == X ? void 0 : null === (e = X.category) || void 0 === e ? void 0 : e.length) === 0;
                return (0, v.useEffect)(() => {
                    (null == X ? void 0 : X.category) && M && U.push("/404")
                }, [M]), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(r(), {
                        children: [(0, o.jsx)("meta", {
                            property: "og:site_name",
                            content: "Biotech Packages"
                        }), (0, o.jsx)("meta", {
                            property: "og:url",
                            content: "https://www.biotechpackages.com/category/".concat(null == K ? void 0 : null === (c = K[0]) || void 0 === c ? void 0 : c.button_link, "-").concat(null == H ? void 0 : null === (p = H[0]) || void 0 === p ? void 0 : p.name)
                        }), (0, o.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.biotechpackages.com/category/".concat(null == K ? void 0 : null === (x = K[0]) || void 0 === x ? void 0 : x.button_link, "-").concat(null == H ? void 0 : null === (j = H[0]) || void 0 === j ? void 0 : j.name)
                        }), (0, o.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0, o.jsx)("meta", {
                            property: "og:locale",
                            content: "en_US"
                        }), (0, o.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, o.jsx)("title", {
                            children: null == G ? void 0 : null === (y = G.tags_desc) || void 0 === y ? void 0 : y.meta_title
                        }), (null == R ? void 0 : null === (f = R[0]) || void 0 === f ? void 0 : f.button_link) === "packaging" && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsxs)("title", {
                                children: [" ", "".concat((null == H ? void 0 : null === (w = H[0]) || void 0 === w ? void 0 : w.name) ? null == H ? void 0 : null === (_ = H[0]) || void 0 === _ ? void 0 : _.name : "", "  Archives  | Biotech Packages")]
                            }), (0, o.jsx)("meta", {
                                property: "og:title",
                                content: "".concat((null == H ? void 0 : null === (k = H[0]) || void 0 === k ? void 0 : k.name) ? null == H ? void 0 : null === (b = H[0]) || void 0 === b ? void 0 : b.name : "", "  Archives  | Biotech Packages")
                            }), (0, o.jsx)("meta", {
                                property: "og:description",
                                content: "   Browse our  ".concat((null == H ? void 0 : null === (N = H[0]) || void 0 === N ? void 0 : N.name) ? null == H ? void 0 : null === (P = H[0]) || void 0 === P ? void 0 : P.name : "", " category with various unique designs, shapes, and custom sizes. Look unique with our stylish packaging. High quality printing!")
                            }), (0, o.jsx)("meta", {
                                name: "description",
                                content: "   Browse our  ".concat((null == H ? void 0 : null === (Z = H[0]) || void 0 === Z ? void 0 : Z.name) ? null == H ? void 0 : null === (q = H[0]) || void 0 === q ? void 0 : q.name : "", " category with various unique designs, shapes, and custom sizes. Look unique with our stylish packaging. High quality printing!")
                            })]
                        }), (null == R ? void 0 : null === (F = R[0]) || void 0 === F ? void 0 : F.button_link) === "stickerandlabels" && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("title", {
                                children: "".concat((null == H ? void 0 : null === (B = H[0]) || void 0 === B ? void 0 : B.name) ? null == H ? void 0 : null === (S = H[0]) || void 0 === S ? void 0 : S.name : "", "  Archives  | Biotech Packages")
                            }), (0, o.jsx)("meta", {
                                property: "og:title",
                                content: "".concat((null == H ? void 0 : null === (A = H[0]) || void 0 === A ? void 0 : A.name) ? null == H ? void 0 : null === (D = H[0]) || void 0 === D ? void 0 : D.name : "", "  Archives  | Biotech Packages")
                            }), (0, o.jsx)("meta", {
                                property: "og:description",
                                content: " Have a look at our  ".concat((null == H ? void 0 : null === (E = H[0]) || void 0 === E ? void 0 : E.name) ? null == H ? void 0 : null === (C = H[0]) || void 0 === C ? void 0 : C.name : "", " category of Biotech Packages and grow your business. Get them with a fast turnaround time. Design Support also available!\n\n          ")
                            }), (0, o.jsx)("meta", {
                                name: "description",
                                content: " Have a look at our  ".concat((null == H ? void 0 : null === (T = H[0]) || void 0 === T ? void 0 : T.name) ? null == H ? void 0 : null === (W = H[0]) || void 0 === W ? void 0 : W.name : "", " category of Biotech Packages and grow your business. Get them with a fast turnaround time. Design Support also available!")
                            })]
                        }), (0, o.jsx)("link", {
                            rel: "icon",
                            href: "/images/bioblacklogo.png"
                        }), (0, o.jsx)("script", {
                            async: !0,
                            src: "https://www.googletagmanager.com/gtag/js?id=G-94FWCDD0CW"
                        }), (0, o.jsx)("script", {
                            children: "\n    window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'G-94FWCDD0CW');\n  "
                        })]
                    }), (0, o.jsx)("main", {
                        children: (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(d.Z, {}), U.query.id && "flyers" !== U.query.id && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(t.Z, {}), "stickerandlabels" === I && (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)(a.Z, {}), (0, o.jsx)(g.Z, {}), (0, o.jsx)(h.Z, {})]
                                }), "packaging" === I && (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)(a.Z, {}), (0, o.jsx)(g.Z, {}), (0, o.jsx)(s.Z, {})]
                                })]
                            }), (0, o.jsx)(l.Z, {})]
                        })
                    })]
                })
            }
        }
    },
    function(n) {
        n.O(0, [776, 3081, 395, 1033, 149, 1171, 7067, 7356, 5955, 913, 9774, 2888, 179], function() {
            return n(n.s = 881)
        }), _N_E = n.O()
    }
]);