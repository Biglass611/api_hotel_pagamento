
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
 * Model pagamento
 * 
 */
export type pagamento = $Result.DefaultSelection<Prisma.$pagamentoPayload>
/**
 * Model boleto
 * 
 */
export type boleto = $Result.DefaultSelection<Prisma.$boletoPayload>
/**
 * Model deposito
 * 
 */
export type deposito = $Result.DefaultSelection<Prisma.$depositoPayload>
/**
 * Model cartao
 * 
 */
export type cartao = $Result.DefaultSelection<Prisma.$cartaoPayload>
/**
 * Model tipo_pagamento
 * 
 */
export type tipo_pagamento = $Result.DefaultSelection<Prisma.$tipo_pagamentoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pagamentos
 * const pagamentos = await prisma.pagamento.findMany()
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
   * // Fetch zero or more Pagamentos
   * const pagamentos = await prisma.pagamento.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.pagamento`: Exposes CRUD operations for the **pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamento.findMany()
    * ```
    */
  get pagamento(): Prisma.pagamentoDelegate<ExtArgs>;

  /**
   * `prisma.boleto`: Exposes CRUD operations for the **boleto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boletos
    * const boletos = await prisma.boleto.findMany()
    * ```
    */
  get boleto(): Prisma.boletoDelegate<ExtArgs>;

  /**
   * `prisma.deposito`: Exposes CRUD operations for the **deposito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Depositos
    * const depositos = await prisma.deposito.findMany()
    * ```
    */
  get deposito(): Prisma.depositoDelegate<ExtArgs>;

  /**
   * `prisma.cartao`: Exposes CRUD operations for the **cartao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cartaos
    * const cartaos = await prisma.cartao.findMany()
    * ```
    */
  get cartao(): Prisma.cartaoDelegate<ExtArgs>;

  /**
   * `prisma.tipo_pagamento`: Exposes CRUD operations for the **tipo_pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_pagamentos
    * const tipo_pagamentos = await prisma.tipo_pagamento.findMany()
    * ```
    */
  get tipo_pagamento(): Prisma.tipo_pagamentoDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    pagamento: 'pagamento',
    boleto: 'boleto',
    deposito: 'deposito',
    cartao: 'cartao',
    tipo_pagamento: 'tipo_pagamento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "pagamento" | "boleto" | "deposito" | "cartao" | "tipo_pagamento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      pagamento: {
        payload: Prisma.$pagamentoPayload<ExtArgs>
        fields: Prisma.pagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          findFirst: {
            args: Prisma.pagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          findMany: {
            args: Prisma.pagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>[]
          }
          create: {
            args: Prisma.pagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          createMany: {
            args: Prisma.pagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          update: {
            args: Prisma.pagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          deleteMany: {
            args: Prisma.pagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          aggregate: {
            args: Prisma.PagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamento>
          }
          groupBy: {
            args: Prisma.pagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentoCountAggregateOutputType> | number
          }
        }
      }
      boleto: {
        payload: Prisma.$boletoPayload<ExtArgs>
        fields: Prisma.boletoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.boletoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boletoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.boletoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boletoPayload>
          }
          findFirst: {
            args: Prisma.boletoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boletoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.boletoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boletoPayload>
          }
          findMany: {
            args: Prisma.boletoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boletoPayload>[]
          }
          create: {
            args: Prisma.boletoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boletoPayload>
          }
          createMany: {
            args: Prisma.boletoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.boletoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boletoPayload>
          }
          update: {
            args: Prisma.boletoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boletoPayload>
          }
          deleteMany: {
            args: Prisma.boletoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.boletoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.boletoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boletoPayload>
          }
          aggregate: {
            args: Prisma.BoletoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoleto>
          }
          groupBy: {
            args: Prisma.boletoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoletoGroupByOutputType>[]
          }
          count: {
            args: Prisma.boletoCountArgs<ExtArgs>
            result: $Utils.Optional<BoletoCountAggregateOutputType> | number
          }
        }
      }
      deposito: {
        payload: Prisma.$depositoPayload<ExtArgs>
        fields: Prisma.depositoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.depositoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.depositoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositoPayload>
          }
          findFirst: {
            args: Prisma.depositoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.depositoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositoPayload>
          }
          findMany: {
            args: Prisma.depositoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositoPayload>[]
          }
          create: {
            args: Prisma.depositoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositoPayload>
          }
          createMany: {
            args: Prisma.depositoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.depositoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositoPayload>
          }
          update: {
            args: Prisma.depositoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositoPayload>
          }
          deleteMany: {
            args: Prisma.depositoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.depositoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.depositoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositoPayload>
          }
          aggregate: {
            args: Prisma.DepositoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeposito>
          }
          groupBy: {
            args: Prisma.depositoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositoGroupByOutputType>[]
          }
          count: {
            args: Prisma.depositoCountArgs<ExtArgs>
            result: $Utils.Optional<DepositoCountAggregateOutputType> | number
          }
        }
      }
      cartao: {
        payload: Prisma.$cartaoPayload<ExtArgs>
        fields: Prisma.cartaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartaoPayload>
          }
          findFirst: {
            args: Prisma.cartaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartaoPayload>
          }
          findMany: {
            args: Prisma.cartaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartaoPayload>[]
          }
          create: {
            args: Prisma.cartaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartaoPayload>
          }
          createMany: {
            args: Prisma.cartaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cartaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartaoPayload>
          }
          update: {
            args: Prisma.cartaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartaoPayload>
          }
          deleteMany: {
            args: Prisma.cartaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cartaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartaoPayload>
          }
          aggregate: {
            args: Prisma.CartaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartao>
          }
          groupBy: {
            args: Prisma.cartaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartaoCountArgs<ExtArgs>
            result: $Utils.Optional<CartaoCountAggregateOutputType> | number
          }
        }
      }
      tipo_pagamento: {
        payload: Prisma.$tipo_pagamentoPayload<ExtArgs>
        fields: Prisma.tipo_pagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipo_pagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_pagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipo_pagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_pagamentoPayload>
          }
          findFirst: {
            args: Prisma.tipo_pagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_pagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipo_pagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_pagamentoPayload>
          }
          findMany: {
            args: Prisma.tipo_pagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_pagamentoPayload>[]
          }
          create: {
            args: Prisma.tipo_pagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_pagamentoPayload>
          }
          createMany: {
            args: Prisma.tipo_pagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tipo_pagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_pagamentoPayload>
          }
          update: {
            args: Prisma.tipo_pagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_pagamentoPayload>
          }
          deleteMany: {
            args: Prisma.tipo_pagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipo_pagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tipo_pagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_pagamentoPayload>
          }
          aggregate: {
            args: Prisma.Tipo_pagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo_pagamento>
          }
          groupBy: {
            args: Prisma.tipo_pagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipo_pagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipo_pagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<Tipo_pagamentoCountAggregateOutputType> | number
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
   * Count Type PagamentoCountOutputType
   */

  export type PagamentoCountOutputType = {
    tipo_pagamento: number
  }

  export type PagamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo_pagamento?: boolean | PagamentoCountOutputTypeCountTipo_pagamentoArgs
  }

  // Custom InputTypes
  /**
   * PagamentoCountOutputType without action
   */
  export type PagamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagamentoCountOutputType
     */
    select?: PagamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PagamentoCountOutputType without action
   */
  export type PagamentoCountOutputTypeCountTipo_pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_pagamentoWhereInput
  }


  /**
   * Count Type BoletoCountOutputType
   */

  export type BoletoCountOutputType = {
    tipo_pagamento: number
  }

  export type BoletoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo_pagamento?: boolean | BoletoCountOutputTypeCountTipo_pagamentoArgs
  }

  // Custom InputTypes
  /**
   * BoletoCountOutputType without action
   */
  export type BoletoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoletoCountOutputType
     */
    select?: BoletoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoletoCountOutputType without action
   */
  export type BoletoCountOutputTypeCountTipo_pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_pagamentoWhereInput
  }


  /**
   * Count Type DepositoCountOutputType
   */

  export type DepositoCountOutputType = {
    tipo_pagamento: number
  }

  export type DepositoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo_pagamento?: boolean | DepositoCountOutputTypeCountTipo_pagamentoArgs
  }

  // Custom InputTypes
  /**
   * DepositoCountOutputType without action
   */
  export type DepositoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepositoCountOutputType
     */
    select?: DepositoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepositoCountOutputType without action
   */
  export type DepositoCountOutputTypeCountTipo_pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_pagamentoWhereInput
  }


  /**
   * Count Type CartaoCountOutputType
   */

  export type CartaoCountOutputType = {
    tipo_pagamento: number
  }

  export type CartaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo_pagamento?: boolean | CartaoCountOutputTypeCountTipo_pagamentoArgs
  }

  // Custom InputTypes
  /**
   * CartaoCountOutputType without action
   */
  export type CartaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartaoCountOutputType
     */
    select?: CartaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartaoCountOutputType without action
   */
  export type CartaoCountOutputTypeCountTipo_pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_pagamentoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model pagamento
   */

  export type AggregatePagamento = {
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  export type PagamentoAvgAggregateOutputType = {
    pagamento_id: number | null
    pagamento_status: number | null
  }

  export type PagamentoSumAggregateOutputType = {
    pagamento_id: number | null
    pagamento_status: number | null
  }

  export type PagamentoMinAggregateOutputType = {
    pagamento_id: number | null
    pagamento_tipo: string | null
    pagamento_status: number | null
    pagamento_data: Date | null
    pagamento_endereco: string | null
  }

  export type PagamentoMaxAggregateOutputType = {
    pagamento_id: number | null
    pagamento_tipo: string | null
    pagamento_status: number | null
    pagamento_data: Date | null
    pagamento_endereco: string | null
  }

  export type PagamentoCountAggregateOutputType = {
    pagamento_id: number
    pagamento_tipo: number
    pagamento_status: number
    pagamento_data: number
    pagamento_endereco: number
    _all: number
  }


  export type PagamentoAvgAggregateInputType = {
    pagamento_id?: true
    pagamento_status?: true
  }

  export type PagamentoSumAggregateInputType = {
    pagamento_id?: true
    pagamento_status?: true
  }

  export type PagamentoMinAggregateInputType = {
    pagamento_id?: true
    pagamento_tipo?: true
    pagamento_status?: true
    pagamento_data?: true
    pagamento_endereco?: true
  }

  export type PagamentoMaxAggregateInputType = {
    pagamento_id?: true
    pagamento_tipo?: true
    pagamento_status?: true
    pagamento_data?: true
    pagamento_endereco?: true
  }

  export type PagamentoCountAggregateInputType = {
    pagamento_id?: true
    pagamento_tipo?: true
    pagamento_status?: true
    pagamento_data?: true
    pagamento_endereco?: true
    _all?: true
  }

  export type PagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagamento to aggregate.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagamentos
    **/
    _count?: true | PagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentoMaxAggregateInputType
  }

  export type GetPagamentoAggregateType<T extends PagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamento[P]>
      : GetScalarType<T[P], AggregatePagamento[P]>
  }




  export type pagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamentoWhereInput
    orderBy?: pagamentoOrderByWithAggregationInput | pagamentoOrderByWithAggregationInput[]
    by: PagamentoScalarFieldEnum[] | PagamentoScalarFieldEnum
    having?: pagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentoCountAggregateInputType | true
    _avg?: PagamentoAvgAggregateInputType
    _sum?: PagamentoSumAggregateInputType
    _min?: PagamentoMinAggregateInputType
    _max?: PagamentoMaxAggregateInputType
  }

  export type PagamentoGroupByOutputType = {
    pagamento_id: number
    pagamento_tipo: string
    pagamento_status: number
    pagamento_data: Date
    pagamento_endereco: string
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  type GetPagamentoGroupByPayload<T extends pagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
        }
      >
    >


  export type pagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pagamento_id?: boolean
    pagamento_tipo?: boolean
    pagamento_status?: boolean
    pagamento_data?: boolean
    pagamento_endereco?: boolean
    tipo_pagamento?: boolean | pagamento$tipo_pagamentoArgs<ExtArgs>
    _count?: boolean | PagamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>


  export type pagamentoSelectScalar = {
    pagamento_id?: boolean
    pagamento_tipo?: boolean
    pagamento_status?: boolean
    pagamento_data?: boolean
    pagamento_endereco?: boolean
  }

  export type pagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo_pagamento?: boolean | pagamento$tipo_pagamentoArgs<ExtArgs>
    _count?: boolean | PagamentoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pagamento"
    objects: {
      tipo_pagamento: Prisma.$tipo_pagamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pagamento_id: number
      pagamento_tipo: string
      pagamento_status: number
      pagamento_data: Date
      pagamento_endereco: string
    }, ExtArgs["result"]["pagamento"]>
    composites: {}
  }

  type pagamentoGetPayload<S extends boolean | null | undefined | pagamentoDefaultArgs> = $Result.GetResult<Prisma.$pagamentoPayload, S>

  type pagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pagamentoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PagamentoCountAggregateInputType | true
    }

  export interface pagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pagamento'], meta: { name: 'pagamento' } }
    /**
     * Find zero or one Pagamento that matches the filter.
     * @param {pagamentoFindUniqueArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagamentoFindUniqueArgs>(args: SelectSubset<T, pagamentoFindUniqueArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pagamento that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {pagamentoFindUniqueOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, pagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoFindFirstArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagamentoFindFirstArgs>(args?: SelectSubset<T, pagamentoFindFirstArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoFindFirstOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, pagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamento.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamento.findMany({ take: 10 })
     * 
     * // Only select the `pagamento_id`
     * const pagamentoWithPagamento_idOnly = await prisma.pagamento.findMany({ select: { pagamento_id: true } })
     * 
     */
    findMany<T extends pagamentoFindManyArgs>(args?: SelectSubset<T, pagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pagamento.
     * @param {pagamentoCreateArgs} args - Arguments to create a Pagamento.
     * @example
     * // Create one Pagamento
     * const Pagamento = await prisma.pagamento.create({
     *   data: {
     *     // ... data to create a Pagamento
     *   }
     * })
     * 
     */
    create<T extends pagamentoCreateArgs>(args: SelectSubset<T, pagamentoCreateArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pagamentos.
     * @param {pagamentoCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagamentoCreateManyArgs>(args?: SelectSubset<T, pagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pagamento.
     * @param {pagamentoDeleteArgs} args - Arguments to delete one Pagamento.
     * @example
     * // Delete one Pagamento
     * const Pagamento = await prisma.pagamento.delete({
     *   where: {
     *     // ... filter to delete one Pagamento
     *   }
     * })
     * 
     */
    delete<T extends pagamentoDeleteArgs>(args: SelectSubset<T, pagamentoDeleteArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pagamento.
     * @param {pagamentoUpdateArgs} args - Arguments to update one Pagamento.
     * @example
     * // Update one Pagamento
     * const pagamento = await prisma.pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagamentoUpdateArgs>(args: SelectSubset<T, pagamentoUpdateArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pagamentos.
     * @param {pagamentoDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagamentoDeleteManyArgs>(args?: SelectSubset<T, pagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagamentoUpdateManyArgs>(args: SelectSubset<T, pagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pagamento.
     * @param {pagamentoUpsertArgs} args - Arguments to update or create a Pagamento.
     * @example
     * // Update or create a Pagamento
     * const pagamento = await prisma.pagamento.upsert({
     *   create: {
     *     // ... data to create a Pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamento we want to update
     *   }
     * })
     */
    upsert<T extends pagamentoUpsertArgs>(args: SelectSubset<T, pagamentoUpsertArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamento.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends pagamentoCountArgs>(
      args?: Subset<T, pagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagamentoAggregateArgs>(args: Subset<T, PagamentoAggregateArgs>): Prisma.PrismaPromise<GetPagamentoAggregateType<T>>

    /**
     * Group by Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoGroupByArgs} args - Group by arguments.
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
      T extends pagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagamentoGroupByArgs['orderBy'] }
        : { orderBy?: pagamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pagamento model
   */
  readonly fields: pagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo_pagamento<T extends pagamento$tipo_pagamentoArgs<ExtArgs> = {}>(args?: Subset<T, pagamento$tipo_pagamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_pagamentoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the pagamento model
   */ 
  interface pagamentoFieldRefs {
    readonly pagamento_id: FieldRef<"pagamento", 'Int'>
    readonly pagamento_tipo: FieldRef<"pagamento", 'String'>
    readonly pagamento_status: FieldRef<"pagamento", 'Int'>
    readonly pagamento_data: FieldRef<"pagamento", 'DateTime'>
    readonly pagamento_endereco: FieldRef<"pagamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pagamento findUnique
   */
  export type pagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento findUniqueOrThrow
   */
  export type pagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento findFirst
   */
  export type pagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagamentos.
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * pagamento findFirstOrThrow
   */
  export type pagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagamentos.
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * pagamento findMany
   */
  export type pagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamentos to fetch.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagamentos.
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * pagamento create
   */
  export type pagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a pagamento.
     */
    data: XOR<pagamentoCreateInput, pagamentoUncheckedCreateInput>
  }

  /**
   * pagamento createMany
   */
  export type pagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagamentos.
     */
    data: pagamentoCreateManyInput | pagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pagamento update
   */
  export type pagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a pagamento.
     */
    data: XOR<pagamentoUpdateInput, pagamentoUncheckedUpdateInput>
    /**
     * Choose, which pagamento to update.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento updateMany
   */
  export type pagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagamentos.
     */
    data: XOR<pagamentoUpdateManyMutationInput, pagamentoUncheckedUpdateManyInput>
    /**
     * Filter which pagamentos to update
     */
    where?: pagamentoWhereInput
  }

  /**
   * pagamento upsert
   */
  export type pagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the pagamento to update in case it exists.
     */
    where: pagamentoWhereUniqueInput
    /**
     * In case the pagamento found by the `where` argument doesn't exist, create a new pagamento with this data.
     */
    create: XOR<pagamentoCreateInput, pagamentoUncheckedCreateInput>
    /**
     * In case the pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagamentoUpdateInput, pagamentoUncheckedUpdateInput>
  }

  /**
   * pagamento delete
   */
  export type pagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter which pagamento to delete.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento deleteMany
   */
  export type pagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagamentos to delete
     */
    where?: pagamentoWhereInput
  }

  /**
   * pagamento.tipo_pagamento
   */
  export type pagamento$tipo_pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_pagamento
     */
    select?: tipo_pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_pagamentoInclude<ExtArgs> | null
    where?: tipo_pagamentoWhereInput
    orderBy?: tipo_pagamentoOrderByWithRelationInput | tipo_pagamentoOrderByWithRelationInput[]
    cursor?: tipo_pagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tipo_pagamentoScalarFieldEnum | Tipo_pagamentoScalarFieldEnum[]
  }

  /**
   * pagamento without action
   */
  export type pagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
  }


  /**
   * Model boleto
   */

  export type AggregateBoleto = {
    _count: BoletoCountAggregateOutputType | null
    _avg: BoletoAvgAggregateOutputType | null
    _sum: BoletoSumAggregateOutputType | null
    _min: BoletoMinAggregateOutputType | null
    _max: BoletoMaxAggregateOutputType | null
  }

  export type BoletoAvgAggregateOutputType = {
    boleto_id: number | null
    boleto_status: number | null
  }

  export type BoletoSumAggregateOutputType = {
    boleto_id: number | null
    boleto_status: number | null
  }

  export type BoletoMinAggregateOutputType = {
    boleto_id: number | null
    boleto_numero: string | null
    boleto_vencimento: Date | null
    boleto_emissao: Date | null
    boleto_status: number | null
  }

  export type BoletoMaxAggregateOutputType = {
    boleto_id: number | null
    boleto_numero: string | null
    boleto_vencimento: Date | null
    boleto_emissao: Date | null
    boleto_status: number | null
  }

  export type BoletoCountAggregateOutputType = {
    boleto_id: number
    boleto_numero: number
    boleto_vencimento: number
    boleto_emissao: number
    boleto_status: number
    _all: number
  }


  export type BoletoAvgAggregateInputType = {
    boleto_id?: true
    boleto_status?: true
  }

  export type BoletoSumAggregateInputType = {
    boleto_id?: true
    boleto_status?: true
  }

  export type BoletoMinAggregateInputType = {
    boleto_id?: true
    boleto_numero?: true
    boleto_vencimento?: true
    boleto_emissao?: true
    boleto_status?: true
  }

  export type BoletoMaxAggregateInputType = {
    boleto_id?: true
    boleto_numero?: true
    boleto_vencimento?: true
    boleto_emissao?: true
    boleto_status?: true
  }

  export type BoletoCountAggregateInputType = {
    boleto_id?: true
    boleto_numero?: true
    boleto_vencimento?: true
    boleto_emissao?: true
    boleto_status?: true
    _all?: true
  }

  export type BoletoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which boleto to aggregate.
     */
    where?: boletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boletos to fetch.
     */
    orderBy?: boletoOrderByWithRelationInput | boletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: boletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned boletos
    **/
    _count?: true | BoletoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoletoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoletoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoletoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoletoMaxAggregateInputType
  }

  export type GetBoletoAggregateType<T extends BoletoAggregateArgs> = {
        [P in keyof T & keyof AggregateBoleto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoleto[P]>
      : GetScalarType<T[P], AggregateBoleto[P]>
  }




  export type boletoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: boletoWhereInput
    orderBy?: boletoOrderByWithAggregationInput | boletoOrderByWithAggregationInput[]
    by: BoletoScalarFieldEnum[] | BoletoScalarFieldEnum
    having?: boletoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoletoCountAggregateInputType | true
    _avg?: BoletoAvgAggregateInputType
    _sum?: BoletoSumAggregateInputType
    _min?: BoletoMinAggregateInputType
    _max?: BoletoMaxAggregateInputType
  }

  export type BoletoGroupByOutputType = {
    boleto_id: number
    boleto_numero: string
    boleto_vencimento: Date
    boleto_emissao: Date
    boleto_status: number
    _count: BoletoCountAggregateOutputType | null
    _avg: BoletoAvgAggregateOutputType | null
    _sum: BoletoSumAggregateOutputType | null
    _min: BoletoMinAggregateOutputType | null
    _max: BoletoMaxAggregateOutputType | null
  }

  type GetBoletoGroupByPayload<T extends boletoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoletoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoletoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoletoGroupByOutputType[P]>
            : GetScalarType<T[P], BoletoGroupByOutputType[P]>
        }
      >
    >


  export type boletoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    boleto_id?: boolean
    boleto_numero?: boolean
    boleto_vencimento?: boolean
    boleto_emissao?: boolean
    boleto_status?: boolean
    tipo_pagamento?: boolean | boleto$tipo_pagamentoArgs<ExtArgs>
    _count?: boolean | BoletoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boleto"]>


  export type boletoSelectScalar = {
    boleto_id?: boolean
    boleto_numero?: boolean
    boleto_vencimento?: boolean
    boleto_emissao?: boolean
    boleto_status?: boolean
  }

  export type boletoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo_pagamento?: boolean | boleto$tipo_pagamentoArgs<ExtArgs>
    _count?: boolean | BoletoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $boletoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "boleto"
    objects: {
      tipo_pagamento: Prisma.$tipo_pagamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      boleto_id: number
      boleto_numero: string
      boleto_vencimento: Date
      boleto_emissao: Date
      boleto_status: number
    }, ExtArgs["result"]["boleto"]>
    composites: {}
  }

  type boletoGetPayload<S extends boolean | null | undefined | boletoDefaultArgs> = $Result.GetResult<Prisma.$boletoPayload, S>

  type boletoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<boletoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BoletoCountAggregateInputType | true
    }

  export interface boletoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['boleto'], meta: { name: 'boleto' } }
    /**
     * Find zero or one Boleto that matches the filter.
     * @param {boletoFindUniqueArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends boletoFindUniqueArgs>(args: SelectSubset<T, boletoFindUniqueArgs<ExtArgs>>): Prisma__boletoClient<$Result.GetResult<Prisma.$boletoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Boleto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {boletoFindUniqueOrThrowArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends boletoFindUniqueOrThrowArgs>(args: SelectSubset<T, boletoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__boletoClient<$Result.GetResult<Prisma.$boletoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Boleto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boletoFindFirstArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends boletoFindFirstArgs>(args?: SelectSubset<T, boletoFindFirstArgs<ExtArgs>>): Prisma__boletoClient<$Result.GetResult<Prisma.$boletoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Boleto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boletoFindFirstOrThrowArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends boletoFindFirstOrThrowArgs>(args?: SelectSubset<T, boletoFindFirstOrThrowArgs<ExtArgs>>): Prisma__boletoClient<$Result.GetResult<Prisma.$boletoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Boletos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boletoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boletos
     * const boletos = await prisma.boleto.findMany()
     * 
     * // Get first 10 Boletos
     * const boletos = await prisma.boleto.findMany({ take: 10 })
     * 
     * // Only select the `boleto_id`
     * const boletoWithBoleto_idOnly = await prisma.boleto.findMany({ select: { boleto_id: true } })
     * 
     */
    findMany<T extends boletoFindManyArgs>(args?: SelectSubset<T, boletoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$boletoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Boleto.
     * @param {boletoCreateArgs} args - Arguments to create a Boleto.
     * @example
     * // Create one Boleto
     * const Boleto = await prisma.boleto.create({
     *   data: {
     *     // ... data to create a Boleto
     *   }
     * })
     * 
     */
    create<T extends boletoCreateArgs>(args: SelectSubset<T, boletoCreateArgs<ExtArgs>>): Prisma__boletoClient<$Result.GetResult<Prisma.$boletoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Boletos.
     * @param {boletoCreateManyArgs} args - Arguments to create many Boletos.
     * @example
     * // Create many Boletos
     * const boleto = await prisma.boleto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends boletoCreateManyArgs>(args?: SelectSubset<T, boletoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Boleto.
     * @param {boletoDeleteArgs} args - Arguments to delete one Boleto.
     * @example
     * // Delete one Boleto
     * const Boleto = await prisma.boleto.delete({
     *   where: {
     *     // ... filter to delete one Boleto
     *   }
     * })
     * 
     */
    delete<T extends boletoDeleteArgs>(args: SelectSubset<T, boletoDeleteArgs<ExtArgs>>): Prisma__boletoClient<$Result.GetResult<Prisma.$boletoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Boleto.
     * @param {boletoUpdateArgs} args - Arguments to update one Boleto.
     * @example
     * // Update one Boleto
     * const boleto = await prisma.boleto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends boletoUpdateArgs>(args: SelectSubset<T, boletoUpdateArgs<ExtArgs>>): Prisma__boletoClient<$Result.GetResult<Prisma.$boletoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Boletos.
     * @param {boletoDeleteManyArgs} args - Arguments to filter Boletos to delete.
     * @example
     * // Delete a few Boletos
     * const { count } = await prisma.boleto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends boletoDeleteManyArgs>(args?: SelectSubset<T, boletoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boletos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boletoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boletos
     * const boleto = await prisma.boleto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends boletoUpdateManyArgs>(args: SelectSubset<T, boletoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Boleto.
     * @param {boletoUpsertArgs} args - Arguments to update or create a Boleto.
     * @example
     * // Update or create a Boleto
     * const boleto = await prisma.boleto.upsert({
     *   create: {
     *     // ... data to create a Boleto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boleto we want to update
     *   }
     * })
     */
    upsert<T extends boletoUpsertArgs>(args: SelectSubset<T, boletoUpsertArgs<ExtArgs>>): Prisma__boletoClient<$Result.GetResult<Prisma.$boletoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Boletos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boletoCountArgs} args - Arguments to filter Boletos to count.
     * @example
     * // Count the number of Boletos
     * const count = await prisma.boleto.count({
     *   where: {
     *     // ... the filter for the Boletos we want to count
     *   }
     * })
    **/
    count<T extends boletoCountArgs>(
      args?: Subset<T, boletoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoletoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boleto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoletoAggregateArgs>(args: Subset<T, BoletoAggregateArgs>): Prisma.PrismaPromise<GetBoletoAggregateType<T>>

    /**
     * Group by Boleto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boletoGroupByArgs} args - Group by arguments.
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
      T extends boletoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: boletoGroupByArgs['orderBy'] }
        : { orderBy?: boletoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, boletoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoletoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the boleto model
   */
  readonly fields: boletoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for boleto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__boletoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo_pagamento<T extends boleto$tipo_pagamentoArgs<ExtArgs> = {}>(args?: Subset<T, boleto$tipo_pagamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_pagamentoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the boleto model
   */ 
  interface boletoFieldRefs {
    readonly boleto_id: FieldRef<"boleto", 'Int'>
    readonly boleto_numero: FieldRef<"boleto", 'String'>
    readonly boleto_vencimento: FieldRef<"boleto", 'DateTime'>
    readonly boleto_emissao: FieldRef<"boleto", 'DateTime'>
    readonly boleto_status: FieldRef<"boleto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * boleto findUnique
   */
  export type boletoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boleto
     */
    select?: boletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boletoInclude<ExtArgs> | null
    /**
     * Filter, which boleto to fetch.
     */
    where: boletoWhereUniqueInput
  }

  /**
   * boleto findUniqueOrThrow
   */
  export type boletoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boleto
     */
    select?: boletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boletoInclude<ExtArgs> | null
    /**
     * Filter, which boleto to fetch.
     */
    where: boletoWhereUniqueInput
  }

  /**
   * boleto findFirst
   */
  export type boletoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boleto
     */
    select?: boletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boletoInclude<ExtArgs> | null
    /**
     * Filter, which boleto to fetch.
     */
    where?: boletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boletos to fetch.
     */
    orderBy?: boletoOrderByWithRelationInput | boletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boletos.
     */
    cursor?: boletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boletos.
     */
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * boleto findFirstOrThrow
   */
  export type boletoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boleto
     */
    select?: boletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boletoInclude<ExtArgs> | null
    /**
     * Filter, which boleto to fetch.
     */
    where?: boletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boletos to fetch.
     */
    orderBy?: boletoOrderByWithRelationInput | boletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boletos.
     */
    cursor?: boletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boletos.
     */
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * boleto findMany
   */
  export type boletoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boleto
     */
    select?: boletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boletoInclude<ExtArgs> | null
    /**
     * Filter, which boletos to fetch.
     */
    where?: boletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boletos to fetch.
     */
    orderBy?: boletoOrderByWithRelationInput | boletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing boletos.
     */
    cursor?: boletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boletos.
     */
    skip?: number
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * boleto create
   */
  export type boletoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boleto
     */
    select?: boletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boletoInclude<ExtArgs> | null
    /**
     * The data needed to create a boleto.
     */
    data: XOR<boletoCreateInput, boletoUncheckedCreateInput>
  }

  /**
   * boleto createMany
   */
  export type boletoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many boletos.
     */
    data: boletoCreateManyInput | boletoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * boleto update
   */
  export type boletoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boleto
     */
    select?: boletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boletoInclude<ExtArgs> | null
    /**
     * The data needed to update a boleto.
     */
    data: XOR<boletoUpdateInput, boletoUncheckedUpdateInput>
    /**
     * Choose, which boleto to update.
     */
    where: boletoWhereUniqueInput
  }

  /**
   * boleto updateMany
   */
  export type boletoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update boletos.
     */
    data: XOR<boletoUpdateManyMutationInput, boletoUncheckedUpdateManyInput>
    /**
     * Filter which boletos to update
     */
    where?: boletoWhereInput
  }

  /**
   * boleto upsert
   */
  export type boletoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boleto
     */
    select?: boletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boletoInclude<ExtArgs> | null
    /**
     * The filter to search for the boleto to update in case it exists.
     */
    where: boletoWhereUniqueInput
    /**
     * In case the boleto found by the `where` argument doesn't exist, create a new boleto with this data.
     */
    create: XOR<boletoCreateInput, boletoUncheckedCreateInput>
    /**
     * In case the boleto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<boletoUpdateInput, boletoUncheckedUpdateInput>
  }

  /**
   * boleto delete
   */
  export type boletoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boleto
     */
    select?: boletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boletoInclude<ExtArgs> | null
    /**
     * Filter which boleto to delete.
     */
    where: boletoWhereUniqueInput
  }

  /**
   * boleto deleteMany
   */
  export type boletoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which boletos to delete
     */
    where?: boletoWhereInput
  }

  /**
   * boleto.tipo_pagamento
   */
  export type boleto$tipo_pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_pagamento
     */
    select?: tipo_pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_pagamentoInclude<ExtArgs> | null
    where?: tipo_pagamentoWhereInput
    orderBy?: tipo_pagamentoOrderByWithRelationInput | tipo_pagamentoOrderByWithRelationInput[]
    cursor?: tipo_pagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tipo_pagamentoScalarFieldEnum | Tipo_pagamentoScalarFieldEnum[]
  }

  /**
   * boleto without action
   */
  export type boletoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boleto
     */
    select?: boletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boletoInclude<ExtArgs> | null
  }


  /**
   * Model deposito
   */

  export type AggregateDeposito = {
    _count: DepositoCountAggregateOutputType | null
    _avg: DepositoAvgAggregateOutputType | null
    _sum: DepositoSumAggregateOutputType | null
    _min: DepositoMinAggregateOutputType | null
    _max: DepositoMaxAggregateOutputType | null
  }

  export type DepositoAvgAggregateOutputType = {
    deposito_id: number | null
    deposito_valor: number | null
    deposito_status: number | null
  }

  export type DepositoSumAggregateOutputType = {
    deposito_id: number | null
    deposito_valor: number | null
    deposito_status: number | null
  }

  export type DepositoMinAggregateOutputType = {
    deposito_id: number | null
    deposito_banco: string | null
    deposito_valor: number | null
    deposito_agencia: string | null
    deposito_conta: string | null
    deposito_status: number | null
  }

  export type DepositoMaxAggregateOutputType = {
    deposito_id: number | null
    deposito_banco: string | null
    deposito_valor: number | null
    deposito_agencia: string | null
    deposito_conta: string | null
    deposito_status: number | null
  }

  export type DepositoCountAggregateOutputType = {
    deposito_id: number
    deposito_banco: number
    deposito_valor: number
    deposito_agencia: number
    deposito_conta: number
    deposito_status: number
    _all: number
  }


  export type DepositoAvgAggregateInputType = {
    deposito_id?: true
    deposito_valor?: true
    deposito_status?: true
  }

  export type DepositoSumAggregateInputType = {
    deposito_id?: true
    deposito_valor?: true
    deposito_status?: true
  }

  export type DepositoMinAggregateInputType = {
    deposito_id?: true
    deposito_banco?: true
    deposito_valor?: true
    deposito_agencia?: true
    deposito_conta?: true
    deposito_status?: true
  }

  export type DepositoMaxAggregateInputType = {
    deposito_id?: true
    deposito_banco?: true
    deposito_valor?: true
    deposito_agencia?: true
    deposito_conta?: true
    deposito_status?: true
  }

  export type DepositoCountAggregateInputType = {
    deposito_id?: true
    deposito_banco?: true
    deposito_valor?: true
    deposito_agencia?: true
    deposito_conta?: true
    deposito_status?: true
    _all?: true
  }

  export type DepositoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deposito to aggregate.
     */
    where?: depositoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of depositos to fetch.
     */
    orderBy?: depositoOrderByWithRelationInput | depositoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: depositoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` depositos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` depositos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned depositos
    **/
    _count?: true | DepositoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositoMaxAggregateInputType
  }

  export type GetDepositoAggregateType<T extends DepositoAggregateArgs> = {
        [P in keyof T & keyof AggregateDeposito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeposito[P]>
      : GetScalarType<T[P], AggregateDeposito[P]>
  }




  export type depositoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: depositoWhereInput
    orderBy?: depositoOrderByWithAggregationInput | depositoOrderByWithAggregationInput[]
    by: DepositoScalarFieldEnum[] | DepositoScalarFieldEnum
    having?: depositoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositoCountAggregateInputType | true
    _avg?: DepositoAvgAggregateInputType
    _sum?: DepositoSumAggregateInputType
    _min?: DepositoMinAggregateInputType
    _max?: DepositoMaxAggregateInputType
  }

  export type DepositoGroupByOutputType = {
    deposito_id: number
    deposito_banco: string
    deposito_valor: number
    deposito_agencia: string
    deposito_conta: string
    deposito_status: number
    _count: DepositoCountAggregateOutputType | null
    _avg: DepositoAvgAggregateOutputType | null
    _sum: DepositoSumAggregateOutputType | null
    _min: DepositoMinAggregateOutputType | null
    _max: DepositoMaxAggregateOutputType | null
  }

  type GetDepositoGroupByPayload<T extends depositoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositoGroupByOutputType[P]>
            : GetScalarType<T[P], DepositoGroupByOutputType[P]>
        }
      >
    >


  export type depositoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deposito_id?: boolean
    deposito_banco?: boolean
    deposito_valor?: boolean
    deposito_agencia?: boolean
    deposito_conta?: boolean
    deposito_status?: boolean
    tipo_pagamento?: boolean | deposito$tipo_pagamentoArgs<ExtArgs>
    _count?: boolean | DepositoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposito"]>


  export type depositoSelectScalar = {
    deposito_id?: boolean
    deposito_banco?: boolean
    deposito_valor?: boolean
    deposito_agencia?: boolean
    deposito_conta?: boolean
    deposito_status?: boolean
  }

  export type depositoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo_pagamento?: boolean | deposito$tipo_pagamentoArgs<ExtArgs>
    _count?: boolean | DepositoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $depositoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "deposito"
    objects: {
      tipo_pagamento: Prisma.$tipo_pagamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      deposito_id: number
      deposito_banco: string
      deposito_valor: number
      deposito_agencia: string
      deposito_conta: string
      deposito_status: number
    }, ExtArgs["result"]["deposito"]>
    composites: {}
  }

  type depositoGetPayload<S extends boolean | null | undefined | depositoDefaultArgs> = $Result.GetResult<Prisma.$depositoPayload, S>

  type depositoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<depositoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepositoCountAggregateInputType | true
    }

  export interface depositoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['deposito'], meta: { name: 'deposito' } }
    /**
     * Find zero or one Deposito that matches the filter.
     * @param {depositoFindUniqueArgs} args - Arguments to find a Deposito
     * @example
     * // Get one Deposito
     * const deposito = await prisma.deposito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends depositoFindUniqueArgs>(args: SelectSubset<T, depositoFindUniqueArgs<ExtArgs>>): Prisma__depositoClient<$Result.GetResult<Prisma.$depositoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Deposito that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {depositoFindUniqueOrThrowArgs} args - Arguments to find a Deposito
     * @example
     * // Get one Deposito
     * const deposito = await prisma.deposito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends depositoFindUniqueOrThrowArgs>(args: SelectSubset<T, depositoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__depositoClient<$Result.GetResult<Prisma.$depositoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Deposito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositoFindFirstArgs} args - Arguments to find a Deposito
     * @example
     * // Get one Deposito
     * const deposito = await prisma.deposito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends depositoFindFirstArgs>(args?: SelectSubset<T, depositoFindFirstArgs<ExtArgs>>): Prisma__depositoClient<$Result.GetResult<Prisma.$depositoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Deposito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositoFindFirstOrThrowArgs} args - Arguments to find a Deposito
     * @example
     * // Get one Deposito
     * const deposito = await prisma.deposito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends depositoFindFirstOrThrowArgs>(args?: SelectSubset<T, depositoFindFirstOrThrowArgs<ExtArgs>>): Prisma__depositoClient<$Result.GetResult<Prisma.$depositoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Depositos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Depositos
     * const depositos = await prisma.deposito.findMany()
     * 
     * // Get first 10 Depositos
     * const depositos = await prisma.deposito.findMany({ take: 10 })
     * 
     * // Only select the `deposito_id`
     * const depositoWithDeposito_idOnly = await prisma.deposito.findMany({ select: { deposito_id: true } })
     * 
     */
    findMany<T extends depositoFindManyArgs>(args?: SelectSubset<T, depositoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$depositoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Deposito.
     * @param {depositoCreateArgs} args - Arguments to create a Deposito.
     * @example
     * // Create one Deposito
     * const Deposito = await prisma.deposito.create({
     *   data: {
     *     // ... data to create a Deposito
     *   }
     * })
     * 
     */
    create<T extends depositoCreateArgs>(args: SelectSubset<T, depositoCreateArgs<ExtArgs>>): Prisma__depositoClient<$Result.GetResult<Prisma.$depositoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Depositos.
     * @param {depositoCreateManyArgs} args - Arguments to create many Depositos.
     * @example
     * // Create many Depositos
     * const deposito = await prisma.deposito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends depositoCreateManyArgs>(args?: SelectSubset<T, depositoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Deposito.
     * @param {depositoDeleteArgs} args - Arguments to delete one Deposito.
     * @example
     * // Delete one Deposito
     * const Deposito = await prisma.deposito.delete({
     *   where: {
     *     // ... filter to delete one Deposito
     *   }
     * })
     * 
     */
    delete<T extends depositoDeleteArgs>(args: SelectSubset<T, depositoDeleteArgs<ExtArgs>>): Prisma__depositoClient<$Result.GetResult<Prisma.$depositoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Deposito.
     * @param {depositoUpdateArgs} args - Arguments to update one Deposito.
     * @example
     * // Update one Deposito
     * const deposito = await prisma.deposito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends depositoUpdateArgs>(args: SelectSubset<T, depositoUpdateArgs<ExtArgs>>): Prisma__depositoClient<$Result.GetResult<Prisma.$depositoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Depositos.
     * @param {depositoDeleteManyArgs} args - Arguments to filter Depositos to delete.
     * @example
     * // Delete a few Depositos
     * const { count } = await prisma.deposito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends depositoDeleteManyArgs>(args?: SelectSubset<T, depositoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Depositos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Depositos
     * const deposito = await prisma.deposito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends depositoUpdateManyArgs>(args: SelectSubset<T, depositoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deposito.
     * @param {depositoUpsertArgs} args - Arguments to update or create a Deposito.
     * @example
     * // Update or create a Deposito
     * const deposito = await prisma.deposito.upsert({
     *   create: {
     *     // ... data to create a Deposito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deposito we want to update
     *   }
     * })
     */
    upsert<T extends depositoUpsertArgs>(args: SelectSubset<T, depositoUpsertArgs<ExtArgs>>): Prisma__depositoClient<$Result.GetResult<Prisma.$depositoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Depositos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositoCountArgs} args - Arguments to filter Depositos to count.
     * @example
     * // Count the number of Depositos
     * const count = await prisma.deposito.count({
     *   where: {
     *     // ... the filter for the Depositos we want to count
     *   }
     * })
    **/
    count<T extends depositoCountArgs>(
      args?: Subset<T, depositoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deposito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepositoAggregateArgs>(args: Subset<T, DepositoAggregateArgs>): Prisma.PrismaPromise<GetDepositoAggregateType<T>>

    /**
     * Group by Deposito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositoGroupByArgs} args - Group by arguments.
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
      T extends depositoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: depositoGroupByArgs['orderBy'] }
        : { orderBy?: depositoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, depositoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the deposito model
   */
  readonly fields: depositoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for deposito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__depositoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo_pagamento<T extends deposito$tipo_pagamentoArgs<ExtArgs> = {}>(args?: Subset<T, deposito$tipo_pagamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_pagamentoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the deposito model
   */ 
  interface depositoFieldRefs {
    readonly deposito_id: FieldRef<"deposito", 'Int'>
    readonly deposito_banco: FieldRef<"deposito", 'String'>
    readonly deposito_valor: FieldRef<"deposito", 'Float'>
    readonly deposito_agencia: FieldRef<"deposito", 'String'>
    readonly deposito_conta: FieldRef<"deposito", 'String'>
    readonly deposito_status: FieldRef<"deposito", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * deposito findUnique
   */
  export type depositoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposito
     */
    select?: depositoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositoInclude<ExtArgs> | null
    /**
     * Filter, which deposito to fetch.
     */
    where: depositoWhereUniqueInput
  }

  /**
   * deposito findUniqueOrThrow
   */
  export type depositoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposito
     */
    select?: depositoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositoInclude<ExtArgs> | null
    /**
     * Filter, which deposito to fetch.
     */
    where: depositoWhereUniqueInput
  }

  /**
   * deposito findFirst
   */
  export type depositoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposito
     */
    select?: depositoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositoInclude<ExtArgs> | null
    /**
     * Filter, which deposito to fetch.
     */
    where?: depositoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of depositos to fetch.
     */
    orderBy?: depositoOrderByWithRelationInput | depositoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for depositos.
     */
    cursor?: depositoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` depositos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` depositos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of depositos.
     */
    distinct?: DepositoScalarFieldEnum | DepositoScalarFieldEnum[]
  }

  /**
   * deposito findFirstOrThrow
   */
  export type depositoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposito
     */
    select?: depositoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositoInclude<ExtArgs> | null
    /**
     * Filter, which deposito to fetch.
     */
    where?: depositoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of depositos to fetch.
     */
    orderBy?: depositoOrderByWithRelationInput | depositoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for depositos.
     */
    cursor?: depositoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` depositos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` depositos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of depositos.
     */
    distinct?: DepositoScalarFieldEnum | DepositoScalarFieldEnum[]
  }

  /**
   * deposito findMany
   */
  export type depositoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposito
     */
    select?: depositoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositoInclude<ExtArgs> | null
    /**
     * Filter, which depositos to fetch.
     */
    where?: depositoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of depositos to fetch.
     */
    orderBy?: depositoOrderByWithRelationInput | depositoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing depositos.
     */
    cursor?: depositoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` depositos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` depositos.
     */
    skip?: number
    distinct?: DepositoScalarFieldEnum | DepositoScalarFieldEnum[]
  }

  /**
   * deposito create
   */
  export type depositoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposito
     */
    select?: depositoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositoInclude<ExtArgs> | null
    /**
     * The data needed to create a deposito.
     */
    data: XOR<depositoCreateInput, depositoUncheckedCreateInput>
  }

  /**
   * deposito createMany
   */
  export type depositoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many depositos.
     */
    data: depositoCreateManyInput | depositoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * deposito update
   */
  export type depositoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposito
     */
    select?: depositoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositoInclude<ExtArgs> | null
    /**
     * The data needed to update a deposito.
     */
    data: XOR<depositoUpdateInput, depositoUncheckedUpdateInput>
    /**
     * Choose, which deposito to update.
     */
    where: depositoWhereUniqueInput
  }

  /**
   * deposito updateMany
   */
  export type depositoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update depositos.
     */
    data: XOR<depositoUpdateManyMutationInput, depositoUncheckedUpdateManyInput>
    /**
     * Filter which depositos to update
     */
    where?: depositoWhereInput
  }

  /**
   * deposito upsert
   */
  export type depositoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposito
     */
    select?: depositoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositoInclude<ExtArgs> | null
    /**
     * The filter to search for the deposito to update in case it exists.
     */
    where: depositoWhereUniqueInput
    /**
     * In case the deposito found by the `where` argument doesn't exist, create a new deposito with this data.
     */
    create: XOR<depositoCreateInput, depositoUncheckedCreateInput>
    /**
     * In case the deposito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<depositoUpdateInput, depositoUncheckedUpdateInput>
  }

  /**
   * deposito delete
   */
  export type depositoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposito
     */
    select?: depositoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositoInclude<ExtArgs> | null
    /**
     * Filter which deposito to delete.
     */
    where: depositoWhereUniqueInput
  }

  /**
   * deposito deleteMany
   */
  export type depositoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which depositos to delete
     */
    where?: depositoWhereInput
  }

  /**
   * deposito.tipo_pagamento
   */
  export type deposito$tipo_pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_pagamento
     */
    select?: tipo_pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_pagamentoInclude<ExtArgs> | null
    where?: tipo_pagamentoWhereInput
    orderBy?: tipo_pagamentoOrderByWithRelationInput | tipo_pagamentoOrderByWithRelationInput[]
    cursor?: tipo_pagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tipo_pagamentoScalarFieldEnum | Tipo_pagamentoScalarFieldEnum[]
  }

  /**
   * deposito without action
   */
  export type depositoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposito
     */
    select?: depositoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositoInclude<ExtArgs> | null
  }


  /**
   * Model cartao
   */

  export type AggregateCartao = {
    _count: CartaoCountAggregateOutputType | null
    _avg: CartaoAvgAggregateOutputType | null
    _sum: CartaoSumAggregateOutputType | null
    _min: CartaoMinAggregateOutputType | null
    _max: CartaoMaxAggregateOutputType | null
  }

  export type CartaoAvgAggregateOutputType = {
    cartao_id: number | null
    cartao_status: number | null
  }

  export type CartaoSumAggregateOutputType = {
    cartao_id: number | null
    cartao_status: number | null
  }

  export type CartaoMinAggregateOutputType = {
    cartao_id: number | null
    cartao_numero: string | null
    cartao_validade: Date | null
    cartao_cvv: string | null
    cartao_banco: string | null
    cartao_nome: string | null
    cartao_status: number | null
  }

  export type CartaoMaxAggregateOutputType = {
    cartao_id: number | null
    cartao_numero: string | null
    cartao_validade: Date | null
    cartao_cvv: string | null
    cartao_banco: string | null
    cartao_nome: string | null
    cartao_status: number | null
  }

  export type CartaoCountAggregateOutputType = {
    cartao_id: number
    cartao_numero: number
    cartao_validade: number
    cartao_cvv: number
    cartao_banco: number
    cartao_nome: number
    cartao_status: number
    _all: number
  }


  export type CartaoAvgAggregateInputType = {
    cartao_id?: true
    cartao_status?: true
  }

  export type CartaoSumAggregateInputType = {
    cartao_id?: true
    cartao_status?: true
  }

  export type CartaoMinAggregateInputType = {
    cartao_id?: true
    cartao_numero?: true
    cartao_validade?: true
    cartao_cvv?: true
    cartao_banco?: true
    cartao_nome?: true
    cartao_status?: true
  }

  export type CartaoMaxAggregateInputType = {
    cartao_id?: true
    cartao_numero?: true
    cartao_validade?: true
    cartao_cvv?: true
    cartao_banco?: true
    cartao_nome?: true
    cartao_status?: true
  }

  export type CartaoCountAggregateInputType = {
    cartao_id?: true
    cartao_numero?: true
    cartao_validade?: true
    cartao_cvv?: true
    cartao_banco?: true
    cartao_nome?: true
    cartao_status?: true
    _all?: true
  }

  export type CartaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cartao to aggregate.
     */
    where?: cartaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartaos to fetch.
     */
    orderBy?: cartaoOrderByWithRelationInput | cartaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cartaos
    **/
    _count?: true | CartaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartaoMaxAggregateInputType
  }

  export type GetCartaoAggregateType<T extends CartaoAggregateArgs> = {
        [P in keyof T & keyof AggregateCartao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartao[P]>
      : GetScalarType<T[P], AggregateCartao[P]>
  }




  export type cartaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartaoWhereInput
    orderBy?: cartaoOrderByWithAggregationInput | cartaoOrderByWithAggregationInput[]
    by: CartaoScalarFieldEnum[] | CartaoScalarFieldEnum
    having?: cartaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartaoCountAggregateInputType | true
    _avg?: CartaoAvgAggregateInputType
    _sum?: CartaoSumAggregateInputType
    _min?: CartaoMinAggregateInputType
    _max?: CartaoMaxAggregateInputType
  }

  export type CartaoGroupByOutputType = {
    cartao_id: number
    cartao_numero: string
    cartao_validade: Date
    cartao_cvv: string
    cartao_banco: string
    cartao_nome: string
    cartao_status: number
    _count: CartaoCountAggregateOutputType | null
    _avg: CartaoAvgAggregateOutputType | null
    _sum: CartaoSumAggregateOutputType | null
    _min: CartaoMinAggregateOutputType | null
    _max: CartaoMaxAggregateOutputType | null
  }

  type GetCartaoGroupByPayload<T extends cartaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartaoGroupByOutputType[P]>
            : GetScalarType<T[P], CartaoGroupByOutputType[P]>
        }
      >
    >


  export type cartaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cartao_id?: boolean
    cartao_numero?: boolean
    cartao_validade?: boolean
    cartao_cvv?: boolean
    cartao_banco?: boolean
    cartao_nome?: boolean
    cartao_status?: boolean
    tipo_pagamento?: boolean | cartao$tipo_pagamentoArgs<ExtArgs>
    _count?: boolean | CartaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartao"]>


  export type cartaoSelectScalar = {
    cartao_id?: boolean
    cartao_numero?: boolean
    cartao_validade?: boolean
    cartao_cvv?: boolean
    cartao_banco?: boolean
    cartao_nome?: boolean
    cartao_status?: boolean
  }

  export type cartaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo_pagamento?: boolean | cartao$tipo_pagamentoArgs<ExtArgs>
    _count?: boolean | CartaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cartaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cartao"
    objects: {
      tipo_pagamento: Prisma.$tipo_pagamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cartao_id: number
      cartao_numero: string
      cartao_validade: Date
      cartao_cvv: string
      cartao_banco: string
      cartao_nome: string
      cartao_status: number
    }, ExtArgs["result"]["cartao"]>
    composites: {}
  }

  type cartaoGetPayload<S extends boolean | null | undefined | cartaoDefaultArgs> = $Result.GetResult<Prisma.$cartaoPayload, S>

  type cartaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cartaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CartaoCountAggregateInputType | true
    }

  export interface cartaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cartao'], meta: { name: 'cartao' } }
    /**
     * Find zero or one Cartao that matches the filter.
     * @param {cartaoFindUniqueArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartaoFindUniqueArgs>(args: SelectSubset<T, cartaoFindUniqueArgs<ExtArgs>>): Prisma__cartaoClient<$Result.GetResult<Prisma.$cartaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cartao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {cartaoFindUniqueOrThrowArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartaoFindUniqueOrThrowArgs>(args: SelectSubset<T, cartaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartaoClient<$Result.GetResult<Prisma.$cartaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cartao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartaoFindFirstArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartaoFindFirstArgs>(args?: SelectSubset<T, cartaoFindFirstArgs<ExtArgs>>): Prisma__cartaoClient<$Result.GetResult<Prisma.$cartaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cartao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartaoFindFirstOrThrowArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartaoFindFirstOrThrowArgs>(args?: SelectSubset<T, cartaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartaoClient<$Result.GetResult<Prisma.$cartaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cartaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cartaos
     * const cartaos = await prisma.cartao.findMany()
     * 
     * // Get first 10 Cartaos
     * const cartaos = await prisma.cartao.findMany({ take: 10 })
     * 
     * // Only select the `cartao_id`
     * const cartaoWithCartao_idOnly = await prisma.cartao.findMany({ select: { cartao_id: true } })
     * 
     */
    findMany<T extends cartaoFindManyArgs>(args?: SelectSubset<T, cartaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cartao.
     * @param {cartaoCreateArgs} args - Arguments to create a Cartao.
     * @example
     * // Create one Cartao
     * const Cartao = await prisma.cartao.create({
     *   data: {
     *     // ... data to create a Cartao
     *   }
     * })
     * 
     */
    create<T extends cartaoCreateArgs>(args: SelectSubset<T, cartaoCreateArgs<ExtArgs>>): Prisma__cartaoClient<$Result.GetResult<Prisma.$cartaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cartaos.
     * @param {cartaoCreateManyArgs} args - Arguments to create many Cartaos.
     * @example
     * // Create many Cartaos
     * const cartao = await prisma.cartao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartaoCreateManyArgs>(args?: SelectSubset<T, cartaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cartao.
     * @param {cartaoDeleteArgs} args - Arguments to delete one Cartao.
     * @example
     * // Delete one Cartao
     * const Cartao = await prisma.cartao.delete({
     *   where: {
     *     // ... filter to delete one Cartao
     *   }
     * })
     * 
     */
    delete<T extends cartaoDeleteArgs>(args: SelectSubset<T, cartaoDeleteArgs<ExtArgs>>): Prisma__cartaoClient<$Result.GetResult<Prisma.$cartaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cartao.
     * @param {cartaoUpdateArgs} args - Arguments to update one Cartao.
     * @example
     * // Update one Cartao
     * const cartao = await prisma.cartao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartaoUpdateArgs>(args: SelectSubset<T, cartaoUpdateArgs<ExtArgs>>): Prisma__cartaoClient<$Result.GetResult<Prisma.$cartaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cartaos.
     * @param {cartaoDeleteManyArgs} args - Arguments to filter Cartaos to delete.
     * @example
     * // Delete a few Cartaos
     * const { count } = await prisma.cartao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartaoDeleteManyArgs>(args?: SelectSubset<T, cartaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cartaos
     * const cartao = await prisma.cartao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartaoUpdateManyArgs>(args: SelectSubset<T, cartaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cartao.
     * @param {cartaoUpsertArgs} args - Arguments to update or create a Cartao.
     * @example
     * // Update or create a Cartao
     * const cartao = await prisma.cartao.upsert({
     *   create: {
     *     // ... data to create a Cartao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cartao we want to update
     *   }
     * })
     */
    upsert<T extends cartaoUpsertArgs>(args: SelectSubset<T, cartaoUpsertArgs<ExtArgs>>): Prisma__cartaoClient<$Result.GetResult<Prisma.$cartaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cartaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartaoCountArgs} args - Arguments to filter Cartaos to count.
     * @example
     * // Count the number of Cartaos
     * const count = await prisma.cartao.count({
     *   where: {
     *     // ... the filter for the Cartaos we want to count
     *   }
     * })
    **/
    count<T extends cartaoCountArgs>(
      args?: Subset<T, cartaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cartao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartaoAggregateArgs>(args: Subset<T, CartaoAggregateArgs>): Prisma.PrismaPromise<GetCartaoAggregateType<T>>

    /**
     * Group by Cartao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartaoGroupByArgs} args - Group by arguments.
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
      T extends cartaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartaoGroupByArgs['orderBy'] }
        : { orderBy?: cartaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cartaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cartao model
   */
  readonly fields: cartaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cartao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo_pagamento<T extends cartao$tipo_pagamentoArgs<ExtArgs> = {}>(args?: Subset<T, cartao$tipo_pagamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_pagamentoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the cartao model
   */ 
  interface cartaoFieldRefs {
    readonly cartao_id: FieldRef<"cartao", 'Int'>
    readonly cartao_numero: FieldRef<"cartao", 'String'>
    readonly cartao_validade: FieldRef<"cartao", 'DateTime'>
    readonly cartao_cvv: FieldRef<"cartao", 'String'>
    readonly cartao_banco: FieldRef<"cartao", 'String'>
    readonly cartao_nome: FieldRef<"cartao", 'String'>
    readonly cartao_status: FieldRef<"cartao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cartao findUnique
   */
  export type cartaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartao
     */
    select?: cartaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartaoInclude<ExtArgs> | null
    /**
     * Filter, which cartao to fetch.
     */
    where: cartaoWhereUniqueInput
  }

  /**
   * cartao findUniqueOrThrow
   */
  export type cartaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartao
     */
    select?: cartaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartaoInclude<ExtArgs> | null
    /**
     * Filter, which cartao to fetch.
     */
    where: cartaoWhereUniqueInput
  }

  /**
   * cartao findFirst
   */
  export type cartaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartao
     */
    select?: cartaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartaoInclude<ExtArgs> | null
    /**
     * Filter, which cartao to fetch.
     */
    where?: cartaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartaos to fetch.
     */
    orderBy?: cartaoOrderByWithRelationInput | cartaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cartaos.
     */
    cursor?: cartaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cartaos.
     */
    distinct?: CartaoScalarFieldEnum | CartaoScalarFieldEnum[]
  }

  /**
   * cartao findFirstOrThrow
   */
  export type cartaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartao
     */
    select?: cartaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartaoInclude<ExtArgs> | null
    /**
     * Filter, which cartao to fetch.
     */
    where?: cartaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartaos to fetch.
     */
    orderBy?: cartaoOrderByWithRelationInput | cartaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cartaos.
     */
    cursor?: cartaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cartaos.
     */
    distinct?: CartaoScalarFieldEnum | CartaoScalarFieldEnum[]
  }

  /**
   * cartao findMany
   */
  export type cartaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartao
     */
    select?: cartaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartaoInclude<ExtArgs> | null
    /**
     * Filter, which cartaos to fetch.
     */
    where?: cartaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartaos to fetch.
     */
    orderBy?: cartaoOrderByWithRelationInput | cartaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cartaos.
     */
    cursor?: cartaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartaos.
     */
    skip?: number
    distinct?: CartaoScalarFieldEnum | CartaoScalarFieldEnum[]
  }

  /**
   * cartao create
   */
  export type cartaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartao
     */
    select?: cartaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartaoInclude<ExtArgs> | null
    /**
     * The data needed to create a cartao.
     */
    data: XOR<cartaoCreateInput, cartaoUncheckedCreateInput>
  }

  /**
   * cartao createMany
   */
  export type cartaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cartaos.
     */
    data: cartaoCreateManyInput | cartaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cartao update
   */
  export type cartaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartao
     */
    select?: cartaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartaoInclude<ExtArgs> | null
    /**
     * The data needed to update a cartao.
     */
    data: XOR<cartaoUpdateInput, cartaoUncheckedUpdateInput>
    /**
     * Choose, which cartao to update.
     */
    where: cartaoWhereUniqueInput
  }

  /**
   * cartao updateMany
   */
  export type cartaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cartaos.
     */
    data: XOR<cartaoUpdateManyMutationInput, cartaoUncheckedUpdateManyInput>
    /**
     * Filter which cartaos to update
     */
    where?: cartaoWhereInput
  }

  /**
   * cartao upsert
   */
  export type cartaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartao
     */
    select?: cartaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartaoInclude<ExtArgs> | null
    /**
     * The filter to search for the cartao to update in case it exists.
     */
    where: cartaoWhereUniqueInput
    /**
     * In case the cartao found by the `where` argument doesn't exist, create a new cartao with this data.
     */
    create: XOR<cartaoCreateInput, cartaoUncheckedCreateInput>
    /**
     * In case the cartao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartaoUpdateInput, cartaoUncheckedUpdateInput>
  }

  /**
   * cartao delete
   */
  export type cartaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartao
     */
    select?: cartaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartaoInclude<ExtArgs> | null
    /**
     * Filter which cartao to delete.
     */
    where: cartaoWhereUniqueInput
  }

  /**
   * cartao deleteMany
   */
  export type cartaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cartaos to delete
     */
    where?: cartaoWhereInput
  }

  /**
   * cartao.tipo_pagamento
   */
  export type cartao$tipo_pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_pagamento
     */
    select?: tipo_pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_pagamentoInclude<ExtArgs> | null
    where?: tipo_pagamentoWhereInput
    orderBy?: tipo_pagamentoOrderByWithRelationInput | tipo_pagamentoOrderByWithRelationInput[]
    cursor?: tipo_pagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tipo_pagamentoScalarFieldEnum | Tipo_pagamentoScalarFieldEnum[]
  }

  /**
   * cartao without action
   */
  export type cartaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartao
     */
    select?: cartaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartaoInclude<ExtArgs> | null
  }


  /**
   * Model tipo_pagamento
   */

  export type AggregateTipo_pagamento = {
    _count: Tipo_pagamentoCountAggregateOutputType | null
    _avg: Tipo_pagamentoAvgAggregateOutputType | null
    _sum: Tipo_pagamentoSumAggregateOutputType | null
    _min: Tipo_pagamentoMinAggregateOutputType | null
    _max: Tipo_pagamentoMaxAggregateOutputType | null
  }

  export type Tipo_pagamentoAvgAggregateOutputType = {
    tipo_pagamento_id: number | null
    pagamento_id: number | null
    boleto_id: number | null
    deposito_id: number | null
    cartao_id: number | null
    tipo_pagamento_status: number | null
  }

  export type Tipo_pagamentoSumAggregateOutputType = {
    tipo_pagamento_id: number | null
    pagamento_id: number | null
    boleto_id: number | null
    deposito_id: number | null
    cartao_id: number | null
    tipo_pagamento_status: number | null
  }

  export type Tipo_pagamentoMinAggregateOutputType = {
    tipo_pagamento_id: number | null
    pagamento_id: number | null
    boleto_id: number | null
    deposito_id: number | null
    cartao_id: number | null
    tipo_pagamento_status: number | null
  }

  export type Tipo_pagamentoMaxAggregateOutputType = {
    tipo_pagamento_id: number | null
    pagamento_id: number | null
    boleto_id: number | null
    deposito_id: number | null
    cartao_id: number | null
    tipo_pagamento_status: number | null
  }

  export type Tipo_pagamentoCountAggregateOutputType = {
    tipo_pagamento_id: number
    pagamento_id: number
    boleto_id: number
    deposito_id: number
    cartao_id: number
    tipo_pagamento_status: number
    _all: number
  }


  export type Tipo_pagamentoAvgAggregateInputType = {
    tipo_pagamento_id?: true
    pagamento_id?: true
    boleto_id?: true
    deposito_id?: true
    cartao_id?: true
    tipo_pagamento_status?: true
  }

  export type Tipo_pagamentoSumAggregateInputType = {
    tipo_pagamento_id?: true
    pagamento_id?: true
    boleto_id?: true
    deposito_id?: true
    cartao_id?: true
    tipo_pagamento_status?: true
  }

  export type Tipo_pagamentoMinAggregateInputType = {
    tipo_pagamento_id?: true
    pagamento_id?: true
    boleto_id?: true
    deposito_id?: true
    cartao_id?: true
    tipo_pagamento_status?: true
  }

  export type Tipo_pagamentoMaxAggregateInputType = {
    tipo_pagamento_id?: true
    pagamento_id?: true
    boleto_id?: true
    deposito_id?: true
    cartao_id?: true
    tipo_pagamento_status?: true
  }

  export type Tipo_pagamentoCountAggregateInputType = {
    tipo_pagamento_id?: true
    pagamento_id?: true
    boleto_id?: true
    deposito_id?: true
    cartao_id?: true
    tipo_pagamento_status?: true
    _all?: true
  }

  export type Tipo_pagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_pagamento to aggregate.
     */
    where?: tipo_pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_pagamentos to fetch.
     */
    orderBy?: tipo_pagamentoOrderByWithRelationInput | tipo_pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipo_pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipo_pagamentos
    **/
    _count?: true | Tipo_pagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_pagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_pagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_pagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_pagamentoMaxAggregateInputType
  }

  export type GetTipo_pagamentoAggregateType<T extends Tipo_pagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_pagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_pagamento[P]>
      : GetScalarType<T[P], AggregateTipo_pagamento[P]>
  }




  export type tipo_pagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_pagamentoWhereInput
    orderBy?: tipo_pagamentoOrderByWithAggregationInput | tipo_pagamentoOrderByWithAggregationInput[]
    by: Tipo_pagamentoScalarFieldEnum[] | Tipo_pagamentoScalarFieldEnum
    having?: tipo_pagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_pagamentoCountAggregateInputType | true
    _avg?: Tipo_pagamentoAvgAggregateInputType
    _sum?: Tipo_pagamentoSumAggregateInputType
    _min?: Tipo_pagamentoMinAggregateInputType
    _max?: Tipo_pagamentoMaxAggregateInputType
  }

  export type Tipo_pagamentoGroupByOutputType = {
    tipo_pagamento_id: number
    pagamento_id: number
    boleto_id: number
    deposito_id: number
    cartao_id: number
    tipo_pagamento_status: number
    _count: Tipo_pagamentoCountAggregateOutputType | null
    _avg: Tipo_pagamentoAvgAggregateOutputType | null
    _sum: Tipo_pagamentoSumAggregateOutputType | null
    _min: Tipo_pagamentoMinAggregateOutputType | null
    _max: Tipo_pagamentoMaxAggregateOutputType | null
  }

  type GetTipo_pagamentoGroupByPayload<T extends tipo_pagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_pagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_pagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_pagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_pagamentoGroupByOutputType[P]>
        }
      >
    >


  export type tipo_pagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tipo_pagamento_id?: boolean
    pagamento_id?: boolean
    boleto_id?: boolean
    deposito_id?: boolean
    cartao_id?: boolean
    tipo_pagamento_status?: boolean
    pagamento?: boolean | pagamentoDefaultArgs<ExtArgs>
    boleto?: boolean | boletoDefaultArgs<ExtArgs>
    deposito?: boolean | depositoDefaultArgs<ExtArgs>
    cartao?: boolean | cartaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_pagamento"]>


  export type tipo_pagamentoSelectScalar = {
    tipo_pagamento_id?: boolean
    pagamento_id?: boolean
    boleto_id?: boolean
    deposito_id?: boolean
    cartao_id?: boolean
    tipo_pagamento_status?: boolean
  }

  export type tipo_pagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamento?: boolean | pagamentoDefaultArgs<ExtArgs>
    boleto?: boolean | boletoDefaultArgs<ExtArgs>
    deposito?: boolean | depositoDefaultArgs<ExtArgs>
    cartao?: boolean | cartaoDefaultArgs<ExtArgs>
  }

  export type $tipo_pagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipo_pagamento"
    objects: {
      pagamento: Prisma.$pagamentoPayload<ExtArgs>
      boleto: Prisma.$boletoPayload<ExtArgs>
      deposito: Prisma.$depositoPayload<ExtArgs>
      cartao: Prisma.$cartaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tipo_pagamento_id: number
      pagamento_id: number
      boleto_id: number
      deposito_id: number
      cartao_id: number
      tipo_pagamento_status: number
    }, ExtArgs["result"]["tipo_pagamento"]>
    composites: {}
  }

  type tipo_pagamentoGetPayload<S extends boolean | null | undefined | tipo_pagamentoDefaultArgs> = $Result.GetResult<Prisma.$tipo_pagamentoPayload, S>

  type tipo_pagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tipo_pagamentoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tipo_pagamentoCountAggregateInputType | true
    }

  export interface tipo_pagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipo_pagamento'], meta: { name: 'tipo_pagamento' } }
    /**
     * Find zero or one Tipo_pagamento that matches the filter.
     * @param {tipo_pagamentoFindUniqueArgs} args - Arguments to find a Tipo_pagamento
     * @example
     * // Get one Tipo_pagamento
     * const tipo_pagamento = await prisma.tipo_pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipo_pagamentoFindUniqueArgs>(args: SelectSubset<T, tipo_pagamentoFindUniqueArgs<ExtArgs>>): Prisma__tipo_pagamentoClient<$Result.GetResult<Prisma.$tipo_pagamentoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tipo_pagamento that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tipo_pagamentoFindUniqueOrThrowArgs} args - Arguments to find a Tipo_pagamento
     * @example
     * // Get one Tipo_pagamento
     * const tipo_pagamento = await prisma.tipo_pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipo_pagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, tipo_pagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipo_pagamentoClient<$Result.GetResult<Prisma.$tipo_pagamentoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tipo_pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_pagamentoFindFirstArgs} args - Arguments to find a Tipo_pagamento
     * @example
     * // Get one Tipo_pagamento
     * const tipo_pagamento = await prisma.tipo_pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipo_pagamentoFindFirstArgs>(args?: SelectSubset<T, tipo_pagamentoFindFirstArgs<ExtArgs>>): Prisma__tipo_pagamentoClient<$Result.GetResult<Prisma.$tipo_pagamentoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tipo_pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_pagamentoFindFirstOrThrowArgs} args - Arguments to find a Tipo_pagamento
     * @example
     * // Get one Tipo_pagamento
     * const tipo_pagamento = await prisma.tipo_pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipo_pagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, tipo_pagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipo_pagamentoClient<$Result.GetResult<Prisma.$tipo_pagamentoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tipo_pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_pagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_pagamentos
     * const tipo_pagamentos = await prisma.tipo_pagamento.findMany()
     * 
     * // Get first 10 Tipo_pagamentos
     * const tipo_pagamentos = await prisma.tipo_pagamento.findMany({ take: 10 })
     * 
     * // Only select the `tipo_pagamento_id`
     * const tipo_pagamentoWithTipo_pagamento_idOnly = await prisma.tipo_pagamento.findMany({ select: { tipo_pagamento_id: true } })
     * 
     */
    findMany<T extends tipo_pagamentoFindManyArgs>(args?: SelectSubset<T, tipo_pagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_pagamentoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tipo_pagamento.
     * @param {tipo_pagamentoCreateArgs} args - Arguments to create a Tipo_pagamento.
     * @example
     * // Create one Tipo_pagamento
     * const Tipo_pagamento = await prisma.tipo_pagamento.create({
     *   data: {
     *     // ... data to create a Tipo_pagamento
     *   }
     * })
     * 
     */
    create<T extends tipo_pagamentoCreateArgs>(args: SelectSubset<T, tipo_pagamentoCreateArgs<ExtArgs>>): Prisma__tipo_pagamentoClient<$Result.GetResult<Prisma.$tipo_pagamentoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tipo_pagamentos.
     * @param {tipo_pagamentoCreateManyArgs} args - Arguments to create many Tipo_pagamentos.
     * @example
     * // Create many Tipo_pagamentos
     * const tipo_pagamento = await prisma.tipo_pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipo_pagamentoCreateManyArgs>(args?: SelectSubset<T, tipo_pagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipo_pagamento.
     * @param {tipo_pagamentoDeleteArgs} args - Arguments to delete one Tipo_pagamento.
     * @example
     * // Delete one Tipo_pagamento
     * const Tipo_pagamento = await prisma.tipo_pagamento.delete({
     *   where: {
     *     // ... filter to delete one Tipo_pagamento
     *   }
     * })
     * 
     */
    delete<T extends tipo_pagamentoDeleteArgs>(args: SelectSubset<T, tipo_pagamentoDeleteArgs<ExtArgs>>): Prisma__tipo_pagamentoClient<$Result.GetResult<Prisma.$tipo_pagamentoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tipo_pagamento.
     * @param {tipo_pagamentoUpdateArgs} args - Arguments to update one Tipo_pagamento.
     * @example
     * // Update one Tipo_pagamento
     * const tipo_pagamento = await prisma.tipo_pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipo_pagamentoUpdateArgs>(args: SelectSubset<T, tipo_pagamentoUpdateArgs<ExtArgs>>): Prisma__tipo_pagamentoClient<$Result.GetResult<Prisma.$tipo_pagamentoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tipo_pagamentos.
     * @param {tipo_pagamentoDeleteManyArgs} args - Arguments to filter Tipo_pagamentos to delete.
     * @example
     * // Delete a few Tipo_pagamentos
     * const { count } = await prisma.tipo_pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipo_pagamentoDeleteManyArgs>(args?: SelectSubset<T, tipo_pagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_pagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_pagamentos
     * const tipo_pagamento = await prisma.tipo_pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipo_pagamentoUpdateManyArgs>(args: SelectSubset<T, tipo_pagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipo_pagamento.
     * @param {tipo_pagamentoUpsertArgs} args - Arguments to update or create a Tipo_pagamento.
     * @example
     * // Update or create a Tipo_pagamento
     * const tipo_pagamento = await prisma.tipo_pagamento.upsert({
     *   create: {
     *     // ... data to create a Tipo_pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_pagamento we want to update
     *   }
     * })
     */
    upsert<T extends tipo_pagamentoUpsertArgs>(args: SelectSubset<T, tipo_pagamentoUpsertArgs<ExtArgs>>): Prisma__tipo_pagamentoClient<$Result.GetResult<Prisma.$tipo_pagamentoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tipo_pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_pagamentoCountArgs} args - Arguments to filter Tipo_pagamentos to count.
     * @example
     * // Count the number of Tipo_pagamentos
     * const count = await prisma.tipo_pagamento.count({
     *   where: {
     *     // ... the filter for the Tipo_pagamentos we want to count
     *   }
     * })
    **/
    count<T extends tipo_pagamentoCountArgs>(
      args?: Subset<T, tipo_pagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_pagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_pagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tipo_pagamentoAggregateArgs>(args: Subset<T, Tipo_pagamentoAggregateArgs>): Prisma.PrismaPromise<GetTipo_pagamentoAggregateType<T>>

    /**
     * Group by Tipo_pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_pagamentoGroupByArgs} args - Group by arguments.
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
      T extends tipo_pagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipo_pagamentoGroupByArgs['orderBy'] }
        : { orderBy?: tipo_pagamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tipo_pagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_pagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipo_pagamento model
   */
  readonly fields: tipo_pagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipo_pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipo_pagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagamento<T extends pagamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pagamentoDefaultArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    boleto<T extends boletoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, boletoDefaultArgs<ExtArgs>>): Prisma__boletoClient<$Result.GetResult<Prisma.$boletoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    deposito<T extends depositoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, depositoDefaultArgs<ExtArgs>>): Prisma__depositoClient<$Result.GetResult<Prisma.$depositoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    cartao<T extends cartaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cartaoDefaultArgs<ExtArgs>>): Prisma__cartaoClient<$Result.GetResult<Prisma.$cartaoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the tipo_pagamento model
   */ 
  interface tipo_pagamentoFieldRefs {
    readonly tipo_pagamento_id: FieldRef<"tipo_pagamento", 'Int'>
    readonly pagamento_id: FieldRef<"tipo_pagamento", 'Int'>
    readonly boleto_id: FieldRef<"tipo_pagamento", 'Int'>
    readonly deposito_id: FieldRef<"tipo_pagamento", 'Int'>
    readonly cartao_id: FieldRef<"tipo_pagamento", 'Int'>
    readonly tipo_pagamento_status: FieldRef<"tipo_pagamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tipo_pagamento findUnique
   */
  export type tipo_pagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_pagamento
     */
    select?: tipo_pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_pagamento to fetch.
     */
    where: tipo_pagamentoWhereUniqueInput
  }

  /**
   * tipo_pagamento findUniqueOrThrow
   */
  export type tipo_pagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_pagamento
     */
    select?: tipo_pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_pagamento to fetch.
     */
    where: tipo_pagamentoWhereUniqueInput
  }

  /**
   * tipo_pagamento findFirst
   */
  export type tipo_pagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_pagamento
     */
    select?: tipo_pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_pagamento to fetch.
     */
    where?: tipo_pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_pagamentos to fetch.
     */
    orderBy?: tipo_pagamentoOrderByWithRelationInput | tipo_pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_pagamentos.
     */
    cursor?: tipo_pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_pagamentos.
     */
    distinct?: Tipo_pagamentoScalarFieldEnum | Tipo_pagamentoScalarFieldEnum[]
  }

  /**
   * tipo_pagamento findFirstOrThrow
   */
  export type tipo_pagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_pagamento
     */
    select?: tipo_pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_pagamento to fetch.
     */
    where?: tipo_pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_pagamentos to fetch.
     */
    orderBy?: tipo_pagamentoOrderByWithRelationInput | tipo_pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_pagamentos.
     */
    cursor?: tipo_pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_pagamentos.
     */
    distinct?: Tipo_pagamentoScalarFieldEnum | Tipo_pagamentoScalarFieldEnum[]
  }

  /**
   * tipo_pagamento findMany
   */
  export type tipo_pagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_pagamento
     */
    select?: tipo_pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which tipo_pagamentos to fetch.
     */
    where?: tipo_pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_pagamentos to fetch.
     */
    orderBy?: tipo_pagamentoOrderByWithRelationInput | tipo_pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipo_pagamentos.
     */
    cursor?: tipo_pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_pagamentos.
     */
    skip?: number
    distinct?: Tipo_pagamentoScalarFieldEnum | Tipo_pagamentoScalarFieldEnum[]
  }

  /**
   * tipo_pagamento create
   */
  export type tipo_pagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_pagamento
     */
    select?: tipo_pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_pagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a tipo_pagamento.
     */
    data: XOR<tipo_pagamentoCreateInput, tipo_pagamentoUncheckedCreateInput>
  }

  /**
   * tipo_pagamento createMany
   */
  export type tipo_pagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipo_pagamentos.
     */
    data: tipo_pagamentoCreateManyInput | tipo_pagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_pagamento update
   */
  export type tipo_pagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_pagamento
     */
    select?: tipo_pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_pagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a tipo_pagamento.
     */
    data: XOR<tipo_pagamentoUpdateInput, tipo_pagamentoUncheckedUpdateInput>
    /**
     * Choose, which tipo_pagamento to update.
     */
    where: tipo_pagamentoWhereUniqueInput
  }

  /**
   * tipo_pagamento updateMany
   */
  export type tipo_pagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipo_pagamentos.
     */
    data: XOR<tipo_pagamentoUpdateManyMutationInput, tipo_pagamentoUncheckedUpdateManyInput>
    /**
     * Filter which tipo_pagamentos to update
     */
    where?: tipo_pagamentoWhereInput
  }

  /**
   * tipo_pagamento upsert
   */
  export type tipo_pagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_pagamento
     */
    select?: tipo_pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_pagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the tipo_pagamento to update in case it exists.
     */
    where: tipo_pagamentoWhereUniqueInput
    /**
     * In case the tipo_pagamento found by the `where` argument doesn't exist, create a new tipo_pagamento with this data.
     */
    create: XOR<tipo_pagamentoCreateInput, tipo_pagamentoUncheckedCreateInput>
    /**
     * In case the tipo_pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipo_pagamentoUpdateInput, tipo_pagamentoUncheckedUpdateInput>
  }

  /**
   * tipo_pagamento delete
   */
  export type tipo_pagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_pagamento
     */
    select?: tipo_pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_pagamentoInclude<ExtArgs> | null
    /**
     * Filter which tipo_pagamento to delete.
     */
    where: tipo_pagamentoWhereUniqueInput
  }

  /**
   * tipo_pagamento deleteMany
   */
  export type tipo_pagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_pagamentos to delete
     */
    where?: tipo_pagamentoWhereInput
  }

  /**
   * tipo_pagamento without action
   */
  export type tipo_pagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_pagamento
     */
    select?: tipo_pagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_pagamentoInclude<ExtArgs> | null
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


  export const PagamentoScalarFieldEnum: {
    pagamento_id: 'pagamento_id',
    pagamento_tipo: 'pagamento_tipo',
    pagamento_status: 'pagamento_status',
    pagamento_data: 'pagamento_data',
    pagamento_endereco: 'pagamento_endereco'
  };

  export type PagamentoScalarFieldEnum = (typeof PagamentoScalarFieldEnum)[keyof typeof PagamentoScalarFieldEnum]


  export const BoletoScalarFieldEnum: {
    boleto_id: 'boleto_id',
    boleto_numero: 'boleto_numero',
    boleto_vencimento: 'boleto_vencimento',
    boleto_emissao: 'boleto_emissao',
    boleto_status: 'boleto_status'
  };

  export type BoletoScalarFieldEnum = (typeof BoletoScalarFieldEnum)[keyof typeof BoletoScalarFieldEnum]


  export const DepositoScalarFieldEnum: {
    deposito_id: 'deposito_id',
    deposito_banco: 'deposito_banco',
    deposito_valor: 'deposito_valor',
    deposito_agencia: 'deposito_agencia',
    deposito_conta: 'deposito_conta',
    deposito_status: 'deposito_status'
  };

  export type DepositoScalarFieldEnum = (typeof DepositoScalarFieldEnum)[keyof typeof DepositoScalarFieldEnum]


  export const CartaoScalarFieldEnum: {
    cartao_id: 'cartao_id',
    cartao_numero: 'cartao_numero',
    cartao_validade: 'cartao_validade',
    cartao_cvv: 'cartao_cvv',
    cartao_banco: 'cartao_banco',
    cartao_nome: 'cartao_nome',
    cartao_status: 'cartao_status'
  };

  export type CartaoScalarFieldEnum = (typeof CartaoScalarFieldEnum)[keyof typeof CartaoScalarFieldEnum]


  export const Tipo_pagamentoScalarFieldEnum: {
    tipo_pagamento_id: 'tipo_pagamento_id',
    pagamento_id: 'pagamento_id',
    boleto_id: 'boleto_id',
    deposito_id: 'deposito_id',
    cartao_id: 'cartao_id',
    tipo_pagamento_status: 'tipo_pagamento_status'
  };

  export type Tipo_pagamentoScalarFieldEnum = (typeof Tipo_pagamentoScalarFieldEnum)[keyof typeof Tipo_pagamentoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type pagamentoWhereInput = {
    AND?: pagamentoWhereInput | pagamentoWhereInput[]
    OR?: pagamentoWhereInput[]
    NOT?: pagamentoWhereInput | pagamentoWhereInput[]
    pagamento_id?: IntFilter<"pagamento"> | number
    pagamento_tipo?: StringFilter<"pagamento"> | string
    pagamento_status?: IntFilter<"pagamento"> | number
    pagamento_data?: DateTimeFilter<"pagamento"> | Date | string
    pagamento_endereco?: StringFilter<"pagamento"> | string
    tipo_pagamento?: Tipo_pagamentoListRelationFilter
  }

  export type pagamentoOrderByWithRelationInput = {
    pagamento_id?: SortOrder
    pagamento_tipo?: SortOrder
    pagamento_status?: SortOrder
    pagamento_data?: SortOrder
    pagamento_endereco?: SortOrder
    tipo_pagamento?: tipo_pagamentoOrderByRelationAggregateInput
  }

  export type pagamentoWhereUniqueInput = Prisma.AtLeast<{
    pagamento_id?: number
    AND?: pagamentoWhereInput | pagamentoWhereInput[]
    OR?: pagamentoWhereInput[]
    NOT?: pagamentoWhereInput | pagamentoWhereInput[]
    pagamento_tipo?: StringFilter<"pagamento"> | string
    pagamento_status?: IntFilter<"pagamento"> | number
    pagamento_data?: DateTimeFilter<"pagamento"> | Date | string
    pagamento_endereco?: StringFilter<"pagamento"> | string
    tipo_pagamento?: Tipo_pagamentoListRelationFilter
  }, "pagamento_id">

  export type pagamentoOrderByWithAggregationInput = {
    pagamento_id?: SortOrder
    pagamento_tipo?: SortOrder
    pagamento_status?: SortOrder
    pagamento_data?: SortOrder
    pagamento_endereco?: SortOrder
    _count?: pagamentoCountOrderByAggregateInput
    _avg?: pagamentoAvgOrderByAggregateInput
    _max?: pagamentoMaxOrderByAggregateInput
    _min?: pagamentoMinOrderByAggregateInput
    _sum?: pagamentoSumOrderByAggregateInput
  }

  export type pagamentoScalarWhereWithAggregatesInput = {
    AND?: pagamentoScalarWhereWithAggregatesInput | pagamentoScalarWhereWithAggregatesInput[]
    OR?: pagamentoScalarWhereWithAggregatesInput[]
    NOT?: pagamentoScalarWhereWithAggregatesInput | pagamentoScalarWhereWithAggregatesInput[]
    pagamento_id?: IntWithAggregatesFilter<"pagamento"> | number
    pagamento_tipo?: StringWithAggregatesFilter<"pagamento"> | string
    pagamento_status?: IntWithAggregatesFilter<"pagamento"> | number
    pagamento_data?: DateTimeWithAggregatesFilter<"pagamento"> | Date | string
    pagamento_endereco?: StringWithAggregatesFilter<"pagamento"> | string
  }

  export type boletoWhereInput = {
    AND?: boletoWhereInput | boletoWhereInput[]
    OR?: boletoWhereInput[]
    NOT?: boletoWhereInput | boletoWhereInput[]
    boleto_id?: IntFilter<"boleto"> | number
    boleto_numero?: StringFilter<"boleto"> | string
    boleto_vencimento?: DateTimeFilter<"boleto"> | Date | string
    boleto_emissao?: DateTimeFilter<"boleto"> | Date | string
    boleto_status?: IntFilter<"boleto"> | number
    tipo_pagamento?: Tipo_pagamentoListRelationFilter
  }

  export type boletoOrderByWithRelationInput = {
    boleto_id?: SortOrder
    boleto_numero?: SortOrder
    boleto_vencimento?: SortOrder
    boleto_emissao?: SortOrder
    boleto_status?: SortOrder
    tipo_pagamento?: tipo_pagamentoOrderByRelationAggregateInput
  }

  export type boletoWhereUniqueInput = Prisma.AtLeast<{
    boleto_id?: number
    AND?: boletoWhereInput | boletoWhereInput[]
    OR?: boletoWhereInput[]
    NOT?: boletoWhereInput | boletoWhereInput[]
    boleto_numero?: StringFilter<"boleto"> | string
    boleto_vencimento?: DateTimeFilter<"boleto"> | Date | string
    boleto_emissao?: DateTimeFilter<"boleto"> | Date | string
    boleto_status?: IntFilter<"boleto"> | number
    tipo_pagamento?: Tipo_pagamentoListRelationFilter
  }, "boleto_id">

  export type boletoOrderByWithAggregationInput = {
    boleto_id?: SortOrder
    boleto_numero?: SortOrder
    boleto_vencimento?: SortOrder
    boleto_emissao?: SortOrder
    boleto_status?: SortOrder
    _count?: boletoCountOrderByAggregateInput
    _avg?: boletoAvgOrderByAggregateInput
    _max?: boletoMaxOrderByAggregateInput
    _min?: boletoMinOrderByAggregateInput
    _sum?: boletoSumOrderByAggregateInput
  }

  export type boletoScalarWhereWithAggregatesInput = {
    AND?: boletoScalarWhereWithAggregatesInput | boletoScalarWhereWithAggregatesInput[]
    OR?: boletoScalarWhereWithAggregatesInput[]
    NOT?: boletoScalarWhereWithAggregatesInput | boletoScalarWhereWithAggregatesInput[]
    boleto_id?: IntWithAggregatesFilter<"boleto"> | number
    boleto_numero?: StringWithAggregatesFilter<"boleto"> | string
    boleto_vencimento?: DateTimeWithAggregatesFilter<"boleto"> | Date | string
    boleto_emissao?: DateTimeWithAggregatesFilter<"boleto"> | Date | string
    boleto_status?: IntWithAggregatesFilter<"boleto"> | number
  }

  export type depositoWhereInput = {
    AND?: depositoWhereInput | depositoWhereInput[]
    OR?: depositoWhereInput[]
    NOT?: depositoWhereInput | depositoWhereInput[]
    deposito_id?: IntFilter<"deposito"> | number
    deposito_banco?: StringFilter<"deposito"> | string
    deposito_valor?: FloatFilter<"deposito"> | number
    deposito_agencia?: StringFilter<"deposito"> | string
    deposito_conta?: StringFilter<"deposito"> | string
    deposito_status?: IntFilter<"deposito"> | number
    tipo_pagamento?: Tipo_pagamentoListRelationFilter
  }

  export type depositoOrderByWithRelationInput = {
    deposito_id?: SortOrder
    deposito_banco?: SortOrder
    deposito_valor?: SortOrder
    deposito_agencia?: SortOrder
    deposito_conta?: SortOrder
    deposito_status?: SortOrder
    tipo_pagamento?: tipo_pagamentoOrderByRelationAggregateInput
  }

  export type depositoWhereUniqueInput = Prisma.AtLeast<{
    deposito_id?: number
    AND?: depositoWhereInput | depositoWhereInput[]
    OR?: depositoWhereInput[]
    NOT?: depositoWhereInput | depositoWhereInput[]
    deposito_banco?: StringFilter<"deposito"> | string
    deposito_valor?: FloatFilter<"deposito"> | number
    deposito_agencia?: StringFilter<"deposito"> | string
    deposito_conta?: StringFilter<"deposito"> | string
    deposito_status?: IntFilter<"deposito"> | number
    tipo_pagamento?: Tipo_pagamentoListRelationFilter
  }, "deposito_id">

  export type depositoOrderByWithAggregationInput = {
    deposito_id?: SortOrder
    deposito_banco?: SortOrder
    deposito_valor?: SortOrder
    deposito_agencia?: SortOrder
    deposito_conta?: SortOrder
    deposito_status?: SortOrder
    _count?: depositoCountOrderByAggregateInput
    _avg?: depositoAvgOrderByAggregateInput
    _max?: depositoMaxOrderByAggregateInput
    _min?: depositoMinOrderByAggregateInput
    _sum?: depositoSumOrderByAggregateInput
  }

  export type depositoScalarWhereWithAggregatesInput = {
    AND?: depositoScalarWhereWithAggregatesInput | depositoScalarWhereWithAggregatesInput[]
    OR?: depositoScalarWhereWithAggregatesInput[]
    NOT?: depositoScalarWhereWithAggregatesInput | depositoScalarWhereWithAggregatesInput[]
    deposito_id?: IntWithAggregatesFilter<"deposito"> | number
    deposito_banco?: StringWithAggregatesFilter<"deposito"> | string
    deposito_valor?: FloatWithAggregatesFilter<"deposito"> | number
    deposito_agencia?: StringWithAggregatesFilter<"deposito"> | string
    deposito_conta?: StringWithAggregatesFilter<"deposito"> | string
    deposito_status?: IntWithAggregatesFilter<"deposito"> | number
  }

  export type cartaoWhereInput = {
    AND?: cartaoWhereInput | cartaoWhereInput[]
    OR?: cartaoWhereInput[]
    NOT?: cartaoWhereInput | cartaoWhereInput[]
    cartao_id?: IntFilter<"cartao"> | number
    cartao_numero?: StringFilter<"cartao"> | string
    cartao_validade?: DateTimeFilter<"cartao"> | Date | string
    cartao_cvv?: StringFilter<"cartao"> | string
    cartao_banco?: StringFilter<"cartao"> | string
    cartao_nome?: StringFilter<"cartao"> | string
    cartao_status?: IntFilter<"cartao"> | number
    tipo_pagamento?: Tipo_pagamentoListRelationFilter
  }

  export type cartaoOrderByWithRelationInput = {
    cartao_id?: SortOrder
    cartao_numero?: SortOrder
    cartao_validade?: SortOrder
    cartao_cvv?: SortOrder
    cartao_banco?: SortOrder
    cartao_nome?: SortOrder
    cartao_status?: SortOrder
    tipo_pagamento?: tipo_pagamentoOrderByRelationAggregateInput
  }

  export type cartaoWhereUniqueInput = Prisma.AtLeast<{
    cartao_id?: number
    AND?: cartaoWhereInput | cartaoWhereInput[]
    OR?: cartaoWhereInput[]
    NOT?: cartaoWhereInput | cartaoWhereInput[]
    cartao_numero?: StringFilter<"cartao"> | string
    cartao_validade?: DateTimeFilter<"cartao"> | Date | string
    cartao_cvv?: StringFilter<"cartao"> | string
    cartao_banco?: StringFilter<"cartao"> | string
    cartao_nome?: StringFilter<"cartao"> | string
    cartao_status?: IntFilter<"cartao"> | number
    tipo_pagamento?: Tipo_pagamentoListRelationFilter
  }, "cartao_id">

  export type cartaoOrderByWithAggregationInput = {
    cartao_id?: SortOrder
    cartao_numero?: SortOrder
    cartao_validade?: SortOrder
    cartao_cvv?: SortOrder
    cartao_banco?: SortOrder
    cartao_nome?: SortOrder
    cartao_status?: SortOrder
    _count?: cartaoCountOrderByAggregateInput
    _avg?: cartaoAvgOrderByAggregateInput
    _max?: cartaoMaxOrderByAggregateInput
    _min?: cartaoMinOrderByAggregateInput
    _sum?: cartaoSumOrderByAggregateInput
  }

  export type cartaoScalarWhereWithAggregatesInput = {
    AND?: cartaoScalarWhereWithAggregatesInput | cartaoScalarWhereWithAggregatesInput[]
    OR?: cartaoScalarWhereWithAggregatesInput[]
    NOT?: cartaoScalarWhereWithAggregatesInput | cartaoScalarWhereWithAggregatesInput[]
    cartao_id?: IntWithAggregatesFilter<"cartao"> | number
    cartao_numero?: StringWithAggregatesFilter<"cartao"> | string
    cartao_validade?: DateTimeWithAggregatesFilter<"cartao"> | Date | string
    cartao_cvv?: StringWithAggregatesFilter<"cartao"> | string
    cartao_banco?: StringWithAggregatesFilter<"cartao"> | string
    cartao_nome?: StringWithAggregatesFilter<"cartao"> | string
    cartao_status?: IntWithAggregatesFilter<"cartao"> | number
  }

  export type tipo_pagamentoWhereInput = {
    AND?: tipo_pagamentoWhereInput | tipo_pagamentoWhereInput[]
    OR?: tipo_pagamentoWhereInput[]
    NOT?: tipo_pagamentoWhereInput | tipo_pagamentoWhereInput[]
    tipo_pagamento_id?: IntFilter<"tipo_pagamento"> | number
    pagamento_id?: IntFilter<"tipo_pagamento"> | number
    boleto_id?: IntFilter<"tipo_pagamento"> | number
    deposito_id?: IntFilter<"tipo_pagamento"> | number
    cartao_id?: IntFilter<"tipo_pagamento"> | number
    tipo_pagamento_status?: IntFilter<"tipo_pagamento"> | number
    pagamento?: XOR<PagamentoRelationFilter, pagamentoWhereInput>
    boleto?: XOR<BoletoRelationFilter, boletoWhereInput>
    deposito?: XOR<DepositoRelationFilter, depositoWhereInput>
    cartao?: XOR<CartaoRelationFilter, cartaoWhereInput>
  }

  export type tipo_pagamentoOrderByWithRelationInput = {
    tipo_pagamento_id?: SortOrder
    pagamento_id?: SortOrder
    boleto_id?: SortOrder
    deposito_id?: SortOrder
    cartao_id?: SortOrder
    tipo_pagamento_status?: SortOrder
    pagamento?: pagamentoOrderByWithRelationInput
    boleto?: boletoOrderByWithRelationInput
    deposito?: depositoOrderByWithRelationInput
    cartao?: cartaoOrderByWithRelationInput
  }

  export type tipo_pagamentoWhereUniqueInput = Prisma.AtLeast<{
    tipo_pagamento_id?: number
    AND?: tipo_pagamentoWhereInput | tipo_pagamentoWhereInput[]
    OR?: tipo_pagamentoWhereInput[]
    NOT?: tipo_pagamentoWhereInput | tipo_pagamentoWhereInput[]
    pagamento_id?: IntFilter<"tipo_pagamento"> | number
    boleto_id?: IntFilter<"tipo_pagamento"> | number
    deposito_id?: IntFilter<"tipo_pagamento"> | number
    cartao_id?: IntFilter<"tipo_pagamento"> | number
    tipo_pagamento_status?: IntFilter<"tipo_pagamento"> | number
    pagamento?: XOR<PagamentoRelationFilter, pagamentoWhereInput>
    boleto?: XOR<BoletoRelationFilter, boletoWhereInput>
    deposito?: XOR<DepositoRelationFilter, depositoWhereInput>
    cartao?: XOR<CartaoRelationFilter, cartaoWhereInput>
  }, "tipo_pagamento_id">

  export type tipo_pagamentoOrderByWithAggregationInput = {
    tipo_pagamento_id?: SortOrder
    pagamento_id?: SortOrder
    boleto_id?: SortOrder
    deposito_id?: SortOrder
    cartao_id?: SortOrder
    tipo_pagamento_status?: SortOrder
    _count?: tipo_pagamentoCountOrderByAggregateInput
    _avg?: tipo_pagamentoAvgOrderByAggregateInput
    _max?: tipo_pagamentoMaxOrderByAggregateInput
    _min?: tipo_pagamentoMinOrderByAggregateInput
    _sum?: tipo_pagamentoSumOrderByAggregateInput
  }

  export type tipo_pagamentoScalarWhereWithAggregatesInput = {
    AND?: tipo_pagamentoScalarWhereWithAggregatesInput | tipo_pagamentoScalarWhereWithAggregatesInput[]
    OR?: tipo_pagamentoScalarWhereWithAggregatesInput[]
    NOT?: tipo_pagamentoScalarWhereWithAggregatesInput | tipo_pagamentoScalarWhereWithAggregatesInput[]
    tipo_pagamento_id?: IntWithAggregatesFilter<"tipo_pagamento"> | number
    pagamento_id?: IntWithAggregatesFilter<"tipo_pagamento"> | number
    boleto_id?: IntWithAggregatesFilter<"tipo_pagamento"> | number
    deposito_id?: IntWithAggregatesFilter<"tipo_pagamento"> | number
    cartao_id?: IntWithAggregatesFilter<"tipo_pagamento"> | number
    tipo_pagamento_status?: IntWithAggregatesFilter<"tipo_pagamento"> | number
  }

  export type pagamentoCreateInput = {
    pagamento_tipo: string
    pagamento_status: number
    pagamento_data: Date | string
    pagamento_endereco: string
    tipo_pagamento?: tipo_pagamentoCreateNestedManyWithoutPagamentoInput
  }

  export type pagamentoUncheckedCreateInput = {
    pagamento_id?: number
    pagamento_tipo: string
    pagamento_status: number
    pagamento_data: Date | string
    pagamento_endereco: string
    tipo_pagamento?: tipo_pagamentoUncheckedCreateNestedManyWithoutPagamentoInput
  }

  export type pagamentoUpdateInput = {
    pagamento_tipo?: StringFieldUpdateOperationsInput | string
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pagamento_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento_endereco?: StringFieldUpdateOperationsInput | string
    tipo_pagamento?: tipo_pagamentoUpdateManyWithoutPagamentoNestedInput
  }

  export type pagamentoUncheckedUpdateInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_tipo?: StringFieldUpdateOperationsInput | string
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pagamento_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento_endereco?: StringFieldUpdateOperationsInput | string
    tipo_pagamento?: tipo_pagamentoUncheckedUpdateManyWithoutPagamentoNestedInput
  }

  export type pagamentoCreateManyInput = {
    pagamento_id?: number
    pagamento_tipo: string
    pagamento_status: number
    pagamento_data: Date | string
    pagamento_endereco: string
  }

  export type pagamentoUpdateManyMutationInput = {
    pagamento_tipo?: StringFieldUpdateOperationsInput | string
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pagamento_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento_endereco?: StringFieldUpdateOperationsInput | string
  }

  export type pagamentoUncheckedUpdateManyInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_tipo?: StringFieldUpdateOperationsInput | string
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pagamento_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento_endereco?: StringFieldUpdateOperationsInput | string
  }

  export type boletoCreateInput = {
    boleto_id: number
    boleto_numero: string
    boleto_vencimento: Date | string
    boleto_emissao: Date | string
    boleto_status: number
    tipo_pagamento?: tipo_pagamentoCreateNestedManyWithoutBoletoInput
  }

  export type boletoUncheckedCreateInput = {
    boleto_id: number
    boleto_numero: string
    boleto_vencimento: Date | string
    boleto_emissao: Date | string
    boleto_status: number
    tipo_pagamento?: tipo_pagamentoUncheckedCreateNestedManyWithoutBoletoInput
  }

  export type boletoUpdateInput = {
    boleto_id?: IntFieldUpdateOperationsInput | number
    boleto_numero?: StringFieldUpdateOperationsInput | string
    boleto_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    boleto_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    boleto_status?: IntFieldUpdateOperationsInput | number
    tipo_pagamento?: tipo_pagamentoUpdateManyWithoutBoletoNestedInput
  }

  export type boletoUncheckedUpdateInput = {
    boleto_id?: IntFieldUpdateOperationsInput | number
    boleto_numero?: StringFieldUpdateOperationsInput | string
    boleto_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    boleto_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    boleto_status?: IntFieldUpdateOperationsInput | number
    tipo_pagamento?: tipo_pagamentoUncheckedUpdateManyWithoutBoletoNestedInput
  }

  export type boletoCreateManyInput = {
    boleto_id: number
    boleto_numero: string
    boleto_vencimento: Date | string
    boleto_emissao: Date | string
    boleto_status: number
  }

  export type boletoUpdateManyMutationInput = {
    boleto_id?: IntFieldUpdateOperationsInput | number
    boleto_numero?: StringFieldUpdateOperationsInput | string
    boleto_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    boleto_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    boleto_status?: IntFieldUpdateOperationsInput | number
  }

  export type boletoUncheckedUpdateManyInput = {
    boleto_id?: IntFieldUpdateOperationsInput | number
    boleto_numero?: StringFieldUpdateOperationsInput | string
    boleto_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    boleto_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    boleto_status?: IntFieldUpdateOperationsInput | number
  }

  export type depositoCreateInput = {
    deposito_id: number
    deposito_banco: string
    deposito_valor: number
    deposito_agencia: string
    deposito_conta: string
    deposito_status: number
    tipo_pagamento?: tipo_pagamentoCreateNestedManyWithoutDepositoInput
  }

  export type depositoUncheckedCreateInput = {
    deposito_id: number
    deposito_banco: string
    deposito_valor: number
    deposito_agencia: string
    deposito_conta: string
    deposito_status: number
    tipo_pagamento?: tipo_pagamentoUncheckedCreateNestedManyWithoutDepositoInput
  }

  export type depositoUpdateInput = {
    deposito_id?: IntFieldUpdateOperationsInput | number
    deposito_banco?: StringFieldUpdateOperationsInput | string
    deposito_valor?: FloatFieldUpdateOperationsInput | number
    deposito_agencia?: StringFieldUpdateOperationsInput | string
    deposito_conta?: StringFieldUpdateOperationsInput | string
    deposito_status?: IntFieldUpdateOperationsInput | number
    tipo_pagamento?: tipo_pagamentoUpdateManyWithoutDepositoNestedInput
  }

  export type depositoUncheckedUpdateInput = {
    deposito_id?: IntFieldUpdateOperationsInput | number
    deposito_banco?: StringFieldUpdateOperationsInput | string
    deposito_valor?: FloatFieldUpdateOperationsInput | number
    deposito_agencia?: StringFieldUpdateOperationsInput | string
    deposito_conta?: StringFieldUpdateOperationsInput | string
    deposito_status?: IntFieldUpdateOperationsInput | number
    tipo_pagamento?: tipo_pagamentoUncheckedUpdateManyWithoutDepositoNestedInput
  }

  export type depositoCreateManyInput = {
    deposito_id: number
    deposito_banco: string
    deposito_valor: number
    deposito_agencia: string
    deposito_conta: string
    deposito_status: number
  }

  export type depositoUpdateManyMutationInput = {
    deposito_id?: IntFieldUpdateOperationsInput | number
    deposito_banco?: StringFieldUpdateOperationsInput | string
    deposito_valor?: FloatFieldUpdateOperationsInput | number
    deposito_agencia?: StringFieldUpdateOperationsInput | string
    deposito_conta?: StringFieldUpdateOperationsInput | string
    deposito_status?: IntFieldUpdateOperationsInput | number
  }

  export type depositoUncheckedUpdateManyInput = {
    deposito_id?: IntFieldUpdateOperationsInput | number
    deposito_banco?: StringFieldUpdateOperationsInput | string
    deposito_valor?: FloatFieldUpdateOperationsInput | number
    deposito_agencia?: StringFieldUpdateOperationsInput | string
    deposito_conta?: StringFieldUpdateOperationsInput | string
    deposito_status?: IntFieldUpdateOperationsInput | number
  }

  export type cartaoCreateInput = {
    cartao_numero: string
    cartao_validade: Date | string
    cartao_cvv: string
    cartao_banco: string
    cartao_nome: string
    cartao_status: number
    tipo_pagamento?: tipo_pagamentoCreateNestedManyWithoutCartaoInput
  }

  export type cartaoUncheckedCreateInput = {
    cartao_id?: number
    cartao_numero: string
    cartao_validade: Date | string
    cartao_cvv: string
    cartao_banco: string
    cartao_nome: string
    cartao_status: number
    tipo_pagamento?: tipo_pagamentoUncheckedCreateNestedManyWithoutCartaoInput
  }

  export type cartaoUpdateInput = {
    cartao_numero?: StringFieldUpdateOperationsInput | string
    cartao_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    cartao_cvv?: StringFieldUpdateOperationsInput | string
    cartao_banco?: StringFieldUpdateOperationsInput | string
    cartao_nome?: StringFieldUpdateOperationsInput | string
    cartao_status?: IntFieldUpdateOperationsInput | number
    tipo_pagamento?: tipo_pagamentoUpdateManyWithoutCartaoNestedInput
  }

  export type cartaoUncheckedUpdateInput = {
    cartao_id?: IntFieldUpdateOperationsInput | number
    cartao_numero?: StringFieldUpdateOperationsInput | string
    cartao_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    cartao_cvv?: StringFieldUpdateOperationsInput | string
    cartao_banco?: StringFieldUpdateOperationsInput | string
    cartao_nome?: StringFieldUpdateOperationsInput | string
    cartao_status?: IntFieldUpdateOperationsInput | number
    tipo_pagamento?: tipo_pagamentoUncheckedUpdateManyWithoutCartaoNestedInput
  }

  export type cartaoCreateManyInput = {
    cartao_id?: number
    cartao_numero: string
    cartao_validade: Date | string
    cartao_cvv: string
    cartao_banco: string
    cartao_nome: string
    cartao_status: number
  }

  export type cartaoUpdateManyMutationInput = {
    cartao_numero?: StringFieldUpdateOperationsInput | string
    cartao_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    cartao_cvv?: StringFieldUpdateOperationsInput | string
    cartao_banco?: StringFieldUpdateOperationsInput | string
    cartao_nome?: StringFieldUpdateOperationsInput | string
    cartao_status?: IntFieldUpdateOperationsInput | number
  }

  export type cartaoUncheckedUpdateManyInput = {
    cartao_id?: IntFieldUpdateOperationsInput | number
    cartao_numero?: StringFieldUpdateOperationsInput | string
    cartao_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    cartao_cvv?: StringFieldUpdateOperationsInput | string
    cartao_banco?: StringFieldUpdateOperationsInput | string
    cartao_nome?: StringFieldUpdateOperationsInput | string
    cartao_status?: IntFieldUpdateOperationsInput | number
  }

  export type tipo_pagamentoCreateInput = {
    tipo_pagamento_id: number
    tipo_pagamento_status: number
    pagamento: pagamentoCreateNestedOneWithoutTipo_pagamentoInput
    boleto: boletoCreateNestedOneWithoutTipo_pagamentoInput
    deposito: depositoCreateNestedOneWithoutTipo_pagamentoInput
    cartao: cartaoCreateNestedOneWithoutTipo_pagamentoInput
  }

  export type tipo_pagamentoUncheckedCreateInput = {
    tipo_pagamento_id: number
    pagamento_id: number
    boleto_id: number
    deposito_id: number
    cartao_id: number
    tipo_pagamento_status: number
  }

  export type tipo_pagamentoUpdateInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
    pagamento?: pagamentoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
    boleto?: boletoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
    deposito?: depositoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
    cartao?: cartaoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
  }

  export type tipo_pagamentoUncheckedUpdateInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_id?: IntFieldUpdateOperationsInput | number
    boleto_id?: IntFieldUpdateOperationsInput | number
    deposito_id?: IntFieldUpdateOperationsInput | number
    cartao_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
  }

  export type tipo_pagamentoCreateManyInput = {
    tipo_pagamento_id: number
    pagamento_id: number
    boleto_id: number
    deposito_id: number
    cartao_id: number
    tipo_pagamento_status: number
  }

  export type tipo_pagamentoUpdateManyMutationInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
  }

  export type tipo_pagamentoUncheckedUpdateManyInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_id?: IntFieldUpdateOperationsInput | number
    boleto_id?: IntFieldUpdateOperationsInput | number
    deposito_id?: IntFieldUpdateOperationsInput | number
    cartao_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Tipo_pagamentoListRelationFilter = {
    every?: tipo_pagamentoWhereInput
    some?: tipo_pagamentoWhereInput
    none?: tipo_pagamentoWhereInput
  }

  export type tipo_pagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pagamentoCountOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_tipo?: SortOrder
    pagamento_status?: SortOrder
    pagamento_data?: SortOrder
    pagamento_endereco?: SortOrder
  }

  export type pagamentoAvgOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_status?: SortOrder
  }

  export type pagamentoMaxOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_tipo?: SortOrder
    pagamento_status?: SortOrder
    pagamento_data?: SortOrder
    pagamento_endereco?: SortOrder
  }

  export type pagamentoMinOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_tipo?: SortOrder
    pagamento_status?: SortOrder
    pagamento_data?: SortOrder
    pagamento_endereco?: SortOrder
  }

  export type pagamentoSumOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type boletoCountOrderByAggregateInput = {
    boleto_id?: SortOrder
    boleto_numero?: SortOrder
    boleto_vencimento?: SortOrder
    boleto_emissao?: SortOrder
    boleto_status?: SortOrder
  }

  export type boletoAvgOrderByAggregateInput = {
    boleto_id?: SortOrder
    boleto_status?: SortOrder
  }

  export type boletoMaxOrderByAggregateInput = {
    boleto_id?: SortOrder
    boleto_numero?: SortOrder
    boleto_vencimento?: SortOrder
    boleto_emissao?: SortOrder
    boleto_status?: SortOrder
  }

  export type boletoMinOrderByAggregateInput = {
    boleto_id?: SortOrder
    boleto_numero?: SortOrder
    boleto_vencimento?: SortOrder
    boleto_emissao?: SortOrder
    boleto_status?: SortOrder
  }

  export type boletoSumOrderByAggregateInput = {
    boleto_id?: SortOrder
    boleto_status?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type depositoCountOrderByAggregateInput = {
    deposito_id?: SortOrder
    deposito_banco?: SortOrder
    deposito_valor?: SortOrder
    deposito_agencia?: SortOrder
    deposito_conta?: SortOrder
    deposito_status?: SortOrder
  }

  export type depositoAvgOrderByAggregateInput = {
    deposito_id?: SortOrder
    deposito_valor?: SortOrder
    deposito_status?: SortOrder
  }

  export type depositoMaxOrderByAggregateInput = {
    deposito_id?: SortOrder
    deposito_banco?: SortOrder
    deposito_valor?: SortOrder
    deposito_agencia?: SortOrder
    deposito_conta?: SortOrder
    deposito_status?: SortOrder
  }

  export type depositoMinOrderByAggregateInput = {
    deposito_id?: SortOrder
    deposito_banco?: SortOrder
    deposito_valor?: SortOrder
    deposito_agencia?: SortOrder
    deposito_conta?: SortOrder
    deposito_status?: SortOrder
  }

  export type depositoSumOrderByAggregateInput = {
    deposito_id?: SortOrder
    deposito_valor?: SortOrder
    deposito_status?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type cartaoCountOrderByAggregateInput = {
    cartao_id?: SortOrder
    cartao_numero?: SortOrder
    cartao_validade?: SortOrder
    cartao_cvv?: SortOrder
    cartao_banco?: SortOrder
    cartao_nome?: SortOrder
    cartao_status?: SortOrder
  }

  export type cartaoAvgOrderByAggregateInput = {
    cartao_id?: SortOrder
    cartao_status?: SortOrder
  }

  export type cartaoMaxOrderByAggregateInput = {
    cartao_id?: SortOrder
    cartao_numero?: SortOrder
    cartao_validade?: SortOrder
    cartao_cvv?: SortOrder
    cartao_banco?: SortOrder
    cartao_nome?: SortOrder
    cartao_status?: SortOrder
  }

  export type cartaoMinOrderByAggregateInput = {
    cartao_id?: SortOrder
    cartao_numero?: SortOrder
    cartao_validade?: SortOrder
    cartao_cvv?: SortOrder
    cartao_banco?: SortOrder
    cartao_nome?: SortOrder
    cartao_status?: SortOrder
  }

  export type cartaoSumOrderByAggregateInput = {
    cartao_id?: SortOrder
    cartao_status?: SortOrder
  }

  export type PagamentoRelationFilter = {
    is?: pagamentoWhereInput
    isNot?: pagamentoWhereInput
  }

  export type BoletoRelationFilter = {
    is?: boletoWhereInput
    isNot?: boletoWhereInput
  }

  export type DepositoRelationFilter = {
    is?: depositoWhereInput
    isNot?: depositoWhereInput
  }

  export type CartaoRelationFilter = {
    is?: cartaoWhereInput
    isNot?: cartaoWhereInput
  }

  export type tipo_pagamentoCountOrderByAggregateInput = {
    tipo_pagamento_id?: SortOrder
    pagamento_id?: SortOrder
    boleto_id?: SortOrder
    deposito_id?: SortOrder
    cartao_id?: SortOrder
    tipo_pagamento_status?: SortOrder
  }

  export type tipo_pagamentoAvgOrderByAggregateInput = {
    tipo_pagamento_id?: SortOrder
    pagamento_id?: SortOrder
    boleto_id?: SortOrder
    deposito_id?: SortOrder
    cartao_id?: SortOrder
    tipo_pagamento_status?: SortOrder
  }

  export type tipo_pagamentoMaxOrderByAggregateInput = {
    tipo_pagamento_id?: SortOrder
    pagamento_id?: SortOrder
    boleto_id?: SortOrder
    deposito_id?: SortOrder
    cartao_id?: SortOrder
    tipo_pagamento_status?: SortOrder
  }

  export type tipo_pagamentoMinOrderByAggregateInput = {
    tipo_pagamento_id?: SortOrder
    pagamento_id?: SortOrder
    boleto_id?: SortOrder
    deposito_id?: SortOrder
    cartao_id?: SortOrder
    tipo_pagamento_status?: SortOrder
  }

  export type tipo_pagamentoSumOrderByAggregateInput = {
    tipo_pagamento_id?: SortOrder
    pagamento_id?: SortOrder
    boleto_id?: SortOrder
    deposito_id?: SortOrder
    cartao_id?: SortOrder
    tipo_pagamento_status?: SortOrder
  }

  export type tipo_pagamentoCreateNestedManyWithoutPagamentoInput = {
    create?: XOR<tipo_pagamentoCreateWithoutPagamentoInput, tipo_pagamentoUncheckedCreateWithoutPagamentoInput> | tipo_pagamentoCreateWithoutPagamentoInput[] | tipo_pagamentoUncheckedCreateWithoutPagamentoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutPagamentoInput | tipo_pagamentoCreateOrConnectWithoutPagamentoInput[]
    createMany?: tipo_pagamentoCreateManyPagamentoInputEnvelope
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
  }

  export type tipo_pagamentoUncheckedCreateNestedManyWithoutPagamentoInput = {
    create?: XOR<tipo_pagamentoCreateWithoutPagamentoInput, tipo_pagamentoUncheckedCreateWithoutPagamentoInput> | tipo_pagamentoCreateWithoutPagamentoInput[] | tipo_pagamentoUncheckedCreateWithoutPagamentoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutPagamentoInput | tipo_pagamentoCreateOrConnectWithoutPagamentoInput[]
    createMany?: tipo_pagamentoCreateManyPagamentoInputEnvelope
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tipo_pagamentoUpdateManyWithoutPagamentoNestedInput = {
    create?: XOR<tipo_pagamentoCreateWithoutPagamentoInput, tipo_pagamentoUncheckedCreateWithoutPagamentoInput> | tipo_pagamentoCreateWithoutPagamentoInput[] | tipo_pagamentoUncheckedCreateWithoutPagamentoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutPagamentoInput | tipo_pagamentoCreateOrConnectWithoutPagamentoInput[]
    upsert?: tipo_pagamentoUpsertWithWhereUniqueWithoutPagamentoInput | tipo_pagamentoUpsertWithWhereUniqueWithoutPagamentoInput[]
    createMany?: tipo_pagamentoCreateManyPagamentoInputEnvelope
    set?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    disconnect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    delete?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    update?: tipo_pagamentoUpdateWithWhereUniqueWithoutPagamentoInput | tipo_pagamentoUpdateWithWhereUniqueWithoutPagamentoInput[]
    updateMany?: tipo_pagamentoUpdateManyWithWhereWithoutPagamentoInput | tipo_pagamentoUpdateManyWithWhereWithoutPagamentoInput[]
    deleteMany?: tipo_pagamentoScalarWhereInput | tipo_pagamentoScalarWhereInput[]
  }

  export type tipo_pagamentoUncheckedUpdateManyWithoutPagamentoNestedInput = {
    create?: XOR<tipo_pagamentoCreateWithoutPagamentoInput, tipo_pagamentoUncheckedCreateWithoutPagamentoInput> | tipo_pagamentoCreateWithoutPagamentoInput[] | tipo_pagamentoUncheckedCreateWithoutPagamentoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutPagamentoInput | tipo_pagamentoCreateOrConnectWithoutPagamentoInput[]
    upsert?: tipo_pagamentoUpsertWithWhereUniqueWithoutPagamentoInput | tipo_pagamentoUpsertWithWhereUniqueWithoutPagamentoInput[]
    createMany?: tipo_pagamentoCreateManyPagamentoInputEnvelope
    set?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    disconnect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    delete?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    update?: tipo_pagamentoUpdateWithWhereUniqueWithoutPagamentoInput | tipo_pagamentoUpdateWithWhereUniqueWithoutPagamentoInput[]
    updateMany?: tipo_pagamentoUpdateManyWithWhereWithoutPagamentoInput | tipo_pagamentoUpdateManyWithWhereWithoutPagamentoInput[]
    deleteMany?: tipo_pagamentoScalarWhereInput | tipo_pagamentoScalarWhereInput[]
  }

  export type tipo_pagamentoCreateNestedManyWithoutBoletoInput = {
    create?: XOR<tipo_pagamentoCreateWithoutBoletoInput, tipo_pagamentoUncheckedCreateWithoutBoletoInput> | tipo_pagamentoCreateWithoutBoletoInput[] | tipo_pagamentoUncheckedCreateWithoutBoletoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutBoletoInput | tipo_pagamentoCreateOrConnectWithoutBoletoInput[]
    createMany?: tipo_pagamentoCreateManyBoletoInputEnvelope
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
  }

  export type tipo_pagamentoUncheckedCreateNestedManyWithoutBoletoInput = {
    create?: XOR<tipo_pagamentoCreateWithoutBoletoInput, tipo_pagamentoUncheckedCreateWithoutBoletoInput> | tipo_pagamentoCreateWithoutBoletoInput[] | tipo_pagamentoUncheckedCreateWithoutBoletoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutBoletoInput | tipo_pagamentoCreateOrConnectWithoutBoletoInput[]
    createMany?: tipo_pagamentoCreateManyBoletoInputEnvelope
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
  }

  export type tipo_pagamentoUpdateManyWithoutBoletoNestedInput = {
    create?: XOR<tipo_pagamentoCreateWithoutBoletoInput, tipo_pagamentoUncheckedCreateWithoutBoletoInput> | tipo_pagamentoCreateWithoutBoletoInput[] | tipo_pagamentoUncheckedCreateWithoutBoletoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutBoletoInput | tipo_pagamentoCreateOrConnectWithoutBoletoInput[]
    upsert?: tipo_pagamentoUpsertWithWhereUniqueWithoutBoletoInput | tipo_pagamentoUpsertWithWhereUniqueWithoutBoletoInput[]
    createMany?: tipo_pagamentoCreateManyBoletoInputEnvelope
    set?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    disconnect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    delete?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    update?: tipo_pagamentoUpdateWithWhereUniqueWithoutBoletoInput | tipo_pagamentoUpdateWithWhereUniqueWithoutBoletoInput[]
    updateMany?: tipo_pagamentoUpdateManyWithWhereWithoutBoletoInput | tipo_pagamentoUpdateManyWithWhereWithoutBoletoInput[]
    deleteMany?: tipo_pagamentoScalarWhereInput | tipo_pagamentoScalarWhereInput[]
  }

  export type tipo_pagamentoUncheckedUpdateManyWithoutBoletoNestedInput = {
    create?: XOR<tipo_pagamentoCreateWithoutBoletoInput, tipo_pagamentoUncheckedCreateWithoutBoletoInput> | tipo_pagamentoCreateWithoutBoletoInput[] | tipo_pagamentoUncheckedCreateWithoutBoletoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutBoletoInput | tipo_pagamentoCreateOrConnectWithoutBoletoInput[]
    upsert?: tipo_pagamentoUpsertWithWhereUniqueWithoutBoletoInput | tipo_pagamentoUpsertWithWhereUniqueWithoutBoletoInput[]
    createMany?: tipo_pagamentoCreateManyBoletoInputEnvelope
    set?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    disconnect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    delete?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    update?: tipo_pagamentoUpdateWithWhereUniqueWithoutBoletoInput | tipo_pagamentoUpdateWithWhereUniqueWithoutBoletoInput[]
    updateMany?: tipo_pagamentoUpdateManyWithWhereWithoutBoletoInput | tipo_pagamentoUpdateManyWithWhereWithoutBoletoInput[]
    deleteMany?: tipo_pagamentoScalarWhereInput | tipo_pagamentoScalarWhereInput[]
  }

  export type tipo_pagamentoCreateNestedManyWithoutDepositoInput = {
    create?: XOR<tipo_pagamentoCreateWithoutDepositoInput, tipo_pagamentoUncheckedCreateWithoutDepositoInput> | tipo_pagamentoCreateWithoutDepositoInput[] | tipo_pagamentoUncheckedCreateWithoutDepositoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutDepositoInput | tipo_pagamentoCreateOrConnectWithoutDepositoInput[]
    createMany?: tipo_pagamentoCreateManyDepositoInputEnvelope
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
  }

  export type tipo_pagamentoUncheckedCreateNestedManyWithoutDepositoInput = {
    create?: XOR<tipo_pagamentoCreateWithoutDepositoInput, tipo_pagamentoUncheckedCreateWithoutDepositoInput> | tipo_pagamentoCreateWithoutDepositoInput[] | tipo_pagamentoUncheckedCreateWithoutDepositoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutDepositoInput | tipo_pagamentoCreateOrConnectWithoutDepositoInput[]
    createMany?: tipo_pagamentoCreateManyDepositoInputEnvelope
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tipo_pagamentoUpdateManyWithoutDepositoNestedInput = {
    create?: XOR<tipo_pagamentoCreateWithoutDepositoInput, tipo_pagamentoUncheckedCreateWithoutDepositoInput> | tipo_pagamentoCreateWithoutDepositoInput[] | tipo_pagamentoUncheckedCreateWithoutDepositoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutDepositoInput | tipo_pagamentoCreateOrConnectWithoutDepositoInput[]
    upsert?: tipo_pagamentoUpsertWithWhereUniqueWithoutDepositoInput | tipo_pagamentoUpsertWithWhereUniqueWithoutDepositoInput[]
    createMany?: tipo_pagamentoCreateManyDepositoInputEnvelope
    set?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    disconnect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    delete?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    update?: tipo_pagamentoUpdateWithWhereUniqueWithoutDepositoInput | tipo_pagamentoUpdateWithWhereUniqueWithoutDepositoInput[]
    updateMany?: tipo_pagamentoUpdateManyWithWhereWithoutDepositoInput | tipo_pagamentoUpdateManyWithWhereWithoutDepositoInput[]
    deleteMany?: tipo_pagamentoScalarWhereInput | tipo_pagamentoScalarWhereInput[]
  }

  export type tipo_pagamentoUncheckedUpdateManyWithoutDepositoNestedInput = {
    create?: XOR<tipo_pagamentoCreateWithoutDepositoInput, tipo_pagamentoUncheckedCreateWithoutDepositoInput> | tipo_pagamentoCreateWithoutDepositoInput[] | tipo_pagamentoUncheckedCreateWithoutDepositoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutDepositoInput | tipo_pagamentoCreateOrConnectWithoutDepositoInput[]
    upsert?: tipo_pagamentoUpsertWithWhereUniqueWithoutDepositoInput | tipo_pagamentoUpsertWithWhereUniqueWithoutDepositoInput[]
    createMany?: tipo_pagamentoCreateManyDepositoInputEnvelope
    set?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    disconnect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    delete?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    update?: tipo_pagamentoUpdateWithWhereUniqueWithoutDepositoInput | tipo_pagamentoUpdateWithWhereUniqueWithoutDepositoInput[]
    updateMany?: tipo_pagamentoUpdateManyWithWhereWithoutDepositoInput | tipo_pagamentoUpdateManyWithWhereWithoutDepositoInput[]
    deleteMany?: tipo_pagamentoScalarWhereInput | tipo_pagamentoScalarWhereInput[]
  }

  export type tipo_pagamentoCreateNestedManyWithoutCartaoInput = {
    create?: XOR<tipo_pagamentoCreateWithoutCartaoInput, tipo_pagamentoUncheckedCreateWithoutCartaoInput> | tipo_pagamentoCreateWithoutCartaoInput[] | tipo_pagamentoUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutCartaoInput | tipo_pagamentoCreateOrConnectWithoutCartaoInput[]
    createMany?: tipo_pagamentoCreateManyCartaoInputEnvelope
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
  }

  export type tipo_pagamentoUncheckedCreateNestedManyWithoutCartaoInput = {
    create?: XOR<tipo_pagamentoCreateWithoutCartaoInput, tipo_pagamentoUncheckedCreateWithoutCartaoInput> | tipo_pagamentoCreateWithoutCartaoInput[] | tipo_pagamentoUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutCartaoInput | tipo_pagamentoCreateOrConnectWithoutCartaoInput[]
    createMany?: tipo_pagamentoCreateManyCartaoInputEnvelope
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
  }

  export type tipo_pagamentoUpdateManyWithoutCartaoNestedInput = {
    create?: XOR<tipo_pagamentoCreateWithoutCartaoInput, tipo_pagamentoUncheckedCreateWithoutCartaoInput> | tipo_pagamentoCreateWithoutCartaoInput[] | tipo_pagamentoUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutCartaoInput | tipo_pagamentoCreateOrConnectWithoutCartaoInput[]
    upsert?: tipo_pagamentoUpsertWithWhereUniqueWithoutCartaoInput | tipo_pagamentoUpsertWithWhereUniqueWithoutCartaoInput[]
    createMany?: tipo_pagamentoCreateManyCartaoInputEnvelope
    set?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    disconnect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    delete?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    update?: tipo_pagamentoUpdateWithWhereUniqueWithoutCartaoInput | tipo_pagamentoUpdateWithWhereUniqueWithoutCartaoInput[]
    updateMany?: tipo_pagamentoUpdateManyWithWhereWithoutCartaoInput | tipo_pagamentoUpdateManyWithWhereWithoutCartaoInput[]
    deleteMany?: tipo_pagamentoScalarWhereInput | tipo_pagamentoScalarWhereInput[]
  }

  export type tipo_pagamentoUncheckedUpdateManyWithoutCartaoNestedInput = {
    create?: XOR<tipo_pagamentoCreateWithoutCartaoInput, tipo_pagamentoUncheckedCreateWithoutCartaoInput> | tipo_pagamentoCreateWithoutCartaoInput[] | tipo_pagamentoUncheckedCreateWithoutCartaoInput[]
    connectOrCreate?: tipo_pagamentoCreateOrConnectWithoutCartaoInput | tipo_pagamentoCreateOrConnectWithoutCartaoInput[]
    upsert?: tipo_pagamentoUpsertWithWhereUniqueWithoutCartaoInput | tipo_pagamentoUpsertWithWhereUniqueWithoutCartaoInput[]
    createMany?: tipo_pagamentoCreateManyCartaoInputEnvelope
    set?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    disconnect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    delete?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    connect?: tipo_pagamentoWhereUniqueInput | tipo_pagamentoWhereUniqueInput[]
    update?: tipo_pagamentoUpdateWithWhereUniqueWithoutCartaoInput | tipo_pagamentoUpdateWithWhereUniqueWithoutCartaoInput[]
    updateMany?: tipo_pagamentoUpdateManyWithWhereWithoutCartaoInput | tipo_pagamentoUpdateManyWithWhereWithoutCartaoInput[]
    deleteMany?: tipo_pagamentoScalarWhereInput | tipo_pagamentoScalarWhereInput[]
  }

  export type pagamentoCreateNestedOneWithoutTipo_pagamentoInput = {
    create?: XOR<pagamentoCreateWithoutTipo_pagamentoInput, pagamentoUncheckedCreateWithoutTipo_pagamentoInput>
    connectOrCreate?: pagamentoCreateOrConnectWithoutTipo_pagamentoInput
    connect?: pagamentoWhereUniqueInput
  }

  export type boletoCreateNestedOneWithoutTipo_pagamentoInput = {
    create?: XOR<boletoCreateWithoutTipo_pagamentoInput, boletoUncheckedCreateWithoutTipo_pagamentoInput>
    connectOrCreate?: boletoCreateOrConnectWithoutTipo_pagamentoInput
    connect?: boletoWhereUniqueInput
  }

  export type depositoCreateNestedOneWithoutTipo_pagamentoInput = {
    create?: XOR<depositoCreateWithoutTipo_pagamentoInput, depositoUncheckedCreateWithoutTipo_pagamentoInput>
    connectOrCreate?: depositoCreateOrConnectWithoutTipo_pagamentoInput
    connect?: depositoWhereUniqueInput
  }

  export type cartaoCreateNestedOneWithoutTipo_pagamentoInput = {
    create?: XOR<cartaoCreateWithoutTipo_pagamentoInput, cartaoUncheckedCreateWithoutTipo_pagamentoInput>
    connectOrCreate?: cartaoCreateOrConnectWithoutTipo_pagamentoInput
    connect?: cartaoWhereUniqueInput
  }

  export type pagamentoUpdateOneRequiredWithoutTipo_pagamentoNestedInput = {
    create?: XOR<pagamentoCreateWithoutTipo_pagamentoInput, pagamentoUncheckedCreateWithoutTipo_pagamentoInput>
    connectOrCreate?: pagamentoCreateOrConnectWithoutTipo_pagamentoInput
    upsert?: pagamentoUpsertWithoutTipo_pagamentoInput
    connect?: pagamentoWhereUniqueInput
    update?: XOR<XOR<pagamentoUpdateToOneWithWhereWithoutTipo_pagamentoInput, pagamentoUpdateWithoutTipo_pagamentoInput>, pagamentoUncheckedUpdateWithoutTipo_pagamentoInput>
  }

  export type boletoUpdateOneRequiredWithoutTipo_pagamentoNestedInput = {
    create?: XOR<boletoCreateWithoutTipo_pagamentoInput, boletoUncheckedCreateWithoutTipo_pagamentoInput>
    connectOrCreate?: boletoCreateOrConnectWithoutTipo_pagamentoInput
    upsert?: boletoUpsertWithoutTipo_pagamentoInput
    connect?: boletoWhereUniqueInput
    update?: XOR<XOR<boletoUpdateToOneWithWhereWithoutTipo_pagamentoInput, boletoUpdateWithoutTipo_pagamentoInput>, boletoUncheckedUpdateWithoutTipo_pagamentoInput>
  }

  export type depositoUpdateOneRequiredWithoutTipo_pagamentoNestedInput = {
    create?: XOR<depositoCreateWithoutTipo_pagamentoInput, depositoUncheckedCreateWithoutTipo_pagamentoInput>
    connectOrCreate?: depositoCreateOrConnectWithoutTipo_pagamentoInput
    upsert?: depositoUpsertWithoutTipo_pagamentoInput
    connect?: depositoWhereUniqueInput
    update?: XOR<XOR<depositoUpdateToOneWithWhereWithoutTipo_pagamentoInput, depositoUpdateWithoutTipo_pagamentoInput>, depositoUncheckedUpdateWithoutTipo_pagamentoInput>
  }

  export type cartaoUpdateOneRequiredWithoutTipo_pagamentoNestedInput = {
    create?: XOR<cartaoCreateWithoutTipo_pagamentoInput, cartaoUncheckedCreateWithoutTipo_pagamentoInput>
    connectOrCreate?: cartaoCreateOrConnectWithoutTipo_pagamentoInput
    upsert?: cartaoUpsertWithoutTipo_pagamentoInput
    connect?: cartaoWhereUniqueInput
    update?: XOR<XOR<cartaoUpdateToOneWithWhereWithoutTipo_pagamentoInput, cartaoUpdateWithoutTipo_pagamentoInput>, cartaoUncheckedUpdateWithoutTipo_pagamentoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type tipo_pagamentoCreateWithoutPagamentoInput = {
    tipo_pagamento_id: number
    tipo_pagamento_status: number
    boleto: boletoCreateNestedOneWithoutTipo_pagamentoInput
    deposito: depositoCreateNestedOneWithoutTipo_pagamentoInput
    cartao: cartaoCreateNestedOneWithoutTipo_pagamentoInput
  }

  export type tipo_pagamentoUncheckedCreateWithoutPagamentoInput = {
    tipo_pagamento_id: number
    boleto_id: number
    deposito_id: number
    cartao_id: number
    tipo_pagamento_status: number
  }

  export type tipo_pagamentoCreateOrConnectWithoutPagamentoInput = {
    where: tipo_pagamentoWhereUniqueInput
    create: XOR<tipo_pagamentoCreateWithoutPagamentoInput, tipo_pagamentoUncheckedCreateWithoutPagamentoInput>
  }

  export type tipo_pagamentoCreateManyPagamentoInputEnvelope = {
    data: tipo_pagamentoCreateManyPagamentoInput | tipo_pagamentoCreateManyPagamentoInput[]
    skipDuplicates?: boolean
  }

  export type tipo_pagamentoUpsertWithWhereUniqueWithoutPagamentoInput = {
    where: tipo_pagamentoWhereUniqueInput
    update: XOR<tipo_pagamentoUpdateWithoutPagamentoInput, tipo_pagamentoUncheckedUpdateWithoutPagamentoInput>
    create: XOR<tipo_pagamentoCreateWithoutPagamentoInput, tipo_pagamentoUncheckedCreateWithoutPagamentoInput>
  }

  export type tipo_pagamentoUpdateWithWhereUniqueWithoutPagamentoInput = {
    where: tipo_pagamentoWhereUniqueInput
    data: XOR<tipo_pagamentoUpdateWithoutPagamentoInput, tipo_pagamentoUncheckedUpdateWithoutPagamentoInput>
  }

  export type tipo_pagamentoUpdateManyWithWhereWithoutPagamentoInput = {
    where: tipo_pagamentoScalarWhereInput
    data: XOR<tipo_pagamentoUpdateManyMutationInput, tipo_pagamentoUncheckedUpdateManyWithoutPagamentoInput>
  }

  export type tipo_pagamentoScalarWhereInput = {
    AND?: tipo_pagamentoScalarWhereInput | tipo_pagamentoScalarWhereInput[]
    OR?: tipo_pagamentoScalarWhereInput[]
    NOT?: tipo_pagamentoScalarWhereInput | tipo_pagamentoScalarWhereInput[]
    tipo_pagamento_id?: IntFilter<"tipo_pagamento"> | number
    pagamento_id?: IntFilter<"tipo_pagamento"> | number
    boleto_id?: IntFilter<"tipo_pagamento"> | number
    deposito_id?: IntFilter<"tipo_pagamento"> | number
    cartao_id?: IntFilter<"tipo_pagamento"> | number
    tipo_pagamento_status?: IntFilter<"tipo_pagamento"> | number
  }

  export type tipo_pagamentoCreateWithoutBoletoInput = {
    tipo_pagamento_id: number
    tipo_pagamento_status: number
    pagamento: pagamentoCreateNestedOneWithoutTipo_pagamentoInput
    deposito: depositoCreateNestedOneWithoutTipo_pagamentoInput
    cartao: cartaoCreateNestedOneWithoutTipo_pagamentoInput
  }

  export type tipo_pagamentoUncheckedCreateWithoutBoletoInput = {
    tipo_pagamento_id: number
    pagamento_id: number
    deposito_id: number
    cartao_id: number
    tipo_pagamento_status: number
  }

  export type tipo_pagamentoCreateOrConnectWithoutBoletoInput = {
    where: tipo_pagamentoWhereUniqueInput
    create: XOR<tipo_pagamentoCreateWithoutBoletoInput, tipo_pagamentoUncheckedCreateWithoutBoletoInput>
  }

  export type tipo_pagamentoCreateManyBoletoInputEnvelope = {
    data: tipo_pagamentoCreateManyBoletoInput | tipo_pagamentoCreateManyBoletoInput[]
    skipDuplicates?: boolean
  }

  export type tipo_pagamentoUpsertWithWhereUniqueWithoutBoletoInput = {
    where: tipo_pagamentoWhereUniqueInput
    update: XOR<tipo_pagamentoUpdateWithoutBoletoInput, tipo_pagamentoUncheckedUpdateWithoutBoletoInput>
    create: XOR<tipo_pagamentoCreateWithoutBoletoInput, tipo_pagamentoUncheckedCreateWithoutBoletoInput>
  }

  export type tipo_pagamentoUpdateWithWhereUniqueWithoutBoletoInput = {
    where: tipo_pagamentoWhereUniqueInput
    data: XOR<tipo_pagamentoUpdateWithoutBoletoInput, tipo_pagamentoUncheckedUpdateWithoutBoletoInput>
  }

  export type tipo_pagamentoUpdateManyWithWhereWithoutBoletoInput = {
    where: tipo_pagamentoScalarWhereInput
    data: XOR<tipo_pagamentoUpdateManyMutationInput, tipo_pagamentoUncheckedUpdateManyWithoutBoletoInput>
  }

  export type tipo_pagamentoCreateWithoutDepositoInput = {
    tipo_pagamento_id: number
    tipo_pagamento_status: number
    pagamento: pagamentoCreateNestedOneWithoutTipo_pagamentoInput
    boleto: boletoCreateNestedOneWithoutTipo_pagamentoInput
    cartao: cartaoCreateNestedOneWithoutTipo_pagamentoInput
  }

  export type tipo_pagamentoUncheckedCreateWithoutDepositoInput = {
    tipo_pagamento_id: number
    pagamento_id: number
    boleto_id: number
    cartao_id: number
    tipo_pagamento_status: number
  }

  export type tipo_pagamentoCreateOrConnectWithoutDepositoInput = {
    where: tipo_pagamentoWhereUniqueInput
    create: XOR<tipo_pagamentoCreateWithoutDepositoInput, tipo_pagamentoUncheckedCreateWithoutDepositoInput>
  }

  export type tipo_pagamentoCreateManyDepositoInputEnvelope = {
    data: tipo_pagamentoCreateManyDepositoInput | tipo_pagamentoCreateManyDepositoInput[]
    skipDuplicates?: boolean
  }

  export type tipo_pagamentoUpsertWithWhereUniqueWithoutDepositoInput = {
    where: tipo_pagamentoWhereUniqueInput
    update: XOR<tipo_pagamentoUpdateWithoutDepositoInput, tipo_pagamentoUncheckedUpdateWithoutDepositoInput>
    create: XOR<tipo_pagamentoCreateWithoutDepositoInput, tipo_pagamentoUncheckedCreateWithoutDepositoInput>
  }

  export type tipo_pagamentoUpdateWithWhereUniqueWithoutDepositoInput = {
    where: tipo_pagamentoWhereUniqueInput
    data: XOR<tipo_pagamentoUpdateWithoutDepositoInput, tipo_pagamentoUncheckedUpdateWithoutDepositoInput>
  }

  export type tipo_pagamentoUpdateManyWithWhereWithoutDepositoInput = {
    where: tipo_pagamentoScalarWhereInput
    data: XOR<tipo_pagamentoUpdateManyMutationInput, tipo_pagamentoUncheckedUpdateManyWithoutDepositoInput>
  }

  export type tipo_pagamentoCreateWithoutCartaoInput = {
    tipo_pagamento_id: number
    tipo_pagamento_status: number
    pagamento: pagamentoCreateNestedOneWithoutTipo_pagamentoInput
    boleto: boletoCreateNestedOneWithoutTipo_pagamentoInput
    deposito: depositoCreateNestedOneWithoutTipo_pagamentoInput
  }

  export type tipo_pagamentoUncheckedCreateWithoutCartaoInput = {
    tipo_pagamento_id: number
    pagamento_id: number
    boleto_id: number
    deposito_id: number
    tipo_pagamento_status: number
  }

  export type tipo_pagamentoCreateOrConnectWithoutCartaoInput = {
    where: tipo_pagamentoWhereUniqueInput
    create: XOR<tipo_pagamentoCreateWithoutCartaoInput, tipo_pagamentoUncheckedCreateWithoutCartaoInput>
  }

  export type tipo_pagamentoCreateManyCartaoInputEnvelope = {
    data: tipo_pagamentoCreateManyCartaoInput | tipo_pagamentoCreateManyCartaoInput[]
    skipDuplicates?: boolean
  }

  export type tipo_pagamentoUpsertWithWhereUniqueWithoutCartaoInput = {
    where: tipo_pagamentoWhereUniqueInput
    update: XOR<tipo_pagamentoUpdateWithoutCartaoInput, tipo_pagamentoUncheckedUpdateWithoutCartaoInput>
    create: XOR<tipo_pagamentoCreateWithoutCartaoInput, tipo_pagamentoUncheckedCreateWithoutCartaoInput>
  }

  export type tipo_pagamentoUpdateWithWhereUniqueWithoutCartaoInput = {
    where: tipo_pagamentoWhereUniqueInput
    data: XOR<tipo_pagamentoUpdateWithoutCartaoInput, tipo_pagamentoUncheckedUpdateWithoutCartaoInput>
  }

  export type tipo_pagamentoUpdateManyWithWhereWithoutCartaoInput = {
    where: tipo_pagamentoScalarWhereInput
    data: XOR<tipo_pagamentoUpdateManyMutationInput, tipo_pagamentoUncheckedUpdateManyWithoutCartaoInput>
  }

  export type pagamentoCreateWithoutTipo_pagamentoInput = {
    pagamento_tipo: string
    pagamento_status: number
    pagamento_data: Date | string
    pagamento_endereco: string
  }

  export type pagamentoUncheckedCreateWithoutTipo_pagamentoInput = {
    pagamento_id?: number
    pagamento_tipo: string
    pagamento_status: number
    pagamento_data: Date | string
    pagamento_endereco: string
  }

  export type pagamentoCreateOrConnectWithoutTipo_pagamentoInput = {
    where: pagamentoWhereUniqueInput
    create: XOR<pagamentoCreateWithoutTipo_pagamentoInput, pagamentoUncheckedCreateWithoutTipo_pagamentoInput>
  }

  export type boletoCreateWithoutTipo_pagamentoInput = {
    boleto_id: number
    boleto_numero: string
    boleto_vencimento: Date | string
    boleto_emissao: Date | string
    boleto_status: number
  }

  export type boletoUncheckedCreateWithoutTipo_pagamentoInput = {
    boleto_id: number
    boleto_numero: string
    boleto_vencimento: Date | string
    boleto_emissao: Date | string
    boleto_status: number
  }

  export type boletoCreateOrConnectWithoutTipo_pagamentoInput = {
    where: boletoWhereUniqueInput
    create: XOR<boletoCreateWithoutTipo_pagamentoInput, boletoUncheckedCreateWithoutTipo_pagamentoInput>
  }

  export type depositoCreateWithoutTipo_pagamentoInput = {
    deposito_id: number
    deposito_banco: string
    deposito_valor: number
    deposito_agencia: string
    deposito_conta: string
    deposito_status: number
  }

  export type depositoUncheckedCreateWithoutTipo_pagamentoInput = {
    deposito_id: number
    deposito_banco: string
    deposito_valor: number
    deposito_agencia: string
    deposito_conta: string
    deposito_status: number
  }

  export type depositoCreateOrConnectWithoutTipo_pagamentoInput = {
    where: depositoWhereUniqueInput
    create: XOR<depositoCreateWithoutTipo_pagamentoInput, depositoUncheckedCreateWithoutTipo_pagamentoInput>
  }

  export type cartaoCreateWithoutTipo_pagamentoInput = {
    cartao_numero: string
    cartao_validade: Date | string
    cartao_cvv: string
    cartao_banco: string
    cartao_nome: string
    cartao_status: number
  }

  export type cartaoUncheckedCreateWithoutTipo_pagamentoInput = {
    cartao_id?: number
    cartao_numero: string
    cartao_validade: Date | string
    cartao_cvv: string
    cartao_banco: string
    cartao_nome: string
    cartao_status: number
  }

  export type cartaoCreateOrConnectWithoutTipo_pagamentoInput = {
    where: cartaoWhereUniqueInput
    create: XOR<cartaoCreateWithoutTipo_pagamentoInput, cartaoUncheckedCreateWithoutTipo_pagamentoInput>
  }

  export type pagamentoUpsertWithoutTipo_pagamentoInput = {
    update: XOR<pagamentoUpdateWithoutTipo_pagamentoInput, pagamentoUncheckedUpdateWithoutTipo_pagamentoInput>
    create: XOR<pagamentoCreateWithoutTipo_pagamentoInput, pagamentoUncheckedCreateWithoutTipo_pagamentoInput>
    where?: pagamentoWhereInput
  }

  export type pagamentoUpdateToOneWithWhereWithoutTipo_pagamentoInput = {
    where?: pagamentoWhereInput
    data: XOR<pagamentoUpdateWithoutTipo_pagamentoInput, pagamentoUncheckedUpdateWithoutTipo_pagamentoInput>
  }

  export type pagamentoUpdateWithoutTipo_pagamentoInput = {
    pagamento_tipo?: StringFieldUpdateOperationsInput | string
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pagamento_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento_endereco?: StringFieldUpdateOperationsInput | string
  }

  export type pagamentoUncheckedUpdateWithoutTipo_pagamentoInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_tipo?: StringFieldUpdateOperationsInput | string
    pagamento_status?: IntFieldUpdateOperationsInput | number
    pagamento_data?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento_endereco?: StringFieldUpdateOperationsInput | string
  }

  export type boletoUpsertWithoutTipo_pagamentoInput = {
    update: XOR<boletoUpdateWithoutTipo_pagamentoInput, boletoUncheckedUpdateWithoutTipo_pagamentoInput>
    create: XOR<boletoCreateWithoutTipo_pagamentoInput, boletoUncheckedCreateWithoutTipo_pagamentoInput>
    where?: boletoWhereInput
  }

  export type boletoUpdateToOneWithWhereWithoutTipo_pagamentoInput = {
    where?: boletoWhereInput
    data: XOR<boletoUpdateWithoutTipo_pagamentoInput, boletoUncheckedUpdateWithoutTipo_pagamentoInput>
  }

  export type boletoUpdateWithoutTipo_pagamentoInput = {
    boleto_id?: IntFieldUpdateOperationsInput | number
    boleto_numero?: StringFieldUpdateOperationsInput | string
    boleto_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    boleto_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    boleto_status?: IntFieldUpdateOperationsInput | number
  }

  export type boletoUncheckedUpdateWithoutTipo_pagamentoInput = {
    boleto_id?: IntFieldUpdateOperationsInput | number
    boleto_numero?: StringFieldUpdateOperationsInput | string
    boleto_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    boleto_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    boleto_status?: IntFieldUpdateOperationsInput | number
  }

  export type depositoUpsertWithoutTipo_pagamentoInput = {
    update: XOR<depositoUpdateWithoutTipo_pagamentoInput, depositoUncheckedUpdateWithoutTipo_pagamentoInput>
    create: XOR<depositoCreateWithoutTipo_pagamentoInput, depositoUncheckedCreateWithoutTipo_pagamentoInput>
    where?: depositoWhereInput
  }

  export type depositoUpdateToOneWithWhereWithoutTipo_pagamentoInput = {
    where?: depositoWhereInput
    data: XOR<depositoUpdateWithoutTipo_pagamentoInput, depositoUncheckedUpdateWithoutTipo_pagamentoInput>
  }

  export type depositoUpdateWithoutTipo_pagamentoInput = {
    deposito_id?: IntFieldUpdateOperationsInput | number
    deposito_banco?: StringFieldUpdateOperationsInput | string
    deposito_valor?: FloatFieldUpdateOperationsInput | number
    deposito_agencia?: StringFieldUpdateOperationsInput | string
    deposito_conta?: StringFieldUpdateOperationsInput | string
    deposito_status?: IntFieldUpdateOperationsInput | number
  }

  export type depositoUncheckedUpdateWithoutTipo_pagamentoInput = {
    deposito_id?: IntFieldUpdateOperationsInput | number
    deposito_banco?: StringFieldUpdateOperationsInput | string
    deposito_valor?: FloatFieldUpdateOperationsInput | number
    deposito_agencia?: StringFieldUpdateOperationsInput | string
    deposito_conta?: StringFieldUpdateOperationsInput | string
    deposito_status?: IntFieldUpdateOperationsInput | number
  }

  export type cartaoUpsertWithoutTipo_pagamentoInput = {
    update: XOR<cartaoUpdateWithoutTipo_pagamentoInput, cartaoUncheckedUpdateWithoutTipo_pagamentoInput>
    create: XOR<cartaoCreateWithoutTipo_pagamentoInput, cartaoUncheckedCreateWithoutTipo_pagamentoInput>
    where?: cartaoWhereInput
  }

  export type cartaoUpdateToOneWithWhereWithoutTipo_pagamentoInput = {
    where?: cartaoWhereInput
    data: XOR<cartaoUpdateWithoutTipo_pagamentoInput, cartaoUncheckedUpdateWithoutTipo_pagamentoInput>
  }

  export type cartaoUpdateWithoutTipo_pagamentoInput = {
    cartao_numero?: StringFieldUpdateOperationsInput | string
    cartao_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    cartao_cvv?: StringFieldUpdateOperationsInput | string
    cartao_banco?: StringFieldUpdateOperationsInput | string
    cartao_nome?: StringFieldUpdateOperationsInput | string
    cartao_status?: IntFieldUpdateOperationsInput | number
  }

  export type cartaoUncheckedUpdateWithoutTipo_pagamentoInput = {
    cartao_id?: IntFieldUpdateOperationsInput | number
    cartao_numero?: StringFieldUpdateOperationsInput | string
    cartao_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    cartao_cvv?: StringFieldUpdateOperationsInput | string
    cartao_banco?: StringFieldUpdateOperationsInput | string
    cartao_nome?: StringFieldUpdateOperationsInput | string
    cartao_status?: IntFieldUpdateOperationsInput | number
  }

  export type tipo_pagamentoCreateManyPagamentoInput = {
    tipo_pagamento_id: number
    boleto_id: number
    deposito_id: number
    cartao_id: number
    tipo_pagamento_status: number
  }

  export type tipo_pagamentoUpdateWithoutPagamentoInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
    boleto?: boletoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
    deposito?: depositoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
    cartao?: cartaoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
  }

  export type tipo_pagamentoUncheckedUpdateWithoutPagamentoInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    boleto_id?: IntFieldUpdateOperationsInput | number
    deposito_id?: IntFieldUpdateOperationsInput | number
    cartao_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
  }

  export type tipo_pagamentoUncheckedUpdateManyWithoutPagamentoInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    boleto_id?: IntFieldUpdateOperationsInput | number
    deposito_id?: IntFieldUpdateOperationsInput | number
    cartao_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
  }

  export type tipo_pagamentoCreateManyBoletoInput = {
    tipo_pagamento_id: number
    pagamento_id: number
    deposito_id: number
    cartao_id: number
    tipo_pagamento_status: number
  }

  export type tipo_pagamentoUpdateWithoutBoletoInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
    pagamento?: pagamentoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
    deposito?: depositoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
    cartao?: cartaoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
  }

  export type tipo_pagamentoUncheckedUpdateWithoutBoletoInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_id?: IntFieldUpdateOperationsInput | number
    deposito_id?: IntFieldUpdateOperationsInput | number
    cartao_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
  }

  export type tipo_pagamentoUncheckedUpdateManyWithoutBoletoInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_id?: IntFieldUpdateOperationsInput | number
    deposito_id?: IntFieldUpdateOperationsInput | number
    cartao_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
  }

  export type tipo_pagamentoCreateManyDepositoInput = {
    tipo_pagamento_id: number
    pagamento_id: number
    boleto_id: number
    cartao_id: number
    tipo_pagamento_status: number
  }

  export type tipo_pagamentoUpdateWithoutDepositoInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
    pagamento?: pagamentoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
    boleto?: boletoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
    cartao?: cartaoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
  }

  export type tipo_pagamentoUncheckedUpdateWithoutDepositoInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_id?: IntFieldUpdateOperationsInput | number
    boleto_id?: IntFieldUpdateOperationsInput | number
    cartao_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
  }

  export type tipo_pagamentoUncheckedUpdateManyWithoutDepositoInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_id?: IntFieldUpdateOperationsInput | number
    boleto_id?: IntFieldUpdateOperationsInput | number
    cartao_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
  }

  export type tipo_pagamentoCreateManyCartaoInput = {
    tipo_pagamento_id: number
    pagamento_id: number
    boleto_id: number
    deposito_id: number
    tipo_pagamento_status: number
  }

  export type tipo_pagamentoUpdateWithoutCartaoInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
    pagamento?: pagamentoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
    boleto?: boletoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
    deposito?: depositoUpdateOneRequiredWithoutTipo_pagamentoNestedInput
  }

  export type tipo_pagamentoUncheckedUpdateWithoutCartaoInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_id?: IntFieldUpdateOperationsInput | number
    boleto_id?: IntFieldUpdateOperationsInput | number
    deposito_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
  }

  export type tipo_pagamentoUncheckedUpdateManyWithoutCartaoInput = {
    tipo_pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_id?: IntFieldUpdateOperationsInput | number
    boleto_id?: IntFieldUpdateOperationsInput | number
    deposito_id?: IntFieldUpdateOperationsInput | number
    tipo_pagamento_status?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PagamentoCountOutputTypeDefaultArgs instead
     */
    export type PagamentoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PagamentoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoletoCountOutputTypeDefaultArgs instead
     */
    export type BoletoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoletoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepositoCountOutputTypeDefaultArgs instead
     */
    export type DepositoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepositoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CartaoCountOutputTypeDefaultArgs instead
     */
    export type CartaoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CartaoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pagamentoDefaultArgs instead
     */
    export type pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pagamentoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use boletoDefaultArgs instead
     */
    export type boletoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = boletoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use depositoDefaultArgs instead
     */
    export type depositoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = depositoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cartaoDefaultArgs instead
     */
    export type cartaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cartaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tipo_pagamentoDefaultArgs instead
     */
    export type tipo_pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tipo_pagamentoDefaultArgs<ExtArgs>

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