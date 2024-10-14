import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";
import Social from "./social";
import Photo from "./photo";

const Angel = () => {
  return (
    <section className="w-full pt-40">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between gap-10 xl:flex-row xl:pt-8 ">
          {/* text */}
          <div className="text-center  xl:text-left ">
            <span>Hello I'm </span>
            <h1 className="text-[40px] font-bold leading-[3rem]">
              Manasa <br />
              <span className="under-line ">Peram</span>
            </h1>
            <div className="py-8">
            <p>
            Fullstack Developer with 2 years of experience in designing, developing, and deploying scalable applications. Proficient in React, Next.js, Node.js, NestJS, SharePoint, and Microsoft Power Platform. Skilled at solving problems and delivering user-focused software, with a commitment to continuous learning and staying updated on industry trends.
            </p>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center xl:flex-row xl:justify-start ">
             <div className="flex gap-x-2">
               <Link href='https://res.cloudinary.com/ddg0boooa/image/upload/Manasa_resume_xmtutm.pdf' target="_blank" className="flex items-center space-x-2 rounded-full border-2 border-blue px-6 py-3 transition-all hover:bg-blue/80 text-blue  hover:text-lighted font-medium uppercase">
               <span className="text-sm">Download CV</span>
               <Download className="size-5"/>
               </Link>
             </div>
             <div className="flex py-4 ">
                <Social/>
             </div>
            </div>
          </div>
          {/* image */}
          <div>
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Angel;
