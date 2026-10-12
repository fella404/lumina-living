import { useState } from "react";
import { Link, useParams } from "react-router";
import {
  AirVent,
  ArrowLeft,
  ArrowUpDown,
  Bath,
  Bed,
  Building2,
  CalendarDays,
  Car,
  CookingPot,
  Dumbbell,
  Fence,
  MapPin,
  Maximize2,
  ShieldCheck,
  Shirt,
  ShowerHead,
  Sofa,
  Sparkles,
  Sun,
  Trees,
  UtensilsCrossed,
  Waves,
  Wifi,
} from "lucide-react";
import { properties } from "../data/properties";
import { statusLabels, typeLabels } from "../lib/propertyFilters";
import { formatRupiah } from "../lib/utils";
import BookingModal from "../components/properties/BookingModal";
import PropertyGallery from "../components/properties/PropertyGallery";
import PropertyGrid from "../components/shared/PropertyGrid";
import Button from "../components/ui/Button";

const amenityIcons = {
  Carport: Car,
  Taman: Trees,
  "Security 24 Jam": ShieldCheck,
  "Kolam Renang": Waves,
  Gym: Dumbbell,
  Lift: ArrowUpDown,
  "Fully Furnished": Sofa,
  WiFi: Wifi,
  "Water Heater": ShowerHead,
  "One Gate System": Fence,
  "Club House": Building2,
  Balkon: Sun,
  "Dapur Pembantu": UtensilsCrossed,
  Laundry: Shirt,
  AC: AirVent,
  Pantry: CookingPot,
};

const furnishingLabels = {
  furnished: "Fully Furnished",
  partial: "Semi Furnished",
  unfurnished: "Unfurnished",
};

const SpecItem = ({ icon: Icon, label, value }) => (
  <div className="rounded-lg border border-border bg-background p-3">
    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <Icon size={14} aria-hidden />
      {label}
    </span>
    <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
  </div>
);

const PropertyDetailPage = () => {
  const { slug } = useParams();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-4 py-12 text-center sm:px-6">
        <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Properti tidak ditemukan
        </h1>
        <p className="mt-2 text-muted-foreground">
          Properti yang Anda cari tidak ada atau sudah tidak tersedia.
        </p>
        <Button to="/properties" variant="primary" size="lg" className="mt-6">
          <ArrowLeft size={16} aria-hidden />
          Kembali ke Properties
        </Button>
      </main>
    );
  }

  const images = [property.image, ...property.gallery];
  const similar = properties
    .filter(
      (item) =>
        item.id !== property.id &&
        (item.type === property.type || item.region === property.region),
    )
    .slice(0, 4);

  const priceLabel = `${formatRupiah(property.price)}${
    property.status === "rent" ? " / tahun" : ""
  }`;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <Link
        to="/properties"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} aria-hidden />
        All Properties
      </Link>

      <header className="mt-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-medium capitalize text-primary-foreground">
            {typeLabels[property.type]}
          </span>
          <span className="rounded-full bg-card px-2.5 py-1 text-xs font-medium text-card-foreground shadow-card">
            {statusLabels[property.status]}
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
          {property.name}
        </h1>
        <p className="mt-2 flex items-center gap-1.5 text-muted-foreground">
          <MapPin size={16} aria-hidden />
          {property.city}, {property.region}
        </p>
      </header>

      <div className="mt-8">
        <PropertyGallery images={images} name={property.name} />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              About This Property
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {property.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Spesifications
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <SpecItem
                icon={Bed}
                label="Bedroom"
                value={property.bedrooms}
              />
              <SpecItem
                icon={Bath}
                label="Bathroom"
                value={property.bathrooms}
              />
              <SpecItem
                icon={Maximize2}
                label="Land Area"
                value={`${property.area} m²`}
              />
              <SpecItem
                icon={CalendarDays}
                label="Year Built"
                value={property.yearBuilt}
              />
              <SpecItem icon={Car} label="Carport" value={property.carport} />
              <SpecItem
                icon={Sofa}
                label="Furnishing"
                value={furnishingLabels[property.furnishing]}
              />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Features & Facilities
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {property.amenities.map((amenity) => {
                const Icon = amenityIcons[amenity] ?? Sparkles;
                return (
                  <li
                    key={amenity}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <Icon
                      size={16}
                      className="shrink-0 text-primary"
                      aria-hidden
                    />
                    {amenity}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>

        <aside className="self-start rounded-2xl border border-border bg-card p-5 shadow-card lg:sticky lg:top-24">
          <p className="text-sm text-muted-foreground">Price</p>
          <p className="mt-1 text-xl font-semibold text-foreground">
            {priceLabel}
          </p>

          <Button
            type="button"
            size="lg"
            className="mt-4 w-full"
            onClick={() => setIsBookingOpen(true)}
          >
            <CalendarDays size={16} aria-hidden />
            Schedule a Tour
          </Button>

          <dl className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Type</dt>
              <dd className="font-medium capitalize text-foreground">
                {typeLabels[property.type]}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Status</dt>
              <dd className="font-medium text-foreground">
                {statusLabels[property.status]}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Location</dt>
              <dd className="font-medium text-foreground">
                {property.city}, {property.region}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Carport</dt>
              <dd className="font-medium text-foreground">
                {property.carport} car
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      {similar.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            Similiar Property
          </h2>
          <PropertyGrid properties={similar} className="mt-6" />
        </section>
      )}

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        property={property}
      />
    </main>
  );
};

export default PropertyDetailPage;
