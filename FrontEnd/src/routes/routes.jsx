import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import CreatePostDispatch from "../pages/Dispatch/createPostDispatch";
import EditPageDispatch from "../pages/Dispatch/editPageDispatch";
import HomePageDispatch from "../pages/Dispatch/homePageDispatch";
import ProfilePageDispatch from "../pages/Dispatch/ProfilePageDispatch";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/RegisterPage";
import SpecificBlogDispatch from "../pages/Dispatch/specificBlogDispatch";
import MyHeartPageDispatch from "../pages/Dispatch/myHeartPageDispatch";

function RoutesComponent({ logged }) {
  return (
    <Router>
      <Routes>
          {logged
            ?
            <Route path='*' element={<Navigate to="home/" replace />}></Route>
            :
            <Route path='*' element={<Navigate to="login/" replace />}></Route>
          }
          <Route path="home/" element={<HomePageDispatch></HomePageDispatch>}></Route>
          {logged
            ?
            <Route path='*' element={<Navigate to="home/" replace />}></Route>
            :
            <Route path='login/' element={<LoginPage></LoginPage>}></Route>
          }
          {logged
            ?
            <Route path='*' element={<Navigate to="home/" replace />}></Route>
            :
            <Route path='register/' element={<RegisterPage></RegisterPage>}></Route>
          }
          {logged
            ?
            <Route path='/profile/:id' element={<ProfilePageDispatch></ProfilePageDispatch>}></Route>
            :
            <Route path='*' element={<Navigate to="home/" replace />}></Route>
          }
          {logged
            ?
            <Route path='profile/editar' element={<EditPageDispatch></EditPageDispatch>}></Route>
            :
            <Route path='*' element={<Navigate to="home/" replace />}></Route>
          }
          {logged
            ?
            <Route path='create/' element={<CreatePostDispatch></CreatePostDispatch>}></Route>
            :
            <Route path='*' element={<Navigate to="home/" replace />}></Route>
          }
          {logged
            ?
            <Route path='home/favoritePost' element={<MyHeartPageDispatch></MyHeartPageDispatch>}></Route>
            :
            <Route path='*' element={<Navigate to="home/" replace />}></Route>
          }
          <Route path='*' element={<Navigate to="home/" replace />}></Route>
          <Route path='/profile/:id' element={<ProfilePageDispatch></ProfilePageDispatch>}></Route>
          <Route path='/blog/:blogId' element={<SpecificBlogDispatch></SpecificBlogDispatch>}></Route>
      </Routes>

    </Router>
  );
}

export default RoutesComponent;
