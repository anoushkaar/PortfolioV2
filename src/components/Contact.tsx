import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anoushkaraghuveeran@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      const response = await fetch(FORMSPREE_ENDPOINT as string, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed");

      setIsSubmitted(true);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I’d love to hear from
            you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl
                  bg-white dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-2.5 bg-purple-600 rounded-lg">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {info.label}
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {info.value}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Availability Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              border border-green-300 dark:border-green-700
              bg-green-50 dark:bg-green-900/20"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm text-green-800 dark:text-green-300">
                Open for Opportunities
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Thank you for reaching out! I’ve received your message and
                    will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Portfolio Contact"
                  />
                  <input type="hidden" name="_template" value="table" />

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm
                        bg-gray-50 dark:bg-gray-900
                        text-gray-900 dark:text-white
                        placeholder-gray-400 dark:placeholder-gray-500
                        border border-gray-300 dark:border-gray-700
                        focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5">
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your email"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm
                        bg-gray-50 dark:bg-gray-900
                        text-gray-900 dark:text-white
                        placeholder-gray-400 dark:placeholder-gray-500
                        border border-gray-300 dark:border-gray-700
                        focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5">
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell me about your project..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm resize-none
                        bg-gray-50 dark:bg-gray-900
                        text-gray-900 dark:text-white
                        placeholder-gray-400 dark:placeholder-gray-500
                        border border-gray-300 dark:border-gray-700
                        focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  {error && <p className="text-sm text-red-500">{error}</p>}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3
                    bg-purple-600 hover:bg-purple-700
                    text-white rounded-lg font-medium
                    transition-colors disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
