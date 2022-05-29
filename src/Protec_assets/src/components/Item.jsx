import React, { useEffect, useState} from "react";
import logo from "../../assets/logo.png";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../../declarations/Product";
import { Principal } from "@dfinity/principal"; 



function Item(props) {

  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [desc, setDesc] = useState("");


  const id = Principal.fromText(props.id);
  const localHost = "http://localhost:8080/";
  const agent = new HttpAgent({ host: localHost});

  async function loadProduct() {
    const productActor = await Actor.createActor(idlFactory, {
      agent,
      canisterID: id,
    } );
    
    const name = await productActor.getName();
    const owner = await productActor.getOwner();
    const desc = await productActor.getDesc();
      setName(name);
      setOwner(owner.toText());
      setDesc(desc);
    
 

  }

  useEffect(() => {
    loadProduct();
  }, []);


  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={logo}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {name}
            <span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: { owner }
          </p>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Product Description: { desc }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;

//product canister: rrkah-fqaaa-aaaaa-aaaaq-cai