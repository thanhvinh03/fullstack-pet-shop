export interface OrderDetail {
    id?: number;
    orderId: number;   // FK - Đơn hàng
    productId: number; // FK - Sản phẩm
    quantity: number;
    unitPrice: number;  // Giá tại thời điểm đặt
    totalPrice: number; // quantity * unitPrice
}
