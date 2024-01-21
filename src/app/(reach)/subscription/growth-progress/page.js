import Link from "next/link";
import Image from "next/image";
import Section from "../../../components/section/Section";
import Button from "../../../components/button/Button";
import graph from "../../../../../public/images/graph-image.png";
import styles from "./growthProgress.module.scss";

const GrowthProgress = () => (
  <Section title="See your Spiritual Growth progress by Sep 17, 2024">
    <div>
      <div className={styles.graph}>
        <Image alt="Graph" src={graph} />
      </div>

      <Link href="/" className={styles.button}>
        <Button title="Continue" />
      </Link>
    </div>
  </Section>
);

export default GrowthProgress;
