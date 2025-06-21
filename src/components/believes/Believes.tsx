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
    image: "/images/productbg.png",
    desc: "We make sure all our processes leave as little carbon footprint as possible. ",
  },
  {
    title: "Sustainability",
    image: "/images/productbg.png",
    desc: "We make sure all our processes leave as little carbon footprint as possible. ",
  },
  {
    title: "Sustainability",
    image: "/images/productbg.png",
    desc: "We make sure all our processes leave as little carbon footprint as possible. ",
  },
  {
    title: "Sustainability",
    image: "/images/productbg.png",
    desc: "We make sure all our processes leave as little carbon footprint as possible. ",
  },
];

const Believes = () => {
  return (
    <div className="lg:w-[1280px] w-11/12 mx-auto mt-52">
      <h1 className="text-left justify-start flex font-semibold text-3xl">
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
