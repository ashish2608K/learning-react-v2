import React  from "react";
import { useState , useEffect} from "react";
const API = "http://localhost:5000";

export default function SeasonsTreks() {
  const seasons = [
    { id: 1, name: "Winter", months: "Dec – Mar", tagline: "Snow trails. Frozen lakes.", image: "/images/seasons/winter.jpg" },
    { id: 2, name: "Summer", months: "May – Jun", tagline: "Green meadows. High passes.", image: "/images/seasons/summer.jpg" },
    { id: 3, name: "Monsoon", months: "Jul – Aug", tagline: "Flower valleys. Misty ridges.", image: "/images/seasons/monsoon.jpg" },
  ];

  return (
    <section className="py-[80px] bg-[#F4F1EC]">
      <div className="custom-container">

        {/* HEADER */}
        <div className="flex flex-col gap-[24px] lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-[12px] text-[12px] font-medium uppercase tracking-[0.2em] text-[#2F6B3A]">
              Choose your season
              <span className="block h-px w-[60px] bg-[#2F6B3A]" />
            </div>
            <h2 className="mt-[10px] text-[48px] font-bold leading-[1.1] text-[#111111]">
              Trek in your <span className="text-[#2F6B3A]">favourite season</span>
            </h2>
          </div>

          <p className="max-w-[420px] text-[16px] text-[#5C5C5C]">
            Every Himalayan season gives a different trek: snow summits in winter,
            green meadows in summer, and flower valleys after the rains.
          </p>

          <a href="#treks" className="inline-flex items-center gap-[10px] border-b border-[#111111] pb-[2px] text-[13px] font-semibold uppercase tracking-[0.1em] text-[#111111]">
            View all <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* CARDS */}
        <div className="mt-[40px] grid grid-cols-3 gap-[20px] md:grid-cols-2 xl:grid-cols-3">
          {seasons.map((season) => (
            <a
              key={season.id}
              href="#treks"
              className="group relative block aspect-[4/5] overflow-hidden rounded-[8px]"
            >
              {/* 👉 YOUR LOGIC: the database stores only the path, so use API + season.image */}
              <img
                src={API + season.image}
                alt={season.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* dark gradient so the text is readable */}
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),rgba(0,0,0,0.05)_60%)]" />

              <div className="absolute inset-x-[24px] bottom-[24px] flex items-end justify-between text-white">
                <div>
                  <h3 className="text-[30px] font-semibold leading-[1.1]">{season.name}</h3>
                  <div className="mt-[6px] text-[11px] font-medium uppercase tracking-[0.15em] text-white/80">
                    {season.months}
                  </div>
                  <p className="mt-[10px] text-[15px] text-white/90">{season.tagline}</p>
                </div>

                <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-white/80 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}