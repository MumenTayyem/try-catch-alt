import { TryCatchResult } from './models/TryCatchResult';

export default async function _try<T>(tryFunction: () => Promise<T>): Promise<TryCatchResult<T>> {
  let tryCatchResult: TryCatchResult<T> = null;

  try {
    const result: T = await tryFunction.call(this);

    tryCatchResult = new TryCatchResult<T>(result, null, true);
  } catch (error: any) {
    tryCatchResult = new TryCatchResult<T>(null, error, false);
  }
  return tryCatchResult;
}
