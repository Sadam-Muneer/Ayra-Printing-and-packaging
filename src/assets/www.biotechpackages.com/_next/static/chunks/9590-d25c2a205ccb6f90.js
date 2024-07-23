"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9590], {
        9590: function(s, e, i) {
            var l = i(5893),
                c = i(682),
                a = i(5005),
                d = i(7294),
                n = i(8063),
                h = i(7555),
                r = i(5675),
                o = i.n(r),
                t = i(1664),
                v = i.n(t),
                x = i(6261),
                j = i(9473),
                m = i(1632),
                u = i(1163),
                g = i(5729);
            e.Z = function() {
                var s, e, i, r, t, p, N, k, _, w, b, f, y, C, S, Z, B, P, E, T, M, H, I, O, Q;
                let [Y, L] = (0, d.useState)(!1), {
                    showMenu: z
                } = (0, j.v9)(s => s.product), {
                    searchData: A
                } = (0, j.v9)(s => s.search), [F, K] = (0, d.useState)(!1), [q, R] = (0, d.useState)(!1), [D, G] = (0, d.useState)(!1), [J, U] = (0, d.useState)(""), V = (0, j.I0)(), W = (0, u.useRouter)(), X = () => {
                    F && K(!0)
                }, $ = () => {
                    L(!0), K(!1), R(!1), G(!1)
                }, ss = () => {
                    L(!1)
                }, se = () => {
                    G(!1)
                }, si = () => {
                    K(!1), R(!1), G(!1), L(!1), W.push("/"), setTimeout(() => {
                        x.OK.scrollTo("sliders", {
                            duration: 1e3,
                            delay: 100,
                            smooth: "easeInOutQuart"
                        })
                    }, 1e3), V((0, m.Yw)(0))
                }, sl = () => {
                    K(!1), R(!1), G(!1), L(!1), W.push("/"), setTimeout(() => {
                        x.OK.scrollTo("sliders", {
                            duration: 1e3,
                            delay: 100,
                            smooth: "easeInOutQuart"
                        })
                    }, 1e3), V((0, m.Yw)(1))
                };
                (0, d.useEffect)(() => {
                    sc(J)
                }, [J]);
                let sc = s => {
                        s && V((0, g.iB)({
                            search: s
                        }))
                    },
                    sa = (null == A ? void 0 : null === (s = A.products) || void 0 === s ? void 0 : s.length) === 0 && (null == A ? void 0 : null === (e = A.maincat) || void 0 === e ? void 0 : e.length) === 0,
                    {
                        header: sd
                    } = (0, j.v9)(s => s.home);
                null == sd || null === (i = sd.header) || void 0 === i || null === (r = i[0]) || void 0 === r || r.logo[0];
                let sn = null == sd ? void 0 : null === (t = sd.header) || void 0 === t ? void 0 : null === (p = t[0]) || void 0 === p ? void 0 : p.logo[1],
                    sh = null == sd ? void 0 : null === (N = sd.header) || void 0 === N ? void 0 : null === (k = N[0]) || void 0 === k ? void 0 : k.logo_link;
                return (0, l.jsxs)("div", {
                    className: "main_headers",
                    children: [(0, l.jsx)("div", {
                        className: "main_data",
                        children: (0, l.jsxs)("div", {
                            className: "main_header",
                            children: [(0, l.jsx)("div", {
                                className: "header",
                                children: (0, l.jsx)(h.Z, {
                                    expand: "lg",
                                    onMouseEnter: X,
                                    children: (0, l.jsx)(c.Z, {
                                        children: (0, l.jsxs)("div", {
                                            className: "main_header_com",
                                            children: [(0, l.jsx)(v(), {
                                                href: "/",
                                                children: (0, l.jsx)(o(), {
                                                    className: "logo",
                                                    alt: "",
                                                    src: sn,
                                                    width: "114",
                                                    height: "85"
                                                })
                                            }), (0, l.jsx)(h.Z.Toggle, {
                                                "aria-controls": "navbarScroll"
                                            }), (0, l.jsx)(h.Z.Collapse, {
                                                id: "navbarScroll",
                                                children: (0, l.jsx)(n.Z, {
                                                    className: "m-auto my-2 my-lg-0 ".concat(F && "changeMenuColor"),
                                                    style: {
                                                        maxHeight: "100px"
                                                    },
                                                    navbarScroll: !0,
                                                    children: (null == sd ? void 0 : null === (_ = sd.header) || void 0 === _ ? void 0 : null === (w = _[0]) || void 0 === w ? void 0 : w.link) && (null == sd ? void 0 : null === (b = sd.header) || void 0 === b ? void 0 : null === (f = b[0]) || void 0 === f ? void 0 : null === (y = f.link) || void 0 === y ? void 0 : y.map((s, e) => (0, l.jsx)(v(), {
                                                        style: {
                                                            color: "black"
                                                        },
                                                        className: "".concat(W.asPath === "".concat(s.link) ? "active" : " "),
                                                        href: s.link,
                                                        children: null == s ? void 0 : s.title
                                                    }, e)))
                                                })
                                            }), (0, l.jsxs)("div", {
                                                className: "search_fields ".concat(F && "changebtn"),
                                                children: [(0, l.jsx)("div", {
                                                    className: "search_icon",
                                                    onMouseEnter: () => K(!0),
                                                    children: F ? (0, l.jsx)(o(), {
                                                        src: "/images/blacksearch.png",
                                                        alt: "search",
                                                        width: 30,
                                                        height: 30
                                                    }) : (0, l.jsx)(o(), {
                                                        src: "/images/search.png",
                                                        alt: "search",
                                                        width: 30,
                                                        height: 30
                                                    })
                                                }), (0, l.jsx)("a", {
                                                    href: "tel: 923103330109",
                                                    children: (0, l.jsx)(a.Z, {
                                                        style: {
                                                            backgroundColor: "black",
                                                            color: "white"
                                                        },
                                                        className: "call_us",
                                                        children: sh
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: "".concat(F ? "show" : "hide"),
                                onMouseEnter: () => K(!0),
                                onMouseLeave: () => K(!1),
                                children: (0, l.jsx)("div", {
                                    className: "hover_search",
                                    children: (0, l.jsx)(c.Z, {
                                        children: (0, l.jsxs)("div", {
                                            className: "search_item",
                                            children: [(0, l.jsx)("input", {
                                                type: "text",
                                                onChange: s => U(s.target.value),
                                                value: J,
                                                placeholder: "Search your product"
                                            }), A && (0, l.jsxs)("div", {
                                                style: {
                                                    display: "flex"
                                                },
                                                className: "srach_data",
                                                children: [(null == A ? void 0 : null === (C = A.products) || void 0 === C ? void 0 : C.length) > 0 && (0, l.jsxs)("div", {
                                                    className: "main_class",
                                                    style: {
                                                        width: "50%",
                                                        marginBottom: "40px"
                                                    },
                                                    children: [(0, l.jsx)("h1", {
                                                        style: {
                                                            marginBottom: "30px"
                                                        },
                                                        children: "Products"
                                                    }), (0, l.jsx)("div", {
                                                        className: "hide_scroll",
                                                        style: {
                                                            maxHeight: "350px",
                                                            overflowY: "scroll",
                                                            paddingBottom: "40px"
                                                        },
                                                        children: A && (null == A ? void 0 : null === (S = A.products) || void 0 === S ? void 0 : S.length) > 0 && (null == A ? void 0 : null === (Z = A.products) || void 0 === Z ? void 0 : Z.map((s, e) => (0, l.jsx)("div", {
                                                            children: (0, l.jsx)(v(), {
                                                                style: {
                                                                    color: "black"
                                                                },
                                                                href: "/".concat(s.slug),
                                                                children: (0, l.jsx)("p", {
                                                                    children: s.title
                                                                })
                                                            })
                                                        }, e)))
                                                    })]
                                                }), (null == A ? void 0 : null === (B = A.maincat) || void 0 === B ? void 0 : B.length) > 0 && (0, l.jsxs)("div", {
                                                    style: {
                                                        width: "50%",
                                                        marginBottom: "40px"
                                                    },
                                                    children: [(0, l.jsx)("h1", {
                                                        style: {
                                                            marginBottom: "30px"
                                                        },
                                                        children: "Categories"
                                                    }), (0, l.jsx)("div", {
                                                        className: "hide_scroll",
                                                        style: {
                                                            maxHeight: "350px",
                                                            overflowY: "scroll",
                                                            paddingBottom: "40px"
                                                        },
                                                        children: A && (null == A ? void 0 : null === (P = A.maincat) || void 0 === P ? void 0 : P.length) > 0 && (null == A ? void 0 : null === (E = A.maincat) || void 0 === E ? void 0 : E.map((s, e) => (0, l.jsx)("div", {
                                                            children: (0, l.jsx)(v(), {
                                                                style: {
                                                                    color: "black"
                                                                },
                                                                href: "/category/".concat(s.main_slug),
                                                                children: (0, l.jsx)("p", {
                                                                    children: s.name
                                                                })
                                                            })
                                                        }, e)))
                                                    })]
                                                })]
                                            }), sa ? (0, l.jsx)("p", {
                                                style: {
                                                    textAlign: "center",
                                                    fontSize: "40px"
                                                },
                                                children: "No Product Found"
                                            }) : "", (0, l.jsx)(o(), {
                                                src: "/images/blackarrow.png",
                                                alt: "search",
                                                width: 55,
                                                height: 55
                                            })]
                                        })
                                    })
                                })
                            })]
                        })
                    }), (0, l.jsx)(c.Z, {
                        children: (0, l.jsx)("div", {
                            className: "responsive_header ".concat(z ? "index0" : "index1"),
                            children: (0, l.jsxs)("div", {
                                className: "topbar",
                                children: [(0, l.jsx)("div", {
                                    className: "logo",
                                    children: q ? (0, l.jsxs)(v(), {
                                        href: "/",
                                        children: [" ", (0, l.jsx)(o(), {
                                            src: "/images/logoblack.png",
                                            alt: "logo",
                                            width: 64,
                                            height: 48
                                        })]
                                    }) : (0, l.jsx)(v(), {
                                        href: "/",
                                        children: (0, l.jsx)(o(), {
                                            src: "/images/logoblack.png",
                                            alt: "logo",
                                            width: 64,
                                            height: 48
                                        })
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "icons",
                                    children: [(0, l.jsx)("div", {
                                        onClick: () => R(!q),
                                        children: q ? (0, l.jsx)(o(), {
                                            src: "/images/blacksearch.png",
                                            alt: "search",
                                            width: 27,
                                            height: 27
                                        }) : (0, l.jsx)(o(), {
                                            src: "/images/search.png",
                                            alt: "search",
                                            width: 27,
                                            height: 27
                                        })
                                    }), (0, l.jsx)("div", {
                                        children: q ? (0, l.jsx)(o(), {
                                            src: "/images/icons/hamber.png",
                                            width: 27,
                                            height: 16,
                                            alt: "menu",
                                            onClick: $
                                        }) : (0, l.jsx)(o(), {
                                            src: "/images/icons/menu.png",
                                            width: 27,
                                            height: 16,
                                            alt: "menu",
                                            onClick: $
                                        })
                                    })]
                                })]
                            })
                        })
                    }), (0, l.jsx)("div", {
                        className: "".concat(q ? "show_res" : "hide_res"),
                        children: (0, l.jsx)("div", {
                            className: "hover_search2",
                            children: (0, l.jsx)(c.Z, {
                                children: (0, l.jsxs)("div", {
                                    className: "search_item",
                                    children: [(0, l.jsx)("input", {
                                        type: "text",
                                        onChange: s => U(s.target.value),
                                        value: J,
                                        placeholder: "Search your product"
                                    }), (null == A ? void 0 : null === (T = A.products) || void 0 === T ? void 0 : T.length) > 0 && (0, l.jsxs)("div", {
                                        className: "srach_data",
                                        children: [(0, l.jsxs)("div", {
                                            children: [(0, l.jsx)("h1", {
                                                children: "Products"
                                            }), (0, l.jsx)("div", {
                                                children: A && (null == A ? void 0 : null === (M = A.products) || void 0 === M ? void 0 : M.map((s, e) => (0, l.jsx)("div", {
                                                    children: (0, l.jsx)(v(), {
                                                        href: "/".concat(s.slug),
                                                        children: (0, l.jsx)("p", {
                                                            style: {
                                                                color: "black"
                                                            },
                                                            children: s.title
                                                        })
                                                    })
                                                }, e)))
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            children: [(0, l.jsx)("h1", {
                                                children: "Categories"
                                            }), (0, l.jsx)("div", {
                                                children: A && (null == A ? void 0 : null === (H = A.maincat) || void 0 === H ? void 0 : H.map((s, e) => (0, l.jsx)("div", {
                                                    children: (0, l.jsx)("p", {
                                                        children: s.name
                                                    })
                                                }, e)))
                                            })]
                                        })]
                                    }), sa ? (0, l.jsx)("p", {
                                        style: {
                                            textAlign: "center",
                                            width: "100%",
                                            paddingTop: "30px",
                                            fontSize: "20px"
                                        },
                                        children: "No Product Found"
                                    }) : ""]
                                })
                            })
                        })
                    }), (0, l.jsxs)("div", {
                        className: "".concat(D ? "show_res2" : "hide_res2"),
                        children: [(0, l.jsxs)("div", {
                            className: "topbar topbar3",
                            children: [(0, l.jsx)("div", {
                                className: "logo",
                                children: D ? (0, l.jsx)(v(), {
                                    href: "/",
                                    children: (0, l.jsx)(o(), {
                                        src: "/images/logoblack.png",
                                        alt: "logo",
                                        width: 64,
                                        height: 48
                                    })
                                }) : ""
                            }), (0, l.jsxs)("div", {
                                className: "icons",
                                children: [(0, l.jsx)("div", {
                                    onClick: () => G(!D),
                                    children: D ? (0, l.jsx)(o(), {
                                        src: "/images/blacksearch.png",
                                        alt: "search",
                                        width: 27,
                                        height: 27
                                    }) : ""
                                }), (0, l.jsx)("div", {
                                    children: D ? (0, l.jsx)(o(), {
                                        src: "/images/icons/blackcross.png",
                                        width: 16,
                                        height: 16,
                                        alt: "menu",
                                        onClick: se
                                    }) : ""
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            className: "hover_search3",
                            children: (0, l.jsx)("div", {
                                className: "search_item",
                                children: (0, l.jsxs)(c.Z, {
                                    children: [(0, l.jsx)("input", {
                                        type: "text",
                                        placeholder: "Search your product"
                                    }), (0, l.jsx)(o(), {
                                        src: "/images/blackarrow.png",
                                        alt: "search",
                                        width: 30,
                                        height: 30
                                    })]
                                })
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: "mobile_navigation ".concat(Y ? "showed" : "hidden"),
                        children: (0, l.jsxs)("div", {
                            children: [(0, l.jsxs)("div", {
                                className: "topbar topbar3",
                                children: [(0, l.jsx)("div", {
                                    className: "logo",
                                    children: (0, l.jsx)(v(), {
                                        href: "/",
                                        children: (0, l.jsx)(o(), {
                                            src: "/images/B_logo.png",
                                            alt: "logo",
                                            width: 64,
                                            height: 48
                                        })
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "icons",
                                    children: (0, l.jsx)("div", {
                                        onClick: ss,
                                        children: (0, l.jsx)(o(), {
                                            src: "/images/icons/cross.png",
                                            width: 16,
                                            height: 16,
                                            alt: "menu"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "menu",
                                children: [(0, l.jsxs)("div", {
                                    children: [(0, l.jsxs)("h4", {
                                        children: ["Need Help ", (0, l.jsx)("span", {
                                            children: (0, l.jsx)(o(), {
                                                src: "/images/icons/question.svg",
                                                alt: "",
                                                width: 10,
                                                height: 10
                                            })
                                        })]
                                    }), (0, l.jsx)("hr", {}), (0, l.jsx)("ul", {
                                        children: null == sd ? void 0 : null === (I = sd.header) || void 0 === I ? void 0 : null === (O = I[0]) || void 0 === O ? void 0 : null === (Q = O.link) || void 0 === Q ? void 0 : Q.map((s, e) => (0, l.jsx)(v(), {
                                            className: "".concat(W.asPath === "".concat(s.link) ? "active" : "non_active"),
                                            href: s.link,
                                            children: (0, l.jsx)("div", {
                                                children: s.title
                                            })
                                        }, e))
                                    }), (0, l.jsx)("hr", {})]
                                }), (0, l.jsxs)("div", {
                                    className: "Quick_links",
                                    children: [(0, l.jsx)("h4", {
                                        children: "Quick Links"
                                    }), (0, l.jsx)("div", {
                                        children: (0, l.jsxs)("div", {
                                            className: "Links",
                                            children: [(0, l.jsx)("h3", {
                                                onClick: si,
                                                children: "Packaging"
                                            }), (0, l.jsx)("h3", {
                                                onClick: sl,
                                                children: "Stickers"
                                            })]
                                        })
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "social_links",
                                    children: (0, l.jsxs)("div", {
                                        className: "social_icons",
                                        children: [(0, l.jsx)(v(), {
                                            href: "",
                                            children: (0, l.jsx)("div", {
                                                className: "icons_fb",
                                                children: (0, l.jsx)(o(), {
                                                    src: "/images/icons/fb.png",
                                                    alt: "fb_icon",
                                                    width: 9.28,
                                                    height: 17.24
                                                })
                                            })
                                        }), (0, l.jsx)(v(), {
                                            href: "",
                                            children: (0, l.jsx)("div", {
                                                className: "icons_insta",
                                                children: (0, l.jsx)(o(), {
                                                    src: "/images/icons/insta.png",
                                                    alt: "insta_icon",
                                                    width: 14.43,
                                                    height: 14.43
                                                })
                                            })
                                        }), (0, l.jsx)(v(), {
                                            href: "",
                                            children: (0, l.jsx)("div", {
                                                className: "icons_linked",
                                                children: (0, l.jsx)(o(), {
                                                    src: "/images/icons/linked.png",
                                                    alt: "linkedIn_icon",
                                                    width: 12.84,
                                                    height: 12.84
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }
        }
    }
]);