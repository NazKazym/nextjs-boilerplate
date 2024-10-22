// global.d.ts
import { MongoClient } from "mongodb";

declare global {
    // Extend the NodeJS global object to include our custom property
    namespace NodeJS {
        interface Global {
            _mongoClientPromise: Promise<MongoClient>;
        }
    }
}

// Make sure to export something to convert this into a module
export { };

