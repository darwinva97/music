"use client";

import { Song } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Song>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "photo",
    header: "Photo",
  },
  {
    accessorKey: "coverPhoto",
    header: "Cover Photo",
  },
  {
    accessorKey: "audioSrc",
    header: "Audio",
  },
  {
    accessorKey: "videoSrc",
    header: "Video",
  },
  {
    accessorKey: "featured",
    header: "Featured",
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
];
