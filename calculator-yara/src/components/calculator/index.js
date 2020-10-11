import React, { useState } from "react";
import "./index.css";

const Calculator = () => {
    const [totalOperations, setTotalOperations] = useState(0)
    const [operator, setOperator] = useState("+")
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [output, setOutput] = useState("")

    function onSubmit(type) {
        if (value1 === "" || value2 === "") {
            return
        }

        if (type === "addition") {
            setOutput(parseFloat(value1) + parseFloat(value2))
        }
        else if (type === "subtract") {
            setOutput(parseFloat(value1) - parseFloat(value2))
        }
        else if (type === "multiply") {
            setOutput(parseFloat(value1) * parseFloat(value2))
        }
        else if (type === "divide") {
            setOutput(parseFloat(value1) / parseFloat(value2))
        }

        setTotalOperations(totalOperations+1)
    }

    function onReset() {
        setValue1("")
        setValue2("")
        setOutput("")
        setTotalOperations(0)
    }

    return <div className="layout-column align-items-center">
        <div data-testid="total-operations" className="pt-50 total-operations">{`Total operations performed: ${totalOperations}`}</div>
        <div className="card">
            <section className="card-text">
                <div className="layout-row justify-content-around align-items-center mt-40">
                    <input
                        type="number"
                        className="ml-3 mr-3"
                        data-testid="app-input1"
                        autoComplete="off"
                        placeholder="Eg: 1"
                        name="input1"
                        value={value1}
                        onChange={(event) => {
                            setValue1(event.target.value)
                        }}
                    />
                    <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{operator}</label>
                    <input
                        type="number"
                        data-testid="app-input2"
                        autoComplete="off"
                        className="ml-3 mr-3"
                        placeholder="Eg: 2"
                        value={value2}
                        onChange={(event) => {
                            setValue2(event.target.value)
                        }}
                    />
                </div>

                <div className="layout-row justify-content-around mt-30">
                    <button
                        className="operationFont"
                        type="submit"
                        data-testid="addButton"
                        onClick={() => {
                            onSubmit("addition")
                        }}
                    >
                        +
                    </button>
                    <button
                        className="operationFont"
                        type="submit"
                        data-testid="subtractButton"
                        onClick={() => {
                            onSubmit("subtract")
                        }}
                    >-</button>
                    <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={() => {
                        onSubmit("multiply")
                    }}
                    >*</button>
                    <button className="operationFont" type="submit" data-testid="divideButton" onClick={() => {
                        onSubmit("divide")
                    }}>/</button>
                </div>

                <div className="layout-row justify-content-between align-items-center mt-30">
                    <button type="reset" data-testid="resetButton" className="outline danger" onClick={() => {
                        onReset()
                    }}
                    >Reset</button>
                    <div className="layout-row justify-content-center align-items-center result-container">
                        <div data-testid="result" className="result-value ma-0 slide-up-fade-in">{output}</div>
                    </div>
                </div>
            </section>

        </div>
    </div>
}

export default Calculator