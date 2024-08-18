import React, { useEffect, useState } from "react";
import styles from "./AllUsers.module.css";
import axios from "axios";
import Spinner from "../Helpers/Spinner";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numOfUsers, setNumOfUsers] = useState(0);
  async function getAllUsers(limit) {
    setLoading(true)
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/users?limit=${limit}`
    );
    setUsers(data);
    setLoading(false)
  }
  useEffect(() => {
    getAllUsers(15);
  }, []);
  return (
    <>
      <div className="allusers bg-gray py-5 ">
        {loading&&<Spinner/>}
        <div className="container py-5">
          <div className="title mb-3 d-flex justify-content-between">
            <h2>
              Total Users :{" "}
              <span className="text-main">{users.totalUsers}</span>
            </h2>
            <div className="filter d-flex w-25">
              <input
                type="number"
                onChange={(e) => setNumOfUsers(e.target.value)}
                className="border-0 rounded-2 p-2"
                placeholder="Number between 10 and 50"
                min={10}
              />
              <button
                className="btn btn-main"
                onClick={() => getAllUsers(numOfUsers)}
              >
                Search
              </button>
            </div>
          </div>

          <table class="tablee rounded-3 ">
            <thead className="py-2">
              <tr className="text-center">
                <th className=" py-2 ">#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {users?.users?.map((user, index) => (
                <tr>
                  <th className="text-sec fw-medium">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt.split("T")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
