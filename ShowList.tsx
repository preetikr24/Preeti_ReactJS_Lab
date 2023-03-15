import userEvent from "@testing-library/user-event";
import { useEffect, useInsertionEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Badge from "react-bootstrap/esm/Badge";
import IDataList from "../models/IDataList";
import { getItemService } from "../services/ItemService";
import ExpenseTracker from "./ExpenseTracker";

const ShowList = () => {

    const [items, setItems] = useState<IDataList[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [sum, setSum] = useState<number | null>(0);
    const [rahulSpent, setRahulSpent] = useState<number>(0);
    const [rameshSpent, setRameshSpent] = useState<number>(0);
    const [showForm, setShowForm] = useState<boolean>(false);


    useEffect(() => {
        const fetchItemData = async () => {
            try {
                const data = await getItemService();
                console.log(data);
                setItems(data);
                //calculate SUm, update sum calc rahul and ramesh spent
                setSum(data.reduce((result, expense) => result + expense.price, 0))
                calculateShares(data);
            } catch (error: any) {
                console.log(error)
                setError(error);
            }
        }
        fetchItemData();
    }, [showForm])

    const calculateShares = (data: IDataList[]) => {
        var rahulSpent1: number = 0
        var rameshSpent1: number = 0
        data.map(
            sams => (
                sams.payeeName === "Rahul" ? (
                    rahulSpent1 = rahulSpent1 + sams.price
                ) :
                    (
                        rameshSpent1 = rameshSpent1 + sams.price
                    )
            )
        );
        setRahulSpent(rahulSpent1);
        setRameshSpent(rameshSpent1);
    };

    // const getTableHeaders=()=>{
    //     return (
    //         // <>
           
    //         //  <div className="">Date</div>
    //         //  <div className="">ProductPurchesed</div>
    //         //  <div className="">Price</div>
    //         //  <div className="">Payee</div>

    //         // </>
    //         <Table striped bordered hover>
    //         <thead>
    //             <tr>
    //                 <th>id</th>
    //                 <th>Date</th>
    //                 <th>Product</th>
    //                 <th>Price</th>
    //                 <th>Payee</th>
    //             </tr>
    //         </thead> 
    //         </Table>
    //     )
    // }
    return (
        
        <>
            <header id="page-Header">Expense Tracker</header>
            {/* Add button */}
            <button id="Add-Button" onClick={()=>setShowForm(true)}>Add</button>
            {
                showForm && (
                     <div className="form">
                         <ExpenseTracker onTrue={()=>setShowForm(false)} onClose={()=>setShowForm(false)}></ExpenseTracker>
                     </div>
                 )
            }
            <>
                <div className="use-inline date header-color">Date</div>
                <div className="use-inline header-color">Product Purchased</div>
                <div className="use-inline price header-color">Price</div>
                <div className="use-inline header-color" style={{width: 112}}>Payee</div>
            </>
            {
                items && items.map ((user,idx)=>{
                    return (<div key={idx}>
                        <div className="use-inline date">{user.setDate}</div>
                        <div className="use-inline">{user.product}</div>
                        <div className="use-inline price">{user.price}</div>
                        <div className={`use-inline ${user.payeeName}`}>{user.payeeName}</div>
                    </div>)
                })
            }
        <hr/>
        <div className="use-inline ">Total: </div>
        <span className="use-inline total">{sum}</span> <br />
        <div className="use-inline ">Rahul paid: </div>
        <span className="use-inline total Rahul">{rahulSpent}</span> <br />
        <div className="use-inline ">Ramesh paid: </div>
        <span className="use-inline total Ramesh">{rameshSpent}</span> <br />
        <span className="use-inline payable">{rahulSpent>rameshSpent? "Pay Rahul " : "Pay Ramesh"}</span>
        <span className="use-inline payable price"> {Math.abs((rahulSpent-rameshSpent)/2)}</span>
        {
               error && (
                    <>
                        {error?.message}
                    </>
                )
            } 
        </>
    );
}

export default ShowList;