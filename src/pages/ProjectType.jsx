import React from "react";
import styles from "./ProjectType.module.css";
function ProjectType() {
  return (
    <div>
      <div className={styles.header}>Project type</div>
      <div className={styles.subHeading}>
        Don't panic - You can also customize this types in settings
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonEl} type="button">
          Times and Material
        </button>
        <button className={styles.buttonEl} type="button">
          Fixed Fee
        </button>
        <button className={styles.buttonEl} type="button">
          {" "}
          Non-Billable
        </button>
      </div>
      <div className={styles.hourlyRateContainer}>
        <div className={styles.hourly}>Hourly</div>
        <div className={styles.hourlyDescription}>
          We need hourly rates to track your project's billable amount.
        </div>
      </div>
      <div className={styles.inputElContainer}>
        <input
          type="text"
          className={styles.hourlyRate}
          list="hourlyProjectRate"
          placeholder="Project hourly rate"
        />
        <datalist id="hourlyProjectRate">
          <option value="50$">50$</option>
          <option value="100$">100$</option>
          <option value="200$">200$</option>
        </datalist>
        <input type="text" className={styles.selectedRate} />
      </div>
      <div className={styles.hourlyRateContainer}>
        <div className={styles.hourly}>Budget</div>
        <div className={styles.hourlyDescription}>
          We need hourly rates to track your project's billable amount.
        </div>
      </div>
      <div className={styles.inputElContainer}>
        <input
          type="text"
          className={styles.hourlyRate}
          list="hourlyProjectRate"
          placeholder="Hours per person"
        />
        <datalist id="hourlyProjectRate">
          <option value="50$">50$</option>
          <option value="100$">100$</option>
          <option value="200$">200$</option>
        </datalist>
      </div>
      <div className={styles.checkBoxContainer}>
        <div className={styles.inputFild}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="" className={styles.labelEL}>
            Budget resets every month
          </label>
        </div>
      </div>
      <div className={styles.checkBoxContainer}>
        <div className={styles.inputFild}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="" className={styles.labelEL}>
            send email alerts if project exceeds{" "}
            <input type="text" className={styles.percentage} /> % of budget
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProjectType;
