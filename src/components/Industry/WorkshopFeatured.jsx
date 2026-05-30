import React, { useState } from "react";
import { ArrowRight, Clock, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const workshops = [
  {
    title: "Managing People Effectively",
    desc: "Engage your staff, create meaningful relationships and facilitate team cohesion for lasting results.",
    duration: "2 Day Workshop",
    rating: 4.66,
    reviews: 112,
    seats: 20,
    tag: "Most Popular",
    gradient: "linear-gradient(135deg, #6918DC 0%, #B625B9 100%)",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    title: "Leading with Emotional Intelligence",
    desc: "Harness your own emotions and those of others to improve behaviour and performance.",
    duration: "2 Day Workshop",
    rating: 4.33,
    reviews: 87,
    seats: 18,
    tag: "High Demand",
    gradient: "linear-gradient(135deg, #B625B9 0%, #E94B6C 100%)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  },
  {
    title: "Project Management Fundamentals",
    desc: "Learn the essential knowledge and tools to effectively initiate, plan and manage projects.",
    duration: "2 Day Workshop",
    rating: 4.61,
    reviews: 95,
    seats: 15,
    tag: "Top Rated",
    gradient: "linear-gradient(135deg, #E94B6C 0%, #F6A83D 100%)",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
  },
  {
    title: "Communication for Impact",
    desc: "Build powerful communication skills that inspire action, build trust, and command the room.",
    duration: "1 Day Workshop",
    rating: 4.5,
    reviews: 74,
    seats: 22,
    tag: "New",
    gradient: "linear-gradient(135deg, #6918DC 0%, #F6A83D 100%)",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
  {
    title: "Strategic Business Planning",
    desc: "Develop clarity, confidence and a stronger strategy for business growth and long-term success.",
    duration: "3 Day Workshop",
    rating: 4.78,
    reviews: 63,
    seats: 12,
    tag: "Executive",
    gradient: "linear-gradient(135deg, #B625B9 0%, #6918DC 100%)",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&q=80",
  },
  {
    title: "Sales & Negotiation Mastery",
    desc: "Master the art of persuasion, objection handling, and closing deals with confidence.",
    duration: "2 Day Workshop",
    rating: 4.4,
    reviews: 58,
    seats: 16,
    tag: "Business",
    gradient: "linear-gradient(135deg, #F6A83D 0%, #E94B6C 100%)",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={13}
          fill={star <= Math.round(rating) ? "#F6A83D" : "none"}
          stroke="#F6A83D"
          strokeWidth={1.5}
        />
      ))}
      <span className="text-xs font-bold text-gray-700 ml-1">{rating.toFixed(2)}</span>
    </div>
  );
}

function WorkshopCard({ workshop }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group rounded-2xl overflow-hidden bg-white transition-all duration-300 flex flex-col"
      style={{
        border: "1.5px solid #ebebf0",
        boxShadow: hovered
          ? "0 20px 60px rgba(105,24,220,0.14)"
          : "0 2px 12px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={workshop.image}
          alt={workshop.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

        {/* Tag badge */}
        <span
          className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white"
          style={{ background: workshop.gradient }}
        >
          {workshop.tag}
        </span>
      </div>

      {/* Gradient top bar */}
      <div className="h-[3px]" style={{ background: workshop.gradient }} />

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <h3 className="font-extrabold text-[1rem] leading-snug text-[#1a0033]">
          {workshop.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">
          {workshop.desc}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
            <Clock size={13} />
            {workshop.duration}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
            <Users size={13} />
            {workshop.seats} seats left
          </div>
        </div>

        {/* Rating */}
        <StarRating rating={workshop.rating} />

        {/* CTA */}
        <Link to="/industry/workshops/enrol">
          <div
            className="mt-1 w-full flex items-center justify-center gap-2 py-2.5 rounded-full font-bold text-sm text-white transition-opacity duration-200"
            style={{
              background: workshop.gradient,
              opacity: hovered ? 0.88 : 1,
            }}
          >
            Enrol Now <ArrowRight size={14} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function WorkshopFeatured() {
  return (
    <section
      className="py-20 font-body"
      style={{ background: "linear-gradient(180deg, #f5f5fa 0%, #ffffff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-pink mb-2">
              Hand-picked for you
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Top Workshops at Visgrow
            </h2>
          </div>
          <Link
            to="/industry/workshops/all"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-purple hover:gap-3 transition-all"
          >
            View all 30+ workshops <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((w) => (
            <WorkshopCard key={w.title} workshop={w} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 text-sm mb-4">
            View the full range of over <strong className="text-gray-800">30 Workshops</strong>
          </p>
          <button className="px-8 py-3.5 rounded-full text-white font-bold bg-brand-gradient shadow-lg hover:scale-105 transition inline-flex items-center gap-2">
            Download Course Guide <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
