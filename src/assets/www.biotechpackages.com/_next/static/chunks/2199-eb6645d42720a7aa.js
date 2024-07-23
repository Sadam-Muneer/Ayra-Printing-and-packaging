"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2199], {
        6037: function(i, l, e) {
            var d = e(5893),
                s = e(1664),
                n = e.n(s),
                a = e(1163),
                o = e(7294),
                r = e(5005),
                c = e(9473);
            l.Z = function() {
                var i, l, e, s, t, v, h, u, m, j, x, p, g, _, N, f, b;
                let {
                    Productdata: y
                } = (0, c.v9)(i => i.product), [P, S] = (0, o.useState)(""), C = (0, a.useRouter)(), [q, F] = (0, o.useState)(!1), z = () => {
                    F(!0)
                };
                (0, o.useEffect)(() => {
                    var i, l;
                    S(null === (i = null === (l = y[0]) || void 0 === l ? void 0 : l.bg_image[0]) || void 0 === i ? void 0 : i.bg_image)
                }, [y]);
                let M = i => {
                    S(i.bg_image), F(!0)
                };
                return console.log("bhhhh", null === (i = null === (l = y[0]) || void 0 === l ? void 0 : l.bg_image[0]) || void 0 === i ? void 0 : i.bg_image), (0, d.jsxs)("div", {
                    className: "main_mailer_Banner",
                    children: [(0, d.jsx)("div", {
                        className: "mailer",
                        style: {
                            height: q ? "auto" : "100vh"
                        },
                        children: P && (0, d.jsxs)("div", {
                            children: [(0, d.jsx)("div", {
                                className: "mailer_image_placeholder",
                                style: {
                                    height: q ? "auto" : "100vh"
                                }
                            }), (0, d.jsx)("img", {
                                className: "mailer_image  ".concat(q ? "show" : "hide"),
                                src: P,
                                alt: y && (null == y ? void 0 : null === (e = y[0]) || void 0 === e ? void 0 : e.title),
                                onLoad: z
                            })]
                        })
                    }), (0, d.jsx)("div", {
                        style: {
                            cursor: "pointer"
                        },
                        className: "main_small_mailer",
                        children: y && (null === (s = y[0]) || void 0 === s ? void 0 : null === (t = s.bg_image) || void 0 === t ? void 0 : t.map((i, l) => {
                            var e;
                            return (0, d.jsx)("img", {
                                src: i.thumb_image,
                                width: 68,
                                height: 68,
                                alt: y && (null == y ? void 0 : null === (e = y[0]) || void 0 === e ? void 0 : e.title),
                                onClick: () => M(i)
                            }, l)
                        }))
                    }), (0, d.jsx)("div", {
                        className: "main_small_detail",
                        children: (0, d.jsxs)("div", {
                            "data-nosnippet": !0,
                            className: "mail_box",
                            children: [(0, d.jsx)("h2", {
                                children: y && (null == y ? void 0 : null === (v = y[0]) || void 0 === v ? void 0 : v.title)
                            }), (0, d.jsxs)("div", {
                                className: "value_description",
                                children: [(0, d.jsx)("p", {
                                    children: y && (null == y ? void 0 : null === (h = y[0]) || void 0 === h ? void 0 : h.summary)
                                }), (0, d.jsxs)("div", {
                                    children: [(null === (u = y[0]) || void 0 === u ? void 0 : null === (m = u.product) || void 0 === m ? void 0 : null === (j = m.categories_service) || void 0 === j ? void 0 : j.button_link) === "packaging" && (0, d.jsxs)("div", {
                                        className: "value_description",
                                        children: [(0, d.jsxs)("div", {
                                            className: "size heading",
                                            children: [(0, d.jsx)("div", {
                                                className: "",
                                                children: (0, d.jsx)("p", {
                                                    className: "heading",
                                                    children: "Size:"
                                                })
                                            }), (0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    children: "All Custom Sizes, Shapes, and Card Thickness"
                                                })
                                            })]
                                        }), (0, d.jsxs)("div", {
                                            className: "size",
                                            children: [(0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    className: "heading",
                                                    children: "Color:"
                                                })
                                            }), (0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    children: "PMS (Pantone Matching System), CMYK Printing Process"
                                                })
                                            })]
                                        }), (0, d.jsxs)("div", {
                                            className: "size",
                                            children: [(0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    className: "heading",
                                                    children: "Material: "
                                                })
                                            }), (0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    children: "Bleach Board, Art Board, Grey Back Board, Card Board"
                                                })
                                            })]
                                        }), (0, d.jsxs)("div", {
                                            className: "size",
                                            children: [(0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    className: "heading",
                                                    children: "Finishing: "
                                                })
                                            }), (0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    children: "Soft Touch lamination, Gloss UV, Matte UV, Drip OFF, Soft Lamination, Spot-UV, Hot Foiling, Embossing"
                                                })
                                            })]
                                        }), (0, d.jsxs)("div", {
                                            className: "size",
                                            children: [(0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    className: "heading",
                                                    children: "Extra Finishing: "
                                                })
                                            }), (0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    children: "Deep Embossing, 3D Printing, Micro Laser Embossing, Glitter Finishing"
                                                })
                                            })]
                                        }), (0, d.jsxs)("div", {
                                            className: "size",
                                            children: [(0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    className: "heading",
                                                    children: "Options:"
                                                })
                                            }), (0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    children: "Custom Window Cut Out, Gold/Silver Foiling"
                                                })
                                            })]
                                        })]
                                    }), (null === (x = y[0]) || void 0 === x ? void 0 : null === (p = x.product) || void 0 === p ? void 0 : null === (g = p.categories_service) || void 0 === g ? void 0 : g.button_link) === "stickerandlabels" && (0, d.jsxs)("div", {
                                        className: "value_description",
                                        children: [(0, d.jsxs)("div", {
                                            className: "size heading",
                                            children: [(0, d.jsx)("div", {
                                                className: "",
                                                children: (0, d.jsx)("p", {
                                                    className: "heading",
                                                    children: "Size:"
                                                })
                                            }), (0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    children: " All Custom Sizes and Shapes"
                                                })
                                            })]
                                        }), (0, d.jsxs)("div", {
                                            className: "size",
                                            children: [(0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    className: "heading",
                                                    children: "Color:"
                                                })
                                            }), (0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    children: "PMS (Pantone Matching System), CMYK Printing Process"
                                                })
                                            })]
                                        }), (0, d.jsxs)("div", {
                                            className: "size",
                                            children: [(0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    className: "heading",
                                                    children: "Material:"
                                                })
                                            }), (0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    children: "PE Clear (Self Adhesive), PP Clear (Self Adhesive), PP Bright Silver, PP Matte Silver, PE Bright White, PP Bright White, Gloss Paper, Matt Paper, PP Holographic"
                                                })
                                            })]
                                        }), (0, d.jsxs)("div", {
                                            className: "size",
                                            children: [(0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    className: "heading",
                                                    children: "Finishing: "
                                                })
                                            }), (0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    children: "High Gloss, Premium Matte, Embossing, Cold Foiling, Hot Foiling, Holographic"
                                                })
                                            })]
                                        }), (0, d.jsxs)("div", {
                                            className: "size",
                                            children: [(0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    className: "heading",
                                                    children: "Extra Finishing: "
                                                })
                                            }), (0, d.jsx)("div", {
                                                children: (0, d.jsx)("p", {
                                                    children: "Soft Touch, Matte Finishing, Glitter Finishing"
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, d.jsx)(n(), {
                                href: "/quote?category=".concat(null === (_ = y[0]) || void 0 === _ ? void 0 : null === (N = _.product) || void 0 === N ? void 0 : null === (f = N.categories_service) || void 0 === f ? void 0 : f.button_link, "&product=").concat(null == C ? void 0 : null === (b = C.query) || void 0 === b ? void 0 : b.id),
                                children: (0, d.jsx)(r.Z, {
                                    children: "Get a free quote"
                                })
                            })]
                        })
                    })]
                })
            }
        },
        4046: function(i, l, e) {
            var d = e(5893),
                s = e(7294),
                n = e(682),
                a = e(5675),
                o = e.n(a),
                r = e(9473);
            l.Z = function() {
                var i, l, e, a, c, t, v, h, u, m, j;
                let {
                    Productdata: x
                } = (0, r.v9)(i => i.product), [p, g] = (0, s.useState)(1), _ = (i, l) => {
                    p === l ? g("") : g(l)
                };
                return console.log("ppp", null == x ? void 0 : null === (i = x[0]) || void 0 === i ? void 0 : i.faq_data), (0, d.jsx)("div", {
                    children: (null == x ? void 0 : null === (l = x[0]) || void 0 === l ? void 0 : null === (e = l.faq_data) || void 0 === e ? void 0 : e.length) > 0 && (null == x ? void 0 : null === (a = x[0]) || void 0 === a ? void 0 : null === (c = a.faq_data) || void 0 === c ? void 0 : null === (t = c[0]) || void 0 === t ? void 0 : t.questions) && (0, d.jsxs)("div", {
                        className: "main-mailer_faq",
                        children: [(0, d.jsx)(o(), {
                            src: "/images/mix_img.png",
                            alt: "",
                            layout: "fill",
                            objectFit: "cover",
                            objectPosition: "center"
                        }), (0, d.jsx)("div", {
                            className: "main_question_faq",
                            children: (0, d.jsx)(n.Z, {
                                children: (0, d.jsxs)("div", {
                                    className: "Faq_section_mailer",
                                    children: [(0, d.jsx)("h3", {
                                        children: x && (null == x ? void 0 : null === (v = x[0]) || void 0 === v ? void 0 : v.faq_heading)
                                    }), (0, d.jsx)("div", {
                                        children: (null == x ? void 0 : null === (h = x[0]) || void 0 === h ? void 0 : h.faq_data) && Array.isArray(null == x ? void 0 : null === (u = x[0]) || void 0 === u ? void 0 : u.faq_data) && (null == x ? void 0 : null === (m = x[0]) || void 0 === m ? void 0 : null === (j = m.faq_data) || void 0 === j ? void 0 : j.map((i, l) => (0, d.jsxs)(d.Fragment, {
                                            children: [(0, d.jsxs)("div", {
                                                className: "faq_question1_mailer",
                                                children: [(0, d.jsx)("span", {
                                                    onClick: _,
                                                    children: l + 1
                                                }), (0, d.jsxs)("div", {
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    children: [(0, d.jsxs)("div", {
                                                        className: "accordianss_mailer",
                                                        onClick: i => _(i, l),
                                                        children: [(0, d.jsxs)("h4", {
                                                            children: [" ", i.questions]
                                                        }), p === l && (0, d.jsx)("div", {
                                                            className: "icon_style_mailer",
                                                            children: (0, d.jsx)(o(), {
                                                                src: "/images/icons/right.png",
                                                                alt: "",
                                                                layout: "fill",
                                                                objectFit: "cover",
                                                                objectPosition: "center"
                                                            })
                                                        }), p !== l && (0, d.jsx)("div", {
                                                            className: "icon_style2_mailer",
                                                            children: (0, d.jsx)(o(), {
                                                                src: "/images/icons/bottom.png",
                                                                alt: "",
                                                                layout: "fill",
                                                                objectFit: "cover",
                                                                objectPosition: "center"
                                                            })
                                                        })]
                                                    }), (0, d.jsx)("div", {
                                                        className: "initialp ".concat(p === l ? "para1" : "para"),
                                                        children: (0, d.jsxs)("p", {
                                                            children: [" ", i.answers]
                                                        })
                                                    })]
                                                })]
                                            }), (0, d.jsx)("hr", {})]
                                        })))
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        },
        1628: function(i, l, e) {
            var d = e(5893);
            e(5675);
            var s = e(7294),
                n = e(9473);
            l.Z = function() {
                var i, l, e, a, o, r, c, t, v, h, u, m, j, x, p, g, _, N, f, b, y, P, S, C, q, F, z;
                let {
                    Productdata: M
                } = (0, n.v9)(i => i.product), [k, E] = (0, s.useState)(!1), $ = () => {
                    E(!k)
                };
                return (0, d.jsx)("div", {
                    className: "main_mailer_unboxx",
                    children: (0, d.jsxs)("div", {
                        className: "adjust_wid",
                        children: [(0, d.jsxs)("div", {
                            className: "mailer_head_para",
                            children: [(null == M ? void 0 : null === (i = M[0]) || void 0 === i ? void 0 : i.main_detail) && (0, d.jsx)("p", {
                                className: "mailer_para1",
                                dangerouslySetInnerHTML: {
                                    __html: null == M ? void 0 : null === (l = M[0]) || void 0 === l ? void 0 : l.main_detail
                                }
                            }), k && (0, d.jsx)("div", {
                                className: "mailer_para1",
                                style: {
                                    textAlign: "center",
                                    marginTop: "20px"
                                },
                                dangerouslySetInnerHTML: {
                                    __html: M && (null == M ? void 0 : null === (e = M[0]) || void 0 === e ? void 0 : e.detail)
                                }
                            }), (0, d.jsx)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "20px"
                                },
                                children: M && (null == M ? void 0 : null === (a = M[0]) || void 0 === a ? void 0 : null === (o = a.detail) || void 0 === o ? void 0 : o.length) > 0 && (0, d.jsx)("button", {
                                    onClick: $,
                                    className: "viewmore_btn",
                                    children: k ? "Read Less" : "Read More"
                                })
                            }), M && (null == M ? void 0 : null === (r = M[0]) || void 0 === r ? void 0 : r.headings) && (0, d.jsx)("h3", {
                                className: "mailer_head2",
                                children: null == M ? void 0 : null === (c = M[0]) || void 0 === c ? void 0 : c.headings
                            }), M && (null == M ? void 0 : null === (t = M[0]) || void 0 === t ? void 0 : null === (v = t.data1) || void 0 === v ? void 0 : null === (h = v[0]) || void 0 === h ? void 0 : h.descriptions) && (null == M ? void 0 : null === (u = M[0]) || void 0 === u ? void 0 : null === (m = u.data1) || void 0 === m ? void 0 : m.map((i, l) => (0, d.jsx)(d.Fragment, {
                                children: (0, d.jsx)("p", {
                                    className: "mailer_para1",
                                    children: i.descriptions
                                }, l)
                            })))]
                        }), (null == M ? void 0 : null === (j = M[0]) || void 0 === j ? void 0 : j.detail_image) && (null == M ? void 0 : null === (x = M[0]) || void 0 === x ? void 0 : null === (p = x.detail_image) || void 0 === p ? void 0 : p[0]) && (null == M ? void 0 : null === (g = M[0]) || void 0 === g ? void 0 : null === (_ = g.detail_image) || void 0 === _ ? void 0 : _.map((i, l) => (0, d.jsx)(d.Fragment, {
                            children: (0, d.jsx)("div", {
                                className: "main_foldandflap",
                                children: (0, d.jsx)("img", {
                                    className: "fold_flap",
                                    src: i,
                                    layout: "fill",
                                    objectFit: "cover",
                                    objectPosition: "center"
                                })
                            }, l)
                        }))), (null == M ? void 0 : M[0]) && Object.keys(null == M ? void 0 : M[0]).length > 0 && (0, d.jsxs)("div", {
                            className: "main_specs ",
                            style: {
                                paddingBottom: (null == M ? void 0 : null === (N = M[0]) || void 0 === N ? void 0 : null === (f = N.faq_data) || void 0 === f ? void 0 : f.length) > 0 && (null == M ? void 0 : null === (b = M[0]) || void 0 === b ? void 0 : null === (y = b.faq_data) || void 0 === y ? void 0 : null === (P = y[0]) || void 0 === P ? void 0 : P.questions) ? "0px" : "100px"
                            },
                            children: [(0, d.jsx)("h3", {
                                children: null == M ? void 0 : null === (S = M[0]) || void 0 === S ? void 0 : S.heading1
                            }), null == M ? void 0 : null === (C = M[0]) || void 0 === C ? void 0 : null === (q = C.data_des) || void 0 === q ? void 0 : q.map((i, l) => (0, d.jsx)("p", {
                                children: i.description1
                            }, l)), null == M ? void 0 : null === (F = M[0]) || void 0 === F ? void 0 : null === (z = F.data2) || void 0 === z ? void 0 : z.map((i, l) => (0, d.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    gap: "10px",
                                    justifyContent: "center"
                                },
                                children: [(0, d.jsx)("p", {
                                    children: i.names
                                }), (0, d.jsx)("p", {
                                    children: i.details
                                })]
                            }, l))]
                        })]
                    })
                })
            }
        },
        1555: function(i, l, e) {
            var d = e(4184),
                s = e.n(d),
                n = e(7294),
                a = e(6792),
                o = e(5893);
            let r = n.forwardRef((i, l) => {
                let [{
                    className: e,
                    ...d
                }, {
                    as: n = "div",
                    bsPrefix: r,
                    spans: c
                }] = function({
                    as: i,
                    bsPrefix: l,
                    className: e,
                    ...d
                }) {
                    l = (0, a.vE)(l, "col");
                    let n = (0, a.pi)(),
                        o = (0, a.zG)(),
                        r = [],
                        c = [];
                    return n.forEach(i => {
                        let e, s, n;
                        let a = d[i];
                        delete d[i], "object" == typeof a && null != a ? {
                            span: e,
                            offset: s,
                            order: n
                        } = a : e = a;
                        let t = i !== o ? `-${i}` : "";
                        e && r.push(!0 === e ? `${l}${t}` : `${l}${t}-${e}`), null != n && c.push(`order${t}-${n}`), null != s && c.push(`offset${t}-${s}`)
                    }), [{ ...d,
                        className: s()(e, ...r, ...c)
                    }, {
                        as: i,
                        bsPrefix: l,
                        spans: r
                    }]
                }(i);
                return (0, o.jsx)(n, { ...d,
                    ref: l,
                    className: s()(e, !c.length && r)
                })
            });
            r.displayName = "Col", l.Z = r
        },
        4051: function(i, l, e) {
            var d = e(4184),
                s = e.n(d),
                n = e(7294),
                a = e(6792),
                o = e(5893);
            let r = n.forwardRef(({
                bsPrefix: i,
                className: l,
                as: e = "div",
                ...d
            }, n) => {
                let r = (0, a.vE)(i, "row"),
                    c = (0, a.pi)(),
                    t = (0, a.zG)(),
                    v = `${r}-cols`,
                    h = [];
                return c.forEach(i => {
                    let l;
                    let e = d[i];
                    delete d[i], null != e && "object" == typeof e ? {
                        cols: l
                    } = e : l = e;
                    let s = i !== t ? `-${i}` : "";
                    null != l && h.push(`${v}${s}-${l}`)
                }), (0, o.jsx)(e, {
                    ref: n,
                    ...d,
                    className: s()(l, r, ...h)
                })
            });
            r.displayName = "Row", l.Z = r
        }
    }
]);