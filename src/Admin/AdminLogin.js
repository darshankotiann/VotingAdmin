import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {

    const nav = useNavigate();
    const rUsername = useRef();

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const hUsername = (event) => { setUsername(event.target.value); }
    const hPassword = (event) => { setPassword(event.target.value); }

    const login = (event) => {
        event.preventDefault();
        nav("/AdminPanel");
    }

    return(
        <>
            <form onSubmit={login}>
                <input type="text" placeholder="Enter Username" onChange={hUsername} value={username} ref={rUsername} /> <br/><br/>
                <input type="password" placeholder="Enter Password" onChange={hPassword} value={password} /> <br/><br/>
                <input type="submit" value="Login" />
            </form>
        </>
    );
}
export default AdminLogin; 