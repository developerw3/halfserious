import React from 'react';
import { MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import { PaginationItemProps } from '@/components/pagination/model';

// PaginationItem component that renders an individual pagination item (e.g., page number or 'Next' button)
export default function PaginationItem({ active, href, pageNumber, pageName, disabled, changePage }: PaginationItemProps) {
	// Event handler for changing the page when a pagination item is clicked. It prevents the default behavior and triggers page change
	const currentPage = (e: React.MouseEvent<HTMLAnchorElement>, page: number) => {
		e.preventDefault();
		changePage(page);
	};

	return (
		<MDBPaginationItem active={active} disabled={disabled}>
			<MDBPaginationLink onClick={(e) => currentPage(e, pageNumber)} href={href}>
				{pageName || pageNumber}
			</MDBPaginationLink>
		</MDBPaginationItem>
	);
}
