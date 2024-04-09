import { SportsEvent } from "./Data.const";

export function doEventsOverlap(event1: SportsEvent, event2: SportsEvent): boolean {
    const startTime1 = new Date(event1.start_time);
    const endTime1 = new Date(event1.end_time);
    const startTime2 = new Date(event2.start_time);
    const endTime2 = new Date(event2.end_time);

    return startTime1 < endTime2 && startTime2 < endTime1;
}


export function doesEventOverlapWithAny(event: SportsEvent, events: SportsEvent[]): boolean {
    for (const e of events) {
        if (doEventsOverlap(event, e)) {
            return true;
        }
    }
    return false;
}