import React from 'react';


export default props => {
    console.log(props.info)
    const {info} = props
    return(
        <div>
            <div className="card text-center">
                <img src={info['im:image'][2].label} className="card-img-top"/>
                    <div className="card-block">
                    <h3 className="card-title">{info['im:name'].label}</h3>
                    <p className="card-text">{info['summary'].label}</p>
                    <a href={info['link'][1].attributes.href} class='btn btn-outline-primary'>View Trailer</a>
                </div>

            </div>
        </div>
    )
}


