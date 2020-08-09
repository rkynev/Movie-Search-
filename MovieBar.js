import React from "react";

export default function MovieBar (props) {
    return(
        <form className="form" onSubmit={props.searchMovies}>
            <label className="label" htmlFor="query" >Movie Name  </label>
                <input className="input" type="text" name="query" 
                    placeholder="type movie name e.g. Star Wars"
                    value={props.query}  onChange={(e)=> props.setQuery(e.target.value)}
                    required/>
                <button className="button" type="submit">Submit</button>
        </form>
    )
}