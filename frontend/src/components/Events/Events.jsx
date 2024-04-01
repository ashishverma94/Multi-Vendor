import { useEffect } from "react";
import styles from "../../styles/style";
import EventCard from "./EventCard.jsx";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader.jsx";

const Events = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Popular Events</h1>
        </div>
        <div className="w-full grid">
          {isLoading ? (
            <Loader />
          ) : (
            <EventCard data={allEvents && allEvents[0]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
