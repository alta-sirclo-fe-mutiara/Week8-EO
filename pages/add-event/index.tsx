import { useContext, useState } from "react";
import moment from "moment";
import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputEvents } from "../../types/type";
import styles from "../../styles/color.module.css";
import Layout from "../../components/Layout/Layout";
import FormInput from "../../components/Form/FormInput";
import ModalAlert from "../../components/Modal/ModalAlert";
import { MUTATION_CREATE_EVENT } from "../../utils/queries";
import { AuthContext } from "../../context/AuthContext";
import NotFound from "../../components/Layout/NotFound";

const AddEvent = () => {
  const { state } = useContext(AuthContext);
  const { token, isLogged } = state;
  const [createEvent] = useMutation(MUTATION_CREATE_EVENT);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputEvents>();
  const [show, setShow] = useState({
    success: false,
    failed: false,
    isSucces: false,
  });

  const handleClose = () => {
    setShow({ ...show, success: false, failed: false });
  };

  const onSubmit: SubmitHandler<InputEvents> = async (data) => {
    const {
      name,
      promotor,
      categoryId,
      datetime,
      location,
      description,
      photo,
    } = data;

    const date = moment(datetime).format("YYYY-MM-DD h:mm:ss");
    let addEvent = {
      name: name,
      userId: 12,
      promotor: promotor,
      categoryId: +categoryId,
      datetime: date,
      location: location,
      description: description,
      photo: photo,
    };

    if (token) {
      createEvent({
        variables: addEvent,
        context: {
          headers: {
            Authorization: `Bearer ` + token,
          },
        },
      })
        .then((data) => {
          if (data.data) {
            setShow({
              success: true,
              failed: false,
              isSucces: true,
            });
          }
        })
        .catch(() => {
          setShow({
            success: false,
            failed: true,
            isSucces: false,
          });
        });
    }
  };

  if (!isLogged) {
    return <NotFound />;
  }

  return (
    <Layout pageTitle="Add Event">
      <ModalAlert
        handleClose={handleClose}
        show={show.success}
        isSucces={show.isSucces}
      />
      <ModalAlert
        handleClose={handleClose}
        show={show.failed}
        isSucces={show.isSucces}
      />
      <div className="jumbotron">
        <div className={styles.jumbotron}>
          <div className="container h-100 d-flex justify-content-center  align-items-center">
            <h1 className="text-black fw-bold">Add Events</h1>
          </div>
        </div>

        <div className="my-5">
          <FormInput
            defaultValues={null}
            addType={true}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            control={control}
            errors={errors}
          />
        </div>
      </div>
    </Layout>
  );
};

export default AddEvent;
