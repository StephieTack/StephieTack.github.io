import PropTypes from "prop-types";
export default function SkillCard({
  imgSrc,
  label,
  desc,
  classes
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 ring-2 ring-inset ring-zinc-50/50 rounded2xl p-3 hover:bg-zinc-800 transition-colors group " + classes
  }, /*#__PURE__*/React.createElement("figure", {
    className: "bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors"
  }, /*#__PURE__*/React.createElement("img", {
    src: imgSrc,
    width: 32,
    height: 32,
    alt: label
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, label), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-400 text-sm"
  }, desc)));
}
SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string
};