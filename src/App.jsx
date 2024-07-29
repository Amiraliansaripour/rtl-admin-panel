import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const App = () => {
  const location = useLocation();
  return (
    <>
      {/* https://codesandbox.io/s/animated-routes-demo-react-router-v6-6l1li?file=/src/index.tsx */}
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location} >
            <Route path="auth/*" element={<AuthLayout />} />
            <Route path="admin/*" element={<AdminLayout />} />
            <Route path="rtl/*" element={<RtlLayout />} />
            <Route path="/" element={<Navigate to="/admin" replace />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default App;
