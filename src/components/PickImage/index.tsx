"use client";
import { upload } from "@/utils/upload";
import { RefreshCcw } from "lucide-react";
import { type ChangeEvent, useRef, useState } from "react";

type TDialog = HTMLDialogElement & {
  showModal: () => void;
  show: () => void;
  close: () => void;
};

const PickImageComponent = ({
  image,
  setImage,
  name,
}: {
  image: string;
  setImage: (image: string) => void;
  name?: string;
}) => {
  const dialogRef = useRef<TDialog | null>(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const loadImages = async () => {
    setLoading(true);
    const images = await fetch("/api/cloudinary")
      .then((r) => r.json())
      .then((r: { results: { resources: { secure_url: string }[] } }) =>
        r.results.resources.map((r: { secure_url: string }) => r.secure_url)
      );
    setImages(images);
    setLoading(false);
  };

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0]!;
    const secure_url = await upload(image, "image");
    const newImages = [...images];
    newImages.unshift(secure_url);
    setImages(newImages);
    setImage(secure_url);
  };

  return (
    <>
      <div
        onClick={() => {
          dialogRef?.current?.showModal();
          void loadImages();
        }}
        style={{
          border: "1px solid black",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain", // options no cover:
          backgroundPosition: "center",
          width: "150px",
          height: "150px",
        }}
      >
        {!image && "None"}
      </div>
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box flex flex-col items-center justify-center gap-2">
          <header className="flex items-center justify-center gap-2">
            <h4 className="text-center text-xl">Select Image</h4>
            <button
              className="btn btn-circle btn-sm"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                void loadImages();
              }}
            >
              <RefreshCcw color="#000000" strokeWidth={1.75} />
            </button>
          </header>
          <div className="flex flex-wrap items-center justify-center overflow-y-scroll">
            {!loading &&
              images.map((imageItem) => (
                <div
                  key={imageItem}
                  onClick={() => setImage(imageItem)}
                  className={
                    imageItem === image ? "border border-red-600" : "border-8"
                  }
                  style={{
                    backgroundImage: `url(${imageItem})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain", // options no cover:
                    backgroundPosition: "center",
                    width: "150px",
                    height: "150px",
                  }}
                ></div>
              ))}
            {loading && <div>Loading...</div>}
          </div>
          <div className="modal-action">
            <label form="files" className="btn btn-primary btn-sm">
              Or upload Image
              <input
                type="file"
                className="file-input file-input-sm hidden w-full max-w-xs"
                onChange={(e) => void onChangeFile(e)}
              />
            </label>
            <div
              onClick={() => dialogRef?.current?.close()}
              className="btn btn-primary btn-sm"
            >
              Close
            </div>
            {name && (
              <input className="hidden" value={image} readOnly name={name} />
            )}
          </div>
        </div>
      </dialog>
    </>
  );
};

type TName = {
  name?: string;
};
type TPickImageProps = (
  | {
      image: string;
      setImage: (image: string) => void;
    }
  | { image?: string }
) &
  TName;

export const PickImage = ({ name, ...props }: TPickImageProps) => {
  const [imageLocal, setImageLocal] = useState(props.image || "");
  if ("setImage" in props) {
    return (
      <PickImageComponent
        setImage={props.setImage}
        image={props.image}
        name={name}
      />
    );
  }
  return (
    <PickImageComponent
      image={imageLocal}
      setImage={setImageLocal}
      name={name}
    />
  );
};
