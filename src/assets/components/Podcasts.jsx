import React, { useState, useEffect } from 'react';
import Podcast from './Podcast';
import {fetchPodcasts} from '../utility';


const Podcasts = () => {

    // State to hold the list of podcasts and loading status
    const [podcasts, setPodcasts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(()=>{

    // Fetch podcasts data when the component mounts
        try {
            async function fetchData(){

    // Await the fetched podcast data and update state
            const data = await fetchPodcasts()

    // Update state with fetched data and set loading to false
            setPodcasts(data)
            setIsLoading(false)
        }
    
    // Call the fetchData function to initiate data fetching
        fetchData() 

    //send error message to console if fetch fails      
        } catch (error) {
            console.log(error)
        }
          
    },[])
    
    // Show loading indicator while data is being fetched
    if (isLoading) {

    //return loading JSX
        return (
         <div className="loading">
         <div className="loading-text">Loading...</div>
        </div>
        );
    }

    // Render the list of podcasts once data is loaded.
    return (
        <div className="podcast-grid"> 
            {podcasts && podcasts.map ((podcast) =>
                <Podcast key={podcast.id} {...podcast} />
            )}
        </div>
    );
}

export default Podcasts;