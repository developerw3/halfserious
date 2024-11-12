import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody } from 'mdb-react-ui-kit';

interface ModalProps {
	children: ReactElement;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ open, setOpen, children }: ModalProps) {
	return (
		<MDBModal open={open} onClose={() => setOpen(false)} tabIndex={-1} defaultOpen={false}>
			<MDBModalDialog size='lg' scrollable>
				<MDBModalContent className='p-0 w-100'>
					<MDBModalBody className=' p-0 m-0'>{children}</MDBModalBody>
				</MDBModalContent>
			</MDBModalDialog>
		</MDBModal>
	);
}
