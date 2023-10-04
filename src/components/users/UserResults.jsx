import React from 'react'
import {useEffect} from 'react'

function UserResults() {

    useEffect(()=> {
        
    },[])

    const fetchUsers = async () => {
        const response = await fetch('${process.env.REACT_APP_GITHUB_URL}/users', {
            headers: {
                Authorization: 'token ${process.env.REACT_APP_GITHUB_TOKEN}'
            }
        })

        const data = await response.json()

    }
    return (
        <div>User Results</div>
    )
}

export default UserResults