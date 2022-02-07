import styles from "../../../styles/detail.module.css";

type CommentProps = {
	comment: any;
};
const CommentList: React.FC<CommentProps> = ({ comment }) => {
	const { comment: commen } = comment;
	return (
		<div className="d-flex flex-row gap-lg-5 gap-3 my-2">
			<div className="col-sm-1">
				<img
					src="https://www.markuptag.com/images/image-six.jpg"
					alt="Picture of our Logo"
					className={`${styles.img} rounded-circle`}
				/>
			</div>
			<div className="col-sm-10 ">
				<h6 className="fw-bold mt-2">Zhongli</h6>
				<p className="text-secondary">{commen}</p>
			</div>
		</div>
	);
};

export default CommentList;
