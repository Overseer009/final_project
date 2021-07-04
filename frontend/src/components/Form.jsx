import React, {useState} from "react"


const Form = function (props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(name)

  return (
    <form action="/api/users" method="POST" onSubmit={() => {props.registerUser(name, email, password)}}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text" 
          value={name} 
          onChange={(event) => setName(event.target.value)} 
          placeholder="Enter name"
        />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input 
          type="email"
          value={email} 
          onChange={(event) => setEmail(event.target.value)}  
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input 
          type="password"
          value={password} 
          onChange={(event) => setPassword(event.target.value)}   
          placeholder="Password"
        />
      </div>
      <div> 
        <button type="submit">add</button>
      </div>
    </form>
  ) 
}

export default Form;

// <main className="appointment__card appointment__card--create">
//   <section className="appointment__card-left">
//     <form onSubmit={event => event.preventDefault()} autoComplete="off">
//       <input
//         className="appointment__create-input text--semi-bold"
//         name="name"
//         type="text"
//         placeholder="Enter Student Name"
//         value={name}
//         onChange={event => setName(event.target.value)}
//         data-testid="student-name-input"
//       />
//       <section className="appointment__validation">{error}</section>
//     </form>
//     <InterviewerList 
//       interviewers={props.interviewers} 
//       value={interviewer} 
//       onChange={setInterviewer} />
//   </section>
//   <section className="appointment__card-right">
//     <section className="appointment__actions">
//       <Button danger onClick={reset}>Cancel</Button>
//       <Button confirm onClick={validate}>Save</Button>
//     </section>
//   </section>
// </main>