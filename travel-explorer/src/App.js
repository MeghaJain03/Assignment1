import React from "react";
import { BrowserRouter as Router, Routes, Route }from "react-router-dom";

//Imports for footer
import Footer from "../../travel-explorer/src/components/Footer/Footer";

//Imports for navigation bar
import Navbar from "../../travel-explorer/src/components/NavigationBar/Navbar"; 

import Explorer from "./components/ExplorerPage/Explorer";
import Trek1 from "./components/ExplorerPage/DestinationDetailsPage/DestinationDetails/ChabutraTrek";
import Trek2 from "./components/ExplorerPage/DestinationDetailsPage/DestinationDetails/KanakGhatiTrek";
import Trek3 from "./components/ExplorerPage/DestinationDetailsPage/DestinationDetails/BanKiGhatiTrek";
import Trek4 from "./components/ExplorerPage/DestinationDetailsPage/DestinationDetails/AchrolFortTrek";
import Trek5 from "./components/ExplorerPage/DestinationDetailsPage/DestinationDetails/TwinTowerTrek";
import Trek6 from "./components/ExplorerPage/DestinationDetailsPage/DestinationDetails/KedarnathTrek";
import Trek7 from "./components/ExplorerPage/DestinationDetailsPage/DestinationDetails/MountSumelTrek";
import Camp from "./components/ExplorerPage/DestinationDetailsPage/DestinationDetails/Camp";





function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/explore" element={<Explorer />} />
        <Route path="/trek1" element={<Trek1 />} />
        <Route path="/trek2" element={<Trek2 />} />
        <Route path="/trek3" element={<Trek3 />} />
        <Route path="/trek4" element={<Trek4 />} />
        <Route path="/trek5" element={<Trek5 />} />
        <Route path="/trek6" element={<Trek6 />} />
        <Route path="/trek7" element={<Trek7 />} />
        <Route path="/camp" element={<Camp />} />
      </Routes>
      
      <Footer />
      
    </Router>
  );
}

export default App;
