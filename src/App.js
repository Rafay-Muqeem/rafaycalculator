import Main from './components/Main';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <h1>CALCULATOR</h1>
        <Main />
      </div>
    </Provider>
  );
}

export default App;
