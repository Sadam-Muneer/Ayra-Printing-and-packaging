(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1192], {
        5247: function(e, s, t) {
            "use strict";
            t.d(s, {
                ZP: function() {
                    return d
                }
            });
            let a = {
                    _origin: "https://api.emailjs.com"
                },
                i = (e, s = "https://api.emailjs.com") => {
                    a._userID = e, a._origin = s
                },
                n = (e, s, t) => {
                    if (!e) throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
                    if (!s) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
                    if (!t) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
                    return !0
                };
            class r {
                constructor(e) {
                    this.status = e ? e.status : 0, this.text = e ? e.responseText : "Network Error"
                }
            }
            let l = (e, s, t = {}) => new Promise((i, n) => {
                    let l = new XMLHttpRequest;
                    l.addEventListener("load", ({
                        target: e
                    }) => {
                        let s = new r(e);
                        200 === s.status || "OK" === s.text ? i(s) : n(s)
                    }), l.addEventListener("error", ({
                        target: e
                    }) => {
                        n(new r(e))
                    }), l.open("POST", a._origin + e, !0), Object.keys(t).forEach(e => {
                        l.setRequestHeader(e, t[e])
                    }), l.send(s)
                }),
                c = (e, s, t, i) => {
                    let r = i || a._userID;
                    return n(r, e, s), l("/api/v1.0/email/send", JSON.stringify({
                        lib_version: "3.11.0",
                        user_id: r,
                        service_id: e,
                        template_id: s,
                        template_params: t
                    }), {
                        "Content-type": "application/json"
                    })
                },
                o = e => {
                    let s;
                    if (!(s = "string" == typeof e ? document.querySelector(e) : e) || "FORM" !== s.nodeName) throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
                    return s
                },
                m = (e, s, t, i) => {
                    let r = i || a._userID,
                        c = o(t);
                    n(r, e, s);
                    let m = new FormData(c);
                    return m.append("lib_version", "3.11.0"), m.append("service_id", e), m.append("template_id", s), m.append("user_id", r), l("/api/v1.0/email/send-form", m)
                };
            var d = {
                init: i,
                send: c,
                sendForm: m
            }
        },
        5660: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/contacts", function() {
                return t(1728)
            }])
        },
        1728: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                __N_SSP: function() {
                    return f
                },
                default: function() {
                    return g
                }
            });
            var a = t(5893),
                i = t(7356),
                n = t(7294),
                r = t(682),
                l = function() {
                    return (0, a.jsxs)("div", {
                        className: "main_Class_biotech",
                        children: [(0, a.jsx)("video", {
                            className: "biotech_video_section",
                            width: "100%",
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            children: (0, a.jsx)("source", {
                                className: "biotech_video",
                                src: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/images%2FMarch_2023%2FBiotechBanner.mp4b55f7979-76a7-49c6-b61f-2edb96b100f0?alt=media&token=b37c570e-0433-44b2-9172-a6663d251ccc",
                                type: "video/mp4"
                            })
                        }), (0, a.jsx)("div", {
                            className: "bg_image",
                            style: {
                                width: "100%"
                            },
                            children: (0, a.jsx)("img", {
                                style: {
                                    width: "100%"
                                },
                                src: "/contact/bg.png",
                                alt: ""
                            })
                        }), (0, a.jsx)(r.Z, {
                            children: (0, a.jsx)("div", {
                                className: "img_data",
                                children: (0, a.jsxs)("div", {
                                    className: "main_contact",
                                    children: [(0, a.jsxs)("div", {
                                        className: "main_num",
                                        children: [(0, a.jsx)("a", {
                                            style: {
                                                color: "white"
                                            },
                                            href: "tel:923103330109",
                                            children: (0, a.jsx)("p", {
                                                className: "num",
                                                children: "+92 310 3330109"
                                            })
                                        }), (0, a.jsx)("a", {
                                            style: {
                                                color: "white"
                                            },
                                            href: "mailto:Info@biotechprint.com",
                                            children: (0, a.jsx)("p", {
                                                className: "num nums",
                                                children: "Info@biotechprint.com"
                                            })
                                        }), (0, a.jsx)("a", {
                                            href: "tel:923103330109",
                                            children: (0, a.jsx)("button", {
                                                className: "butns",
                                                children: "BOOK CALL"
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "icons",
                                        children: [(0, a.jsxs)("a", {
                                            target: "_blank",
                                            href: "https://api.whatsapp.com/send?phone=923103330109&text=Hi.",
                                            children: [" ", (0, a.jsx)("img", {
                                                src: "/contact/1.png",
                                                alt: ""
                                            })]
                                        }), (0, a.jsxs)("a", {
                                            target: "_blank",
                                            href: "https://www.instagram.com/biotechpackagespvt/",
                                            children: [" ", (0, a.jsx)("img", {
                                                src: "/contact/2.png",
                                                alt: ""
                                            })]
                                        }), (0, a.jsx)("a", {
                                            target: "_blank",
                                            href: "https://www.linkedin.com/company/biotechpackages-pvt-ltd/",
                                            children: (0, a.jsx)("img", {
                                                src: "/contact/3.png",
                                                alt: ""
                                            })
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                };
            t(1650), t(5675);
            var c = t(5247),
                o = t(6501),
                m = function() {
                    let e = {
                            firstname: "",
                            lastname: "",
                            email: "",
                            phone: "",
                            message: ""
                        },
                        [s, t] = (0, n.useState)(e),
                        [i, r] = (0, n.useState)({}),
                        [l, m] = (0, n.useState)(!1),
                        [d, h] = (0, n.useState)(!1),
                        p = (0, n.useRef)(),
                        u = e => {
                            let {
                                name: a,
                                value: i
                            } = e.target;
                            t({ ...s,
                                [a]: i
                            })
                        },
                        f = e => {
                            e.preventDefault(), j(s), m(!0)
                        },
                        g = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
                        j = a => {
                            let i = {};
                            if (a.firstname || (i.firstname = "Required"), a.lastname || (i.lastname = "Required"), a.phone || (i.phone = "Required"), a.message || (i.message = "Required"), a.email ? g(a.email) || (i.email = "Please enter a valid email address") : i.email = "Required", 0 === Object.keys(i).length) {
                                h(!0), r(i), console.log("formValues", s);
                                try {
                                    c.ZP.sendForm("service_vi0e16o", "template_zu0dp3n", p.current, "eKeAE09PqlRljmUv2").then(s => {
                                        h(!1), o.ZP.dismiss(), o.ZP.success("Submitted Successfully!"), m(!0), r(e), t(e)
                                    }).catch(e => {
                                        h(!1), o.ZP.dismiss(), o.ZP.error("Something went wrong.")
                                    })
                                } catch (e) {
                                    h(!1), o.ZP.dismiss(), o.ZP.error("Something went wrong.")
                                }
                            } else r(i), m(!0), h(!1), o.ZP.dismiss(), o.ZP.error("Please fill all the required fields.")
                        };
                    return (0, a.jsx)("div", {
                        className: "main_form",
                        children: (0, a.jsxs)("div", {
                            className: "form",
                            children: [(0, a.jsx)("h3", {
                                children: "DO YOU HAVE A QUESTION?"
                            }), (0, a.jsxs)("p", {
                                children: ["We", "’", "d love to hear from you!"]
                            }), (0, a.jsxs)("form", {
                                ref: p,
                                onSubmit: f,
                                children: [(0, a.jsxs)("div", {
                                    className: "first_last",
                                    children: [(0, a.jsxs)("div", {
                                        className: "first",
                                        children: [(0, a.jsx)("input", {
                                            type: "text",
                                            placeholder: "First Name",
                                            name: "firstname",
                                            value: s.firstname,
                                            onChange: u
                                        }), i.firstname && (0, a.jsx)("pre", {
                                            className: "aler_message",
                                            children: i.firstname
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "last",
                                        children: [(0, a.jsx)("input", {
                                            type: "text",
                                            placeholder: "Last Name",
                                            name: "lastname",
                                            value: s.lastname,
                                            onChange: u
                                        }), i.lastname && (0, a.jsx)("pre", {
                                            className: "aler_message",
                                            children: i.lastname
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "mail_num",
                                    children: [(0, a.jsxs)("div", {
                                        className: "mail",
                                        children: [(0, a.jsx)("input", {
                                            type: "email",
                                            placeholder: "Enter your email*",
                                            name: "email",
                                            value: s.email,
                                            onChange: u
                                        }), i.email && (0, a.jsx)("pre", {
                                            className: "aler_message",
                                            children: i.email
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "num",
                                        children: [(0, a.jsx)("input", {
                                            type: "number",
                                            placeholder: "Enter phone no*",
                                            name: "phone",
                                            value: s.phone,
                                            onChange: u
                                        }), i.phone && (0, a.jsx)("pre", {
                                            className: "aler_message",
                                            children: i.phone
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "text_area",
                                    children: (0, a.jsx)("textarea", {
                                        name: "message",
                                        cols: "100",
                                        rows: "10",
                                        placeholder: "How can we help you!",
                                        value: s.message,
                                        onChange: u
                                    })
                                }), i.message && (0, a.jsx)("pre", {
                                    className: "aler_message",
                                    children: i.message
                                }), (0, a.jsx)("div", {
                                    children: (0, a.jsx)("button", {
                                        className: "send_button",
                                        children: "SEND MESSAGE"
                                    })
                                })]
                            })]
                        })
                    })
                },
                d = function() {
                    return (0, a.jsx)("div", {
                        className: "main-map",
                        children: (0, a.jsx)("div", {
                            id: "office",
                            children: (0, a.jsx)("div", {
                                className: "padding_adjust",
                                children: (0, a.jsx)("iframe", {
                                    width: "100%",
                                    height: "850",
                                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.233717175221!2d74.3584551!3d31.4272293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905709259755d%3A0xda0d1cd477890ba3!2sBioTech%20Pvt%20Ltd!5e0!3m2!1sen!2s!4v1645025451523!5m2!1sen!2s",
                                    frameBorder: "0",
                                    style: {
                                        filter: "invert(90%)"
                                    }
                                })
                            })
                        })
                    })
                },
                h = t(5955),
                p = t(9008),
                u = t.n(p),
                f = !0,
                g = function(e) {
                    var s, t, n, r;
                    let {
                        maetaData: c
                    } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(u(), {
                            children: [(0, a.jsx)("meta", {
                                property: "og:site_name",
                                content: "Biotech Packages"
                            }), (0, a.jsx)("link", {
                                rel: "canonical",
                                href: "https://www.biotechpackages.com/contacts"
                            }), (0, a.jsx)("meta", {
                                property: "og:url",
                                content: "/https://www.biotechpackages.com/contacts"
                            }), (0, a.jsx)("title", {
                                children: null == c ? void 0 : null === (s = c.tags_desc) || void 0 === s ? void 0 : s.meta_title
                            }), (0, a.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1"
                            }), (0, a.jsx)("meta", {
                                property: "og:locale",
                                content: "en_US"
                            }), (0, a.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, a.jsx)("meta", {
                                property: "og:title",
                                content: null == c ? void 0 : null === (t = c.tags_desc) || void 0 === t ? void 0 : t.meta_title
                            }), (0, a.jsx)("meta", {
                                property: "og:description",
                                content: null == c ? void 0 : null === (n = c.tags_desc) || void 0 === n ? void 0 : n.meta_description
                            }), (0, a.jsx)("meta", {
                                name: "description",
                                content: null == c ? void 0 : null === (r = c.tags_desc) || void 0 === r ? void 0 : r.meta_description
                            }), (0, a.jsx)("link", {
                                rel: "icon",
                                href: "/images/bioblacklogo.png"
                            }), (0, a.jsx)("script", {
                                async: !0,
                                src: "https://www.googletagmanager.com/gtag/js?id=G-94FWCDD0CW"
                            }), (0, a.jsx)("script", {
                                children: "\n    window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'G-94FWCDD0CW');\n  "
                            })]
                        }), (0, a.jsxs)("main", {
                            children: [(0, a.jsx)(h.Z, {}), (0, a.jsx)(l, {}), (0, a.jsx)(m, {}), (0, a.jsx)(d, {}), (0, a.jsx)(i.Z, {})]
                        })]
                    })
                }
        },
        1555: function(e, s, t) {
            "use strict";
            var a = t(4184),
                i = t.n(a),
                n = t(7294),
                r = t(6792),
                l = t(5893);
            let c = n.forwardRef((e, s) => {
                let [{
                    className: t,
                    ...a
                }, {
                    as: n = "div",
                    bsPrefix: c,
                    spans: o
                }] = function({
                    as: e,
                    bsPrefix: s,
                    className: t,
                    ...a
                }) {
                    s = (0, r.vE)(s, "col");
                    let n = (0, r.pi)(),
                        l = (0, r.zG)(),
                        c = [],
                        o = [];
                    return n.forEach(e => {
                        let t, i, n;
                        let r = a[e];
                        delete a[e], "object" == typeof r && null != r ? {
                            span: t,
                            offset: i,
                            order: n
                        } = r : t = r;
                        let m = e !== l ? `-${e}` : "";
                        t && c.push(!0 === t ? `${s}${m}` : `${s}${m}-${t}`), null != n && o.push(`order${m}-${n}`), null != i && o.push(`offset${m}-${i}`)
                    }), [{ ...a,
                        className: i()(t, ...c, ...o)
                    }, {
                        as: e,
                        bsPrefix: s,
                        spans: c
                    }]
                }(e);
                return (0, l.jsx)(n, { ...a,
                    ref: s,
                    className: i()(t, !o.length && c)
                })
            });
            c.displayName = "Col", s.Z = c
        },
        4051: function(e, s, t) {
            "use strict";
            var a = t(4184),
                i = t.n(a),
                n = t(7294),
                r = t(6792),
                l = t(5893);
            let c = n.forwardRef(({
                bsPrefix: e,
                className: s,
                as: t = "div",
                ...a
            }, n) => {
                let c = (0, r.vE)(e, "row"),
                    o = (0, r.pi)(),
                    m = (0, r.zG)(),
                    d = `${c}-cols`,
                    h = [];
                return o.forEach(e => {
                    let s;
                    let t = a[e];
                    delete a[e], null != t && "object" == typeof t ? {
                        cols: s
                    } = t : s = t;
                    let i = e !== m ? `-${e}` : "";
                    null != s && h.push(`${d}${i}-${s}`)
                }), (0, l.jsx)(t, {
                    ref: n,
                    ...a,
                    className: i()(s, c, ...h)
                })
            });
            c.displayName = "Row", s.Z = c
        }
    },
    function(e) {
        e.O(0, [776, 3081, 395, 7356, 5955, 9774, 2888, 179], function() {
            return e(e.s = 5660)
        }), _N_E = e.O()
    }
]);