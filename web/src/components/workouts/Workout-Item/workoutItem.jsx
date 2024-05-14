import React from 'react'
import { Link } from 'react-router-dom'
import './workoutItem.css'
import { useContext, useState } from 'react'
import AuthContext from '../../../contexts/auth.context'
import DropBtns from '../../UI/dropBtns/DropBtns'
import FiresInputView from '../FiresInput/fireInputView'


function WorkoutItem(props) {
    const {workout, onSelectWorkout, hideBtns} = props
    const {user} = useContext(AuthContext)
    const uniqueEquipment = workout.exercises?.reduce((unique, ex) => {
      ex.equipment.forEach((eq) => {
        if (!unique.includes(eq)) {
          unique.push(eq);
        }
      });
      return unique;
    }, []);
    
    const equipmentString = uniqueEquipment?.join(', ');

  return (
    <div className='workout-item'>

            <DropBtns workout={workout} onSelectWorkout hideBtns={hideBtns}/>
            <div className="workout-image">
                <img src={workout.image}></img>
            </div>
            <div className="workout-text">
                <h1>{workout.title}</h1>

                {workout.description?.length > 400 && !hideBtns && (
                    <p>{workout.description.slice(0, 400)}... <Link className='seemore' to={`/workout/${workout._id}`}>
                    see more
                </Link></p> 
                    
                )}
                {workout.description?.length < 400 && !hideBtns && (
                  <p>{workout.description}</p>
                )}

                <div className={`workout-text2 ${hideBtns ? 'hide-btns-page' : ''}`}>
                  <div className={`separator workout-text-div`}>
                    <div className="wo-detail">
                      <strong>Created by:</strong><p className='workout-p'> {workout.ownername}</p>
                    </div>
                    <div className="wo-detail">
                      <strong>Exercises:</strong><p className='workout-p'> {workout.exercises?.length}</p>
                    </div>
                    <div className="wo-detail">
                      <strong>Sets:</strong><p className='workout-p'> {workout.exercises?.reduce((total, exercise) => total + exercise.work.sets, 0)}</p>
                    </div>
                    <div className="wo-detail">
                      <strong>Equipment:</strong><p className='workout-p'>{equipmentString}</p>
                    </div>
                  </div>
                  
                <div className={`workout-text-div d-flex flex-column justify-content-center `}>

                    
                  <div className="wo-detail fires-det">
                      <strong>Difficult:</strong> <FiresInputView selectedDiff={workout.difficult}></FiresInputView>
                    </div>
                  <div className='wo-social-details'>
                      <div className="wo-detail-social">
                        <strong><i className="fa-regular fa-heart"></i></strong><p className='workout-p'>25</p>
                      </div>
                      <div className="wo-detail-social">
                        <strong><i className="fa-regular fa-message"></i></strong><p className='workout-p'>63</p>
                      </div>
                      <div className="wo-detail-social">
                        <strong><i className="fa-regular fa-circle-check"></i></strong><p className='workout-p'>122</p>
                      </div>
                    </div>
                  
                  </div>
                </div>
            </div>
    </div>
  )
}

export default WorkoutItem