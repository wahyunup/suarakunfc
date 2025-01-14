import { usePathname } from "next/navigation";

interface HomeIconProps {
  color?: string;
}

const HomeIcon = ({ color }: HomeIconProps) => {
  const pathname = usePathname();
  const isActive = pathname === "/";

  return (
    <svg
      width="26"
      height="29"
      viewBox="0 0 26 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.15726 25.7778H7.89315V16.1111H17.3649V25.7778H22.1008V11.2778L12.629 4.02778L3.15726 11.2778V25.7778ZM0 29V9.66667L12.629 0L25.2581 9.66667V29H14.2077V19.3333H11.0504V29H0Z"
        fill={isActive ? color : "#eaeaea"}
      />
    </svg>
  );
};

export default HomeIcon;
