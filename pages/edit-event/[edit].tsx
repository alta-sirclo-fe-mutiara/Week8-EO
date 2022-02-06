import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import moment from "moment";
import { InputEvents } from "../../types/type";
import styles from "../../styles/color.module.css";
import Layout from "../../components/Layout/Layout";
import FormInput from "../../components/Form/FormInput";
import ModalAlert from "../../components/Modal/ModalAlert";
import { MUTATION_UPDATE_EVENT, QUERY_GET_BY_ID } from "../../utils/queries";
import client from "../../utils/apollo-client";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../../context/AuthContext";
import NotFound from "../../components/Layout/NotFound";

const EditEvent = ({ eventEdit }: any) => {
  const [updateEvent] = useMutation(MUTATION_UPDATE_EVENT);
  const { state } = useContext(AuthContext);
  const { token, isLogged } = state;
  console.log(isLogged);
  const {
    id,
    name,
    promotor,
    datetime,
    categoryName,
    location,
    photo,
    description,
  } = eventEdit;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputEvents>();

  const defaultValues: InputEvents = {
    name,
    promotor,
    datetime,
    location,
    photo,
    description,
    categoryId: categoryName,
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

  const onSubmit: SubmitHandler<InputEvents> = (data) => {
    const date = moment(data.datetime).format("YYYY-MM-DD h:mm:ss");

    updateEvent({
      variables: {
        id: id,
        name: data.name,
        promotor: data.promotor,
        categoryId: +data.categoryId,
        datetime: date,
        location: data.location,
        description: data.description,
        photo: data.photo,
      },
      context: {
        headers: {
          Authorization: `Bearer ` + token,
        },
      },
    })
      .then(() => {
        setIsSucces(true);
        setShow({
          ...show,
          success: true,
        });
      })
      .catch(() => {
        setIsSucces(false);
        setShow({
          ...show,
          failed: true,
        });
      });
  };
  if (!isLogged) {
    return <NotFound />;
  }

  return (
    <Layout pageTitle="Edit Event">
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

export const getServerSideProps = async ({ params }: any) => {
  const { data } = await client.query({
    query: QUERY_GET_BY_ID,
    variables: { id: params.edit },
  });

  return {
    props: {
      eventEdit: data.eventsByID,
    },
  };
};
