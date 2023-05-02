import CandidateList from "./Admin/CandidateList";
import CandidateRegistration from "./Admin/CandidateRegistration";
import CreateVoting from "./Admin/CreateVoting";
import AdminLogin from "./Admin/AdminLogin";
import VoterList from "./Admin/VoterList";
import AdminPanel from "./Admin/AdminPanel";
import Navbar from "./Admin/Navbar";
import ElectionPanel from "./Admin/ElectionPanel";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={ <AdminPanel /> } />
          <Route path="/createVoting" element={ <CreateVoting /> } />
          <Route path="/adminLogin" element={ <AdminLogin /> } />
          <Route path="/candidateRegistration" element={ <CandidateRegistration /> } />
          <Route path="/voterList" element={ <VoterList /> } />
          <Route path="/candidateList" element={ <CandidateList /> } />
          <Route path="/electionPanel" element={ <ElectionPanel /> } />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
