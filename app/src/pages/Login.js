import React,{useState,useEffect} from 'react'
import Input from 'antd/lib/input/Input'
import { Link , useNavigate } from 'react-router-dom'
import { Form,message } from 'antd'
import "../resources/authentication.css"
import axios from "axios"
import Spinner from "../components/Spinner"

function Login() {
    const [loading, setLoading] = useState(false);

    const navigate=useNavigate()
    const onFinish = async (values) => {
        try {
            setLoading(true);

          const response = await axios.post("/api/users/login", values);
          localStorage.setItem("EXPENSETRACKER-users",JSON.stringify({...response.data, password:''}));
          setLoading(false);

          message.success("Login successful");
          navigate("/");
        } catch (error) {
        setLoading(false);
          message.error("Login failed");
        }
      };
      useEffect(() => {
        if (localStorage.getItem("EXPENSETRACKER-users")) {
          navigate("/");
        }
      }, []);
    return (
        <div className="login">
                  {loading && <Spinner />}

            <div className="row justify-content-center align-items-center">
                   <div className="col-md-4">
                    <Form layout="vertical" onFinish={onFinish}>
                    <h1>Expense Track/ Login</h1>
                
                        <Form.Item label="Email" name='email'>
                            <Input />

                        </Form.Item>
                        <Form.Item label="Password" name='password' >
                            <Input type='password' />

                        </Form.Item>
                        <div className="d-flex justify-content-between align-item-center">
                            <Link to='/register'>Not Registered, Click here</Link>
                            <button className="primary" type="submit">LOGIN</button>
                        </div>

                    </Form>
                </div>
                <div className="col-md-4">
                    <div className="lottie">
                    <lottie-player src="https://lottie.host/597e4cbd-b5be-415a-992d-2f35543e2cc2/bwdR4k4N9W.json" background="transaprent" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Login