(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9195], {
        6055: function(e, l, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog", function() {
                return s(826)
            }])
        },
        826: function(e, l, s) {
            "use strict";
            s.r(l), s.d(l, {
                __N_SSP: function() {
                    return N
                },
                default: function() {
                    return k
                }
            });
            var t = s(5893),
                n = s(7356),
                a = s(5675),
                i = s.n(a),
                r = s(7294),
                o = s(682),
                c = s(590),
                d = s(9473),
                u = s(4452),
                g = s(1664),
                h = s.n(g),
                m = function() {
                    var e, l, s, n, a;
                    let [i, g] = (0, r.useState)(1), [m, v] = (0, r.useState)(-1), {
                        blogData: x,
                        blogCategoryData: p
                    } = (0, d.v9)(e => e.blog), f = (0, d.I0)(), j = (e, l) => {
                        g(e), f((0, u.Eq)({
                            page: e
                        }))
                    };
                    return (0, t.jsxs)("div", {
                        className: "main_allbllog",
                        children: [(0, t.jsx)("h4", {
                            children: "All Blogs"
                        }), (0, t.jsxs)(o.Z, {
                            children: [(0, t.jsx)("div", {
                                className: "main_all_blog",
                                children: x && (null == x ? void 0 : null === (e = x.allblog) || void 0 === e ? void 0 : null === (l = e.data) || void 0 === l ? void 0 : l.map((e, l) => (0, t.jsx)("div", {
                                    className: "bottom_allblog",
                                    children: (0, t.jsxs)("div", {
                                        className: "head_allblog_image",
                                        children: [(0, t.jsx)(h(), {
                                            href: "/blog/".concat(e.slug),
                                            children: (0, t.jsx)("div", {
                                                className: "image_allblog",
                                                onMouseEnter: () => v(l),
                                                onMouseLeave: () => v(-1),
                                                children: (0, t.jsx)("div", {
                                                    style: {
                                                        backgroundImage: "url(".concat(e.image_link, ")")
                                                    },
                                                    className: "img_div"
                                                })
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "headAllBlog",
                                            children: [(0, t.jsx)("h2", {
                                                children: e.heading
                                            }), (0, t.jsx)("p", {
                                                children: e.formatted_date
                                            }), (0, t.jsx)(h(), {
                                                href: "/blog/".concat(e.slug),
                                                children: (0, t.jsx)("button", {
                                                    onMouseEnter: () => v(l),
                                                    style: {
                                                        opacity: m === l ? "1" : "0"
                                                    },
                                                    className: "read-more-button",
                                                    children: "Read More"
                                                })
                                            })]
                                        })]
                                    })
                                }, l)))
                            }), (0, t.jsx)("div", {
                                className: "",
                                style: {
                                    marginTop: "100px"
                                },
                                children: (0, t.jsx)(c.Z, {
                                    defaultCurrent: i,
                                    current: i,
                                    total: null == x ? void 0 : null === (s = x.allblog) || void 0 === s ? void 0 : s.total,
                                    showLessItems: !0,
                                    pageSize: (null == x ? void 0 : null === (n = x.allblog) || void 0 === n ? void 0 : n.per_page) ? null == x ? void 0 : null === (a = x.allblog) || void 0 === a ? void 0 : a.per_page : 9,
                                    onChange: (e, l) => j(e, l)
                                })
                            })]
                        })]
                    })
                },
                v = function() {
                    var e, l, s, n;
                    let {
                        showMenu: a
                    } = (0, d.v9)(e => e.product), {
                        blogData: i
                    } = (0, d.v9)(e => e.blog);
                    return (0, t.jsxs)("div", {
                        className: "main_blog_Banner ".concat(a ? "index0" : "index1"),
                        children: [(0, t.jsx)("div", {
                            className: "blog",
                            children: (0, t.jsx)("img", {
                                className: "blog_image",
                                src: "/banner/3.webp",
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "center"
                            })
                        }), (0, t.jsx)("div", {
                            className: "blog_data",
                            children: (0, t.jsxs)("div", {
                                className: "blog_content",
                                children: [(0, t.jsx)("h4", {
                                    children: null == i ? void 0 : null === (e = i.blogHeader) || void 0 === e ? void 0 : null === (l = e[0]) || void 0 === l ? void 0 : l.banner_heading
                                }), (0, t.jsx)("p", {
                                    children: null == i ? void 0 : null === (s = i.blogHeader) || void 0 === s ? void 0 : null === (n = s[0]) || void 0 === n ? void 0 : n.description
                                })]
                            })
                        })]
                    })
                },
                x = s(6483),
                p = s(6066),
                f = function(e) {
                    var l, s, n;
                    let {
                        data: a,
                        activeIndex: o
                    } = e, {
                        blogData: c
                    } = (0, d.v9)(e => e.blog), u = (0, r.useRef)(null), g = (0, r.useRef)(null), m = (0, r.useRef)(null), v = {
                        dots: !1,
                        infinite: !0,
                        speed: 500,
                        arrows: !1,
                        draggable: !1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: !0,
                        prevArrow: (0, t.jsx)(i(), {
                            className: "one_image_need",
                            src: "/images/leftarroww.png",
                            width: 69,
                            height: 69
                        }),
                        nextArrow: (0, t.jsx)(i(), {
                            className: "one_image_need",
                            src: "/images/rightarroww.png",
                            width: 69,
                            height: 69
                        }),
                        responsive: [{
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: !0,
                                dots: !1
                            }
                        }, {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    }, x = {
                        dots: !1,
                        infinite: !0,
                        speed: 500,
                        arrows: !1,
                        draggable: !1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: !0,
                        prevArrow: (0, t.jsx)(i(), {
                            className: "one_image_need",
                            src: "/images/leftarroww.png",
                            width: 69,
                            height: 69
                        }),
                        nextArrow: (0, t.jsx)(i(), {
                            className: "one_image_need",
                            src: "/images/rightarroww.png",
                            width: 69,
                            height: 69
                        }),
                        responsive: [{
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: !0,
                                dots: !1
                            }
                        }, {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    }, f = {
                        dots: !1,
                        infinite: !0,
                        speed: 500,
                        arrows: !1,
                        draggable: !1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: !0,
                        prevArrow: (0, t.jsx)(i(), {
                            className: "one_image_need",
                            src: "/images/leftarroww.png",
                            width: 69,
                            height: 69
                        }),
                        nextArrow: (0, t.jsx)(i(), {
                            className: "one_image_need",
                            src: "/images/rightarroww.png",
                            width: 69,
                            height: 69
                        }),
                        responsive: [{
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: !0,
                                dots: !1
                            }
                        }, {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    };
                    return (0, r.useEffect)(() => {
                        u.current && (o < 3 && u.current.slickGoTo(o + 1), 3 === o && u.current.slickGoTo(0))
                    }, [o]), (0, r.useEffect)(() => {
                        g.current && (o < 2 && g.current.slickGoTo(o + 2), 2 === o && g.current.slickGoTo(0), 3 === o && g.current.slickGoTo(1))
                    }, [o]), (0, r.useEffect)(() => {
                        m.current && (0 === o && m.current.slickGoTo(3), 1 === o && m.current.slickGoTo(0), 2 === o && m.current.slickGoTo(1), 3 === o && m.current.slickGoTo(2))
                    }, [o]), (0, t.jsxs)("div", {
                        className: "card_carousel",
                        children: [(0, t.jsx)(p.Z, {
                            ref: u,
                            ...v,
                            className: "main_blog_feature",
                            children: null == c ? void 0 : null === (l = c.isfeauredBlog) || void 0 === l ? void 0 : l.map((e, l) => (0, t.jsx)("div", {
                                className: "bottom_blog",
                                children: (0, t.jsxs)("div", {
                                    className: "head_featureblog_image",
                                    children: [(0, t.jsx)(h(), {
                                        href: "/blog/".concat(e.slug),
                                        children: (0, t.jsx)("div", {
                                            className: "image_feature",
                                            children: (0, t.jsx)("img", {
                                                src: e.image_link,
                                                width: 525,
                                                height: 334,
                                                alt: "Blog Image"
                                            })
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "headfeature",
                                        children: [(0, t.jsx)("h2", {
                                            children: e.heading
                                        }), (0, t.jsx)("p", {
                                            children: e.formatted_date
                                        }), (0, t.jsx)(h(), {
                                            href: "/blog/".concat(e.slug),
                                            children: (0, t.jsx)("button", {
                                                className: "read-more-button",
                                                children: "Read More"
                                            })
                                        })]
                                    })]
                                })
                            }, l))
                        }), (0, t.jsx)(p.Z, {
                            ref: g,
                            ...x,
                            className: "main_blog_feature",
                            children: null == c ? void 0 : null === (s = c.isfeauredBlog) || void 0 === s ? void 0 : s.map((e, l) => (0, t.jsx)("div", {
                                className: "bottom_blog",
                                children: (0, t.jsxs)("div", {
                                    className: "head_featureblog_image",
                                    children: [(0, t.jsx)(h(), {
                                        href: "/blog/".concat(e.slug),
                                        children: (0, t.jsx)("div", {
                                            className: "image_feature",
                                            children: (0, t.jsx)("img", {
                                                src: e.image_link,
                                                width: 525,
                                                height: 334,
                                                alt: "Blog Image"
                                            })
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "headfeature",
                                        children: [(0, t.jsx)("h2", {
                                            children: e.heading
                                        }), (0, t.jsx)("p", {
                                            children: e.formatted_date
                                        }), (0, t.jsxs)(h(), {
                                            href: "/blog/".concat(e.slug),
                                            children: [" ", (0, t.jsx)("button", {
                                                className: "read-more-button",
                                                children: "Read More"
                                            })]
                                        })]
                                    })]
                                })
                            }, l))
                        }), (0, t.jsx)(p.Z, {
                            ref: m,
                            ...f,
                            className: "main_blog_feature",
                            children: null == c ? void 0 : null === (n = c.isfeauredBlog) || void 0 === n ? void 0 : n.map((e, l) => (0, t.jsx)("div", {
                                className: "bottom_blog",
                                children: (0, t.jsxs)("div", {
                                    className: "head_featureblog_image",
                                    children: [(0, t.jsx)(h(), {
                                        href: "/blog/".concat(e.slug),
                                        children: (0, t.jsx)("div", {
                                            className: "image_feature",
                                            children: (0, t.jsx)("img", {
                                                src: e.image_link,
                                                width: 525,
                                                height: 334,
                                                alt: "Blog Image"
                                            })
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "headfeature",
                                        children: [(0, t.jsx)("h2", {
                                            children: e.heading
                                        }), (0, t.jsx)("p", {
                                            children: e.formatted_date
                                        }), (0, t.jsx)(h(), {
                                            href: "/blog/".concat(e.slug),
                                            children: (0, t.jsx)("button", {
                                                className: "read-more-button",
                                                children: "Read More"
                                            })
                                        })]
                                    })]
                                })
                            }, l))
                        })]
                    })
                },
                j = function() {
                    var e, l;
                    let [s, n] = (0, r.useState)(0), {
                        blogData: a
                    } = (0, d.v9)(e => e.blog), i = [{
                        id: 1,
                        image: "/images/blogpackage1.png",
                        title: "Online Custom Packaging",
                        sub_title: "The best way to find a designer for packaging",
                        para: "August 29, 2018"
                    }, {
                        id: 2,
                        image: "/images/blogpackage2.png",
                        title: "Innovative idea",
                        sub_title: "Global Market Study on corrugated Packaging",
                        para: "August 12, 2018"
                    }, {
                        id: 3,
                        image: "/images/blogpackage3.png",
                        title: "Custom Packaging",
                        sub_title: "Best read packaging stories this month",
                        para: "August 12, 2018"
                    }, {
                        id: 4,
                        image: "/images/allblog2.png",
                        title: "Custom Packaging",
                        sub_title: "Best read packaging stories this month",
                        para: "August 12, 2018"
                    }], c = () => {
                        n(0 === s ? i.length - 1 : s - 1)
                    }, u = () => {
                        n(s === i.length - 1 ? 0 : s + 1)
                    };
                    return (0, t.jsxs)("div", {
                        className: "main_featureblog",
                        children: [(0, t.jsx)("div", {
                            className: "main_section_featureblog",
                            children: (0, t.jsx)("h3", {
                                className: "featureblog_title",
                                children: "Featured Blog"
                            })
                        }), (0, t.jsxs)("div", {
                            className: "featureblog_head",
                            children: [(0, t.jsxs)(o.Z, {
                                children: [(0, t.jsxs)("div", {
                                    className: "carousel_top",
                                    children: [(0, t.jsx)(x.Z, {
                                        nextIcon: (0, t.jsx)("div", {
                                            className: " carousel-arrow carousel-arrow-right",
                                            children: (0, t.jsx)("img", {
                                                src: "/images/icons/r.png",
                                                style: {
                                                    cursor: "pointer",
                                                    width: "22px"
                                                },
                                                onClick: c
                                            })
                                        }),
                                        prevIcon: (0, t.jsxs)("div", {
                                            className: " carousel-arrow carousel-arrow-left",
                                            children: [" ", (0, t.jsx)("img", {
                                                src: "/images/icons/l.png",
                                                style: {
                                                    cursor: "pointer",
                                                    width: "22px"
                                                },
                                                onClick: u
                                            })]
                                        }),
                                        indicators: !1,
                                        activeIndex: s,
                                        interval: null,
                                        controls: !0,
                                        children: null == a ? void 0 : null === (e = a.isfeauredBlog) || void 0 === e ? void 0 : e.map((e, l) => (0, t.jsx)(x.Z.Item, {
                                            className: "slide",
                                            children: (0, t.jsxs)("div", {
                                                className: "blogpackage_pic",
                                                children: [(0, t.jsx)("img", {
                                                    className: "featureblog_image",
                                                    style: {},
                                                    src: null == e ? void 0 : e.thum_image,
                                                    alt: "Blog Package"
                                                }), (0, t.jsx)("div", {
                                                    className: "blog_feature_content",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "content-wrapper",
                                                        style: {
                                                            paddingLeft: "50px"
                                                        },
                                                        children: [(0, t.jsx)("h3", {
                                                            children: e.heading
                                                        }), (0, t.jsx)("p", {
                                                            children: e.formatted_date
                                                        })]
                                                    })
                                                })]
                                            })
                                        }, l))
                                    }), (0, t.jsx)(h(), {
                                        href: "/blog/".concat((null == a ? void 0 : a.isfeauredBlog) ? null === (l = null == a ? void 0 : a.isfeauredBlog[s]) || void 0 === l ? void 0 : l.slug : ""),
                                        children: (0, t.jsx)("button", {
                                            className: "read-more-button",
                                            children: "Read More"
                                        })
                                    })]
                                }), (0, t.jsx)(f, {
                                    data: i,
                                    activeIndex: s
                                })]
                            }), (0, t.jsx)("div", {
                                children: (0, t.jsx)("img", {
                                    style: {
                                        width: "100%",
                                        margin: "auto "
                                    },
                                    src: "/mix_img.png",
                                    alt: ""
                                })
                            })]
                        })]
                    })
                },
                b = s(5955),
                _ = s(9008),
                w = s.n(_),
                N = !0,
                k = function(e) {
                    var l, s, a, i;
                    let {
                        maetaData: r
                    } = e, {
                        blogData: o
                    } = (0, d.v9)(e => e.blog);
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsxs)(w(), {
                            children: [(0, t.jsx)("meta", {
                                property: "og:site_name",
                                content: "Biotech Packages"
                            }), (0, t.jsx)("link", {
                                rel: "canonical",
                                href: "https://www.biotechpackages.com/blog"
                            }), (0, t.jsx)("meta", {
                                property: "og:url",
                                content: "https://www.biotechpackages.com/blog"
                            }), (0, t.jsx)("title", {
                                children: null == r ? void 0 : null === (l = r.tags_desc) || void 0 === l ? void 0 : l.meta_title
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
                                content: null == r ? void 0 : null === (s = r.tags_desc) || void 0 === s ? void 0 : s.meta_title
                            }), (0, t.jsx)("meta", {
                                property: "og:description",
                                content: null == r ? void 0 : null === (a = r.tags_desc) || void 0 === a ? void 0 : a.meta_description
                            }), (0, t.jsx)("meta", {
                                name: "description",
                                content: null == r ? void 0 : null === (i = r.tags_desc) || void 0 === i ? void 0 : i.meta_description
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
                            children: [(0, t.jsx)(b.Z, {}), (0, t.jsx)(v, {}), (0, t.jsx)(j, {}), (0, t.jsx)(m, {}), (0, t.jsx)(n.Z, {})]
                        })]
                    })
                }
        },
        6483: function(e, l, s) {
            "use strict";
            s.d(l, {
                Z: function() {
                    return N
                }
            });
            var t = s(8146),
                n = s(7294),
                a = function(e, l) {
                    var s = (0, n.useRef)(!0);
                    (0, n.useEffect)(function() {
                        if (s.current) {
                            s.current = !1;
                            return
                        }
                        return e()
                    }, l)
                },
                i = s(2029),
                r = s(6454),
                o = s(6852),
                c = s(1819),
                d = s(4184),
                u = s.n(d),
                g = s(7150),
                h = (0, s(6611).Z)("carousel-caption"),
                m = s(6792),
                v = s(5893);
            let x = n.forwardRef(({
                as: e = "div",
                bsPrefix: l,
                className: s,
                ...t
            }, n) => {
                let a = u()(s, (0, m.vE)(l, "carousel-item"));
                return (0, v.jsx)(e, {
                    ref: n,
                    ...t,
                    className: a
                })
            });

            function p(e, l) {
                let s = 0;
                return n.Children.map(e, e => n.isValidElement(e) ? l(e, s++) : e)
            }
            x.displayName = "CarouselItem";
            var f = s(2646),
                j = s(4509),
                b = s(2785);
            let _ = {
                    slide: !0,
                    fade: !1,
                    controls: !0,
                    indicators: !0,
                    indicatorLabels: [],
                    defaultActiveIndex: 0,
                    interval: 5e3,
                    keyboard: !0,
                    pause: "hover",
                    wrap: !0,
                    touch: !0,
                    prevIcon: (0, v.jsx)("span", {
                        "aria-hidden": "true",
                        className: "carousel-control-prev-icon"
                    }),
                    prevLabel: "Previous",
                    nextIcon: (0, v.jsx)("span", {
                        "aria-hidden": "true",
                        className: "carousel-control-next-icon"
                    }),
                    nextLabel: "Next"
                },
                w = n.forwardRef((e, l) => {
                    var s, d, h;
                    let x, _;
                    let {
                        as: w = "div",
                        bsPrefix: N,
                        slide: k,
                        fade: T,
                        controls: S,
                        indicators: y,
                        indicatorLabels: C,
                        activeIndex: E,
                        onSelect: Z,
                        onSlide: I,
                        onSlid: R,
                        interval: B,
                        keyboard: A,
                        onKeyDown: M,
                        pause: G,
                        onMouseOver: P,
                        onMouseOut: $,
                        wrap: L,
                        touch: D,
                        onTouchStart: F,
                        onTouchMove: O,
                        onTouchEnd: W,
                        prevIcon: X,
                        prevLabel: H,
                        nextIcon: V,
                        nextLabel: q,
                        variant: z,
                        className: K,
                        children: U,
                        ...J
                    } = (0, g.Ch)(e, {
                        activeIndex: "onSelect"
                    }), Q = (0, m.vE)(N, "carousel"), Y = (0, m.SC)(), ee = (0, n.useRef)(null), [el, es] = (0, n.useState)("next"), [et, en] = (0, n.useState)(!1), [ea, ei] = (0, n.useState)(!1), [er, eo] = (0, n.useState)(E || 0);
                    (0, n.useEffect)(() => {
                        ea || E === er || (ee.current ? es(ee.current) : es((E || 0) > er ? "next" : "prev"), k && ei(!0), eo(E || 0))
                    }, [E, ea, er, k]), (0, n.useEffect)(() => {
                        ee.current && (ee.current = null)
                    });
                    let ec = 0;
                    s = (e, l) => {
                        ++ec, l === E && (x = e.props.interval)
                    }, _ = 0, n.Children.forEach(U, e => {
                        n.isValidElement(e) && s(e, _++)
                    });
                    let ed = (0, i.Z)(x),
                        eu = (0, n.useCallback)(e => {
                            if (ea) return;
                            let l = er - 1;
                            if (l < 0) {
                                if (!L) return;
                                l = ec - 1
                            }
                            ee.current = "prev", null == Z || Z(l, e)
                        }, [ea, er, Z, L, ec]),
                        eg = (0, t.Z)(e => {
                            if (ea) return;
                            let l = er + 1;
                            if (l >= ec) {
                                if (!L) return;
                                l = 0
                            }
                            ee.current = "next", null == Z || Z(l, e)
                        }),
                        eh = (0, n.useRef)();
                    (0, n.useImperativeHandle)(l, () => ({
                        element: eh.current,
                        prev: eu,
                        next: eg
                    }));
                    let em = (0, t.Z)(() => {
                            !document.hidden && function(e) {
                                if (!e || !e.style || !e.parentNode || !e.parentNode.style) return !1;
                                let l = getComputedStyle(e);
                                return "none" !== l.display && "hidden" !== l.visibility && "none" !== getComputedStyle(e.parentNode).display
                            }(eh.current) && (Y ? eu() : eg())
                        }),
                        ev = "next" === el ? "start" : "end";
                    a(() => {
                        k || (null == I || I(er, ev), null == R || R(er, ev))
                    }, [er]);
                    let ex = `${Q}-item-${el}`,
                        ep = `${Q}-item-${ev}`,
                        ef = (0, n.useCallback)(e => {
                            (0, j.Z)(e), null == I || I(er, ev)
                        }, [I, er, ev]),
                        ej = (0, n.useCallback)(() => {
                            ei(!1), null == R || R(er, ev)
                        }, [R, er, ev]),
                        eb = (0, n.useCallback)(e => {
                            if (A && !/input|textarea/i.test(e.target.tagName)) switch (e.key) {
                                case "ArrowLeft":
                                    e.preventDefault(), Y ? eg(e) : eu(e);
                                    return;
                                case "ArrowRight":
                                    e.preventDefault(), Y ? eu(e) : eg(e);
                                    return
                            }
                            null == M || M(e)
                        }, [A, M, eu, eg, Y]),
                        e_ = (0, n.useCallback)(e => {
                            "hover" === G && en(!0), null == P || P(e)
                        }, [G, P]),
                        ew = (0, n.useCallback)(e => {
                            en(!1), null == $ || $(e)
                        }, [$]),
                        eN = (0, n.useRef)(0),
                        ek = (0, n.useRef)(0),
                        eT = (d = (0, r.Z)(), h = (0, n.useRef)(), (0, o.Z)(function() {
                            return clearTimeout(h.current)
                        }), (0, n.useMemo)(function() {
                            var e = function() {
                                return clearTimeout(h.current)
                            };
                            return {
                                set: function(l, s) {
                                    void 0 === s && (s = 0), d() && (e(), s <= 2147483647 ? h.current = setTimeout(l, s) : function e(l, s, t) {
                                        var n = t - Date.now();
                                        l.current = n <= 2147483647 ? setTimeout(s, n) : setTimeout(function() {
                                            return e(l, s, t)
                                        }, 2147483647)
                                    }(h, l, Date.now() + s))
                                },
                                clear: e
                            }
                        }, [])),
                        eS = (0, n.useCallback)(e => {
                            eN.current = e.touches[0].clientX, ek.current = 0, "hover" === G && en(!0), null == F || F(e)
                        }, [G, F]),
                        ey = (0, n.useCallback)(e => {
                            e.touches && e.touches.length > 1 ? ek.current = 0 : ek.current = e.touches[0].clientX - eN.current, null == O || O(e)
                        }, [O]),
                        eC = (0, n.useCallback)(e => {
                            if (D) {
                                let l = ek.current;
                                Math.abs(l) > 40 && (l > 0 ? eu(e) : eg(e))
                            }
                            "hover" === G && eT.set(() => {
                                en(!1)
                            }, B || void 0), null == W || W(e)
                        }, [D, G, eu, eg, eT, B, W]),
                        eE = null != B && !et && !ea,
                        eZ = (0, n.useRef)();
                    (0, n.useEffect)(() => {
                        var e, l;
                        if (eE) return eZ.current = window.setInterval(document.visibilityState ? em : Y ? eu : eg, null != (e = null != (l = ed.current) ? l : B) ? e : void 0), () => {
                            null !== eZ.current && clearInterval(eZ.current)
                        }
                    }, [eE, eu, eg, ed, B, em, Y]);
                    let eI = (0, n.useMemo)(() => y && Array.from({
                        length: ec
                    }, (e, l) => e => {
                        null == Z || Z(l, e)
                    }), [y, ec, Z]);
                    return (0, v.jsxs)(w, {
                        ref: eh,
                        ...J,
                        onKeyDown: eb,
                        onMouseOver: e_,
                        onMouseOut: ew,
                        onTouchStart: eS,
                        onTouchMove: ey,
                        onTouchEnd: eC,
                        className: u()(K, Q, k && "slide", T && `${Q}-fade`, z && `${Q}-${z}`),
                        children: [y && (0, v.jsx)("div", {
                            className: `${Q}-indicators`,
                            children: p(U, (e, l) => (0, v.jsx)("button", {
                                type: "button",
                                "data-bs-target": "",
                                "aria-label": null != C && C.length ? C[l] : `Slide ${l+1}`,
                                className: l === er ? "active" : void 0,
                                onClick: eI ? eI[l] : void 0,
                                "aria-current": l === er
                            }, l))
                        }), (0, v.jsx)("div", {
                            className: `${Q}-inner`,
                            children: p(U, (e, l) => {
                                let s = l === er;
                                return k ? (0, v.jsx)(b.Z, { in: s,
                                    onEnter: s ? ef : void 0,
                                    onEntered: s ? ej : void 0,
                                    addEndListener: f.Z,
                                    children: (l, t) => n.cloneElement(e, { ...t,
                                        className: u()(e.props.className, s && "entered" !== l && ex, ("entered" === l || "exiting" === l) && "active", ("entering" === l || "exiting" === l) && ep)
                                    })
                                }) : n.cloneElement(e, {
                                    className: u()(e.props.className, s && "active")
                                })
                            })
                        }), S && (0, v.jsxs)(v.Fragment, {
                            children: [(L || 0 !== E) && (0, v.jsxs)(c.Z, {
                                className: `${Q}-control-prev`,
                                onClick: eu,
                                children: [X, H && (0, v.jsx)("span", {
                                    className: "visually-hidden",
                                    children: H
                                })]
                            }), (L || E !== ec - 1) && (0, v.jsxs)(c.Z, {
                                className: `${Q}-control-next`,
                                onClick: eg,
                                children: [V, q && (0, v.jsx)("span", {
                                    className: "visually-hidden",
                                    children: q
                                })]
                            })]
                        })]
                    })
                });
            w.displayName = "Carousel", w.defaultProps = _;
            var N = Object.assign(w, {
                Caption: h,
                Item: x
            })
        }
    },
    function(e) {
        e.O(0, [776, 3081, 395, 1033, 149, 1171, 6066, 7356, 5955, 9774, 2888, 179], function() {
            return e(e.s = 6055)
        }), _N_E = e.O()
    }
]);