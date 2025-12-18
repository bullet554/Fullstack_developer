import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount
} from './store';

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div className='counter'>
            <h1>Счётчик: {count}</h1>
            <button
                onClick={() => dispatch(increment())}
                className='counter__btn-up'
            >
                Увеличить
            </button>
            <button
                onClick={() => dispatch(decrement())}
                className='counter__btn-down'
            >
                Уменьшить
            </button>
            <button
                onClick={() => dispatch(incrementByAmount(5))}
                className='counter__btn-up'
            >
                + 5
            </button>
            <button
                onClick={() => dispatch(decrementByAmount(5))}
                className='counter__btn-down'
            >
                - 5
            </button>
        </div>
    );
}

export default Counter;