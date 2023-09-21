import React from "react";

const Section = ({ title, subtitle, children, name }) => {
  return (
    <div>
      <h1 className="text-black" name={name}>
        .
      </h1>
      <section
        name={name}
        className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center"
      >
        <div className="font-bold text-4xl my-8 text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#263D72] to-[#94171a]  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl uppercase">
          {title}
        </div>

        <div className="max-w-xl font-light text-gray-500 mb-10 text-sm md:text-base">
          {subtitle}
        </div>

        {children}
      </section>
    </div>
  );
};

export default Section;
