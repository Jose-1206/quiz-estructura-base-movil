import { useState } from "react";
import {
 View,
 Text,
 Alert
} from "react-native";


import { createPerson }
from "../../main/dependencies";


import { FormInput }
from "../components/FormInput";


import { SaveButton }
from "../components/SaveButton";


export default function PersonScreen(){


const [name,setName] = useState("");
const [phone,setPhone] = useState("");



async function save(){

try{


const id =
await createPerson.execute(
name,
phone
);



Alert.alert(
"Saved",
`Person ${id} created`
);



setName("");
setPhone("");



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
Register Person
</Text>



<FormInput

value={name}

placeholder="Person name"

onChangeText={setName}

/>



<FormInput

value={phone}

placeholder="Phone"

onChangeText={setPhone}

/>



<SaveButton

title="Save Person"

onPress={save}

/>



</View>

)


}