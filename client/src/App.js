import React, { Component } from 'react'
import Card from './components/Card.js'
import Searchbar from './components/Searchbar.js'
import employeeData from '../src/components/data/employeeData.json'

const employeeList = employeeData
// console.log(employeeList)

for (var i = 0; i < employeeList.length; i++)
{
  var employee = employeeList[i];
  console.log("Name: " + employee.first_name + ", " + employee.last_name);
}

class App extends Component {

  state ={
    employees: employeeData.map(employee => {
return <Card
    fname = {employee.first_name}
    lname = {employee.last_name}
    department ={employee.department}
    title = {employee.title}
    />
  }),
   filter: '',
   searchFor: '',
}

handleFilter = event => {
  this.setState({filter: event.target.value.toLowerCase()})
}

handleSearch = event => {
  this.setState({searchFor: event.target.value.toLowerCase()})
}

handleOnClick = event => {
  event.preventDafault()
  let result
  switch(this.state.filter){
    case 'department':
      //filter for only department matching what the searchString is
      result = employeeData.filter( employee => {
        return employee.department.toLowerCase().match(this.state.searchFor)
      })

this.setState({
  filter: '',
  searchFor: '',
  employees: result.map(employee => {
    return <Card
    fname = {employee.first_name}
    lname = {employee.last_name}
    department ={employee.department}
    
    />

  })
})
break
case 'title':
  //filter for only title matching what the searchString is
  result = employeeData.filter(employee => {
    return employee.title.toLowerCase().match(this.state.searchFor)
  })
  //taking the filter data and mapping it into a Card component
  this.setState({
    filter: '',
    searchFor: '',
    employees: result.map(employee => {
      return <Card
        fname={employee.first_name}
        lname={employee.last_name}
        department={employee.department}
        title={employee.title}
      />
    })
  })
break

  }
}

    render () {
        return (
          <>
        <div className="container">
        <h1>Employee Data</h1>

          <div className="row">
            <div className="col-12">
              <Searchbar 
              filter = {this.state.filter}
              searchString = {this.state.searchFor}
              handleFilter = {this.handleFilter}
              handleSearch = {this.handleSearch}
              handleButtonClick = {this.handleOnClick}
              />
            </div>
            <div className="col-12">
              <div className="container">
                <div className="row">
                  {this.state.employees}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
    export default App
    