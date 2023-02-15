import React, { useRef, useState } from 'react';
import { instance } from "../../utils/axios"
import "../../styles/scss/formUser.scss"
import { useNavigate } from 'react-router-dom';
import { APIURLIMAGE } from '../../utils/axios';
const FormUser = () => {

    const inputUser = useRef()
    const [users, setUsers] = useState()

    const navigate = useNavigate()

    function userRealTime(param) {
        if(param != ""){
            instance.get(`users/UsersName/${param}/`)
            .then((res) => {
                setUsers(res.data)
            })
        } else {
            setUsers(null)
        }
    }


    return (
        <div className='form-user'>
            <h3 className='align-text'>Buscador de perfiles</h3>
            <p  className='align-text'> Por ejemplo puedes buscar a messi o a CR7</p>
            <input type="text" class="input form-control" placeholder="Busca el perfil que quieras" ref={inputUser} onChange={() => {
                userRealTime(inputUser.current.value)
            }} />
            {users ?
                users.map((user, key) => {
                    return ((
                        <div className='form-result-list btn' onClick={()=>{
                            navigate(`../profile/${user.user_name}`)
                        }}>
                            <h4>{user.user_name}</h4>
                            <img className="img-fluid" src={`${APIURLIMAGE}${user.image}`} alt="" />
                        </div>
                    ))
                })
                :
                <></>}
        </div>
    );
}

export default FormUser;
