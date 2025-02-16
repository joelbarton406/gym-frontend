import { useState } from "react";

type Member = {
  firstname: string;
  email: string;
  phonenumber: string;
  profile_type: "admin" | "client" | "instructor";
};

function App() {
  const [members, setMembers] = useState<Member[]>([]);
  return (
    <>
      <button
        type="button"
        onClick={async () => {
          try {
            const response = await fetch("http://localhost:3000/members");
            const data = await response.json();
            console.log(data);
            setMembers(data);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        Get All Members
      </button>
      <h5>Members:</h5>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            <span>{member.firstname}</span> <span>{member.email}</span>{" "}
            <span>{member.phonenumber}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
