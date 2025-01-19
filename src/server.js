import { createServer, Model } from "miragejs"

createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { 
            id: "1", 
            name: "Modest Explorer", 
            price: 60, 
            description: "The Modest Explorer is a van designed to get you out of the house and into nature.",
            imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
            type: "simple"
        })
        server.create("van", { 
            id: "2", 
            name: "Beach Bum", 
            price: 80, 
            description: "Beach Bum is a van inspired by surfers and travelers.",
            imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
            type: "rugged"
        })
        // Add more van data as needed
    },

    routes() {
        this.namespace = "api"
        this.logging = true // Enable logging for debugging

        this.get("/vans", (schema, request) => {
            return schema.vans.all()
        })
        
        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })
    }
})