import * as R from '@fp-ts/data/Result'
import * as RA from '@fp-ts/data/ReadonlyArray'
import * as F from '@fp-ts/data/Function'

const Function: Omit<typeof F, never> = F
const Result: Omit<typeof R, never> = R
const ReadonlyArray: Omit<typeof RA, never> = RA

export type Result<E, A> = R.Result<E, A>

export { Function, Result, ReadonlyArray }
