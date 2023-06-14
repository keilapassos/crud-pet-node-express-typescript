import { Request, Response } from "express";
import { IAnimal, TAnimalRequest } from "./interfaces";
import { animais } from "./database";

export const create = (request:Request, response:Response): Response => {
    return response.status(201).json()
}

export const listAll = (request:Request, response:Response): Response => {
    return response.status(200).json()
}

export const listOne = (request:Request, response:Response): Response => {
    return response.status(200).json()
}

export const updateOne = (request:Request, response:Response): Response => {
    return response.status(200).json()
}

export const deleteOne = (request:Request, response:Response): Response => {
    return response.status(204).json()
}