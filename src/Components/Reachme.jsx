import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Toaster from "./Toaster";
import emailjs from "emailjs-com";
import Lottie from "react-lottie-player";
import { BTNLOADER } from "../../export";
import { toast, ToastContainer } from "react-toastify";


const serviceId = "service_x7wpv5i";
const templateId = "template_veov5tc";
const publicKey = "Iq7kRUHjE5bv9OZ3v";
function Reachme() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader,setLoader] = useState(false)
  
  const formref = useRef();
  const handleChange = (e) => {
    e?.target?.name === "name" ? setName(e.target.value) : "";
    e?.target?.name === "email" ? setEmail(e.target.value) : "";
    e?.target?.name === "message" ? setMessage(e.target.value) : "";
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      toast.warn("Please Recheck the Form")
      // setText("Please Recheck the Form");
    } else if (
      name === "" ||
      /[`!@#$%^&*_\-+]/.test(name) ||
      /[1234567890]/.test(name)
    ) {
      toast.warn("Enter Valid Name")
      // setType("warn");
      // setText("Enter Valid Name");
    } else if (
      email === "" ||
      !email.includes("@") ||
      !email.includes(".com")
    ) {
      toast.warn("Enter Valid Email Id")
      // setType("warn");
      // setText("Enter Valid Email Id");
    } else if (message === "") {
      toast.warn("Please Write A short Message")
      // setType("warn");
      // setText("Write a Message To Send");
    } else if (message.length < 10) {
      toast.warn("Message must contain more than 10 Words")
      // setType("warn");
      // setText("Message must contain more than 10 Words");
    } else if (message.length > 500) {
      toast.warn("Message Should not be more than 500 Words")
      // setText("Message must be less than 500 Words");
    } else {
      try {
        setLoader(true)
        const response = await emailjs.sendForm(
          serviceId,
          templateId,
          formref.current,
          publicKey
        );
        if (response.status === 200) {
          toast.success(`Thanks, ${name} For Your interest`)
          // setText(`Thanks ${name} We will be in touch Shortly`);
          setName("");
          setEmail("");
          setMessage("");
          setLoader(false)
        } else {
          setLoader(false)
          toast.warn("Something went wrong")
          // setText("Something went wrong");
        }
      } catch (error) {
        console.error(error);
      }
      // console.log(name, email, message);
      // toast.success("We Will be in touch Soon")
      // // setText("We Will be in touch Soon !");
      // // setType("");
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "spring", stiffness: 50 } },
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setText("");
  //   }, 7000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);
  return (
    <>
      {/* <Toaster text={text} type={type} onclick={() => setText("")} /> */}
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false}/>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-2 items-center p-2 overflow-hidden ">
        <motion.span
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="xl:col-span-2 text-5xl font-thin xl:text-[260px] overflow-hidden text-textpurple text-wrap"
        >
          <motion.span variants={itemVariants} className="text-btn font-serif">
            R
          </motion.span>
          <motion.span variants={itemVariants} className="font-sans ">
            e
          </motion.span>
          <motion.span
            variants={itemVariants}
            className=" text-4xl xl:text-[190px]"
          >
            a
          </motion.span>
          <motion.span variants={itemVariants} className="text-black">
            ch
          </motion.span>
          <span className="text-black text-2xl">Me</span>
        </motion.span>
        <span className=" xl:col-span-2 bg-mediumPurple w-1/2 h-1"></span>
        <motion.div
          initial={{ x: -100 }}
          animate={{
            x: 0,
            transition: { delay: 0, duration: 1, ease: "linear" },
          }}
          className=" xl:col-span-1 xl:text-8xl text-4xl font-bold gap-2 grid grid-cols-4 justify-items-start items-center p-10  "
        >
          <div className=" col-span-4  text-btn text-2xl ">From</div>
          <div className=" col-span-4 ">
            Ideas{" "}
            <span role="img" aria-label="thought balloon" className="w-10">
              💭
            </span>
          </div>
          <div className=" col-span-1  text-mediumPurple  text-2xl">To</div>
          <div className=" col-span-3 ">Website!</div>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{
            x: 0,
            transition: { delay: 0, duration: 1, ease: "linear" },
          }}
          className="xl:col-span-1  p-10 text-2xl text-mediumPurple xl:border-l-4 border-mediumPurple"
        >
          If you're <span className="">looking </span>
          for someone to bring designs to life and build interactive, responsive
          websites, let's connect!
          <span role="img" aria-label="handshake" className="text-3xl">
            🤝
          </span>
        </motion.div>
        {/* __________________________________Contact Form starts here ____________________________ */}
        <div id="form" className="xl:col-span-2 w-[80%]">
          <form
            ref={formref}
            className="w-full flex flex-col justify-center items-center gap-5 p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 3 } }}
              className="w-full  flex flex-col justify-center items-center"
            >
              <input
                value={name}
                name="name"
                onChange={handleChange}
                type="text"
                required
                title="Enter Your Name Here"
                placeholder="Name"
                className="xl:w-[70%] w-full h-10 rounded-xl px-4 border  border-b-4 border-mediumPurple"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
              className="w-full flex flex-col justify-center items-center"
            >
              <input
                value={email}
                name="email"
                onChange={handleChange}
                autoComplete="home email webauthn"
                type="email"
                required
                title="Enter Your Email ID here "
                placeholder="Email Id"
                className="xl:w-[70%] w-full h-10 rounded-xl px-4 border  border-b-4 border-mediumPurple"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              className="w-full  flex flex-col justify-center items-center"
            >
              <textarea
                value={message}
                name="message"
                type="text"
                required
                title="Enter Your Message Here"
                role="textbox"
                placeholder="Message Here"
                onChange={handleChange}
                className="xl:w-[70%]  resize-y min-h-20 w-[100%] max-h-40 bg-white p-1 rounded-xl px-4  border border-b-4 border-mediumPurple"
              ></textarea>
            </motion.div>

            <button
              onClick={handleFormSubmit}
              type="submit"
              className=" duration-500 h-14 w-44 text-xl border-2 border-b-4 border-mediumPurple flex justify-center items-center rounded-xl p-2 "
            >
              {loader ?  <Lottie className="" animationData={BTNLOADER} play/> : <span>Send Message </span>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Reachme;
