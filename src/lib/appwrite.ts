import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.walysonmoura.aora",
  projectId: "6639132400193d18781d",
  storageId: "660d0e59e293896f1eaf",
  databaseId: "6639161b003cb9e6d2b4",
  userCollectionId: "663916680008e0df4b1a",
  videoCollectionId: "6639174f000a63877574",
};

const client: Client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account: Account = new Account(client);
const storage: Storage = new Storage(client);
const avatars: Avatars = new Avatars(client);
const databases: Databases = new Databases(client);

export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();

    if (!currentAccount) {
      throw Error;
    }

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) {
      throw Error;
    }

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function signIn(email: string, password: string) {
  try {
    const session = await account.createEmailSession(email, password);

    return session;
  } catch (error: any) {
    throw new Error(error);
  }
}
