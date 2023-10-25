import axios, { Axios } from "axios";

type TSimplePrice = {
    usd: number
};

export class api {
    static CoinGecko = class {
        description: string = "CoinGecko API Instance";
        #URL: string = 'https://api.coingecko.com/api/v3';
        #paths = {
            ping: '/ping',
            coins_list: '/coins/list?include_platform=true', //List all supported coins id, name and symbol
            coins_markets: //List all supported coin price, market cap, volume and market related data
                (currency: string = 'usd', order: string = 'market_cap_desc', page: number = 1, per_page: number = 10) =>
                    `/coins/markets?vs_currency=${currency}&order=${order}&per_page=${per_page}&page=${page}&price_change_percentage=24h%2C7d%2C30d%2C1y`,
            coins_id: (id: string | undefined) => `/coins/${id}`, //Get current data (name, price, market, ... including exchange tickers) for a coin.
            coins_id_market_chart:
                (id: string | undefined, currency: string = 'usd', days: string = 'max') => `coins/${id}/market_chart?vs_currency=${currency}&days=${days}`,
            //Get historical market data include price, market cap, and 24h volume (granularity auto)
            // Minutely data will be used for duration within 1 day, Hourly data will be used for duration between 1 day and 90 days,
            // Daily data will be used for duration above 90 days.
            search_trending: 'search/trending', //Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first)
            simple_price: (id: string, currency: string = 'usd') => `/simple/price?ids=${id}&vs_currencies=${currency}`
        }
        #AxiosInstance!: Axios;
        constructor() {
            try {
                this.#AxiosInstance = axios.create({
                    baseURL: this.#URL,
                    timeout: 10000,
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                })
            }
            catch (error) {
                console.error("Failed to create Axios instance ", error);
            }

        }
        ping = async () => {
            const response = await this.#AxiosInstance.get(this.#paths.ping);
            return response.data;
        }
        get = {
            coins_list: async () => {
                try {
                    const response = await this.#AxiosInstance.get(this.#paths.coins_list);
                    return response.data;
                }
                catch (error) {
                    console.error(error);
                    //throw error;
                }
            },
            coins_markets: async (currency?: string, order?: string, page?: number): Promise<Object> => {
                try {
                    const response = await this.#AxiosInstance.get(this.#paths.coins_markets(currency, order, page));
                    return response.data
                }
                catch (error) {
                    console.error(error);
                    throw error;
                }
            },
            coins_id: async (id: string | undefined) => {
                try {
                    const response = await this.#AxiosInstance.get(this.#paths.coins_id(id));
                    return response.data;
                }
                catch (error) {
                    console.error(error);
                    // throw error;
                }
            },
            coins_id_market_chart: async (id: string | undefined, currency?: string, days?: string) => {
                try {
                    const response = await this.#AxiosInstance.get(this.#paths.coins_id_market_chart(id, currency, days));
                    return response.data;
                }
                catch (error) {
                    console.error(error);
                    // throw error;
                }
            },
            search_trending: async () => {
                try {
                    const response = await this.#AxiosInstance.get(this.#paths.search_trending);
                    return response.data;
                }
                catch (error) {
                    console.error(error);
                }
            },
            simple_price: async (id: string, currency?: string): Promise<ArrayLike<TSimplePrice> | { [s: string]: TSimplePrice }> => {
                try {
                    const response = await this.#AxiosInstance.get(this.#paths.simple_price(id, currency));
                    return response.data;
                }
                catch (error) {
                    console.error(error);
                    throw (error);
                }
            }
        };
    };
};