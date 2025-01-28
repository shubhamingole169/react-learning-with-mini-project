import style from "./Netflix.module.css";
export const SeriesCard = ( {data} ) =>{
    // console.log("data:",data);
    const {id, name, img_url, rating, description, genre, cast, watch_url} = data;

    const btn_style = {
        padding: "1.2rem 2.4rem",
        border:"none",
        fontSize:"1.6",
        backgroundColor:`${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color:"var( --btn-color)",
        fontWeight:"bold",
        cursor:"pointer",
    }
    const ratingClass = rating >= 8.5 ? style.super_hit : style.average;
    return(
        <>
        <li className={style.card}>
            <div>
                <img src={img_url} alt={id} height="40%  " width="40%" />
            </div>
            <div className={style["card-content"]}>
            <h2>Name:{name}</h2>
            <h3>Rating:
                <span
                className={`${style.rating} ${ratingClass}`}
                >{rating}
                </span> </h3>
            <p>Summary: {description}</p>
            <p>genre: {genre} </p>
            <p>Cast: {cast} </p>
            <a href={watch_url}>
                <button
                style={btn_style}
                >
                Watch Now
                </button>
            </a>
            </div>
        </li>
        </>
    )
}