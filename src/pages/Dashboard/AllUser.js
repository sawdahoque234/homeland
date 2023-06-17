import React, { useEffect, useState } from "react";

import useAuth from "./../../hooks/useAuth";

function AllUser() {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://homelandserver-production.up.railway.app/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user.email]);
  const handledelete = (user) => {
    const url = `https://homelandserver-production.up.railway.app/users/${user}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Are You Sure deleted This????");
          const remaining = users.filter((user) => user._id !== user);
          setUsers(remaining);
          window.location.reload();
        }
      });
  };
  return (
    <div>
      <div class="overflow-x-auto">
        {users.length ? (
          <table class="table table-zebra text-xl w-full">
            <thead>
              <tr>
                <th></th>
                <th className="text-lg">Id</th>
                <th className="text-lg">Email</th>
                <th className="text-lg">Action</th>
              </tr>
            </thead>
            {users.map((user, index) => (
              <>
                <tbody>
                  <tr>
                    <th>{index + 1}</th>
                    <td>{user?._id}</td>
                    <td>{user?.email}</td>

                    <td>
                      <button
                        onClick={() => handledelete(user._id)}
                        className="inline-flex text-white bg-red-500 border-0 p-2  focus:outline-none hover:bg-indigo-600 rounded text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        ) : (
          <h1 className="text-4xl text-red-600 overflow-y-hidden">
            No Data found!!
          </h1>
        )}
      </div>
    </div>
  );
}

export default AllUser;
