import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export default class Footer extends Component {
    render() {
        return (
             <div style={{ marginTop: "200px" }}>
                <Card className="text-center fixed-bottom" >                
                    <Card.Footer className="text-muted"><p>@ RaysTechnology  Copyright: 2022-23 Raystech private limitted  ... by Manoj singh chouhan</p> </Card.Footer>
                </Card>
          </div>


        )
    }
}
