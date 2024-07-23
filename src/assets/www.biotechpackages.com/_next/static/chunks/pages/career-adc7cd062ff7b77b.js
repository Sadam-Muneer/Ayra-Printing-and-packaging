(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5065], {
        5247: function(e, i, a) {
            "use strict";
            a.d(i, {
                ZP: function() {
                    return h
                }
            });
            let n = {
                    _origin: "https://api.emailjs.com"
                },
                s = (e, i = "https://api.emailjs.com") => {
                    n._userID = e, n._origin = i
                },
                t = (e, i, a) => {
                    if (!e) throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
                    if (!i) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
                    if (!a) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
                    return !0
                };
            class r {
                constructor(e) {
                    this.status = e ? e.status : 0, this.text = e ? e.responseText : "Network Error"
                }
            }
            let l = (e, i, a = {}) => new Promise((s, t) => {
                    let l = new XMLHttpRequest;
                    l.addEventListener("load", ({
                        target: e
                    }) => {
                        let i = new r(e);
                        200 === i.status || "OK" === i.text ? s(i) : t(i)
                    }), l.addEventListener("error", ({
                        target: e
                    }) => {
                        t(new r(e))
                    }), l.open("POST", n._origin + e, !0), Object.keys(a).forEach(e => {
                        l.setRequestHeader(e, a[e])
                    }), l.send(i)
                }),
                d = (e, i, a, s) => {
                    let r = s || n._userID;
                    return t(r, e, i), l("/api/v1.0/email/send", JSON.stringify({
                        lib_version: "3.11.0",
                        user_id: r,
                        service_id: e,
                        template_id: i,
                        template_params: a
                    }), {
                        "Content-type": "application/json"
                    })
                },
                o = e => {
                    let i;
                    if (!(i = "string" == typeof e ? document.querySelector(e) : e) || "FORM" !== i.nodeName) throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
                    return i
                },
                c = (e, i, a, s) => {
                    let r = s || n._userID,
                        d = o(a);
                    t(r, e, i);
                    let c = new FormData(d);
                    return c.append("lib_version", "3.11.0"), c.append("service_id", e), c.append("template_id", i), c.append("user_id", r), l("/api/v1.0/email/send-form", c)
                };
            var h = {
                init: s,
                send: d,
                sendForm: c
            }
        },
        6721: function(e, i, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/career", function() {
                return a(846)
            }])
        },
        2258: function(e, i, a) {
            "use strict";
            var n = a(5893),
                s = a(5675),
                t = a.n(s),
                r = a(1163);
            a(7294);
            var l = a(9473);
            i.Z = function() {
                var e, i, a, s, d, o, c, h;
                let {
                    showMenu: u
                } = (0, l.v9)(e => e.product), {
                    categoryProduct: m
                } = (0, l.v9)(e => e.product), p = null == m ? void 0 : null === (e = m.header) || void 0 === e ? void 0 : null === (i = e[0]) || void 0 === i ? void 0 : i.heading, v = null == m ? void 0 : null === (a = m.header) || void 0 === a ? void 0 : null === (s = a[0]) || void 0 === s ? void 0 : s.description, g = (0, r.useRouter)(), x = (null == g ? void 0 : null === (d = g.query) || void 0 === d ? void 0 : null === (o = d.id) || void 0 === o ? void 0 : o.split("-")[0]) === "packaging", j = (null == g ? void 0 : null === (c = g.query) || void 0 === c ? void 0 : null === (h = c.id) || void 0 === h ? void 0 : h.split("-")[0]) === "stickerandlabels";
                return (0, n.jsxs)("div", {
                    className: "main_subservicebanner ".concat(u ? "index0" : "index1"),
                    children: [(0, n.jsxs)("div", {
                        className: "subservice_banner",
                        children: [x && (0, n.jsx)(t(), {
                            className: "subservice_banner_image",
                            src: "/images/package.webp",
                            alt: "banner",
                            layout: "fill",
                            objectFit: "cover",
                            objectPosition: "center"
                        }), j && (0, n.jsx)(t(), {
                            className: "subservice_banner_image",
                            src: "/images/labandstick.webp",
                            alt: "banner",
                            layout: "fill",
                            objectFit: "cover",
                            objectPosition: "center"
                        })]
                    }), (0, n.jsx)("div", {
                        className: "subservice_banner_data",
                        children: (0, n.jsxs)("div", {
                            className: "subservice_content",
                            children: [(0, n.jsx)("h2", {
                                children: p
                            }), (0, n.jsx)("p", {
                                children: v
                            })]
                        })
                    })]
                })
            }
        },
        1650: function(e, i, a) {
            "use strict";
            var n = a(5893);
            a(7294), i.Z = function(e) {
                let {
                    image: i,
                    message: a,
                    color: s = "green"
                } = e;
                return (0, n.jsxs)("div", {
                    className: "message-container",
                    children: [(0, n.jsx)("img", {
                        src: i,
                        alt: "message"
                    }), "\xa0\xa0\xa0\xa0", (0, n.jsx)("p", {
                        className: "message-text",
                        style: {
                            color: "".concat(s)
                        },
                        children: a
                    })]
                })
            }
        },
        846: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                __N_SSP: function() {
                    return f
                },
                default: function() {
                    return b
                }
            });
            var n = a(5893);
            a(7294);
            var s = a(9473),
                t = function() {
                    var e, i, a, t, r, l, d, o;
                    let {
                        vacancy: c
                    } = (0, s.v9)(e => e.vacancy);
                    return (0, n.jsx)("div", {
                        children: (0, n.jsxs)("div", {
                            className: "banner",
                            children: [(0, n.jsx)("div", {
                                className: "banner_image",
                                children: (0, n.jsx)("img", {
                                    className: "image",
                                    src: "/banner/2.webp",
                                    alt: "",
                                    layout: "fill",
                                    objectFit: "cover",
                                    objectPosition: "center"
                                })
                            }), (0, n.jsx)("div", {
                                className: "banner_data",
                                children: (0, n.jsxs)("div", {
                                    className: "banner_contennt",
                                    children: [(0, n.jsx)("h4", {
                                        children: (null == c ? void 0 : null === (e = c.header) || void 0 === e ? void 0 : null === (i = e[0]) || void 0 === i ? void 0 : i.heading) ? null == c ? void 0 : null === (a = c.header) || void 0 === a ? void 0 : null === (t = a[0]) || void 0 === t ? void 0 : t.heading : ""
                                    }), (0, n.jsx)("p", {
                                        children: (null == c ? void 0 : null === (r = c.header) || void 0 === r ? void 0 : null === (l = r[0]) || void 0 === l ? void 0 : l.paragraph) ? null == c ? void 0 : null === (d = c.header) || void 0 === d ? void 0 : null === (o = d[0]) || void 0 === o ? void 0 : o.paragraph : ""
                                    })]
                                })
                            })]
                        })
                    })
                },
                r = a(682),
                l = function() {
                    return (0, n.jsxs)("div", {
                        className: "main_benifit",
                        children: [(0, n.jsxs)(r.Z, {
                            children: [(0, n.jsx)("div", {
                                className: "heading",
                                children: (0, n.jsx)("h2", {
                                    children: "Our Benefits"
                                })
                            }), (0, n.jsx)("div", {
                                className: "second_section",
                                children: [{
                                    id: 1,
                                    image: "/images/career1.png",
                                    heading: "Annual Leave",
                                    paragraph: "Get at least 12 days of paid time off every year",
                                    imageSize: ""
                                }, {
                                    id: 2,
                                    image: "/images/career2.png",
                                    heading: "Health & Wellbeing",
                                    paragraph: "Happy & Healthy go hand-in-hand, we're here for that.",
                                    imageSize: ""
                                }, {
                                    id: 3,
                                    image: "/images/career3.png",
                                    heading: "Holidays",
                                    paragraph: "We give you down time, adventure time, or anything in between that time.",
                                    imageSize: ""
                                }, {
                                    id: 4,
                                    image: "/images/career4.png",
                                    heading: "Mentoring",
                                    paragraph: "Providing a learning relationship between an experienced person and you.",
                                    imageSize: ""
                                }, {
                                    id: 5,
                                    image: "/images/career5.png",
                                    heading: "Refreshments",
                                    paragraph: ["Like we say in Spain, ", "“Hunger is a bad advisor,” so we have a good variety of ways to fight it off."]
                                }, {
                                    id: 6,
                                    image: "/images/career6.png",
                                    heading: "Career Path Planning",
                                    paragraph: "A personalized roadmap designed to help you to achieve professional goals.",
                                    imageSize: ""
                                }, {
                                    id: 7,
                                    image: "/images/career7.png",
                                    heading: "Flexible Working Hours",
                                    paragraph: "Our schedule is semi-flexible, giving you more freedom at work.",
                                    imageSize: "100px"
                                }, {
                                    id: 8,
                                    image: "/images/career8.png",
                                    heading: "City Center Office",
                                    paragraph: "We are located in the busiest part of the city.",
                                    imageSize: "100px"
                                }].map((e, i) => (0, n.jsx)("div", {
                                    className: "benifit_Section",
                                    children: (0, n.jsxs)("div", {
                                        className: "benifit_data",
                                        children: [(0, n.jsx)("img", {
                                            src: e.image,
                                            alt: ""
                                        }), (0, n.jsx)("h4", {
                                            style: {
                                                paddingTop: "20px"
                                            },
                                            children: e.heading
                                        }), (0, n.jsx)("p", {
                                            children: e.paragraph
                                        })]
                                    })
                                }, i))
                            })]
                        }), (0, n.jsx)("div", {
                            children: (0, n.jsx)("img", {
                                style: {
                                    width: "100%",
                                    margin: "auto "
                                },
                                src: "/images/mix2.png"
                            })
                        })]
                    })
                },
                d = a(1664),
                o = a.n(d),
                c = a(1163),
                h = function() {
                    var e, i;
                    let a = (0, c.useRouter)();
                    a.query.id;
                    let {
                        vacancy: t
                    } = (0, s.v9)(e => e.vacancy);
                    return (0, n.jsxs)("div", {
                        className: "main_vacancy",
                        children: [(0, n.jsxs)(r.Z, {
                            children: [(0, n.jsx)("div", {
                                className: "heading",
                                children: (0, n.jsx)("h2", {
                                    children: "CURRENT VACANCIES "
                                })
                            }), (0, n.jsxs)("div", {
                                className: "main_div",
                                children: [null == t ? void 0 : null === (e = t.vacancy) || void 0 === e ? void 0 : e.map((e, i) => (0, n.jsx)("div", {
                                    className: "main_card",
                                    children: (0, n.jsxs)("div", {
                                        className: "card_data",
                                        children: [(0, n.jsxs)("h5", {
                                            children: [" ", (0, n.jsx)("span", {
                                                style: {
                                                    fontWeight: "600"
                                                },
                                                children: "Location "
                                            }), " : ", e.location]
                                        }), (0, n.jsx)("h2", {
                                            children: e.designation
                                        }), (0, n.jsxs)("div", {
                                            className: "title",
                                            children: [(0, n.jsxs)("p", {
                                                children: [(0, n.jsx)("span", {
                                                    style: {
                                                        fontWeight: "600"
                                                    },
                                                    children: "Salary "
                                                }), ": ", e.salary, " "]
                                            }), (0, n.jsxs)("p", {
                                                children: [" ", (0, n.jsx)("span", {
                                                    style: {
                                                        fontWeight: "600"
                                                    },
                                                    children: "Job Type "
                                                }), ": ", e.job_type]
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: "vacancy_image",
                                            children: [(0, n.jsx)("img", {
                                                src: e.image,
                                                alt: ""
                                            }), (0, n.jsxs)(o(), {
                                                href: "/job/".concat(e.slug),
                                                children: [" ", (0, n.jsx)("div", {
                                                    className: "read_more_button",
                                                    children: "Apply Now"
                                                })]
                                            })]
                                        })]
                                    }, i)
                                }, i)), (null == t ? void 0 : null === (i = t.vacancy) || void 0 === i ? void 0 : i.length) === 0 && (0, n.jsx)("h1", {
                                    children: "There are no current openings right now."
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            children: (0, n.jsx)("img", {
                                style: {
                                    width: "100%",
                                    margin: "auto",
                                    paddingTop: "10px"
                                },
                                src: "/mix_img.png",
                                alt: ""
                            })
                        })]
                    })
                },
                u = function() {
                    return (0, n.jsx)("div", {
                        children: (0, n.jsxs)("div", {
                            className: "explore",
                            children: [(0, n.jsx)("div", {
                                className: "banner_image",
                                children: (0, n.jsx)("img", {
                                    className: "image",
                                    src: "/Banner.png",
                                    alt: "",
                                    layout: "fill",
                                    objectFit: "cover",
                                    objectPosition: "center"
                                })
                            }), (0, n.jsx)("div", {
                                className: "banner_data",
                                children: (0, n.jsxs)("div", {
                                    className: "banner_content",
                                    children: [(0, n.jsx)("h4", {
                                        children: "What Makes us Biotech?"
                                    }), (0, n.jsxs)("p", {
                                        children: ["Our culture is in everything we do. It", "’", "s in our passion and dedication. It", "’", "s how we nurture our talent. It", "'", "s the way we behave. It", "’", "s how we have fun. It", "'", "s in our interactions and fostering meaningful relationships and a culture where everyone excels."]
                                    }), (0, n.jsxs)(o(), {
                                        href: "/culture",
                                        children: [" ", (0, n.jsx)("button", {
                                            className: "butn",
                                            children: "EXPLORE MORE"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                },
                m = function() {
                    return (0, n.jsx)("div", {
                        children: (0, n.jsx)("div", {
                            className: "meet",
                            children: (0, n.jsx)(r.Z, {
                                children: (0, n.jsxs)("div", {
                                    className: "main",
                                    children: [(0, n.jsxs)("div", {
                                        className: "left",
                                        children: [(0, n.jsx)("h1", {
                                            children: "Meet The Directors."
                                        }), (0, n.jsx)("p", {
                                            children: "Biotech is independently owned without any external influence. Meet the people behind the business."
                                        }), (0, n.jsx)(o(), {
                                            href: "/role/shoaib-muhammad",
                                            children: (0, n.jsx)("button", {
                                                className: "meet_button",
                                                children: "about us"
                                            })
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "right",
                                        children: (0, n.jsx)("div", {
                                            className: "imgWrapper",
                                            children: (0, n.jsx)("img", {
                                                src: "/images/meetdi.webp",
                                                alt: "Director"
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                p = function() {
                    return (0, n.jsxs)("div", {
                        className: "main_role",
                        children: [(0, n.jsx)(r.Z, {
                            children: (0, n.jsxs)("div", {
                                className: "role_data",
                                children: [(0, n.jsxs)("h2", {
                                    children: ["Can", "'", "t see the role for you"]
                                }), (0, n.jsxs)("p", {
                                    children: ["We", "’", "re always looking for shiny new talent to join the Biotech Packages and would love to hear from you! Send over your CV to Info@biotechprint.com and who knows where it might lead."]
                                })]
                            })
                        }), (0, n.jsx)("div", {
                            children: (0, n.jsx)("img", {
                                style: {
                                    width: "100%",
                                    margin: "auto "
                                },
                                src: "/images/mix1.png",
                                alt: ""
                            })
                        })]
                    })
                };
            a(2258);
            var v = a(7745),
                g = a(5955),
                x = a(9008),
                j = a.n(x),
                f = !0,
                b = function(e) {
                    var i, a, s, r;
                    let {
                        maetaData: d
                    } = e;
                    return (0, n.jsxs)("div", {
                        children: [(0, n.jsxs)(j(), {
                            children: [(0, n.jsx)("meta", {
                                property: "og:site_name",
                                content: "Biotech Packages"
                            }), (0, n.jsx)("link", {
                                rel: "canonical",
                                href: "https://www.biotechpackages.com/career"
                            }), (0, n.jsx)("meta", {
                                property: "og:url",
                                content: "https://www.biotechpackages.com/career"
                            }), (0, n.jsx)("title", {
                                children: null == d ? void 0 : null === (i = d.tags_desc) || void 0 === i ? void 0 : i.meta_title
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
                                content: null == d ? void 0 : null === (a = d.tags_desc) || void 0 === a ? void 0 : a.meta_title
                            }), (0, n.jsx)("meta", {
                                property: "og:description",
                                content: null == d ? void 0 : null === (s = d.tags_desc) || void 0 === s ? void 0 : s.meta_description
                            }), (0, n.jsx)("meta", {
                                name: "description",
                                content: null == d ? void 0 : null === (r = d.tags_desc) || void 0 === r ? void 0 : r.meta_description
                            }), (0, n.jsx)("link", {
                                rel: "icon",
                                href: "/images/bioblacklogo.png"
                            }), (0, n.jsx)("script", {
                                children: "\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments)}\n      gtag('js', new Date());\n      gtag('config', 'G-SHCZPNVVFC');\n    "
                            })]
                        }), (0, n.jsx)(g.Z, {}), (0, n.jsx)(t, {}), "/", (0, n.jsx)(h, {}), (0, n.jsx)(p, {}), (0, n.jsx)(l, {}), (0, n.jsx)(m, {}), (0, n.jsx)(u, {}), (0, n.jsx)(v.Z, {})]
                    })
                }
        },
        1555: function(e, i, a) {
            "use strict";
            var n = a(4184),
                s = a.n(n),
                t = a(7294),
                r = a(6792),
                l = a(5893);
            let d = t.forwardRef((e, i) => {
                let [{
                    className: a,
                    ...n
                }, {
                    as: t = "div",
                    bsPrefix: d,
                    spans: o
                }] = function({
                    as: e,
                    bsPrefix: i,
                    className: a,
                    ...n
                }) {
                    i = (0, r.vE)(i, "col");
                    let t = (0, r.pi)(),
                        l = (0, r.zG)(),
                        d = [],
                        o = [];
                    return t.forEach(e => {
                        let a, s, t;
                        let r = n[e];
                        delete n[e], "object" == typeof r && null != r ? {
                            span: a,
                            offset: s,
                            order: t
                        } = r : a = r;
                        let c = e !== l ? `-${e}` : "";
                        a && d.push(!0 === a ? `${i}${c}` : `${i}${c}-${a}`), null != t && o.push(`order${c}-${t}`), null != s && o.push(`offset${c}-${s}`)
                    }), [{ ...n,
                        className: s()(a, ...d, ...o)
                    }, {
                        as: e,
                        bsPrefix: i,
                        spans: d
                    }]
                }(e);
                return (0, l.jsx)(t, { ...n,
                    ref: i,
                    className: s()(a, !o.length && d)
                })
            });
            d.displayName = "Col", i.Z = d
        },
        4051: function(e, i, a) {
            "use strict";
            var n = a(4184),
                s = a.n(n),
                t = a(7294),
                r = a(6792),
                l = a(5893);
            let d = t.forwardRef(({
                bsPrefix: e,
                className: i,
                as: a = "div",
                ...n
            }, t) => {
                let d = (0, r.vE)(e, "row"),
                    o = (0, r.pi)(),
                    c = (0, r.zG)(),
                    h = `${d}-cols`,
                    u = [];
                return o.forEach(e => {
                    let i;
                    let a = n[e];
                    delete n[e], null != a && "object" == typeof a ? {
                        cols: i
                    } = a : i = a;
                    let s = e !== c ? `-${e}` : "";
                    null != i && u.push(`${h}${s}-${i}`)
                }), (0, l.jsx)(a, {
                    ref: t,
                    ...n,
                    className: s()(i, d, ...u)
                })
            });
            d.displayName = "Row", i.Z = d
        }
    },
    function(e) {
        e.O(0, [776, 3081, 395, 5955, 7745, 9774, 2888, 179], function() {
            return e(e.s = 6721)
        }), _N_E = e.O()
    }
]);