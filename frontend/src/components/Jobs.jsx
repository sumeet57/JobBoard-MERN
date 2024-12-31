import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/jobs/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        if (res.status === 200) {
          setData(data.jobs);
        } else {
          console.log(data.error);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, []);

  // console.log(data);

  return (
    <>
      <div className="content w-full h-screen text-black">
        <div className="cont flex flex-col gap-2 py-4">
          {Array.isArray(data) &&
            data.map((job) => (
              <div
                key={job._id}
                onClick={() => navigate(`/job/${job._id}`)}
                className="job bg-[var(--box)] p-2 flex flex-col gap-2"
              >
                <h1 className="text-[1.5vw]">{job.title}</h1>
                <p className="text-[1vw]">
                  {job.city}, {job.country}
                </p>
                <p className="text-[1vw]">{job.salary}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
