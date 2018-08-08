import React, { Component } from 'react';
import './AutocompleteSuggestions.css'

class AutocompleteSuggestions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            words: ['hello', 'apples', 'oranges', 'orangutan', 'apart', 'story', 'building', 'town', 'city', 'citation', 'kids', 'kidding', 'kettle', 'pan', 'pot', 'frying pan', 'new words', 'even add in large sentences', 'apple juice', 'applesauce', 'orange juice', 'strawberry', 'apple pie', 'bats', 'baseball', 'bounce', 'bartender', 'cat', 'call-center', 'dog', 'dangerous', 'dig', 'dungeon', 'elephant', 'eve', 'end of the line', 'enter', 'Frank', 'fella', 'fellow', 'farther', 'further', 'goodness', 'great', 'gorgeous', 'gargantuan', 'hope', 'head', 'intersection', 'interesting', 'in too deep', 'in the thick of things', 'define', 'definition', 'jello', 'jack and the beanstalk', 'jar', 'jumping', 'jump rope', 'kitchen', 'large', 'look at that!', 'legos', 'lego-set', 'let my people go', 'mother', 'mom', 'majesty', 'newstand', 'never say never', 'open', 'oh my goodness', 'over the hill', 'other side of the fence', 'pardon me', 'people', 'purple', 'plums', 'prune juice and it\'s side effects', 'queue', 'quit smoking today', 'quell the uprising', 'rising tide', 'run uphill both ways', 'red', 'ripe fruit', 'steal', 'stake', 'steak', 'suprise', 'sell', 'sales', 'sir robert', 'tuscany', 'tell no one', 'tall tales', 'tree', 'uprising', 'up', 'under', 'umbrella', 'velocity', 'velociraptor', 'veluptuous', 'velcro', 'visible', 'water', 'waterslide', 'whip it', 'walk the dog', 'well well, look who it is', 'wesley', 'victor', 'xray', 'x-men', 'xylophone', 'yellow', 'zip', 'zilch', 'zesty', 'yard', 'yell out loud', 'yip', 'yap', 'zoo', 'zero', 'retch', 'reeling from the pain', 'real food', 'rest easy my friend', 'stopwatch', 'alarmclock', 'steps to the sky', 'stairway to heaven', 'speaker', 'primary suspect', 'suspect', 'autocomplete'],
            userInput: '',
            matches: [],
            rowHighlighted: -1,
        }

    }

    handleUserInput(e) {
        let input = e.target.value;
        let { words } = this.state;
        let matches = [];

        if (input) {
            for (let i = 0; i < words.length; i++) {
                if (words[i].startsWith(input) && matches.length < 10) {
                    matches.push(words[i])
                }
            }
        }

        this.setState({
            userInput: input,
            matches: matches
        })
    }

    selectAutocomplete(i) {
        this.setState({
            userInput: this.state.matches[i],
            matches: []
        })
    }

    handleKeyPress(e) {
        let { rowHighlighted } = this.state;
        if (e.key === 'ArrowUp' && rowHighlighted > -1) {
            rowHighlighted--;
        }
        if (e.key === 'ArrowDown' && rowHighlighted < this.state.matches.length - 1) {
            rowHighlighted++;
        }
        if (e.key === 'Enter') {
            return this.selectAutocomplete(rowHighlighted);
        }

        this.setState({ rowHighlighted });
    }

    setRowHighlighted(i) {
        this.setState({
            rowHighlighted: i
        })
    }

    render() {
        return (
            <section className='sectionWrapper'>

                <p className='sectionHeader'>Autocomplete Suggestion</p>  

                <div className='search_box'>
                    <div className='search_bar'>
                        <input value={this.state.userInput} onChange={(e) => this.handleUserInput(e)} onKeyDown={(e) => this.handleKeyPress(e)} />
                        <div className='autocomplete_suggestions'>
                            {
                                this.state.matches.map((item, i) => {
                                    let background = this.state.rowHighlighted === i ? '#ccc' : '#fff';
                                    return <p key={i} className='autocomplete_suggestions_item'
                                        onClick={() => this.selectAutocomplete(i)} style={{ background: background }}
                                        onMouseOver={() => this.setRowHighlighted(i)} >{item}</p>
                                })
                            }
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default AutocompleteSuggestions;