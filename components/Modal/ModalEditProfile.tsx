import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import InputForm from "../UI/Input/InputForm";

type Props = {
  id: number;
  showProf: boolean;
  onSetProf: (arg: boolean) => void;
};

type Inputs = {
  name: string;
  email: string;
  phone: string;
  address: string;
  password?: string;
  id?: number;
};

const ModalEditProfile: React.FC<Props> = ({ showProf, onSetProf, id }) => {
  const [isSucces, setIsSucces] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: any) => {
    console.log({ ...data, id });
    // Send data to back end with graphql
    setIsSucces(true);
    setTimeout(() => {
      setIsSucces(false);
      setIsFailed(true);
    }, 1000);
  };

  return (
    <Modal
      show={showProf}
      onHide={() => onSetProf(false)}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header className="border-0 text-center" closeButton>
        <Modal.Title className="w-100 dark-grey-text font-weight-bold">
          Edit Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-3 mx-2">
        <Form onSubmit={handleSubmit(onSubmit)}>
          {isSucces && <div className="btn btn-success w-100">Succes</div>}
          {isFailed && <div className="btn btn-danger w-100">Failed</div>}
          <Form.Group className="mb-3">
            <InputForm
              className="mb-3 col"
              label="Name"
              placeholder="Change Name"
              defaultValue={""}
              errors={errors.name}
              {...register("name", {
                required: true,
              })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <InputForm
              className="mb-3 col"
              label="Email"
              placeholder="Change Email"
              defaultValue={""}
              errors={errors.email}
              {...register("email", {
                required: true,
              })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <InputForm
              className="mb-3 col"
              label="password"
              placeholder="Change password"
              defaultValue={""}
              errors={errors.password}
              {...register("password", {
                required: true,
              })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <InputForm
              className="mb-3 col"
              label="Phone"
              placeholder="Add phone number"
              defaultValue={""}
              errors={errors.phone}
              {...register("phone", {
                required: true,
              })}
            />
          </Form.Group>
          <div className="py-2 d-flex flex-column justify-content-center gap-4 mt-4">
            <Button type="submit" variant="primary" className="">
              Update Profile
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalEditProfile;
