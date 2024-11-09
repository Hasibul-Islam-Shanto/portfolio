"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../constants/projects";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { HoverEffect } from "./ui/CardHoverEffect";

const Projects = () => {
  return (
    <>
      <div className="py-20 w-full">
        <h1 className="heading">
          My <span className="text-purple">Projects</span>
        </h1>
        <HoverEffect items={projects} />

        <div className="w-full flex justify-center items-center">
          <Link href="https://github.com/Hasibul-Islam-Shanto" target="blank">
            <MagicButton
              title="Show More On -->"
              icon={<FaGithub className="h-6 w-6" />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
