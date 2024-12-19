import React from 'react'
import users from './user.json'
export const Users = () => {
  return (
    <div>
       {
        users.map()
       }
    </div>
  )
}
