import { API_BASE } from "./constant.service";

export const getAllMembershipPlans = async () => {
  const res = await fetch(`${API_BASE}/memberships`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const json = await res.json();
  return json.data;
};

export async function registerMembership(data) {
  const res = await fetch(`${API_BASE}/memberships/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      reason: data.reason,
      membership: data.membership, // membership ID
    }),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
}
