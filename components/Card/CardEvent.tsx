import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/homepage.module.css";
import { RiEdit2Fill, RiDeleteBin5Line, RiCalendarLine } from "react-icons/ri";

const CardEvent = () => {
	return (
		<div className="col-sm-6 col-md-4 col-lg-3">
			{/* get id to link and use params in detail events */}
			<Link href="/detail-event/1" passHref>
				<div className={`card my-3 shadow-sm ${styles.cards}`}>
					<div className="card-thumbnail p-2">
						<Image
							src="https://www.markuptag.com/images/image-six.jpg"
							alt="Picture of our Logo"
							width={500}
							height={400}
						/>
					</div>
					<div className="card-body">
						<h6 className="card-title fw-bold">What is Lorem Ipsum?</h6>
						<h6 className={styles.text}>Sun, Feb 13, 1:00 PM</h6>
						<p className="h6">Hosted by Product School</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

import React from "react";

const CardMyEvent = () => {
	return (
		<>
			<div className="col-12 col-md-6 col-lg-12 my-2 shadow rounded-3">
				<div className="my-event mt-3 mb-lg-1 mb-4 d-lg-flex align-items-center">
					<div className="card-thumbnail p-2">
						<Image
							src="https://www.markuptag.com/images/image-six.jpg"
							alt="Picture of our Logo"
							width={149}
							height={100}
							className="rounded"
						/>
					</div>
					<div className="card-body px-lg-2 p-1">
						<div className="date-item d-flex">
							<RiCalendarLine size="1.5rem" />
							<div className="date ms-3">Sun, Feb 13, 1:00 PM</div>
						</div>
						<h6 className="card-title my-2 fw-bold">
							Webinar: Your Product Manager Career by PlayStation Sr PM
						</h6>
						<p className="h6">Hosted by Product School</p>
					</div>
					<div className="row d-flex text-center">
						<div className="col-2 mx-3">
							<RiEdit2Fill size="1rem" />
						</div>
						<div className="col-2 mx-3">
							<RiDeleteBin5Line size="1rem" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export { CardEvent, CardMyEvent };
