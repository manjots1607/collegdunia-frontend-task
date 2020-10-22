import React, { useState } from 'react';
import "./cards.css";
import StarRating from './StarRating/StarRating';

function Card(props) {
    return (
        <div className="card-wrapper">
        {props.data.promoted?<div className="promoTag"> PROMOTED </div>:null}
        <div className="card">
            <div className="cover" style={{background:`linear-gradient(210.64deg, #00000098 15.51%, #00000080 114.31%), url("./${props.data.image}")`}} >

                <div className="rating">
                    <span className="val" >{props.data.rating}</span>/5
                    <br/>
                    <span> {props.data.rating_remarks} </span>
                </div>

                <div className="b-row d-flex justify-between align-center">
                    <div>
                        {props.data.tags.map((tag,i)=>(  
                            <div className="tag" key={i}> {tag} </div>
                        ))}
                    </div>

                    <div> #{props.data.ranking}  </div>
                </div>

            </div>
            <div className="body">
                <div className="main d-flex justify-between" >
                    <div className="left">
                        <div className="heading d-flex align-center">
                            <h3> {props.data.college_name} </h3>
                            <div style={{fontSize:"12px"}} className="ml-1" > <StarRating value={props.data.rating} /> </div>
                        </div>

                        <div className="mt-2" style={{fontSize:"13.5px"}}> 
                            {props.data.nearest_place.map((place,i)=>(
                                <span style={{color:i!==0?"#adadad":undefined}} > {place} {i!==props.data.nearest_place.length-1 ? "|" :""} </span>
                            ))}
                        </div>
                        <div className="mt-2" style={{fontSize:"13.5px"}}> 
                            <b className="text-blue"> 93% Match: </b> 
                            {props.data.famous_nearest_places}
                        </div>

                    </div>

                    <div className="right text-right">
                        <div style={{fontSize:"12px"}}> <del> ₹{props.data.original_fees}</del> <span className="discount" > {props.data.discount} </span> </div>
                        <h3 className="fees"> ₹{props.data.discounted_fees} </h3>
                        <p className="text-gray" style={{fontSize:"12px"}} > {props.data.fees_cycle} </p>
                    </div>
                </div>

                <div className="d-flex justify-between align-center mt-2" style={{fontSize:"12px"}} >
                    <div className="offer" > <b> {props.data.offertext} </b>  </div>
                    <div style={{color:"#4bb89e"}} className="text-right text-green p-2" > <b> {props.data.amenties.join(" . ")} </b>   </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card;

