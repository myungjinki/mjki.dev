"use client";

import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";

interface AnimationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function AnimationLink({ href, children }: AnimationLinkProps) {
  return (
    <Link href={href} className="relative inline-block group">
      {children}
      <span
        className="absolute bottom-0 left-0 h-[2px] w-0 bg-current 
          group-hover:w-full transition-all duration-300 ease-in-out"
      ></span>
    </Link>
  );
}
