
import { IoFilter } from 'react-icons/io5';
import { TbArrowsSort } from 'react-icons/tb';
import { Button, Flex, Table ,DatePicker} from 'antd';
import { useState } from 'react';
import type { TableColumnsType, TableProps } from 'antd';


type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Date', dataIndex: 'name' },
  { title: 'Transaction', dataIndex: 'age' },
  { title: 'Amount', dataIndex: 'address' },
  { title: 'Category', dataIndex: 'address' },
];

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

const ExpenseSummary = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

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
        <DatePicker />
        </div>
        
      </div>
      <div>
      <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
       
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Flex>
      <Table<DataType> rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
    </Flex>
      </div>
    </>
  );
};
export default ExpenseSummary;
