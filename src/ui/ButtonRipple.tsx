"use client";
import clsx from "clsx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HTMLAttributes, MouseEvent } from "react";

type Props = HTMLAttributes<HTMLAnchorElement> & { href: string };

export default function ButtonRipple({
  href,
  className,
  children,
  ...rest
}: Props) {
  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    (e.target as HTMLElement).style.setProperty("--x", x + "px");
    (e.target as HTMLElement).style.setProperty("--y", y + "px");
  };
  return (
    <Link
      href={href}
      onMouseMove={onMove}
      className={clsx(
        "button-ripple rounded-full bg-brand-500 px-6 py-3 text-white transition hover:bg-brand-500/90",
        "inline-flex items-center gap-2",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-white text-black">
        <ArrowRight size={18} />
      </span>
    </Link>
  );
}
