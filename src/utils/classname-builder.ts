// immutable
export class ClassNames<T extends readonly string[]> {
  readonly classnames: T;

  [Symbol.iterator]() {
    return this.classnames[Symbol.iterator]()
  }

  constructor(base: T) {
    this.classnames = base
  }

  add<N extends string>(classname: N): ClassNames<[...T, N]>
  add<N extends string | null | void>(classname: N): ClassNames<T>
  add<N extends string | null | void>(classname: N) {
    if (classname === void 0 || classname === null) return this
    return new ClassNames([...this.classnames, classname] as const)
  }

  addByArray<N extends readonly string[]>(classnames: N): ClassNames<readonly [...T, ...N]>
  addByArray<N extends readonly string[] | null | void>(classnames: N): ClassNames<T>
  addByArray<N extends readonly string[] | null | void>(classnames: N): ClassNames<any> {
    if (classnames === null || classnames === void 0) return this
    return new ClassNames([...this.classnames, ...classnames as string[]] as const)
  }

  build(): Join<T> {
    return this.classnames.join(' ') as Join<T>
  }
}

type Join<Array extends readonly string[], Joined extends string | null = null> = Array extends readonly [
  infer T extends string,
  ...other: infer Other extends readonly string[]
]
  ? Joined extends null ? Join<Other, T> : Join<Other, `${Joined} ${T}`>
  : Joined extends null ? '' : Joined

export function classnameBuilder() {
  return new ClassNames([] as const)
}