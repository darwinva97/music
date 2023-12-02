import type { HTMLAttributes } from "react";

type TContainerImageProps = {
  width: number;
  height: number;
  image: string;
} & HTMLAttributes<HTMLDivElement>;
export const ContainerImage = ({
  width,
  height,
  image,
  style = {},
  ...props
}: TContainerImageProps) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        ...style,
      }}
      {...props}
    ></div>
  );
};
