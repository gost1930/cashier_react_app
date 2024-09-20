import { BUILDING_URL } from "../consts"

export const getBuildings = async () => {
    const response = await fetch(BUILDING_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const data = await response.json()

    return data
}

export const createBuilding = async (data) => {
    const token = localStorage.getItem("token");
    const response = await fetch(BUILDING_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    })

    if (response.status === 201) {
        const data = await response.json()
        return data
    }

    if (response.status === 400) {
        throw new Error(" خطأ في المدخلات ");
    }

    if (response.status === 401) {
        throw new Error("غير مسموح لك  اضافة  المنشأة");
    }
}

export const updateBuilding = async (id, data) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BUILDING_URL}/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    })

    if (response.status === 200) {
        const data = await response.json()
        return data 
    }

    if (response.status === 400) {
        throw new Error(" خطأ في المدخلات ");
    }

    if (response.status === 401) {
        throw new Error("غير مسموح لك تعديل بيانات المنشأة");
    }

}

export const deleteBuilding = async (id) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BUILDING_URL}/${id}/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })

    if (response.status === 200) {
        return true
    }
    
    if (response.status === 401) {
        throw new Error("غير مسموح لك حذف المنشأة");
    }
}