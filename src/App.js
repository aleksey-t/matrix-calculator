import './App.css';
import Table from "./components/Table";
import {useState} from "react";
import {FRACTION_MODE, MATRIX_MODE, ALGEBRAIC_ACTIONS_MODE} from "./utils/constants";

function App() {
    const [mode, setMode] = useState(MATRIX_MODE);
    const [matricesIDs, setMatricesIDs] = useState([]);

    const chooseMode = (mode) => {
        return () => {
            setMode(mode);
        }
    };

    const getNextId = () => {
        const len = matricesIDs.length;
        let lastId = 0;

        if (len > 0) {
            lastId = matricesIDs[len - 1];
        }

        return lastId + 1;
    };

    // todo сделать абсолютное позиционирование для матриц
    // перетаскивание?

    const handleWorkingFieldClick = () => {

        if (mode === MATRIX_MODE) {
            setMatricesIDs([...matricesIDs, getNextId()]);
        }
    };

    return (
        <div className="app">
            <h1>Калькулятор матриц</h1>
            <div className="flex-container">
                <div className="sidebar">
                    <button onClick={chooseMode(MATRIX_MODE)}
                            className={`${mode === MATRIX_MODE ? 'active' : ''}`}>Матрицы
                    </button>
                    <button onClick={chooseMode(FRACTION_MODE)}
                            className={`${mode === FRACTION_MODE ? 'active' : ''}`}>Дроби
                    </button>
                    <button onClick={chooseMode(ALGEBRAIC_ACTIONS_MODE)}
                            className={`${mode === ALGEBRAIC_ACTIONS_MODE ? 'active' : ''}`}>Действия
                    </button>
                </div>
                <div className="working-field" onClick={handleWorkingFieldClick}>
                    {matricesIDs.map(id => <Table id={id}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
