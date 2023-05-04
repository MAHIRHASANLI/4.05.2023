import {BASE_URL} from "./baseURL.js";


export async function getAllCategories() {
    let globalData;
    await fetch(`${BASE_URL}/categories`)
    .then(response => response.json())
    .then(data => {
       globalData = data;
    })
    return globalData;
}


// post
export async function postCategory(newCategory){
    await fetch(`${BASE_URL}/categories`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newCategory)
    })
}


//delete category By ID 
export async function deleteCategoryByID(id){
    await fetch(`${BASE_URL}/categories/${id}`,{
        method: 'DELETE'
    })
}

//edit category by ID
export async function editCategoryByID(id,updatedCategory){
    await fetch(`${BASE_URL}/categories/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(updatedCategory)
    })
}

