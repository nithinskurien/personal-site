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
  }),
});

export const collections = {
  projects
};
