import React, { useState } from "react";
import { Send, MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ContactPage: React.FC = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-slate-900" : "bg-white"
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have a question, project idea, or just want to say hello? I'd love
            to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-slate-800" : "bg-gray-50"
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`p-6 rounded-xl ${
                darkMode ? "bg-slate-900" : "bg-white"
              } shadow-lg text-center`}
            >
              <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 bg-rose-100 text-rose-600">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                San Francisco, CA
              </p>
            </div>

            <div
              className={`p-6 rounded-xl ${
                darkMode ? "bg-slate-900" : "bg-white"
              } shadow-lg text-center`}
            >
              <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 bg-blue-100 text-blue-600">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:hello@example.com"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                hello@example.com
              </a>
            </div>

            <div
              className={`p-6 rounded-xl ${
                darkMode ? "bg-slate-900" : "bg-white"
              } shadow-lg text-center`}
            >
              <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 bg-green-100 text-green-600">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a
                href="tel:+1234567890"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-slate-900" : "bg-white"
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              <p
                className={`mb-8 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-800 flex items-start">
                  <MessageSquare
                    className="mr-2 mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <p>
                    Your message has been sent successfully! I'll get back to
                    you soon.
                  </p>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-800 flex items-start">
                  <MessageSquare
                    className="mr-2 mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <p>
                    There was an error sending your message. Please try again
                    later.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block mb-2 text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-slate-800 text-white border-slate-700 focus:border-rose-500"
                          : "bg-white text-gray-900 border-gray-300 focus:border-rose-500"
                      } border focus:outline-none focus:ring-2 focus:ring-rose-500`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block mb-2 text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-slate-800 text-white border-slate-700"
                          : "bg-white text-gray-900 border-gray-300"
                      } border focus:outline-none focus:ring-2 focus:ring-rose-500`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode
                        ? "bg-slate-800 text-white border-slate-700"
                        : "bg-white text-gray-900 border-gray-300"
                    } border focus:outline-none focus:ring-2 focus:ring-rose-500`}
                    placeholder="How can I help you?"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode
                        ? "bg-slate-800 text-white border-slate-700"
                        : "bg-white text-gray-900 border-gray-300"
                    } border focus:outline-none focus:ring-2 focus:ring-rose-500`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center px-6 py-3 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-700 transition-colors shadow-md hover:shadow-lg ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>

            <div className="lg:pl-8">
              <h2 className="text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    What services do you offer?
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    I specialize in full-stack web development, focusing on
                    React, Node.js, and related technologies. My services
                    include front-end development, back-end development,
                    performance optimization, and technical consulting.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    How much do you charge?
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Project rates vary depending on scope, complexity, and
                    timeline. I offer competitive rates and can work on hourly,
                    weekly, or project-based pricing models. Contact me with
                    your project details for a custom quote.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    What is your typical timeline?
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Timeline depends on project scope and current workload.
                    Small projects may take 1-2 weeks, while larger projects can
                    take several months. I'm committed to providing realistic
                    estimates and regular updates throughout the development
                    process.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Do you offer maintenance services?
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Yes, I offer maintenance packages for websites and
                    applications I've built. These can include regular updates,
                    security patches, performance monitoring, and feature
                    enhancements as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
