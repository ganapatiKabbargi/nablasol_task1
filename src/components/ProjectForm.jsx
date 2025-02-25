import React, { useState } from "react";
import styles from "./ProjectForm.module.css";
import CreateProject from "../pages/CreateProject";
import SelectView from "../pages/SelectView";
import ManageProject from "../pages/ManageProject";
function ProjectForm() {
  const [currentPage, setCurrentPage] = useState(1);
  let pages = {
    1: <CreateProject />,
    2: <SelectView />,
    3: <ManageProject />,
  };
  return (
    <div className={styles.formHolder}>
      <div className={styles.closeBtnContainer}>
        <button className={styles.closeBtn}>X</button>
      </div>
      <div className={styles.componentHolder}>{pages[currentPage]}</div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.backBtn}
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
          disabled={currentPage < 2 ? true : false}
        >
          back
        </button>

        <button
          className={styles.nextBtn}
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
          disabled={currentPage > 2 ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProjectForm;
