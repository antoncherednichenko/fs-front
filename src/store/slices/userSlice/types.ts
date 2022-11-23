export interface IUserState {
    role: string | null
    email: string | null
    id: number | null
    accessToken: string | null
    isBanned: boolean
    banReason: string | null
    createdAt?: string
    updatedAt?: string
}