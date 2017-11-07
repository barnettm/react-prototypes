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
                    <a className='btn btn-outline-primary' href={info['link'][1].attributes.href} role="button">View Trailer</a>
                </div>

            </div>
        </div>
    )
}


