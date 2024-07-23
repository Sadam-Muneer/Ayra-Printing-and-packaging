"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7745], {
        7745: function(e, i, l) {
            var s = l(5893),
                o = l(7294),
                n = l(682),
                t = l(4051),
                a = l(1555),
                r = l(5675),
                d = l.n(r),
                c = l(1664),
                h = l.n(c),
                u = l(1163);
            l(6261);
            var m = l(9473);
            l(1650), l(8857);
            var v = l(6501),
                p = l(5247);
            i.Z = function() {
                var e, i, l, r, c, g, x, j, f, b, _, w, k, N, y, Z, P, S, L, C, I, E;
                let R = {
                        email: ""
                    },
                    [q, B] = (0, o.useState)(""),
                    [F, G] = (0, o.useState)(R),
                    [z, A] = (0, o.useState)({}),
                    [Q, W] = (0, o.useState)(!1);
                (0, u.useRouter)();
                let [D, K] = (0, o.useState)(1), O = () => {
                    1 === D ? K("") : K(1)
                }, U = () => {
                    2 === D ? K("") : K(2)
                }, {
                    footer: $
                } = (0, m.v9)(e => e.home), H = (0, o.useRef)(), J = e => {
                    let {
                        name: i,
                        value: l
                    } = e.target;
                    G({ ...F,
                        [i]: l
                    })
                }, M = e => {
                    e.preventDefault(), V(F)
                }, T = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e), V = e => {
                    let i = {};
                    if (e.email ? T(e.email) || (i.email = "Please enter a valid email address") : i.email = "Required", 0 === Object.keys(i).length) try {
                        p.ZP.sendForm("service_vi0e16o", "template_cuprgvv", H.current, "eKeAE09PqlRljmUv2").then(e => {
                            v.ZP.dismiss(), v.ZP.success("Submitted Successfully!"), W(!0), A(R), G(R)
                        }).catch(e => {
                            v.ZP.dismiss(), v.ZP.error("Something went wrong.")
                        })
                    } catch (e) {
                        v.ZP.dismiss(), v.ZP.error("Something went wrong.")
                    } else A(i), W(!0), v.ZP.dismiss(), v.ZP.error("Please fill the required field.")
                };
                return (0, s.jsxs)("div", {
                    className: "main-footer-one",
                    children: [(0, s.jsx)("div", {
                        className: "footer_bg",
                        children: (0, s.jsx)(d(), {
                            className: "background",
                            src: "/images/footer.png",
                            layout: "fill",
                            objectFit: "cover",
                            objectPosition: "center"
                        })
                    }), (0, s.jsx)("div", {
                        className: "foot_data",
                        children: (0, s.jsxs)(n.Z, {
                            children: [(0, s.jsxs)("div", {
                                className: "footer_main_heading",
                                children: [(0, s.jsx)("h5", {
                                    children: null == $ ? void 0 : null === (e = $.footer) || void 0 === e ? void 0 : null === (i = e[0]) || void 0 === i ? void 0 : i.sub_title
                                }), (0, s.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        width: "fit-content",
                                        margin: "auto"
                                    },
                                    children: (0, s.jsx)("a", {
                                        href: "tel:+923103330109",
                                        children: (0, s.jsx)("h3", {
                                            className: "hover-underline-animation zoom_in",
                                            children: null == $ ? void 0 : null === (l = $.footer) || void 0 === l ? void 0 : null === (r = l[0]) || void 0 === r ? void 0 : r.main_title
                                        })
                                    })
                                })]
                            }), (0, s.jsxs)(t.Z, {
                                className: "col_section",
                                children: [(0, s.jsxs)(a.Z, {
                                    md: 6,
                                    lg: 4,
                                    className: "set_padding ",
                                    children: [(0, s.jsx)(h(), {
                                        href: "/",
                                        children: (0, s.jsx)(d(), {
                                            className: "logo",
                                            src: null == $ ? void 0 : null === (c = $.footer) || void 0 === c ? void 0 : null === (g = c[0]) || void 0 === g ? void 0 : g.logo,
                                            alt: "Biotech Logo Image",
                                            layout: "intensiv",
                                            width: "153",
                                            height: "116"
                                        })
                                    }), (0, s.jsx)("p", {
                                        className: "footer_para",
                                        children: "We are a biotech company that specializes in custom product packaging and custom label printing. We are passionate about helping our clients create packaging that is not only beautiful but also functional."
                                    })]
                                }), (0, s.jsxs)(a.Z, {
                                    md: 6,
                                    lg: 2,
                                    className: "unordered_list set_padding hides",
                                    children: [(0, s.jsx)("h3", {
                                        children: "Quick Links"
                                    }), (0, s.jsx)("ul", {
                                        children: (null == $ ? void 0 : null === (x = $.footer) || void 0 === x ? void 0 : null === (j = x[0]) || void 0 === j ? void 0 : j.explore) && (null == $ ? void 0 : null === (f = $.footer) || void 0 === f ? void 0 : null === (b = f[0]) || void 0 === b ? void 0 : b.explore.map((e, i) => "Services" === e.title ? null : (0, s.jsx)(h(), {
                                            href: e.link,
                                            children: (0, s.jsx)("li", {
                                                children: e.title
                                            })
                                        }, i)))
                                    })]
                                }), (0, s.jsxs)(a.Z, {
                                    md: 6,
                                    lg: 2,
                                    className: " unordered_list set_padding hides",
                                    children: [(0, s.jsx)("h3", {
                                        children: "Company"
                                    }), (0, s.jsx)("ul", {
                                        children: (null == $ ? void 0 : null === (_ = $.footer) || void 0 === _ ? void 0 : null === (w = _[0]) || void 0 === w ? void 0 : w.support) && (null == $ ? void 0 : null === (k = $.footer) || void 0 === k ? void 0 : null === (N = k[0]) || void 0 === N ? void 0 : N.support.map((e, i) => (0, s.jsx)(h(), {
                                            href: e.link,
                                            children: (0, s.jsx)("li", {
                                                children: e.title
                                            })
                                        }, i)))
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "mobile_view",
                                    children: [(0, s.jsxs)("div", {
                                        className: "upper_mobile_menu",
                                        children: [(0, s.jsxs)("div", {
                                            className: "mobile_menu",
                                            onClick: O,
                                            children: [(0, s.jsx)("h3", {
                                                children: "Quick Links"
                                            }), 1 !== D && (0, s.jsx)("div", {
                                                children: (0, s.jsx)(d(), {
                                                    src: "/images/icons/arrow.png",
                                                    width: 8.4,
                                                    height: 14.7
                                                })
                                            }), 1 === D && (0, s.jsx)("div", {
                                                children: (0, s.jsx)(d(), {
                                                    src: "/images/icons/bottomwhite.png",
                                                    width: 14.7,
                                                    height: 8.4
                                                })
                                            })]
                                        }), (0, s.jsx)("hr", {
                                            className: "line"
                                        }), (0, s.jsx)("div", {
                                            className: "unordered_list ".concat(1 === D ? "para4" : "para5"),
                                            children: (0, s.jsx)("ul", {
                                                children: (null == $ ? void 0 : null === (y = $.footer) || void 0 === y ? void 0 : null === (Z = y[0]) || void 0 === Z ? void 0 : Z.explore) && (null == $ ? void 0 : null === (P = $.footer) || void 0 === P ? void 0 : null === (S = P[0]) || void 0 === S ? void 0 : S.explore.map((e, i) => (0, s.jsx)(h(), {
                                                    href: e.link,
                                                    children: (0, s.jsx)("li", {
                                                        children: e.title
                                                    })
                                                }, i)))
                                            })
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "upper_mobile_menu",
                                        children: [(0, s.jsxs)("div", {
                                            className: "mobile_menu",
                                            onClick: U,
                                            children: [(0, s.jsx)("h3", {
                                                children: "Company"
                                            }), 2 !== D && (0, s.jsx)("div", {
                                                children: (0, s.jsx)(d(), {
                                                    src: "/images/icons/arrow.png",
                                                    width: 8.4,
                                                    height: 14.7
                                                })
                                            }), 2 === D && (0, s.jsx)("div", {
                                                children: (0, s.jsx)(d(), {
                                                    src: "/images/icons/bottomwhite.png",
                                                    width: 14.7,
                                                    height: 8.4
                                                })
                                            })]
                                        }), (0, s.jsx)("hr", {
                                            className: "line"
                                        }), (0, s.jsx)("div", {
                                            className: "unordered_list ".concat(2 === D ? "para4" : "para5"),
                                            children: (0, s.jsx)("ul", {
                                                children: (null == $ ? void 0 : null === (L = $.footer) || void 0 === L ? void 0 : null === (C = L[0]) || void 0 === C ? void 0 : C.support) && (null == $ ? void 0 : null === (I = $.footer) || void 0 === I ? void 0 : null === (E = I[0]) || void 0 === E ? void 0 : E.support.map((e, i) => (0, s.jsx)(h(), {
                                                    href: e.link,
                                                    children: (0, s.jsx)("li", {
                                                        children: e.title
                                                    })
                                                }, i)))
                                            })
                                        })]
                                    })]
                                }), (0, s.jsx)(a.Z, {
                                    md: 6,
                                    lg: 4,
                                    className: " subscribe_section set_padding mobile_subscribe",
                                    children: (0, s.jsxs)("form", {
                                        onSubmit: M,
                                        ref: H,
                                        children: [(0, s.jsx)("h3", {
                                            children: "Subscribe our newsletter to stay in touch"
                                        }), (0, s.jsx)("input", {
                                            onChange: J,
                                            name: "email",
                                            value: F.email,
                                            className: "footer_input",
                                            type: "email",
                                            placeholder: "Enter your email"
                                        }), (0, s.jsx)("div", {
                                            children: (0, s.jsx)("button", {
                                                type: "submit",
                                                className: "footer_btn_subscribe",
                                                children: "Subscribe"
                                            })
                                        })]
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "icon_image",
                                children: [(0, s.jsxs)("a", {
                                    href: "https://www.facebook.com/BiotechPackagesLahore",
                                    target: "_blank",
                                    children: [(0, s.jsx)(d(), {
                                        src: "/images/Group53.png",
                                        alt: "Facebook Logo Image",
                                        width: 35,
                                        height: 35
                                    }), " "]
                                }), (0, s.jsx)("a", {
                                    href: "https://www.instagram.com/biotechpackagespvt/",
                                    target: "_blank",
                                    children: (0, s.jsx)(d(), {
                                        src: "/images/Group54.png",
                                        alt: "Instagram Logo Image",
                                        width: 35,
                                        height: 35
                                    })
                                }), (0, s.jsx)("a", {
                                    href: "https://www.linkedin.com/company/biotechpackages-pvt-ltd/",
                                    target: "_blank",
                                    children: (0, s.jsx)(d(), {
                                        src: "/images/Group55.png",
                                        alt: "LinkedIn Logo Image",
                                        width: 35,
                                        height: 35
                                    })
                                })]
                            }), (0, s.jsx)("hr", {}), (0, s.jsx)("p", {
                                className: "copyright",
                                children: "\xa9 2023 Biotech Packages. All rights reserved"
                            })]
                        })
                    })]
                })
            }
        }
    }
]);