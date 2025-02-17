import { Outlet, useLoaderData } from "react-router-dom";
import { base_url } from "./config";
type Member = {
  id: number;
  firstname: string;
  email: string;
  phonenumber: string;
  profile_type: "admin" | "client" | "instructor";
};

export const landingLoader = async (): Promise<Member[]> => {
  const res = await fetch(`${base_url}/members`);
  return res.json();
};

export default function LandingPage() {
  const members = useLoaderData() as Member[];

  if (!members) {
    return <div>Failed to load members.</div>;
  }

  return (
    <>
      <h5>Members:</h5>
      <ul>
        {members.map((m) => (
          <li key={m.id}>
            {m.firstname} - {m.phonenumber}
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
