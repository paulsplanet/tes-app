import logo from './logo.svg';
import './App.css';


function Header() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          111 Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>hello</h1>
      </header>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
