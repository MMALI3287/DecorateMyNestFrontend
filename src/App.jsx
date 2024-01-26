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
import ReservationStatus from "./Components/Pages/ReservationStatus";
import ReservationPayment from "./Components/Pages/ReservationPayment";
import ProjectReview from "./Components/Pages/ProjectReview";
import ProjectStatus from "./Components/Pages/ProjectStatus";
import Message from "./Components/Pages/Message";
import InventoryTracking from "./Components/Pages/InventoryTracking";
import PaySalary from "./Components/Pages/PaySalary";
import ConfirmReservation from "./Components/Pages/ConfirmReservation";
import ConfirmInstallment from "./Components/Pages/ConfirmInstallment";
import ProjectProgress from "./Components/Pages/ProjectProgress";
import EditCatalog from "./Components/Pages/EditCatalog";
import OrderItems from "./Components/Pages/OrderItems";
import NewOrder from "./Components/Pages/NewOrder";
import PaymentStatus from "./Components/Pages/PaymentStatus";
import InstallmentPayment from "./Components/Pages/InstallmentPayment";

// import ReservationStatus from "./Components/Pages/ReservationStatus";
import Dashboard from "./Components/pages/Dashboard";
import PopUp from "./components/pages/PopUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/popUp" element={<PopUp />} />
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
          <Route
            path="/dashboard/project-review"
            element={<ProjectReview />}
          />
          <Route
            path="/dashboard/project-status"
            element={<ProjectStatus />}
          />
          <Route
            path="/dashboard/project-in-progress/dashboard/message"
            element={<Message />}
          />
          <Route
            path="/dashboard/reservation-status"
            element={<ReservationStatus />}
          />
          <Route
            path="/dashboard/inventory-tracking"
            element={<InventoryTracking />}
          />
          <Route
            path="/dashboard/pay-salary"
            element={<PaySalary />}
          />
          <Route
            path="/dashboard/confirm-reservation"
            element={<ConfirmReservation />}
          />
          <Route
            path="/dashboard/confirm-installment"
            element={<ConfirmInstallment />}
          />
          <Route
            path="/dashboard/message"
            element={<ProjectProgress />}
          />
          <Route
            path="/dashboard/edit-catalog"
            element={<EditCatalog />}
          />
          <Route
            path="/dashboard/view-order-items"
            element={<OrderItems />}
          />
          <Route
            path="/dashboard/new-order"
            element={<NewOrder />}
          />
          <Route
            path="/dashboard/payment-status"
            element={<PaymentStatus />}
          />
          <Route
            path="/dashboard/installment-payment"
            element={<InstallmentPayment />}
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
