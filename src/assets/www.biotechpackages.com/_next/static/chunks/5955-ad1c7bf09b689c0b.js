"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5955], {
        5955: function(l, i, s) {
            var e = s(5893),
                n = s(682),
                d = s(5005),
                c = s(7294),
                a = s(8063),
                o = s(7555),
                h = s(5675),
                r = s.n(h),
                t = s(1664),
                v = s.n(t),
                x = s(6261),
                u = s(9473),
                j = s(1632),
                m = s(1163),
                g = s(5729);
            i.Z = function() {
                var l, i, s, h, t, p, N, _, k, w, f, b, y, C, S, Z, B, E, P, T, M, H, I, O, Q, Y;
                let [q, L] = (0, c.useState)(!1), {
                    showMenu: z
                } = (0, u.v9)(l => l.product), {
                    searchData: A
                } = (0, u.v9)(l => l.search), [F, K] = (0, c.useState)(!1), [R, D] = (0, c.useState)(!1), [G, J] = (0, c.useState)(!1), [U, V] = (0, c.useState)(""), [W, X] = (0, c.useState)([]), $ = (0, u.I0)(), ll = (0, m.useRouter)(), li = () => {
                    F && K(!0)
                }, ls = () => {
                    L(!0), K(!1), D(!1), J(!1)
                }, le = () => {
                    L(!1)
                }, ln = () => {
                    J(!1)
                }, ld = () => {
                    K(!1), D(!1), J(!1), L(!1), setTimeout(() => {
                        x.OK.scrollTo("sliders", {
                            duration: 1e3,
                            delay: 100,
                            smooth: "easeInOutQuart"
                        })
                    }, 1e3), $((0, j.Yw)(0))
                }, lc = () => {
                    K(!1), D(!1), J(!1), L(!1), setTimeout(() => {
                        x.OK.scrollTo("sliders", {
                            duration: 1e3,
                            delay: 100,
                            smooth: "easeInOutQuart"
                        })
                    }, 1e3), $((0, j.Yw)(1))
                };
                (0, c.useEffect)(() => {
                    la(U)
                }, [U]);
                let la = l => {
                    l && $((0, g.iB)({
                        search: l
                    }))
                };
                (0, c.useEffect)(() => {}, [A]);
                let {
                    header: lo
                } = (0, u.v9)(l => l.home), lh = null == lo ? void 0 : null === (l = lo.header) || void 0 === l ? void 0 : null === (i = l[0]) || void 0 === i ? void 0 : i.logo[0], lr = null == lo ? void 0 : null === (s = lo.header) || void 0 === s ? void 0 : null === (h = s[0]) || void 0 === h ? void 0 : h.logo[1], lt = null == lo ? void 0 : null === (t = lo.header) || void 0 === t ? void 0 : null === (p = t[0]) || void 0 === p ? void 0 : p.logo_link, lv = (null == A ? void 0 : null === (N = A.products) || void 0 === N ? void 0 : N.length) === 0 && (null == A ? void 0 : null === (_ = A.maincat) || void 0 === _ ? void 0 : _.length) === 0, lx = (null == ll ? void 0 : null === (k = ll.query) || void 0 === k ? void 0 : k.id) && ll.query.id.split("-"), lu = (null == lx ? void 0 : lx.length) > 0 ? null == lx ? void 0 : lx[0] : "";
                return (0, e.jsxs)("div", {
                    className: "main_headers",
                    children: [(0, e.jsxs)("div", {
                        className: "main_data",
                        children: [(0, e.jsx)("div", {
                            className: "main_header",
                            children: (0, e.jsx)(o.Z, {
                                expand: "lg",
                                onMouseEnter: li,
                                children: (0, e.jsx)(n.Z, {
                                    children: (0, e.jsxs)("div", {
                                        className: "main_header_com",
                                        children: [F ? (0, e.jsx)(v(), {
                                            href: "/",
                                            children: (0, e.jsx)(r(), {
                                                className: "logo",
                                                alt: "",
                                                src: lr,
                                                width: "114",
                                                height: "85"
                                            })
                                        }) : (0, e.jsx)(v(), {
                                            href: "/",
                                            children: (0, e.jsx)(r(), {
                                                className: "logo",
                                                src: lh,
                                                width: "114",
                                                height: "85"
                                            })
                                        }), (0, e.jsx)(o.Z.Toggle, {
                                            "aria-controls": "navbarScroll"
                                        }), (0, e.jsx)(o.Z.Collapse, {
                                            id: "navbarScroll",
                                            children: (0, e.jsx)(a.Z, {
                                                className: " m-auto my-2 my-lg-0 ".concat(F && "changeMenuColor"),
                                                style: {
                                                    maxHeight: "100px"
                                                },
                                                navbarScroll: !0,
                                                children: null == lo ? void 0 : null === (w = lo.header) || void 0 === w ? void 0 : null === (f = w[0]) || void 0 === f ? void 0 : null === (b = f.link) || void 0 === b ? void 0 : b.map((l, i) => {
                                                    let s = (null == l ? void 0 : l.link) && (null == l ? void 0 : l.link.split("-")),
                                                        n = (null == s ? void 0 : s.length) > 0 ? null == s ? void 0 : s[0] : "";
                                                    return (0, e.jsx)(v(), {
                                                        className: "".concat("/category/".concat(lu) === n ? "active" : "non_active"),
                                                        href: null == l ? void 0 : l.link,
                                                        children: null == l ? void 0 : l.title
                                                    }, i)
                                                })
                                            })
                                        }), (0, e.jsxs)("div", {
                                            className: "search_fields ".concat(F && "changebtn"),
                                            children: [(0, e.jsx)("div", {
                                                className: "search_icon",
                                                onMouseEnter: () => K(!0),
                                                children: F ? (0, e.jsx)(r(), {
                                                    src: "/images/blacksearch.png",
                                                    alt: "search",
                                                    width: 30,
                                                    height: 30
                                                }) : (0, e.jsx)(r(), {
                                                    src: "/images/search.png",
                                                    alt: "search",
                                                    width: 30,
                                                    height: 30
                                                })
                                            }), (0, e.jsx)("a", {
                                                href: "tel: 923103330109",
                                                children: (0, e.jsx)(d.Z, {
                                                    className: "call_us",
                                                    children: lt
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        }), (0, e.jsx)("div", {
                            className: "".concat(F ? "show" : "hide"),
                            onMouseEnter: () => K(!0),
                            onMouseLeave: () => K(!1),
                            children: (0, e.jsx)("div", {
                                className: "hover_search",
                                children: (0, e.jsx)(n.Z, {
                                    children: (0, e.jsxs)("div", {
                                        className: "search_item",
                                        children: [(0, e.jsxs)("div", {
                                            className: "search_main",
                                            children: [(0, e.jsx)("input", {
                                                type: "text",
                                                placeholder: "Search your product",
                                                value: U,
                                                onChange: l => V(l.target.value)
                                            }), (0, e.jsx)(r(), {
                                                src: "/images/blackarrow.png",
                                                alt: "search",
                                                width: 55,
                                                height: 55
                                            })]
                                        }), A && (0, e.jsxs)("div", {
                                            style: {
                                                display: "flex"
                                            },
                                            className: "srach_data",
                                            children: [(null == A ? void 0 : A.products) && (null == A ? void 0 : null === (y = A.products) || void 0 === y ? void 0 : y.length) > 0 && (null == U ? void 0 : U.length) > 0 && (0, e.jsxs)("div", {
                                                className: "main_class",
                                                style: {
                                                    width: "50%",
                                                    marginBottom: "40px"
                                                },
                                                children: [(0, e.jsx)("h1", {
                                                    style: {
                                                        marginBottom: "30px"
                                                    },
                                                    children: "Products"
                                                }), (0, e.jsx)("div", {
                                                    className: "hide_scroll",
                                                    style: {
                                                        maxHeight: "350px",
                                                        overflowY: "scroll",
                                                        paddingBottom: "40px"
                                                    },
                                                    children: A && (null == A ? void 0 : A.products) && (null == A ? void 0 : null === (C = A.products) || void 0 === C ? void 0 : C.length) > 0 && (null == A ? void 0 : null === (S = A.products) || void 0 === S ? void 0 : S.map((l, i) => (0, e.jsx)("div", {
                                                        children: (0, e.jsx)(v(), {
                                                            style: {
                                                                color: "black"
                                                            },
                                                            href: "/".concat(null == l ? void 0 : l.slug),
                                                            children: (0, e.jsx)("p", {
                                                                children: null == l ? void 0 : l.title
                                                            })
                                                        })
                                                    }, i)))
                                                })]
                                            }), (null == A ? void 0 : null === (Z = A.maincat) || void 0 === Z ? void 0 : Z.length) > 0 && (null == U ? void 0 : U.length) > 0 && (0, e.jsxs)("div", {
                                                style: {
                                                    width: "50%",
                                                    marginBottom: "40px"
                                                },
                                                children: [(0, e.jsx)("h1", {
                                                    style: {
                                                        marginBottom: "30px"
                                                    },
                                                    children: "Categories"
                                                }), (0, e.jsx)("div", {
                                                    className: "hide_scroll",
                                                    style: {
                                                        maxHeight: "350px",
                                                        overflowY: "scroll",
                                                        paddingBottom: "40px"
                                                    },
                                                    children: A && (null == A ? void 0 : null === (B = A.maincat) || void 0 === B ? void 0 : B.length) > 0 && (null == A ? void 0 : null === (E = A.maincat) || void 0 === E ? void 0 : E.map((l, i) => (0, e.jsx)("div", {
                                                        children: (0, e.jsx)(v(), {
                                                            style: {
                                                                color: "black"
                                                            },
                                                            href: "/category/".concat(null == l ? void 0 : l.button_link, "-").concat(null == l ? void 0 : l.main_slug),
                                                            children: (0, e.jsx)("p", {
                                                                children: null == l ? void 0 : l.name
                                                            })
                                                        })
                                                    }, i)))
                                                })]
                                            })]
                                        }), lv ? (0, e.jsx)("p", {
                                            style: {
                                                textAlign: "center",
                                                fontSize: "40px"
                                            },
                                            children: "No Product Found"
                                        }) : ""]
                                    })
                                })
                            })
                        })]
                    }), (0, e.jsx)(n.Z, {
                        children: (0, e.jsx)("div", {
                            className: "responsive_header  ".concat(z ? "index0" : "index1"),
                            children: (0, e.jsxs)("div", {
                                className: "topbar",
                                children: [(0, e.jsx)("div", {
                                    className: "logo",
                                    children: R ? (0, e.jsxs)(v(), {
                                        href: "/",
                                        children: [" ", (0, e.jsx)(r(), {
                                            src: "/images/logoblack.png",
                                            alt: "logo",
                                            width: 64,
                                            height: 48
                                        })]
                                    }) : (0, e.jsx)(v(), {
                                        href: "/",
                                        children: (0, e.jsx)(r(), {
                                            src: "/images/biotech.png",
                                            alt: "logo",
                                            width: 64,
                                            height: 48
                                        })
                                    })
                                }), (0, e.jsxs)("div", {
                                    className: "icons",
                                    children: [(0, e.jsx)("div", {
                                        onClick: () => D(!R),
                                        children: R ? (0, e.jsx)(r(), {
                                            src: "/images/blacksearch.png",
                                            alt: "search",
                                            width: 27,
                                            height: 27
                                        }) : (0, e.jsx)(r(), {
                                            src: "/images/search.png",
                                            alt: "search",
                                            width: 27,
                                            height: 27
                                        })
                                    }), (0, e.jsx)("div", {
                                        children: R ? (0, e.jsx)(r(), {
                                            src: "/images/icons/hamber.png",
                                            width: 27,
                                            height: 16,
                                            alt: "menu",
                                            onClick: ls
                                        }) : (0, e.jsx)(r(), {
                                            src: "/images/icons/menu.png",
                                            width: 27,
                                            height: 16,
                                            alt: "menu",
                                            onClick: ls
                                        })
                                    })]
                                })]
                            })
                        })
                    }), (0, e.jsx)("div", {
                        className: "".concat(R ? "show_res" : "hide_res"),
                        children: (0, e.jsx)("div", {
                            className: "hover_search2",
                            children: (0, e.jsx)(n.Z, {
                                children: (0, e.jsxs)("div", {
                                    className: "search_item",
                                    children: [(0, e.jsx)("div", {
                                        className: "search_main",
                                        children: (0, e.jsx)("input", {
                                            type: "text",
                                            placeholder: "Search your product",
                                            value: U,
                                            onChange: l => V(l.target.value)
                                        })
                                    }), (null == A ? void 0 : null === (P = A.products) || void 0 === P ? void 0 : P.length) > 0 && (0, e.jsxs)("div", {
                                        className: "srach_data",
                                        children: [(0, e.jsxs)("div", {
                                            children: [(0, e.jsx)("h1", {
                                                children: "Products"
                                            }), (0, e.jsx)("div", {
                                                children: A && (null == A ? void 0 : A.products) && (null == A ? void 0 : null === (T = A.products) || void 0 === T ? void 0 : T.map((l, i) => (0, e.jsx)("div", {
                                                    children: (0, e.jsx)(v(), {
                                                        href: "/".concat(null == l ? void 0 : l.slug),
                                                        children: (0, e.jsx)("p", {
                                                            style: {
                                                                color: "black"
                                                            },
                                                            children: null == l ? void 0 : l.title
                                                        })
                                                    })
                                                }, i)))
                                            })]
                                        }), (0, e.jsxs)("div", {
                                            children: [(0, e.jsx)("h1", {
                                                children: "Categories"
                                            }), (0, e.jsx)("div", {
                                                children: A && A.maincat && (null == A ? void 0 : null === (M = A.maincat) || void 0 === M ? void 0 : M.map((l, i) => (0, e.jsx)("div", {
                                                    children: (0, e.jsx)("p", {
                                                        children: l.name
                                                    })
                                                }, i)))
                                            })]
                                        })]
                                    }), lv ? (0, e.jsx)("p", {
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
                    }), (0, e.jsxs)("div", {
                        className: "".concat(G ? "show_res2" : "hide_res2"),
                        children: [(0, e.jsxs)("div", {
                            className: "topbar topbar3",
                            children: [(0, e.jsx)("div", {
                                className: "logo",
                                children: G ? (0, e.jsx)(v(), {
                                    href: "/",
                                    children: (0, e.jsx)(r(), {
                                        src: "/images/logoblack.png",
                                        alt: "logo",
                                        width: 64,
                                        height: 48
                                    })
                                }) : ""
                            }), (0, e.jsxs)("div", {
                                className: "icons",
                                children: [(0, e.jsx)("div", {
                                    onClick: () => J(!G),
                                    children: G ? (0, e.jsx)(r(), {
                                        src: "/images/blacksearch.png",
                                        alt: "search",
                                        width: 27,
                                        height: 27
                                    }) : ""
                                }), (0, e.jsx)("div", {
                                    children: G ? (0, e.jsx)(r(), {
                                        src: "/images/icons/blackcross.png",
                                        width: 16,
                                        height: 16,
                                        alt: "menu",
                                        onClick: ln
                                    }) : ""
                                })]
                            })]
                        }), (0, e.jsx)("div", {
                            className: "hover_search3",
                            children: (0, e.jsx)("div", {
                                className: "search_item",
                                children: (0, e.jsxs)(n.Z, {
                                    children: [(0, e.jsx)("input", {
                                        type: "text",
                                        placeholder: "Search your product",
                                        value: U,
                                        onChange: l => V(l.target.value)
                                    }), (0, e.jsx)(r(), {
                                        src: "/images/blackarrow.png",
                                        alt: "search",
                                        width: 30,
                                        height: 30
                                    })]
                                })
                            })
                        })]
                    }), (0, e.jsx)("div", {
                        className: "mobile_navigation ".concat(q ? "showed" : "hidden"),
                        children: (0, e.jsxs)("div", {
                            children: [(0, e.jsxs)("div", {
                                className: "topbar topbar3",
                                children: [(0, e.jsx)("div", {
                                    className: "logo",
                                    children: (0, e.jsx)(v(), {
                                        href: "/",
                                        children: (0, e.jsx)(r(), {
                                            src: "/images/B_logo.png",
                                            alt: "logo",
                                            width: 64,
                                            height: 48
                                        })
                                    })
                                }), (0, e.jsx)("div", {
                                    className: "icons",
                                    children: (0, e.jsx)("div", {
                                        onClick: le,
                                        children: (0, e.jsx)(r(), {
                                            src: "/images/icons/cross.png",
                                            width: 16,
                                            height: 16,
                                            alt: "menu"
                                        })
                                    })
                                })]
                            }), (0, e.jsxs)("div", {
                                className: "menuss",
                                children: [(0, e.jsxs)("div", {
                                    children: [(0, e.jsxs)("h4", {
                                        children: ["Need Help", " ", (0, e.jsx)("span", {
                                            children: (0, e.jsx)(r(), {
                                                src: "/images/icons/question.svg",
                                                alt: "",
                                                width: 10,
                                                height: 10
                                            })
                                        })]
                                    }), (0, e.jsx)("hr", {}), (0, e.jsx)("ul", {
                                        children: (null == lo ? void 0 : null === (H = lo.header) || void 0 === H ? void 0 : null === (I = H[0]) || void 0 === I ? void 0 : I.link) && (null == lo ? void 0 : null === (O = lo.header) || void 0 === O ? void 0 : null === (Q = O[0]) || void 0 === Q ? void 0 : null === (Y = Q.link) || void 0 === Y ? void 0 : Y.map((l, i) => (0, e.jsxs)(v(), {
                                            className: "".concat(ll.asPath === "".concat(null == l ? void 0 : l.link) ? "active" : "non_active"),
                                            href: null == l ? void 0 : l.link,
                                            children: [" ", null == l ? void 0 : l.title]
                                        }, i)))
                                    }), (0, e.jsx)("hr", {})]
                                }), (0, e.jsxs)("div", {
                                    className: "Quick_links",
                                    children: [(0, e.jsx)("h4", {
                                        children: "Quick Links"
                                    }), (0, e.jsx)("div", {
                                        children: (0, e.jsxs)("div", {
                                            className: "Links",
                                            children: [(0, e.jsx)("h3", {
                                                onClick: ld,
                                                children: "Packaging"
                                            }), (0, e.jsx)("h3", {
                                                onClick: lc,
                                                children: "Stickers"
                                            })]
                                        })
                                    })]
                                }), (0, e.jsx)("div", {
                                    className: "social_links",
                                    children: (0, e.jsxs)("div", {
                                        className: "social_icons",
                                        children: [(0, e.jsx)(v(), {
                                            href: "",
                                            children: (0, e.jsx)("div", {
                                                className: "icons_fb",
                                                children: (0, e.jsx)(r(), {
                                                    src: "/images/icons/fb.png",
                                                    alt: "fb_icon",
                                                    width: 9.28,
                                                    height: 17.24
                                                })
                                            })
                                        }), (0, e.jsx)(v(), {
                                            href: "",
                                            children: (0, e.jsx)("div", {
                                                className: "icons_insta",
                                                children: (0, e.jsx)(r(), {
                                                    src: "/images/icons/insta.png",
                                                    alt: "insta_icon",
                                                    width: 14.43,
                                                    height: 14.43
                                                })
                                            })
                                        }), (0, e.jsx)(v(), {
                                            href: "",
                                            children: (0, e.jsx)("div", {
                                                className: "icons_linked",
                                                children: (0, e.jsx)(r(), {
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