import { v2 as cloudinary } from "cloudinary";

const env = process.env;

cloudinary.config({
  cloud_name: env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, // add your cloud_name
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function GET() {
  const results = (await cloudinary.search
    .expression("music-app*")
    .sort_by("created_at", "desc")
    .execute()) as { resources: { secure_url: string }[] };

  return Response.json({ results });
}
