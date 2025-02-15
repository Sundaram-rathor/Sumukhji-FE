import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserIcon from "../icons/UserIcon";

function Profile() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const response = await fetch(
          "http://localhost:8000/api/v1/user/getuserinfo",
          {
            headers: { token },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserInfo(data.user);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-black p-4 md:px-20">
        <Navbar />
      </div>

      {/* Profile Header */}
      <div className="h-[35vh] w-full border border-b-gray-400 bg-gray-200"></div>

      {/* Profile Content */}
      <div className="p-6 md:p-14 -mt-36 flex flex-col items-center">
        {/* Profile Picture */}
        <div className="h-32 w-32 md:h-44 md:w-44 lg:h-52 lg:w-52 bg-white rounded-full border border-black border-dashed flex items-center justify-center">
          <UserIcon className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
        </div>

        {/* User Info */}
        {userInfo ? (
          <div className="text-center mt-4 w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl font-semibold">
              Hello,{" "}
              <span className="hover:text-gray-700 hover:underline">@{userInfo.username}</span>
            </div>
            <div className="mt-2 text-lg">Username: <span className="font-medium">{userInfo.username}</span></div>
            <div className="mt-1 text-lg">Email: <span className="font-medium">{userInfo.email}</span></div>
            <div className="mt-1 text-lg">
              Created at: <span className="font-medium">{userInfo.createdAt?.split("T")[0]}</span>
            </div>
          </div>
        ) : (
          <div className="text-gray-500 text-center mt-4">No user data found.</div>
        )}
      </div>
    </div>
  );
}

export default Profile;
