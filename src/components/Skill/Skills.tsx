import "../../styles/skill.css";
import { useEffect } from "react";
import { SkillField } from "./SkillField";
import cvFile from "../../assets/cv.pdf";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.add("showen");
    } else {
      el.target.classList.remove("showen");
    }
  });
});

const technicalSkills = [
  "C",
  "C++",
  "Java",
  "Linux",
  "Python",
  "Excel",
  "Flutter",
  "Dart",
  "Swift",
  "Arduino and Boards",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
];

const softSkills = [
  "Team Collaborator",
  "Like to teach and eager to learn",
  "Good communication skills",
  "Self-sustained",
  "Hard working",
];

const hobbySkills = [
  "Tennis",
  "Ski",
  "Swimming",
  "Table Tennis",
  "Wind Surf",
  "Legos",
  "Video Games",
];

export const Skills = () => {
  useEffect(() => {
    const skillFields = document.querySelectorAll(".skill-field, .skill-cv");
    skillFields.forEach((el) => observer.observe(el));
  });

  return (
    <section className="skill" id="skills">
      <div className="spacer wave"></div>
      <h1 className="skill-header">My Skills</h1>
      <div className="skill-fields">
        <SkillField title="Technical Skills" skills={technicalSkills} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SkillField title="Soft Skills" skills={softSkills} />
          <SkillField title="Hobby Skills" skills={hobbySkills} />
        </div>
      </div>
      <div className="skill-cv slideInRight">
        <p>For more information check out my resume from here</p>
        <a
          href={cvFile}
          download="Mert Gürer cv.pdf"
          className="skill-cv-button-box"
        >
          <button className="skill-cv-button">Download</button>
        </a>
      </div>
      <div className="spacer wave flip bottom"></div>
    </section>
  );
};
