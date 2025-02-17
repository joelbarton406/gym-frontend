import { base_url } from "../config";
import { useLoaderData } from "react-router-dom";

export type Class = {
  id: number;
  category: string;
  tag: string;
  instructor_id: number;
  class_date: string;
  capacity: number;
};

export const classesLoader = async (): Promise<Class[]> => {
  const response = await fetch(`${base_url}/classes`);
  if (!response.ok) {
    throw new Error("Failed to fetch classes");
  }
  return response.json();
};

function Classes() {
  const classes = useLoaderData() as Class[];

  if (!classes) {
    throw new Error("Failed to load classes");
  }

  return (
    <>
      <h5>Classes:</h5>
      <ul>
        {classes.map((c) => (
          <li key={c.id}>
            {c.category} | {c.tag} | {c.class_date} | {c.capacity}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Classes;
