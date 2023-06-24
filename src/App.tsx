import { Auth } from "./pages/Auth/Auth";
import { Home } from "./pages/Home/Home";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./redux/store";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/store";
import * as authOperations from "./redux/auth/operations";
import { selectIsLoggedIn } from "./redux/auth/selectors";

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(authOperations.refreshToken());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth");
    } else {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
};
const WrappedApp = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter
          basename={
            process.env.NODE_ENV === "development" ? "" : process.env.PUBLIC_URL
          }
        >
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
export default WrappedApp;
