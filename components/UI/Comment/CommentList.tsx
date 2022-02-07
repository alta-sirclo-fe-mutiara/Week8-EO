import styles from "../../../styles/detail.module.css";

type CommentProps = {
  comments: any;
};
const CommentList: React.FC<CommentProps> = ({ comments }) => {
  const { comment, name, avatar } = comments;
  console.log(comment);
  return (
    <div className="d-flex flex-row gap-5">
      <div className="col-sm-1">
        <img
          src={avatar ? avatar : "/image/image-default.webp"}
          alt="Picture of our Logo"
          className={`${styles.img} rounded-circle`}
        />
      </div>
      <div className="">
        <h6 className="fw-bold">{name}</h6>
        <p className="text-secondary">{comment}</p>
      </div>
    </div>
  );
};

export default CommentList;
