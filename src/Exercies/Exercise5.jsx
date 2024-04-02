export function CourseGoal({title,description}) {
    return (
      <li>
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    );
  }
  export const COURSE_GOAL=[
      {
          title: "Learn React",
          description: "In-depth",
      },
      {
          title:"PRACTICE",
          description:"Practice working with React components etc"
      }]
  function App() {
    return (
      <div id="app" data-testid="app">
        <h1>Time to Practice</h1>
        <p>One course, many goals! 🎯</p>
        <ul>
        <CourseGoal {...COURSE_GOAL[0]}/>
        <CourseGoal {...COURSE_GOAL[1]}/>
          {/* OUTPUT AT LEAST TWO CourseGoal components here */}
          {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
        </ul>
      </div>
    );
  }
  
  export default App;