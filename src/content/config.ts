import { defineCollection, z } from 'astro:content';

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    description: z.string(),
    publishDate: z.string(),
    updateDate: z.string(),
    platform: z.enum(['windows', 'android', 'ios', 'macos', 'router', 'general']),
    author: z.string().default('VPNTOP 编辑部'),
    tags: z.array(z.string()).default([]),
    recommendedAirports: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    description: z.string(),
    publishDate: z.string(),
    updateDate: z.string(),
    author: z.string().default('VPNTOP 编辑部'),
    category: z.string().default('行业观察'),
    tags: z.array(z.string()).default([]),
    relatedTopics: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const glossaryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(),
    title: z.string(),
    metaTitle: z.string().optional(),
    description: z.string(),
    publishDate: z.string(),
    updateDate: z.string(),
    category: z.string().default('核心概念'),
    difficulty: z.enum(['初级', '进阶', '高阶']).default('初级'),
    relatedTerms: z.array(z.string()).default([]),
    relatedGuides: z.array(z.string()).default([]),
  }),
});

export const collections = {
  guides: guidesCollection,
  blog: blogCollection,
  glossary: glossaryCollection,
};
