import { CustomButton } from '@/components/CustomButton';
import { Loader } from '@/components/Loader';
import { images } from '@/constants';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      {/*  <Loader isLoading={true} /> */}
      <ScrollView
        contentContainerStyle={{
          height: '100%',
          backgroundColor: '#161622',
        }}>
        <View className="flex h-full w-full items-center justify-center  px-4">
          <Image source={images.logo} className="h-[84px] w-[130px]" resizeMode="contain" />
          <Image
            source={images.cards}
            className="h-[298px] w-full max-w-[380px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-center text-3xl font-bold text-white">
              Descubra o infinito{'\n'}
              Possibilidades com{' '}
            </Text>
            <Image
              source={images.path}
              className="absolute -bottom-2 -right-8 h-[15px] w-[136px]"
              resizeMode="contain"
            />
          </View>

          <Text className="mt-7 text-center font-pregular text-sm text-gray-100">
            Onde a criatividade encontra a inovação: embarque em uma jornada ilimitada Exploração
            com Aora
          </Text>
          <CustomButton
            title="Continue com e-mail"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" barStyle="light-content" />
    </SafeAreaView>
  );
};

export default Welcome;