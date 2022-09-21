import React from 'react'
import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
    logged: false
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    
    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ( {children} ) => {

    const [authState, dispatch] = useReducer(authReducer, initialState, init)

    const login = (name) => {
        localStorage.setItem('user', JSON.stringify(name))
       
        const action = {
            type: types.login,
            payload: {
                name: name,
            }
        }

        dispatch(action)
    }

    const logout = () => {
        const action = {
            type: types.logout
        }

        localStorage.removeItem('user')
        dispatch( action )
    }
  return (
    <AuthContext.Provider value={{
        ...authState,
        login,
        logout
     }}>
        { children }
    </AuthContext.Provider>
  )
}
