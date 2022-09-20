import React, { useState, useContext } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";
const login = () => {

  const { state, dispatch } = useContext(userContext);
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid Credientials");
    } else {
      dispatch({ type: "USER", payload: true })
      window.alert("Login Successfull ");

      navigate("/");
    }
  }


  return (
    <>
      <div className="grid :grid-cols h-screen w-full " >
        <div className='bg-gray-800 flex flex-col justify-center '>
          <form
            method='POST'
            name="normal_login"
            className="max-w-[500px] w-full mx-auto bg-gr p-8 px-8 rounded-lg "
            initialValues={{ remember: true }}
          >
            <h2 className='text-4xl font-sans text-white font-bold text-center '>SIGN IN</h2>
            <div className='flex flex-col text-white py-2 '>
              <label className=' '>User Name</label>

              <Form.Item className='items-center'
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="User Email" />
              </Form.Item>
            </div>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />} required
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Item>
            {/* <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox type='checkbox'><p className='text-white'>Remember me</p></Checkbox>
              </Form.Item>
            </Form.Item> */}
            <Form.Item >
              <Button style={{ margin: "8px", marginLeft: "0" }} type="submit" name="signin" value="login" onClick={loginUser}>
                Login
              </Button>

              <Link to="/signup">
                <Button className='text-white'>SignUp</Button>
              </Link>
            </Form.Item>
          </form>
        </div>
      </div>
    </>
  )
}

export default login