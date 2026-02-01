export type ExperienceType =
  | "Struggle"
  | "Warning"
  | "Tip"
  | "Expectation vs Reality";
export type ExperienceTimePeriod = "Week 1" | "Month 1" | "Month 3";

export type Experience = {
  id: string;
  userId: string; // mock placeholder for ObjectId
  companyId: string; // mock placeholder for ObjectId
  type: ExperienceType;
  content: string;
  tags: string[];
  timePeriod: ExperienceTimePeriod;
  createdAt: string; // ISO date string
};

export const mockExperiences: Experience[] = [
  {
    id: "1",
    userId: "mock-user-1",
    companyId: "mock-company-1",
    type: "Tip",
    content: "Ask questions early, even if they seem small.",
    tags: ["communication", "onboarding"],
    timePeriod: "Week 1",
    createdAt: "2026-01-20",
  },
  {
    id: "2",
    userId: "mock-user-2",
    companyId: "mock-company-1",
    type: "Warning",
    content: "Access setup can take longer than expected—start it day one.",
    tags: ["access", "tools"],
    timePeriod: "Week 1",
    createdAt: "2026-01-21",
  },
  {
    id: "3",
    userId: "mock-user-3",
    companyId: "mock-company-1",
    type: "Struggle",
    content:
      "The codebase felt overwhelming at first, so I focused on one folder at a time.",
    tags: ["codebase", "learning"],
    timePeriod: "Month 1",
    createdAt: "2026-01-22",
  },
  {
    id: "4",
    userId: "mock-user-4",
    companyId: "mock-company-1",
    type: "Expectation vs Reality",
    content:
      "I expected to build features immediately, but the first weeks were mostly setup and learning workflows.",
    tags: ["expectations", "workflow"],
    timePeriod: "Month 3",
    createdAt: "2026-01-23",
  },
];
