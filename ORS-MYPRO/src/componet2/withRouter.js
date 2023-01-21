import React from 'react'
import { useParams } from 'react-router'

const withRouter = (Wrapped) => props => {
    const params = useParams();

    return (
        <Wrapped {...props} params={params} />
    )
}
export default withRouter;
