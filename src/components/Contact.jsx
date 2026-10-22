import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

// ---------- CHANGE ONLY THIS PART ----------
const OWNER_NAME = "Kidist"; // <- write your own name
const EMAIL = "kidistm050@gmail.com"; // <- the email you used to create the key
const PHONE = "+251964437284";
const PHONE_DISPLAY = "+251 964 43 72 84";
const LOCATION = "Injibara, Ethiopia";
const ACCESS_KEY = "b0da4418-03b4-49f0-9667-c2225bae8daf";
// -------------------------------------------

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition";
const labelClass = "block text-sm font-medium text-slate-700 mb-2";
const cardClass =
  "flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-500 hover:shadow-md transition group";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`,
    external: true,
  },
  { icon: Phone, label: "Call Me", value: PHONE_DISPLAY, href: `tel:${PHONE}` },
  {
    icon: MapPin,
    label: "Location",
    value: LOCATION,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION)}`,
    external: true,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New message for ${OWNER_NAME} from ${formData.name}`,
          from_name: `${OWNER_NAME} Portfolio`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            Let&apos;s Build Something Great Together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: contact cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Contact {OWNER_NAME}
            </h3>
            <p className="text-slate-600 mb-6">
              Have a project in mind or want to discuss potential opportunities?
              Reach out directly or fill out the form.
            </p>

            {contacts.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                className={cardClass}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">{label}</div>
                  <div className="font-semibold text-slate-900 group-hover:text-indigo-600 transition">
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right: form */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={labelClass}>Your Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className={labelClass}>Your Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="yourname@example.com"
                />
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={`Write your message to ${OWNER_NAME}...`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </span>
                <Send className="w-4 h-4" />
              </button>

              {status === "success" && (
                <p className="text-green-600 text-sm text-center">
                  Thank you! Your message has been sent to {OWNER_NAME}.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
