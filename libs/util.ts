import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(
    /(\+\d{3})(\d{2})(\d{3})(\d{3})(\d{1})/,
    "$1 $2 $3 $4 $5"
  );
}
