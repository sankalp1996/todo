import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Main/>
    </div>
    </Provider>
  );
}

export default App;
