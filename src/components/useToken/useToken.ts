import { useState } from "react"

export default function useToken() {

    const saveToken = () => {
        localStorage.setItem('token', 'test')
    }

    return {
        saveToken
    }
}