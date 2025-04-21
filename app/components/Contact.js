import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { CONTACT } from "../utils/constant";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";


const Contact = () => {
  const form = useRef();



  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm("service_7ssdikq", "template_wjfexqr", form.current, {
        publicKey: "biI1CSSXfzkERtdwW",
      })
      .then(
        () => {
          alert("Successfully Sent");
          form.current.reset();
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="border-b  border-neutral-900 pb-15">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-5 text-center text-3xl"
      >
        {" "}
        Get In Touch
      </motion.h1>
      <div className="flex flex-wrap lg:justify-center mb-8">
        <div className="text-center tracking-tighter w-full max-w-xl lg:w-1/2 space-y-4">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="my-2"
          >
            {CONTACT.address}
          </motion.p>

          {/* Phone with icon */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-2 my-2"
          >
            <p>{CONTACT.phoneNo}</p>
            <a
              href={`tel:${CONTACT.phoneNo}`}
              title="Call"
              className="text-purple-400 hover:text-purple-600"
            >
              <FiPhoneCall size={20} />
            </a>
          </motion.div>

          {/* Email with icon */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-2 my-2"
          >
            <a href={`mailto:${CONTACT.email}`} className="underline">
              {CONTACT.email}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              title="Send Email"
              className="text-purple-400 hover:text-purple-600"
            >
              <MdEmail size={22} />
            </a>
          </motion.div>
        </div>

        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-xl lg:w-3/4 grid-col-1 grid"
        >
          <label>Name</label>
          <input
            type="text"
            name="from_name"
            required
            className="bg-neutral-900 outline-none px-2 rounded"
          />
          <label>Email</label>
          <input
            type="email"
            name="from_email"
            required
            className="bg-neutral-900 outline-none px-2 rounded"
          />
          <label>Message</label>
          <textarea
            name="message"
            maxLength={1000}
            required
            className="bg-neutral-900 outline-none px-2 rounded"
          />
          <button
            type="submit"
            required
            className="bg-purple-700 hover:bg-purple-900 rounded-md mt-2"
          >
            Send
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
