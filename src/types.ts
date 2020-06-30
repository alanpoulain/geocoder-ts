export type PartialSome<
  O,
  P extends keyof O,
  Q = Omit<O, P>,
  R = { [K in P]?: O[P] }
> = Q & R;