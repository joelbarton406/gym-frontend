// Profile.tsx
import { base_url } from "@/config";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";

export type Member = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  profile_type: "admin" | "client" | "staff";
};

export const memberLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<Member> => {
  const memberId = params.memberId;
  const res = await fetch(`${base_url}/members/${memberId}`, {
    credentials: "include",
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to load profile: ${res.status}`);
  }

  const member = await res.json();
  console.log("member from memberLoader: ", JSON.stringify(member));
  return member;
};

export default function Member() {
  const member = useLoaderData() as Member;

  return (
    <div>
      <h1>Member Profile</h1>
      {member ? (
        <div>
          <p>Welcome, {member.first_name}!</p>
          {/* Display other member details */}
        </div>
      ) : (
        <p>No member data available.</p>
      )}
    </div>
  );
}
