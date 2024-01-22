import MonthsPlanSection from "../../components/monthsPlanBlock/MonthsPlanSection";
import WhatYouGetSection from "../../components/whatYouGetSection/WhatYouGetSection";
import ResultStatisticsSection from "../../components/resultStatisticsSection/ResultStatisticsSection";
import UserLoveSection from "../../components/userLoveSection/UserLoveSection";
import BackToTop from "../../components/backToTop/BackToTop";

const Subscription = () => (
  <>
    <MonthsPlanSection />
    <WhatYouGetSection />
    <ResultStatisticsSection />
    <UserLoveSection />
    <MonthsPlanSection />
    <BackToTop />
  </>
);

export default Subscription;
