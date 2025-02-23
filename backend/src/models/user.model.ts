export interface User {
    id?: number;
    fullName: string;
    email: string;
    password: string;
    phone?: string;
    address?: string;
    role?: "Customer" | "Admin"; // Phân quyền
}
