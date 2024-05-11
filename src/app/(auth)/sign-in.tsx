import { CustomButton } from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { images } from "@/constants";
import { useAuth } from "@/hooks/useAuth";
import { getCurrentUser, signIn } from "@/lib/appwrite";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const { setUser, setIsLogged } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setSubmiting] = useState(false);

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Por favor preencha todos os campos");
    }

    setSubmiting(true);

    try {
      await signIn(form.email, form.password);
      const user = await getCurrentUser();
      setUser(user);
      setIsLogged(true);

      Alert.alert("Sucesso", "Usuário conectado com sucesso");
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmiting(false);
    }
  };

  return (
    <SafeAreaView className=" flex-1 bg-primary">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Faça login no Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            placeholder="Email"
            keyboardType="email-address"
          />

          <FormField
            title="Passwaord"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder="Senha"
          />

          <CustomButton
            title="Entrar"
            containerStyles="mt-7"
            handlePress={submit}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Não tem uma conta?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Inscrever-se
            </Link>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
    </SafeAreaView>
  );
};

export default SignIn;
