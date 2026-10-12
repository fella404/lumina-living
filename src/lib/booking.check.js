// Self-check logika booking. Jalankan: node src/lib/booking.check.js
import assert from "node:assert/strict";
import { emptyForm, minDate, toISODate, validate } from "./booking.js";

const validForm = {
  ...emptyForm,
  name: "Budi Santoso",
  email: "budi@email.com",
  date: "2099-01-15",
  slot: "morning",
};

// Form lengkap & valid → tanpa error.
assert.deepEqual(validate(validForm), {});

// Setiap field wajib kosong → semua error kecuali notes.
assert.deepEqual(Object.keys(validate(emptyForm)).sort(), [
  "date",
  "email",
  "name",
  "slot",
]);

// Format email salah.
assert.equal(validate({ ...validForm, email: "buku-at" }).email, "Format email tidak valid.");

// Tanggal lampau (sebelum minDate) ditolak; minDate sendiri diterima.
assert.equal(validate({ ...validForm, date: "2000-01-01" }).date, "Tanggal peninjauan minimal besok.");
assert.deepEqual(validate({ ...validForm, date: minDate }), {});

// toISODate selalu menghasilkan YYYY-MM-DD dua digit.
assert.match(toISODate(new Date(2026, 0, 5)), /^2026-01-05$/);

console.log("booking.check.js: semua asertasi lulus.");
