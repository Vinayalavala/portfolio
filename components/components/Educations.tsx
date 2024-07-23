"use client";

import React from "react";
import { companies, Education } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const Clients = () => {
  return (
    <section id="Education" className="py-20">
      <div className="flex flex-col items-center max-lg:mt-10">
        <h1 className="heading">
        <span className="text-purple">Educational</span> Qualifications
        </h1>
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={Education}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;