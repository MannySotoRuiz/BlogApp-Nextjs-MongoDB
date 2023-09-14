import Image from "next/image";
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="dark-mode" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="light-mode" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
