import React from 'react';
import './ExerciseDetail.css'

function ExerciseDetail(props) {
const {exercise} = props
console.log(exercise)

  return (
    <>
        <div className="workout-detail-container">
          <div className='workout-detail-box'>
              <div className="workout-image">
                  <img src={exercise.gifUrl} alt="Descripción de la imagen" />
              </div>
              <div className="workout-text">
                <h1>{exercise.name}</h1>
                <p> Body part: <span>{exercise.bodyPart} </span></p>
                <p> Target: <span>{exercise.target}</span></p>
                <p> Equipment: <span>{exercise.equipment}</span></p>
                <p> Secondary muscles: <span>{exercise.secondaryMuscles}</span></p>
                <p> Instructions: </p>
                {exercise.instructions.map((ins, index) => (
                  <div className='instruction' key={index}><span>{ins}</span></div>
                ))}
            </div>
          </div>
    </div>
    </>
  )
}
export default ExerciseDetail