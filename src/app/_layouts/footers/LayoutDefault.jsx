"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from 'next/navigation';

const DefaultFooter = () => {
  const asPath = usePathname();

  return (
    <>
    {/* footer */}
    <footer className="mil-relative">
        <img src="./img/allimg/all banners/mainbg.webp" className="mil-bg-img mil-parallax" alt="image" style={{"objectPosition": "top"}} data-value-1="-25%" data-value-2="23%" />

        <div className="mil-overlay" />
        <div className="container mil-p-120-90">
            <div className="mil-background-grid" />

            <div className="row align-items-end">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-12">

                            <div className="mil-footer-navigation mil-up" style={{marginBottom:"30px"}}>
                                <nav>
                                    <ul>
                                        {AppData.footer.menu.map((item, key) => (
                                        <li key={`footer-menu-item-${key}`} className={((asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) ? "mil-active" : ""}>
                                            <Link href={item.link}>{item.label}</Link>
                                        </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3" >
                            <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">INDIA</span>
                            <p className="mil-text-sm mil-up mil-light-soft mil-mb-30"> 2nd Floor, Janapriya Complex, State Bank, Mangalore</p>
                            <p style={{marginTop:'-20px'}}><a href="https://wa.me/917795240605" target="_blank" className="mil-text-sm mil-up mil-light-soft mil-mb-30 ">+917 795 240 605</a></p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">IVORY COAST</span>
                            <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">11 BP 2498- 11, 4th Floor, Waimea Bldg, Marcory Boulevard VGE, Abidjan, Côte d'Ivoire</p>
                            <p style={{marginTop:'-20px'}}> <a href="https://wa.me/+2250797979387" target="_blank" className="mil-text-sm mil-up mil-light-soft mil-mb-30 ">+225 079 797 9387</a></p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">UAE</span>
                            <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates</p>
                             <p style={{marginTop:'-20px'}}><a href="https://wa.me/+971545681182" target="_blank" className="mil-text-sm mil-up mil-light-soft mil-mb-30 ">+971 545 681 182</a></p>
                        </div>
                        {/* <div className="col-md-6 col-lg-6 col-xl-3">
                            <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">QATAR</span>
                            <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">
                            Doha-Qatar </p>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-4">
                    <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
                        <img src='./img/photo/all img/footerlogo.webp' alt={AppData.footer.logo.alt} style={{"width": "220px"}} />
                    </Link>
                </div>
            </div>
        </div>
        <div className="container-fluid">

            <div className="mil-footer-bottom">
                <p className="mil-light-soft mil-mb-15">© 2025 All Right  Reserved <Link href='https://brightmedia.tech/'  target="_blank" ><span style={{color:'#BCFF00'}}>BRIGHT MEDIA</span> </Link></p>
                <ul className="mil-light-soft mil-mb-15">
                    {AppData.social.map((item, key) => (
                    <li key={`footer-social-item-${key}`}><a href={item.link} target="_blank">{item.title}</a></li>
                    ))}
                </ul>
                {/* <ul className="mil-light-soft mil-mb-15">
                    <li><a href="#.">Our App</a></li>
                    <li><a href="#.">Sitemap</a></li>
                </ul> */}
            </div>

        </div>
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
