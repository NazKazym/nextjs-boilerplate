// lib/nextAuthAdapter.ts
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import dbConnect from "./mongoose";

export const NextAuthAdapter = MongoDBAdapter(dbConnect);
