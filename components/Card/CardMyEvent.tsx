import { RiEdit2Fill, RiDeleteBin5Line, RiCalendarLine } from "react-icons/ri";
import { NavLink } from "react-bootstrap";
import { InputEvents } from "../../types/type";

type EventListProps<InputEvents> = {
  event: InputEvents;
};
const CardMyEvent: React.FC<any> = ({ event }) => {
  const { id, name, promotor, photo, datetime } = event;
  return (
    <>
      <div className="col-12 col-md-6 col-lg-12 my-2 shadow rounded-3">
        <div className="my-event mt-3 mb-lg-3 mb-4 d-lg-flex align-items-center">
          <div className="card-thumbnail col-12 col-lg-2 p-2">
            <img
              src={
                photo ? photo : "https://www.markuptag.com/images/image-six.jpg"
              }
              alt="Picture of our Logo"
              className="rounded img-fluid w-100"
            />
          </div>
          <div className="card-body px-lg-2 p-1d-flex flex-column justify-content-center">
            <div className="date-item d-flex">
              <RiCalendarLine size="1.5rem" />
              <div className="date ms-3">Sun, Feb 13, 1:00 PM</div>
            </div>
            <h6 className="card-title my-2 fw-bold">Webinar: {name}</h6>
            <p className="h6">Hosted by {promotor}</p>
          </div>
          <div className="row d-flex text-center">
            <div className="col-2 mx-2">
              <NavLink
                href={`/edit-event/${id}`}
                style={{
                  cursor: "pointer",
                  padding: 0,
                  color: "var(--bs-body-color)",
                }}
              >
                <RiEdit2Fill size="1rem"></RiEdit2Fill>
              </NavLink>
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

export default CardMyEvent;
