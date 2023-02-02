const Footer = () => {
  return ( 
    <>
      <footer>
    <div className="footer">
      <section id="left">
        <p>Susisiekite</p>
        <div className="address">
          <div>
            <i className="fa-regular fa-paper-plane"></i><a
              href="mailto:info@palapiniumagnatai.lt">info@palapiniumagnatai.lt</a>
              <br/>
            </div>
          <div>
            <i className="fa-solid fa-phone"></i><p>+370 687 36973</p> 
            <br/>
          </div>
          <div>
            <i className="fa-solid fa-location-dot"></i><p>Svencelės g. 33, Svencelė Lietuva</p> 
            <br/>
          </div>
        </div>
      </section>
      <section id="middle">
          <img src="./images/MicrosoftTeams-image.png" alt="" />
      </section>
      <section id="right">
        <div className="soc-networks">
          <h3>Sekite mus</h3>
          <a href="#">
            <i className="fa-brands fa-facebook-f fa-xl"></i></a>
          <a href="#">
            <i className="fa-brands fa-instagram fa-xl">
            </i></a>
        </div>
        </section>
    </div>
    
    <div className="copyrights">
      <p>Copyrights © 2021 John Doe. All rights reserved.</p>
    </div>
  </footer>
    </>
   );
}
 
export default Footer;