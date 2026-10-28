import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock } from "lucide-react";

const OWNER_NAME = "Kidist";
const EMAIL = "kidistm050@gmail.com";
const PHONE = "+251964437284";
const PHONE_DISPLAY = "+251 964 43 72 84";
const LOCATION = "Injibara, Ethiopia";
const ACCESS_KEY = "b0da4418-03b4-49f0-9667-c2225bae8daf";

const contactDetails = [
  {
    icon: Mail,
    label: "Email Me",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
  },
  {
    icon: Phone,
    label: "Call Me Directly",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE}`,
    external: false,
  },
  {
    icon: MapPin,
    label: "Current Location",
    value: LOCATION,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION)}`,
    external: true,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          from_name: `${OWNER_NAME} Portfolio`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || "Failed to deliver message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please reach out directly via email.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-xs uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 tracking-tight">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Have a project in mind, an opportunity to discuss, or want to connect? Send a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Contact {OWNER_NAME}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              I am always open to exploring software engineering internships, collaborative web projects, and software challenges.
            </p>

            <div className="space-y-4 pt-2">
              {contactDetails.map(({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-indigo-500 hover:shadow-md transition-all group"
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{label}</div>
                    <div className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors text-sm sm:text-base">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Response time notice */}
            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 flex items-center gap-3 text-xs text-indigo-800">
              <Clock className="w-4 h-4 text-indigo-600 flex-shrink-0" />
              <span>Fast response time • Replies within 24 hours</span>
            </div>
          </div>

          {/* Right Column: Web3Forms Functional Form */}
          <div className="lg:col-span-7 bg-slate-50/70 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Your Full Name <span className="text-indigo-600">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-sm transition"
                    placeholder="e.g. Alex Smith"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Your Email Address <span className="text-indigo-600">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-sm transition"
                    placeholder="alex@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  Subject / Topic
                </label>
                <input
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-sm transition"
                  placeholder="e.g. Project inquiry / Internship opportunity"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  Your Message <span className="text-indigo-600">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-sm transition"
                  placeholder={`Write your message for ${OWNER_NAME}...`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/25 transition-all active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>
                  {status === "sending" ? "Sending Message..." : "Send Message to Kidist"}
                </span>
                <Send className="w-4 h-4" />
              </button>

              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-800 text-xs animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>
                    Thank you! Your message was delivered successfully to {OWNER_NAME}. I will respond shortly!
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-800 text-xs animate-fadeIn">
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
