"use client";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export const SearchInput = () => {
  const router = useRouter();
  return (
    <Input
      className="w-auto"
      placeholder="Search"
      onKeyUp={async (e) => {
        if (e.key === "Enter" && e.currentTarget.value) {
          router.push(`/search/${e.currentTarget.value}`);
        }
      }}
    />
  );
};
