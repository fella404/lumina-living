export const timeSlots = [
  { value: "morning", label: "Pagi (09.00–12.00)" },
  { value: "afternoon", label: "Siang (12.00–15.00)" },
  { value: "evening", label: "Sore (15.00–18.00)" },
];

export const emptyForm = { name: "", email: "", date: "", slot: "", notes: "" };

// Banding tanggal pakai string ISO lokal (bukan toISOString yang memakai UTC).
export const toISODate = (date) =>
  [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
export const minDate = toISODate(tomorrow);

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Nama lengkap wajib diisi.";
  const email = form.email.trim();
  if (!email) errors.email = "Email wajib diisi.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Format email tidak valid.";
  if (!form.date) errors.date = "Tanggal peninjauan wajib dipilih.";
  else if (form.date < minDate) errors.date = "Tanggal peninjauan minimal besok.";
  if (!form.slot) errors.slot = "Pilih salah satu slot waktu.";
  return errors;
}
