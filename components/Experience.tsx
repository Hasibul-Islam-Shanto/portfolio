"use client";
import { MdOutlineWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-start items-center">
        <h1 className="text-3xl mt-5">Experience</h1>
        <VerticalTimeline className="" animate={true}>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: " rgb(2,0,36)",
              backgroundColor:
                "linear-gradient(90deg, rgba(2,0,36,1) 29%, rgba(50,5,105,1) 93%)",
              color: "#fff",
              border: ".5px solid  rgba(50,5,105,1)",
            }}
            contentArrowStyle={{
              borderRight: "15px solid   rgba(50,5,105,1)",
            }}
            date="Jan 1, 2024 - present"
            iconStyle={{
              background: " rgb(2,0,36)",
              backgroundColor:
                "linear-gradient(90deg, rgba(2,0,36,1) 29%, rgba(50,5,105,1) 93%)",
              color: "#fff",
            }}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
