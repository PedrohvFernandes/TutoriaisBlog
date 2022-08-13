import { Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Subscribe from './pages/Subscribe'

export function Router(){
  return (
    <Routes>
      <Route path='/' element={<Subscribe type='login'/>}/>
      <Route path='/cadastrar' element={<Subscribe type='cadastrar'/>}/>
      {/* /Blog, Blog/MeusBlogs e Blog/Config */}
      <Route path='/Blog' element={<Blog/>}/>
    </Routes>
  )
}