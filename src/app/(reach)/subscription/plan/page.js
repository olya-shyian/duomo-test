"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "../../../components/card/Card";
import Section from "../../../components/section/Section";
import CircleProgressbar from "../../../components/circleProgressbar/CircleProgressbar";
import AnimatedProgressBar from "../../../components/animatedProgressBar/AnimatedProgressBar";
import { plus_jakarta_sans } from "../../../styles/fonts";
import circleChecked from "../../../../../public/images/circle-checked-icon.png";
import styles from "./plan.module.scss";
import Image from "next/image";

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
  const searchParams = useSearchParams();
  const selectedPlanId = searchParams.get("id");
  const [isTimeOut, setIsTimeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsTimeOut(true);
    }, 1700);

    const timer = setTimeout(() => {
      router.push(`/subscription/form?id=${selectedPlanId}`);
    }, 3000);

    return () => clearTimeout(timer);
  }, [router, selectedPlanId]);

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
              <div className={styles.textIem}>
                <div className={styles.icon}>
                  {!isTimeOut ? (
                    <div className={styles.progress}>
                      <AnimatedProgressBar styles={{ width: 18, height: 18 }} />
                    </div>
                  ) : (
                    <Image alt="Arrow-up icon" src={circleChecked} width={24} />
                  )}
                </div>

                <div className={styles.text}>{text}</div>
              </div>

              {id < data.length && <hr />}
            </div>
          ))}
        </Card>
      </div>
    </Section>
  );
};

export default Plan;
