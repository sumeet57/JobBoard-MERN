import React from "react";
import { Link } from "react-router-dom";
const UserProfile = (props) => {
  const userid = localStorage.getItem("userid");
  const profile = JSON.parse(localStorage.getItem("profile"));
  // if(profile === null){
  //     const profile = async () => {
  //         try {
  //           const res = await fetch("http://localhost:5000/api/users/profile", {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify({ id: userid }),
  //           });
  //           const data = await res.json();
  //           localStorage.setItem("profile", JSON.stringify(data));
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       }
  //         profile();
  //     };


  return (
    <>
      <div className="profile w-full h-fit px-4 py-10  flex flex-col">
        <div className="bg-black overflow-hidden shadow rounded-lg border">
          <div className="px-4 py-5 sm:px-6 flex justify-between">
            <div>
            <h3 className="text-lg leading-6 font-medium text-white">
              User Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This is some information about the user.
            </p>
            </div>
            <div>
                <Link to="/user/profile/update"
               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                Update</Link>
              </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 capitalize">
                  {(props.profile?.name)||(profile?.user?.name)}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                  {(props.profile?.email)||(profile?.user?.email)}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                  {(props.profile?.phone)||(profile?.user?.phone)}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 capitalize">
                  {(props.profile?.city)||(profile?.user?.city)}, {(props.profile?.country)||(profile?.user?.country)}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
