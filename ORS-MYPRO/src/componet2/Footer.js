import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export default class Footer extends Component {

    render() {
        // const mystyle ={
        //     background:" radial-gradient(closest-side, #f87a6, #ebf8e1, #f69d3c)",
        //     marginTop: "300px",marginBottom: "1px", height: "35px", padding: "0px"
        //   }
        return (
            <div style={{ marginTop: "200px", marginBottom: "1px", height: "35px", padding: "0px" }}>
                <div>
                    <Card className="text-center fixed-bottom" >
                        <Card.Footer className="text-muted"><p>@ RaysTechnology  Copyright: 2022-23 Raystech pvt ltd  ... By : <em><strong>Manoj singh chouhan</strong> </em></p></Card.Footer>
                    </Card>
                </div>
            </div>


        )
    }
}
