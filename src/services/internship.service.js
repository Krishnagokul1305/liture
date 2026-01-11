import { API_BASE } from "./constant.service";
export async function getAllInternships() {
  const res = await fetch(`${API_BASE}/internships`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const json = await res.json();
  return json.data;
}

export async function createInternshipRegistration(payload) {
  const res = await fetch(`${API_BASE}/internships`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to register for webinar");
  }

  return data;
}
