import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { emptyForm, formatDate, minDate, timeSlots, validate } from "../../lib/booking";
import FilterChips from "../shared/FilterChips";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

const inputClasses =
  "w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

const Field = ({ id, label, error, children }) => (
  <div>
    <label
      htmlFor={id}
      className="mb-1.5 block text-sm font-medium text-foreground"
    >
      {label}
    </label>
    {children}
    {error && (
      <p role="alert" className="mt-1 text-xs text-destructive">
        {error}
      </p>
    )}
  </div>
);

const BookingModal = ({ isOpen, onClose, property }) => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState(null);

  const close = () => {
    setForm(emptyForm);
    setErrors({});
    setConfirmation(null);
    onClose();
  };

  const update = (key) => (value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setConfirmation({
      name: form.name.trim(),
      email: form.email.trim(),
      date: form.date,
      slot: form.slot,
    });
  };

  const slotLabel = timeSlots.find((slot) => slot.value === confirmation?.slot);

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      title={confirmation ? "Peninjauan Terjadwal" : "Jadwalkan Peninjauan"}
      footer={
        confirmation ? (
          <Button type="button" onClick={close} className="w-full">
            Selesai
          </Button>
        ) : (
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={close}>
              Batal
            </Button>
            <Button type="submit" form="booking-form">
              Ajukan Jadwal
            </Button>
          </div>
        )
      }
    >
      {confirmation ? (
        <div className="animate-empty-fade-in space-y-4 text-center">
          <CheckCircle2
            size={48}
            className="mx-auto text-primary"
            aria-hidden
          />
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Permintaan peninjauan terkirim
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Kami akan menghubungi Anda lewat email untuk konfirmasi akhir.
            </p>
          </div>
          <dl className="space-y-2 rounded-lg border border-border bg-background p-4 text-left text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Properti</dt>
              <dd className="font-medium text-foreground">
                {property?.name}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Nama</dt>
              <dd className="font-medium text-foreground">
                {confirmation.name}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Tanggal</dt>
              <dd className="font-medium text-foreground">
                {formatDate(confirmation.date)}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Slot waktu</dt>
              <dd className="font-medium text-foreground">
                {slotLabel?.label}
              </dd>
            </div>
          </dl>
        </div>
      ) : (
        <form
          id="booking-form"
          onSubmit={handleSubmit}
          noValidate
          className="space-y-4"
        >
          <Field id="booking-name" label="Nama Lengkap" error={errors.name}>
            <input
              id="booking-name"
              type="text"
              value={form.name}
              onChange={(event) => update("name")(event.target.value)}
              placeholder="Nama Anda"
              className={inputClasses}
            />
          </Field>

          <Field id="booking-email" label="Email" error={errors.email}>
            <input
              id="booking-email"
              type="email"
              value={form.email}
              onChange={(event) => update("email")(event.target.value)}
              placeholder="nama@email.com"
              className={inputClasses}
            />
          </Field>

          <Field id="booking-date" label="Tanggal Peninjauan" error={errors.date}>
            <input
              id="booking-date"
              type="date"
              value={form.date}
              min={minDate}
              onChange={(event) => update("date")(event.target.value)}
              className={inputClasses}
            />
          </Field>

          <div>
            <span className="mb-1.5 block text-sm font-medium text-foreground">
              Slot Waktu
            </span>
            <FilterChips
              options={timeSlots}
              selected={form.slot}
              onChange={update("slot")}
            />
            {errors.slot && (
              <p role="alert" className="mt-1 text-xs text-destructive">
                {errors.slot}
              </p>
            )}
          </div>

          <Field id="booking-notes" label="Catatan (opsional)">
            <textarea
              id="booking-notes"
              rows={3}
              value={form.notes}
              onChange={(event) => update("notes")(event.target.value)}
              placeholder="Hal yang ingin Anda tanyakan saat peninjauan"
              className={`${inputClasses} resize-none`}
            />
          </Field>
        </form>
      )}
    </Modal>
  );
};

export default BookingModal;
