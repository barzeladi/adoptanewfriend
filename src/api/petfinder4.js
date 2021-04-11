import { Client } from "@petfinder/petfinder-js";

var pf = new Client({ apiKey: "4z19ypRMEikztda1tJYoCyfKQzMsxr2kXTRgnScCNH3ibXRkzs", secret: "ZSX6pz56zQwEnD2XBzvdkp9dpbk1ccWy1K1OrwQh" });

const getAnimals = async () => {
    const pets = await pf.animal.search({
        limit: 100,
        page: 80
    });
    return pets.data.animals;
}

const getAnimal = async (id) => {
    const pets = await pf.animal.show(id);
    return pets.data.animal;
}

export {
    getAnimals,
    getAnimal
};