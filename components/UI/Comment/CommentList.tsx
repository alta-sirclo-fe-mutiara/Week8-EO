import styles from "../../../styles/detail.module.css";

type CommentProps = {
	comments: any;
};
const CommentList: React.FC<CommentProps> = ({ comments }) => {
	const { comment, name, avatar } = comments;
	return (
		<div className="d-flex flex-row gap-lg-5 gap-3 my-2">
			<div className="col-sm-1 col-md-1 ">
				<img
					src={avatar ? avatar : "/image/image-default.webp"}
					alt="Picture of our Logo"
					className={`${styles.img} rounded-circle`}
				/>
			</div>
			<div className="col-sm-10 col-md-8  ms-lg-0 ms-sm-5">
				<h6 className="fw-bold mt-2">{name}</h6>
				<p className="text-secondary">{comment}</p>
			</div>
		</div>
	);
};

export default CommentList;
