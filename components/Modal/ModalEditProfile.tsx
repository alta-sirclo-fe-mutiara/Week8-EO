import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MUTATION_UPDATE_USER } from "../../utils/queries";
import InputForm from "../UI/Input/InputForm";

type Props = {
  id: number;
  showProf: boolean;
  setIsProfile: (arg: any) => void;
  onSetProf: (arg: boolean) => void;
  token: string;
};

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  password: string;
  id: number;
};

const ModalEditProfile: React.FC<Props> = ({
  showProf,
  onSetProf,
  setIsProfile,
  id,
  token,
}) => {
  const [isSucces, setIsSucces] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const [updateUser] = useMutation(MUTATION_UPDATE_USER);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    const { name, email, phoneNumber, avatar, password } = data;
    updateUser({
      variables: {
        id: id,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        avatar: avatar,
        password: password,
      },
      context: {
        headers: {
          Authorization: `Bearer ` + token,
        },
      },
    })
      .then((data) => {
        setIsProfile(data.data.updateUser);
        setIsSucces(true);
        setTimeout(() => {
          onSetProf(false);
          setIsSucces(false);
        }, 1000);
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
          <Form.Group className="mb-3">
            <InputForm
              className="mb-3 col"
              label="Avatar"
              placeholder="Change Avatar"
              defaultValue={""}
              errors={errors.avatar}
              {...register("avatar", {
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <InputForm
              className="mb-3 col"
              label="Phone"
              placeholder="Add phone number"
              defaultValue={""}
              errors={errors.phoneNumber}
              {...register("phoneNumber", {
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
