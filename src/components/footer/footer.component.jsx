import logo from '../../assets/Firma-02.svg'
import './footer.css'

export default function Footer(){
    return(
        <div className='footer'>
            Developed by:<img src={logo} alt="santiago-saavedra-logo" className="logo" width={300} height={90}/>

        </div>
    )
}