import { useState } from "react";

const PropertyGallery = ({ images, name }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        <img
          src={images[activeIndex]}
          alt={`${name} — foto ${activeIndex + 1}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
          {activeIndex + 1} / {images.length}
        </span>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Tampilkan foto ${index + 1}`}
            aria-current={index === activeIndex}
            className={`aspect-video overflow-hidden rounded-lg border-2 transition-colors ${
              index === activeIndex
                ? "border-primary"
                : "border-border hover:border-primary/40"
            }`}
          >
            <img
              src={image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;
