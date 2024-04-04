import { ArcElement, Chart, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import testData from "./testDB";

Chart.register(ArcElement, Tooltip);

// testDB의 카테고리 별로 지출금액 합산하는 함수
const getTotalExpensesPerCategories = (data) => {
  const totalExpensesPerCategories = {};

  testData.expenses.forEach((expense) => {
    if (totalExpensesPerCategories[expense.category]) {
      totalExpensesPerCategories[expense.category] += expense.amount;
    } else {
      totalExpensesPerCategories[expense.category] = expense.amount;
    }
  });
  return totalExpensesPerCategories;
};

// 카테고리 별 지출 금액을 합산한 객체
const totalExpensesPerCategoriesResult =
  getTotalExpensesPerCategories(testData);

// 가장 큰 expense가 있는 곳 찾기
let maxCategory = "";
let maxExpense = 0;
for (const category in totalExpensesPerCategoriesResult) {
  if (totalExpensesPerCategoriesResult[category] > maxExpense) {
    maxExpense = totalExpensesPerCategoriesResult[category];
    maxCategory = category;
  }
}

console.log("가장 큰 지출한 카테고리:", maxCategory);
//console.log("가장 큰 지출 금액:", maxExpense);

// 나머지 카테고리들의 비용 합산
let restSum = 0;
for (const category in totalExpensesPerCategoriesResult) {
  if (category !== maxCategory) {
    restSum += totalExpensesPerCategoriesResult[category];
  }
}

const data = {
  datasets: [
    {
      label: "지출",
      data: [maxExpense, restSum],
      backgroundColor: ["rgba(240,49,103, 0.8)", "rgba(255,218,225, 0.8)"],
      borderWidth: 10,
    },
  ],
};

//#region 지출 가장 큰 곳 top 5 구하기

// 카테고리를 지출 금액에 따라 내림차순으로 정렬
const sortedCategories = Object.keys(totalExpensesPerCategoriesResult).sort(
  (a, b) =>
    totalExpensesPerCategoriesResult[b] - totalExpensesPerCategoriesResult[a]
);
// 지출 top5 카테고리
export const top5Categories = sortedCategories.slice(0, 5);
console.log("지출 top5 카테고리:", top5Categories);

// 이걸 리스트로 넘기기!

//#endregion

const DoughnutChartCategory = () => <Doughnut data={data} />;

export default DoughnutChartCategory;
