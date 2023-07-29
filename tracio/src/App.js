
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Layout from './Components/Layout/Layout';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
