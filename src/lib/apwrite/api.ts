import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";
import { ID } from "appwrite";
import { error } from "console";

export async function createuserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    if (!newAccount) throw error;
    const avatarUrl = avatars.getInitials(user.name);

    const newUser = await saveUserToDB({
      accoundId: newAccount.$id,
      email: newAccount.email,
      name: newAccount.name,

      username: user.username,
      imageUrl: avatarUrl,
    });
    return newAccount;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function saveUserToDB(user: {
  accoundId: string;
  email: string;
  name: string;
  imageUrl: URL;
  username?: string;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );
    return newUser;
  } catch (error) {
    console.log(error);
  }
}
