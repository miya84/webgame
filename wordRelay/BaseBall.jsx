
const React = require('react');
const { Component } = require('react');

function getNumbers(){ // 숫자 4개 랜덤 생성 (겹치지 않고)
    
}

class BaseBall extends Component {
    state = {
        value:'',
        result:' ',
        answer: getNumbers(),
        tries: []
    };

    onSubmit = (e) => {
        this.setState({
            value:e.target.value,
        })
    }

    onChange = (e) => {}

    input;
    onRef = (c) => {
        this.input = c;
    }
    
    render() {
        return (
            <>
            <h1>숫자 야구 게임</h1>
            <div>{this.state.result}</div>
            <form onSubmit={this.onSubmit}>
                <input ref={this.onRef} onChange={this.onChange} />
                <button>입력!</button>
            </form>
            <div>시도: {this.state.tries.length}</div>
            <ul>
                {this.state.tries.map( (v) => {
                    return (
                        <li>v</li>
                    )
                })}
            </ul>
            </>
        )
    }
}

module.exports = BaseBall;