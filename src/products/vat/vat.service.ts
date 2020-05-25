import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

@Injectable()
export class VatService {
    private apiEndpoint = 'http://www.apilayer.net/api/rate';

    public async GetVat(countryCode: string) {
        const res = await axios.get(this.apiEndpoint, {
            params: {
                country_code: countryCode,
                access_key: '88da077c3ab3136df0dcc139492bdcdf'
            },
        });
        return res.data.standard_rate;
    }
}
