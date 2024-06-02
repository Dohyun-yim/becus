import React from "react";
import TableProduct from "../../../components/man/talk/TableProduct";
import styles from "./EveryTalkPage.module.css";

function TalkProductPage() {
  return (
    <div className={styles.tablePageContainer}>
      <TableProduct />
    </div>
  );
}

export default TalkProductPage;
