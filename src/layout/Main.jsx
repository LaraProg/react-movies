import React, {useState, useEffect} from 'react';
import {Movies} from "../components/Movies";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

//class Main extends React.Component {
function Main() {
/*    state = {
        movies: [],
        loading: true
    }*/
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(true);


 /*   searchMovies = (str,type = 'all') => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}`: ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false})
            })
    }*/
   const searchMovies = (str,type = 'all') => {
       setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}`: ''}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading( false);
            })
    }


    /*   componentDidMount() {
       fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix&page=2`)
           .then(response => response.json())
           .then(data => this.setState({movies: data.Search, loading: false}))
           .catch((err) => {
               console.error(err);
               this.setState({ loading: false})
           })
   }*/
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix&page=2`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading( false)
            })
    },[])


//    render() {
//        const {movies, loading} = this.state;
        return (
            <main className='container content'>
                {/* <Search searchMovies={this.searchMovies}/>*/}
                <Search searchMovies={searchMovies}/>
                {loading ? <Preloader/> :  <Movies movies={movies}/>}
            </main>
        )
//    }
}

export {Main}