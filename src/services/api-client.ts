import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '79095096bb6b46089b95fec883a3c0c8'
    }
})