import { monthsService as monthFileService } from "../services/fileService.js";

export const testGetAction = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.send(monthFileService.get())
}

export const testPostAction = (req, res) => {
    monthFileService.put(req.body)
    res.send('Success')
}