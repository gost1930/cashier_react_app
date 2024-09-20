import { UNIT_URL } from "../consts";

export const getUnits = async () => {
    const response = await fetch(UNIT_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}

export const createUnit = async (data) => {
    const token = localStorage.getItem("token");
    const building_id = JSON.parse(localStorage.getItem("user")).building_id;
    const response = await fetch(UNIT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({...data , building_id: +building_id}),
    });
    if (response.status === 201) {
        const data = await response.json();
        return data;
    }
}

export const updateUnit = async (id, data) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${UNIT_URL}/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });
    if (response.status === 200) {
        const data = await response.json();
        return data;
    }
}

export const deleteUnit = async (id) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${UNIT_URL}/${id}/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status === 204) {
        const data = await response.json();
        return data;
    }
}