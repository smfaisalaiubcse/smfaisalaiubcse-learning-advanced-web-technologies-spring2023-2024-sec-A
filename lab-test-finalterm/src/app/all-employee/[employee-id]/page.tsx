import { notFound } from "next/navigation"; 

export default function PrductDetails( {params} : {params:{Employeeid: string}} ){
    
    return (
        <>
            <h1> Details About Employee {params.Employeeid}</h1>
        </>
    );
}