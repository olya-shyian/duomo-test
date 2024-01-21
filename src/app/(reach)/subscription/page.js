import MonthsPlanSection from "../../components/monthsPlanBlock/MonthsPlanSection";
import WhatYouGetSection from "../../components/whatYouGetSection/WhatYouGetSection";
import ResultStatisticsSection from "../../components/resultStatisticsSection/resultStatisticsSection";
import UserLoveSection from "../../components/userLoveSection/UserLoveSection";
import BackToTop from "../../components/backToTop/BackToTop";

const Subscription = () => (
  <div>
    <MonthsPlanSection />
    <WhatYouGetSection />
    <ResultStatisticsSection />
    <UserLoveSection />
    <MonthsPlanSection />
    <BackToTop />
  </div>
);

export default Subscription;
