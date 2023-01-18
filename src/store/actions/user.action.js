import * as FileSystem from "expo-file-system";
import { insertProfile, fetchProfile } from "../../db/index";

export const ADD_PROFILE = "ADD_PROFILE";

export const LOAD_PROFILES = "LOAD_PROFILES"

export const addProfile = (name, surname, contact, profilePhoto) => {
  return async (dispatch) => {
    /* const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${Map.API_KEY}`
    );

    if (!response.ok)
      throw new Error("No se ha podido comunicar con Google Mas API");

    const resData = await response.json();

    if (!resData.results)
      throw new Error(
        "No se han encontrado datos para las coordenadas seleccionadas"
      );

    const address = resData.results[0].formatted_address;
    console.log(address);
    console.log(location) */

    const fileName = profilePhoto.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;

    try {
      FileSystem.moveAsync({
        from: profilePhoto,
        to: Path,
      });
      const result = await insertProfile(name, surname, contact, Path)
      console.log(result)
    } catch (err) {
      console.log(err.message);
      throw err;
    }
    dispatch({
      type: ADD_PROFILE,
      payload: {
        name,
        surname,
        contact,
        profilePhoto: Path,
      },
    });
  };
};

export const loadProfile = () => {
  return async (dispatch) => {
    try {
      const result = await fetchProfile()
      console.log(result)
      dispatch({type: LOAD_PROFILES, profiles: result.rows._array})
    } catch (error) {
      throw(error)
    }
  }
}
