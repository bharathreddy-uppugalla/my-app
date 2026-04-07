import React from "react";

import maynePharma from "../../images/companies/mayne.png";
import pwc from "../../images/companies/pwc.png";
import aurecon from "../../images/companies/auzecon.png";
import deloitte from "../../images/companies/deloitte.png";
import gba from "../../images/companies/gba.png";
import kiratech from "../../images/companies/kiratech.png";
import zooz from "../../images/companies/zooz.png";
import dialog from "../../images/companies/dialog.png";
import jlb from "../../images/companies/jlb.png";
import datalink from "../../images/companies/sant.png";
import ropePackaging from "../../images/companies/pope.png";
import govtSA from "../../images/companies/gov.png";
import aussie from "../../images/companies/aussie.png";
import solutions from "../../images/companies/sol.png";
import redarc from "../../images/companies/redarc.png";
import clam from "../../images/companies/clam.png";
import relationshipsAustralia from "../../images/companies/rasa.png";
import boomerang from "../../images/companies/boom.png";
import kptech from "../../images/companies/kptech.png";
import cfs from "../../images/companies/cfs.png";
import taxStore from "../../images/companies/tax.png";
import kompleteCare from "../../images/companies/komp.png";
import equals from "../../images/companies/equal.png";

const COMPANIES = [
  { name: "Mayne Pharma", logo: maynePharma },
  { name: "PwC", logo: pwc },
  { name: "Aurecon", logo: aurecon },
  { name: "Deloitte", logo: deloitte },
  { name: "GBA Projects", logo: gba },
  { name: "Kiratech", logo: kiratech },
  { name: "ZOOZ Group", logo: zooz },
  { name: "Dialog IT", logo: dialog },
  { name: "JLB", logo: jlb },
  { name: "SA·NT DataLink", logo: datalink },
  { name: "Rope Packaging", logo: ropePackaging },
  { name: "Govt of SA", logo: govtSA },
  { name: "Aussie", logo: aussie },
  { name: "Solutions to Success", logo: solutions },
  { name: "REDARC", logo: redarc },
  { name: "CLAM Adelaide", logo: clam },
  { name: "Relationships Australia", logo: relationshipsAustralia },
  { name: "Boomerang IES", logo: boomerang },
  { name: "KP Tech", logo: kptech },
  { name: "CFS", logo: cfs },
  { name: "Tax Store", logo: taxStore },
  { name: "KompleteCare", logo: kompleteCare },
  { name: "Equals International", logo: equals },
];

const TRACK = [...COMPANIES, ...COMPANIES];

export default function Landjobs() {
  return (
    <section className="relative py-20 bg-brand-white overflow-hidden font-body">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-h1 font-extrabold text-brand-dark">
          Where Our{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Students
          </span>{" "}
          Have Landed Jobs
        </h2>

        <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-brand-gradient"></div>
      </div>

      {/* Row 1 */}
      <div className="relative mb-6">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-white to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-6">
          {TRACK.map((co, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[160px] h-[90px] px-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <img
                src={co.logo}
                alt={co.name}
                className="max-h-[60px] object-contain transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-white to-transparent z-10" />

        <div className="flex w-max animate-marquee-reverse gap-6">
          {[...TRACK].reverse().map((co, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[160px] h-[90px] px-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <img
                src={co.logo}
                alt={co.name}
                className="max-h-[60px] object-contain transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-14">
        <p className="text-sm tracking-widest uppercase text-gray-400 mb-6">
          {COMPANIES.length}+ Companies & Growing
        </p>

        <button className="flex items-center gap-3 px-8 py-3.5 mx-auto rounded-full text-white font-bold bg-brand-gradient shadow-lg hover:scale-105 transition">
          JOIN NOW
        </button>
      </div>
    </section>
  );
}