import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const options = {
  scales: {
    x: {
      type: "category",
      display: true,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false, //캔버스 자체에 크기 고정되어 있는 부분 해제
};

const data = {
  labels: [
    "식비",
    "주거",
    "교통",
    "의료",
    "문화/여가",
    "쇼핑",
    "장보기",
    "용돈/기타",
    "미용",
    "장보기",
    "용돈/기타",
  ],
  datasets: [
    {
      label: "지출 금액",
      data: [
        300000, 200000, 120000, 50000, 130000, 50000, 115000, 10000, 230000,
        30000, 150000,
      ],
      backgroundColor: [],
      //borderColor: [],
      borderWidth: 0,
      barThickness: 50,
    },
  ],
};

// 평균치 보다 큰거 "rgba(240,49,103, 0.8)",
// 평균치 보다 작은것들 "rgba(255,218,225, 0.8)",
// 평균치 그나마 10프로?(이건 조정 필요) 정도 인접한것들 "rgba(255,165,190,0.8)"

//평균치 구하기
//데이터 합
const dataSum = data.datasets[0].data.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
//평균 구하기
const dataAvg = dataSum / data.datasets[0].data.length;

//배경색 설정해주기
const backgroundColors = data.datasets[0].data.map((value) => {
  if (value > dataAvg) {
    return "rgba(240,49,103, 0.8)";
  } else if (value > dataAvg * 0.9) {
    return "rgba(255,165,190,0.8)";
  } else {
    return "rgba(255,218,225, 0.8)";
  }
});

data.datasets[0].backgroundColor = backgroundColors;

const BarChart = () => <Bar data={data} options={options} key='unique_key' />; // key 속성 추가

export default BarChart;
