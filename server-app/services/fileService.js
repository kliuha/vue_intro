import { readFileSync, writeFileSync } from "fs";

export const monthsService = {
    get: () => {
        const months = readFileSync('storage/data.json', 'utf-8')
        return JSON.parse(months)
    },
    put: (data) => {
        const months = readFileSync('storage/data.json', 'utf-8')
        let jdata = Object.assign(JSON.parse(months),data)
        writeFileSync('storage/data.json',JSON.stringify(jdata))
        return jdata
    }
}

export default {
    monthsService
}