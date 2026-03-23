import styles from './commentList.module.css';
import { Comment } from './Comment';

export function CommentList() {
  return (
    <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};
