import { memo } from "react";
import styles from "./Button.module.scss";

const Button = ({ text, onClick }: any) => {
  return (
    <div>
      <button className={styles.btn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default memo(Button);
