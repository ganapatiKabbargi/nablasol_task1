import React from "react";
import { CiViewList } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";
import styles from "./SelectView.module.css";

function SelectView({ selectedView, updateFields }) {
  return (
    <div>
      <div className={styles.header}>Select a View</div>
      <div className={styles.subHeading}>
        You can also customize this views in settings
      </div>
      <div className={styles.selectViewContainer}>
        <div
          className={`${styles.listView} ${
            selectedView === "listView" && styles.active
          }`}
          onClick={() => updateFields({ selectedView: "listView" })}
        >
          <div
            className={`${styles.listIcon} ${
              selectedView === "listView" && styles.activeBorder
            }`}
          >
            <CiViewList size={100} />
          </div>
          <div>List</div>
        </div>
        <div
          className={`${styles.boardView} ${
            selectedView === "boardView" && styles.active
          }`}
          onClick={() => updateFields({ selectedView: "boardView" })}
        >
          <div
            className={`${styles.boardIcon} ${
              selectedView === "boardView" && styles.activeBorder
            }`}
          >
            <CiViewBoard size={100} />
          </div>
          <div>Board</div>
        </div>
      </div>
    </div>
  );
}

export default SelectView;
