import { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import CardMyEvent from "../../components/Card/CardMyEvent";
import styles from "../../styles/account.module.css";
import { FaUserAlt } from "react-icons/fa";
import { RiEdit2Fill, RiDeleteBin5Line } from "react-icons/ri";
import ModalEditProfile from "../../components/Modal/ModalEditProfile";
import { useLazyQuery } from "@apollo/client";
import { QUERY_GET_USER_LIST_EVENT } from "../../utils/queries";
import { AuthContext } from "../../context/AuthContext";
import { tokenLocal } from "../../utils/formatDate";
import { InputEvents } from "../../types/type";

type Props = {
  onClick: any;
};

const Account: React.FC<Props> = () => {
  const [showModalProfile, setShowModalProfile] = useState(false);
  const [eventList, setEventList] = useState<InputEvents | any>([]);
  const [getListEvent] = useLazyQuery(QUERY_GET_USER_LIST_EVENT);
  const { state } = useContext(AuthContext);
  const { isLogged, token, user } = state;
  const [isProfile, setIsProfile] = useState({
    name: user?.name,
    email: user?.email,
    avatar: null,
    phoneNumber: "",
  });

  const { name, avatar, phoneNumber } = isProfile;

  const tokenId = tokenLocal("users");

  useEffect(() => {
    getListEvent({
      variables: { userId: tokenId },
      context: {
        headers: {
          Authorization: `Bearer ` + token,
        },
      },
    })
      .then((data) => {
        setEventList(data.data.events);
      })
      .catch(() => {
        console.log("error");
      });
  }, [getListEvent, token, tokenId]);

  return (
    <>
      <Layout pageTitle="Profile">
        <ModalEditProfile
          id={tokenId || 0}
          token={token}
          showProf={showModalProfile}
          onSetProf={setShowModalProfile}
          setIsProfile={setIsProfile}
        />
        <div className="flex-column ">
          <div className="col-12 justify-content-center card shadow border-0 px-0 my-4">
            <img
              className={styles["background-profile"]}
              src="/banner-account.png"
              alt="banner-profile"
            />
            <div className="row justify-content-center align-items-center py-2 px-3">
              <div className="col-lg-2 col-12 col-md-5 mt-3 text-center">
                <div className={`${styles["avatar"]} mb-3 fs-1  text-white`}>
                  <img
                    src={avatar ? avatar : "/image/image-default.webp"}
                    alt="Picture of our Logo"
                    className={`${styles.img} rounded-circle`}
                  />
                </div>
              </div>
              <div className="col-lg-3 flex-column">
                <div className="profile-item text-center text-lg-start">
                  <h5 className="mb-0 fw-bolder">Username</h5>
                  <p>{name}</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="profile-item text-center text-lg-start">
                  <p className="mb-0">Phone Number </p>
                  <p>{phoneNumber}</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="profile-action d-flex justify-content-center">
                  <div
                    className="col-2 text-center text-lg-start"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowModalProfile(true)}
                  >
                    <RiEdit2Fill />
                  </div>
                  <div className="col-2 text-center text-lg-end">
                    <RiDeleteBin5Line />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h3 className="text-jumbotron mb-0 mt-4 fw-bold">My Event List</h3>
            <div className="list-event mt-4">
              <div className="row item-list">
                {eventList.map((event: InputEvents, i: number) => (
                  <CardMyEvent key={i} event={event} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Account;
