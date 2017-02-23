/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import * as data from './data.json'
import axios from 'axios'

const Title = ({studentCount}) => {
  return (
    <div>
      <div>
        <h1>wdi alumni ({studentCount})</h1>
      </div>
    </div>
  )
}
const Student = ({student}) => {
  return (<li>{student.githubLogin}</li>);
}
const StudentList = ({students}) => {
  const studentNode = students.map((student, i) => {
    return (<Student student={student} key={i} />)
  });
  return (<div>{studentNode}</div>);
}

class StudentApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      selectedUser: data[0],
      userObj: {'hello': 'potato'}
    }
    this.dataUrl = "https://raw.githubusercontent.com/wdi-sg/alumni/master/data.json"

    this.selectUser = this.selectUser.bind(this)
  }

  componentDidMount(){
    axios.get(this.dataUrl)
      .then((res) => {
        this.setState({data:res.data});
      });
  }


  selectUser(user, userObj) {
    // console.log(this.state.data.login);
    this.setState({
      selectedUser: user,
      userObj: userObj })
    // console.log(this.state.selectedUser)
  }

  render () {
    // console.log(this.state.userObj);
    return (
      <div className="mycontainer">
        <div id="main-container">
          <div>
             <Title studentCount={this.state.data.length}/>
             <div className="card-deck">
             {this.state.data.map((student, i) => {
               return (
              <Card key={i} student={student} selectMe={this.selectUser} />
              )
            })}
          </div>
        </div>
      </div>
      <div id="side-container">
          <Project project={this.state.selectedUser} boop={this.state.userObj} />
      </div>
    </div>
    )
  }
}


class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {}
    }
    // console.log(this.props);
    this.infoUrl = 'https://api.github.com/users/' + this.props.student.githubLogin + '?client_id=dc2bd4003e95b319446a&client_secret=420d68e90ee9ad3cb3fa95e5a8b5cc26eaf38328'
  }

  componentDidMount(){
    axios.get(this.infoUrl)
      .then((res) => {
        this.setState({
          data:res.data
        });
        // console.log(res.data);
      });
  }

  render () {
    // console.log(this.state.data.avatar_url);
    return (

      <div className="card card-outline-info" onClick={() => {this.props.selectMe(this.props.student, this.state.data)}}>
        <img className="card-img-top" src={this.state.data.avatar_url}  />
        <div className="card-block">
          <h4 className="card-title">{this.state.data.login}</h4>
          <p className="card-text">{this.state.data.id}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted"><a href={this.state.data.html_url}>github</a></small>
        </div>
      </div>

    )
  }
}


const Project = (props) => {
  // console.log(props.project);
  // console.log(props.boop.repos_url)
  var blah = 'https://github.com/' + props.project.githubLogin
  return(
    <div>

    <div className="card" id="preview-window" style={{width: '30rem'}}>
      <div className="card-block">
        <h4 className="card-title">{props.project.githubLogin}</h4>
        <p className="card-text">Batch: {props.project.batch}</p>
      </div>
      <div className="card-block">
        <h3>{props.project.project1.repoName}</h3>
        <p>
          <a href={blah + '/' + props.project.project1.repoName} className="card-link">github repo</a>
          <a href={props.project.project1.deployedUrl} className="card-link">deployed project</a>
        </p>
        <img className="preview" src={props.project.project1.previewImage} />
      </div>
      <div className="card-block">
        <h3>{props.project.project2.repoName}</h3>
        <p>
        <a href={blah + '/' + props.project.project2.repoName} className="card-link">github repo</a>
          <a href={props.project.project2.deployedUrl} className="card-link">deployed project</a>
        </p>
        <img className="preview" src={props.project.project2.previewImage} />
      </div>
      <div className="card-block">
        <h3>{props.project.project3.repoName}</h3>
        <p>
        <a href={blah + '/' + props.project.project3.repoName} className="card-link">github repo</a>
          <a href={props.project.project3.deployedUrl} className="card-link">deployed project</a>
        </p>
        <img className="preview" src={props.project.project3.previewImage} />
      </div>


    </div>
    </div>
  )
}
// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<StudentApp />, document.getElementById('container'))
