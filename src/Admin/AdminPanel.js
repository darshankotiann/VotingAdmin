import VotingCard from "./VotingCard";
import { useState, useEffect } from "react";
import { get, ref, child } from "firebase/database";
import db from "../DB";
import UserProile from "./userProfile";

function AdminPanel() {
  const [info, setInfo] = useState([]);
  //   let sideBar={"Create Voting":"createvoting"}
  let sideBar = [{ name: "Create Voting", link: "/createvoting" }];
  useEffect(() => {
    const dbref = ref(db);
    // get(child(dbref, `Voting/${votingName}/`))
    get(child(dbref, "Voting/"))
      .then((snapshot) => {
        if (snapshot.exists) {
          setInfo([]);
          const data = snapshot.val();
          Object.values(data).map((d) => {
            setInfo((oldarray) => [...oldarray, d]);
          });
          // console.log(info);
        } else {
          console.log("No data found");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex ">
        <UserProile navLinks={sideBar} />
        {info.map((e) => {
          console.log(e);
          return (
            <VotingCard
              vId={e.VotingDetails.id}
              vName={e.VotingDetails.votingName}
              vPurpose={e.VotingDetails.purpose}
            />
          );
        })}
      </div>
    </>
  );
}
export default AdminPanel;
