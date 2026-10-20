import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Native mailto submission fallback (or connect to EmailJS / backend API)
  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = "kidistm050@gmail.com";
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.open(
      `mailto:${recipient}?subject=${subject}&body=${body}`,
      "_blank",
    );
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
          {/* Left Column: Contact Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Contact Information
            </h3>
            <p className="text-slate-600 mb-6">
              Have a project in mind or want to discuss potential opportunities?
              Reach out directly or fill out the form.
            </p>

            {/* Email Card (Opens Gmail directly to your inbox) */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kidistm050@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-500 hover:shadow-md transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Email</div>
                <div className="font-semibold text-slate-900 group-hover:text-indigo-600 transition">
                  kidistm050@gmail.com
                </div>
              </div>
            </a>

            {/* Phone Card (Whole Block Clickable) */}
            <a
              href="tel:+251964437284"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-500 hover:shadow-md transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Call Me</div>
                <div className="font-semibold text-slate-900 group-hover:text-indigo-600 transition">
                  +251 964 43 72 84
                </div>
              </div>
            </a>

            {/* Google Maps Location Card (Whole Block Clickable) */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Injibara,+Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-500 hover:shadow-md transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Location</div>
                <div className="font-semibold text-slate-900 group-hover:text-indigo-600 transition">
                  Injibara, Ethiopia
                </div>
              </div>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition"
                  placeholder="yourname@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition active:scale-[0.99]"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
