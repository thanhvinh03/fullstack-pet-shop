export interface Order {
    id?: number;
    userId: number;   // FK - Người dùng đặt hàng
    totalAmount: number;  // Tổng tiền đơn hàng
    status: "Pending" | "Confirmed" | "Shipped" | "Delivered" | "Cancelled"; // Trạng thái đơn hàng
}
