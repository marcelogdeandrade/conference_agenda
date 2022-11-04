import { React, useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import Event from './Event/Event'


const EventsList = (eventList) => eventList.map(event => {
  return (
    <Event
      event={event}
    />
  )
})

const Events = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('events.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <Stack spacing={2}>
      {data && data.length > 0 && EventsList(data)}
    </Stack>
  )
}

export default Events