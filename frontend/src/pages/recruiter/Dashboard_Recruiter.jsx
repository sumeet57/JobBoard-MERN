import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const Dashboard_Recruiter = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/recruiters/jobs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            publisher: localStorage.getItem("recruiterid"),
          }),
        });

        const data = await res.json();

        if (res.status === 200) {
          setData(data);
        } else {
          document.querySelector(".message").innerHTML = data.error;
        }
      } catch (error) {
        document.querySelector(".message").innerHTML = data.error;
      }
    };
    fetchJobs();
  }, []);
  return (
    <>
      {path === "/recruiter/dashboard" ? (
        <div className="w-full h-screen pt-24">
        <p className="message text-red-500"></p>
        <div className="cont flex flex-col gap-2 py-4">
          {Array.isArray(data) &&
            data.map((job) => (
              <div
                onClick={() => navigate(`/recruiter/dashboard/${job._id}`)}
                key={job.id}
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
      ) : (<Outlet />)}
    </>
  );
};

export default Dashboard_Recruiter;
