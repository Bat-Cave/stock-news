import './App.css';
import Tabs from './Components/Tabs';
import News from './Components/News';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <Tabs tabs={["Google News", "Google Trends", "Hacker News"]}/>
      <News get={props.reducer.activeTab}/>
    </div>
  );
}

function mapStateToProps(state) {
    return state;
  }
  
export default connect(mapStateToProps, null)(App);
