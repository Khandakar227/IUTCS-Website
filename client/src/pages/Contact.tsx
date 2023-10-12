import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaUserAlt, FaEdit } from "react-icons/fa";
import { FormEvent, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { CONTACT_API } from "../assets/api";

export default function Contact() {
  const captchaRef = useRef({} as ReCAPTCHA);
  const [error, setError] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      setLoading(true);
      const captcha_token = captchaRef.current.getValue();
      if (!captcha_token) {
        setError("Please complete the captcha");
        return;
      } else setError("");

      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData);
      const body = {
        name: data.name,
        email: data.email,
        message: data.message,
      };
      
      const response = await fetch(
        `${CONTACT_API}?captcha_token=${captcha_token}`,
        { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
      );
      const resData = await response.json();
      if (resData.error) {
        setError(resData.message);
      } else {
        setSentMessage("Message sent! We'll get back to you soon.");
      }
    } catch (error) {
      console.log(error);
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-24 max-w-3xl mx-auto min-h-screen">
      <h2 className="pb-12 px-4 text-xl md:text-2xl font-bold"> Contact Us </h2>
      <form
        onSubmit={onSubmit}
        className="p-5 rounded-md bg-opacity-5 bg-white"
      >
        <div className="flex py-3 group">
          <div className="group-focus-within:bg-blue-700 bg-primary flex justify-center items-center p-4">
            <FaUserAlt />
          </div>
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 rounded outline-none bg-primary-800"
          />
        </div>
        <div className="flex py-3 group">
          <div className="group-focus-within:bg-blue-700 bg-primary flex justify-center items-center p-4">
            <MdOutlineAlternateEmail />
          </div>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded outline-none bg-primary-800"
          />
        </div>

        <div className="flex py-3 group">
          <div className="group-focus-within:bg-blue-700 bg-primary flex justify-center p-4">
            <FaEdit />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows={8}
            className="min-h-[100px] w-full p-3 rounded outline-none bg-primary-800"
            required
          />
        </div>
        <div className="py-3">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            ref={captchaRef}
          />
        </div>
        {error && <p className="py-1 text-red-600">{error}</p>}
        <div className="py-8">
            {
                !sentMessage ? 
          <button className="rounded py-2 px-4 bg-blue-600" disabled={loading}>
            SEND MESSAGE
          </button>
          : <p className="text-green-500">{sentMessage}</p>
            }
        </div>
      </form>
    </div>
  );
}
