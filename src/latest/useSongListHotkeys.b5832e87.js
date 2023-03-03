import {
  v as e,
  x as t,
  _ as a,
  b as c,
  h as l,
  d as i,
} from "./preact.294f37c2.js";
import {
  bA as r,
  f as s,
  bB as n,
  aG as o,
  u as h,
  bd as d,
  L as v,
  bm as u,
  bx as m,
  by as f,
  bw as p,
  bo as g,
  bj as b,
  bC as B,
  bD as w,
  bE as y,
  bF as C,
  ay as x,
} from "./index.6eeae9f8.js";
var E = "/static/media/plus-showroom-sidebar-stats.ebf9061f.svg";
let z = "Bcr2ak",
  k = "Bcr2ak Bcr33f",
  S = "Bcr2ak Bcr1tq",
  A = "Bcr2c8",
  M = {
    pane: "Bcr2ak",
    sticked: "Bcr2ak Bcr33f",
    free: "Bcr2ak Bcr1tq",
    onePixelOffScreen: "Bcr2c8",
  };
function j(t) {
  let { noObserver: a, children: c } = t;
  return e(
    "div",
    { className: a ? M.pane : M.sticked, id: "sticky-list-header" },
    c
  );
}
let N = "B0cew",
  P = "B0c184",
  $ = "B0cew B0c14s",
  D = "B0c2e8",
  F = "B0c21e",
  I = "B0cew B0c1k0",
  _ = "B0c14x",
  q = "B0c2ax",
  K = "B0c1im",
  H = "B0c137",
  R = r + " " + s + " B0c34i",
  V = n + " " + s + " B0ch7",
  L = "B0c2jr",
  T = "B0c2pk",
  O = "B0c209",
  U = {
    item: "B0cew",
    wrapper: "B0c184",
    numerated: "B0cew B0c14s",
    name: "B0c2e8",
    artist: "B0c21e",
    favorite: "B0cew B0c1k0",
    active: "B0c14x",
    removal: "B0c2ax",
    controls: "B0c1im",
    buttons: "B0c137",
    cancel: r + " " + s + " B0c34i",
    remove: n + " " + s + " B0ch7",
    fav: "B0c2jr",
    icon: "B0c2pk",
    videoTag: "B0c209",
  },
  G = "Bp6ta",
  J = o + " Bp619r",
  Q = "Bp62wh",
  W = { showroom: "Bp6ta", inner: o + " Bp619r", plusBanner: "Bp62wh" },
  X = t((t) => {
    let { page: a, instrumentFilter: c } = t,
      { dispatch: l, ads: i } = h("ads"),
      r = l("curiosity/setConversionProps", {
        "Last referring link": "Panel Banner",
      });
    return (
      d("search_panel", { isTargeted: !1, page: a, instrumentFilter: c }),
      e(
        "div",
        { className: W.showroom, id: "showroom_sidebar" },
        e(
          "div",
          { className: W.inner, id: "Redesign_ATF_tab_page_468x60" },
          i.notsyFailed &&
            e(
              v,
              { className: W.plusBanner, to: "/a/wa/plus", onClick: r },
              e("img", { src: E, alt: "Get Plus" })
            )
        )
      )
    );
  });
class Y extends a {
  render() {
    return e(
      "svg",
      { width: 189, height: 100, viewBox: "0 0 189 100", fill: "#E03A3A" },
      e("rect", { x: "90", width: "98", height: "4.1" }),
      e("rect", { x: "90", y: "24", width: "98", height: "4.1" }),
      e("rect", { x: "91", y: "48", width: "98", height: "4.1" }),
      e("rect", {
        x: "54.12",
        y: "47.15",
        width: "38.82",
        height: "4.1",
        transform: "rotate(40.52 54.12 47.15)",
      }),
      e("rect", { x: "91", y: "72", width: "97", height: "4.1" }),
      e("rect", { y: "96", width: "188", height: "4.1" }),
      e("circle", {
        cx: "31",
        cy: "31",
        r: "29",
        stroke: "#E03A3A",
        "stroke-width": "4.1",
        fill: "none",
      })
    );
  }
}
function Z(t) {
  let {
    styles: { icon: a, stroke: c },
  } = t;
  return e(
    "svg",
    { width: 10, height: 6, viewBox: "0 1 10 6", className: a },
    e("path", { d: "M1 1l4 4 4-4", className: c })
  );
}
let ee =
    "15v-9c0-1.037-.429-3.811-.429-3.811.286-.214.286-1.138.286-1.32 0-.229-.25-.869-.857-.869s-.857.64-.857.869c0 .182 0 1.147.286 1.32 0 0-.429 2.819-.429 3.811v9s0 1 1 1 1-1 1-1z",
  et =
    "M2.314 1.44c0-.515.417-.965 1.02-1.067.963-.163 2.44-.373 3.666-.373s2.703.21 3.666.373c.602.102 1.02.552 1.02 1.068v1.661c.244-.218.59-.354.975-.354.74 0 1.339.504 1.339 1.125s-.6 1.125-1.339 1.125c-.384 0-.73-.136-.975-.354v1.616c.244-.218.59-.354.975-.354.74 0 1.339.504 1.339 1.125 0 .622-.6 1.125-1.339 1.125-.384 0-.73-.136-.975-.354v1.616c.244-.218.59-.354.975-.354.74 0 1.339.504 1.339 1.125s-.6 1.125-1.339 1.125c-.384 0-.73-.136-.975-.354v.91c0 .62-.566 1.63-1.339 1.63v.563h-6.694v-.563c-.74 0-1.34-1.01-1.34-1.63v-.91c-.244.218-.59.354-.974.354-.74 0-1.339-.504-1.339-1.125s.6-1.125 1.339-1.125c.384 0 .73.136.975.354v-1.615c-.245.217-.59.353-.975.353-.74 0-1.339-.503-1.339-1.125 0-.621.6-1.125 1.339-1.125.384 0 .73.136.975.354v-1.616c-.245.218-.59.354-.975.354-.74 0-1.339-.504-1.339-1.125s.6-1.125 1.339-1.125c.384 0 .73.136.975.354v-1.661zm1.625 2.298a.75.75 0 01.75-.75h.508a.75.75 0 01.75.75v6.607a.75.75 0 01-.75.75h-.508a.75.75 0 01-.75-.75v-6.607zm5.15-.75a.75.75 0 00-.75.75v6.607c0 .414.335.75.75.75h.508a.75.75 0 00.75-.75v-6.607a.75.75 0 00-.75-.75h-.508zm1.258 11.637h-6.694v2.25s0 1.125 3.347 1.125 3.347-1.125 3.347-1.125v-2.25z",
  ea =
    "M1.818 1.28a.97.97 0 01.801-.948c.757-.145 1.917-.332 2.88-.332.965 0 2.125.187 2.881.332a.97.97 0 01.802.949v1.476c.192-.193.464-.314.766-.314.581 0 1.052.447 1.052 1 0 .552-.471 1-1.052 1-.302 0-.574-.121-.766-.315v1.437c.192-.194.464-.315.766-.315.581 0 1.052.448 1.052 1s-.471 1-1.052 1c-.302 0-.574-.121-.766-.315v1.437c.192-.194.464-.315.766-.315.581 0 1.052.448 1.052 1s-.471 1-1.052 1c-.302 0-.574-.121-.766-.315v.809c0 .552-.445 1.449-1.052 1.449v.5h-5.26v-.5c-.581 0-1.052-.897-1.052-1.45v-.807a1.075 1.075 0 01-.766.314c-.581 0-1.052-.448-1.052-1s.471-1 1.052-1c.302 0 .574.12.766.314v-1.435a1.075 1.075 0 01-.766.314c-.581 0-1.052-.448-1.052-1s.471-1 1.052-1c.302 0 .574.12.766.314v-1.436a1.075 1.075 0 01-.766.315c-.581 0-1.052-.448-1.052-1 0-.553.471-1 1.052-1 .302 0 .574.12.766.314v-1.476zm1.277 2.126a.75.75 0 01.75-.75h.078a.75.75 0 01.75.75v5.706a.75.75 0 01-.75.75h-.078a.75.75 0 01-.75-.75v-5.706zm4.207-.75a.75.75 0 00-.75.75v5.706c0 .414.336.75.75.75h.078a.75.75 0 00.75-.75v-5.706a.75.75 0 00-.75-.75h-.078zm.828 12.344v-2h-5.26v2s0 1 2.63 1 2.63-1 2.63-1z",
  ec =
    "M4.39.373c-.602.102-1.02.552-1.02 1.068l.086 1.31h-.46a1.313 1.313 0 10-2.301.732 1.313 1.313 0 102.245.806h.615l.257 3.948h-.58a1.313 1.313 0 10-2.301.732 1.313 1.313 0 102.245.806h.736l.145 2.225c0 .621 0 1 .652 1.5v.563h6.695v-.563c.653-.5.653-.879.653-1.5l.049-.758h.683a1.313 1.313 0 102.245-.806 1.313 1.313 0 10-2.301-.732h-.527l.258-3.978h.596a1.313 1.313 0 102.245-.806 1.313 1.313 0 10-2.301-.732h-.44l.179-2.747c0-.516-.418-.966-1.02-1.068-.964-.163-2.44-.373-3.666-.373-1.227 0-2.703.21-3.667.373zm7.014 14.252h-6.695v2.25s0 1.125 3.348 1.125c3.347 0 3.347-1.125 3.347-1.125v-2.25z",
  el =
    "M18 14.847a1.918 1.918 0 01-.085.537 2.888 2.888 0 01-.232.55 3.705 3.705 0 01-.816 1.026 5.618 5.618 0 01-.707.53 7.124 7.124 0 01-.943.507c-.014-.09-.012-4.747-.012-4.747 0-.53.004-1.098.012-1.703a6.735 6.735 0 001.309-.773c.173-.133.34-.276.497-.428.163-.158.312-.33.446-.514.134-.185.248-.386.339-.598.094-.216.156-.446.185-.682l.006 6.295h.001zm-11.175-2.668c.177.04 1.112.19 1.112.19.332.049.706.091 1.123.127.417.037.837.055 1.262.055.422 0 .843-.024 1.262-.072a14.308 14.308 0 002.2-.422v6.448c-.324.097-.671.181-1.042.254-.324.064-.692.12-1.106.168-.436.05-.875.075-1.314.073-.463 0-.903-.018-1.32-.055a18.009 18.009 0 01-1.112-.127l-.55-.088a7.536 7.536 0 01-.514-.103l-.001-6.448zm-4.169-3.357c.05.415.197.812.429 1.16.229.347.506.656.822.917.45.363.955.64 1.494.822v6.448a3.985 3.985 0 01-1.239-.604 3.976 3.976 0 01-.48-.398 3.41 3.41 0 01-.44-.526 3.804 3.804 0 01-.36-.664 3.39 3.39 0 01-.226-.803v-6.352zm15.343-1.632a2.175 2.175 0 01-.17.795c-.13.312-.308.6-.526.852-.272.316-.58.598-.915.839-.416.3-.863.55-1.332.747a8.69 8.69 0 01-.84.32c-.327.108-.69.207-1.087.296-.396.088-.826.16-1.291.217-.478.059-.959.089-1.44.089-.502 0-1.029-.02-1.58-.06-.546-.04-1.09-.11-1.627-.212a11.28 11.28 0 01-1.525-.398 4.947 4.947 0 01-1.262-.618 5.496 5.496 0 01-.88-.73 3.675 3.675 0 01-.532-.708 2.356 2.356 0 01-.266-.712 4.05 4.05 0 01-.07-.761c-.022-.474.118-.94.394-1.316l-2.582-.79a.744.744 0 01-.278-.169.85.85 0 01-.156-.236.522.522 0 01-.006-.353.424.424 0 01.22-.314.745.745 0 01.339-.066c.105.003.211.021.312.055.05.019.545.193.545.193l8.729 3.245.105.097a.308.308 0 01.023.29.287.287 0 01-.133.163.218.218 0 01-.17-.006c-.015 0-.2-.052-.555-.157a549.208 549.208 0 01-5.176-1.579c-.1.14-.187.287-.26.442-.087.169-.125.36-.11.55.015.221.059.44.126.651.077.23.198.44.354.619.197.222.427.41.683.555.357.201.736.353 1.129.454a13.61 13.61 0 002.415.483c.698.064 1.271.096 1.719.096a15.048 15.048 0 002.13-.187c.437-.069.869-.162 1.296-.278a5.084 5.084 0 001.147-.453c.332-.176.614-.342.847-.495.206-.132.396-.287.567-.465.139-.143.246-.313.319-.5.07-.199.103-.409.098-.62a1.153 1.153 0 00-.231-.668 2.76 2.76 0 00-.602-.604 5.515 5.515 0 00-.874-.53 10.19 10.19 0 00-2.434-.837 4.178 4.178 0 00-.863-.102c-.031-.016-1.55-1.376-1.55-1.376.309-.009.614-.005.915.012.3.016.605.04.914.072.57.056 1.134.153 1.69.29.294.073.584.16.869.265.277.102.549.222.81.362.452.239.883.52 1.286.84.301.238.572.516.804.827a2.66 2.66 0 01.539 1.582v.002h-.001zm-15.1-6.075a1.449 1.449 0 01-.231-.232.62.62 0 01-.11-.26.6.6 0 01.064-.353.412.412 0 01.277-.254.75.75 0 01.34.006c.102.024.2.065.289.121.042.03 7.315 4.599 8.056 5.069.031.033.06.07.084.108a.467.467 0 01.03.133.248.248 0 01-.053.157c-.062.088-.118.134-.17.138-.059.002-.395-.163-.395-.163-.184-.099-2.367-1.293-2.367-1.293-.2.04-.525.116-.973.23-.55.146-1.091.327-1.62.543-.079-.026-1.24-.705-1.356-.782.128-.063 1.25-.599 1.499-.689a5.15 5.15 0 01.77-.217c-.532-.282-1.04-.56-1.524-.833-.437-.248-2.61-1.429-2.61-1.429z",
  ei = "M5 1v7.3c0 .522.4 2.7 2 2.7s2-2.178 2-2.7v-7.3";
function er(t) {
  let { className: a, instrument: c } = t;
  switch (c) {
    case g:
      return e(
        "svg",
        { width: 19, height: 16, viewBox: "0 0 19 16", className: a },
        e("path", { d: `M15 ${ee}` }),
        e("path", { d: `M19 ${ee}` }),
        e("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M1.818 1.28a.97.97 0 01.801-.948c.757-.145 1.917-.332 2.88-.332.965 0 2.125.187 2.881.332a.97.97 0 01.802.949v1.476c.192-.193.464-.314.766-.314.581 0 1.052.447 1.052 1 0 .552-.471 1-1.052 1-.302 0-.574-.121-.766-.315v1.437c.192-.194.464-.315.766-.315.581 0 1.052.448 1.052 1s-.471 1-1.052 1c-.302 0-.574-.121-.766-.315v1.437c.192-.194.464-.315.766-.315.581 0 1.052.448 1.052 1s-.471 1-1.052 1c-.302 0-.574-.121-.766-.315v.809c0 .552-.445 1.449-1.052 1.449v.5h-5.26v-.5c-.581 0-1.052-.897-1.052-1.45v-.807a1.075 1.075 0 01-.766.314c-.581 0-1.052-.448-1.052-1s.471-1 1.052-1c.302 0 .574.12.766.314v-1.435a1.075 1.075 0 01-.766.314c-.581 0-1.052-.448-1.052-1s.471-1 1.052-1c.302 0 .574.12.766.314v-1.436a1.075 1.075 0 01-.766.315c-.581 0-1.052-.448-1.052-1 0-.553.471-1 1.052-1 .302 0 .574.12.766.314v-1.476zm1.277 2.126a.75.75 0 01.75-.75h.078a.75.75 0 01.75.75v5.706a.75.75 0 01-.75.75h-.078a.75.75 0 01-.75-.75v-5.706zm4.207-.75a.75.75 0 00-.75.75v5.706c0 .414.336.75.75.75h.078a.75.75 0 00.75-.75v-5.706a.75.75 0 00-.75-.75h-.078zm.828 12.344v-2h-5.26v2s0 1 2.63 1 2.63-1 2.63-1z",
        })
      );
    case p:
      return e(
        "svg",
        { width: 19, height: 18, viewBox: "0 0 14 18", className: a },
        e("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M2.314 1.44c0-.515.417-.965 1.02-1.067.963-.163 2.44-.373 3.666-.373s2.703.21 3.666.373c.602.102 1.02.552 1.02 1.068v1.661c.244-.218.59-.354.975-.354.74 0 1.339.504 1.339 1.125s-.6 1.125-1.339 1.125c-.384 0-.73-.136-.975-.354v1.616c.244-.218.59-.354.975-.354.74 0 1.339.504 1.339 1.125 0 .622-.6 1.125-1.339 1.125-.384 0-.73-.136-.975-.354v1.616c.244-.218.59-.354.975-.354.74 0 1.339.504 1.339 1.125s-.6 1.125-1.339 1.125c-.384 0-.73-.136-.975-.354v.91c0 .62-.566 1.63-1.339 1.63v.563h-6.694v-.563c-.74 0-1.34-1.01-1.34-1.63v-.91c-.244.218-.59.354-.974.354-.74 0-1.339-.504-1.339-1.125s.6-1.125 1.339-1.125c.384 0 .73.136.975.354v-1.615c-.245.217-.59.353-.975.353-.74 0-1.339-.503-1.339-1.125 0-.621.6-1.125 1.339-1.125.384 0 .73.136.975.354v-1.616c-.245.218-.59.354-.975.354-.74 0-1.339-.504-1.339-1.125s.6-1.125 1.339-1.125c.384 0 .73.136.975.354v-1.661zm1.625 2.298a.75.75 0 01.75-.75h.508a.75.75 0 01.75.75v6.607a.75.75 0 01-.75.75h-.508a.75.75 0 01-.75-.75v-6.607zm5.15-.75a.75.75 0 00-.75.75v6.607c0 .414.335.75.75.75h.508a.75.75 0 00.75-.75v-6.607a.75.75 0 00-.75-.75h-.508zm1.258 11.637h-6.694v2.25s0 1.125 3.347 1.125 3.347-1.125 3.347-1.125v-2.25z",
        })
      );
    case f:
      return e(
        "svg",
        { width: 19, height: 18, viewBox: "0 0 16 18", className: a },
        e("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M4.39.373c-.602.102-1.02.552-1.02 1.068l.086 1.31h-.46a1.313 1.313 0 10-2.301.732 1.313 1.313 0 102.245.806h.615l.257 3.948h-.58a1.313 1.313 0 10-2.301.732 1.313 1.313 0 102.245.806h.736l.145 2.225c0 .621 0 1 .652 1.5v.563h6.695v-.563c.653-.5.653-.879.653-1.5l.049-.758h.683a1.313 1.313 0 102.245-.806 1.313 1.313 0 10-2.301-.732h-.527l.258-3.978h.596a1.313 1.313 0 102.245-.806 1.313 1.313 0 10-2.301-.732h-.44l.179-2.747c0-.516-.418-.966-1.02-1.068-.964-.163-2.44-.373-3.666-.373-1.227 0-2.703.21-3.667.373zm7.014 14.252h-6.695v2.25s0 1.125 3.348 1.125c3.347 0 3.347-1.125 3.347-1.125v-2.25z",
        }),
        e("circle", { fill: "#fff", r: 1, cx: 6, cy: 4 }),
        e("circle", { fill: "#fff", r: 1, cx: 10, cy: 5 }),
        e("circle", { fill: "#fff", r: 1, cx: 10, cy: 10 }),
        e("circle", { fill: "#fff", r: 1, cx: 6, cy: 9 })
      );
    case m:
      return e(
        "svg",
        { width: 19, height: 19, viewBox: "0 0 18 19", className: a },
        e("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M18 14.847a1.918 1.918 0 01-.085.537 2.888 2.888 0 01-.232.55 3.705 3.705 0 01-.816 1.026 5.618 5.618 0 01-.707.53 7.124 7.124 0 01-.943.507c-.014-.09-.012-4.747-.012-4.747 0-.53.004-1.098.012-1.703a6.735 6.735 0 001.309-.773c.173-.133.34-.276.497-.428.163-.158.312-.33.446-.514.134-.185.248-.386.339-.598.094-.216.156-.446.185-.682l.006 6.295h.001zm-11.175-2.668c.177.04 1.112.19 1.112.19.332.049.706.091 1.123.127.417.037.837.055 1.262.055.422 0 .843-.024 1.262-.072a14.308 14.308 0 002.2-.422v6.448c-.324.097-.671.181-1.042.254-.324.064-.692.12-1.106.168-.436.05-.875.075-1.314.073-.463 0-.903-.018-1.32-.055a18.009 18.009 0 01-1.112-.127l-.55-.088a7.536 7.536 0 01-.514-.103l-.001-6.448zm-4.169-3.357c.05.415.197.812.429 1.16.229.347.506.656.822.917.45.363.955.64 1.494.822v6.448a3.985 3.985 0 01-1.239-.604 3.976 3.976 0 01-.48-.398 3.41 3.41 0 01-.44-.526 3.804 3.804 0 01-.36-.664 3.39 3.39 0 01-.226-.803v-6.352zm15.343-1.632a2.175 2.175 0 01-.17.795c-.13.312-.308.6-.526.852-.272.316-.58.598-.915.839-.416.3-.863.55-1.332.747a8.69 8.69 0 01-.84.32c-.327.108-.69.207-1.087.296-.396.088-.826.16-1.291.217-.478.059-.959.089-1.44.089-.502 0-1.029-.02-1.58-.06-.546-.04-1.09-.11-1.627-.212a11.28 11.28 0 01-1.525-.398 4.947 4.947 0 01-1.262-.618 5.496 5.496 0 01-.88-.73 3.675 3.675 0 01-.532-.708 2.356 2.356 0 01-.266-.712 4.05 4.05 0 01-.07-.761c-.022-.474.118-.94.394-1.316l-2.582-.79a.744.744 0 01-.278-.169.85.85 0 01-.156-.236.522.522 0 01-.006-.353.424.424 0 01.22-.314.745.745 0 01.339-.066c.105.003.211.021.312.055.05.019.545.193.545.193l8.729 3.245.105.097a.308.308 0 01.023.29.287.287 0 01-.133.163.218.218 0 01-.17-.006c-.015 0-.2-.052-.555-.157a549.208 549.208 0 01-5.176-1.579c-.1.14-.187.287-.26.442-.087.169-.125.36-.11.55.015.221.059.44.126.651.077.23.198.44.354.619.197.222.427.41.683.555.357.201.736.353 1.129.454a13.61 13.61 0 002.415.483c.698.064 1.271.096 1.719.096a15.048 15.048 0 002.13-.187c.437-.069.869-.162 1.296-.278a5.084 5.084 0 001.147-.453c.332-.176.614-.342.847-.495.206-.132.396-.287.567-.465.139-.143.246-.313.319-.5.07-.199.103-.409.098-.62a1.153 1.153 0 00-.231-.668 2.76 2.76 0 00-.602-.604 5.515 5.515 0 00-.874-.53 10.19 10.19 0 00-2.434-.837 4.178 4.178 0 00-.863-.102c-.031-.016-1.55-1.376-1.55-1.376.309-.009.614-.005.915.012.3.016.605.04.914.072.57.056 1.134.153 1.69.29.294.073.584.16.869.265.277.102.549.222.81.362.452.239.883.52 1.286.84.301.238.572.516.804.827a2.66 2.66 0 01.539 1.582v.002h-.001zm-15.1-6.075a1.449 1.449 0 01-.231-.232.62.62 0 01-.11-.26.6.6 0 01.064-.353.412.412 0 01.277-.254.75.75 0 01.34.006c.102.024.2.065.289.121.042.03 7.315 4.599 8.056 5.069.031.033.06.07.084.108a.467.467 0 01.03.133.248.248 0 01-.053.157c-.062.088-.118.134-.17.138-.059.002-.395-.163-.395-.163-.184-.099-2.367-1.293-2.367-1.293-.2.04-.525.116-.973.23-.55.146-1.091.327-1.62.543-.079-.026-1.24-.705-1.356-.782.128-.063 1.25-.599 1.499-.689a5.15 5.15 0 01.77-.217c-.532-.282-1.04-.56-1.524-.833-.437-.248-2.61-1.429-2.61-1.429z",
        })
      );
    case u:
      return e(
        "svg",
        { width: 14, height: 16, viewBox: "0 0 14 16", className: a },
        e("path", {
          fill: "none",
          "data-style": "stroke",
          "stroke-width": 2,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M5 1v7.3c0 .522.4 2.7 2 2.7s2-2.178 2-2.7v-7.3",
        }),
        e("rect", { x: 6, y: 10, width: 2, height: 6, rx: 1 }),
        e("rect", { y: 2, width: 2, height: 6, rx: 1 }),
        e("rect", { x: 12, y: 2, width: 2, height: 6, rx: 1 })
      );
    default:
      return null;
  }
}
let es = "Eh24o",
  en = "Eh1l2",
  eo = "Eh1jx",
  eh = "Eh24o Eh1hg",
  ed = "Eh24o Ehlh",
  ev = "Eh10d",
  eu = "Eh1r6",
  em = "Eh1l8",
  ef = "Eh1c6",
  ep = "Eh353",
  eg = {
    outer: "Eh24o",
    stroke: "Eh1l2",
    filterIcon: "Eh1jx",
    title: "Eh24o Eh1hg",
    active: "Eh24o Ehlh",
    icon: "Eh10d",
    customSelect: "Eh1r6",
    chosenValue: "Eh1l8",
    opened: "Eh1c6",
    left: "Eh353",
  },
  eb = [...b, u],
  eB = 13,
  ew = (t) => {
    let {
        id: a,
        onChange: r,
        opened: s,
        onClick: n,
        selectedValue: o,
        disabled: h,
        values: d,
        labels: v,
        left: u,
        linkUrls: m,
        title: f,
      } = t,
      p = c();
    l(() => {
      let e = (e) => {
          e.preventDefault(), e.stopPropagation();
          let t =
            document.activeElement && document.activeElement.previousSibling;
          t && t.hasAttribute && t.hasAttribute("data-filter")
            ? t.focus()
            : p.current && p.current.children && p.current.children[0].focus();
        },
        t = (e) => {
          e.preventDefault(), e.stopPropagation();
          let t = document.activeElement && document.activeElement.nextSibling;
          t && t.hasAttribute && t.hasAttribute("data-filter")
            ? t.focus()
            : p.current && p.current.children && p.current.children[0].focus();
        },
        c = (e) => {
          e.preventDefault(), e.stopPropagation();
        },
        l = (e) => {
          e.preventDefault(), e.stopPropagation(), n();
        },
        i = () => {
          if (
            document.activeElement &&
            document.activeElement.hasAttribute("data-filter")
          ) {
            let e = document.activeElement.nextSibling;
            (e && e.hasAttribute && e.hasAttribute("data-filter")) || n();
          }
        },
        r = () => {
          if (
            document.activeElement &&
            document.activeElement.hasAttribute("data-filter")
          ) {
            let e = document.activeElement.previousSibling;
            (e && e.hasAttribute && e.hasAttribute("data-filter")) || n();
          } else n();
        },
        o = { up: e, down: t, space: c, tab: i, esc: l };
      return (
        s &&
          (window.hotKeysManager.bind(o, { onPanelPopup: !0 }, a),
          window.hotKeysManager.bindMeta("shift+tab", r, a)),
        () => {
          s &&
            (window.hotKeysManager.unbind(o, { onPanelPopup: !0 }, a),
            window.hotKeysManager.unbindMeta("shift+tab", a));
        }
      );
    }, [a, s]);
    let g = 0 !== d.indexOf(o) || s ? eg.active : "",
      b = `${eg.customSelect} ${s ? eg.opened : ""} ${u ? eg.left : ""}`,
      B = h ? v[0] : v[d.indexOf(o)] || o;
    eb.includes(B.toUpperCase()) &&
      (B = e(er, { className: eg.filterIcon, instrument: B.toUpperCase() }));
    let w = (e) => {
        e.preventDefault(), e.stopPropagation(), n(), e.target.focus();
      },
      y = (e) => 13 === e.keyCode && w(e);
    return e(
      i,
      {},
      e(
        "button",
        {
          id: `${a}Button`,
          className: `${g} ${eg.title}`,
          onClick: w,
          onKeyPress: y,
          disabled: h,
          title: `Filter by ${f}`,
        },
        u && e(Z, { styles: eg }),
        B,
        !u && e(Z, { styles: eg })
      ),
      e(
        "div",
        { id: a, className: b, ref: p, role: "list" },
        d.map((t, a) => {
          let c = (v && void 0 !== v[a] && v[a]) || t,
            l = void 0 !== o && o === t,
            i = l ? eg.chosenValue : void 0,
            s = (e) => {
              e.preventDefault(), r(t), n();
            },
            h = (e) => 13 === e.keyCode && s(e),
            d = m ? m[a] : ".";
          return e(
            "a",
            {
              className: i,
              onClick: s,
              onKeyPress: h,
              href: d,
              "data-filter": !0,
              "data-value": c,
              "data-selected": l.toString(),
              role: "listitem",
              title: c,
            },
            c
          );
        })
      )
    );
  },
  ey = "C7l2fp",
  eC = "C7l1fz",
  ex = "C7l1j3",
  eE = "C7l1j3 C7l1p9",
  ez = "C7l1j3 C7l2t9",
  ek = "C7l1j3 C7lin",
  eS = "C7l1j3 C7l123",
  eA = "C7l1j3 C7lin C7l1qq",
  eM = {
    header: "C7l2fp",
    hash: "C7l1fz",
    cell: "C7l1j3",
    cellRight: "C7l1j3 C7l1p9",
    cellInstrument: "C7l1j3 C7l2t9",
    space: "C7l1j3 C7lin",
    biggerSpace: "C7l1j3 C7l123",
    smallerSpace: "C7l1j3 C7lin C7l1qq",
  };
function ej(t) {
  let {
      tuningFilter: a,
      instrumentFilter: c,
      difficultyFilter: l,
      setTuningFilter: i,
      setInstrumentFilter: r,
      setDifficultyFilter: s,
      isSmallScreen: n,
      spacerSize: o,
      numberSpacer: h,
      instrumentSEOLinks: d,
      activeFilter: v,
      onFilterClick: u,
    } = t,
    { difficultyFilterNA: m } = t;
  void 0 === m && (m = !1);
  let f = (e) => s(e),
    p = C(c),
    g = B(c),
    x = eM.space;
  return (
    "big" === o ? (x = eM.biggerSpace) : "small" === o && (x = eM.smallerSpace),
    e(
      "div",
      { className: eM.header },
      e("div", { className: x }, h && e("span", { className: eM.hash }, "#")),
      e(
        "div",
        { className: eM.cellInstrument },
        e(ew, {
          id: "filterByInstrumentSelect",
          onChange: r,
          selectedValue: c,
          opened: "instrument" === v,
          onClick: () => {
            u("instrument");
          },
          values: b,
          labels: b.map(y),
          linkUrls: d,
          title: "instrument",
        })
      ),
      !n &&
        e(
          "div",
          { className: eM.cell },
          e(ew, {
            id: "filterByTuningSelect",
            onChange: i,
            selectedValue: a,
            opened: "tunning" === v,
            onClick: () => {
              u("tunning");
            },
            disabled: p,
            values: g.map((e) => e[1]),
            labels: g.map((e) => e[0]),
            title: "tuning",
          })
        ),
      e(
        "div",
        { className: eM.cell },
        e(ew, {
          id: "filterByDifficultySelect",
          onChange: f,
          opened: "difficulty" === v,
          onClick: () => {
            u("difficulty");
          },
          left: !0,
          disabled: m,
          selectedValue: l,
          values: w,
          labels: w,
          title: "difficulty",
        })
      )
    )
  );
}
let eN = "r91q5",
  eP = { resetFilterHint: "r91q5" };
var e$ = null,
  eD = null,
  eF = null,
  eI = null,
  e_ = null,
  eq = null,
  eK = null,
  eH = null,
  eR = null,
  eV = null,
  eL = [e$, eD, eF, eI, e_, eq, eK, eH, eR, eV];
let eT = (t) => {
    let { usesFilters: a = !1, numResults: c = 0, resetFilter: l } = t,
      { gettext: i, ngettext: r } = x(eL),
      s = (e) => {
        e.preventDefault(), l();
      };
    if (c > 0 || a) {
      let t = a
        ? i(" to see more tabs")
        : r` to see ${c} tab`` to see ${c} tab`(c);
      return e(
        "div",
        { className: eP.resetFilterHint },
        e(
          "a",
          { onClick: s, "data-action": "resetFilters", tabIndex: 0 },
          i("Reset filter")
        ),
        t
      );
    }
    return e(
      "div",
      { className: eP.resetFilterHint },
      i("Start a "),
      e(
        "a",
        { onClick: s, "data-action": "resetFilters", tabIndex: 0 },
        i("new search")
      )
    );
  },
  eO = (e, t, a) => {
    l(() => {
      let c = (a) => {
          a.preventDefault(), a.stopPropagation();
          let c = document.activeElement;
          if (c && c.hasAttribute && c.hasAttribute("data-song")) {
            let e = c.previousSibling;
            e && e.hasAttribute && e.hasAttribute("data-song")
              ? e.focus()
              : t.current && t.current.focus();
          } else
            e.current && e.current.children && e.current.children[0].focus();
        },
        l = (t) => {
          t.preventDefault(), t.stopPropagation();
          let a = document.activeElement && document.activeElement.nextSibling;
          a && a.hasAttribute && a.hasAttribute("data-song")
            ? a.focus()
            : e.current && e.current.children && e.current.children[0].focus();
        },
        i = () => {
          t.current && t.current.focus();
        },
        r = { up: c, down: l, space: i, "keyboard*": i };
      return (
        window.hotKeysManager.bind(r, { onPanel: !0 }, a),
        () => {
          window.hotKeysManager.unbind(r, { onPanel: !0 }, a);
        }
      );
    }, []);
  };
export { Y as I, eT as R, j as S, U as _, ej as a, X as b, eO as u };