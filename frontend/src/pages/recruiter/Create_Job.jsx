import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Create_Job = () => {
  const navigate = useNavigate();

  const publisher = localStorage.getItem("recruiterid");

  const create = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/recruiters/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          company,
          city,
          country,
          website,
          description,
          skills,
          education,
          experience,
          salary,
          publisher,
        }),
      });

      const data = await res.json();
      if (res.status === 200) {
        navigate(`/job/${data.jobid}`);
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [website, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");

  return (
    <>
      <div className="cont w-full h-screen flex justify-center items-center bg-[var(--pri)] text-[var(--sec)]">
        <form
          action="#"
          className="w-[80%] h-fit p-2 bg-[var(--box)] rounded-2xl"
        >
          <input
            className="w-[300px] px-2 py-4  bg-transparent  text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter Title"
          />

          <input
            className="w[300px]l px-2 py-4 bg-transparent  text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="text"
            onChange={(e) => setCompany(e.target.value)}
            required
            placeholder="Enter Company"
          />
          <input
            className="w[300px]l px-2 py-4 bg-transparent  text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="text"
            onChange={(e) => setCity(e.target.value)}
            required
            placeholder="Enter City"
          />
          <input
            className="w[300px]l px-2 py-4 bg-transparent  text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="text"
            onChange={(e) => setCountry(e.target.value)}
            required
            placeholder="Enter Country"
          />
          <input
            className="w[300px]l px-2 py-4 bg-transparent  text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Enter Phone"
          />
          <input
            className="w[300px]l px-2 py-4 bg-transparent  text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter Description"
          />
          <input
            className="w[300px]l px-2 py-4 bg-transparent  text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="text"
            onChange={(e) => setSkills(e.target.value)}
            required
            placeholder="Enter Skills"
          />
          <input
            className="w[300px]l px-2 py-4 bg-transparent  text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="text"
            onChange={(e) => setEducation(e.target.value)}
            required
            placeholder="Enter Education"
          />
          <input
            className="w[300px]l px-2 py-4 bg-transparent  text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="text"
            onChange={(e) => setExperience(e.target.value)}
            required
            placeholder="Enter Experience"
          />
          <input
            className="w[300px]l px-2 py-4 bg-transparent  text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="text"
            onChange={(e) => setSalary(e.target.value)}
            required
            placeholder="Enter Salary"
          />

          <button
            onClick={create}
            className="w-fit px-6 py-3 rounded-3xl bg-[var(--sec)] text-black mt-5"
          >
            post Job
          </button>
        </form>
      </div>
    </>
  );
};

export default Create_Job;
