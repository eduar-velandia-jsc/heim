import { asset } from "../lib/asset";

import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ArrowButtonProps = {
  to: string;
  children: ReactNode;
  variant?: "default" | "urbanist";
};

export function ArrowButton({ to, children, variant = "default" }: ArrowButtonProps) {
  const className = variant === "urbanist" ? "arrow-button arrow-button--urbanist" : "arrow-button";
  return (
    <Link to={to} className={className}>
      <span>{children}</span>
      <img src={asset("icons/arrow.png")} alt="" width={20} height={20} />
    </Link>
  );
}
