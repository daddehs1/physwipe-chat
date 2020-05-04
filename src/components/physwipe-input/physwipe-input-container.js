import React, {useState, useEffect, useCallback} from 'react';
import getWordOptions from './getWordOptions'

import PhyswipeInputView from './physwipe-input-view'

const PhyswipeInputContainer = props => {
  // PROPS
  const {handleSubmit, isDisabled} = props;
  // STATE, REDUCER, REFS
  const [input, setInput] = useState("");
  const [previousInput, setPreviousInput] = useState("");
  const [buffer, setBuffer] = useState("");
  const [flushBuffer, setFlushBuffer] = useState(false);
  const [bufferTimeout, setBufferTimeout] = useState();
  const [metaLock, setMetaLock] = useState(false);
  const [mode, setMode] = useState("waiting");

  const [alternativeWords, setAlternativeWords] = useState([]);
  const [focusedAltIndex, setFocusedAltIndex] = useState(0);

  // CALLBACKS, MEMOS
  const pushCurrentBufferToInput = useCallback(() => {
    const options = getWordOptions(buffer.toLowerCase());
    setBuffer("");
    setPreviousInput(input);
    setInput(input + options[0] + " ");
    setAlternativeWords(options.slice(1, options.length))
    setMode("selecting");
    setFocusedAltIndex(0);
  }, [buffer, input])

  const commitInput = (inputToCommit) => {
    setInput(inputToCommit);
    setMode('waiting');
    setAlternativeWords([]);
  }

  const addCharToBuffer = char => {
    setBuffer(buffer + char);
    // reset bufferTimer
    clearTimeout(bufferTimeout);
    setBufferTimeout(setTimeout(() => {
      setFlushBuffer(true)
    }, 300));
  }

  const navigateSelect = direction => {
    let nextFocusedAltIndex;
    if (direction === 'right') {
      nextFocusedAltIndex = focusedAltIndex === alternativeWords.length - 1
        ? 0
        : focusedAltIndex + 1;
    } else {
      nextFocusedAltIndex = focusedAltIndex === 0
        ? alternativeWords.length - 1
        : focusedAltIndex - 1;
    }
    setInput(previousInput + alternativeWords[nextFocusedAltIndex] + " ");
    setFocusedAltIndex(nextFocusedAltIndex);
  }

  const handleSubmitInput = () => {
    if (mode !== 'buffering') {
      handleSubmit(input);
      setMode("waiting");
      setInput("");
    }
  }

  const handleKeyDown = event => {
    let key = event.key;
    const keyIsCharacter = key.length === 1 && key.match(/^[a-zA-Z]+$/);
    if (keyIsCharacter && !metaLock) {
      setMode("buffering");
      // avoid adding duplicate keys
      if (!(buffer.length && buffer[buffer.length - 1] === key)) {
        addCharToBuffer(key);
      } else {
        event.preventDefault();
      }
    } else if (key === "Meta") {
      setMetaLock(true);
    } else if (key === "Enter") {
      handleSubmitInput();
    }

    if (mode === "selecting") {
      let shouldPreventDefault = true;
      if (key === "ArrowRight") {
        navigateSelect('right');
      } else if (key === "ArrowLeft") {
        navigateSelect('left');
      } else if (key === "Backspace") {
        commitInput(previousInput);
      } else if (key === "1" || key === "2" || key === "3") {
        commitInput(previousInput + alternativeWords[key - 1] + " ");
      } else if (key === "ArrowUp") {
        commitInput(previousInput + alternativeWords[focusedAltIndex] + " ");
      } else if (key === " ") {
        commitInput(input);
      } else {
        shouldPreventDefault = false;
      }
      if (shouldPreventDefault) {
        event.preventDefault();
      }
    }
  }

  const handleKeyUp = event => {
    if (event.key === "Meta") {
      setMetaLock(false);
    }
  }

  const handleChange = event => {
    if (mode === "waiting") {
      setInput(event.target.value);
    }
  }

  const handleBlur = () => {
    commitInput(input);
  }

  const handleClick = () => {
    commitInput(input);
  }

  // EFFECTS

  useEffect(() => {
    if (flushBuffer) {
      pushCurrentBufferToInput();
      setFlushBuffer(false);
    }
  }, [flushBuffer, pushCurrentBufferToInput]);

  // VIEW PROPS
  const viewProps = {
    hideCursor: mode === 'buffering',
    showSelector: mode === 'selecting',
    buffer,
    input,
    focusedAltIndex,
    alternativeWords,
    handleKeyDown,
    handleKeyUp,
    handleChange,
    handleBlur,
    handleClick,
    handleSubmitInput,
    isDisabled
  };
  return <PhyswipeInputView {...viewProps}/>
}

export default PhyswipeInputContainer;
