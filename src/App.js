import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './products/List';
import { Route, Routes } from 'react-router-dom';
import { Index as Header } from './header/Index';
import { Index as Footer } from './footer/Index';
import View from './products/View';

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
