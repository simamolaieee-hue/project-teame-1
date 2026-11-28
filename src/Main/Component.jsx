import Pictuare from "../Header/Sliderpicture/Pictuare"
import Categorie from "./Categorie"
import Featured from "./Featured"
import Ourproduct from "./Ourproduct"
import Picturebetween from "./Picturebetween"
import Thismonth from "./Thismonth"
import Todays from "./Todays"

function Component(){
    return(
        <>
        <Pictuare/>
        <Todays/>
        <Categorie/>
        <Thismonth/>
        <Picturebetween/>
        <Ourproduct/>
        <Featured/>
        </>
    )
}
export default Component