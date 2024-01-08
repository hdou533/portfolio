"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface envData {
  serviceId: string;
  templateId: string;
  publicKey: string;
}
const ENV_DATA: envData = {
  serviceId: process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "",
};
// const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
// const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
// const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

const ContactForm = ({ title = "Get in touch" }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        ENV_DATA.serviceId,
        ENV_DATA.templateId,
        {
          from_name: form.name,
          to_name: "Sally Dou",
          from_email: form.email,
          to_email: "sallydou2023@gmail.com",
          message: form.message,
        },
        ENV_DATA.publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="text-black/80 flex flex-col justify-center items-center">
      <div className="text-center text-white px-8 max-w-xl flex flex-col gap-8">
        <h1 className=" text-3xl lg:text-5xl font-bold underline decoration-secondary underline-offset-8 uppercase">
          {title.toUpperCase()}
        </h1>
        <p>
          Whether you have an idea for a project or just want to chat, feel free
          to shoot me an email!
        </p>
      </div>
      <div className="my-16 w-full flex justify-center">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 px-8 w-full sm:w-[512px]"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your good name?"
            className="border shadow-sm placeholder-slate-400 rounded-md px-3 py-2"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email address?"
            className="border shadow-sm placeholder-slate-400 rounded-md px-3 py-2"
            required
          />

          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What you want to say?"
            className="border shadow-sm placeholder-slate-400 rounded-md px-3 py-2"
            required
          />

          <button
            type="submit"
            className="text-white w-full p-2 border uppercase text-lg bg-light-pink rounded-lg border-light-pink hover:bg-secondary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
