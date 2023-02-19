import { Schema } from "mongoose";

export const HouseSchema = new Schema(
    {
        bedrooms: {type: Number, required: true},
        bathrooms: {type: Number, required: true},
        levels: {type: Number, required: true, default: 1},
        price: {type: Number, required: true},
        year: {type: Number, minLength: 4},
        description: {type: String, maxLength: 500},
        garage: {type: String, required: true, enum: ['none', 'one', 'two', 'three+'], default: 'none'}, 
        imgUrl: {type: String, default: 'https://media.istockphoto.com/id/1145840259/vector/home-flat-icon-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=0&k=20&c=2DWK30S50TbctWwccYw5b-uR6EAksv1n4L_aoatjM9Q=' }
    }
)