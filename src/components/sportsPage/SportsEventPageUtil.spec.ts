import { SportsEvent } from "./Data.const";
import { doEventsOverlap, doesEventOverlapWithAny } from "./SportsEventPage.util";

// Shared setup
let events: SportsEvent[];

beforeEach(() => {
  // Initialize test data
  events = [
    {
      id: 1,
      event_name: 'Event 1',
      event_category: 'Category A',
      start_time: '2022-01-01T10:00:00',
      end_time: '2022-01-01T12:00:00',
    },
    {
      id: 2,
      event_name: 'Event 2',
      event_category: 'Category B',
      start_time: '2022-01-01T11:00:00',
      end_time: '2022-01-01T13:00:00',
    },
  ];
});

describe('doEventsOverlap', () => {
  it('should return true if events overlap', () => {
    const event1: SportsEvent = events[0];
    const event2: SportsEvent = events[1];
    expect(doEventsOverlap(event1, event2)).toBe(true);
  });

  it('should return false if events do not overlap', () => {
    const event1: SportsEvent = events[0];
    const event2: SportsEvent = {
      id: 3,
      event_name: 'Event 3',
      event_category: 'Category C',
      start_time: '2022-01-01T13:00:00',
      end_time: '2022-01-01T15:00:00',
    };
    expect(doEventsOverlap(event1, event2)).toBe(false);
  });
});

describe('doesEventOverlapWithAny', () => {
  it('should return true if event overlaps with any event in the list', () => {
    const event: SportsEvent = events[0];
    expect(doesEventOverlapWithAny(event, events)).toBe(true);
  });

  it('should return false if event does not overlap with any event in the list', () => {
    const event: SportsEvent = {
      id: 3,
      event_name: 'Event 3',
      event_category: 'Category C',
      start_time: '2022-01-01T13:00:00',
      end_time: '2022-01-01T15:00:00',
    };
    expect(doesEventOverlapWithAny(event, events)).toBe(false);
  });
});
