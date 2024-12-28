// immutable
export class ClassNames<T extends readonly string[]> {
  readonly classnames: T;

  [Symbol.iterator]() {
    return this.classnames[Symbol.iterator]()
  }

  constructor(base: T) {
    this.classnames = base
  }

  add<N extends string>(Classname: N): ClassNames<[...T, N]>
  add<N extends string | null | void>(Classname: N): ClassNames<T> // string | nullは追加しない
  add<N extends string | null | void>(classname: N) {
    if (classname === void 0 || classname === null) return this
    return new ClassNames([...this.classnames, classname] as const)
  }

  build(): Join<T> {
    return this.classnames.join(' ') as Join<T>
  }
}

type Join<Array extends readonly string[], Joined extends string | null = null> = Array extends [
  infer T extends string, 
  ...other: infer Other extends string[]
]
  ? Joined extends null ? Join<Other, `${T}`> : Join<Other, `${Joined} ${T}`>
  : Joined

export function builder() {
  return new ClassNames([] as const)
}

builder()
  .add('text-primary')
  .add(void 0)
  .add('inline-block' )
  .build()