import React from 'react';
import cls from './ProjectItem.module.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';



const ProjectItem = () => {
    console.log("Hello")
    
    const handleCode = (e) => {
        e.currentTarget.classList.toggle('fa-angle-down');
        e.currentTarget.classList.toggle('fa-angle-up');
    }

    const handleChip = (option, value) => {
        console.log(value.year)
        return option.year === value.year;                                       
    }
    return (
        <div className = {`row ${cls.app_project_item}`}>
            <div className = 'col-md-6 mt-5'>
                <div id="accordion">
                    <div className = 'card'>
                        <div className = {cls.app_project_item} id="headingOne">
                            <h5 class="d-flex justify-content-between">
                                <button class="btn">
                                    JOB PORTAL WEB APP
                                </button>
                                <button class="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <i className='fa fa-angle-up' style = {{fontSize: '35px'}} name = 'full_name' aria-hidden="true" onClick = { handleCode } ></i>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <hr />
                            <div class="card-body">
                                <div className = 'mb-4'>
                                    <button type="button" class="btn btn-info w-30 btn-sm"> Android </button>
                                </div>

                                <div className = 'mt-2'>
                                    <h6> Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus! </h6>
                                </div>

                                <div className = 'mt-4'>
                                    <table className = 'table-sm table-borderless'>
                                        <tr>
                                            <th className = 'pr-2'> Created: </th>
                                            <td className = 'pl-3'> 09 Jun 2019 11:32AM </td>
                                        </tr>

                                        <tr>
                                            <th className = 'pr-2'> Creator: </th>
                                            <td className = 'pl-3'> Kazhymukhan Yerkinov </td>
                                        </tr>

                                        <tr>
                                            <th className = 'pr-2'> Technical task: </th>
                                            <td className = 'pl-3'> Document.pdf </td>
                                        </tr>

                                        <tr>
                                            <th className = 'pr-2'> Question: </th>
                                            <td className = 'pl-3'> 23 </td>
                                        </tr>

                                        <tr>
                                            <th className = 'pr-2'> Team: </th>
                                            <td className = 'pl-3'> 
                                            <Autocomplete
                                                multiple
                                                fullWidth
                                                
                                                style = {{width: 300}}
                                                id="size-small-filled-multi"
                                                size="small"
                                                options={top100Films}
                                                getOptionLabel={(option) => option.title}
                                                onChange={(event, value) => console.log(value)}
                                                defaultValue={[top100Films[1]]} 
                                                
                                                renderInput={(params) => (
                                                    <TextField {...params} variant="filled" label="Size small" placeholder="Favorites" />
                                                  )}
                                                />
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                                <hr/>
                                <div className = 'd-flex justify-content-between'>
                                    <p> 25% </p>
                                    <p> Progress </p>
                                </div>
                                <div className={`progress ${cls.app_progress}`}>
                                    <div class="progress-bar" role="progressbar" style = {{width: `${25}%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className = 'col-md-4  mt-5'>
                2
            </div>

            <div className = 'col-md-4  mt-5'>
                3
            </div>

            <div className = 'col-md-4  mt-5'>
                4
            </div>
        </div>
    )

}
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 }
]

export default ProjectItem;

