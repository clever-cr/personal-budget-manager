
import { IoFilter } from 'react-icons/io5';
import { TbArrowsSort } from 'react-icons/tb';
import { Button, Flex, Table ,DatePicker} from 'antd';
import { useEffect, useState } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getExpense } from '../services/expense/action';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Date', dataIndex: 'date' },
  { title: 'Transaction', dataIndex: 'description' },
  { title: 'Amount', dataIndex: 'amount' },
  { title: 'Category', dataIndex: 'category' },
];


const ExpenseSummary = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateChange = (date:any, dateString: any) => {
    setSelectedDate(dateString); // date is a moment object
    console.log('Date Object:', date); // Log the moment object
    console.log('Formatted Date String:', dateString); // Log the formatted string
  };
  const dispatch = useDispatch()
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const {expense} = useSelector((state:any)=>state)
const data = expense?.all
console.log("daetaaa",data)
useEffect(()=>{
  getExpense(`${ selectedDate && ("date="+selectedDate)}`)(dispatch)
},[dispatch, selectedDate])
// eslint-disable-next-line @typescript-eslint/no-explicit-any

  const start = () => {
    setLoading(true);

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;
  return (
    <>
      <h1>Expense summary</h1>
      <div className="flex items-center gap-5 pt-5">
        <div className="bg-[#F7F6FF] p-5 rounded-lg w-[400px] h-[104px] border-[#4B4EC1]- border">
          Income
        </div>
        <div className="bg-[#F7F6FF] p-5 rounded-lg  w-[400px] h-[104px]">
          Income
        </div>
        <div className="bg-[#F7F6FF] p-5 rounded-lg  w-[400px] h-[104px]">
          Income
        </div>
      </div>

      <div className="flex items-center justify-between pb-4 pt-24">
      <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <div className='flex items-center gap-5'>
        <div className="border border-[#FBFBFB] px-2 py-1 rounded-lg shadow-sm flex items-center gap-2">
          <TbArrowsSort />

          <p>Sort</p>
        </div>
        <div className="border border-[#FBFBFB] px-3 py-1 rounded-lg shadow-sm flex items-center gap-2">
          <IoFilter className="text-red-400-" />
          <p>filters</p>
        </div>
        <DatePicker onChange={handleDateChange}/>
        </div>
        
      </div>
      <div>
      <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
       
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Flex>
      <Table<DataType> rowSelection={rowSelection} columns={columns} dataSource={data?.expense} />
    </Flex>
      </div>
    </>
  );
};
export default ExpenseSummary;

