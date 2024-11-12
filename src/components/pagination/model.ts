import { ApiGetResponse } from '@/api/model';

export interface PaginationItemProps {
	active?: boolean;
	disabled?: boolean;
	href: string;
	pageNumber: number;
	pageName?: string;
	changePage: (page: number) => void;
}

export interface PaginationItemsProps {
	items: Array<PaginationItemProps>;
}

export interface PaginationProps {
	currentPage: number;
	changePage: (page: number) => void;
}

// Function to generate pagination items based on API response and the current page
export function paginationItems<R>(data: ApiGetResponse<R>, currentPage: number, changePage: (page: number) => void): Array<PaginationItemProps> {
	const items: Array<PaginationItemProps> = [];

	items.push({
		active: false,
		disabled: data?.previous === null,
		href: data?.previous === null ? '#' : `?page=${currentPage - 1}`,
		pageNumber: currentPage - 1,
		pageName: 'Previous',
		changePage,
	});

	for (let i = 1; i <= Math.ceil((data?.count || 0) / 10); i++) {
		items.push({
			active: currentPage === i,
			disabled: false,
			href: `?page=${i}`,
			pageNumber: i,
			changePage,
		});
	}

	items.push({
		active: false,
		disabled: data?.next === null,
		href: data?.next === null ? '#' : `?page=${currentPage + 1}`,
		pageNumber: currentPage + 1,
		pageName: 'Next',
		changePage,
	});

	return items;
}
