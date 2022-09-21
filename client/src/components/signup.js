import React, { useState } from 'react';
import { LockOutlined, UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { BrowserRouter as Router, Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';
import { register } from '../services';


const signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneno: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
    console.log([name])
  }
  const postData = async (e) => {
    e.preventDefault();
    const { fname, lname, email, phoneno, password } = user;

    // axios method

    // const res = await register({
    //   name: `${fname}  ${lname}`, email, phone: phoneno, password
    // })

    //  Fetch method

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: fname + "  " + lname, email: email, phone: phoneno, password: password
      })
    });
    const data = await res;
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successfull ");
      console.log("Registration Successfull");

      navigate("/login");
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
            <h2 className='text-4xl font-sans text-white font-bold text-center '>SIGN UP</h2>
            <Form.Item className='items-center'
              name="firstname"
              rules={[{ required: true, message: 'Please input your First Name!' }]}
            >
              <Input required prefix={<UserOutlined className="site-form-item-icon" />} type="text" name="fname" id="fname"
                value={user.fname}
                onChange={handleInputs}
                placeholder="First Name" />
            </Form.Item>

            <Form.Item className='items-center'
              name="lastname"
              rules={[{ required: true, message: 'Please input your Last Name!' }]}
            >
              <Input required prefix={<UserOutlined className="site-form-item-icon" />} type="text" name='lname' id="lname"
                value={user.lname}
                onChange={handleInputs}
                placeholder="Last Name" />
            </Form.Item>

            <Form.Item className='items-center'
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input required prefix={<MailOutlined className="site-form-item-icon" />} name="email" id="email"
                value={user.email}
                onChange={handleInputs}
                placeholder="User Email" />
            </Form.Item>

            <Form.Item
              name="phoneno"
              rules={[{ required: true, message: 'Please input your phone No!' }]}
            >
              <Input r
                prefix={<PhoneOutlined className="site-form-item-icon" />} type="number" name="phoneno" id="phoneno"
                value={user.phone}
                onChange={handleInputs}
                placeholder="Phone No"
                required
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />} required type="password" name="password" id="password"
                value={user.password}
                onChange={handleInputs}
                placeholder="Password"
              />
            </Form.Item>
            {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

          </Form.Item> */}

            <Form.Item>
              <Button style={{ margin: "8px", marginLeft: "0" }} type="submit" name="signup" id="signup" value="register" onClick={postData} >
                SignUp
              </Button>
              <Link to="/login">
                <Button className='text-white'>Login</Button>
              </Link>
            </Form.Item>
          </form>
        </div>
      </div>
    </>
  )
}

export default signup