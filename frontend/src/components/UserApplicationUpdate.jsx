import React, {useState, useEffect} from "react";
import "../stylesheet/UserApplicationUpdate.css";
import { useNavigate } from "react-router-dom";

const UserApplicationUpdate = () => {
    const id = localStorage.getItem("userid");
    const data = JSON.parse(localStorage.getItem("profile"));
    const navigate = useNavigate();
  const [summary, setSummary] = useState(data?.user?.summary);
  const [experience, setExperience] = useState(data?.user?.experience);
  const [skills, setSkills] = useState(data?.user?.skills);
  const [education, setEducation] = useState(data?.user?.education);
  const [role, setRole] = useState(data?.user?.role);
  const [linkedin, setLinkedin] = useState(data?.user?.linkedin);
  const [github, setGithub] = useState(data?.user?.github);
  const [portfolio, setPortfolio] = useState(data?.user?.portfolio);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            id,
          summary,
          experience,
          skills,
          education,
          role,
          linkedin,
          github,
          portfolio,
        }),
      });
      const data = await res.json();
      if (res.status === 200) {
        localStorage.removeItem("profile");
        localStorage.setItem("profile", JSON.stringify(data.profile));
        navigate("/user/profile");
        document.querySelector(".message").innerHTML = data.message;
      } else {
        document.querySelector(".message").innerHTML = data.error;
      }
    } catch (error) {
      console.log(error);
    }
  };


return (
    <>
        <div className="w-full h-screen pt-24">
            <div className="bg-[var(--pri)] flex h-fit items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-2xl space-y-8">
                    <div className="bg-white shadow-md rounded-md p-6">
                        <h2 className="my-3 text-center text-2xl font-bold tracking-tight text-gray-900">
                            Application Update
                        </h2>
                        <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
                            <div className="box grid gap-2">
                                <textarea
                                    name="summary"
                                    id=""
                                    value={summary}
                                    onChange={(e) => setSummary(e.target.value)}
                                    className="px-2 py-3 mt-1 w-full border-[1px] border-[var(--pri)] placeholder-gray-600 resize-none shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                    placeholder="Write Your Summary here"
                                    minLength={10}
                                    maxLength={120}
                                    rows={4}
                                ></textarea>
                                <textarea
                                    name="experience"
                                    id=""
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                    className="px-2 py-3 mt-1 w-full border-[1px] border-[var(--pri)] placeholder-gray-600 resize-none shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                    placeholder="Write Your Work Exp"
                                    minLength={10}
                                    maxLength={120}
                                    rows={4}
                                ></textarea>

                                
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
                            </div>

                            <div className="box grid gap-2">
                                <input
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    type="text"
                                    required
                                    placeholder="Enter your role (eg. Software Developer)"
                                    className="px-2 py-3 mt-1 block w-full border-[1px] border-[var(--pri)] placeholder-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                                <input
                                    value={linkedin}
                                    onChange={(e) => setLinkedin(e.target.value)}
                                    type="text"
                                    required
                                    placeholder="Linkedin Profile link"
                                    className="px-2 py-3 mt-1 block w-full border-[1px] border-[var(--pri)] placeholder-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                            </div>

                            <div className="box grid gap-2">
                                <input
                                    value={github}
                                    onChange={(e) => setGithub(e.target.value)}
                                    type="text"
                                    required
                                    placeholder="Github Profile link"
                                    className="px-2 py-3 mt-1 block w-full border-[1px] border-[var(--pri)] placeholder-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                                <input
                                    value={portfolio}
                                    onChange={(e) => setPortfolio(e.target.value)}
                                    type="text"
                                    required
                                    placeholder="Portfolio link"
                                    className="px-2 py-3 mt-1 block w-full border-[1px] border-[var(--pri)] placeholder-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
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

export default UserApplicationUpdate;
