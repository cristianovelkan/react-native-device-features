import { GOOGLE_API_KEY } from "../config";

export function getMapPreview(lat, lgn) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lgn}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:C%7C${lat},${lgn}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lgn) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lgn}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address");
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}
