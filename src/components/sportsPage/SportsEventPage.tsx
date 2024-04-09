import { useEffect, useState } from "react";
import { SportsEvent } from "./Data.const";
import { fetchSportsEvent } from "../../services/EventService";
import EventList from "./EventList/EventList";
import Styles from "./SportsEventPage.module.scss";
import { doesEventOverlapWithAny } from "./SportsEventPage.util";

const SportsEventPage = () => {
  const [events, setEvents] = useState<SportsEvent[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<SportsEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchSportsEvent(
      (data) => {
        setEvents(data);
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setLoading(false);
      }
    );
  }, []);

  const onSelect = (id: number) => {
    if (selectedEvents.length >= 3) {
      alert("Already enrolled in max number of events");
      return;
    }
    const modifiedList = events.filter((event) => event.id != id);
    const selectedEvent = events.find((event) => event.id === id);
    if (selectedEvent) {
      setSelectedEvents([...selectedEvents, selectedEvent]);
    }
    setEvents(modifiedList);
  };

  const onRemove = (id: number) => {
    const removedEvent = selectedEvents.find((event) => event.id === id);
    const modifiedList = selectedEvents.filter((event) => event.id != id);
    if (removedEvent) {
      setEvents([...events, removedEvent]);
    }
    setSelectedEvents(modifiedList);
  };

  const getSportsEventList = () => {
    return events.map((event) => {
      return (
        <EventList
          event={event}
          onActionHandler={onSelect}
          isSelected={false}
          isGrayed={doesEventOverlapWithAny(event, selectedEvents)}
        />
      );
    });
  };

  const getSelectedSportsEventsList = () => {
    return selectedEvents.map((event) => {
      return (
        <EventList event={event} onActionHandler={onRemove} isSelected={true} />
      );
    });
  };

  const getListContainer = () => {
    return loading ? (
      <div className={Styles.loadingContainer}>...Loading</div>
    ) : (
      <div className={Styles.listContainer}>{getSportsEventList()}</div>
    );
  };

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.listParentContainer}>
        <div className={Styles.header}>All Events</div>
        {getListContainer()}
      </div>
      <div className={Styles.listParentContainer}>
        <div className={Styles.header}>Selected Events</div>
        <div className={Styles.listContainer}>
          {getSelectedSportsEventsList()}
        </div>
      </div>
    </div>
  );
};

export default SportsEventPage;
