import OmriUser from "./omriUser"
import UriUser from "./uriUser"
import SagivUser from "./sagivUser"
import BenUser from "./benUser"
import SaharUser from "./saharUser"
import OmerUser from "./omerUser"

const allUsers = function() {

    const setAllUsers = () => {
    const {omri} = OmriUser()
    const {uri} = UriUser()

    omri()
    uri()

    }
    return {setAllUsers}
}
export default allUsers