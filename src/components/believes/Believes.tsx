import React from "react";
import BelievesCard from "./BelievesCard";

interface DummyBelieves {
  title: string;
  image: string;
  desc: string;
}

export const dummyBelieves: DummyBelieves[] = [
  {
    title: "Sustainability",
    image: "/images/earth.png",
    desc: "We ensure that every step of our process minimizes environmental impact and promotes long-term ecological balance. ",
  },
  {
    title: "Quality Commitment",
    image: "/images/quality (1).png",
    desc: "We are dedicated to delivering only the highest quality coconut-based products through stringent control and certified standards.",
  },
  {
    title: "Empowering Communities",
    image: "/images/care (1).png",
    desc: "We collaborate with local farmers and communities to ensure fair trade, support livelihoods, and build sustainable partnerships.",
  },
  {
    title: "Innovation and Integrity ",
    image: "/images/project-management (1).png",
    desc: "We continuously improve our processes with integrity, blending tradition and technology to meet the evolving global demand. ",
  },
];

const Believes = () => {
  return (
    <div className="lg:w-[1280px] w-11/12 mx-auto mt-52">
      <h1 className="text-left justify-start flex font-semibold text-3xl text-black">
        Our Believes
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
        {dummyBelieves.map((believe, idx) => (
          <div className="mx-auto">
            <BelievesCard
              key={idx}
              title={believe.title}
              image={believe.image}
              desc={believe.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Believes;
