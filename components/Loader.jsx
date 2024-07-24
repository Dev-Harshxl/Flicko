// AnimatedCharacter.js
import React, { useRef, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = () => {
  const animation = useRef(null);

  useEffect(() => {
    if (animation.current) {
      animation.current.play();
    }
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        source={require('../assets/search.json')} 
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 200,
    
    
  },
  animation: {
    width: '100%',
    height: '120%',
  },
});

export default Loader;
