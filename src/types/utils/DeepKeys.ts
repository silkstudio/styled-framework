type Obj = Record<string, any>

type ExtractKeys<O extends Obj> = {
  [K in keyof O]: O[K] extends Obj ? K : never
}[keyof O]

/**
 * Recursively retrieve all nested keys from an object
 *
 * @template O extends {@link Obj}
 * @template K extends string _(defaults to `keyof O` )_
 *
 * @since 1.0.0
 */

/*








*/

export type DeepKeys<
  O extends Obj,
  // @ts-expect-error Type 'keyof O' does not satisfy the constraint 'string'.
  K extends string = keyof O
> = K extends ExtractKeys<O> ? DeepKeys<O[K]> : K
