import { genres } from "../public/data";

/**
 * Fetches podcasts data from the Podcast API.
 *
 * @async
 * @function fetchPodcasts
 * @returns {Promise<Object>} Resolves to the JSON response containing podcasts data
 * @throws Will log an error message to the console if the response is not OK
 */
async function fetchPodcasts() {

    // Send a GET request to the Podcast API endpoint and wait for the response
    const response = await fetch("https://podcast-api.netlify.app")

    // Check if the response status is not OK (status code outside 200–299)
    if(!response.ok) {

        // Log an error message if the response failed
        console.log("There was an error")
    }

    // Parse and return the JSON data from the response
    return response.json()
}
/**
 * 
 * @param {*} genreIds 
 * @returns 
 */

function getGenres (genreIds){

    // Initialize an empty array to hold the genre titles
        let genreTitles = [] 
     
    // Iterate over each genre ID provided in the podcast array
        genreIds.forEach(id => {

    // Find the genre object in the genres list that matches the current ID.
            const genre = genres.find(genre => genre.id === id)
            if (genre) {

    // If a matching genre is found, add its title to the genreTitles array
                genreTitles.push(genre.title)
            }
        });

        return genreTitles 
}

export { fetchPodcasts, getGenres }
 
