import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HousesService{
    async destroyHouse(houseId) {
        const house = await this.getHouseById(houseId)
        await house.remove()
        return house
    }

    async updateHouse(houseId, houseData) {
        const foundHouse = await this.getHouseById(houseId)
        foundHouse.bedrooms = houseData.bedrooms || foundHouse.bedrooms
        foundHouse.bathrooms = houseData.bathrooms || foundHouse.bathrooms
        foundHouse.levels = houseData.levels || foundHouse.levels
        foundHouse.garage = houseData.garage || foundHouse.garage
        foundHouse.description = houseData.description || foundHouse.description
        foundHouse.price = houseData.price || foundHouse.price
        foundHouse.imgUrl = houseData.imgUrl || foundHouse.imgUrl
        await foundHouse.save()
        return foundHouse
    }

    async createHouse(houseData) {
        const house = await dbContext.Houses.create(houseData)
        return house
    }

    async getHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        if (!house){
            throw new BadRequest('Invalid House ID')
        }
        return house
    }

    async getHouses() {
        const houses = await dbContext.Houses.find({})
        return houses
    }

}

export const housesService = new HousesService()