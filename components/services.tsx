"use client";
import AnimatedCounter from "@/lib/animatedCounter";
import FadeIn from "@/lib/variants";
import { motion } from "framer-motion";
import React from "react";

const Services = () => {
  return (
    <section id="Services" className="z-30 -translate-y-1 bg-secondary">
      <div className="container w-full py-[100px] lg:py-[200px]">
        <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0 ">
          <motion.div
            variants={FadeIn("right", 0.2)}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="flex full flex-col justify-between lg:mr-8 lg:w-1/2"
          >
            <h1 className="pb-4 text-[40px] font-bold leadin-[3rem]">
              What we do i help?
            </h1>
            <p>
              Specialize in providing comprehensive assistance and support
              across multiple areas, ensuring client needs are met efficiently.
              Focused on delivering solutions, overcoming challenges, and
              enhancing client satisfaction with a dedicated, client-centric
              approach.
            </p>
            <div className="flex justify-between space-x-4 py-8  ">
              <div className="flex flex-col items-center justify-center ">
                <p className="text-[10px] font-semibold uppercase"> Projects</p>
                <p className="text-[36px] font-bold text-blue ">
                  {" "}
                  + <AnimatedCounter from={0} to={10} />
                </p>
              </div>

              <div className="flex flex-col items-center justify-center ">
                <p className="text-[10px] font-semibold uppercase">
                  {" "}
                  satisfied client
                </p>
                <p className="text-[36px] font-bold text-blue ">6</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="flex h-full flex-col gap-8 ">
            <div className="flex items-center spac-x-6 bg-primary p-4">
              <p className="text-6xl font-bold text-blue">01</p>
              <div>
                <h2 className="mb-2 text-2xl font-bold">
                  Front-end development
                </h2>
                <p>
                  Experienced in transforming Figma designs into responsive web
                  apps using React and NextJS, Tailwind CSS. Dedicated to
                  delivering clean, user-friendly interfaces that are accessible
                  across all devices.
                </p>
              </div>
            </div>

            <div className="flex items-center spac-x-6 bg-primary p-4">
              <p className="text-6xl font-bold text-blue">02</p>
              <div>
                <h2 className="mb-2 text-2xl font-bold">
                  Back-end development
                </h2>
                <p>
                  Experienced in back-end development using Node.js with various
                  databases. Proficient in NestJS, having created multiple APIs
                  to support complex functionalities. I have implemented various
                  logic, including relationships and data management, and I find
                  back-end development to be highly rewarding.
                </p>
              </div>
            </div>

            <div className="flex items-center spac-x-6 bg-primary p-4">
              <p className="text-6xl font-bold text-blue">03</p>
              <div>
                <h2 className="mb-2 text-2xl font-bold">
                  Full Stack developer
                </h2>
                <p>
                  Experienced in full-stack development, utilizing React and
                  Next.js for responsive front-end applications, and Node.js
                  with NestJS for back-end API development. Passionate about
                  building efficient, user-friendly solutions and managing
                  complex data relationships.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
