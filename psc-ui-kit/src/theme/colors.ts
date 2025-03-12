// import { Colors } from "./types";

// export const baseColors = {
//   failure: "#ED4B9E",
//   primary: "#1FC7D4",
//   primaryBright: "#53DEE9",
//   primaryDark: "#0098A1",
//   secondary: "#7645D9",
//   success: "#31D0AA",
//   warning: "#FFB237",
// };

// export const brandColors = {
//   binance: "#F0B90B",
// };

// export const lightColors: Colors = {
//   ...baseColors,
//   ...brandColors,
//   background: "#FAF9FA",
//   backgroundDisabled: "#E9EAEB",
//   contrast: "#191326",
//   invertedContrast: "#FFFFFF",
//   input: "#eeeaf4",
//   inputSecondary: "#d7caec",
//   tertiary: "#EFF4F5",
//   text: "#452A7A",
//   textDisabled: "#BDC2C4",
//   textSubtle: "#8f80ba",
//   borderColor: "#E9EAEB",
//   card: "#FFFFFF",
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
//   },
// };

// export const darkColors: Colors = {
//   ...baseColors,
//   ...brandColors,
//   secondary: "#9A6AFF",
//   background: "#100C18",
//   backgroundDisabled: "#3c3742",
//   contrast: "#FFFFFF",
//   invertedContrast: "#191326",
//   input: "#483f5a",
//   inputSecondary: "#66578D",
//   primaryDark: "#0098A1",
//   tertiary: "#353547",
//   text: "#EAE2FC",
//   textDisabled: "#666171",
//   textSubtle: "#A28BD4",
//   borderColor: "#524B63",
//   card: "#27262c",
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
//   },
// };


import { Colors } from "./types";

export const baseColors = {
  failure: "#D9534F",
  primary: "#2176FF",
  primaryBright: "#4A90E2",
  primaryDark: "#1B4F72",
  secondary: "#5DADE2",
  success: "#3B9D99",
  warning: "#F4D03F",
};

export const brandColors = {
  binance: "#1F618D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F0F4F8",
  backgroundDisabled: "#D3DDE6",
  contrast: "#2C3E50",
  invertedContrast: "#FFFFFF",
  input: "#E5EBF1",
  inputSecondary: "#C5D3E0",
  tertiary: "#EBF3FA",
  text: "#1F3A60",
  textDisabled: "#B0B8C1",
  textSubtle: "#6A8598",
  borderColor: "#D3DDE6",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E3F2FD 0%, #D1E3F8 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#5B8DB6",
  background: "#0D1A2E",
  backgroundDisabled: "#2C3E50",
  contrast: "#E8F1F2",
  invertedContrast: "#121D2D",
  input: "#2E415A",
  inputSecondary: "#4A637A",
  primaryDark: "#102A43",
  tertiary: "#1C2E47",
  text: "#DCE1E3",
  textDisabled: "#778899",
  textSubtle: "#A0B5C3",
  borderColor: "#3A5068",
  card: "#1A293E",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #2E3A50 0%, #1A2638 100%)",
  },
};
