import React from "react";
import styles from "./CreateProject.module.css";

function CreateProject({
  projectName,
  client,
  fromDate,
  toDate,
  notes,
  updateFields,
}) {
  return (
    <>
      <div>
        <h3>Create a project</h3>

        <div className={styles.projectNameField}>
          <label htmlFor="">Project name</label>
          <input
            type="text"
            className={styles.projectName}
            placeholder="Enter project name here"
            value={projectName}
            onChange={(e) => updateFields({ projectName: e.target.value })}
            required
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
              value={client}
              onChange={(e) => updateFields({ client: e.target.value })}
              required
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
            <input
              type="date"
              name=""
              id=""
              className={styles.dateEl}
              value={fromDate}
              onChange={(e) => updateFields({ fromDate: e.target.value })}
              required
            />
            <input
              type="date"
              name=""
              id=""
              className={styles.dateEl}
              value={toDate}
              onChange={(e) => updateFields({ toDate: e.target.value })}
              required
            />
          </div>
        </div>
        <label htmlFor="">Notes</label>
        <br />
        <textarea
          name=""
          id=""
          placeholder="Optional"
          value={notes}
          onChange={(e) => updateFields({ notes: e.target.value })}
        />
      </div>
    </>
  );
}

export default CreateProject;
