// import { lutimes } from "fs";
import { getAllCategories, postCategory, editCategoryByID, deleteCategoryByID } from "./request.js";


getAllCategories().then(value => {
    value.forEach(element => {
        let tbody = document.querySelector("tbody")
        tbody.innerHTML += ` <tr>
       <td id="td"><span>${element.name}</span> <span>${element.description}</span> <span><button data-id="${element.id}" class="editmodal btn btn-warning">Edit</button> <buttonbtn data-id="${element.id}" class=" remove btn btn-danger">Delete</buttonbtn></span></td>
     </tr>`
        let editmodal = document.querySelectorAll(".editmodal")
        editmodal.forEach(edititem => {
            edititem.addEventListener("click", (e) => {
                buttonY()
                let modalEdit = document.querySelector("#modaledit")
                modalEdit.style.transform = "translate(-50%,-50%) scale(1)";
                modalEdit.style.visibility = "visible";
                modalEdit.style.opacity = "1";
                //
                let inputedit = document.querySelector("#inputedit")
                let inputdeck = document.querySelector("#inputdeck")
                inputedit.value = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
                inputdeck.value = e.target.parentElement.previousElementSibling.textContent;
                let id = e.target.getAttribute("data-id");

                //
                let formedit = document.querySelector("#formedit")
                formedit.addEventListener("submit", (e) => {
                    e.preventDefault()
                    let updatedCategory = {
                        name: inputedit.value,
                        description: inputdeck.value,
                    }
                    editCategoryByID(id, updatedCategory);
                    modalEdit.style.display = "none";
                })

            })

        })

        let remove = document.querySelectorAll(".remove")
        remove.forEach((item) => {
            item.addEventListener("click", (e) => {

                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                    e.target.parentElement.parentElement.parentElement.remove();
                    let id = e.target.getAttribute("data-id");
                    deleteCategoryByID(id)
                })
            })
        })
    })
});








///////////////////////////////////
let newCategory
let postmodal = document.querySelector("#postmodal")
postmodal.addEventListener("click", () => {
    let modalpost = document.querySelector("#modalpost")
    modalpost.style.transform = "translate(-50%,-50%) scale(1)";
    modalpost.style.visibility = "visible";
    modalpost.style.opacity = "1";

    buttonX()
    //
    let formPost = document.querySelector("#formpost")
    formPost.addEventListener("submit", (e) => {
        e.preventDefault()
        let category = document.querySelector("#category")
        let description = document.querySelector("#description")
        let categorypost = category.value;
        let descriptionpost = description.value;
        category.value = "";
        description.value = ""
        //
        newCategory = {
            name: categorypost,
            description: descriptionpost,
        }
        // return newCategory
        postCategory(newCategory)
        modalpost.style.display = "none";

    })
})








function buttonX() {
    let x = document.querySelector(".x");
    x.addEventListener("click", () => {
        let modalpost = document.querySelector("#modalpost")
        modalpost.style.transform = "translate(-50%,-50%) scale(0)";
        modalpost.style.visibility = "hidden";
        modalpost.style.opacity = "0";

    })
}
function buttonY() {
    let y = document.querySelector(".y");
    y.addEventListener("click", () => {
        let modaledit = document.querySelector("#modaledit")
        modaledit.style.transform = "translate(-50%,-50%) scale(0)";
        modaledit.style.visibility = "hidden";
        modaledit.style.opacity = "0";
    })
}