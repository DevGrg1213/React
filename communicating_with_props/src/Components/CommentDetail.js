import React from "react";
import styles from "./CommentDetail.module.css";

const CommentDetail = (props) => {
  return (
    <div className={styles.comment}>
      <div className={styles.comment__userImage}>
        <img alt="avatar" src={props.image} className={styles.user__image} />
        {/* <img alt="avatar" /> */}
        {/* src={faker.image.image()} */}
      </div>
      <div className={styles.comment__details}>
        <p className={styles.comment__userName}>{props.userName}</p>
        <p className={styles.comment__time}>Today at {props.createdAt}</p>
        <p className={styles.comment__text}>{props.message}</p>
      </div>
    </div>
  );
};

export default CommentDetail;
