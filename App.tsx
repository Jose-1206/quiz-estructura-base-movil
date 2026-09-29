import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import { initializeDatabase } from "./src/infrastructure/database/schema";

import UserScreen from "./src/presentation/users/UserScreen";
import ProductScreen from "./src/presentation/products/ProductScreen";
import PersonScreen from "./src/presentation/persons/PersonScreen";


type Screen =
  | "users"
  | "products"
  | "persons";


export default function App() {

  const [screen, setScreen] = useState<Screen>("users");


  useEffect(() => {

    initializeDatabase()
      .then(() => {
        console.log("Database initialized");
      })
      .catch((error) => {
        console.error(
          "Database initialization error:",
          error
        );
      });

  }, []);



  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        Mobile Quiz
      </Text>


      <View style={styles.menu}>


        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen("users")}
        >
          <Text>
            Users
          </Text>
        </TouchableOpacity>



        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen("products")}
        >
          <Text>
            Products
          </Text>
        </TouchableOpacity>



        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen("persons")}
        >
          <Text>
            Persons
          </Text>
        </TouchableOpacity>


      </View>



      {
        screen === "users" &&
        <UserScreen />
      }



      {
        screen === "products" &&
        <ProductScreen />
      }



      {
        screen === "persons" &&
        <PersonScreen />
      }


    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    padding: 20,

    marginTop: 40

  },


  title: {

    fontSize: 24,

    fontWeight: "bold",

    marginBottom: 20

  },


  menu: {

    flexDirection: "row",

    justifyContent: "space-between",

    marginBottom: 20

  },


  button: {

    backgroundColor: "#ddd",

    padding: 12,

    borderRadius: 8

  }

});