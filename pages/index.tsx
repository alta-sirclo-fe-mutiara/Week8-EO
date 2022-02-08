import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import CardEvent from "../components/Card/CardEvent";
import Layout from "../components/Layout/Layout";
import { ButtonCategory } from "../components/UI/Button/ButtonCategory";
import styles from "../styles/homepage.module.css";
import client from "../utils/apollo-client";
import {
  QUERY_ALL_EVENTS,
  QUERY_ALL_EVENTS_LIMIT,
  QUERY_GET_CATEGORY,
} from "../utils/queries";
import { EventData } from "../types/type";
import SearchFilter from "../components/Search/SearchFilter";
import { useLazyQuery, useQuery } from "@apollo/client";

const Home: NextPage = ({ events, category }: any) => {
  const [eventData, setEventData] = useState([]);
  const [summaryEvent, setSummeryEvent] = useState(0);
  const [getEventByOffset] = useLazyQuery(QUERY_ALL_EVENTS_LIMIT);
  const { data } = useQuery(QUERY_ALL_EVENTS);

  useEffect(() => {
    setEventData(events);
    if (data) {
      setSummeryEvent(data.events.length);
    }
  }, [setEventData, events, setSummeryEvent, data]);

  const handleAllEvents = () => {
    setEventData(events);
  };

  const handlePagination = (id: number) => {
    getEventByOffset({
      variables: { offset: id * 12 },
    })
      .then((data) => setEventData(data.data.events))
      .catch(() => alert("error"));
  };
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(summaryEvent / 12); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #f9f1f1 0%, rgba(252, 252, 252, 0) 100%)",
      }}
    >
      <Layout pageTitle="Home">
        <main>
          <div className="jumbotron row">
            <div className="col-lg-6 mx-auto">
              <h3 className="text-jumbotron text-center fw-bold">
                Find your exciting events and activities at Lazy Events!
              </h3>
            </div>
            <div className="container">
              <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-lg-6  mt-3">
                  <div className="search">
                    <SearchFilter setEventData={setEventData} />
                  </div>
                </div>
              </div>
              <div className="container mt-5">
                <div className={`row mx-auto ${styles.category}`}>
                  <button
                    className="btn btn-none col-4 col-lg-2"
                    onClick={handleAllEvents}
                  >
                    All
                  </button>
                  {category.map((category: any) => (
                    <ButtonCategory
                      key={category.id}
                      id={category.id}
                      setEventData={setEventData}
                    >
                      {category.category}
                    </ButtonCategory>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section className="py-4 my-5">
            <div className="container">
              <div className="row">
                {eventData.map((event: EventData, i: number) => (
                  <CardEvent
                    key={i}
                    id={event.id}
                    name={event.name}
                    photo={event.photo}
                    datetime={event.datetime}
                    promotor={event.promotor}
                    category_id={event.category_id}
                  />
                ))}
              </div>
            </div>
            <nav>
              <ul className="pagination ms-2 pagination-lg">
                {pageNumbers.map((event: number, i: number) => (
                  <li
                    className="page-link"
                    style={{
                      cursor: "pointer",
                    }}
                    key={i}
                    onClick={() => handlePagination(i)}
                  >
                    {event}
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: QUERY_ALL_EVENTS_LIMIT,
    variables: { offset: 0 },
  });

  const { data: dataCategory } = await client.query({
    query: QUERY_GET_CATEGORY,
  });
  return {
    props: {
      events: data.events,
      category: dataCategory.categories,
    },
  };
};
