import {useRef} from "react";

export default function SearchByDate(props) {
    const showList = Object.values(props.showData);
    const fromRef = useRef(null);
    const toRef = useRef(null);

    const sortByDate = () => {
        props.setShowData(
            showList.sort((a, b) => new Date(a.date) - new Date(b.date))
        )
    }

    const getAllShow = () => {
        props.setFilteredData(null);
    }

    const getTodaysShow = () => {
        const today = new Date().toDateString();
        props.setFilteredData(
            showList.filter(show => {
                if (new Date(show.date).toDateString() === today) {
                    return show
                }
            }));

    }

    const getShowByDateRange = () => {
        const from = new Date(fromRef.current.value).valueOf();
        const to = new Date(toRef.current.value).valueOf();

        if (from && to) {
            props.setFilteredData(
                showList.filter(show => {
                    if (new Date(show.date).valueOf() >= from && new Date(show.date).valueOf() <= to) {
                        return show
                    }
                })
            );
        }
    }

    function handleReset(){
        fromRef.current.value = null;
        toRef.current.value = null;
        props.setFilteredData(null);
    }

    return (
        <div className="SearchByDate">
            <div className="container">
                <h3 className="date">Which date is best for you?</h3>
                <div className="innerContainer">
                    <button onClick={sortByDate}>Sort by date</button>
                    <button onClick={getTodaysShow}>Today's shows</button>
                    <button onClick={getAllShow}>All Show</button>
                </div>
                <div className="datePicker">
                    <label htmlFor="from">From</label>
                    <div className="inputContainer">
                        <input ref={fromRef} id="from" type="date" max='9999-12-31'/>
                    </div>
                    <label htmlFor="to">To</label>
                    <div className="inputContainer">
                        <input ref={toRef} id="to" type="date" max='9999-12-31'/>
                    </div>
                    <button onClick={getShowByDateRange}>Get shows</button>
                    <button onClick={handleReset}>Clear dates</button>

                </div>
            </div>
        </div>
    )
}