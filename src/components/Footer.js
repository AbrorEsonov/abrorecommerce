import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'
function Footer() {
    return (
        <div className='main-footer h-25' style={{backgroundColor: "black",boxSizing: "border-box",paddingBottom: "2rem"}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm" style={{color: "white",fontSize: 20}}>
                        <h4>Manzilimiz: </h4>
                            <div>Bandixon tuman markazi, <br/>
                                "Bandixon market" oziq-ovqat do'koni 2-qavati.
                            </div>
                            <div>Mo'ljal: "Grand" kafe yoni</div>
                    </div>
                    <div className="col-sm" style={{color: "white",fontSize: 20}}>
                        <h4 className="mb-4">Bog'lanish: </h4>

                          <a href="tel:+998942650770">+998942650770 </a>  <br/>         
                          <a href="tel:+998997008181">+998997008181 </a> 
                    </div>
                    <div className="col-sm" style={{color: "white",fontSize: 20}}>
                        <h4>Bizni Ijtimoiy tarmoqlarda kuzating: </h4>
                            <FaTelegram /> <a className="mb-2" href="https://t.me/glamourbandixon">Glamour-Bandixon kiyim-kechak do'koni</a> <br/>
                            <FaFacebook /> <a className="mb-2" href="https://www.facebook.com/Glamour-Bandixon-kiyim-kechak-dokon-102405921622222">Glamour-Bandixon kiyim-kechak do'koni</a> <br/>
                            <FaInstagram /> <a className="mb-2" href="#">Glamour-Bandixon kiyim-kechak do'koni</a> <br/>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center" style={{color: "white", fontSize:25}}>
            Dasturchi bilan aloqa: <a className="badge badge-info" href="https://t.me/abror_esonov">Abror Esonov</a> 
                                <p className="text-xs-center">
                                    &copy;{new Date().getFullYear()} Barcha huquqlar himoya qilingan
                                </p>
                              
                            </div>
        </div>
    )
}
export default Footer;