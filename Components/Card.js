import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const Card = (props) =>{
    console.log(props)
    return(<>
        <View style={styles.card}>
            <Image style={{flex:1, height:'100%'}} source={{uri:props.data.imagen}}/>
            <View style={{flex:2, height:'100%', paddingLeft:5}}>
                <Text>{props.data.titulo}</Text>
                <View style={{flex:1, flexDirection:'row'}}>
                    <TouchableOpacity style={styles.btn}>
                        <Text>CALL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text>Message</Text>
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
        backgroundColor:'red',
        width:'100%',
        padding:10, 
    },btn:{
        backgroundColor:'green',
        textAlign:'center',
        flex:1,
        height:30,
        padding:5,
        marginRight:10
    }
  });
export default Card