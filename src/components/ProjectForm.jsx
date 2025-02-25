import React, { useState } from "react";
import styles from "./ProjectForm.module.css";
import CreateProject from "../pages/CreateProject";
import SelectView from "../pages/SelectView";
import ManageProject from "../pages/ManageProject";
import ProjectType from "../pages/ProjectType";

const INITIAL_DATA = {
  projectName: "",
  client: "",
  fromDate: "",
  toDate: "",
  notes: "",
  selectedView: "",
  whoCanManage: "",
  projectType: "",
  projectHourlyRate: "",
  budget: "",
  checkboxData: [],
};
function ProjectForm() {
  const [data, setData] = useState(INITIAL_DATA);
  const [currentPage, setCurrentPage] = useState(0);

  let pages = [
    <CreateProject />,
    <SelectView />,
    <ManageProject />,
    <ProjectType />,
  ];
  function submitHandler(e) {
    e.preventDefault();
    setCurrentPage((prev) => prev + 1);
  }

  return (
    <div className={styles.formHolder}>
      <div className={styles.closeBtnContainer}>
        <button className={styles.closeBtn}>X</button>
      </div>
      <form action="" className={styles.formEl} onSubmit={submitHandler}>
        <div className={styles.componentHolder}>{pages[currentPage]}</div>

        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.backBtn}
            onClick={() => {
              setCurrentPage((prev) => prev - 1);
            }}
            disabled={currentPage < 1 ? true : false}
          >
            back
          </button>

          <button
            type="submit"
            className={styles.nextBtn}
            disabled={currentPage > 2 ? true : false}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
