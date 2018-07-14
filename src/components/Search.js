import React from 'react';


const Search = (props) =>{
    let inputValue;

    const handlerSubmitForm = e => {
        e.preventDefault();
        props.submitSearch(inputValue.value);
    };

    return (
        <form onSubmit={handlerSubmitForm}>
            <input ref={inp=>inputValue=inp} type="text"/>
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;