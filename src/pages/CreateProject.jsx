import React from "react";
import styles from "./CreateProject.module.css";

function CreateProject() {
  return (
    <>
      <div>
        <h3>Create a project</h3>
        <form action="" className={styles.formEl}>
          <div className={styles.projectNameField}>
            <label htmlFor="">Project name</label>
            <input
              type="text"
              className={styles.projectName}
              placeholder="Enter project name here"
            />
          </div>
          <div className={styles.clientField}>
            <div className={styles.selectClientField}>
              <label htmlFor="">Client</label>
              <input
                type="text"
                list="clients"
                placeholder="Select a client"
                className={styles.selectClient}
              />
              <datalist name="" id="clients">
                <option value="clientA" />
                <option value="clientB" />
                <option value="clientC" />
              </datalist>
            </div>
            <div className={styles.spanEl}>or</div>
            <div className={styles.addClient}>
              <input
                type="text"
                className={styles.newClient}
                placeholder="+ New client"
              />
            </div>
          </div>
          <div className={styles.dateField}>
            <label htmlFor="">Dates</label>
            <div className={styles.dateElContainer}>
              <input type="date" name="" id="" className={styles.dateEl} />
              <input type="date" name="" id="" className={styles.dateEl} />
            </div>
          </div>
          <label htmlFor="">Notes</label>
          <br />
          <textarea name="" id="" placeholder="Optional" />
        </form>
      </div>
    </>
  );
}

export default CreateProject;
