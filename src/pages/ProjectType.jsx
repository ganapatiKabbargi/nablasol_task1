import React from "react";
import styles from "./ProjectType.module.css";
function ProjectType({
  projectType,
  projectHourlyRate,
  budget,
  checkboxData,
  updateFields,
}) {
  return (
    <div>
      <div className={styles.header}>Project type</div>
      <div className={styles.subHeading}>
        Don't panic - You can also customize this types in settings
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.buttonEl} ${
            projectType === "Times and Material" && styles.active
          }`}
          type="button"
          onClick={(e) => updateFields({ projectType: e.target.textContent })}
        >
          Times and Material
        </button>
        <button
          className={`${styles.buttonEl} ${
            projectType === "Fixed Fee" && styles.active
          }`}
          type="button"
          onClick={(e) => updateFields({ projectType: e.target.textContent })}
        >
          Fixed Fee
        </button>
        <button
          className={`${styles.buttonEl} ${
            projectType === "Non-Billable" && styles.active
          }`}
          type="button"
          onClick={(e) => updateFields({ projectType: e.target.textContent })}
        >
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
          onChange={(e) => updateFields({ projectHourlyRate: e.target.value })}
          value={projectHourlyRate}
          required
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
          onChange={(e) => updateFields({ budget: e.target.value })}
          value={budget}
          required
        />
        <datalist id="hourlyProjectRate">
          <option value="50$">50$</option>
          <option value="100$">100$</option>
          <option value="200$">200$</option>
        </datalist>
      </div>
      <div className={styles.checkBoxContainer}>
        <div className={styles.inputFild}>
          <input
            type="checkbox"
            name=""
            id="budgetReset"
            onChange={(e) => {
              let newData = [e.target.checked, checkboxData[1]];
              return updateFields({
                checkboxData: newData,
              });
            }}
          />
          <label htmlFor="budgetReset" className={styles.labelEL}>
            Budget resets every month
          </label>
        </div>
      </div>
      <div className={styles.checkBoxContainer}>
        <div className={styles.inputFild}>
          <input
            type="checkbox"
            name=""
            id="sendMail"
            onChange={(e) => {
              let newData = [checkboxData[0], e.target.checked];
              return updateFields({
                checkboxData: newData,
              });
            }}
          />
          <label htmlFor="sendMail" className={styles.labelEL}>
            send email alerts if project exceeds{" "}
            <input
              type="text"
              className={styles.percentage}
              defaultValue={81}
            />{" "}
            % of budget
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProjectType;
