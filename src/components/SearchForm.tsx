import {useState} from "react";
interface Props {
    search: string,
    filter: string
}
export default function SearchForm({search, filter}: Props) {
    const [searchString, setSearchString] = useState<string>("")
    const [filterValue] = useState<string>("search/movie")
    return (
        <form onSubmit={() => {}}>
            <label htmlFor="search">Search
                <input value={searchString} type="text" name="search" id="search" required placeholder="Search for a movie" onChange={(event) => {setSearchString(event.target.value)}} />
            </label>
            <button>Search</button>
        </form>
    )
}