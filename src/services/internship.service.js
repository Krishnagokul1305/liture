import { API_BASE } from "./constant.service";
export async function getAllInternships() {
  const res = await fetch(`${API_BASE}/internships`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const json = await res.json();
  return json.data;
}
