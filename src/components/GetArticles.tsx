import { useEffect } from 'react'




const apiURL = 'https://api.spaceflightnewsapi.net/v4/articles/'

const GetArticles = function () {
    // const [articles, setArticles] = useState()


    const getArticles = () => {

        fetch(apiURL)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Problema nel recupero dati')
                }
            })
            .then((articles) => {
                console.log(articles)
                // setArticles(articles)
            })
            .catch((err) => {
                console.log('ERRORE', err)
            })
    }

    useEffect(() => {
        getArticles()
    }, [])
    return (
        <></>
    )
}

export default GetArticles