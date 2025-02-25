import React from "react";

import { IoIosPeople } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaUserGroup } from "react-icons/fa6";
import styles from "./ManageProject.module.css";

function ManageProject() {
  return (
    <div>
      <div className={styles.header}>Who can manage projects</div>
      <div className={styles.subHeading}>
        Don't panic - You can also customize this permissions in settings
      </div>
      <div className={styles.manageProjectContainer}>
        <div className={styles.manageProjectField}>
          <div className={styles.everyOneIcon}>
            <IoIosPeople size={40} />
          </div>
          <div className={styles.manageProjectInfo}>
            <div className={styles.manageProject}>EveryOne</div>
            <div className={styles.manageProjectDescription}>
              All user can now to see it but,guests cannot access the project
            </div>
          </div>
        </div>
        <div className={styles.manageProjectField}>
          <div className={styles.everyOneIcon}>
            <CgProfile size={40} />
          </div>
          <div className={styles.manageProjectInfo}>
            <div className={styles.manageProject}>Only Admin's</div>
            <div className={styles.manageProjectDescription}>
              Only Admins can manage everything
            </div>
          </div>
        </div>
        <div className={styles.manageProjectField}>
          <div className={styles.everyOneIcon}>
            <FaUserGroup size={40} />
          </div>
          <div className={styles.manageProjectInfo}>
            <div className={styles.manageProject}>Only to specific people</div>
            <div className={styles.manageProjectDescription}>
              Only some specific people can able to see it
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageProject;
