"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const Page = () => {
  return (
    <div>
      <h1>Admin</h1>
      <Button onClick={() => void signIn("credentials")}>Login</Button>
    </div>
  );
};

export default Page;
