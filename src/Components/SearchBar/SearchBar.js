import React, { useState } from 'react'
import './SearchBar.css'

// class SearchBar extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             term : ''
//         }
//         this.search = this.search.bind(this);
//         this.handleTermChange = this.handleTermChange.bind(this)
//     }
//     handleTermChange(event){
//         this.setState({
//             term : event.target.value
//         })
//     }
//     search(event){
//         this.props.onSearch(this.state.term)
       

//     }
//     render(){
//         return (
//             <div className="SearchBar">
//                 <input placeholder="Enter A Song, Album, or Artist" 
//                 onChange ={this.handleTermChange}/>
//                 <button className="SearchButton"onClick={this.search}>SEARCH</button>
//             </div>
//         )
//     }
// }



const SearchBar2 = (props) => {
    const {onSearch} = props;
    const [term, setTerm] = useState('');
    const handleTermChange =(event) =>{
        setTerm(event.target.value)
    }
    const handleSearch = ()=>{
        onSearch(term)
    }
    
    return(
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" 
            onChange ={handleTermChange}/>
            <button className="SearchButton"onClick={handleSearch}>SEARCH</button>
        </div>
    )

}





export default SearchBar2




