"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, MapPin } from "lucide-react";
import Toast from "../ui/Toast";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({
    show: false,
    type: "success",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          lang: i18n.language,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
        setToast({
          show: true,
          type: "success",
          message: t("contact.form.success") || "Message sent successfully!",
        });
      } else {
        setToast({
          show: true,
          type: "error",
          message:
            t("contact.form.error") ||
            "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setToast({
        show: true,
        type: "error",
        message:
          t("contact.form.error") ||
          "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <section id="contact" className="py-40 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              {/* Left Side */}
              <div className="lg:col-span-5">
                <div className="sticky top-40">
                  <div className="relative group">
                    {/* Card Shadow/Border */}
                    <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />

                    {/* Main Card */}
                    <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-8 rounded-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <h2 className="font-['Roboto_Condensed'] font-bold text-5xl text-brand-navy/90 dark:text-white/90">
                        {t("contact.title")}
                      </h2>
                      <div className="mt-12 space-y-8">
                        <div className="flex items-center gap-6">
                          <div className="relative group/icon">
                            <div className="absolute -left-1.5 top-1.5 w-12 h-12 border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover/icon:-translate-x-0.5 group-hover/icon:translate-y-0.5" />
                            <div className="relative w-12 h-12 bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/icon:translate-x-0.5 group-hover/icon:-translate-y-0.5">
                              <MapPin className="w-5 h-5 text-brand-navy/40 dark:text-white/40 group-hover/icon:text-brand-purple dark:group-hover/icon:text-white transition-colors" />
                            </div>
                          </div>
                          <p className="font-['Roboto_Mono'] text-brand-navy/60 dark:text-white/60">
                            {t("contact.office.address")}
                          </p>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="relative group/icon">
                            <div className="absolute -left-1.5 top-1.5 w-12 h-12 border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover/icon:-translate-x-0.5 group-hover/icon:translate-y-0.5" />
                            <div className="relative w-12 h-12 bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/icon:translate-x-0.5 group-hover/icon:-translate-y-0.5">
                              <Mail className="w-5 h-5 text-brand-navy/40 dark:text-white/40 group-hover/icon:text-brand-purple dark:group-hover/icon:text-white transition-colors" />
                            </div>
                          </div>
                          <a
                            href={`mailto:${t("contact.office.email")}`}
                            className="font-['Roboto_Mono'] text-brand-navy/60 dark:text-white/60 hover:text-brand-purple dark:hover:text-whitee transition-colors"
                          >
                            {t("contact.office.email")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:col-span-7">
                <div className="relative group">
                  {/* Card Shadow/Border */}
                  <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />

                  {/* Main Card */}
                  <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-8 rounded-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <form onSubmit={handleSubmit} className="space-y-12">
                      <div className="space-y-2">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("contact.form.name")}
                          required
                          className="w-full px-4 py-4 bg-white/50 dark:bg-gray-700/50 border-2 border-[#2A3C50]/10 dark:border-white/10 rounded-lg focus:border-brand-purple dark:focus:border-white focus:outline-none transition-colors font-['Roboto_Mono'] placeholder:text-brand-navy/40 dark:placeholder:text-white/40 dark:text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("contact.form.email")}
                          required
                          className="w-full px-4 py-4 bg-white/50 dark:bg-gray-700/50 border-2 border-[#2A3C50]/10 dark:border-white/10 rounded-lg focus:border-brand-purple dark:focus:border-white focus:outline-none transition-colors font-['Roboto_Mono'] placeholder:text-brand-navy/40 dark:placeholder:text-white/40 dark:text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t("contact.form.message")}
                          required
                          rows={4}
                          className="w-full px-4 py-4 bg-white/50 dark:bg-gray-700/50 border-2 border-[#2A3C50]/10 dark:border-white/10 rounded-lg focus:border-brand-purple dark:focus:border-white focus:outline-none transition-colors font-['Roboto_Mono'] placeholder:text-brand-navy/40 dark:placeholder:text-white/40 dark:text-white"
                        />
                      </div>
                      <div className="relative">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="relative group inline-flex"
                        >
                          {/* Button Shadow/Border */}
                          <div className="absolute -left-1.5 top-1.5 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-lg transition-all duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />

                          {/* Main Button */}
                          <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 px-6 py-3 rounded-lg transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <span className="font-['Roboto_Mono'] text-sm text-brand-navy/90 dark:text-white/90">
                              {isSubmitting ? "..." : t("contact.form.send")}
                            </span>
                          </div>
                        </button>

                        <Toast
                          show={toast.show}
                          type={toast.type}
                          message={toast.message}
                          onClose={() =>
                            setToast((prev) => ({ ...prev, show: false }))
                          }
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
