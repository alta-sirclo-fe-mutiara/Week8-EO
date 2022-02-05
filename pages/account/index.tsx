import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import CardMyEvent from "../../components/Card/CardMyEvent";
import styles from "../../styles/account.module.css";
import { FaUserAlt } from "react-icons/fa";
import { RiEdit2Fill, RiDeleteBin5Line } from "react-icons/ri";
import ModalEditProfile from "../../components/Modal/ModalEditProfile";

type Props = {
  onClick: any;
};

const Account: React.FC<Props> = () => {
  const [showModalProfile, setShowModalProfile] = useState(false);

  return (
    <>
      <Layout pageTitle="Profile">
        <ModalEditProfile
          id={1}
          showProf={showModalProfile}
          onSetProf={setShowModalProfile}
        />
        <div className="flex-column ">
          <div className="col-12 justify-content-center card shadow border-0 px-0 my-4">
            <img
              className={styles.img}
              src="/banner-account.png"
              alt="banner-profile"
            />
            <div className="row justify-content-center align-items-center py-2 px-3">
              <div className="col-lg-2 col-12 col-md-5 mt-3 text-center">
                <div
                  className={`${styles["avatar"]} bg-dark p-4 mb-3 fs-1 rounded-circle text-white`}
                >
                  <FaUserAlt />
                </div>
              </div>
              <div className="col-lg-3 flex-column">
                <div className="profile-item text-center text-lg-start">
                  <h5 className="mb-0 fw-bolder">Username</h5>
                  <p>TalalaLili</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="profile-item text-center text-lg-start">
                  <p className="mb-0">Phone Number </p>
                  <p>38 972 588-42-36</p>
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
                <CardMyEvent />
                <CardMyEvent />
                <CardMyEvent />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Account;
