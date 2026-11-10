export default function StackTags({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="stack-tags" aria-label="Tech stack">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}
