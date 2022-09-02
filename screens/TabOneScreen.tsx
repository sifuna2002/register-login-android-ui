
import { Button, Pressable, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Icon name="arrow-left" size={20} color="#f0fff0" />
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.description}>please fill the input below here</Text>
      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          <Icon name="user" style={styles.icon} color='white' />
          <View style={styles.contain}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput style={styles.textInput}>Jhone Williams</TextInput>
          </View>
        </View>
        <View style={styles.textContainer2}>
          <Icon name="smartphone" style={styles.icon} color='white' />
          <View style={styles.contain}>
            <Text style={styles.label}>Phone</Text>
          </View>
        </View>
        <View style={styles.textContainer2}>
          <Icon name="mail" style={styles.icon} color='white' />
          <View style={styles.contain}>
            <Text style={styles.label}>Email</Text>
          </View>
        </View>
        <View style={styles.textContainer2}>
          <Icon name="lock" style={styles.icon} color='white' />
          <View style={styles.contain}>
            <Text style={styles.label}>Password</Text>
          </View>
        </View>
        <View style={styles.textContainer2}>
          <Icon name="lock" style={styles.icon} color='white' />
          <View style={styles.contain}>
            <Text style={styles.label}>Confirm Password</Text>
          </View>
        </View>
        <View style={styles.contain2}>
          <Pressable style={styles.button} >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  buttonText: {
  },
  button:{
    width:'60%',
    borderRadius: 20,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0df6e3',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 20,
    color: '#fff',
  },
  inputContainer: {
    marginVertical: 30,
    width: '100%',
  },
  textContainer: {
    height: 50,
    backgroundColor:'#39304d',
    flexDirection: 'row',
    borderRadius: 6,
    alignItems: 'center',
    },
    textContainer2: {
      marginTop:15,
      height: 40,
      backgroundColor:'transparent',
      flexDirection: 'row',
      borderRadius: 6,
      alignItems: 'center',
      },
    label: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#fff',
      },
      textInput: {
        fontSize: 10,
        color: '#fff',
        },
      contain:{
        marginLeft: 10,
        backgroundColor:'transparent',
        flexDirection: 'column',
      },
      contain2:{
        marginTop: 10,
        backgroundColor:'transparent',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      icon:{
        fontSize: 25,
        marginLeft: 15,
      }
});
