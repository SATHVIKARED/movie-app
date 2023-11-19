import React from "react";

const MovieCard = ({movie : {imbdb,Year,Poster,Title,type}}) => {
    return (
        <div className="movie" key = {imbdb}>
            <div>
                {Year}
            </div>
            <div>
                <img  src = {Poster !== "NA" ? Poster : "https://via.placeholder.com/400"} alt = {Title}/>
            </div>
            <div>
                <span>{type}</span>
                <h3>{Title}</h3>
            </div>


        </div>
    )
}
export default MovieCard
