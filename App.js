import *as React from 'react';
import axios from "axios"
import { View, Text, StyleSheet } from 'react-native';

export default class App extends React.Component {

  fetchData=async()=>{
    try {
      const result = await axios.get("https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY")
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View>
      <Text>exoplanet app</Text>
      </View>
    );
  }
}