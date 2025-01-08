"use client";

import { useSession } from "next-auth/react";
import UserCardSkeleton from "@/components/skeleton/Card/UserCardSkeleton";
import dynamic from "next/dynamic";

const UserCard = dynamic(() => import("@/components/ui/Card/UserCard"), {
  ssr: false,
  loading: () => <UserCardSkeleton />,
});

const DashboardPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <UserCard
        userImage={"/icon/icon-user.webp"}
        mu_nik={session?.user?.nik as string}
        noTelp={session?.user?.phoneNumber as string}
        username={session?.user?.name as string}
      />

      <h1>Dashboard</h1>
    </>
  );
};

export default DashboardPage;
