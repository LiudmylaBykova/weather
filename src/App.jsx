import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader/Loader";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
