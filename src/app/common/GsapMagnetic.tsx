import gsap from "gsap";
import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const GsapMagnetic = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const { clientX, clientY } = e;
        const rect = ref.current.getBoundingClientRect();
        const x = clientX - (rect.left + rect.width / 2);
        const y = clientY - (rect.top + rect.height / 2);
        gsap.to(ref.current, { x });
        gsap.to(ref.current, { y });
      }
    };

    const mouseLeave = () => {
      gsap.to(ref.current, { x: 0 });
      gsap.to(ref.current, { y: 0 });
    };

    ref.current?.addEventListener("mousemove", mouseMove);
    ref.current?.addEventListener("mouseleave", mouseLeave);

    return () => {
      ref.current?.removeEventListener("mousemove", mouseMove);
      ref.current?.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div ref={ref} className="z-[6] cursor-pointer">
      {children}
    </div>
  );
};

export default GsapMagnetic;
