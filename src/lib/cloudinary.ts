const BASE =
  process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL ??
  "https://res.cloudinary.com/dd0wmpgoq/image/upload/v1776516279";

export function flowerImageUrl(imageName: string): string {
  return `${BASE}/${imageName}.webp`;
}
