import type { Song } from "@prisma/client";
import { TSongFull } from ".";

export type TFormState = {
  message: string | null;
};

export type TProfileFormProps<T> = {
  action: (payload: FormData) => void;
  btnLabel: string;
  defaultValues?:
    | T
    | {
        [key: string]: string;
      };
  state: {
    message: null | string;
  };
  // songs: (Song & {
  //   artists: {
  //     id: string;
  //     artistId: string;
  //     songId: string;
  //   }[];
  // })[];
  songs: TSongFull[];
};
