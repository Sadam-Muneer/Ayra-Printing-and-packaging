(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1188], {
        5140: function(e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/faqs", function() {
                return i(5991)
            }])
        },
        5991: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                __N_SSP: function() {
                    return p
                },
                default: function() {
                    return f
                }
            });
            var n = i(5893),
                s = i(7356),
                o = i(5675),
                a = i.n(o),
                c = i(7294),
                l = i(682),
                r = i(9473),
                d = function() {
                    let [e, t] = (0, c.useState)(0), [i, s] = (0, c.useState)({
                        faq: 0,
                        inner_faq: 0
                    }), {
                        mainfaq: o
                    } = (0, r.v9)(e => e.home), d = (i, n) => {
                        e === n ? t("") : t(n)
                    }, u = (e, t, n) => {
                        (null == i ? void 0 : i.faq) === t && (null == i ? void 0 : i.inner_faq) === n ? s({}) : s({
                            faq: t,
                            inner_faq: n
                        })
                    }, m = [{
                        id: 2,
                        heading: "About Biotech",
                        faq_data: [{
                            id: 2,
                            question: "What does Biotech Packages company specialize in?",
                            answer: "Biotech packages company specializes in the design, development and production of innovative packaging solutions for the industry. We create custom packaging solutions tailored to the unique needs of the customers."
                        }, {
                            id: 3,
                            question: "Can Biotech Packages company accommodate specific customization requests?",
                            answer: "Yes, our company provides the customization option because we understand the product's uniqueness. Our team works closely with clients to develop customized packaging solutions that meet their specific requirements. "
                        }, {
                            id: 4,
                            question: "How does a Biotech Packages company contribute to sustainability?",
                            answer: "Sustainability is the first core of us. We are continually exploring eco-friendly materials and production methods to minimize our environmental impact. Or goal is to offer sustainable packaging solutions without any compromising on safety and functionality. "
                        }, {
                            id: 5,
                            question: "What are the typical turnaround times for orders?",
                            answer: "The turnaround time of the order specifically depends on the complexity of the project, customization process and order volume. We strive to provide efficient turnaround times without compromising on quality. "
                        }]
                    }];
                    return console.log(o, "mainfaq"), (0, n.jsx)("div", {
                        className: "main_section_faq",
                        children: (0, n.jsx)("div", {
                            className: "main_faq_question",
                            children: (0, n.jsx)(l.Z, {
                                children: (0, n.jsxs)("div", {
                                    className: "Faq_sectionn",
                                    children: [(0, n.jsx)("h3", {
                                        children: "Frequently asked questions"
                                    }), (0, n.jsx)("div", {
                                        className: "faq_question_section1",
                                        style: {
                                            display: "flex",
                                            flexDirection: "column"
                                        },
                                        children: Array.isArray(m) && (null == m ? void 0 : m.map((t, s) => {
                                            var o;
                                            return (0, n.jsxs)("div", {
                                                style: {
                                                    width: "100%",
                                                    marginBottom: "20px"
                                                },
                                                children: [(0, n.jsxs)("div", {
                                                    className: "accordianss_sec",
                                                    onClick: e => d(e, s),
                                                    children: [(0, n.jsx)("h4", {
                                                        children: t.heading
                                                    }), (0, n.jsx)("div", {
                                                        className: "icon_style_faq",
                                                        children: (0, n.jsx)(a(), {
                                                            src: "/images/icons/bottom.png",
                                                            className: "".concat(e !== s ? "set_show" : "set_show2"),
                                                            alt: "",
                                                            layout: "fill",
                                                            objectFit: "cover",
                                                            objectPosition: "center"
                                                        })
                                                    })]
                                                }), (0, n.jsx)("div", {
                                                    className: "initial ".concat(e === s ? "opened" : "closed"),
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column"
                                                    },
                                                    children: null == t ? void 0 : null === (o = t.faq_data) || void 0 === o ? void 0 : o.map((e, t) => (0, n.jsxs)("div", {
                                                        children: [(0, n.jsxs)("div", {
                                                            className: "faq_question1_mailer",
                                                            children: [(0, n.jsx)("span", {
                                                                onClick: e => u(e, s, t),
                                                                children: t + 1 < 10 ? "0" + (t + 1).toString() : t + 1
                                                            }), (0, n.jsxs)("div", {
                                                                className: "innerfaq_width",
                                                                style: {
                                                                    width: "92%"
                                                                },
                                                                children: [(0, n.jsxs)("div", {
                                                                    className: "accordianss_biotech",
                                                                    onClick: e => u(e, s, t),
                                                                    children: [(0, n.jsx)("h5", {
                                                                        children: null == e ? void 0 : e.question
                                                                    }), (0, n.jsx)("div", {
                                                                        className: "icon_style2_biotech",
                                                                        children: (0, n.jsx)(a(), {
                                                                            src: "/images/icons/bottom.png",
                                                                            className: "".concat(i.faq === s && i.inner_faq === t ? "set_show2" : "set_show"),
                                                                            alt: "",
                                                                            layout: "fill",
                                                                            objectFit: "cover",
                                                                            objectPosition: "center"
                                                                        })
                                                                    })]
                                                                }), (0, n.jsx)("div", {
                                                                    className: " size_set ".concat(i.faq === s && i.inner_faq === t ? "opened" : "closed"),
                                                                    children: (0, n.jsx)("p", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: null == e ? void 0 : e.answer
                                                                        }
                                                                    })
                                                                })]
                                                            })]
                                                        }), (0, n.jsx)("hr", {})]
                                                    }, t))
                                                })]
                                            }, s)
                                        }))
                                    })]
                                })
                            })
                        })
                    })
                },
                u = i(9590);
            i(1632);
            var m = i(9008),
                h = i.n(m),
                p = !0,
                f = function(e) {
                    var t, i, o, a;
                    let {
                        maetaData: c
                    } = e;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)(h(), {
                            children: [(0, n.jsx)("meta", {
                                property: "og:site_name",
                                content: "Biotech Packages"
                            }), (0, n.jsx)("link", {
                                rel: "canonical",
                                href: "https://www.biotechpackages.com/faqs"
                            }), (0, n.jsx)("meta", {
                                property: "og:url",
                                content: "/"
                            }), (0, n.jsx)("title", {
                                children: null == c ? void 0 : null === (t = c.tags_desc) || void 0 === t ? void 0 : t.meta_title
                            }), (0, n.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1"
                            }), (0, n.jsx)("meta", {
                                property: "og:locale",
                                content: "en_US"
                            }), (0, n.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, n.jsx)("meta", {
                                property: "og:title",
                                content: null == c ? void 0 : null === (i = c.tags_desc) || void 0 === i ? void 0 : i.meta_title
                            }), (0, n.jsx)("meta", {
                                property: "og:description",
                                content: null == c ? void 0 : null === (o = c.tags_desc) || void 0 === o ? void 0 : o.meta_description
                            }), (0, n.jsx)("meta", {
                                name: "description",
                                content: null == c ? void 0 : null === (a = c.tags_desc) || void 0 === a ? void 0 : a.meta_description
                            }), (0, n.jsx)("link", {
                                rel: "icon",
                                href: "/images/bioblacklogo.png"
                            }), (0, n.jsx)("script", {
                                children: "\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments)}\n        gtag('js', new Date());\n        gtag('config', 'G-SHCZPNVVFC');\n      "
                            })]
                        }), (0, n.jsxs)(h(), {
                            children: [(0, n.jsx)("title", {
                                children: "FAQ"
                            }), (0, n.jsx)("meta", {
                                name: "description",
                                content: "Generated by create next app"
                            }), (0, n.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1"
                            }), (0, n.jsx)("link", {
                                rel: "icon",
                                href: "/images/biotech.png"
                            })]
                        }), (0, n.jsxs)("main", {
                            children: [(0, n.jsx)(u.Z, {}), (0, n.jsx)(d, {}), (0, n.jsx)(s.Z, {})]
                        })]
                    })
                }
        },
        1555: function(e, t, i) {
            "use strict";
            var n = i(4184),
                s = i.n(n),
                o = i(7294),
                a = i(6792),
                c = i(5893);
            let l = o.forwardRef((e, t) => {
                let [{
                    className: i,
                    ...n
                }, {
                    as: o = "div",
                    bsPrefix: l,
                    spans: r
                }] = function({
                    as: e,
                    bsPrefix: t,
                    className: i,
                    ...n
                }) {
                    t = (0, a.vE)(t, "col");
                    let o = (0, a.pi)(),
                        c = (0, a.zG)(),
                        l = [],
                        r = [];
                    return o.forEach(e => {
                        let i, s, o;
                        let a = n[e];
                        delete n[e], "object" == typeof a && null != a ? {
                            span: i,
                            offset: s,
                            order: o
                        } = a : i = a;
                        let d = e !== c ? `-${e}` : "";
                        i && l.push(!0 === i ? `${t}${d}` : `${t}${d}-${i}`), null != o && r.push(`order${d}-${o}`), null != s && r.push(`offset${d}-${s}`)
                    }), [{ ...n,
                        className: s()(i, ...l, ...r)
                    }, {
                        as: e,
                        bsPrefix: t,
                        spans: l
                    }]
                }(e);
                return (0, c.jsx)(o, { ...n,
                    ref: t,
                    className: s()(i, !r.length && l)
                })
            });
            l.displayName = "Col", t.Z = l
        },
        4051: function(e, t, i) {
            "use strict";
            var n = i(4184),
                s = i.n(n),
                o = i(7294),
                a = i(6792),
                c = i(5893);
            let l = o.forwardRef(({
                bsPrefix: e,
                className: t,
                as: i = "div",
                ...n
            }, o) => {
                let l = (0, a.vE)(e, "row"),
                    r = (0, a.pi)(),
                    d = (0, a.zG)(),
                    u = `${l}-cols`,
                    m = [];
                return r.forEach(e => {
                    let t;
                    let i = n[e];
                    delete n[e], null != i && "object" == typeof i ? {
                        cols: t
                    } = i : t = i;
                    let s = e !== d ? `-${e}` : "";
                    null != t && m.push(`${u}${s}-${t}`)
                }), (0, c.jsx)(i, {
                    ref: o,
                    ...n,
                    className: s()(t, l, ...m)
                })
            });
            l.displayName = "Row", t.Z = l
        }
    },
    function(e) {
        e.O(0, [776, 3081, 395, 7356, 9590, 9774, 2888, 179], function() {
            return e(e.s = 5140)
        }), _N_E = e.O()
    }
]);