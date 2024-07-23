"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7356], {
        7356: function(e, i, s) {
            var l = s(5893),
                a = s(7294),
                n = s(682),
                o = s(4051),
                r = s(1555),
                c = s(5675),
                t = s.n(c),
                d = s(1664),
                h = s.n(d),
                m = s(1163);
            s(6261);
            var u = s(9473),
                g = s(1650),
                x = s(5678);
            i.Z = function() {
                var e, i, s, c, d, j, v, p, b, f, _, N, w, k;
                let [y, Z] = (0, a.useState)(""), [S, I] = (0, a.useState)("");
                (0, m.useRouter)();
                let [L, C] = (0, a.useState)(1), E = () => {
                    1 === L ? C("") : C(1)
                }, A = () => {
                    2 === L ? C("") : C(2)
                }, {
                    footer: P
                } = (0, u.v9)(e => e.home), B = e => {
                    e.preventDefault(), y ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(y) ? (Z(""), (0, x.Am)((0, l.jsx)(g.Z, {
                        image: "/icons/sent.png",
                        color: "green",
                        message: "Subscribed Successfully. "
                    }))) : (0, x.Am)((0, l.jsx)(g.Z, {
                        image: "/icons/error.png",
                        color: "red",
                        message: "Invalid Email. "
                    })) : (I("error"), (0, x.Am)((0, l.jsx)(g.Z, {
                        image: "/icons/error.png",
                        color: "red",
                        message: "Email Required. "
                    })))
                };
                return (0, l.jsx)("div", {
                    children: (0, l.jsxs)("div", {
                        className: "main-footer",
                        children: [(0, l.jsx)("div", {
                            className: "footer_bg",
                            children: (0, l.jsx)(t(), {
                                style: {
                                    backgroundPosition: "center"
                                },
                                className: "background",
                                src: "/images/footer_change.png",
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "center"
                            })
                        }), (0, l.jsx)("div", {
                            className: "foot_data",
                            children: (0, l.jsxs)(n.Z, {
                                children: [(0, l.jsxs)("div", {
                                    className: "footer_main_heading",
                                    children: [(0, l.jsx)("h5", {
                                        children: null == P ? void 0 : null === (e = P.footer) || void 0 === e ? void 0 : null === (i = e[0]) || void 0 === i ? void 0 : i.sub_title
                                    }), (0, l.jsx)("div", {
                                        children: (0, l.jsx)("a", {
                                            href: "tel:+923103330109",
                                            children: (0, l.jsx)("h3", {
                                                className: "hover-underline-animation zoom_in",
                                                children: null == P ? void 0 : null === (s = P.footer) || void 0 === s ? void 0 : null === (c = s[0]) || void 0 === c ? void 0 : c.main_title
                                            })
                                        })
                                    })]
                                }), (0, l.jsxs)(o.Z, {
                                    className: "col_section",
                                    children: [(0, l.jsxs)(r.Z, {
                                        md: 6,
                                        lg: 4,
                                        className: "set_padding ",
                                        children: [(0, l.jsx)(h(), {
                                            href: "/",
                                            children: (0, l.jsx)(t(), {
                                                className: "logo",
                                                src: null == P ? void 0 : null === (d = P.footer) || void 0 === d ? void 0 : null === (j = d[0]) || void 0 === j ? void 0 : j.logo,
                                                alt: "Biotech Logo Image",
                                                layout: "intensiv",
                                                width: "153",
                                                height: "116"
                                            })
                                        }), (0, l.jsx)("p", {
                                            className: "footer_para",
                                            children: "We are a biotech company that specializes in custom product packaging and custom label printing. We are passionate about helping our clients create packaging that is not only beautiful but also functional."
                                        })]
                                    }), (0, l.jsxs)(r.Z, {
                                        md: 6,
                                        lg: 2,
                                        className: "unordered_list set_padding hides",
                                        children: [(0, l.jsx)("h3", {
                                            children: "Quick Links"
                                        }), (0, l.jsx)("ul", {
                                            children: null == P ? void 0 : null === (v = P.footer) || void 0 === v ? void 0 : null === (p = v[0]) || void 0 === p ? void 0 : p.explore.map((e, i) => "Services" === e.title ? null : (0, l.jsx)(h(), {
                                                href: e.link,
                                                children: (0, l.jsx)("li", {
                                                    children: e.title
                                                })
                                            }, i))
                                        })]
                                    }), (0, l.jsxs)(r.Z, {
                                        md: 6,
                                        lg: 2,
                                        className: " unordered_list set_padding hides",
                                        children: [(0, l.jsx)("h3", {
                                            children: "Company"
                                        }), (0, l.jsx)("ul", {
                                            children: null == P ? void 0 : null === (b = P.footer) || void 0 === b ? void 0 : null === (f = b[0]) || void 0 === f ? void 0 : f.support.map((e, i) => (0, l.jsx)(h(), {
                                                href: e.link,
                                                children: (0, l.jsx)("li", {
                                                    children: e.title
                                                })
                                            }, i))
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "mobile_view",
                                        children: [(0, l.jsxs)("div", {
                                            className: "",
                                            children: [(0, l.jsxs)("div", {
                                                className: "mobile_menu",
                                                onClick: E,
                                                children: [(0, l.jsx)("h3", {
                                                    children: "Quick Links"
                                                }), 1 !== L && (0, l.jsx)("div", {
                                                    children: (0, l.jsx)(t(), {
                                                        src: "/images/icons/arrow.png",
                                                        alt: "",
                                                        width: 8.4,
                                                        height: 14.7
                                                    })
                                                }), 1 === L && (0, l.jsx)("div", {
                                                    children: (0, l.jsx)(t(), {
                                                        src: "/images/icons/bottomwhite.png",
                                                        alt: "",
                                                        width: 14.7,
                                                        height: 8.4
                                                    })
                                                })]
                                            }), (0, l.jsx)("hr", {
                                                className: "line"
                                            }), (0, l.jsx)("div", {
                                                className: "unordered_list ".concat(1 === L ? "para4" : "para5"),
                                                children: (0, l.jsx)("ul", {
                                                    children: null == P ? void 0 : null === (_ = P.footer) || void 0 === _ ? void 0 : null === (N = _[0]) || void 0 === N ? void 0 : N.explore.map((e, i) => (0, l.jsx)(h(), {
                                                        href: e.link,
                                                        children: (0, l.jsx)("li", {
                                                            children: e.title
                                                        })
                                                    }, i))
                                                })
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "",
                                            children: [(0, l.jsxs)("div", {
                                                className: "mobile_menu",
                                                onClick: A,
                                                children: [(0, l.jsx)("h3", {
                                                    children: "Company"
                                                }), 2 !== L && (0, l.jsx)("div", {
                                                    children: (0, l.jsx)(t(), {
                                                        src: "/images/icons/arrow.png",
                                                        alt: "",
                                                        width: 8.4,
                                                        height: 14.7
                                                    })
                                                }), 2 === L && (0, l.jsx)("div", {
                                                    children: (0, l.jsx)(t(), {
                                                        src: "/images/icons/bottomwhite.png",
                                                        alt: "",
                                                        width: 14.7,
                                                        height: 8.4
                                                    })
                                                })]
                                            }), (0, l.jsx)("hr", {
                                                className: "line"
                                            }), (0, l.jsx)("div", {
                                                className: "unordered_list ".concat(2 === L ? "para4" : "para5"),
                                                children: (0, l.jsx)("ul", {
                                                    children: null == P ? void 0 : null === (w = P.footer) || void 0 === w ? void 0 : null === (k = w[0]) || void 0 === k ? void 0 : k.support.map((e, i) => (0, l.jsx)(h(), {
                                                        href: e.link,
                                                        children: (0, l.jsx)("li", {
                                                            children: e.title
                                                        })
                                                    }, i))
                                                })
                                            })]
                                        })]
                                    }), (0, l.jsx)(r.Z, {
                                        md: 6,
                                        lg: 4,
                                        className: " subscribe_section set_padding mobile_subscribe",
                                        children: (0, l.jsxs)("form", {
                                            onSubmit: B,
                                            children: [(0, l.jsx)("h3", {
                                                children: "Subscribe Our Newsletter To Stay In Touch"
                                            }), (0, l.jsx)("input", {
                                                value: y,
                                                onChange: e => Z(e.target.value),
                                                className: "footer_input",
                                                type: "email",
                                                placeholder: "Enter your email"
                                            }), (0, l.jsx)("div", {
                                                children: (0, l.jsx)("button", {
                                                    type: "submit",
                                                    className: "footer_btn_subscribe",
                                                    children: "Subscribe"
                                                })
                                            })]
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "icon_image",
                                    children: [(0, l.jsxs)("a", {
                                        href: "https://www.facebook.com/BiotechPackagesLahore",
                                        target: "_blank",
                                        children: [(0, l.jsx)(t(), {
                                            src: "/images/Group53.png",
                                            alt: "Facebook Logo Image",
                                            width: 35,
                                            height: 35
                                        }), " "]
                                    }), (0, l.jsx)("a", {
                                        href: "https://www.instagram.com/biotechpackagespvt/",
                                        target: "_blank",
                                        children: (0, l.jsx)(t(), {
                                            src: "/images/Group54.png",
                                            alt: "Instagram Logo Image",
                                            width: 35,
                                            height: 35
                                        })
                                    }), (0, l.jsx)("a", {
                                        href: "https://www.linkedin.com/company/biotechpackages-pvt-ltd/",
                                        target: "_blank",
                                        children: (0, l.jsx)(t(), {
                                            src: "/images/Group55.png",
                                            alt: "LinkedIn Logo Image",
                                            width: 35,
                                            height: 35
                                        })
                                    })]
                                }), (0, l.jsx)("p", {
                                    className: "copyright",
                                    children: " 2023 Biotech Packages. All rights reserved"
                                })]
                            })
                        })]
                    })
                })
            }
        },
        1650: function(e, i, s) {
            var l = s(5893);
            s(7294), i.Z = function(e) {
                let {
                    image: i,
                    message: s,
                    color: a = "green"
                } = e;
                return (0, l.jsxs)("div", {
                    className: "message-container",
                    children: [(0, l.jsx)("img", {
                        src: i,
                        alt: "message"
                    }), "\xa0\xa0\xa0\xa0", (0, l.jsx)("p", {
                        className: "message-text",
                        style: {
                            color: "".concat(a)
                        },
                        children: s
                    })]
                })
            }
        }
    }
]);