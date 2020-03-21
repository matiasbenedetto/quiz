import axios, { AxiosInstance } from 'axios';
import { normalizeGlossaryItems } from './utils';
import { GlossaryItem } from './types';

class Api {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: 'https://api.binance.vision/api/',
            timeout: 5000,
        });
    }

    async getGlossary(): Promise<GlossaryItem[]> {
        const { data } = await this.client.get(`glossaries`);
        return normalizeGlossaryItems(data);
    };
}

const api = new Api();
Object.freeze(api);
export default api;
