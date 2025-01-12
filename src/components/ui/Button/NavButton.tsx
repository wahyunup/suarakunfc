import Link from "next/link";
import { NavButtonProps } from "@/components/@types/partials";
const NavButton = ({ route, routeName, classname}: NavButtonProps) => {
  return (
    <div className="w-full" >
      <Link className={classname} href={route}>{routeName}</Link>
    </div>
  );
};
export default NavButton;
