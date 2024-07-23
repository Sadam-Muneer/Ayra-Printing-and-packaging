"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [913], {
        2258: function(e, l, i) {
            var o = i(5893),
                s = i(5675),
                n = i.n(s),
                d = i(1163);
            i(7294);
            var a = i(9473);
            l.Z = function() {
                var e, l, i, s, t, c, r, u;
                let {
                    showMenu: v
                } = (0, a.v9)(e => e.product), {
                    categoryProduct: m
                } = (0, a.v9)(e => e.product), h = null == m ? void 0 : null === (e = m.header) || void 0 === e ? void 0 : null === (l = e[0]) || void 0 === l ? void 0 : l.heading, g = null == m ? void 0 : null === (i = m.header) || void 0 === i ? void 0 : null === (s = i[0]) || void 0 === s ? void 0 : s.description, p = (0, d.useRouter)(), x = (null == p ? void 0 : null === (t = p.query) || void 0 === t ? void 0 : null === (c = t.id) || void 0 === c ? void 0 : c.split("-")[0]) === "packaging", j = (null == p ? void 0 : null === (r = p.query) || void 0 === r ? void 0 : null === (u = r.id) || void 0 === u ? void 0 : u.split("-")[0]) === "stickerandlabels";
                return (0, o.jsxs)("div", {
                    className: "main_subservicebanner ".concat(v ? "index0" : "index1"),
                    children: [(0, o.jsxs)("div", {
                        className: "subservice_banner",
                        children: [x && (0, o.jsx)(n(), {
                            className: "subservice_banner_image",
                            src: "/images/package.webp",
                            alt: "banner",
                            layout: "fill",
                            objectFit: "cover",
                            objectPosition: "center"
                        }), j && (0, o.jsx)(n(), {
                            className: "subservice_banner_image",
                            src: "/images/labandstick.webp",
                            alt: "banner",
                            layout: "fill",
                            objectFit: "cover",
                            objectPosition: "center"
                        })]
                    }), (0, o.jsx)("div", {
                        className: "subservice_banner_data",
                        children: (0, o.jsxs)("div", {
                            className: "subservice_content",
                            children: [(0, o.jsx)("h2", {
                                children: h
                            }), (0, o.jsx)("p", {
                                children: g
                            })]
                        })
                    })]
                })
            }
        },
        5430: function(e, l, i) {
            i.d(l, {
                Z: function() {
                    return j
                }
            });
            var o = i(5893),
                s = i(5675),
                n = i.n(s),
                d = i(7294),
                a = i(5005),
                t = i(682),
                c = i(590),
                r = i(1664),
                u = i.n(r),
                v = i(9473),
                m = i(4250),
                h = i(1163),
                g = i(7067),
                p = function(e) {
                    let {
                        productData: l
                    } = e, [i, s] = (0, d.useState)(null), n = e => {
                        s(e)
                    }, a = () => {
                        s(null)
                    };
                    return (0, o.jsx)("div", {
                        className: "main_products_packag",
                        children: (0, o.jsx)("div", {
                            className: "main_products_packag2",
                            children: l && Array.isArray(l) && (null == l ? void 0 : l.map((e, l) => (0, o.jsx)(u(), {
                                style: {
                                    color: "black"
                                },
                                href: "/".concat(null == e ? void 0 : e.slug),
                                children: (0, o.jsx)("div", {
                                    className: "bottom",
                                    onMouseEnter: () => n(l),
                                    onMouseLeave: a,
                                    children: (0, o.jsxs)("div", {
                                        className: "head_and_imagge",
                                        children: [(0, o.jsxs)("div", {
                                            className: "image",
                                            children: [(null == e ? void 0 : e.image) && (0, o.jsx)(g.Ee, {
                                                src: null == e ? void 0 : e.image,
                                                NativeImgProps: {
                                                    alt: e.title
                                                },
                                                fallback: (0, o.jsx)(g.qm, {})
                                            }), i === l && (0, o.jsx)("div", {
                                                className: "read-more-button",
                                                children: (0, o.jsx)(u(), {
                                                    href: "/".concat(null == e ? void 0 : e.slug),
                                                    children: (0, o.jsx)("button", {
                                                        className: "butns",
                                                        children: "Quick View"
                                                    })
                                                })
                                            })]
                                        }), (0, o.jsx)("div", {
                                            style: {
                                                maxWidth: "322px"
                                            },
                                            className: "head",
                                            children: (0, o.jsx)("h3", {
                                                children: null == e ? void 0 : e.title
                                            })
                                        })]
                                    })
                                }, l)
                            }, l)))
                        })
                    })
                },
                x = i(6261),
                j = function() {
                    var e, l, i, s, r, g, j, y, _, b, N, f, w, k, q, C, S, E, I, T, F, L;
                    let [W, Z] = (0, d.useState)([]), [P, B] = (0, d.useState)(1), [R, M] = (0, d.useState)(""), {
                        showMenu: z,
                        categoryProduct: A
                    } = (0, v.v9)(e => e.product), H = (0, h.useRouter)(), K = (null == H ? void 0 : null === (e = H.query) || void 0 === e ? void 0 : e.id) && H.query.id.split("-")[0], O = H.query.id && 2 === H.query.id.split("-").length ? H.query.id.split("-")[1] : 3 === H.query.id.split("-").length ? H.query.id.split("-")[1] + "-" + H.query.id.split("-")[2] : 4 === H.query.id.split("-").length && H.query.id.split("-")[1] + "-" + H.query.id.split("-")[2] + "-" + H.query.id.split("-")[3], Y = null == A ? void 0 : null === (l = A.category) || void 0 === l ? void 0 : l.findIndex((e, l) => (null == e ? void 0 : e.main_slug) === O), D = null == A ? void 0 : null === (i = A.category) || void 0 === i ? void 0 : i.find((e, l) => (null == e ? void 0 : e.main_slug) === O), G = null == D ? void 0 : D.btn_txt, Q = null == D ? void 0 : D.heading, V = null == D ? void 0 : D.paragraph, $ = (0, v.I0)(), J = () => {
                        $((0, m.IW)(!0))
                    }, U = () => {
                        $((0, m.IW)(!1))
                    }, X = (e, l) => {
                        R === e || M(e)
                    }, ee = (e, l) => {
                        var i;
                        console.log("pageee", e, l), B(e);
                        let o = {
                            slug: H.query.id && (null == H ? void 0 : null === (i = H.query) || void 0 === i ? void 0 : i.id.split("-")[0]),
                            pageSize: e
                        };
                        x.OK.scrollTo("myScrollToElement", {
                            duration: 0,
                            smooth: !0
                        }), setTimeout(() => {
                            $((0, m.G$)(o)).then(() => {})
                        }, 1e3)
                    };
                    (0, d.useEffect)(() => {
                        var e;
                        Z(null == D ? void 0 : null === (e = D.category_products) || void 0 === e ? void 0 : e.data)
                    }, [D]);
                    let el = e => {
                        H.push("/category/".concat(K, "-").concat(null == e ? void 0 : e.main_slug)), setTimeout(() => {
                            $((0, m.IW)(!1))
                        }, 1e3)
                    };
                    (0, d.useEffect)(() => {
                        var e;
                        let l = null == A ? void 0 : null === (e = A.category) || void 0 === e ? void 0 : e.findIndex((e, l) => (null == e ? void 0 : e.main_slug) === O);
                        l > -1 && M(l)
                    }, []), (0, d.useEffect)(() => {
                        B(1)
                    }, [H]);
                    let ei = "Shop By Need",
                        eo = e => {
                            x.OK.scrollTo("myScrollToElement", {
                                duration: 0,
                                smooth: !0
                            }), setTimeout(() => {
                                H.push(e).then(() => {
                                    let e = document.getElementById("myScrollToElement2");
                                    if (e) {
                                        let l = e.getBoundingClientRect().top + window.scrollY;
                                        window.scroll({
                                            top: l,
                                            behavior: "instant"
                                        })
                                    }
                                })
                            }, 10)
                        },
                        es = () => {
                            let e = parseInt(localStorage.getItem("scrollY") || "0", 10);
                            window.scroll({
                                top: e,
                                behavior: "instant"
                            }), window.removeEventListener("scroll", es, {
                                once: !0
                            })
                        };
                    return (0, o.jsx)("div", {
                        children: W ? (0, o.jsxs)("div", {
                            className: "main_shopboxx",
                            children: [(0, o.jsxs)("div", {
                                className: "main_section_package_pack",
                                children: [(0, o.jsx)(x.W_, {
                                    name: "myScrollToElement"
                                }), (0, o.jsx)("h3", {
                                    id: "myScrollToElement2",
                                    className: "subservicepack_head",
                                    children: Q
                                }), (0, o.jsxs)("p", {
                                    style: {
                                        maxWidth: "500px",
                                        marginBottom: "10px",
                                        minHeight: "65px"
                                    },
                                    className: "subservicepack_para",
                                    children: [" ", V, " "]
                                }), (0, o.jsx)("div", {
                                    className: "ham_icons1",
                                    children: (0, o.jsx)("img", {
                                        src: "/images/icons8-menu.svg",
                                        alt: "Hamburger Icon",
                                        onClick: J
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "packaging_butn",
                                    children: (0, o.jsx)(a.Z, {
                                        className: "package_btn",
                                        children: (0, o.jsx)("a", {
                                            href: "tel:923103330109",
                                            style: {
                                                color: "white",
                                                textTransform: "uppercase"
                                            },
                                            children: G
                                        })
                                    })
                                })]
                            }), (0, o.jsx)(t.Z, {
                                children: (0, o.jsxs)("div", {
                                    className: "pack_package",
                                    children: [(0, o.jsxs)("div", {
                                        className: "main_sidemenu",
                                        children: [(0, o.jsx)("h1", {
                                            className: "top_category",
                                            children: "Category"
                                        }), (0, o.jsx)("hr", {}), (0, o.jsx)("div", {
                                            className: "Faq_section",
                                            children: (0, o.jsx)("div", {
                                                children: (0, o.jsx)("div", {
                                                    className: "faq_question1",
                                                    children: null == A ? void 0 : null === (s = A.side_bar) || void 0 === s ? void 0 : s.map((e, l) => e.name.toString().toLowerCase() === ei.toString().toLowerCase() || (null == e ? void 0 : e.main_slug) === "cbd_boxes" ? "" : (0, o.jsxs)(o.Fragment, {
                                                        children: [(0, o.jsx)("div", {
                                                            onClick: () => eo("/category/".concat(K, "-").concat(null == e ? void 0 : e.main_slug)),
                                                            children: (0, o.jsxs)("div", {
                                                                className: "acordianss ".concat(R === l ? "change_bg" : ""),
                                                                onClick: () => X(l, e),
                                                                children: [(0, o.jsx)("h5", {
                                                                    style: {
                                                                        fontWeight: "600"
                                                                    },
                                                                    children: e.name
                                                                }), (0, o.jsx)("div", {
                                                                    className: "".concat(R === l ? "icon_style1" : "icon_style2", " "),
                                                                    children: (0, o.jsx)(n(), {
                                                                        className: "arrow_ico",
                                                                        src: "/images/bottomblack.png",
                                                                        layout: "fill",
                                                                        objectFit: "cover",
                                                                        objectPosition: "center"
                                                                    })
                                                                })]
                                                            })
                                                        }), (0, o.jsx)("div", {
                                                            className: "SubMenu ".concat(R === l ? "para1" : "para"),
                                                            children: (null == e ? void 0 : e.category_products) && (null == e ? void 0 : e.category_products.map((e, l) => (0, o.jsx)(u(), {
                                                                href: "/".concat(null == e ? void 0 : e.slug),
                                                                children: (0, o.jsx)("p", {
                                                                    children: e.title
                                                                })
                                                            }, l)))
                                                        })]
                                                    }))
                                                })
                                            })
                                        }), (0, o.jsx)("div", {
                                            className: "shop_need",
                                            children: null == A ? void 0 : null === (r = A.category) || void 0 === r ? void 0 : r.map((e, l) => {
                                                var i, s, n;
                                                if (e.name.toString().toLowerCase() === ei.toString().toLowerCase()) return (0, o.jsxs)(o.Fragment, {
                                                    children: [(0, o.jsx)("h3", {
                                                        className: "top_categoryy",
                                                        children: e.name
                                                    }), (0, o.jsx)("hr", {}), (null == e ? void 0 : null === (i = e.category_products) || void 0 === i ? void 0 : i.data) && (null == e ? void 0 : null === (s = e.category_products) || void 0 === s ? void 0 : null === (n = s.data) || void 0 === n ? void 0 : n.map((e, l) => (0, o.jsx)(u(), {
                                                        style: {
                                                            color: "black"
                                                        },
                                                        href: "/".concat(null == e ? void 0 : e.slug),
                                                        children: (0, o.jsx)("p", {
                                                            children: null == e ? void 0 : e.title
                                                        })
                                                    }, l)))]
                                                })
                                            })
                                        })]
                                    }), (0, o.jsxs)("div", {
                                        style: {
                                            width: "100%"
                                        },
                                        children: [(0, o.jsx)(p, {
                                            productData: W
                                        }), (0, o.jsx)("div", {
                                            style: {
                                                marginTop: "80px",
                                                display: "flex",
                                                justifyContent: "center",
                                                width: "100%"
                                            },
                                            children: (null == A ? void 0 : null === (g = A.category) || void 0 === g ? void 0 : null === (j = g[Y]) || void 0 === j ? void 0 : null === (y = j.category_products) || void 0 === y ? void 0 : y.total) > 12 && (0, o.jsx)(c.Z, {
                                                defaultCurrent: 1,
                                                current: P,
                                                total: (null == A ? void 0 : null === (_ = A.category) || void 0 === _ ? void 0 : null === (b = _[Y]) || void 0 === b ? void 0 : null === (N = b.category_products) || void 0 === N ? void 0 : N.total) ? null == A ? void 0 : null === (f = A.category) || void 0 === f ? void 0 : null === (w = f[Y]) || void 0 === w ? void 0 : null === (k = w.category_products) || void 0 === k ? void 0 : k.total : 0,
                                                showLessItems: !0,
                                                pageSize: (null == A ? void 0 : null === (q = A.category) || void 0 === q ? void 0 : null === (C = q[Y]) || void 0 === C ? void 0 : null === (S = C.category_products) || void 0 === S ? void 0 : S.per_page) ? null == A ? void 0 : null === (E = A.category) || void 0 === E ? void 0 : null === (I = E[Y]) || void 0 === I ? void 0 : null === (T = I.category_products) || void 0 === T ? void 0 : T.per_page : 0,
                                                onChange: (e, l) => ee(e, l)
                                            })
                                        })]
                                    })]
                                })
                            }), (0, o.jsx)("div", {
                                children: (0, o.jsx)("img", {
                                    style: {
                                        width: "100%",
                                        margin: "auto "
                                    },
                                    src: "/mix_img.png",
                                    alt: ""
                                })
                            }), (0, o.jsx)("div", {
                                children: (0, o.jsx)("div", {
                                    className: "main_sidemenus  ".concat(z ? "showed1" : "hidden1"),
                                    children: (0, o.jsxs)(t.Z, {
                                        children: [(0, o.jsx)("div", {
                                            className: "main_close_icon",
                                            children: (0, o.jsx)(n(), {
                                                className: "close_icon",
                                                onClick: U,
                                                src: "/images/closee.svg",
                                                width: 20,
                                                height: 20
                                            })
                                        }), (0, o.jsx)("h2", {
                                            className: "top_category",
                                            children: "Category"
                                        }), (0, o.jsx)("hr", {}), (0, o.jsx)("div", {
                                            className: "Faq_section",
                                            children: (0, o.jsx)("div", {
                                                children: null == A ? void 0 : null === (F = A.category) || void 0 === F ? void 0 : F.map((e, l) => e.name.toString().toLowerCase() === ei.toString().toLowerCase() ? "" : (0, o.jsx)("div", {
                                                    onClick: () => el(e),
                                                    children: (0, o.jsx)("div", {
                                                        className: "faq_question1",
                                                        children: (0, o.jsx)("div", {
                                                            className: "accordianss",
                                                            onClick: () => X(l),
                                                            children: (0, o.jsx)("h3", {
                                                                className: "".concat(R === l ? "custom_box_upperr" : "custom_box_upperrs"),
                                                                children: null == e ? void 0 : e.name
                                                            })
                                                        })
                                                    })
                                                }, l))
                                            })
                                        }), (0, o.jsx)("div", {
                                            className: "shop_need",
                                            children: null == A ? void 0 : null === (L = A.category) || void 0 === L ? void 0 : L.map((e, l) => {
                                                var i, s, n;
                                                if (e.name.toString().toLowerCase() === ei.toString().toLowerCase()) return (0, o.jsxs)(o.Fragment, {
                                                    children: [(0, o.jsx)("h3", {
                                                        className: "top_categoryy",
                                                        children: null == e ? void 0 : e.name
                                                    }), (0, o.jsx)("hr", {}), (null == e ? void 0 : null === (i = e.category_products) || void 0 === i ? void 0 : i.data) && (null == e ? void 0 : null === (s = e.category_products) || void 0 === s ? void 0 : null === (n = s.data) || void 0 === n ? void 0 : n.map((e, l) => (0, o.jsx)(u(), {
                                                        style: {
                                                            color: "black"
                                                        },
                                                        href: "/".concat(null == e ? void 0 : e.slug),
                                                        children: (0, o.jsx)("p", {
                                                            children: null == e ? void 0 : e.title
                                                        })
                                                    }, l)))]
                                                })
                                            })
                                        })]
                                    })
                                })
                            })]
                        }) : "Not Found"
                    })
                }
        },
        8954: function(e, l, i) {
            var o = i(5893),
                s = i(1163);
            i(7294);
            var n = i(9473);
            l.Z = function() {
                var e, l;
                let i = (0, s.useRouter)();
                i.query.id && i.query.id.split("-")[1];
                let {
                    categoryProduct: d
                } = (0, n.v9)(e => e.product), a = null == d ? void 0 : null === (e = d.categoryFooter) || void 0 === e ? void 0 : null === (l = e[0]) || void 0 === l ? void 0 : l.video;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("div", {
                        style: {
                            position: "absolute"
                        },
                        children: (0, o.jsx)("img", {
                            style: {
                                width: "100%",
                                margin: "auto "
                            },
                            src: "/s.png",
                            alt: ""
                        })
                    }), (0, o.jsx)("div", {
                        className: "main_storeproduct_video",
                        children: (0, o.jsx)("video", {
                            className: "storeproduct_video_section",
                            width: "100%",
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            children: (0, o.jsx)("source", {
                                className: "storeproduct_video",
                                src: a,
                                type: "video/mp4"
                            })
                        })
                    })]
                })
            }
        }
    }
]);