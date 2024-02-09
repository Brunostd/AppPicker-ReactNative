import {Picker} from '@react-native-picker/picker';
import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

interface MyPickerStates {
  pizza: number;
  pizzas: MyPizza[];
}

interface MyPizza {
  key: number;
  value: number;
  name: string;
  valor: string;
}

class App extends Component<{}, MyPickerStates> {
  constructor(props: {}) {
    super(props);
    let auxMyPizzas: MyPizza[] = [
      {key: 1, value: 1, name: 'calabresa', valor: 'R$ 34,50'},
      {key: 2, value: 2, name: 'portuguesa', valor: 'R$ 38,50'},
      {key: 3, value: 3, name: 'quatro queijos', valor: 'R$ 47,50'},
    ];
    this.state = {
      pizza: 0,
      pizzas: auxMyPizzas,
    };
  }

  render(): React.ReactNode {
    let pickerPizzas = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.name} />;
    });

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(sabor, itemIndex) => this.setState({pizza: sabor})}>
          {pickerPizzas}
        </Picker>
        <Text>Você escolheu: {this.state.pizzas[this.state.pizza].name}</Text>
        <Text>Valor da pizza: {this.state.pizzas[this.state.pizza].valor}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    padding: 16,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    color: 'black',
  },
});

export default App;
