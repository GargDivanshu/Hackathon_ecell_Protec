export const idlFactory = ({ IDL }) => {
  const Product = IDL.Service({
    'getCanisterID' : IDL.Func([], [IDL.Principal], ['query']),
    'getDesc' : IDL.Func([], [IDL.Text], ['query']),
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getOwner' : IDL.Func([], [IDL.Principal], ['query']),
  });
  return Product;
};
export const init = ({ IDL }) => {
  return [IDL.Text, IDL.Principal, IDL.Text];
};
