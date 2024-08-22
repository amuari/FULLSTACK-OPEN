import Content from './components/Content'
import Header from './components/Header'
import Total from './components/Total'

const App = () => {
  return (
    <div>
      <Header course='Half Stack application development' />
      <Content parts='Fundamentals of React' exercises='10' />
      <Content parts='Using props to pass data' exercises='7' />
      <Content parts='State of a component' exercises='14' />
      <Total />
    </div>
  )
}

export default App
