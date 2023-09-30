import React from 'react'

const FundDataCard = ({imgurl,title}) => {
  return (
    <div className="flex flex-1 flex-col w-full">
        <img src={imgurl} alt="icon" width={75} height={75} />

        <h2 className="font-semibold text-base text-black font-poppins">
            {title}
        </h2>

    </div>
  )
}

export default FundDataCard