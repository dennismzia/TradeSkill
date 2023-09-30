import React from 'react'

const FundDataCard = ({imgurl,title}) => {
  return (
    <div className="flex flex-1 flex-col w-full">
        <img src={imgurl} alt="icon" />
        <h2>
            {title}
        </h2>

        Fund
    </div>
  )
}

export default FundDataCard