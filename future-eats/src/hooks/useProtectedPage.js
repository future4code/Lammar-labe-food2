import React, { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect (() => {
        const token = localStorage.getItem("token")

        if (token === null) {
            navigate("/signin")
        }
    }, [navigate])
}

export default useProtectedPage