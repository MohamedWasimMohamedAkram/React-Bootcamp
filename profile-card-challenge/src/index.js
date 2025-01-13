import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Vue",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar imgSrc="profile-img.jpg" imgAlt="Profile Image" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.imgSrc} alt={props.imgAlt} />;
}

function Intro() {
  return (
    <div>
      <h1>Wasim Akram</h1>
      <p>
        I’m a computer engineering grad into AI, machine learning, and web
        development. I love solving problems, building cool stuff, and staying
        active with sports.
      </p>
    </div>
  );
}

function SkillList() {
  const allSkills = skills;
  const haveSkills = skills.length;
  return (
    <div className="skill-list">
      {allSkills.map((skills) => (
        <Skill skillObj={skills} key={skills.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div style={{ backgroundColor: skillObj.color }} className="skill">
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
