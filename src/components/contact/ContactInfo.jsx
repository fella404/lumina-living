import { contact } from "../../data/contact";

const dayMap = {
  "Senin–Jumat": "Monday to Friday",
  Sabtu: "Saturday",
  Minggu: "Sunday",
};

const formatAvailability = () => {
  const parts = contact.hours.map(
    (slot) => `${dayMap[slot.days] ?? slot.days}, ${slot.time}`,
  );
  // e.g. "Available Monday to Friday, 09:00–18:00 · Saturday, 10:00–16:00"
  // Drop comma on continuation parts for cleaner join
  if (parts.length === 0) return "";
  if (parts.length === 1) return `Available ${parts[0]}`;
  const [first, ...rest] = parts;
  return `Available ${first} and ${rest.join(" · ")}`;
};

const ContactInfo = () => (
  <div>
    <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
      Get in —
      <br />
      touch with us
    </h2>

    <p className="mt-6 max-w-md text-sm text-justify leading-relaxed text-muted-foreground">
      Looking to buy, sell, or rent a property in Indonesia? Whether you need
      help finding the right home, listing your own, or just have a question
      about a listing, our team is here to guide you every step of the way.
    </p>

    <dl className="mt-10 space-y-7">
      <div>
        <dt className="text-sm text-muted-foreground">Email:</dt>
        <dd className="mt-1">
          <a
            href={`mailto:${contact.email}`}
            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
          >
            {contact.email}
          </a>
        </dd>
      </div>

      <div>
        <dt className="text-sm text-muted-foreground">Phone:</dt>
        <dd className="mt-1">
          <a
            href={contact.phoneHref}
            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
          >
            {contact.phone}
          </a>
        </dd>
        <p className="mt-1 text-xs text-muted-foreground">
          {formatAvailability()}
        </p>
      </div>
    </dl>
  </div>
);

export default ContactInfo;
