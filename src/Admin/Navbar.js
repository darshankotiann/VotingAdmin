import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
            <Link to="/">AdminPanel  </Link>
            {/* <Link to="/candidateList">Candidate List  </Link> */}
            {/* <Link to="/candidateRegistration">Candidate Registration  </Link> */}
            <Link to="/createVoting">Create Voting  </Link>
            {/* <Link to="/voterList">Voter List  </Link> */}
        </>
    );
}
export default Navbar;