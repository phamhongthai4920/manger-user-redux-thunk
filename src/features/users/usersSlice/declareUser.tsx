export interface user {
    username: string,
    email: string,
    role: string,
    id?: number
}
export interface deleteUserId {
    id: number
}
export interface register {
    username: string,
    email: string,
    password: string,
}
export interface login {
    email: string,
    password: string,
}
