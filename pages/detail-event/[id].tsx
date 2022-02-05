import { NextPage } from "next";
import Layout from "../../components/Layout/Layout";
import styles from "../../styles/detail.module.css";
import CommentList from "../../components/UI/Comment/CommentList";
import CommentBar from "../../components/UI/Comment/CommentBar";

const DetailEvent: NextPage = () => {
	return (
		<Layout pageTitle="Detail Event">
			<div className="jumbotron row">
				<div className="col-md-8">
					<img
						src="https://www.markuptag.com/images/image-six.jpg"
						alt="Picture of our Logo"
						className="rounded img-fluid w-100 mb-3"
					/>
				</div>
				<div className="col-xs-12 col-md-4 d-flex flex-column gap-4">
					<div>
						<h3 className="text">13</h3>
						<h3 className="text">Feb</h3>
						<h3 className="text-black">International Education Expo 2022</h3>
						<h6 className="text-secondary">Hosted by lazy events</h6>
					</div>
					<div className="d-flex flex-column gap-2">
						<h6>Attends (15)</h6>
						<div className="row">
							<div className="col-2">
								<img
									src="https://www.markuptag.com/images/image-six.jpg"
									alt="Picture of our Logo"
									className={`${styles["img-attend"]} rounded-circle`}
								/>
							</div>
						</div>
						<button className="btn btn-green text-white w-100">Join</button>
					</div>
				</div>
				<div className="jumbotron">
					<div className="row d-flex flex-column-reverse flex-md-row my-1">
						<div className="col-md-8 my-3">
							<h2>About this event</h2>
							<p className={styles.palagraf}>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque veniam
								obcaecati incidunt laudantium ea vero maxime? Eligendi ab illo,
								consectetur corporis fugit libero sint doloremque! Voluptate sequi dolor
								soluta amet?
							</p>
						</div>
						<div className="col-xs-12 col-md-4 my-3">
							<div>
								<h6 className="fw-bold">Date and time</h6>
								<h6>Sun, Febuary 13, 2021</h6>
								<h6>1:00 PM ~ 5:00 PM WIB</h6>
							</div>
							<div>
								<h6 className="fw-bold">Location</h6>
								<h6>Sun, Febuary 13, 2021</h6>
								<h6>1:00 PM ~ 5:00 PM WIB</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="d-flex flex-column gap-4">
				<div className="col-10 col-lg-8">
					<h3>Comments</h3>
					<CommentBar />
					<CommentList />
					<CommentList />
					<CommentList />
					<CommentList />
				</div>
			</div>
		</Layout>
	);
};

export default DetailEvent;

// Get static props or get server side props
