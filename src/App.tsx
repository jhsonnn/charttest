import { Box, Divider } from "@mui/material";
import { Text } from "@radix-ui/themes";
import {
  barChart,
  barChartBox,
  box,
  container,
  doughnutChart,
  doughnutChartBox,
  doughnutCharts,
  expExpainText,
  explainText,
  explainTitle,
  headText,
  largestExpCategoryBox,
  largestExpPlaceBox,
  list,
  ranking,
  resultTextBox,
  titleWrapper,
} from "./App.css";
import BarChart from "./BarChart";
import DoughnutChartCategory, { top5Categories } from "./DoughnutChartCategory";
import DoughnutChartPlace, { top5Places } from "./DoughnutChartPlace";

function App() {
  // 가져온 데이터 확인
  //console.log("App.tsx_지출 top5 카테고리 : ", top5Categories);
  //console.log("App.tsx_지출 top5 장소 : ", top5Places);

  return (
    <Box className={box}>
      <Box className={container}>
        <Box className={titleWrapper}>
          <Text className={headText}>이번 달 레포트</Text>
          <Text as='p' className={explainText}>
            이번 달 지출한 금액을 레포트로 확인해보세요
          </Text>
          <Divider sx={{ borderColor: "#FBEAEB", borderWidth: "1px" }} />
        </Box>
        <Box className={resultTextBox}>
          <Box>
            <Text>이번 달 총 예산 700,000 원 중</Text>
          </Box>
          <Box>
            <Text>+ 100,000 원이 세이브 되었습니다.</Text>
          </Box>
        </Box>
        <Box className={doughnutCharts}>
          <Box className={largestExpCategoryBox}>
            <Box className={expExpainText}>
              <Box className={explainTitle}>
                이번 달 지출이 가장 큰 곳이에요
              </Box>
              <Box className={ranking}>
                <ul className={list}>
                  {top5Categories.map((category, index) => (
                    <li key={index + 1}>
                      {index + 1}. {category[0]}
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
            <Box className={doughnutChartBox}>
              <Box className={doughnutChart}>
                <DoughnutChartCategory />
              </Box>
            </Box>
          </Box>
          <Box className={largestExpPlaceBox}>
            <Box className={expExpainText}>
              <Box className={explainTitle}>이번 달 가장 큰 지출이에요</Box>
              <Box className={ranking}>
                <ul className={list}>
                  {top5Places.map((place, index) => (
                    <li key={index}>
                      {index + 1}. {place[0]}
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
            <Box className={doughnutChartBox}>
              <Box className={doughnutChart}>
                <DoughnutChartPlace />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={barChartBox}>
          <Box className={barChart}>
            <BarChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
