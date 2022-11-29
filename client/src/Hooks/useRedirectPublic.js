import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import useAuth from './useAuth'

const useRedirectPublic = () => {
    const navigate = useNavigate()
    const auth = useAuth()
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");

        console.log((loggedInUser))
        if (!loggedInUser) {

            return navigate('/')
        }
    }, [auth]);
}

export default useRedirectPublic