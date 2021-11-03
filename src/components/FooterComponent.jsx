import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
               <footer class="footer" style={{bottom:"0"}}>
                    <span className="text-muted">All Rights Reserved 2020 @KanbanTool</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
