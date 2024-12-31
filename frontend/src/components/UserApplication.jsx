import React from "react";
import { Link } from "react-router-dom";

const UserApplication = (props) => {
  const userid = localStorage.getItem("userid");
  const userdata = JSON.parse(localStorage.getItem("profile"));
  
  if(userdata === null){
    const getprofile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: userid }),
        });
        const data = await res.json();
        localStorage.setItem("profile", JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    };
    getprofile();
  }

  const profile = JSON.parse(localStorage.getItem("profile"));

  return (
    <>
      <div className="w-full h-fit">
        <div className="profile w-[full] h-fit px-4 py-10 flex flex-col">
          <div className="bg-black overflow-hidden shadow rounded-lg border">
            <div className="px-4 py-5 sm:px-6 flex justify-between">
              <div>
              <h3 className="text-lg leading-6 font-medium text-white capitalize">
                application
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                This is application form of user
              </p>
              </div>
              <div>
                <Link to="/user/profile/application"
               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                Update</Link>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Summary :{" "}
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    {(props.profile?.summary)||(profile?.user?.summary)}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Experience :{" "}
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    {(props.profile?.experience)||(profile?.user?.experience)}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Education :
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    {(props.profile?.education)||(profile?.user?.education.map((edu) => (
                      <span key={edu} className="bg-gray-800 text-white px-2 py-1 rounded-full mr-2">
                        {edu}
                      </span>
                    )))}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Skills :{" "}
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    {(props.profile?.skills)||(profile?.user?.skills.map((skill) => ( 
                      <span key={skill} className="bg-gray-800 text-white px-2 py-1 rounded-full mr-2">
                        {skill}
                      </span>
                    )))}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Linkedin :{" "}
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    {(props.profile?.linkedin)||(profile?.user?.linkedin)}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Github :{" "}
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    {(props.profile?.github)||(profile?.user?.github)}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Website :{" "}
                  </dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    {(props.profile?.portfolio)||(profile?.user?.portfolio)}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserApplication;
