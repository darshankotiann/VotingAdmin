import { useState, useEffect } from 'react';
import { get, ref, child, remove, DataSnapshot } from 'firebase/database';
import db from "../DB";

function VoterList() {

    const[info, setInfo] = useState([]);

    useEffect(() => {
        const dbref = ref(db);
        get(child(dbref, "VoterRegsitration/"))
        .then((snapshot) => {
            if(snapshot.exists) {
                setInfo([]);
                const data = snapshot.val();
                Object.values(data).map((d) => {
                    setInfo((oldarray) => 
                        [...oldarray, d])
                })
            }
            else {
                console.log("No data found");
            }
        })
        .catch(err => console.log(err))
    },[]);

    return(
        <>
            <center>
            <h1>Registered Voter</h1>
				<table border="2" style={{width:"40%", "text-align":"center" }} >
					<tr>
						<th>ID</th>
						<th>Name</th>
					</tr>
					{
						info.map((e => 
							<tr style={{ "text-align":"center" }}>
								<td> { e.id } </td>
                                <td> { e.name } </td>
								{/* <td> <button id="delete" onClick = { () => { deleteTask(e.id) }} >Delete</button> </td> */}
							</tr>
						))
					}
				</table>
    
            </center>          
        </>
    );
}
export default VoterList;