import * as api from "./api.js";

const pageSize = 4;
const endpoints = {
    cars: `/data/cars?pageSize=${pageSize}&offset=`,
    carById: '/data/cars/'
};

export async function getAllCars(page) {
    return api.get(endpoints.cars + (page - 1) * pageSize);
}

export async function getCarById(id) {
    return api.get(endpoints.carById + id);
}
