import React, {useState} from "react";

const Table = () => {
    const [cells, setCells] = useState([[1,0,0],[0,1,0],[0,0,1]]);

    return <>
        <table>
            <tbody>
            {cells.map((row, index) => (
                    <tr key={`tr-${index}`}>
                        {row.map((value, index) => (
                                <td
                                    key={`td-${index}`}
                                >
                                    {value}
                                </td>
                            )
                        )}
                    </tr>
                )
            )}
            </tbody>
        </table>
    </>
};

export default Table;