import { NextPage } from "next";
import Layout from "../../components/Layout/Layout";
import styles from "../../styles/detail.module.css";
import CommentList from "../../components/UI/Comment/CommentList";
import CommentBar from "../../components/UI/Comment/CommentBar";
import client from "../../utils/apollo-client";
import {
  QUERY_GET_BY_ID,
  QUERY_GET_PARTICIPANTS,
  MUTATION_JOIN_EVENT,
} from "../../utils/queries";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Attend from "../../components/UI/Attend/Attend";
import { useMutation, useLazyQuery } from "@apollo/client";
import { breakDate, tokenLocal } from "../../utils/formatDate";
import jwtDecode from "jwt-decode";
import { TokenProps } from "../../types/type";

const DetailEvent: NextPage = ({ event }: any) => {
  const { state } = useContext(AuthContext);
  const { token, isLogged } = state;
  const { id, name, datetime, description, location, photo, promotor } = event;
  const { dateEvents, ddEvents, mmEvents, timeEvent } = breakDate(datetime);
  const [dataParticipans, setDataParticipans] = useState([]);
  // const { tokenId } = tokenLocal("users");
  const [joinEvent] = useMutation(MUTATION_JOIN_EVENT);
  const [getJoinEvent, { loading, data: newJoin, refetch }] = useLazyQuery(
    QUERY_GET_PARTICIPANTS
  );

  // console.log(tokenId);
  const isJoin =
    dataParticipans.filter((user: any) => user.id === 1 || 0).length >= 1
      ? true
      : false;

  useEffect(() => {
    getJoinEvent({
      variables: { id },
    }).then((data) => {
      setDataParticipans(data.data.participants);
    });
  }, [getJoinEvent, id, setDataParticipans, newJoin, loading]);

  const peopleAttend = dataParticipans.length;
  console.log(isJoin);

  const handleJoinEvent = () => {
    if (token) {
      joinEvent({
        variables: {
          eventid: id,
        },
        context: {
          headers: {
            Authorization: `Bearer ` + token,
          },
        },
      }).finally(() => refetch());
    }
  };

  return (
    <Layout pageTitle="Detail Event">
      <div className="jumbotron row">
        <div className="col-md-8">
          <img
            src={photo}
            alt="Picture of our Logo"
            className="rounded img-fluid w-100 mb-3"
          />
        </div>
        <div className="col-xs-12 col-md-4 d-flex flex-column gap-4">
          <div>
            <h3 className="text">{ddEvents}</h3>
            <h3 className="text">{mmEvents}</h3>
            <h3 className="text-black">{name}</h3>
            <h6 className="text-secondary">Hosted by {promotor}</h6>
          </div>
          <div className="d-flex flex-column gap-2">
            <h6>Attends ({peopleAttend})</h6>
            <div className="row">
              <div className="col-2 d-flex flex-row  ">
                {dataParticipans.map((image: any, i: number) => (
                  <Attend key={i} image={null} />
                ))}
              </div>
            </div>

            {isLogged && (
              <button
                className={`btn ${
                  isJoin ? "btn-secondary" : "btn-green"
                }  text-white w-100`}
                onClick={handleJoinEvent}
                disabled={isJoin}
              >
                Join
              </button>
            )}
          </div>
        </div>
        <div className="jumbotron">
          <div className="row d-flex flex-column-reverse flex-md-row my-1">
            <div className="col-md-8 my-3">
              <h2>About</h2>
              <p className={styles.palagraf}>{description}</p>
            </div>
            <div className="col-xs-12 col-md-4 my-3">
              <div>
                <h6 className="fw-bold">Date and time</h6>
                <h6>{dateEvents}</h6>
                <h6>{timeEvent}</h6>
              </div>
              <div>
                <h6 className="fw-bold">Location</h6>
                <h6>{location}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column gap-4">
        <div className="col-10 col-lg-8">
          <h3>Comments</h3>
          <CommentBar />
          <CommentList />
          <CommentList />
          <CommentList />
          <CommentList />
        </div>
      </div>
    </Layout>
  );
};

export default DetailEvent;

export const getServerSideProps = async ({ params }: any) => {
  const { data } = await client.query({
    query: QUERY_GET_BY_ID,
    variables: { id: params.id },
  });

  return {
    props: {
      event: data.eventsByID,
    },
  };
};
