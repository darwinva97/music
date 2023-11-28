type TResourceType = "image" | "video" | "raw" | "auto";
const getUrl = (resourceType: TResourceType = "auto") =>
  `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`;

export const upload = async (
  image: File,
  resourceType: TResourceType = "auto"
) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "music-app");
  const url = getUrl(resourceType);
  const uploadedImageData = (await fetch(url, {
    method: "POST",
    body: formData,
  }).then((r) => r.json())) as { secure_url: string };
  return uploadedImageData.secure_url;
};
