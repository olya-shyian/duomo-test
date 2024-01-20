"use client";

import React, { useState } from "react";
import { MonthsPlanMock } from "./__Mocks__/MonthsPlanMock";
import { plus_jakarta_sans } from "../../styles/fonts";
import Button from "../button/Button";
import MonthsPlanOption from "./MonthsPlanOption";
import Section from "../section/Section";
import Link from "next/link";
import styles from "./monthsPlanSection.module.scss";

const MonthsPlanSection = () => {
  const [checkedMonthsPlan, setCheckedMonthsPlan] = useState();

  const handleRadioButtonChange = (plan) => {
    setCheckedMonthsPlan(plan);
  };

  return (
    <Section title="Choose your plan">
      <div className={plus_jakarta_sans.className}>
        <div className={styles.monthsPlan}>
          {MonthsPlanMock.map((plan) => (
            <MonthsPlanOption
              monthPlan={plan}
              onChange={handleRadioButtonChange}
              checkedMonthsPlan={checkedMonthsPlan}
              key={plan.id}
            />
          ))}
        </div>

        <Link
          href={{
            pathname: "/subscription/plan",
            query: checkedMonthsPlan && { id: `${checkedMonthsPlan.id}` },
          }}
        >
          <Button title="Get my plan" disabled={!checkedMonthsPlan} />
        </Link>

        <div className={styles.description}>
          You are enrolling in a 3-monthly subscription to{" "}
          <a href="https://awesomeapp.com/subscription" className={styles.link}>
            https://awesomeapp.com/subscription
          </a>{" "}
          with the discount price $29.99. You agree that the plan you selected
          will automatically be extended at the full price for successive
          renewal periods and you will be charged $99.99 every 3 months until
          you cancel the subscription. Payments will be charged from the card
          you specified here. You can cancel your subscription by contacting our
          customer support team via email at support@awesomeapp.com Subscription
          Policy. The charge will appear on your bill as &quot;awesomeapp&quot;.
        </div>
      </div>
    </Section>
  );
};

export default MonthsPlanSection;
