const Contact = () => {
  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <form action="">
          <caption>get in touch</caption>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" placeholder="Phone Number" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <textarea
              rows={10}
              type="text"
              className=""
              placeholder="Message"
            />
          </div>
          <div className="d-flex ">
            <button>SEND</button>
          </div>
        </form>

        <div className="map_container">
          <div className="map">
            <div id="googleMap"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
