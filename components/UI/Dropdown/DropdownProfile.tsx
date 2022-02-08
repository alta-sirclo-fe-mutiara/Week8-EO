import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { AuthActionKind } from "../../../context/AuthReducer";
const DropdownProfile = () => {
  const { dispatch } = useContext(AuthContext);
  const router = useRouter();
  const logoutHandler = () => {
    dispatch({ type: AuthActionKind.LOGOUT_SUCCESS });
    localStorage.removeItem("users");
    router.push("/");
    router.replace("/");
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic">
        <CgProfile
          style={{
            width: "25px",
            height: "25px",
          }}
        />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Link href="/account" passHref>
          <Dropdown.Item>
            <CgProfile
              style={{
                width: "20px",
                height: "20px",
                marginRight: "0.2rem",
              }}
            />
            Profile
          </Dropdown.Item>
        </Link>

        <Dropdown.Item>
          <FiLogOut
            style={{
              width: "20px",
              height: "20px",
              marginRight: "0.2rem",
            }}
          />
          <span onClick={logoutHandler}>Logout</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownProfile;
