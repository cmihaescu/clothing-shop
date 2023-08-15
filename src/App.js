import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component.jsx";
import { Checkout } from "./routes/checkout/checkout.component";
import { PaymentSuccessPage } from "./routes/payment-confirmation-pages/payment-success.component";
import { PaymentFailurePage } from "./routes/payment-confirmation-pages/payment-failure.component";
import { PaymentCancellationPage } from "./routes/payment-confirmation-pages/payment-cancellation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="authentication" element={<Authentication />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path="success" element={<PaymentSuccessPage />}></Route>
        <Route path="failure" element={<PaymentFailurePage />}></Route>
        <Route
          path="cancellation"
          element={<PaymentCancellationPage />}
        ></Route>
      </Route>
    </Routes>
  );
};

export default App;
