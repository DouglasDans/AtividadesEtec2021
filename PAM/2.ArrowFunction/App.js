import React, { Component } from 'react'

import {
  View,
  Text,
  TextInput,
  Button

} from 'react-native'

import estilo from './css/style.js'
export default function Aplication(){
    return(
      
      <View style={estilo.container}>
        <View style={estilo.div1}>

          <View>
            <Text>Nome:</Text>
            <TextInput placeholder="Insira seu nome aqui" 
            autoFocus={true}
            style={estilo.input}
            keyboardType={"default"}/>
          </View>

          <View>
            <Text>Email:</Text>
            <TextInput placeholder="Insira seu email aqui" 
            style={estilo.input}
            keyboardType={'email'}/>
          </View>

          <View>
            <Text>Assunto:</Text>
              <TextInput placeholder="Insira seu assunto aqui" 
              style={estilo.input}
              keyboardType={"default"}/>
          </View>
           
          <View>
            <Text>Mensagem:</Text>
            <TextInput placeholder="Insira sua mensagem aqui" 
            style={estilo.input}
            keyboardType={"default"}/>
          </View>
          <View>
            <Button title="Enviar"
              onPress={()=>Alert.Alert('hello word',"minha pica")}
            
            />
          </View>
          
          

          
        </View>
      </View>
      
    )

    
}
