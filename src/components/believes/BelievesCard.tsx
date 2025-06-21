import React from "react";

interface Props {}

const BelievesCard = ({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="bg-white  shadow w-full px-3 py-4 rounded-lg">
      <p className="bg-[#474546] px-3 text-white py-1  rounded-full w-fit">1</p>
      <img className="mt-6 rounded-lg" src={image} />
      <p className="text-xl font-semibold mt-3 text-black">{title}</p>
      <p className="mt-4 text-black">{desc}</p>
    </div>
  );
};

export default BelievesCard;
