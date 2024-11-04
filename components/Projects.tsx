/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../constants/projects";
import { Button } from "./ui/MovingBorder";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="py-20 w-full">
        <h1 className="heading">
          My <span className="text-purple">Projects</span>
        </h1>

        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {projects.map((item) => (
            <Button
              key={item.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex flex-col justify-start items-start hover:scale-95 transition-transform duration-400 ease-out"
            >
              <img
                src={item.img}
                alt={item.title}
                className="p-5 rounded-3xl"
              />
              <div className=" px-5 flex flex-col justify-start items-start space-y-2">
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <ul className="text-left text-[#BEC1DD] text-base space-y-2 py-2 list-disc px-3">
                  {item.description.map((des, index) => (
                    <li key={index}>{des}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full flex items-center justify-between py-2 px-5">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
                <Link
                  href={item.link}
                  className="flex justify-center items-center border-[1px] border-white/[.2] p-2 rounded-lg"
                >
                  <p className="flex lg:text-base md:text-xs text-sm text-purple">
                    Github Link
                  </p>
                  <FaGithub className="ms-3" color="#CBACF9" />
                </Link>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
