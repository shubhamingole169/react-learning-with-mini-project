
import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard"
export const NetflixSeries = () => {
    return (
        <>
            <ul className="grid grid-three--cols" >
                {seriesData.map((curElem) => {
                    return(
                    <SeriesCard key={curElem.id} data={curElem} />
                    
                    );
                })
                }
            </ul>
        </>
    )
}

