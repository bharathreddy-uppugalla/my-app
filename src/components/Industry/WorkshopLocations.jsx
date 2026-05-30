import React, { useState } from "react";
import { MapPin } from "lucide-react";

const locations = [
  {
    city: "Adelaide",
    address: "Innovation House, 50 Mawson Lakes Blvd, Mawson Lakes SA 5095",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    flagship: true,
  },
  {
    city: "Melbourne",
    address: "Level 12, 120 Spencer Street, Melbourne VIC 3000",
    image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&q=80",
    flagship: false,
  },
  {
    city: "Sydney",
    address: "Ground Floor, 7 Macquarie Place, Sydney NSW 2000",
    image: "https://images.unsplash.com/photo-1524293568345-75d62c3664f7?w=600&q=80",
    flagship: false,
  },
  {
    city: "Brisbane",
    address: "Level 9, 295 Ann Street, Brisbane QLD 4000",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    flagship: false,
  },
  {
    city: "Online / Virtual",
    address: "Live virtual sessions via Zoom & Teams — attend from anywhere",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    flagship: false,
    virtual: true,
  },
];

// Brand gradient palette per location card
const gradients = [
  "linear-gradient(135deg, #6918DC, #B625B9)",
  "linear-gradient(135deg, #B625B9, #E94B6C)",
  "linear-gradient(135deg, #E94B6C, #F6A83D)",
  "linear-gradient(135deg, #6918DC, #E94B6C)",
  "linear-gradient(135deg, #F6A83D, #B625B9)",
];

function LocationCard({ location, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group rounded-2xl overflow-hidden bg-white transition-all duration-300 flex flex-col cursor-pointer"
      style={{
        border: "1.5px solid #ebebf0",
        boxShadow: hovered
          ? "0 16px 48px rgba(105,24,220,0.14)"
          : "0 2px 10px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={location.image}
          alt={location.city}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

        {location.flagship && (
          <span
            className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white"
            style={{ background: gradients[0] }}
          >
            Head Office
          </span>
        )}
        {location.virtual && (
          <span
            className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white"
            style={{ background: gradients[4] }}
          >
            Virtual
          </span>
        )}
      </div>

      {/* Gradient bar */}
      <div className="h-[3px]" style={{ background: gradients[index % gradients.length] }} />

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p
          className="text-sm font-extrabold uppercase tracking-widest"
          style={{
            background: gradients[index % gradients.length],
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {location.city}
        </p>
        <div className="flex items-start gap-2">
          <MapPin size={13} className="flex-shrink-0 mt-0.5 text-gray-400" />
          <p className="text-xs text-gray-500 font-medium leading-relaxed">{location.address}</p>
        </div>
      </div>
    </div>
  );
}

export default function WorkshopLocations() {
  return (
    <section className="py-20 bg-gray-50 font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-pink mb-2">
            Where We Deliver
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            Locations Across Australia
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Attend a workshop at one of our campuses or join live virtual sessions from anywhere.
          </p>
          <div className="w-16 h-1 bg-brand-gradient rounded-full mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {locations.map((loc, i) => (
            <LocationCard key={loc.city} location={loc} index={i} />
          ))}
        </div>

        {/* On-site CTA */}
        <div className="mt-12 rounded-2xl p-8 text-white text-center"
          style={{ background: "linear-gradient(135deg, #6918DC 0%, #B625B9 50%, #E94B6C 100%)" }}>
          <h3 className="text-xl font-extrabold mb-2">Want workshops delivered at your workplace?</h3>
          <p className="text-white/80 text-sm mb-5">
            We bring the training to you — tailored programs run on-site at your business.
          </p>
          <button className="bg-white text-brand-purple font-bold px-8 py-3 rounded-full hover:scale-105 transition text-sm">
            Enquire about On-site Delivery
          </button>
        </div>

      </div>
    </section>
  );
}
