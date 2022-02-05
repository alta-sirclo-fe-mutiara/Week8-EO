import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import DropdownProfile from "../../UI/Dropdown/DropdownProfile";

type Props = {
	onClick: any;
};
const colorNav = {
	color: "#FF7158",
};

const NavBar: React.FC<Props> = ({ onClick }) => {
	let isLogged = false;
	const [navbar, setNavbar] = useState<string>("border-bottom");

	useEffect(() => {
		const addShadowNavbar = () => {
			const onScrollNavbar = window.scrollY;
			onScrollNavbar > 10 ? setNavbar("shadow-sm") : setNavbar("border-bottom");
		};

		window.addEventListener("scroll", addShadowNavbar);

		return () => {
			window.removeEventListener("scroll", addShadowNavbar);
		};
	});

	return (
		<Navbar
			className={`${navbar} sticky-top py-3 bg-white`}
			bg="light"
			expand="lg"
		>
			<Container>
				<Navbar.Brand>
					<Link href="/" passHref>
						<span
							className="text-secondary"
							style={{
								cursor: "pointer",
							}}
						>
							Lazy Events
						</span>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse
					className="justify-content-end align-items-center"
					style={colorNav}
				>
					<Nav.Link style={colorNav}>Events</Nav.Link>
					{isLogged && (
						<Nav.Link style={colorNav} href="add-event">
							Add Events
						</Nav.Link>
					)}

					{!isLogged && (
						<Nav.Link
							className="login px-4 btn bg-success text-white"
							onClick={onClick}
						>
							Login
						</Nav.Link>
					)}
					{isLogged && (
						<div className="text-secondary">
							<DropdownProfile />
						</div>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
