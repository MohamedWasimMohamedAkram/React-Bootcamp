import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
  return (
    <div className="skill-list">
      <Skill title="HTML+CSS" emojiCode="&#x1F4AA;" color="lightblue" />
      <Skill title="JavaScript" emojiCode="&#x1F4AA;" color="orange" />
      <Skill title="Web Design" emojiCode="&#x1F4AA;" color="violet" />
      <Skill title="Git & Github" emojiCode="&#x1F4AA;" color="yellow" />
      <Skill title="React" emojiCode="&#x270D;&#x1F3FC;" color="lightgreen" />
    </div>
  );
}

function Skill(props) {
  return (
    <div style={{ backgroundColor: props.color }} className="skill">
      <span>{props.title}</span>
      <span>{props.emojiCode}</span>
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
