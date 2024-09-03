import React, { useState } from 'react'
import "./Services.css"

const Services = () => {

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3]= useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  
  return (
    <div className="service-page">
      <p className="service-name">OUR SERVICES</p>
    <div className="box-service-sample">
      <div className="images-design-service">
        <div className={isHovered1 === true ? "image-border1 active" : "image-border1"}>
        </div>
      <img onMouseEnter={() => setIsHovered1(true)}
      onMouseLeave={() => setIsHovered1(false)} src="https://images.unsplash.com/photo-1589884629000-60c572c6ba7a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvd29yayUyMHN0dWR5JTIwZGVza3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
            <div className="image-details">
            <p>We provide Spaces for to conduct Meeting with privacy and Peacefull ambience </p>
        </div>
    </div>
    <div className="box-service-sample">
        <div className="image-details">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis, delectus sit, accusamus itaque similique.</p>
        </div>
        <div className="images-design-service">
        <div className={isHovered2 === true ? "image-border2 active" : "image-border2"}>
        </div>
        <img onMouseEnter={() => setIsHovered2(true)}
      onMouseLeave={() => setIsHovered2(false)} src="https://images.unsplash.com/photo-1589884629000-60c572c6ba7a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvd29yayUyMHN0dWR5JTIwZGVza3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
    </div>
    
    <div className="box-service-sample">
      <div className="images-design-service">
        <div className={isHovered3 === true ? "image-border3 active" : "image-border3"}>
        </div>
      <img onMouseEnter={() => setIsHovered3(true)}
      onMouseLeave={() => setIsHovered3(false)} src="https://images.unsplash.com/photo-1589884629000-60c572c6ba7a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvd29yayUyMHN0dWR5JTIwZGVza3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
            <div className="image-details">
            <p>We provide Spaces for to conduct Meeting with privacy and Peacefull ambience </p>
        </div>
    </div>
    <div className="box-service-sample">
        <div className="image-details">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis, delectus sit, accusamus itaque similique.</p>
        </div>
        <div className="images-design-service">
        <div className={isHovered4 === true ? "image-border4 active" : "image-border4"}>
        </div>
        <img onMouseEnter={() => setIsHovered4(true)}
      onMouseLeave={() => setIsHovered4(false)} src="https://images.unsplash.com/photo-1589884629000-60c572c6ba7a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvd29yayUyMHN0dWR5JTIwZGVza3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
    </div>
    
   </div>
  )
}

export default Services