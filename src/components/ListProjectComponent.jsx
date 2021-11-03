import React, { Component } from 'react'
import ProjectService from '../services/ProjectService'
import {BsFillPlusCircleFill,BsArrowRepeat,BsArchiveFill,BsEye,BsBoxArrowLeft} from 'react-icons/bs'
import {Link} from 'react-router-dom'
class ListProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                projects: []
        }
        this.addProject = this.addProject.bind(this);
        this.editProject = this.editProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
    }

    deleteProject(id){
        ProjectService.deleteProject(id).then( res => {
            this.setState({projects: this.state.projects.filter(project=> project.id !== id)});
        });
    }
    viewProject(id){
        this.props.history.push(`/view-project/${id}`);
    }
    editProject(id){
        this.props.history.push(`/add-project/${id}`);
    }

    componentDidMount(){
        ProjectService.getProjects().then((res) => {
            this.setState({ projects: res.data});
        });
    }

    addProject(){
        this.props.history.push('/add-project/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Project List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProject}> <BsFillPlusCircleFill/></button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Project Name</th>
                                    <th> Description</th>
                                    <th> Status</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.projects.map(
                                       project => 
                                        <tr key = {project.id}>
                                             <td> { project.projectName} </td>   
                                             <td> {project.description}</td>
                                             <td> {project.status}</td>
                                             <td>
                                                 <button onClick={ () => this.editProject(project.id)} className="btn btn-info"><BsArrowRepeat/></button>
                                                 <button  style={{marginLeft: "10px"}} onClick={ () => this.deleteProject(project.id)} className="btn btn-danger"><BsArchiveFill/></button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProject(project.id)} className="btn btn-info"><BsEye/></button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                       

                 </div>
                 <div>
               <Link to="/" > <button  className="btn btn-primary"><BsBoxArrowLeft/>      Logout</button></Link>
                 </div>

            </div>
        )
    }
}

export default ListProjectComponent
