import {useState} from "react";
import {
 View,
 Text,
 Alert
} from "react-native";

import {createUser}
from "../../main/dependencies";

import {FormInput}
from "../components/FormInput";

import {SaveButton}
from "../components/SaveButton";


export default function UserScreen(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");


async function save(){

try{

const id =
await createUser.execute(
name,
email
);

Alert.alert(
"Saved",
`User ${id} created`
);

setName("");
setEmail("");

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
Register User
</Text>


<FormInput
value={name}
placeholder="Name"
onChangeText={setName}
/>


<FormInput
value={email}
placeholder="Email"
onChangeText={setEmail}
/>


<SaveButton
title="Save User"
onPress={save}
/>


</View>

)

}