import { z } from "zod";

export function parsePostQuery(query: Record<string, string>): z.infer<typeof scheme> {
  const scheme = z.object({
    page: z.coerce.number().min(1).catch(1),
  })
  const result = scheme.safeParse(query)
  if (result.success) {
    return result.data
  } else { // ここに到達することはないはず
    console.error('Failed to parse:', {
      query, 
      error: result.error
    })
    return { page: 1 }
  }
}