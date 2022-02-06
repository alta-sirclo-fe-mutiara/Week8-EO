import { useLazyQuery } from "@apollo/client";
import { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { QUERY_USER } from "../../utils/queries";

type Props = {
  showLog: boolean;
  onSetLog: (arg: boolean) => void;
  onSetReg: (arg: boolean) => void;
};

type Inputs = {
  email: string;
  password: string;
};

const ModalLogin: React.FC<Props> = ({ showLog, onSetLog, onSetReg }) => {
  const { dispatch } = useContext(AuthContext);
  const [getUser, { loading, data: user, error }] = useLazyQuery(QUERY_USER);
  const [isSucces, setIsSucces] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    getUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    })
      .then((data) => {
        if (data.data) {
          setIsSucces(true);
          localStorage.setItem(
            "users",
            JSON.stringify({
              token: data.data.authLogin.token,
              name: data.data.authLogin.name,
              email: data.data.authLogin.email,
            })
          );
          setTimeout(() => {
            onSetLog(false);
            setIsSucces(false);
            dispatch({ type: "LOGIN_SUCCESS", payload: data.data.authLogin });
          }, 500);
        }
      })
      .catch(() => {
        setIsFailed(true);
        setTimeout(() => {
          setIsFailed(false);
        }, 1000);
      });
  };
  return (
    <Modal
      show={showLog}
      onHide={() => onSetLog(false)}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header className="border-0 text-center" closeButton>
        <Modal.Title className="w-100 dark-grey-text font-weight-bold">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-3 mx-2">
        <Form onSubmit={handleSubmit(onSubmit)}>
          {isSucces && <div className="btn btn-success w-100">Succes</div>}
          {isFailed && <div className="btn btn-danger w-100">Failed</div>}
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
              Login
            </Button>
            <p className="text-center">
              Not yet account?
              <span
                style={{
                  cursor: "pointer",
                }}
                className="px-2 text-primary"
                onClick={() => {
                  onSetLog(false);
                  onSetReg(true);
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalLogin;
