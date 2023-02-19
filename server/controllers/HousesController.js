import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
    constructor(){
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .get('/:houseId', this.getHousesById)
            .post('', this.createHouse)
            .put('/:houseId', this.updateHouse)
            .delete('/:houseId', this.destroyHouse)
    }

    async getHouses(req, res, next){
        try {
            const houses = await housesService.getHouses()
            res.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async getHousesById(req, res, next){
        try {
            const houseId = req.params.houseId
            const house = await housesService.getHouseById(houseId)
            return res.send(house)
        } catch (error) {
            next(error)
        }
    }

    async createHouse(req, res, next){
        try {
            const houseData = req.body
            const house = await housesService.createHouse(houseData)
            res.send(house)
        } catch (error) {
            next(error)
        }
    }

    async updateHouse(req, res, next){
        try {
            const houseId = req.params.houseId
            const houseData = req.body
            const updatedHouse = await housesService.updateHouse(houseId, houseData)
            return res.send(updatedHouse)
        } catch (error) {
            next(error)
        }
    }

    async destroyHouse(req, res, next){
        try {
            const houseId = req.params.houseId
            const house = await housesService.destroyHouse(houseId)
            return res.send(house)
        } catch (error) {
            next(error)
        }
    }
}