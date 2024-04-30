import { View, Text, Button} from "react-native";
import { StyleSheet } from "react-native";

export function Resultado({route,navigation}) {
    const { retorno } = route.params;
    return(
       <View style={styles.container}>
             <Text>Dados da Tela Anterior:</Text>
             
             <Text>Retorno Calculado: {retorno}</Text>
             <Button title="Fechar" onPress={() => navigation.goBack()} />
        </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})