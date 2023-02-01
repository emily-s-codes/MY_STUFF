import { useState } from "react";
import UploadImages from "../uploadedImages/UploadImages";
import "./Add.css"


function Add() {
    const [showUser, setShowUser] = useState(false);

    const submit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target)

        fetch(`${import.meta.env.VITE_BASE_URL}api/add`,
            {
                method: "POST",
                body: form
            })
            .then((response) => {
                if (response.ok) {
                    setShowUser(true)
                }

            })
    }


    return (
        <div className="Add">
            <h1>ADD NEW ITEM</h1>
            <form onSubmit={submit}>
                <input name="title" type="text" placeholder="TITEL" />
                <input name="room" type="text" placeholder="ROOM" />
                <input name="size" type="text" placeholder="Size" />
                <input name="description" type="textfield" placeholder="ADD TEXT" />

                {/* <UploadImages /> */}
                <div>
                    <p id="image">Choose Image:  </p>
                    <input name="" id="image" type="file" />
                </div>
                <input type="submit" value="Send" />
            </form>
            {showUser && <p>Success</p>
            }
        </div>
    )
}

export default Add
