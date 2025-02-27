import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminLayout, CustomerLayout } from "./components";
import { AdminDashboard, CustomerDashboard } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CustomerLayout />}>
          <Route path="/" element={<CustomerDashboard />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
