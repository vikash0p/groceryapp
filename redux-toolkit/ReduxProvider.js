'use client'
import React from 'react'
import { store } from './Store'
import { Provider } from 'react-redux'

export default function ReduxProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
