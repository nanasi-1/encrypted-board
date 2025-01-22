import { ClientErrorStatusCode, ServerErrorStatusCode } from "hono/utils/http-status"

export type ErrorStatusCode = ClientErrorStatusCode | ServerErrorStatusCode

export type CustomError = Readonly<{
  code: string,
  status: ErrorStatusCode,
  message: string
}>

export type CustomErrorInit = Readonly<{
  names: string[]
  message: string,
  status?: ErrorStatusCode
}>

export const unknownError = {
  code: 'UnknownError',
  status: 500,
  message: '予期せぬエラーが発生しました'
} as const satisfies CustomError


// getError関数のファクトリ
export const createGetError = (inits: readonly CustomErrorInit[]) => (code: string) => {
  const error = inits.find(e => e.names.includes(code))
  if (!error) return null

  return {
    code,
    status: error.status ?? 400,
    message: error.message
  } satisfies  CustomError
}
