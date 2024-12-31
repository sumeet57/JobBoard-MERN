import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const View_Job = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const param = useParams();

  const userid = localStorage.getItem("userid");

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

  const applyJob = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/jobs/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jobid: param.id , userid }),
      });
      const data = await res.json();
      if (res.status === 200) {
        document.querySelector('.message').innerText = data.message;
        document.querySelector('.messsagebox').style.display = 'flex';
      } else {
        document.querySelector('.message').innerText = data.message;
        document.querySelector('.messsagebox').style.display = 'flex';
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full pt-24 p-4 text-[var(--pri)] flex justify-center">
        <div className="w-full max-w-2xl bg-[var(--sec)] p-3 rounded-xl">
          <h1 className="text-xl capitalize py-1 border-b-2 border-black">{data.title}</h1>
          <div className="text-lg mb-2 mt-4">
            <h2 className="font-semibold capitalize">
              {data.company}
            </h2>
            <p className="">
              {data.city}, {data.country}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">
              Job Description :
            </h3>
            <p className="">{data.description}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Eligible :</h3>
            <ul className="list-disc list-inside flex ">
              {data?.education?.map((edu, index) => (
                <li key={index} className="list-none capitalize">{edu}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">
              Skills required :
            </h3>
            <ul className="list-disc list-insid flex gap-2">
              {data?.skills?.map((skill, index) => (
                <li key={index} className="list-none capitalize">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold ">Salary :</h3>
            <p className="">{data.salary}</p>
          </div>
          {userid !== null ? (
          <div className="border-t-4 border-black pt-7">
          <button onClick={applyJob} className="bg-[var(--pri)] text-[var(--sec)] p-2 rounded-md">
            apply now
          </button>
        </div>
        ) : (
          ''
        )}

          <div className="bg-[var(--pri)] w-[200px] h-[200px] rounded-xl text-[var(--sec)] messsagebox absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] hidden flex-col justify-around items-center capitalize text-xl">
            <h3 className="message"></h3>
            <button 
              onClick={() => {document.querySelector('.messsagebox').style.display = 'none'; navigate('/')}}
              className="bg-[var(--sec)] text-[var(--pri)] p-2 rounded-md">OK</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default View_Job;
