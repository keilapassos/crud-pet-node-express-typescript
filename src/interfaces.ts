export interface IAnimal{
    id: number,
    name: string,
    specie: "felino" | "canino",
    birth: Date,
    age: number
}

export type TAnimalRequest = Omit<IAnimal, "id" | "age">

// Omit faz com que omita dados que passamos a frente
// nesse caso id e age serão feitos automaticamente depois
// por fim exportamos IAnimal e TAnimalRequest