"use client";

import { useSession } from "next-auth/react";
import UserCardSkeleton from "@/components/skeleton/Card/UserCardSkeleton";
import dynamic from "next/dynamic";
import NavButtons from "@/components/partials/Navbar/NavButtons";

const UserCard = dynamic(() => import("@/components/ui/Card/UserCard"), {
  ssr: false,
  loading: () => <UserCardSkeleton />,
});

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  return (  
    <div className="h-screen pt-[21px] bg-[#F4F4F4]">
      <div className="flex h-full justify-between flex-col">
        <div className="px-[28px] flex justify-center items-center flex-col">
          <UserCard
            userImage={"/icon/icon-user.webp"}
            mu_nik={session?.user?.nik as string}
            noTelp={session?.user?.phoneNumber as string}
            username={session?.user?.name as string}
          />
          {children}
        </div>

        <div className="flex w-full justify-center items-center">
          <NavButtons classname="bg-white" route="/" routeName="Home" />
          <NavButtons classname="bg-white" route="/user" routeName="user" />
          <NavButtons classname="bg-red-600 text-white" route="/auth/input-pin" routeName="kunci"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
