import './static/styles/App.css';
import { Main } from "./main";
import { WebNav } from './components/WebNav';

function App(props) {

  return (

    <div className="App">
      <WebNav />
      <Main />

    </div>
  );
}

export default App;
