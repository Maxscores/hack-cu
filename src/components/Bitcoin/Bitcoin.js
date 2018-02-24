import React from 'react'
import { getFeedback } from '../../api/apiCall'

export const Bitcoin = () => {
  const feedback = getFeedback()
  console.log('feedback: ', feedback)

  return (
    <div className="Bitcoin">
      Bitcoin 
    </div>
  )
}