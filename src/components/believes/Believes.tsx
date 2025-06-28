import React from "react";
import BelievesCard from "./BelievesCard";

interface DummyBelieves {
  id: number;
  title: string;
  image: string;
  desc: string;
}

const dummyBelieves: DummyBelieves[] = [
  {
    id: 1,
    title: "Sustainability",
    image: "/images/earth.png",
    desc: "We ensure that every step of our process minimizes environmental impact and promotes long-term ecological balance.",
  },
  {
    id: 2,
    title: "Quality Commitment",
    image: "/images/quality (1).png",
    desc: "We are dedicated to delivering only the highest quality coconut-based products through stringent control and certified standards.",
  },
  {
    id: 3,
    title: "Empowering Communities",
    image: "/images/care (1).png",
    desc: "We collaborate with local farmers and communities to ensure fair trade, support livelihoods, and build sustainable partnerships.",
  },
  {
    id: 4,
    title: "Innovation and Integrity",
    image: "/images/project-management (1).png",
    desc: "We continuously improve our processes with integrity, blending tradition and technology to meet the evolving global demand.",
  },
];

const Believes = () => {
  return (
    <div className="lg:w-[1280px] w-11/12 mx-auto mt-52">
      <h1 className="text-left font-semibold text-3xl text-black mb-4">
        Our Believes
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {dummyBelieves.map((believe) => (
          <div key={believe.id} className="mx-auto">
            <BelievesCard
              title={believe.title}
              image={believe.image}
              desc={believe.desc}
              id={believe.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Believes;