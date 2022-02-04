import styles from "../../../styles/detail.module.css";

const CommentBar = () => {
  return (
    <div className="d-flex flex-row gap-4">
      <div className="col-1">
        <img
          src="https://www.markuptag.com/images/image-six.jpg"
          alt="Picture of our Logo"
          className={`${styles.img} rounded-circle`}
        />
      </div>
      <div className="d-flex flex-column gap-2 col-10">
        <textarea className="form-control" placeholder="Add Comment" />
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  );
};

export default CommentBar;
