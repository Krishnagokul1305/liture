import { API_BASE } from "./constant.service";

export async function getAllWebinars() {
  const res = await fetch(`${API_BASE}/webinars`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const json = await res.json();
  return json.data;
}

export async function createWebinarRegistration(payload) {
  const res = await fetch(`${API_BASE}/webinars`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to register for webinar");
  }

  return data;
}
