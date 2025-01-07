"use client";

import UserCard from "@/components/ui/Card/UserCard";
import { useState } from "react";

const DashboardPage = () => {
  const [dataUser, setDataUser] = useState([
    {
      username: "AscenditCreative",
      nik: "0987654321",
      noTelp: +621231123,
      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq0f1tSU2b8opZaApGh5tl2FreFb52dyo6Q&s",
    },
  ]);

  return (
    <div>
      {dataUser.map((data, index) => (
        <UserCard
          key={index}
          userImage={data.userImage}
          mu_nik={data.nik}
          noTelp={data.noTelp}
          username={data.username}
        />
      ))}
      
      <h1>Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
