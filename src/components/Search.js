import React from 'react';


export const Search = (props) =>{
    let inputValue;

    const handlerSubmitForm = e => {
        e.preventDefault();
        props.submitSearch(inputValue.value);
    };

    return (
        <form className="search-form" onSubmit={handlerSubmitForm}>
            <input ref={inp=>inputValue=inp} type="text"/>
            <button type="submit">Search</button>
        </form>
    );
};