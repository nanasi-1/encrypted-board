'use server'
import { PostData } from "@/types"
import { PrismaClient } from "@prisma/client"

// @ts-ignore シード用
async function addFirstPost() {
  const client = new PrismaClient()
  await client.post.create({
    data: {
      encrypted_body: "U0w1eXegjZXVQaNCjH2UQWaEhmio9Zb6IHG+gvzOG0EBOFimqy9IrG/oX3fR8JO/jsbIZNrICmfKqgkTUWN2F8eVChjGFi72dNxazcUsvAJp9VL5ObnzKnA4LMiPFLZVQx5yMG7jf0WobjsyZj3BglI+0DBX1nAvbqpoO2fZDs252EN++cJAL+ytIkWUPiaXIHX4/knAyXrGvo529Ke5iyOU6O1KZn1RRi9/7L43Vgb/Zo606CRgaTGZgpn7czJbYP47FfVXKH+3dK/yjWKqtJxotWjAerKdRNog8aF8YzP8yZIlaDHFSrEdQSEc00807GAOtLJD/hspKb+kLQeyOMWY1w/4HSPYU1yMcUbvDuG5IXAXFwou3AqGpkJVR71vSfIVGnf6ZFIGWjHW6/5OGo2s455EjePS2imWh2N/uxSHhEY+0c7",
      created_at: new Date(),
      public_key_digest: "wAcrImJaLu2iwSz+q428Z7",
      verify_key_digest: null,
      ip_address: '192/168.0.3'
    }
  })
}
