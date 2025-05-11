import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AppHeader = () => {
  const pathname = usePathname();
  const paths = [
    { label: "Home", path: "/home" },
    { label: "Movies", path: "/movies" },
    { label: "TV Shows", path: "/tv" },
    { label: "My List", path: "/my-list" },
  ];

  return (
    <div className="fixed top-0 z-50 flex w-full items-center gap-5 bg-gradient-to-b from-[#141414] to-transparent px-3 py-3 md:px-16">
      <Image
        className="h-12 w-auto md:hidden"
        src="/images/Netflix_N.png"
        alt="Logo"
        priority={true}
        width={120}
        height={30}
      />
      <Image
        className="h-auto w-auto max-md:hidden"
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
