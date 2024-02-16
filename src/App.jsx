import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
// import Temp from "./../temp";

import AssignMeetings from "./components/pages/AssignMeetings";
import AddVendor from "./components/pages/AddVendor";
import AddEmployees from "./components/pages/AddEmployees";
import AddCatalog from "./components/pages/AddCatalog";
import AppointmentBooking from "./components/pages/AppointmentBooking";
import AppointmentStatus from "./components/pages/AppointmentStatus";
import ReservationBooking from "./components/pages/ReservationBooking";
import ReservationStatus from "./components/pages/ReservationStatus";
import PaymentHistory from "./components/pages/PaymentHistory";
import ProjectReview from "./components/pages/ProjectReview";
import ProjectStatus from "./components/pages/ProjectStatus";
import Message from "./Components/Pages/Message";
import InventoryTracking from "./Components/Pages/InventoryTracking";
import PaySalary from "./components/pages/PaySalary";
import ConfirmReservation from "./components/pages/ConfirmReservation";
import ConfirmInstallment from "./components/pages/ConfirmInstallment";
import ProjectProgress from "./Components/Pages/ProjectProgress";
import EditCatalog from "./components/pages/EditCatalog";
import OrderItems from "./components/pages/OrderItems";
import NewOrder from "./Components/Pages/NewOrder";
import PaymentStatus from "./Components/Pages/PaymentStatus";
import InstallmentPayment from "./components/pages/InstallmentPayment";
import OrderHistory from "./components/pages/OrderHistory";
import OngoingProjects from "./Components/Pages/OngoingProjects";
import MeetingSchedule from "./components/pages/MeetingSchedule";

// import ReservationStatus from "./Components/Pages/ReservationStatus";
import Dashboard from "./components/pages/Dashboard";
import PopUp from "./components/pages/PopUp";
import ProfilePage from "./components/pages/ProfilePage";
import AboutPage from "./components/pages/Home/AboutPage";
import About from "./components/pages/Home/About";
import Portfolio from "./components/pages/Home/Portfolio";
import Services from "./components/pages/Home/Services";
import ProjectStatusAdmin from "./components/pages/ProjectStatusAdmin";
import ProjectReviewAdmin from "./components/pages/ProjectReviewAdmin";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/popUp" element={<PopUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/test" element={<Temp />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />

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
            path="/dashboard/payment-history"
            element={<PaymentHistory />}
          />
          <Route path="/dashboard/project-review" element={<ProjectReview />} />
          <Route path="/dashboard/project-status" element={<ProjectStatus />} />
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
          <Route path="/dashboard/pay-salary" element={<PaySalary />} />
          <Route
            path="/dashboard/confirm-reservation"
            element={<ConfirmReservation />}
          />
          <Route
            path="/dashboard/confirm-installment"
            element={<ConfirmInstallment />}
          />
          <Route
            path="/dashboard/project-status-admin"
            element={<ProjectStatusAdmin />}
          />
          <Route path="/dashboard/order-items" element={<OrderItems />} />
          <Route path="/dashboard/message" element={<ProjectProgress />} />
          <Route path="/dashboard/edit-catalog" element={<EditCatalog />} />
          <Route path="/dashboard/view-order-items" element={<OrderItems />} />
          <Route path="/dashboard/new-order" element={<NewOrder />} />
          <Route path="/dashboard/payment-status" element={<PaymentStatus />} />
          <Route
            path="/dashboard/project-review-admin"
            element={<ProjectReviewAdmin />}
          />
          <Route
            path="/dashboard/installment-payment"
            element={<InstallmentPayment />}
          />
          <Route path="/dashboard/order-history" element={<OrderHistory />} />
          <Route
            path="/dashboard/ongoing-project"
            element={<OngoingProjects />}
          />
          <Route
            path="/dashboard/meeting-schedule"
            element={<MeetingSchedule />}
          />

          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
