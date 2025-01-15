const aboutItems = [{
  label: "Project done",
  number: 45
}, {
  label: "Years of experience",
  number: 10
}];
export default function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-zinc-800/50 p-7 rounded-2xl md:p-12"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]"
  }, "Welcome! I'm Henry, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-4 md:gap-7 "
  }, aboutItems.map(({
    label,
    number
  }, key) => /*#__PURE__*/React.createElement("div", {
    key: key
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center md:mb-2 "
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-semibold md:text-4xl"
  }, number), /*#__PURE__*/React.createElement("span", {
    className: "text-sky-400 font-semibold md:text-3xl"
  }, "+")), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-zinc-400"
  }, label))), /*#__PURE__*/React.createElement("img", {
    src: "/images/logo.svg",
    alt: "Logo",
    width: 30,
    height: 30,
    className: "ml-auto md:w-[40px] md:h-[40px]"
  })))));
}