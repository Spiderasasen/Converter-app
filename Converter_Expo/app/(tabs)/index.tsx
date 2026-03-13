import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState(null);
  const [items, setItems] = useState([
    { label: "United States", value: "US" },
    { label: "Canada", value: "CA" },
    { label: "Mexico", value: "MX" }
  ]);

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Converter App</Text>
        <Text style={styles.subtitle}>Converting all the essentials in 1 app</Text>

        {/*dropdown bar being created*/}
        <View style={styles.dropdownWrapper}>
          <DropDownPicker
              open={open}
              value={country}
              items={items}
              setOpen={setOpen}
              setValue={setCountry}
              setItems={setItems}
              searchable={true}
              placeholder="Search or select a country"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdown}
          />
        </View>

        {/*TODO: once the user clicks on the button, it will send the info to another screen*/}
        {/*<Button title={"convert"} >Convert</Button>*/}

        {/*this right now is a tester*/}
        {country && (
            <Text style={styles.selectedText}>Selected: {country}</Text>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    color: '#555',
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
  },
  dropdownWrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },

  dropdown: {
    width: 250,
    alignSelf: "center",
  },


});
