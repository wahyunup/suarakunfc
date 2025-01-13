import Link from "next/link";
import { NavButtonProps } from "@/components/@types/partials";
const NavButton = ({ route, children, classname}: NavButtonProps) => {
  return (
    <div className="w-full" >
      <Link className={classname} href={route}>{children}</Link>
    </div>
  );
};
export default NavButton;
