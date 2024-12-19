import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const View_Job = () => {
  const [data, setData] = useState({});

  const param = useParams();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/jobs/byId", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: param.id }),
        });
        const data = await res.json();
        if (res.status === 200) {
          // console.log(data.job);
          setData(data.job);
        } else {
          console.log(data.error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
  }, [param.id]);

  console.log(data.title);

  return (
    <>
      <div className="pt-24 p-4 bg-[var(--sec)] text-[var(--pri)] shadow-md rounded-md">
        <h1 className="">{data.title}</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {data.company}
          </h2>
          <p className="text-gray-600">{data.location}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">Job Description</h3>
          <p className="text-gray-600">{data.description}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">Requirements</h3>
          <ul className="list-disc list-inside text-gray-600">
            {data.requirements &&
              data.requirements.map((req, index) => <li key={index}>{req}</li>)}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">Salary</h3>
          <p className="text-gray-600">{data.salary}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">Contact</h3>
          <p className="text-gray-600">{data.contact}</p>
        </div>

        <div className="mt-5 border-t-4 border-black pt-7">
          <h2 className="capitalize font-bold py-4">
            Upload resume here to apply{" "}
          </h2>
          <input type="file" name="file" id="" />
          <br />
          <button className="bg-[var(--pri)] text-[var(--sec)] p-2 rounded-md mt-2">
            apply now
          </button>
        </div>
      </div>
    </>
  );
};

export default View_Job;
