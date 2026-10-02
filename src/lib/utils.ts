import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatRupiah(value: number): string {
  if (value >= 1_000_000_000) {
    const miliar = value / 1_000_000_000;
    return `Rp ${miliar.toLocaleString("id-ID", { maximumFractionDigits: 1 })} Miliar`;
  }
  if (value >= 1_000_000) {
    const juta = value / 1_000_000;
    return `Rp ${juta.toLocaleString("id-ID", { maximumFractionDigits: 0 })} Juta`;
  }
  return `Rp ${value.toLocaleString("id-ID")}`;
}
