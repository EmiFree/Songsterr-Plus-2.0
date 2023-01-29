let focusedButtonNum;
import {
	d as e,
	a as t,
	R as s,
	T as a,
	h as i,
	p as o,
	_ as r,
	F as n,
} from "./preact.3d326435.js";
import {
	bu as l,
	T as d,
	C as u,
	bv as c,
	by as f,
	L as p,
	u as m,
	k as v,
	bi as g,
	b9 as h,
	bz as L,
	bA as C,
	bB as w,
	bf as _,
	bg as x,
	bd as b,
	bC as N,
	a8 as k,
	a7 as B,
	bj as y,
	bk as M,
	be as $,
	bp as S,
	bn as A,
	bo as I,
} from "./index.c64a48b4.js";
import {
	_ as Z,
	u as P,
	S as F,
	a as j,
	b as D,
	I as E,
	R as R,
} from "./useSongListHotkeys.4d7153e3.js";
import { S as W } from "./SearchBox.a04960d8.js";
import { S as z } from "./Stub.4f8edbef.js";
import { P as O } from "./Panel.7e25754f.js";
import { _ as T } from "./SongsPanel.module.ee40cfdb.js";
class IconOptions extends e {
	render() {
		let { width: e, height: s, className: a } = this.props;
		return t(
			"svg",
			{ className: a, height: s, width: e, viewBox: "0 0 16 4" },
			t("circle", { cx: "2", cy: "2", r: "2" }),
			t("circle", { cx: "8", cy: "2", r: "2" }),
			t("circle", { cx: "14", cy: "2", r: "2" })
		);
	}
}
let dropdown = "Clr13o",
	setnames = "Clr2j2",
	disabled = "Clr2ma",
	dropdownDelete = "Clr1ed",
	__default$6 = {
		dropdown: "Clr13o",
		setnames: "Clr2j2",
		disabled: "Clr2ma",
		dropdownDelete: "Clr1ed",
	},
	SongOptionsDropdown = s((e) => {
		let {
				song: s,
				addOptions: o,
				removeCaption: r,
				onAdd: n,
				onClose: l,
				onRemove: d,
			} = e,
			u = { current: [] },
			c = a((e) => {
				e.preventDefault(), e.stopPropagation();
			}, []),
			f = a((e) => {
				e.preventDefault(),
					e.stopPropagation(),
					void 0 === focusedButtonNum ||
					focusedButtonNum >= u.current.length - 1
						? (focusedButtonNum = 0)
						: (focusedButtonNum += 1),
					u.current && u.current[focusedButtonNum].focus();
			}, []),
			p = a((e) => {
				e.preventDefault(),
					e.stopPropagation(),
					void 0 === focusedButtonNum || focusedButtonNum <= 0
						? (focusedButtonNum = u.current.length - 1)
						: (focusedButtonNum -= 1),
					u.current && u.current[focusedButtonNum].focus();
			}, []);
		return (
			i(() => {
				let e = { up: p, down: f, tab: l, esc: l, space: c };
				return (
					window.hotKeysManager.bind(e, { onPanelPopup: !0 }),
					(focusedButtonNum = void 0),
					() => {
						window.hotKeysManager.unbind(e, { onPanelPopup: !0 }),
							(focusedButtonNum = void 0);
					}
				);
			}, [o]),
			t(
				"div",
				{ className: __default$6.dropdown, "data-dropdown": "" },
				o &&
					0 !== o.length &&
					t(
						"div",
						{ className: __default$6.setnames },
						t("p", {}, "Add to playlist:"),
						o.map((e) =>
							e.active
								? t(
										"button",
										{
											ref: (e) => {
												u.current.push(e);
											},
											onClick: () => {
												n(s, e.id);
											},
										},
										e.name
								  )
								: t(
										"button",
										{
											onClick: c,
											className: __default$6.disabled,
											tabIndex: -1,
										},
										e.name
								  )
						)
					),
				t(
					"button",
					{
						ref: (e) => {
							u.current.push(e);
						},
						className: __default$6.dropdownDelete,
						onClick: d,
						"data-feature": "remove",
					},
					r
				)
			)
		);
	}),
	options = "w81kv",
	dots = "w8k4",
	optionsActive = "w81kv w82q9",
	__default$5 = {
		options: "w81kv",
		dots: "w8k4",
		optionsActive: "w81kv w82q9",
	},
	SongOptions = s((e) => {
		let {
				song: s,
				addOptions: i,
				dropdownShown: o,
				optionsAlwaysOn: r,
				removeCaption: n,
				onAdd: l,
				onOptionsClick: d,
				onRemove: u,
			} = e,
			c = o || r ? __default$5.optionsActive : __default$5.options,
			f = a(
				(e) => {
					e.preventDefault(), e.stopPropagation(), o ? d() : d(s.songId);
				},
				[s, o]
			),
			p = a(() => d(), []);
		return t(
			"div",
			{ className: c, onClick: f },
			t(
				"button",
				{ className: __default$5.dots, title: "Options" },
				t(IconOptions, { width: 16, height: 4 })
			),
			o &&
				t(SongOptionsDropdown, {
					addOptions: i,
					song: s,
					onRemove: u,
					removeCaption: n,
					onAdd: l,
					onClose: p,
				})
		);
	}),
	exitActive$1 = "Bp51ux",
	enterActive$1 = "Bp53",
	enter$1 = "Bp51c",
	exit$1 = "Bp51zj",
	__default$4 = {
		exitActive: "Bp51ux",
		enterActive: "Bp53",
		enter: "Bp51c",
		exit: "Bp51zj",
	},
	animationProps = { animationStyles: __default$4 },
	SongsItemFavorites = s((e) => {
		let {
			song: s,
			isActive: i,
			addOptions: r,
			dropdownShown: n,
			optionsAlwaysOn: m,
			isPhone: v,
			inSetlist: g,
			onAdd: h,
			onClick: L,
			onOptionsClick: C,
			onRemove: w,
			difficultyNA: _,
		} = e;
		void 0 === _ && (_ = !1);
		let [x, b] = o(!1),
			N = Z.favorite;
		i && (N += " " + Z.active), x && (N += " " + Z.removal);
		let k = s.tracks && s.tracks[s.defaultTrack],
			B = k && s.difficulty,
			y = l(s, s.defaultTrack),
			M = a(
				(e) => {
					e.preventDefault(), e.stopPropagation(), b(!x);
				},
				[x]
			),
			$ = a(
				(e) => {
					e.preventDefault(), e.stopPropagation(), b(!1), w();
				},
				[w]
			);
		return t(
			p,
			{ className: N, "data-song": "", to: y, onClick: L },
			v &&
				t(
					"div",
					{
						role: "button",
						className: Z.fav,
						onClick: M,
						title: "Remove from favorites",
					},
					t(f, {
						width: 17,
						height: 17,
						state: "fill",
						title: "Remove from favorites",
						styles: Z,
					})
				),
			t(
				"div",
				{ className: Z.wrapper },
				t("div", { className: Z.name, "data-field": "name" }, s.title),
				t("div", { className: Z.artist, "data-field": "artist" }, s.artist)
			),
			!v &&
				t(SongOptions, {
					song: s,
					addOptions: r,
					dropdownShown: n,
					optionsAlwaysOn: m,
					removeCaption: g
						? "Remove from this playlist"
						: "Remove from favorites",
					onAdd: h,
					onOptionsClick: C,
					onRemove: w,
				}),
			t(c, { difficultyNA: _, difficultyString: B }),
			v &&
				t(
					d,
					{ component: "div", className: Z.controls },
					x &&
						t(
							u,
							animationProps,
							t(
								"div",
								{ className: Z.buttons },
								t(
									"button",
									{ className: Z.cancel, onClick: M, "data-action": "cancel" },
									"Cancel"
								),
								t(
									"button",
									{ className: Z.remove, onClick: $, "data-action": "remove" },
									"Remove"
								)
							)
						)
				)
		);
	});
class IconNoFavorites extends e {
	render() {
		return t(
			"svg",
			{ width: 189, height: 101, viewBox: "0 0 189 101", fill: "none" },
			t("rect", {
				x: "139",
				y: "60",
				width: "50",
				height: "4",
				rx: "1",
				fill: "#3A3A3A",
			}),
			t("rect", {
				y: "60",
				width: "50",
				height: "4",
				rx: "1",
				fill: "#3A3A3A",
			}),
			t("path", {
				fill: "#3A3A3A",
				d: "M94 78L95.1452 76.3603L94.009 75.5668L92.8669 76.3519L94 78ZM115 61L113.879 59.3438L112.698 60.1431L113.069 61.5199L115 61ZM107.5 36.5L105.631 37.2109L106.089 38.4157L107.375 38.4961L107.5 36.5ZM82 36.5L82.1217 38.4963L83.464 38.4144L83.8947 37.1405L82 36.5ZM73 61L74.9249 61.5429L75.3139 60.1637L74.1331 59.3519L73 61ZM43.899 38.8232L43.7773 36.8269L43.899 38.8232ZM43.3933 40.6454L44.5264 38.9973L43.3933 40.6454ZM94.9901 3.60352L96.8595 2.89262L94.9901 3.60352ZM93.108 3.63874L91.2134 2.99828L93.108 3.63874ZM145.072 40.6433L143.951 38.9871L145.072 40.6433ZM123.248 98.4268L122.102 100.067L123.248 98.4268ZM124.786 97.347L126.717 96.8271L124.786 97.347ZM64.2801 98.4324L65.4132 100.081L64.2801 98.4324ZM62.7511 97.3369L60.8262 96.794L62.7511 97.3369ZM65.4132 100.081L95.1331 79.6481L92.8669 76.3519L63.147 96.7843L65.4132 100.081ZM92.8548 79.6397L122.102 100.067L124.393 96.7872L95.1452 76.3603L92.8548 79.6397ZM126.717 96.8271L116.931 60.4801L113.069 61.5199L122.855 97.867L126.717 96.8271ZM116.121 62.6562L146.194 42.2995L143.951 38.9871L113.879 59.3438L116.121 62.6562ZM144.699 36.821L107.625 34.5039L107.375 38.4961L144.449 40.8132L144.699 36.821ZM109.369 35.7891L96.8595 2.89262L93.1207 4.31441L105.631 37.2109L109.369 35.7891ZM91.2134 2.99828L80.1053 35.8595L83.8947 37.1405L95.0027 4.27919L91.2134 2.99828ZM81.8783 34.5037L43.7773 36.8269L44.0207 40.8195L82.1217 38.4963L81.8783 34.5037ZM42.2603 42.2935L71.8669 62.6481L74.1331 59.3519L44.5264 38.9973L42.2603 42.2935ZM71.0751 60.4571L60.8262 96.794L64.676 97.8799L74.9249 61.5429L71.0751 60.4571ZM43.7773 36.8269C40.9293 37.0006 39.9091 40.6771 42.2603 42.2935L44.5264 38.9973C45.3101 39.5361 44.97 40.7616 44.0207 40.8195L43.7773 36.8269ZM96.8595 2.89262C95.8593 0.26248 92.1145 0.332526 91.2134 2.99828L95.0027 4.27919C94.7023 5.16779 93.4541 5.19112 93.1207 4.31441L96.8595 2.89262ZM146.194 42.2995C148.563 40.6953 147.555 36.9995 144.699 36.821L144.449 40.8132C143.497 40.7537 143.161 39.5218 143.951 38.9871L146.194 42.2995ZM122.102 100.067C124.399 101.67 127.445 99.5316 126.717 96.8271L122.855 97.867C122.612 96.9655 123.627 96.2526 124.393 96.7872L122.102 100.067ZM63.147 96.7843C63.9182 96.2542 64.9301 96.9791 64.676 97.8799L60.8262 96.794C60.0641 99.4962 63.0996 101.671 65.4132 100.081L63.147 96.7843Z",
			})
		);
	}
}
let setlistEdit = "rp1zs",
	textarea = "rptx",
	__default$3 = { setlistEdit: "rp1zs", textarea: "rptx" },
	MAX_SET_LENGTH = 30,
	SetlistEdit = (e) => {
		let { name: s, onConfirm: a, onCancel: o, setName: n } = e,
			l = r(null);
		i(() => {
			l.current && l.current.focus();
		}, []);
		let d = (e) => {
				13 === e.keyCode && (e.preventDefault(), a()),
					27 === e.keyCode && (e.preventDefault(), o());
			},
			u = (e) => {
				n(e.target.value);
			};
		l.current && l.current.focus();
		let c = s.length > 15 ? 2 : 1;
		return t(
			"form",
			{
				className: __default$3.setlistEdit,
				noValidate: !0,
				onClick: (e) => {
					e.stopPropagation();
				},
			},
			t("textarea", {
				spellcheck: !1,
				className: __default$3.setlistEdit,
				placeholder: "New playlist",
				maxlength: 30,
				rows: c,
				value: s,
				ref: l,
				autoComplete: "off",
				onKeyDown: d,
				onChange: u,
			})
		);
	};
class IconSetRemove extends e {
	render() {
		let { width: e, height: s, className: a } = this.props;
		return t(
			"svg",
			{ className: a, height: s, width: e, viewBox: "0 0 9 9" },
			t("rect", {
				y: "1.17",
				width: "1.65",
				height: "10",
				transform: "rotate(-45 0 1.17)",
			}),
			t("rect", {
				x: "7.07",
				width: "1.65",
				height: "10",
				transform: "rotate(45 7.07 0)",
			})
		);
	}
}
let setlist = "Bxc1j",
	name = "Bxc11z",
	remove = "Bxc2az",
	setlistActive = "Bxc1j Bxc11e",
	setlistRemove = "Bxc1j Bxc160",
	shaking = "Bxc23n",
	__default$2 = {
		setlist: "Bxc1j",
		name: "Bxc11z",
		remove: "Bxc2az",
		setlistActive: "Bxc1j Bxc11e",
		setlistRemove: "Bxc1j Bxc160",
		shaking: "Bxc23n",
	},
	Setlist = s((e) => {
		let {
				name: s,
				id: a,
				removable: i,
				confirmRemove: o,
				active: r,
				shaking: n,
				onClick: l,
				onRemoveClick: d,
			} = e,
			u = () => {
				l(a);
			},
			c = (e) => {
				e.stopPropagation(), d(a);
			},
			f = r ? __default$2.setlistActive : __default$2.setlist;
		return t(
			"li",
			{
				className: (f = `${(f = o ? __default$2.setlistRemove : f)} ${
					n ? __default$2.shaking : ""
				}`),
				onClick: u,
				"data-playlist": s,
			},
			t("button", { className: __default$2.name, title: s }, s),
			i &&
				t(
					"button",
					{
						className: __default$2.remove,
						onClick: c,
						"data-feature": "remove",
					},
					t(IconSetRemove, { width: 9, height: 9 })
				)
		);
	}),
	setlists = "E41oo",
	add = "E422r",
	edit = "E42as",
	container = "E4bj",
	__default$1 = {
		setlists: "E41oo",
		add: "E422r",
		edit: "E42as",
		container: "E4bj",
	},
	SetlistsMenu = () => {
		let { setlists: e, dispatch: s } = m("setlists"),
			{ activeSetId: a, createSetForm: i, removeSetId: o, markedIds: r } = e,
			n = (e) => {
				e.stopPropagation(), s("setlists/openCreate");
			};
		return t(
			"aside",
			{ id: "playlist-menu", className: __default$1.setlists },
			t(
				"div",
				{ className: __default$1.container },
				t(
					"ul",
					null,
					t(Setlist, {
						name: "Favorites",
						active: !a,
						onClick: () => s("setlists/select", void 0),
					}),
					t(
						"li",
						{},
						t(
							"button",
							{ id: "create-playlist", className: __default$1.add, onClick: n },
							"Create playlist"
						)
					),
					i &&
						t(
							"li",
							{ className: __default$1.edit },
							t(SetlistEdit, {
								name: i.name,
								onConfirm: () => s("setlists/confirmCreate"),
								onCancel: () => s("setlists/cancelCreate"),
								setName: (e) => s("setlists/changeName", e),
							})
						),
					e.setlists.map((e) =>
						t(Setlist, {
							id: e.id,
							name: e.name,
							active: e.id === a,
							shaking: r.includes(e.id),
							removable: !0,
							confirmRemove: o === e.id,
							onRemoveClick: (t) =>
								s(
									o === e.id ? "setlists/confirmRemove" : "setlists/initRemove",
									t
								),
							onClick: (e) => s("setlists/select", e),
						})
					)
				)
			)
		);
	};
class IconSetNoSongs extends e {
	render() {
		return t(
			"svg",
			{ height: 100, width: 188, viewBox: "0 0 188 100", fill: "#3A3A3A" },
			t("rect", { x: "53", width: "135", height: "4.1" }),
			t("rect", { x: "53", y: "24", width: "135", height: "4.1" }),
			t("rect", { x: "89", y: "48", width: "99", height: "4.1" }),
			t("rect", { y: "48", width: "70", height: "4.1" }),
			t("rect", {
				x: "33",
				y: "85",
				width: "70",
				height: "4.1",
				transform: "rotate(-90 33 85)",
			}),
			t("rect", { x: "53", y: "72", width: "135", height: "4.1" }),
			t("rect", { y: "96", width: "188", height: "4.1" })
		);
	}
}
let favoritesContainer = "Cw8192",
	stubWrapper = "Cw82ur",
	songsWrapper = "Cw82yi",
	songsWrapperMobile = "Cw8xl",
	resetHint = "Cw81er",
	favorites = "Cw84r",
	exitActive = "Cw823p",
	enterActive = "Cw8gq",
	enter = "Cw81et",
	exit = "Cw8i5",
	__default = {
		favoritesContainer: "Cw8192",
		stubWrapper: "Cw82ur",
		songsWrapper: "Cw82yi",
		songsWrapperMobile: "Cw8xl",
		resetHint: "Cw81er",
		favorites: "Cw84r",
		exitActive: "Cw823p",
		enterActive: "Cw8gq",
		enter: "Cw81et",
		exit: "Cw8i5",
	};
var de = null,
	es = null,
	fr = null,
	it = null,
	ja = null,
	ko = null,
	pt = null,
	ru = null,
	zh = null,
	locales = [de, es, fr, it, ja, ko, pt, ru, zh];
function filterByQuery(e, t) {
	if (t && "" !== t) {
		let s = t
			.toLowerCase()
			.trim()
			.split(" ")
			.filter((e) => e);
		return e.filter((e) => {
			let t = e.title.toLowerCase(),
				a = e.artist.toLowerCase();
			return s.every((e) => -1 !== t.indexOf(e) || -1 !== a.indexOf(e));
		});
	}
	return e;
}
let changeDefaultTrack = (e, t) =>
		e &&
		e.map((e) => {
			let s = e.tracks;
			if (s) {
				let a = s.reduce(t, -1);
				return -1 !== a ? { ...e, defaultTrack: a } : e;
			}
			return e;
		}),
	getInstrumentIdPredicateForFilterValue = (e) => {
		switch (e) {
			case I:
				return k;
			case A:
				return N;
			case S:
				return B;
			default:
				return () => !1;
		}
	},
	getCurrentInstrumentFilter = (e) =>
		e && e.isDrums ? N : e && e.isBassGuitar ? k : B,
	FavoritesPanel = s((e) => {
		let { route: s, query: i, user: l, device: d, isSmallScreen: u, id: c } = e,
			{ gettext: f } = v(locales),
			{
				favorites: p,
				setlists: N,
				meta: k,
				dispatch: B,
			} = m("favorites", "setlists", "meta"),
			S = r(),
			A = r();
		P(S, A, "FavoritesPanel");
		let { /* hasPlus: I, */ isLoggedIn: Z } = l,
			{ isDesktop: H, isPhone: q, isTablet: G } = d,
			{ pattern: K, loading: V } = p,
			{ activeSetId: Q } = N,
			I = true,
			Y = H && !I,
			[X] = o("none"),
			[J, U] = o(void 0),
			[ee, et] = o(null),
			ea = p.filters.instrument,
			ei = (e) => {
				y(e), B("favorites/filter/instrument", e);
			},
			eo = () => {
				y(M), B("favorites/filter/reset");
			},
			er = p.filters.difficulty,
			en = (e) => B("favorites/filter/difficulty", e),
			el = p.filters.tunings,
			ed = el[ea] || g,
			eu = (e) => B("favorites/filter/tuning", { instrument: ea, tuning: e }),
			ec = h(k),
			ef = getCurrentInstrumentFilter(ec);
		ea !== M && (ef = getInstrumentIdPredicateForFilterValue(ea));
		let ep = (e, t, s, a) =>
				ef(t.instrumentId) && (-1 === e || t.views > a[e].views) ? s : e,
			em = n(() => {
				let e = Q ? N.setlists.find((e) => e.id === Q).songs : p.favorites;
				return changeDefaultTrack(e, ep);
			}, [p.favorites, Q, N.setlists, ef]),
			ev = n(() => filterByQuery(em, K), [em, K]),
			eg = $(ea),
			eh = n(() => {
				let e = eg ? ev : L(ev, X, er),
					t = C(e, ea),
					s = w(t, ed);
				return s;
			}, [ev, X, er, ea, ed]),
			eL = !q && N.setlists && N.setlists.length > 0,
			eC = p.favorites && p.favorites.length > 0,
			ew = em && em.length > 0,
			e_ = eh && eh.length > 0,
			ex = (e) => {
				e === ee ? et(null) : et(e), U(void 0);
			},
			eb = 0 === p.pattern.length ? {} : { pattern: p.pattern },
			eN = _.map((e) => x("/a/wa/favorites", e, eb)),
			ek = {
				tuningFilter: ed,
				instrumentFilter: ea,
				difficultyFilter: er,
				setTuningFilter: eu,
				setInstrumentFilter: ei,
				setDifficultyFilter: en,
				difficultyFilterNA: eg,
				isSmallScreen: u,
				spacerSize: q ? "big" : "small",
				instrumentSEOLinks: eN,
				activeFilter: ee,
				onFilterClick: ex,
			},
			eB = a((e) => {
				B("favorites/filter", e), b(e);
			}, []),
			ey = a((e) => {
				e.preventDefault(), B("setlists/select", void 0);
			}, []),
			eM = (e) => {
				U(e), et(null), B("setlists/panelClick");
			},
			e$ = a(() => {
				U(void 0), et(null), B("setlists/panelClick");
			}, []),
			eS = a(() => {
				eo(), eB("");
			}, []),
			eA = Q
				? `Filter ${N.setlists.find((e) => e.id === Q).name}`
				: "Filter favorites";
		return t(
			O,
			{ title: f("Favorites"), id: c, onClick: e$ },
			(eC || eL) &&
				t(
					F,
					{ noObserver: !0 },
					t(W, {
						inputRef: A,
						value: K,
						isDesktop: H,
						loading: V,
						placeholder: eA,
						setValue: eB,
					})
				),
			(eC || eL) &&
				t(
					"div",
					{ className: __default.favoritesContainer },
					!q && t(SetlistsMenu, null),
					ew &&
						e_ &&
						t(
							"div",
							{
								className: q
									? __default.songsWrapperMobile
									: __default.songsWrapper,
							},
							t(
								F,
								{},
								t(j, ek),
								Z && Y && t(D, { page: s.page, instrumentFilter: ea })
							),
							t(
								"div",
								{
									ref: S,
									className: __default.favorites,
									"data-list": "favorites",
								},
								eh.map((e) => {
									let s = [];
									N.setlists.forEach((t) => {
										let a = !t.songs.find((t) => t.songId === e.songId);
										s.push({ name: t.name, id: t.id, active: a });
									});
									let a = Q
										? () =>
												B("setlists/removeSong", {
													setlistId: Q,
													songId: e.songId,
												})
										: () => B("favorites/delete", e.songId);
									return t(SongsItemFavorites, {
										key: `${Q}${e.songId}`,
										isPhone: q,
										song: e,
										addOptions: s,
										dropdownShown: J === e.songId,
										isActive: k && k.songId === e.songId,
										optionsAlwaysOn: G,
										inSetlist: !!Q,
										onAdd: (e, t) =>
											B("setlists/addSong", { song: e, setlistId: t }),
										onClick: () => {
											B("setlists/panelClick");
										},
										onOptionsClick: eM,
										onRemove: a,
										difficultyNA: eg,
									});
								})
							)
						),
					ew &&
						!e_ &&
						t(
							"div",
							{ className: __default.stubWrapper },
							t(
								"div",
								{ className: T.stubWrapper },
								t(j, ek),
								t(
									z,
									{
										id: "notfound",
										header: f("No tabs found"),
										headerColor: "red",
										icon: () => t(E, null),
									},
									R({
										usesFilters: !1,
										numResults: ev.length,
										resetFilter: ev.length > 0 ? eo : eS,
									})
								)
							)
						),
					!ew &&
						t(
							"div",
							{ className: __default.stubWrapper },
							t(
								"div",
								{ className: T.stubWrapper },
								Q
									? t(
											z,
											{
												id: "notfound",
												header: f("Playlist is empty"),
												icon: () => t(IconSetNoSongs, null),
											},
											t(
												"div",
												{ className: __default.resetHint },
												t(
													"a",
													{ onClick: ey, tabIndex: 0 },
													f("Go to Favorites")
												),
												f(" to fill it with songs")
											)
									  )
									: t(z, {
											id: "nofavorites",
											header: f("You have no favorites."),
											icon: () => t(IconNoFavorites, null),
											hint: () =>
												f(
													"To create a\xa0favorite, open a\xa0song and click on the\xa0star."
												),
									  })
							)
						)
				),
			!eL &&
				!eC &&
				t(z, {
					id: "nofavorites",
					header: p.error
						? f("Favorites are temporary unavailable")
						: f("You have no favorites"),
					icon: () => t(IconNoFavorites, null),
					hint: () =>
						p.error
							? f("We will return them back as\xa0soon as\xa0possible")
							: f(
									"To create a\xa0favorite, open a\xa0song and click on the\xa0star."
							  ),
				})
		);
	});
export { FavoritesPanel as default };