import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setProject(config.appwriteProjectID)
            .setEndpoint(config.appwriteUrl)
        this.account = new Account(this.client)
    }

    async createAccount({email , password , name}){
        try {
           const userAccount =  await this.account.create({userId: ID.unique(), email , password , name});
           if(userAccount){
            // call other methods
            return this.loginAccount({email , password})
           }else{
            return userAccount
           }
        } catch (error) {
            throw error;
        }
    }

    async loginAccount({email , password} ){
        try {
           return await this.account.createEmailSession(email , password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
        return null;
    }

    async logoutAccount(){
        try {
            return await this.account.deleteSessions('current')
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService
