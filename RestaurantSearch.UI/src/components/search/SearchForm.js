import React from 'react';

const SearchForm = ({zip,onSearch,onChange}) => {
    return (
        <form>
            <h1> Search Restaurants </h1>
            
            <input 
                type="text"
                className="form-control"
                value={zip}
                onChange={onChange} />

            <input  type="submit" 
                    value= "Search"
                    className="btn btn-primary"
                    onClick={onSearch} />
        </form>
    )
}

SearchForm.propTypes = {
    zip: React.PropTypes.string.isRequired,
    onSearch: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired
    
};

export default SearchForm ;