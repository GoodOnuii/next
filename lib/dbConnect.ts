import { Connection, createConnection } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let { mongoose } = global as any;

let cached = mongoose?.[MONGODB_URI];

if (!cached) {
  mongoose = { ...mongoose };
  cached = mongoose[MONGODB_URI] = { conn: null, promise: null };
}

export const dbConnect = async (): Promise<Connection> => {
  const cached = mongoose[MONGODB_URI];

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.conn = createConnection(MONGODB_URI, opts);
    cached.promise = cached.conn.asPromise();
  }

  try {
    await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};
