import client from "@/api/lib/prisma-client"
import { Prisma, VerifyKey } from "@prisma/client"

const posts: Prisma.PostCreateManyArgs['data'] = [
  {
    encrypted_body: "U0w1eXegjZXVQaNCjH2UQWaEhmio9Zb6IHG+gvzOG0EBOFimqy9IrG/oX3fR8JO/jsbIZNrICmfKqgkTUWN2F8eVChjG",
    public_key_digest: "wAcrImJaLu2iwSz+q428Z7",
    verify_key_digest: "wAcrImJaLu2iwSz+q428Z7",
    ip_address: "192.168.0.1",
    created_at: new Date("2025-01-06T04:13:07Z"),
  },
  {
    encrypted_body: "lR3JjtNxHtyeLwfuUPtFcA3qX82gzqYdmg1/1xlYtBFT2Wfyy6lbjOd3gU5J7FTJ0lnuUq5gK7xhZtPOl6sMjZyb/qzkg",
    public_key_digest: "mRz1lKaQF35Qdwpb7PqwRk",
    verify_key_digest: null,
    ip_address: "192.168.0.2",
    created_at: new Date("2025-01-05T10:22:19Z"),
  },
  {
    encrypted_body: "y9vATKb7Fz9GoLlmnX1gO9n5IcYVwN5wB56ZhLq3hbd7/OpZ5xR2Z7BQ5yb09hDl6rRY2DP8++pZ7LgJZlJe1YI+zZBqa",
    public_key_digest: "h9Kv5e7imUtD73F7gAcxGp",
    verify_key_digest: "h9Kv5e7imUtD73F7gAcxGp",
    ip_address: "192.168.0.3",
    created_at: new Date("2025-01-04T16:01:13Z"),
  },
  {
    encrypted_body: "xyDxxvEIlAhBp0vQByg0Q92psAm9jAGv55MlXZ0oSQUc6cOBgUB9VeerZYxUV75uLfqljTn06kR5OtJ0y37djq9zUMuPtm",
    public_key_digest: "xqfzLPkrk4Is8cOBuA5W5v",
    verify_key_digest: "xqfzLPkrk4Is8cOBuA5W5v",
    ip_address: "192.168.0.4",
    created_at: new Date("2025-01-03T14:50:22Z"),
  },
  {
    encrypted_body: "ZofD2hRbq1pWRk2Y+/IuyhVtt4ZdBRzOp94ZB51yHTbQn0KMVQwX9xTq7HbN3pQByebZflTt3jTtSyvF94BG1f+E40gGmY",
    public_key_digest: "u8O9cFPoyWlxs1q7SlLPkA",
    verify_key_digest: "u8O9cFPoyWlxs1q7SlLPkA",
    ip_address: "192.168.0.5",
    created_at: new Date("2025-01-02T22:43:30Z"),
  },
  {
    encrypted_body: "2rxF56LnZ9kbE1rp/mY4lIl3Nj4pQx7+sh7lbJvewTwbdlhNhq30OUu5YH4Bts3vf5b13ghRhIjgYo3c9i9t3JKtLlvwTw",
    public_key_digest: "pVo9yz+MroAfst72g1JZ9Q",
    verify_key_digest: null,
    ip_address: "192.168.0.6",
    created_at: new Date("2025-01-01T21:32:58Z"),
  },
  {
    encrypted_body: "AGdckjmxt3PSx3vB/UlhfM7gNoas3tfsHY5Dp1fiRhwpt7mPYVe58J6Tg8PRofIS1Sgtw9SMX30tMkhLe05I1q2Ff+0uNw",
    public_key_digest: "qE65sw5lFx8fYd+FCyRVbB",
    verify_key_digest: null,
    ip_address: "192.168.0.7",
    created_at: new Date("2025-01-06T11:19:02Z"),
  },
  {
    encrypted_body: "v+8tiV8f1AfETwwl+fSkGhBl/qn3x1YUNgbvqPySTFNxh3gUmWQlh9bw2+XaAt5f8Vky5GozGf3Q1pFZbIjdtGHpk8Atd0",
    public_key_digest: "rZt9wPmdFGX6HYQFYo6CzV",
    verify_key_digest: null,
    ip_address: "192.168.0.8",
    created_at: new Date("2025-01-05T18:27:10Z"),
  },
  {
    encrypted_body: "rt5hWzqIUojwa3E7PpDqQMzV7jSdoEpnVkBGD6lyFmcqjJX92oB7wFToVZT03ObmBaGqkcD1z8KPuwTqbkk7BdEvTnNEgs",
    public_key_digest: "uWu6eS7fu7A54l1OegZtWm",
    verify_key_digest: null,
    ip_address: "192.168.0.9",
    created_at: new Date("2025-01-04T17:02:47Z"),
  },
  {
    encrypted_body: "eVv+2wRHqPEdV2BOtRjtMv4g4vZoOFg76x6qge17Rl2P4HniAx8B5JgKaR2bBbmwJZbAqdeATZ68XDs6p7R6ZVOPavtgmE",
    public_key_digest: "L59BAs8nVUmfmxOTM6v60n",
    verify_key_digest: "L59BAs8nVUmfmxOTM6v60n",
    ip_address: "192.168.0.10",
    created_at: new Date("2025-01-03T12:01:09Z"),
  },
  {
    encrypted_body: "F+aXTjH5jMf/6N6sQGpDxo1CUdPlq8hQQFnyJ9MiOOV3F6PU8+bZj57U2z3tmFVRHOSoEItlOUFJmHhcAvOHtzl74mj7+",
    public_key_digest: "gYOpC9b8ZbRtVmKwPtEy5e",
    verify_key_digest: null,
    ip_address: "192.168.0.11",
    created_at: new Date("2025-01-02T09:51:40Z"),
  },
  {
    encrypted_body: "qlAYyd5jXzjXv7jptHEz6q1gM2xzDFf7Nfb/vM+me/4Mi0qdOczdyIlws3y0iE2V6V5gaB3V0z5Z7cxa4HQw1a+7F7S4b3",
    public_key_digest: "4h7t9c4xUquF9rx72yB9B3",
    verify_key_digest: "4h7t9c4xUquF9rx72yB9B3",
    ip_address: "192.168.0.12",
    created_at: new Date("2025-01-01T08:30:51Z"),
  },
  {
    encrypted_body: "3ltQshczTqgA8D6Rzp69+g1ovgpfpM5B3kq6FwDhH/jR9V4Okrll7NzfhYPKmcihvOlOXuJ+y9yBdOCt9VXwEOgK7zZgY",
    public_key_digest: "FplCr4Tcu4bFdkQ2tzFREz",
    verify_key_digest: "FplCr4Tcu4bFdkQ2tzFREz",
    ip_address: "192.168.0.13",
    created_at: new Date("2025-01-06T13:41:58Z"),
  },
  {
    encrypted_body: "HRh+vYhFfQ2F4tch5+RHqHcH6pAq0dMczLqxq6Pz+lhHn1YoB95OkGfhAybzOdsEj8jk2l2oDdNYxLZ2POkrj7k9zVrxht",
    public_key_digest: "9m3qA6xOdj6bxUQ8rFhzGh",
    verify_key_digest: "9m3qA6xOdj6bxUQ8rFhzGh",
    ip_address: "192.168.0.14",
    created_at: new Date("2025-01-05T22:03:46Z"),
  },
  {
    encrypted_body: "KnQJft1XwFTgMcVGz4Ul3k7Aq1Ejh4XRoEfgSzQVE7S7lRm77+dR13a7f4U5tKVGy8qHbnl9fF1bMLHgqMiZg3bSRHjs5d",
    public_key_digest: "q0FfXqJNrVOovayWG8yX7V",
    verify_key_digest: null,
    ip_address: "192.168.0.15",
    created_at: new Date("2025-01-04T15:27:12Z"),
  },
  {
    encrypted_body: "6R9h6UVF+lZXtVKgiTr6mR9Ut9mcgrO1u5TZVdcOkkbfXMFi97nqQ+yyQO8wGJ3B6tYHDncsMmQmpZ0UktjFkWwCVZ2XmkH",
    public_key_digest: "1zZXlUvTl/7kB9W/g0dH0o",
    verify_key_digest: null,
    ip_address: "192.168.0.16",
    created_at: new Date("2025-01-03T10:16:28Z"),
  },
  {
    encrypted_body: "q3bcYBh8gf07gYhcfQwFmrgZnVbw5Zgdo9g1pXbU+mMzzwD5zQjR+jlvH7eUzqk+q1QdYkCwVMyg6nx2PAZEK+6wXZDBie",
    public_key_digest: "NzFjmHiGpq4s4X3r2bwNh1",
    verify_key_digest: null,
    ip_address: "192.168.0.17",
    created_at: new Date("2025-01-02T17:35:50Z"),
  },
  {
    encrypted_body: "2DhbzGYnBmfM9T9ji+K01oqZzzf1A6yfIKsHwV+2ybLU1HfW8US9vYicr/vAI9c5LZhDbnQ5Y6tiH7VjrQq7mfsb7b0NE4",
    public_key_digest: "bmK9pq09p58N3V3OPfo32h",
    verify_key_digest: null,
    ip_address: "192.168.0.18",
    created_at: new Date("2025-01-01T06:14:06Z"),
  }
];

// 仮
const verifyKeys: Prisma.VerifyKeyCreateManyArgs['data'] = [
  {
    "digest": "wAcrImJaLu2iwSz+q428Z7",
    "ip_address": "192.168.0.1",
    "created_at": new Date(),
    "verify_key": "U0w1eXegjZXVQaNCjH2UQWaEhmio9Zb6IHG+gvzOG0EBOFimqy9IrG/oX3fR8JO/jsbIZNrICmfKqgkTUWN2F8eVChjGFi72dNxazcUsvAJp9VL5ObnzKnA4LMiPFLZVQx5yMG7jf0WobjsyZj3BglI+0DBX1nAvbqpoO2fZDs252EN++cJAL+ytIkWUPiaXIHX4/knAyXrGvo529Ke5iyOU6O1KZn1RRi9/7L43Vgb/Zo606CRgaTGZgpn7czJbYP47FfVXKH+3dK/yjWKqtJxotWjAerKdRNog8aF8YzP8yZIlaDHFSrEdQSEc00807GAOtLJD/hspKb+kLQeyOMWY1w/4HSPYU1yMcUbvDuG5IXAXFwou3AqGpkJVR71vSfIVGnf6ZFIGWjHW6/5OGo2s455EjePS2imWh2N/uxSHhEY+0c7"
  },
  {
    "digest": "h9Kv5e7imUtD73F7gAcxGp",
    "ip_address": "192.168.0.1",
    "created_at": new Date(),
    "verify_key": "U0w1eXegjZXVQaNCjH2UQWaEhmio9Zb6IHG+gvzOG0EBOFimqy9IrG/oX3fR8JO/jsbIZNrICmfKqgkTUWN2F8eVChjGFi72dNxazcUsvAJp9VL5ObnzKnA4LMiPFLZVQx5yMG7jf0WobjsyZj3BglI+0DBX1nAvbqpoO2fZDs252EN++cJAL+ytIkWUPiaXIHX4/knAyXrGvo529Ke5iyOU6O1KZn1RRi9/7L43Vgb/Zo606CRgaTGZgpn7czJbYP47FfVXKH+3dK/yjWKqtJxotWjAerKdRNog8aF8YzP8yZIlaDHFSrEdQSEc00807GAOtLJD/hspKb+kLQeyOMWY1w/4HSPYU1yMcUbvDuG5IXAXFwou3AqGpkJVR71vSfIVGnf6ZFIGWjHW6/5OGo2s455EjePS2imWh2N/uxSHhEY+0c7"
  },
  {
    "digest": "xqfzLPkrk4Is8cOBuA5W5v",
    "ip_address": "192.168.0.1",
    "created_at": new Date(),
    "verify_key": "U0w1eXegjZXVQaNCjH2UQWaEhmio9Zb6IHG+gvzOG0EBOFimqy9IrG/oX3fR8JO/jsbIZNrICmfKqgkTUWN2F8eVChjGFi72dNxazcUsvAJp9VL5ObnzKnA4LMiPFLZVQx5yMG7jf0WobjsyZj3BglI+0DBX1nAvbqpoO2fZDs252EN++cJAL+ytIkWUPiaXIHX4/knAyXrGvo529Ke5iyOU6O1KZn1RRi9/7L43Vgb/Zo606CRgaTGZgpn7czJbYP47FfVXKH+3dK/yjWKqtJxotWjAerKdRNog8aF8YzP8yZIlaDHFSrEdQSEc00807GAOtLJD/hspKb+kLQeyOMWY1w/4HSPYU1yMcUbvDuG5IXAXFwou3AqGpkJVR71vSfIVGnf6ZFIGWjHW6/5OGo2s455EjePS2imWh2N/uxSHhEY+0c7"
  },
  {
    "digest": "u8O9cFPoyWlxs1q7SlLPkA",
    "ip_address": "192.168.0.1",
    "created_at": new Date(),
    "verify_key": "U0w1eXegjZXVQaNCjH2UQWaEhmio9Zb6IHG+gvzOG0EBOFimqy9IrG/oX3fR8JO/jsbIZNrICmfKqgkTUWN2F8eVChjGFi72dNxazcUsvAJp9VL5ObnzKnA4LMiPFLZVQx5yMG7jf0WobjsyZj3BglI+0DBX1nAvbqpoO2fZDs252EN++cJAL+ytIkWUPiaXIHX4/knAyXrGvo529Ke5iyOU6O1KZn1RRi9/7L43Vgb/Zo606CRgaTGZgpn7czJbYP47FfVXKH+3dK/yjWKqtJxotWjAerKdRNog8aF8YzP8yZIlaDHFSrEdQSEc00807GAOtLJD/hspKb+kLQeyOMWY1w/4HSPYU1yMcUbvDuG5IXAXFwou3AqGpkJVR71vSfIVGnf6ZFIGWjHW6/5OGo2s455EjePS2imWh2N/uxSHhEY+0c7"
  },
  {
    "digest": "L59BAs8nVUmfmxOTM6v60n",
    "ip_address": "192.168.0.1",
    "created_at": new Date(),
    "verify_key": "U0w1eXegjZXVQaNCjH2UQWaEhmio9Zb6IHG+gvzOG0EBOFimqy9IrG/oX3fR8JO/jsbIZNrICmfKqgkTUWN2F8eVChjGFi72dNxazcUsvAJp9VL5ObnzKnA4LMiPFLZVQx5yMG7jf0WobjsyZj3BglI+0DBX1nAvbqpoO2fZDs252EN++cJAL+ytIkWUPiaXIHX4/knAyXrGvo529Ke5iyOU6O1KZn1RRi9/7L43Vgb/Zo606CRgaTGZgpn7czJbYP47FfVXKH+3dK/yjWKqtJxotWjAerKdRNog8aF8YzP8yZIlaDHFSrEdQSEc00807GAOtLJD/hspKb+kLQeyOMWY1w/4HSPYU1yMcUbvDuG5IXAXFwou3AqGpkJVR71vSfIVGnf6ZFIGWjHW6/5OGo2s455EjePS2imWh2N/uxSHhEY+0c7"
  },
  {
    "digest": "4h7t9c4xUquF9rx72yB9B3",
    "ip_address": "192.168.0.1",
    "created_at": new Date(),
    "verify_key": "U0w1eXegjZXVQaNCjH2UQWaEhmio9Zb6IHG+gvzOG0EBOFimqy9IrG/oX3fR8JO/jsbIZNrICmfKqgkTUWN2F8eVChjGFi72dNxazcUsvAJp9VL5ObnzKnA4LMiPFLZVQx5yMG7jf0WobjsyZj3BglI+0DBX1nAvbqpoO2fZDs252EN++cJAL+ytIkWUPiaXIHX4/knAyXrGvo529Ke5iyOU6O1KZn1RRi9/7L43Vgb/Zo606CRgaTGZgpn7czJbYP47FfVXKH+3dK/yjWKqtJxotWjAerKdRNog8aF8YzP8yZIlaDHFSrEdQSEc00807GAOtLJD/hspKb+kLQeyOMWY1w/4HSPYU1yMcUbvDuG5IXAXFwou3AqGpkJVR71vSfIVGnf6ZFIGWjHW6/5OGo2s455EjePS2imWh2N/uxSHhEY+0c7"
  },
  {
    "digest": "FplCr4Tcu4bFdkQ2tzFREz",
    "ip_address": "192.168.0.1",
    "created_at": new Date(),
    "verify_key": "U0w1eXegjZXVQaNCjH2UQWaEhmio9Zb6IHG+gvzOG0EBOFimqy9IrG/oX3fR8JO/jsbIZNrICmfKqgkTUWN2F8eVChjGFi72dNxazcUsvAJp9VL5ObnzKnA4LMiPFLZVQx5yMG7jf0WobjsyZj3BglI+0DBX1nAvbqpoO2fZDs252EN++cJAL+ytIkWUPiaXIHX4/knAyXrGvo529Ke5iyOU6O1KZn1RRi9/7L43Vgb/Zo606CRgaTGZgpn7czJbYP47FfVXKH+3dK/yjWKqtJxotWjAerKdRNog8aF8YzP8yZIlaDHFSrEdQSEc00807GAOtLJD/hspKb+kLQeyOMWY1w/4HSPYU1yMcUbvDuG5IXAXFwou3AqGpkJVR71vSfIVGnf6ZFIGWjHW6/5OGo2s455EjePS2imWh2N/uxSHhEY+0c7"
  },
  {
    "digest": "9m3qA6xOdj6bxUQ8rFhzGh",
    "ip_address": "192.168.0.1",
    "created_at": new Date(),
    "verify_key": "U0w1eXegjZXVQaNCjH2UQWaEhmio9Zb6IHG+gvzOG0EBOFimqy9IrG/oX3fR8JO/jsbIZNrICmfKqgkTUWN2F8eVChjGFi72dNxazcUsvAJp9VL5ObnzKnA4LMiPFLZVQx5yMG7jf0WobjsyZj3BglI+0DBX1nAvbqpoO2fZDs252EN++cJAL+ytIkWUPiaXIHX4/knAyXrGvo529Ke5iyOU6O1KZn1RRi9/7L43Vgb/Zo606CRgaTGZgpn7czJbYP47FfVXKH+3dK/yjWKqtJxotWjAerKdRNog8aF8YzP8yZIlaDHFSrEdQSEc00807GAOtLJD/hspKb+kLQeyOMWY1w/4HSPYU1yMcUbvDuG5IXAXFwou3AqGpkJVR71vSfIVGnf6ZFIGWjHW6/5OGo2s455EjePS2imWh2N/uxSHhEY+0c7"
  }
]

async function seedPosts() {
  await client.verifyKey.deleteMany()
  await client.verifyKey.createMany({ data: verifyKeys })
  await client.post.deleteMany()
  await client.post.createMany({ data: posts })
}

await seedPosts()