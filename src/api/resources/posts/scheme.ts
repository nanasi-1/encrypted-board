import { PostRequestBody } from "@/types";
import { z } from "zod";
import { stringToJSONSchema } from "@/api/lib/schemes/json";

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

export function parsePostBody(body: string)
  : z.SafeParseReturnType<PostRequestBody | string, PostRequestBody> {
  const scheme = z.object({
    plainText: z.string(),
    publicKey: z.string().base64(),
    sign: z.union([
      z.object({
        has: z.literal(false)
      }).strict(),
      z.object({
        has: z.literal(true),
        signKeyDigest: z.string().base64(),
        signature: z.string().base64()
      }).strict()
    ])
  }).strict()

  const json = stringToJSONSchema.safeParse(body)
  if (!json.success) return json

  return scheme.safeParse(json.data)
}