import { Request, Response } from "express";
import { IAnimal, TAnimalRequest } from "./interfaces";
import { animals } from "./database";

export const create = (request: Request, response: Response): Response => {
    const data: TAnimalRequest = request.body
    const findAge = new Date().getFullYear() - new Date(data.birth).getFullYear()

    const newAnimal: IAnimal = {
        id: animals.length + 1,
        ...data,
        age: findAge
    }

    animals.push(newAnimal)
    return response.status(201).json(newAnimal)
}

export const listAll = (request: Request, response: Response): Response => {
    return response.status(200).json(response.locals.animals)
}

export const listOne = (request: Request, response: Response): Response => {
    const animal = response.locals.animalIndex

    return response.status(200).json(animals[animal])
}

export const updateOne = (request: Request, response: Response): Response => {
    return response.status(200).json()
}

export const deleteOne = (request: Request, response: Response): Response => {
    return response.status(204).json()
}