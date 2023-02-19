import { carsService } from "../services/CarsService.js";
import BaseController from "../utils/BaseController.js";

export class CarsController extends BaseController {
  constructor () {
    super('api/cars')
    this.router
      .get('', this.getCars)
      .get('/:carId', this.getCarById)
      .post('', this.createCar)
      .put('/:carId', this.updateCarById)
      .delete('/:carId', this.destroyCarById)
  }

  async getCars(req, res, next) {
    try {
      const query = req.query
      const cars = await carsService.getCars(query)
      res.send(cars)
    } catch (error) {
      next(error)
    }
  }

  async getCarById(req, res, next) {
    try {
      const carId = req.params.carId
      const car = await carsService.getCarById(carId)
      return res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async createCar(req, res, next) {
    try {
      const carData = req.body
      const car = await carsService.createCar(carData)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async updateCarById(req, res, next) {
    try {
      const carId = req.params.carId
      const carData = req.body
      const updatedCar = await carsService.updateCarById(carId, carData)
      return res.send(updatedCar)
    } catch (error) {
      next(error)
    }
  }

  async destroyCarById(req, res, next) {
    try {
      const carId = req.params.carId
      const car = await carsService.destroyCarById(carId)
      return res.send(car)
    } catch (error) {
      next(error)
    }
  }
}