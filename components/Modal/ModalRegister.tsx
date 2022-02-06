import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { MUTATION_REGISTER } from "../../utils/queries";

type Props = {
  showReg: boolean;
  onSetLog: (arg: boolean) => void;
  onSetReg: (arg: boolean) => void;
};

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const ModalRegister: React.FC<Props> = ({ showReg, onSetLog, onSetReg }) => {
  const [isSucces, setIsSucces] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const [addUser, { data: a }] = useMutation(MUTATION_REGISTER);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addUser({
      variables: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    }).then(() => {
      console.log(a);
      setIsSucces(true);
      setTimeout(() => {
        setIsSucces(false);
        onSetReg(false);
      }, 1000);
    });
  };
  return (
    <Modal
      show={showReg}
      onHide={() => onSetReg(false)}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header className="border-0 text-center" closeButton>
        <Modal.Title className="w-100 dark-grey-text font-weight-bold">
          Register
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-3 mx-2">
        <Form onSubmit={handleSubmit(onSubmit)}>
          {isSucces && <div className="btn btn-success w-100">Succes</div>}
          {isFailed && <div className="btn btn-danger w-100">Failed</div>}
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              {...register("name", {
                required: true,
              })}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>
          <div className="py-2 d-flex flex-column justify-content-center gap-4 mt-4">
            <Button type="submit" variant="primary" className="">
              Register
            </Button>
            <p className="text-center">
              Do you have an account?
              <span
                style={{
                  cursor: "pointer",
                }}
                className="px-2 text-primary"
                onClick={() => {
                  onSetLog(true);
                  onSetReg(false);
                }}
              >
                Sign In
              </span>
            </p>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalRegister;
