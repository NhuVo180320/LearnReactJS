import PropTypes from "prop-types";

export default function TabButton({ children, onSelect }) {
  //js
  //   const btn = document.querySelector("button");
  //   btn.addEventListener("click", function () {
  //     console.log("You clicked me!");
  //   });

  //react
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
  onSelect: PropTypes.func.isRequired,
};

// export default function TabButton({ batky }) {
//   return (
//     <li>
//       <button>{batky}</button>
//     </li>
//   );
// }
