import React from 'react'
import { mount, route } from 'navi'

export default mount({
  '/contact': route({
    title: 'Contact',
    getView: () => {
        return(
            <h1> Hello </h1>
        );
    },
  })
})
