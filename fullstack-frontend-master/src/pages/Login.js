import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { create } from "./Loginservice";
/*import Navbar from "./layout/Navbar";*/

function Login() {
    const initialState = {
        email: "",
        password: ""

    }
        
    const [login, setLogin] = useState(initialState);
    console.log(create);
    /*const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");*/
    const history = useNavigate();
    const handleLoginChange = event => {
        const { name, value } = event.target
        setLogin({ ...login, [name]: value });
    }
    const saveLoginData = (e) => {
        /*setLogin(initialState);*/
        e.preventDefault()
        var data = {
            username: login.email,
            pass: login.password
        };
        console.log(data);
        create(data).then((response) => {
            setLogin({
                email: response.data.username,
                password: response.data.pass
            })
            history("/Home")
        }).catch((error) => console.log(error))
    }
        /*async function login(event) {
            event.preventDefault();
            try {
                const response = await axios.post("http://localhost:8093/login", {
                    data
                });

                if (response.data.message === "Login Success") {
                    history('/Home');
                } else {
                    alert("Incorrect Email and Password not match");
                }
            } catch (err) {
                alert(err);
            }
        
            }}*/

    return (
        <div>
            <div class="container">
                <div class="row">
                    <h2>Login With your Credentials</h2>
                    <hr />
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <form method="POST">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" name="email" class="form-control" id="email" placeholder="Enter Name" value={login.email} onChange={handleLoginChange} />
                            </div>

                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" name="password" class="form-control" id="password" placeholder="Enter Password" value={login.password} onChange={handleLoginChange} />
                            </div>
                            <button class="btn btn-primary" onClick={(e) => saveLoginData(e)} >Login</button>
                            {/*<Link to={"/Home"} className="btn btn-primary" id="button-login" onClick={login}>login</Link>*/}

                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;