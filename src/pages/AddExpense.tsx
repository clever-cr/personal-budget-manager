import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

import { DatePicker, Select } from 'antd';

const AddExpense = () => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  return (
    <>
      <div className="flex flex-col gap-12 items-center-">
        <h1 className="text-2xl font-bold text-center- pb-10">Add expense</h1>

        <div className="flex flex-col gap-8">
          <div className="bg-red-400- flex items-center gap-5 ">
            <div className='flex flex-col gap-2'>
              <p>Transaction</p>
            <Input />
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
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
        </div>
          
          </div>
          <div className="bg-red-400- flex gap-5">
           <div className='flex flex-col gap-2'>
           <p>Amount</p>
           <Input />
           </div>
          <div className='flex flex-col gap-2'>
            <p>Date</p>
          <DatePicker className=" w-[400px] h-[42px]"/>
          </div>
          
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Button />
          <Button />
        </div>
      </div>
    </>
  );
};
export default AddExpense;
