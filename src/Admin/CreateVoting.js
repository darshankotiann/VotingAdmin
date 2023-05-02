import { useState, useRef } from "react";
import { set, ref } from "firebase/database";
import { uid } from "uid";
import { useNavigate } from "react-router-dom";
import db from "../DB";
import Hero from "./hero";

function CreateVoting() {
  const nav = useNavigate();
  const rVotingName = useRef();

  const [votingName, setVotingname] = useState("");
  const [purpose, setPurpose] = useState("");

  const hVotingname = (event) => {
    setVotingname(event.target.value);
  };
  const hPurpose = (event) => {
    setPurpose(event.target.value);
  };

  const createvoting = (event) => {
    event.preventDefault();
    const id = uid();
    const data = { id, votingName, purpose };
    // set(ref(db, `Voting/${votingName}/` + "VotingDetails"), data)
    set(ref(db, `Voting/${id}/VotingDetails`), data)
      .then((res) => {
        alert(`Voting Successfully Created for ${votingName}`);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex h-screen">
        <Hero />
        {/* <form onSubmit={createvoting}>
                <input type="text" placeholder="Name of Voting" onChange={hVotingname} value={votingName} ref={rVotingName} /> <br/><br/>
                <textarea cols="30" rows="5" placeholder="Purpose of Voting" onChange={hPurpose} value={purpose} ></textarea><br/><br/>
                <input type="submit" value="Create Voting" />
            </form> */}

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-[50%]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create Voting
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6"onSubmit={createvoting}>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Enter name of the Voting
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Name of Voting"
                    onChange={hVotingname}
                    value={votingName}
                    ref={rVotingName}
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Purpose of Voting
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    cols="50"
                    rows="4"
                    placeholder="Purpose of Voting"
                    onChange={hPurpose}
                    value={purpose}
                    style={{resize:"none"}}
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create Voting
                </button>
              </div>
              {/* <input type="submit" value="Register Candidate" /> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateVoting;
