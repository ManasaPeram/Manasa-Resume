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
              We specialize in providing comprehensive assistance across various
              domains. Our commitment is to ensure that our clients receive the
              necessary support promptly and effectively. With a dedicated team
              and a client-centric approach, we strive to address challenges,
              deliver solutions, and enhance overall satisfaction.
            </p>
            <div className="flex justify-between space-x-4 py-8  ">
              <div className="flex flex-col items-center justify-center ">
                <p className="text-lg font-semibold uppercase"> Projects</p>
                <p className="text-[36px] font-bold text-blue ">
                  {" "}
                  + <AnimatedCounter from={0} to={20} />
                </p>
              </div>

              <div className="flex flex-col items-center justify-center ">
                <p className="text-lg font-semibold uppercase">
                  {" "}
                  satisfied client
                </p>
                <p className="text-[36px] font-bold text-blue "> 10</p>
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
                  Convert your Figma/XD design to full responsive web app with
                  react/next js or supabase or HTML with tailwind css
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
                  build your full web app with cutting-edge web development
                  technologies
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
