import config from "../config/config";
import { Client , ID , Databases , Storage , Query } from "appwrite";

export class AppwriteService{
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
            .setProject(config.appwriteProjectID)
            .setEndpoint(config.appwriteUrl)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
}
    async createPost({title , slug , content , featuredImage , status , userId}){
        try {
            await this.databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite createPost error : " ,  error);
        }
    }

    async updatePost(slug , {title , content , featuredImage , status , userId}){
        try {
            await this.databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite updatePost error : " ,  error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite deletePost error : " ,  error);  
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
            )
        } catch (error) {
            console.log("Appwrite getPosts error : " ,  error);
        }
    }

    async getPosts(){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                [
                    Query.equal('status' , 'active')
                ],
                
            )
        } catch (error) {
            console.log("Appwrite getPosts error : " ,  error);
        }
    }

//file upload services
    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite file upload error: " , error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                config.appwriteBucketID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite file delete error: " , error);
        }
    }

    getfilePreview(fileId){
        return this.storage.getFilePreview(
            config.appwriteBucketID,
            fileId
        )
    }
}



const appwriteService = new AppwriteService();

export default appwriteService;