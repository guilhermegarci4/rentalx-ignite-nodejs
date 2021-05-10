import { ICreateUserTokenDTO } from "@modules/accounts/dtos/ICreateUserTokenDTO";
import { UsersTokens } from "../infra/typeorm/entities/UserTokens";


interface IUsersTokensRepository {
    
    create({
        expires_date,
        refresh_token,
        user_id
    }: ICreateUserTokenDTO): Promise<UsersTokens>;
}

export { IUsersTokensRepository }