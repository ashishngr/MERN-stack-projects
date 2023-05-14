import React from 'react'
import { GridComponent, ColumnsDirective, 
ColumnDirective, Page, Selection, Inject, Edit, 
Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import {customerData, customerGrid, customersData, customersGrid} from '../data/dummy';
import { Header } from '../components';



const Customers = () => {
  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Customers" />
    <GridComponent
      dataSource={customersData}
      width="auto"
      allowPaging
      allowSorting
      pageSettings={{ pageCount: 5 }}
      editSettings={editing}
      toolbar={toolbarOptions}
    >
      <ColumnsDirective>
        {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
      <Inject services={[Page, Toolbar]} />

    </GridComponent>
  </div>
  )
}

export default Customers