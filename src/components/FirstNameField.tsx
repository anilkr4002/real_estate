import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FirstNameField.module.css";

export type FirstNameFieldType = {
  className?: string;
  firstName?: string;
  firstNamePlaceholder?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const FirstNameField: FunctionComponent<FirstNameFieldType> = ({
  className = "",
  firstName,
  firstNamePlaceholder,
  propMinWidth,
}) => {
  const firstNameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.firstNameField, className].join(" ")}>
      <div className={styles.firstName} style={firstNameStyle}>
        {firstName}
      </div>
      <div className={styles.firstNameInput}>
        <div className={styles.firstNameInputChild} />
        <input
          className={styles.firstName1}
          placeholder={firstNamePlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default FirstNameField;
