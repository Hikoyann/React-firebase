import Link from "next/link";

const NAV_ITEMS = [{ href: "/", label: "Index" }];

export const Header = () => {
  return (
    <header className="flex justify-center items-center border-b w-full h-24 mb-4">
      {NAV_ITEMS.map((item) => {
        return (
          <Link
            key={item.href}
            href={item.href}
            className="inline-block py-2 px-6 text-xl hover:text-blue-500 focus:text-blue-500 active:text-blue-500"
          >
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};
