import { View, Text, TextInput,Button} from "react-native"
import { useState } from "react"
import { StyleSheet } from "react-native";


export function Formulario({navigation}) {
    const [precoInicial, setPrecoInicial] = useState('');
    const [precoFinal, setPrecoFinal] = useState('');
    const [dividendos, setDividendos] = useState('');
    const [retorno, setRetorno] = useState(null);

    const calcularRetorno = () => {
        const retornoCalculado = ((parseFloat(precoFinal) - parseFloat(precoInicial) + parseFloat(dividendos)) / parseFloat(precoInicial));
        setRetorno(retornoCalculado);
        navigation.navigate('Resultado', { retorno: retornoCalculado });
    };

    return(
        <View style={styles.container}>
            <Text>Preço inicial:</Text>
            <TextInput
             style={styles.input}
                placeholder="Digite o preço inicial"
                value={precoInicial}
                onChangeText={text => setPrecoInicial(text)}
                keyboardType="numeric"
            />

            <Text>Preço final:</Text>
            <TextInput
             style={styles.input}
                placeholder="Digite o preço inicial"
                value={precoFinal}
                onChangeText={text => setPrecoFinal(text)}
                keyboardType="numeric"
            />

            <Text>Dividendos final:</Text>
            <TextInput
             style={styles.input}
                placeholder="Digite o preço inicial"
                value={dividendos}
                onChangeText={text => setDividendos(text)}
                keyboardType="numeric"
            />

            <Button
                title="Calcular Retorno"
                onPress={calcularRetorno}
            />
          <Button title="Fechar" onPress={() => navigation.goBack()} />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    }
})