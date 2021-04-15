import React from "react";

const TabContent = ({ content }) => {
    if(content.type) return <div className="tab-content"><ImageGrid images={content.data} /></div>
    else return <div class="tab-content">{content}</div>
}

const ImageGrid = ({images}) => {
    let figures = images.map((img, index)=> {
        let myImage = require(`./images/${img.src}`);
        console.log("myImage::",myImage)
        return (<figure key={index}>
                    <img src={myImage.default} alt="This is sample alternate text" />
                    <figcaption>{img.caption}</figcaption>
                </figure>)
    });
    return figures;
};

export default TabContent; 