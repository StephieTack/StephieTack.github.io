import SkillCard from "./SkillCard";
const skillItem = [{
  imgSrc: "/images/figma.svg",
  label: "Figma",
  desc: "Design tool"
}, {
  imgSrc: "/images/css3.svg",
  label: "CSS",
  desc: "User Interface"
}, {
  imgSrc: "/images/javascript.svg",
  label: "JavaScript",
  desc: "Interaction"
}, {
  imgSrc: "/images/nodejs.svg",
  label: "NodeJS",
  desc: "Web Server"
}, {
  imgSrc: "/images/expressjs.svg",
  label: "ExpressJS",
  desc: "Node Framework"
}, {
  imgSrc: "/images/mongodb.svg",
  label: "MongoDB",
  desc: "Database"
}, {
  imgSrc: "/images/react.svg",
  label: "React",
  desc: "Framework"
}, {
  imgSrc: "/images/tailwindcss.svg",
  label: "TailwindCSS",
  desc: "User Interface"
}];
export default function Skill() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "headline-2"
  }, "Essential Tools I use"), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-400 mt-3 mb-8"
  }, "Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications."), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]"
  }, skillItem.map(({
    imgSrc,
    label,
    desc
  }, key) => /*#__PURE__*/React.createElement(SkillCard, {
    key: key,
    imgSrc: imgSrc,
    label: label,
    desc: desc
  })))));
}