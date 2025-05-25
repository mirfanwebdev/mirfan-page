import styles from "./techStackPill.module.css";
export default function TechStackPill({ stacksArray, outline = false }) {
  return (
    <div className={styles.stacks}>
      {stacksArray?.map((stack) =>
        outline ? (
          <p className={styles.outline} key={stack}>
            {stack}
          </p>
        ) : (
          <p key={stack}>{stack}</p>
        )
      )}
    </div>
  );
}
