import { View,Text,Button, TextInput } from "react-native"
import { StyleSheet } from "react-native"
import { useState } from "react";


export function Home({navigation}) {
    const [rm, setRm] = useState('');
    const [nome, setNome] = useState('');

    const handleNavigateToForm = () => {
        if (nome.trim() === '' || rm.trim() === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            navigation.navigate('Formulario');
        }
    };
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>O que é retorno sobre investimento</Text>
                <Text>
                    Retorno sobre o Investimento (ROI) é uma métrica financeira utilizada para avaliar a eficiência e a lucratividade de um investimento em relação ao custo desse investimento. 
                    Basicamente, o ROI indica o quanto de retorno financeiro uma empresa ou indivíduo recebe em relação ao montante investido.
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="Digite seu rm"
                value={rm}
                onChangeText={text => setRm(text)}
                />

                <TextInput
                style ={styles.input}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={text => setNome(text)}
                />
            </View>
            <View>
                
                <Button
                    title="Va para formulario"
                    onPress={handleNavigateToForm}
                 />
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    titulo:{
        fontSize:20,
        fontWeight:"bold",
        padding: 20
    },
    inputContainer:{
        marginTop: 20
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    }
})

