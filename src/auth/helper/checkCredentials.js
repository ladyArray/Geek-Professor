import { users } from "../data/users"

export const checkCredentials = (name, password) => {
  const userFound = users.find(item => item.user == name)
   
  if(!userFound){
    return false
  }
  return users.find(item => item.user == name).password == password
}
