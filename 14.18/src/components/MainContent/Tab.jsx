export default function Tab({ button, children }) {
  return (
    <>
      {/* children la nhung gi nam giua the mo va the dong cua component */}
      <menu>{button}</menu>
      {children}
    </>
  );
}
