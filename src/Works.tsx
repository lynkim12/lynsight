import React from 'react';
import Navigator from './Navigation';
import Content from './workContent';

function Works() {
    return (
      <>
      <Navigator/>
      <div className='contentslist'>
        <div className='contents'>
            <Content/>
            <Content/>
            <Content/>
        </div>
        <div className='contents'>
            <Content/>
            <Content/>
            <Content/>
        </div>
        <div className='contents'>
            <Content/>
            <Content/>
            <Content/>
        </div>
      </div>
      </>
    )
}

export default Works;
