import React, { useState, useEffect } from 'react';
import "../App.css";
import { Button, Select, Steps, Form, Tabs, Typography, Layout } from "antd";
import { SiWindowsxp, SiLinux, SiApple } from "react-icons/si";
import { HiMenuAlt1 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { BrowserRouter as Router, Link } from "react-router-dom";
const { Header, Content, } = Layout;
// import { HiMenuAlt1 } from 'react-icons/hi';

const { Paragraph } = Typography;

const { TabPane } = Tabs;
const onChange = (key) => {
  console.log(key);
};
const { Step } = Steps;


const Home = () => {
  const [os, setOs] = useState('black');
  const [os1, setOs1] = useState('black');
  const [os2, setOs2] = useState('black');
  const activeBtn1 = () => {
    setOs("white");
    setOs1("black");
    setOs2("black");

  };
  const activeBtn2 = () => {
    setOs("black");
    setOs1("white");
    setOs2("black");
  };
  const activeBtn3 = () => {


    setOs("black");
    setOs1("black");
    setOs2("white");

  };

  const [color, setColor] = useState('rgba(248, 137, 0, 0.65)');
  const [textColor, setTextColor] = useState('rgba(255, 255, 255, 0.73)');
  const [textFont, setTextFont] = useState('normal');
  const [textFont1, setTextFont1] = useState('normal');

  const [buttonBorder, setButtonBorder] = useState('rgba(248, 137, 0, 0.2)');
  const [dropShadow, setdropShadow] = useState('');
  const [buttonBorder1, setButtonBorder1] = useState('rgba(248, 137, 0, 0.2)');
  const [dropShadow1, setdropShadow1] = useState('');

  const [color1, setColor1] = useState('rgba(248, 137, 0, 0.65)');
  const [textColor1, setTextColor1] = useState('rgba(255, 255, 255, 0.73)');

  const downloadBtn = () => {
    setColor("black");
    setTextColor("white");
    setTextFont("bold");
    setButtonBorder("black");
    setdropShadow("inset 0 4px 4px #FC6C00");

    setColor1("rgba(248, 137, 0, 0.65)");
    setTextColor1("rgba(255, 255, 255, 0.73)");
    setTextFont1("normal");
    setButtonBorder1("rgba(248, 137, 0, 0.2)");
    setdropShadow1("");

  };
  const downloadBtn2 = () => {
    setColor1("black");
    setTextColor1("white");
    setTextFont1("bold");
    setButtonBorder1("black");
    setdropShadow1("inset 0 4px 4px #FC6C00");

    setColor("rgba(248, 137, 0, 0.65)");
    setTextColor("rgba(255, 255, 255, 0.73)");
    setTextFont("normal");
    setButtonBorder("rgba(248, 137, 0, 0.2)");
    setdropShadow("");
  };

  const [current, setCurrent] = useState(0);
  const [OS, setOS] = useState("apple");
  const next = () => {
    setCurrent(current + 1);
  };


  const handleOSselect = (os) => setOS(os);
  const steps = [

    // Survey Form Page 

    {
      title: (
        <p className="text-[#F88900]   not-italic font-bold sm:text-4xl text-3xl  text-center font-sans max-w-[226.75px] ">
          Survey Form
        </p>
      ),
      content: (
        <>
          <div className=' '>
            <div className="  max-w-[1006px]   flex flex-row items-start p-0 gap-[10px] ">
              <p className="   max-w-[758px] sm:text-[41px] text-3xl sm:py-6 mb-[12px] sm:pb-[12px]   sm:leading-[45px] font-sans  not-italic font-bold  text-white  order-none grow-0">
                Please fill survey Survery Questions
              </p>
            </div>
            <p className=" max-w-[1246px]  top-[348px] text-white  font-sans not-italic  tracking-[-0.2px] font-normal text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt{" "}
            </p>

            <Form
              className="  bg-black border-black max-w-[1246px] "
              layout="vertical"
            >
              <Form.Item className='flex flex-col  p-0 gap-[2px] max-w-[1246px] left-[80px] top-[469px] '>
                <p className="text-white font-sans not-italic font-normal mb-0 text-base flex-none order-none grow-0 self-stretch ">
                  How many patterns do you want to search?
                </p>
                <Select className="flex flex-col items-start p-[12px] gap-[10px] max-w-[1246px] max-h-[48px] rounded-[4px] flex-none order-1 grow-0  " ></Select>
              </Form.Item>
              <Form.Item className='flex flex-col  p-0 gap-[2px] max-w-[1246px] left-[80px] top-[469px] '>
                <p className="text-white font-sans not-italic font-normal mb-0 text-base flex-none order-none grow-0 self-stretch ">
                  What type of data you search?
                </p>
                <Select className="flex flex-col items-start p-[12px] gap-[10px] max-w-[1246px]  rounded-[4px] flex-none order-1 grow-0 "></Select>
              </Form.Item>
              <Form.Item className='flex flex-col  p-0 gap-[2px] max-w-[1246px] left-[80px] top-[469px] '>
                <p className="text-white font-sans not-italic font-normal mb-0 text-base flex-none order-none grow-0 self-stretch ">
                  The Pattern search is used for what purpose?
                </p>
                <Select className="flex flex-col items-start p-[12px] gap-[10px] max-w-[1246px] rounded-[4px] flex-none order-1 grow-0 "></Select>
              </Form.Item>
            </Form>
          </div>
        </>
      ),
    },

    // Select OS page

    {
      title: (
        <>
          <p className="text-[#F88900]   not-italic font-bold sm:text-4xl text-3xl  text-center font-sans max-w-[200.38px] ">
            Select OS
          </p>
        </>
      ),
      content: (
        <>
          <div className='max-w-[1246px] top-[279px] left-[80px] '>
            <div className=" max-w-[1006px]   flex flex-row items-start p-0 gap-[10px] ">
              <p className=" max-w-[758px] sm:text-[41px] text-3xl sm:py-6 sm:pb-[12px] mb-[12px]   sm:leading-[45px] font-sans  not-italic font-bold  text-white  order-none grow-0 ">
                Select OS According to your choice
              </p>
            </div>
            <p className=" max-w-[1246px] text-white  font-sans not-italic  tracking-[-0.2px] font-normal text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt
            </p>
          </div>

          <div className="  flex max-w-[657px] h-[192px] p-[62px] pl-0  ml-[8px]  bg-black " layout="vertical">
            <div className=" max-w-[150px]  h-[192px] flex justify-center drop-shadow-[0px_4px_4px_rgba(255, 255, 255, 0.25)] ">
              <div

                onClick={() => { activeBtn1(setOs) }}
                className={`${OS === "apple" ? "selectedOS" : ""
                  }  w-[82.5px] sm:w-[150px] sm:h-[125px]  h-[69.2px] rounded-[3px] cursor-pointer text-center  drop-shadow-[0_4px_4px_rgba(0,72,217,0.1)] border-[#F88900]/60 border-2 `}
                style={{ backgroundColor: os, boxShadow: " 0 1px 2.5px #F88900 " }}
              >
                <div className=" cursor-pointer  sm:w-[100px] w-[55px] sm:h-[100px] h-[55px] sm:py-6 justify-center items-center bg-white ml-[15%] mt-[7%] rounded-full  ">
                  <div className=" w-[59.1px] h-[59.9px]  sm:text-[50.2px] text-[40px]  top-[25%] left-[15%] sm:mt-[2px] mt-[-4px] sm:ml-[25px] ml-[6.5px]  absolute">
                    <SiApple />
                  </div>
                </div>
              </div>
              <p className="absolute justify-center max-w-auto max-h-[47px] text-white  text-center sm:mt-[130px] mt-[71.5px] font-sans not-italic font-extrabold sm:text-[31px] leading-[150%] sm:leading-[150%] text-[17.05px] flex items-center tracking-widest ">
                Mac OS
              </p>
            </div>

            <div className="max-w-[150px]  h-[192px] flex sm:mx-[100px] mx-[25px]  ">
              <div
                onClick={() => { activeBtn2(setOs1) }}
                className={`${OS === "linix" ? "selectedOS" : ""}   w-[82.5px] sm:w-[150px] sm:h-[125px]  h-[69.2px] rounded-[3px] cursor-pointer text-center  drop-shadow-[0_2px_4px_rgba(0,72,217,0.1)] border-[#F88900]/60 border-2 `}
                style={{ backgroundColor: os1, boxShadow: "0 1px 2.5px #F88900" }}
              >
                <div >
                  <div className="bg-center cursor-pointer  sm:w-[100px] w-[55px] sm:h-[100px] h-[55px] sm:py-6 justify-center items-center bg-[#F3BF00] ml-[15%] mt-[7%] rounded-full">
                    <div className=" w-[50.2px] h-[59.9px]  sm:text-[50.2px] text-[40px]  top-[25%] left-[15%] sm:mt-[2px] mt-[-4px] sm:ml-[25px] ml-[9px]  absolute">
                      <SiLinux />
                    </div>
                  </div>

                </div>
              </div>
              <p className="absolute justify-center max-w-auto max-h-[47px] text-white  text-center  sm:mt-[130px] mt-[71.5px] font-sans not-italic font-extrabold sm:text-[31px] leading-[150%] sm:leading-[150%] text-[17.05px] flex items-center tracking-widest  ">
                Linux OS
              </p>
            </div>
            <div className="max-w-[150px]  h-[192px] flex  ">
              <div
                onClick={() => { activeBtn3(setOs2) }}
                className={`${OS === "windows" ? "selectedOS" : "null"} bg-black  w-[82.5px] sm:w-[150px] sm:h-[125px]  h-[69.2px] rounded-[3px] cursor-pointer text-center  drop-shadow-[0_2px_4px_rgba(0,72,217,0.1)] border-[#F88900]/60 border-2 `}
                style={{ backgroundColor: os2, boxShadow: "0 1px 2.5px #F88900" }}
              >
                <div className="cursor-pointer  sm:w-[100px] w-[60px] sm:h-[100px] h-[60px] sm:py-6 justify-center items-center bg-[#0048D9] ml-[15%] sm:mt-[7%] mt-[3.5%] rounded-full   ">
                  <div className="  w-[50.2px] h-[59.9px]  sm:text-[50.2px] text-[40px]  top-[25%] left-[15%]   sm:mt-[2px] mt-[-2px] sm:ml-[25px] ml-[10.5px]  absolute">
                    <SiWindowsxp />
                  </div>

                </div>

              </div>
              <p className="absolute justify-center sm:w-[157px] max-w-[auto] max-h-[47px] text-white  text-center sm:mt-[130px] mt-[71.5px] font-sans not-italic font-extrabold sm:text-[31px] leading-[150%] sm:leading-[150%] text-[17.05px] flex items-center tracking-widest ">
                Microsoft
              </p>
            </div>
          </div>
        </>
      ),
    },

    // Download OS Page

    {

      title: (
        <>
          <p className="text-[#F88900]   not-italic font-bold sm:text-4xl text-3xl  text-center font-sans max-w-[260.15px]">
            Download OS
          </p>
        </>
      ),
      content: (
        <>
          <div className="card-container">
            <div className=" flex flex-col static ">

              <Tabs defaultActiveKey="1" onChange={onChange} className="sm:w-[97%] w-[97%]">
                <TabPane tab={
                  <Button
                    onClick={() => { downloadBtn(setColor, setTextColor, setTextFont, setButtonBorder, setdropShadow); }} className='inline-block  text-center ml-[1px]   hover:bg-violet-600 text-white active:bg-[#F88900]/95  sm:w-[309px] w-[120px] sm:h-[47px] h-[33px] sm:border-[9px] border-[3px]  ' shape="round" style={{ background: color, color: textColor, height: "71px", borderColor: buttonBorder, borderWidth: "9px", boxShadow: dropShadow, boxSizing: "9px" }}>
                    <p style={{ fontWeight: textFont }} className='font-bold mb-[7px] text-center  sm:text-[30px] text-[9px] leading-[34.5px] '>Download Daboost</p>
                  </Button>
                } key="1">
                  <>
                    <div className='bg-white rounded sm:h-[360px] h-[200px] sm:w-[1246px] w-[98%] sm:mb-[40px] mb-[30px]'>
                      <p className='sm:ml-20 ml-3 sm:pt-[50px] pt-[30px] font-sans font-bold text-[17px] '>CFor Download Daboat click on the below button</p>
                      <Button className='font-bold justify-center sm:ml-20 ml-3 sm:mt-[27px] mt-[15px] sm:w-[202px] w-[147px] sm:h-[68px] h-[35px]  text-[11px] '
                        style={{
                          height: "65px", background: "#FC6C00", borderRadius: "4px", border: "black",
                          alignItems: "center", letterSpacing: " 0.01em", color: '#FFFFFF'
                        }}
                      >Download Daboast
                      </Button>
                    </div>

                  </>
                </TabPane>
                <TabPane tab={
                  <Button onClick={() => { downloadBtn2(setColor1, setTextColor1, setTextFont1, setButtonBorder1, setdropShadow1,) }} className='inline-block  text-center sm:ml-[3px] ml-0   hover:bg-violet-600 text-white active:bg-[#F88900]/95  sm:w-[309px] w-[120px] sm:h-[47px] h-[25px] ' shape="round" style={{ textAlign: "center", background: color1, color: textColor1, height: "71px", borderColor: buttonBorder1, borderWidth: "9px", boxShadow: dropShadow1, }}>
                    <p style={{ fontWeight: textFont1 }} className='  font-bold mb-[7px] text-center sm:text-[30px] text-[9px] leading-[34.5px]'>Use Curl Command</p>
                  </Button>
                }
                  key="2">
                  <>
                    <div className=' bg-white rounded sm:h-[360px] h-[390px] sm:w-[1246px] w-[98%] sm:mb-[40px] mb-[30px]'>
                      <div className='sm:ml-20 ml-3 font-sans not-italic'>
                        <p className='sm:ml-20 ml-3 sm:text-4xl text-2xl  font-[900]  '>Installation Steps:</p>
                        <p className='text-bold text-lg font-[800]   '>Installation Steps:</p>
                        <ul className='list-disc font-normal text-sm ml-[20px]'>
                          <li className=''>Open the bash terminal on the device.</li>
                          <li>Open the bash terminal on the device.</li>
                          <li>Open the bash terminal on the device.</li>
                          <li>Open the bash terminal on the device.</li>
                        </ul>
                        <p className='text-bold text-lg font-[800]'>Command:</p>
                        <Paragraph className='font-normal max-w-[490px]' copyable={{ className: "ml-[100px]" }}>ghdffdf/cvhgvghfdtyaad/bchjsghfhfdff/mvsahfdfftyd/xbssaf/sjhgwyqttwet@bxvsfbshggsghgdhgdgddgj bdgad///,mbjhgdgjhdg </Paragraph>
                      </div>
                    </div>
                  </>
                </TabPane>
              </Tabs>

            </div>

          </div>
        </>
      )
    },
  ];
  // const callAboutPage = async () => {
  //   try {
  //     const ress = await fetch("/home")
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // useEffect(() => {
  //   return () => {
  //     callAboutPage();
  //   };
  // }, []);
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div>
        <div className="flex justify-between max-w-[1440px] bg-transparent max-h-[1024px] absolute mx-auto h-screen w-screen items-auto  flex-col border-solid gap-0.75  left-0 right-0  box-border rounded-xl shadow-[0_2px_4px_rgba(0,72,217,0.1)]  p-[0px_0px_45px]  ">
          <Layout style={{ backgroundColor: "black", borderColor: "black" }}>
            <Header style={{ marginLeft: "3%", marginRight: "5%", height: "60px", maxWidth: "1246px", background: "transparent" }}><div className='absolute rounded-sm  w-[200px] sm:w-[400px] sm:h-[47px] h-[33px]  inline    left-auto right-0  mt-[5px] '>
              <div className='p-[0px_0px_0px_16%] right-0 left-[1000px]' >
                <Link to="/login">
                  <Button style={{ background: "#FC6C00", borderColor: "black", borderRadius: "4px", width: "auto", height: "35px" }}><p className='text-white '>LogIn</p></Button>
                </Link>

                <Link to="signup">
                  <Button style={{ marginLeft: "8px", minWidth: "", background: "#FC6C00", borderColor: "black", borderRadius: "4px", width: "auto", height: "35px" }}><p className='text-white '>Registration</p></Button>
                </Link>
                <Link to="logout">
                  <Button style={{ marginLeft: "8px", minWidth: "", background: "#FC6C00", borderColor: "black", borderRadius: "4px", width: "auto", height: "35px" }}><p className='text-white '>LogOut</p></Button>
                </Link>
              </div>
              {/* <div onClick={handleNav} >
                {!nav ? <HiMenuAlt1 size={20} /> : <GrFormClose size={20} />}
              </div>
              <div>
                <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ' >
                  <ul className='p-4 uppercase'>
                    <li className='border-b border-gray-600 p-2 text-white'>
                      <Link to="/login"><p className='text-white'>LogIn</p> </Link>
                    </li>
                    <li className='border-b border-gray-600 p-2 text-white'>
                      <Link to="signup"> <p className='text-white'>Registration</p> </Link>
                    </li>
                    <li className='border-b border-gray-600 p-2  text-white'>
                      <Link to="logout"><p className='text-white'>LogOut</p></Link>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div></Header>
            <Content>
              <div className='sm:p-[8px_40px_448px] p-[4px_16px_179.2px] border-black max-w-[1440px] bg-transparent max-h-[1000px] absolute mx-auto h-[500px] w-screen '>
                <div className="text-center  ">
                  <Steps className='text-4xl max-w-[1246px] ' size="large" current={current}>
                    {steps.map((item) => (
                      <Step
                        // icon={<BiSquareRounded />}
                        // icon={<RiNumber1/>}
                        key={item.title}
                        title={item.title}
                      />
                    ))}
                  </Steps>
                </div>
                <div >{steps[current].content}</div>
                <div>
                  {current < steps.length - 1 && (
                    <Button

                      className="  absolute rounded-sm  w-[111px] sm:w-[157px] sm:h-[47px] h-[33px] sm:left-[82.5%]    left-[70%] sm:top-[81.45%] mt-[10px]  sm:right-[80.92%]  sm:bottom-[13.96%]  "
                      style={{ justifyContent: "center", alignItems: "flex-end", height: "47px", background: " #FC6C00", borderColor: "black", borderRadius: "4px", }}
                      onClick={() => next()}
                    >
                      <p className='  font-sans not-italic justify-center py-[3%] font-bold text-[17px] flex text-white   tracking-[-0.01em] '>Next</p>
                    </Button>
                  )}
                </div>
              </div>
            </Content>
          </Layout>
        </div>

      </div>
    </>
  );
}
export default Home;
