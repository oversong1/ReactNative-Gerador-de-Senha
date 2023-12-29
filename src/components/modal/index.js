import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native"
import * as Clipboard from 'expo-clipboard'
import useStorage from "../../hooks/useStorage"

export function ModalPassword({ password, handleClose}){
    const { saveItem } = useStorage();

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        await saveItem("@pass", password)
        alert("Senha salva com sucesso")

        handleClose()
    }

    return(
        <View style={styles.conatiner}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}> 
                            Voltar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={handleCopyPassword}>
                        <Text style={styles.buttonSenha}> Salvar Senha </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor: "rgba(24,24,24, 0.6)",
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        backgroundColor:"#fff",
        width:"85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        color:"#000",
        marginBottom: 24,
    },
    innerPassword:{
        backgroundColor:"#0e0e0e",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },
    text:{
        color: "#fff",
        textAlign:"center"
    },
    buttonArea:{
        flexDirection:"row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-around"
    },
    button:{
        padding: 10,
    },
    buttonSenha:{
        backgroundColor: 'blue',
        padding: 10,
        color:'#fff',
        borderRadius: 30
    }
})