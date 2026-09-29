import {
  StyleSheet,
  TextInput,
} from "react-native";


interface Props {
  value: string;
  placeholder: string;
  onChangeText: (value:string)=>void;
}


export function FormInput({
  value,
  placeholder,
  onChangeText
}:Props){

  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
}


const styles = StyleSheet.create({

  input:{
    borderWidth:1,
    borderColor:"#ccc",
    padding:12,
    borderRadius:8,
    marginBottom:12
  }

});