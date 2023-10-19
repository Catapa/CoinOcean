export const clearHTML = (stringWithHTML: string) => {
    const regex = /(<([^>]+)>)/ig;
    const stringWithoutHTML: string = stringWithHTML.replace(regex, '');
    return stringWithoutHTML;
}

// TODO: future improvement
export const formatNumber = (input: string | number) => {
    const number: number = (typeof input === 'string') ? parseFloat(input) : input;
    if (!isNaN(number)) {
        if (Math.round(number) === number) {
            return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        } else {
            const parsedInput = (typeof input === 'string') ? parseFloat(input) : input;
            return parsedInput.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
    else if (!input) {
        return 'No Data';
    }

    return input
}

export type TCoin = {
    block_time_in_minutes: number,
    categories: string[],
    description: {
        en: string
    },
    genesis_date: string,
    hashing_algorithm: string,
    id: string,
    image: {
        large: string,
        small: string,
        thumb: string,
    },
    liquidity_score: number,
    market_cap_rank: number,
    market_data: {
        ath: {
            usd: number,
            eur: number
        },
        ath_change_percentage: {
            usd: number,
            eur: number
        },
        ath_date: {
            usd: string,
            eur: string
        },
        atl: {
            usd: number,
            eur: number
        },
        atl_change_percentage: {
            usd: number,
            eur: number
        },
        atl_date: {
            usd: string,
            eur: string
        },
        circulating_supply: number,
        current_price: {
            usd: number,
            eur: number
        },
        high_24h: {
            usd: number,
            eur: number
        },
        low_24h: {
            usd: number,
            eur: number
        },
        market_cap: {
            usd: number,
            eur: number
        },
        market_cap_rank: number,
        max_supply: number,
        price_change_24h_in_currency: {
            usd: number,
            eur: number
        },
        price_change_percentage_1h_in_currency: {
            usd: number,
            eur: number
        },
        price_change_percentage_1y_in_currency: {
            usd: number,
            eur: number
        },
        price_change_percentage_7d_in_currency: {
            usd: number,
            eur: number
        },
        price_change_percentage_14d_in_currency: {
            usd: number,
            eur: number
        },
        price_change_percentage_24h_in_currency: {
            usd: number,
            eur: number
        },
        price_change_percentage_30d_in_currency: {
            usd: number,
            eur: number
        },
        price_change_percentage_60d_in_currency: {
            usd: number,
            eur: number
        },
        price_change_percentage_200d_in_currency: {
            usd: number,
            eur: number
        }
    },
    name: string,
    sentiment_votes_down_percentage: number,
    sentiment_votes_up_percentage: number,
    symbol: string
}

export const range = (start: number, end: number) => {
    return [...Array(end - start + 1).keys()].map(elem => elem + start)
}