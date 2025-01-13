"use client";

import { useSession } from "next-auth/react";
import UserCardSkeleton from "@/components/skeleton/Card/UserCardSkeleton";
import dynamic from "next/dynamic";
import NavButtons from "@/components/partials/Navbar/NavButtons";
import HomeIcon from "../../components/partials/Navbar/icon/homeIcon";
import UserIcon from "@/components/partials/Navbar/icon/userIcon";
import LockedIcon from "@/components/partials/Navbar/icon/lockedIcon";

const UserCard = dynamic(() => import("@/components/ui/Card/UserCard"), {
  ssr: false,
  loading: () => <UserCardSkeleton />,
});

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  return (
    <div className="h-screen pt-[21px] bg-[#F4F4F4]">
      <div className="flex h-full justify-between flex-col">
        {/* Konten Utama */}
        <div className="px-[28px] flex justify-center items-center flex-col">
          <UserCard
            userImage={"/icon/icon-user.webp"}
            mu_nik={session?.user?.nik as string}
            noTelp={session?.user?.phoneNumber as string}
            username={session?.user?.name as string}
          />
          {children}
        </div>

        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50 flex justify-between items-center">
          <NavButtons classname="flex flex-col items-center" route="/">
            <HomeIcon color="#345FCB" />
          </NavButtons>

          <NavButtons classname="flex flex-col items-center" route="/user">
            <UserIcon color="#D7D7D7" />
          </NavButtons>

          <NavButtons
            classname="flex flex-col items-center bg-red-600 text-white"
            route="/auth/input-pin">
              <LockedIcon color="white"/>
          </NavButtons>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
