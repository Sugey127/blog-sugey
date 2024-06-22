import { AccountRepository } from '../domain/account-repository';
import { User } from '../domain/user';

export class ApiAccountRepository implements AccountRepository {
    private ACCOUNT_API_URL = 'http://localhost:8080/api/v1/account';

    async getAccount(): Promise<User> {
        const response = await fetch(this.ACCOUNT_API_URL, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzNmI0ZDljLTEzNDgtNDlkNS1iM2M2LTNmMWFkNDk4Y2M5ZiIsImlhdCI6MTcxOTA0MzYyOSwiZXhwIjoxNzE5MDY1MjI5fQ.uKKnNF9p_2g9pYaIlPRZ6Syqcvep08dXZV0K4a_RFMQ',
            }
        });

        if(!response.ok) {
            throw new Error('request failed');
        }
        
        return await response.json();
    }

}