export default function Section({ title, children, ...nnn }) {
  return (
    <section {...nnn}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}
