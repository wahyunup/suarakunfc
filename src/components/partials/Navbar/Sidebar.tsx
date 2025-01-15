import HamburgerIcon from "@/components/partials/Navbar/icon/hamburgerIcon";
import { Button } from "@/components/ui";
import { useSidebar } from "@/context/SideBarProvider";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
    console.log(isOpen);
    
  }

  return (
    <>
      <div className="px-[28px] pt-[18px] bg-[#F4F4F4]">
        <div className="h-[35px] w-[35px] flex justify-center items-center" onClick={handleIsOpen}>
          <HamburgerIcon />
        </div>
      </div>

        
        <div className={`absolute z-[2] inset-y-0 bg-white h-screen w-[298px] px-[28px] pt-[18px] flex flex-col justify-between ${!isOpen ? "-motion-translate-x-out-100" : "-motion-translate-x-in-100" }`}>
          <div>
            <div className="h-[35px] w-[35px] flex justify-center items-center" onClick={handleIsOpen}>
              <HamburgerIcon />
            </div>

            <div className="pt-[72px] flex flex-col gap-[10px]">
              <h1 className="h-[38px] font-bold text-[15px]">Pengaturan & privasi</h1>
              <h1 className="h-[38px] font-bold text-[15px]">Riwayat Pilihan</h1>
              <h1 className="h-[38px] font-bold text-[15px]">Pusat Bantuan</h1>
            </div>
          </div>
          
          <div className="flex flex-col gap-[15px] mb-[73px]">
            <Button background="accent" className="w-full rounded-[7px] border border-red-500 text-secondary bg-disabled" size="medium" > 
              Hapus Akun</Button>
            <Button background="secondary" className="w-full rounded-[7px]" size="medium" > 
              Keluar Akun</Button>
          </div>
          </div>
        <div className={`bg-black/20 inset-0 absolute z-[1] ${!isOpen ? "hidden" : ""}`}></div>
    </>
  );
};

export default Sidebar;
