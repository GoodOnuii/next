import { Schema } from 'mongoose';

import { dbConnect } from '@/lib/dbConnect';

const conn = await dbConnect();

const Hello = new Schema(
  {
    world: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default conn.model('hello', Hello);
