import React from 'react';
import { MDBPagination } from 'mdb-react-ui-kit';
import PaginationItem from '@/components/pagination/pagination-item';
import { PaginationItemsProps } from '@/components/pagination/model';

// Pagination component that receives an array of pagination items and renders them using MDBPagination
export default function Pagination({ items }: PaginationItemsProps) {
	return (
		<MDBPagination className='mb-0'>
			{items.map((item, key) => (
				<PaginationItem
					key={key}
					active={item.active}
					href={item.href}
					pageNumber={item.pageNumber}
					pageName={item.pageName}
					disabled={item.disabled}
					changePage={item.changePage}
				></PaginationItem>
			))}
		</MDBPagination>
	);
}
