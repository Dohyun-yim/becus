import React from "react";
import TableAllTalk from "../../../components/man/talk/TableAllTalk";
import styles from "./TalkAboutPage.module.css";

function TalkAllPage() {
  return (
    <div className={styles.tablePageContainer}>
      <TableAllTalk />
    </div>
  );
}

export default TalkAllPage;
