import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AppHeader = () => {
  const pathname = usePathname();
  const paths = [
    { label: "Home", path: "/home" },
    { label: "Movies", path: "/movies" },
    { label: "TV Shows", path: "/tv" },
  ];

  return (
    <div className="fixed top-0 z-50 flex w-full items-center gap-5 bg-[#141414] px-16 py-2">
      <Image
        className="h-auto w-auto"
        src="/images/Netflix_Logo_RGB.png"
        alt="Logo"
        priority={true}
        width={120}
        height={40}
      />
      {paths.map(({ label, path }) => (
        <Link
          key={path}
          href={path}
          className={`duration-300 ${
            pathname === path
              ? "disabled !cursor-default font-bold !text-white"
              : "font-medium hover:opacity-75"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default AppHeader;
