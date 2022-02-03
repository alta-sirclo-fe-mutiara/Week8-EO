import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
const DropdownProfile = () => {
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
        <Link href="/profile" passHref>
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
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownProfile;
