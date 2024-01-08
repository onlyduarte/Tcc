import { StyleSheet, Text, View, Image, Modal } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Stars from "./Stars";
import CustomAlerta from "./Alerta";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "@rneui/themed";




const CardCliente = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    
  };
  return (
    <TouchableOpacity onPress={toggleModal}>
    <View style={styles.body}>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../images/logoTCC.png")}
            style={{ width: 100, height: 100, top: 15 }}
          />
        </View>
        <View style={styles.infoUser}>
          <Text style={styles.textUser}>Juan Denner</Text>
          <Text style={[styles.textUser, { marginBottom: 15, fontSize: 13 }]}>
            Cabeleleiro
          </Text>
          <Text style={[styles.textUser, { fontSize: 13 }]}>
            100% de recomendação
          </Text>
        </View>
        <View style={{ top: 15, gap: 2 }}>
        <Stars star={props.star}/>
          <Text>Avaliações: {props.avaliacao}</Text>
        </View>
      </View>
    </View>
    <Modal visible={isModalVisible} onRequestClose={toggleModal} transparent={true}>
      <Button onPress={toggleModal} buttonStyle={{width: '100%'}}/>
        <View style={styles.bodyModal}>
          <View style={styles.contImage}>
            <Image
              source={require("../images/logoTCC.png")}
              style={{ width: 100, height: 100, top: 15 }}
              />
            <Text style={styles.textH1}>
              Juan Dener {'\n'}
              Barbeiro {'\n'}
              "Transformando estilo, {'\n'}uma tesourada {'\n'}de cada vez!"
            </Text>
          </View>
          <View>
            <Stars star={props.star}/>
            <Text>
              Mais de 10 anos de experiência em cortes de cabelo{'\n'}
              Especialidade em cortes masculinos e femininos{'\n'}
              Certificado em técnicas de barbearia{'\n'}
              Ambiente acolhedor e amigável{'\n'}
              Atendimento personalizado para atender às suas necessidades{'\n'}
              Oferecemos serviços de corte, barba, tratamentos capilares e muito +{'\n'}
            </Text>
          </View>
          <Button title="Agendar Horário" onPress={toggleModal} color="#000000" buttonStyle={{ width: 150, height: 40, borderRadius: 12, left: 100 }} />
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: 130,
    alignItems: "center",
    marginTop: 20,
  },
  container: {
    width: "90%",
    height: "100%",
    backgroundColor: "#D9D9D9",
    borderRadius: 3,
    flexDirection: "row",
  },
  star: {
    flexDirection: "row",
  },
  infoUser: {
    top: 20,
    gap: 3,
  },
  textUser: {
    fontWeight: "bold",
  },
  bodyModal: {
    width: '100%',
    height: 340,
    backgroundColor: '#D9D9D9',
    flexDirection: 'column',
    borderRadius: 8,
    paddingLeft: 20,
    top: 200
  },
  contImage: {
    flexDirection: 'row',
  },
  textH1: {
    fontWeight: 'bold',
    top: 10
  },
  touch:{
    backgroundColor: 'red',
    width: '100%',
  }
});
export default CardCliente;
