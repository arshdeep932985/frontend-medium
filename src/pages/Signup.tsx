import Auth from "../components/Auth"
import Quote from "../components/Quote"


const Signup = () => {
  return (
    <div className="grid grid-cols-2">
        <div>
            <Auth type="signup"/>
        </div>
        <div className="none lg:block">
            <Quote/>
        </div>
    </div>
  )
}

export default Signup