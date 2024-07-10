import "./Head.css";

function Head(props){
    const Name = props.Gname;
    return(<h1 className="head">{Name}</h1>)
}

export default Head;