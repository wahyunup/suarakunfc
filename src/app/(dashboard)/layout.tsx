"use client";

import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import NavButton from "@/components/ui/Button/NavButton";
import UserCardSkeleton from "@/components/skeleton/Card/UserCardSkeleton";
import HomeIcon from "@/components/partials/Navbar/icon/homeIcon";
import UserIcon from "@/components/partials/Navbar/icon/userIcon";
import LockedIcon from "@/components/partials/Navbar/icon/lockedIcon";
import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/context/SideBarProvider";

const UserCard = dynamic(() => import("@/components/ui/Card/UserCard"), {
  ssr: false,
  loading: () => <UserCardSkeleton />,
});

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
  isActive: string;
}) => {
  const { data: session } = useSession();
  const currentPath = usePathname();
  console.log(session?.user)

  return (
    <SidebarProvider>
      <div className="h-screen pt-[21px] bg-[#F4F4F4]">
        <div className="flex h-full justify-between flex-col">
          <div className="px-[28px] flex justify-center items-center flex-col">
            <UserCard
              userImage={session?.user?.avatar || "/icon/icon-user.webp"}
              mu_nik={session?.user?.nik || ""}
              noTelp={session?.user?.phoneNumber || ""}
              username={session?.user?.name || ""}
            />
            {children}
          </div>

          <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-between items-center">
            <NavButton route="/">
              <HomeIcon color={currentPath === "/" ? "#345FCB" : ""} />
            </NavButton>

            <NavButton route="/user">
              <UserIcon color={currentPath === "/user" ? "#345FCB" : ""} />
            </NavButton>

            <NavButton
              route="/auth/input-pin"
              classname="bg-red-600 text-white"
            >
              <LockedIcon color="white" />
            </NavButton>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
