import { defineCollection, z } from "astro:content";
import { glob} from 'astro/loaders'; 

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    priority: z.number(),
    description: z.string(),
    image: z.string().optional(),
    role: z.string(),
    company: z.string(),
    industry: z.string(),
    employees: z.string(),
    stats: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    ),
    challenge: z.string(),
    results: z.string(),
    process: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    stack: z.array(z.string()),
    conclusion: z.string(),
  }),
});

export const collections = {
  projects
};
