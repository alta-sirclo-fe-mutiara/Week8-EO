import type { NextPage } from "next";
import { CardEvent } from "../components/Card/CardEvent";
import Layout from "../components/Layout/Layout";
import { ButtonCategory } from "../components/UI/Button/ButtonCategory";
import styles from "../styles/homepage.module.css";
import color from "../styles/color.module.css";

const Home: NextPage = () => {
	return (
		<div
			style={{
				background:
					"linear-gradient(180deg, #f9f1f1 0%, rgba(252, 252, 252, 0) 100%)",
			}}
		>
			<Layout pageTitle="Home">
				<main>
					<div className="jumbotron row">
						<div className="col-lg-6 mx-auto">
							<h3 className={`${color["text-jumbotron"]} text-center fw-bold`}>
								Find your exciting events and activities at Lazy Events!
							</h3>
						</div>
						<div className="container">
							<div className="row height d-flex justify-content-center align-items-center">
								<div className="col-lg-6  mt-3">
									<div className="search">
										{/* filter search */}
										<input type="text" className="form-control" placeholder="Search..." />
									</div>
								</div>
							</div>
							<div className="container mt-5">
								<div className={`row mx-auto ${styles.category}`}>
									{/* Looping Category Button and logic get category */}
									<ButtonCategory>All</ButtonCategory>
									<ButtonCategory>Art</ButtonCategory>
									<ButtonCategory>Sport</ButtonCategory>
									<ButtonCategory>Tech</ButtonCategory>
									<ButtonCategory>Edu</ButtonCategory>
									<ButtonCategory>Music</ButtonCategory>
								</div>
							</div>
						</div>
					</div>

					<section className="py-4 my-5">
						<div className="container">
							<div className="row">
								{/* Looping Card item */}
								<CardEvent />
								<CardEvent />
								<CardEvent />
								<CardEvent />
							</div>
						</div>
					</section>
				</main>
			</Layout>
		</div>
	);
};

export default Home;

// Get server side props to connect with backend and get all events
