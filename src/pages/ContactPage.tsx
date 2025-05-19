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

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="animate-fadeIn">
      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-slate-900" : "bg-white"
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-6">İletişime Geçin</h1>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Bir sorunuz, proje fikriniz var mı ya da sadece merhaba demek mi
            istiyorsunuz? Sizden haber almaktan mutluluk duyarım.
          </p>
        </div>
      </section>

      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 rounded-xl ${
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
              <h3 className="text-xl font-semibold mb-2">Konum</h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                İzmir, Türkiye
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
              <h3 className="text-xl font-semibold mb-2">E-posta</h3>
              <a
                href="mailto:husnudogukan@gmail.com"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                husnudogukan@gmail.com
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
              <h3 className="text-xl font-semibold mb-2">Telefon</h3>
              <a
                href="tel:+05340415110"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                +90 (534) 041-5110
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`py-16 px-4 sm:px-6 lg:px-8  ${
          darkMode ? "bg-slate-900" : "bg-white"
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Mesaj Gönderin
              </h2>
              <p
                className={`mb-8 text-center ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Aşağıdaki formu doldurun, en kısa sürede size geri dönüş
                yapacağım.
              </p>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-800 flex items-start">
                  <MessageSquare
                    className="mr-2 mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <p>
                    Mesajınız başarıyla gönderildi! En kısa sürede size geri
                    dönüş yapacağım.
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
                    Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra
                    tekrar deneyin.
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
                      Adınız
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
                      placeholder="Ahmet Yılmaz"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block mb-2 text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      E-posta Adresiniz
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
                      placeholder="ahmet@ornek.com"
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
                    Konu
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
                    placeholder="Size nasıl yardımcı olabilirim?"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Mesajınız
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
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                    <Send size={18} className="ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
