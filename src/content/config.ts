import { z , defineCollection } from 'astro:content'

// 2. Define your collection(s)
const projectCollection = defineCollection({ 
    type: 'content',
    schema: z.object({
      title: z.string(),
      url: z.string().url(),
    })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'projects': projectCollection,
};