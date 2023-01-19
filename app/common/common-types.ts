type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...Array<0>,
];

export type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

// includes the nested object keys
export type NestedObjectPaths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, NestedObjectPaths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : '';

// includes only the leaf keys in a tree
export type NestedObjectLeaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {[K in keyof T]-?: Join<K, NestedObjectLeaves<T[K], Prev[D]>>}[keyof T]
  : '';
