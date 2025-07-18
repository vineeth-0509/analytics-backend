
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model DailyStats
 * 
 */
export type DailyStats = $Result.DefaultSelection<Prisma.$DailyStatsPayload>
/**
 * Model PageStats
 * 
 */
export type PageStats = $Result.DefaultSelection<Prisma.$PageStatsPayload>
/**
 * Model CountryStats
 * 
 */
export type CountryStats = $Result.DefaultSelection<Prisma.$CountryStatsPayload>
/**
 * Model AlertLog
 * 
 */
export type AlertLog = $Result.DefaultSelection<Prisma.$AlertLogPayload>
/**
 * Model DashboardActionLog
 * 
 */
export type DashboardActionLog = $Result.DefaultSelection<Prisma.$DashboardActionLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyStats`: Exposes CRUD operations for the **DailyStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyStats
    * const dailyStats = await prisma.dailyStats.findMany()
    * ```
    */
  get dailyStats(): Prisma.DailyStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageStats`: Exposes CRUD operations for the **PageStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageStats
    * const pageStats = await prisma.pageStats.findMany()
    * ```
    */
  get pageStats(): Prisma.PageStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.countryStats`: Exposes CRUD operations for the **CountryStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CountryStats
    * const countryStats = await prisma.countryStats.findMany()
    * ```
    */
  get countryStats(): Prisma.CountryStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alertLog`: Exposes CRUD operations for the **AlertLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlertLogs
    * const alertLogs = await prisma.alertLog.findMany()
    * ```
    */
  get alertLog(): Prisma.AlertLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dashboardActionLog`: Exposes CRUD operations for the **DashboardActionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DashboardActionLogs
    * const dashboardActionLogs = await prisma.dashboardActionLog.findMany()
    * ```
    */
  get dashboardActionLog(): Prisma.DashboardActionLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Session: 'Session',
    Event: 'Event',
    DailyStats: 'DailyStats',
    PageStats: 'PageStats',
    CountryStats: 'CountryStats',
    AlertLog: 'AlertLog',
    DashboardActionLog: 'DashboardActionLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "session" | "event" | "dailyStats" | "pageStats" | "countryStats" | "alertLog" | "dashboardActionLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      DailyStats: {
        payload: Prisma.$DailyStatsPayload<ExtArgs>
        fields: Prisma.DailyStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>
          }
          findFirst: {
            args: Prisma.DailyStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>
          }
          findMany: {
            args: Prisma.DailyStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>[]
          }
          create: {
            args: Prisma.DailyStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>
          }
          createMany: {
            args: Prisma.DailyStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>[]
          }
          delete: {
            args: Prisma.DailyStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>
          }
          update: {
            args: Prisma.DailyStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>
          }
          deleteMany: {
            args: Prisma.DailyStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>[]
          }
          upsert: {
            args: Prisma.DailyStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>
          }
          aggregate: {
            args: Prisma.DailyStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyStats>
          }
          groupBy: {
            args: Prisma.DailyStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyStatsCountArgs<ExtArgs>
            result: $Utils.Optional<DailyStatsCountAggregateOutputType> | number
          }
        }
      }
      PageStats: {
        payload: Prisma.$PageStatsPayload<ExtArgs>
        fields: Prisma.PageStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageStatsPayload>
          }
          findFirst: {
            args: Prisma.PageStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageStatsPayload>
          }
          findMany: {
            args: Prisma.PageStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageStatsPayload>[]
          }
          create: {
            args: Prisma.PageStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageStatsPayload>
          }
          createMany: {
            args: Prisma.PageStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageStatsPayload>[]
          }
          delete: {
            args: Prisma.PageStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageStatsPayload>
          }
          update: {
            args: Prisma.PageStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageStatsPayload>
          }
          deleteMany: {
            args: Prisma.PageStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageStatsPayload>[]
          }
          upsert: {
            args: Prisma.PageStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageStatsPayload>
          }
          aggregate: {
            args: Prisma.PageStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageStats>
          }
          groupBy: {
            args: Prisma.PageStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageStatsCountArgs<ExtArgs>
            result: $Utils.Optional<PageStatsCountAggregateOutputType> | number
          }
        }
      }
      CountryStats: {
        payload: Prisma.$CountryStatsPayload<ExtArgs>
        fields: Prisma.CountryStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryStatsPayload>
          }
          findFirst: {
            args: Prisma.CountryStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryStatsPayload>
          }
          findMany: {
            args: Prisma.CountryStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryStatsPayload>[]
          }
          create: {
            args: Prisma.CountryStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryStatsPayload>
          }
          createMany: {
            args: Prisma.CountryStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryStatsPayload>[]
          }
          delete: {
            args: Prisma.CountryStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryStatsPayload>
          }
          update: {
            args: Prisma.CountryStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryStatsPayload>
          }
          deleteMany: {
            args: Prisma.CountryStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryStatsPayload>[]
          }
          upsert: {
            args: Prisma.CountryStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryStatsPayload>
          }
          aggregate: {
            args: Prisma.CountryStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountryStats>
          }
          groupBy: {
            args: Prisma.CountryStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryStatsCountArgs<ExtArgs>
            result: $Utils.Optional<CountryStatsCountAggregateOutputType> | number
          }
        }
      }
      AlertLog: {
        payload: Prisma.$AlertLogPayload<ExtArgs>
        fields: Prisma.AlertLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertLogPayload>
          }
          findFirst: {
            args: Prisma.AlertLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertLogPayload>
          }
          findMany: {
            args: Prisma.AlertLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertLogPayload>[]
          }
          create: {
            args: Prisma.AlertLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertLogPayload>
          }
          createMany: {
            args: Prisma.AlertLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertLogPayload>[]
          }
          delete: {
            args: Prisma.AlertLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertLogPayload>
          }
          update: {
            args: Prisma.AlertLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertLogPayload>
          }
          deleteMany: {
            args: Prisma.AlertLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertLogPayload>[]
          }
          upsert: {
            args: Prisma.AlertLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertLogPayload>
          }
          aggregate: {
            args: Prisma.AlertLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlertLog>
          }
          groupBy: {
            args: Prisma.AlertLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertLogCountArgs<ExtArgs>
            result: $Utils.Optional<AlertLogCountAggregateOutputType> | number
          }
        }
      }
      DashboardActionLog: {
        payload: Prisma.$DashboardActionLogPayload<ExtArgs>
        fields: Prisma.DashboardActionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DashboardActionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardActionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DashboardActionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardActionLogPayload>
          }
          findFirst: {
            args: Prisma.DashboardActionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardActionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DashboardActionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardActionLogPayload>
          }
          findMany: {
            args: Prisma.DashboardActionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardActionLogPayload>[]
          }
          create: {
            args: Prisma.DashboardActionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardActionLogPayload>
          }
          createMany: {
            args: Prisma.DashboardActionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DashboardActionLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardActionLogPayload>[]
          }
          delete: {
            args: Prisma.DashboardActionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardActionLogPayload>
          }
          update: {
            args: Prisma.DashboardActionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardActionLogPayload>
          }
          deleteMany: {
            args: Prisma.DashboardActionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DashboardActionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DashboardActionLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardActionLogPayload>[]
          }
          upsert: {
            args: Prisma.DashboardActionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardActionLogPayload>
          }
          aggregate: {
            args: Prisma.DashboardActionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDashboardActionLog>
          }
          groupBy: {
            args: Prisma.DashboardActionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<DashboardActionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.DashboardActionLogCountArgs<ExtArgs>
            result: $Utils.Optional<DashboardActionLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    session?: SessionOmit
    event?: EventOmit
    dailyStats?: DailyStatsOmit
    pageStats?: PageStatsOmit
    countryStats?: CountryStatsOmit
    alertLog?: AlertLogOmit
    dashboardActionLog?: DashboardActionLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    events: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | SessionCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    sessionId: string | null
    country: string | null
    device: string | null
    referrer: string | null
    startTime: Date | null
    lastActivity: Date | null
    isActive: boolean | null
  }

  export type SessionMaxAggregateOutputType = {
    sessionId: string | null
    country: string | null
    device: string | null
    referrer: string | null
    startTime: Date | null
    lastActivity: Date | null
    isActive: boolean | null
  }

  export type SessionCountAggregateOutputType = {
    sessionId: number
    country: number
    device: number
    referrer: number
    startTime: number
    lastActivity: number
    isActive: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sessionId?: true
    country?: true
    device?: true
    referrer?: true
    startTime?: true
    lastActivity?: true
    isActive?: true
  }

  export type SessionMaxAggregateInputType = {
    sessionId?: true
    country?: true
    device?: true
    referrer?: true
    startTime?: true
    lastActivity?: true
    isActive?: true
  }

  export type SessionCountAggregateInputType = {
    sessionId?: true
    country?: true
    device?: true
    referrer?: true
    startTime?: true
    lastActivity?: true
    isActive?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    sessionId: string
    country: string | null
    device: string | null
    referrer: string | null
    startTime: Date
    lastActivity: Date
    isActive: boolean
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionId?: boolean
    country?: boolean
    device?: boolean
    referrer?: boolean
    startTime?: boolean
    lastActivity?: boolean
    isActive?: boolean
    events?: boolean | Session$eventsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionId?: boolean
    country?: boolean
    device?: boolean
    referrer?: boolean
    startTime?: boolean
    lastActivity?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionId?: boolean
    country?: boolean
    device?: boolean
    referrer?: boolean
    startTime?: boolean
    lastActivity?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    sessionId?: boolean
    country?: boolean
    device?: boolean
    referrer?: boolean
    startTime?: boolean
    lastActivity?: boolean
    isActive?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionId" | "country" | "device" | "referrer" | "startTime" | "lastActivity" | "isActive", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Session$eventsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionId: string
      country: string | null
      device: string | null
      referrer: string | null
      startTime: Date
      lastActivity: Date
      isActive: boolean
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `sessionId`
     * const sessionWithSessionIdOnly = await prisma.session.findMany({ select: { sessionId: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `sessionId`
     * const sessionWithSessionIdOnly = await prisma.session.createManyAndReturn({
     *   select: { sessionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `sessionId`
     * const sessionWithSessionIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { sessionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Session$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Session$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly sessionId: FieldRef<"Session", 'String'>
    readonly country: FieldRef<"Session", 'String'>
    readonly device: FieldRef<"Session", 'String'>
    readonly referrer: FieldRef<"Session", 'String'>
    readonly startTime: FieldRef<"Session", 'DateTime'>
    readonly lastActivity: FieldRef<"Session", 'DateTime'>
    readonly isActive: FieldRef<"Session", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.events
   */
  export type Session$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    type: string | null
    page: string | null
    timeStamp: Date | null
    sessionId: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    type: string | null
    page: string | null
    timeStamp: Date | null
    sessionId: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    type: number
    page: number
    timeStamp: number
    metadata: number
    sessionId: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    type?: true
    page?: true
    timeStamp?: true
    sessionId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    type?: true
    page?: true
    timeStamp?: true
    sessionId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    type?: true
    page?: true
    timeStamp?: true
    metadata?: true
    sessionId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    type: string
    page: string
    timeStamp: Date
    metadata: JsonValue | null
    sessionId: string
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    page?: boolean
    timeStamp?: boolean
    metadata?: boolean
    sessionId?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    page?: boolean
    timeStamp?: boolean
    metadata?: boolean
    sessionId?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    page?: boolean
    timeStamp?: boolean
    metadata?: boolean
    sessionId?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    type?: boolean
    page?: boolean
    timeStamp?: boolean
    metadata?: boolean
    sessionId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "page" | "timeStamp" | "metadata" | "sessionId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      page: string
      timeStamp: Date
      metadata: Prisma.JsonValue | null
      sessionId: string
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly type: FieldRef<"Event", 'String'>
    readonly page: FieldRef<"Event", 'String'>
    readonly timeStamp: FieldRef<"Event", 'DateTime'>
    readonly metadata: FieldRef<"Event", 'Json'>
    readonly sessionId: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model DailyStats
   */

  export type AggregateDailyStats = {
    _count: DailyStatsCountAggregateOutputType | null
    _avg: DailyStatsAvgAggregateOutputType | null
    _sum: DailyStatsSumAggregateOutputType | null
    _min: DailyStatsMinAggregateOutputType | null
    _max: DailyStatsMaxAggregateOutputType | null
  }

  export type DailyStatsAvgAggregateOutputType = {
    totalVisitors: number | null
    totalPageViews: number | null
    totalSession: number | null
    uniqueCountries: number | null
  }

  export type DailyStatsSumAggregateOutputType = {
    totalVisitors: number | null
    totalPageViews: number | null
    totalSession: number | null
    uniqueCountries: number | null
  }

  export type DailyStatsMinAggregateOutputType = {
    id: string | null
    date: Date | null
    totalVisitors: number | null
    totalPageViews: number | null
    totalSession: number | null
    uniqueCountries: number | null
  }

  export type DailyStatsMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    totalVisitors: number | null
    totalPageViews: number | null
    totalSession: number | null
    uniqueCountries: number | null
  }

  export type DailyStatsCountAggregateOutputType = {
    id: number
    date: number
    totalVisitors: number
    totalPageViews: number
    totalSession: number
    uniqueCountries: number
    _all: number
  }


  export type DailyStatsAvgAggregateInputType = {
    totalVisitors?: true
    totalPageViews?: true
    totalSession?: true
    uniqueCountries?: true
  }

  export type DailyStatsSumAggregateInputType = {
    totalVisitors?: true
    totalPageViews?: true
    totalSession?: true
    uniqueCountries?: true
  }

  export type DailyStatsMinAggregateInputType = {
    id?: true
    date?: true
    totalVisitors?: true
    totalPageViews?: true
    totalSession?: true
    uniqueCountries?: true
  }

  export type DailyStatsMaxAggregateInputType = {
    id?: true
    date?: true
    totalVisitors?: true
    totalPageViews?: true
    totalSession?: true
    uniqueCountries?: true
  }

  export type DailyStatsCountAggregateInputType = {
    id?: true
    date?: true
    totalVisitors?: true
    totalPageViews?: true
    totalSession?: true
    uniqueCountries?: true
    _all?: true
  }

  export type DailyStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyStats to aggregate.
     */
    where?: DailyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStats to fetch.
     */
    orderBy?: DailyStatsOrderByWithRelationInput | DailyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyStats
    **/
    _count?: true | DailyStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyStatsMaxAggregateInputType
  }

  export type GetDailyStatsAggregateType<T extends DailyStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyStats[P]>
      : GetScalarType<T[P], AggregateDailyStats[P]>
  }




  export type DailyStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyStatsWhereInput
    orderBy?: DailyStatsOrderByWithAggregationInput | DailyStatsOrderByWithAggregationInput[]
    by: DailyStatsScalarFieldEnum[] | DailyStatsScalarFieldEnum
    having?: DailyStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyStatsCountAggregateInputType | true
    _avg?: DailyStatsAvgAggregateInputType
    _sum?: DailyStatsSumAggregateInputType
    _min?: DailyStatsMinAggregateInputType
    _max?: DailyStatsMaxAggregateInputType
  }

  export type DailyStatsGroupByOutputType = {
    id: string
    date: Date
    totalVisitors: number
    totalPageViews: number
    totalSession: number
    uniqueCountries: number
    _count: DailyStatsCountAggregateOutputType | null
    _avg: DailyStatsAvgAggregateOutputType | null
    _sum: DailyStatsSumAggregateOutputType | null
    _min: DailyStatsMinAggregateOutputType | null
    _max: DailyStatsMaxAggregateOutputType | null
  }

  type GetDailyStatsGroupByPayload<T extends DailyStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyStatsGroupByOutputType[P]>
            : GetScalarType<T[P], DailyStatsGroupByOutputType[P]>
        }
      >
    >


  export type DailyStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    totalVisitors?: boolean
    totalPageViews?: boolean
    totalSession?: boolean
    uniqueCountries?: boolean
  }, ExtArgs["result"]["dailyStats"]>

  export type DailyStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    totalVisitors?: boolean
    totalPageViews?: boolean
    totalSession?: boolean
    uniqueCountries?: boolean
  }, ExtArgs["result"]["dailyStats"]>

  export type DailyStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    totalVisitors?: boolean
    totalPageViews?: boolean
    totalSession?: boolean
    uniqueCountries?: boolean
  }, ExtArgs["result"]["dailyStats"]>

  export type DailyStatsSelectScalar = {
    id?: boolean
    date?: boolean
    totalVisitors?: boolean
    totalPageViews?: boolean
    totalSession?: boolean
    uniqueCountries?: boolean
  }

  export type DailyStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "totalVisitors" | "totalPageViews" | "totalSession" | "uniqueCountries", ExtArgs["result"]["dailyStats"]>

  export type $DailyStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      totalVisitors: number
      totalPageViews: number
      totalSession: number
      uniqueCountries: number
    }, ExtArgs["result"]["dailyStats"]>
    composites: {}
  }

  type DailyStatsGetPayload<S extends boolean | null | undefined | DailyStatsDefaultArgs> = $Result.GetResult<Prisma.$DailyStatsPayload, S>

  type DailyStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyStatsCountAggregateInputType | true
    }

  export interface DailyStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyStats'], meta: { name: 'DailyStats' } }
    /**
     * Find zero or one DailyStats that matches the filter.
     * @param {DailyStatsFindUniqueArgs} args - Arguments to find a DailyStats
     * @example
     * // Get one DailyStats
     * const dailyStats = await prisma.dailyStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyStatsFindUniqueArgs>(args: SelectSubset<T, DailyStatsFindUniqueArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyStatsFindUniqueOrThrowArgs} args - Arguments to find a DailyStats
     * @example
     * // Get one DailyStats
     * const dailyStats = await prisma.dailyStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatsFindFirstArgs} args - Arguments to find a DailyStats
     * @example
     * // Get one DailyStats
     * const dailyStats = await prisma.dailyStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyStatsFindFirstArgs>(args?: SelectSubset<T, DailyStatsFindFirstArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatsFindFirstOrThrowArgs} args - Arguments to find a DailyStats
     * @example
     * // Get one DailyStats
     * const dailyStats = await prisma.dailyStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyStats
     * const dailyStats = await prisma.dailyStats.findMany()
     * 
     * // Get first 10 DailyStats
     * const dailyStats = await prisma.dailyStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyStatsWithIdOnly = await prisma.dailyStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyStatsFindManyArgs>(args?: SelectSubset<T, DailyStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyStats.
     * @param {DailyStatsCreateArgs} args - Arguments to create a DailyStats.
     * @example
     * // Create one DailyStats
     * const DailyStats = await prisma.dailyStats.create({
     *   data: {
     *     // ... data to create a DailyStats
     *   }
     * })
     * 
     */
    create<T extends DailyStatsCreateArgs>(args: SelectSubset<T, DailyStatsCreateArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyStats.
     * @param {DailyStatsCreateManyArgs} args - Arguments to create many DailyStats.
     * @example
     * // Create many DailyStats
     * const dailyStats = await prisma.dailyStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyStatsCreateManyArgs>(args?: SelectSubset<T, DailyStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyStats and returns the data saved in the database.
     * @param {DailyStatsCreateManyAndReturnArgs} args - Arguments to create many DailyStats.
     * @example
     * // Create many DailyStats
     * const dailyStats = await prisma.dailyStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyStats and only return the `id`
     * const dailyStatsWithIdOnly = await prisma.dailyStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyStats.
     * @param {DailyStatsDeleteArgs} args - Arguments to delete one DailyStats.
     * @example
     * // Delete one DailyStats
     * const DailyStats = await prisma.dailyStats.delete({
     *   where: {
     *     // ... filter to delete one DailyStats
     *   }
     * })
     * 
     */
    delete<T extends DailyStatsDeleteArgs>(args: SelectSubset<T, DailyStatsDeleteArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyStats.
     * @param {DailyStatsUpdateArgs} args - Arguments to update one DailyStats.
     * @example
     * // Update one DailyStats
     * const dailyStats = await prisma.dailyStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyStatsUpdateArgs>(args: SelectSubset<T, DailyStatsUpdateArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyStats.
     * @param {DailyStatsDeleteManyArgs} args - Arguments to filter DailyStats to delete.
     * @example
     * // Delete a few DailyStats
     * const { count } = await prisma.dailyStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyStatsDeleteManyArgs>(args?: SelectSubset<T, DailyStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyStats
     * const dailyStats = await prisma.dailyStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyStatsUpdateManyArgs>(args: SelectSubset<T, DailyStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyStats and returns the data updated in the database.
     * @param {DailyStatsUpdateManyAndReturnArgs} args - Arguments to update many DailyStats.
     * @example
     * // Update many DailyStats
     * const dailyStats = await prisma.dailyStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyStats and only return the `id`
     * const dailyStatsWithIdOnly = await prisma.dailyStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyStats.
     * @param {DailyStatsUpsertArgs} args - Arguments to update or create a DailyStats.
     * @example
     * // Update or create a DailyStats
     * const dailyStats = await prisma.dailyStats.upsert({
     *   create: {
     *     // ... data to create a DailyStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyStats we want to update
     *   }
     * })
     */
    upsert<T extends DailyStatsUpsertArgs>(args: SelectSubset<T, DailyStatsUpsertArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatsCountArgs} args - Arguments to filter DailyStats to count.
     * @example
     * // Count the number of DailyStats
     * const count = await prisma.dailyStats.count({
     *   where: {
     *     // ... the filter for the DailyStats we want to count
     *   }
     * })
    **/
    count<T extends DailyStatsCountArgs>(
      args?: Subset<T, DailyStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyStatsAggregateArgs>(args: Subset<T, DailyStatsAggregateArgs>): Prisma.PrismaPromise<GetDailyStatsAggregateType<T>>

    /**
     * Group by DailyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyStatsGroupByArgs['orderBy'] }
        : { orderBy?: DailyStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyStats model
   */
  readonly fields: DailyStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyStats model
   */
  interface DailyStatsFieldRefs {
    readonly id: FieldRef<"DailyStats", 'String'>
    readonly date: FieldRef<"DailyStats", 'DateTime'>
    readonly totalVisitors: FieldRef<"DailyStats", 'Int'>
    readonly totalPageViews: FieldRef<"DailyStats", 'Int'>
    readonly totalSession: FieldRef<"DailyStats", 'Int'>
    readonly uniqueCountries: FieldRef<"DailyStats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DailyStats findUnique
   */
  export type DailyStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Filter, which DailyStats to fetch.
     */
    where: DailyStatsWhereUniqueInput
  }

  /**
   * DailyStats findUniqueOrThrow
   */
  export type DailyStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Filter, which DailyStats to fetch.
     */
    where: DailyStatsWhereUniqueInput
  }

  /**
   * DailyStats findFirst
   */
  export type DailyStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Filter, which DailyStats to fetch.
     */
    where?: DailyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStats to fetch.
     */
    orderBy?: DailyStatsOrderByWithRelationInput | DailyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyStats.
     */
    cursor?: DailyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyStats.
     */
    distinct?: DailyStatsScalarFieldEnum | DailyStatsScalarFieldEnum[]
  }

  /**
   * DailyStats findFirstOrThrow
   */
  export type DailyStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Filter, which DailyStats to fetch.
     */
    where?: DailyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStats to fetch.
     */
    orderBy?: DailyStatsOrderByWithRelationInput | DailyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyStats.
     */
    cursor?: DailyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyStats.
     */
    distinct?: DailyStatsScalarFieldEnum | DailyStatsScalarFieldEnum[]
  }

  /**
   * DailyStats findMany
   */
  export type DailyStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Filter, which DailyStats to fetch.
     */
    where?: DailyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStats to fetch.
     */
    orderBy?: DailyStatsOrderByWithRelationInput | DailyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyStats.
     */
    cursor?: DailyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStats.
     */
    skip?: number
    distinct?: DailyStatsScalarFieldEnum | DailyStatsScalarFieldEnum[]
  }

  /**
   * DailyStats create
   */
  export type DailyStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a DailyStats.
     */
    data: XOR<DailyStatsCreateInput, DailyStatsUncheckedCreateInput>
  }

  /**
   * DailyStats createMany
   */
  export type DailyStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyStats.
     */
    data: DailyStatsCreateManyInput | DailyStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyStats createManyAndReturn
   */
  export type DailyStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * The data used to create many DailyStats.
     */
    data: DailyStatsCreateManyInput | DailyStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyStats update
   */
  export type DailyStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a DailyStats.
     */
    data: XOR<DailyStatsUpdateInput, DailyStatsUncheckedUpdateInput>
    /**
     * Choose, which DailyStats to update.
     */
    where: DailyStatsWhereUniqueInput
  }

  /**
   * DailyStats updateMany
   */
  export type DailyStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyStats.
     */
    data: XOR<DailyStatsUpdateManyMutationInput, DailyStatsUncheckedUpdateManyInput>
    /**
     * Filter which DailyStats to update
     */
    where?: DailyStatsWhereInput
    /**
     * Limit how many DailyStats to update.
     */
    limit?: number
  }

  /**
   * DailyStats updateManyAndReturn
   */
  export type DailyStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * The data used to update DailyStats.
     */
    data: XOR<DailyStatsUpdateManyMutationInput, DailyStatsUncheckedUpdateManyInput>
    /**
     * Filter which DailyStats to update
     */
    where?: DailyStatsWhereInput
    /**
     * Limit how many DailyStats to update.
     */
    limit?: number
  }

  /**
   * DailyStats upsert
   */
  export type DailyStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the DailyStats to update in case it exists.
     */
    where: DailyStatsWhereUniqueInput
    /**
     * In case the DailyStats found by the `where` argument doesn't exist, create a new DailyStats with this data.
     */
    create: XOR<DailyStatsCreateInput, DailyStatsUncheckedCreateInput>
    /**
     * In case the DailyStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyStatsUpdateInput, DailyStatsUncheckedUpdateInput>
  }

  /**
   * DailyStats delete
   */
  export type DailyStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Filter which DailyStats to delete.
     */
    where: DailyStatsWhereUniqueInput
  }

  /**
   * DailyStats deleteMany
   */
  export type DailyStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyStats to delete
     */
    where?: DailyStatsWhereInput
    /**
     * Limit how many DailyStats to delete.
     */
    limit?: number
  }

  /**
   * DailyStats without action
   */
  export type DailyStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
  }


  /**
   * Model PageStats
   */

  export type AggregatePageStats = {
    _count: PageStatsCountAggregateOutputType | null
    _avg: PageStatsAvgAggregateOutputType | null
    _sum: PageStatsSumAggregateOutputType | null
    _min: PageStatsMinAggregateOutputType | null
    _max: PageStatsMaxAggregateOutputType | null
  }

  export type PageStatsAvgAggregateOutputType = {
    views: number | null
    uniqueViews: number | null
  }

  export type PageStatsSumAggregateOutputType = {
    views: number | null
    uniqueViews: number | null
  }

  export type PageStatsMinAggregateOutputType = {
    id: string | null
    page: string | null
    date: Date | null
    views: number | null
    uniqueViews: number | null
  }

  export type PageStatsMaxAggregateOutputType = {
    id: string | null
    page: string | null
    date: Date | null
    views: number | null
    uniqueViews: number | null
  }

  export type PageStatsCountAggregateOutputType = {
    id: number
    page: number
    date: number
    views: number
    uniqueViews: number
    _all: number
  }


  export type PageStatsAvgAggregateInputType = {
    views?: true
    uniqueViews?: true
  }

  export type PageStatsSumAggregateInputType = {
    views?: true
    uniqueViews?: true
  }

  export type PageStatsMinAggregateInputType = {
    id?: true
    page?: true
    date?: true
    views?: true
    uniqueViews?: true
  }

  export type PageStatsMaxAggregateInputType = {
    id?: true
    page?: true
    date?: true
    views?: true
    uniqueViews?: true
  }

  export type PageStatsCountAggregateInputType = {
    id?: true
    page?: true
    date?: true
    views?: true
    uniqueViews?: true
    _all?: true
  }

  export type PageStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageStats to aggregate.
     */
    where?: PageStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageStats to fetch.
     */
    orderBy?: PageStatsOrderByWithRelationInput | PageStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageStats
    **/
    _count?: true | PageStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageStatsMaxAggregateInputType
  }

  export type GetPageStatsAggregateType<T extends PageStatsAggregateArgs> = {
        [P in keyof T & keyof AggregatePageStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageStats[P]>
      : GetScalarType<T[P], AggregatePageStats[P]>
  }




  export type PageStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageStatsWhereInput
    orderBy?: PageStatsOrderByWithAggregationInput | PageStatsOrderByWithAggregationInput[]
    by: PageStatsScalarFieldEnum[] | PageStatsScalarFieldEnum
    having?: PageStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageStatsCountAggregateInputType | true
    _avg?: PageStatsAvgAggregateInputType
    _sum?: PageStatsSumAggregateInputType
    _min?: PageStatsMinAggregateInputType
    _max?: PageStatsMaxAggregateInputType
  }

  export type PageStatsGroupByOutputType = {
    id: string
    page: string
    date: Date
    views: number
    uniqueViews: number
    _count: PageStatsCountAggregateOutputType | null
    _avg: PageStatsAvgAggregateOutputType | null
    _sum: PageStatsSumAggregateOutputType | null
    _min: PageStatsMinAggregateOutputType | null
    _max: PageStatsMaxAggregateOutputType | null
  }

  type GetPageStatsGroupByPayload<T extends PageStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageStatsGroupByOutputType[P]>
            : GetScalarType<T[P], PageStatsGroupByOutputType[P]>
        }
      >
    >


  export type PageStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    date?: boolean
    views?: boolean
    uniqueViews?: boolean
  }, ExtArgs["result"]["pageStats"]>

  export type PageStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    date?: boolean
    views?: boolean
    uniqueViews?: boolean
  }, ExtArgs["result"]["pageStats"]>

  export type PageStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    date?: boolean
    views?: boolean
    uniqueViews?: boolean
  }, ExtArgs["result"]["pageStats"]>

  export type PageStatsSelectScalar = {
    id?: boolean
    page?: boolean
    date?: boolean
    views?: boolean
    uniqueViews?: boolean
  }

  export type PageStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "page" | "date" | "views" | "uniqueViews", ExtArgs["result"]["pageStats"]>

  export type $PageStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      page: string
      date: Date
      views: number
      uniqueViews: number
    }, ExtArgs["result"]["pageStats"]>
    composites: {}
  }

  type PageStatsGetPayload<S extends boolean | null | undefined | PageStatsDefaultArgs> = $Result.GetResult<Prisma.$PageStatsPayload, S>

  type PageStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageStatsCountAggregateInputType | true
    }

  export interface PageStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageStats'], meta: { name: 'PageStats' } }
    /**
     * Find zero or one PageStats that matches the filter.
     * @param {PageStatsFindUniqueArgs} args - Arguments to find a PageStats
     * @example
     * // Get one PageStats
     * const pageStats = await prisma.pageStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageStatsFindUniqueArgs>(args: SelectSubset<T, PageStatsFindUniqueArgs<ExtArgs>>): Prisma__PageStatsClient<$Result.GetResult<Prisma.$PageStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageStatsFindUniqueOrThrowArgs} args - Arguments to find a PageStats
     * @example
     * // Get one PageStats
     * const pageStats = await prisma.pageStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, PageStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageStatsClient<$Result.GetResult<Prisma.$PageStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageStatsFindFirstArgs} args - Arguments to find a PageStats
     * @example
     * // Get one PageStats
     * const pageStats = await prisma.pageStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageStatsFindFirstArgs>(args?: SelectSubset<T, PageStatsFindFirstArgs<ExtArgs>>): Prisma__PageStatsClient<$Result.GetResult<Prisma.$PageStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageStatsFindFirstOrThrowArgs} args - Arguments to find a PageStats
     * @example
     * // Get one PageStats
     * const pageStats = await prisma.pageStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, PageStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageStatsClient<$Result.GetResult<Prisma.$PageStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageStats
     * const pageStats = await prisma.pageStats.findMany()
     * 
     * // Get first 10 PageStats
     * const pageStats = await prisma.pageStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageStatsWithIdOnly = await prisma.pageStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageStatsFindManyArgs>(args?: SelectSubset<T, PageStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageStats.
     * @param {PageStatsCreateArgs} args - Arguments to create a PageStats.
     * @example
     * // Create one PageStats
     * const PageStats = await prisma.pageStats.create({
     *   data: {
     *     // ... data to create a PageStats
     *   }
     * })
     * 
     */
    create<T extends PageStatsCreateArgs>(args: SelectSubset<T, PageStatsCreateArgs<ExtArgs>>): Prisma__PageStatsClient<$Result.GetResult<Prisma.$PageStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageStats.
     * @param {PageStatsCreateManyArgs} args - Arguments to create many PageStats.
     * @example
     * // Create many PageStats
     * const pageStats = await prisma.pageStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageStatsCreateManyArgs>(args?: SelectSubset<T, PageStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageStats and returns the data saved in the database.
     * @param {PageStatsCreateManyAndReturnArgs} args - Arguments to create many PageStats.
     * @example
     * // Create many PageStats
     * const pageStats = await prisma.pageStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageStats and only return the `id`
     * const pageStatsWithIdOnly = await prisma.pageStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, PageStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageStats.
     * @param {PageStatsDeleteArgs} args - Arguments to delete one PageStats.
     * @example
     * // Delete one PageStats
     * const PageStats = await prisma.pageStats.delete({
     *   where: {
     *     // ... filter to delete one PageStats
     *   }
     * })
     * 
     */
    delete<T extends PageStatsDeleteArgs>(args: SelectSubset<T, PageStatsDeleteArgs<ExtArgs>>): Prisma__PageStatsClient<$Result.GetResult<Prisma.$PageStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageStats.
     * @param {PageStatsUpdateArgs} args - Arguments to update one PageStats.
     * @example
     * // Update one PageStats
     * const pageStats = await prisma.pageStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageStatsUpdateArgs>(args: SelectSubset<T, PageStatsUpdateArgs<ExtArgs>>): Prisma__PageStatsClient<$Result.GetResult<Prisma.$PageStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageStats.
     * @param {PageStatsDeleteManyArgs} args - Arguments to filter PageStats to delete.
     * @example
     * // Delete a few PageStats
     * const { count } = await prisma.pageStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageStatsDeleteManyArgs>(args?: SelectSubset<T, PageStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageStats
     * const pageStats = await prisma.pageStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageStatsUpdateManyArgs>(args: SelectSubset<T, PageStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageStats and returns the data updated in the database.
     * @param {PageStatsUpdateManyAndReturnArgs} args - Arguments to update many PageStats.
     * @example
     * // Update many PageStats
     * const pageStats = await prisma.pageStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageStats and only return the `id`
     * const pageStatsWithIdOnly = await prisma.pageStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, PageStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageStats.
     * @param {PageStatsUpsertArgs} args - Arguments to update or create a PageStats.
     * @example
     * // Update or create a PageStats
     * const pageStats = await prisma.pageStats.upsert({
     *   create: {
     *     // ... data to create a PageStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageStats we want to update
     *   }
     * })
     */
    upsert<T extends PageStatsUpsertArgs>(args: SelectSubset<T, PageStatsUpsertArgs<ExtArgs>>): Prisma__PageStatsClient<$Result.GetResult<Prisma.$PageStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageStatsCountArgs} args - Arguments to filter PageStats to count.
     * @example
     * // Count the number of PageStats
     * const count = await prisma.pageStats.count({
     *   where: {
     *     // ... the filter for the PageStats we want to count
     *   }
     * })
    **/
    count<T extends PageStatsCountArgs>(
      args?: Subset<T, PageStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageStatsAggregateArgs>(args: Subset<T, PageStatsAggregateArgs>): Prisma.PrismaPromise<GetPageStatsAggregateType<T>>

    /**
     * Group by PageStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageStatsGroupByArgs['orderBy'] }
        : { orderBy?: PageStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageStats model
   */
  readonly fields: PageStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PageStats model
   */
  interface PageStatsFieldRefs {
    readonly id: FieldRef<"PageStats", 'String'>
    readonly page: FieldRef<"PageStats", 'String'>
    readonly date: FieldRef<"PageStats", 'DateTime'>
    readonly views: FieldRef<"PageStats", 'Int'>
    readonly uniqueViews: FieldRef<"PageStats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PageStats findUnique
   */
  export type PageStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageStats
     */
    select?: PageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageStats
     */
    omit?: PageStatsOmit<ExtArgs> | null
    /**
     * Filter, which PageStats to fetch.
     */
    where: PageStatsWhereUniqueInput
  }

  /**
   * PageStats findUniqueOrThrow
   */
  export type PageStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageStats
     */
    select?: PageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageStats
     */
    omit?: PageStatsOmit<ExtArgs> | null
    /**
     * Filter, which PageStats to fetch.
     */
    where: PageStatsWhereUniqueInput
  }

  /**
   * PageStats findFirst
   */
  export type PageStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageStats
     */
    select?: PageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageStats
     */
    omit?: PageStatsOmit<ExtArgs> | null
    /**
     * Filter, which PageStats to fetch.
     */
    where?: PageStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageStats to fetch.
     */
    orderBy?: PageStatsOrderByWithRelationInput | PageStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageStats.
     */
    cursor?: PageStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageStats.
     */
    distinct?: PageStatsScalarFieldEnum | PageStatsScalarFieldEnum[]
  }

  /**
   * PageStats findFirstOrThrow
   */
  export type PageStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageStats
     */
    select?: PageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageStats
     */
    omit?: PageStatsOmit<ExtArgs> | null
    /**
     * Filter, which PageStats to fetch.
     */
    where?: PageStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageStats to fetch.
     */
    orderBy?: PageStatsOrderByWithRelationInput | PageStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageStats.
     */
    cursor?: PageStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageStats.
     */
    distinct?: PageStatsScalarFieldEnum | PageStatsScalarFieldEnum[]
  }

  /**
   * PageStats findMany
   */
  export type PageStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageStats
     */
    select?: PageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageStats
     */
    omit?: PageStatsOmit<ExtArgs> | null
    /**
     * Filter, which PageStats to fetch.
     */
    where?: PageStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageStats to fetch.
     */
    orderBy?: PageStatsOrderByWithRelationInput | PageStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageStats.
     */
    cursor?: PageStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageStats.
     */
    skip?: number
    distinct?: PageStatsScalarFieldEnum | PageStatsScalarFieldEnum[]
  }

  /**
   * PageStats create
   */
  export type PageStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageStats
     */
    select?: PageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageStats
     */
    omit?: PageStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a PageStats.
     */
    data: XOR<PageStatsCreateInput, PageStatsUncheckedCreateInput>
  }

  /**
   * PageStats createMany
   */
  export type PageStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageStats.
     */
    data: PageStatsCreateManyInput | PageStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageStats createManyAndReturn
   */
  export type PageStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageStats
     */
    select?: PageStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageStats
     */
    omit?: PageStatsOmit<ExtArgs> | null
    /**
     * The data used to create many PageStats.
     */
    data: PageStatsCreateManyInput | PageStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageStats update
   */
  export type PageStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageStats
     */
    select?: PageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageStats
     */
    omit?: PageStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a PageStats.
     */
    data: XOR<PageStatsUpdateInput, PageStatsUncheckedUpdateInput>
    /**
     * Choose, which PageStats to update.
     */
    where: PageStatsWhereUniqueInput
  }

  /**
   * PageStats updateMany
   */
  export type PageStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageStats.
     */
    data: XOR<PageStatsUpdateManyMutationInput, PageStatsUncheckedUpdateManyInput>
    /**
     * Filter which PageStats to update
     */
    where?: PageStatsWhereInput
    /**
     * Limit how many PageStats to update.
     */
    limit?: number
  }

  /**
   * PageStats updateManyAndReturn
   */
  export type PageStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageStats
     */
    select?: PageStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageStats
     */
    omit?: PageStatsOmit<ExtArgs> | null
    /**
     * The data used to update PageStats.
     */
    data: XOR<PageStatsUpdateManyMutationInput, PageStatsUncheckedUpdateManyInput>
    /**
     * Filter which PageStats to update
     */
    where?: PageStatsWhereInput
    /**
     * Limit how many PageStats to update.
     */
    limit?: number
  }

  /**
   * PageStats upsert
   */
  export type PageStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageStats
     */
    select?: PageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageStats
     */
    omit?: PageStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the PageStats to update in case it exists.
     */
    where: PageStatsWhereUniqueInput
    /**
     * In case the PageStats found by the `where` argument doesn't exist, create a new PageStats with this data.
     */
    create: XOR<PageStatsCreateInput, PageStatsUncheckedCreateInput>
    /**
     * In case the PageStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageStatsUpdateInput, PageStatsUncheckedUpdateInput>
  }

  /**
   * PageStats delete
   */
  export type PageStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageStats
     */
    select?: PageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageStats
     */
    omit?: PageStatsOmit<ExtArgs> | null
    /**
     * Filter which PageStats to delete.
     */
    where: PageStatsWhereUniqueInput
  }

  /**
   * PageStats deleteMany
   */
  export type PageStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageStats to delete
     */
    where?: PageStatsWhereInput
    /**
     * Limit how many PageStats to delete.
     */
    limit?: number
  }

  /**
   * PageStats without action
   */
  export type PageStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageStats
     */
    select?: PageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageStats
     */
    omit?: PageStatsOmit<ExtArgs> | null
  }


  /**
   * Model CountryStats
   */

  export type AggregateCountryStats = {
    _count: CountryStatsCountAggregateOutputType | null
    _avg: CountryStatsAvgAggregateOutputType | null
    _sum: CountryStatsSumAggregateOutputType | null
    _min: CountryStatsMinAggregateOutputType | null
    _max: CountryStatsMaxAggregateOutputType | null
  }

  export type CountryStatsAvgAggregateOutputType = {
    visitors: number | null
    sessions: number | null
  }

  export type CountryStatsSumAggregateOutputType = {
    visitors: number | null
    sessions: number | null
  }

  export type CountryStatsMinAggregateOutputType = {
    id: string | null
    country: string | null
    date: Date | null
    visitors: number | null
    sessions: number | null
  }

  export type CountryStatsMaxAggregateOutputType = {
    id: string | null
    country: string | null
    date: Date | null
    visitors: number | null
    sessions: number | null
  }

  export type CountryStatsCountAggregateOutputType = {
    id: number
    country: number
    date: number
    visitors: number
    sessions: number
    _all: number
  }


  export type CountryStatsAvgAggregateInputType = {
    visitors?: true
    sessions?: true
  }

  export type CountryStatsSumAggregateInputType = {
    visitors?: true
    sessions?: true
  }

  export type CountryStatsMinAggregateInputType = {
    id?: true
    country?: true
    date?: true
    visitors?: true
    sessions?: true
  }

  export type CountryStatsMaxAggregateInputType = {
    id?: true
    country?: true
    date?: true
    visitors?: true
    sessions?: true
  }

  export type CountryStatsCountAggregateInputType = {
    id?: true
    country?: true
    date?: true
    visitors?: true
    sessions?: true
    _all?: true
  }

  export type CountryStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CountryStats to aggregate.
     */
    where?: CountryStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryStats to fetch.
     */
    orderBy?: CountryStatsOrderByWithRelationInput | CountryStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CountryStats
    **/
    _count?: true | CountryStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountryStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryStatsMaxAggregateInputType
  }

  export type GetCountryStatsAggregateType<T extends CountryStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateCountryStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountryStats[P]>
      : GetScalarType<T[P], AggregateCountryStats[P]>
  }




  export type CountryStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryStatsWhereInput
    orderBy?: CountryStatsOrderByWithAggregationInput | CountryStatsOrderByWithAggregationInput[]
    by: CountryStatsScalarFieldEnum[] | CountryStatsScalarFieldEnum
    having?: CountryStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryStatsCountAggregateInputType | true
    _avg?: CountryStatsAvgAggregateInputType
    _sum?: CountryStatsSumAggregateInputType
    _min?: CountryStatsMinAggregateInputType
    _max?: CountryStatsMaxAggregateInputType
  }

  export type CountryStatsGroupByOutputType = {
    id: string
    country: string
    date: Date
    visitors: number
    sessions: number
    _count: CountryStatsCountAggregateOutputType | null
    _avg: CountryStatsAvgAggregateOutputType | null
    _sum: CountryStatsSumAggregateOutputType | null
    _min: CountryStatsMinAggregateOutputType | null
    _max: CountryStatsMaxAggregateOutputType | null
  }

  type GetCountryStatsGroupByPayload<T extends CountryStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryStatsGroupByOutputType[P]>
            : GetScalarType<T[P], CountryStatsGroupByOutputType[P]>
        }
      >
    >


  export type CountryStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    date?: boolean
    visitors?: boolean
    sessions?: boolean
  }, ExtArgs["result"]["countryStats"]>

  export type CountryStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    date?: boolean
    visitors?: boolean
    sessions?: boolean
  }, ExtArgs["result"]["countryStats"]>

  export type CountryStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    date?: boolean
    visitors?: boolean
    sessions?: boolean
  }, ExtArgs["result"]["countryStats"]>

  export type CountryStatsSelectScalar = {
    id?: boolean
    country?: boolean
    date?: boolean
    visitors?: boolean
    sessions?: boolean
  }

  export type CountryStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country" | "date" | "visitors" | "sessions", ExtArgs["result"]["countryStats"]>

  export type $CountryStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CountryStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      country: string
      date: Date
      visitors: number
      sessions: number
    }, ExtArgs["result"]["countryStats"]>
    composites: {}
  }

  type CountryStatsGetPayload<S extends boolean | null | undefined | CountryStatsDefaultArgs> = $Result.GetResult<Prisma.$CountryStatsPayload, S>

  type CountryStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryStatsCountAggregateInputType | true
    }

  export interface CountryStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CountryStats'], meta: { name: 'CountryStats' } }
    /**
     * Find zero or one CountryStats that matches the filter.
     * @param {CountryStatsFindUniqueArgs} args - Arguments to find a CountryStats
     * @example
     * // Get one CountryStats
     * const countryStats = await prisma.countryStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryStatsFindUniqueArgs>(args: SelectSubset<T, CountryStatsFindUniqueArgs<ExtArgs>>): Prisma__CountryStatsClient<$Result.GetResult<Prisma.$CountryStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CountryStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryStatsFindUniqueOrThrowArgs} args - Arguments to find a CountryStats
     * @example
     * // Get one CountryStats
     * const countryStats = await prisma.countryStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryStatsClient<$Result.GetResult<Prisma.$CountryStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CountryStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryStatsFindFirstArgs} args - Arguments to find a CountryStats
     * @example
     * // Get one CountryStats
     * const countryStats = await prisma.countryStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryStatsFindFirstArgs>(args?: SelectSubset<T, CountryStatsFindFirstArgs<ExtArgs>>): Prisma__CountryStatsClient<$Result.GetResult<Prisma.$CountryStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CountryStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryStatsFindFirstOrThrowArgs} args - Arguments to find a CountryStats
     * @example
     * // Get one CountryStats
     * const countryStats = await prisma.countryStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryStatsClient<$Result.GetResult<Prisma.$CountryStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CountryStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CountryStats
     * const countryStats = await prisma.countryStats.findMany()
     * 
     * // Get first 10 CountryStats
     * const countryStats = await prisma.countryStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryStatsWithIdOnly = await prisma.countryStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryStatsFindManyArgs>(args?: SelectSubset<T, CountryStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CountryStats.
     * @param {CountryStatsCreateArgs} args - Arguments to create a CountryStats.
     * @example
     * // Create one CountryStats
     * const CountryStats = await prisma.countryStats.create({
     *   data: {
     *     // ... data to create a CountryStats
     *   }
     * })
     * 
     */
    create<T extends CountryStatsCreateArgs>(args: SelectSubset<T, CountryStatsCreateArgs<ExtArgs>>): Prisma__CountryStatsClient<$Result.GetResult<Prisma.$CountryStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CountryStats.
     * @param {CountryStatsCreateManyArgs} args - Arguments to create many CountryStats.
     * @example
     * // Create many CountryStats
     * const countryStats = await prisma.countryStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryStatsCreateManyArgs>(args?: SelectSubset<T, CountryStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CountryStats and returns the data saved in the database.
     * @param {CountryStatsCreateManyAndReturnArgs} args - Arguments to create many CountryStats.
     * @example
     * // Create many CountryStats
     * const countryStats = await prisma.countryStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CountryStats and only return the `id`
     * const countryStatsWithIdOnly = await prisma.countryStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CountryStats.
     * @param {CountryStatsDeleteArgs} args - Arguments to delete one CountryStats.
     * @example
     * // Delete one CountryStats
     * const CountryStats = await prisma.countryStats.delete({
     *   where: {
     *     // ... filter to delete one CountryStats
     *   }
     * })
     * 
     */
    delete<T extends CountryStatsDeleteArgs>(args: SelectSubset<T, CountryStatsDeleteArgs<ExtArgs>>): Prisma__CountryStatsClient<$Result.GetResult<Prisma.$CountryStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CountryStats.
     * @param {CountryStatsUpdateArgs} args - Arguments to update one CountryStats.
     * @example
     * // Update one CountryStats
     * const countryStats = await prisma.countryStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryStatsUpdateArgs>(args: SelectSubset<T, CountryStatsUpdateArgs<ExtArgs>>): Prisma__CountryStatsClient<$Result.GetResult<Prisma.$CountryStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CountryStats.
     * @param {CountryStatsDeleteManyArgs} args - Arguments to filter CountryStats to delete.
     * @example
     * // Delete a few CountryStats
     * const { count } = await prisma.countryStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryStatsDeleteManyArgs>(args?: SelectSubset<T, CountryStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountryStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CountryStats
     * const countryStats = await prisma.countryStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryStatsUpdateManyArgs>(args: SelectSubset<T, CountryStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountryStats and returns the data updated in the database.
     * @param {CountryStatsUpdateManyAndReturnArgs} args - Arguments to update many CountryStats.
     * @example
     * // Update many CountryStats
     * const countryStats = await prisma.countryStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CountryStats and only return the `id`
     * const countryStatsWithIdOnly = await prisma.countryStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CountryStats.
     * @param {CountryStatsUpsertArgs} args - Arguments to update or create a CountryStats.
     * @example
     * // Update or create a CountryStats
     * const countryStats = await prisma.countryStats.upsert({
     *   create: {
     *     // ... data to create a CountryStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CountryStats we want to update
     *   }
     * })
     */
    upsert<T extends CountryStatsUpsertArgs>(args: SelectSubset<T, CountryStatsUpsertArgs<ExtArgs>>): Prisma__CountryStatsClient<$Result.GetResult<Prisma.$CountryStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CountryStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryStatsCountArgs} args - Arguments to filter CountryStats to count.
     * @example
     * // Count the number of CountryStats
     * const count = await prisma.countryStats.count({
     *   where: {
     *     // ... the filter for the CountryStats we want to count
     *   }
     * })
    **/
    count<T extends CountryStatsCountArgs>(
      args?: Subset<T, CountryStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CountryStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryStatsAggregateArgs>(args: Subset<T, CountryStatsAggregateArgs>): Prisma.PrismaPromise<GetCountryStatsAggregateType<T>>

    /**
     * Group by CountryStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryStatsGroupByArgs['orderBy'] }
        : { orderBy?: CountryStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CountryStats model
   */
  readonly fields: CountryStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CountryStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CountryStats model
   */
  interface CountryStatsFieldRefs {
    readonly id: FieldRef<"CountryStats", 'String'>
    readonly country: FieldRef<"CountryStats", 'String'>
    readonly date: FieldRef<"CountryStats", 'DateTime'>
    readonly visitors: FieldRef<"CountryStats", 'Int'>
    readonly sessions: FieldRef<"CountryStats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CountryStats findUnique
   */
  export type CountryStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryStats
     */
    select?: CountryStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryStats
     */
    omit?: CountryStatsOmit<ExtArgs> | null
    /**
     * Filter, which CountryStats to fetch.
     */
    where: CountryStatsWhereUniqueInput
  }

  /**
   * CountryStats findUniqueOrThrow
   */
  export type CountryStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryStats
     */
    select?: CountryStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryStats
     */
    omit?: CountryStatsOmit<ExtArgs> | null
    /**
     * Filter, which CountryStats to fetch.
     */
    where: CountryStatsWhereUniqueInput
  }

  /**
   * CountryStats findFirst
   */
  export type CountryStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryStats
     */
    select?: CountryStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryStats
     */
    omit?: CountryStatsOmit<ExtArgs> | null
    /**
     * Filter, which CountryStats to fetch.
     */
    where?: CountryStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryStats to fetch.
     */
    orderBy?: CountryStatsOrderByWithRelationInput | CountryStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CountryStats.
     */
    cursor?: CountryStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CountryStats.
     */
    distinct?: CountryStatsScalarFieldEnum | CountryStatsScalarFieldEnum[]
  }

  /**
   * CountryStats findFirstOrThrow
   */
  export type CountryStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryStats
     */
    select?: CountryStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryStats
     */
    omit?: CountryStatsOmit<ExtArgs> | null
    /**
     * Filter, which CountryStats to fetch.
     */
    where?: CountryStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryStats to fetch.
     */
    orderBy?: CountryStatsOrderByWithRelationInput | CountryStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CountryStats.
     */
    cursor?: CountryStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CountryStats.
     */
    distinct?: CountryStatsScalarFieldEnum | CountryStatsScalarFieldEnum[]
  }

  /**
   * CountryStats findMany
   */
  export type CountryStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryStats
     */
    select?: CountryStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryStats
     */
    omit?: CountryStatsOmit<ExtArgs> | null
    /**
     * Filter, which CountryStats to fetch.
     */
    where?: CountryStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryStats to fetch.
     */
    orderBy?: CountryStatsOrderByWithRelationInput | CountryStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CountryStats.
     */
    cursor?: CountryStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryStats.
     */
    skip?: number
    distinct?: CountryStatsScalarFieldEnum | CountryStatsScalarFieldEnum[]
  }

  /**
   * CountryStats create
   */
  export type CountryStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryStats
     */
    select?: CountryStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryStats
     */
    omit?: CountryStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a CountryStats.
     */
    data: XOR<CountryStatsCreateInput, CountryStatsUncheckedCreateInput>
  }

  /**
   * CountryStats createMany
   */
  export type CountryStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CountryStats.
     */
    data: CountryStatsCreateManyInput | CountryStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CountryStats createManyAndReturn
   */
  export type CountryStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryStats
     */
    select?: CountryStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CountryStats
     */
    omit?: CountryStatsOmit<ExtArgs> | null
    /**
     * The data used to create many CountryStats.
     */
    data: CountryStatsCreateManyInput | CountryStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CountryStats update
   */
  export type CountryStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryStats
     */
    select?: CountryStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryStats
     */
    omit?: CountryStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a CountryStats.
     */
    data: XOR<CountryStatsUpdateInput, CountryStatsUncheckedUpdateInput>
    /**
     * Choose, which CountryStats to update.
     */
    where: CountryStatsWhereUniqueInput
  }

  /**
   * CountryStats updateMany
   */
  export type CountryStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CountryStats.
     */
    data: XOR<CountryStatsUpdateManyMutationInput, CountryStatsUncheckedUpdateManyInput>
    /**
     * Filter which CountryStats to update
     */
    where?: CountryStatsWhereInput
    /**
     * Limit how many CountryStats to update.
     */
    limit?: number
  }

  /**
   * CountryStats updateManyAndReturn
   */
  export type CountryStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryStats
     */
    select?: CountryStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CountryStats
     */
    omit?: CountryStatsOmit<ExtArgs> | null
    /**
     * The data used to update CountryStats.
     */
    data: XOR<CountryStatsUpdateManyMutationInput, CountryStatsUncheckedUpdateManyInput>
    /**
     * Filter which CountryStats to update
     */
    where?: CountryStatsWhereInput
    /**
     * Limit how many CountryStats to update.
     */
    limit?: number
  }

  /**
   * CountryStats upsert
   */
  export type CountryStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryStats
     */
    select?: CountryStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryStats
     */
    omit?: CountryStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the CountryStats to update in case it exists.
     */
    where: CountryStatsWhereUniqueInput
    /**
     * In case the CountryStats found by the `where` argument doesn't exist, create a new CountryStats with this data.
     */
    create: XOR<CountryStatsCreateInput, CountryStatsUncheckedCreateInput>
    /**
     * In case the CountryStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryStatsUpdateInput, CountryStatsUncheckedUpdateInput>
  }

  /**
   * CountryStats delete
   */
  export type CountryStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryStats
     */
    select?: CountryStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryStats
     */
    omit?: CountryStatsOmit<ExtArgs> | null
    /**
     * Filter which CountryStats to delete.
     */
    where: CountryStatsWhereUniqueInput
  }

  /**
   * CountryStats deleteMany
   */
  export type CountryStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CountryStats to delete
     */
    where?: CountryStatsWhereInput
    /**
     * Limit how many CountryStats to delete.
     */
    limit?: number
  }

  /**
   * CountryStats without action
   */
  export type CountryStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryStats
     */
    select?: CountryStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryStats
     */
    omit?: CountryStatsOmit<ExtArgs> | null
  }


  /**
   * Model AlertLog
   */

  export type AggregateAlertLog = {
    _count: AlertLogCountAggregateOutputType | null
    _min: AlertLogMinAggregateOutputType | null
    _max: AlertLogMaxAggregateOutputType | null
  }

  export type AlertLogMinAggregateOutputType = {
    id: string | null
    level: string | null
    message: string | null
    createdAt: Date | null
  }

  export type AlertLogMaxAggregateOutputType = {
    id: string | null
    level: string | null
    message: string | null
    createdAt: Date | null
  }

  export type AlertLogCountAggregateOutputType = {
    id: number
    level: number
    message: number
    details: number
    createdAt: number
    _all: number
  }


  export type AlertLogMinAggregateInputType = {
    id?: true
    level?: true
    message?: true
    createdAt?: true
  }

  export type AlertLogMaxAggregateInputType = {
    id?: true
    level?: true
    message?: true
    createdAt?: true
  }

  export type AlertLogCountAggregateInputType = {
    id?: true
    level?: true
    message?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type AlertLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertLog to aggregate.
     */
    where?: AlertLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertLogs to fetch.
     */
    orderBy?: AlertLogOrderByWithRelationInput | AlertLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlertLogs
    **/
    _count?: true | AlertLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertLogMaxAggregateInputType
  }

  export type GetAlertLogAggregateType<T extends AlertLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAlertLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlertLog[P]>
      : GetScalarType<T[P], AggregateAlertLog[P]>
  }




  export type AlertLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertLogWhereInput
    orderBy?: AlertLogOrderByWithAggregationInput | AlertLogOrderByWithAggregationInput[]
    by: AlertLogScalarFieldEnum[] | AlertLogScalarFieldEnum
    having?: AlertLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertLogCountAggregateInputType | true
    _min?: AlertLogMinAggregateInputType
    _max?: AlertLogMaxAggregateInputType
  }

  export type AlertLogGroupByOutputType = {
    id: string
    level: string
    message: string
    details: JsonValue | null
    createdAt: Date
    _count: AlertLogCountAggregateOutputType | null
    _min: AlertLogMinAggregateOutputType | null
    _max: AlertLogMaxAggregateOutputType | null
  }

  type GetAlertLogGroupByPayload<T extends AlertLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertLogGroupByOutputType[P]>
            : GetScalarType<T[P], AlertLogGroupByOutputType[P]>
        }
      >
    >


  export type AlertLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    message?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["alertLog"]>

  export type AlertLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    message?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["alertLog"]>

  export type AlertLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    message?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["alertLog"]>

  export type AlertLogSelectScalar = {
    id?: boolean
    level?: boolean
    message?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type AlertLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "level" | "message" | "details" | "createdAt", ExtArgs["result"]["alertLog"]>

  export type $AlertLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlertLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      level: string
      message: string
      details: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["alertLog"]>
    composites: {}
  }

  type AlertLogGetPayload<S extends boolean | null | undefined | AlertLogDefaultArgs> = $Result.GetResult<Prisma.$AlertLogPayload, S>

  type AlertLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertLogCountAggregateInputType | true
    }

  export interface AlertLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlertLog'], meta: { name: 'AlertLog' } }
    /**
     * Find zero or one AlertLog that matches the filter.
     * @param {AlertLogFindUniqueArgs} args - Arguments to find a AlertLog
     * @example
     * // Get one AlertLog
     * const alertLog = await prisma.alertLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertLogFindUniqueArgs>(args: SelectSubset<T, AlertLogFindUniqueArgs<ExtArgs>>): Prisma__AlertLogClient<$Result.GetResult<Prisma.$AlertLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlertLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertLogFindUniqueOrThrowArgs} args - Arguments to find a AlertLog
     * @example
     * // Get one AlertLog
     * const alertLog = await prisma.alertLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertLogClient<$Result.GetResult<Prisma.$AlertLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertLogFindFirstArgs} args - Arguments to find a AlertLog
     * @example
     * // Get one AlertLog
     * const alertLog = await prisma.alertLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertLogFindFirstArgs>(args?: SelectSubset<T, AlertLogFindFirstArgs<ExtArgs>>): Prisma__AlertLogClient<$Result.GetResult<Prisma.$AlertLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertLogFindFirstOrThrowArgs} args - Arguments to find a AlertLog
     * @example
     * // Get one AlertLog
     * const alertLog = await prisma.alertLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertLogClient<$Result.GetResult<Prisma.$AlertLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlertLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlertLogs
     * const alertLogs = await prisma.alertLog.findMany()
     * 
     * // Get first 10 AlertLogs
     * const alertLogs = await prisma.alertLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertLogWithIdOnly = await prisma.alertLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertLogFindManyArgs>(args?: SelectSubset<T, AlertLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlertLog.
     * @param {AlertLogCreateArgs} args - Arguments to create a AlertLog.
     * @example
     * // Create one AlertLog
     * const AlertLog = await prisma.alertLog.create({
     *   data: {
     *     // ... data to create a AlertLog
     *   }
     * })
     * 
     */
    create<T extends AlertLogCreateArgs>(args: SelectSubset<T, AlertLogCreateArgs<ExtArgs>>): Prisma__AlertLogClient<$Result.GetResult<Prisma.$AlertLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlertLogs.
     * @param {AlertLogCreateManyArgs} args - Arguments to create many AlertLogs.
     * @example
     * // Create many AlertLogs
     * const alertLog = await prisma.alertLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertLogCreateManyArgs>(args?: SelectSubset<T, AlertLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlertLogs and returns the data saved in the database.
     * @param {AlertLogCreateManyAndReturnArgs} args - Arguments to create many AlertLogs.
     * @example
     * // Create many AlertLogs
     * const alertLog = await prisma.alertLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlertLogs and only return the `id`
     * const alertLogWithIdOnly = await prisma.alertLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlertLog.
     * @param {AlertLogDeleteArgs} args - Arguments to delete one AlertLog.
     * @example
     * // Delete one AlertLog
     * const AlertLog = await prisma.alertLog.delete({
     *   where: {
     *     // ... filter to delete one AlertLog
     *   }
     * })
     * 
     */
    delete<T extends AlertLogDeleteArgs>(args: SelectSubset<T, AlertLogDeleteArgs<ExtArgs>>): Prisma__AlertLogClient<$Result.GetResult<Prisma.$AlertLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlertLog.
     * @param {AlertLogUpdateArgs} args - Arguments to update one AlertLog.
     * @example
     * // Update one AlertLog
     * const alertLog = await prisma.alertLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertLogUpdateArgs>(args: SelectSubset<T, AlertLogUpdateArgs<ExtArgs>>): Prisma__AlertLogClient<$Result.GetResult<Prisma.$AlertLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlertLogs.
     * @param {AlertLogDeleteManyArgs} args - Arguments to filter AlertLogs to delete.
     * @example
     * // Delete a few AlertLogs
     * const { count } = await prisma.alertLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertLogDeleteManyArgs>(args?: SelectSubset<T, AlertLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlertLogs
     * const alertLog = await prisma.alertLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertLogUpdateManyArgs>(args: SelectSubset<T, AlertLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertLogs and returns the data updated in the database.
     * @param {AlertLogUpdateManyAndReturnArgs} args - Arguments to update many AlertLogs.
     * @example
     * // Update many AlertLogs
     * const alertLog = await prisma.alertLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlertLogs and only return the `id`
     * const alertLogWithIdOnly = await prisma.alertLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlertLog.
     * @param {AlertLogUpsertArgs} args - Arguments to update or create a AlertLog.
     * @example
     * // Update or create a AlertLog
     * const alertLog = await prisma.alertLog.upsert({
     *   create: {
     *     // ... data to create a AlertLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlertLog we want to update
     *   }
     * })
     */
    upsert<T extends AlertLogUpsertArgs>(args: SelectSubset<T, AlertLogUpsertArgs<ExtArgs>>): Prisma__AlertLogClient<$Result.GetResult<Prisma.$AlertLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlertLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertLogCountArgs} args - Arguments to filter AlertLogs to count.
     * @example
     * // Count the number of AlertLogs
     * const count = await prisma.alertLog.count({
     *   where: {
     *     // ... the filter for the AlertLogs we want to count
     *   }
     * })
    **/
    count<T extends AlertLogCountArgs>(
      args?: Subset<T, AlertLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlertLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertLogAggregateArgs>(args: Subset<T, AlertLogAggregateArgs>): Prisma.PrismaPromise<GetAlertLogAggregateType<T>>

    /**
     * Group by AlertLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertLogGroupByArgs['orderBy'] }
        : { orderBy?: AlertLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlertLog model
   */
  readonly fields: AlertLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlertLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlertLog model
   */
  interface AlertLogFieldRefs {
    readonly id: FieldRef<"AlertLog", 'String'>
    readonly level: FieldRef<"AlertLog", 'String'>
    readonly message: FieldRef<"AlertLog", 'String'>
    readonly details: FieldRef<"AlertLog", 'Json'>
    readonly createdAt: FieldRef<"AlertLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlertLog findUnique
   */
  export type AlertLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertLog
     */
    select?: AlertLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertLog
     */
    omit?: AlertLogOmit<ExtArgs> | null
    /**
     * Filter, which AlertLog to fetch.
     */
    where: AlertLogWhereUniqueInput
  }

  /**
   * AlertLog findUniqueOrThrow
   */
  export type AlertLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertLog
     */
    select?: AlertLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertLog
     */
    omit?: AlertLogOmit<ExtArgs> | null
    /**
     * Filter, which AlertLog to fetch.
     */
    where: AlertLogWhereUniqueInput
  }

  /**
   * AlertLog findFirst
   */
  export type AlertLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertLog
     */
    select?: AlertLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertLog
     */
    omit?: AlertLogOmit<ExtArgs> | null
    /**
     * Filter, which AlertLog to fetch.
     */
    where?: AlertLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertLogs to fetch.
     */
    orderBy?: AlertLogOrderByWithRelationInput | AlertLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertLogs.
     */
    cursor?: AlertLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertLogs.
     */
    distinct?: AlertLogScalarFieldEnum | AlertLogScalarFieldEnum[]
  }

  /**
   * AlertLog findFirstOrThrow
   */
  export type AlertLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertLog
     */
    select?: AlertLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertLog
     */
    omit?: AlertLogOmit<ExtArgs> | null
    /**
     * Filter, which AlertLog to fetch.
     */
    where?: AlertLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertLogs to fetch.
     */
    orderBy?: AlertLogOrderByWithRelationInput | AlertLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertLogs.
     */
    cursor?: AlertLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertLogs.
     */
    distinct?: AlertLogScalarFieldEnum | AlertLogScalarFieldEnum[]
  }

  /**
   * AlertLog findMany
   */
  export type AlertLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertLog
     */
    select?: AlertLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertLog
     */
    omit?: AlertLogOmit<ExtArgs> | null
    /**
     * Filter, which AlertLogs to fetch.
     */
    where?: AlertLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertLogs to fetch.
     */
    orderBy?: AlertLogOrderByWithRelationInput | AlertLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlertLogs.
     */
    cursor?: AlertLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertLogs.
     */
    skip?: number
    distinct?: AlertLogScalarFieldEnum | AlertLogScalarFieldEnum[]
  }

  /**
   * AlertLog create
   */
  export type AlertLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertLog
     */
    select?: AlertLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertLog
     */
    omit?: AlertLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AlertLog.
     */
    data: XOR<AlertLogCreateInput, AlertLogUncheckedCreateInput>
  }

  /**
   * AlertLog createMany
   */
  export type AlertLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlertLogs.
     */
    data: AlertLogCreateManyInput | AlertLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlertLog createManyAndReturn
   */
  export type AlertLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertLog
     */
    select?: AlertLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlertLog
     */
    omit?: AlertLogOmit<ExtArgs> | null
    /**
     * The data used to create many AlertLogs.
     */
    data: AlertLogCreateManyInput | AlertLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlertLog update
   */
  export type AlertLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertLog
     */
    select?: AlertLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertLog
     */
    omit?: AlertLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AlertLog.
     */
    data: XOR<AlertLogUpdateInput, AlertLogUncheckedUpdateInput>
    /**
     * Choose, which AlertLog to update.
     */
    where: AlertLogWhereUniqueInput
  }

  /**
   * AlertLog updateMany
   */
  export type AlertLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlertLogs.
     */
    data: XOR<AlertLogUpdateManyMutationInput, AlertLogUncheckedUpdateManyInput>
    /**
     * Filter which AlertLogs to update
     */
    where?: AlertLogWhereInput
    /**
     * Limit how many AlertLogs to update.
     */
    limit?: number
  }

  /**
   * AlertLog updateManyAndReturn
   */
  export type AlertLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertLog
     */
    select?: AlertLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlertLog
     */
    omit?: AlertLogOmit<ExtArgs> | null
    /**
     * The data used to update AlertLogs.
     */
    data: XOR<AlertLogUpdateManyMutationInput, AlertLogUncheckedUpdateManyInput>
    /**
     * Filter which AlertLogs to update
     */
    where?: AlertLogWhereInput
    /**
     * Limit how many AlertLogs to update.
     */
    limit?: number
  }

  /**
   * AlertLog upsert
   */
  export type AlertLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertLog
     */
    select?: AlertLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertLog
     */
    omit?: AlertLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AlertLog to update in case it exists.
     */
    where: AlertLogWhereUniqueInput
    /**
     * In case the AlertLog found by the `where` argument doesn't exist, create a new AlertLog with this data.
     */
    create: XOR<AlertLogCreateInput, AlertLogUncheckedCreateInput>
    /**
     * In case the AlertLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertLogUpdateInput, AlertLogUncheckedUpdateInput>
  }

  /**
   * AlertLog delete
   */
  export type AlertLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertLog
     */
    select?: AlertLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertLog
     */
    omit?: AlertLogOmit<ExtArgs> | null
    /**
     * Filter which AlertLog to delete.
     */
    where: AlertLogWhereUniqueInput
  }

  /**
   * AlertLog deleteMany
   */
  export type AlertLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertLogs to delete
     */
    where?: AlertLogWhereInput
    /**
     * Limit how many AlertLogs to delete.
     */
    limit?: number
  }

  /**
   * AlertLog without action
   */
  export type AlertLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertLog
     */
    select?: AlertLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertLog
     */
    omit?: AlertLogOmit<ExtArgs> | null
  }


  /**
   * Model DashboardActionLog
   */

  export type AggregateDashboardActionLog = {
    _count: DashboardActionLogCountAggregateOutputType | null
    _min: DashboardActionLogMinAggregateOutputType | null
    _max: DashboardActionLogMaxAggregateOutputType | null
  }

  export type DashboardActionLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    createdAt: Date | null
  }

  export type DashboardActionLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    createdAt: Date | null
  }

  export type DashboardActionLogCountAggregateOutputType = {
    id: number
    action: number
    details: number
    createdAt: number
    _all: number
  }


  export type DashboardActionLogMinAggregateInputType = {
    id?: true
    action?: true
    createdAt?: true
  }

  export type DashboardActionLogMaxAggregateInputType = {
    id?: true
    action?: true
    createdAt?: true
  }

  export type DashboardActionLogCountAggregateInputType = {
    id?: true
    action?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type DashboardActionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardActionLog to aggregate.
     */
    where?: DashboardActionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardActionLogs to fetch.
     */
    orderBy?: DashboardActionLogOrderByWithRelationInput | DashboardActionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DashboardActionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardActionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardActionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DashboardActionLogs
    **/
    _count?: true | DashboardActionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DashboardActionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DashboardActionLogMaxAggregateInputType
  }

  export type GetDashboardActionLogAggregateType<T extends DashboardActionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateDashboardActionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDashboardActionLog[P]>
      : GetScalarType<T[P], AggregateDashboardActionLog[P]>
  }




  export type DashboardActionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardActionLogWhereInput
    orderBy?: DashboardActionLogOrderByWithAggregationInput | DashboardActionLogOrderByWithAggregationInput[]
    by: DashboardActionLogScalarFieldEnum[] | DashboardActionLogScalarFieldEnum
    having?: DashboardActionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DashboardActionLogCountAggregateInputType | true
    _min?: DashboardActionLogMinAggregateInputType
    _max?: DashboardActionLogMaxAggregateInputType
  }

  export type DashboardActionLogGroupByOutputType = {
    id: string
    action: string
    details: JsonValue | null
    createdAt: Date
    _count: DashboardActionLogCountAggregateOutputType | null
    _min: DashboardActionLogMinAggregateOutputType | null
    _max: DashboardActionLogMaxAggregateOutputType | null
  }

  type GetDashboardActionLogGroupByPayload<T extends DashboardActionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DashboardActionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DashboardActionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DashboardActionLogGroupByOutputType[P]>
            : GetScalarType<T[P], DashboardActionLogGroupByOutputType[P]>
        }
      >
    >


  export type DashboardActionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dashboardActionLog"]>

  export type DashboardActionLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dashboardActionLog"]>

  export type DashboardActionLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dashboardActionLog"]>

  export type DashboardActionLogSelectScalar = {
    id?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type DashboardActionLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "details" | "createdAt", ExtArgs["result"]["dashboardActionLog"]>

  export type $DashboardActionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DashboardActionLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      details: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["dashboardActionLog"]>
    composites: {}
  }

  type DashboardActionLogGetPayload<S extends boolean | null | undefined | DashboardActionLogDefaultArgs> = $Result.GetResult<Prisma.$DashboardActionLogPayload, S>

  type DashboardActionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DashboardActionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DashboardActionLogCountAggregateInputType | true
    }

  export interface DashboardActionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DashboardActionLog'], meta: { name: 'DashboardActionLog' } }
    /**
     * Find zero or one DashboardActionLog that matches the filter.
     * @param {DashboardActionLogFindUniqueArgs} args - Arguments to find a DashboardActionLog
     * @example
     * // Get one DashboardActionLog
     * const dashboardActionLog = await prisma.dashboardActionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DashboardActionLogFindUniqueArgs>(args: SelectSubset<T, DashboardActionLogFindUniqueArgs<ExtArgs>>): Prisma__DashboardActionLogClient<$Result.GetResult<Prisma.$DashboardActionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DashboardActionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DashboardActionLogFindUniqueOrThrowArgs} args - Arguments to find a DashboardActionLog
     * @example
     * // Get one DashboardActionLog
     * const dashboardActionLog = await prisma.dashboardActionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DashboardActionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, DashboardActionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DashboardActionLogClient<$Result.GetResult<Prisma.$DashboardActionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DashboardActionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardActionLogFindFirstArgs} args - Arguments to find a DashboardActionLog
     * @example
     * // Get one DashboardActionLog
     * const dashboardActionLog = await prisma.dashboardActionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DashboardActionLogFindFirstArgs>(args?: SelectSubset<T, DashboardActionLogFindFirstArgs<ExtArgs>>): Prisma__DashboardActionLogClient<$Result.GetResult<Prisma.$DashboardActionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DashboardActionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardActionLogFindFirstOrThrowArgs} args - Arguments to find a DashboardActionLog
     * @example
     * // Get one DashboardActionLog
     * const dashboardActionLog = await prisma.dashboardActionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DashboardActionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, DashboardActionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__DashboardActionLogClient<$Result.GetResult<Prisma.$DashboardActionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DashboardActionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardActionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DashboardActionLogs
     * const dashboardActionLogs = await prisma.dashboardActionLog.findMany()
     * 
     * // Get first 10 DashboardActionLogs
     * const dashboardActionLogs = await prisma.dashboardActionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dashboardActionLogWithIdOnly = await prisma.dashboardActionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DashboardActionLogFindManyArgs>(args?: SelectSubset<T, DashboardActionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardActionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DashboardActionLog.
     * @param {DashboardActionLogCreateArgs} args - Arguments to create a DashboardActionLog.
     * @example
     * // Create one DashboardActionLog
     * const DashboardActionLog = await prisma.dashboardActionLog.create({
     *   data: {
     *     // ... data to create a DashboardActionLog
     *   }
     * })
     * 
     */
    create<T extends DashboardActionLogCreateArgs>(args: SelectSubset<T, DashboardActionLogCreateArgs<ExtArgs>>): Prisma__DashboardActionLogClient<$Result.GetResult<Prisma.$DashboardActionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DashboardActionLogs.
     * @param {DashboardActionLogCreateManyArgs} args - Arguments to create many DashboardActionLogs.
     * @example
     * // Create many DashboardActionLogs
     * const dashboardActionLog = await prisma.dashboardActionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DashboardActionLogCreateManyArgs>(args?: SelectSubset<T, DashboardActionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DashboardActionLogs and returns the data saved in the database.
     * @param {DashboardActionLogCreateManyAndReturnArgs} args - Arguments to create many DashboardActionLogs.
     * @example
     * // Create many DashboardActionLogs
     * const dashboardActionLog = await prisma.dashboardActionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DashboardActionLogs and only return the `id`
     * const dashboardActionLogWithIdOnly = await prisma.dashboardActionLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DashboardActionLogCreateManyAndReturnArgs>(args?: SelectSubset<T, DashboardActionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardActionLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DashboardActionLog.
     * @param {DashboardActionLogDeleteArgs} args - Arguments to delete one DashboardActionLog.
     * @example
     * // Delete one DashboardActionLog
     * const DashboardActionLog = await prisma.dashboardActionLog.delete({
     *   where: {
     *     // ... filter to delete one DashboardActionLog
     *   }
     * })
     * 
     */
    delete<T extends DashboardActionLogDeleteArgs>(args: SelectSubset<T, DashboardActionLogDeleteArgs<ExtArgs>>): Prisma__DashboardActionLogClient<$Result.GetResult<Prisma.$DashboardActionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DashboardActionLog.
     * @param {DashboardActionLogUpdateArgs} args - Arguments to update one DashboardActionLog.
     * @example
     * // Update one DashboardActionLog
     * const dashboardActionLog = await prisma.dashboardActionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DashboardActionLogUpdateArgs>(args: SelectSubset<T, DashboardActionLogUpdateArgs<ExtArgs>>): Prisma__DashboardActionLogClient<$Result.GetResult<Prisma.$DashboardActionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DashboardActionLogs.
     * @param {DashboardActionLogDeleteManyArgs} args - Arguments to filter DashboardActionLogs to delete.
     * @example
     * // Delete a few DashboardActionLogs
     * const { count } = await prisma.dashboardActionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DashboardActionLogDeleteManyArgs>(args?: SelectSubset<T, DashboardActionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardActionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardActionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DashboardActionLogs
     * const dashboardActionLog = await prisma.dashboardActionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DashboardActionLogUpdateManyArgs>(args: SelectSubset<T, DashboardActionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardActionLogs and returns the data updated in the database.
     * @param {DashboardActionLogUpdateManyAndReturnArgs} args - Arguments to update many DashboardActionLogs.
     * @example
     * // Update many DashboardActionLogs
     * const dashboardActionLog = await prisma.dashboardActionLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DashboardActionLogs and only return the `id`
     * const dashboardActionLogWithIdOnly = await prisma.dashboardActionLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DashboardActionLogUpdateManyAndReturnArgs>(args: SelectSubset<T, DashboardActionLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardActionLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DashboardActionLog.
     * @param {DashboardActionLogUpsertArgs} args - Arguments to update or create a DashboardActionLog.
     * @example
     * // Update or create a DashboardActionLog
     * const dashboardActionLog = await prisma.dashboardActionLog.upsert({
     *   create: {
     *     // ... data to create a DashboardActionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DashboardActionLog we want to update
     *   }
     * })
     */
    upsert<T extends DashboardActionLogUpsertArgs>(args: SelectSubset<T, DashboardActionLogUpsertArgs<ExtArgs>>): Prisma__DashboardActionLogClient<$Result.GetResult<Prisma.$DashboardActionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DashboardActionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardActionLogCountArgs} args - Arguments to filter DashboardActionLogs to count.
     * @example
     * // Count the number of DashboardActionLogs
     * const count = await prisma.dashboardActionLog.count({
     *   where: {
     *     // ... the filter for the DashboardActionLogs we want to count
     *   }
     * })
    **/
    count<T extends DashboardActionLogCountArgs>(
      args?: Subset<T, DashboardActionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DashboardActionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DashboardActionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardActionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DashboardActionLogAggregateArgs>(args: Subset<T, DashboardActionLogAggregateArgs>): Prisma.PrismaPromise<GetDashboardActionLogAggregateType<T>>

    /**
     * Group by DashboardActionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardActionLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DashboardActionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DashboardActionLogGroupByArgs['orderBy'] }
        : { orderBy?: DashboardActionLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DashboardActionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardActionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DashboardActionLog model
   */
  readonly fields: DashboardActionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DashboardActionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DashboardActionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DashboardActionLog model
   */
  interface DashboardActionLogFieldRefs {
    readonly id: FieldRef<"DashboardActionLog", 'String'>
    readonly action: FieldRef<"DashboardActionLog", 'String'>
    readonly details: FieldRef<"DashboardActionLog", 'Json'>
    readonly createdAt: FieldRef<"DashboardActionLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DashboardActionLog findUnique
   */
  export type DashboardActionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardActionLog
     */
    select?: DashboardActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardActionLog
     */
    omit?: DashboardActionLogOmit<ExtArgs> | null
    /**
     * Filter, which DashboardActionLog to fetch.
     */
    where: DashboardActionLogWhereUniqueInput
  }

  /**
   * DashboardActionLog findUniqueOrThrow
   */
  export type DashboardActionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardActionLog
     */
    select?: DashboardActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardActionLog
     */
    omit?: DashboardActionLogOmit<ExtArgs> | null
    /**
     * Filter, which DashboardActionLog to fetch.
     */
    where: DashboardActionLogWhereUniqueInput
  }

  /**
   * DashboardActionLog findFirst
   */
  export type DashboardActionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardActionLog
     */
    select?: DashboardActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardActionLog
     */
    omit?: DashboardActionLogOmit<ExtArgs> | null
    /**
     * Filter, which DashboardActionLog to fetch.
     */
    where?: DashboardActionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardActionLogs to fetch.
     */
    orderBy?: DashboardActionLogOrderByWithRelationInput | DashboardActionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardActionLogs.
     */
    cursor?: DashboardActionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardActionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardActionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardActionLogs.
     */
    distinct?: DashboardActionLogScalarFieldEnum | DashboardActionLogScalarFieldEnum[]
  }

  /**
   * DashboardActionLog findFirstOrThrow
   */
  export type DashboardActionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardActionLog
     */
    select?: DashboardActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardActionLog
     */
    omit?: DashboardActionLogOmit<ExtArgs> | null
    /**
     * Filter, which DashboardActionLog to fetch.
     */
    where?: DashboardActionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardActionLogs to fetch.
     */
    orderBy?: DashboardActionLogOrderByWithRelationInput | DashboardActionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardActionLogs.
     */
    cursor?: DashboardActionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardActionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardActionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardActionLogs.
     */
    distinct?: DashboardActionLogScalarFieldEnum | DashboardActionLogScalarFieldEnum[]
  }

  /**
   * DashboardActionLog findMany
   */
  export type DashboardActionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardActionLog
     */
    select?: DashboardActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardActionLog
     */
    omit?: DashboardActionLogOmit<ExtArgs> | null
    /**
     * Filter, which DashboardActionLogs to fetch.
     */
    where?: DashboardActionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardActionLogs to fetch.
     */
    orderBy?: DashboardActionLogOrderByWithRelationInput | DashboardActionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DashboardActionLogs.
     */
    cursor?: DashboardActionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardActionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardActionLogs.
     */
    skip?: number
    distinct?: DashboardActionLogScalarFieldEnum | DashboardActionLogScalarFieldEnum[]
  }

  /**
   * DashboardActionLog create
   */
  export type DashboardActionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardActionLog
     */
    select?: DashboardActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardActionLog
     */
    omit?: DashboardActionLogOmit<ExtArgs> | null
    /**
     * The data needed to create a DashboardActionLog.
     */
    data: XOR<DashboardActionLogCreateInput, DashboardActionLogUncheckedCreateInput>
  }

  /**
   * DashboardActionLog createMany
   */
  export type DashboardActionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DashboardActionLogs.
     */
    data: DashboardActionLogCreateManyInput | DashboardActionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DashboardActionLog createManyAndReturn
   */
  export type DashboardActionLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardActionLog
     */
    select?: DashboardActionLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardActionLog
     */
    omit?: DashboardActionLogOmit<ExtArgs> | null
    /**
     * The data used to create many DashboardActionLogs.
     */
    data: DashboardActionLogCreateManyInput | DashboardActionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DashboardActionLog update
   */
  export type DashboardActionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardActionLog
     */
    select?: DashboardActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardActionLog
     */
    omit?: DashboardActionLogOmit<ExtArgs> | null
    /**
     * The data needed to update a DashboardActionLog.
     */
    data: XOR<DashboardActionLogUpdateInput, DashboardActionLogUncheckedUpdateInput>
    /**
     * Choose, which DashboardActionLog to update.
     */
    where: DashboardActionLogWhereUniqueInput
  }

  /**
   * DashboardActionLog updateMany
   */
  export type DashboardActionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DashboardActionLogs.
     */
    data: XOR<DashboardActionLogUpdateManyMutationInput, DashboardActionLogUncheckedUpdateManyInput>
    /**
     * Filter which DashboardActionLogs to update
     */
    where?: DashboardActionLogWhereInput
    /**
     * Limit how many DashboardActionLogs to update.
     */
    limit?: number
  }

  /**
   * DashboardActionLog updateManyAndReturn
   */
  export type DashboardActionLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardActionLog
     */
    select?: DashboardActionLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardActionLog
     */
    omit?: DashboardActionLogOmit<ExtArgs> | null
    /**
     * The data used to update DashboardActionLogs.
     */
    data: XOR<DashboardActionLogUpdateManyMutationInput, DashboardActionLogUncheckedUpdateManyInput>
    /**
     * Filter which DashboardActionLogs to update
     */
    where?: DashboardActionLogWhereInput
    /**
     * Limit how many DashboardActionLogs to update.
     */
    limit?: number
  }

  /**
   * DashboardActionLog upsert
   */
  export type DashboardActionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardActionLog
     */
    select?: DashboardActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardActionLog
     */
    omit?: DashboardActionLogOmit<ExtArgs> | null
    /**
     * The filter to search for the DashboardActionLog to update in case it exists.
     */
    where: DashboardActionLogWhereUniqueInput
    /**
     * In case the DashboardActionLog found by the `where` argument doesn't exist, create a new DashboardActionLog with this data.
     */
    create: XOR<DashboardActionLogCreateInput, DashboardActionLogUncheckedCreateInput>
    /**
     * In case the DashboardActionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DashboardActionLogUpdateInput, DashboardActionLogUncheckedUpdateInput>
  }

  /**
   * DashboardActionLog delete
   */
  export type DashboardActionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardActionLog
     */
    select?: DashboardActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardActionLog
     */
    omit?: DashboardActionLogOmit<ExtArgs> | null
    /**
     * Filter which DashboardActionLog to delete.
     */
    where: DashboardActionLogWhereUniqueInput
  }

  /**
   * DashboardActionLog deleteMany
   */
  export type DashboardActionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardActionLogs to delete
     */
    where?: DashboardActionLogWhereInput
    /**
     * Limit how many DashboardActionLogs to delete.
     */
    limit?: number
  }

  /**
   * DashboardActionLog without action
   */
  export type DashboardActionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardActionLog
     */
    select?: DashboardActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardActionLog
     */
    omit?: DashboardActionLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SessionScalarFieldEnum: {
    sessionId: 'sessionId',
    country: 'country',
    device: 'device',
    referrer: 'referrer',
    startTime: 'startTime',
    lastActivity: 'lastActivity',
    isActive: 'isActive'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    type: 'type',
    page: 'page',
    timeStamp: 'timeStamp',
    metadata: 'metadata',
    sessionId: 'sessionId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const DailyStatsScalarFieldEnum: {
    id: 'id',
    date: 'date',
    totalVisitors: 'totalVisitors',
    totalPageViews: 'totalPageViews',
    totalSession: 'totalSession',
    uniqueCountries: 'uniqueCountries'
  };

  export type DailyStatsScalarFieldEnum = (typeof DailyStatsScalarFieldEnum)[keyof typeof DailyStatsScalarFieldEnum]


  export const PageStatsScalarFieldEnum: {
    id: 'id',
    page: 'page',
    date: 'date',
    views: 'views',
    uniqueViews: 'uniqueViews'
  };

  export type PageStatsScalarFieldEnum = (typeof PageStatsScalarFieldEnum)[keyof typeof PageStatsScalarFieldEnum]


  export const CountryStatsScalarFieldEnum: {
    id: 'id',
    country: 'country',
    date: 'date',
    visitors: 'visitors',
    sessions: 'sessions'
  };

  export type CountryStatsScalarFieldEnum = (typeof CountryStatsScalarFieldEnum)[keyof typeof CountryStatsScalarFieldEnum]


  export const AlertLogScalarFieldEnum: {
    id: 'id',
    level: 'level',
    message: 'message',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type AlertLogScalarFieldEnum = (typeof AlertLogScalarFieldEnum)[keyof typeof AlertLogScalarFieldEnum]


  export const DashboardActionLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type DashboardActionLogScalarFieldEnum = (typeof DashboardActionLogScalarFieldEnum)[keyof typeof DashboardActionLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionId?: StringFilter<"Session"> | string
    country?: StringNullableFilter<"Session"> | string | null
    device?: StringNullableFilter<"Session"> | string | null
    referrer?: StringNullableFilter<"Session"> | string | null
    startTime?: DateTimeFilter<"Session"> | Date | string
    lastActivity?: DateTimeFilter<"Session"> | Date | string
    isActive?: BoolFilter<"Session"> | boolean
    events?: EventListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    sessionId?: SortOrder
    country?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    startTime?: SortOrder
    lastActivity?: SortOrder
    isActive?: SortOrder
    events?: EventOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionId?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    country?: StringNullableFilter<"Session"> | string | null
    device?: StringNullableFilter<"Session"> | string | null
    referrer?: StringNullableFilter<"Session"> | string | null
    startTime?: DateTimeFilter<"Session"> | Date | string
    lastActivity?: DateTimeFilter<"Session"> | Date | string
    isActive?: BoolFilter<"Session"> | boolean
    events?: EventListRelationFilter
  }, "sessionId">

  export type SessionOrderByWithAggregationInput = {
    sessionId?: SortOrder
    country?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    startTime?: SortOrder
    lastActivity?: SortOrder
    isActive?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sessionId?: StringWithAggregatesFilter<"Session"> | string
    country?: StringNullableWithAggregatesFilter<"Session"> | string | null
    device?: StringNullableWithAggregatesFilter<"Session"> | string | null
    referrer?: StringNullableWithAggregatesFilter<"Session"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    lastActivity?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Session"> | boolean
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    type?: StringFilter<"Event"> | string
    page?: StringFilter<"Event"> | string
    timeStamp?: DateTimeFilter<"Event"> | Date | string
    metadata?: JsonNullableFilter<"Event">
    sessionId?: StringFilter<"Event"> | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    page?: SortOrder
    timeStamp?: SortOrder
    metadata?: SortOrderInput | SortOrder
    sessionId?: SortOrder
    session?: SessionOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    type?: StringFilter<"Event"> | string
    page?: StringFilter<"Event"> | string
    timeStamp?: DateTimeFilter<"Event"> | Date | string
    metadata?: JsonNullableFilter<"Event">
    sessionId?: StringFilter<"Event"> | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    page?: SortOrder
    timeStamp?: SortOrder
    metadata?: SortOrderInput | SortOrder
    sessionId?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    type?: StringWithAggregatesFilter<"Event"> | string
    page?: StringWithAggregatesFilter<"Event"> | string
    timeStamp?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"Event">
    sessionId?: StringWithAggregatesFilter<"Event"> | string
  }

  export type DailyStatsWhereInput = {
    AND?: DailyStatsWhereInput | DailyStatsWhereInput[]
    OR?: DailyStatsWhereInput[]
    NOT?: DailyStatsWhereInput | DailyStatsWhereInput[]
    id?: StringFilter<"DailyStats"> | string
    date?: DateTimeFilter<"DailyStats"> | Date | string
    totalVisitors?: IntFilter<"DailyStats"> | number
    totalPageViews?: IntFilter<"DailyStats"> | number
    totalSession?: IntFilter<"DailyStats"> | number
    uniqueCountries?: IntFilter<"DailyStats"> | number
  }

  export type DailyStatsOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    totalVisitors?: SortOrder
    totalPageViews?: SortOrder
    totalSession?: SortOrder
    uniqueCountries?: SortOrder
  }

  export type DailyStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    date?: Date | string
    AND?: DailyStatsWhereInput | DailyStatsWhereInput[]
    OR?: DailyStatsWhereInput[]
    NOT?: DailyStatsWhereInput | DailyStatsWhereInput[]
    totalVisitors?: IntFilter<"DailyStats"> | number
    totalPageViews?: IntFilter<"DailyStats"> | number
    totalSession?: IntFilter<"DailyStats"> | number
    uniqueCountries?: IntFilter<"DailyStats"> | number
  }, "id" | "date">

  export type DailyStatsOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    totalVisitors?: SortOrder
    totalPageViews?: SortOrder
    totalSession?: SortOrder
    uniqueCountries?: SortOrder
    _count?: DailyStatsCountOrderByAggregateInput
    _avg?: DailyStatsAvgOrderByAggregateInput
    _max?: DailyStatsMaxOrderByAggregateInput
    _min?: DailyStatsMinOrderByAggregateInput
    _sum?: DailyStatsSumOrderByAggregateInput
  }

  export type DailyStatsScalarWhereWithAggregatesInput = {
    AND?: DailyStatsScalarWhereWithAggregatesInput | DailyStatsScalarWhereWithAggregatesInput[]
    OR?: DailyStatsScalarWhereWithAggregatesInput[]
    NOT?: DailyStatsScalarWhereWithAggregatesInput | DailyStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyStats"> | string
    date?: DateTimeWithAggregatesFilter<"DailyStats"> | Date | string
    totalVisitors?: IntWithAggregatesFilter<"DailyStats"> | number
    totalPageViews?: IntWithAggregatesFilter<"DailyStats"> | number
    totalSession?: IntWithAggregatesFilter<"DailyStats"> | number
    uniqueCountries?: IntWithAggregatesFilter<"DailyStats"> | number
  }

  export type PageStatsWhereInput = {
    AND?: PageStatsWhereInput | PageStatsWhereInput[]
    OR?: PageStatsWhereInput[]
    NOT?: PageStatsWhereInput | PageStatsWhereInput[]
    id?: StringFilter<"PageStats"> | string
    page?: StringFilter<"PageStats"> | string
    date?: DateTimeFilter<"PageStats"> | Date | string
    views?: IntFilter<"PageStats"> | number
    uniqueViews?: IntFilter<"PageStats"> | number
  }

  export type PageStatsOrderByWithRelationInput = {
    id?: SortOrder
    page?: SortOrder
    date?: SortOrder
    views?: SortOrder
    uniqueViews?: SortOrder
  }

  export type PageStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    page_date?: PageStatsPage_dateCompoundUniqueInput
    AND?: PageStatsWhereInput | PageStatsWhereInput[]
    OR?: PageStatsWhereInput[]
    NOT?: PageStatsWhereInput | PageStatsWhereInput[]
    page?: StringFilter<"PageStats"> | string
    date?: DateTimeFilter<"PageStats"> | Date | string
    views?: IntFilter<"PageStats"> | number
    uniqueViews?: IntFilter<"PageStats"> | number
  }, "id" | "page_date">

  export type PageStatsOrderByWithAggregationInput = {
    id?: SortOrder
    page?: SortOrder
    date?: SortOrder
    views?: SortOrder
    uniqueViews?: SortOrder
    _count?: PageStatsCountOrderByAggregateInput
    _avg?: PageStatsAvgOrderByAggregateInput
    _max?: PageStatsMaxOrderByAggregateInput
    _min?: PageStatsMinOrderByAggregateInput
    _sum?: PageStatsSumOrderByAggregateInput
  }

  export type PageStatsScalarWhereWithAggregatesInput = {
    AND?: PageStatsScalarWhereWithAggregatesInput | PageStatsScalarWhereWithAggregatesInput[]
    OR?: PageStatsScalarWhereWithAggregatesInput[]
    NOT?: PageStatsScalarWhereWithAggregatesInput | PageStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PageStats"> | string
    page?: StringWithAggregatesFilter<"PageStats"> | string
    date?: DateTimeWithAggregatesFilter<"PageStats"> | Date | string
    views?: IntWithAggregatesFilter<"PageStats"> | number
    uniqueViews?: IntWithAggregatesFilter<"PageStats"> | number
  }

  export type CountryStatsWhereInput = {
    AND?: CountryStatsWhereInput | CountryStatsWhereInput[]
    OR?: CountryStatsWhereInput[]
    NOT?: CountryStatsWhereInput | CountryStatsWhereInput[]
    id?: StringFilter<"CountryStats"> | string
    country?: StringFilter<"CountryStats"> | string
    date?: DateTimeFilter<"CountryStats"> | Date | string
    visitors?: IntFilter<"CountryStats"> | number
    sessions?: IntFilter<"CountryStats"> | number
  }

  export type CountryStatsOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrder
    date?: SortOrder
    visitors?: SortOrder
    sessions?: SortOrder
  }

  export type CountryStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    country_date?: CountryStatsCountry_dateCompoundUniqueInput
    AND?: CountryStatsWhereInput | CountryStatsWhereInput[]
    OR?: CountryStatsWhereInput[]
    NOT?: CountryStatsWhereInput | CountryStatsWhereInput[]
    country?: StringFilter<"CountryStats"> | string
    date?: DateTimeFilter<"CountryStats"> | Date | string
    visitors?: IntFilter<"CountryStats"> | number
    sessions?: IntFilter<"CountryStats"> | number
  }, "id" | "country_date">

  export type CountryStatsOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrder
    date?: SortOrder
    visitors?: SortOrder
    sessions?: SortOrder
    _count?: CountryStatsCountOrderByAggregateInput
    _avg?: CountryStatsAvgOrderByAggregateInput
    _max?: CountryStatsMaxOrderByAggregateInput
    _min?: CountryStatsMinOrderByAggregateInput
    _sum?: CountryStatsSumOrderByAggregateInput
  }

  export type CountryStatsScalarWhereWithAggregatesInput = {
    AND?: CountryStatsScalarWhereWithAggregatesInput | CountryStatsScalarWhereWithAggregatesInput[]
    OR?: CountryStatsScalarWhereWithAggregatesInput[]
    NOT?: CountryStatsScalarWhereWithAggregatesInput | CountryStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CountryStats"> | string
    country?: StringWithAggregatesFilter<"CountryStats"> | string
    date?: DateTimeWithAggregatesFilter<"CountryStats"> | Date | string
    visitors?: IntWithAggregatesFilter<"CountryStats"> | number
    sessions?: IntWithAggregatesFilter<"CountryStats"> | number
  }

  export type AlertLogWhereInput = {
    AND?: AlertLogWhereInput | AlertLogWhereInput[]
    OR?: AlertLogWhereInput[]
    NOT?: AlertLogWhereInput | AlertLogWhereInput[]
    id?: StringFilter<"AlertLog"> | string
    level?: StringFilter<"AlertLog"> | string
    message?: StringFilter<"AlertLog"> | string
    details?: JsonNullableFilter<"AlertLog">
    createdAt?: DateTimeFilter<"AlertLog"> | Date | string
  }

  export type AlertLogOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AlertLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertLogWhereInput | AlertLogWhereInput[]
    OR?: AlertLogWhereInput[]
    NOT?: AlertLogWhereInput | AlertLogWhereInput[]
    level?: StringFilter<"AlertLog"> | string
    message?: StringFilter<"AlertLog"> | string
    details?: JsonNullableFilter<"AlertLog">
    createdAt?: DateTimeFilter<"AlertLog"> | Date | string
  }, "id">

  export type AlertLogOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AlertLogCountOrderByAggregateInput
    _max?: AlertLogMaxOrderByAggregateInput
    _min?: AlertLogMinOrderByAggregateInput
  }

  export type AlertLogScalarWhereWithAggregatesInput = {
    AND?: AlertLogScalarWhereWithAggregatesInput | AlertLogScalarWhereWithAggregatesInput[]
    OR?: AlertLogScalarWhereWithAggregatesInput[]
    NOT?: AlertLogScalarWhereWithAggregatesInput | AlertLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlertLog"> | string
    level?: StringWithAggregatesFilter<"AlertLog"> | string
    message?: StringWithAggregatesFilter<"AlertLog"> | string
    details?: JsonNullableWithAggregatesFilter<"AlertLog">
    createdAt?: DateTimeWithAggregatesFilter<"AlertLog"> | Date | string
  }

  export type DashboardActionLogWhereInput = {
    AND?: DashboardActionLogWhereInput | DashboardActionLogWhereInput[]
    OR?: DashboardActionLogWhereInput[]
    NOT?: DashboardActionLogWhereInput | DashboardActionLogWhereInput[]
    id?: StringFilter<"DashboardActionLog"> | string
    action?: StringFilter<"DashboardActionLog"> | string
    details?: JsonNullableFilter<"DashboardActionLog">
    createdAt?: DateTimeFilter<"DashboardActionLog"> | Date | string
  }

  export type DashboardActionLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type DashboardActionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DashboardActionLogWhereInput | DashboardActionLogWhereInput[]
    OR?: DashboardActionLogWhereInput[]
    NOT?: DashboardActionLogWhereInput | DashboardActionLogWhereInput[]
    action?: StringFilter<"DashboardActionLog"> | string
    details?: JsonNullableFilter<"DashboardActionLog">
    createdAt?: DateTimeFilter<"DashboardActionLog"> | Date | string
  }, "id">

  export type DashboardActionLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DashboardActionLogCountOrderByAggregateInput
    _max?: DashboardActionLogMaxOrderByAggregateInput
    _min?: DashboardActionLogMinOrderByAggregateInput
  }

  export type DashboardActionLogScalarWhereWithAggregatesInput = {
    AND?: DashboardActionLogScalarWhereWithAggregatesInput | DashboardActionLogScalarWhereWithAggregatesInput[]
    OR?: DashboardActionLogScalarWhereWithAggregatesInput[]
    NOT?: DashboardActionLogScalarWhereWithAggregatesInput | DashboardActionLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DashboardActionLog"> | string
    action?: StringWithAggregatesFilter<"DashboardActionLog"> | string
    details?: JsonNullableWithAggregatesFilter<"DashboardActionLog">
    createdAt?: DateTimeWithAggregatesFilter<"DashboardActionLog"> | Date | string
  }

  export type SessionCreateInput = {
    sessionId: string
    country?: string | null
    device?: string | null
    referrer?: string | null
    startTime: Date | string
    lastActivity: Date | string
    isActive?: boolean
    events?: EventCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    sessionId: string
    country?: string | null
    device?: string | null
    referrer?: string | null
    startTime: Date | string
    lastActivity: Date | string
    isActive?: boolean
    events?: EventUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    events?: EventUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    events?: EventUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    sessionId: string
    country?: string | null
    device?: string | null
    referrer?: string | null
    startTime: Date | string
    lastActivity: Date | string
    isActive?: boolean
  }

  export type SessionUpdateManyMutationInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventCreateInput = {
    id?: string
    type: string
    page: string
    timeStamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    session: SessionCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    type: string
    page: string
    timeStamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sessionId: string
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    session?: SessionUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateManyInput = {
    id?: string
    type: string
    page: string
    timeStamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sessionId: string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type DailyStatsCreateInput = {
    id?: string
    date: Date | string
    totalVisitors?: number
    totalPageViews?: number
    totalSession?: number
    uniqueCountries?: number
  }

  export type DailyStatsUncheckedCreateInput = {
    id?: string
    date: Date | string
    totalVisitors?: number
    totalPageViews?: number
    totalSession?: number
    uniqueCountries?: number
  }

  export type DailyStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalVisitors?: IntFieldUpdateOperationsInput | number
    totalPageViews?: IntFieldUpdateOperationsInput | number
    totalSession?: IntFieldUpdateOperationsInput | number
    uniqueCountries?: IntFieldUpdateOperationsInput | number
  }

  export type DailyStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalVisitors?: IntFieldUpdateOperationsInput | number
    totalPageViews?: IntFieldUpdateOperationsInput | number
    totalSession?: IntFieldUpdateOperationsInput | number
    uniqueCountries?: IntFieldUpdateOperationsInput | number
  }

  export type DailyStatsCreateManyInput = {
    id?: string
    date: Date | string
    totalVisitors?: number
    totalPageViews?: number
    totalSession?: number
    uniqueCountries?: number
  }

  export type DailyStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalVisitors?: IntFieldUpdateOperationsInput | number
    totalPageViews?: IntFieldUpdateOperationsInput | number
    totalSession?: IntFieldUpdateOperationsInput | number
    uniqueCountries?: IntFieldUpdateOperationsInput | number
  }

  export type DailyStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalVisitors?: IntFieldUpdateOperationsInput | number
    totalPageViews?: IntFieldUpdateOperationsInput | number
    totalSession?: IntFieldUpdateOperationsInput | number
    uniqueCountries?: IntFieldUpdateOperationsInput | number
  }

  export type PageStatsCreateInput = {
    id?: string
    page: string
    date: Date | string
    views?: number
    uniqueViews?: number
  }

  export type PageStatsUncheckedCreateInput = {
    id?: string
    page: string
    date: Date | string
    views?: number
    uniqueViews?: number
  }

  export type PageStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueViews?: IntFieldUpdateOperationsInput | number
  }

  export type PageStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueViews?: IntFieldUpdateOperationsInput | number
  }

  export type PageStatsCreateManyInput = {
    id?: string
    page: string
    date: Date | string
    views?: number
    uniqueViews?: number
  }

  export type PageStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueViews?: IntFieldUpdateOperationsInput | number
  }

  export type PageStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueViews?: IntFieldUpdateOperationsInput | number
  }

  export type CountryStatsCreateInput = {
    id?: string
    country: string
    date: Date | string
    visitors?: number
    sessions?: number
  }

  export type CountryStatsUncheckedCreateInput = {
    id?: string
    country: string
    date: Date | string
    visitors?: number
    sessions?: number
  }

  export type CountryStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    visitors?: IntFieldUpdateOperationsInput | number
    sessions?: IntFieldUpdateOperationsInput | number
  }

  export type CountryStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    visitors?: IntFieldUpdateOperationsInput | number
    sessions?: IntFieldUpdateOperationsInput | number
  }

  export type CountryStatsCreateManyInput = {
    id?: string
    country: string
    date: Date | string
    visitors?: number
    sessions?: number
  }

  export type CountryStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    visitors?: IntFieldUpdateOperationsInput | number
    sessions?: IntFieldUpdateOperationsInput | number
  }

  export type CountryStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    visitors?: IntFieldUpdateOperationsInput | number
    sessions?: IntFieldUpdateOperationsInput | number
  }

  export type AlertLogCreateInput = {
    id?: string
    level: string
    message: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AlertLogUncheckedCreateInput = {
    id?: string
    level: string
    message: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AlertLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertLogCreateManyInput = {
    id?: string
    level: string
    message: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AlertLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardActionLogCreateInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt: Date | string
  }

  export type DashboardActionLogUncheckedCreateInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt: Date | string
  }

  export type DashboardActionLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardActionLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardActionLogCreateManyInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt: Date | string
  }

  export type DashboardActionLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardActionLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    sessionId?: SortOrder
    country?: SortOrder
    device?: SortOrder
    referrer?: SortOrder
    startTime?: SortOrder
    lastActivity?: SortOrder
    isActive?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sessionId?: SortOrder
    country?: SortOrder
    device?: SortOrder
    referrer?: SortOrder
    startTime?: SortOrder
    lastActivity?: SortOrder
    isActive?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sessionId?: SortOrder
    country?: SortOrder
    device?: SortOrder
    referrer?: SortOrder
    startTime?: SortOrder
    lastActivity?: SortOrder
    isActive?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    page?: SortOrder
    timeStamp?: SortOrder
    metadata?: SortOrder
    sessionId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    page?: SortOrder
    timeStamp?: SortOrder
    sessionId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    page?: SortOrder
    timeStamp?: SortOrder
    sessionId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DailyStatsCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    totalVisitors?: SortOrder
    totalPageViews?: SortOrder
    totalSession?: SortOrder
    uniqueCountries?: SortOrder
  }

  export type DailyStatsAvgOrderByAggregateInput = {
    totalVisitors?: SortOrder
    totalPageViews?: SortOrder
    totalSession?: SortOrder
    uniqueCountries?: SortOrder
  }

  export type DailyStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    totalVisitors?: SortOrder
    totalPageViews?: SortOrder
    totalSession?: SortOrder
    uniqueCountries?: SortOrder
  }

  export type DailyStatsMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    totalVisitors?: SortOrder
    totalPageViews?: SortOrder
    totalSession?: SortOrder
    uniqueCountries?: SortOrder
  }

  export type DailyStatsSumOrderByAggregateInput = {
    totalVisitors?: SortOrder
    totalPageViews?: SortOrder
    totalSession?: SortOrder
    uniqueCountries?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PageStatsPage_dateCompoundUniqueInput = {
    page: string
    date: Date | string
  }

  export type PageStatsCountOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    date?: SortOrder
    views?: SortOrder
    uniqueViews?: SortOrder
  }

  export type PageStatsAvgOrderByAggregateInput = {
    views?: SortOrder
    uniqueViews?: SortOrder
  }

  export type PageStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    date?: SortOrder
    views?: SortOrder
    uniqueViews?: SortOrder
  }

  export type PageStatsMinOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    date?: SortOrder
    views?: SortOrder
    uniqueViews?: SortOrder
  }

  export type PageStatsSumOrderByAggregateInput = {
    views?: SortOrder
    uniqueViews?: SortOrder
  }

  export type CountryStatsCountry_dateCompoundUniqueInput = {
    country: string
    date: Date | string
  }

  export type CountryStatsCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    date?: SortOrder
    visitors?: SortOrder
    sessions?: SortOrder
  }

  export type CountryStatsAvgOrderByAggregateInput = {
    visitors?: SortOrder
    sessions?: SortOrder
  }

  export type CountryStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    date?: SortOrder
    visitors?: SortOrder
    sessions?: SortOrder
  }

  export type CountryStatsMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    date?: SortOrder
    visitors?: SortOrder
    sessions?: SortOrder
  }

  export type CountryStatsSumOrderByAggregateInput = {
    visitors?: SortOrder
    sessions?: SortOrder
  }

  export type AlertLogCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertLogMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertLogMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type DashboardActionLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type DashboardActionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type DashboardActionLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type EventCreateNestedManyWithoutSessionInput = {
    create?: XOR<EventCreateWithoutSessionInput, EventUncheckedCreateWithoutSessionInput> | EventCreateWithoutSessionInput[] | EventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSessionInput | EventCreateOrConnectWithoutSessionInput[]
    createMany?: EventCreateManySessionInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<EventCreateWithoutSessionInput, EventUncheckedCreateWithoutSessionInput> | EventCreateWithoutSessionInput[] | EventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSessionInput | EventCreateOrConnectWithoutSessionInput[]
    createMany?: EventCreateManySessionInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EventUpdateManyWithoutSessionNestedInput = {
    create?: XOR<EventCreateWithoutSessionInput, EventUncheckedCreateWithoutSessionInput> | EventCreateWithoutSessionInput[] | EventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSessionInput | EventCreateOrConnectWithoutSessionInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutSessionInput | EventUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: EventCreateManySessionInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutSessionInput | EventUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: EventUpdateManyWithWhereWithoutSessionInput | EventUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<EventCreateWithoutSessionInput, EventUncheckedCreateWithoutSessionInput> | EventCreateWithoutSessionInput[] | EventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSessionInput | EventCreateOrConnectWithoutSessionInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutSessionInput | EventUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: EventCreateManySessionInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutSessionInput | EventUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: EventUpdateManyWithWhereWithoutSessionInput | EventUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type SessionCreateNestedOneWithoutEventsInput = {
    create?: XOR<SessionCreateWithoutEventsInput, SessionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutEventsInput
    connect?: SessionWhereUniqueInput
  }

  export type SessionUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<SessionCreateWithoutEventsInput, SessionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutEventsInput
    upsert?: SessionUpsertWithoutEventsInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutEventsInput, SessionUpdateWithoutEventsInput>, SessionUncheckedUpdateWithoutEventsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EventCreateWithoutSessionInput = {
    id?: string
    type: string
    page: string
    timeStamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EventUncheckedCreateWithoutSessionInput = {
    id?: string
    type: string
    page: string
    timeStamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EventCreateOrConnectWithoutSessionInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutSessionInput, EventUncheckedCreateWithoutSessionInput>
  }

  export type EventCreateManySessionInputEnvelope = {
    data: EventCreateManySessionInput | EventCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutSessionInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutSessionInput, EventUncheckedUpdateWithoutSessionInput>
    create: XOR<EventCreateWithoutSessionInput, EventUncheckedCreateWithoutSessionInput>
  }

  export type EventUpdateWithWhereUniqueWithoutSessionInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutSessionInput, EventUncheckedUpdateWithoutSessionInput>
  }

  export type EventUpdateManyWithWhereWithoutSessionInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutSessionInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    type?: StringFilter<"Event"> | string
    page?: StringFilter<"Event"> | string
    timeStamp?: DateTimeFilter<"Event"> | Date | string
    metadata?: JsonNullableFilter<"Event">
    sessionId?: StringFilter<"Event"> | string
  }

  export type SessionCreateWithoutEventsInput = {
    sessionId: string
    country?: string | null
    device?: string | null
    referrer?: string | null
    startTime: Date | string
    lastActivity: Date | string
    isActive?: boolean
  }

  export type SessionUncheckedCreateWithoutEventsInput = {
    sessionId: string
    country?: string | null
    device?: string | null
    referrer?: string | null
    startTime: Date | string
    lastActivity: Date | string
    isActive?: boolean
  }

  export type SessionCreateOrConnectWithoutEventsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutEventsInput, SessionUncheckedCreateWithoutEventsInput>
  }

  export type SessionUpsertWithoutEventsInput = {
    update: XOR<SessionUpdateWithoutEventsInput, SessionUncheckedUpdateWithoutEventsInput>
    create: XOR<SessionCreateWithoutEventsInput, SessionUncheckedCreateWithoutEventsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutEventsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutEventsInput, SessionUncheckedUpdateWithoutEventsInput>
  }

  export type SessionUpdateWithoutEventsInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUncheckedUpdateWithoutEventsInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventCreateManySessionInput = {
    id?: string
    type: string
    page: string
    timeStamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EventUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EventUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EventUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    page?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}