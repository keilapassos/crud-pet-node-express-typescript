import express, { Application, json } from "express"
import { create, deleteOne, listAll, listOne, updateOne } from "./logic"
import { filterByAgeGreaterThan, filterByAgeLessThan, filterBySpecie, findAnimal } from "./middlewares"

const app: Application = express()

app.use(json())

app.post("/animals", create)
app.get("/animals", filterBySpecie, filterByAgeLessThan, filterByAgeGreaterThan, listAll)
app.get("/animals/:id", findAnimal, listOne)
app.patch("/animals/:id", findAnimal, updateOne)
app.delete("/animals/:id", findAnimal, deleteOne)

const PORT: number = 3000

const serverMessage: string = `Server is running on localhost:${PORT}`

app.listen(PORT, () => console.log(serverMessage))