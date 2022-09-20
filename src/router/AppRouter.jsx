import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/Pages/LoginPage'
import { ChapterDetailPage } from '../ChapterDetail/page/ChapterDetailPage'
import { HomePage } from '../Home/pages/HomePage'

export const AppRouter = () => {
  return (
    <>

        <Routes>
            <Route path='login' element={
                <LoginPage/>
            }/>

            <Route path='chapter-detail/:chapter' element={
              <ChapterDetailPage/>
            }/>
            
            <Route path='/*' element={ 
                <HomePage/>
             }/>

        </Routes>

    </>
  )
}
