/* eslint-disable @next/next/no-img-element */
"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import experiences from "@/constants/experience";

type ExperienceCardProps = {
  experience: ExperienceType;
  inView: boolean;
};

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <>
      <section className="w-full flex flex-col justify-start items-center">
        <div className="w-full flex justify-center items-center mt-32 xl:mt-64">
          <h3 className="text-white font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Work <span className="text-purple">Experience</span>
          </h3>
        </div>
        <VerticalTimeline lineColor={inView ? "#ffff" : ""}>
          {experiences.map((experience, index) => {
            return (
              <div
                key={index}
                ref={ref}
                className="vertical-timeline-element mt-20 flex flex-col"
              >
                <ExperienceCard
                  key={`experience-${index}`}
                  experience={experience}
                  inView={inView}
                />
              </div>
            );
          })}
        </VerticalTimeline>
      </section>
    </>
  );
};
export default Experience;

const ExperienceCard = ({ experience, inView }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      visible={inView}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-gray-400 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
