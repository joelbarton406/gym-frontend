import { Outlet, useLoaderData } from "react-router-dom";
import { base_url } from "./config";
type Member = {
  id: number;
  firstname: string;
  email: string;
  phonenumber: string;
  profile_type: "admin" | "client" | "instructor";
};
type Class = {
  id: number;
  category: string;
  tag: string;
  instructor_id: number;
  class_date: string;
  capacity: number;
};

export const landingLoader = async (): Promise<[Member[], Class[]]> => {
  const [membersResponse, classesResponse] = await Promise.all([
    fetch(`${base_url}/members`),
    fetch(`${base_url}/classes`),
  ]);

  const members = await membersResponse.json();
  const classes = await classesResponse.json();

  return [members, classes];
};

export default function LandingPage() {
  const [members, classes] = useLoaderData();
  if (!members) {
    return <div>Failed to load members and classes.</div>;
  }

  return (
    <>
      <h5>Members:</h5>
      <ul>
        {members.map((m) => (
          <li key={m.id}>
            {m.firstname} | {m.phonenumber}
          </li>
        ))}
      </ul>
      <h5>Classes:</h5>
      <ul>
        {classes.map((c) => (
          <li key={c.id}>
            {c.category} | {c.tag} | {c.class_date} | {c.capacity}
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
