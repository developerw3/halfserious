import React from 'react';
import { MDBBadge } from 'mdb-react-ui-kit';
import Link from 'next/link';
import { routes } from '@/routes/routes';
import PilotComponent, { connector } from '@/components/pilots/pilot-api';

// Define the PilotBadgeComponent to display the list of pilots by name
class PilotBadgeComponent extends PilotComponent {
	render() {
		// Destructure pilot data and loading/error states from props
		const { isError, isLoading, data } = this.props.pilot;

		return (
			(!isError && !isLoading && data && (
				<MDBBadge pill light>
					<Link href={routes.pilot.route.replace(routes.pilot.params as string, this.props.pilotId)}>{data.name}</Link>
				</MDBBadge>
			)) || <></>
		);
	}
}

export default connector(PilotBadgeComponent);
