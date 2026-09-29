import { useState } from "react";
import {
  View,
  Text,
  Alert
} from "react-native";

import { createProduct }
from "../../main/dependencies";

import { FormInput }
from "../components/FormInput";

import { SaveButton }
from "../components/SaveButton";


export default function ProductScreen(){

const [name,setName] = useState("");
const [price,setPrice] = useState("");


async function save(){

try{

const id =
await createProduct.execute(
name,
Number(price)
);


Alert.alert(
"Saved",
`Product ${id} created`
);


setName("");
setPrice("");


}catch(error){

Alert.alert(
"Error",
(error as Error).message
);

}

}


return(

<View>

<Text>
Register Product
</Text>


<FormInput
value={name}
placeholder="Product name"
onChangeText={setName}
/>


<FormInput
value={price}
placeholder="Price"
onChangeText={setPrice}
/>


<SaveButton
title="Save Product"
onPress={save}
/>


</View>

)

}