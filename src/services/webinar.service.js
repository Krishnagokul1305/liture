import { API_BASE } from "./constant.service";

export async function getAllWebinars() {
  const res = await fetch(`${API_BASE}/webinars`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const json = await res.json();
  return json.data;
}
