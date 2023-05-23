"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Navlink = ({ href, children }) => {
  const data = useSelectedLayoutSegment();
  let active = href === `/${data}`;
  console.log(data, active);
  return (
    <div>
      <Link href={href} className={active ? "  underline" : ""}>
        {children}
      </Link>
    </div>
  );
};

export default Navlink;
