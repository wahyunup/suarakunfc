import NavButtons from "@/components/ui/Button/NavButton";
import { NavButtonProps } from "@/components/@types/partials";

const NavButton = ({
  route,
  children,
  classname,
}: NavButtonProps) => {
  return (
      <NavButtons
        classname={`h-[77px] w-full flex items-center justify-center ${classname}`}
        route={route}>
          {children}
      </NavButtons>
  );
};

export default NavButton;
