import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// {
//     id: "acc-00",
//     name: "",
//     price: 900,
//     description:
//       "",
//     category: "accessories",
//     image: "/accessories/.jpeg",
//     sizes: ["One Size"],
//     colors: [""],
//     // isNew: false,
//     // isFeatured: true,
//   },
