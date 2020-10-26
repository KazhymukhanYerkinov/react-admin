import React, {useState} from 'react';
import './LocationModule.css';
import ToggleFooterContainer from './ToggleFooter/ToggleFooterContainer';

const Location = (props) => {

    const [citySearch, setCitySearch ] = useState('');

    const handleSearch = () => {

        props.getLocationThunk(citySearch);

    }

    const handleAdd = () => {
        props.setLocationHeight(180);
    }



    return (
    <>
      <div className = "container">
          <div className = "row" >
          <div className = "col-4  border  p-2">


                <div className = "d-flex justify-content-between">
                    <span className = "pt-3 pl-3"> CITIES </span>
                    <button className = "btn btn-success" onClick = { handleAdd }>add cities</button>    
                </div>


                <hr className = "line"/>

           
                <div className = "d-flex justify-content-between">
                    <input className="form-control" value = { citySearch } onChange = {(e) => { setCitySearch(e.target.value) }} />
                    <button className = "btn btn-light" onClick = { handleSearch }>Search</button>
                </div>

                {/*LISTT OF CITY*/}
                <br />
                <div className = "table-wrapper-scroll-y my-custom-scrollbar">
                <table className = "table border">
                    <tbody>
                        {props.cities.map( u => {
                        return (
                            <tr>
                                <td scope="row" ><input type="radio"/></td>
                                <td colspan = "4"> {u.name} </td>
                                <td  className = "text-right border-bottom"> 
                                    <button className = "btn btn-light btn-sm"> <i class="material-icons"> mode_edit </i> </button>
                                    <span> </span> 
                                    <button className = "btn btn-light btn-sm"> <i class="material-icons app-staff-delete"> delete </i> </button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
              </div>
          </div>

          </div>
      </div> 
      <div>
          <ToggleFooterContainer />
      </div>
      </> 
    );
}

export default Location;