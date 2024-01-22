import styles from "./section.module.scss";

const Section = ({ title, children }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
);

export default Section;
