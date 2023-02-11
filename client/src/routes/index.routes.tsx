import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from '@component/Header'
import { CreatePost } from '@page/CreatePost'
import { Home } from '@page/Home'
import { Footer } from '@component/Footer'

export const AppRoutes = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-post" element={<CreatePost />} />
    </Routes>

    <Footer />
  </BrowserRouter>
)
