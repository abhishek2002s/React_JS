import "./App.css";
import Item from "./component/Item";
import Head from "./component/Head";
import ShowDate from "./component/ShowDate";
import Card from "./component/Card";
function App() {

  const response = [
    {
      userName:"Abhishek",
      userDate:"28",
      userMonth:"02",
      userYear:"2002",
      userGreet:"Happy Birthday To You Abhishek"
    },
    {
      userName:"Akshay",
      userDate:"18",
      userMonth:"05",
      userYear:"2003",
       userGreet:"Happy Birthday To You Akshay"
    },
    {
      userName:"Abhay",
      userDate:"30",
      userMonth:"3",
      userYear:"2005",
       userGreet:"Happy Birthday To You Abhay"
    }
  ]


  return (
    <div>

<Card>
  
  
<Item name={response[0].userName}>
      soni
    </Item>
    <ShowDate day={response[0].userDate} month={response[0].userMonth} year={response[0].userYear}></ShowDate>
    <Head  Gname = {response[0].userGreet}></Head>

    <Item name={response[1].userName}>
      Teotia
    </Item>
    <ShowDate day={response[1].userDate} month={response[1].userMonth} year={response[1].userYear}></ShowDate>
    <Head  Gname = {response[1].userGreet}></Head>

    <Item name={response[2].userName}>
      Thakur
    </Item>
    <ShowDate day={response[2].userDate} month={response[2].userMonth} year={response[2].userYear}></ShowDate>
    <Head  Gname = {response[2].userGreet}></Head>

   <div className="App"><h1>hello Users Enjoy Your Day Its Your Birthday</h1></div>
  </Card>
 
    </div>
  );
}

export default App;

