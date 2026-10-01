import express from "express";
const router = express.Router();
const animals = [
    {
        "name": "sonu",
        "species": "dog",
        "habitat": "domestic",
        "type": "pet",
    },
    {
        "name": "Guru",
        "species": "lion",
        "habitat": "savannah ",
        "type": "wild",
    },
    {
        "name": "Geetha",
        "species": "tigeress",
        "habitat": "savannah",
        "type": "wild",
    },
    {
        "name": "Gowri",
        "species": "Cow",
        "habitat": "grassland",
        "type": "domestic",
    },
    {
        "name": "Radha",
        "species": "elephant",
        "habitat": "dense forest",
        "type": "wild",
    },
]

router.get("/", (req, res) => {
    res.send("The best zoo in town !");
})

router.get("/animals", (req, res) => {
    const habitat = req.query.habitat;
    const filteredAnimals = animals.filter(animal => {
        return animal.habitat === habitat;
    });
    res.json(filteredAnimals);
})

router.get("/about", (req, res) => {
    res.send("Caring for animals and Promoting Wildlife Conservation since 1911 !");
})

export default router;