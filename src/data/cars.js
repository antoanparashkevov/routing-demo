import * as api from "./api.js";

const pageSize = 3;
const endpoints = {
    cars: `/data/cars?pageSize=${pageSize}&offset=`,
    size:'/data/cars?count',
    carById: '/data/cars/'
};

export async function getAllCars(page) {
    const [data,size] = await Promise.all([
        api.get(endpoints.cars + (page - 1) * pageSize),
        api.get(endpoints.size),

    ])
    return {
        data,
        pages:Math.ceil(size / pageSize)
    }
}

export async function getCarById(id) {
    return api.get(endpoints.carById + id);
}
