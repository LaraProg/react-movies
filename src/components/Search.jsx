import React, {useState} from "react";

//class Search extends React.Component {
const Search = (props) => {
    const {
        searchMovies = Function.prototype,
    } = props;

 //   state = {
 //       search: '',
 //       type: 'all'
 //   }
const [search,setSearch] = useState('');
const [type,setType] = useState('all');

/*    handleKey = (event) => {
       if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }*/
    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type);
        }
    }

/*    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}),
            () => this.props.searchMovies(this.state.search, this.state.type))
    }*/

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    }

//  render() {
        return(
            <div className="row">
                    <div className="input-field">
                        <input
                            className="validate"
                            placeholder='Search'
                            type="search"
                          //  value={this.state.search}
                            value={search}
                          //  onChange={(e) => this.setState({search: e.target.value})}
                            onChange={(e) => setSearch(e.target.value)}
                          //  onKeyDown={this.handleKey}
                            onKeyDown={handleKey}
                        />
                        <button
                            className="btn search-btn"
                           // onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
                            onClick={() => searchMovies(search, type)}
                        >
                            Search
                        </button>
                    </div>
                <div className='movies'>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='all'
                            //onChange={this.handleFilter}
                            //checked={this.state.type === 'all'}
                            onChange={handleFilter}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='movie'
                            //onChange={this.handleFilter}
                            //checked={this.state.type === 'movie'}
                            onChange={handleFilter}
                            checked={type === 'movie'}
                        />
                        <span>Movie</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='series'
                            onChange={handleFilter}
                            checked={type === 'series'}
                        />
                        <span>Series</span>
                    </label>
                </div>


            </div>
        )
//    }
}

export {Search}