import React, { useState } from "react";

const Jobs = () => {
  const [data, setData] = useState([
    {
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      date: "1 day ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc",
      skill: ["React", "Node", "Express", "MongoDB"],
    },
    {
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      date: "1 day ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc",
      skill: ["React", "Node", "Express", "MongoDB"],
    },
    {
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      date: "1 day ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc",
      skill: ["React", "Node", "Express", "MongoDB"],
    },
    {
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      date: "1 day ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc",
      skill: ["React", "Node", "Express", "MongoDB"],
    },
    {
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      date: "1 day ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc",
      skill: ["React", "Node", "Express", "MongoDB"],
    },
  ]);

  return (
    <>
      <div className="content w-full h-screen text-black">
        <div className="cont flex flex-col gap-2 py-4">
          {data.map((data) => (
            <div key={data} className="bg-[var(--box)] m-2">
              <h1>{data.title}</h1>
              <div>
                <p>{data.company}</p>
                <p>{data.location}</p>
              </div>
              <div>
                {data.skill.map((skill) => (
                  <span key={skill}> {skill} </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
