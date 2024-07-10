import "./ShowDate.css";

function ShowDate(props){
    const Day = props.day;
    const month = props.month;
    const year = props.year;
    return(
        <div className="Date">
            <span className="sp">{Day}</span>
            <span className="sp">{month}</span>
            <span className="sp">{year}</span>
        </div>
    );
}

export default ShowDate;