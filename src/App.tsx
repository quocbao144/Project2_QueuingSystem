import React from 'react';
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from './routes/Login/Login';
import Dashboard from './routes/Dashboard/Dashboard'
import ResetPass from './routes/ResetPass/ResetPass';
import MenuOutlet from './routeoutlets/MenuOutlet';
import Device from './routes/Device/Device';
import UserProfile from './routes/UserProfile/UserProfile';
import DeviceAdd from './routes/Device/routes/DeviceAdd/DeviceAdd';
import DeviceDetail from './routes/Device/routes/DeviceDetail/DeviceDetail';
import DeviceUpdate from './routes/Device/routes/DeviceUpdate/DeviceUpdate';
import DeviceOutlet from './routeoutlets/DeviceOutlet';
import ServiceOutlet from './routeoutlets/ServiceOutlet';
import Services from './routes/Services/Services';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Reset" element={<ResetPass />}></Route>
        <Route element={<MenuOutlet />}>
          <Route path="UserProfile" element={<UserProfile />}></Route>
          <Route path="Dashboard" element={<Dashboard />}></Route>
          <Route path="Device" element={<DeviceOutlet />}>
            <Route index element={<Device />}></Route>
            <Route path="DeviceAdd" element={<DeviceAdd />}></Route>
            <Route path="DeviceDetail/:ProductID" element={<DeviceDetail />}></Route>
            <Route path="DeviceUpdate/:ProductID" element={<DeviceUpdate />}></Route>
          </Route>

          <Route path="Service" element={<ServiceOutlet />}>
            <Route index element={<Services />}></Route>
          </Route>
        </Route>
      </Routes>
    </HashRouter>

  );
}

export default App;
