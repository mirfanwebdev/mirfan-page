import styles from "./sectionTitle.module.css";

export default function SectionTitle({ children }) {
  return <h3 className={styles.title}>{children}</h3>;
}
