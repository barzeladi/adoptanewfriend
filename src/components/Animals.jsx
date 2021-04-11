import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import Animal from "./Animal.jsx";
import { getAnimals, getAnimal } from "../api/petfinder4";

function Animals(props) {
  const [animals, setAnimals] = useState([]);
  const getAnimalsFromApi = async () => {
    const apiAnimals = await getAnimals();
    setAnimals(apiAnimals);
  };

  useEffect(() => {
    getAnimalsFromApi();
  }, [])

  if (!animals.length) {
    return 'Loading Animals, Please Wait...'
  }

  return (
    <>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {
            animals
            .filter(el => { 
              return (
                    (el.primary_photo_cropped !== null) && 
                    (el.type === props.type || props.type === "All")
              ) 
            })
            .map(animal => (<Animal {...animal} />))
          }
        </div>
      </div>
    </>
  );
}

function ShowAnimal() {
  const history = useHistory();
  const { id } = useParams();
  console.log('id: ' + id);
  const [animal, setAnimal] = useState([]);
  const getAnimalFromApi = async (id) => {
    const apiAnimal = await getAnimal(id);
    setAnimal(apiAnimal);
  };

  const goToHomepage = () => {
    history.push("/animals");
};

  useEffect(() => {
    getAnimalFromApi(id);
  }, [id])

  if (!animal.id) {
    return 'Loading Selected Animal, Please Wait...'
  }

  var photo = animal.primary_photo_cropped.large;
  return (
    <div class="container mt-4">
    
      <p>Pet id: {animal.id}</p>
      <p>Name: {animal.name} </p>
      <p>Gender: {animal.gender} </p>
      <p>Age: {animal.age} </p>
      <p>Breed: {animal.breeds.primary} </p>
      <p>Description: {animal.description} </p>

      <img src={photo} />
      <button onClick={goToHomepage}>Go back to gallery view</button>
    </div>
    
  );
}


export {
  ShowAnimal,
  Animals
};