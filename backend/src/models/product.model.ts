export interface Product {
  id?: number;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;  // Ảnh sản phẩm
  stock: number;      // Số lượng tồn kho
  categoryId: number; // FK - Loại sản phẩm
}
