import React from "react";
import styles from "./ProjectForm.module.css";
import CreateProject from "../pages/CreateProject";
function ProjectForm() {
  return (
    <div className={styles.formHolder}>
      <div className={styles.closeBtnContainer}>
        <button className={styles.closeBtn}>X</button>
      </div>
      <CreateProject />
      <div className={styles.buttonContainer}>
        <button className={styles.backBtn}>back</button>
        <button className={styles.nextBtn}>Next</button>
      </div>
    </div>
  );
}

export default ProjectForm;
