import React from 'react'
import {FormControl, FormHelperText, FormLabel, Input} from "@chakra-ui/react"
const Form = () => {
  return (
    <div>Payment Details
    <FormControl>
  <FormLabel>Cardholder Name</FormLabel>
  <Input variant="flushed" type='number' placeholder="Enter youir name" />
 
</FormControl>
    </div>
  )
}

export default Form