import { locationAPI } from "../api/api";

const SET_LOCATION_CITIES = 'SET_LOCATION_CITIES';
const SET_LOCATION_ADMIN_REGIONS = 'SET_LOCATION_ADMIN_REGIONS';
const SET_LOCATION_REGIONS = 'SET_LOCATION_REGION';
const SET_LOCATION_MICRO_REGIONS = 'SET_LOCATION_MICRO_REGIONS';
const SET_LOCATION_STREETS = 'SET_LOCATION_STREETS';
const SET_LOCATION_COMPLEXES = 'SET_LOCATION_COMPLEXES';

const SET_LOCATION_TOGGLE_HEIGHT = 'SET_LOCATION_TOGGLE_HEIGHT';
const SET_LOCATION_EDIT_BUTTON = 'SET_LOCATION_EDIT_BUTTON';


let initialState = {

    cities: [],
    adminRegions: [],
    regions: [],
    microRegions: [],
    streets: [],
    complexses: [],

    height: 0,
    editBtn: false,
}


const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION_CITIES:
            return {
                ...state,
                cities: action.cities
            }
        case SET_LOCATION_ADMIN_REGIONS:
            return {
                ...state,
                adminRegions: action.adminRegions
            }
        case SET_LOCATION_REGIONS:
            return {
                ...state,
                regions: action.regions
            }
        case SET_LOCATION_MICRO_REGIONS:
            return {
                ...state,
                microRegions: action.microRegions
            }
        case SET_LOCATION_STREETS:
            return {
                ...state,
                streets: action.streets
            }
        case SET_LOCATION_COMPLEXES:
            return {
                ...state,
                complexses: action.complexses
            }

        case SET_LOCATION_TOGGLE_HEIGHT:
            return {
                ...state,
                height: action.height
            }
        case SET_LOCATION_EDIT_BUTTON:
            return {
                ...state,
                editBtn: action.editBtn
            }
        
        default:
            return state;
    }
}

const setCities = (cities) => ({ type: SET_LOCATION_CITIES, cities });
const setAdminRegions = (adminRegions) => ({ type: SET_LOCATION_ADMIN_REGIONS, adminRegions });
const setRegions = (regions) => ({ type: SET_LOCATION_REGIONS, regions });
const setMicroRegions = (microRegions) => ({ type: SET_LOCATION_MICRO_REGIONS, microRegions });
const setStreets = (streets) => ({ type: SET_LOCATION_STREETS, streets });
const setComplexes = (complexses) => ({ type: SET_LOCATION_COMPLEXES, complexses });

export const setLocationHeight = (height) => ({ type: SET_LOCATION_TOGGLE_HEIGHT, height });
export const setLocationEdit = (editBtn) => ({ type: SET_LOCATION_EDIT_BUTTON, editBtn })


export const getLocationThunk = (cities) => async (dispatch) => {
    let data = await locationAPI.getLocation(cities);
    dispatch(setCities(data.cities));
    dispatch(setAdminRegions(data.admin_regions));
    dispatch(setRegions(data.regions));
    dispatch(setMicroRegions(data.micro_regions));
    dispatch(setStreets(data.streets));
    dispatch(setComplexes(data.res_complexes));
}


export default locationReducer;
