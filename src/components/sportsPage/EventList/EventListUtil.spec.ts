import { getTime } from "./EventList.util";


describe('getTime', () => {
  it('should return formatted time range for valid start and end time', () => {
    const startTime = '2022-12-17 13:00:00';
    const endTime = '2022-12-17 14:30:00';
    const expected = '1:00 PM - 2:30 PM';
    expect(getTime(startTime, endTime)).toBe(expected);
  });

  it('should return formatted time range with AM/PM for morning and afternoon times', () => {
    const startTime = '2022-12-17 09:30:00';
    const endTime = '2022-12-17 12:45:00';
    const expected = '9:30 AM - 12:45 PM';
    expect(getTime(startTime, endTime)).toBe(expected);
  });

  it('should return formatted time range with 12-hour format for midnight and noon times', () => {
    const startTime = '2022-12-17 00:00:00';
    const endTime = '2022-12-17 12:00:00';
    const expected = '12:00 AM - 12:00 PM';
    expect(getTime(startTime, endTime)).toBe(expected);
  });

  it('should return formatted time range with leading zero for single-digit minutes', () => {
    const startTime = '2022-12-17 10:05:00';
    const endTime = '2022-12-17 10:15:00';
    const expected = '10:05 AM - 10:15 AM';
    expect(getTime(startTime, endTime)).toBe(expected);
  });

  it('should handle edge case where start and end time are the same', () => {
    const startTime = '2022-12-17 14:30:00';
    const endTime = '2022-12-17 14:30:00';
    const expected = '2:30 PM - 2:30 PM';
    expect(getTime(startTime, endTime)).toBe(expected);
  });
});
