import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import SignalTest from './components/signalTest';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Main/>
     <SignalTest/>
    </div>
    </Provider>
  );
}

export default App;
