import { FormLabel, HStack } from '@chakra-ui/react'
import React from 'react'
import './card.css'
const Card = () => {
  return (
    <div className="card">
        <h2 className="visa">VISA</h2>
        <h2>4256 7890 5678 4532</h2>
        <br/>
        <HStack spacing="5">
        <br/>

            <FormLabel>CardHolder</FormLabel>
            <FormLabel>Expiry</FormLabel>
            <FormLabel>CVV</FormLabel>
        </HStack>
    </div>
  )
}

export default Card