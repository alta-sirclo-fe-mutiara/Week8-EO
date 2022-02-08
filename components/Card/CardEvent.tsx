import Link from "next/link";
import styles from "../../styles/homepage.module.css";
import { EventData } from "../../types/type";
import moment from "moment";
const CardEvent: React.FC<EventData> = ({
  id,
  name,
  photo,
  datetime,
  promotor,
}) => {
  const dateEvent = moment(datetime).format("llll");
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 event my-2 ">
      <Link href={`/detail-event/${id}`} passHref>
        <div className={`card my-3 shadow-sm ${styles.cards}`}>
          <div className="card-thumbnail mt-2 mx-auto col-11 p-2">
            <img
              src={
                photo ? photo : "https://www.markuptag.com/images/image-six.jpg"
              }
              alt="Picture of our Logo"
              className={`${styles["img-event"]} rounded img-fluid h-100`}
            />
          </div>
          <div className="card-body">
            <h6 className="card-title text-capitalize fw-bold">{name}</h6>
            <h6 className={styles.text}>{dateEvent}</h6>
            <p className="h6 text-capitalize">Hosted by {promotor}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardEvent;
