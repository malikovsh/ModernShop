
export type LoginPayloadType = {
    email: string
    password: string
}

export type LoginResponseType = {
    name: string,
    id: string,
    email: string,
    token: string
}