import Image from "next/image";
import Section from "../section/Section";
import Card from "../card/Card";
import checkedIcon from "../../../../public/images/checked-icon.png";
import { plus_jakarta_sans } from "../../styles/fonts";
import styles from "./whatYouGetSection.module.scss";

const results = [
  { id: 1, text: "️You wake up feeling motivated and energized" },
  {
    id: 2,
    text: "You start your day in harmony with prayer",
  },
  { id: 3, text: "Your relationships are stronger than ever" },
  { id: 4, text: "️You’re commited to spiritual growth and self-improvement" },
  { id: 5, text: "You grow closer to God through everyday Bible reading" },
];

const WhatYouGetSection = () => (
  <Section title="What you get">
    <Card>
      {results.map(({ id, text }) => (
        <div key={id} className={plus_jakarta_sans.className}>
          <div className={styles.resultBlock}>
            <div className={styles.checkedIcon}>
              <Image alt="checked Icon" src={checkedIcon} width={14} />
            </div>

            <div className={styles.text}>{text}</div>
          </div>

          {id < results.length && <hr />}
        </div>
      ))}
    </Card>
  </Section>
);

export default WhatYouGetSection;
