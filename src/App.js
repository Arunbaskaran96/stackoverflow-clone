import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Portal from "./Components/Portal";
import Question from "./Pages/Question";
import Users from "./Pages/Users";
import Askquestion from "./Pages/Askquestion";
import DisplayQuestion from "./Pages/DisplayQuestion";
import Userview from "./Pages/Userview";
import Company from "./Pages/Company";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/portal" element={<Portal />}>
            <Route path="questions" element={<Question />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="askquestion" element={<Askquestion />}></Route>
            <Route path="userview/:id" element={<Userview />}></Route>
            <Route
              path="displayquestion/:id"
              element={<DisplayQuestion />}
            ></Route>
            <Route path="company" element={<Company />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
