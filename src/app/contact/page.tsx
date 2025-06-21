import ContactForm from "@/components/contact/ContactForm";
import React from "react";

interface Props {}

const page = (props: Props) => {
  return (
    <div className="bg-[url('/images/contac.png')] bg-cover bg-center min-h-full w-full ">
      <div className="bg-black/60">
        <div className="pt-12 text-center space-y-3 text-white font-bold">
          <p className="text-xl">GET IN TOUCH WITH BATAM DWI COCONUT!</p>
          <p className="text-[#D7F1EC] text-3xl">
            Serve Nature's Best – Pure Coconut, Pure Pleasure
          </p>
          <p className="text-xl font-normal">
            Please fill in the forms if you have any enquiries for us.
            <br />
            We are open for trade and collaboration opportunities!
          </p>
        </div>
        <div className="mx-auto w-full mt-5 pb-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
