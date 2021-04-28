import './App.css';
import Tabs from './Components/Tabs';
import News from './Components/News';

function App() {
  return (
    <div className="App">
      <Tabs tabs={["Google News", "Google Trends", "Hacker News"]}/>
      <News />
    </div>
  );
}

export default App;
