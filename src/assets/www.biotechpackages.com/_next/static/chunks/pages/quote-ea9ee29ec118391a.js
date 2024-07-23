(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9876], {
        5247: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return u
                }
            });
            let s = {
                    _origin: "https://api.emailjs.com"
                },
                i = (e, t = "https://api.emailjs.com") => {
                    s._userID = e, s._origin = t
                },
                l = (e, t, n) => {
                    if (!e) throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
                    if (!t) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
                    if (!n) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
                    return !0
                };
            class a {
                constructor(e) {
                    this.status = e ? e.status : 0, this.text = e ? e.responseText : "Network Error"
                }
            }
            let o = (e, t, n = {}) => new Promise((i, l) => {
                    let o = new XMLHttpRequest;
                    o.addEventListener("load", ({
                        target: e
                    }) => {
                        let t = new a(e);
                        200 === t.status || "OK" === t.text ? i(t) : l(t)
                    }), o.addEventListener("error", ({
                        target: e
                    }) => {
                        l(new a(e))
                    }), o.open("POST", s._origin + e, !0), Object.keys(n).forEach(e => {
                        o.setRequestHeader(e, n[e])
                    }), o.send(t)
                }),
                r = (e, t, n, i) => {
                    let a = i || s._userID;
                    return l(a, e, t), o("/api/v1.0/email/send", JSON.stringify({
                        lib_version: "3.11.0",
                        user_id: a,
                        service_id: e,
                        template_id: t,
                        template_params: n
                    }), {
                        "Content-type": "application/json"
                    })
                },
                d = e => {
                    let t;
                    if (!(t = "string" == typeof e ? document.querySelector(e) : e) || "FORM" !== t.nodeName) throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
                    return t
                },
                c = (e, t, n, i) => {
                    let a = i || s._userID,
                        r = d(n);
                    l(a, e, t);
                    let c = new FormData(r);
                    return c.append("lib_version", "3.11.0"), c.append("service_id", e), c.append("template_id", t), c.append("user_id", a), o("/api/v1.0/email/send-form", c)
                };
            var u = {
                init: i,
                send: r,
                sendForm: c
            }
        },
        7079: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/quote", function() {
                return n(2082)
            }])
        },
        1650: function(e, t, n) {
            "use strict";
            var s = n(5893);
            n(7294), t.Z = function(e) {
                let {
                    image: t,
                    message: n,
                    color: i = "green"
                } = e;
                return (0, s.jsxs)("div", {
                    className: "message-container",
                    children: [(0, s.jsx)("img", {
                        src: t,
                        alt: "message"
                    }), "\xa0\xa0\xa0\xa0", (0, s.jsx)("p", {
                        className: "message-text",
                        style: {
                            color: "".concat(i)
                        },
                        children: n
                    })]
                })
            }
        },
        2082: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return x
                },
                default: function() {
                    return j
                }
            });
            var s = n(5893),
                i = n(9008),
                l = n.n(i),
                a = n(9590),
                o = n(2533),
                r = n(5675),
                d = n.n(r),
                c = n(1163),
                u = n(7294),
                p = n(9473),
                m = n(5678),
                h = n(1650),
                v = n(5247),
                g = function() {
                    var e, t, n, i, l, a, r, g, x, j, y;
                    let [f, _] = (0, u.useState)({}), [w, b] = (0, u.useState)(""), [N, q] = (0, u.useState)(!1), [k, S] = (0, u.useState)(""), {
                        quotedata: C
                    } = (0, p.v9)(e => e.quote), {
                        quotePost: E
                    } = (0, p.v9)(e => e.quote), P = (0, u.useRef)(), T = (0, c.useRouter)(), D = (0, p.I0)(), L = (null == T ? void 0 : T.query) && (null == T ? void 0 : null === (e = T.query) || void 0 === e ? void 0 : e.category) ? null == T ? void 0 : null === (t = T.query) || void 0 === t ? void 0 : t.category : "", W = (null == T ? void 0 : T.query) && (null == T ? void 0 : null === (n = T.query) || void 0 === n ? void 0 : n.product) ? null == T ? void 0 : null === (i = T.query) || void 0 === i ? void 0 : i.product : "", A = e => {
                        e.preventDefault(), O(f)
                    };
                    (0, u.useEffect)(() => {
                        W && _({ ...f,
                            product: W
                        })
                    }, [W]);
                    let I = e => {
                            if (q(!0), 1 === e) {
                                let e = (null == f ? void 0 : f.phone) ? null == f ? void 0 : f.phone : "";
                                _({ ...f,
                                    watsapp: e
                                })
                            }
                        },
                        O = e => {
                            var t;
                            let n = {};
                            if (e.name || (n.name = "required*"), e.email || (n.email = "required*"), e.email && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.email) || (n.email = "Invalid email*")), e.phone || (n.phone = "required*"), (null == e ? void 0 : null === (t = e.phone) || void 0 === t ? void 0 : t.length) < 11 && (n.phone = "must be 11 digit number"), e.requirements || (n.requirements = "required*"), w || (n.selected = "Please select a product type*"), "packaging" !== w || (null == e ? void 0 : e.product) || (n.product = "Please select a box type*"), "stickerandlabels" !== w || (null == e ? void 0 : e.product) || (n.product = "Please select a label type*"), Object.keys(n).length > 0) S(n), (0, m.Am)((0, s.jsx)(h.Z, {
                                image: "/icons/not.png",
                                color: "red",
                                message: "Please fill all the required field. "
                            }));
                            else {
                                let e = {
                                    name: f.name,
                                    email: f.email,
                                    phone: f.phone,
                                    watsapp: f.watsapp,
                                    products: f.product,
                                    requirements: f.requirements
                                };
                                try {
                                    D((0, o.Xy)(e)).then(e => {
                                        v.ZP.sendForm("service_vi0e16o", "template_9akljl9", P.current, "eKeAE09PqlRljmUv2").then(t => {
                                            var n;
                                            console.log(e), (null == e ? void 0 : null === (n = e.payload) || void 0 === n ? void 0 : n.message) === "Quote Submitted successfully" ? ((0, m.Am)((0, s.jsx)(h.Z, {
                                                image: "/icons/sent.png",
                                                color: "green",
                                                message: "Quote Submit Successfully."
                                            })), T.push("/")) : (0, m.Am)((0, s.jsx)(h.Z, {
                                                image: "/icons/not.png",
                                                color: "red",
                                                message: "Something went wrong."
                                            }))
                                        })
                                    })
                                } catch (e) {
                                    (0, m.Am)((0, s.jsx)(h.Z, {
                                        image: "/icons/not.png",
                                        color: "red",
                                        message: "Something went wrong."
                                    })), console.log(e)
                                }
                            }
                        };
                    (0, u.useEffect)(() => {
                        b(L)
                    }, [L]);
                    let Z = e => {
                            if ("phone" === e.target.name || "watsapp" === e.target.name) {
                                let t = !(e.target.value.length > 11),
                                    n = e.target.value;
                                t && (N ? _({ ...f,
                                    [e.target.name]: n,
                                    watsapp: n
                                }) : _({ ...f,
                                    [e.target.name]: n
                                }))
                            } else e.target.name, _({ ...f,
                                [e.target.name]: e.target.value
                            })
                        },
                        F = e => {
                            b(e)
                        };
                    return (0, s.jsx)("div", {
                        className: "main_quotes",
                        children: (0, s.jsxs)("div", {
                            className: "main_data",
                            children: [(0, s.jsx)("h2", {
                                children: "Get A Custom Quote"
                            }), (0, s.jsx)("span", {
                                children: "After filling this form our representative will contact you in short while"
                            }), (0, s.jsxs)("div", {
                                className: "main_section",
                                children: [(0, s.jsx)("h3", {
                                    className: "quote_main",
                                    children: "Quote Info"
                                }), (0, s.jsx)("div", {
                                    className: "main_quote_form",
                                    children: (0, s.jsxs)("form", {
                                        ref: P,
                                        onSubmit: A,
                                        children: [(0, s.jsxs)("div", {
                                            className: "top_fields",
                                            children: [(0, s.jsxs)("div", {
                                                className: "form_input",
                                                children: [(0, s.jsxs)("label", {
                                                    children: ["Name ", (0, s.jsx)("span", {
                                                        style: {
                                                            color: "red",
                                                            paddingLeft: "10px"
                                                        },
                                                        children: null == k ? void 0 : k.name
                                                    })]
                                                }), (0, s.jsx)("input", {
                                                    name: "name",
                                                    onChange: Z,
                                                    value: null == f ? void 0 : f.name,
                                                    placeholder: "Enter your name"
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "form_input",
                                                children: [(0, s.jsxs)("label", {
                                                    children: ["Email ", (0, s.jsx)("span", {
                                                        style: {
                                                            color: "red",
                                                            paddingLeft: "10px"
                                                        },
                                                        children: null == k ? void 0 : k.email
                                                    })]
                                                }), (0, s.jsx)("input", {
                                                    name: "email",
                                                    onChange: Z,
                                                    value: null == f ? void 0 : f.email,
                                                    placeholder: "Enter your email address"
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "form_input",
                                                children: [(0, s.jsxs)("label", {
                                                    children: ["Phone No. ", (0, s.jsx)("span", {
                                                        style: {
                                                            color: "red",
                                                            paddingLeft: "10px"
                                                        },
                                                        children: null == k ? void 0 : k.phone
                                                    })]
                                                }), (0, s.jsx)("input", {
                                                    name: "phone",
                                                    onWheel: e => e.target.blur(),
                                                    type: "number",
                                                    onChange: Z,
                                                    value: null == f ? void 0 : f.phone,
                                                    placeholder: "Enter your phone number"
                                                })]
                                            }), (null == f ? void 0 : null === (l = f.phone) || void 0 === l ? void 0 : l.length) > 9 && !N && (0, s.jsxs)("div", {
                                                className: "form_input",
                                                children: [(0, s.jsx)("label", {
                                                    children: "Is that your WhatsApp no ! "
                                                }), (0, s.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: "10px"
                                                    },
                                                    children: [(0, s.jsx)("button", {
                                                        type: "text",
                                                        className: "buttn",
                                                        name: "button",
                                                        onClick: () => I(1),
                                                        children: "Yes"
                                                    }), (0, s.jsx)("button", {
                                                        type: "text",
                                                        className: "buttn2",
                                                        name: "button",
                                                        onClick: () => I(0),
                                                        children: "No"
                                                    })]
                                                })]
                                            }), N && (0, s.jsxs)("div", {
                                                className: "form_input",
                                                children: [(0, s.jsxs)("label", {
                                                    children: ["WhatsApp No. ", (0, s.jsx)("span", {
                                                        style: {
                                                            color: "red",
                                                            paddingLeft: "10px"
                                                        },
                                                        children: null == k ? void 0 : k.watsapp
                                                    })]
                                                }), (0, s.jsx)("input", {
                                                    name: "watsapp",
                                                    onWheel: e => e.target.blur(),
                                                    type: "number",
                                                    onChange: Z,
                                                    value: null == f ? void 0 : f.watsapp,
                                                    placeholder: "Enter your WhatsApp number"
                                                })]
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "choose_products",
                                            children: [(0, s.jsx)("h4", {
                                                children: "Choose your Product"
                                            }), (0, s.jsxs)("div", {
                                                className: "two_cate",
                                                children: [(0, s.jsxs)("div", {
                                                    className: "box1",
                                                    onClick: () => F("packaging"),
                                                    children: [(0, s.jsx)("img", {
                                                        className: "img1",
                                                        src: "/images/newbox.webp"
                                                    }), "packaging" === w && (0, s.jsx)("div", {
                                                        className: "tick_icon",
                                                        children: (0, s.jsx)(d(), {
                                                            width: 23,
                                                            height: 23,
                                                            src: "/images/correct.png"
                                                        })
                                                    })]
                                                }), (0, s.jsxs)("div", {
                                                    className: "box1",
                                                    onClick: () => F("stickerandlabels"),
                                                    children: [(0, s.jsx)("img", {
                                                        className: "img1",
                                                        src: "/images/new1Sticker.webp"
                                                    }), "stickerandlabels" === w && (0, s.jsx)("div", {
                                                        className: "tick_icon",
                                                        children: (0, s.jsx)(d(), {
                                                            width: 23,
                                                            height: 23,
                                                            src: "/images/correct.png"
                                                        })
                                                    })]
                                                })]
                                            }), (0, s.jsx)("div", {
                                                className: "custom_select",
                                                children: (0, s.jsxs)("div", {
                                                    className: "custom_select_option",
                                                    children: [(0, s.jsxs)("div", {
                                                        children: [(0, s.jsx)("span", {
                                                            style: {
                                                                color: "red",
                                                                paddingTop: "10px",
                                                                fontWeight: "600"
                                                            },
                                                            children: null == k ? void 0 : k.selected
                                                        }), (0, s.jsx)("span", {
                                                            style: {
                                                                color: "red",
                                                                paddingTop: "10px",
                                                                fontWeight: "600"
                                                            },
                                                            children: null == k ? void 0 : k.product
                                                        })]
                                                    }), !w && (0, s.jsx)("select", {
                                                        disabled: !0,
                                                        style: {
                                                            cursor: "default"
                                                        },
                                                        children: (0, s.jsx)("option", {
                                                            hidden: !0,
                                                            children: "Select your product type"
                                                        })
                                                    }), "packaging" === w && (0, s.jsxs)("select", {
                                                        name: "product",
                                                        value: null == f ? void 0 : f.product,
                                                        onChange: Z,
                                                        children: [(0, s.jsx)("option", {
                                                            hidden: !0,
                                                            children: "Select your box type"
                                                        }), null == C ? void 0 : null === (a = C.service) || void 0 === a ? void 0 : null === (r = a[0]) || void 0 === r ? void 0 : null === (g = r.categories) || void 0 === g ? void 0 : g.map((e, t) => {
                                                            var n;
                                                            return null == e ? void 0 : null === (n = e.category_products) || void 0 === n ? void 0 : n.map((e, t) => (0, s.jsx)("option", {
                                                                value: e.slug,
                                                                selected: W === e.slug,
                                                                children: e.title
                                                            }, t))
                                                        })]
                                                    }), "stickerandlabels" === w && (0, s.jsxs)("select", {
                                                        name: "product",
                                                        value: null == f ? void 0 : f.product,
                                                        onChange: Z,
                                                        children: [(0, s.jsx)("option", {
                                                            hidden: !0,
                                                            children: "Select your label type"
                                                        }), null == C ? void 0 : null === (x = C.service) || void 0 === x ? void 0 : null === (j = x[5]) || void 0 === j ? void 0 : null === (y = j.categories) || void 0 === y ? void 0 : y.map((e, t) => {
                                                            var n;
                                                            return null == e ? void 0 : null === (n = e.category_products) || void 0 === n ? void 0 : n.map((e, t) => (0, s.jsx)("option", {
                                                                value: e.slug,
                                                                selected: W === e.slug,
                                                                children: e.title
                                                            }, t))
                                                        })]
                                                    })]
                                                })
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "special_requirements",
                                            children: [(0, s.jsx)("h4", {
                                                children: "Special Requirement"
                                            }), (0, s.jsx)("div", {
                                                style: {
                                                    paddingLeft: "10px",
                                                    paddingBottom: "10px"
                                                },
                                                children: (0, s.jsx)("span", {
                                                    style: {
                                                        color: "red",
                                                        fontWeight: "600"
                                                    },
                                                    children: null == k ? void 0 : k.requirements
                                                })
                                            }), (0, s.jsx)("textarea", {
                                                name: "requirements",
                                                onChange: Z,
                                                value: null == f ? void 0 : f.requirements,
                                                placeholder: "Please provide any special requirement about your product:"
                                            })]
                                        }), (0, s.jsx)("button", {
                                            className: "butns",
                                            type: "submit",
                                            children: "GET QUOTE"
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                x = !0;

            function j(e) {
                var t, n, i, o;
                let {
                    maetaData: r
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(l(), {
                        children: [(0, s.jsx)("meta", {
                            property: "og:site_name",
                            content: "Biotech Packages"
                        }), (0, s.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.biotechpackages.com/quote"
                        }), (0, s.jsx)("meta", {
                            property: "og:url",
                            content: "/https://www.biotechpackages.com/quote"
                        }), (0, s.jsx)("title", {
                            children: null == r ? void 0 : null === (t = r.tags_desc) || void 0 === t ? void 0 : t.meta_title
                        }), (0, s.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0, s.jsx)("meta", {
                            property: "og:locale",
                            content: "en_US"
                        }), (0, s.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, s.jsx)("meta", {
                            property: "og:title",
                            content: null == r ? void 0 : null === (n = r.tags_desc) || void 0 === n ? void 0 : n.meta_title
                        }), (0, s.jsx)("meta", {
                            property: "og:description",
                            content: null == r ? void 0 : null === (i = r.tags_desc) || void 0 === i ? void 0 : i.meta_description
                        }), (0, s.jsx)("meta", {
                            name: "description",
                            content: null == r ? void 0 : null === (o = r.tags_desc) || void 0 === o ? void 0 : o.meta_description
                        }), (0, s.jsx)("link", {
                            rel: "icon",
                            href: "/images/bioblacklogo.png"
                        }), (0, s.jsx)("script", {
                            async: !0,
                            src: "https://www.googletagmanager.com/gtag/js?id=G-94FWCDD0CW"
                        }), (0, s.jsx)("script", {
                            children: "\n    window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'G-94FWCDD0CW');\n  "
                        })]
                    }), (0, s.jsxs)("main", {
                        children: [(0, s.jsx)(a.Z, {}), (0, s.jsx)(g, {})]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [776, 3081, 395, 9590, 9774, 2888, 179], function() {
            return e(e.s = 7079)
        }), _N_E = e.O()
    }
]);