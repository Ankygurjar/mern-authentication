import axios from 'axios'

export const register = newUser =>{
  return axios.post('http://localhost:5000/users/register',{
    first_name:newUser.first_name,
    last_name:newUser.last_name,
    email:newUser.email,
    password:newUser.password,
  })
  .then(res=>{
    console.log("Registered");
  })
}

export const login = user =>{
  return axios.post('http://localhost:5000/users/login',{
    email: user.email,
    password: user.password
  })
  .then(res=>{
    localStorage.setItem('usertoken', res.data)
    console.log(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
}
