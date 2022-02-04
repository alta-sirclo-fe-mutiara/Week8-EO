import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import moment from "moment";
import { InputEvents } from "../../types/type";
import styles from "../../styles/color.module.css";
import Layout from "../../components/Layout/Layout";
import FormInput from "../../components/Form/FormInput";
import ModalAlert from "../../components/Modal/ModalAlert";

const EditEvent = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputEvents>();

  const defaultValues: InputEvents = {
    name: "lazy events",
    promotor: "lazy events",
    category_id: 1,
    date: "2022-02-25 12:00:00",
    location: "Jakarta",
    photo: "google.com",
    details: "ini details",
  };

  const [isSucces, setIsSucces] = useState<boolean>(false);
  const [show, setShow] = useState({
    success: false,
    failed: false,
  });
  const handleClose = () => {
    setShow({
      success: false,
      failed: false,
    });
  };

  const onSubmit: SubmitHandler<InputEvents> = async (data) => {
    const date = moment(data.date).format("YYYY-MM-DD h:mm:ss");
    console.log({
      ...data,
      id: 1,
      date,
      category_id: +data.category_id,
    });
    // Sent to backend
    // Logic modal succes && error
    setIsSucces(false);
    setTimeout(() => {
      setShow({
        ...show,
        failed: true,
      });
    }, 1000);
  };

  return (
    <Layout>
      <ModalAlert
        handleClose={handleClose}
        show={show.success}
        isSucces={isSucces}
      />
      <ModalAlert
        handleClose={handleClose}
        show={show.failed}
        isSucces={isSucces}
      />
      <div className="jumbotron">
        <div className={styles.jumbotron}>
          <div className="container h-100 d-flex justify-content-center  align-items-center">
            <h1 className="text-black fw-bold">Edit Events</h1>
          </div>
        </div>

        <div className="my-5">
          <FormInput
            defaultValues={defaultValues}
            addType={false}
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

export default EditEvent;

// Get static props or get server side
