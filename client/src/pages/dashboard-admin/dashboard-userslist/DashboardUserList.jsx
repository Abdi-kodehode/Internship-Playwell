import React from "react";
import { useState } from "react";
//Component from Mui
import { DataGrid } from "@mui/x-data-grid";
import { AiFillDelete } from "react-icons/ai";

//Statisc Data
export default function DashboardUserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "userName", headerName: "Username", width: 400 },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "course",
      headerName: "Course",
      type: "number",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <AiFillDelete
            className="cursor-pointer"
            onClick={() => handleDelete(params.row.id)}
          />
        );
      },
    },
  ];

  const rows = [
    { id: 1, userName: "Snow", email: "Jon@gmail.com", course: "Basic" },
    {
      id: 2,
      userName: "Lannister",
      email: "Cersei@gmail.com",
      course: "Premium",
    },
    {
      id: 3,
      userName: "Lannister",
      email: "Jaime@gmail.com",
      course: "Premium",
    },
    { id: 4, userName: "Stark", email: "Arya@gmail.com", course: "Basic" },
    {
      id: 5,
      userName: "Targaryen",
      email: "Daenerys@gmail.com",
      course: "Basic",
    },
    { id: 6, userName: "Melisandre", email: null, Course: "Basic" },
    {
      id: 7,
      userName: "Clifford",
      email: "Ferrara@gmail.com",
      course: "Basic",
    },
    { id: 8, userName: "Frances", email: "Rossini@gmail.com", course: "Basic" },
    { id: 9, userName: "Roxie", email: "Harvey@gmail.com", course: "Basic" },
    { id: 10, userName: "Snow", email: "Jon@gmail.com", course: "Basic" },
    {
      id: 12,
      userName: "Lannister",
      email: "Cersei@gmail.com",
      course: "Premium",
    },
    {
      id: 13,
      userName: "Lannister",
      email: "Jaime@gmail.com",
      course: "Premium",
    },
    { id: 14, userName: "Stark", email: "Arya@gmail.com", course: "Basic" },
    {
      id: 15,
      userName: "Targaryen",
      email: "Daenerys@gmail.com",
      course: "Basic",
    },
    { id: 16, userName: "Melisandre", email: null, Course: "Basic" },
    {
      id: 17,
      userName: "Clifford",
      email: "Ferrara@gmail.com",
      course: "Basic",
    },
    {
      id: 18,
      userName: "Frances",
      email: "Rossini@gmail.com",
      course: "Basic",
    },
    { id: 19, userName: "Roxie", email: "Harvey@gmail.com", course: "Basic" },
    { id: 20, userName: "Snow", email: "Jon@gmail.com", course: "Basic" },
    {
      id: 21,
      userName: "Lannister",
      email: "Cersei@gmail.com",
      course: "Premium",
    },
    {
      id: 22,
      userName: "Lannister",
      email: "Cersei@gmail.com",
      Course: "Premium",
    },
    {
      id: 23,
      userName: "Lannister",
      email: "Jaime@gmail.com",
      course: "Premium",
    },
    { id: 24, userName: "Stark", email: "Arya@gmail.com", course: "Basic" },
    {
      id: 25,
      userName: "Targaryen",
      email: "Daenerys@gmail.com",
      course: "Basic",
    },
    { id: 26, userName: "Melisandre", email: null, Course: "Basic" },
    {
      id: 27,
      userName: "Clifford",
      email: "Ferrara@gmail.com",
      course: "Basic",
    },
    {
      id: 28,
      userName: "Frances",
      email: "Rossini@gmail.com",
      course: "Basic",
    },
    { id: 29, userName: "Roxie", email: "Harvey@gmail.com", course: "Basic" },
    { id: 30, userName: "Snow", email: "Jon@gmail.com", course: "Basic" },
    { id: 31, userName: "Snow", email: "Jon@gmail.com", course: "Basic" },
    {
      id: 32,
      userName: "Lannister",
      email: "Cersei@gmail.com",
      course: "Premium",
    },
    {
      id: 33,
      userName: "Lannister",
      email: "Jaime@gmail.com",
      course: "Premium",
    },
    { id: 34, userName: "Stark", email: "Arya@gmail.com", course: "Basic" },
    {
      id: 35,
      userName: "Targaryen",
      email: "Daenerys@gmail.com",
      course: "Basic",
    },
    { id: 36, userName: "Melisandre", email: null, Course: "Basic" },
    {
      id: 37,
      userName: "Clifford",
      email: "Ferrara@gmail.com",
      course: "Basic",
    },
    {
      id: 38,
      userName: "Frances",
      email: "Rossini@gmail.com",
      course: "Basic",
    },
    { id: 39, userName: "Roxie", email: "Harvey@gmail.com", course: "Basic" },
  ];
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const [data, setData] = useState(rows);
  return (
    <div className="w-full h-screen bg-black/20 backdrop-blur-xl py-5 px-5 rounded-xl ">
      <h2 className="text-4xl text-white/80 font-bold laptop:text-3xl tablet:text-2xl mobile:text-xl mobile:font-semibold pb-2">
        New Users
      </h2>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[5]}
        checkboxSelection
        className=" !text-xl !bg-black/20 !text-white/80"
        disableSelectionOnClick
      />
    </div>
  );
}
