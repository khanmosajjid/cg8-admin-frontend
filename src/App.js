import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StakingPoolForm from "./components/CreatePool";
import History from "./components/History";
import Users from "./components/Users";
import "./App.css";
import TopCG8Holders from "./components/TopHolders";
import TopCG8Traders from "./components/TopBuyers";
import TopReferralFeeWallets from "./components/TopReferral";
import TopCG8Stakers from "./components/TopStaker";
import TopRewardClaimers from "./components/TopClaimedWallet";
import BlacklistWhitelistWallets from "./components/BlockList";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log(isSidebarOpen +" from App.js")

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />        <div
          className={`content ${isSidebarOpen ? "content-open" : ""}`}
        >
          <Routes>
            <Route path="/" element={<StakingPoolForm />} />
            <Route path="/history" element={<History />} />
            <Route path="/users" element={<Users />} />
            <Route path="/topholders" element={<TopCG8Holders />} />
            <Route path="/topbuyers" element={<TopCG8Traders />} />
            <Route path="/topreferer" element={<TopReferralFeeWallets />} />
            <Route path="/topstaker" element={<TopCG8Stakers />} />
            <Route path="/topclaimedwallet" element={<TopRewardClaimers />} />
            <Route path="/blacklistAccounts" element={<BlacklistWhitelistWallets />} />







          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;