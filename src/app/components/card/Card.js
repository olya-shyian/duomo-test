import styles from "./card.module.scss";

const Card = ({ children }) => <div className={styles.card}>{children}</div>;
export default Card;
