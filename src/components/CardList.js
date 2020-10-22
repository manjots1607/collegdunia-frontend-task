import React,{useEffect, useState} from 'react';
import Card from "./Card.js";
import collegeData from "./colleges.json";

function CardList(props) {

    const [colleges, setColleges] = useState([]);
    const [page, setPage] = useState(1);
    const [reachedEnd, setReachedEnd] = useState(false);

    useEffect(()=>{
        const start= (page-1)*10;

        // As I was Provide By JSON file that I imported but in real worl scenario,
        // I will request server to get Data According to paging.

        const next10Colleges=collegeData.colleges.slice(start,start+10);
        console.log(next10Colleges);
        setColleges([...colleges,...next10Colleges]);
        setPage(page+1);
    },[])

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[page,reachedEnd])

    function handleScroll(e){
        // Condition to check whether scroll bar reached end or not...
        if(e.target.scrollingElement.scrollHeight == (e.target.scrollingElement.scrollTop + e.target.scrollingElement.clientHeight)){
            if(!reachedEnd){
                
                const start= (page-1)*10;
                const next10Colleges=collegeData.colleges.slice(start,start+10);

                setColleges([...colleges,...next10Colleges]);
                setPage(page+1);
                
                //In Last Page we will always have less than 10 products
                //except the case of total products in multiple of 10 in that case reached end is set to true next time
                if(next10Colleges.length<10){
                    setReachedEnd(true);
                }
            }
        }
    }


    return (
        <div className="d-flex" style={{position:"relative"}} >
            {colleges.map((college,i)=>(
                <div className="col-lg-6 p-4" key={i} > <Card data={college} /> </div>
            ))}
        </div>
    )
}


export default CardList

