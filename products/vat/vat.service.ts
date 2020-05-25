import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

@Injectable()
export class VatService {
    private apiEndpoint = 'https://api.vatsense.com/1.0/rates';

    public async GetVat() {
        const res = await axios.get(this.apiEndpoint, {
            params: {
                country_code: 'bg'
            },
            auth: {
                username: 'user',
                password: '4b22eef0bcc15996ebede1a375be4510'
              }
        });
        return res.data.data.standard.rate;
    }
}
