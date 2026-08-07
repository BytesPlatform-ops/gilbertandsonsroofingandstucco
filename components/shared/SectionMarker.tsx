export default function SectionMarker({
  number,
  label,
  tone = "light",
}: {
  number: string;
  label: string;
  tone?: "light" | "dark";
}) {
  const borderColor = tone === "dark" ? "border-white/30" : "border-brand-ink";
  const textColor = tone === "dark" ? "text-text-on-dark" : "text-brand-ink";
  const dotColor = tone === "dark" ? "bg-white" : "bg-brand-primary";

  return (
    <div className={`inline-flex items-center gap-2.5 border-2 ${borderColor} px-3 py-1.5`}>
      <span className={`section-marker ${textColor}`}>{number}</span>
      <span className={`w-1.5 h-1.5 ${dotColor} shrink-0`} aria-hidden="true" />
      <span className={`section-marker ${textColor}`}>{label}</span>
    </div>
  );
}
