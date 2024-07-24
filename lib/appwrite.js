import { Appwrite } from "appwrite";
import {
  Account,
  Avatars,
  sdk,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "cloud.appwrite.io",
  projectid: "66956a29000c5e476601",
  databaseid: "66956ab20006954db44b",
  userid: "66956ac80026ea77d4af",
  videoid: "66956acf0027ce577ddd",
  storageid: "66956c9e003958ae1330",
};

const{
  endpoint,
  platform,
  projectid,
  databaseid,
  userid,
  videoid,
  storageid
}=config;

// Init your React Native SDK
const client = new Client();

client.setEndpoint(endpoint).setProject(projectid);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createuser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;

    const avatarurl = avatars.getInitials(username);
    await signIn(email, password);

    const newuser = await databases.createDocument(
      databaseid,
      userid,
      ID.unique(),
      {
        accountid: newAccount.$id,
        email,
        username,
        avatar: avatarurl,
      }
    );
    return newuser;


  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
export const signIn=async(email, password)=> {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      databaseid,
      userid,
      [Query.equal("accountid", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error(error);
  }
}



export const getAllpost= async ()=>{
  try {
    const posts=await databases.listDocuments(
      databaseid,
      videoid
    )
    return posts.documents;
  } catch (error) {
    throw new Error(error)
  }
}
export const getlatest= async ()=>{
  try {
    const posts=await databases.listDocuments(
      databaseid,
      videoid,
      [Query.orderDesc('$createdAt', Query.limit(7))]
    )
    return posts.documents;
  } catch (error) {
    throw new Error(error)
  }
}
export const searchPosts= async (query)=>{
  try {
    const posts = await databases.listDocuments(
      databaseid,
      videoid,
      [Query.search("title", query)]
    );

    if (!posts) throw new Error("Something went wrong");

    return posts.documents;
  } catch (error) {
    throw new Error(error)
  }
}
export const getUserPosts= async (userid)=>{
  try {
    const posts = await databases.listDocuments(
      databaseid,
      videoid,
      [Query.equal("users", userid)]
    );

    if (!posts) throw new Error("Something went wrong");

    return posts.documents;
  } catch (error) {
    throw new Error(error)
  }
}



//create user
// // account.create(ID.unique(), "me@gmaiil.com", "oassword", "name").then(
// //   function (response) {
// //     console.log(response);
// //   },
// //   function (error) {
// //     console.log(error);
// //   }
// // );
