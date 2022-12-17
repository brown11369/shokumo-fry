import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "./sign.css";
import { useState } from "react";


export default function Usersign() {

    let Fromdata = {};

    const navigate = useNavigate()
    const login = async () => {
        const response = await fetch("https://shokumo-api.onrender.com/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Fromdata)
        })
        const data = await response.json()
        if (data.success === true) {
            localStorage.setItem('userToken', data.token)
            localStorage.setItem('user', JSON.stringify(data))
            navigate("/")
        }
        else {
            console.log(data)
        }
        console.log(data)

    }

    const logup = async () => {
        const response = await fetch("https://shokumo-api.onrender.com/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Fromdata)
        })
        const data = await response.json()
        console.log(data)
        if(data.success===true){
            navigate("/user-sign")
        }
        else{
            console.log("some error")
        }

    }



    let [change, setChange] = useState(1)
    return (

        <>
            <Menu />

            <section className="container-log">
                <div className="change-log"><button className="change-log-btn" onClick={() => {
                    setChange(1)
                }}>Login</button><button className="change-log-reg" onClick={() => {
                    setChange(0)
                }}>Registration</button></div>
                {change ? <div className="login">
                    <input onChange={(e) => {
                        Fromdata.email = e.target.value;
                    }} className="textinput" placeholder="Email" type="text" />
                    <input onChange={(e) => {
                        Fromdata.password = e.target.value;
                    }} className="textinput" placeholder="Password" type="password" />
                    <button className="log-button" onClick={login}>Sign in</button>
                </div> : <div className="regin">
                    <input onChange={(e) => {
                        Fromdata.name = e.target.value;
                    }} className="textinput" placeholder="Your Name" type="text" />
                    <input onChange={(e) => {
                        Fromdata.email = e.target.value;
                    }} className="textinput" placeholder="Email" type="text" />
                    <input onChange={(e) => {
                        Fromdata.contact = e.target.value;
                    }} className="textinput" placeholder="Phone No." type="text" />
                    <input onChange={(e) => {
                        Fromdata.address = e.target.value;
                    }} className="textinput" placeholder="Address" type="text" />
                    <input onChange={(e) => {
                        Fromdata.shipaddress = e.target.value;
                    }} className="textinput" placeholder="Shipping Address" type="text" />
                    <input onChange={(e) => {
                        Fromdata.password = e.target.value;
                    }} className="textinput" placeholder="Password" type="password" />
                    <button className="log-button" onClick={logup}>Sign up</button>
                </div>}


            </section>
            <Footer />
        </>
    )

}
