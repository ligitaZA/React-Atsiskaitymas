const Footer = () => {
  return ( 
    <>
      <footer>
    <div className="footer">
      <section id="left">
        <p>Contact Us</p>
        <div className="address">
          <div>
            <i className="fa fa-mail-forward"></i><a
              href="mailto:info@future.lt">info@future.gr</a>
              <br/>
            </div>
          <div>
            <i className="fa fa-phone"></i><p>+30 287 36973</p> 
            <br/>
          </div>
          <div>
            <i className="fa fa-location-arrow"></i><p>Athens, Greece</p> 
            <br/>
          </div>
        </div>
      </section>
      <section id="middle">
          <div className="logoFooter"></div>
      </section>
      <section id="right">
        <div className="soc-networks">
          <h3>Follow Us</h3>
          <a href="#">
            <i className="fa fa-facebook"></i></a>
          <a href="#">
            <i className="fa fa-instagram">
            </i></a>
        </div>
        </section>
    </div>
    
    <div className="copyrights">
      <p>Copyrights © 2023 FUTURE. All rights reserved.</p>
    </div>
  </footer>
    </>
   );
}
 
export default Footer;