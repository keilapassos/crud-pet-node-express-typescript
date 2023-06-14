import express, {Application, json} from "express"

const app:Application = express()

app.use(json())

app.post("/animals")
app.get("/animals")
app.get("/animals/:id")
app.patch("/animals/:id")
app.delete("/animals/:id")

const PORT:number = 3000

const serverMessage:string = `Server is running on: ${PORT}`

app.listen(PORT, () => console.log(serverMessage))