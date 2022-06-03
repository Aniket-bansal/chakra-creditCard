import React from 'react'
import {Button, FormControl, FormLabel, HStack, Input} from "@chakra-ui/react"
const Form = () => {
  return (
    <div><h3 style={{fontWeight:"bold"}}>Payment Details</h3>
    <FormControl space={5} style={{color:"grey"}}>
  <FormLabel style={{fontWeight:"bold"}}>Cardholder Name</FormLabel>
  <Input variant="flushed" type='text' placeholder="Enter your name" />
  &nbsp;&nbsp;&nbsp;
  <FormLabel style={{fontWeight:"bold"}}>Card Number</FormLabel>
  <Input variant="flushed" type='number' placeholder="Enter your Card number here" />
<br />
<br />
  <HStack spacing="20" >
      <br />
      <FormLabel style={{fontWeight:"bold"}}>Expiry month</FormLabel>
      <FormLabel style={{fontWeight:"bold"}}>Expiry year</FormLabel>
      <FormLabel style={{fontWeight:"bold"}}>CVV</FormLabel>
  </HStack>
  <HStack spacing="6">
      <Input variant="flushed" type='number' size='xs'/>
      <Input variant="flushed" type='number' size='xs'/>
      <Input variant="flushed" type='number' size='xs'/>
  </HStack>
  <br/>
<h2 style={{fontWeight:"bold"}}>Payment amount : 12 300 P</h2>

<Button colorScheme='pink'>Submit</Button>
</FormControl>
    </div>
  )
}

export default Form