import { useState, useEffect } from "react";
import { get, ref, child } from "firebase/database";
import db from "../DB";
import { useLocation } from "react-router-dom";

function CandidateList({ vId }) {
  const loc = useLocation();
  let votingId = vId;

  const [voteCount, setVoteCount] = useState();
  const [info, setInfo] = useState([]);
  const [candidateInfo, setCandidateInfo] = useState([]);

  useEffect(() => {
    const dbref = ref(db);
    get(child(dbref, `Voting/${votingId}/CandidateRegistered/`))
      .then((snapshot) => {
        if (snapshot.exists) {
          setInfo([]);
          const data = snapshot.val();
          Object.values(data).map((d) => {
            setInfo((oldarray) => [...oldarray, d]);
          });
        } else {
          console.log("No data found");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  let cData = [];

  const getVoteCount = (id,e) => {
    // setVoteCount();
    const dbref = ref(db);
    get(child(dbref, `Voting/${votingId}/CandidateRegistered/${id}/voted/`))
      .then(async (snapshot) => {
        if (snapshot.exists) {
          setCandidateInfo([]);
          const data = snapshot.val();
          await Object.values(data).map((d) => {
            // setCandidateInfo((oldarray) => [...oldarray, d])
            cData.push((oldarray) => [...oldarray, d]);
          });
          console.log(cData.length);
          alert(`Total Votes:  ${cData.length}`)
          setVoteCount(cData.length);
        } else {
          console.log("No data found");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {info.map((e) => (
          
        <div className="flex flex-col justify-center max-w-xs p-6 mx-6 my-4 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
          <img
            src="https://source.unsplash.com/150x150/?portrait?3"
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y divide-gray-700">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">{e.name}</h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                {e.branch}
              </p>
              <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                {e.id}
              </p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              <a
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                // onClick={() => {
                //   vote();
                // }}
                // style={{
                //   pointerEvents: voted ? "none" : "visible",
                // }}
                onClick={() => { getVoteCount(e.id) }}
              >
                {/* {voted ? "Already Voted" : "Vote Now"} */}
                Total Votes
              </a>
              {/* <p className="px-5 text-xs sm:text-base dark:text-gray-400" id={e.id}>
               {voteCount}
              </p> */}
            </div>
          </div>
        </div>

      ))}
      <h1>{voteCount}</h1>
    </>
  );
}
export default CandidateList;

{
  /* <center>
            <h1>Registered Candidate</h1>
				<table border="2" style={{width:"40%", "text-align":"center" }} >
					<tr>
						<th>Name</th>
						<th>Year</th>
                        <th>Branch</th>
                        <th>Show Votes</th>
                        <th>Vote Count</th>
					</tr>
					{
						info.map((e) => ( 	
                            <tr style={{ "text-align":"center" }}>
								<td> { e.name } </td>
                                <td> { e.year } </td>
                                <td> { e.branch } </td>
                            	<td><button onClick = { () => { getVoteCount(e.id) }} >Show</button> </td>
                                <td>{ voteCount }</td>
                            </tr>
                        ))
					}
				</table>
    
            </center>           */
}
