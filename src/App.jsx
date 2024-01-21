import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
import Temp from "./../temp";

import AssignMeetings from "./Components/pages/AssignMeetings";
import AddVendor from "./Components/pages/AddVendor";
import AddEmployees from "./Components/pages/AddEmployees";
import AddCatalog from "./Components/pages/AddCatalog";
import AppointmentBooking from "./Components/Pages/AppointmentBooking";
import AppointmentStatus from "./Components/Pages/AppointmentStatus";
import ReservationBooking from "./Components/Pages/ReservationBooking";
import ReservationPayment from "./Components/Pages/ReservationPayment";
import Dashboard from "./Components/pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Temp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            path="/dashboard/assign-meetings"
            element={<AssignMeetings />}
          />
          <Route path="/dashboard/add-vendor" element={<AddVendor />} />
          <Route path="/dashboard/add-employee" element={<AddEmployees />} />
          <Route path="/dashboard/add-catalog" element={<AddCatalog />} />
          <Route
            path="/dashboard/appointment-booking"
            element={<AppointmentBooking />}
          />
          <Route
            path="/dashboard/appointment-status"
            element={<AppointmentStatus />}
          />
          <Route
            path="/dashboard/reservation-booking"
            element={<ReservationBooking />}
          />
          <Route
            path="/dashboard/reservation-payment"
            element={<ReservationPayment />}
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
