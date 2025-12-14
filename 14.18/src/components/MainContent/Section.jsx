export default function Section({ title, children, abc }) {
  return (
    <section id={abc}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}
