import { Response, Request, NextFunction } from "express";
import { animals } from "./database";
import { IAnimal } from "./interfaces";

export const findAnimal = (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params
    const findAnimalIndex: number = animals.findIndex(animal => animal.id === Number(id))

    if (findAnimalIndex === -1) {
        return response.status(404).json({
            error: "Animal not found"
        })

    }

    response.locals.animalIndex = findAnimalIndex

    return next()

}

export const filterBySpecie = (request: Request, response: Response, next: NextFunction) => {
    const { specie } = request.query

    const filterAnimals: IAnimal[] = animals.filter(animal => animal.specie === specie)

    if (filterAnimals.length > 0) {
        response.locals.animals = filterAnimals
        return next()
    }

    response.locals.animals = animals
    return next()
}

export const filterByAgeLessThan = (request: Request, response: Response, next: NextFunction) => {
    const { minage } = request.query

    // console.log(minage)

    const filterAnimals: IAnimal[] = response.locals.animals.filter((animal: IAnimal) => animal.age >= Number(minage))

    if (filterAnimals.length > 0) {
        response.locals.animals = filterAnimals
        // console.log(filterAnimals, "dentro do if")
        return next()
    }

    // response.locals.animals = filterAnimals
    // console.log(filterAnimals, "fora do if")
    return next()
}

export const filterByAgeGreaterThan = (request: Request, response: Response, next: NextFunction) => {
    const { maxage } = request.query

    const filterAnimals: IAnimal[] = response.locals.animals.filter((animal: IAnimal) => animal.age <= Number(maxage))

    if (filterAnimals.length > 0) {
        response.locals.animals = filterAnimals
        return next()
    }

    // response.locals.animals = filterAnimals
    return next()
}