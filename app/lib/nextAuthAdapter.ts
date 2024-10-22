// lib/nextAuthAdapter.ts
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from './mongodb'; // Use MongoClient connection from mongodb.ts

export const NextAuthAdapter = MongoDBAdapter(clientPromise);
