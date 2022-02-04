import Link from "next/link";
import { Modal, Button } from "react-bootstrap";

type Props = {
  handleClose: any;
  show: boolean;
  isSucces: boolean;
};
const ModalAlert: React.FC<Props> = ({ handleClose, show, isSucces }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true} centered>
        <Modal.Header className="border-0" closeButton />
        <Modal.Body className="text-center">
          <div className="py-2 pb-4">
            <Modal.Title
              className={`${isSucces ? "text-success" : "text-danger"}`}
            >
              {isSucces ? "Great" : "Hmm..."}
            </Modal.Title>
            <p>
              {isSucces
                ? "Your events has been created successfully."
                : " Your event was not created successfully."}
            </p>
          </div>
          {isSucces && (
            <Button variant="warning text-white py-2 px-4 mb-3 rounded-pill fw-bold">
              <Link href="/">Explore</Link>
            </Button>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalAlert;
