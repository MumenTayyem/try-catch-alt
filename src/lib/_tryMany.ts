import _try from './_try';
import { TryCatchResult } from './models/TryCatchResult';

export default async function _tryMany<T>(
  tryFunction: () => Promise<T>,
  numberOfTrials: number,
): Promise<TryCatchResult<T>> {
  let tryCatchResult: TryCatchResult<T> = null;

  let counter = 0;
  while (counter < numberOfTrials) {
    tryCatchResult = await _try<T>(tryFunction);

    if (tryCatchResult.ok) break;
    counter++;
  }

  return tryCatchResult;
}
