import { Schema, Document } from 'mongoose';

export const ProductSchema = new Schema({
  title: String,
  description: String,
  price: String,
});

export interface Product extends Document {
  title: string;
  description: string;
  price: string;
}


