export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'minting' : IDL.Func([IDL.Text, IDL.Text], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
