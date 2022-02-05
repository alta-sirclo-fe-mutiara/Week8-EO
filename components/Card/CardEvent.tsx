import Link from "next/link";
import styles from "../../styles/homepage.module.css";
import { RiEdit2Fill, RiDeleteBin5Line, RiCalendarLine } from "react-icons/ri";

const CardEvent = () => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      {/* get id to link and use params in detail events */}
      <Link href="/detail-event/1" passHref>
        <div className={`card my-3 shadow-sm ${styles.cards}`}>
          <div className="card-thumbnail mt-2 mx-auto col-11 p-2">
            <img
              src="https://www.markuptag.com/images/image-six.jpg"
              alt="Picture of our Logo"
              className="rounded img-fluid w-100"
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

export default CardEvent;
