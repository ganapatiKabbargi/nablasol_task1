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
  checkboxData: [false,false],
};
function ProjectForm() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const [currentPage, setCurrentPage] = useState(0);

  let pages = [
    <CreateProject {...data} updateFields={updateFields} />,
    <SelectView {...data} updateFields={updateFields} />,
    <ManageProject {...data} updateFields={updateFields} />,
    <ProjectType {...data} updateFields={updateFields} />,
  ];
  function submitHandler(e) {
    e.preventDefault();
    if (currentPage < 3) {
      setCurrentPage((prev) => prev + 1);
    } else {
      console.log(data);
    }
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
            disabled={currentPage > 3 ? true : false}
          >
            {currentPage === 3 ? "Create Project" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
