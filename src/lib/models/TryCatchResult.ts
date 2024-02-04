export class TryCatchResult<T> {
  readonly result: T;
  readonly error: any | null;
  readonly ok: boolean;

  constructor(result: T, error: Error | null, ok: boolean) {
    this.result = result;
    this.error = error;
    this.ok = ok;
  }
}
