import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import {
  MUTATION_DELETE_EVENT,
  MUTATION_DELETE_USER,
} from "../../utils/queries";

type Props = {
  id: number;
  handleClose: any;
  show: boolean;
  isUser: boolean;
  eventList: any;
  setEventList: any;
};
const ModalDelete: React.FC<Props> = ({
  id,
  handleClose,
  show,
  eventList,
  setEventList,
  isUser,
}) => {
  const { dispatch } = useContext(AuthContext);
  const router = useRouter();
  const [deleteEvent] = useMutation(MUTATION_DELETE_EVENT);
  const [deleteUser] = useMutation(MUTATION_DELETE_USER);
  const { state } = useContext(AuthContext);
  const { token } = state;
  const handleDeleteEvent = () => {
    const eventDelete = eventList.filter((event: any) => event.id !== id);
    deleteEvent({
      variables: { id: id },
      context: {
        headers: {
          Authorization: `Bearer ` + token,
        },
      },
    })
      .then(() => {
        handleClose();
        setEventList(eventDelete);
      })
      .catch(() => alert("error..."));
  };

  const handleDeleteAccount = () => {
    deleteUser({
      variables: { id: id },
      context: {
        headers: {
          Authorization: `Bearer ` + token,
        },
      },
    })
      .then(() => {
        router.push("/");
        dispatch({ type: "LOGOUT_SUCCESS" });
        localStorage.removeItem("users");
      })
      .catch(() => alert("error..."));
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true} centered>
        <Modal.Header className="border-0" closeButton />
        <Modal.Body className="text-center">
          <div className="py-2 pb-4">
            <Modal.Title className="text-danger">Warning</Modal.Title>
            <p>
              {isUser
                ? "Do You want to delete Account?"
                : "Do You want to delete this event?"}
            </p>
          </div>

          <div className="d-flex gap-2 justify-content-center">
            <Button
              variant="success text-white py-2 px-4 mb-3 rounded-pill fw-bold"
              onClick={handleClose}
            >
              NO
            </Button>
            <Button
              variant="secondary text-white py-2 px-4 mb-3 rounded-pill fw-bold"
              onClick={isUser ? handleDeleteAccount : handleDeleteEvent}
            >
              Yes
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalDelete;
