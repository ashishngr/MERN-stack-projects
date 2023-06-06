import React, {useState} from 'react'

import ContentWrapper from '../../../contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Carousel from '../../../components/carousel/Carousel'

import useFetch from '../../../hooks/useFetch'

const Popular = () => {
    const [endPoint, setEndPoint] = useState("movie"); 

    const { data, loading } = useFetch(`/${endPoint}/popular`);
    console.log("data-->", data),
    console.log("loading", loading)

    const onTabChange = (tab) =>{
        setEndPoint(tab=== "Movies" ? "movie": "tv")
    }


  return (
   
    <div className='carouselSection'> 
        <ContentWrapper>
            <span className='carouselTitle'>
                What's Popular
            </span>
            <SwitchTabs data={["Movies", "TV Shows"]} 
            onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel 
        data={data?.results} 
        loading={loading}
        endPoint={endPoint}/>
    </div>
  )
}

export default Popular;