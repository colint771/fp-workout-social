import React from "react";
import Header from "../components/Header";

export default function Error() {
    return (
        <div > 
            <Header />
            <div className="d-flex align-items-center justify-content-center mt-t">
                <h3>Sorry, that page can't be found!</h3>
            </div>
        </div>
    )
}