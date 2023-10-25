import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";

import ProfilePage from "./pages/ProfilePage.jsx";

import PlacePage from "./pages/PlacePage";

import ScrollToTop from './ScrollToTop';
import MainTourPage from './pages/MainTourPage';
import ResultSearch from './pages/resultSearch';
import GuideMangant from './pages/UpdateTour';
import UpdateTour from './pages/UpdateTour';
import ManagantTour from './pages/ManagantTour';

function App() {
  return (
 
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} /> 
          <Route path="/place" element={<PlacePage />} />
          <Route path="/maintour" element={<MainTourPage />} />
          <Route path="/maintour" element={<MainTourPage />} />
          <Route path="/resultsearch" element={<ResultSearch />} />
          <Route path="/updatetour" element={<UpdateTour />} />
          <Route path="/managanttour" element={<ManagantTour />} />
        </Route>
      </Routes>
   
  )
}

export default App
