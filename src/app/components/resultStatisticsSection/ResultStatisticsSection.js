import Section from "../section/Section";
import Card from "../card/Card";
import { plus_jakarta_sans, lora } from "../../styles/fonts";
import classNames from "classnames";
import styles from "./resultStatisticsSection.module.scss";

const data = [
  {
    id: 1,
    text: "of users were able to feel the power of prayer after just 6 weeks",
    number: 71,
  },
  {
    id: 2,
    text: "of users started to have a meaningful daily routine and peaceful mind",
    number: 65,
  },
  {
    id: 3,
    text: "of users struggled with finding time for daily praying",
    number: 47,
  },
];

const ResultStatisticsSection = () => {
  return (
    <Section title="People just like you achieved great results with App!">
      <Card>
        {data.map(({ id, text, number }) => (
          <div key={id}>
            <div className={styles.resultBlock}>
              <div className={classNames(styles.number, lora.className)}>
                {number}%
              </div>

              <div
                className={classNames(styles.text, plus_jakarta_sans.className)}
              >
                {text}
              </div>
            </div>

            {id < data.length && <hr />}
          </div>
        ))}
      </Card>
    </Section>
  );
};

export default ResultStatisticsSection;
