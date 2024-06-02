import React from "react";
import TableOrder from "../../../components/man/talk/TableOrder";
import styles from "./EveryTalkPage.module.css";

function TalkOrderPage() {
  return (
    <div className={styles.tablePageContainer}>
      <TableOrder />
    </div>
  );
}

export default TalkOrderPage;
