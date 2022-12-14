import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import NotFound from './pages/NotFound';
 
function App () {
 
  return (
    <div className='App'>
      {/* <Login /> */}

      <BrowserRouter>
				{/* <Header /> */}
				<Routes>
					 <Route path="/" element={<Login />}></Route>
					{/* <Route path="/#/*" element={<# />}></Route>  */}
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
    </div>
  )
}
 
export default App;
