import React from 'react'
import './progressBar.css'

const ProgressBar = ({ items, width, height }) => {

  const count = (arr) => {
    let sum = 0;
    arr.map(item => sum += item.value);
    return sum
  }

  const total = count(items);

  const circleWidth = 8;
  const spaceWidth = 2;
  const circleHeight = height / 3;

  const getCircles = items => {
    let content = [];
    items.map(item => {

      const fracValueToTotal = item.value / total;
      const thisItemCirclesWidth = Math.ceil(width / (circleWidth + spaceWidth) * fracValueToTotal);

      for (let i = 0; i < thisItemCirclesWidth; ++i) {
        content.push(
          <div style={{ background: item.color, borderRadius: '5px', width: circleWidth, height: circleHeight }}></div>
        )
      }

    })
    return content;
  };

  return (
    <div className='in-colomn'
      style={{ width: width, height: height }}>

      <div className='inline'>
        {getCircles(items)}
      </div>

      <div className='inline legend'>
        {items.map(item => {
          return <div className='inline'>
            <div style={{ background: item.color, borderRadius: circleHeight / 2, width: circleHeight, height: circleHeight }}></div>
            {' ' + item.name}:
            {' ' + item.value + ' '}
            ({(item.value / total * 100).toFixed(2)}%)
          </div>
        })}
      </div>
    </div>


  )
}

export default ProgressBar
