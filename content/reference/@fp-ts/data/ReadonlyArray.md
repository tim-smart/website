## ReadonlyArray

## Constructors

### append

Append an element to the end of a `ReadonlyArray`, creating a new `NonEmptyReadonlyArray`.

```ts
export declare const append: <B>(end: B) => <A>(init: readonly A[]) => readonly [B | A, ...(B | A)[]];
```

Added in: 1.0.0

### makeBy

Return a `ReadonlyArray` of length `n` with element `i` initialized with `f(i)`.

**Note**. `n` is normalized to a non negative integer.

```ts
export declare const makeBy: <A>(f: (i: number) => A) => (n: number) => readonly A[];
```

Added in: 1.0.0

### of

```ts
export declare const of: <A>(a: A) => readonly A[];
```

Added in: 1.0.0

### prepend

Prepend an element to the front of a `ReadonlyArray`, creating a new `NonEmptyReadonlyArray`.

```ts
export declare const prepend: <B>(head: B) => <A>(tail: readonly A[]) => readonly [B | A, ...(B | A)[]];
```

Added in: 1.0.0

### replicate

Create a `ReadonlyArray` containing a value repeated the specified number of times.

**Note**. `n` is normalized to a non negative integer.

```ts
export declare const replicate: <A>(a: A) => (n: number) => readonly A[];
```

Added in: 1.0.0

## Conversions

### fromIterable

```ts
export declare const fromIterable: <A>(collection: Iterable<A>) => readonly A[];
```

Added in: 1.0.0

### fromNullable

```ts
export declare const fromNullable: <A>(a: A) => readonly NonNullable<A>[];
```

Added in: 1.0.0

### fromOption

```ts
export declare const fromOption: <A>(fa: Option<A>) => readonly A[];
```

Added in: 1.0.0

### fromResult

Converts an `Result` to a `ReadonlyArray`.

```ts
export declare const fromResult: <A>(fa: Result<unknown, A>) => readonly A[];
```

Added in: 1.0.0

## Do notation

### bind

```ts
export declare const bind: <N extends string, A extends object, B>(name: Exclude<N, keyof A>, f: (a: A) => readonly B[]) => (self: readonly A[]) => readonly { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }[];
```

Added in: 1.0.0

### bindRight

A variant of `bind` that sequentially ignores the scope.

```ts
export declare const bindRight: <N extends string, A extends object, B>(name: Exclude<N, keyof A>, fb: readonly B[]) => (self: readonly A[]) => readonly { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }[];
```

Added in: 1.0.0

### bindTo

```ts
export declare const bindTo: <N extends string>(name: N) => <A>(self: readonly A[]) => readonly { readonly [K in N]: A; }[];
```

Added in: 1.0.0

### let

```ts
export declare const let: <N extends string, A extends object, B>(name: Exclude<N, keyof A>, f: (a: A) => B) => (self: readonly A[]) => readonly { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }[];
```

Added in: 1.0.0

## Filtering

### compact

```ts
export declare const compact: <A>(foa: readonly Option<A>[]) => readonly A[];
```

Added in: 1.0.0

### filter

```ts
export declare const filter: { <C extends A, B extends A, A = C>(refinement: Refinement<A, B>): (fc: readonly C[]) => readonly B[]; <B extends A, A = B>(predicate: Predicate<A>): (fb: readonly B[]) => readonly B[]; };
```

Added in: 1.0.0

### filterMap

```ts
export declare const filterMap: <A, B>(f: (a: A) => Option<B>) => (self: Iterable<A>) => readonly B[];
```

Added in: 1.0.0

### filterMapWithIndex

```ts
export declare const filterMapWithIndex: <A, B>(f: (i: number, a: A) => Option<B>) => (self: Iterable<A>) => readonly B[];
```

Added in: 1.0.0

### filterWithIndex

```ts
export declare const filterWithIndex: { <C extends A, B extends A, A = C>(refinement: (i: number, a: A) => a is B): (fc: readonly C[]) => readonly B[]; <B extends A, A = B>(predicate: (i: number, a: A) => boolean): (fb: readonly B[]) => readonly B[]; };
```

Added in: 1.0.0

### partition

```ts
export declare const partition: { <C extends A, B extends A, A = C>(refinement: Refinement<A, B>): (fc: readonly C[]) => readonly [readonly C[], readonly B[]]; <B extends A, A = B>(predicate: Predicate<A>): (fb: readonly B[]) => readonly [readonly B[], readonly B[]]; };
```

Added in: 1.0.0

### partitionMap

```ts
export declare const partitionMap: <A, B, C>(f: (a: A) => Result<B, C>) => (fa: readonly A[]) => readonly [readonly B[], readonly C[]];
```

Added in: 1.0.0

### partitionMapWithIndex

```ts
export declare const partitionMapWithIndex: <A, B, C>(f: (i: number, a: A) => Result<B, C>) => (fa: readonly A[]) => readonly [readonly B[], readonly C[]];
```

Added in: 1.0.0

### partitionWithIndex

```ts
export declare const partitionWithIndex: { <C extends A, B extends A, A = C>(refinement: (i: number, a: A) => a is B): (fb: readonly C[]) => readonly [readonly C[], readonly B[]]; <B extends A, A = B>(predicate: (i: number, a: A) => boolean): (fb: readonly B[]) => readonly [readonly B[], readonly B[]]; };
```

Added in: 1.0.0

### separate

```ts
export declare const separate: <A, B>(fe: readonly Result<A, B>[]) => readonly [readonly A[], readonly B[]];
```

Added in: 1.0.0

### traverseFilterMap

```ts
export declare const traverseFilterMap: <F extends TypeLambda>(F: Monoidal<F>) => <A, S, R, O, E, B>(f: (a: A) => Kind<F, S, R, O, E, Option<B>>) => (ta: readonly A[]) => Kind<F, S, R, O, E, readonly B[]>;
```

Added in: 1.0.0

### traversePartitionMap

```ts
export declare const traversePartitionMap: <F extends TypeLambda>(F: Monoidal<F>) => <A, S, R, O, E, B, C>(f: (a: A) => Kind<F, S, R, O, E, Result<B, C>>) => (wa: readonly A[]) => Kind<F, S, R, O, E, readonly [readonly B[], readonly C[]]>;
```

Added in: 1.0.0

## Folding

### foldMap

```ts
export declare const foldMap: <M>(Monoid: Monoid<M>) => <A>(f: (a: A) => M) => (self: readonly A[]) => M;
```

Added in: 1.0.0

### foldMapWithIndex

```ts
export declare const foldMapWithIndex: <M>(Monoid: Monoid<M>) => <A>(f: (i: number, a: A) => M) => (self: readonly A[]) => M;
```

Added in: 1.0.0

### reduce

```ts
export declare const reduce: <B, A>(b: B, f: (b: B, a: A) => B) => (self: readonly A[]) => B;
```

Added in: 1.0.0

### reduceKind

```ts
export declare const reduceKind: <F extends TypeLambda>(Flattenable: FlatMap<F>) => <S, R, O, E, B, A>(fb: Kind<F, S, R, O, E, B>, f: (b: B, a: A) => Kind<F, S, R, O, E, B>) => (self: readonly A[]) => Kind<F, S, R, O, E, B>;
```

Added in: 1.0.0

### reduceRight

```ts
export declare const reduceRight: <B, A>(b: B, f: (a: A, b: B) => B) => (self: readonly A[]) => B;
```

Added in: 1.0.0

### reduceRightWithIndex

```ts
export declare const reduceRightWithIndex: <B, A>(b: B, f: (i: number, a: A, b: B) => B) => (self: readonly A[]) => B;
```

Added in: 1.0.0

### reduceWithIndex

```ts
export declare const reduceWithIndex: <B, A>(b: B, f: (i: number, b: B, a: A) => B) => (self: readonly A[]) => B;
```

Added in: 1.0.0

## Instances

### getIntersectionSemigroup

```ts
export declare const getIntersectionSemigroup: <A>() => Semigroup<readonly A[]>;
```

Added in: 1.0.0

### getMonoid

Returns a `Monoid` for `ReadonlyArray<A>`.

```ts
export declare const getMonoid: <A>() => Monoid<readonly A[]>;
```

Added in: 1.0.0

### getSemigroup

Returns a `Semigroup` for `ReadonlyArray<A>`.

```ts
export declare const getSemigroup: <A>() => Semigroup<readonly A[]>;
```

Added in: 1.0.0

### getUnionMonoid

```ts
export declare const getUnionMonoid: <A>() => Monoid<readonly A[]>;
```

Added in: 1.0.0

### getUnionSemigroup

```ts
export declare const getUnionSemigroup: <A>() => Semigroup<readonly A[]>;
```

Added in: 1.0.0

### liftOrd

Derives an `Ord` over the `ReadonlyArray` of a given element type from the `Ord` of that type. The ordering between two such
`ReadonlyArray`s is equal to: the first non equal comparison of each `ReadonlyArray`s elements taken pairwise in increasing order, in
case of equality over all the pairwise elements; the longest `ReadonlyArray` is considered the greatest, if both `ReadonlyArray`s have
the same length, the result is equality.

```ts
export declare const liftOrd: <A>(O: Sortable<A>) => Sortable<readonly A[]>;
```

Added in: 1.0.0

## Lifting

### lift2

Lifts a binary function into `ReadonlyArray`.

```ts
export declare const lift2: <A, B, C>(f: (a: A, b: B) => C) => (fa: readonly A[], fb: readonly B[]) => readonly C[];
```

Added in: 1.0.0

### lift3

Lifts a ternary function into `ReadonlyArray`.

```ts
export declare const lift3: <A, B, C, D>(f: (a: A, b: B, c: C) => D) => (fa: readonly A[], fb: readonly B[], fc: readonly C[]) => readonly D[];
```

Added in: 1.0.0

### liftNullable

```ts
export declare const liftNullable: <A extends readonly unknown[], B>(f: (...a: A) => B) => (...a: A) => readonly NonNullable<B>[];
```

Added in: 1.0.0

### liftOption

```ts
export declare const liftOption: <A extends readonly unknown[], B>(f: (...a: A) => Option<B>) => (...a: A) => readonly B[];
```

Added in: 1.0.0

### liftPredicate

```ts
export declare const liftPredicate: { <C extends A, B extends A, A = C>(refinement: Refinement<A, B>): (c: C) => readonly B[]; <B extends A, A = B>(predicate: Predicate<A>): (b: B) => readonly B[]; };
```

Added in: 1.0.0

### liftResult

```ts
export declare const liftResult: <A extends readonly unknown[], E, B>(f: (...a: A) => Result<E, B>) => (...a: A) => readonly B[];
```

Added in: 1.0.0

## Mapping

### as

Maps the success value of this effect to the specified constant value.

```ts
export declare const as: <B>(b: B) => (self: readonly unknown[]) => readonly B[];
```

Added in: 1.0.0

### flap

```ts
export declare const flap: <A>(a: A) => <B>(fab: readonly ((a: A) => B)[]) => readonly B[];
```

Added in: 1.0.0

### map

Returns an effect whose success is mapped by the specified `f` function.

```ts
export declare const map: <A, B>(f: (a: A) => B) => (fa: readonly A[]) => readonly B[];
```

Added in: 1.0.0

### unit

Returns the effect resulting from mapping the success of this effect to unit.

```ts
export declare const unit: (self: readonly unknown[]) => readonly void[];
```

Added in: 1.0.0

## Pattern matching

### match

```ts
export declare const match: <B, A, C = B>(onEmpty: LazyArg<B>, onNonEmpty: (as: readonly [A, ...A[]]) => C) => (as: readonly A[]) => B | C;
```

Added in: 1.0.0

### matchLeft

Break a `ReadonlyArray` into its first element and remaining elements.

```ts
export declare const matchLeft: <B, A, C = B>(onEmpty: LazyArg<B>, onNonEmpty: (head: A, tail: readonly A[]) => C) => (as: readonly A[]) => B | C;
```

Added in: 1.0.0

### matchRight

Break a `ReadonlyArray` into its initial elements and the last element.

```ts
export declare const matchRight: <B, A, C = B>(onEmpty: LazyArg<B>, onNonEmpty: (init: readonly A[], last: A) => C) => (as: readonly A[]) => B | C;
```

Added in: 1.0.0

## Refinements

### isNonEmpty

Test whether a `ReadonlyArray` is non empty narrowing down the type to `NonEmptyReadonlyArray<A>`

```ts
export declare const isNonEmpty: <A>(as: readonly A[]) => as is readonly [A, ...A[]];
```

Added in: 1.0.0

## Sequencing

### flatMap

```ts
export declare const flatMap: <A, B>(f: (a: A) => readonly B[]) => (self: readonly A[]) => readonly B[];
```

Added in: 1.0.0

### flatMapNullable

```ts
export declare const flatMapNullable: <A, B>(f: (a: A) => B) => (ma: readonly A[]) => readonly NonNullable<B>[];
```

Added in: 1.0.0

### zipLeft

Sequences the specified effect after this effect, but ignores the value
produced by the effect.

```ts
export declare const zipLeft: (that: readonly unknown[]) => <A>(self: readonly A[]) => readonly A[];
```

Added in: 1.0.0

### zipRight

A variant of `flatMap` that ignores the value produced by this effect.

```ts
export declare const zipRight: <A>(that: readonly A[]) => (self: readonly unknown[]) => readonly A[];
```

Added in: 1.0.0

## Traversing

### sequence

```ts
export declare const sequence: <F extends TypeLambda>(F: Monoidal<F>) => <S, R, O, E, A>(fas: readonly Kind<F, S, R, O, E, A>[]) => Kind<F, S, R, O, E, readonly A[]>;
```

Added in: 1.0.0

### traverse

```ts
export declare const traverse: <F extends TypeLambda>(Applicative: Monoidal<F>) => <A, S, R, O, E, B>(f: (a: A) => Kind<F, S, R, O, E, B>) => (self: readonly A[]) => Kind<F, S, R, O, E, readonly B[]>;
```

Added in: 1.0.0

### traverseWithIndex

```ts
export declare const traverseWithIndex: <F extends TypeLambda>(Applicative: Monoidal<F>) => <A, S, R, O, E, B>(f: (i: number, a: A) => Kind<F, S, R, O, E, B>) => (self: readonly A[]) => Kind<F, S, R, O, E, readonly B[]>;
```

Added in: 1.0.0

## Tuple sequencing

### tupled

```ts
export declare const tupled: <A>(self: readonly A[]) => readonly (readonly [A])[];
```

Added in: 1.0.0

### zipFlatten

Sequentially zips this effect with the specified effect.

```ts
export declare const zipFlatten: <B>(fb: readonly B[]) => <A extends readonly unknown[]>(self: readonly A[]) => readonly (readonly [...A, B])[];
```

Added in: 1.0.0

## General API

### ap

```ts
export declare const ap: <A>(fa: readonly A[]) => <B>(self: readonly ((a: A) => B)[]) => readonly B[];
```

Added in: 1.0.0

### chop

A useful recursion pattern for processing a `ReadonlyArray` to produce a new `ReadonlyArray`, often used for "chopping" up the input
`ReadonlyArray`. Typically chop is called with some function that will consume an initial prefix of the `ReadonlyArray` and produce a
value and the rest of the `ReadonlyArray`.

```ts
export declare const chop: <A, B>(f: (as: readonly [A, ...A[]]) => readonly [B, readonly A[]]) => (as: readonly A[]) => readonly B[];
```

Added in: 1.0.0

### chunksOf

Splits a `ReadonlyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
the `ReadonlyArray`. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
definition of `chunksOf`; it satisfies the property that

```ts
chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
```

whenever `n` evenly divides the length of `as`.

```ts
export declare const chunksOf: (n: number) => <A>(as: readonly A[]) => readonly (readonly [A, ...A[]])[];
```

Added in: 1.0.0

### concat

```ts
export declare const concat: <B>(that: readonly B[]) => <A>(self: readonly A[]) => readonly (B | A)[];
```

Added in: 1.0.0

### deleteAt

Delete the element at the specified index, creating a new `ReadonlyArray`, or returning `None` if the index is out of bounds.

```ts
export declare const deleteAt: (i: number) => <A>(as: readonly A[]) => Option<readonly A[]>;
```

Added in: 1.0.0

### difference

Creates a `ReadonlyArray` of values not included in the other given `ReadonlyArray` using a `Eq` for equality
comparisons. The order and references of result values are determined by the first `ReadonlyArray`.

```ts
export declare const difference: <B>(that: readonly B[]) => <A>(self: readonly A[]) => readonly A[];
```

Added in: 1.0.0

### dropLeft

Drop a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.

**Note**. `n` is normalized to a non negative integer.

```ts
export declare const dropLeft: (n: number) => <A>(as: readonly A[]) => readonly A[];
```

Added in: 1.0.0

### dropLeftWhile

Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new `ReadonlyArray`.

```ts
export declare const dropLeftWhile: { <A, B extends A>(refinement: Refinement<A, B>): (as: readonly A[]) => readonly B[]; <A>(predicate: Predicate<A>): <B extends A>(bs: readonly B[]) => readonly B[]; <A>(predicate: Predicate<A>): (as: readonly A[]) => readonly A[]; };
```

Added in: 1.0.0

### dropRight

Drop a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.

**Note**. `n` is normalized to a non negative integer.

```ts
export declare const dropRight: (n: number) => <A>(as: readonly A[]) => readonly A[];
```

Added in: 1.0.0

### duplicate

```ts
export declare const duplicate: <A>(wa: readonly A[]) => readonly (readonly A[])[];
```

Added in: 1.0.0

### elem

Tests whether a value is a member of a `ReadonlyArray`.

```ts
export declare const elem: <B>(a: B) => <A>(as: readonly A[]) => boolean;
```

Added in: 1.0.0

### empty

```ts
export declare const empty: readonly never[];
```

Added in: 1.0.0

### every

Check if a predicate holds true for every `ReadonlyArray` member.

```ts
export declare const every: { <A, B extends A>(refinement: Refinement<A, B>): Refinement<readonly A[], readonly B[]>; <A>(predicate: Predicate<A>): Predicate<readonly A[]>; };
```

Added in: 1.0.0

### exists

Alias of [`some`](#some)

```ts
export declare const exists: <A>(predicate: Predicate<A>) => (as: readonly A[]) => as is readonly [A, ...A[]];
```

Added in: 1.0.0

### extend

```ts
export declare const extend: <A, B>(f: (wa: readonly A[]) => B) => (wa: readonly A[]) => readonly B[];
```

Added in: 1.0.0

### failures

Extracts from a `ReadonlyArray` of `Result` all the `Failure` elements. All the `Failure` elements are extracted in order

```ts
export declare const failures: <E, A>(as: readonly Result<E, A>[]) => readonly E[];
```

Added in: 1.0.0

### findFirst

Find the first element which satisfies a predicate (or a refinement) function

```ts
export declare const findFirst: { <A, B extends A>(refinement: Refinement<A, B>): (as: readonly A[]) => Option<B>; <A>(predicate: Predicate<A>): <B extends A>(bs: readonly B[]) => Option<B>; <A>(predicate: Predicate<A>): (as: readonly A[]) => Option<A>; };
```

Added in: 1.0.0

### findFirstMap

Find the first element returned by an option based selector function

```ts
export declare const findFirstMap: <A, B>(f: (a: A) => Option<B>) => (as: readonly A[]) => Option<B>;
```

Added in: 1.0.0

### findIndex

Find the first index for which a predicate holds

```ts
export declare const findIndex: <A>(predicate: Predicate<A>) => (as: readonly A[]) => Option<number>;
```

Added in: 1.0.0

### findLast

Find the last element which satisfies a predicate function

```ts
export declare const findLast: { <A, B extends A>(refinement: Refinement<A, B>): (as: readonly A[]) => Option<B>; <A>(predicate: Predicate<A>): <B extends A>(bs: readonly B[]) => Option<B>; <A>(predicate: Predicate<A>): (as: readonly A[]) => Option<A>; };
```

Added in: 1.0.0

### findLastIndex

Returns the index of the last element of the list which matches the predicate

```ts
export declare const findLastIndex: <A>(predicate: Predicate<A>) => (as: readonly A[]) => Option<number>;
```

Added in: 1.0.0

### findLastMap

Find the last element returned by an option based selector function

```ts
export declare const findLastMap: <A, B>(f: (a: A) => Option<B>) => (as: readonly A[]) => Option<B>;
```

Added in: 1.0.0

### flatMapWithIndex

```ts
export declare const flatMapWithIndex: <A, B>(f: (i: number, a: A) => readonly B[]) => (as: readonly A[]) => readonly B[];
```

Added in: 1.0.0

### flatten

Removes one level of nesting

```ts
export declare const flatten: <A>(mma: readonly (readonly A[])[]) => readonly A[];
```

Added in: 1.0.0

### head

Get the first element of a `ReadonlyArray`, or `None` if the `ReadonlyArray` is empty.

```ts
export declare const head: <A>(self: readonly A[]) => Option<A>;
```

Added in: 1.0.0

### init

Get all but the last element of a `ReadonlyArray`, creating a new `ReadonlyArray`, or `None` if the `ReadonlyArray` is empty.

```ts
export declare const init: <A>(as: readonly A[]) => Option<readonly A[]>;
```

Added in: 1.0.0

### insertAt

Insert an element at the specified index, creating a new `ReadonlyArray`, or returning `None` if the index is out of bounds.

```ts
export declare const insertAt: <A>(i: number, a: A) => (as: readonly A[]) => Option<readonly [A, ...A[]]>;
```

Added in: 1.0.0

### intercalate

Fold a data structure, accumulating values in some `Monoid`, combining adjacent elements
using the specified separator.

```ts
export declare const intercalate: <A>(M: Monoid<A>) => (middle: A) => (as: readonly A[]) => A;
```

Added in: 1.0.0

### intersection

Creates a `ReadonlyArray` of unique values that are included in all given `ReadonlyArray`s using a `Eq` for equality
comparisons. The order and references of result values are determined by the first `ReadonlyArray`.

```ts
export declare const intersection: <A>(that: readonly A[]) => <B>(self: readonly B[]) => readonly (A & B)[];
```

Added in: 1.0.0

### intersperse

Places an element in between members of a `ReadonlyArray`

```ts
export declare const intersperse: <A>(middle: A) => (as: readonly A[]) => readonly A[];
```

Added in: 1.0.0

### isEmpty

Test whether a `ReadonlyArray` is empty.

```ts
export declare const isEmpty: <A>(as: readonly A[]) => as is readonly [];
```

Added in: 1.0.0

### isOutOfBound

Test whether a `ReadonlyArray` contains a particular index

```ts
export declare const isOutOfBound: <A>(i: number, as: readonly A[]) => boolean;
```

Added in: 1.0.0

### last

Get the last element in a `ReadonlyArray`, or `None` if the `ReadonlyArray` is empty.

```ts
export declare const last: <A>(as: readonly A[]) => Option<A>;
```

Added in: 1.0.0

### lookup

This function provides a safe way to read a value at a particular index from a `ReadonlyArray`

```ts
export declare const lookup: (i: number) => <A>(as: readonly A[]) => Option<A>;
```

Added in: 1.0.0

### mapWithIndex

```ts
export declare const mapWithIndex: <A, B>(f: (i: number, a: A) => B) => (fa: readonly A[]) => readonly B[];
```

Added in: 1.0.0

### modifyAt

Apply a function to the element at the specified index, creating a new `ReadonlyArray`, or returning `None` if the index is out
of bounds.

```ts
export declare const modifyAt: <A>(i: number, f: Endomorphism<A>) => (as: readonly A[]) => Option<readonly A[]>;
```

Added in: 1.0.0

### orElse

Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
types of kind `* -> *`.

In case of `ReadonlyArray` concatenates the inputs into a single array.

```ts
export declare const orElse: <B>(that: readonly B[]) => <A>(self: readonly A[]) => readonly (B | A)[];
```

Added in: 1.0.0

### prependAll

Prepend an element to every member of a `ReadonlyArray`

```ts
export declare const prependAll: <A>(middle: A) => (as: readonly A[]) => readonly A[];
```

Added in: 1.0.0

### reverse

Reverse a `ReadonlyArray`, creating a new `ReadonlyArray`.

```ts
export declare const reverse: <A>(as: readonly A[]) => readonly A[];
```

Added in: 1.0.0

### rotate

Rotate a `ReadonlyArray` by `n` steps.

```ts
export declare const rotate: (n: number) => <A>(as: readonly A[]) => readonly A[];
```

Added in: 1.0.0

### scanLeft

Fold a `ReadonlyArray` from the left, keeping all intermediate results instead of only the final result.

```ts
export declare const scanLeft: <B, A>(b: B, f: (b: B, a: A) => B) => (as: readonly A[]) => readonly [B, ...B[]];
```

Added in: 1.0.0

### scanRight

Fold a `ReadonlyArray` from the right, keeping all intermediate results instead of only the final result.

```ts
export declare const scanRight: <B, A>(b: B, f: (a: A, b: B) => B) => (as: readonly A[]) => readonly [B, ...B[]];
```

Added in: 1.0.0

### size

Calculate the number of elements in a `ReadonlyArray`.

```ts
export declare const size: <A>(as: readonly A[]) => number;
```

Added in: 1.0.0

### some

Check if a predicate holds true for any `ReadonlyArray` member.

```ts
export declare const some: <A>(predicate: Predicate<A>) => (as: readonly A[]) => as is readonly [A, ...A[]];
```

Added in: 1.0.0

### sort

Sort the elements of a `ReadonlyArray` in increasing order, creating a new `ReadonlyArray`.

```ts
export declare const sort: <B>(O: Sortable<B>) => <A extends B>(as: readonly A[]) => readonly A[];
```

Added in: 1.0.0

### sortBy

Sort the elements of a `ReadonlyArray` in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
etc...

```ts
export declare const sortBy: <B>(ords: readonly Sortable<B>[]) => <A extends B>(as: readonly A[]) => readonly A[];
```

Added in: 1.0.0

### spanLeft

Split a `ReadonlyArray` into two parts:
1. the longest initial subarray for which all elements satisfy the specified predicate
2. the remaining elements

```ts
export declare const spanLeft: { <A, B extends A>(refinement: Refinement<A, B>): (as: readonly A[]) => readonly [init: readonly B[], rest: readonly A[]]; <A>(predicate: Predicate<A>): <B extends A>(bs: readonly B[]) => readonly [init: readonly B[], rest: readonly B[]]; <A>(predicate: Predicate<A>): (as: readonly A[]) => readonly [init: readonly A[], rest: readonly A[]]; };
```

Added in: 1.0.0

### splitAt

Splits a `ReadonlyArray` into two pieces, the first piece has max `n` elements.

```ts
export declare const splitAt: (n: number) => <A>(as: readonly A[]) => readonly [readonly A[], readonly A[]];
```

Added in: 1.0.0

### successes

Extracts from a `ReadonlyArray` of `Result`s all the `Success` elements.

```ts
export declare const successes: <E, A>(as: readonly Result<E, A>[]) => readonly A[];
```

Added in: 1.0.0

### tail

Get all but the first element of a `ReadonlyArray`, creating a new `ReadonlyArray`, or `None` if the `ReadonlyArray` is empty.

```ts
export declare const tail: <A>(as: readonly A[]) => Option<readonly A[]>;
```

Added in: 1.0.0

### takeLeft

Keep only a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.

**Note**. `n` is normalized to a non negative integer.

```ts
export declare const takeLeft: (n: number) => <A>(as: readonly A[]) => readonly A[];
```

Added in: 1.0.0

### takeLeftWhile

Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new `ReadonlyArray`.

```ts
export declare const takeLeftWhile: { <A, B extends A>(refinement: Refinement<A, B>): (as: readonly A[]) => readonly B[]; <A>(predicate: Predicate<A>): <B extends A>(bs: readonly B[]) => readonly B[]; <A>(predicate: Predicate<A>): (as: readonly A[]) => readonly A[]; };
```

Added in: 1.0.0

### takeRight

Keep only a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.

**Note**. `n` is normalized to a non negative integer.

```ts
export declare const takeRight: (n: number) => <A>(as: readonly A[]) => readonly A[];
```

Added in: 1.0.0

### tap

Returns an effect that effectfully "peeks" at the success of this effect.

```ts
export declare const tap: <A>(f: (a: A) => readonly unknown[]) => (self: readonly A[]) => readonly A[];
```

Added in: 1.0.0

### traverseFilter

Filter values inside a context.

```ts
export declare const traverseFilter: <F extends TypeLambda>(F: Monoidal<F>) => <B extends A, S, R, O, E, A = B>(predicate: (a: A) => Kind<F, S, R, O, E, boolean>) => (self: readonly B[]) => Kind<F, S, R, O, E, readonly B[]>;
```

Added in: 1.0.0

### traversePartition

```ts
export declare const traversePartition: <F extends TypeLambda>(ApplicativeF: Monoidal<F>) => <B extends A, S, R, O, E, A = B>(predicate: (a: A) => Kind<F, S, R, O, E, boolean>) => (self: readonly B[]) => Kind<F, S, R, O, E, readonly [readonly B[], readonly B[]]>;
```

Added in: 1.0.0

### unfold

```ts
export declare const unfold: <B, A>(b: B, f: (b: B) => Option<readonly [A, B]>) => readonly A[];
```

Added in: 1.0.0

### union

Creates a `ReadonlyArray` of unique values, in order, from all given `ReadonlyArray`s using a `Eq` for equality comparisons.

```ts
export declare const union: <B>(that: readonly B[]) => <A>(self: readonly A[]) => readonly B[] | readonly [B | A, ...(B | A)[]];
```

Added in: 1.0.0

### uniq

Remove duplicates from a `ReadonlyArray`, keeping the first occurrence of an element.

```ts
export declare const uniq: <A>(self: readonly A[]) => readonly A[];
```

Added in: 1.0.0

### unzip

This function is the inverse of `zip`. Takes a `ReadonlyArray` of pairs and return two corresponding `ReadonlyArray`s.

```ts
export declare const unzip: <A, B>(as: readonly (readonly [A, B])[]) => readonly [readonly A[], readonly B[]];
```

Added in: 1.0.0

### updateAt

Change the element at the specified index, creating a new `ReadonlyArray`, or returning `None` if the index is out of bounds.

```ts
export declare const updateAt: <A>(i: number, a: A) => (as: readonly A[]) => Option<readonly A[]>;
```

Added in: 1.0.0

### zip

Takes two `ReadonlyArray`s and returns a `ReadonlyArray` of corresponding pairs. If one input `ReadonlyArray` is short, excess elements of the
longer `ReadonlyArray` are discarded.

```ts
export declare const zip: <B>(bs: readonly B[]) => <A>(as: readonly A[]) => readonly (readonly [A, B])[];
```

Added in: 1.0.0

### zipWith

Apply a function to pairs of elements at the same index in two `ReadonlyArray`s, collecting the results in a new `ReadonlyArray`. If one
input `ReadonlyArray` is short, excess elements of the longer `ReadonlyArray` are discarded.

```ts
export declare const zipWith: <B, A, C>(fb: readonly B[], f: (a: A, b: B) => C) => (fa: readonly A[]) => readonly C[];
```

Added in: 1.0.0

