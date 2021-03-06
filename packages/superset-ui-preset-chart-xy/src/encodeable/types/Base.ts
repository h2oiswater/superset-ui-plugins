export type ObjectWithKeysFromAndValueType<T extends {}, V> = { [key in keyof T]: V };

export type Unarray<T> = T extends Array<infer U> ? U : T;
export type MayBeArray<T> = T | T[];

export function isArray<T>(maybeArray: T | T[]): maybeArray is T[] {
  return Array.isArray(maybeArray);
}

export function isNotArray<T>(maybeArray: T | T[]): maybeArray is T {
  return !Array.isArray(maybeArray);
}

export function isDefined<T>(x: any): x is T {
  return typeof x !== 'undefined';
}
