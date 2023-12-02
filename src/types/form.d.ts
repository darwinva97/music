import type { Band, Song } from "@prisma/client";
import { TArtistFull, TSongFull } from ".";

export type TFormState = {
  message: string | null;
};

export type TSongFormProps<T> = {
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
  artists: TArtistFull[];
  bands: Band[];
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
