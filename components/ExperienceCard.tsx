import type { Experience, ExperienceType } from "@/lib/mock/experiences";

const badgeStyles: Record<ExperienceType, string> = {
  Tip: "bg-green-100 text-green-700",
  Warning: "bg-amber-100 text-amber-700",
  Struggle: "bg-red-100 text-red-700",
  "Reality Check": "bg-blue-100 text-blue-700",
};

function formatDate(dateString: string) {
  const d = new Date(dateString);
  // If date parsing fails, fall back to the raw string
  if (Number.isNaN(d.getTime())) return dateString;
  return d.toLocaleDateString();
}

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <article className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between gap-4">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeStyles[experience.type]}`}
        >
          {experience.type}
        </span>

        <time className="text-xs text-gray-500" dateTime={experience.createdAt}>
          {formatDate(experience.createdAt)}
        </time>
      </div>

      <p className="mt-3 text-gray-900 leading-relaxed">{experience.content}</p>
    </article>
  );
}
