import { useState } from "react";
import moment from "moment";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputEvents } from "../../types/type";
import styles from "../../styles/color.module.css";
import Layout from "../../components/Layout/Layout";
import FormInput from "../../components/Form/FormInput";
import ModalAlert from "../../components/Modal/ModalAlert";

const AddEvent = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputEvents>();
  const [show, setShow] = useState({
    success: false,
    failed: false,
  });
  const [isSucces, setIsSucces] = useState<boolean>(false);
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
    setIsSucces(false);
    setTimeout(() => {
      setShow({
        ...show,
        failed: true,
      });
    }, 1000);
  };
  return (
    <Layout pageTitle="Add Event">
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
