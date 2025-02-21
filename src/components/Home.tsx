import { Outlet } from "react-router-dom";
// import { base_url } from "@/config";
// type Member = {
//   id: number;
//   first_name: string;
//   email: string;
//   phone_number: string;
//   profile_type: "admin" | "client" | "staff";
// };

// type Enrollment = {
//   id: number;
//   member_id: number;
//   class_id: number;
//   enrollment_date: string;
// };

// export const homeLoader = async () => {
//   const endpoints = [
//     `${base_url}/members`,
//     `${base_url}/classes`,
//     `${base_url}/members/4/enrollments`,
//   ];
//   try {
//     const [membersResponse, classesResponse, enrollmentsResponse] =
//       await Promise.all(endpoints.map((endpoint) => fetch(endpoint)));
//     if (!membersResponse.ok || !classesResponse.ok || !enrollmentsResponse.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const [members, classes, enrollments] = await Promise.all([
//       membersResponse.json(),
//       classesResponse.json(),
//       enrollmentsResponse.json(),
//     ]);
//     return [members, classes, enrollments];
//   } catch (error) {
//     console.error("Error loading data:", error);
//     throw error;
//   }
// };

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <Outlet />
    </>
  );
}
