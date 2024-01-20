import Image from "next/image";
import classNames from "classnames";
import Section from "../section/Section";
import Card from "../card/Card";
import { plus_jakarta_sans } from "../../styles/fonts";
import stars from "../../../../public/images/rating.png";
import styles from "./userLoveSection.module.scss";

const userData = [
  {
    id: 1,
    name: "Guadalupe Hudson",
    date: "2 January 2024",
    text: "All I want to know if you are working on another agent A game or chapters. Loved this game!",
  },
  {
    id: 2,
    name: "Bobby Wintheiser",
    date: "27 December 2023",
    text: "Ive played this over and over and I love it!",
  },
  {
    id: 3,
    name: "Colleen Beahan",
    date: "19 December 2023",
    text: "Soooo fun I recommend. Easy and fun I thought it was a little challenging but if it wasn’t it would not be fun I recommend",
  },
];

const UserLoveSection = () => (
  <Section title="Users love App!">
    {userData.map(({ id, name, date, text }) => (
      <div key={id} className={styles.cardItem}>
        <Card>
          <div
            className={classNames(styles.postItem, plus_jakarta_sans.className)}
          >
            <div className={styles.postInfo}>
              <div className={styles.userInfo}>
                <div className={styles.name}>{name}</div>
                <div className={styles.date}>{date}</div>
              </div>

              <div className={styles.stars}>
                <Image alt="stars" src={stars} height={20} width={60} />
              </div>
            </div>

            <div className={styles.text}>{text}</div>
          </div>
        </Card>
      </div>
    ))}
  </Section>
);

export default UserLoveSection;
