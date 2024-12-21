"use client";

import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";

interface AnimationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function AnimationLink({ href, children, className }: AnimationLinkProps) {
  return (
    <Link href={href} className={`group relative inline-block ${className}`}>
      {children}
      <span
        className="absolute bottom-0 left-0 h-[2px] w-0 bg-current 
          transition-all duration-300 ease-in-out group-hover:w-full"
      ></span>
    </Link>
  );
}
