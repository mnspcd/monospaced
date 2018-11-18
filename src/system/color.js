/*
 *
 *  M N S P C D 𝗖 𝗢 𝗟 𝗢 𝗥
 *  v 0.0.0
 *
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const mnspcdColor = {
  /*  General
   *  ─────────────────────────────────── */
  "mnspcd-color-white": "#ffffff",
  "mnspcd-color-white-rgb": "255, 255, 255",
  "mnspcd-color-black": "#000000",
  "mnspcd-color-black-rgb": "0, 0, 0",

  /*  Grey
   *  ─────────────────────────────────── */
  "mnspcd-color-grey-1": "#f5f5f5",
  "mnspcd-color-grey-1-rgb": "245, 245, 245",
  "mnspcd-color-grey-2": "#e9e9e9",
  "mnspcd-color-grey-2-rgb": "233, 233, 233",
  "mnspcd-color-grey-3": "#cccccc" /* 0.22 */,
  "mnspcd-color-grey-3-rgb": "204, 204, 204",
  "mnspcd-color-grey-4": "#b3b3b3" /* 0.325 */,
  "mnspcd-color-grey-4-rgb": "179, 179, 179",
  "mnspcd-color-grey-5": "#818181" /* 0.54 */,
  "mnspcd-color-grey-5-rgb": "129, 129, 129",
  "mnspcd-color-grey-6": "#676767" /* 0.65 */,
  "mnspcd-color-grey-6-rgb": "103, 103, 103",
  "mnspcd-color-grey-7": "#474747" /* 0.79 */,
  "mnspcd-color-grey-7-rgb": "71, 71, 71",
  "mnspcd-color-grey-8": "#333333",
  "mnspcd-color-grey-8-rgb": "51, 51, 51",
  "mnspcd-color-grey-9": "#161616",
  "mnspcd-color-grey-9-rgb": "22, 22, 22",

  /*  Red
   *  ─────────────────────────────────── */
  "mnspcd-color-red-1": "#fff1e8",
  "mnspcd-color-red-1-rgb": "255, 241, 232",
  "mnspcd-color-red-2": "#ffdbca",
  "mnspcd-color-red-2-rgb": "255, 219, 202",
  "mnspcd-color-red-3": "#ffab90",
  "mnspcd-color-red-3-rgb": "255, 171, 144",
  "mnspcd-color-red-4": "#ff7458",
  "mnspcd-color-red-4-rgb": "255, 116, 88",
  "mnspcd-color-red-5": "#f82f1c",
  "mnspcd-color-red-5-rgb": "248, 47, 28",
  "mnspcd-color-red-6": "#ce0000",
  "mnspcd-color-red-6-rgb": "206, 0, 0",
  "mnspcd-color-red-7": "#a10000",
  "mnspcd-color-red-7-rgb": "161, 0, 0",
  "mnspcd-color-red-8": "#830000",
  "mnspcd-color-red-8-rgb": "131, 0, 0",
  "mnspcd-color-red-9": "#5a0000",
  "mnspcd-color-red-9-rgb": "90, 0, 0",

  /*  Pink
   *  ─────────────────────────────────── */
  "mnspcd-color-pink-1": "#ffeeff",
  "mnspcd-color-pink-1-rgb": "255, 238, 255",
  "mnspcd-color-pink-2": "#ffd6ff",
  "mnspcd-color-pink-2-rgb": "255, 214, 255",
  "mnspcd-color-pink-3": "#ff9ff6",
  "mnspcd-color-pink-3-rgb": "255, 159, 246",
  "mnspcd-color-pink-4": "#fe64d7",
  "mnspcd-color-pink-4-rgb": "254, 100, 215",
  "mnspcd-color-pink-5": "#f115b3",
  "mnspcd-color-pink-5-rgb": "241, 21, 179",
  "mnspcd-color-pink-6": "#c8008c",
  "mnspcd-color-pink-6-rgb": "200, 0, 140",
  "mnspcd-color-pink-7": "#9d0068",
  "mnspcd-color-pink-7-rgb": "157, 0, 104",
  "mnspcd-color-pink-8": "#7f0050",
  "mnspcd-color-pink-8-rgb": "127, 0, 80",
  "mnspcd-color-pink-9": "#54002e",
  "mnspcd-color-pink-9-rgb": "84, 0, 46",

  /*  Blue
   *  ─────────────────────────────────── */
  "mnspcd-color-blue-1": "#dff8fe",
  "mnspcd-color-blue-1-rgb": "223, 248, 254",
  "mnspcd-color-blue-2": "#c2e9ff",
  "mnspcd-color-blue-2-rgb": "194, 233, 255",
  "mnspcd-color-blue-3": "#91c6ff",
  "mnspcd-color-blue-3-rgb": "145, 198, 255",
  "mnspcd-color-blue-4": "#64a4ff",
  "mnspcd-color-blue-4-rgb": "100, 164, 255",
  "mnspcd-color-blue-5": "#2a84fd",
  "mnspcd-color-blue-5-rgb": "42, 132, 253",
  "mnspcd-color-blue-6": "#0060d8",
  "mnspcd-color-blue-6-rgb": "0, 96, 216",
  "mnspcd-color-blue-7": "#0040b1",
  "mnspcd-color-blue-7-rgb": "0, 64, 177",
  "mnspcd-color-blue-8": "#002b95",
  "mnspcd-color-blue-8-rgb": "0, 43, 149",
  "mnspcd-color-blue-9": "#000a6e",
  "mnspcd-color-blue-9-rgb": "0, 10, 110",

  /*  Azure
   *  ─────────────────────────────────── */
  "mnspcd-color-azure-1": "#d7f8ff",
  "mnspcd-color-azure-1-rgb": "215, 248, 255",
  "mnspcd-color-azure-2": "#9defff",
  "mnspcd-color-azure-2-rgb": "157, 239, 255",
  "mnspcd-color-azure-3": "#47d0ff",
  "mnspcd-color-azure-3-rgb": "71, 208, 255",
  "mnspcd-color-azure-4": "#00aeef",
  "mnspcd-color-azure-4-rgb": "0, 174, 239",
  "mnspcd-color-azure-5": "#0090cf",
  "mnspcd-color-azure-5-rgb": "0, 144, 207",
  "mnspcd-color-azure-6": "#006ca8",
  "mnspcd-color-azure-6-rgb": "0, 108, 168",
  "mnspcd-color-azure-7": "#004b83",
  "mnspcd-color-azure-7-rgb": "0, 75, 131",
  "mnspcd-color-azure-8": "#00346a",
  "mnspcd-color-azure-8-rgb": "0, 52, 106",
  "mnspcd-color-azure-9": "#001745",
  "mnspcd-color-azure-9-rgb": "0, 23, 69",

  /*  Cyan
   *  ─────────────────────────────────── */
  "mnspcd-color-cyan-1": "#c3ffff",
  "mnspcd-color-cyan-1-rgb": "195, 255, 255",
  "mnspcd-color-cyan-2": "#8bf4f6",
  "mnspcd-color-cyan-2-rgb": "139, 244, 246",
  "mnspcd-color-cyan-3": "#00d8dc",
  "mnspcd-color-cyan-3-rgb": "0, 216, 220",
  "mnspcd-color-cyan-4": "#00b7bc",
  "mnspcd-color-cyan-4-rgb": "0, 183, 188",
  "mnspcd-color-cyan-5": "#00999f",
  "mnspcd-color-cyan-5-rgb": "0, 153, 159",
  "mnspcd-color-cyan-6": "#00737a",
  "mnspcd-color-cyan-6-rgb": "0, 115, 122",
  "mnspcd-color-cyan-7": "#005058",
  "mnspcd-color-cyan-7-rgb": "0, 80, 88",
  "mnspcd-color-cyan-8": "#003841",
  "mnspcd-color-cyan-8-rgb": "0, 56, 65",
  "mnspcd-color-cyan-9": "#001f20",
  "mnspcd-color-cyan-9-rgb": "0, 31, 32",

  /*  Green
   *  ─────────────────────────────────── */
  "mnspcd-color-green-1": "#e1ff96",
  "mnspcd-color-green-1-rgb": "255, 255, 150",
  "mnspcd-color-green-2": "#b5f61a",
  "mnspcd-color-green-2-rgb": "181, 246, 26",
  "mnspcd-color-green-3": "#92d400",
  "mnspcd-color-green-3-rgb": "146, 212, 0",
  "mnspcd-color-green-4": "#70b200",
  "mnspcd-color-green-4-rgb": "112, 178, 0",
  "mnspcd-color-green-5": "#4f9400",
  "mnspcd-color-green-5-rgb": "79, 148, 0",
  "mnspcd-color-green-6": "#277000",
  "mnspcd-color-green-6-rgb": "39, 112, 0",
  "mnspcd-color-green-7": "#024d00",
  "mnspcd-color-green-7-rgb": "2, 77, 0",
  "mnspcd-color-green-8": "#073500",
  "mnspcd-color-green-8-rgb": "7, 53, 0",
  "mnspcd-color-green-9": "#001a00",
  "mnspcd-color-green-9-rgb": "0, 26, 0",

  /*  Yellow
   *  ─────────────────────────────────── */
  "mnspcd-color-yellow-1": "#fff5ab",
  "mnspcd-color-yellow-1-rgb": "255, 245, 171",
  "mnspcd-color-yellow-2": "#ffe05e",
  "mnspcd-color-yellow-2-rgb": "255, 224, 94",
  "mnspcd-color-yellow-3": "#eeb700",
  "mnspcd-color-yellow-3-rgb": "238, 183, 0",
  "mnspcd-color-yellow-4": "#ca9800",
  "mnspcd-color-yellow-4-rgb": "202, 152, 0",
  "mnspcd-color-yellow-5": "#a97b00",
  "mnspcd-color-yellow-5-rgb": "169, 123, 0",
  "mnspcd-color-yellow-6": "#815900",
  "mnspcd-color-yellow-6-rgb": "129, 89, 0",
  "mnspcd-color-yellow-7": "#5d3800",
  "mnspcd-color-yellow-7-rgb": "93, 56, 0",
  "mnspcd-color-yellow-8": "#472200",
  "mnspcd-color-yellow-8-rgb": "71, 34, 0",
  "mnspcd-color-yellow-9": "#320000",
  "mnspcd-color-yellow-9-rgb": "50, 0, 0",

  /*  Orange
   *  ─────────────────────────────────── */
  "mnspcd-color-orange-1": "#fff2ce",
  "mnspcd-color-orange-1-rgb": "255, 242, 206",
  "mnspcd-color-orange-2": "#ffdda4",
  "mnspcd-color-orange-2-rgb": "255, 221, 164",
  "mnspcd-color-orange-3": "#ffad51",
  "mnspcd-color-orange-3-rgb": "255, 173, 81",
  "mnspcd-color-orange-4": "#f2810b",
  "mnspcd-color-orange-4-rgb": "242, 129, 11",
  "mnspcd-color-orange-5": "#d16300",
  "mnspcd-color-orange-5-rgb": "209, 99, 0",
  "mnspcd-color-orange-6": "#a63f00",
  "mnspcd-color-orange-6-rgb": "166, 63, 0",
  "mnspcd-color-orange-7": "#7d1800",
  "mnspcd-color-orange-7-rgb": "125, 24, 0",
  "mnspcd-color-orange-8": "#620000",
  "mnspcd-color-orange-8-rgb": "98, 0, 0",
  "mnspcd-color-orange-9": "#420000",
  "mnspcd-color-orange-9-rgb": "66, 0, 0",
};

const defaultColors = {
  white: mnspcdColor["mnspcd-color-white"],
  black: mnspcdColor["mnspcd-color-black"],
  grey: mnspcdColor["mnspcd-color-grey-4"],
  red: mnspcdColor["mnspcd-color-red-6"],
  pink: mnspcdColor["mnspcd-color-pink-6"],
  blue: mnspcdColor["mnspcd-color-blue-6"],
  azure: mnspcdColor["mnspcd-color-azure-4"],
  cyan: mnspcdColor["mnspcd-color-cyan-3"],
  green: mnspcdColor["mnspcd-color-green-3"],
  yellow: mnspcdColor["mnspcd-color-yellow-3"],
  orange: mnspcdColor["mnspcd-color-orange-4"],
};

const backgroundColors = {
  white: mnspcdColor["mnspcd-color-white"],
  "grey-light": mnspcdColor["mnspcd-color-grey-1"],
  // "grey-light-darker": mnspcdColor["mnspcd-color-grey-2"],
  "grey-dark": mnspcdColor["mnspcd-color-grey-9"],
  black: mnspcdColor["mnspcd-color-black"],
};

const colorTokens = {
  "background-color": backgroundColors.white,
  "text-color": mnspcdColor["mnspcd-color-grey-9"],
  "border-color": mnspcdColor["mnspcd-color-grey-3"],
  "brand-primary-dark-color": mnspcdColor["mnspcd-color-blue-9"],
  "brand-primary": mnspcdColor["mnspcd-color-blue-6"],
  "brand-primary-light-color": mnspcdColor["mnspcd-color-blue-1"],
  "error-color": mnspcdColor["mnspcd-color-red-6"],
  "warning-color": mnspcdColor["mnspcd-color-yellow-6"],
  "success-color": mnspcdColor["mnspcd-color-green-6"],
  "info-color": mnspcdColor["mnspcd-color-azure-6"],
  "interactive-color": mnspcdColor["mnspcd-color-blue-6"],
};

const colors = Object.assign({}, mnspcdColor, defaultColors, colorTokens);

const colorKeys = Object.keys(mnspcdColor).filter(colorKey => {
  return !colorKey.includes("-rgb");
});

const opacity = {
  "opacity-static": "0.05",
  "opacity-hover": "0.1",
  "opacity-active": "0.15",
  "opacity-static-inverted": "0.15",
};

export default colors;
export { backgroundColors, colorKeys, colorTokens, defaultColors, opacity };
