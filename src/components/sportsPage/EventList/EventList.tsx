import { SportsEvent } from "../Data.const";
import Styles from "./EventList.module.scss";
import { getTime } from "./EventList.util";

interface EventListProps {
  event: SportsEvent;
  onActionHandler: (id: number) => void;
  isSelected?: boolean;
  isGrayed?: boolean;
}

const getDetails = (event: SportsEvent) => {
  return (
    <>
      <div>
        <b>{event.event_name}</b>
      </div>
      <div>{`(${event.event_category})`}</div>
      <div>{getTime(event.start_time, event.end_time)}</div>
    </>
  );
};

const EventList = ({
  event,
  onActionHandler,
  isSelected = false,
  isGrayed = false,
}: EventListProps) => {
  return (
    <div className={`${Styles.eventBox} ${isGrayed ? Styles.grayedColor : ""}`}>
      <div className={Styles.leftSection}>{event?.event_category[0]}</div>
      <div className={Styles.rightSection}>
        <div className={Styles.details}>{getDetails(event)}</div>
        <div className={Styles.buttonContainer}>
          <button
            style={{
              background: isSelected
                ? "rgb(255, 232, 232)"
                : "rgb(236, 255, 217)",
            }}
            className={`${Styles.actionButton} ${
              isSelected ? Styles.redColorButton : Styles.greenColorButton
            }`}
            onClick={() => onActionHandler(event.id)}
            disabled={isGrayed}
          >
            {isSelected ? "REMOVE" : "SELECT"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventList;
