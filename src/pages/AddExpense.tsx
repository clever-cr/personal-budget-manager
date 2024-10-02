import { useDispatch } from 'react-redux';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

import { DatePicker, Select } from 'antd';
import { useEffect, useState } from 'react';
import { formData } from '../types';
import { addExpense } from '../services/expense/action';

const AddExpense = () => {
   const dispatch = useDispatch()
   const [formDatas,setFormDatas] = useState<formData>()
const [category,setSelectCategory] = useState<string>("")
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const handleChange = (e:any) =>{
// setFormDatas(e.target.value)
// }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleSubmit =async (event:any) => {
  event.preventDefault(); 

  const formData = new FormData(event.target); 

  // Get form values
  const formValues = Object.fromEntries(formData.entries()); 
  console.log({...formValues,category}); 
  await addExpense({...formValues,category})(dispatch);
  event.target.reset(); 
};
useEffect(()=>{
  if (formDatas) {
    addExpense(formDatas)(dispatch);
  }
},[])

console.log("form data--",formDatas)
  const onChange = (value: string) => {
    setSelectCategory(value)
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  return (
    <>
      <div className="flex flex-col gap-12 items-center-">
        <h1 className="text-2xl font-bold text-center- pb-10">Add expense</h1>

        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="bg-red-400- flex items-center gap-5 ">
            <div className='flex flex-col gap-2'>
              <p>Transaction</p>
            <Input  name={'transaction'}/>
            </div>
        <div className='flex flex-col gap-2'>
        <p>Category</p>
        <Select
            className=' w-[400px] px-4- py-2- h-[42px]'
            
              showSearch
              placeholder="Select a person"
              optionFilterProp="label"
              onChange={onChange}
              onSearch={onSearch}
              options={[
                {
                  value: 'Food',
                  label: 'Food',
                },
              ]}
     
            />
        </div>
          
          </div>
          <div className="bg-red-400- flex gap-5">
           <div className='flex flex-col gap-2'>
           <p>Amount</p>
           <Input   name={'amount'} />
           </div>
          <div className='flex flex-col gap-2'>
            <p>Date</p>
          <DatePicker  name="date" className=" w-[400px] h-[42px]"/>
          </div>
          
          </div>
          <button className='bg-red-500 p-3' type='submit'>Submit</button>
        </form>

        <div className="flex items-center gap-5">
          <Button />
          <Button />
        </div>
      </div>
    </>
  );
};
export default AddExpense;
