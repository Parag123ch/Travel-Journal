import logo from './logo.svg';
import './App.css';
import Data from './Components/Data';
import Card from './Components/Card';
import Header from './Components/Header';

function App() {

  const cards = Data.map((item) => {
    return <Card location={item.location} title={item.title} link={item.link} start_date={item.start_date} end_date={item.end_date} image_url={item.image_url} last={item.last} description={item.description}></Card>
  }) 

  return (
    <div className="App">
      <Header></Header>
      {cards}
    </div>
  );
}

export default App;
