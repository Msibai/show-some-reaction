import {useEffect, useState} from "react";

export default function SearchByName(props) {
    const [query, setQuery] = useState(null);
    const movieList = Object.values(props)[0];

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        if (query === "") {
            props.setFilteredData(null);
        } else if (query) {
            props.setFilteredData(movieList.filter(movie => {
                if (movie.name.toLowerCase().includes(query.toLowerCase())) {
                    return movie
                }
            }));
        }
    }, [query])

    return (
        <>
            <div className="searchByName">
                <div className="container">
                    <label>Search a movie by name</label>
                    <div className="innerContainer">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-search">
                                <circle cx="11" cy="11" r="8"/>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                        </div>
                        <div className="inputContainer">
                            <input type="search" placeholder="Find your favourite movie..." onChange={handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
