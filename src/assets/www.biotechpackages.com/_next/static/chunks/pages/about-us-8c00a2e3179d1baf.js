(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8552], {
        5247: function(e, i, a) {
            "use strict";
            a.d(i, {
                ZP: function() {
                    return m
                }
            });
            let t = {
                    _origin: "https://api.emailjs.com"
                },
                n = (e, i = "https://api.emailjs.com") => {
                    t._userID = e, t._origin = i
                },
                s = (e, i, a) => {
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
            let l = (e, i, a = {}) => new Promise((n, s) => {
                    let l = new XMLHttpRequest;
                    l.addEventListener("load", ({
                        target: e
                    }) => {
                        let i = new r(e);
                        200 === i.status || "OK" === i.text ? n(i) : s(i)
                    }), l.addEventListener("error", ({
                        target: e
                    }) => {
                        s(new r(e))
                    }), l.open("POST", t._origin + e, !0), Object.keys(a).forEach(e => {
                        l.setRequestHeader(e, a[e])
                    }), l.send(i)
                }),
                o = (e, i, a, n) => {
                    let r = n || t._userID;
                    return s(r, e, i), l("/api/v1.0/email/send", JSON.stringify({
                        lib_version: "3.11.0",
                        user_id: r,
                        service_id: e,
                        template_id: i,
                        template_params: a
                    }), {
                        "Content-type": "application/json"
                    })
                },
                d = e => {
                    let i;
                    if (!(i = "string" == typeof e ? document.querySelector(e) : e) || "FORM" !== i.nodeName) throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
                    return i
                },
                c = (e, i, a, n) => {
                    let r = n || t._userID,
                        o = d(a);
                    s(r, e, i);
                    let c = new FormData(o);
                    return c.append("lib_version", "3.11.0"), c.append("service_id", e), c.append("template_id", i), c.append("user_id", r), l("/api/v1.0/email/send-form", c)
                };
            var m = {
                init: n,
                send: o,
                sendForm: c
            }
        },
        5268: function(e, i, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about-us", function() {
                return a(8663)
            }])
        },
        6516: function(e, i, a) {
            "use strict";
            var t = a(5893),
                n = a(7294);
            a(5675);
            var s = a(1664),
                r = a.n(s);
            a(4692), a(5083), a(6066);
            var l = a(7005);
            i.Z = function() {
                let [e, i] = (0, n.useState)(1), [a, s] = (0, n.useState)({}), o = [{
                    heading: "Packaging",
                    products: [{
                        img: "/images/work1.webp"
                    }, {
                        img: "/images/work2.webp"
                    }, {
                        img: "/images/work3.webp"
                    }, {
                        img: "/images/work4.webp"
                    }, {
                        img: "/images/work5.webp"
                    }, {
                        img: "/images/work6.webp"
                    }, {
                        img: "/images/work7.webp"
                    }, {
                        img: "/images/work8.webp"
                    }, {
                        img: "/images/work9.webp"
                    }, {
                        img: "/images/work10.webp"
                    }, {
                        img: "/images/work11.webp"
                    }, {
                        img: "/images/work12.webp"
                    }, {
                        img: "/images/work13.webp"
                    }, {
                        img: "/images/work14.webp"
                    }]
                }], [d, c] = (0, n.useState)("");
                (0, n.useEffect)(() => {
                    var e, i;
                    (null == o ? void 0 : null === (e = o[0]) || void 0 === e ? void 0 : e.heading) && c(null == o ? void 0 : null === (i = o[0]) || void 0 === i ? void 0 : i.heading)
                }, [o]);
                let m = o && (null == o ? void 0 : o.find(e => e.heading === d)),
                    u = (null == m ? void 0 : m.products) ? null == m ? void 0 : m.products : [];
                return (0, t.jsx)("div", {
                    className: "main-work",
                    children: (0, t.jsx)("div", {
                        className: "work-data",
                        children: (0, t.jsx)("div", {
                            className: "work",
                            children: (0, t.jsxs)("div", {
                                style: {
                                    paddingTop: "60px",
                                    textAlign: "center"
                                },
                                children: [(0, t.jsx)(l.Z, {
                                    direction: "right",
                                    children: (0, t.jsx)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: u.slice(0, 12).map((e, i) => (0, t.jsx)("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "center",
                                                marginRight: "15px"
                                            },
                                            children: (0, t.jsx)("div", {
                                                className: "card",
                                                children: (0, t.jsx)("img", {
                                                    src: e.img,
                                                    alt: "product image"
                                                })
                                            })
                                        }, i))
                                    })
                                }), (0, t.jsx)("div", {
                                    style: {
                                        marginTop: "50px"
                                    },
                                    children: (0, t.jsxs)(r(), {
                                        href: "/our-work",
                                        children: [" ", (0, t.jsx)("button", {
                                            className: "btn4",
                                            style: {
                                                display: "block",
                                                margin: "0 auto",
                                                textTransform: "uppercase",
                                                boxShadow: "none",
                                                borderRadius: "12px",
                                                padding: "5px  10px"
                                            },
                                            children: "View Full Collection"
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        467: function(e, i, a) {
            "use strict";
            var t = a(5893),
                n = a(1664),
                s = a.n(n),
                r = a(1163);
            a(7294);
            var l = a(682);
            i.Z = function() {
                let e = (0, r.useRouter)();
                console.log("router", null == e ? void 0 : e.asPath, (null == e ? void 0 : e.asPath) === "/about-us");
                let i = [{
                        id: 1,
                        heading: "Shoaib Muhammad",
                        location: "GROUP CEO & FOUNDER",
                        salery: "Salary : TBA",
                        job_type: "Salary : Permanent",
                        image: "/images/di1.webp",
                        url: "/role/shoaib-muhammad",
                        linkedin_URL: "https://www.linkedin.com/in/shoaib-muhammad-559848179/"
                    }, {
                        id: 2,
                        heading: "Ali Ahmed",
                        location: "Executives Director",
                        salery: "Salary: TBA",
                        job_type: "Salary : Permanent",
                        image: "/images/di2.webp",
                        url: "/role/ali-ahmad",
                        linkedin_URL: "https://www.linkedin.com/in/ali-elahi-21ab7117b/"
                    }, {
                        id: 3,
                        heading: "Haroon Elahi",
                        location: "Executives Director",
                        salery: "Salary: TBA",
                        job_type: "Salary : Permanent",
                        image: "/images/haroonelahi.webp",
                        url: "/role/haroon-elahi",
                        linkedin_URL: "https://www.linkedin.com/in/haroon-elahi-biotech/"
                    }],
                    a = (null == e ? void 0 : e.asPath) === "/about-us";
                return (0, t.jsxs)("div", {
                    className: "leader",
                    style: {
                        paddingTop: a ? "180px" : "0px"
                    },
                    children: [(0, t.jsx)(l.Z, {
                        children: (0, t.jsxs)("div", {
                            className: "leadership",
                            children: [(0, t.jsx)("h2", {
                                children: "Leadership"
                            }), (0, t.jsx)("p", {
                                children: "Our founding aim, ethos, and what motivates everything we do, is transforming ambitious brands through world-class, results-driven digital strategies, tied to long-term commercial success"
                            }), (0, t.jsx)("div", {
                                className: "main_div",
                                children: null == i ? void 0 : i.map((e, i) => (0, t.jsx)("div", {
                                    className: "main_card",
                                    children: (0, t.jsxs)("div", {
                                        className: "card_data",
                                        children: [(0, t.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between"
                                            },
                                            children: [(0, t.jsx)("h4", {
                                                style: {
                                                    textAlign: "center",
                                                    width: "100%"
                                                },
                                                children: e.heading
                                            }), (0, t.jsx)("a", {
                                                href: e.linkedin_URL,
                                                target: "_blank",
                                                children: (0, t.jsx)("img", {
                                                    style: {
                                                        width: "20px",
                                                        height: "20px",
                                                        display: "flex",
                                                        justifyContent: "end"
                                                    },
                                                    src: "/culture/linked.png",
                                                    alt: ""
                                                })
                                            })]
                                        }), (0, t.jsx)("h5", {
                                            children: e.location
                                        }), (0, t.jsx)(s(), {
                                            href: null == e ? void 0 : e.url,
                                            children: (0, t.jsx)("div", {
                                                className: "vacancy_image",
                                                children: (0, t.jsx)("img", {
                                                    src: e.image
                                                })
                                            })
                                        })]
                                    }, i)
                                }, i))
                            })]
                        })
                    }), (0, t.jsx)("div", {
                        style: {
                            marginBottom: "-1px"
                        },
                        children: a ? (0, t.jsx)("img", {
                            style: {
                                width: "100%",
                                margin: "auto ",
                                transform: "rotate(180deg)"
                            },
                            src: "/graybg.png"
                        }) : (0, t.jsx)("img", {
                            style: {
                                width: "100%",
                                margin: "auto ",
                                transform: "rotate(180deg)"
                            },
                            src: "/bluebg.png"
                        })
                    })]
                })
            }
        },
        8663: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                __N_SSP: function() {
                    return w
                },
                default: function() {
                    return b
                }
            });
            var t = a(5893);
            a(7356);
            var n = a(7745),
                s = a(5955),
                r = a(6516),
                l = a(467);
            a(7294);
            var o = a(5675),
                d = a.n(o),
                c = function() {
                    return (0, t.jsx)("div", {
                        className: "main_Class_cbd",
                        children: (0, t.jsx)("div", {
                            className: "cbd_image",
                            children: (0, t.jsx)(d(), {
                                className: "cbd_gummies_img",
                                src: "/about.webp",
                                alt: "",
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "center"
                            })
                        })
                    })
                },
                m = a(682),
                u = a(4051),
                g = a(1555),
                h = a(7005),
                p = function() {
                    return (0, t.jsx)("div", {
                        className: "main_Class_values",
                        children: (0, t.jsxs)("div", {
                            className: "values_data",
                            children: [(0, t.jsx)("div", {
                                className: "content",
                                children: (0, t.jsx)(m.Z, {
                                    children: (0, t.jsxs)("div", {
                                        className: "content_inner",
                                        children: [(0, t.jsx)("h2", {
                                            children: "Our Core Values "
                                        }), (0, t.jsxs)(u.Z, {
                                            children: [(0, t.jsxs)(g.Z, {
                                                xl: 3,
                                                md: 3,
                                                xs: 6,
                                                className: "height_adjust",
                                                children: [(0, t.jsx)("div", {
                                                    className: "height",
                                                    children: (0, t.jsx)(d(), {
                                                        className: "aboutimg_para",
                                                        src: "/images/responsive.png",
                                                        alt: "Responsive Image",
                                                        width: 115,
                                                        height: 115
                                                    })
                                                }), (0, t.jsx)("p", {
                                                    className: "values_para",
                                                    children: "Responsive"
                                                })]
                                            }), (0, t.jsxs)(g.Z, {
                                                xl: 3,
                                                md: 3,
                                                xs: 6,
                                                className: "height_adjust",
                                                children: [(0, t.jsx)("div", {
                                                    className: "height",
                                                    children: (0, t.jsx)(d(), {
                                                        className: "aboutimg_para",
                                                        src: "/images/integrity1.png",
                                                        alt: "integrity Image",
                                                        width: 115,
                                                        height: 75
                                                    })
                                                }), (0, t.jsx)("p", {
                                                    className: "values_para",
                                                    children: "Commitment"
                                                })]
                                            }), (0, t.jsxs)(g.Z, {
                                                xl: 3,
                                                md: 3,
                                                xs: 6,
                                                className: "height_adjust",
                                                children: [(0, t.jsx)("div", {
                                                    className: "height",
                                                    children: (0, t.jsx)(d(), {
                                                        className: "aboutimg_para",
                                                        src: "/images/integrity2.png",
                                                        alt: "integrity Image",
                                                        width: 81,
                                                        height: 85
                                                    })
                                                }), (0, t.jsx)("p", {
                                                    className: "values_para",
                                                    children: "Integrity"
                                                })]
                                            }), (0, t.jsxs)(g.Z, {
                                                xl: 3,
                                                md: 3,
                                                xs: 6,
                                                className: "height_adjust",
                                                children: [(0, t.jsx)("div", {
                                                    className: "height",
                                                    children: (0, t.jsx)(d(), {
                                                        className: "aboutimg_para",
                                                        src: "/images/innovation.png",
                                                        alt: "innovation Image",
                                                        width: 89,
                                                        height: 100
                                                    })
                                                }), (0, t.jsx)("p", {
                                                    className: "values_para",
                                                    children: "Innovation"
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            }), (0, t.jsx)("div", {
                                children: (0, t.jsx)(h.Z, {
                                    children: (0, t.jsxs)("div", {
                                        className: "brand_section",
                                        children: [(0, t.jsx)("div", {
                                            className: "imgs",
                                            children: (0, t.jsx)("img", {
                                                className: " brand_image",
                                                src: "/brand/Icon2.webp",
                                                alt: "CocaCola logo img"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "imgs",
                                            children: (0, t.jsx)("img", {
                                                className: " brand_image",
                                                src: "/brand/Icon1.webp",
                                                alt: "Puma logo img"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "imgs",
                                            children: (0, t.jsx)("img", {
                                                className: " brand_image",
                                                src: "/brand/Icon3.webp",
                                                alt: "Nordstream logo img"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "imgs",
                                            children: (0, t.jsx)("img", {
                                                className: " brand_image",
                                                src: "/brand/Icon4.webp",
                                                alt: "Supreme logo img"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "imgs",
                                            children: (0, t.jsx)("img", {
                                                className: " brand_image",
                                                src: "/brand/Icon5.webp",
                                                alt: "Fendi logo img"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "imgs",
                                            children: (0, t.jsx)("img", {
                                                className: " brand_image",
                                                src: "/brand/Icon6.webp",
                                                alt: "VANS logo img"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "imgs",
                                            children: (0, t.jsx)("img", {
                                                className: " brand_image",
                                                src: "/brand/Icon7.webp",
                                                alt: "TD logo img"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "imgs",
                                            children: (0, t.jsx)("img", {
                                                className: " brand_image",
                                                src: "/brand/Icon8.webp",
                                                alt: "Shein logo img"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "imgs",
                                            children: (0, t.jsx)("img", {
                                                className: " brand_image",
                                                src: "/brand/Icon9.webp",
                                                alt: "Dyson logo img"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "imgs",
                                            children: (0, t.jsx)("img", {
                                                className: " brand_image",
                                                src: "/brand/Icon10.webp",
                                                alt: "Lenovo logo img"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "imgs",
                                            children: (0, t.jsx)("img", {
                                                className: " brand_image",
                                                src: "/brand/Icon11.webp",
                                                alt: "Msnbc logo img"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "imgs",
                                            children: (0, t.jsx)("img", {
                                                className: " brand_image",
                                                src: "/brand/Icon12.webp",
                                                alt: "Tumblr logo img"
                                            })
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                v = function() {
                    return (0, t.jsxs)("div", {
                        className: "main_Class_stories",
                        children: [(0, t.jsx)("div", {
                            className: "stories_image",
                            children: (0, t.jsx)(d(), {
                                className: "stor_img",
                                src: "Backgrounds.png",
                                alt: "",
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "center"
                            })
                        }), (0, t.jsx)("div", {
                            className: "stories_data",
                            children: (0, t.jsx)(m.Z, {
                                children: (0, t.jsxs)("div", {
                                    className: "content",
                                    children: [(0, t.jsx)("h4", {
                                        children: "We are Biotech Packages LTD."
                                    }), (0, t.jsx)("h2", {
                                        children: "Creating digital success stories"
                                    }), (0, t.jsx)("p", {
                                        children: "Our founding aim, ethos, and what motivates everything we do, is transforming ambitious brands through world-class, results-driven digital strategies, tied to long-term commercial success."
                                    }), (0, t.jsx)("p", {
                                        className: "content_para_2",
                                        children: "We work with businesses committed to growth who need effective solutions and a trusted partner to drive positive change, commercial performance and to maximise their digital potential. We utilise our proven fusion of intelligent insight, strategic innovation and adventurous creative to propel client revenue and profits, increase market share and build greater brand loyalty and value."
                                    }), (0, t.jsx)("h3", {
                                        children: "We are your digital growth partner."
                                    })]
                                })
                            })
                        })]
                    })
                },
                x = function() {
                    return (0, t.jsx)("div", {
                        children: (0, t.jsx)("video", {
                            style: {
                                width: "100%",
                                overflow: "hidden"
                            },
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            children: (0, t.jsx)("source", {
                                style: {
                                    width: "100%",
                                    overflow: "hidden"
                                },
                                src: "about.mp4",
                                type: "video/mp4"
                            })
                        })
                    })
                },
                f = a(9008),
                j = a.n(f),
                w = !0,
                b = function(e) {
                    var i, a, o, d, m, u, g, h;
                    let {
                        maetaData: f
                    } = e;
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsxs)(j(), {
                            children: [(0, t.jsx)("meta", {
                                property: "og:site_name",
                                content: "Biotech Packages"
                            }), (0, t.jsx)("link", {
                                rel: "canonical",
                                href: "https://www.biotechpackages.com/about-us"
                            }), (0, t.jsx)("meta", {
                                property: "og:url",
                                content: "https://www.biotechpackages.com/about-us"
                            }), (0, t.jsx)("title", {
                                children: (null == f ? void 0 : null === (i = f.tags_desc) || void 0 === i ? void 0 : i.meta_title) ? null == f ? void 0 : null === (a = f.tags_desc) || void 0 === a ? void 0 : a.meta_title : ""
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
                                content: (null == f ? void 0 : null === (o = f.tags_desc) || void 0 === o ? void 0 : o.meta_title) ? null == f ? void 0 : null === (d = f.tags_desc) || void 0 === d ? void 0 : d.meta_title : ""
                            }), (0, t.jsx)("meta", {
                                property: "og:description",
                                content: (null == f ? void 0 : null === (m = f.tags_desc) || void 0 === m ? void 0 : m.meta_description) ? null == f ? void 0 : null === (u = f.tags_desc) || void 0 === u ? void 0 : u.meta_description : ""
                            }), (0, t.jsx)("meta", {
                                name: "description",
                                content: (null == f ? void 0 : null === (g = f.tags_desc) || void 0 === g ? void 0 : g.meta_description) ? null == f ? void 0 : null === (h = f.tags_desc) || void 0 === h ? void 0 : h.meta_description : ""
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
                            children: [(0, t.jsx)(s.Z, {}), (0, t.jsx)(x, {}), (0, t.jsx)(v, {}), (0, t.jsx)(c, {}), (0, t.jsx)(l.Z, {}), (0, t.jsx)(p, {}), (0, t.jsx)(r.Z, {}), (0, t.jsx)("div", {
                                style: {
                                    marginBottom: "-10px"
                                },
                                children: (0, t.jsx)("img", {
                                    style: {
                                        width: "100%"
                                    },
                                    src: "/graybg.png",
                                    alt: ""
                                })
                            }), (0, t.jsx)(n.Z, {})]
                        })]
                    })
                }
        },
        1555: function(e, i, a) {
            "use strict";
            var t = a(4184),
                n = a.n(t),
                s = a(7294),
                r = a(6792),
                l = a(5893);
            let o = s.forwardRef((e, i) => {
                let [{
                    className: a,
                    ...t
                }, {
                    as: s = "div",
                    bsPrefix: o,
                    spans: d
                }] = function({
                    as: e,
                    bsPrefix: i,
                    className: a,
                    ...t
                }) {
                    i = (0, r.vE)(i, "col");
                    let s = (0, r.pi)(),
                        l = (0, r.zG)(),
                        o = [],
                        d = [];
                    return s.forEach(e => {
                        let a, n, s;
                        let r = t[e];
                        delete t[e], "object" == typeof r && null != r ? {
                            span: a,
                            offset: n,
                            order: s
                        } = r : a = r;
                        let c = e !== l ? `-${e}` : "";
                        a && o.push(!0 === a ? `${i}${c}` : `${i}${c}-${a}`), null != s && d.push(`order${c}-${s}`), null != n && d.push(`offset${c}-${n}`)
                    }), [{ ...t,
                        className: n()(a, ...o, ...d)
                    }, {
                        as: e,
                        bsPrefix: i,
                        spans: o
                    }]
                }(e);
                return (0, l.jsx)(s, { ...t,
                    ref: i,
                    className: n()(a, !d.length && o)
                })
            });
            o.displayName = "Col", i.Z = o
        },
        4051: function(e, i, a) {
            "use strict";
            var t = a(4184),
                n = a.n(t),
                s = a(7294),
                r = a(6792),
                l = a(5893);
            let o = s.forwardRef(({
                bsPrefix: e,
                className: i,
                as: a = "div",
                ...t
            }, s) => {
                let o = (0, r.vE)(e, "row"),
                    d = (0, r.pi)(),
                    c = (0, r.zG)(),
                    m = `${o}-cols`,
                    u = [];
                return d.forEach(e => {
                    let i;
                    let a = t[e];
                    delete t[e], null != a && "object" == typeof a ? {
                        cols: i
                    } = a : i = a;
                    let n = e !== c ? `-${e}` : "";
                    null != i && u.push(`${m}${n}-${i}`)
                }), (0, l.jsx)(a, {
                    ref: s,
                    ...t,
                    className: n()(i, o, ...u)
                })
            });
            o.displayName = "Row", i.Z = o
        },
        7005: function(e, i, a) {
            var t = a(7294),
                n = t && "object" == typeof t && "default" in t ? t : {
                    default: t
                };
            ! function(e) {
                if (!e || "undefined" == typeof window) return;
                let i = document.createElement("style");
                i.setAttribute("type", "text/css"), i.innerHTML = e, document.head.appendChild(i)
            }('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');
            let s = t.forwardRef(function({
                style: e = {},
                className: i = "",
                autoFill: a = !1,
                play: s = !0,
                pauseOnHover: r = !1,
                pauseOnClick: l = !1,
                direction: o = "left",
                speed: d = 50,
                delay: c = 0,
                loop: m = 0,
                gradient: u = !1,
                gradientColor: g = "white",
                gradientWidth: h = 200,
                onFinish: p,
                onCycleComplete: v,
                onMount: x,
                children: f
            }, j) {
                let [w, b] = t.useState(0), [y, _] = t.useState(0), [N, k] = t.useState(1), [E, C] = t.useState(!1), I = t.useRef(null), S = j || I, R = t.useRef(null), Z = t.useCallback(() => {
                    if (R.current && S.current) {
                        let e = S.current.getBoundingClientRect(),
                            i = R.current.getBoundingClientRect(),
                            t = e.width,
                            n = i.width;
                        ("up" === o || "down" === o) && (t = e.height, n = i.height), a && t && n ? k(n < t ? Math.ceil(t / n) : 1) : k(1), b(t), _(n)
                    }
                }, [a, S, o]);
                t.useEffect(() => {
                    if (E && (Z(), R.current && S.current)) {
                        let e = new ResizeObserver(() => Z());
                        return e.observe(S.current), e.observe(R.current), () => {
                            e && e.disconnect()
                        }
                    }
                }, [Z, S, E]), t.useEffect(() => {
                    Z()
                }, [Z, f]), t.useEffect(() => {
                    C(!0)
                }, []), t.useEffect(() => {
                    "function" == typeof x && x()
                }, []);
                let P = t.useMemo(() => a ? y * N / d : y < w ? w / d : y / d, [a, w, y, N, d]),
                    T = t.useMemo(() => Object.assign(Object.assign({}, e), {
                        "--pause-on-hover": !s || r ? "paused" : "running",
                        "--pause-on-click": !s || r && !l || l ? "paused" : "running",
                        "--width": "up" === o || "down" === o ? "100vh" : "100%",
                        "--transform": "up" === o ? "rotate(-90deg)" : "down" === o ? "rotate(90deg)" : "none"
                    }), [e, s, r, l, o]),
                    $ = t.useMemo(() => ({
                        "--gradient-color": g,
                        "--gradient-width": "number" == typeof h ? `${h}px` : h
                    }), [g, h]),
                    D = t.useMemo(() => ({
                        "--play": s ? "running" : "paused",
                        "--direction": "left" === o ? "normal" : "reverse",
                        "--duration": `${P}s`,
                        "--delay": `${c}s`,
                        "--iteration-count": m ? `${m}` : "infinite",
                        "--min-width": a ? "auto" : "100%"
                    }), [s, o, P, c, m, a]),
                    O = t.useMemo(() => ({
                        "--transform": "up" === o ? "rotate(90deg)" : "down" === o ? "rotate(-90deg)" : "none"
                    }), [o]),
                    L = t.useCallback(e => [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, i) => n.default.createElement(t.Fragment, {
                        key: i
                    }, t.Children.map(f, e => n.default.createElement("div", {
                        style: O,
                        className: "rfm-child"
                    }, e)))), [O, f]);
                return E ? n.default.createElement("div", {
                    ref: S,
                    style: T,
                    className: "rfm-marquee-container " + i
                }, u && n.default.createElement("div", {
                    style: $,
                    className: "rfm-overlay"
                }), n.default.createElement("div", {
                    className: "rfm-marquee",
                    style: D,
                    onAnimationIteration: v,
                    onAnimationEnd: p
                }, n.default.createElement("div", {
                    className: "rfm-initial-child-container",
                    ref: R
                }, t.Children.map(f, e => n.default.createElement("div", {
                    style: O,
                    className: "rfm-child"
                }, e))), L(N - 1)), n.default.createElement("div", {
                    className: "rfm-marquee",
                    style: D
                }, L(N))) : null
            });
            i.Z = s
        }
    },
    function(e) {
        e.O(0, [776, 3081, 395, 1033, 6066, 7356, 5955, 7745, 9774, 2888, 179], function() {
            return e(e.s = 5268)
        }), _N_E = e.O()
    }
]);