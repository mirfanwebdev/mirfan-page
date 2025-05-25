import styles from "./techStackPill.module.css";
export default function TechStackPill({ stacksArray }) {
  return (
    <div className={styles.stacks}>
      {stacksArray?.map((stack) => (
        <p key={stack}>{stack}</p>
      ))}
    </div>
  );
}
