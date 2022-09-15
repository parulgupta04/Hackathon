// import {
//   Text,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   View,
//   Image,
// } from 'react-native';
// import React from 'react';
// import LinearGradient from 'react-native-linear-gradient';

// export default function App() {
//   const styles = StyleSheet.create({
//     linearGradient: {
//       flex: 1,
//       // paddingLeft: 15,
//       // paddingRight: 15,
//       // borderRadius: 5,
//     },
//     buttonText: {
//       fontSize: 18,
//       fontFamily: 'Gill Sans',
//       textAlign: 'center',
//       margin: 10,
//       color: '#000000',
//       backgroundColor: 'transparent',
//     },
//     buttonTextBold: {
//       fontSize: 35,
//       fontFamily: 'Gill Sans',
//       textAlign: 'center',
//       margin: 10,
//       color: '#000000',
//     },
//     topRow: {
//       textAlign: 'center',
//       paddingVertical: 16,
//       backgroundColor: '#CCCCCC',
//       fontSize: 18,
//       fontFamily: 'Gill Sans',
//       fontWeight: 'bold',
//     },
//     imagebackground: {
//       backgroundColor: '#000000',
//       padding: 16,
//     },
//   });
//   // FF9213
//   return (
//     <SafeAreaView>
//       <Text style={styles.topRow}>HACKATHON - 22</Text>
//       <ScrollView style={{backgroundColor: 'red'}}>
//         <View style={styles.imagebackground}>
//           <Image source={{background}} style={{height: 30, width: 30}} />
//           <Image
//             style={{height: 30, width: 30}}
//             source={require('./images/background.jpeg')}
//             resizeMode="contain"
//           />
//         </View>
//         <LinearGradient
//           colors={['#7D8035', '#FFFFC1', '#FF9213']}
//           style={styles.linearGradient}>
//           <Text style={styles.buttonTextBold}>Sign in with Facebook</Text>
//           <Text style={styles.buttonTextBold}>
//             FNP presents : Gifting is a joy
//           </Text>
//           <Text style={styles.buttonTextBold}>Celebrate Gifting</Text>
//         </LinearGradient>
//         <Text style={styles.buttonTextBold}>Welcome to HACKATHON-22</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

import React, {Component} from 'react';
import {Animated, View, TouchableOpacity, Easing, Text} from 'react-native';

const backgroundImage = require('./images/background.jpeg');

class App extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  handleAnimation = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
    }).start();
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={this.handleAnimation}>
          <Text>Transform Image</Text>
        </TouchableOpacity>
        <Animated.Image
          source={backgroundImage}
          resizeMode="cover"
          style={{
            position: 'absolute',
            left: 40,
            top: 100,
            height: 20,
            width: 20,
            transform: [
              {
                translateX: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 120],
                }),
              },
              {
                translateY: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 25],
                }),
              },
              {
                scaleX: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 15],
                }),
              },
              {
                scaleY: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 12.5],
                }),
              },
            ],
          }}
        />
      </View>
    );
  }
}

export default App;
