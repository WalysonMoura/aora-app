import React from 'react';
import { View, ActivityIndicator, Dimensions, Platform } from 'react-native';

export  function Loader({ isLoading }: { isLoading: boolean }) {
  const osName = Platform.OS;
  const screenHeight = Dimensions.get('screen').height;

  if (!isLoading) return null;

  return (
    <View
      className="bg-primary/60 absolute z-10 flex h-full w-full items-center justify-center"
      style={{
        height: screenHeight,
      }}>
      <ActivityIndicator
        animating={isLoading}
        color="#fff"
        size={osName === 'ios' ? 'large' : 50}
      />
    </View>
  );
}