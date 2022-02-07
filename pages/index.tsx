import type { NextPage } from "next";
import { useEffect, useState } from "react";
import CardEvent from "../components/Card/CardEvent";
import Layout from "../components/Layout/Layout";
import { ButtonCategory } from "../components/UI/Button/ButtonCategory";
import styles from "../styles/homepage.module.css";
import client from "../utils/apollo-client";
import { QUERY_ALL_EVENTS, QUERY_GET_CATEGORY } from "../utils/queries";
import { EventData } from "../types/type";
import SearchFilter from "../components/Search/SearchFilter";

const Home: NextPage = ({ events, category }: any) => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    setEventData(events);
  }, [setEventData, events]);

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
                  {/* Looping Category Button and logic get category */}
                  <ButtonCategory>All</ButtonCategory>
                  <ButtonCategory>Art</ButtonCategory>
                  <ButtonCategory>Sport</ButtonCategory>
                  <ButtonCategory>Tech</ButtonCategory>
                  <ButtonCategory>Edu</ButtonCategory>
                  <ButtonCategory>Music</ButtonCategory>
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
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: QUERY_ALL_EVENTS,
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
