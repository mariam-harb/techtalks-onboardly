import ExperienceCard from "@/components/ExperienceCard";
import { mockExperiences } from "@/lib/mock/experiences";

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Insights</h1>
          <p className="mt-2 text-gray-600">
            Real experiences shared by newcomers — tips, warnings, struggles,
            and reality checks.
          </p>
        </header>

        <div className="space-y-4">
          {mockExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </main>
  );
}
