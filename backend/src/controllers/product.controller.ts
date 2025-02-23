import { Request, Response } from "express";
import pool from "../config/db";
import { Product } from "../models/product.model";

// Lấy danh sách sản phẩm
export const getProducts = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy sản phẩm" });
  }
};

// Thêm sản phẩm
export const createProduct = async (req: Request, res: Response) => {
  const { name, price, description, imageUrl, stock, categoryId }: Product = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO products (name, price, description, imageUrl, stock, categoryId) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, price, description, imageUrl, stock, categoryId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi thêm sản phẩm" });
  }
};


// Cập nhật sản phẩm
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, description, imageUrl, stock, categoryId }: Product = req.body;
  try {
    const result = await pool.query(
      "UPDATE products SET name=$1, price=$2, description=$3, imageUrl=$4, stock=$5, categoryId=$6 WHERE id=$7 RETURNING *",
      [name, price, description, imageUrl, stock, categoryId, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi cập nhật sản phẩm" });
  }
};


// Xóa sản phẩm
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM products WHERE id=$1", [id]);
    res.json({ message: "Sản phẩm đã được xóa" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa sản phẩm" });
  }
};
