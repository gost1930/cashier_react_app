import { GROUP_URL } from "../consts";

export const getGroups = async () => {
    const response = await fetch(GROUP_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    return data;
};

export const createGroup = async (data) => {
    const token = localStorage.getItem("token");
    const building_id = JSON.parse(localStorage.getItem("user")).building_id;
    const response = await fetch(GROUP_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({...data, building_id: +building_id}),
    });

    if (response.status === 201) {
        const data = await response.json();
        return data;
    }

    if (response.status === 401 || response.status === 403) {
        throw new Error("غير مسموح لك  اضافة  المجموعة");
    }
    
    if (response.status === 500) {
        throw new Error("حدث خطأ ما ، الرجاء المحاولة مرة اخرى");
    }
};

export const updateGroup = async (id, data) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${GROUP_URL}/${id}/`, {
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

    if (response.status === 400) {
        throw new Error(" خطأ في المدخلات");
    }

    if (response.status === 401 || response.status === 403) {
        throw new Error("غير مسموح لك تعديل بيانات هده المجموعة");
    }

    if (response.status === 404) {
        throw new Error("المجموعة غير موجودة");
    }

    if (response.status === 500) {
        throw new Error("حدث خطأ ما ، الرجاء المحاولة مرة اخرى");
    }

};

export const deleteGroup = async (id) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${GROUP_URL}/${id}/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    if (response.status === 200) {
        return true;
    }

    if (response.status === 401 || response.status === 403) {
        throw new Error("غير مسموح لك حذف المجموعة");
    }

    if (response.status === 404) {
        throw new Error("المجموعة غير موجودة");
    }

    if (response.status === 500) {
        throw new Error("حدث خطأ ما ، الرجاء المحاولة مرة اخرى");
    }

};

