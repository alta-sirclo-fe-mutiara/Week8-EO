import { useRouter } from "next/router";

function NotFound() {
	const router = useRouter();
	const handleHomepage = () => {
		router.push("/");
	};
	return (
		<div className="container mt-5">
			<div className="row d-flex justify-content-center mt-5">
				<div className="col-11 col-md-8 col-lg-6 mt-5">
					<div className="text-center row shadow rounded-3 pt-3 mt-5 pb-5">
						<div className="col-4 mt-5">
							<img
								src="/image/1.png"
								className="w-100 img-fluid"
								alt="not-found image"
							/>
						</div>
						<div className="col-8">
							<h1 className="mt-3">Ooops . . . </h1>
							<h1 className="fw-bold">You are not login!</h1>
							<div
								className="row justify-content-center home mt-4"
								onClick={handleHomepage}
							>
								Click here we send you to Home Page
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
