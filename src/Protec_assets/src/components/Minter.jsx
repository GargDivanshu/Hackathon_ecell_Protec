import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Protec } from "../../../declarations/Protec";
import { Principal } from "@dfinity/principal";
import Item from "./Item";

function Minter() {

  const {register, handleSubmit} = useForm();
  const [productPrincipal, setProductPrincipal] = useState("");


  async function onSubmit(data) {
    const name = data.name;
    const desc = data.desc;
    console.log(data.name);
    console.log(data.desc);

    const newProductID = await Protec.minting(name, desc);
    console.log(newProductID.toText());
    setProductPrincipal(newProductID);

  }

  if (productPrincipal == "") {  
  return (

        
    <div className="minter-container">
      <h3 className="makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
        Mint Product Info
      </h3>


      {/* <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
        Upload Image
      </h6> */}
      <form className="makeStyles-form-109" noValidate="" autoComplete="off">
        {/* <div className="upload-container">
          <input
            className="upload"
            type="file"
            accept="image/x-png,image/jpeg,image/gif,image/svg+xml,image/webp"
          />
        </div> */}
        <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
          Product Name
        </h6>
        <div className="form-FormControl-root form-TextField-root form-FormControl-marginNormal form-FormControl-fullWidth">
          <div className="form-InputBase-root form-OutlinedInput-root form-InputBase-fullWidth form-InputBase-formControl">
            <input
            {...register( "name", {required: true})}
              placeholder="e.g. Paracetamol"
              type="text"
              className="form-InputBase-input form-OutlinedInput-input"
            />
            <fieldset className="PrivateNotchedOutline-root-60 form-OutlinedInput-notchedOutline"></fieldset>
          </div>
        </div>


        <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
           Product Description
        </h6>
        <div className="form-FormControl-root form-TextField-root form-FormControl-marginNormal form-FormControl-fullWidth">
          <div className="form-InputBase-root form-OutlinedInput-root form-InputBase-fullWidth form-InputBase-formControl">
            <input
            {...register( "desc", {required: true})}
              placeholder="e.g. analgesic_manf-28May_lab-test-status-passed_"
              type="text"
              className="form-InputBase-input form-OutlinedInput-input"
            />
            <fieldset className="PrivateNotchedOutline-root-60 form-OutlinedInput-notchedOutline"></fieldset>
          </div>
        </div>







        <div className="form-ButtonBase-root form-Chip-root makeStyles-chipBlue-108 form-Chip-clickable">
          <span onClick={handleSubmit(onSubmit)} className="form-Chip-label">Mint Info</span>
        </div>
      </form>
    </div>
  );
} else { return (
<div className="minter-container">
  <h3 className="Typography-root makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
    Minted!
  </h3>
  <div className="horizontal-center">
    <Item id={productPrincipal.toText()} />
  </div>
</div>
);
  
}
}

export default Minter;
