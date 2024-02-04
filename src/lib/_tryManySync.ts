import _trySync from './_trySync';
import { TryCatchResult } from './models/TryCatchResult';

export default function _tryMany<T>(tryFunction: () => T, numberOfTrials: number) {
  let tryCatchResult: TryCatchResult<T> = null;

  let counter = 0;
  while (counter < numberOfTrials) {
    tryCatchResult = _trySync(tryFunction);

    if (tryCatchResult.ok) break;
    counter++;
  }

  return tryCatchResult;
}
