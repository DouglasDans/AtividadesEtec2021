import React, { Component } from 'react'

import {
  View,
  Text,
  Image
} from 'react-native'

import estilo from './css/style.js'
export default function Aplication(){
  let A = parseInt(Math.random() * 100) 
  let B = parseInt(Math.random() * 100) 
  let C = parseInt(Math.random() * 100) 
  let triangulo = ''

  if(A === 0 || B === 0 || C === 0){
    triangulo = 'não é um triângulo'
  }else{
    if ( A != B && A != C && B != C ){
      triangulo = 'Escaleno'
    }
    
    else if ( A == B && A == C){
      triangulo = 'Equilátero'
    }
    
    else if (A == B ||  A == C || B == C){
      triangulo = 'Exosceles'
    }
}

    return(
      
      <View style={estilo.container} >
        <View style={estilo.div1}>
          <Image source={require('./img/ilu.png')} style={estilo.imagem}/>
        </View>
        <Text style={estilo.titulo}>Calcular Triangulos:</Text>
        <Text style={estilo.titulo}> Lado A: {A}</Text>
        <Text style={estilo.titulo}> Lado B: {B}</Text>
        <Text style={estilo.titulo}> Lado C: {C}</Text>
        <Text style={estilo.titulo}> O triangulo é: {triangulo} </Text>
      </View>
      
    )

    
}
