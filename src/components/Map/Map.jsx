import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <div>
      <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d732.7562908972943!2d28.68216926948771!3d-15.327127705672797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDE5JzM3LjciUyAyOMKwNDAnNTguMSJF!5e1!3m2!1sen!2szm!4v1774959701571!5m2!1sen!2szm"
                    width="100%" 
                    height="450" 
                    style={{border:0}}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
            </iframe>
     </div> 
    </div>
  )
}

export default Map
