import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons'

const Card = ({ title, icon }) =>
  <View style={{
    flexDirection: "row",
    height: 80,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderColor: "#d4d4d8",
    alignItems: "center",
    justifyContent: "space-evenly"
  }}>
    {icon && <FontAwesome name="rocket" size={20} color="#9f1239" />}
    <Text style={{ color: title === 'Open' ? "#c084fc" : "#a1a1aa" }}>{title}</Text>
  </View>

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#bdbdbd" hidden={false} />
      <View style={styles.div_1}>
        <Ionicons name="chevron-back" size={32} color="#a3a3a3" />
        <Ionicons name="menu" size={32} color="#a3a3a3" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.div_2}>
          <Text style={styles.text_1}>Shade Control</Text>
          <Text style={styles.text_2}>Living Room</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.text_3}>SCENES</Text>
          <View style={{
            flexDirection: 'row', justifyContent: "space-between",
            paddingHorizontal: 8
          }}>
            <View style={{ width: "48%" }}>
              <Card title="All Off" icon={true} />
              <Card title="All Off" icon={true} />
            </View>
            <View style={{ width: "48%" }}>
              <Card title="Bright" icon={true} />
              <Card title="Bright" icon={true} />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.text_3}>GROUP CONTROLS</Text>
          <View style={{
            flexDirection: "row", justifyContent: "space-between",
            paddingHorizontal: 8
          }}>
            <View style={{ width: "48%" }}>
              <Card title="More Open" />
            </View>
            <View style={{ width: "48%" }}>
              <Card title="More Close" />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.text_3}>CONTROLS</Text>
          <View style={{ width: "96%", marginHorizontal: 8 }}>
            <View style={{
              flexDirection: "row",
              height: 80,
              marginVertical: 5,
              paddingHorizontal: 20,
              backgroundColor: "#fff",
              borderBottomWidth: 0.5,
              borderColor: "#d4d4d8",
              alignItems: "center",
            }}>
              <AntDesign name='rightcircle' size={20} color="#71717a" />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>Window Roller Blind</Text>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>OFF</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{
          flexDirection: "row", paddingHorizontal: 8,
          justifyContent: "space-between"
        }}>
          <View style={{ width: "31%" }}>
            <Card title="Open" />
          </View>
          <View style={{ width: "31%" }}>
            <Card title="Pause" />
          </View>
          <View style={{ width: "31%" }}>
            <Card title="Close" />
          </View>
        </View>
        <View style={{
          flexDirection: "row", justifyContent: "space-between",
          paddingHorizontal: 8
        }}>
          <View style={{ width: "48%" }}>
            <Card title="Blackout" />
          </View>
          <View style={{ width: "48%" }}>
            <Card title="Flip+" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f5',
  },
  div_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  div_2: {
    marginTop: 5
  },
  text_1: {
    fontSize: 20,
    color: "#424242",
    marginLeft: 15,
    fontWeight: "700"
  },
  text_2: {
    fontSize: 12,
    color: "#737373",
    marginLeft: 15,
    fontWeight: "500"
  },
  text_3: {
    marginTop: 5,
    marginLeft: 15,
    fontWeight: "700",
    color: "#737373",
  }
});
