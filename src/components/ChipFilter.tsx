import { SetStateAction, Dispatch } from 'react';
import '../App.css';
import '../style.css';
import { Link } from 'react-router-dom';
import { FilterItem } from './FilterItem';


function ChipFilter(props: {
  activeFilter: number, 
  setActiveFilter: Dispatch<SetStateAction<number>>,
}) {

  
  return (
    <div className='filter'>
        <Link to="/" onClick={() => props.setActiveFilter(1)} style={{textDecoration: 'none'}}>
            <FilterItem isSelected={props.activeFilter === 1 } name='All' />
        </Link>  
        <Link to="/App" onClick={() => props.setActiveFilter(2)} style={{textDecoration: 'none'}}>
            <FilterItem isSelected={props.activeFilter === 2 } name='App' />
        </Link>
        <Link to="/Web" onClick={() => props.setActiveFilter(3)} style={{textDecoration: 'none'}}>
            <FilterItem isSelected={props.activeFilter === 3 } name='Web' />
        </Link> 
        <Link to="/2024" onClick={() => props.setActiveFilter(4)} style={{textDecoration: 'none'}}>
            <FilterItem isSelected={props.activeFilter === 4 } name='2024' />
        </Link> 
        <Link to="/2023" onClick={() => props.setActiveFilter(5)} style={{textDecoration: 'none'}}>
            <FilterItem isSelected={props.activeFilter === 5 } name='2023' />
        </Link> 
        <Link to="/2022" onClick={() => props.setActiveFilter(6)} style={{textDecoration: 'none'}}>
            <FilterItem isSelected={props.activeFilter === 6 } name='2022' />
        </Link> 
        <Link to="/2021" onClick={() => props.setActiveFilter(7)} style={{textDecoration: 'none'}}>
            <FilterItem isSelected={props.activeFilter === 7 } name='2021~' />
        </Link> 
    </div>
  );
}

export default ChipFilter;

