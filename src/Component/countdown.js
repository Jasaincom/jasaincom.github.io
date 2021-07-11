import React from 'react'
import './countdown.css'

const countdown = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {

  return (
    <>
      <section className='timer-container'>
        <section className='timer'>
          <div className='clock'>
            <section>
              <p>{timerDays}</p>
              <small>Days</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <small>Hours</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>      
    </>
  )
};

countdown.defaultProps={
  timerDays: 0,
  timerHours: 0,
  timerMinutes: 0,
  timerSeconds: 0
}

export default countdown
