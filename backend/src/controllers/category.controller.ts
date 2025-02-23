import { Request, Response } from "express";
import pool from "../config/db";
import { Category } from "../models/category.model";

// Lấy danh sách danh mục
export const getCategories = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM categories");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy danh mục" });
  }
};

// Thêm danh mục
export const createCategory = async (req: Request, res: Response) => {
  const { name, description }: Category = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *",
      [name, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi thêm danh mục" });
  }
};

// Cập nhật danh mục
export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description }: Category = req.body;
  try {
    const result = await pool.query(
      "UPDATE categories SET name=$1, description=$2 WHERE id=$3 RETURNING *",
      [name, description, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi cập nhật danh mục" });
  }
};

// Xóa danh mục
export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM categories WHERE id=$1", [id]);
    res.json({ message: "Danh mục đã được xóa" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa danh mục" });
  }
};
