(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        5557: function(i, e, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return s(8995)
            }])
        },
        6516: function(i, e, s) {
            "use strict";
            var l = s(5893),
                n = s(7294);
            s(5675);
            var o = s(1664),
                a = s.n(o);
            s(4692), s(5083), s(6066);
            var t = s(7005);
            e.Z = function() {
                let [i, e] = (0, n.useState)(1), [s, o] = (0, n.useState)({}), c = [{
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
                }], [d, r] = (0, n.useState)("");
                (0, n.useEffect)(() => {
                    var i, e;
                    (null == c ? void 0 : null === (i = c[0]) || void 0 === i ? void 0 : i.heading) && r(null == c ? void 0 : null === (e = c[0]) || void 0 === e ? void 0 : e.heading)
                }, [c]);
                let m = c && (null == c ? void 0 : c.find(i => i.heading === d)),
                    v = (null == m ? void 0 : m.products) ? null == m ? void 0 : m.products : [];
                return (0, l.jsx)("div", {
                    className: "main-work",
                    children: (0, l.jsx)("div", {
                        className: "work-data",
                        children: (0, l.jsx)("div", {
                            className: "work",
                            children: (0, l.jsxs)("div", {
                                style: {
                                    paddingTop: "60px",
                                    textAlign: "center"
                                },
                                children: [(0, l.jsx)(t.Z, {
                                    direction: "right",
                                    children: (0, l.jsx)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: v.slice(0, 12).map((i, e) => (0, l.jsx)("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "center",
                                                marginRight: "15px"
                                            },
                                            children: (0, l.jsx)("div", {
                                                className: "card",
                                                children: (0, l.jsx)("img", {
                                                    src: i.img,
                                                    alt: "product image"
                                                })
                                            })
                                        }, e))
                                    })
                                }), (0, l.jsx)("div", {
                                    style: {
                                        marginTop: "50px"
                                    },
                                    children: (0, l.jsxs)(a(), {
                                        href: "/our-work",
                                        children: [" ", (0, l.jsx)("button", {
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
        1650: function(i, e, s) {
            "use strict";
            var l = s(5893);
            s(7294), e.Z = function(i) {
                let {
                    image: e,
                    message: s,
                    color: n = "green"
                } = i;
                return (0, l.jsxs)("div", {
                    className: "message-container",
                    children: [(0, l.jsx)("img", {
                        src: e,
                        alt: "message"
                    }), "\xa0\xa0\xa0\xa0", (0, l.jsx)("p", {
                        className: "message-text",
                        style: {
                            color: "".concat(n)
                        },
                        children: s
                    })]
                })
            }
        },
        8995: function(i, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                __N_SSP: function() {
                    return S
                },
                default: function() {
                    return Z
                }
            });
            var l = s(5893),
                n = s(7294),
                o = s(682),
                a = s(5005),
                t = s(5675),
                c = s.n(t),
                d = s(1664),
                r = s.n(d),
                m = function() {
                    return (0, l.jsxs)("div", {
                        className: "main-Approchss ",
                        children: [(0, l.jsx)("div", {
                            className: "approchss_img",
                            children: (0, l.jsx)(c(), {
                                src: "/home/brand.png",
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "center"
                            })
                        }), (0, l.jsx)("div", {
                            className: "approchss_data",
                            children: (0, l.jsx)(o.Z, {
                                children: (0, l.jsxs)("div", {
                                    className: "approchss_data_inner",
                                    children: [(0, l.jsxs)("div", {
                                        className: "approch_datass",
                                        children: [(0, l.jsx)("h3", {
                                            className: "approch_heading",
                                            children: "Approch"
                                        }), (0, l.jsx)("h5", {
                                            className: "approch_title",
                                            children: "Our approach to every packaging is different."
                                        }), (0, l.jsx)("p", {
                                            className: "approch_para",
                                            children: "Every item of packaging is created just for you and your brand. We offer top class designs at affordable prices and fast turnarounds. From flyers and business cards to folded pamphlets, brochures and lot more! We design it all."
                                        }), (0, l.jsx)(r(), {
                                            href: "/quote",
                                            children: (0, l.jsx)(a.Z, {
                                                style: {
                                                    textTransform: "uppercase"
                                                },
                                                children: "Get a quote"
                                            })
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "image_sectionss",
                                        children: [(0, l.jsx)(c(), {
                                            className: " main",
                                            src: "/boxes.webp",
                                            layout: "fill",
                                            objectFit: "cover",
                                            objectPosition: "center"
                                        }), (0, l.jsx)("div", {
                                            className: "one",
                                            children: (0, l.jsx)(c(), {
                                                className: "",
                                                src: "/2.png",
                                                width: 146,
                                                height: 158
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "two",
                                            children: (0, l.jsx)(c(), {
                                                className: "",
                                                src: "/4.png",
                                                width: 146,
                                                height: 158
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "three",
                                            children: (0, l.jsx)(c(), {
                                                className: "",
                                                src: "/3.png",
                                                width: 146,
                                                height: 158
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "four",
                                            children: (0, l.jsx)(c(), {
                                                className: "",
                                                src: "/1.png",
                                                width: 146,
                                                height: 158
                                            })
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                },
                v = function() {
                    return (0, l.jsx)("div", {
                        className: "main-map",
                        children: (0, l.jsx)("div", {
                            id: "office",
                            children: (0, l.jsx)("div", {
                                className: "padding_adjust",
                                children: (0, l.jsx)("iframe", {
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
                u = s(6483),
                g = s(9473),
                h = s(1632);
            s(1163), s(308);
            let j = i => {
                let {
                    data: e,
                    show: s,
                    hovers: n,
                    handleSelect: o,
                    handleHover: a,
                    setHovers: t,
                    showImage: d,
                    iconSize: r
                } = i, m = e === s, v = n === e && !m;
                return (0, l.jsxs)("div", {
                    className: "sections ".concat(m ? "selected_section" : ""),
                    onClick: () => o(e),
                    onMouseEnter: () => a(e),
                    onMouseLeave: () => t(""),
                    children: [v && (0, l.jsx)("div", {
                        className: "side_line",
                        children: (0, l.jsx)(c(), {
                            src: "/images/line.png",
                            alt: "icon",
                            layout: "fill",
                            objectFit: "cover",
                            objectPosition: "center"
                        })
                    }), v && (0, l.jsx)("div", {
                        className: "icons",
                        style: {
                            width: "35px"
                        },
                        children: (0, l.jsx)("img", {
                            className: "aboutimg_para",
                            src: d ? null == e ? void 0 : e.icon_image : null == e ? void 0 : e.icon,
                            style: {
                                width: "".concat(r, "px")
                            },
                            alt: "icon",
                            layout: "fill",
                            objectFit: "cover",
                            objectPosition: "center"
                        })
                    }), m && (0, l.jsx)("div", {
                        className: "side_line",
                        children: (0, l.jsx)(c(), {
                            src: "/images/line.png",
                            alt: "icon",
                            layout: "fill",
                            objectFit: "cover",
                            objectPosition: "center"
                        })
                    }), m && (0, l.jsx)("div", {
                        className: "icons",
                        style: {
                            width: "35px"
                        },
                        children: (0, l.jsx)("img", {
                            className: "aboutimg_para",
                            src: d ? null == e ? void 0 : e.icon_image : null == e ? void 0 : e.icon,
                            style: {
                                width: "".concat(r, "px")
                            },
                            alt: "icon",
                            layout: "fill",
                            objectFit: "cover",
                            objectPosition: "center"
                        })
                    }), e && (0, l.jsx)("h4", {
                        className: "".concat(m || v ? "head_selected" : "head"),
                        children: e.heading || e.name
                    })]
                })
            };
            var x = function() {
                    var i, e, s, o, t, d, m, v, x, p, b, _, N, w, f, y, k, P, I, F, S, Z, C, T, A, E, M, L, q, z, H, O, D, W, B, R, G, V, U, Q, X, Y, K, J, $, ii, ie, is, il, io, ia, it, ic, id, ir, im, iv, iu, ig, ih, ij, ix, ip, ib, i_, iN, iw, iy, ik, iP, iI, iF, iS, iZ, iC, iT, iA, iE, iM, iL, iq;
                    let [iz, iH] = (0, n.useState)(""), [iO, iD] = (0, n.useState)(!1), [iW, iB] = (0, n.useState)({}), [iR, iG] = (0, n.useState)([]), iV = (0, g.I0)(), {
                        service: iU,
                        SlideIndex: iQ
                    } = (0, g.v9)(i => i.home);
                    (0, n.useEffect)(() => {
                        (null == iU ? void 0 : iU[0]) && (iG(iU), iB(null == iU ? void 0 : iU[0]))
                    }, [iU]);
                    let iX = i => {
                            iB(i)
                        },
                        iY = i => {
                            iH(i)
                        },
                        [iK, iJ] = (0, n.useState)(!1),
                        i$ = (i, e) => {},
                        i0 = () => {
                            setTimeout(() => {
                                iJ(!0)
                            }, 700), setTimeout(() => {
                                iJ(!1)
                            }, 1100), iV((0, h.Yw)(iQ < 5 ? iQ + 1 : 0))
                        },
                        i1 = () => {
                            setTimeout(() => {
                                iJ(!0)
                            }, 700), setTimeout(() => {
                                iJ(!1)
                            }, 1100), iV((0, h.Yw)(0 === iQ ? 5 : iQ - 1))
                        },
                        i5 = (null == iW ? void 0 : iW.button_link) !== "flyers" && (null == iW ? void 0 : iW.button_link) !== "stationary";
                    return console.log("serviceData", iW), (0, l.jsxs)("div", {
                        style: {
                            position: "relative"
                        },
                        className: "top_main_serve",
                        children: [(0, l.jsx)("div", {
                            className: "",
                            style: {
                                zIndex: "22222222",
                                position: "inherit"
                            },
                            children: (0, l.jsx)(c(), {
                                src: "/bluebg3.png",
                                alt: "",
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "center"
                            })
                        }), (0, l.jsx)("div", {
                            className: "main-service",
                            children: (0, l.jsx)("div", {
                                className: "container",
                                children: (0, l.jsxs)("div", {
                                    className: "serve_data",
                                    children: [(0, l.jsx)("div", {
                                        className: "top_headings ",
                                        children: (0, l.jsx)("h3", {
                                            children: "Our Services"
                                        })
                                    }), (0, l.jsxs)("div", {
                                        className: "main_sections",
                                        children: [(0, l.jsx)("div", {
                                            className: "section1",
                                            children: (0, l.jsxs)("div", {
                                                className: "section1_inner",
                                                children: [(0, l.jsx)(j, {
                                                    data: null == iR ? void 0 : iR[0],
                                                    show: iW,
                                                    hovers: iz,
                                                    handleSelect: iX,
                                                    showImage: !0,
                                                    iconSize: "30",
                                                    handleHover: iY,
                                                    setHovers: iH
                                                }), (0, l.jsx)(j, {
                                                    data: null == iR ? void 0 : iR[5],
                                                    show: iW,
                                                    hovers: iz,
                                                    showImage: !0,
                                                    handleSelect: iX,
                                                    handleHover: iY,
                                                    iconSize: "32",
                                                    setHovers: iH
                                                }), (0, l.jsx)(j, {
                                                    data: null == iR ? void 0 : null === (i = iR[0]) || void 0 === i ? void 0 : null === (e = i.categories) || void 0 === e ? void 0 : e[0],
                                                    show: iW,
                                                    hovers: iz,
                                                    handleSelect: iX,
                                                    handleHover: iY,
                                                    setHovers: iH,
                                                    iconSize: "45",
                                                    showImage: !1
                                                }), (0, l.jsx)(j, {
                                                    data: null == iR ? void 0 : null === (s = iR[0]) || void 0 === s ? void 0 : null === (o = s.categories) || void 0 === o ? void 0 : o[1],
                                                    show: iW,
                                                    hovers: iz,
                                                    handleSelect: iX,
                                                    handleHover: iY,
                                                    iconSize: "45",
                                                    setHovers: iH,
                                                    showImage: !1
                                                }), (0, l.jsx)(j, {
                                                    data: null == iR ? void 0 : null === (t = iR[0]) || void 0 === t ? void 0 : null === (d = t.categories) || void 0 === d ? void 0 : d[3],
                                                    show: iW,
                                                    hovers: iz,
                                                    handleSelect: iX,
                                                    handleHover: iY,
                                                    setHovers: iH,
                                                    iconSize: "45",
                                                    showImage: !1
                                                }), (0, l.jsx)(j, {
                                                    data: null == iR ? void 0 : null === (m = iR[0]) || void 0 === m ? void 0 : null === (v = m.categories) || void 0 === v ? void 0 : v[2],
                                                    show: iW,
                                                    hovers: iz,
                                                    handleSelect: iX,
                                                    handleHover: iY,
                                                    setHovers: iH,
                                                    iconSize: "45",
                                                    showImage: !1
                                                })]
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "section2",
                                            children: [(0, l.jsxs)("div", {
                                                className: "img_section",
                                                children: [(0, l.jsx)("img", {
                                                    src: null == iW ? void 0 : iW.background_image,
                                                    alt: null == iW ? void 0 : iW.heading,
                                                    width: 700,
                                                    height: 356,
                                                    layout: "responsive"
                                                }), (0, l.jsx)("h3", {
                                                    children: null == iW ? void 0 : iW.heading
                                                }), (0, l.jsx)("h3", {
                                                    children: null == iW ? void 0 : iW.name
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "bottom_lists",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "bottom_lists_inner",
                                                    children: [(null == iW ? void 0 : iW.sub_titles) && Array.isArray(null == iW ? void 0 : iW.sub_titles) && (null == iW ? void 0 : null === (x = iW.sub_titles) || void 0 === x ? void 0 : x.map((i, e) => (0, l.jsx)(l.Fragment, {
                                                        children: (null == iW || iW.button_link, (null == i ? void 0 : i.name) !== "- Cbd Boxes" && (0, l.jsx)(r(), {
                                                            href: "/category/".concat(null == iW ? void 0 : iW.button_link, "-").concat(null == i ? void 0 : i.slug, " "),
                                                            children: (0, l.jsx)("p", {
                                                                children: null == i ? void 0 : i.name
                                                            }, e)
                                                        }, e))
                                                    }))), (null == iW ? void 0 : iW.category_products) && (null == iW ? void 0 : null === (p = iW.category_products) || void 0 === p ? void 0 : p.slice(0, 7).map((i, e) => (0, l.jsxs)(r(), {
                                                        href: null == i ? void 0 : i.slug,
                                                        children: ["  ", (0, l.jsxs)("p", {
                                                            children: ["- ", null == i ? void 0 : i.title]
                                                        })]
                                                    }, e)))]
                                                }), (0, l.jsx)(r(), {
                                                    href: (null == iW ? void 0 : iW.button_link) && i5 ? "/category/".concat(null == iW ? void 0 : iW.button_link, "-").concat(null == iW ? void 0 : null === (b = iW.categories) || void 0 === b ? void 0 : null === (_ = b[0]) || void 0 === _ ? void 0 : _.main_slug) : "/category/packaging-".concat(null == iW ? void 0 : iW.main_slug),
                                                    children: (0, l.jsx)(a.Z, {
                                                        className: "btn1",
                                                        onMouseEnter: () => iD(!0),
                                                        onMouseLeave: () => iD(!1),
                                                        children: "View More"
                                                    })
                                                })]
                                            })]
                                        })]
                                    }), (0, l.jsx)("div", {
                                        className: "main_show_slide",
                                        id: "sliders",
                                        children: (0, l.jsxs)(u.Z, {
                                            activeIndex: iQ,
                                            onSelect: i$,
                                            nextIcon: (0, l.jsx)("div", {
                                                children: (0, l.jsx)(c(), {
                                                    src: "/images/5.png",
                                                    onClick: i0,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    objectPosition: "center"
                                                })
                                            }),
                                            prevIcon: (0, l.jsx)("div", {
                                                children: (0, l.jsx)(c(), {
                                                    src: "/images/6.png",
                                                    onClick: i1,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    objectPosition: "center"
                                                })
                                            }),
                                            interval: null,
                                            children: [(0, l.jsxs)(u.Z.Item, {
                                                className: "section2",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "img_section",
                                                    children: [(0, l.jsx)("img", {
                                                        src: null == iR ? void 0 : null === (N = iR[0]) || void 0 === N ? void 0 : N.background_image,
                                                        alt: "",
                                                        layout: "fill",
                                                        objectFit: "cover",
                                                        objectPosition: "center"
                                                    }), (0, l.jsx)("h3", {
                                                        children: null == iR ? void 0 : null === (w = iR[0]) || void 0 === w ? void 0 : w.heading
                                                    })]
                                                }), (0, l.jsxs)("div", {
                                                    className: "bottom_lists",
                                                    children: [(0, l.jsx)("div", {
                                                        className: "bottom_lists_inner",
                                                        children: (null == iR ? void 0 : null === (f = iR[0]) || void 0 === f ? void 0 : f.sub_titles) && (null == iR ? void 0 : null === (y = iR[0]) || void 0 === y ? void 0 : null === (k = y.sub_titles) || void 0 === k ? void 0 : k.map((i, e) => (0, l.jsx)(l.Fragment, {
                                                            children: (0, l.jsxs)(r(), {
                                                                href: "/category/".concat(null == iW ? void 0 : iW.button_link, "-").concat(null == i ? void 0 : i.slug, " "),
                                                                children: [" ", (0, l.jsx)("p", {
                                                                    children: null == i ? void 0 : i.name
                                                                })]
                                                            }, e)
                                                        })))
                                                    }), (0, l.jsx)(r(), {
                                                        href: (null == iW ? void 0 : iW.button_link) && i5 ? "/category/".concat(null == iW ? void 0 : iW.button_link, "-").concat(null == iW ? void 0 : null === (P = iW.categories) || void 0 === P ? void 0 : null === (I = P[0]) || void 0 === I ? void 0 : I.main_slug) : "/category/packaging-".concat(null == iW ? void 0 : iW.main_slug, " "),
                                                        children: (0, l.jsx)(a.Z, {
                                                            className: "btn1",
                                                            onMouseEnter: () => iD(!0),
                                                            onMouseLeave: () => iD(!1),
                                                            children: "View More"
                                                        })
                                                    })]
                                                })]
                                            }), (0, l.jsxs)(u.Z.Item, {
                                                className: "section2",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "img_section",
                                                    children: [(0, l.jsx)("img", {
                                                        src: null == iR ? void 0 : null === (F = iR[5]) || void 0 === F ? void 0 : F.background_image,
                                                        alt: "",
                                                        layout: "fill",
                                                        objectFit: "cover",
                                                        objectPosition: "center"
                                                    }), (0, l.jsx)("h3", {
                                                        children: null == iR ? void 0 : null === (S = iR[5]) || void 0 === S ? void 0 : S.heading
                                                    })]
                                                }), (0, l.jsxs)("div", {
                                                    className: "bottom_lists",
                                                    children: [(0, l.jsx)("div", {
                                                        className: "bottom_lists_inner",
                                                        children: (null == iR ? void 0 : null === (Z = iR[5]) || void 0 === Z ? void 0 : Z.sub_titles) && (null == iR ? void 0 : null === (C = iR[5]) || void 0 === C ? void 0 : null === (T = C.sub_titles) || void 0 === T ? void 0 : T.map((i, e) => (0, l.jsx)(l.Fragment, {
                                                            children: (0, l.jsxs)(r(), {
                                                                href: "/category/".concat(null == iW ? void 0 : iW.button_link, "-").concat(null == i ? void 0 : i.slug, " "),
                                                                children: [" ", (0, l.jsx)("p", {
                                                                    children: null == i ? void 0 : i.name
                                                                })]
                                                            }, e)
                                                        })))
                                                    }), ((null == iW ? void 0 : iW.button_link) === "packaging" || (null == iW ? void 0 : iW.button_link) === "stickerandlabels") && (0, l.jsx)(r(), {
                                                        href: (null == iR ? void 0 : null === (A = iR[5]) || void 0 === A ? void 0 : A.button_link) && i5 ? "/category/".concat(null == iR ? void 0 : null === (E = iR[5]) || void 0 === E ? void 0 : E.button_link, "-").concat(null == iR ? void 0 : null === (M = iR[5]) || void 0 === M ? void 0 : null === (L = M.categories) || void 0 === L ? void 0 : null === (q = L[0]) || void 0 === q ? void 0 : q.main_slug) : "/category/".concat(null == iW ? void 0 : iW.button_link, " "),
                                                        children: (0, l.jsx)(a.Z, {
                                                            onMouseEnter: () => iD(!0),
                                                            onMouseLeave: () => iD(!1),
                                                            children: null == iW ? void 0 : iW.button_text
                                                        })
                                                    })]
                                                })]
                                            }), (0, l.jsxs)(u.Z.Item, {
                                                className: "section2",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "img_section",
                                                    children: [(0, l.jsx)("img", {
                                                        src: null == iR ? void 0 : null === (z = iR[0]) || void 0 === z ? void 0 : null === (H = z.categories) || void 0 === H ? void 0 : null === (O = H[0]) || void 0 === O ? void 0 : O.background_image,
                                                        alt: "",
                                                        layout: "fill",
                                                        objectFit: "cover",
                                                        objectPosition: "center"
                                                    }), (0, l.jsx)("h3", {
                                                        children: null == iR ? void 0 : null === (D = iR[0]) || void 0 === D ? void 0 : null === (W = D.categories) || void 0 === W ? void 0 : null === (B = W[0]) || void 0 === B ? void 0 : B.name
                                                    })]
                                                }), (0, l.jsx)("div", {
                                                    className: "bottom_lists",
                                                    children: (0, l.jsx)("div", {
                                                        className: "bottom_lists_inner",
                                                        children: (null == iR ? void 0 : null === (R = iR[0]) || void 0 === R ? void 0 : null === (G = R.categories) || void 0 === G ? void 0 : null === (V = G[0]) || void 0 === V ? void 0 : V.category_products) && (null == iR ? void 0 : null === (U = iR[0]) || void 0 === U ? void 0 : null === (Q = U.categories) || void 0 === Q ? void 0 : null === (X = Q[0]) || void 0 === X ? void 0 : null === (Y = X.category_products) || void 0 === Y ? void 0 : Y.slice(0, 7).map((i, e) => (0, l.jsx)(l.Fragment, {
                                                            children: (0, l.jsxs)(r(), {
                                                                href: null == i ? void 0 : i.slug,
                                                                children: [" ", (0, l.jsxs)("p", {
                                                                    children: ["- ", null == i ? void 0 : i.title]
                                                                })]
                                                            }, e)
                                                        })))
                                                    })
                                                })]
                                            }), (0, l.jsxs)(u.Z.Item, {
                                                className: "section2",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "img_section",
                                                    children: [(0, l.jsx)("img", {
                                                        src: null == iR ? void 0 : null === (K = iR[0]) || void 0 === K ? void 0 : null === (J = K.categories) || void 0 === J ? void 0 : null === ($ = J[2]) || void 0 === $ ? void 0 : $.background_image,
                                                        alt: "",
                                                        layout: "fill",
                                                        objectFit: "cover",
                                                        objectPosition: "center"
                                                    }), (0, l.jsx)("h3", {
                                                        children: null == iR ? void 0 : null === (ii = iR[0]) || void 0 === ii ? void 0 : null === (ie = ii.categories) || void 0 === ie ? void 0 : null === (is = ie[2]) || void 0 === is ? void 0 : is.name
                                                    })]
                                                }), (0, l.jsx)("div", {
                                                    className: "bottom_lists",
                                                    children: (0, l.jsx)("div", {
                                                        className: "bottom_lists_inner",
                                                        children: (null == iR ? void 0 : null === (il = iR[0]) || void 0 === il ? void 0 : null === (io = il.categories) || void 0 === io ? void 0 : null === (ia = io[1]) || void 0 === ia ? void 0 : ia.category_products) && (null == iR ? void 0 : null === (it = iR[0]) || void 0 === it ? void 0 : null === (ic = it.categories) || void 0 === ic ? void 0 : null === (id = ic[1]) || void 0 === id ? void 0 : null === (ir = id.category_products) || void 0 === ir ? void 0 : ir.slice(0, 7).map((i, e) => (0, l.jsx)(l.Fragment, {
                                                            children: (0, l.jsxs)(r(), {
                                                                href: null == i ? void 0 : i.slug,
                                                                children: [" ", (0, l.jsxs)("p", {
                                                                    children: ["- ", null == i ? void 0 : i.title]
                                                                })]
                                                            }, e)
                                                        })))
                                                    })
                                                })]
                                            }), (0, l.jsxs)(u.Z.Item, {
                                                className: "section2",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "img_section",
                                                    children: [(0, l.jsx)("img", {
                                                        src: null == iR ? void 0 : null === (im = iR[5]) || void 0 === im ? void 0 : null === (iv = im.categories) || void 0 === iv ? void 0 : null === (iu = iv[0]) || void 0 === iu ? void 0 : iu.background_image,
                                                        alt: "",
                                                        layout: "fill",
                                                        objectFit: "cover",
                                                        objectPosition: "center"
                                                    }), (0, l.jsx)("h3", {
                                                        children: null == iR ? void 0 : null === (ig = iR[5]) || void 0 === ig ? void 0 : null === (ih = ig.categories) || void 0 === ih ? void 0 : null === (ij = ih[0]) || void 0 === ij ? void 0 : ij.name
                                                    })]
                                                }), (0, l.jsx)("div", {
                                                    className: "bottom_lists",
                                                    children: (0, l.jsx)("div", {
                                                        className: "bottom_lists_inner",
                                                        children: (null == iR ? void 0 : null === (ix = iR[5]) || void 0 === ix ? void 0 : null === (ip = ix.categories) || void 0 === ip ? void 0 : null === (ib = ip[0]) || void 0 === ib ? void 0 : ib.category_products) && (null == iR ? void 0 : null === (i_ = iR[5]) || void 0 === i_ ? void 0 : null === (iN = i_.categories) || void 0 === iN ? void 0 : null === (iw = iN[0]) || void 0 === iw ? void 0 : null === (iy = iw.category_products) || void 0 === iy ? void 0 : iy.slice(0, 7).map((i, e) => (0, l.jsx)(l.Fragment, {
                                                            children: (0, l.jsxs)(r(), {
                                                                href: null == i ? void 0 : i.slug,
                                                                children: [" ", (0, l.jsxs)("p", {
                                                                    children: ["- ", null == i ? void 0 : i.title]
                                                                })]
                                                            }, e)
                                                        })))
                                                    })
                                                })]
                                            }), (0, l.jsxs)(u.Z.Item, {
                                                className: "section2",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "img_section",
                                                    children: [(0, l.jsx)("img", {
                                                        src: null == iR ? void 0 : null === (ik = iR[5]) || void 0 === ik ? void 0 : null === (iP = ik.categories) || void 0 === iP ? void 0 : null === (iI = iP[1]) || void 0 === iI ? void 0 : iI.background_image,
                                                        alt: "",
                                                        layout: "fill",
                                                        objectFit: "cover",
                                                        objectPosition: "center"
                                                    }), (0, l.jsx)("h3", {
                                                        children: null == iR ? void 0 : null === (iF = iR[5]) || void 0 === iF ? void 0 : null === (iS = iF.categories) || void 0 === iS ? void 0 : null === (iZ = iS[1]) || void 0 === iZ ? void 0 : iZ.name
                                                    })]
                                                }), (0, l.jsx)("div", {
                                                    className: "bottom_lists",
                                                    children: (0, l.jsx)("div", {
                                                        className: "bottom_lists_inner",
                                                        children: (null == iR ? void 0 : null === (iC = iR[5]) || void 0 === iC ? void 0 : null === (iT = iC.categories) || void 0 === iT ? void 0 : null === (iA = iT[1]) || void 0 === iA ? void 0 : iA.category_products) && (null == iR ? void 0 : null === (iE = iR[5]) || void 0 === iE ? void 0 : null === (iM = iE.categories) || void 0 === iM ? void 0 : null === (iL = iM[1]) || void 0 === iL ? void 0 : null === (iq = iL.category_products) || void 0 === iq ? void 0 : iq.slice(0, 7).map((i, e) => (0, l.jsx)(l.Fragment, {
                                                            children: (0, l.jsxs)(r(), {
                                                                href: null == i ? void 0 : i.slug,
                                                                children: [" ", (0, l.jsxs)("p", {
                                                                    children: ["- ", null == i ? void 0 : i.title]
                                                                })]
                                                            }, e)
                                                        })))
                                                    })
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), (0, l.jsx)("div", {
                            className: "",
                            style: {
                                zIndex: "22222222",
                                position: "inherit",
                                transform: "rotate(180deg)",
                                marginTop: "-2px"
                            },
                            children: (0, l.jsx)(c(), {
                                src: "/bluebg3.png",
                                alt: "",
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "center"
                            })
                        })]
                    })
                },
                p = s(6516),
                b = s(9008),
                _ = s.n(b),
                N = s(7745),
                w = s(5955),
                f = s(4051),
                y = s(1555);
            s(6066), s(4692), s(5083);
            var k = s(7005),
                P = function() {
                    return (0, l.jsxs)("div", {
                        children: [(0, l.jsx)("div", {
                            className: "main-about",
                            children: (0, l.jsxs)("div", {
                                className: "aboutdata_img",
                                children: [(0, l.jsxs)("div", {
                                    className: "about_section",
                                    children: [(0, l.jsx)("h1", {
                                        children: " About Us"
                                    }), (0, l.jsx)("p", {
                                        children: "Welcome to the Biotech Packaging, we are designers and manufactures of bespoke packaging product. Biotech is full-service printing and fulfillment company. We can assist your organization with virtually any type of printed project and manage every step -- from pre-press to printing, finishing, fulfillment, and even a few web solutions."
                                    }), (0, l.jsxs)(f.Z, {
                                        children: [(0, l.jsxs)(y.Z, {
                                            xl: 3,
                                            md: 3,
                                            xs: 6,
                                            children: [(0, l.jsx)(c(), {
                                                className: "aboutimg_para",
                                                src: "/images/medal.png",
                                                alt: "Medal Image",
                                                width: 57,
                                                height: 57
                                            }), (0, l.jsx)("p", {
                                                className: "about_para",
                                                children: "Award winning UV Offset Printing Capabilities"
                                            })]
                                        }), (0, l.jsxs)(y.Z, {
                                            xl: 3,
                                            md: 3,
                                            xs: 6,
                                            children: [(0, l.jsx)(c(), {
                                                className: "aboutimg_para",
                                                src: "/images/printer.png",
                                                alt: "Printer Image",
                                                width: 57,
                                                height: 57
                                            }), (0, l.jsx)("p", {
                                                className: "about_para",
                                                children: "Green Printing Materials and Processes"
                                            })]
                                        }), (0, l.jsxs)(y.Z, {
                                            xl: 3,
                                            md: 3,
                                            xs: 6,
                                            children: [(0, l.jsx)(c(), {
                                                className: "aboutimg_para",
                                                src: "/images/circles.png",
                                                alt: "Printed in full color Image",
                                                width: 57,
                                                height: 57
                                            }), (0, l.jsx)("p", {
                                                className: "about_para",
                                                children: "Printed in full-color"
                                            })]
                                        }), (0, l.jsxs)(y.Z, {
                                            xl: 3,
                                            md: 3,
                                            xs: 6,
                                            children: [(0, l.jsx)(c(), {
                                                className: "aboutimg_para",
                                                src: "/images/double.png",
                                                alt: "Double Sided Image",
                                                width: 57,
                                                height: 57
                                            }), (0, l.jsx)("p", {
                                                className: "about_para",
                                                children: "Double-sided"
                                            })]
                                        }), (0, l.jsxs)(y.Z, {
                                            xl: 3,
                                            md: 3,
                                            xs: 6,
                                            children: [(0, l.jsx)(c(), {
                                                className: "aboutimg_para",
                                                src: "/images/shirt.png",
                                                alt: "Printing Shirt Image",
                                                width: 57,
                                                height: 57
                                            }), (0, l.jsx)("p", {
                                                className: "about_para",
                                                children: "Customized Web-to-Print Online Printing capabilities"
                                            })]
                                        }), (0, l.jsxs)(y.Z, {
                                            xl: 3,
                                            md: 3,
                                            xs: 6,
                                            children: [(0, l.jsx)(c(), {
                                                className: "aboutimg_para",
                                                src: "/images/colors.png",
                                                alt: "Advanced Color Image",
                                                width: 57,
                                                height: 57
                                            }), (0, l.jsx)("p", {
                                                className: "about_para",
                                                children: "Advanced Color Management and G7 Master Qualified"
                                            })]
                                        }), (0, l.jsxs)(y.Z, {
                                            xl: 3,
                                            md: 3,
                                            xs: 6,
                                            children: [(0, l.jsx)(c(), {
                                                className: "aboutimg_para",
                                                src: "/images/file.png",
                                                alt: "File Image",
                                                width: 57,
                                                height: 57
                                            }), (0, l.jsx)("p", {
                                                className: "about_para",
                                                children: "Variety of paper sizes"
                                            })]
                                        }), (0, l.jsxs)(y.Z, {
                                            xl: 3,
                                            md: 3,
                                            xs: 6,
                                            children: [(0, l.jsx)(c(), {
                                                className: "aboutimg_para",
                                                src: "/images/tick.png",
                                                alt: "Tick Image",
                                                width: 57,
                                                height: 57
                                            }), (0, l.jsx)("p", {
                                                className: "about_para",
                                                children: "Optional finishing"
                                            })]
                                        })]
                                    }), (0, l.jsx)(r(), {
                                        href: "/about-us",
                                        children: (0, l.jsx)("button", {
                                            className: "about_btn",
                                            children: "LEARN MORE"
                                        })
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "abcd",
                                    children: (0, l.jsx)(c(), {
                                        className: "aboutbiotech_img",
                                        src: "/home/mobile2.png",
                                        alt: "Facebook Logo Image",
                                        width: 1034,
                                        height: 916
                                    })
                                }), (0, l.jsx)(r(), {
                                    href: "/about-us",
                                    children: (0, l.jsx)("button", {
                                        className: "about_lastbtn",
                                        children: "LEARN MORE"
                                    })
                                }), (0, l.jsx)("div", {})]
                            })
                        }), (0, l.jsx)(k.Z, {
                            children: (0, l.jsxs)("div", {
                                className: "brand_section",
                                children: [(0, l.jsx)("div", {
                                    className: "imgs",
                                    children: (0, l.jsx)("img", {
                                        className: " brand_image",
                                        src: "/brand/Icon2.webp",
                                        alt: "CocaCola logo img"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "imgs",
                                    children: (0, l.jsx)("img", {
                                        className: " brand_image",
                                        src: "/brand/Icon1.webp",
                                        alt: "Puma logo img"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "imgs",
                                    children: (0, l.jsx)("img", {
                                        className: " brand_image",
                                        src: "/brand/Icon3.webp",
                                        alt: "Nordstream logo img"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "imgs",
                                    children: (0, l.jsx)("img", {
                                        className: " brand_image",
                                        src: "/brand/Icon4.webp",
                                        alt: "Supreme logo img"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "imgs",
                                    children: (0, l.jsx)("img", {
                                        className: " brand_image",
                                        src: "/brand/Icon5.webp",
                                        alt: "Fendi logo img"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "imgs",
                                    children: (0, l.jsx)("img", {
                                        className: " brand_image",
                                        src: "/brand/Icon6.webp",
                                        alt: "VANS logo img"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "imgs",
                                    children: (0, l.jsx)("img", {
                                        className: " brand_image",
                                        src: "/brand/Icon7.webp",
                                        alt: "TD logo img"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "imgs",
                                    children: (0, l.jsx)("img", {
                                        className: " brand_image",
                                        src: "/brand/Icon8.webp",
                                        alt: "Shein logo img"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "imgs",
                                    children: (0, l.jsx)("img", {
                                        className: " brand_image",
                                        src: "/brand/Icon9.webp",
                                        alt: "Dyson logo img"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "imgs",
                                    children: (0, l.jsx)("img", {
                                        className: " brand_image",
                                        src: "/brand/Icon10.webp",
                                        alt: "Lenovo logo img"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "imgs",
                                    children: (0, l.jsx)("img", {
                                        className: " brand_image",
                                        src: "/brand/Icon11.webp",
                                        alt: "Msnbc logo img"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "imgs",
                                    children: (0, l.jsx)("img", {
                                        className: " brand_image",
                                        src: "/brand/Icon12.webp",
                                        alt: "Tumblr logo img"
                                    })
                                })]
                            })
                        })]
                    })
                },
                I = function() {
                    let [i, e] = (0, n.useState)(!1), s = (i, e) => {}, o = () => {
                        setTimeout(() => {
                            e(!0)
                        }, 700), setTimeout(() => {
                            e(!1)
                        }, 1100)
                    }, t = () => {
                        setTimeout(() => {
                            e(!0)
                        }, 700), setTimeout(() => {
                            e(!1)
                        }, 1100)
                    }, {
                        home: d
                    } = (0, g.v9)(i => i.home);
                    return (0, l.jsxs)("div", {
                        className: "main-banner",
                        children: [(0, l.jsx)("div", {
                            className: "banner-img",
                            children: (0, l.jsx)(c(), {
                                src: "/home/banner.png",
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "center",
                                alt: "background image"
                            })
                        }), (0, l.jsxs)("div", {
                            className: "banner_datass",
                            children: [(0, l.jsxs)("div", {
                                className: "banner-data",
                                children: [(0, l.jsxs)("h2", {
                                    children: ["Packaging solution for ", (0, l.jsx)("br", {}), " every ", (0, l.jsx)("span", {
                                        children: "product"
                                    })]
                                }), (0, l.jsx)("p", {
                                    children: "Everything is designed but few things are designed well"
                                }), (0, l.jsxs)(r(), {
                                    href: "/quote",
                                    children: [" ", (0, l.jsx)(a.Z, {
                                        children: "GET A QUOTE"
                                    })]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "main_bottom",
                                children: [(0, l.jsx)("div", {
                                    className: "banner-carousel",
                                    children: (0, l.jsx)(u.Z, {
                                        onSelect: s,
                                        nextIcon: (0, l.jsx)("span", {
                                            onClick: o,
                                            className: "carousel-control-next-icon"
                                        }),
                                        prevIcon: (0, l.jsx)("span", {
                                            onClick: t,
                                            className: "carousel-control-prev-icon"
                                        }),
                                        interval: 1e3,
                                        pause: !1,
                                        children: d && d.length > 0 && (null == d ? void 0 : d.map((i, e) => (0, l.jsx)(u.Z.Item, {
                                            children: (0, l.jsx)("div", {
                                                className: "img_div",
                                                children: (0, l.jsx)("img", {
                                                    className: "d-block image_adjust",
                                                    src: i.image,
                                                    alt: "Slide ".concat(e),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    objectPosition: "center"
                                                })
                                            })
                                        }, e)))
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "disk_img",
                                    children: (0, l.jsx)(c(), {
                                        src: "/images/disk.png",
                                        className: "three",
                                        alt: "product-image",
                                        layout: "fill",
                                        objectFit: "cover",
                                        objectPosition: "center"
                                    })
                                })]
                            })]
                        })]
                    })
                },
                F = function() {
                    let [i, e] = (0, n.useState)(1), [s, a] = (0, n.useState)(0), {
                        faq: t
                    } = (0, g.v9)(i => i.home), d = i => {
                        s === i ? a(-1) : a(i)
                    };
                    return (0, l.jsxs)("div", {
                        className: "main-questions",
                        children: [(0, l.jsx)("div", {
                            className: "faqq_imggg",
                            children: (0, l.jsx)(c(), {
                                id: "questions",
                                src: "/home/faq.png",
                                alt: "",
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "center"
                            })
                        }), (0, l.jsx)("div", {
                            children: (0, l.jsx)("div", {
                                className: "main_question",
                                children: (0, l.jsx)(o.Z, {
                                    children: (0, l.jsxs)("div", {
                                        className: "Faq_section",
                                        children: [(0, l.jsx)("h3", {
                                            children: "Frequently asked questions"
                                        }), (0, l.jsx)("div", {
                                            children: t && Array.isArray(t) && (null == t ? void 0 : t.map((i, e) => (0, l.jsxs)(l.Fragment, {
                                                children: [(0, l.jsxs)("div", {
                                                    className: "faq_question1",
                                                    children: [(0, l.jsxs)("span", {
                                                        onClick: () => d(e),
                                                        children: [e + 1, " "]
                                                    }), (0, l.jsxs)("div", {
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        children: [(0, l.jsxs)("div", {
                                                            className: "accordianss",
                                                            onClick: () => d(e),
                                                            children: [(0, l.jsx)("h4", {
                                                                children: i.question
                                                            }), s === e && (0, l.jsx)("div", {
                                                                className: "icon_style",
                                                                children: (0, l.jsx)(c(), {
                                                                    src: "/images/icons/right.png",
                                                                    alt: "",
                                                                    layout: "fill",
                                                                    objectFit: "cover",
                                                                    objectPosition: "center"
                                                                })
                                                            }), s !== e && (0, l.jsx)("div", {
                                                                className: "icon_style2",
                                                                children: (0, l.jsx)(c(), {
                                                                    src: "/images/icons/bottom.png",
                                                                    alt: "",
                                                                    layout: "fill",
                                                                    objectFit: "cover",
                                                                    objectPosition: "center"
                                                                })
                                                            })]
                                                        }), (0, l.jsx)("p", {
                                                            style: {
                                                                paddingTop: "20px"
                                                            },
                                                            className: "".concat(s === e ? "para1" : "para"),
                                                            children: null == i ? void 0 : i.answer
                                                        })]
                                                    })]
                                                }, e), (0, l.jsx)("hr", {})]
                                            })))
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                },
                S = !0;

            function Z() {
                var i, e, s, n, o, a;
                let {
                    maetaData: t
                } = (0, g.v9)(i => i.metatags);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(_(), {
                        children: [(0, l.jsx)("title", {
                            children: (null == t ? void 0 : null === (i = t.tags_desc) || void 0 === i ? void 0 : i.meta_title) ? null == t ? void 0 : null === (e = t.tags_desc) || void 0 === e ? void 0 : e.meta_title : ""
                        }), (0, l.jsx)("meta", {
                            name: "description",
                            content: (null == t ? void 0 : null === (s = t.tags_desc) || void 0 === s ? void 0 : s.meta_description) ? null == t ? void 0 : null === (n = t.tags_desc) || void 0 === n ? void 0 : n.meta_description : ""
                        }), (0, l.jsx)("meta", {
                            property: "og:site_name",
                            content: "Biotech Packages"
                        }), (0, l.jsx)("meta", {
                            property: "og:url",
                            content: "https://www.biotechpackages.com/"
                        }), (0, l.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.biotechpackages.com"
                        }), (0, l.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0, l.jsx)("meta", {
                            property: "og:locale",
                            content: "en_US"
                        }), (0, l.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, l.jsx)("meta", {
                            property: "og:title",
                            content: (null == t ? void 0 : null === (o = t.tags_desc) || void 0 === o ? void 0 : o.meta_title) ? null == t ? void 0 : null === (a = t.tags_desc) || void 0 === a ? void 0 : a.meta_title : ""
                        }), (0, l.jsx)("link", {
                            rel: "icon",
                            href: "/images/bioblacklogo.png"
                        }), (0, l.jsx)("script", {
                            async: !0,
                            src: "https://www.googletagmanager.com/gtag/js?id=G-94FWCDD0CW"
                        }), (0, l.jsx)("script", {
                            children: "\n            window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'G-94FWCDD0CW');\n          "
                        }), (0, l.jsx)("script", {
                            type: "application/ld+json",
                            children: '\n            {\n              "@context": "https://schema.org",\n              "@type": "Organization",\n              "@id": "",\n              "name": "Biotech Packages",\n              "url": "https://www.biotechpackages.com/",\n              "address": {\n                "@type": "PostalAddress",\n                "addressLocality": "Lahore, Punjab",\n                "addressCountry": "Pakistan",\n                "postalCode": "54000",\n                "streetAddress": "18 km Lahore – Kasur Rd, Industrial Area Sufiabad, Lahore."\n              },\n              "contactPoint": {\n                "@type": "ContactPoint",\n                "telephone": "0300 0601745",\n                "url": "https://www.biotechpackages.com/contacts",\n                "contactType": "customer support"\n              },\n              "logo": {\n                "@type": "ImageObject",\n                "url": "https://www.biotechpackages.com/images/bioblacklogo.png",\n                "width": 114,\n                "height": 85,\n                "@id": "https://www.biotechpackages.com/images/bioblacklogo.png/#logo"\n              }\n            }\n          '
                        })]
                    }), (0, l.jsxs)("main", {
                        children: [(0, l.jsx)(w.Z, {}), (0, l.jsx)(I, {}), (0, l.jsx)(P, {}), (0, l.jsx)(p.Z, {}), (0, l.jsx)(x, {}), (0, l.jsx)(m, {}), (0, l.jsx)(v, {}), (0, l.jsx)(F, {}), (0, l.jsx)(N.Z, {})]
                    })]
                })
            }
        }
    },
    function(i) {
        i.O(0, [776, 3081, 395, 1033, 6066, 6922, 5955, 7745, 9774, 2888, 179], function() {
            return i(i.s = 5557)
        }), _N_E = i.O()
    }
]);