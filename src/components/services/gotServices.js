class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api/'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    getAllCharacters = async () => {
        const res = await this.getResource('characters?page=5&pageSize=10')
        return res.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`characters/${id}`)
        return this._transformCharacter(res)
    }

    getAllBooks = async () => {
        const res = await this.getResource('books?page=1&pageSize=10')
        return res.map(this._transformCharacter)
    }

    getBook = async (id) => {
        const res = await this.getResource(`books/${id}`)
        return this._transformCharacter(res)
    }

    getAllHouses = async () => {
        const res = await this.getResource('houses?page=1&pageSize=10')
        return res.map(this._transformCharacter)
    }

    getHouse = async (id) => {
        const res = await this.getResource(`houses/${id}`)
        return this._transformCharacter(res)
    }

    _transformCharacter = (res) => {
        return {
            name: res.name ? res.name : 'No data in API',
            gender: res.gender ? res.gender : 'No data in API',
            born: res.born ? res.born : 'No data in API',
            died: res.died ? res.died : 'No data in API',
            culture: res.culture ? res.culture : 'No data in API'
        }
    }

    _transformHouse = (res) => {
        return {
            name: res.name ? res.name : 'No data in API',
            region: res.region ? res.region : 'No data in API',
            words: res.words ? res.words : 'No data in API',
            titles: res.titles ? res.titles : 'No data in API',
            overlord: res.overlord ? res.overlord : 'No data in API',
            ancestralWeapons: res.ancestralWeapons ? res.ancestralWeapons : 'No data in API'
        }
    }

    _transformBook = (res) => {
        return {
            name: res.name ? res.name : 'No data in API',
            numberOfPages: res.numberOfPages ? res.numberOfPages : 'No data in API',
            publiser: res.publiser ? res.publiser : 'No data in API',
            released: res.released ? res.released : 'No data in API',
            culture: res.culture ? res.culture : 'No data in API'
        }
    }
}

export default GotService;