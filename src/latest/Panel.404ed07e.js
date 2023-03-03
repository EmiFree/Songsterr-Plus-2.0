import { v as t, d as e, _ as i, c as s } from "./preact.294f37c2.js";
import { u as a, L as l, cl as r } from "./index.6eeae9f8.js";
let c = "Bt4e0",
  n = "Bt4t5",
  o = "Bt42aq",
  m = { wrap: "Bt4e0", content: "Bt4t5", title: "Bt42aq" };
var v = m;
let u = "vq29p",
  d = "vq2gw",
  h = "vq2gt",
  g = "vq2gt vq170",
  f = "vq2qk",
  b = "vq2ux",
  y = "vqlr",
  p = {
    menu: "vq29p",
    logo: "vq2gw",
    item: "vq2gt",
    itemActive: "vq2gt vq170",
    icon: "vq2qk",
    title: "vq2ux",
    stroke: "vqlr",
  };
var w = "/static/media/account-symbol.a0ec96c1.svg",
  q = "/static/media/favorites-symbol.528c5e11.svg",
  x = "/static/media/my-tabs-symbol.41324f24.svg",
  N = "/static/media/search-symbol.54a72b2f.svg",
  B = "/static/media/signin-symbol.b06f613d.svg",
  $ = "/static/media/submit-symbol.861fe695.svg",
  k = "/static/media/logo-mobile.ed62386f.svg";
let A = (e) => {
    let {
      styles: { icon: i },
    } = e;
    return t(
      "svg",
      {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        className: i,
        "aria-labelledby": "title-signin",
      },
      t("title", { id: "title-signin" }, "Sign In"),
      t("use", { xlinkHref: `${B}#icon` })
    );
  },
  H = (e) => {
    let {
      styles: { icon: i },
    } = e;
    return t(
      "svg",
      {
        width: 21,
        height: 20,
        viewBox: "0 0 21 20",
        className: i,
        "aria-labelledby": "title-account",
      },
      t("title", { id: "title-account" }, "Account"),
      t("use", { xlinkHref: `${w}#icon` })
    );
  },
  I = (e) => {
    let {
      styles: { icon: i },
    } = e;
    return t(
      "svg",
      {
        width: 20,
        height: 20,
        viewBox: "0 0 21 26",
        className: i,
        "aria-labelledby": "title-mytabs",
      },
      t("title", { id: "title-mytabs" }, "My Tabs"),
      t("use", { xlinkHref: `${x}#icon` })
    );
  },
  L = (e) => {
    let {
      styles: { icon: i },
    } = e;
    return t(
      "svg",
      {
        width: 22,
        height: 20,
        viewBox: "0 0 24 22",
        className: i,
        "aria-labelledby": "title-favorites",
      },
      t("title", { id: "title-favorites" }, "Favorites"),
      t("use", { xlinkHref: `${q}#icon` })
    );
  },
  S = (e) => {
    let {
      styles: { icon: i },
    } = e;
    return t(
      "svg",
      {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        className: i,
        "aria-labelledby": "title-search",
      },
      t("title", { id: "title-search" }, "Search"),
      t("use", { xlinkHref: `${N}#icon` })
    );
  },
  M = (e) => {
    let {
      styles: { icon: i },
    } = e;
    return t(
      "svg",
      {
        width: 23,
        height: 20,
        viewBox: "0 0 23 20",
        className: i,
        "aria-labelledby": "title-submit",
      },
      t("title", { id: "title-submit" }, "Submit"),
      t("use", { xlinkHref: `${$}#icon` })
    );
  };
function j(i) {
  let { id: s, title: c, isLoggedIn: n } = i,
    { songs: o, favorites: m } = a("songs", "favorites");
  return t(
    e,
    null,
    t(
      "nav",
      { className: p.menu, id: "top" },
      t(
        "span",
        { className: p.logo },
        t("img", { src: k, width: 26, height: 30, alt: "Songsterr" })
      ),
      n &&
        t(
          l,
          {
            id: "menu-account",
            className: "account" === s ? p.itemActive : p.item,
            href: "/a/wa/account",
            "aria-active": "account" === s,
          },
          t(H, { styles: p })
        ),
      !n &&
        t(
          l,
          {
            id: "menu-signin",
            className: "signin" === s ? p.itemActive : p.item,
            href: "/a/wa/signin?next=account",
            "aria-active": "signin" === s,
          },
          t(A, { styles: p })
        ),
      t(
        l,
        {
          id: "menu-submit",
          className: "submit" === s ? p.itemActive : p.item,
          href: "/a/wa/submit",
          "aria-active": "submit" === s,
        },
        t(M, { styles: p })
      ),
      t(
        l,
        {
          id: "menu-mytabs",
          className: "mytabs" === s ? p.itemActive : p.item,
          href: "/a/wa/mytabs",
          "aria-active": "mytabs" === s,
        },
        t(I, { styles: p })
      ),
      t(
        l,
        {
          id: "menu-favorites",
          className: "favorites" === s ? p.itemActive : p.item,
          href: `/a/wa/favorites${r(m.pattern, m.filters)}`,
          "aria-active": "favorites" === s,
        },
        t(L, { styles: p })
      ),
      t(
        l,
        {
          id: "menu-search",
          className: "search" === s ? p.itemActive : p.item,
          href: `/${r(o.pattern, o.filters)}`,
          "aria-active": "search" === s,
        },
        t(S, { styles: p })
      )
    ),
    t("h1", { className: p.title }, c)
  );
}
let P = new Map();
class T extends i {
  ref = s();
  getListId() {
    let { id: t, panel: e, listId: i } = this.props;
    return `list-${e || t}-${i || "-"}`;
  }
  componentDidMount() {
    try {
      let t = this.ref.current;
      if (t && "function" == typeof t.scroll) {
        let e = P.get(this.getListId());
        void 0 !== e && t.scroll(0, e || 0);
      }
    } catch (t) {
      console.error(t);
    }
  }
  componentWillUnmount() {
    let t = (this.ref.current && this.ref.current.scrollTop) || 0;
    P.set(this.getListId(), t);
  }
  render() {
    let { screen: i, user: s } = a("screen", "user"),
      { id: l, title: r, onClick: c } = this.props,
      n = this.props.styles ? { ...v, ...this.props.styles } : v;
    return t(
      "div",
      { id: `${l}-wrap`, className: n.wrap, onClick: c, ref: this.ref },
      t(
        "div",
        { className: n.content },
        i.isSmall
          ? t(j, { id: l, title: r, isLoggedIn: s.isLoggedIn })
          : t("h1", { className: n.title, id: "top" }, r),
        t(e, null, this.props.children)
      )
    );
  }
}
export { T as P };
