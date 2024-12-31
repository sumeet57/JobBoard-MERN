import React, {useEffect, useState} from 'react'
import "../stylesheet/UserApplicationUpdate.css"
import { useNavigate } from 'react-router-dom';

const UserProfileUpdate = () => {
    let profile = JSON.parse(localStorage.getItem("profile"));
    const userid = localStorage.getItem("userid");
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("userid")){
            navigate("/user/signin");
        }
        profile = JSON.parse(localStorage.getItem("profile"));
    },[]);
    const [name, setName] = useState(profile?.user?.name);
    const [email, setEmail] = useState(profile?.user?.email);
    const [phone, setPhone] = useState(profile?.user?.phone);
    const [city, setCity] = useState(profile?.user?.city);
    const [country, setCountry] = useState(profile?.user?.country);    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/users/profile/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: userid,
                name,
                email,
                phone,
                city,
                country,
            }),
        });
        const data = await res.json();
        
        if(res.status === 200){
            localStorage.clear();
            localStorage.setItem("userid", data.userid);
            localStorage.setItem("profile", JSON.stringify(data.profile));
            navigate("/user/profile");
            document.querySelector(".message").innerHTML = data.message;
        }else{
            document.querySelector(".message").innerHTML = data.error;
        }
    }

  return (
    <>
        <div className="w-full h-screen pt-24">
            <div className="bg-[var(--pri)] flex h-fit items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-2xl space-y-8">
                    <div className="bg-white shadow-md rounded-md p-6">
                        <h2 className="my-3 text-center text-2xl font-bold tracking-tight text-gray-900">
                            Profile Update
                        </h2>
                        <form className="space-y-6" method="POST">

                            
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    required
                                    placeholder="Enter your role (eg. Software Developer)"
                                    className="px-2 py-3 mt-1 block w-full border-[1px] border-[var(--pri)] placeholder-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="px-2 py-3 mt-1 block w-full border-[1px] border-[var(--pri)] placeholder-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                            
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="tel"
                                    pattern='[0-9]{10}'
                                    required
                                    placeholder="Enter your phone no"
                                    className="px-2 py-3 mt-1 block w-full border-[1px] border-[var(--pri)] placeholder-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                        
                            <div className='box grid gap-2'>
                            <input
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    type="text"
                                    required
                                    placeholder="Enter your city"
                                    className="px-2 py-3 mt-1 block w-full border-[1px] border-[var(--pri)] placeholder-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                                <input
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    type="text"
                                    required
                                    placeholder="Country"
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
  )
}

export default UserProfileUpdate