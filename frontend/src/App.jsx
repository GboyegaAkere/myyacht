import React from "react";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* your whole app */}
      <Home />
      <ScrollToTop />
    </div>
  );
};

export default App;
