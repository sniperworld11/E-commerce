import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facillates buying and slling of products or services over the internet it serves as a vertual marketplace where businessman and individuals showcase their products,interact with customers,and conduct transections without the need for a physical presence.E-commerce website has gained immense popularity due to their convenient accessibility,and the global reach they offer.</p>
        <p>
            E-commerce websites typically display products or services as a detailed description,images,prices,and any available variety very easily.each product usually has its own dedication with relivant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
