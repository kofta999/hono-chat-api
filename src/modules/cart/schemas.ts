import { z } from "@hono/zod-openapi";
import { ProductSchema, SizeZodSchema } from "../products/types";

const OperationEnum = z.enum(["inc", "dec", "del"]);

export const MutateCartSchema = z.object({
  productId: z.number(),
  quantity: z.number(),
  size: SizeZodSchema,
  color: z.string(),
  type: OperationEnum,
});

const CartProductSchema = ProductSchema.omit({
  description: true,
  quantity: true,
  rate: true,
  categoryId: true,
});

export const CartItemSchema = z.object({
  id: z.number(),
  quantity: z.number(),
  product: CartProductSchema,
});

export type CartProduct = z.infer<typeof CartProductSchema>;
