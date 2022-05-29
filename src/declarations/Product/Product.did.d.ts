import type { Principal } from '@dfinity/principal';
export interface Product {
  'getCanisterID' : () => Promise<Principal>,
  'getDesc' : () => Promise<string>,
  'getName' : () => Promise<string>,
  'getOwner' : () => Promise<Principal>,
}
export interface _SERVICE extends Product {}
