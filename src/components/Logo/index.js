import React from 'react'

const Logo = ({src, alt, height}) => {
    return (
        <img src={src} height={height} alt={alt}></img>
    );
}

export default Logo