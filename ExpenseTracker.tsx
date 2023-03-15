import React, { ChangeEvent, Component, FormEvent } from'react';
import { pushDataFronUser } from '../services/ItemService';

type Props = {
  onTrue: any
  onClose:any
}

type State={
  product:string,
  price:number,
  payeeName:string,
  setDate:string
}

class ExpenseTracker extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      payeeName:"",
      product:"",
      price:0,
      setDate:""
      }
  }

  submitHandler = async(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    const finalData = {
      ...this.state
    }
    const data = await pushDataFronUser(finalData);
    this.props.onTrue()
  }

  setPayee = (event: ChangeEvent<HTMLSelectElement>)=>{
    this.setState({
      payeeName:event.target.value
    });
  }

  setPrice = (event : ChangeEvent<HTMLInputElement>)=>{
    this.setState({
      price:parseInt(event.target.value)
    })
  }

  setProduct = (event: ChangeEvent<HTMLInputElement>)=>{
    this.setState({
      product:event.target.value
    });
  }

  loggedData = (e: ChangeEvent<HTMLInputElement>)=>{
    this.setState({
      setDate:e.target.value,
    })
  }

  render() { 
    return ( <>
    <section>
      <header>
        <h1>Add new Item</h1>
        <p>Read the  below instructions before procedding: <br /> fill all fields</p>
      </header>

      <form onSubmit={this.submitHandler}>
        <article>
          <p>Name</p>
          <select name='Name' required value={this.state.payeeName}
          onChange={this.setPayee}>
            <option value="" defaultChecked>Choose</option>
            <option value="Rahul">Rahul</option>
            <option value="Ramesh">Ramesh</option>
          </select>
        </article>
        <article>
          <p>Product Purchased</p>
          <input type="text" required value={this.state.product} onChange={this.setProduct}></input>
        </article>
        <article>
          <p>Price</p>
          <input type="number" required value={this.state.price} onChange={this.setPrice}/>
        </article>

        <article>
          <p>Date</p>
          <input type="date" required value={this.state.setDate} onChange={this.loggedData}/>
        </article>
        <button type="button" className="form-button" onClick={this.props.onClose}>Close</button>
        <button type='submit' className='form-button'>Submit</button>
      </form>
    </section>
    
    </> );
  }
}
 
export default ExpenseTracker;