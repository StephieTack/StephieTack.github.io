import PropTypes from "prop-types";
function ButtonPrimary({
  href,
  target = "_self",
  label,
  icon,
  classes
}) {
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      target: target,
      className: "btn btn-primary " + classes
    }, label, icon ? /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-rounded",
      "aria-hidden": "true"
    }, icon) : null);
  } else {
    return /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary " + classes
    }, label, icon ? /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-rounded",
      "aria-hidden": "true"
    }, icon) : null);
  }
}
ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
};
function ButtonOutline({
  href,
  target = "_self",
  label,
  icon,
  classes
}) {
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      target: target,
      className: "btn btn-outline " + classes
    }, label, icon ? /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-rounded",
      "aria-hidden": "true"
    }, icon) : null);
  } else {
    return /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline " + classes
    }, label, icon ? /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-rounded",
      "aria-hidden": "true"
    }, icon) : null);
  }
}
ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
};
export { ButtonPrimary, ButtonOutline };