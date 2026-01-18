import { z } from "zod";

const NewContent = z.object({
  type: z.enum(["document", "tweet", "youtube", "link"]),
  link: z.string().url({ normalize: true }),
  title: z.string().min(5).max(100),
  tags: z.array(z.string().min(1)),
});

export type newContentType =  z.infer<typeof NewContent>;
export default NewContent
