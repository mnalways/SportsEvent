import { SportsEvent, mockData } from "../components/sportsPage/Data.const";

export const getData = (): Promise<SportsEvent[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(mockData);
        }, 0);
    } )
}

export const fetchSportsEvent = async (onSuccess: React.Dispatch<React.SetStateAction<SportsEvent[]>>, onFailure: (err: string) => void) => {
    try {
        const data = await getData();
        onSuccess(data);
    } catch (err) {
        onFailure(`Error in fetching Data, see error details ${err}`);        
    }

}

