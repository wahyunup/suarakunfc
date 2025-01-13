"use client";

import UserDetail from "@/components/ui/Label/LabelUser";
import { useSession } from "next-auth/react";
import { useState } from "react";
import EditNumber from "@/components/partials/EditNumber/EditNumber";

const UserDetails = () => {
  const { data: session } = useSession();
  const [editNumber, setEditNumber] = useState(false);

  const handleEditNumber = () => {
    setEditNumber(!editNumber);
  };

  return (
    <div className="pt-[62px] w-full flex flex-col gap-[10px]">
      <UserDetail heading="Nama" subHeading={session?.user?.name as string} />
      <UserDetail heading="NIK" subHeading={session?.user?.nik as string} />
      {editNumber && (
        <EditNumber onClick={handleEditNumber}/>
      )}
      <UserDetail
        onClick={handleEditNumber}
        heading="Nomor Telepon"
        subHeading={session?.user?.phoneNumber as string}
        iconEdit
      />
      <UserDetail
        heading="Alamat"
        subHeading={session?.user?.address as string}
      />
      <UserDetail
        heading="Kecamatan"
        subHeading={session?.user?.district as string}
      />
      <UserDetail heading="Kota" subHeading={session?.user?.city as string} />
      <UserDetail
        heading="Provinsi"
        subHeading={session?.user?.province as string}
      />
    </div>
  );
};

export default UserDetails;
