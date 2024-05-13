import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Header } from './components';
import { Footer } from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
