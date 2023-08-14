import React,{useState,useEffect } from 'react'
import Input from 'antd/lib/input/Input'
import { Link ,useNavigate} from 'react-router-dom'
import { Form , message} from 'antd'
import "../resources/authentication.css"
import axios from 'axios';
import Spinner from "../components/Spinner";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(true);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/users/register", values);
      message.success("Registration Successfull");
      setLoading(false);
    } catch (error) {
      message.error("Something went wrong");
      setLoading(false);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("EXPENSETRACKER-users")) {
      navigate("/");
    }
  }, []);
    return (
        <div className="register">
            {loading && <Spinner />}

            <div className="row justify-content-center align-items-center">
                <div className="col-md-5">
                    <div className="lottie">
                    <lottie-player src="https://lottie.host/597e4cbd-b5be-415a-992d-2f35543e2cc2/bwdR4k4N9W.json" background="transaprent" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
                </div>
                </div>
                <div className="col-md-5">
                    <Form layout="vertical" onFinish={onFinish}>
                    <h1>Expense Track/ Register</h1>
                
                        <Form.Item label="Name" name='name'>
                            <Input />

                        </Form.Item>
                        <Form.Item label="Email" name='email'>
                            <Input />

                        </Form.Item>
                        <Form.Item label="Password" name='password'>
                            <Input type="password" />

                        </Form.Item>
                        <div className="d-flex justify-content-between align-item-center">
                            <Link to="/login">Already Registered, Click here to Login</Link>
                            <button className="secondary" type="submit">REGISTER</button>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Register