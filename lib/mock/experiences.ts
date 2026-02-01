export type ExperienceType = "Tip" | "Warning" | "Struggle" | "Reality Check";

export type Experience = {
  id: string;
  type: ExperienceType;
  content: string;
  createdAt: string; // ISO date string (YYYY-MM-DD)
};

export const mockExperiences: Experience[] = [
  {
    id: "1",
    type: "Tip",
    content: "Ask questions early, even if they seem small.",
    createdAt: "2026-01-20",
  },
  {
    id: "2",
    type: "Warning",
    content: "Access setup can take longer than expected—start it day one.",
    createdAt: "2026-01-21",
  },
  {
    id: "3",
    type: "Struggle",
    content:
      "The codebase felt overwhelming at first, so I focused on one folder at a time.",
    createdAt: "2026-01-22",
  },
  {
    id: "4",
    type: "Reality Check",
    content:
      "The first week can feel slow—most time goes into access, setup, and learning workflows.",
    createdAt: "2026-01-23",
  },
];
