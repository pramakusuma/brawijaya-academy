import { useState, useEffect, useContext } from "react";
import GlobalSytles from "./templates/globalStyles";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Description from "./pages/Description";
import DescriptionMentor from "./pages/DescriptionMentor";
import DescriptionPemdas from "./pages/DescriptionPemdas";
import PemdasPendahuluan from "./pages/PemdasPendahuluan";
import Payment from "./pages/Payment";
import PaymentStatus from "./pages/PaymentStatus";
import PaymentStatusList from "./pages/PaymentStatusList";
import PaymentStatusSuccess from "./pages/PaymentStatusSuccess";
import PaymentStatusFailed from "./pages/PaymentStatusFailed";
import PaymentScan from "./pages/PaymentScan";
import Class from "./pages/Class";
import { PrivateRoute, RestrictedRoute } from "./config/PrivateRoute";
import { AuthContext, AuthProvider } from "./config/Auth";
import "./App.css";

function App() {
    return (
        <AuthProvider>
            <GlobalSytles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/description" element={<Description />} />
                <Route
                    path="/description-mentor"
                    element={<DescriptionMentor />}
                />
                <Route
                    path="/description/pemdas"
                    element={<DescriptionPemdas />}
                />
                <Route
                    path="/description-mentor/pemdas"
                    element={<DescriptionPemdas />}
                />
                <Route
                    path="/description/pemdas/pendahuluan"
                    element={<PemdasPendahuluan />}
                />
                <Route
                    path="/description-mentor/pemdas/pendahuluan"
                    element={<PemdasPendahuluan />}
                />
                <Route path="/payment" element={<Payment />} />
                <Route path="/payment-scan" element={<PaymentScan />} />
                <Route path="/payment-status" element={<PaymentStatus />} />
                <Route
                    path="/payment-status/success"
                    element={<PaymentStatusSuccess />}
                />
                <Route
                    path="/payment-status/failed"
                    element={<PaymentStatusFailed />}
                />
                <Route
                    path="/payment-status/list"
                    element={<PaymentStatusList />}
                />
                <Route path="/class" element={<Class />} />
            </Routes>
            //{" "}
        </AuthProvider>
    );
}

export default App;
