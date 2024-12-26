/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export interface TUser {
  email: string;
  password: string;
  role: "admin";
}

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByEmail(email: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}
