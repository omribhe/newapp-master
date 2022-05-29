import { useRef } from "react";


function Search({doSearch}) {

    const searchBox = useRef(null)

    const search = function(){
        doSearch(searchBox.current.value);
    }

    return (
        <div class="form-group">
            <input ref={searchBox} onKeyUp={search} type="text" class="form-control" placeholder="Search" />
            
        </div>
    );
}

export default Search;