import ExperienceCard from "@/components/ExperienceCard";
import { mockExperiences } from "@/lib/mock/experiences";

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Insights
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Real experiences shared by newcomers — tips, warnings, struggles,
            and expectation vs reality moments.
          </p>
        </header>

        <ul className="space-y-4">
          {mockExperiences.map((experience) => (
            <li key={experience.id}>
              <ExperienceCard experience={experience} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
