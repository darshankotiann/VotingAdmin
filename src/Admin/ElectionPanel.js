import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { get, ref, child } from "firebase/database";
import db from "../DB";
import UserProile from "./userProfile";
import CandidateList from "./CandidateList";

function ElectionPanel(props) {
  const loc = useLocation();
  const nav = useNavigate();
  const data = useState([]);
  let id = loc.state.vId;
  let sideBar = [
    { name: "Add Candidate", link: "/CandidateRegistration", id: id },
    // { name: "Show Candidate", link: "/candidateList", id: id },
    // {"name":"Show Candidate","link":"/createvoting"}
  ];
  const [votingStatus, setVotingStatus] = useState(false);
  const [voteCount, setVoteCount] = useState(0);

  const startVoting = (event) => {
    setVotingStatus(!votingStatus);
  };

  const addCandidate = (event) => {
    nav("/CandidateRegistration", { state: { vId: id } });
  };

  const showCandidate = (event) => {
    nav("/candidateList", { state: { vId: id } });
  };

  return (
    <>
      <div className="flex">
        <UserProile navLinks={sideBar} />
        <div className="flex flex-wrap h-fit">
          <CandidateList vId={id} />
        </div>
      </div>
    </>
  );
}
export default ElectionPanel;
