class ChordType{constructor(_,...e){this.suffix=_,this.halfToneOffsets=e}}let types={MAJOR:new ChordType("",0,4,7),MINOR:new ChordType("m",0,3,7),AUGMENTED:new ChordType("aug",0,4,8),DIMINISHED:new ChordType("dim",0,3,6),MAJOR_DOMINANT_SEVENTH:new ChordType("7",0,4,7,10),MAJOR_DOMINANT_SEVENTH_M:new ChordType("7M",0,4,7,11),MAJOR_DOMINANT_SEVENTH_M_SHARP_5:new ChordType("7M(#5),",0,4,8,11),MAJOR_DOMINANT_SEVENTH_SHARP_5:new ChordType("7(#5),",0,4,8,10),MAJOR_DOMINANT_SEVENTH_B_5:new ChordType("7(b5),",0,4,6,10),MAJOR_DOMINANT_SEVENTH_ADD_9:new ChordType("9",0,4,7,10,14),MAJOR_DOMINANT_SEVENTH_ADD_B9:new ChordType("7b9",0,4,7,10,13),MAJOR_DOMINANT_SEVENTH_ADD_SHARP_9:new ChordType("7#9",0,4,7,10,15),MAJOR_DOMINANT_SEVENTH_ADD_11:new ChordType("11",0,4,7,10,17),MAJOR_DOMINANT_SEVENTH_ADD_B11:new ChordType("7b11",0,4,7,10,16),MAJOR_DOMINANT_SEVENTH_ADD_SHARP_11:new ChordType("7#11",0,4,7,10,18),MAJOR_DOMINANT_SEVENTH_ADD_13:new ChordType("13",0,4,7,10,21),MAJOR_DOMINANT_SEVENTH_ADD_B13:new ChordType("7b13",0,4,7,10,20),MAJOR_DOMINANT_SEVENTH_ADD_SHARP_13:new ChordType("7#13",0,4,7,10,22),MAJOR_DOMINANT_SEVENTH_M_ADD_9:new ChordType("7M9",0,4,7,11,14),MAJOR_DOMINANT_SEVENTH_M_ADD_11:new ChordType("7Madd11",0,4,7,11,17),MAJOR_DOMINANT_SEVENTH_M_ADD_SHARP_11:new ChordType("7Madd#11",0,4,7,11,18),MAJOR_DOMINANT_SEVENTH_M_ADD_13:new ChordType("7Madd#13",0,4,7,11,20),MINOR_DOMINANT_SEVENTH:new ChordType("m7",0,3,7,10),MINOR_DOMINANT_SEVENTH_M:new ChordType("m7M",0,3,7,11),MINOR_DOMINANT_SEVENTH_B_5:new ChordType("m7(b5),",0,3,6,10),MINOR_DOMINANT_SEVENTH_ADD_9:new ChordType("m9",0,3,7,10,14),MINOR_DOMINANT_SEVENTH_ADD_11:new ChordType("m7add11",0,3,7,10,17),MINOR_DOMINANT_SEVENTH_MAJ_9:new ChordType("m7M9",0,3,7,11,14),DIMINISHED_DOMINANT_SEVENTH:new ChordType("dim7",0,3,6,9),MAJOR_DIMINISHED_FIFTH:new ChordType("(b5),",0,4,6),SUSPENDED_2:new ChordType("sus2",0,2,7),SUSPENDED_4:new ChordType("sus4",0,5,7),SEVENTH_SUSPENDED_2:new ChordType("7sus2",0,2,7,10),SEVENTH_SUSPENDED_4:new ChordType("7sus4",0,5,7,10),SEVENTH_M_SUSPENDED_4:new ChordType("7Msus4",0,5,7,11),MAJOR_SIXTH:new ChordType("6",0,4,7,9),MINOR_SIXTH:new ChordType("m6",0,3,7,9),QUINT:new ChordType("5",0,7),MAJOR_ADD_9:new ChordType("add9",0,4,7,14),MINOR_ADD_9:new ChordType("madd9",0,3,7,14),MAJOR_SIXTH_ADD_9:new ChordType("6add9",0,4,7,9,14),MINOR_SIXTH_ADD_9:new ChordType("m6add9",0,3,7,9,14),MAJOR_ADD_11:new ChordType("add11",0,4,7,17)},NOTE_PATTERN="[A-H][#bΓÖ¡ΓÖ»]?",NOTE_PATTERN_REGEXP=/([A-H])([#b\u266D\u266F])?/,DIESE="ΓÖ»",notes=["A","AΓÖ»","B","C","CΓÖ»","D","DΓÖ»","E","F","FΓÖ»","G","GΓÖ»"];class Note{constructor(_){this.name=_}}function parseNote(_){let e=_.match(NOTE_PATTERN_REGEXP);if(e){let _=e[1].replace("H","B"),N=notes.findIndex(e=>e===_);if(-1!==N){if(e[2])switch(e[2][0]){case"#":case"ΓÖ»":N=(N+1)%notes.length;break;default:N=(N-1+notes.length)%notes.length}return new Note(notes[N])}}throw Error(_)}let CHORD_PATTERN=`${NOTE_PATTERN}[0-9majSsudibfgnoM\u266D\u266F#+]{0,7}(?:\\([0-9nob#maj. ]+\\))?(?:/${NOTE_PATTERN})?`,NO_CHORDS_PATTERN="N\\.C\\.",PATTERN=`(${NOTE_PATTERN})([^/]*)(?:/(${NOTE_PATTERN}))?`;class Chord{constructor(_,e,N){this.baseNote=_,this.firstNote=N||_,this.chordType=e||types.MAJOR}}function chordToString(_){return`${_.baseNote.name}${_.chordType.suffix}${_.firstNote.name==_.baseNote.name?"":"/"+_.firstNote.name}`}let SUFFIX_SYNONYMS=new Map().set("maj",types.MAJOR).set("min",types.MINOR).set("mi",types.MINOR).set("M7",types.MAJOR_DOMINANT_SEVENTH_M).set("maj7",types.MAJOR_DOMINANT_SEVENTH_M).set("maj7b5",types.MAJOR_DOMINANT_SEVENTH_B_5).set("7b5",types.MAJOR_DOMINANT_SEVENTH_B_5).set("7-5",types.MAJOR_DOMINANT_SEVENTH_B_5).set("m7b5",types.MINOR_DOMINANT_SEVENTH_B_5).set("7+5",types.MAJOR_DOMINANT_SEVENTH_SHARP_5).set("maj7(#5)",types.MAJOR_DOMINANT_SEVENTH_SHARP_5).set("maj7(+5)",types.MAJOR_DOMINANT_SEVENTH_SHARP_5).set("aug(maj5)",types.MAJOR_DOMINANT_SEVENTH_SHARP_5).set("7/9",types.MAJOR_DOMINANT_SEVENTH_ADD_9).set("7+9",types.MAJOR_DOMINANT_SEVENTH_ADD_SHARP_9).set(" #9",types.MAJOR_DOMINANT_SEVENTH_ADD_SHARP_9).set("7-9",types.MAJOR_DOMINANT_SEVENTH_ADD_B9).set(" b9",types.MAJOR_DOMINANT_SEVENTH_ADD_B9).set("7/add9",types.MAJOR_DOMINANT_SEVENTH_ADD_9).set("7add11",types.MAJOR_DOMINANT_SEVENTH_ADD_11).set("7add#11",types.MAJOR_DOMINANT_SEVENTH_ADD_SHARP_11).set("7/11",types.MAJOR_DOMINANT_SEVENTH_ADD_11).set("7/add11",types.MAJOR_DOMINANT_SEVENTH_ADD_11).set("add13",types.MAJOR_DOMINANT_SEVENTH_ADD_13).set("7add13",types.MAJOR_DOMINANT_SEVENTH_ADD_13).set("7/13",types.MAJOR_DOMINANT_SEVENTH_ADD_13).set("7/add13",types.MAJOR_DOMINANT_SEVENTH_ADD_13).set("7addb13",types.MAJOR_DOMINANT_SEVENTH_ADD_B13).set("m(maj7)",types.MINOR_DOMINANT_SEVENTH_M).set("mi7",types.MINOR_DOMINANT_SEVENTH).set("maj9",types.MAJOR_DOMINANT_SEVENTH_M_ADD_9).set("maj7/9",types.MAJOR_DOMINANT_SEVENTH_M_ADD_9).set("maj7/11",types.MAJOR_DOMINANT_SEVENTH_M_ADD_11).set("maj7/#11",types.MAJOR_DOMINANT_SEVENTH_M_ADD_SHARP_11).set("maj7#11",types.MAJOR_DOMINANT_SEVENTH_M_ADD_SHARP_11).set("maj7/13",types.MAJOR_DOMINANT_SEVENTH_M_ADD_13).set("m7/9",types.MINOR_DOMINANT_SEVENTH_ADD_9).set("m7/11",types.MINOR_DOMINANT_SEVENTH_ADD_11).set("min/maj9",types.MINOR_DOMINANT_SEVENTH_MAJ_9).set("+",types.AUGMENTED).set("+5",types.AUGMENTED).set(" #5",types.AUGMENTED).set("-",types.DIMINISHED).set("maj-5",types.MAJOR_DIMINISHED_FIFTH).set("-5",types.MAJOR_DIMINISHED_FIFTH).set("Mb5",types.MAJOR_DIMINISHED_FIFTH).set(" b5",types.MAJOR_DIMINISHED_FIFTH).set("6/add9",types.MAJOR_SIXTH_ADD_9).set("6/9",types.MAJOR_SIXTH_ADD_9).set("69",types.MAJOR_SIXTH_ADD_9).set("m6/9",types.MINOR_SIXTH_ADD_9).set("2",types.MAJOR_ADD_9).set("+4",types.MAJOR_ADD_11).set("7Sus2",types.SEVENTH_SUSPENDED_2).set("7Sus4",types.SEVENTH_SUSPENDED_4),SUFFIX_INDEX=new Map;for(let type in types)SUFFIX_INDEX.set(types[type].suffix,types[type]);for(let[key,value]of SUFFIX_SYNONYMS)SUFFIX_INDEX.set(key,value);function parseSuffix(_){return SUFFIX_INDEX.get(_)}function parseChord(_){let e=_.match(PATTERN);if(e)try{let[_,N,T,E]=e;return new Chord(parseNote(N),parseSuffix(T)||{suffix:T},E&&parseNote(E))}catch(e){throw console.error(e),Error("Unable to parse chord: "+_)}throw Error("Invalid chord: "+_)}let TYPE_TUNING="tuning",TYPE_CAPO="capo",TYPE_CHORD="chord",TYPE_TEXT="text",TYPE_NOISE="noise",TYPE_SECTION="section",TYPE_COMMENT="comment",TYPE_LINE="line";export{CHORD_PATTERN as C,NO_CHORDS_PATTERN as N,TYPE_NOISE as T,TYPE_TEXT as a,TYPE_CHORD as b,TYPE_LINE as c,TYPE_COMMENT as d,TYPE_SECTION as e,TYPE_CAPO as f,TYPE_TUNING as g,chordToString as h,parseChord as p};
