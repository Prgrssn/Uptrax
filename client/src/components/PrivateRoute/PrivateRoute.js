import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// export default function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return currentUser ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to="/login" />
//         );
//       }}
//     ></Route>
//   );
// }

// export default function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth();
//   const user = localStorage.getItem("user");

//   return user && currentUser ? (
//     <Outlet
//       {...rest}
//       render={(props) => {
//         return <Component {...props} />;
//       }}
//     />
//   ) : (
//     <Navigate to="/login" />
//   );
// }

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  const user = localStorage.getItem("user");

  return user && currentUser ? children : <Navigate to="/login" />;
}
