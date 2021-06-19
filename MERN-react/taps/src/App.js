import './App.css';
import {useState} from 'react';
import Tabs from './components/Tabs';
import Display from './components/Display';

function App() {
  const [tabs,setTabs] = useState([
    {name:"Tab 1",content:"Tab 1 content", active:false},
    {name:"Tab 2",content:"Tab 2 content", active:false},
    {name:"Tab 3",content:"Tab 3 content", active:false}])
    const [tabSelected, setTabSelected] = useState({})
  return (
    <div className="App">
      <Tabs tabs={tabs} setTabSelected={setTabSelected} tabSelected={tabSelected} setTabs={setTabs}/>
      <Display tabs={tabs} tabSelected={tabSelected}/>
    </div>
  );
}

export default App;
