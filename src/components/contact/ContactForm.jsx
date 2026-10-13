import { useState } from "react";
import Button from "../ui/Button";

const inputClass =
  "w-full rounded-[0.65rem] border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring transition-colors";

const inputLabels = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  message: "How we can help you?",
};

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Terima kasih, ${form.firstName}! Pesan Anda sudah kami terima. Tim kami akan segera merespons.`,
    );
    setForm(initialForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div>
        <h3 className="text-xl font-semibold text-foreground">
          Leave Us a Message
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Complete the form below and our team will contact you shortly.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-firstName"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {inputLabels.firstName}
          </label>
          <input
            id="contact-firstName"
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={handleChange}
            required
            placeholder="Enter your first name"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-lastName"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {inputLabels.lastName}
          </label>
          <input
            id="contact-lastName"
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={handleChange}
            required
            placeholder="Enter your last name"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          {inputLabels.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Enter your email address"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          {inputLabels.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Enter your message..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
