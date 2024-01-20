"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Card from "../../../components/card/Card";
import Section from "../../../components/section/Section";
import CircleProgressbar from "../../../components/circleProgressbar/CircleProgressbar";
import { plus_jakarta_sans } from "../../../styles/fonts";
import styles from "./plan.module.scss";

const data = [
  {
    id: 1,
    text: "Aligning with your goals",
  },
  {
    id: 2,
    text: "Reviewing your answers",
  },
  {
    id: 3,
    text: "Picking Bible verses and prayers for you",
  },
  {
    id: 4,
    text: "Finalizing your personalized plan",
  },
];

const Plan = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/subscription/email-form");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Section title="We are craftingyour spiritual growth plan">
      <div className={styles.planPage}>
        <div className={styles.progressBar}>
          <CircleProgressbar
            percentage={75}
            styles={{ width: 178, height: 178 }}
            text={"87%"}
          />
        </div>

        <Card>
          {data.map(({ id, text }) => (
            <div key={id} className={plus_jakarta_sans.className}>
              <div className={styles.text}>{text}</div>

              {id < data.length && <hr />}
            </div>
          ))}
        </Card>
      </div>
    </Section>
  );
};

export default Plan;
