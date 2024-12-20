import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import OpenRoute from "./components/admin/auth/OpenRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/admin/auth/PrivateRoute";
import Layout from "./components/admin/pages/Layout";
import Dashboard from "./components/admin/pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import Partner from "./pages/Partner";
import AddService from "./components/admin/pages/AddService";
import GetAllService from "./components/admin/pages/GetAllService";
import About from "./components/admin/pages/About";
import Service from "./pages/Service";
import SingleService from "./pages/SingleService";
import InvestorHome from "./pages/investor/InvestorHome";
import InvestorAbout from "./pages/investor/InvestorAbout";
import InvestorServices from "./pages/investor/InvestorServices";
import InvestorContact from "./pages/investor/InvestorContact";
import Footer from "./components/comman/Footer";
import TraderAbout from "./pages/trader/TraderAbout";
import TraderContact from "./pages/trader/TraderContact";
import TraderHome from "./pages/trader/TraderHome";
import Faq from "./pages/Faq";
import Support from "./pages/Support";
import Learn from "./pages/Learn";
import SubNav from "./components/trader/comman/SubNav";
import Notification from "./components/core/home/Notification";
import ClientLogin from "./pages/ClientLogin";
import ProfileLayout from "./components/profile/ProfileLayout";
import Profile from "./pages/profile/Profile";
import CRM from "./components/admin/pages/CRM";
import UserDetails from "./components/admin/pages/UserDetails";
import StockTable from "./pages/Tradesmarket";
import TraderDatas from "./pages/TraderDatas";
import TraderSingleData from "./pages/TraderSingleData";
import InvestorCharter from "./pages/InvestorCharter";
import useSocket from "./socket io/useSocket";
import ChatsApp from "./pages/chats/MainChat";
import AdminChatsApp from "./components/admin/Adminchats/MainChat";
import AddQuery from "./components/admin/pages/AddQuery";
import GetQuery from "./components/admin/pages/GetQuery";
import Disclaimer from "./pages/Disclaimer";
import AddBlog from "./components/admin/pages/AddBlog";
import GetBlog from "./components/admin/pages/GetBlogs";
import Podcast from "./pages/Podcast";
import SinglePodcast from "./pages/SinglePodcast";
import InvestorSingleService from "./pages/investor/InvestorSingleService";
import { fetchMyProfile } from "./services/operations/auth";
import Subscription from "./pages/Subscription";
import SendMessage from "./pages/Test";
import Complain from "./components/trader/comman/Complain";
import SingleServiceAdmin from "./components/admin/pages/SingleService";
import Team from "./pages/Team";
import RefundPolicy from "./pages/RefundPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import SebiDisclosure from "./pages/SebiDisclosure";
import ComplaintEscalation from "./pages/ComplaintEscalation";
import Career from "./pages/Career";
import Strategic from "./pages/Strategic";
import ResourceHub from "./pages/ResourceHub";
import VerifyUser from "./components/admin/pages/VerifyUser";
import Articles from "./pages/Articles";
import CurrentMonthComplaints from "./components/ComplainTracker";
import CompaintTracker from "./components/admin/pages/CompaintTracker";
import Whatsapp from "./components/comman/Whatsapp";
import axios from "axios";
import AddComplaint from "./components/admin/pages/CompaintTracker";
import Prising from "./pages/Prising";

const App = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const visitAdd = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/visit`);
    } catch (error) {
      console.error("Failed to add visit record dashboard ", error);
    }
  };
  useEffect(() => {
    if (token) {
      dispatch(fetchMyProfile(token, navigate));
    }

    if (user?.role !== "Admin" && user?.role !== "SuperAdmin") {
      visitAdd();
    }
  }, [token]);
  useSocket();

  // useEffect(() => {
  //   setShowModal(true);
  // }, []);

  function PageTracker() {
    const location = useLocation();

    useEffect(() => {
      // Log the pageview with gtag
      window.gtag("config", "G-B0XMXZ31CE", {
        page_path: location.pathname,
      });
    }, [location]);

    return null;
  }

  function handleCloseModal() {
    console.log("Modal state before toggle:", showModal);
    setShowModal(false);
  }

  function handleModel() {
    setShowModal(!showModal); // Toggle modal visibility
    console.log("Modal state after toggle:", !showModal);
  }
  return (
    <div className="min-w-screen min-h-screen">
      <Notification />
      <PageTracker />

      {showModal && (
        <Complain onClose={handleCloseModal} showModal={showModal} />
      )}
      <Routes>
        <Route path="/" element={<Home setShowModal={handleModel} />} />
        <Route path="/complain" element={<CurrentMonthComplaints />} />

        <Route path="/partner" element={<Partner />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Partner />} />
        <Route path="/stocktable" element={<StockTable />} />
        <Route path="/service" element={<Service />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path=":name" element={<Disclaimer />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/support" element={<Support />} />
        <Route path="/team" element={<Team />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/investment-charter" element={<InvestorCharter />} />
        <Route path="/complaint-escalation" element={<ComplaintEscalation />} />
        <Route path="/career" element={<Career />} />
        <Route path="/strategic-insights" element={<Strategic />} />
        <Route path="/resource-hub" element={<ResourceHub />} />
        <Route path="/test" element={<SendMessage />} />
        <Route path="/articles" element={<Articles />} />

        <Route path="/learn" element={<Learn />} />
        <Route path="/service/:id" element={<SingleService />} />
        <Route path="/investor" element={<InvestorHome />} />
        <Route path="/investor/about-us" element={<InvestorAbout />} />
        <Route path="/investor/services" element={<InvestorServices />} />
        <Route
          path="/investor/services/:id"
          element={<InvestorSingleService />}
        />
        <Route path="/investor/contact-us" element={<InvestorContact />} />
        <Route path="/trader" element={<TraderHome />} />
        <Route path="/trader/about" element={<TraderAbout />} />
        <Route path="/trader/contact" element={<TraderContact />} />
        <Route path="/trader/:name" element={<TraderDatas />} />
        <Route path="/trader/:type/:name" element={<TraderSingleData />} />
        <Route path="/trader/service/:id" element={<SingleService />} />
        <Route path="/sebidiscloser" element={<SebiDisclosure />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/podcast/:id" element={<SinglePodcast />} />
        <Route path="/message" element={<SendMessage />} />
        <Route path="/trade-gyan-pricing-payment" element={<Prising />} />

        <Route element={<ProfileLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/chats" element={<ChatsApp />} />
        </Route>
        {/* <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        /> */}
        <Route
          path="/client-login"
          element={
            <OpenRoute>
              <ClientLogin />
            </OpenRoute>
          }
        />
        <Route
          path="/register"
          element={
            <OpenRoute>
              <Register />
            </OpenRoute>
          }
        />

        {user?.role === "Admin" && (
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route
              path="/admin/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/add-service"
              element={
                <PrivateRoute>
                  <AddService />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/service/:id"
              element={
                <PrivateRoute>
                  <SingleServiceAdmin />
                </PrivateRoute>
              }
            />

            <Route
              path="/admin/get-service"
              element={
                <PrivateRoute>
                  <GetAllService />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <PrivateRoute>
                  <CRM />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/chats"
              element={
                <PrivateRoute>
                  <AdminChatsApp />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/user/:id"
              element={
                <PrivateRoute>
                  <UserDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/create-Complaints"
              element={
                <PrivateRoute>
                  <AddComplaint />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/get-Complaints"
              element={
                <PrivateRoute>
                  <GetQuery />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/addBlog"
              element={
                <PrivateRoute>
                  <AddBlog />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/getBlog"
              element={
                <PrivateRoute>
                  <GetBlog />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/verify-user"
              element={
                <PrivateRoute>
                  <VerifyUser />
                </PrivateRoute>
              }
            />
          </Route>
        )}
      </Routes>

      <Footer />

      <div className="fixed bottom-0 md:left-10 left-0 z-50">
        <Whatsapp />
      </div>
    </div>
  );
};

export default App;
