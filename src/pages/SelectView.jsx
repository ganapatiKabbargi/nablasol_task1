import React from "react";
import { CiViewList } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";
import styles from "./SelectView.module.css";

function SelectView() {
  return (
    <div>
      <div className={styles.header}>Select a View</div>
      <div className={styles.subHeading}>
        You can also customize this views in settings
      </div>
      <div className={styles.selectViewContainer}>
        <div className={styles.listView}>
          <div className={styles.listIcon}>
            <CiViewList size={100} />
          </div>
          <div>List</div>
        </div>
        <div className={styles.boardView}>
          <div className={styles.boardIcon}>
            <CiViewBoard size={100} />
          </div>
          <div>Board</div>
        </div>
      </div>
    </div>
  );
}

export default SelectView;
