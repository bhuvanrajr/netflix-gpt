const TitleCard = ({movieData}) => {
    console.log(movieData);

    if(movieData == null)
        return <></>
    else
    return(
    <div className='w-screen h-screen px-20 pt-40 aspect-video absolute' >
        <h4 className=' text-white font-bold'>
            {movieData.original_title}
        </h4>
        <p className='py-6 w-96 text-white'>
            {movieData.overview}
        </p>
        <div>
            <button className = 'px-12 py-2 rounded-lg bg-white text-black opacity-80 font-medium'> Play</button>
            <button className = 'mx-2 px-12 py-2 rounded-lg bg-gray-600 text-white opacity-80 font-medium'> More Info</button>
        </div>
    </div>
  )
}

export default TitleCard
