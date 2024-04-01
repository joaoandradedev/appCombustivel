import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, Keyboard } from 'react-native';

export default function App() {

  const [alcool, setAlcool] = useState();
  const [gasolina, setGasolina] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [resultado, setResultado] = useState(0)

  

  function abrirModal(){
    
    if(alcool == '' || gasolina == ''){
      alert('Digite o valor da gasolina e do álcool');
      return;
    }
    setModalVisible(true);

    let divisao = parseFloat(alcool) / parseFloat(gasolina);

    if(divisao < 0.7){
      setResultado('álcool')
    }else{
      setResultado('gasolina')
    }

  }

  function fecharModal(){
    setModalVisible(false);
    setAlcool('');
    setGasolina('');
  }


  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={require('./src/image/logo.png')}
      />
      <Text style={styles.title}>Qual a melhor opção?</Text>
      <View style={styles.areaBtn}>
        <Text style={styles.textInput}>Álcool (preço por litro):</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: 3.70'
          onChangeText={ (texto) => setAlcool(texto) }
          keyboardType='numeric'
          value={setAlcool}
        />
        <Text style={styles.textInput}>Gasolina (preço por litro):</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: 4.30'
          onChangeText={ (texto) => setGasolina(texto) }
          keyboardType='numeric'
          value={setGasolina}
        />

        <TouchableOpacity style={styles.botao} onPress={ abrirModal }>
          <Text style={styles.botaoText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={false}
        visible={modalVisible}
        animationType='slide'
      >
        <View style={styles.container}>
          <Image
            source={require('./src/image/gas.png')}
          />
          <Text style={[styles.title, { color: '#36d121' }]}>Compensa usar { resultado }</Text>

          <Text style={[styles.textInput, {marginBottom: 10, fontSize: 22}]}>Com os preços:</Text>
          <Text style={[styles.textInput, {marginBottom: 5, fontSize: 18}]}>Álcool: R$ {alcool}</Text>
          <Text style={[styles.textInput, {marginBottom: 5, fontSize: 18}]}>Gasolina: R$ {gasolina}</Text>

          <TouchableOpacity style={styles.botaoModal} onPress={ fecharModal }>
            <Text style={styles.botaoTextModal}>Calcular novamente</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 24,
    color: '#fff',
    marginTop: 20,
    marginBottom: 30,
  },
  input:{
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 5,
  },
  textInput:{
    color: '#fff',
    fontSize: 20,
  },
  areaBtn:{
    width: '90%',
  },
  botao:{
    backgroundColor: '#de482a',
    borderWidth: 1,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  botaoText:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  botaoModal:{
    width: '90%',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#de482a',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  botaoTextModal:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#de482a',
  }
});
