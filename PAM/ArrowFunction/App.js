import React, { useState } from 'react'

import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image

} from 'react-native'

import estilo from './css/style.js'
export default function Aplication(){


    const [nome,setNome] = useState()
    const [email,setEmail] = useState()
    const [assunto,setAssunto] = useState()
    const [mensagem,setMsg] = useState()

    const exibirDados = () => {
      Alert.alert("Essa é a mensagem:",mensagem)
      Alert.alert("o Assunto digitado foi:",assunto)
      Alert.alert("o Email digitado foi:",email)
      Alert.alert("o Nome digitado foi:",nome)
      
    }



    return(
      
      <View style={estilo.container}>
        <View style={estilo.div2}>
        <Image source={require('./img/Paralax.png')} style={{width: '100%',
        height: '40%',
        resizeMode:'center'}} />
        </View>
        <View style={estilo.div1}>

          <View>
            <Text>Nome:</Text>
            <TextInput placeholder="Insira seu nome aqui" 
            autoFocus={true}
            style={estilo.input}
            placeholderTextColor='#555'
            onChangeText={text=>setNome(text)}
            keyboardType={"default"}/>
          </View>

          <View>
            <Text>Email:</Text>
            <TextInput placeholder="Insira seu email aqui" 
            placeholderTextColor='#555'
            style={estilo.input}
            onChangeText={text=>setEmail(text)}
            keyboardType={'email-address'}/>
          </View>

          <View>
            <Text>Assunto:</Text>
              <TextInput placeholder="Insira seu assunto aqui" 
              placeholderTextColor='#555'
              style={estilo.input}
              onChangeText={text=>setAssunto(text)}
              keyboardType={"default"}/>
          </View>
           
          <View>
            <Text>Mensagem:</Text>
            <TextInput placeholder="Insira sua mensagem aqui" 
            placeholderTextColor='#555'
            style={estilo.input}
            onChangeText={text=>setMsg(text)}
            keyboardType={"default"}/>
          </View>

          <View>
            <Button title="Enviar"
              onPress={()=> exibirDados()}
            />
          </View>
          
        </View>
      </View>
      
    )

    
}
