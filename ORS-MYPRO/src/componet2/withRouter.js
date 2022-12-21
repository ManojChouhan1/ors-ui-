import React from 'react'
import { useParams } from 'react-router'

const withRouter = (WpdC) => props => {
    const params = useParams();

    return (
        <WpdC {...props} params={params} />
    )
}
export default withRouter;
