import Cycles "mo:base/ExperimentalCycles";
import Debug "mo:base/Debug";
import ProductActorClass "../Product/product";
import Principal "mo:base/Principal";

actor Protec {

   public shared(msg) func minting(name: Text, desc: Text) : async Principal {
   
   let owner : Principal = msg.caller;
   
   Debug.print(debug_show(Cycles.balance()));
   Cycles.add(100_500_000_000);
   let newProduct = await ProductActorClass.Product(name, owner, desc);
  Debug.print(debug_show(Cycles.balance()));


   //abhi bhi still return nhi ki Principal 
   let newProductPrincipal = await newProduct.getCanisterID();
   //eg dfx deploy --argument='("ibuprofen", principal "ougux-32eok-3j453-dx4hu-jae6s-bd6tb-7updo-4kofl-nkzxm-o3vwi-7ae", "manf-28May_lab-test-pass")'

   return newProductPrincipal

   }
};
