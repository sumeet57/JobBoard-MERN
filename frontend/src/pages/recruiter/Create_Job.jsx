import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Create_Job = () => {
  const navigate = useNavigate();

  const publisher = localStorage.getItem("recruiterid");

  const handleSubmit = async (e) => {
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
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [salary, setSalary] = useState("");

  return (
    <>
       <div className="w-full h-screen pt-24">
            <div className="bg-[var(--pri)] flex h-fit items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-2xl space-y-8">
                    <div className="bg-white shadow-md rounded-md p-6">
                        <h2 className="my-3 text-center text-2xl font-bold tracking-tight text-gray-900">
                            Application Update
                        </h2>
                        <form className="space-y-6" method="POST">
                            <div className="box grid gap-2">
                                <input
                                    name="title"
                                    type="text"
                                    id=""
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="px-2 py-3 mt-1 w-full border-[1px] border-[var(--pri)] placeholder-gray-600 resize-none shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                    placeholder="Write Your title here"
                                />
                                <input
                                    name="comapny"
                                    type="text"
                                    id=""
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    className="px-2 py-3 mt-1 w-full border-[1px] border-[var(--pri)] placeholder-gray-600 resize-none shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                    placeholder="Write Your company here"
                                />
                                <textarea
                                    name="experience"
                                    id=""
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="px-2 py-3 mt-1 w-full border-[1px] border-[var(--pri)] placeholder-gray-600 resize-none shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                    placeholder="Write Description here"
                                    minLength={10}
                                    maxLength={120}
                                    rows={4}
                                ></textarea>

                                
                            </div>

                            <div className="box grid gap-2">
                                <input
                                    name="city"
                                    type="text"
                                    id=""
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="px-2 py-3 mt-1 w-full border-[1px] border-[var(--pri)] placeholder-gray-600 resize-none shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                    placeholder="Enter City here"
                                />
                                <input
                                    name="comapny"
                                    type="text"
                                    id=""
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="px-2 py-3 mt-1 w-full border-[1px] border-[var(--pri)] placeholder-gray-600 resize-none shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                    placeholder="Enter Country here"
                                />
                                <input
                                    name="salary"
                                    type="text"
                                    id=""
                                    value={salary}
                                    onChange={(e) => setSalary(e.target.value)}
                                    className="px-2 py-3 mt-1 w-full border-[1px] border-[var(--pri)] placeholder-gray-600 resize-none shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                    placeholder="Enter Salary here"
                                />
                                

                                
                            </div>



                            <div className="box grid gap-2">
                                <input
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value.split(",").map(skill => skill.trim()))}
                                    type="text"
                                    required
                                    placeholder="Enter your skills (separated by comma)"
                                    className="px-2 py-3 mt-1 block w-full border-[1px] border-[var(--pri)] placeholder-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                                <input
                                    value={education}
                                    onChange={(e) => setEducation(e.target.value.split(",").map(edu => edu.trim()))}
                                    type="text"
                                    required
                                    placeholder="Degree (e.g. B.Tech) (separated by comma)"
                                    className="px-2 py-3 mt-1 block w-full border-[1px] border-[var(--pri)] placeholder-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                                <input
                                    name="website"
                                    type="text"
                                    id=""
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                    className="px-2 py-3 mt-1 w-full border-[1px] border-[var(--pri)] placeholder-gray-600 resize-none shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                    placeholder="Company Website link"
                                />
                                
                            </div>

                            <p className="message text-red-500 font-medium capitalize"></p>

                            <div>
                                <button
                                onClick={handleSubmit}
                                    type="submit"
                                    className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Create_Job;
