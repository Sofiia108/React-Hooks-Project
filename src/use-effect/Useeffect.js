import React, { useEffect, useState } from 'react'

function Useeffect() {

  const [resourceType, setResourceType] = useState('posts')

  useEffect(() => {
    console.log('resource changed')

    return () => {
      console.log('return from resource change')
    }
  }, [resourceType])

  return (
    <>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
    </>
  )

}

export default Useeffect

// Simple use: API call
/*
  const [resourseType, setResourseType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourseType])

  return (
    <>
    <h4>resourseType</h4>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )

  */ 

// event listeners

/* const [windowWidth, setWindowWidth] = useState(windowWidth.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
   window.addEventListener('resize', handleResize)

   return () => {
    window.removeEventListener('resize', handleResize)
   }

  }, [])

  return (
    <div>{windowWidth}</div>
  )
  */