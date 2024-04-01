import Header from "../components/Layout/Header";
import EventCard from "../components/Events/EventCard";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  return (
    <div>
      <Header activeHeading={4} />
      {isLoading ? (
        <Loader />
      ) : (
        <EventCard data={allEvents && allEvents[0]} />
      )}
    </div>
  );
};

export default EventsPage;
