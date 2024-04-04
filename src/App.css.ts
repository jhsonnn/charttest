import { style } from "@vanilla-extract/css";

export const box = style({
  height: "100%",
  width: "100%",
  padding: "48px",
  boxSizing: "border-box",
});
export const container = style({
  padding: "56px 72px",
  backgroundColor: "rgba(255,255,255,0.8)",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "16px",
  boxSizing: "border-box",
});
export const titleWrapper = style({
  flexDirection: "row",
});

export const headText = style({
  fontSize: "26px",
  fontWeight: "bold",
});

export const explainText = style({
  fontSize: "12px",
  color: "#8E8E8E",
  marginTop: "10px",
  marginBottom: "5px",
});

export const resultTextBox = style({
  display: "flex",
  fontSize: "26px",
  fontWeight: "800",
  flexDirection: "column",
  paddingTop: "40px",
  paddingBottom: "56px",
  gap: "1rem",
});

//#region 파이차트
export const doughnutCharts = style({
  display: "flex",
  flexDirection: "row",
  gap: "8%",
  justifyContent: "space-between",
  width: "100%",
  maxHeight: "60%",
  paddingBottom: "64px",
});
export const largestExpPlaceBox = style({
  backgroundColor: "rgba(255,255,255,0.8)",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "32px",
  width: "43%",
  height: "100%",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  padding: "48px 60px",
});
export const largestExpCategoryBox = style({
  backgroundColor: "rgba(255,255,255,0.8)",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "32px",
  width: "43%",
  height: "100%",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  padding: "48px 60px",
});

export const explainTitle = style({
  fontSize: "1rem",
  paddingBottom: "1rem",
});
export const expExpainText = style({
  fontSize: "1rem",
});
export const ranking = style({
  fontSize: "1rem",
});
export const list = style({
  margin: "8px 0",
  listStyleType: "none",
});

export const doughnutChartBox = style({
  width: "43%",
  height: "100%",

  display: "flex",
});
export const doughnutChart = style({
  width: "100%",
  height: "100%",
});
//#endregion

//#region 바 차트
export const barChartBox = style({
  backgroundColor: "rgba(255,255,255,0.8)",
  border: "1px solid rgba(0,0,0,0.1)", //none으로 나중에 바꾸ㄱl
  display: "flex",
  width: "100%",
  height: "48vh",
});
export const barChart = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
});
//#endregion
