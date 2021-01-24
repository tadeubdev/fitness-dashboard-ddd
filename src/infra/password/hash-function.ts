import { PasswordHashInterface } from "../../entities/user/user/password-hash-interface";

export class HashFunction implements PasswordHashInterface {
    async hash (password: string): Promise<string> {
        const hash: string = `secure-${password}-hashed`;
        return await new Promise(resolve => resolve(hash));
    }
}