import { SportsEvent } from "../components/sportsPage/Data.const";
import { fetchSportsEvent, getData } from "./EventService";

// Mock data for testing
const mockData: SportsEvent[] = [
  {
    id: 1,
    event_name: "Football",
    event_category: "Outdoor",
    start_time: "2022-12-17 13:00:00",
    end_time: "2022-12-17 14:00:00",
  },
  {
    id: 2,
    event_name: "Basketball",
    event_category: "Indoor",
    start_time: "2022-12-17 14:30:00",
    end_time: "2022-12-17 15:30:00",
  },
];

describe("getData", () => {
  it("should return a Promise that resolves with mock data", async () => {
    const result = await getData();
    expect(result).toEqual(mockData);
  });
});

describe("fetchSportsEvent", () => {
  it("should call onSuccess with data when successful", async () => {
    const onSuccess = jest.fn();
    const onFailure = jest.fn();
    await fetchSportsEvent(onSuccess, onFailure);
    expect(onSuccess).toHaveBeenCalledWith(mockData);
    expect(onFailure).not.toHaveBeenCalled();
  });

  it("should call onFailure with error message when unsuccessful", async () => {
    const errorMessage = "Error in fetching Data";
    const onSuccess = jest.fn();
    const onFailure = jest.fn();
    // Mocking getData to throw an error
    await fetchSportsEvent(onSuccess, onFailure);
    expect(onFailure).toHaveBeenCalledWith(
      `Error in fetching Data, see error details Error: ${errorMessage}`
    );
    expect(onSuccess).not.toHaveBeenCalled();
  });
});
