import {
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";


interface Props {
  title:string;
  onPress:()=>void;
}


export function SaveButton({
  title,
  onPress
}:Props){

return(
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text style={styles.text}>
      {title}
    </Text>

  </TouchableOpacity>
)

}


const styles = StyleSheet.create({

button:{
  backgroundColor:"#111827",
  padding:14,
  borderRadius:8,
  alignItems:"center"
},

text:{
 color:"white",
 fontWeight:"bold"
}

});