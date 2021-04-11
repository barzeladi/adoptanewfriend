import React from "react";
import { Link } from 'react-router-dom'

function Animal(props) {
    var photo = props.primary_photo_cropped.small;
    return (
        <div class="col-md-3 col-sm-5 mb-4 mt-4 mr-3 ml-3">
            <div class="card h-100">
                <img src={photo} class="card-img" alt="..." style={{width: '100%', height: '200px', imgalign: 'center'}} />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.desc}</p>
                    <p class="card-text">{props.type}</p>
                    {/* <a href="" class="btn btn-primary">Adopt me!</a> */}
                    <Link class="btn btn-primary" to={`/animals/${props.id}`}>Adopt me!</Link>
                </div>
            </div>
        </div>
    );
}
export default Animal;