import { images } from '@/constants';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView>
        <View>
          <Image source={images.logo} />
          <Text className="text-5xl text-slate-100">Faça login no Aora</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
