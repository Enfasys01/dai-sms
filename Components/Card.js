import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import * as SMS from 'expo-sms';
import { Linking } from "react-native";
const Card = (props) =>{
    return(<>
        <View style={styles.card}>
            <Image style={{flex:1, height:'100%', borderRadius:999}} source={{uri:props.data.imagen}}/>
            <View style={{flex:2, height:'100%', paddingLeft:10}}>
                <Text>{props.data.titulo}</Text>
                <View style={{flex:1, flexDirection:'row'}}>
                    <TouchableOpacity style={styles.btn} onPress={()=>{Linking.openURL('tel:/'+props.data.telefono)}}>
                        <Text style={{color:'white',}}>CALL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color:'white',}} onPress={()=>{SMS.sendSMSAsync([props.data.telefono],'',);}}>Message
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>)
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        height:200,
        flexDirection: "row",
        borderWidth:1,
        borderRadius:5,
        borderColor:'gray',
        width:'100%',
        padding:10, 
    },btn:{
        alignSelf:'flex-end',
        backgroundColor:'royalblue',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        height:40,
        borderRadius:5,
        padding:5,
        marginRight:10
    }
  });
export default Card