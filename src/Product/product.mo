import Debug "mo:base/Debug";
import Principal "mo:base/Principal";

actor class Product (name: Text, owner: Principal, desc: Text) = this {

 let productName = name;
 let productOwner = owner;
 let productDesc = desc;

  public query func getName(): async Text {
      return productName;
  };

    public query func getOwner(): async Principal {
      return productOwner;
  };

    public query func getDesc(): async Text {
      return productDesc;
  };

// dfx identiy get-principal :- ougux-32eok-3j453-dx4hu-jae6s-bd6tb-7updo-4kofl-nkzxm-o3vwi-7ae
//error:- ryjl3-tyaaa-aaaaa-aaaba-cai

  public query func getCanisterID(): async Principal {
  return Principal.fromActor(this);
};


};

