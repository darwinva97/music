"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export const BtnSubmit = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" {...props} aria-disabled={pending}>
      {pending ? "Loading..." : children || "Submit"}
    </Button>
  );
};
