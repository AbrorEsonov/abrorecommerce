import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'
import "../App.css"
function Footer() {
    return (
        <div className='main-footer h-25'>
            <div className="container">
                <div className="row text__wrapper">
                    <div className="col-sm" style={{color: "white",fontSize: 20}}>
                        <h4>Manzilimiz: </h4>
                            <div>Bandixon tuman markazi, <br/>
                                "Bandixon market" oziq-ovqat do'koni 2-qavati.
                            </div>
                            <div>Mo'ljal: "Grand" kafe yoni</div>
                    </div>
                    <div className="col-sm mid__text" style={{color: "white",fontSize: 20}}>
                        <h4 className="mb-2">Bog'lanish: </h4>

                          <a href="tel:+998942650770">+998942650770 </a>  <br/>         
                          <a href="tel:+998997008181">+998997008181 </a> 
                    </div>
                    <div className="col-sm" style={{color: "white",fontSize: 20}}>
                        <h4>Bizni Ijtimoiy tarmoqlarda kuzating: </h4>
                            <FaTelegram /> <a className="mb-2" href="https://t.me/glamourbandixon">Glamour-Bandixon kiyim-kechak do'koni</a> <br/>
                            <FaFacebook /> <a className="mb-2" href="#">Glamour-Bandixon kiyim-kechak do'koni</a> <br/>
                            <FaInstagram /> <a className="mb-2" href="#">Glamour-Bandixon kiyim-kechak do'koni</a> <br/>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center" style={{color: "white", fontSize:25}}>
                                <p className="text-xs-center mt-4">
                                    &copy;{new Date().getFullYear()} CopyRight
                                </p>
                              
                            </div>
        </div>
    )
}
export default Footer;