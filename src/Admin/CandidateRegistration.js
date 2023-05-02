import { useState, useRef } from "react";
import { set, ref } from "firebase/database";
import { uid } from "uid";
import db from "../DB";
import { useLocation } from "react-router-dom";
import Hero from "./hero";

function CandidateRegistration() {
  const loc = useLocation();
  const rName = useRef();

  let votingId = loc.state.vId;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("first");
  const [branch, setBranch] = useState("iot");
  const [voteCount, setVoteCount] = useState(0);

  const hName = (event) => {
    setName(event.target.value);
  };
  const hEmail = (event) => {
    setEmail(event.target.value);
  };
  const hYear = (event) => {
    setYear(event.target.value);
  };
  const hBranch = (event) => {
    setBranch(event.target.value);
  };
  // const hImage = (event) => { setImage(event.target.files[0]); }

  const register = (event) => {
    event.preventDefault();
    const id = uid();
    const data = { name, email, year, branch, id };
    // set(ref(db, `Voting/${votingName}/CandidateRegistered/` + id), data)
    set(ref(db, `Voting/${votingId}/CandidateRegistered/` + id), data)
      .then((res) => {
        alert("Candidate Register Successfully");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {loc.state.vId === null ? (
        <div>"You Cannot Access this WebPage"</div>
      ) : (
        <div className="flex h-screen">
            <Hero/>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-[50%]">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Add Candidates
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={register}>
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Enter Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      onChange={hName}
                      value={name}
                      ref={rName}
                      autoComplete="off"
                      className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Enter Email
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      onChange={hEmail}
                      value={email}
                      autoComplete="off"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Select Year
                    </label>
                  </div>
                  <div className="mt-2">
                    <select
                      className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="year"
                      onChange={hYear}
                    >
                      <option value="first">First</option>
                      <option value="second">Second</option>
                      <option value="third">Third</option>
                      <option value="final">Final</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label>Select Year</label>
                  </div>
                  <div className="mt-2">
                    <select
                      className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="branch"
                      onChange={hBranch}
                    >
                      <option value="iot">IOT</option>
                      <option value="aiml">AIML</option>
                      <option value="comp">Computer Engg</option>
                      <option value="mech">Mechnical Engg</option>
                    </select>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Register Candidate
                  </button>
                </div>
                {/* <input type="submit" value="Register Candidate" /> */}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default CandidateRegistration;
