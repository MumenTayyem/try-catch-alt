import { TryCatchResult } from './models/TryCatchResult';

export default function _trySync<T>(tryFunction: () => T): TryCatchResult<T> {
  let tryCatchResult: TryCatchResult<T> = null;

  try {
    const result: T = tryFunction.call(this);

    tryCatchResult = new TryCatchResult<T>(result, null, true);
  } catch (error: any) {
    tryCatchResult = new TryCatchResult<T>(null, error, false);
  }
  return tryCatchResult;
}
