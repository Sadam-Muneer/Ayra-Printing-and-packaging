import React from 'react'

const map = () => {
  return (
    <>
    <div class="main-map" style={{height: '850px'}}>
          <div id="office">
            <div class="padding_adjust">
              <iframe
                width="100%"
                height="850"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d862.0187379047832!2d71.46201467487627!3d30.2064081670968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b33ea578b0b0f%3A0x2c5c50e6582c54ad!2sZolix%20Pvt.%20Ltd!5e0!3m2!1sen!2s!4v1717671466483!5m2!1sen!2s"
                frameborder="0"
                style={{filter: 'invert(90%)'}}
              />
            </div>
          </div>
        </div>
    </>
  )
}

export default map;