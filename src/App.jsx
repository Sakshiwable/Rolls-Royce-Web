import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cars.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch cars:", error);
        setLoading(false);
      });
  }, []);


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <p className="text-white text-center mt-20 text-xl">
                Loading luxury...
              </p>
            ) : (
              <>
                <Home cars={cars} />
                <About />
              </>
            )
          }
        />


      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
