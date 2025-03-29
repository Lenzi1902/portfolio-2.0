"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatedPageOut } from "../utils/animaitionsPageTransition";
import { ReactNode } from "react";

type Props = {
  href: string;
  label?: string;
  className?: string;
  children?: ReactNode;
};

const TranisitionLink = ({ href, label, className, children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const hadnleCLick = () => {
    if (pathname !== href) {
      animatedPageOut(href, router);
    }
  };
  return (
    <button onClick={hadnleCLick} className={`${className}`}>
      {children}
      {label}
    </button>
  );
};

export default TranisitionLink;
