import styles from "../../../styles/detail.module.css";
const CommentList = () => {
	return (
		<div className="d-flex flex-row gap-4">
			<div className="d-flex flex-row gap-4">
				<div className="col-sm-1">
					<img
						src="https://www.markuptag.com/images/image-six.jpg"
						alt="Picture of our Logo"
						className={`${styles.img} rounded-circle`}
					/>
				</div>
				<div className="ps-2">
					<h6 className="fw-bold">Zhongli</h6>
					<p className="text-secondary">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
						obcaecati vel quod atque aliquam dolore odio. Fugit quisquam, neque
						ducimus cum non ullam. Adipisci voluptatibus maiores corporis sed
						necessitatibus cum.
					</p>
				</div>
			</div>
		</div>
	);
};

export default CommentList;
