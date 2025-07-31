import { Account, Client, Databases, Storage } from 'appwrite'

const NUXT_PUBLIC_APPWRITE_PROJECT_ID = 'crm-example';
const NUXT_PUBLIC_APPWRITE_ENDPOINT = 'https://fra.cloud.appwrite.io/v1';
const NUXT_PUBLIC_APPWRITE_DATABASE_ID = 'crm-example';
const NUXT_PUBLIC_APPWRITE_COLLECTION_DEALS = 'deals';
const NUXT_PUBLIC_APPWRITE_COLLECTION_CUSTOMERS = 'customers';
const NUXT_PUBLIC_APPWRITE_COLLECTION_COMMENTS = 'comments';
const NUXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID = 'storage';

export const client = new Client()

client.setEndpoint(NUXT_PUBLIC_APPWRITE_ENDPOINT).setProject(NUXT_PUBLIC_APPWRITE_PROJECT_ID)

export const account = new Account(client)
export { ID } from 'appwrite'
export const DB = new Databases(client)
export const storage = new Storage(client)
