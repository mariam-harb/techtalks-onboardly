import type { Experience, ExperienceType } from "@/lib/mock/experiences";

const badgeStyles: Record<ExperienceType, string> = {
  Tip: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-200",
  Warning:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200",
  Struggle: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-200",
  "Expectation vs Reality":
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200",
};

// Avoid UTC off-by-one when dateString is bare YYYY-MM-DD
function formatDate(dateString: string) {
  let d: Date;

  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    const [y, m, day] = dateString.split("-").map(Number);
    d = new Date(y, m - 1, day); // local date
  } else {
    d = new Date(dateString);
  }

  if (Number.isNaN(d.getTime())) return dateString;
  return d.toLocaleDateString();
}

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <article className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between gap-4">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeStyles[experience.type]}`}
        >
          {experience.type}
        </span>

        <time
          className="text-xs text-gray-500 dark:text-gray-400"
          dateTime={experience.createdAt}
        >
          {formatDate(experience.createdAt)}
        </time>
      </div>

      <p className="mt-3 text-gray-900 leading-relaxed dark:text-gray-100">
        {experience.content}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {experience.timePeriod}
        </span>

        {experience.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
